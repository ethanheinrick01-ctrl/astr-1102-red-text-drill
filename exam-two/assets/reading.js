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
  function sourceHTML(content, concept) {
    const entry = window.ASTR1102_READING?.[concept.id];
    const note = [entry?.body, entry?.sourceNote].find(value => value?.source === concept.teaching);
    if (!note) return content;
    return content.replace(`<p class="e2-source-note">Study explanation: ${escape(concept.teaching)}</p>`,
      `<div class="e2-source-note"><strong>Study explanation</strong>${note.html}</div>`);
  }
  function summary(id, points) {
    const entries = window.ASTR1102_READING_SUMMARIES?.[id] || [];
    return points.map((source, i) => `<li>${entries[i]?.source === source ? entries[i].html : escape(source)}</li>`).join('');
  }
  function placeCheckpoints(root, concepts, lesson) {
    concepts.forEach((concept, i) => {
      const entry = window.ASTR1102_READING?.[concept.id];
      if (!entry || !['body', 'worked', 'checkpoint'].every((role, offset) => entry[role].source === lesson.body[i * 3 + offset])) return;
      const card = root.querySelector(`[id="${concept.id}"]`);
      const checkpoint = card?.querySelector(':scope > .mistake');
      if (!checkpoint) return;
      const point = [...card.querySelectorAll(':scope > .reading-body li')].reverse()
        .find(line => line.textContent.toLowerCase().includes(entry.checkpointAfter.toLowerCase()));
      if (point) point.append(checkpoint);
    });
  }
  function legend(concepts, lesson) {
    const hasEmphasis = concepts.some((c, i) => {
      const entry = window.ASTR1102_READING?.[c.id]?.body;
      return entry?.source === lesson.body[i * 3] && entry.html.includes('study-emphasis');
    });
    const hasMeaning = concepts.some((c, i) => {
      const entry = window.ASTR1102_READING?.[c.id]?.body;
      return entry?.source === lesson.body[i * 3] && entry.html.includes('study-definition');
    });
    return `<aside class="study-legend" aria-label="Reading colors"><span><mark class="study-term">Magenta</mark> · terms and names</span>${hasMeaning ? '<span><mark class="study-definition">Lime</mark> · meaning and sequence</span>' : ''}${hasEmphasis ? '<span><mark class="study-emphasis">Yellow highlight</mark> · lecture emphasis</span>' : ''}<span><strong class="checkpoint-label">Peach + label</strong> · understanding checkpoint</span></aside>`;
  }
  window.ASTRReading = {html, sources, sourceHTML, summary, placeCheckpoints, legend};
})();
