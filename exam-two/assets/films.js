/* Accessible local players. Viewing never writes assessment or mastery state. */
(() => {
 'use strict';
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function html(moduleId){
  const f=window.ASTR1102_FILMS?.find(f=>f.moduleId===moduleId);if(!f)return '';
  const privateFilm=window.ASTRPrivateFilms?.[f.id],src=privateFilm?.src||f.src,poster=privateFilm?.poster||f.poster;
  return `<section class="card film-card" data-film="${esc(f.id)}"><p class="eyebrow">NARRATED EXPLAINER · ${privateFilm?'LECTURE-FIGURE EDITION':'ORIGINAL TEACHING ANIMATION'}</p><h2>${esc(f.title)}</h2><p class="small muted">${esc(f.source)} · ${esc(f.voice)}</p><video controls playsinline preload="metadata" poster="${esc(poster)}" aria-label="${esc(f.title)}"><source src="${esc(src)}" type="video/mp4"><track kind="captions" src="${esc(f.captions)}" srclang="en" label="English" default>Your browser cannot play this film. Use the download link below.</video><div class="film-chapters" aria-label="Explainer chapters">${f.stages.map((s,i)=>`<button type="button" class="btn" data-film-seek="${s.start}" aria-label="Jump to ${esc(s.title)}">${i+1}. ${esc(s.title)}</button>`).join('')}</div><p class="small" data-film-stage role="status"></p><div class="toolbar"><label>Playback speed <select data-film-speed>${[.75,1,1.25,1.5,2].map(v=>`<option value="${v}"${v===1?' selected':''}>${v}×</option>`).join('')}</select></label><a class="btn" href="${esc(src)}" download="astronomy-${esc(f.id)}.mp4">Download film</a></div><details><summary>Transcript and lecture evidence</summary>${f.stages.map(s=>`<h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>`).join('')}<p class="small muted">${esc(f.disclosure)} ${privateFilm?'The original lecture figure appears beside the model. The figure is unchanged; the model is a teaching reconstruction.':'Import the private sources-and-films pack to watch the edition with the supplied lecture image beside the model.'}</p><a class="btn" href="${esc(f.transcriptSrc)}" download>Download transcript</a>${!privateFilm&&window.ASTRSourcePack?'<button type="button" class="btn" data-import-films>Import course-image films</button>':''}</details><p class="small muted">Watching is study support; it does not award mastery.</p></section>`;
 }
 function bind(root){
  root.querySelectorAll('[data-film]').forEach(card=>{
   const f=window.ASTR1102_FILMS.find(f=>f.id===card.dataset.film),v=card.querySelector('video'),status=card.querySelector('[data-film-stage]');
   const update=()=>{const s=f.stages.filter(s=>s.start<=v.currentTime+.05).at(-1)||f.stages[0];status.textContent=s.title;card.querySelectorAll('[data-film-seek]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.filmSeek)===s.start)));};
   card.querySelectorAll('[data-film-seek]').forEach(b=>b.onclick=()=>{const seek=()=>{v.currentTime=Number(b.dataset.filmSeek);update();};if(v.readyState>=1)seek();else{v.addEventListener('loadedmetadata',seek,{once:true});v.load();}});
   card.querySelector('[data-film-speed]').onchange=e=>v.playbackRate=Number(e.target.value);
   v.ontimeupdate=update;v.onerror=()=>status.textContent='This film could not load. Reload or use the downloaded copy.';update();
   card.querySelector('[data-import-films]')?.addEventListener('click',()=>window.ASTRSourcePack.choose());
  });
 }
 window.ASTRFilms={html,bind};
})();
