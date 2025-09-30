document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 Begrippenlijst script gestart");

  const RAW_URL = "https://raw.githubusercontent.com/i-Sociaal-Lab/jaapjunior/main/packages/api/jw/Begrippenlijst_Jw_en_Wmo.md";
  const BUST = "?v=" + Date.now();

  fetch(RAW_URL + BUST, { cache: "no-store" })
    .then(r => {
      console.log("Fetch status:", r.status, r.statusText);
      if (!r.ok) throw new Error("HTTP " + r.status + " " + r.statusText);
      return r.text();
    })
    .then(md => {
      console.log("Markdown lengte:", md.length);
      const html = DOMPurify.sanitize(marked.parse(md, { mangle: false, headerIds: true }));
      document.getElementById("app").innerHTML = html;
      console.log("✅ Begrippenlijst gerenderd");
    })
    .catch(e => {
      document.getElementById("app").textContent = "Kon document niet laden.";
      console.error("❌ Fout:", e);
    });
});
