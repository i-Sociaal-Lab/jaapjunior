---
layout: default
title: Begrippenlijst Jw en Wmo
nav_exclude: true
search_exclude: false
---

<style>
  /* sidebar verbergen, content full-width */
  .side-bar { display:none !important; }
  .main { margin-left:0 !important; }
  /* desgewenst: site-brede zoekbalk zichtbaar laten (of hier verbergen) */
  /* .main-header .search { display:none !important; } */
</style>

{% comment %}
De Action zet tijdens de build de meest recente MD in _includes/begrippen.md.
Daardoor staat de inhoud nu "build-time" in de site en wordt die door
Just the Docs in de zoekindex opgenomen.
{% endcomment %}

 <style>
  .side-bar { display:none !important; }
  .main { margin-left:0 !important; }
  /* verberg de globale JTD zoekbalk zodat hij niet in de weg zit */
  .main-header .search { display:none !important; }
  /* optioneel: iets lucht tussen begrippen */
  .glossary-section { margin-bottom: 1.25rem; }
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
  const q = document.getElementById('local-q');
  const main = document.querySelector('#main-content main') || document.querySelector('main');
  if (!q || !main) return;

  // 1) Wrap elke H3 + alles tot de volgende H3 in <section.glossary-section>
  const sections = [];
  const h3s = Array.from(main.querySelectorAll('h3'));
  if (h3s.length === 0) {
    console.warn('[Glossary] Geen <h3> gevonden. Zet elk begrip als ### Kopje in je Markdown.');
    return;
  }
  h3s.forEach(h3 => {
    // maak wrapper vóór de h3
    const wrap = document.createElement('section');
    wrap.className = 'glossary-section';
    h3.parentNode.insertBefore(wrap, h3);
    wrap.appendChild(h3);

    // verplaats alle siblings tot de volgende H3 in deze wrapper
    let n = wrap.nextSibling;
    while (n && !(n.nodeType === 1 && n.tagName === 'H3')) {
      const next = n.nextSibling;
      wrap.appendChild(n);
      n = next;
    }
    sections.push(wrap);
  });

  // 2) Filterfunctie over de wrappers
  const norm = s => (s || '').toLowerCase();
  function filterTo(text) {
    const qq = norm(text);
    if (!qq) {
      sections.forEach(sec => sec.style.display = '');
      return;
    }
    sections.forEach(sec => {
      const hit = norm(sec.textContent).includes(qq);
      sec.style.display = hit ? '' : 'none';
    });
  }

  // 3) Live filter (met kleine debounce)
  let t;
  q.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => filterTo(q.value), 120);
  });

  console.log(`[Glossary] ${sections.length} secties aangemaakt en klaar voor lokale zoek.`);
});
</script>
{% endraw %}
