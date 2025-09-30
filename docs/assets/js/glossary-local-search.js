document.addEventListener('DOMContentLoaded', function () {
  // Zoekveld en hoofdcontent
  const input = document.getElementById('local-q');
  const root  = document.querySelector('#main-content') || document.querySelector('main') || document.body;
  if (!input || !root) return;

  // Bepaal welke heading tag echt in je HTML staat (h3 is ideaal; val terug op h2/h4)
  let headings = root.querySelectorAll('main h3, #main-content h3');
  if (headings.length === 0) headings = root.querySelectorAll('main h2, #main-content h2');
  if (headings.length === 0) headings = root.querySelectorAll('main h4, #main-content h4');

  if (headings.length === 0) {
    console.warn('[Glossary] Geen H3/H2/H4 gevonden. Zet elk begrip als ### Kopje in je Markdown.');
    return;
  }

  // Neem alle directe kinderen onder <main> (of de eerste container die je content bevat)
  const container = root.querySelector('main') || root;
  // Sommige themes wikkelen de inhoud nog in een extra div; pak in dat geval díe als basis
  let base = container;
  const firstHeading = base.querySelector('h1,h2,h3,h4,h5,h6');
  if (firstHeading && firstHeading.parentElement && firstHeading.parentElement !== base) {
    base = firstHeading.parentElement;
  }

  const els = Array.from(base.children);

  // Label elk element met data-section = index van voorafgaande heading (zonder DOM te verplaatsen)
  let sectionIndex = -1;
  els.forEach(el => {
    if (el.matches('h3, h2, h4')) sectionIndex++;
    if (sectionIndex >= 0) el.setAttribute('data-section', String(sectionIndex));
  });
  const totalSections = sectionIndex + 1;
  if (totalSections <= 0) {
    console.warn('[Glossary] Geen secties gelabeld; staat je content wel direct onder <main>?');
    return;
  }

  // Maak tekstbuffer per sectie (voor snelle matches)
  const textBySection = new Array(totalSections).fill('');
  els.forEach(el => {
    const idx = +el.getAttribute('data-section');
    if (idx >= 0) textBySection[idx] += ' ' + (el.textContent || '');
  });

  const norm = s => (s || '').toLowerCase();

  function showAll() {
    els.forEach(el => { el.style.display = ''; });
  }

  function filterTo(q) {
    const qq = norm(q);
    if (!qq) { showAll(); return; }
    const hit = new Array(totalSections).fill(false);
    for (let i = 0; i < totalSections; i++) {
      hit[i] = norm(textBySection[i]).includes(qq);
    }
    els.forEach(el => {
      const idx = +el.getAttribute('data-section');
      el.style.display = (idx >= 0 && hit[idx]) ? '' : 'none';
    });
  }

  // Live filter + Enter/Escape gedrag
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => filterTo(input.value), 120);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); filterTo(input.value); }
    else if (e.key === 'Escape') { input.value = ''; showAll(); }
  });

  console.log(`[Glossary] Secties: ${totalSections}. Eerste heading: ${(headings[0]||{}).tagName}`);
});
