---
layout: default
title: Begrippenlijst Jw en Wmo
nav_exclude: true
search_exclude: false
---

<style>
  .side-bar { display:none !important; }
  .main { margin-left:0 !important; }
  /* verberg JTD’s globale zoekbalk zodat die niet in de weg zit */
  .main-header .search { display:none !important; }
  /* optioneel, iets ruimte tussen secties */
  [data-section] { margin-bottom: 1rem; }
</style>

<!-- LOKALE ZOEKBALK (alleen deze pagina) -->
<div id="page-search" style="max-width:720px;margin:1rem 0;">
  <input id="local-q" type="search" placeholder="Zoek in deze pagina…" style="width:100%;padding:.5rem;">
</div>

<!-- HIER KOMT JE GLOSSARY-INHOUD -->
{% include begrippen.md %}
{% raw %}
<script>
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('local-q');
  // Pak een veilige container: eerst #main-content, anders <main>, anders body
  const root = document.querySelector('#main-content') || document.querySelector('main') || document.body;
  if (!input || !root) return;

  // 1) Zoek welke heading-niveau je echt hebt (h3 is ideaal, maar fallback naar h2/h4)
  let headings = root.querySelectorAll('h3');
  if (headings.length === 0) headings = root.querySelectorAll('h2');
  if (headings.length === 0) headings = root.querySelectorAll('h4');

  // Als nog steeds niets gevonden: geef het terug in de console en stop
  if (headings.length === 0) {
    console.warn('[Glossary] Geen H3/H2/H4 gevonden. Check in de Elements-tab welke tag je begrippen hebben.');
    return;
  }

  // 2) Label alle elementen met data-section = index van de voorgaande heading
  //    Zonder nodes te verplaatsen of te wrappen.
  const els = Array.from((root.querySelector('main') || root).children);
  let currentSection = -1;
  els.forEach(el => {
    if (el.matches('h3, h2, h4')) currentSection++;
    if (currentSection >= 0) el.setAttribute('data-section', String(currentSection));
  });

  const totalSections = currentSection + 1;
  if (totalSections <= 0) {
    console.warn('[Glossary] Geen secties gelabeld; staat je content wel rechtstreeks onder <main>?');
    return;
  }

  // 3) Maak tekstbuffers per sectie om tegen te zoeken
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
    // Bepaal welke secties een hit hebben
    const hit = new Array(totalSections).fill(false);
    for (let i = 0; i < totalSections; i++) {
      hit[i] = norm(textBySection[i]).includes(qq);
    }
    // Toon/verberg alle elementen per sectie
    els.forEach(el => {
      const idx = +el.getAttribute('data-section');
      el.style.display = (idx >= 0 && hit[idx]) ? '' : 'none';
    });
  }

  // 4) Live filter met kleine debounce
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => filterTo(input.value), 120);
  });

  // 5) Enter/Escape gedrag
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); filterTo(input.value); }
    else if (e.key === 'Escape') { input.value = ''; showAll(); }
  });

  console.log(`[Glossary] Gelabelde secties: ${totalSections}. Heading tag: ${headings[0].tagName}`);
});
</script>
{% endraw %}
