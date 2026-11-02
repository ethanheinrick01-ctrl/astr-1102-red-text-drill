/* Reading presentation does not modify course content or durable records. */
(() => {
  'use strict';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function html(id, role, source) {
    const entry = window.ASTR1102_READING?.[id]?.[role];
    return entry && entry.source === source ? entry.html : `<p>${escape(source)}</p>`;
  }
  function sources(concept, body) {
    const entry = window.ASTR1102_READING?.[concept.id]?.body;
    const emphasis = entry?.source === body ? entry.sourceRefs || [] : [];
    return {...concept, conceptId: concept.id,
      sourceRefs: [...(concept.sourceRefs || []), ...emphasis],
      source: [concept.source, ...emphasis.map(ref => ref.label)].filter(Boolean).join(' · ')};
  }
  function legend(concepts, lesson) {
    const hasEmphasis = concepts.some((c, i) => {
      const entry = window.ASTR1102_READING?.[c.id]?.body;
      return entry?.source === lesson.body[i * 3] && entry.html.includes('study-emphasis');
    });
    return `<aside class="study-legend" aria-label="Reading colors"><span><mark class="study-term">Magenta</mark> · terms and names</span>${hasEmphasis ? '<span><mark class="study-emphasis">Yellow highlight</mark> · lecture emphasis</span>' : ''}<span><strong class="checkpoint-label">Peach + label</strong> · understanding checkpoint</span><p>Color guides reading. It does not predict exam questions.</p></aside>`;
  }
  window.ASTRReading = {html, sources, legend};
})();
