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
{% include begrippen.md %}

{% raw %}
<script>
document.addEventListener('DOMContentLoaded', function () {
  // Pak de JTD-zoekbalk en de hoofdcontent
  const input = document.querySelector('#search-input');           // JTD header search
  const main  = document.querySelector('#main-content main') || document.querySelector('main');
  if (!main) return;

  // Vind alle begrippen als H3-koppen (jouw include moet ### Term gebruiken)
  const h3s = Array.from(main.querySelectorAll('h3'));
  if (h3s.length === 0) return; // niets te groeperen

  // Helper: alle nodes vanaf een H3 tot net vóór de volgende H3
  function nodesOfSection(startH3) {
    const nodes = [startH3];
    let n = startH3.nextSibling;
    while (n && !(n.nodeType === 1 && n.tagName === 'H3')) {
      nodes.push(n);
      n = n.nextSibling;
    }
    return nodes;
  }

  // Bouw een index van sections: [ { nodes: Node[], text: '...' } ]
  const sections = h3s.map(h3 => {
    const nodes = nodesOfSection(h3);
    const text  = nodes.map(n => (n.textContent || '')).join(' ').toLowerCase();
    return { nodes, text };
  });

  // Toon alles
  function showAll() {
    sections.forEach(s => s.nodes.forEach(n => { if (n.style) n.style.display = ''; }));
  }

  // Filter op query (in kop én definitie)
  function filterTo(q) {
    const qq = (q || '').trim().toLowerCase();
    if (!qq) { showAll(); return; }
    sections.forEach(s => {
      const match = s.text.includes(qq);
      s.nodes.forEach(n => { if (n.style) n.style.display = match ? '' : 'none'; });
    });
  }

  // ENTER = filter deze pagina, ESC = reset
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();                // voorkom JTD-navigatie
        filterTo(input.value);
        const panel = document.getElementById('search-results');
        if (panel) panel.innerHTML = '';   // resultatenpaneel leegmaken
      } else if (e.key === 'Escape') {
        showAll();
        input.value = '';
        const panel = document.getElementById('search-results');
        if (panel) panel.innerHTML = '';
      }
    });

    // Als het veld leeg raakt, toon weer alles
    input.addEventListener('input', () => {
      if (!input.value) showAll();
    });
  }
});
</script>
{% endraw %}
