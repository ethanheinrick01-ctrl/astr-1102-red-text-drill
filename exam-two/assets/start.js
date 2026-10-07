(async()=>{
  await window.ASTRSourcePack.ready;
  const version='20261006-public1';
  for(const src of ['assets/exam-two.js','assets/app.js','assets/progress-backup.js']){
    await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src+'?v='+version;script.onload=resolve;script.onerror=()=>reject(Error('Could not load '+src));document.body.append(script);});
  }
})().catch(error=>{const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='The study lab could not finish loading. Reload this page. '+error.message;document.querySelector('main').prepend(p);});
