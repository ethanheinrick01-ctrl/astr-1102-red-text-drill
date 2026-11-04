const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),ctx={window:{},document:{},crypto:crypto.webcrypto,localStorage:{getItem(){return null;}}};
for(const f of ['quizzes/exam-two-data.js','study-guides/modules.js','study-guides/focus-data.js','assets/exam-two.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'exam-two',f),'utf8'),ctx);
const {ASTR1102_EXAM2:data,ASTR1102_FOCUS:focus,ASTRExamTwo:engine}=ctx.window;
assert.equal(focus.units.length,30);assert.equal(new Set(focus.units.map(u=>u.id)).size,30);
assert.deepEqual(Array.from(focus.units,u=>u.page),Array.from({length:30},(_,i)=>i+3));
const ids=[...new Set(focus.units.flatMap(u=>u.conceptIds))];assert.equal(ids.length,67);assert.equal(engine.poolFor({conceptIds:ids}).length,188);
for(const u of focus.units){
 assert(u.points.length>=2&&u.checkpoint&&u.transfer);
 for(const id of u.conceptIds){assert(data.concepts.some(c=>c.id===id));assert(new Set(data.questions.filter(q=>q.conceptId===id).map(q=>q.rootId||q.id)).size>=2);}
 assert.equal(new Set(u.sources.map(s=>s.id)).size,u.sources.length);
 for(const s of u.sources)assert(['direct','related'].includes(s.strength)&&['topHat','homework'].includes(s.kind));
}
const reached=new Set();
for(let seed=1;seed<=500;seed++){
 const form=engine.form(seed,{conceptIds:ids}),counts={};assert.equal(form.length,25);assert.equal(new Set(form.map(q=>q.rootId||q.id)).size,25);
 for(const q of form){assert(ids.includes(q.conceptId));reached.add(q.conceptId);counts[q.responseType]=(counts[q.responseType]||0)+1;assert(engine.correct(q,q.answer));}
 assert.deepEqual(counts,{...counts,single:21,'true-false':1,match:1,order:1,target:1});assert(form.filter(q=>q.responseType==='single'&&q.media).length>=2);
 assert.deepEqual(Array.from(engine.form(seed,{conceptIds:ids}),q=>q.id),Array.from(form,q=>q.id));
}
assert.equal(reached.size,ids.length);
// Source-only pages remain eligible, including the explicit review topic absent from saved source questions.
assert(reached.has('exam-two-concept-standard-candle'));assert(reached.has('exam-two-concept-roche-overflow'));
assert.throws(()=>engine.form(1,{conceptIds:[]}),/Missing|complete/);
assert.deepEqual(Array.from(data.topHat),[]);assert.deepEqual(Array.from(data.homework||[]),[]);assert.deepEqual(Array.from(data.sourceSlides),[]);
console.log('Focus contract passed: all 30 review pages, 67 stable concepts, 188 roots, 500 valid scoped mocks, source gaps reachable and private question arrays empty.');
