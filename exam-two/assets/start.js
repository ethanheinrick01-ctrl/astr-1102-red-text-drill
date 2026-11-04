(async()=>{
  await window.ASTRSourcePack.ready;
  if(window.ASTRLocalSourcesReady)try{await window.ASTRLocalSourcesReady;}catch(error){const status=document.querySelector('[data-source-error]');if(status)status.textContent='Course material could not load. Study, practice and backups remain available. '+error.message;}
  for(const src of ['assets/exam-two.js','assets/progress-backup.js','assets/study-app.js']){
    await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src+'?v=20261103-video-open';script.onload=resolve;script.onerror=()=>reject(Error('Could not load '+src));document.body.append(script);});
  }
})().catch(error=>{const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='The study lab could not finish loading. Reload this page. '+error.message;document.getElementById('page').prepend(p);});
