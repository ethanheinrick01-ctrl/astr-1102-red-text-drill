// Course-level calibration contract (added 2026-11-05).
// ASTR 1102 is a 1000-level course. The real Exam 1 (25/25 graded review) is the difficulty reference:
// short one-step questions, short answer choices, course facts as answers, ~3 NOT stems per 25.
// This test fails if the mock forms or Focus gap checks drift harder than that, or if questions/lessons
// start arguing with the course ("alone", "which assumption fails", "oversimplification", authoring notes).
// Thresholds are set from the real Exam 1 profile with a modest margin. Do NOT loosen them to make new
// content pass; rewrite the content instead. Rationale: ASTRONOMY/COURSE-CALIBRATION.md.
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.resolve(__dirname,'..','exam-two'),ctx={window:{}};
for(const f of ['quizzes/exam-two-data.js','study-guides/modules.js','study-guides/focus-data.js','study-guides/mock-forms.js','quizzes/focus-assessment.js','quizzes/mock-assessment.js'])vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const {ASTR1102_MOCK_ASSESSMENT:mock,ASTR1102_MOCK_FORMS:forms,ASTR1102_FOCUS_ASSESSMENT:focus,ASTR1102_MODULES:modules,ASTR1102_FOCUS:units,ASTR1102_EXAM2:data}=ctx.window;
const words=s=>String(s||'').replace(/Hint:.*/s,'').trim().split(/\s+/).filter(Boolean).length;
const median=a=>{const b=[...a].sort((x,y)=>x-y);return b[b.length>>1];};
const QUALIFIER=/\b(if|assum\w*|while|but|although|without|same|equal|held|fixed|unless)\b/i;
// Words that turn a course fact into a caveat question. Real course questions (Top Hat/homework) are exempt.
const BANNED=/\b(alone|by itself|which assumption|assumptions?|model-dependent|simplif\w*|qualif\w*|universal\w*|uniquely|necessarily|supplied|source review|keyed|credited|graded|overstatement|oversimplif\w*|idealized|in the (?:taught|course|lecture) model)\b/i;
// Authoring notes or claims that the course is wrong, anywhere in study text.
const NOTE=/(oversimplif\w*|overstatement|teaching shorthand|too broad|stay pending|graded screenshot|model-dependent|not a universal|should not be overinterpreted|source review|supplied (?:key|matching key|page)|the review[’']s claim|is a simplification|teaching simplification|not a settled universal)/i;
const NOTE_ALLOW=['the source explicitly cautions against a single oversimplified mechanical story']; // instructor's own caution
const text=q=>[q.prompt,...(q.choices||[]),...(q.rows||[]).map(r=>r.label||r),q.explanation].join(' ');
function profile(name,qs,{stemMedian=16,stemMax=30,optMedian=5,optMax=15,qualifierMax=0.2}={}){
 const stems=qs.map(q=>words(q.prompt)),opts=qs.flatMap(q=>(q.choices||[]).map(words));
 assert(median(stems)<=stemMedian,`${name}: median question length ${median(stems)} words > ${stemMedian} (Exam 1 is 15)`);
 assert(median(opts)<=optMedian,`${name}: median answer choice ${median(opts)} words > ${optMedian} (Exam 1 is 3)`);
 qs.forEach(q=>{assert(words(q.prompt)<=stemMax,`${name}: ${q.id} question is ${words(q.prompt)} words (max ${stemMax})`);
  (q.choices||[]).forEach(c=>assert(words(c)<=optMax,`${name}: ${q.id} choice "${c}" is ${words(c)} words (max ${optMax})`));
  const m=text(q).match(BANNED);assert(!m,`${name}: ${q.id} uses caveat wording "${m&&m[0]}". Course facts are the answer; rewrite it.`);});
 const qual=qs.filter(q=>QUALIFIER.test(String(q.prompt).replace(/Hint:.*/s,''))).length/qs.length;
 assert(qual<=qualifierMax,`${name}: ${(100*qual).toFixed(0)}% of questions use qualifiers (max ${100*qualifierMax}%; Exam 1 is 4%)`);
}
for(const f of forms){const qs=f.itemIds.map(id=>mock.questions.find(q=>q.id===id));
 profile('Mock form '+f.label,qs,{qualifierMax:0.16});
 const nots=qs.filter(q=>/\bNOT\b/.test(q.prompt)).length;assert(nots>=2&&nots<=4,`Mock form ${f.label}: ${nots} NOT questions (Exam 1 had 3 per 25)`);
 const hinted=qs.filter(q=>/\d/.test(String(q.prompt).replace(/Hint:.*/s,'')));assert(hinted.length<=5,`Mock form ${f.label}: ${hinted.length} numeric questions (keep math to one-step factors)`);}
profile('Focus gap checks',focus.questions.filter(q=>q.assessmentKind==='gap'));
const study=[];modules.forEach(m=>m.activities.find(a=>a.type==='lesson').body.forEach((b,i)=>study.push([`lesson ${m.number}/${i}`,b])));
units.units.forEach(u=>study.push([`Focus section ${u.number}`,[u.checkpoint,u.transfer,...u.points.map(p=>p.term+' '+p.meaning)].join(' ')]));
data.concepts.forEach(c=>study.push([c.id,[c.teaching,c.workedExample,c.commonMistake].join(' ')]));
for(const [where,t] of study){let s=String(t);NOTE_ALLOW.forEach(a=>{s=s.split(a).join('');});const m=s.match(NOTE);
 assert(!m,`${where}: "${m&&m[0]}" reads as an authoring note or disputes the course. Use the course's wording.`);}
console.log('Difficulty contract passed: 3 mock forms and 55 Focus gap checks match the Exam 1 profile; no caveat wording or authoring notes in questions, lessons or Focus text.');
