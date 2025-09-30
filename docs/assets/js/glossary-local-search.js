document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('local-q');
  const root  = document.querySelector('#main-content') || document.querySelector('main') || document.body;
  if (!input || !root) return;

  // Headings detecteren (H3 voorkeur, anders H2/H4)
  let headings = root.querySelectorAll('main h3, #main-content h3');
  if (headings.length === 0) headings = root.querySelectorAll('main h2, #main-content h2');
  if (headings.length === 0) headings = root.querySelectorAll('main h4, #main-content h4');
  if (headings.length === 0) { console.warn('[Glossary] Geen H3/H2/H4 gevonden.'); return; }

  const container = root.querySelector('main') || root;

  // ⚠️ Pak ALLEEN siblings vanaf de éérste heading → zo blijft je zoekbalk (die erbóven staat) ongemoeid
  const firstHeading = container.querySelector('h1,h2,h3,h4,h5,h6');
  if (!firstHeading) { console.warn('[Glossary] Geen heading gevonden onder <main>.'); return; }

  const els = [];
  for (let n = firstHeading; n; n = n.nextElementSibling) els.push(n);

  // Label per sectie (zonder DOM te verplaatsen)
  let sectionIndex = -1;
  els.forEach(el => {
    if (el.matches('h3, h2, h4')) sectionIndex++;
    if (sectionIndex >= 0) el.setAttribute('data-section', String(sectionIndex));
  });
  const totalSections = sectionIndex + 1;
  if (totalSections <= 0) { console.warn('[Glossary] Geen secties gelabeld.'); return; }

  // Tekstbuffer per sectie
  const textBySection = new Array(totalSections).fill('');
  els.forEach(el => {
    const idx = +el.getAttribute('data-section');
    if (Number.isFinite(idx) && idx >= 0) textBySection[idx] += ' ' + (el.textContent || '');
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
      const attr = el.getAttribute('data-section');
      if (attr == null) {
        // Element heeft geen sectie (bv. jouw zoekbalk of andere wrapper) → altijd zichtbaar laten
        el.style.display = '';
        return;
      }
      const idx = +attr;
      el.style.display = (idx >= 0 && hit[idx]) ? '' : 'none';
    });

    // Handig: focus op input houden zodat je kunt door-typen (“WLZ spatie signalering”)
    input.focus();
    const v = input.value;
    input.setSelectionRange(v.length, v.length);
  }

  // Live filter + Enter/Escape
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => filterTo(input.value), 120);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); filterTo(input.value); }
    else if (e.key === 'Escape') { input.value = ''; showAll(); }
  });

  console.log(`[Glossary] Secties: ${totalSections}. Eerste heading: ${(firstHeading||{}).tagName}`);
});
