document.addEventListener('DOMContentLoaded', function () {
  const input   = document.getElementById('local-q');
  const root    = document.querySelector('#main-content') || document.querySelector('main') || document.body;
  const results = document.getElementById('glossary-results');
  if (!input || !root || !results) return;

  // Vind de echte contentcontainer
  const main = root.querySelector('main') || root;

  // Welke kopjes gebruik je? (voorkeur H3, anders H2/H4)
  let headings = main.querySelectorAll('h3');
  if (headings.length === 0) headings = main.querySelectorAll('h2');
  if (headings.length === 0) headings = main.querySelectorAll('h4');
  if (headings.length === 0) {
    console.warn('[Glossary] Geen H3/H2/H4 gevonden. Zorg dat elk begrip een kopje is.');
    return;
  }

  const headingTag = headings[0].tagName.toLowerCase();
  const firstHeading = headings[0];

  // CSS: alles verbergen vánaf het eerste kopje (inleiding blijft)
  addOnceStyle(`
    .glossary-hide-start, .glossary-hide-start ~ * { display: none !important; }
    #glossary-results { margin-top: 1rem; }
  `);

  // Verzamel blokken met Range, wrapper-onafhankelijk
  const blocks = [];
  for (let i = 0; i < headings.length; i++) {
    const start = headings[i];
    const end   = headings[i+1] || null;

    const range = document.createRange();
    range.setStartBefore(start);
    if (end) range.setEndBefore(end);
    else     range.setEndAfter(main.lastElementChild || main.lastChild);

    const frag = range.cloneContents();            // “bevroren” kopie van dit begrip
    const html = nodeToHTML(frag);
    const text = frag.textContent.toLowerCase();
    blocks.push({ html, text });
  }

  // Helper: DocumentFragment -> HTML string
  function nodeToHTML(node) {
    const div = document.createElement('div');
    div.appendChild(node);
    return div.innerHTML;
  }

  function showAll() {
    // originele content terug tonen
    firstHeading.classList.remove('glossary-hide-start');
    results.style.display = 'none';
    results.innerHTML = '';
  }

  function showMatches(q) {
    const qq = (q || '').toLowerCase().trim();
    if (!qq) { showAll(); return; }
    const hits = blocks.filter(b => b.text.includes(qq));
    results.innerHTML = hits.length
      ? hits.map(b => `<section class="glossary-section">${b.html}</section>`).join('')
      : `<p>Geen resultaten voor <em>${escapeHtml(q)}</em>.</p>`;
    results.style.display = '';
    // verberg alleen de inhoud vanaf het eerste kopje; zoekveld + inleiding blijven zichtbaar
    firstHeading.classList.add('glossary-hide-start');

    // focus in de input houden zodat je kunt door-typen (bijv. "WLZ signalering")
    input.focus();
    const v = input.value;
    input.setSelectionRange(v.length, v.length);
  }

  // Events: live en Enter/Escape
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      if (!input.value.trim()) showAll();
      else showMatches(input.value);
    }, 120);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); input.value.trim() ? showMatches(input.value) : showAll(); }
    if (e.key === 'Escape') { input.value = ''; showAll(); }
  });

  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));}
  function addOnceStyle(css){
    if (document.getElementById('glossary-inline-style')) return;
    const tag = document.createElement('style'); tag.id='glossary-inline-style'; tag.textContent = css; document.head.appendChild(tag);
  }

  console.log(`[Glossary] Blokken: ${blocks.length}, heading tag: ${headingTag.toUpperCase()}`);
});
