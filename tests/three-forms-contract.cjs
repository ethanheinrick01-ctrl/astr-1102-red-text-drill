const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),ctx={window:{},document:{},crypto:crypto.webcrypto,localStorage:{getItem(){return null;}}};
for(const f of ['quizzes/exam-two-data.js','study-guides/focus-data.js','study-guides/mock-forms.js','quizzes/focus-assessment.js','quizzes/mock-assessment.js','assets/exam-two.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'exam-two',f),'utf8'),ctx);
const {ASTR1102_EXAM2:d,ASTR1102_MOCK_ASSESSMENT:bank,ASTR1102_FOCUS_ASSESSMENT:fb,ASTR1102_MOCK_FORMS:forms,ASTR1102_FOCUS:focus,ASTRExamTwo:e}=ctx.window;
assert.equal(forms.length,3);const ids=forms.flatMap(f=>f.itemIds);assert.equal(new Set(ids).size,75);
for(const f of forms){for(let seed=1;seed<=10;seed++){
 const q=e.form(seed,{formId:f.id});assert.equal(q.length,25);assert.deepEqual(Array.from(q,x=>x.id),Array.from(f.itemIds));
 for(const kind of ['single','true-false','match','order','target'])assert.equal(q.filter(x=>x.responseType===kind).length,kind==='single'?21:1);
 assert(q.filter(x=>x.responseType==='single'&&x.media).length>=2);
 for(const item of q){assert(bank.questions.some(x=>x.id===item.id));assert(!d.questions.some(x=>x.id===item.id));assert(!fb.questions.some(x=>x.id===item.id));assert(!item.id.includes('-th-'));assert(e.correct(item,item.answer));const wrong=Array.isArray(item.answer)?[...item.answer].reverse():(item.answer+1)%item.choices.length;assert(!e.correct(item,wrong));}
 }}
assert(focus.units.every(u=>ids.some(id=>u.conceptIds.includes(bank.questions.find(q=>q.id===id).conceptId))));
assert.throws(()=>e.form(1,{formId:'missing'}),/unavailable/);
const supplied={choices:['Wrong','Right'],selectedAnswer:0,displayedAnswer:1,note:'past grading history',teachingNote:'Explanation.'};
const html=e.sourceAnswerHTML(supplied);assert(html.includes('Correct answer: Right'));assert(!html.includes('Wrong'));assert(!html.includes('past grading'));
assert(e.sourceAnswerHTML({choices:[],displayedAnswer:null,supportedAnswer:null}).includes('No reliable single answer'));
console.log('Three forms passed:75 unique original roots,25 each,all five formats,source answers only,all30 review pages represented across forms.');
