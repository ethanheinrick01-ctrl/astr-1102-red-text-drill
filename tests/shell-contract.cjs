const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.resolve(__dirname,'..'),context={window:{},document:{},location:{hash:'#/topic/home'},setTimeout:fn=>fn()};
vm.runInNewContext(fs.readFileSync(path.join(root,'exam-two/assets/study-shell.js'),'utf8'),context);
const shell=context.window.ASTRShell;
// Existing deep links stay in their primary lane, including active saved runs.
for(const route of ['home','guide','learn','sources','unknown','practice','cases','listing','run'])assert.equal(shell.activeTab(route),'home');
assert.equal(shell.activeTab('review'),'review');
for(const route of ['focus','focus-sources','review-map','test'])assert.equal(shell.activeTab(route),'focus');
for(const route of ['progress','backup'])assert.equal(shell.activeTab(route),'progress');
for(const route of ['home','learn','practice','run','progress','backup','focus','test']){
 const html=shell.navHTML(route);assert.equal((html.match(/<a /g)||[]).length,4);assert.equal((html.match(/aria-current="page"/g)||[]).length,1);assert(html.includes('Exam focus'));
 assert(html.includes(`href="#/topic/${shell.activeTab(route)}" class="on" aria-current="page"`));
}
// A heading jump opens its source/media ancestors and moves keyboard focus without changing routes.
const heading={attrs:{},setAttribute(k,v){this.attrs[k]=v;},hasAttribute(k){return k in this.attrs;},focus(options){this.focused=options;}};
const disclosure={tagName:'DETAILS',open:false,parentElement:null};
const target={id:'lesson-watch',tagName:'SECTION',parentElement:disclosure,scrollIntoView(o){this.scrolled=o;},querySelector(){return heading;}};
const lesson={querySelectorAll(selector){assert.equal(selector,'[id]');return [target];},contains(node){return [target,disclosure].includes(node);}};
assert.equal(shell.revealTarget(lesson,'missing'),false);assert.equal(disclosure.open,false);
assert.equal(shell.revealTarget(lesson,''),false);
assert.equal(shell.revealTarget(lesson,'lesson-watch'),true);assert.equal(disclosure.open,true);assert.equal(heading.attrs.tabindex,'-1');assert.equal(heading.focused.preventScroll,true);assert.equal(target.scrolled.block,'start');assert.equal(context.location.hash,'#/topic/home');
// Tools closes on navigation, supports Escape, and reaches History even on the current route.
const events={},globalEvents={},docEvents={},summary={focus(){this.focused=true;}},nav={};
const menu={open:true,addEventListener(k,fn){events[k]=fn;},querySelector(){return summary;},contains(node){return node===this;}};
context.document={body:{dataset:{}},getElementById(id){return {'study-nav':nav,'study-tools':menu,app:lesson}[id];},addEventListener(k,fn){docEvents[k]=fn;}};
context.window.addEventListener=(k,fn,options)=>{globalEvents[k]={fn,options};};
shell.setRoute('run');assert.equal(menu.open,false);assert.equal(context.document.body.dataset.studyView,'run');assert(nav.innerHTML.includes('href="#/topic/home" class="on" aria-current="page"'));
let renders=0;shell.bindTools(()=>renders++);menu.open=true;
let prevented=false;events.keydown({key:'Escape',preventDefault(){prevented=true;}});assert.equal(menu.open,false);assert.equal(summary.focused,true);assert(prevented);
menu.open=true;docEvents.pointerdown({target:{}});assert.equal(menu.open,false);
context.location.hash='#/topic/progress';
const historyLink={hash:'#/topic/progress',dataset:{toolTarget:'lesson-watch'}};
events.click({target:{closest(){return historyLink;}},preventDefault(){}});assert.equal(renders,1);assert(heading.focused);
historyLink.hash='#/topic/progress';context.location.hash='#/topic/home';events.click({target:{closest(){return historyLink;}}});assert.equal(globalEvents.hashchange.options.once,true);globalEvents.hashchange.fn();assert.equal(target.scrolled.block,'start');
// Loader ordering matters: the shell must exist before the application starts.
const index=fs.readFileSync(path.join(root,'exam-two/index.html'),'utf8');assert(index.indexOf('assets/study-shell.js')<index.indexOf('assets/start.js'));assert(index.indexOf('assets/study-shell.css')>index.indexOf('assets/readability.css'));assert(index.includes('id="study-tools"'));assert(index.includes('data-tool-target="saved-activities"'));
console.log('Shell contract passed: preserved route families, exactly four tabs, accessible lesson jumps, Tools/History navigation, and loader order.');
