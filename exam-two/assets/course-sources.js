/* Course material only. Learner progress and machine data are never transmitted. */
window.ASTRLocalSourcesReady=(async()=>{
 await window.ASTRSourcePack.ready;
 if(window.ASTRSourcePack.loaded)return;
 const response=await fetch('course-sources/material.json');if(!response.ok)throw Error('Course material could not load.');
 const material=await response.json();
 if(material.sourceSlides?.length!==445||material.topHat?.length!==50||material.homework?.length!==18)throw Error('Course material is incomplete.');
 Object.assign(window.ASTR1102_EXAM2,{sourceSlides:material.sourceSlides,topHat:material.topHat,homework:material.homework});
 for(const [id,v] of Object.entries(material.visuals))window.ASTR1102_VISUALS[id]={...window.ASTR1102_VISUALS[id],visuals:v.visuals.map(p=>({...p,moduleId:id,status:'verified'}))};
 document.querySelector('[data-source-state]').textContent='Lecture pages, figures, Top Hat and homework are loaded. Import a sources-and-films pack to add course-image films.';
})().catch(error=>{
 const status=document.querySelector('[data-source-error]');
 if(status)status.textContent='Bundled course material could not load. Original study and practice remain available; you can import a source pack below. '+error.message;
});
