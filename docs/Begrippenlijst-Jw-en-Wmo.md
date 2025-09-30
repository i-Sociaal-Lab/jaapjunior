---
layout: default
title: Begrippenlijst Jw en Wmo
nav_exclude: true
search_exclude: false
---

<style>
  /* sidebar weg, content full-width */
  .side-bar { display:none !important; }
  .main { margin-left:0 !important; }

  /* verberg de globale Just-the-Docs zoekbalk – we gebruiken een lokale */
  .main-header .search { display:none !important; }

  /* optioneel: wat lucht tussen blokken */
  .glossary-section { margin-bottom: 1rem; }

  /* wanneer gefilterd: verberg alleen de originele begrippen-sectie */
  body.glossary-filtering #glossary-source { display: none !important; }

  /* resultatenvak */
  #glossary-results { margin-top: 1rem; }
</style>

<!-- LOKALE ZOEKBALK (alleen deze pagina) -->
<div id="page-search" style="max-width:720px;margin:1rem 0;">
  <input id="local-q" type="search" placeholder="Zoek in deze pagina…" style="width:100%;padding:.5rem;">
</div>

<!-- RESULTATENKADER: matches komen hier -->
<div id="glossary-results" style="display:none"></div>

<!-- BRON: de build-time ingevoegde begrippen, in een duidelijke container -->
<div id="glossary-source">
{% include begrippen.md %}
</div>

<!-- laad het script -->
<script src="{{ '/assets/js/glossary-local-search.js' | relative_url }}"></script>
