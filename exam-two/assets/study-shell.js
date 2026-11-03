/* Presentation-only navigation. Does not read or write learning records. */
(() => {
  'use strict';
  const tabs=[['home','Study'],['review','Review'],['progress','Progress']];
  function activeTab(route){
    if(['progress','backup'].includes(route))return 'progress';
    if(route==='review')return 'review';
    return 'home';
  }
  function navHTML(route){
    const active=activeTab(route);
    return tabs.map(([id,label])=>`<a href="#/topic/${id}"${active===id?' class="on" aria-current="page"':''}>${label}</a>`).join('');
  }
  function setRoute(route){
    document.getElementById('study-nav').innerHTML=navHTML(route);
    document.body.dataset.studyView=route;
    document.getElementById('study-tools').open=false;
  }
  function revealTarget(root,id){
    if(!id)return false;
    const target=[...root.querySelectorAll('[id]')].find(el=>el.id===id);
    if(!target)return false;
    for(let node=target;node&&root.contains(node);node=node.parentElement){if(node.tagName==='DETAILS')node.open=true;}
    target.scrollIntoView({block:'start'});
    const heading=target.querySelector('h2,h3,summary')||target;
    if(!heading.hasAttribute('tabindex'))heading.setAttribute('tabindex','-1');
    heading.focus({preventScroll:true});
    return true;
  }
  function bindLesson(root){
    root.querySelectorAll('[data-lesson-target]').forEach(button=>button.onclick=()=>revealTarget(root,button.dataset.lessonTarget));
    const jump=root.querySelector('#lesson-heading');
    if(jump)jump.onchange=()=>revealTarget(root,jump.value);
  }
  function bindTools(render){
    const menu=document.getElementById('study-tools');
    menu.addEventListener('click',event=>{
      const link=event.target.closest('a');
      if(!link)return;
      menu.open=false;
      const target=link.dataset.toolTarget;
      if(!target)return;
      const reveal=()=>revealTarget(document.getElementById('app'),target);
      if(link.hash===location.hash){event.preventDefault();render();reveal();}
      else window.addEventListener('hashchange',()=>setTimeout(reveal,0),{once:true});
    });
    menu.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();event.preventDefault();}});
    document.addEventListener('pointerdown',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false;});
  }
  window.ASTRShell={activeTab,navHTML,setRoute,revealTarget,bindLesson,bindTools};
})();
