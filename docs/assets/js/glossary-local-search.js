document.addEventListener('DOMContentLoaded', function () {
  const input   = document.getElementById('local-q');
  const root    = document.querySelector('#main-content') || document.querySelector('main') || document.body;
  const results = document.getElementById('glossary-results');
  if (!input || !root || !results) return;

  const main = root.querySelector('main') || root;

  // Kies heading-niveau
  let headings = main.querySelectorAll('h3');
  if (headings.length === 0) headings = main.querySelectorAll('h2');
  if (headings.length === 0) headings = main.querySelectorAll('h4');
  if (headings.length === 0) {
    console.warn('[Glossary] Geen H3/H2/H4 gevonden. Zet elk begrip als ### Kopje in je Markdown.');
    return;
  }
  const firstHeading = headings[0];

  // 1) Alle originele elementen vanaf het eerste kopje labelen
  (function markOriginals() {
    addOnceStyle(`
      body.glossary-filtering .glossary-original { display: none !important; }
      #glossary-results { margin-top: 1rem; }
    `);
    // label het eerste kopje en alle volgende element-siblings
    let n = firstHeading;
    while (n) {
      if (n.nodeType === 1) n.classList.add('glossary-original');
      n = n.nextElementSibling;
    }
  })();

  // 2) Blokken verzamelen via Range (wrapper-onafhankelijk)
  const blocks = [];
  for (let i = 0; i < headings.length; i++) {
    const start = headings[i];
    const end   = headings[i+1] || null;

    const range = document.createRange();
    range.setStartBefore(start);
    if (end) range.setEndBefore(end);
    else     range.setEndAfter(main.lastElementChild || main.lastChild);

    const frag = range.cloneContents();
    blocks.push({
      html: nodeToHTML(frag),
      text: (frag.textContent || '').toLowerCase()
    });
  }

  function nodeToHTML(node) {
    const div = document.createElement('div');
    div.appendChild(node);
    return div.innerHTML;
  }

  // 3) Tonen/verbergen
  function clearResults() {
    document.body.classList.remove('glossary-filtering');
    results.style.display = 'none';
    results.innerHTML = '';
  }

  function showMatches(q) {
    const qq = (q || '').toLowerCase().trim();
    if (!qq) { clearResults(); return; }

    const hits = blocks.filter(b => b.text.includes(qq));
    results.innerHTML =
      hits.length
        ? hits.map(b => `<section class="glossary-section">${b.html}</section>`).join('')
        : `<p>Geen resultaten voor <em>${escapeHtml(q)}</em>.</p>`;

    document.body.classList.add('glossary-filtering');
    results.style.display = '';
    // focus vasthouden zodat je kunt door-typen (bv. "wlz signalering")
    input.focus();
    const v = input.value;
    input.setSelectionRange(v.length, v.length);
  }

  // 4) Events
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => showMatches(input.value), 120);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter')  { e.preventDefault(); showMatches(input.value); }
    if (e.key === 'Escape') { input.value = ''; clearResults(); }
  });

  // helpers
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function addOnceStyle(css){
    if (document.getElementById('glossary-inline-style')) return;
    const tag = document.createElement('style');
    tag.id='glossary-inline-style';
    tag.textContent = css;
    document.head.appendChild(tag);
  }

  console.log(`[Glossary] Blokken: ${blocks.length}. Filtering activeert alleen .glossary-original; zoekveld & resultaten blijven zichtbaar.`);
});
