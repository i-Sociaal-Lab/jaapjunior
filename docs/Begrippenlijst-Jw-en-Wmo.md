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
  // 0) Pak referenties
  const headerInput = document.querySelector('#search-input'); // JTD-zoekveld (header)
  const main = document.querySelector('#main-content main') || document.querySelector('main');
  if (!main) { console.warn('[Glossary] Geen <main> gevonden'); return; }

  // 1) Bouw sections: elke <h3> + alle volgende siblings tot de volgende <h3>
  const h3s = Array.from(main.querySelectorAll('h3'));
  if (h3s.length === 0) {
    console.warn('[Glossary] Geen <h3> gevonden. Zorg dat begrippen met "### " beginnen.');
    return;
  }

  // Verzamel alle nodes in documentvolgorde
  const allNodes = [];
  for (let n = main.firstChild; n; n = n.nextSibling) allNodes.push(n);

  // Hulpfuncties
  const isH3 = n => n && n.nodeType === 1 && n.tagName === 'H3';
  const normalize = s => (s || '').toLowerCase();

  // Bepaal per h3 het bereik (startIndex..endIndex) binnen allNodes
  const sections = [];
  allNodes.forEach((node, idx) => {
    if (isH3(node)) {
      sections.push({ start: idx, end: null });
    }
  });
  sections.forEach((s, i) => {
    s.end = (i < sections.length - 1) ? sections[i+1].start - 1 : allNodes.length - 1;
  });

  // Pre-calc text per section
  sections.forEach(s => {
    const slice = allNodes.slice(s.start, s.end + 1);
    s.nodes = slice.filter(n => n.nodeType === 1); // alleen element-nodes verbergen/tonen
    s.text  = normalize(slice.map(n => n.textContent || '').join(' '));
  });

  // 2) Filterfunctie
  const showAll = () => sections.forEach(s => s.nodes.forEach(n => n.style.display = ''));
  const filterTo = (q) => {
    const qq = normalize(q);
    if (!qq) return showAll();
    sections.forEach(s => {
      const hit = s.text.includes(qq);
      s.nodes.forEach(n => n.style.display = hit ? '' : 'none');
    });
  };

  // 3) Koppel aan JTD-zoek (Enter = filter, Esc = reset). Live-typen = live filter.
  if (headerInput) {
    // Live-filter (debounced)
    let t;
    headerInput.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (!headerInput.value) showAll();
      }, 150);
    });

    headerInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // voorkom JTD-navigatie naar zoekresultaten
        filterTo(headerInput.value);
        const panel = document.getElementById('search-results'); // leeg resultatenpaneel
        if (panel) panel.innerHTML = '';
      } else if (e.key === 'Escape') {
        showAll();
        // panel leegmaken is optioneel:
        const panel = document.getElementById('search-results');
        if (panel) panel.innerHTML = '';
      }
    });
  } else {
    console.warn('[Glossary] #search-input (JTD) niet gevonden; voeg evt. een lokaal zoekveld toe.');
  }

  // 4) Log een korte status
  console.log(`[Glossary] ${sections.length} secties gedetecteerd (op basis van <h3>).`);
});
</script>
{% endraw %}
