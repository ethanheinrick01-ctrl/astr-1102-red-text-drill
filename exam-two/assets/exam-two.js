/* Exam 2 owns new runs; legacy Exam 1 keys, item versions, and engine stay intact. */
(() => {
  'use strict';
  const data = window.ASTR1102_EXAM2;
  if (!data) return;
  const KEYS = {
    practice: 'astr1102-exam2-practice-v1',
    simulator: 'astr1102-exam2-simulator-attempts-v1',
    guided: 'astr1102-guided-progress-v1',
    scores: 'astr1102-study-lab-progress-v1'
  };
  const clone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const now = () => new Date().toISOString();
  const uid = () => `${Date.now()}-${crypto.getRandomValues(new Uint32Array(1))[0].toString(36)}`;
  const type = q => q.responseType || q.type;
  const confidences = new Set(['low', 'medium', 'high']);
  const itemMap = new Map(data.questions.map(q => [q.id, q]));
  const shuffle = (list, rng = Math.random) => {
    const result = [...list];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  function seeded(seed) {
    let s = seed >>> 0;
    return () => {
      s += 0x6D2B79F5;
      let t = Math.imul(s ^ s >>> 15, s | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function snapshot(q, rng = Math.random) {
    const copy = clone(q);
    copy.instanceId = uid();
    copy.contentVersion = data.version;
    if (data.revision) copy.contentRevision = data.revision;
    copy.choiceOrder = shuffle(q.choices.map((_, i) => i), rng);
    copy.rowOrder = q.rows ? shuffle(q.rows.map((_, i) => i), rng) : null;
    if (type(q) === 'order' && copy.choiceOrder.every((v, i) => v === q.answer[i])) {
      [copy.choiceOrder[0], copy.choiceOrder[1]] = [copy.choiceOrder[1], copy.choiceOrder[0]];
    }
    return copy;
  }
  function form(seed, selection = {}) {
    const rng = seeded(seed);
    if(selection.formId){
      const authored=window.ASTR1102_MOCK_FORMS?.find(f=>f.id===selection.formId);
      if(!authored || authored.itemIds.length!==25 || new Set(authored.itemIds).size!==25)throw Error('This mock form is unavailable. Earlier saved attempts remain intact.');
      const items=authored.itemIds.map(id=>itemMap.get(id));
      if(items.some(q=>!q || q.mockEligible===false))throw Error('This form contains an unavailable original question.');
      return items.map(q=>snapshot(q,rng));
    }
    const pool = poolFor(selection).filter(q => q.mockEligible !== false);
    const mc = pool.filter(q => type(q) === 'single');
    const picked = [];
    // Two image-supported MCs plus the target give representation practice.
    const visuals = shuffle(mc.filter(q => q.media), rng);
    picked.push(...visuals.slice(0, 2));
    for (const moduleId of shuffle([...new Set(mc.map(q => q.moduleId))], rng)) {
      let count = picked.filter(q => q.moduleId === moduleId).length;
      for (const q of shuffle(mc.filter(q => q.moduleId === moduleId && !picked.includes(q)), rng)) {
        if (count >= 1 || picked.length >= data.blueprint.single) break;
        picked.push(q); count++;
      }
    }
    for (const q of shuffle(mc.filter(q => !picked.includes(q)), rng)) {
      if (picked.length === data.blueprint.single) break;
      picked.push(q);
    }
    for (const kind of ['true-false', 'match', 'order', 'target']) {
      const q = shuffle(pool.filter(q => type(q) === kind), rng)[0];
      if (!q) throw Error(`Missing ${kind} practice pool.`);
      picked.push(q);
    }
    if (picked.length !== 25) throw Error('The complete practice form cannot be generated.');
    return shuffle(picked, rng).map(q => snapshot(q, rng));
  }
  function ready(q, value) {
    if (['match', 'order'].includes(type(q))) {
      const count = type(q) === 'match' ? q.rows.length : q.choices.length;
      if (!Array.isArray(value) || value.length !== count || !value.every(v => Number.isInteger(v) && v >= 0 && v < q.choices.length)) return false;
      return new Set(value).size === count;
    }
    return Number.isInteger(value) && value >= 0 && value < q.choices.length;
  }
  const correct = (q, value) => ready(q, value) && (Array.isArray(q.answer)
    ? q.answer.every((v, i) => value[i] === v) : value === q.answer);
  function answerText(q, value) {
    if (!ready(q, value)) return 'Unanswered';
    if (type(q) === 'match') return q.rows.map((r, i) => `${r.label}: ${q.choices[value[i]]}`).join(' • ');
    if (type(q) === 'order') return value.map(i => q.choices[i]).join(' → ');
    return q.choices[value];
  }
  function mergeRuns(left, right) {
    const map = new Map(left.map(r => [r.id, clone(r)]));
    for (const incoming of right) {
      if (!map.has(incoming.id)) { map.set(incoming.id, clone(incoming)); continue; }
      const old = map.get(incoming.id);
      const latest = String(incoming.updatedAt || '') >= String(old.updatedAt || '') ? incoming : old;
      const merged = {...old, ...clone(latest), answers: {...old.answers}, corrections: {...old.corrections}};
      // Preserve the first checked record even if another tab submits a later version.
      for (const [id, a] of Object.entries(incoming.answers || {})) {
        if (!merged.answers[id] || a.checkedAt < merged.answers[id].checkedAt) merged.answers[id] = clone(a);
      }
      const snapshots = new Map(old.questions.map(q => [q.instanceId, q]));
      merged.questions = latest.questions.map(q => snapshots.get(q.instanceId) || clone(q));
      for (const [id, attempts] of Object.entries(incoming.corrections || {})) {
        const events = new Map((merged.corrections[id] || []).map(a => [a.id, a]));
        attempts.forEach(a => { if (!events.has(a.id)) events.set(a.id, clone(a)); });
        merged.corrections[id] = [...events.values()].sort((a, b) => a.checkedAt.localeCompare(b.checkedAt));
      }
      merged.drafts = {...old.drafts}; merged.confidence = {...old.confidence}; merged.draftTimes = {...old.draftTimes};
      for (const id of Object.keys(incoming.draftTimes || {})) {
        if ((incoming.draftTimes[id] || '') >= (old.draftTimes?.[id] || '')) {
          merged.drafts[id] = clone(incoming.drafts[id] ?? null);
          if (incoming.confidence[id]) merged.confidence[id] = incoming.confidence[id]; else delete merged.confidence[id];
          merged.draftTimes[id] = incoming.draftTimes[id];
        }
      }
      if (old.correctionDrafts || incoming.correctionDrafts) {
        merged.correctionDrafts = clone(old.correctionDrafts || {});
        for (const [id, draft] of Object.entries(incoming.correctionDrafts || {})) {
          if (!merged.correctionDrafts[id] || draft.updatedAt >= merged.correctionDrafts[id].updatedAt) merged.correctionDrafts[id] = clone(draft);
        }
      }
      if (old.finishedAt || incoming.finishedAt) merged.finishedAt = old.finishedAt || incoming.finishedAt;
      if (old.submittedAt || incoming.submittedAt) merged.submittedAt = old.submittedAt || incoming.submittedAt;
      map.set(incoming.id, merged);
    }
    return [...map.values()].sort((a, b) => String(a.startedAt).localeCompare(String(b.startedAt)));
  }
  function mastery(events) {
    const states = {};
    const sorted = [...events].sort((a, b) => a.checkedAt.localeCompare(b.checkedAt));
    for (const e of sorted) {
      const s = states[e.conceptId] || {attempts:0, correct:0, streak:0, streakRoots:[], mastered:false, needsReview:false, misconception:false, history:[]};
      s.attempts++; s.lastConfidence = e.confidence; s.lastAttemptAt = e.checkedAt;
      if (e.correct) {
        s.correct++; s.streak++; s.streakRoots.push(e.rootId);
        s.mastered = s.streak >= 2 && new Set(s.streakRoots.slice(-2)).size >= 2 && e.confidence !== 'low';
        s.needsReview = e.confidence === 'low';
        if (s.mastered) {s.needsReview = false; s.misconception = false;}
      } else {
        s.streak = 0; s.streakRoots = []; s.mastered = false; s.needsReview = true;
        if (e.confidence === 'high') s.misconception = true;
      }
      s.history.push(clone(e)); states[e.conceptId] = s;
    }
    return states;
  }
  function schedule(run, q, distance, pool = data.questions) {
    const root = q.rootId || q.id;
    const repeats = run.repeatCounts[root] || 0;
    const destination = run.index + distance + 1;
      const bridgePool = shuffle(pool.filter(p => p.id !== root));
    let cursor = 0;
    while (run.questions.length < destination && bridgePool.length) {
      const bridge = snapshot(bridgePool[cursor++ % bridgePool.length]); bridge.bridge = true;
      run.questions.push(bridge);
    }
    const repeat = snapshot(q); repeat.repeat = true;
    run.questions.splice(Math.min(destination, run.questions.length), 0, repeat);
    run.repeatCounts[root] = repeats + 1;
  }

  let host, leave, mode, key, db, run = null, problem = '';
  let correction = null;
  let unsaved = false;
  function read(keyName) {
    const raw = (window.StudyStorage || localStorage).getItem(keyName);
    if (!raw) return {schemaVersion:1, runs:[]};
    const parsed = JSON.parse(raw);
    if (parsed.schemaVersion !== 1 || !Array.isArray(parsed.runs)) throw Error(`Saved ${keyName} data has an unsupported format. Export a backup before repairing it.`);
    for (const r of parsed.runs) if (!r.id || !Array.isArray(r.questions) || !r.answers || !r.drafts || !r.confidence) throw Error('A saved run is incomplete. Its bytes have not been overwritten.');
    return parsed;
  }
  function error(message) {
    problem = message;
    host?.querySelector('[data-e2-status]')?.replaceChildren(document.createTextNode(message));
  }
  function save() {
    try {
      const current = read(key);
      if (run) run.updatedAt = now();
      db.runs = mergeRuns(current.runs, db.runs);
      if (run) run = db.runs.find(r => r.id === run.id) || run;
      (window.StudyStorage || localStorage).setItem(key, JSON.stringify(db)); problem = ''; unsaved = false;
      host?.querySelector('[data-e2-status]')?.replaceChildren(document.createTextNode('Saved in this browser · drafts and feedback resume after reopening.'));
      return true;
    } catch (e) {unsaved = true; error(`Progress could not be saved: ${e.message} Keep this tab open and export your data before leaving this activity.`); return false;}
  }
  function updateMastery() {
    try {
      const all = [...read(KEYS.practice).runs, ...read(KEYS.simulator).runs];
      const events = [];
      all.forEach(r => r.questions.forEach(q => {
        const a = r.answers[q.instanceId];
        if (a && a.value !== null && confidences.has(a.confidence) && ready(q, a.value)) {
          events.push({id:`${r.id}/${q.instanceId}`, rootId:q.rootId || q.id, conceptId:q.conceptId, correct:correct(q, a.value), confidence:a.confidence, checkedAt:a.checkedAt, runId:r.id});
        }
      }));
      const raw = (window.StudyStorage || localStorage).getItem(KEYS.guided);
      const progress = raw ? JSON.parse(raw) : {concepts:{}, modules:{}};
      if (!progress || typeof progress !== 'object' || Array.isArray(progress)) throw Error('Existing mastery data is invalid.');
      progress.concepts ||= {}; progress.modules ||= {};
      const states = mastery(events);
      for (const [id, state] of Object.entries(states)) progress.concepts[id] = {...progress.concepts[id], ...state};
      all.filter(r => r.mode === 'topic' && r.finishedAt && r.initialIds.every(id => r.answers[id])).forEach(r => {
        progress.modules[r.moduleId] = {...progress.modules[r.moduleId], completed:true, startedAt:progress.modules[r.moduleId]?.startedAt || r.startedAt, completedAt:r.finishedAt};
      });
      (window.StudyStorage || localStorage).setItem(KEYS.guided, JSON.stringify(progress));
      window.dispatchEvent(new Event('astr-progress-changed'));
    } catch (e) {error(`The attempt is saved, but mastery could not be updated: ${e.message}`);}
  }
  const button = (label, action, style='ghost', attrs={}) => {
    const el = document.createElement('button'); el.type = 'button'; el.className = `button ${style}`; el.textContent = label;
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
    el.addEventListener('click', action); return el;
  };
  function shell(title, label='Exam 2') {
    host.classList.remove('e2-session');
    host.innerHTML = `<div class="e2-toolbar"><button type="button" class="button ghost" data-e2-exit>${mode.origin === 'focus' ? '← Exam focus' : '← Practice'}</button><span class="pill">${esc(label)}</span></div><article class="e2-card"><h2 tabindex="-1">${esc(title)}</h2><div data-e2-body></div></article><p class="e2-storage" data-e2-status role="status">${esc(problem)}</p>`;
    host.querySelector('[data-e2-exit]').onclick = () => {if (run) save(); run = null; correction = null; leave();};
    return host.querySelector('[data-e2-body]');
  }
  function poolFor(options = {}) {
    let pool = options.kind === 'boss' ? data.bossIds.map(id => itemMap.get(id)) : data.questions.slice();
    if (options.moduleId) pool = pool.filter(q => q.moduleId === options.moduleId);
    if (options.conceptId) pool = pool.filter(q => q.conceptId === options.conceptId);
    if (Array.isArray(options.conceptIds)) pool = pool.filter(q => options.conceptIds.includes(q.conceptId));
    if (Array.isArray(options.itemIds)) pool = pool.filter(q => options.itemIds.includes(q.id));
    if (options.mcOnly) pool = pool.filter(q => type(q) === 'single');
    return pool;
  }
  function selectItems(options = {}, rng = Math.random) {
    const pool = poolFor(options);
    const n = Math.min(pool.length, Number.isInteger(options.count) && options.count > 0 ? options.count : pool.length);
    const picked = shuffle(pool, rng).slice(0, n);
    if (options.mcFirst) picked.sort((a,b) => Number(type(a) !== 'single') - Number(type(b) !== 'single'));
    return picked;
  }
  function newRun() {
    const seed = crypto.getRandomValues(new Uint32Array(1))[0];
    let questions;
    if (mode.kind === 'simulator') questions = form(seed, mode);
    else {
      questions = selectItems(mode).map(q => snapshot(q));
    }
    if (!questions.length) return error('This topic has no verified original practice yet.');
    const minutes = mode.kind === 'simulator' ? Number(host.querySelector('[data-e2-timer]').value) : 0;
    run = {id:`exam-two-${mode.kind}-${uid()}`, examId:'exam-two', mode:mode.kind, title:mode.title, moduleId:mode.moduleId || null, conceptFilter:mode.conceptId || null, contentVersion:data.version, seed, startedAt:now(), updatedAt:now(), deadline:minutes ? Date.now()+minutes*60000 : null, questions, initialIds:questions.map(q => q.instanceId), index:0, drafts:{}, draftTimes:{}, answers:{}, confidence:{}, flags:{}, corrections:{}, repeatCounts:{}};
    run.selection = {moduleId:mode.moduleId || null, conceptId:mode.conceptId || null, conceptIds:mode.conceptIds || null, itemIds:mode.itemIds || null, mcOnly:Boolean(mode.mcOnly), mcFirst:Boolean(mode.mcFirst), count:mode.count || null};
    if (mode.origin === 'focus') Object.assign(run.selection, {origin:'focus', focusId:mode.focusId || null});
    if(mode.formId) run.selection.formId=mode.formId;
    run.selectionKey = JSON.stringify(run.selection);
    db.runs.push(run); save(); render(); window.scrollTo(0,0);
    window.dispatchEvent(new CustomEvent('astr-run-started',{detail:{id:run.id,key}}));
  }
  function home() {
    run = null; correction = null;
    const body = shell(mode.title, `Exam 2 · ${data.coverage}`);
    const simulator = mode.kind === 'simulator';
    body.innerHTML = `<p class="e2-lead">${simulator ? 'Check each answer for immediate feedback. Your first-answer score stays separate from corrections.' : 'Choose confidence before checking. Your first checked answer stays saved; later corrections remain separate.'}</p><div class="e2-facts"><span><strong>${simulator ? 25 : mode.kind === 'boss' ? 25 : selectItems(mode).length}</strong> original tasks</span><span><strong>${esc(data.lectureRange || "13–17")}</strong> lectures available</span><span><strong>Supplied packet</strong> Exam 2 coverage</span></div>
      ${simulator ? `<p>Practice mix: 21 ordinary multiple choice, 1 T/F, 1 matching, 1 complete ordering, and 1 image target. Small source-supported calculations can appear.</p><p class="e2-muted">${esc(data.blueprint.authority)} Matching and ordering use whole-question scoring in this rehearsal; actual partial credit and allowed notes are not confirmed.</p><label class="e2-timer-label">Practice clock <select data-e2-timer><option value="0">Untimed</option><option value="30">30 minutes</option><option value="50">50 minutes</option></select></label><p class="e2-muted">An optional clock continues when you leave. An expired attempt is submitted when active or on resume; incomplete or uncommitted responses receive zero.</p>` : '<p class="e2-muted">Misses return after two intervening tasks; low-confidence correct answers after four. Two consecutive correct answers on different original roots, latest medium/high, establish mastery. A drill score uses its initial tasks only.</p>'}
      <div data-e2-start></div><h3>Saved attempts</h3><div data-e2-history></div>`;
    const start = button('Start new attempt', newRun, 'primary', {'data-e2-new':''}); start.disabled = Boolean(problem); body.querySelector('[data-e2-start]').append(start);
    const history = body.querySelector('[data-e2-history]');
    const matching = db.runs.filter(r => r.mode === mode.kind && r.moduleId === (mode.moduleId || null) && r.conceptFilter === (mode.conceptId || null) && (!mode.formId || r.selection?.formId===mode.formId));
    if (!matching.length) history.innerHTML = '<p class="e2-muted">No attempts in this activity yet.</p>';
    matching.slice().reverse().forEach(r => {
      const row = document.createElement('div'); row.className = 'e2-history-row';
      const answered = r.questions.filter(q => r.answers[q.instanceId]).length;
      row.innerHTML = `<span>${esc(r.title)}<br>${esc(new Date(r.startedAt).toLocaleString())} · ${r.finishedAt || r.submittedAt ? 'Ended' : `${answered} checked / ${r.initialIds.length} initial tasks`}</span>`;
      row.append(button(r.finishedAt || r.submittedAt ? 'Review' : 'Resume', () => {run = db.runs.find(x => x.id === r.id); render(); window.dispatchEvent(new CustomEvent('astr-run-started',{detail:{id:run.id,key}}));}, 'ghost', {'data-e2-resume':r.id})); history.append(row);
    });
  }
  function commit(q, value, confidence) {
    if (run.answers[q.instanceId] || run.finishedAt || run.submittedAt) return;
    if (value !== undefined) run.drafts[q.instanceId] = clone(value);
    if (confidence) run.confidence[q.instanceId] = confidence;
    run.draftTimes[q.instanceId] = now(); save();
  }
  function sourceHTML(q) {
    const found = [];
    (q.sourceRefs || []).forEach(ref => {
      const matches = [...ref.locator.matchAll(/(\d+)(?:[–-](\d+))?/g)];
      const numbers = matches.flatMap(m => Array.from({length:Number(m[2] || m[1])-Number(m[1])+1}, (_, i) => Number(m[1])+i));
      data.sourceSlides.filter(s => s.sourceId === ref.id && numbers.includes(s.page)).forEach(s => {if (!found.some(p => p.id === s.id)) found.push(s);});
    });
    const concept = data.concepts.find(c => c.id === q.conceptId);
    const issues = data.qualifications.filter(x => found.some(s => x.source.includes(`L${s.lecture} p${s.page}`)));
    return `<details class="e2-source"><summary>Direct source material</summary><p>${esc(q.source)}</p>${concept ? `<p class="e2-source-note">Study explanation: ${esc(concept.teaching)}</p>` : ''}${issues.map(x => `<aside class="e2-boundary"><strong>${esc(x.title)}</strong><p>${esc(x.text)}</p>${x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">Primary-source qualification</a>` : ''}</aside>`).join('')}${!found.length ? '<p class="e2-muted">Matching lecture passages and figures require a compatible private source pack. Import a compatible pack for the matching lecture pages.</p>' : ''}${found.map(s => `<section><h4>Lecture ${s.lecture} · page ${s.page}</h4><pre>${esc(s.text)}</pre>${s.image ? `<a href="${esc(s.image)}" target="_blank" rel="noopener" aria-label="Enlarge Lecture ${s.lecture} page ${s.page}"><img loading="lazy" src="${esc(s.image)}" alt="Original course slide, Lecture ${s.lecture} page ${s.page}. Open to enlarge."></a>` : ''}</section>`).join('')}</details>`;
  }
  function enlargeQuestion(q){
    const dialog=document.getElementById('diagram-dialog');
    document.getElementById('diagram-title').textContent='Question figure';
    document.getElementById('diagram-image').src=q.media.src;document.getElementById('diagram-image').alt=q.media.alt;
    document.getElementById('diagram-caption').textContent=q.media.caption||'';dialog.showModal();
  }
  function response(q, value, locked = false, scored = false, edit = null) {
    const wrap = document.createElement('div'); wrap.className = 'e2-response';
    const onChange = edit || (v => commit(q, v));
    if (type(q) === 'target') {
      const chart = document.createElement('div'); chart.className = 'e2-target-chart';
      chart.innerHTML = `<img src="${esc(q.media.src)}" alt="${esc(q.media.alt)}">`;
      q.targets.forEach((point, i) => {
        const b = button(point.label, () => {onChange(i); if (!edit) render(); else chart.querySelectorAll('[data-e2-target]').forEach(el => el.setAttribute('aria-pressed',String(Number(el.dataset.e2Target) === i)));}, 'ghost', {'aria-label':`Select region ${point.label}`, 'aria-pressed':String(value === i), 'data-e2-target':i});
        b.className = `e2-target${scored && q.answer === i ? ' correct' : scored && value === i ? ' incorrect' : ''}`; b.style.left = `${point.x}%`; b.style.top = `${point.y}%`; b.disabled = locked; chart.append(b);
      });
      wrap.append(chart,button('Enlarge image',()=>enlargeQuestion(q)));
      const note = document.createElement('p'); note.className = 'e2-muted'; note.textContent = 'Select a labeled region on the diagram. Tab and Enter work too. Positions are conceptual.'; wrap.append(note);
    } else if (type(q) === 'match') {
      const field = document.createElement('fieldset'); field.innerHTML = '<legend>Use each description once.</legend>';
      q.rowOrder.forEach(i => {
        const row = document.createElement('label'); row.className = 'e2-match';
        if (scored) row.classList.add(value?.[i] === q.answer[i] ? 'correct' : 'incorrect');
        row.innerHTML = `<span>${esc(q.rows[i].label)}</span><select aria-label="${esc(q.rows[i].label)}" ${locked ? 'disabled' : ''}><option value="">Choose…</option>${q.choiceOrder.map(k => `<option value="${k}" ${value?.[i] === k ? 'selected' : ''}>${esc(q.choices[k])}</option>`).join('')}</select>${scored ? `<small class="e2-correct-answer">Correct answer: ${esc(q.choices[q.answer[i]])}</small>` : ''}`;
        row.querySelector('select').onchange = e => {const v = [...(value || Array(q.rows.length).fill(null))]; v[i] = e.target.value === '' ? null : Number(e.target.value); value = v; onChange(v);};
        field.append(row);
      }); wrap.append(field);
    } else if (type(q) === 'order') {
      const order = Array.isArray(value) ? value : q.choiceOrder;
      const list = document.createElement('ol'); list.className = 'e2-order';
      order.forEach((k, pos) => {
        const row = document.createElement('li'); row.innerHTML = `<span>${esc(q.choices[k])}</span>`;
        if (scored) row.classList.add(k === q.answer[pos] ? 'correct' : 'incorrect');
        if (!locked) {
          const move = delta => {const v = [...order]; [v[pos], v[pos+delta]] = [v[pos+delta], v[pos]]; onChange(v); if (!edit) render(); else {wrap.replaceChildren(response(q, v, false, false, edit));}};
          const up = button('↑', () => move(-1), 'ghost', {'aria-label':`Move ${q.choices[k]} up`}); up.disabled = pos === 0;
          const down = button('↓', () => move(1), 'ghost', {'aria-label':`Move ${q.choices[k]} down`}); down.disabled = pos === order.length-1;
          row.append(up, down);
        }
        list.append(row);
      }); wrap.append(list);
      if (!locked) {
        const note = document.createElement('p'); note.className = 'e2-muted'; note.textContent = 'Use the arrows to arrange the steps, then check your answer. The starting order is shuffled.'; wrap.append(note);
      }
    } else {
      if (q.media) wrap.innerHTML = `<figure class="e2-question-figure"><img src="${esc(q.media.src)}" alt="${esc(q.media.alt)}"><figcaption>${esc(q.media.caption)}</figcaption></figure>`;
      if(q.media){const image=wrap.querySelector('img'),zoom=button('Enlarge image',()=>enlargeQuestion(q));image.parentElement.append(zoom);}
      const field = document.createElement('div'); field.className='e2-options'; field.setAttribute('role','radiogroup'); field.setAttribute('aria-label','Answer choices');
      q.choiceOrder.forEach((i, display) => {
        const option = button('', () => {
          onChange(i);
          field.querySelectorAll('[role=radio]').forEach(el=>el.setAttribute('aria-checked',String(Number(el.dataset.value)===i)));
        });
        option.className='e2-choice';option.setAttribute('role','radio');option.setAttribute('aria-checked',String(value===i));option.dataset.value=i;option.disabled=locked;
        if(scored && i===q.answer)option.classList.add('correct');else if(scored && value===i)option.classList.add('incorrect');
        option.innerHTML=`<span class="e2-option-letter">${String.fromCharCode(65+display)}</span><span>${esc(q.choices[i])}</span>${scored&&i===q.answer?'<small>Correct answer</small>':''}`;
        field.append(option);
      }); wrap.append(field);
    }
    return wrap;
  }
  function feedback(q, a) {
    const block = document.createElement('section'); block.className = `e2-feedback ${a.correct ? 'good' : 'bad'}`; block.setAttribute('aria-live', 'polite');
    block.innerHTML = `<strong class="verdict">${a.correct ? 'Correct.' : 'Not yet.'}</strong><p class="e2-correct-answer">Correct answer: ${esc(answerText(q, q.answer))}</p><p>${esc(q.explanation)}</p>${sourceHTML(q)}`;
    return block;
  }
  function check(q) {
    if (run.answers[q.instanceId] || run.finishedAt || run.submittedAt) return;
    const value = run.drafts[q.instanceId], confidence = run.confidence[q.instanceId];
    if (!ready(q, value)) return error('Complete and commit every required part of the response first. Matching must use each description once.');
    if (!confidences.has(confidence)) return error('Choose Low, Medium, or High confidence before checking.');
    const a = {value:clone(value), confidence, correct:correct(q, value), checkedAt:now()};
    run.answers[q.instanceId] = a;
    if (run.mode !== 'simulator' && (!a.correct || confidence === 'low')) {
      const pool = poolFor(run.selection || {moduleId:run.moduleId,conceptId:run.conceptFilter});
      schedule(run, q, a.correct ? 4 : 2, pool);
    }
    if (save()) updateMastery(); render();
  }
  function navigate(index) {run.index = index; correction = null; if(save()){render(true);window.scrollTo(0,0);}}
  function expire() {
    if (run?.mode === 'simulator' && !run.submittedAt && run.deadline && Date.now() >= run.deadline) {run.expired = true; submit(true); return true;}
    return false;
  }
  function submit(expired = false) {
    if (run.submittedAt) return;
    for (const q of run.questions) {
      if (run.answers[q.instanceId]) continue;
      const value = run.drafts[q.instanceId], confidence = run.confidence[q.instanceId];
      if (ready(q, value) && confidences.has(confidence)) run.answers[q.instanceId] = {value:clone(value), confidence, correct:correct(q, value), checkedAt:now()};
    }
    run.submittedAt = now(); run.finishedAt = run.submittedAt; run.expired = expired;
    if (save()) updateMastery(); results();
  }
  function finish() {
    run.finishedAt = now();
    if (save()) updateMastery(); results();
  }
  const responseName=q=>({'single':'Multiple choice','true-false':'True or false','match':'Matching','order':'Ordering','target':'Diagram question'}[type(q)] || 'Practice');
  function leaveRun(){if(!save())return;run=null;correction=null;host.classList.remove('e2-session');leave();}
  function saveCorrectionDraft(q,value,confidence){
    const previous=run.correctionDrafts?.[q.instanceId];
    (run.correctionDrafts ||= {})[q.instanceId]={value:clone(value===undefined?previous?.value??null:value),confidence:confidence||previous?.confidence||'medium',editing:true,updatedAt:now()};
    save();
  }
  function checkCorrection(q){
    const draft=run.correctionDrafts?.[q.instanceId];
    if(!draft || !ready(q,draft.value) || !confidences.has(draft.confidence))return error('Complete the response before checking.');
    (run.corrections[q.instanceId] ||= []).push({id:uid(),value:clone(draft.value),confidence:draft.confidence,correct:correct(q,draft.value),checkedAt:now()});
    draft.editing=false;draft.updatedAt=now();if(save())render(true);
  }
  function render(inspect=false) {
    if (expire()) return;
    if ((run.finishedAt || run.submittedAt) && !inspect) return results();
    const q=run.questions[run.index], simulator=run.mode==='simulator', focused=!simulator&&run.selection?.origin==='focus';
    const first=run.answers[q.instanceId], draft=run.correctionDrafts?.[q.instanceId], editing=Boolean(first&&draft?.editing);
    const latest=run.corrections[q.instanceId]?.at(-1)||first;
    const savedValue=editing?draft.value:first?latest.value:run.drafts[q.instanceId];
    const value=type(q)==='order'&&!Array.isArray(savedValue)?q.choiceOrder:savedValue;
    const confidence=editing?draft.confidence:first?latest.confidence||first.confidence:run.confidence[q.instanceId]||'medium';
    const locked=Boolean(first&&!editing)||Boolean(!first&&(run.finishedAt||run.submittedAt));
    const count=run.questions.filter(x=>run.answers[x.instanceId]).length, score=run.questions.filter(x=>run.answers[x.instanceId]?.correct).length;
    host.classList.add('e2-session');
    host.innerHTML=`<p class="eyebrow">${esc(run.title)} · question ${run.index+1} of ${run.questions.length}</p><h1 tabindex="-1">${esc(focused?run.title.replace(/^Exam Focus · /,''):responseName(q))}</h1>
      ${!focused?`<div class="row e2-session-tools"><button class="button" data-e2-exit>Save & leave</button><button class="button" data-e2-summary>Progress summary</button><button class="button" data-e2-flag>${run.flags[q.instanceId]?'★ Flagged':'Flag question'}</button></div>`:''}
      <p class="small muted" data-e2-status role="status">${esc(problem||'Saved in this browser · drafts and feedback resume after reopening.')}</p><p class="e2-session-count">${focused?`Question ${run.index+1} of ${run.questions.length} · ${count} checked · ${score} correct on first answer.`:`${count}/${run.questions.length} questions checked · ${score} correct on first answer. First-answer score stays separate from corrections.`}${run.deadline?'<span data-e2-clock></span>':''}</p>
      ${focused?'<p class="small muted">First answers count toward Astronomy mastery. Corrections stay separate.</p><div class="row e2-session-tools"><button class="button" data-e2-exit>Save & return</button><a class="button" href="#/topic/focus">Focus progression</a></div>':''}
      <article class="e2-question-card"><div class="e2-qhead">${focused?'Section question ':'Q'}${run.index+1}${q.repeat?' · spaced review':q.bridge?' · intervening retrieval':''}</div><div class="e2-prompt">${esc(q.prompt)}</div><div data-e2-response></div><div class="row e2-answer-actions" data-e2-actions></div><div data-e2-feedback></div></article><div data-e2-first></div>
      <div class="row spread e2-session-nav"><button class="button" data-e2-prev>← Previous</button><button class="button primary" data-e2-next>${run.index===run.questions.length-1?(focused?'View Focus progress':'Save and view summary'):'Next question →'}</button></div>
      <details class="card e2-question-map"><summary>${focused?'Section question map':'Question map'}</summary><nav class="e2-grid" aria-label="Question navigation"></nav></details>`;
    host.querySelector('[data-e2-exit]').onclick=leaveRun;
    if(!focused)host.querySelector('[data-e2-summary]').onclick=()=>{if(save())results();};
    if(!focused)host.querySelector('[data-e2-flag]').onclick=()=>{run.flags[q.instanceId]=!run.flags[q.instanceId];if(save())render(true);};
    const edit=v=>{if(editing)saveCorrectionDraft(q,v);else commit(q,v);const checkButton=host.querySelector('[data-e2-check]');if(checkButton)checkButton.disabled=!ready(q,v);};
    host.querySelector('[data-e2-response]').append(response(q,value,locked,Boolean(latest&&!editing),edit));
    const actions=host.querySelector('[data-e2-actions]');
    if(!locked){
      actions.innerHTML=`<label>Confidence<select aria-label="Confidence"><option value="medium">Medium</option><option value="low">Low / guessing</option><option value="high">High / certain</option></select></label>`;
      const select=actions.querySelector('select');select.value=confidence;
      select.onchange=()=>{if(editing)saveCorrectionDraft(q,undefined,select.value);else commit(q,undefined,select.value);};
      const checkButton=button('Check answer',()=>{if(editing){if(type(q)==='order'&&!Array.isArray(run.correctionDrafts[q.instanceId].value))saveCorrectionDraft(q,q.choiceOrder,select.value);checkCorrection(q);}else{commit(q,type(q)==='order'&&!Array.isArray(run.drafts[q.instanceId])?q.choiceOrder:undefined,select.value);check(q);}},'primary',{'data-e2-check':''});checkButton.disabled=!ready(q,value);actions.append(checkButton);
      if(editing)actions.insertAdjacentHTML('afterend','<p class="small muted">Correction attempt. Your first response and result stay unchanged.</p>');
    }
    if(latest&&!editing)host.querySelector('[data-e2-feedback]').append(feedback(q,latest));
    if(first){
      const record=host.querySelector('[data-e2-first]'),corrections=run.corrections[q.instanceId]||[];
      record.innerHTML=`<div class="e2-first-record"><b>First try: ${first.correct?'correct':'needs work'}</b>${corrections.length?' · '+corrections.length+' correction attempt'+(corrections.length===1?'':'s'):''}<details><summary>Saved first response</summary><p>${esc(answerText(q,first.value))}</p></details></div>`;
      if(!editing&&!latest.correct){const row=document.createElement('div');row.className='row';row.append(button('Try a correction',()=>{saveCorrectionDraft(q,null,confidence);if(!unsaved)render(true);}));const link=document.createElement('a');link.className='button';link.href='#/topic/learn/'+q.moduleId;link.textContent='Review this topic';row.append(link);record.append(row);}
      else if(!editing&&corrections.length)record.insertAdjacentHTML('beforeend','<p class="small e2-correct-answer">Corrected after feedback. Recheck this concept later with a different question.</p>');
    }else if(locked){host.querySelector('[data-e2-feedback]').innerHTML='<p class="small muted">No checked first response in this completed activity.</p>';}
    const grid=host.querySelector('.e2-grid');
    run.questions.forEach((x,i)=>{const a=run.corrections[x.instanceId]?.at(-1)||run.answers[x.instanceId];const b=button(`${i+1}${run.flags[x.instanceId]?' ★':''}`,()=>navigate(i),'ghost',{'aria-label':`Question ${i+1}${a?', checked':', unfinished'}`,'data-e2-index':i});b.className='e2-number'+(a?a.correct?' correct':' incorrect':'');if(i===run.index)b.setAttribute('aria-current','step');grid.append(b);});
    const prev=host.querySelector('[data-e2-prev]');prev.disabled=run.index===0;prev.onclick=()=>navigate(run.index-1);
    host.querySelector('[data-e2-next]').onclick=()=>{if(run.index<run.questions.length-1)navigate(run.index+1);else if(focused){if(run.questions.every(x=>run.answers[x.instanceId])&&!run.finishedAt){run.finishedAt=now();if(save())updateMastery();}leaveRun();}else if(!run.finishedAt&&run.questions.every(x=>run.answers[x.instanceId])){simulator?submit():finish();}else if(save())results();};
    clock();
  }
  function clock() {
    const el = host?.querySelector('[data-e2-clock]');
    if (!el || !run) return;
    const seconds = Math.max(0, Math.ceil((run.deadline-Date.now())/1000));
    el.textContent = run.mode !== 'simulator' ? 'Saved as you work' : run.deadline ? `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} left` : 'Untimed';
  }
  function results() {
    const initial=run.questions.filter(q=>run.initialIds.includes(q.instanceId)),scored=initial.filter(q=>run.answers[q.instanceId]),score=scored.filter(q=>run.answers[q.instanceId].correct).length,full=scored.length===initial.length;
    const corrected=Object.values(run.corrections).filter(a=>a.length).length;
    host.classList.add('e2-session');
    host.innerHTML=`<h1>${esc(run.title)} · Summary</h1><div class="row"><button class="button" data-e2-exit>Save & leave</button></div><p class="small muted" data-e2-status role="status">${esc(problem||'Saved in this browser · drafts and feedback resume after reopening.')}</p><p>${full?'All initial questions checked.':`In progress: ${initial.length-scored.length} initial questions still need checking.`}</p><section class="card"><h2>First-answer score${full?'':' so far'}</h2><p class="e2-summary-score">${score} / ${initial.length}</p><p>${Math.round(score/initial.length*100)} / 100 practice points · one point per complete correct question.</p><p>${corrected} question${corrected===1?' was':'s were'} later corrected. Those corrections do not replace this first-answer score.</p><button class="button primary" data-e2-resume>Resume / inspect answers</button></section><section class="card"><h2>Question review</h2><div data-e2-review></div></section><section class="card"><h2>Choose the next retrieval</h2><p>Use another question after a break. Corrections do not add independent mastery evidence.</p><div class="row"><a class="button" href="#/topic/review">Review open misses</a><a class="button" href="#/topic/backup">Back up progress</a></div></section>`;
    if (run.finishedAt && full && run.mode !== 'simulator' && ['boss','pool'].includes(run.mode)) {
      try {
        const scores = JSON.parse((window.StudyStorage || localStorage).getItem(KEYS.scores) || '{}');
        const id = run.mode === 'boss' ? 'exam-two-boss-drill' : 'exam-two-everything-pool';
        if (!scores[id] || score/initial.length > scores[id].score/scores[id].total) {scores[id] = {score,total:initial.length,completedAt:run.finishedAt}; (window.StudyStorage || localStorage).setItem(KEYS.scores,JSON.stringify(scores));}
      } catch(e) {error(`Best score was not saved: ${e.message}`);}
    }

    host.querySelector('[data-e2-exit]').onclick=leaveRun;
    host.querySelector('[data-e2-resume]').onclick=()=>{render(true);window.scrollTo(0,0);};
    const list=host.querySelector('[data-e2-review]');
    run.questions.forEach((q,i)=>{const a=run.answers[q.instanceId],row=document.createElement('p');row.className='e2-summary-row';row.append(button('Q'+(i+1)+' · '+responseName(q),()=>navigate(i)));const text=document.createElement('span');text.textContent=a?`${a.correct?1:0}/1 first-answer points`:'Unchecked';row.append(text);list.append(row);});
    window.scrollTo(0,0);
  }
  function sourceAnswerHTML(q,homework=false){
    const answer=homework?(q.answerText||q.displayedKey):q.choices[Number.isInteger(q.displayedAnswer)?q.displayedAnswer:q.supportedAnswer];
    return `<p class="${answer?'e2-correct-answer':'e2-muted'}">${answer?'Correct answer: '+esc(answer):'No reliable single answer is established by the supplied material.'}</p>${q.explanation||q.teachingNote?`<p>${esc(q.explanation||q.teachingNote)}</p>`:''}`;
  }
  function sourceReview(){
    const items=data.topHat.filter(q=>!Array.isArray(mode.topHatIds)||mode.topHatIds.includes(q.id)),body=shell(mode.title||'Top Hat questions',`${items.length} supplied question families`);
    body.innerHTML=items.length?items.map(q=>`<article class="e2-th"><p class="e2-muted">Lecture ${q.lecture}</p><h3>${esc(q.prompt)}</h3>${q.choices.length>1?`<ol type="A">${q.choices.map(c=>`<li>${esc(c)}</li>`).join('')}</ol>`:''}<details><summary>Show correct answer</summary>${sourceAnswerHTML(q)}<details><summary>Original source</summary>${q.captures.map(c=>`<a href="${esc(c.src)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(c.src)}" alt="${esc(c.source)}"></a>`).join('')}</details></details></article>`).join(''):'<p>The supplied questions are not loaded. Open Sources to restore the course material.</p>';
  }
  function homeworkReview(){
    const items=(data.homework||[]).filter(q=>!Array.isArray(mode.homeworkIds)||mode.homeworkIds.includes(q.id)),body=shell(mode.title||'Homework questions',`${items.length} supplied homework questions`);
    body.innerHTML=items.length?items.map(q=>`<article class="e2-th"><p class="e2-muted">Homework ${q.homework} · Question ${q.question}</p><h3>${esc(q.prompt||q.topic)}</h3><details><summary>Show correct answer</summary>${sourceAnswerHTML(q,true)}<details><summary>Original source</summary><a href="${esc(q.image)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(q.image)}" alt="Original homework ${q.homework}, question ${q.question}"></a></details></details></article>`).join(''):'<p>The supplied homework is not loaded. Open Sources to restore the course material.</p>';
  }
  function renderEvidence(element) {
    element.className='e2-evidence hidden';
    element.innerHTML=`<div class="e2-boundary"><strong>Exam 2: material available so far</strong><p>${esc(data.coverage)} · ${data.coverageLedger.length} pages · ${new Set(data.concepts.map(c=>c.moduleId)).size} teaching sections · ${data.concepts.length} concepts · ${data.questions.length} original tasks. Lecture 30 is mapped to existing lessons; remaining format and source qualifications are listed below.</p></div><details><summary>Coverage receipt, qualifications, and pending material</summary><p>Professor DNA calibration uses the actual Exam 1 relationships and response formats. Topic weights and Exam 2 mechanics are not inferred from one exam.</p>${data.qualifications.map(x=>`<article><h4>${esc(x.title)} · ${esc(x.source)}</h4><p>${esc(x.text)}</p>${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">Primary-source qualification</a>`:''}</article>`).join('')}<h4>Pending</h4><ul>${data.pending.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><h4>Every supplied slide</h4><label>Find a slide <input type="search" data-e2-coverage-search placeholder="Parallax, L16, optional…"></label><div class="e2-coverage" data-e2-coverage></div></details>`;
    const renderRows=term=>{const table=element.querySelector('[data-e2-coverage]');table.replaceChildren();data.coverageLedger.filter(p=>`${p.title} L${p.lecture} ${p.disposition}`.toLowerCase().includes(term.toLowerCase())).forEach(p=>{
      const row=document.createElement('details');const s=data.sourceSlides.find(x=>x.lecture===p.lecture&&x.page===p.page);
      row.innerHTML=`<summary>L${p.lecture} p${p.page} · ${esc(p.title)} <span>${esc(p.disposition)}</span></summary><p>${esc(p.reason)}</p><pre>${esc(s?.text || "Import your private source pack to view this slide passage.")}</pre>`;table.append(row);
    });}; renderRows('');element.querySelector('[data-e2-coverage-search]').oninput=e=>renderRows(e.target.value);
  }
  window.ASTRExamTwo={
    keys:KEYS, form, ready, correct, answerText, mastery, schedule, mergeRuns, snapshot, poolFor, selectItems, rebuildMastery:updateMastery,
    exportPending(){return unsaved && run ? {key,raw:JSON.stringify(db)} : null;},
    renderEvidence, sourceHTML, sourceAnswerHTML,
    open(element,onLeave,options={}) {
      host=element;leave=onLeave;mode={kind:options.kind||'pool',title:options.title||'Exam 2 practice',...options};run=null;problem='';correction=null;unsaved=false;
      if(mode.kind==='source-review'){sourceReview();return;}
      if(mode.kind==='homework-review'){homeworkReview();return;}
      key=mode.kind==='simulator'?KEYS.simulator:KEYS.practice;
      try{db=read(key);}catch(e){db={schemaVersion:1,runs:[]};problem=e.message;}
      if(options.runId){run=db.runs.find(r=>r.id===options.runId);if(run){render();return;}problem='That saved activity is not available in this browser.';}
      home();
      if(options.autoStart && !problem)newRun();
    },
    refresh(){if(!host||host.classList.contains('hidden')||['source-review','homework-review'].includes(mode.kind))return;try{db=read(key);if(run)run=db.runs.find(r=>r.id===run.id)||run;run?render():home();}catch(e){error(e.message);}}
  };
  if (typeof window.addEventListener === 'function') {
    window.addEventListener('storage',e=>{if([KEYS.practice,KEYS.simulator].includes(e.key))window.ASTRExamTwo.refresh();});
    setInterval(()=>{if(run?.mode==='simulator'&&!run.submittedAt){if(!expire())clock();}},1000);
  }
})();
