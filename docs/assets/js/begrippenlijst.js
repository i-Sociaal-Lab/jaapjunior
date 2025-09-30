document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 Begrippenlijst script gestart");

  const RAW_URL = "https://raw.githubusercontent.com/i-Sociaal-Lab/jaapjunior/main/packages/api/jw/Begrippenlijst_Jw_en_Wmo.md";
  const BUST = "?v=" + Date.now();

  const app = document.getElementById("app");
  const input = document.getElementById("q");

  fetch(RAW_URL + BUST, { cache: "no-store" })
    .then(r => {
      console.log("Fetch status:", r.status, r.statusText);
      if (!r.ok) throw new Error("HTTP " + r.status + " " + r.statusText);
      return r.text();
    })
    .then(md => {
      // Markdown -> HTML
      const html = DOMPurify.sanitize(marked.parse(md, { mangle:false, headerIds:true }));
      app.innerHTML = html;

      // 1) groepeer alle inhoud per H3 (kop = begrip)
      const sections = [];
      let current = null;

      // we lopen over alle directe kinderen van #app
      const kids = Array.from(app.childNodes);
      kids.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "H3") {
          // start nieuwe section
          current = document.createElement("div");
          current.className = "glossary-section";
          current.appendChild(node); // h3 zelf erin
          app.appendChild(current);  // append aan eind; we gaan daarna rest verplaatsen
          sections.push(current);
        } else if (current) {
          // hang deze node bij de lopende section
          current.appendChild(node);
        }
      });

      // NB: als er geen H3's zijn, is er niets te groeperen en zoeken we in hele app
      const searchable = sections.length ? sections : [app];

      // 2) lokale zoekfunctie (alleen in deze pagina)
      const norm = s => (s || "").toLowerCase();

      const handleSearch = () => {
        const q = norm(input.value);
        if (!q) {
          searchable.forEach(sec => sec.style.display = "");
          return;
        }
        searchable.forEach(sec => {
          const hay = norm(sec.textContent);
          sec.style.display = hay.includes(q) ? "" : "none";
        });
      };

      // kleine debounce zodat we niet op elke toetsaanslag alles herrekenen
      let t;
      input.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(handleSearch, 120);
      });

      console.log("✅ Begrippenlijst gerenderd (sections:", searchable.length, ")");
    })
    .catch(e => {
      app.textContent = "Kon document niet laden.";
      console.error("❌ Fout:", e);
    });
});
