# Chatbot op i-sociaaldomein.nl (WordPress)

De chatbot staat als iframe op de productpagina
https://i-sociaaldomein.nl/producten/assistent-berichtenverkeer-en-zorgadministratie/

De code hieronder staat in Elementor in een **HTML-element** op die pagina.
Deze code staat niet in de chatbot zelf, maar in WordPress. Dit bestand is de reservekopie.

## Wat het doet

- Toont de chatbot in een vak van 560px hoog (maximaal schermhoogte min 160px).
- Knop **Vergroten** rechtsonder, in de huisstijl van de site (paars `#7b1ea2`, Poppins).
- Vergroten zet de chatbot bijna schermvullend met een donkere achtergrond. Het gesprek blijft staan.
- Terug naar normaal: nogmaals op de knop klikken (dan **Verkleinen**), op de achtergrond klikken of Esc drukken.

## Aanpassen

1. Open de pagina met **Bewerk met Elementor**.
2. Klik op het chatbot-vak en vervang de code in het HTML-element.
3. Klik op **Bijwerken** en leeg de cache via **Cache** in de zwarte balk.

Let op: de chatbot mag alleen ingesloten worden op `i-sociaaldomein.nl`. Dat staat in
`packages/frontend/nginx.conf.template` (`frame-ancestors`). Komt de chatbot op een ander domein,
dan moet dat domein daar worden toegevoegd.

## Code

```html
<style>
#jj-wrap{position:relative}
#jj-frame{width:100%;height:560px;max-height:calc(100vh - 160px);border:none;display:block;border-radius:20px;box-shadow:0 12px 48px rgba(0,0,0,0.2);background:#fff}
#jj-size{display:flex;align-items:center;gap:8px;margin:12px 0 0 auto;padding:10px 20px!important;min-height:0!important;height:auto!important;line-height:1.2!important;border:none;border-radius:8px;background:#7b1ea2;color:#fff;font-family:"Poppins",sans-serif;font-size:16px;font-weight:600;cursor:pointer;transition:background .2s}
#jj-size:hover{background:#64188a}
#jj-backdrop{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:99998}
#jj-wrap.jj-big{position:fixed;inset:24px;z-index:99999;display:flex;flex-direction:column}
#jj-wrap.jj-big #jj-frame{flex:1;height:auto;max-height:none}
#jj-wrap.jj-big #jj-size{margin-top:12px}
#jj-wrap.jj-big + #jj-backdrop{display:block}
@media(max-width:600px){#jj-wrap.jj-big{inset:8px}}
</style>

<div id="jj-wrap">
  <iframe id="jj-frame" title="Jaap Junior" src="https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/"></iframe>
  <button id="jj-size" type="button" aria-expanded="false">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
    <span>Vergroten</span>
  </button>
</div>
<div id="jj-backdrop"></div>

<script>
(function(){
  var wrap=document.getElementById('jj-wrap');
  var btn=document.getElementById('jj-size');
  var icon=btn.querySelector('svg');
  var label=btn.querySelector('span');
  var backdrop=document.getElementById('jj-backdrop');
  var iconGroot='<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>';
  var iconKlein='<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>';
  function setBig(big){
    wrap.classList.toggle('jj-big',big);
    icon.innerHTML=big?iconKlein:iconGroot;
    label.textContent=big?'Verkleinen':'Vergroten';
    btn.setAttribute('aria-expanded',big);
    document.body.style.overflow=big?'hidden':'';
  }
  setBig(false);
  btn.addEventListener('click',function(){setBig(!wrap.classList.contains('jj-big'));});
  backdrop.addEventListener('click',function(){setBig(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setBig(false);});
})();
</script>
```
