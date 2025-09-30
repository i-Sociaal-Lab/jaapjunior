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

  /* verberg de globale Just-the-Docs zoekbalk */
  .main-header .search { display:none !important; }

  /* optioneel: wat lucht tussen blokken */
  .glossary-section, [data-section] { margin-bottom: 1rem; }
</style>

<!-- LOKALE ZOEK (alleen deze pagina) -->
<div id="page-search" style="max-width:720px;margin:1rem 0;">
  <input id="local-q" type="search" placeholder="Zoek in deze pagina…" style="width:100%;padding:.5rem;">
</div>

<!-- De begrippen, build-time ingevoegd door de Action -->
{% include begrippen.md %}

<!-- Laad de lokale filterlogica (extern JS; geen Liquid/Markdown interferentie) -->
<script src="{{ '/assets/js/glossary-local-search.js' | relative_url }}"></script>
