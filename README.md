# JaapJunior

## Jaapjunior – AI‑assistent voor iJw‑berichtenverkeer (Jeugdwet)

**Doel:** gebruikers helpen met **precieze, verifieerbare antwoorden** over het iJw‑berichtenverkeer tussen gemeenten en jeugdhulpaanbieders in Nederland.

**Scope:** alleen iJw 3.2, Jeugdwet en Regeling.

**Bronnen:** uitsluitend de officiële iStandaarden‑documenten.

---

## TL;DR 🎯

- **Wat doet Jaapjunior?** Beantwoordt vragen over iJw‑standaarden (toewijzing, start/stop, declareren) én de bijbehorende regels, codelijsten en XSD’s van **iJw release 3.2**.
- **Waar komt de kennis vandaan?** Uit de officiële documentatie van het Zorginstituut Nedederland over iJw 3.2, aangevuld met wettekst Jeugdwet en bijbehorende Regeling.
- **Hoe ziet een antwoord eruit?** Steeds in **vier vaste blokken**: *Interpretatie*, *Feitelijk antwoord*, *Samenvatting*, *Mogelijke vervolgvragen*, met **verplichte bronvermelding**.
- **Klopt het antwoord altijd?** Jaapjunior is nog in testfase en wordt ontwikkeld door het Ketenbureau i-Sociaal Domein. De antwoorden dienen altijd gecheckt te worden, AI kan hallucineren.

---

## Voor wie? 🧭

- **Gemeenten**
- **Zorgaanbieders**
- **Softwareleveranciers**
- **Ketenpartijen** binnen de ISD‑keten (BIDN, Ketenbureau, VECOZO)

---

## Wat kan Jaapjunior? ⚙️

- Vragen beantwoorden over:
    - **iJw‑standaarden**: toewijzing, start/stop levering, declaratie.
    - **iJw‑regels**: invulinstructies/regels (*Regels op berichten*), **codelijsten**, **XSD‑elementen**.
    - **Berichttypen**: alleen **JW301–JW325**
- Antwoorden zijn:
    - **Strikt brongebaseerd** (alleen iJw 3.2‑documenten).
    - **Controleerbaar** (met directe links bij “Bronnen”).
    - **Consistent geformatteerd** (vast antwoordsjabloon).

> Belangrijk: Vragen buiten iJw‑berichtenverkeer dienen te worden beantwoord met:
> 
> 
> *“Dit valt buiten de scope van deze AI‑agent.”* 🚧
> 

---

## Hoe werkt het (kennis & instructies) 🧩

### Ketencontext (samenvattend)

- **ISD‑keten**: landelijke infrastructuur voor elektronische berichten Jeugdwet.
- **Twee lagen in elk bericht**:
    1. **Payload** (iJw 3.2 businessinhoud)
    2. **Envelope/routing** (StUF‑Jw/Wmo aan gemeentekant, **VSP** aan aanbiederskant).
- **Knooppunten**: gemeenten via **GGk/BIDN**, aanbieders via **VECOZO**.

### Kennisbronnen (alleen deze zijn toegestaan) 📚

- **Regels op berichten iJw release 3.2**
- **Codelijst iJw release 3.2**
- **Master XSD iJw 3.2** (samenvatting xsd’s)
- **Begrippenlijst iJw & iWmo** (gebaseerd op begrippenlijst Zorginstituut)
- Jeugdwet en Regeling

> 💡 Tip: Deze pagina bevat de download-/doorkliks naar de brondocumenten en instructies.
> 

### Antwoordregels (samengevat uit de prompt) 🧷

- **Alleen** de bovengenoemde documenten gebruiken.
- Bij een **regelaanhaling** (bijv. IV087): **exacte tekst** overnemen uit *Regels op berichten*, **zonder** interpretatie of extra opmaak.
- Bij een **code** (bijv. JZ 588 of “Reden beëindiging”): **exacte tekst** uit de **Codelijst** overnemen.
- Bij termen uit de **Begrippenlijst**: **exacte definitie** overnemen.
- **Out‑of‑scope** (buiten iJw‑berichtenverkeer): standaard weigering in het Nederlands.
- **Bronnenblok verplicht**: antwoord is **ongeldig** zonder geldige links.

---

## Hoe stel je een goede vraag? 📝

1. **Wees specifiek**: noem berichttype(n) en element(en) waar je naar vraagt.
2. **Koppel aan je proces**: toewijzing, start/stop, declareren, woonplaatsbeginsel.
3. **Geef de informatiebehoefte aan**: zoek je een **regel**, een **code** of een **XSD‑element**?

**Voorbeelden**
- *“Is productcategorie verplicht in een **JW315** bij een **aspecifieke toewijzing**?”*

- *“Welke **Reden beëindiging** codes zijn toegestaan in **JW307**?”*

---

## Antwoordopmaak (altijd hetzelfde) 🧱

1. **Interpretatie van de vraag**
Korte parafrase; bij ambiguïteit eerst bevestiging vragen.
2. **Feitelijk antwoord**
Antwoord op basis van informatie in Kennisbronnen
    - Bij regels/codes: **exacte tekst** citeren, ongewijzigd.
3. **Samenvatting**
Korte, begrijpelijke recap.
4. **Mogelijke vervolgvragen (3 stuks)**
Inspirerend en relevant.

