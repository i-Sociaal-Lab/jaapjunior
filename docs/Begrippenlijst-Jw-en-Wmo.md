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

# Begrippenlijst Jw en Wmo

{% comment %}
De Action zet tijdens de build de meest recente MD in _includes/begrippen.md.
Daardoor staat de inhoud nu "build-time" in de site en wordt die door
Just the Docs in de zoekindex opgenomen.
{% endcomment %}
{% include begrippen.md %}
