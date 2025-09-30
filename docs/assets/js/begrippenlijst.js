document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 Begrippenlijst script gestart");

  const RAW_URL = "https://raw.githubusercontent.com/i-Sociaal-Lab/jaapjunior/main/packages/api/jw/Begrippenlijst_Jw_en_Wmo.md";
  const app   = document.getElementById("app");
  const input = document.getElementById("q");

  if (!app)  { console.error("❌ #app niet gevonden"); return; }
  if (!input){ console.error("❌ #q (zoekveld) niet gevonden"); return; }

  const bust = "?v=" + Date.now();

  fetch(RAW_URL + bust, { cache: "no-store" })
    .then(r => {
      console.log("Fetch status:", r.status, r.statusText);
      if (!r.ok) throw new Error("HTTP " + r.status + " " + r.statusText);
      return r.text();
    })
    .then(md => {
      // Markdown → HTML (veilig)
      const html = DOMPurify.sanitize(marked.parse(md, { mangle:false, headerIds:true }));

      // Stop de HTML eerst in een tijdelijke container
      const tmp = document.createElement("div");
      tmp.innerHTML = html;

      // Bouw een nieuw documentfragment met sections per H3
      const frag = document.createDocumentFragment();
      let currentSection = null;

      // We lopen over de kinderen van tmp en verplaatsen ze naar frag
      Array.from(tmp.childNodes).forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "H3") {
          currentSection = document.createElement("section");
          currentSection.className = "glossary-section";
          currentSection.appendChild(node);      // H3 in de nieuwe section
          frag.appendChild(currentSection);      // section in fragment
        } else {
          // Alles na een H3 hoort bij die section; als er nog geen H3 was, maken we er één "algemeen"
          if (!currentSection) {
            currentSection = document.createElement("section");
            currentSection.className = "glossary-section";
            frag.appendChild(currentSection);
          }
          currentSection.appendChild(node);
        }
      });

      // Vervang de inhoud van #app schoon
      app.innerHTML = "";
      app.appendChild(frag);

      // Zoekfunctie: filter alleen de sections (H3 + bijbehorende tekst)
      const sections = Array.from(app.querySelectorAll(".glossary-section"));

      const norm = s => (s || "").toLowerCase();
      let t = null;

      const doFilter = () => {
        const q = norm(input.value);
        if (!q) {
          sections.forEach(sec => sec.style.display = "");
          return;
        }
        sections.forEach(sec => {
          // Zoek op de totale tekst van de section (kop + inhoud)
          const hit = norm(sec.textContent).includes(q);
          sec.style.display = hit ? "" : "none";
        });
      };

      input.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(doFilter, 120); // kleine debounce
      });

      console.log("✅ Begrippenlijst gerenderd — sections:", sections.length);
    })
    .catch(e => {
      app.textContent = "Kon document niet laden.";
      console.error("❌ Fout:", e);
    });
});
