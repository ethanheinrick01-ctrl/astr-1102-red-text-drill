/* Portable, local-only backups. Import merges records and never clears missing keys. */
(() => {
  'use strict';
  const keys = [
    'astr1102-study-lab-progress-v1', 'astr1102-guided-progress-v1',
    'astr1102-exam-simulator-attempts-v2',
    'astr1102-exam2-practice-v1', 'astr1102-exam2-simulator-attempts-v1',
    'astr1102-exam2-ui-v1', 'astr1102-exam2-listing-v1'
  ];
  const format = 'astr1102-study-backup-v1';
  const copy = value => JSON.parse(JSON.stringify(value));
  const object = value => value && typeof value === 'object' && !Array.isArray(value);
  function exportData() {
    const result = {format, course:'ASTR 1102', exportedAt:new Date().toISOString(), storage:Object.fromEntries(keys.map(k => [k,(window.StudyStorage || localStorage).getItem(k)]))};
    const pending = window.ASTRExamTwo.exportPending();
    if (pending) {result.recoveryStorage = {[pending.key]:result.storage[pending.key]};result.storage[pending.key]=pending.raw;result.includesUnsavedActivity=true;}
    return result;
  }
  function safeParse(raw) {
    return JSON.parse(raw, (key, value) => {
      if (['__proto__','prototype','constructor'].includes(key)) throw Error('Unsafe object field in backup.');
      return value;
    });
  }
  function validate(key, value) {
    if (!object(value)) throw Error(`Invalid data in ${key}.`);
    if (key === 'astr1102-exam2-ui-v1') {
      if (value.schemaVersion !== 1 || !object(value.notes) || !object(value.builder) || !['dark','light'].includes(value.theme)) throw Error('Invalid interface or notes backup.');
      for (const [id,note] of Object.entries(value.notes)) if (!window.ASTR1102_MODULES.some(m=>m.examId==='exam-two'&&m.id===id) || !object(note) || typeof note.value !== 'string' || typeof note.updatedAt !== 'string') throw Error('Invalid chapter note.');
      if (!Array.isArray(value.builder.conceptIds) || value.builder.conceptIds.some(id=>!window.ASTR1102_EXAM2.concepts.some(c=>c.id===id)) || ![10,15,20,25,30,999].includes(value.builder.count) || typeof value.builder.mcOnly !== 'boolean') throw Error('Invalid practice selection.');
    } else if (key === 'astr1102-exam2-listing-v1') {
      if (value.schemaVersion !== 1 || !object(value.entries)) throw Error('Invalid typed listing backup.');
      const response = a => object(a) && typeof a.text === 'string' && ['low','medium','high'].includes(a.confidence) && typeof a.checkedAt === 'string';
      for (const [id,entry] of Object.entries(value.entries)) {
        if (!window.ASTR1102_LISTINGS.some(t=>t.id===id) || !object(entry) || !object(entry.snapshot) || entry.snapshot.id !== id || !Array.isArray(entry.snapshot.rubric) || !object(entry.draft) || typeof entry.draft.text !== 'string' || !['','low','medium','high'].includes(entry.draft.confidence) || !Array.isArray(entry.marks) || entry.marks.some(mark=>mark !== null && typeof mark !== 'boolean') || !Array.isArray(entry.corrections) || entry.corrections.some(a=>!response(a)||typeof a.id !== 'string') || (entry.first && !response(entry.first))) throw Error('Invalid typed response or rubric.');
      }
    } else if (key.includes('exam2-')) {
      if (value.schemaVersion !== 1 || !Array.isArray(value.runs)) throw Error('Unsupported Exam 2 run format.');
      const ids = new Set();
      for (const r of value.runs) {
        if (!object(r) || !r.id || ids.has(r.id) || r.examId !== 'exam-two' || !Array.isArray(r.questions) || !Array.isArray(r.initialIds) || !object(r.answers) || !object(r.drafts) || !object(r.confidence) || !object(r.corrections) || !object(r.draftTimes) || !object(r.repeatCounts)) throw Error('Incomplete or duplicate Exam 2 run.');
        ids.add(r.id);
        const questionIds = new Set();
        for (const q of r.questions) {
          if (!object(q) || !q.instanceId || questionIds.has(q.instanceId) || !String(q.id).startsWith('exam-two-item-') || !String(q.conceptId).startsWith('exam-two-concept-') || !Array.isArray(q.choices) || !Array.isArray(q.choiceOrder) || !window.ASTRExamTwo.ready(q,q.answer)) throw Error('Invalid question snapshot in backup.');
          questionIds.add(q.instanceId);
          const a = r.answers[q.instanceId];
          if (a && (!window.ASTRExamTwo.ready(q,a.value) || !['low','medium','high'].includes(a.confidence) || !a.checkedAt || a.correct !== window.ASTRExamTwo.correct(q,a.value))) throw Error('Invalid committed first answer.');
        }
        if (r.initialIds.some(id => !questionIds.has(id)) || Object.keys(r.answers).some(id => !questionIds.has(id))) throw Error('An answer refers to a missing question.');
      }
    } else if (key.includes('simulator-attempts')) {
      if (!Array.isArray(value.attempts) || value.attempts.some(r => !object(r) || !r.id || !Array.isArray(r.questions) || !object(r.answers))) throw Error('Invalid Exam 1 saved attempts.');
    } else if (key.includes('guided')) {
      if (!object(value.concepts) || !object(value.modules)) throw Error('Invalid mastery ledger.');
    } else {
      for (const score of Object.values(value)) if (!object(score) || !Number.isFinite(score.score) || !Number.isFinite(score.total) || score.total <= 0 || score.score < 0 || score.score > score.total) throw Error('Invalid drill score.');
    }
  }
  function planImport(backup) {
    if (!object(backup) || backup.format !== format || backup.course !== 'ASTR 1102' || !object(backup.storage)) throw Error('Choose an ASTR 1102 Study Lab backup.');
    const writes = {}, before = {}, counts = [];
    for (const [key, raw] of Object.entries(backup.storage)) {
      if (!keys.includes(key)) throw Error(`Unrecognized storage key: ${key}.`);
      if (raw === null) continue;
      if (typeof raw !== 'string') throw Error('Storage values must be saved JSON strings.');
      const incoming = safeParse(raw); validate(key,incoming);
      before[key] = (window.StudyStorage || localStorage).getItem(key);
      const existing = before[key] ? safeParse(before[key]) : null;
      if (existing) validate(key,existing);
      let merged = copy(incoming);
      if (existing && key === 'astr1102-exam2-ui-v1') {
        merged = {...existing,notes:{...existing.notes},builder:existing.builder};
        for (const [id,note] of Object.entries(incoming.notes)) if (!merged.notes[id] || note.updatedAt > merged.notes[id].updatedAt) merged.notes[id] = copy(note);
        if ((incoming.builder.updatedAt || '') > (existing.builder.updatedAt || '')) merged.builder = copy(incoming.builder);
      } else if (existing && key === 'astr1102-exam2-listing-v1') {
        merged = {...existing,entries:{...existing.entries}};
        for (const [id,entry] of Object.entries(incoming.entries)) {
          const old = merged.entries[id];
          if (!old) {merged.entries[id] = copy(entry); continue;}
          const latest = (entry.updatedAt || '') > (old.updatedAt || '') ? entry : old;
          const corrections = new Map(old.corrections.map(a=>[a.id,a]));
          entry.corrections.forEach(a=>{if (!corrections.has(a.id)) corrections.set(a.id,copy(a));});
          merged.entries[id] = {...copy(latest),snapshot:copy(old.snapshot),first:copy(old.first || entry.first || null),corrections:[...corrections.values()].sort((a,b)=>a.checkedAt.localeCompare(b.checkedAt))};
        }
      } else if (existing && key.includes('exam2-')) {
        const old = new Map(existing.runs.map(r => [r.id,r]));
        const additions = incoming.runs.map(r => {
          const current = old.get(r.id); if (!current) return r;
          const snapshots = new Map(current.questions.map(q => [q.instanceId,q]));
          for (const q of r.questions) {
            const saved = snapshots.get(q.instanceId);
            if (saved && (JSON.stringify(saved.answer) !== JSON.stringify(q.answer) || saved.id !== q.id || JSON.stringify(saved.choices) !== JSON.stringify(q.choices))) throw Error('Conflicting versions of a saved question; no data was changed.');
          }
          return {...r, answers:{...r.answers,...current.answers}};
        });
        merged = {schemaVersion:1,runs:window.ASTRExamTwo.mergeRuns(existing.runs,additions)};
      } else if (existing && key.includes('simulator-attempts')) {
        const runs = new Map(existing.attempts.map(r => [r.id,r]));
        incoming.attempts.forEach(r => {if (!runs.has(r.id)) runs.set(r.id,r);});
        merged = {...existing,attempts:[...runs.values()]};
      } else if (existing && key.includes('guided')) {
        merged = {...existing,concepts:{...existing.concepts},modules:{...existing.modules}};
        for (const [id,s] of Object.entries(incoming.concepts)) {
          const old = merged.concepts[id];
          if (!old || (s.attempts || 0) > (old.attempts || 0)) merged.concepts[id] = copy(s);
        }
        for (const [id,s] of Object.entries(incoming.modules)) {
          const old = merged.modules[id];
          merged.modules[id] = old ? {...s,...old,completed:Boolean(old.completed || s.completed)} : copy(s);
        }
      } else if (existing) {
        merged = {...existing};
        for (const [id,s] of Object.entries(incoming)) {
          if (!merged[id] || s.score/s.total > merged[id].score/merged[id].total) merged[id] = copy(s);
        }
      }
      validate(key,merged); writes[key] = JSON.stringify(merged);
      counts.push(`${key}: ${merged.runs ? merged.runs.length+' runs' : merged.attempts ? merged.attempts.length+' Exam 1 attempts' : merged.concepts ? Object.keys(merged.concepts).length+' concept records' : Object.keys(merged).length+' scores'}`);
    }
    if (!Object.keys(writes).length) throw Error('This backup contains no progress to import.');
    return {writes,before,counts};
  }
  function restore(backup) {
    const plan = planImport(backup), done = [];
    try {
      for (const [key,raw] of Object.entries(plan.writes)) {(window.StudyStorage || localStorage).setItem(key,raw);done.push(key);}
    } catch(e) {
      for (const key of done) {
        if (plan.before[key] === null) (window.StudyStorage || localStorage).removeItem(key); else (window.StudyStorage || localStorage).setItem(key,plan.before[key]);
      }
      throw Error(`Import failed; previous data restored: ${e.message}`);
    }
    window.ASTRExamTwo.rebuildMastery();
    window.dispatchEvent(new Event('astr-progress-changed'));
    return plan;
  }
  function download() {
    const blob = new Blob([JSON.stringify(exportData(),null,2)],{type:'application/json'});
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = `ASTR-1102-study-progress-${new Date().toISOString().slice(0,10)}.json`;
    a.click(); setTimeout(() => URL.revokeObjectURL(url),1000);
  }
  window.ASTRProgressBackup = {keys,exportData,planImport,restore,download};
  if (typeof document === 'undefined') return;
  const host = document.getElementById('progress-backup');
  if (!host) return;
  host.innerHTML = '<details><summary>Back up or restore study progress</summary><p>Progress belongs to this browser and address. A local file and a hosted site may have different records. Export before switching devices or addresses.</p><button type="button" class="button ghost" data-backup-export>Download progress backup</button><h3>Merge a backup</h3><p>Existing first answers and Exam 1 runs stay locked. New attempts are added; missing records are not erased. Download your current backup first if you want an independent recovery copy.</p><label>Choose your ASTR 1102 backup <input type="file" accept="application/json,.json" data-backup-file></label><button type="button" class="button primary" data-backup-import disabled>Merge this backup</button><p role="status" data-backup-status></p><button type="button" class="button ghost hidden" data-backup-reload>Reload restored progress</button></details>';
  const status = host.querySelector('[data-backup-status]'), merge = host.querySelector('[data-backup-import]');
  let pending = null;
  host.querySelector('[data-backup-export]').onclick = download;
  host.querySelector('[data-backup-file]').onchange = async e => {
    pending = null; merge.disabled = true;
    try {
      const file = e.target.files[0]; if (!file) return;
      if (file.size > 25*1024*1024) throw Error('This backup is larger than the supported 25 MB.');
      pending = safeParse(await file.text());
      const plan = planImport(pending); status.textContent = `Ready to merge:\n${plan.counts.join('\n')}`; merge.disabled = false;
    } catch(e) {status.textContent = `${e.message} No progress changed.`;}
  };
  merge.onclick = () => {
    if (!pending) return;
    try {restore(pending);pending=null;merge.disabled=true;status.textContent='Backup merged. Reload to refresh all saved attempt lists.';host.querySelector('[data-backup-reload]').classList.remove('hidden');}
    catch(e) {status.textContent=e.message;}
  };
  host.querySelector('[data-backup-reload]').onclick = () => location.reload();
})();
