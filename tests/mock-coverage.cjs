const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),context={window:{},crypto:require("node:crypto").webcrypto};
for(const file of ['quizzes/exam-two-data.js','assets/exam-two.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'exam-two',file),'utf8'),context);
const data=context.window.ASTR1102_EXAM2,engine=context.window.ASTRExamTwo,seen=new Set();
for(let seed=1;seed<=300;seed++){
 const form=engine.form(seed),counts={};
 assert.equal(form.length,25);assert.equal(new Set(form.map(q=>q.rootId)).size,25);
 assert.equal(JSON.stringify(engine.form(seed).map(q=>q.id)),JSON.stringify(form.map(q=>q.id)));
 for(const q of form){counts[q.responseType]=(counts[q.responseType]||0)+1;seen.add(q.moduleId);assert(engine.ready(q,q.answer));assert(engine.correct(q,q.answer));}
 assert.equal(counts.single,21);for(const kind of ['true-false','match','order','target'])assert.equal(counts[kind],1);
 assert(form.filter(q=>q.responseType==='single'&&q.media).length>=2);
}
for(const q of data.questions.filter(q=>q.mockEligible!==false))assert(seen.has(q.moduleId),'Unreachable mock section: '+q.moduleId);
console.log('Mock coverage passed:300 reproducible forms,25 unique roots, five response formats, every eligible section reachable.');
