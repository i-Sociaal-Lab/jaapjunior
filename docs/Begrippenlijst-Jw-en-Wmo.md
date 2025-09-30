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

{% raw %}
<script>
document.addEventListener("DOMContentLoaded", () => {
  // 1) Elementen
  const input = document.querySelector("#search-input");   // JTD header-zoek
  const content = document.querySelector("#main-content") || document.querySelector(".main-content") || document.body;

  if (!input || !content) return;

  // 2) Maak secties per H3 (begrip = <h3> ... definitie = alles erna tot volgende H3)
  //    Als er geen H3's zijn, valt hij terug op de hele content.
  let sections = [];
  (function buildSections(){
    const kids = Array.from(content.querySelectorAll("main > *"));
    let current = null;
    kids.forEach(node => {
      if (node.tagName === "H3") {
        current = document.createElement("section");
        current.className = "glossary-section";
        node.parentNode.insertBefore(current, node);
        current.appendChild(node);
        sections.push(current);
      } else if (current) {
        current.appendChild(node);
      }
    });
    if (!sections.length) sections = [content.querySelector("main") || content];
  })();

  // 3) Filterfunctie
  const normalize = s => (s || "").toLowerCase();
  const showAll = () => sections.forEach(s => s.style.display = "");
  const filterTo = q => {
    const qn = normalize(q);
    if (!qn) return showAll();
    sections.forEach(sec => {
      sec.style.display = normalize(sec.textContent).includes(qn) ? "" : "none";
    });
  };

  // 4) Enter = filter deze pagina, Esc = reset
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();           // voorkom dat JTD naar een resultaat navigeert
      const q = input.value.trim();
      filterTo(q);
      // optie: resultatenpaneel verbergen
      const panel = document.getElementById("search-results");
      if (panel) panel.innerHTML = "";
    } else if (e.key === "Escape") {
      showAll();
      input.value = "";
      const panel = document.getElementById("search-results");
      if (panel) panel.innerHTML = "";
    }
  });

  // 5) Als je het veld leegmaakt met de muis, toon weer alles
  input.addEventListener("input", () => {
    if (!input.value) showAll();
  });

  // 6) Kleine helperknop “Alles tonen” rechts van het zoekveld (optioneel)
  const wrap = document.querySelector(".search-input-wrap");
  if (wrap && !wrap.querySelector(".clear-local-filter")) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "clear-local-filter";
    btn.style = "margin-left:.5rem";
    btn.textContent = "Alles tonen";
    btn.addEventListener("click", () => { input.value = ""; showAll(); });
    wrap.appendChild(btn);
  }
});
</script>
{% endraw %}
