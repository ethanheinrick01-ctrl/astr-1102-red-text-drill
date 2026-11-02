const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = {window: {}};
for (const file of ['study-guides/modules.js', 'study-guides/reading-data.js', 'assets/reading.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, 'exam-two', file), 'utf8'), context);
}
const {ASTR1102_MODULES: modules, ASTR1102_READING: layouts, ASTRReading: reader} = context.window;
const words = html => html.replace(/<[^>]+>/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').toLowerCase().match(/[\p{L}\p{N}]+/gu);
let count = 0, highlighted = 0;
for (const module of modules) {
  const lesson = module.activities.find(a => a.type === 'lesson');
  module.concepts.forEach((concept, index) => {
    assert.ok(layouts[concept.id], `Missing layout for ${concept.id}`);
    ['body', 'worked', 'checkpoint'].forEach((role, offset) => {
      const source = lesson.body[index * 3 + offset];
      const html = reader.html(concept.id, role, source);
      assert.equal(layouts[concept.id][role].source, source);
      assert.ok(html.startsWith('<ul class="study-points">'));
      assert.match(html, /class="study-definition"/, `${concept.id} ${role} needs a local meaning`);
      assert.match(html, /class="study-(?:term|emphasis)"/, `${concept.id} ${role} needs its associated term`);
      assert.deepEqual(words(html), words(source.replace(/^(Worked example|Common mistake):\s*/, '')), `${concept.id} ${role} lost words`);
      assert.equal(reader.html(concept.id, role, source + ' revised'), `<p>${(source + ' revised').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}</p>`);
      assert.equal(reader.html(concept.id, role, source), html, 'Rendering must be idempotent');
      count++;
    });
    if (layouts[concept.id].body.html.includes('study-emphasis')) highlighted++;
    assert.ok(words(layouts[concept.id].body.html).join(' ').includes(words(layouts[concept.id].checkpointAfter).join(' ')), `${concept.id} needs an exact checkpoint placement`);
  });
  assert.equal(reader.legend(module.concepts, {body: []}).includes('Yellow highlight'), false);
  assert.equal(reader.legend(module.concepts, {body: []}).includes('Lime'), false);
  assert.match(reader.legend(module.concepts, lesson), /Lime/);
  assert.doesNotMatch(reader.legend(module.concepts, lesson), /does not predict|Color guides reading/);
  const summary = reader.summary(module.id, lesson.keyPoints);
  assert.deepEqual(words(summary), words(lesson.keyPoints.join(' ')), 'Summary annotations must preserve all original words');
  assert.equal((summary.match(/class="study-definition"/g) || []).length, lesson.keyPoints.length);
  assert.equal(reader.summary(module.id, ['<changed>']), '<li>&lt;changed&gt;</li>');
}
assert.equal(reader.html('unknown', 'body', '<script>bad()</script>'), '<p>&lt;script&gt;bad()&lt;/script&gt;</p>');
assert.equal(reader.html('unknown', 'body', null), '<p></p>');
assert.ok(layouts['exam-two-concept-absolute-magnitude'].body.html.includes('d = 10 ×'));
assert.ok(layouts['exam-two-concept-collapse-feedback'].body.html.includes('p + e⁻'));
assert.ok(layouts['exam-two-concept-rate-temperature'].body.html.includes('pp rate'));
assert.equal(count, modules.reduce((total, module) => total + module.concepts.length * 3, 0));
assert.equal(highlighted, 14);
// Render the actual source disclosure with every cited slide available in a test-only pack.
vm.runInNewContext(fs.readFileSync(path.join(root, 'exam-two/quizzes/exam-two-data.js'), 'utf8'), context);
const data = context.window.ASTR1102_EXAM2;
const protectedData = JSON.stringify(data);
const slidesBefore = data.sourceSlides;
data.sourceSlides = Array.from({length: 13}, (_, i) => i + 13).flatMap(lecture =>
  Array.from({length: 50}, (_, i) => ({id: `l${lecture}p${i + 1}`, sourceId: `exam-two-source-l${lecture}`, lecture, page: i + 1, text: `Evidence ${lecture}/${i + 1}`})));
vm.runInNewContext(fs.readFileSync(path.join(root, 'exam-two/assets/exam-two.js'), 'utf8'), context);
const expected = {
  'parallax-geometry': [[13,18]], 'inverse-square': [[13,19],[14,5]],
  'absolute-magnitude': [[14,16]], 'color-temperature': [[15,4]],
  'ism-density': [[17,9]], 'bok-globules': [[17,20]], 'kh-clock': [[19,6],[19,8]],
  'triggered-birth': [[19,10]], 'ms-lifetime-ratio': [[20,4]], 'cluster-controls': [[22,4]],
  'carbon-recycling': [[22,15]], 'white-dwarf-remnant': [[23,4]],
  'nebula-shapes': [[22,31]], 'massive-demographics': [[23,8]]
};
for (const [suffix, pages] of Object.entries(expected)) {
  const id = 'exam-two-concept-' + suffix, concept = data.concepts.find(c => c.id === id);
  const source = layouts[id].body.source, before = JSON.stringify(concept);
  const query = reader.sources(concept, source);
  const html = context.window.ASTRExamTwo.sourceHTML(query);
  for (const [lecture, page] of pages) assert.ok(html.includes(`<h4>Lecture ${lecture} · page ${page}</h4>`), `${id} omitted L${lecture}p${page}`);
  const stale = reader.sources(concept, source + ' revised');
  assert.equal(JSON.stringify(stale.sourceRefs), JSON.stringify(concept.sourceRefs), 'Changed teaching must not retain stale emphasis references');
  assert.equal(stale.source, concept.source);
  assert.equal(JSON.stringify(concept), before, 'Reading sources must not mutate concept or assessment references');
}
const unknown = {id: 'unknown', source: 'Original locator', sourceRefs: []};
assert.equal(JSON.stringify(reader.sources(unknown, '<script>bad()</script>').sourceRefs), '[]');
data.sourceSlides = [];
const parallax = data.concepts.find(c => c.id === 'exam-two-concept-parallax-geometry');
const noPack = context.window.ASTRExamTwo.sourceHTML(reader.sources(parallax, layouts[parallax.id].body.source));
assert.ok(noPack.includes('Lecture 13 · pages 18 · lecture emphasis'));
assert.ok(noPack.includes('require a compatible private source pack'));
data.sourceSlides = slidesBefore;
assert.equal(JSON.stringify(data), protectedData, 'Source rendering must preserve the complete course registry');
for (const concept of data.concepts) {
  const raw = context.window.ASTRExamTwo.sourceHTML({...concept, conceptId: concept.id});
  const annotated = reader.sourceHTML(raw, concept);
  assert.match(annotated, /<div class="e2-source-note">/);
  assert.match(annotated, /study-definition/);
  assert.deepEqual(words(annotated), words(raw), `${concept.id} source explanation words changed`);
  assert.equal(reader.sourceHTML(raw, {...concept, teaching: concept.teaching + ' changed'}), raw, 'Stale source notes must remain intact');
}
assert.equal(reader.sourceHTML('<pre>Private source stays unchanged</pre>', {id: 'unknown', teaching: '<untrusted>'}), '<pre>Private source stays unchanged</pre>');

// The existing checkpoint moves to the deepest matching subpoint exactly once.
const concept = modules[0].concepts[0], lesson = modules[0].activities.find(a => a.type === 'lesson');
const anchor = layouts[concept.id].checkpointAfter;
let directCheckpoint = {name: 'original checkpoint'}, moves = [];
const checkpoint = directCheckpoint;
const child = {textContent: anchor, append(value) { moves.push(value); directCheckpoint = null; }};
const parent = {textContent: 'Parent ' + anchor, append() { throw Error('Checkpoint attached above its matching subpoint'); }};
const card = {querySelector() { return directCheckpoint; }, querySelectorAll() { return [parent, child]; }};
const rootNode = {querySelector() { return card; }};
reader.placeCheckpoints(rootNode, [concept], lesson);
reader.placeCheckpoints(rootNode, [concept], lesson);
assert.deepEqual(moves, [checkpoint]);
directCheckpoint = checkpoint; moves = [];
reader.placeCheckpoints(rootNode, [concept], {...lesson, body: ['changed']});
assert.equal(moves.length, 0, 'Changed source must not reuse stale placement');
child.textContent = 'unrelated'; parent.textContent = 'unrelated';
reader.placeCheckpoints(rootNode, [concept], lesson);
assert.equal(moves.length, 0, 'Missing placement must keep the original checkpoint visible');
assert.equal(JSON.stringify(data), protectedData, 'Annotations must not mutate questions, concepts or source records');
console.log(`Reading contract passed: ${count} exact-source outlines across ${modules.length} sections; ${highlighted} concepts with sourced lecture emphasis; all 16 cited source pages render, stale references fall back, course registry unchanged.`);
