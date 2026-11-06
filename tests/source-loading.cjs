const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.join(__dirname,'../exam-two'),source=fs.readFileSync(path.join(root,'assets/course-sources.js'),'utf8');
async function check(loaded,failure,packHomework){
 const nodes={'[data-source-state]':{},'[data-source-error]':{}},original=[{id:'imported'}],w={ASTRSourcePack:{ready:Promise.resolve(),loaded},ASTR1102_EXAM2:{sourceSlides:original,homework:packHomework},ASTR1102_VISUALS:{kept:{visuals:original}}};let calls=0;
 const material={sourceSlides:Array(445).fill({}),topHat:Array(50).fill({}),homework:Array(18).fill({}),visuals:{kept:{visuals:[]}}};
 vm.runInNewContext(source,{window:w,document:{querySelector:s=>nodes[s]},fetch:async()=>{calls++;if(failure)throw Error('offline');return {ok:true,json:async()=>material}}});
 await w.ASTRLocalSourcesReady;
 if(loaded&&packHomework?.length){assert.equal(calls,0);assert.equal(w.ASTR1102_EXAM2.homework,packHomework);assert.equal(w.ASTR1102_EXAM2.sourceSlides,original);assert.equal(w.ASTR1102_VISUALS.kept.visuals,original);}
 else if(loaded){assert.equal(calls,1);assert.equal(w.ASTR1102_EXAM2.homework.length,18);assert.equal(w.ASTR1102_EXAM2.sourceSlides,original);assert.equal(w.ASTR1102_VISUALS.kept.visuals,original);}
 else if(failure){assert.match(nodes['[data-source-error]'].textContent,/Original study and practice remain available/);assert.equal(w.ASTR1102_EXAM2.sourceSlides,original);}
 else assert.equal(w.ASTR1102_EXAM2.sourceSlides.length,445);
}
(async()=>{await check(true,false,Array(18).fill({}));await check(true,false,[]);await check(false,true);await check(false,false);console.log('Source loading PASS: imported packs win; a pack without homework gets the bundled homework; offline failure resolves; bundled fallback loads.');})();
