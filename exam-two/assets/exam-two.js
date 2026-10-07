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
  function form(seed) {
    const rng = seeded(seed);
    const pool = data.questions.filter(q => q.mockEligible !== false);
    const mc = pool.filter(q => type(q) === 'single');
    const picked = [];
    // Two image-supported MCs plus the target give representation practice.
    const visuals = shuffle(mc.filter(q => q.media), rng);
    picked.push(...visuals.slice(0, 2));
    for (const moduleId of new Set(mc.map(q => q.moduleId))) {
      let count = picked.filter(q => q.moduleId === moduleId).length;
      for (const q of shuffle(mc.filter(q => q.moduleId === moduleId && !picked.includes(q)), rng)) {
        if (count >= 2) break;
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
    const raw = localStorage.getItem(keyName);
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
      localStorage.setItem(key, JSON.stringify(db)); problem = ''; unsaved = false;
      host?.querySelector('[data-e2-status]')?.replaceChildren();
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
      const raw = localStorage.getItem(KEYS.guided);
      const progress = raw ? JSON.parse(raw) : {concepts:{}, modules:{}};
      if (!progress || typeof progress !== 'object' || Array.isArray(progress)) throw Error('Existing mastery data is invalid.');
      progress.concepts ||= {}; progress.modules ||= {};
      const states = mastery(events);
      for (const [id, state] of Object.entries(states)) progress.concepts[id] = {...progress.concepts[id], ...state};
      all.filter(r => r.mode === 'topic' && r.finishedAt && r.initialIds.every(id => r.answers[id])).forEach(r => {
        progress.modules[r.moduleId] = {...progress.modules[r.moduleId], completed:true, startedAt:progress.modules[r.moduleId]?.startedAt || r.startedAt, completedAt:r.finishedAt};
      });
      localStorage.setItem(KEYS.guided, JSON.stringify(progress));
      window.dispatchEvent(new Event('astr-progress-changed'));
    } catch (e) {error(`The attempt is saved, but mastery could not be updated: ${e.message}`);}
  }
  const button = (label, action, style='ghost', attrs={}) => {
    const el = document.createElement('button'); el.type = 'button'; el.className = `button ${style}`; el.textContent = label;
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
    el.addEventListener('click', action); return el;
  };
  function shell(title, label='Exam 2') {
    host.innerHTML = `<div class="e2-toolbar"><button type="button" class="button ghost" data-e2-exit>← Practice</button><span class="pill">${esc(label)}</span></div><article class="e2-card"><h2 tabindex="-1">${esc(title)}</h2><div data-e2-body></div></article><p class="e2-storage" data-e2-status role="status">${esc(problem)}</p>`;
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
    if (mode.kind === 'simulator') questions = form(seed);
    else {
      questions = selectItems(mode).map(q => snapshot(q));
    }
    if (!questions.length) return error('This topic has no verified original practice yet.');
    const minutes = mode.kind === 'simulator' ? Number(host.querySelector('[data-e2-timer]').value) : 0;
    run = {id:`exam-two-${mode.kind}-${uid()}`, examId:'exam-two', mode:mode.kind, title:mode.title, moduleId:mode.moduleId || null, conceptFilter:mode.conceptId || null, contentVersion:data.version, seed, startedAt:now(), updatedAt:now(), deadline:minutes ? Date.now()+minutes*60000 : null, questions, initialIds:questions.map(q => q.instanceId), index:0, drafts:{}, draftTimes:{}, answers:{}, confidence:{}, flags:{}, corrections:{}, repeatCounts:{}};
    run.selection = {moduleId:mode.moduleId || null, conceptId:mode.conceptId || null, conceptIds:mode.conceptIds || null, itemIds:mode.itemIds || null, mcOnly:Boolean(mode.mcOnly), mcFirst:Boolean(mode.mcFirst), count:mode.count || null};
    run.selectionKey = JSON.stringify(run.selection);
    db.runs.push(run); save(); render();
    window.dispatchEvent(new CustomEvent('astr-run-started',{detail:{id:run.id,key}}));
  }
  function home() {
    run = null; correction = null;
    const body = shell(mode.title, `Exam 2 · ${data.coverage}`);
    const simulator = mode.kind === 'simulator';
    body.innerHTML = `<p class="e2-lead">${simulator ? 'One complete rehearsal. Answers and explanations stay hidden until submission.' : 'Choose confidence before checking. Your first checked answer stays saved; later corrections remain separate.'}</p><div class="e2-facts"><span><strong>${simulator ? 25 : mode.kind === 'boss' ? 25 : selectItems(mode).length}</strong> original tasks</span><span><strong>${esc(data.lectureRange || "13–17")}</strong> lectures available</span><span><strong>Partial</strong> Exam 2 coverage</span></div>
      ${simulator ? `<p>Practice mix: 21 ordinary multiple choice, 1 T/F, 1 matching, 1 complete ordering, and 1 image target. Small source-supported calculations can appear.</p><p class="e2-muted">${esc(data.blueprint.authority)} Matching and ordering use whole-question scoring in this rehearsal; actual partial credit and allowed notes are not confirmed.</p><label class="e2-timer-label">Practice clock <select data-e2-timer><option value="0">Untimed</option><option value="30">30 minutes</option><option value="50">50 minutes</option></select></label><p class="e2-muted">An optional clock continues when you leave. An expired attempt is submitted when active or on resume; incomplete or uncommitted responses receive zero.</p>` : '<p class="e2-muted">Misses return after two intervening tasks; low-confidence correct answers after four. Two consecutive correct answers on different original roots, latest medium/high, establish mastery. A drill score uses its initial tasks only.</p>'}
      <div data-e2-start></div><h3>Saved attempts</h3><div data-e2-history></div>`;
    const start = button('Start new attempt', newRun, 'primary', {'data-e2-new':''}); start.disabled = Boolean(problem); body.querySelector('[data-e2-start]').append(start);
    const history = body.querySelector('[data-e2-history]');
    const matching = db.runs.filter(r => r.mode === mode.kind && r.moduleId === (mode.moduleId || null) && r.conceptFilter === (mode.conceptId || null));
    if (!matching.length) history.innerHTML = '<p class="e2-muted">No attempts in this activity yet.</p>';
    matching.slice().reverse().forEach(r => {
      const row = document.createElement('div'); row.className = 'e2-history-row';
      const answered = r.questions.filter(q => r.answers[q.instanceId]).length;
      row.innerHTML = `<span>${esc(new Date(r.startedAt).toLocaleString())} · ${r.finishedAt || r.submittedAt ? 'Ended' : `${answered} checked / ${r.initialIds.length} initial tasks`}</span>`;
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
    return `<details class="e2-source"><summary>Direct source material</summary><p>${esc(q.source)}</p>${concept ? `<p class="e2-source-note">Study explanation: ${esc(concept.teaching)}</p>` : ''}${issues.map(x => `<aside class="e2-boundary"><strong>${esc(x.title)}</strong><p>${esc(x.text)}</p>${x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">Primary-source qualification</a>` : ''}</aside>`).join('')}${!found.length ? '<p class="e2-muted">Matching lecture passages and figures require a compatible private source pack. Import the updated pack for Lecture 18 sources.</p>' : ''}${found.map(s => `<section><h4>Lecture ${s.lecture} · page ${s.page}</h4><pre>${esc(s.text)}</pre>${s.image ? `<a href="${esc(s.image)}" target="_blank" rel="noopener" aria-label="Enlarge Lecture ${s.lecture} page ${s.page}"><img loading="lazy" src="${esc(s.image)}" alt="Original course slide, Lecture ${s.lecture} page ${s.page}. Open to enlarge."></a>` : ''}</section>`).join('')}</details>`;
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
      wrap.append(chart);
      const note = document.createElement('p'); note.className = 'e2-muted'; note.textContent = 'Select A, B, C, or D on the diagram. Tab and Enter work too. Positions are conceptual.'; wrap.append(note);
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
        const accept = button('Commit this order', () => {onChange([...order]); if (!edit) render();}, 'ghost', {'data-e2-commit-order':''}); wrap.append(accept);
        const note = document.createElement('p'); note.className = 'e2-muted'; note.textContent = 'Move rows into the requested order, then commit it. The starting order is shuffled.'; wrap.append(note);
      }
    } else {
      if (q.media) wrap.innerHTML = `<figure class="e2-question-figure"><img src="${esc(q.media.src)}" alt="${esc(q.media.alt)}"><figcaption>${esc(q.media.caption)}</figcaption></figure>`;
      const field = document.createElement('fieldset'); field.innerHTML = '<legend class="sr-only">Choose one answer</legend>';
      q.choiceOrder.forEach((i, display) => {
        const label = document.createElement('label'); label.className = 'e2-choice';
        if (scored && i === q.answer) label.classList.add('correct'); else if (scored && value === i) label.classList.add('incorrect');
        label.innerHTML = `<input type="radio" name="e2-${esc(q.instanceId)}${edit ? '-correction' : ''}" value="${i}" ${value === i ? 'checked' : ''} ${locked ? 'disabled' : ''}><span>${String.fromCharCode(65+display)}. ${esc(q.choices[i])}</span>${scored && i === q.answer ? '<small>Correct answer</small>' : scored && value === i ? '<small>Your first answer</small>' : ''}`;
        label.querySelector('input').onchange = () => onChange(i); field.append(label);
      }); wrap.append(field);
    }
    return wrap;
  }
  function feedback(q, a) {
    const block = document.createElement('section'); block.className = `e2-feedback ${a.correct ? 'good' : 'bad'}`; block.setAttribute('aria-live', 'polite');
    block.innerHTML = `<strong>${a.correct ? 'Correct.' : 'Not yet.'}</strong><p class="e2-correct-answer">Correct answer: ${esc(answerText(q, q.answer))}</p><p>${esc(q.explanation)}</p><p class="e2-muted">First answer: ${esc(answerText(q, a.value))} · confidence ${esc(a.confidence)}${!a.correct && a.confidence === 'high' ? ' · High-confidence error: prioritize this distinction.' : a.confidence === 'low' ? ' · Review this even if correct.' : ''}</p>${sourceHTML(q)}`;
    return block;
  }
  function check(q) {
    if (run.answers[q.instanceId]) return;
    const value = run.drafts[q.instanceId], confidence = run.confidence[q.instanceId];
    if (!ready(q, value)) return error('Complete and commit every required part of the response first. Matching must use each description once.');
    if (!confidences.has(confidence)) return error('Choose Low, Medium, or High confidence before checking.');
    const a = {value:clone(value), confidence, correct:correct(q, value), checkedAt:now()};
    run.answers[q.instanceId] = a;
    if (!a.correct || confidence === 'low') {
      const pool = poolFor(run.selection || {moduleId:run.moduleId,conceptId:run.conceptFilter});
      schedule(run, q, a.correct ? 4 : 2, pool);
    }
    if (save()) updateMastery(); render();
  }
  function navigate(index) {run.index = index; correction = null; save(); render();}
  function expire() {
    if (run?.mode === 'simulator' && !run.submittedAt && run.deadline && Date.now() >= run.deadline) {run.expired = true; submit(true); return true;}
    return false;
  }
  function submit(expired = false) {
    if (run.submittedAt) return;
    for (const q of run.questions) {
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
  function correctionPanel(q, element) {
    let draft = clone(run.drafts[q.instanceId] ?? null);
    const panel = document.createElement('section'); panel.className = 'e2-correction';
    panel.innerHTML = '<h4>Correction, saved separately</h4><p>Your first answer and score stay unchanged. This correction is practice after feedback and does not add mastery evidence.</p>';
    const edit = v => {draft = clone(v);};
    panel.append(response(q, draft, false, false, edit));
    const status = document.createElement('p'); status.setAttribute('role','status');
    panel.append(button('Save correction', () => {
      if (!ready(q, draft)) {status.textContent = 'Complete and commit the correction first.'; return;}
      const event = {id:uid(), value:clone(draft), correct:correct(q, draft), checkedAt:now()};
      (run.corrections[q.instanceId] ||= []).push(event); save();
      status.textContent = event.correct ? 'Correct correction saved. Original score unchanged.' : 'Correction saved; compare with the explanation. Original score unchanged.';
      status.className = event.correct ? 'e2-correct-answer' : 'e2-wrong-answer';
    }, 'primary'), status); element.append(panel);
  }
  function render() {
    if (expire()) return;
    if (run.finishedAt || run.submittedAt) return results();
    const q = run.questions[run.index];
    const simulator = run.mode === 'simulator';
    const a = run.answers[q.instanceId];
    const count = run.questions.filter(x => simulator ? ready(x, run.drafts[x.instanceId]) && confidences.has(run.confidence[x.instanceId]) : run.answers[x.instanceId]).length;
    const body = shell(`Question ${run.index+1} of ${run.questions.length}`, `${run.title}${q.repeat ? ' · spaced review' : q.bridge ? ' · intervening retrieval' : ''}`);
    body.innerHTML = `<div class="e2-status"><span>${count} ${simulator ? 'committed' : 'checked'} · ${run.initialIds.length} initial tasks</span><span data-e2-clock></span></div><nav class="e2-grid" aria-label="Question navigation"></nav><p class="e2-muted">${simulator ? 'Answers remain hidden until submission. Choose confidence to commit each response.' : 'Confidence before checking. First responses stay locked after feedback.'}</p><h3 class="e2-prompt">${esc(q.prompt)}</h3><div data-e2-response></div><div data-e2-confidence></div><div data-e2-feedback></div><div class="e2-controls" data-e2-controls></div><div data-e2-finish></div>`;
    const grid = body.querySelector('.e2-grid');
    run.questions.forEach((x, i) => {
      const checked = Boolean(run.answers[x.instanceId]);
      const committed = ready(x, run.drafts[x.instanceId]) && confidences.has(run.confidence[x.instanceId]);
      const b = button(`${i+1}${run.flags[x.instanceId] ? ' ★' : ''}`, () => navigate(i), 'ghost', {'aria-label':`Question ${i+1}${checked ? ', checked' : committed ? ', committed' : ', incomplete'}`, 'data-e2-index':i});
      b.className = `e2-number${(simulator ? committed : checked) ? ' answered' : ''}`;
      if (i === run.index) b.setAttribute('aria-current','step'); grid.append(b);
    });
    body.querySelector('[data-e2-response]').append(response(q, a ? a.value : run.drafts[q.instanceId], Boolean(a), Boolean(a)));
    const confidence = body.querySelector('[data-e2-confidence]');
    confidence.className = 'e2-confidence'; confidence.setAttribute('role','group'); confidence.setAttribute('aria-label','Confidence before feedback');
    confidence.innerHTML = '<strong>Confidence before checking</strong>';
    ['low','medium','high'].forEach(value => {
      const b = button(value[0].toUpperCase()+value.slice(1), () => {commit(q, undefined, value); render();}, 'ghost', {'data-e2-confidence':value, 'aria-pressed':String((a?.confidence || run.confidence[q.instanceId]) === value)});
      b.disabled = Boolean(a); confidence.append(b);
    });
    if (!simulator && !a) {
      const hints = document.createElement('details'); hints.className = 'e2-hint'; hints.innerHTML = `<summary>Need a hint?</summary><p>${esc(q.hint)}</p>`;
      body.querySelector('[data-e2-feedback]').append(hints, button('Check answer', () => check(q), 'primary', {'data-e2-check':''}));
    }
    if (a) body.querySelector('[data-e2-feedback]').append(feedback(q, a));
    const controls = body.querySelector('[data-e2-controls]');
    const prev = button('Previous', () => navigate(run.index-1)); prev.disabled = run.index === 0;
    const next = button('Next', () => navigate(run.index+1), 'primary', {'data-e2-next':''}); next.disabled = run.index === run.questions.length-1;
    controls.append(prev, button(run.flags[q.instanceId] ? '★ Unflag' : 'Flag', () => {run.flags[q.instanceId] = !run.flags[q.instanceId]; save(); render();}), next);
    const footer = body.querySelector('[data-e2-finish]');
    footer.append(button(simulator ? 'Finish exam' : 'End this activity', () => {
      const full = run.initialIds.every(id => run.answers[id]);
      const uncommitted = simulator ? run.questions.filter(x => !ready(x, run.drafts[x.instanceId]) || !confidences.has(run.confidence[x.instanceId])).length : run.initialIds.filter(id => !run.answers[id]).length;
      const note = document.createElement('div'); note.className = 'e2-boundary';
      note.innerHTML = `<p>${uncommitted} initial responses ${simulator ? 'incomplete or missing confidence' : 'unchecked'}. ${simulator ? 'Submit and lock this attempt? Incomplete responses earn zero.' : full ? 'Your initial-task score will be saved. Adaptive checks support mastery separately.' : 'End early and retain your checked work? A partial activity cannot set a best drill score.'}</p>`;
      note.append(button(simulator ? 'Submit for score' : 'End and review', () => simulator ? submit() : finish(), 'primary', {'data-e2-submit':''})); footer.append(note);
    }, 'ghost', {'data-e2-finish-button':''}));
    if (!simulator && a && run.index === run.questions.length-1) footer.append(button('Finish activity', finish, 'primary', {'data-e2-complete':''}));
    clock();
  }
  function clock() {
    const el = host?.querySelector('[data-e2-clock]');
    if (!el || !run) return;
    const seconds = Math.max(0, Math.ceil((run.deadline-Date.now())/1000));
    el.textContent = run.mode !== 'simulator' ? 'Saved as you work' : run.deadline ? `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} left` : 'Untimed';
  }
  function results() {
    const initial = run.questions.filter(q => run.initialIds.includes(q.instanceId));
    const scored = initial.filter(q => run.answers[q.instanceId]);
    const score = scored.filter(q => run.answers[q.instanceId].correct).length;
    const full = scored.length === initial.length;
    const body = shell(run.mode === 'simulator' ? 'Exam submitted' : full ? 'Activity complete' : 'Activity ended early', run.title);
    body.innerHTML = `<div class="e2-result">${score}<span>/${initial.length}</span></div><p>${run.mode === 'simulator' ? `${score*4}/100 practice points${run.expired ? ' · practice clock expired' : ''}` : `${scored.length}/${initial.length} initial tasks checked${full ? '' : ' · partial activity; no best score awarded'}`}. Your first checked answers stay locked.</p><p class="e2-muted">Corrections remain separate. New closed-notes attempts on different original roots can supply mastery evidence; correcting after feedback cannot.</p><div data-e2-review></div><div class="e2-controls" data-e2-result-controls></div>`;
    if (full && run.mode !== 'simulator' && ['boss','pool'].includes(run.mode)) {
      try {
        const scores = JSON.parse(localStorage.getItem(KEYS.scores) || '{}');
        const id = run.mode === 'boss' ? 'exam-two-boss-drill' : 'exam-two-everything-pool';
        if (!scores[id] || score/initial.length > scores[id].score/scores[id].total) {scores[id] = {score,total:initial.length,completedAt:run.finishedAt}; localStorage.setItem(KEYS.scores,JSON.stringify(scores));}
      } catch(e) {error(`Best score was not saved: ${e.message}`);}
    }
    const list = body.querySelector('[data-e2-review]');
    run.questions.forEach((q, i) => {
      const a = run.answers[q.instanceId];
      const card = document.createElement('details'); card.className = 'e2-review-item';
      card.innerHTML = `<summary>${i+1}. ${esc(q.prompt)} <strong>${a ? a.correct ? 'Correct' : 'Incorrect' : 'Unanswered'}</strong></summary>`;
      if (a) {card.append(response(q,a.value,true,true),feedback(q,a));}
      else {
        const neutral = document.createElement('p'); neutral.className='e2-muted'; neutral.textContent='No committed first response. This item adds no mastery evidence.';
        card.append(neutral); const reveal = button('Reveal explanation', () => {reveal.disabled=true; const block=document.createElement('div');block.innerHTML=`<p class="e2-correct-answer">Correct answer: ${esc(answerText(q,q.answer))}</p><p>${esc(q.explanation)}</p>${sourceHTML(q)}`;card.append(block);}); card.append(reveal);
      }
      if (run.corrections[q.instanceId]?.length) {
        const record=document.createElement('p');record.className='e2-muted';record.textContent=`${run.corrections[q.instanceId].length} separate correction(s) saved. Latest: ${answerText(q,run.corrections[q.instanceId].at(-1).value)}`;card.append(record);
      }
      card.append(button('Practice a correction', event => {event.currentTarget.disabled=true;correctionPanel(q,card);},'ghost',{'data-e2-correct':q.instanceId}));
      list.append(card);
    });
    body.querySelector('[data-e2-result-controls]').append(button('Saved attempts',home,'primary'),button('New attempt',home));
  }
  function sourceReview() {
    if (!data.topHat.length) {
      const body=shell('Top Hat source review','Private course materials');
      body.innerHTML='<p class="e2-lead">Import a compatible private course source pack to add supplied questions, their captures, and qualified answers.</p><p>Only this browser stores the imported materials. Nothing is uploaded. Original practice and mastery are ready now.</p>';
      body.append(button('Import course source pack',()=>window.ASTRSourcePack.choose(),'primary'));
      return;
    }
    const body=shell('Supplied source questions',`${data.topHat.length} families · ${data.topHat.reduce((n,q)=>n+q.captures.length,0)} captures`);
    body.innerHTML='<p class="e2-lead">Review supplied Top Hat and lecture questions, separate from original practice. A selected response is not a graded key.</p><p class="e2-muted">No score or mastery is awarded. Duplicates are grouped. Source wording and qualified keys are preserved.</p><div data-e2-th></div>';
    data.topHat.forEach((q,i)=>{
      const card=document.createElement('article');card.className='e2-th';
      card.innerHTML=`<p class="e2-muted">Lecture ${q.lecture} · ${q.captures.length} capture${q.captures.length===1?'':'s'}${q.qualified?' · Qualification note':''}</p><h3>${i+1}. ${esc(q.prompt)}</h3><ol type="a">${q.choices.map(c=>`<li>${esc(c)}</li>`).join('')}</ol><details><summary>Reveal answer evidence and source</summary>${Number.isInteger(q.displayedAnswer)?`<p class="e2-correct-answer">Displayed course key: ${esc(q.choices[q.displayedAnswer])}</p>`:`<p>No graded course key is displayed.</p>${Number.isInteger(q.selectedAnswer)?`<p class="e2-muted">Selected response in capture (ungraded): ${esc(q.choices[q.selectedAnswer])}</p>`:""}${Number.isInteger(q.supportedAnswer)?`<p class="e2-correct-answer">Source-supported answer: ${esc(q.choices[q.supportedAnswer])}</p>`:""}`}<p>${esc(q.note)}</p>${q.captures.map(c=>`<a href="${esc(c.src)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(c.src)}" alt="Supplied ${esc(c.source)}, including the selected or credited response where available."></a>`).join('')}</details>`;
      body.querySelector('[data-e2-th]').append(card);
    });
  }
  function renderEvidence(element) {
    element.className='e2-evidence hidden';
    element.innerHTML=`<div class="e2-boundary"><strong>Exam 2: material available so far</strong><p>${esc(data.coverage)} · ${data.coverageLedger.length} pages · ${new Set(data.concepts.map(c=>c.moduleId)).size} teaching sections · ${data.concepts.length} concepts · ${data.questions.length} original tasks. The remaining Exam 2 material and final briefing are pending.</p></div><details><summary>Coverage receipt, qualifications, and pending material</summary><p>Professor DNA calibration uses the actual Exam 1 relationships and response formats. Topic weights and Exam 2 mechanics are not inferred from one exam.</p>${data.qualifications.map(x=>`<article><h4>${esc(x.title)} · ${esc(x.source)}</h4><p>${esc(x.text)}</p>${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener">Primary-source qualification</a>`:''}</article>`).join('')}<h4>Pending</h4><ul>${data.pending.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><h4>Every supplied slide</h4><label>Find a slide <input type="search" data-e2-coverage-search placeholder="Parallax, L16, optional…"></label><div class="e2-coverage" data-e2-coverage></div></details>`;
    const renderRows=term=>{const table=element.querySelector('[data-e2-coverage]');table.replaceChildren();data.coverageLedger.filter(p=>`${p.title} L${p.lecture} ${p.disposition}`.toLowerCase().includes(term.toLowerCase())).forEach(p=>{
      const row=document.createElement('details');const s=data.sourceSlides.find(x=>x.lecture===p.lecture&&x.page===p.page);
      row.innerHTML=`<summary>L${p.lecture} p${p.page} · ${esc(p.title)} <span>${esc(p.disposition)}</span></summary><p>${esc(p.reason)}</p><pre>${esc(s?.text || "Import your private source pack to view this slide passage.")}</pre>`;table.append(row);
    });}; renderRows('');element.querySelector('[data-e2-coverage-search]').oninput=e=>renderRows(e.target.value);
  }
  window.ASTRExamTwo={
    keys:KEYS, form, ready, correct, answerText, mastery, schedule, mergeRuns, snapshot, poolFor, selectItems, rebuildMastery:updateMastery,
    exportPending(){return unsaved && run ? {key,raw:JSON.stringify(db)} : null;},
    renderEvidence,
    open(element,onLeave,options={}) {
      host=element;leave=onLeave;mode={kind:options.kind||'pool',title:options.title||'Exam 2 practice',...options};run=null;problem='';correction=null;unsaved=false;
      if(mode.kind==='source-review'){sourceReview();return;}
      key=mode.kind==='simulator'?KEYS.simulator:KEYS.practice;
      try{db=read(key);}catch(e){db={schemaVersion:1,runs:[]};problem=e.message;}
      if(options.runId){run=db.runs.find(r=>r.id===options.runId);if(run){render();return;}problem='That saved activity is not available in this browser.';}
      home();
      if(options.autoStart && !problem)newRun();
    },
    refresh(){if(!host||host.classList.contains('hidden')||mode.kind==='source-review')return;try{db=read(key);if(run)run=db.runs.find(r=>r.id===run.id)||run;run?render():home();}catch(e){error(e.message);}}
  };
  if (typeof window.addEventListener === 'function') {
    window.addEventListener('storage',e=>{if([KEYS.practice,KEYS.simulator].includes(e.key))window.ASTRExamTwo.refresh();});
    setInterval(()=>{if(run?.mode==='simulator'&&!run.submittedAt){if(!expire())clock();}},1000);
  }
})();
