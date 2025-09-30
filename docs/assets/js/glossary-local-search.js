document.addEventListener('DOMContentLoaded', function () {
  const input   = document.getElementById('local-q');
  const root    = document.querySelector('#main-content') || document.querySelector('main') || document.body;
  const results = document.getElementById('glossary-results');
  if (!input || !root || !results) return;

  // 1) Vind het hoofdcontainer-element met je content
  const main = root.querySelector('main') || root;

  // 2) Bepaal welk heading-niveau jouw begrippen gebruiken
  let headingSel = 'h3';
  if (main.querySelectorAll('h3').length === 0) {
    if      (main.querySelectorAll('h2').length) headingSel = 'h2';
    else if (main.querySelectorAll('h4').length) headingSel = 'h4';
    else { console.warn('[Glossary] Geen H3/H2/H4 gevonden.'); return; }
  }

  // 3) Verzamel alle blokken (section = heading + alle volgende siblings t/m volgende heading)
  const blocks = [];
  (function collectSections() {
    // We nemen ALLE directe kinderen van <main> als referentie
    const kids = Array.from(main.children);
    let i = 0;
    while (i < kids.length) {
      const el = kids[i];
      if (el.matches(headingSel)) {
        const sectionNodes = [el];
        i++;
        while (i < kids.length && !kids[i].matches(headingSel)) {
          sectionNodes.push(kids[i]);
          i++;
        }
        // Maak een "bevroren" kopie van dit blok (HTML-string) voor rendering in resultaten
        const wrapper = document.createElement('section');
        sectionNodes.forEach(n => wrapper.appendChild(n.cloneNode(true)));
        const html = wrapper.innerHTML;
        const text = wrapper.textContent.toLowerCase();
        blocks.push({ html, text });
      } else {
        i++;
      }
    }
  })();

  if (!blocks.length) {
    console.warn('[Glossary] Geen blokken gedetecteerd op basis van headings.');
    return;
  }

  // 4) Hulpfuncties om te wisselen tussen "alles" en "matches"
  function showAll() {
    results.style.display = 'none';
    results.innerHTML = '';
    // originele content blijft gewoon staan
  }

  function showMatches(q) {
    const qq = (q || '').toLowerCase().trim();
    if (!qq) { showAll(); return; }
    const hits = blocks.filter(b => b.text.includes(qq));
    // Render alleen de HITS in het resultatenvak
    results.innerHTML = hits.map(b => `<section class="glossary-section">${b.html}</section>`).join('') ||
                        `<p>Geen resultaten voor <em>${escapeHtml(q)}</em>.</p>`;
    results.style.display = '';
    // (Originele content laten we staan; visueel wil je meestal alleen de matches tonen)
    // Verberg originele content (alleen de secties) door CSS class toe te voegen aan main:
    main.classList.add('glossary-hidden');
  }

  // 5) Stijltje om originele content te verbergen zodra er gefilterd wordt
  addOnceStyle(`
    .glossary-hidden > ${headingSel},
    .glossary-hidden > ${headingSel} ~ * { display: none; }
    /* maar het resultatenvak blijft zichtbaar */
    #glossary-results { margin-top: 1rem; }
  `);

  // 6) Event handlers: live filter + Enter/Escape
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      if (!input.value.trim()) {
        main.classList.remove('glossary-hidden');
        showAll();
      } else {
        showMatches(input.value);
      }
    }, 120);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.value.trim()) {
        main.classList.remove('glossary-hidden');
        showAll();
      } else {
        showMatches(input.value);
      }
    } else if (e.key === 'Escape') {
      input.value = '';
      main.classList.remove('glossary-hidden');
      showAll();
    }
  });

  // 7) Helper: veilige HTML-escape voor de "geen resultaten" boodschap
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // 8) Helper: éénmalig style-tag toevoegen
  function addOnceStyle(css) {
    if (document.getElementById('glossary-inline-style')) return;
    const tag = document.createElement('style');
    tag.id = 'glossary-inline-style';
    tag.textContent = css;
    document.head.appendChild(tag);
  }

  console.log(`[Glossary] ${blocks.length} secties gedetecteerd met headings: ${headingSel.toUpperCase()}`);
});