**Bronnen** 

Alleen de **daadwerkelijk geraadpleegde** documenten opnemen, elk op een **nieuwe regel** met geldige URL.

**Disclaimer (verplicht in elk antwoord)**

*“Dit antwoord is gegenereerd met behulp van AI, op basis van de toegevoegde documentatie en kan fouten bevatten. Verifieer het antwoord bij twijfel bij de experts van het Ketenbureau.”*

---

## Criteria voor documentkeuze 🎯

1. **Vragen over regels** → **Regels op berichten**
2. **Vragen over codes** → **Codelijst**
3. **Vragen over berichtinhoud / data‑elementen / verplichtheid** → **Master XSD**

> Let op: Raadpleeg alleen het document dat bij de vraag hoort. Niet combineren of extrapoleren. 🚫
> 

---

## Out‑of‑scope beleid 🚦

- Bij vragen buiten iJw‑berichtenverkeer of buiten de whitelist (JW301–JW325):**Antwoord**: *“Dit valt buiten de scope van deze AI‑agent.”*

---

## Repository‑structuur 🗂️

```
/
├─ README.md                     # Deze pagina
├─ /packages/api/src
│   ├─ prompt.ts                 # Volledige systeemprompt Jaapjunior
├─ /packages/api/jw
│   ├─ o.a. Jeugdwet.md          # Alle documenten die als kennisbron worden gebruikt
```

**Waarom zo?**

- **Transparantie**: prompt/instructies en bronnen op één plek.

- **Beheerbaarheid**: duidelijk editorial proces.

---

## Kwaliteit & redactie ✅

- **Brondiscipline**: alleen iJw 3.2‑documenten.
- **Exact citeren** waar voorgeschreven (regels/codes/definities).
- **Validatie**: elk antwoord moet een **“Bronnen”**‑blok met geldige links bevatten.
- **Wijzigingen** in iJw: update `/docs/` en pas voorbeelden aan.

---

## Privacy & veiligheid 🔒

- Verwerk geen persoonsgegevens in vragen/antwoorden.
- Houd je aan geldende wet‑ en regelgeving (AVG).
- Jaapjunior behandelt **alleen** iJw-standaarden, geen inhoudelijke casusinformatie.

---

## Bekende beperkingen ⚠️

- Beperkt tot **iJw 3.2.**
- Geen advies buiten de iJw standaard of interpretaties die niet letterlijk uit de bron komen.

---

## Contact & beheer 🛠️

- **Inhoudelijke vragen**: experts van het **Ketenbureau i‑Sociaal Domein** via ketenbureau@i-sociaaldomein.nl
- **Technische issues / bijdragen**: *idem*

---

### Appendix A – Voorbeeld van antwoord (format‑demonstratie) 🧪

> Let op: dit is een formatvoorbeeld. In echte antwoorden moeten citaten letterlijk uit de officiële documenten komen en de Bronnen moeten geldige URL’s bevatten naar de daadwerkelijk geraadpleegde documenten.
> 
1. **Interpretatie van de vraag**
    
    U vraagt of het verplicht is om een **productcategorie** in te vullen bij het indienen van een *verzoek om toewijzing* (JW315).
    
2. **Feitelijk antwoord**
    
    Het invullen van de productcategorie in een JW315 is afhankelijk van het type toewijzing:
    
    | Type toewijzing | Vereiste velden |
    | --- | --- |
    | **Specifieke toewijzing** | Productcategorie **en** productcode invullen |
    | **Aspecifieke toewijzing** | Alleen productcategorie invullen |
    | **Generieke toewijzing** | Productcategorie en productcode **niet** invullen |

Dit volgt uit invulinstructie **IV075** van de iJw-standaard:

> Bij het aanvragen van een product via een VOT of een VOW wordt Product in AangevraagdProduct (VOT) of NieuwProduct (VOW) gevuld afhankelijk van de gewenste toewijzingsvariant:
> 
> 
> Bij het aanvragen van een specifieke toewijzing moet zowel de productcategorie als de productcode gevuld worden.
> 
> Bij het aanvragen van aspecifieke toewijzingen moet alleen de productcategorie gevuld zijn.
> 
> Bij het aanvragen van generieke toewijzingen is het product leeg; de productcategorie en de productcode zijn niet gevuld.
> 
1. **Samenvatting**
Of een productcategorie verplicht is in een JW315 hangt af van het type toewijzing:
    - **Specifiek** → altijd productcategorie **en** productcode invullen
    - **Aspecifiek** → alleen productcategorie invullen
    - **Generiek** → beide velden leeg laten
2. **Mogelijke vervolgvragen**
    - Wanneer kies je voor een specifieke, aspecifieke of generieke toewijzing in het iJw-berichtenverkeer?
    - Welke gevolgen heeft het niet (correct) invullen van de productcategorie voor de verwerking van het verzoek?
    - Hoe wordt de productcategorie bepaald en welke codelijst moet worden gebruikt?

**Bronnen**

[- Regels op berichten iJw release 3.2](https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/)

*Disclaimer*: Dit antwoord is gegenereerd met behulp van AI, op basis van de toegevoegde documentatie, en kan fouten bevatten. Verifieer het antwoord bij twijfel bij de experts van het Ketenbureau.
