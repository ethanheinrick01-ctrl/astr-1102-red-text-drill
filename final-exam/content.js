/* Final profile preserves lecture note IDs and Homework 13 item identities. */
(() => {
  const data = window.ASTR1102_FINAL_STUDY;
  data.coverage = 'Lectures 31–34';
  data.lectureRange = '31–34';
  data.listingKey = 'astr1102-final-listing-v1';
  data.modules = data.lectureIds.map((id, i) => {
    const node = document.getElementById(id);
    return {id, number:i+1, title:node.querySelector('h1').textContent,
      kicker:'Lecture '+id.split('-')[1], source:node.querySelector('.page-title .muted').textContent,
      description:node.querySelector('.reading-body').textContent.trim().split('. ')[0]+'.',
      concepts:[...node.querySelectorAll('.guide-concept')].map(card => ({id:'final-exam-concept-'+card.id, anchor:card.id, label:card.querySelector('h2').textContent, moduleId:id}))};
  });
  data.modules.push({id:'homework-13',number:5,kicker:'Moodle',title:'Homework 13',description:'Dark matter, galaxy clusters and cosmology.',concepts:[{"id":"final-exam-concept-dark-matter-candidates","moduleId":"homework-13","label":"Dark matter candidates"},{"id":"final-exam-concept-structure-formation","moduleId":"homework-13","label":"Structure formation"},{"id":"final-exam-concept-cosmology-matches","moduleId":"homework-13","label":"Cosmology relationships"}]});
  data.concepts = data.modules.flatMap(m=>m.concepts);
  data.bossIds = data.questions.map(q=>q.id);
  window.ASTR1102_LISTINGS = [];
})();
