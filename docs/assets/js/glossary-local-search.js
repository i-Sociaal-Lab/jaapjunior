(function () {
  // Zet op true als je console-debug wil zien
  const DEBUG = false;

  document.addEventListener('DOMContentLoaded', function () {
    const input   = document.getElementById('local-q');
    const results = document.getElementById('glossary-results');
    const source  = document.getElementById('glossary-source');
    if (!input || !results || !source) return;

    // 1) Bepaal heading-niveau binnen de bron (voorkeur H3, anders H2/H4)
    let headingSel = null;
    if (source.querySelectorAll('h3').length) headingSel = 'h3';
    else if (source.querySelectorAll('h2').length) headingSel = 'h2';
    else if (source.querySelectorAll('h4').length) headingSel = 'h4';

    if (!headingSel) {
      if (DEBUG) console.warn('[Glossary] Geen H3/H2/H4 in #glossary-source gevonden.');
      return;
    }

    // 2) Parse de bron in “blocks”: elke heading + alle volgende siblings t/m volgende heading
    const blocks = [];
    (function collect() {
      // We lopen door ALLE directe kinderen in de broncontainer.
      const kids = Array.from(source.children);
      let i = 0;
      while (i < kids.length) {
        const el = kids[i];
        if (el.matches(headingSel)) {
          const sectionEls = [el];
          i++;
          while (i < kids.length && !kids[i].matches(headingSel)) {
            sectionEls.push(kids[i]);
            i++;
          }
          // clone naar HTML + platte tekst
          const wrap = document.createElement('section');
          wrap.className = 'glossary-section';
          sectionEls.forEach(n => wrap.appendChild(n.cloneNode(true)));
          const html = wrap.innerHTML;
          const text = normalize(wrap.textContent || '');
          blocks.push({ html, text });
        } else {
          i++;
        }
      }
    })();

    if (DEBUG) console.log(`[Glossary] Heading: ${headingSel.toUpperCase()}, blocks: ${blocks.length}`);

    // 3) Filter/render
    function normalize(s) {
      return String(s).toLowerCase();
    }

    function clearResults() {
      document.body.classList.remove('glossary-filtering');
      results.style.display = 'none';
      results.innerHTML = '';
    }

    function showMatches(query) {
      const q = normalize(query).trim();
      if (!q) { clearResults(); return; }

      const hits = blocks.filter(b => b.text.includes(q));
      if (DEBUG) console.log('[Glossary] query:', q, 'hits:', hits.length);

      if (hits.length === 0) {
        results.innerHTML = `<p>Geen resultaten voor <em>${escapeHtml(query)}</em>.</p>`;
      } else {
        results.innerHTML = hits.map(b => `<section class="glossary-section">${b.html}</section>`).join('');
      }
      results.style.display = 'block';
      document.body.classList.add('glossary-filtering');

      // focus behouden zodat je kunt door-typen (bv. "wlz signalering")
      input.focus();
      const v = input.value;
      input.setSelectionRange(v.length, v.length);
    }

    // 4) Events: live + Enter/Escape
    let t = null;
    input.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => showMatches(input.value), 120);
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter')  { e.preventDefault(); showMatches(input.value); }
      if (e.key === 'Escape') { input.value = ''; clearResults(); }
    });

    // 5) Helpers
    function escapeHtml(s){
      return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }
  });
})();
