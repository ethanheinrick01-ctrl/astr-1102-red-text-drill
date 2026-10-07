/* Course sources are imported locally. This module never sends network requests. */
(() => {
  'use strict';
  const DB='astr1102-private-course-sources-v1', STORE='packs', KEY='exam-two';
  const VERSION='astr1102-private-sources-v1';
  let active=false, problem='', database;
  const open=()=>new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.onblocked=()=>reject(Error('Close another study-lab tab and try again.'));});
  const access=async(mode,action)=>{database ||= await open();return new Promise((resolve,reject)=>{const tx=database.transaction(STORE,mode);let result;const req=action(tx.objectStore(STORE));req.onsuccess=()=>{result=req.result};tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Source pack was not saved.'));});};
  function validate(pack){
    if(!pack||pack.format!==VERSION||pack.course!=='ASTR1102'||pack.exam!==KEY)throw Error('Choose the ASTR 1102 Exam 2 private source pack.');
    if(pack.version!==window.ASTR1102_EXAM2.version)throw Error('This source pack is for a different content version. Your saved progress has not changed.');
    if(!Array.isArray(pack.sourceSlides)||pack.sourceSlides.length!==117||!Array.isArray(pack.topHat)||pack.topHat.length!==17)throw Error('The source pack is incomplete.');
    const png=/^data:image\/png;base64,[A-Za-z0-9+/]+=*$/;
    if(!pack.assets||Object.keys(pack.assets).length!==40)throw Error('The source pack must contain all 40 supplied figures and captures.');
    for(const [name,data]of Object.entries(pack.assets))if(!name.startsWith('assets/visuals/exam-two/')||typeof data!=='string'||!png.test(data)||!data.startsWith('data:image/png;base64,iVBOR'))throw Error('Invalid source image.');
    const plain=(v)=>typeof v==='string';
    for(const s of pack.sourceSlides)if(!plain(s.id)||!plain(s.sourceId)||!plain(s.text)||!Number.isInteger(s.page)||s.lecture<13||s.lecture>17||(s.image&&!pack.assets[s.image]))throw Error('Invalid source slide.');
    for(const q of pack.topHat)if(!plain(q.prompt)||!Array.isArray(q.choices)||!q.choices.every(plain)||!Number.isInteger(q.displayedAnswer)||q.displayedAnswer<0||q.displayedAnswer>=q.choices.length||!plain(q.note)||!Array.isArray(q.captures)||!q.captures.every(c=>pack.assets[c.src]&&plain(c.source)))throw Error('Invalid Top Hat source record.');
    const ids=Object.keys(window.ASTR1102_VISUALS);
    if(!pack.visuals||Object.keys(pack.visuals).length!==ids.length)throw Error('Incomplete figure catalog.');
    for(const [id,catalog]of Object.entries(pack.visuals))if(!ids.includes(id)||!Array.isArray(catalog.visuals)||!catalog.visuals.every(v=>pack.assets[v.src]&&['id','title','alt','caption','notice','source'].every(k=>plain(v[k]))))throw Error('Invalid figure catalog.');
    return pack;
  }
  function apply(pack){
    const urls={};for(const [file,data]of Object.entries(pack.assets)){const raw=atob(data.split(',')[1]);const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));urls[file]=URL.createObjectURL(new Blob([bytes],{type:'image/png'}));}
    window.ASTR1102_EXAM2.sourceSlides=pack.sourceSlides.map(s=>({...s,image:s.image?urls[s.image]:null}));
    window.ASTR1102_EXAM2.topHat=pack.topHat.map(q=>({...q,captures:q.captures.map(c=>({...c,src:urls[c.src]}))}));
    for(const [id,v]of Object.entries(pack.visuals))window.ASTR1102_VISUALS[id]={...window.ASTR1102_VISUALS[id],intro:'Inspect the supplied course figures before retrieval.',visuals:v.visuals.map(p=>({id:p.id,moduleId:id,src:urls[p.src],title:p.title,alt:p.alt,caption:p.caption,notice:p.notice,source:p.source,status:'verified'}))};
    const q=window.ASTR1102_QUIZZES.find(q=>q.kind==='source-review');if(q){q.description='17 supplied question families from 19 keyed screenshots. Review the displayed answers and qualification notes; this does not award mastery.';q.questions=window.ASTR1102_EXAM2.topHat;}
    active=true;
  }
  async function install(file){
    if(file.size>30*1024*1024)throw Error('This file is too large to be the Exam 2 source pack.');
    const pack=validate(JSON.parse(await file.text()));
    await access('readwrite',store=>store.put(pack,KEY));
    location.reload();
  }
  function render(){
    const host=document.getElementById('course-source-pack');if(!host)return;
    host.innerHTML='<details id="source-pack-details"><summary>Course figures and Top Hat source review</summary><p data-source-state></p><label class="button ghost" style="display:inline-flex;cursor:pointer">'+(active?'Replace source pack':'Import private source pack')+'<input data-source-file type="file" accept=".json,application/json" style="position:absolute;width:1px;height:1px;opacity:0"></label><p class="e2-muted">Select ASTR1102-Exam2-Private-Sources.json once on each device. Lecture figures, slide passages, and Top Hat captures stay in this browser and are never uploaded. Your practice and saved progress work without this file.</p><p data-source-error role="status"></p></details>';
    host.querySelector('[data-source-state]').textContent=active?'Source pack ready: 117 slide passages, 21 lecture figures, and 19 captures in 17 Top Hat families.':'The study guide and original practice are ready. Add the private source pack for the original course materials.';
    const status=host.querySelector('[data-source-error]');status.textContent=problem;
    host.querySelector('[data-source-file]').onchange=async e=>{const file=e.target.files[0];if(!file)return;status.textContent='Checking and saving in this browser…';try{await install(file)}catch(err){status.textContent='Source pack not imported: '+err.message;}};
  }
  window.ASTRSourcePack={
    ready:(async()=>{try{const pack=await access('readonly',store=>store.get(KEY));if(pack)apply(validate(pack));}catch(e){problem='Private sources could not be loaded: '+e.message;}render();})(),
    choose(){const detail=document.getElementById('source-pack-details');if(detail){detail.open=true;detail.scrollIntoView({behavior:'smooth',block:'center'});detail.querySelector('[data-source-file]').click();}},
    get loaded(){return active;}
  };
})();
