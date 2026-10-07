/* Known source revisions are validated and stored only in this browser. No uploads. */
(() => {
  'use strict';
  const DB='astr1102-private-course-sources-v1',STORE='packs',KEY='exam-two',VERSION='astr1102-private-sources-v1';
  let active=false,problem='',database,loadedPack;
  const open=()=>new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.onblocked=()=>reject(Error('Close another study-lab tab and try again.'));});
  const access=async(mode,action)=>{database ||= await open();return new Promise((resolve,reject)=>{const tx=database.transaction(STORE,mode);let result;const req=action(tx.objectStore(STORE));req.onsuccess=()=>{result=req.result};tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Source pack was not saved.'));});};
  function validate(pack){
    if(!pack||pack.format!==VERSION||pack.course!=='ASTR1102'||pack.exam!==KEY)throw Error('Choose the ASTR 1102 Exam 2 private source pack.');
    const specs=window.ASTR1102_EXAM2.sourcePackRevisions;
    const spec=specs.find(s=>s.version===pack.version&&s.slides===pack.sourceSlides?.length&&s.families===pack.topHat?.length&&s.assets===Object.keys(pack.assets||{}).length&&(!pack.revision||pack.revision===s.revision));
    if(!spec)throw Error('This is not a complete supported source-pack revision. Your saved progress has not changed.');
    const png=/^data:image\/png;base64,[A-Za-z0-9+/]+=*$/;
    for(const [name,image]of Object.entries(pack.assets))if(!name.startsWith('assets/visuals/exam-two/')||typeof image!=='string'||!png.test(image)||!image.startsWith('data:image/png;base64,iVBOR'))throw Error('Invalid source image.');
    const plain=v=>typeof v==='string',indices=(q,v)=>Number.isInteger(v)&&v>=0&&v<q.choices.length,slideIDs=new Set(),pageIDs=new Set();
    for(const s of pack.sourceSlides){const pageKey=s.lecture+':'+s.page;if(!plain(s.id)||slideIDs.has(s.id)||pageIDs.has(pageKey)||!plain(s.sourceId)||!plain(s.text)||!Number.isInteger(s.page)||s.page<1||!spec.lectures.includes(s.lecture)||(s.image&&!pack.assets[s.image]))throw Error('Invalid or duplicate source slide.');slideIDs.add(s.id);pageIDs.add(pageKey);}
    const qIDs=new Set();
    for(const q of pack.topHat){
      if(!plain(q.id)||qIDs.has(q.id)||!spec.lectures.includes(q.lecture)||!plain(q.prompt)||!Array.isArray(q.choices)||!q.choices.length||!q.choices.every(plain)||!plain(q.note)||!Array.isArray(q.captures)||!q.captures.length||!q.captures.every(c=>pack.assets[c.src]&&plain(c.source)))throw Error('Invalid source question.');
      qIDs.add(q.id);
      if(!indices(q,q.displayedAnswer)&&!(q.displayedAnswer===null&&indices(q,q.supportedAnswer)&&['selected-ungraded','no-displayed-key'].includes(q.answerStatus)&&(q.selectedAnswer===null||indices(q,q.selectedAnswer))))throw Error('Invalid answer evidence; a selection must not be presented as a graded key.');
    }
    if(!pack.visuals||Object.keys(pack.visuals).length!==spec.modules.length)throw Error('Incomplete figure catalog.');
    for(const [id,catalog]of Object.entries(pack.visuals))if(!spec.modules.includes(id)||!Array.isArray(catalog.visuals)||!catalog.visuals.every(v=>pack.assets[v.src]&&['id','title','alt','caption','notice','source'].every(k=>plain(v[k]))))throw Error('Invalid figure catalog.');
    return pack;
  }
  function apply(pack){
    const urls={};for(const [file,image]of Object.entries(pack.assets)){const raw=atob(image.split(',')[1]);urls[file]=URL.createObjectURL(new Blob([Uint8Array.from(raw,c=>c.charCodeAt(0))],{type:'image/png'}));}
    window.ASTR1102_EXAM2.sourceSlides=pack.sourceSlides.map(s=>({...s,image:s.image?urls[s.image]:null}));
    window.ASTR1102_EXAM2.topHat=pack.topHat.map(q=>({...q,captures:q.captures.map(c=>({...c,src:urls[c.src]}))}));
    for(const [id,v]of Object.entries(pack.visuals))window.ASTR1102_VISUALS[id]={...window.ASTR1102_VISUALS[id],intro:'Inspect the supplied course figures before retrieval.',visuals:v.visuals.map(p=>({...p,moduleId:id,src:urls[p.src],status:'verified'}))};
    const q=window.ASTR1102_QUIZZES.find(q=>q.kind==='source-review');if(q){q.description=pack.topHat.length+' supplied course-question families. Selected responses, displayed keys and source-supported answers are distinguished; no mastery is awarded.';q.questions=window.ASTR1102_EXAM2.topHat;}
    active=true;loadedPack=pack;
  }
  async function install(file){if(file.size>30*1024*1024)throw Error('This file is too large to be a supported Exam 2 source pack.');const pack=validate(JSON.parse(await file.text()));await access('readwrite',s=>s.put(pack,KEY));location.reload();}
  function render(){
    const host=document.getElementById('course-source-pack');if(!host)return;
    host.innerHTML='<details id="source-pack-details"><summary>Course figures and supplied question review</summary><p data-source-state></p><label class="button ghost" style="display:inline-flex;cursor:pointer">'+(active?'Replace source pack':'Import private source pack')+'<input data-source-file type="file" accept=".json,application/json" style="position:absolute;width:1px;height:1px;opacity:0"></label><p class="e2-muted">Select a compatible ASTR1102-Exam2-Private-Sources.json on each device. Lecture figures, passages and supplied questions stay in this browser and are never uploaded. Original practice and progress work without this file.</p><p data-source-error role="status"></p></details>';
    const newest=window.ASTR1102_EXAM2.sourcePackRevisions.at(-1),spec=loadedPack&&window.ASTR1102_EXAM2.sourcePackRevisions.find(s=>s.slides===loadedPack.sourceSlides.length);
    host.querySelector('[data-source-state]').textContent=active?`Source pack ready: ${loadedPack.sourceSlides.length} slide passages, ${Object.keys(loadedPack.assets).length} images, and ${loadedPack.topHat.length} supplied question families. ${spec.revision!==newest.revision?'This older pack remains supported. Import the updated pack to add Lecture 18 source figures and questions.':''}`:'Original study guides and practice are ready. Import the updated pack for Lectures 13–18 course materials.';
    const status=host.querySelector('[data-source-error]');status.textContent=problem;host.querySelector('[data-source-file]').onchange=async e=>{const file=e.target.files[0];if(!file)return;status.textContent='Checking and saving in this browser…';try{await install(file)}catch(err){status.textContent='Source pack not imported: '+err.message;}};
  }
  window.ASTRSourcePack={ready:(async()=>{try{const pack=await access('readonly',s=>s.get(KEY));if(pack)apply(validate(pack));}catch(e){problem='Private sources could not be loaded: '+e.message;}render();})(),choose(){const detail=document.getElementById('source-pack-details');if(detail){detail.open=true;detail.scrollIntoView({behavior:'smooth',block:'center'});detail.querySelector('[data-source-file]').click();}},get loaded(){return active;},validate};
})();
