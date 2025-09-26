# Regels op berichten iJw release 3.2

Versie: 1.0
Status: Productie
Auteur: Zorginstituut
Bron-link: https://www.istandaarden.nl/ijw/releases/release-ijw-3.2
Publicatiedatum: 29 september 2022
AI-agent: Jw-agent

# Regels op berichten iJw 3.2.0 (Jaap dd 8-06-2025)

## Inleiding voor AI-agent

Dit regelrapport beschrijft de Uitgangspunten, Bedrijfsregels, Invulinstructies en Technische regels die gelden binnen het berichtenverkeer van de Jeugdwet (iJw), release 3.2.0. 

Regels kunnen van toepassing zijn op het bericht, een berichtklasse, berichtelement of een datatype.

Retourberichten, m.u.v. het declaratiebericht, kennen dezelfde regels als het heenbericht en zijn niet apart opgenomen.

Het document dient als **naslagwerk en validatiebron** voor AI-agenten die vragen moeten beantwoorden, tekst moeten analyseren of processtappen moeten controleren binnen het domein van jeugdhulp, gemeenten en zorgaanbieders.

**Gebruik voor AI-agenten**

- Iedere regel is voorzien van een unieke code (zoals IV002, IV008, IV077), een titel en een toelichting.
- Invulinstructies hebben een code die begint met IV
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iJw.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef bij het beantwoorden van vragen over regels uit het document ‘Regels op berichten iJw release 3.2’ altijd de volledige, letterlijke tekst van de gevraagde regel weer. Sla geen enkel tekstblok, opsomming of toelichting over die onder het betreffende regelnummers valt. Stop pas bij het volgende regelnummers of het einde van het document."
- Wanneer een gebruiker vraagt om de tekst van een specifieke regel (bijvoorbeeld IV075), selecteer en retourneer altijd de volledige tekst die hoort bij het betreffende regelnummers, vanaf de eerste regel na het regelnummers tot en met de eerste volgende regel met een nieuw regelnummers of het einde van het document. Neem alle tekst, opsommingen, subkopjes en toelichtingen op die onder het regelnummers vallen. Geef geen interpretatie in dit geval.
- Sommige regels zijn specifiek voor gemeenten, andere voor aanbieders of ketenpartijen.
- Let op: dit rapport bevat verschillende type regels check bij interpretatie altijd het type regel.
- Let op: regelnummer (bijv. IV002, IV008, IV077) zijn louter administratieve identifiers zonder hiërarchische betekenis. Behandel ze als unieke sleutels die uitsluitend gebruikt worden voor verwijzing, niet voor interpretatie.
- Bekijk alle regels om tot een juist antwoord te komen.

- Behandel iedere invulinstructie als één geheel.
1. Regels: Een invulinstructie begint bij een regel die start met # IV gevolgd door drie cijfers (bijvoorbeeld # IV077).
2. Een invulinstructie eindigt direct vóór de volgende regel die ook begint met # IV gevolgd door drie cijfers, of aan het einde van het document.
3. Alles wat daartussen staat – inclusief kopjes (Algemeen, Methode, Voorbeeld), tabellen en opsommingen – hoort tot diezelfde invulinstructie en mag niet worden gesplitst.

Output per instructie:
- Het nummer (bijv. IV077)
-  volledige tekst van die invulinstructie

---

# IV002 Hoe om te gaan met de adressering indien er sprake is van een organisatie?
- Adressering wordt **alleen gevuld** als de cliënt en/of relatie **in een instelling verblijft**.

---

# IV007 Hoe wordt de naam van een client of relatie vastgelegd?
- Achternaam, voorvoegsel, voornamen en/of voorletters worden gescheiden vastgelegd.
## Format voor `VolledigeNaam`
- Geslachtsnaam: altijd vastleggen (Naam + eventueel Voorvoegsel).  
- Partnernaam: optioneel, ook Naam + eventueel Voorvoegsel.  
- Voornamen: gescheiden door spaties.  
- Voorletters: aaneengesloten, zonder punten of spaties.  
- NaamGebruik: geeft de gewenste aanspreekvorm aan en bepaalt de volgorde bij correspondentie (geslachtsnaam en partnernaam).
- Het vullen van `NaamGebruik` hangt af van hoe de cliënt of relatie zijn/haar naam hanteert.

---

# IV008 Hoe moet worden omgegaan met correcties van de regieberichten?

- Correcties van een regiebericht zijn alleen toegestaan als het oorspronkelijke bericht is goedgekeurd door de gemeente.  
- Afgekeurde regieberichten worden beschouwd als niet verzonden; er moet een nieuw bericht worden gestuurd.

## Correctieprocedure voor berichtklassen (start-/stopbericht)
1. Verwijderen van de bestaande berichtklasse
   - Vul `StatusAanlevering` van de berichtklasse met 3 (verwijderen aanlevering).
   - Identificeer de te verwijderen berichtklasse via de logische sleutel van de klasse.

2. Eventuele vervangende berichtklasse
   - Kan in hetzelfde bericht worden aangeleverd.
   - Vul `StatusAanlevering` met 1 (eerste aanlevering).

## Logische sleutels
- Startproduct: `(ToewijzingNummer, Product, Begindatum)`  
- Stopproduct: `(ToewijzingNummer, Product, Begindatum, RedenBeeindiging, Einddatum)`

## Wanneer correctie in hetzelfde bericht of apart bericht
- Onderdeel van logische sleutel: correctie kan in zelfde bericht worden doorgegeven (unieke sleutel per berichtklasse).  
- Niet onderdeel van logische sleutel: correctie moet in apart bericht worden doorgegeven (anders afkeur door dubbele sleutel).

## Advies
- Zorg dat een nieuwe aanlevering nooit eerder wordt verwerkt dan de correctie (verwijdering).  
- Waar mogelijk: neem correctie en nieuwe aanlevering in hetzelfde bericht op.

---

# IV009 Hoe moet worden omgegaan met een geboortedatum?

- Wanneer de geboortedatum niet volledig of onbekend is:
  - Wordt het bekende deel gebruikt.
  - Voor de onbekende delen geldt:
    - Dag en maand: `01`
    - Jaar: `1900`
- Het element `DatumGebruik` geeft aan welk deel van de datum bekend is en gebruikt moet worden.

### Voorbeelden
- Volledig onbekend: `01-01-1900`  
- Alleen bekend dat geboorte in 1953 was: `01-01-1953`  
- Alleen bekend dat geboorte in september 1949 was: `01-09-1949`

---

# IV013  Welke toewijzing is het meest recent?

- Om de meest recente toewijzing vast te stellen, worden de velden `Toewijzingsdatum` en `Toewijzingstijd` in het toewijzingbericht opgenomen.  
- De gemeente vult deze velden in met de datum en tijd waarop de toewijzing definitief is vastgesteld.  
  - Dit is het moment van vaststelling, niet het moment van verzending.  
- De toewijzing met de meest recente `Toewijzingsdatum` en `Toewijzingstijd` is de actuele toewijzing.

### Bij herverzoek door aanbieder
- Als een aanbieder vraagt om een bestaande toewijzing opnieuw te versturen, blijven `Toewijzingsdatum` en `Toewijzingstijd` onveranderd.

### Bij aanpassing
- Wijzigingen zoals volume of einddatum worden beschouwd als een gewijzigde toewijzing.  
- De gemeente vult dan de velden met de datum en tijd van vaststelling van de aanpassing.

# IV024 Hoe moeten bedragen worden gevuld?

- Bedragen worden **altijd in 1/100 van de gehanteerde valuta** opgenomen.  
- Voor de **euro (EUR)** betekent dit bijvoorbeeld:
  - `10000` = 10.000 eurocent = **100 euro**.

---

# IV028 Hoe wordt een retourbericht opgesteld?

Een retourbericht wordt gestuurd om de zender te informeren over de beoordeling (technisch/inhoudelijk) van het heenbericht.  
- Voor ieder heenbericht wordt slechts **1 retourbericht** gestuurd (1-op-1).  
- De ontvanger stuurt **altijd** een retourbericht naar de verzender.  

Let op: voor het **declaratie-antwoordbericht (325-bericht)** is een aparte invulinstructie opgesteld: [IV087].

## Opbouw retourbericht

Een retourbericht bevat altijd een **Header**:

- `BerichtCode` = berichtcode van het betreffende retourbericht.  
- Overige elementen (incl. Afzender en Ontvanger) worden ongewijzigd overgenomen van het heenbericht.  
- Toevoegen: `IdentificatieRetour` en `DagtekeningRetour`.  
- Optioneel: versienummer van de gebruikte XSLT’s (verplicht indien afkeur op basis van XSLTs).  

## Situaties na de Header

### 1. Geen fouten geconstateerd
- Heenbericht is volledig goedgekeurd.  
- Retourbericht bevat **alleen de Header** (zonder retourcodes).  

### 2. Controleniveau 1 — Fouten bij XSD-validatie
- Indien het bericht niet valideert tegen het XSD → foutmelding.  
- **Geen retourbericht** wordt verzonden.  

### 3. Controleniveau 2 — Fouten bij XSLT-validatie
- Bij fout op basis van XSLT → alleen Header retour met algemene retourcode **0001** (“Bericht is afgekeurd om technische redenen”).  
- Indien XSLTs gebruikt zijn → verplicht versienummer meesturen.  

### 4. Controleniveau 3 of 4 — Fouten bij berichtoverstijgende controles of externe bron
- Indien fout in de **Header** → alleen Header + retourcode.  
- Indien fout(en) in berichtklassen per **Cliënt** → alle berichtklassen van die cliënt retour, met per klasse een retourcode:  
  - **0200** = Geen fouten geconstateerd  
  - **0233** = Berichtklasse niet gecontroleerd  
  - Specifieke retourcode = Fout geconstateerd  

## Voorbeeld

Een gemeente ontvangt een **Startbericht** met:  
- `StartProduct` met `StatusAanlevering = 3` (verwijderen aanlevering)  
- maar er is **geen eerder Startbericht** ontvangen met `StatusAanlevering = 1` (eerste aanlevering).  

➡ Bericht wordt afgekeurd op basis van **TR063**.  

**Retourbericht** in dit geval:  
- Header: retourcode **0200**  
- Cliënt: retourcode **0200**  
- StartProduct: retourcode **9063** (“Geen eerder bericht ontvangen → bericht kan niet verwerkt worden”).  

---

# IV032 Welke retourcode moet gevuld worden in het retourbericht?

De retourcode in een retourbericht wordt bepaald door de **technische controles** waarop het bericht wordt afgekeurd. Deze controles vinden plaats op verschillende niveaus:

### Algemeen
- Technische controles zijn beschreven als **technisch te controleren regels** op verschillende niveaus.
- Voor iedere regel is aangegeven:
  - Het **controleniveau**
  - Welke **retourcode** gebruikt moet worden bij afkeur
- Deze invulinstructie geldt voor **bijna alle retourberichten**.  
  - Voor het **declaratie-antwoordbericht (325-bericht)** geldt een aparte invulinstructie: **IV088**.

### Controleniveaus

#### Controleniveau 1: Berichtformaat (XSD)
- Het bericht wordt gevalideerd tegen het **XSD**.
- Indien het bericht **niet valideert**, krijgt de afzender een **foutmelding**.
- **Geen retourbericht** wordt verzonden, dus **geen retourcode**.

#### Controleniveau 2: Berichtinhoud (XSLT)
- Het bericht wordt gecontroleerd tegen **alle regels die binnen het bericht zelf te controleren zijn** (technische regels, condities, constraints).  
- Beschikbare **XSLTs** voeren deze controles uit.
- Regels op dit niveau hebben een **algemene retourcode: 0001**.
  - Retourbericht bevat **alleen de Header met retourcode 0001**.
  - Indien de XSLTs zijn gebruikt, moet **XsltVersie** worden meegegeven.

#### Controleniveau 3: Berichtoverstijgend
- Het bericht wordt gecontroleerd op **berichtoverstijgende technische regels**, vergeleken met **eerder ontvangen domeinspecifieke berichten**.
- Deze regels hebben een **eigen retourcode** die wordt gevuld bij de foutieve berichtklasse.
- Een fout leidt tot **volledige afkeur van het bericht**.

#### Controleniveau 4: Externe bron
- Het bericht wordt gecontroleerd op regels waarvoor informatie nodig is **buiten het iStandaarden berichtenverkeer**, zoals:
  - Systeemdatum van verzender/ontvanger
  - Externe codelijsten (bijv. AGB, CBS)
  - Bilaterale afspraken tussen ketenpartijen
- Deze regels hebben ook een **eigen retourcode** per berichtklasse.
- Fouten leiden tot **volledige afkeur van het bericht**.

# IV033 Hoe moet XsltVersie gevuld worden?

- Wanneer de **ontvanger fouten** constateert in een bericht op basis van de beschikbare **XSLTs**, wordt in het **retourbericht** aangegeven welke **XSLT-versie** is gebruikt voor de controle.  
- Dit **versienummer** staat in de **output van de XSLTs** en moet **worden overgenomen** in het retourbericht.

---

# IV034 Hoe moet XsdVersie gevuld worden?

- De waarden voor de elementen **`BasisschemaXsdVersie`** en **`BerichtXsdVersie`** in het datatype `CDT_XsdVersie` moeten worden overgenomen uit de **schemadefinitie (XSD)** waarop het bericht is gebaseerd.  
- In de schemadefinitie zijn deze waarden te vinden op de volgende paden:  
  - `/xs:schema/xs:annotation/xs:appinfo/<namespace>:BasisschemaXsdVersie`  
  - `/xs:schema/xs:annotation/xs:appinfo/<namespace>:BerichtXsdVersie`  
- `<namespace>` wordt vervangen door de namespace van de betreffende iStandaard, bijvoorbeeld: `iJw`, `iWmo`, enz.  

### Voorbeeld
<jw301:Bericht 
    xmlns:ijw="http://www.istandaarden.nl/ijw/3_2/basisschema/schema" 
    xmlns:jw301="http://www.istandaarden.nl/ijw/3_2/jw301/schema">

---

# IV042 Hoe moet de omvang van te leveren of geleverde ondersteuning gevuld worden?

## Toewijzing en verzoek om toewijzing
De omvang van de te leveren ondersteuning wordt opgegeven in het element **Omvang**, bestaande uit:  
- **Volume**  
- **Eenheid**  
- **Frequentie**  

👉 Deze elementen moeten in **onderlinge samenhang** gevuld worden.  

## Declaratiebericht
De omvang van de geleverde ondersteuning tijdens de productperiode wordt opgegeven in:  
- **GeleverdVolume**  
- **Eenheid**  

👉 Ook hier moeten de elementen in **onderlinge samenhang** gevuld worden.  

## Regels voor vullen
- Als **Eenheid = 83 (Euro’s)** → `GeleverdVolume` bevat een bedrag in **eurocenten**.  
  - Voorbeeld: `10000` = 10.000 eurocent = **100 euro**.  
- Als **Eenheid ≠ 83 (Euro’s)** → `GeleverdVolume` bevat een **geheel getal zonder decimalen**.  

## Voorbeelden

### Voorbeeld 1A — Toewijzing (inspanningsgericht)
Cliënt krijgt 5 dagdelen per week ondersteuning:  
- Volume: `5`  
- Eenheid: `16` (Dagdeel = 4 uur)  
- Frequentie: `2` (Per week)  

### Voorbeeld 2A — Toewijzing (outputgericht)
Cliënt krijgt ondersteuning voor 200 euro per maand:  
- Volume: `20000`  
- Eenheid: `83` (Euro’s)  
- Frequentie: `4` (Per maand)  

### Voorbeeld 1B — Declaratie (inspanningsgericht)
20 dagdelen geleverd in de productperiode:  
- GeleverdVolume: `20`  
- Eenheid: `16` (Dagdeel = 4 uur)  

### Voorbeeld 2B — Declaratie (outputgericht)
Ondersteuning geleverd volgens afgesproken maandbedrag (200 euro):  
- GeleverdVolume: `20000`  
- Eenheid: `83` (Euro’s)  

---

# IV045 Hoe wordt de voogd vastgelegd indien dit een organisatie betreft?

Als de **voogdij** voor een cliënt bij een **organisatie** ligt:  
  - Wordt in de **Relatie** de **organisatienaam** opgenomen als `Geslachtsnaam`.  
  - Wordt aangeduid met `NaamGebruik = 6` (**niet-natuurlijk persoon**).

---

# IV046 Welke gemeentecode moet worden gevuld?**

- In de **header** van de berichten wordt de **gemeente** opgenomen die volgens de wet **verantwoordelijk** is voor zorg of ondersteuning aan de cliënt.  
- Voor de aanduiding van de gemeente wordt de **CBS-codelijst** gehanteerd.

---

# IV047 Hoe om te gaan met de adressering van een client indien alleen een briefadres bekend is?

- In een toewijzing wordt altijd het **GBA-adres** of **verblijfadres** van de cliënt meegegeven in de **Contactgegevens**.  
- Dit is **niet mogelijk** als de cliënt in de **Basisregistratie Personen (BRP)** alleen een **briefadres** heeft.  
- In dat geval kan bij de cliënt een **Adres** met het type **Correspondentie-adres** worden meegegeven.

---

# IV052 Hoe om te gaan met Beschikkingnummer in Verzoek om toewijzing?

- De **aanbieder** dient het `Beschikkingnummer` mee te geven in het **VOT-bericht** als de cliënt van haar gemeente een beschikking heeft ontvangen.
- De **gemeente** kan op basis van dit `Beschikkingnummer` eenvoudig de **bestaande beschikking koppelen** aan de informatie uit het VOT-bericht.

---

# IV066 Wanneer krijgt een toewijzing een nieuw ToewijzingNummer?

## Basisregels
- Een **initiële toekenning** van een product aan een cliënt is een **nieuwe toewijzing** → krijgt een **nieuw ToewijzingNummer**.  
- Een initiële toekenning kent **nooit een RedenWijziging**.  
- Bij een **wijziging van een eerder afgegeven toewijzing** (intrekken, oprekken, verwijderen, corrigeren) → gebruik het **ToewijzingNummer van de initiële toekenning**.  
- **Startberichten**, **stopberichten** en **declaratieberichten** verwijzen altijd naar het ToewijzingNummer uit het oorspronkelijke toewijzingbericht.  
- Het (opnieuw) versturen van een bericht heeft **geen invloed** op het ToewijzingNummer.  

## Toegestane wijzigingen (beperkt)
Het wijzigen van een toewijzing is slechts beperkt toegestaan (zie ook *OP33x1*):  
- De toewijzing kan worden **verwijderd**.  
- De **einddatum** kan worden aangepast.  
- Het **budget** kan worden aangepast.  
- De **omvang** kan worden aangepast *indien* de frequentie = `6` (**Totaal binnen geldigheidsduur toewijzing**).  

## Nieuwe initiële toekenning vereist
Als de **omvang** gewijzigd wordt bij een andere frequentie dan `6` (Totaal binnen geldigheidsduur):  
- De bestaande toewijzing wordt **ingetrokken**.  
- Een **nieuwe toewijzing** wordt verzonden met:  
  - **Ingangsdatum** = de datum waarop de gewijzigde omvang ingaat.  
  - **Nieuw ToewijzingNummer**.  

---

# IV074 Wat is het verschil tussen de verschillende uitvoeringsvarianten?

## Uitvoeringsvarianten
De iStandaarden ondersteunen de volgende uitvoeringsvarianten:  
- **Inspanningsgericht**  
- **Outputgericht**  
- **Taakgericht**  

## Toelichting
De specifieke eigenschappen van deze varianten zijn beschreven in het document **Handreiking uitvoeringsvarianten**.  

📄 Zie: [Handreiking uitvoeringsvarianten iWmo en iJw](http://www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw).  

---

# IV075 Hoe moeten productgegevens gevuld worden?

## Algemeen
- Welke productcodes gebruikt mogen worden in het berichtenverkeer is afhankelijk van **bilaterale afspraken**.  
- Er is een landelijke codelijst **021 - PRODUCTCODE** beschikbaar.  
- Gemeente en aanbieder leggen in de **contractafspraken** vast of deze landelijke codelijst gebruikt wordt of dat een **eigen productcodelijst** geldt.  

## Aanvragen (VOT of VOW)
Het element **Product** wordt gevuld in:  
- `AangevraagdProduct` (VOT)  
- `NieuwProduct` (VOW)  

Afhankelijk van de gewenste toewijzingsvariant:  
- **Specifieke toewijzing** → vul **productcategorie én productcode**.  
- **Aspecifieke toewijzing** → vul **alleen productcategorie**.  
- **Generieke toewijzing** → **Product leeg**, dus geen productcategorie en productcode gevuld.  

## Start- en Stopberichten (305 / 307)
Bij inspannings- en outputgerichte uitvoeringsvarianten:  
- Hetzelfde product opnemen als in de **Toewijzing (301)**.  
- **Specifieke toewijzing** → vul **productcategorie én productcode**.  
- **Aspecifieke toewijzing** → vul **alleen productcategorie**.  
- **Generieke toewijzing** → **Product leeg** (geen productcategorie of productcode).  

## Declaratieberichten (323)
Altijd een **productcategorie én productcode** vullen.  

### Aspecifieke toewijzing
- Indien in **ToegewezenProduct** alleen een productcategorie is gevuld:  
  - Neem die productcategorie over.  
  - Vul een bijbehorende **productcode** (volgens de afgesproken productcodelijst).  
- Gevolg: op **1 toewijzingsnummer** kunnen meerdere prestaties voor dezelfde periode volgen (indien meerdere producten uit dezelfde categorie geleverd zijn).  

### Generieke toewijzing met maximaal budget
- Indien in **ToegewezenProduct** geen productcategorie en productcode zijn gevuld:  
  - Vul de productcategorie en productcode die horen bij de levering (volgens de afgesproken productcodelijst).  
- Gevolg: op **1 toewijzingsnummer** kunnen meerdere prestatieregels voor dezelfde periode volgen (indien meerdere producten uit dezelfde of verschillende categorieën geleverd zijn).  

---

# IV076 Hoe moet het volume in de prestatie gevuld worden, wanneer de toewijzing de frequentie week heeft?

## Algemeen
- Een productperiode binnen een declaratieperiode is **altijd maximaal een kalendermaand**.  
- Als **ToegewezenProduct** de frequentie **per week** heeft, kan een week verdeeld zijn over 2 productperiodes (wanneer een maand halverwege een week begint).  
- Er bestaan 2 methoden om het volume te bepalen:  
  - **Inspanningsgerichte toewijzing**  
  - **Outputgerichte toewijzing**  

## Methode 1 — Inspanningsgerichte toewijzing
- De **datum van levering** bepaalt in welke productperiode de levering wordt opgenomen.  
- De productperiode bevat het volume van alle leveringen op dagen die binnen die periode vallen.  
- Als een week verdeeld is over 2 maanden → leveringen worden verdeeld naar datum.  

### Voorbeeld
**Toewijzing:** 07-07-2025 t/m 07-09-2025, 3 uur per week  
**Levering:** elke donderdag 2,5 uur  

- **Declaratieperiode juli**  
  - Productperiode: 07-07-2025 t/m 31-07-2025  
  - Volume: `7,5` (3 leveringen × 2,5 uur)  
  - Controle max: `12` uur (4 weken × 3 uur)  

- **Declaratieperiode augustus**  
  - Productperiode: 01-08-2025 t/m 31-08-2025  
  - Volume: `10` (4 leveringen × 2,5 uur)  
  - Controle max: `15` uur (5 weken × 3 uur)  

- **Declaratieperiode september**  
  - Productperiode: 01-09-2025 t/m 07-09-2025  
  - Volume: `2,5` (1 levering × 2,5 uur)  
  - Controle max: `3` uur (1 week × 3 uur)  

**Controle totaalperiode:**  
- 07-07-2025 t/m 07-09-2025 = 9 weken × 3 uur = **27 uur** toegestaan.  
- Gedeclareerd = 20 uur.  

## Methode 2 — Outputgerichte toewijzing
- De productperiode bevat het volume van de weken waarvan de **zondag in die productperiode valt**.  
- **Uitzondering:** eindigt een toewijzing niet op een zondag → het volume van de laatste (gebroken) week wordt opgenomen in de productperiode waarin de laatste zondag valt.  

### Voorbeeld 1 — Toewijzing eindigt op een zondag
**Toewijzing:** 07-07-2025 t/m 07-09-2025, 300 euro per week  

- **Declaratieperiode juli**  
  - Productperiode: 07-07-2025 t/m 31-07-2025  
  - Volume: 3 zondagen × 300 = **900 euro**  

- **Declaratieperiode augustus**  
  - Productperiode: 01-08-2025 t/m 31-08-2025  
  - Volume: 5 zondagen × 300 = **1500 euro**  

- **Declaratieperiode september**  
  - Productperiode: 01-09-2025 t/m 04-09-2025  
  - Volume: 1 zondag × 300 = **300 euro**  

### Voorbeeld 2 — Toewijzing eindigt niet op een zondag
**Toewijzing:** 07-07-2025 t/m 06-09-2025, 300 euro per week  

- **Declaratieperiode juli**  
  - Productperiode: 07-07-2025 t/m 31-07-2025  
  - Volume: 3 zondagen × 300 = **900 euro**  

- **Declaratieperiode augustus**  
  - Productperiode: 01-08-2025 t/m 31-08-2025  
  - Volume: (5 zondagen + laatste gebroken week) × 300 = **1800 euro**  

- **Declaratieperiode september**  
  - Geen declaratie meer: laatste week is al meegenomen in augustus.  

---

# IV077 Hoe moet het maximaal te declareren volume berekend worden over de productperiode bij gebruik van de frequentie per week in de toewijzing?

## Algemeen
*- De frequentie **per week** past niet 1-op-1 binnen de declaratieperiode (maand).  
- Daarom gelden aanvullende afspraken om te berekenen wat het **maximaal declarabele volume** per productperiode is.  
- Werkwijze:  
  1. Bepaal uitvoeringsvariant (inspanning of output).  
  2. Bereken het maximaal volume binnen de productperiode.  
  3. Controleer of het geleverde volume hierin past.  
  4. Controleer of het totaal gedeclareerde volume binnen de toewijzing past.  

## Methode 1 — Inspanningsgerichte toewijzing
- Maximaal volume = **aantal (eventueel gebroken) kalenderweken** binnen de productperiode × weekvolume uit de toewijzing.  
- Het aantal kalenderweken wordt bepaald door **weeknummers** te tellen.  
- Een maand bevat dus **4, 5 of 6 weken**.  
- Extra controle: totaal gedeclareerd volume ≤ totaal toegewezen volume (over hele toewijzing).  

### Voorbeeld
**Toewijzing:** 07-10-2025 t/m 30-12-2025, 3 uur per week  

Aantal weken per maand:  
- Oktober: 4 (week 41–44)  
- November: 5 (week 44–48)  
- December: 5 (week 49–52,01)  

Maximaal volume per maand:  
- Oktober: 4 × 3 = **12 uur**  
- November: 5 × 3 = **15 uur**  
- December: 5 × 3 = **15 uur**  

Maximaal volume over toewijzingsperiode:  
- 07-10-2025 t/m 30-12-2025 = 13 weken × 3 uur = **39 uur**  

## Methode 2 — Outputgerichte toewijzing
- Maximaal volume = **aantal zondagen binnen de productperiode** × weekvolume uit de toewijzing.  
- Uitzondering: als de toewijzing **niet eindigt op een zondag**, tel je 1 weekvolume extra bij de productperiode waarin de laatste zondag van de toewijzing valt.  

### Voorbeeld 1 — Eindigt niet op zondag
**Toewijzing:** 01-10-2025 t/m 31-12-2025, 300 euro per week  

Aantal zondagen per maand:  
- Oktober: 4  
- November: 5  
- December: 4 (+1 extra weekvolume, omdat einddatum geen zondag is)  

Maximaal volume:  
- Oktober: 4 × 300 = **1200 euro**  
- November: 5 × 300 = **1500 euro**  
- December: (4 + 1) × 300 = **1500 euro**  

### Voorbeeld 2 — Eindigt niet op zondag, laatste zondag van toewijzing valt in voorgaande productperiode
**Toewijzing:** 07-07-2025 t/m 05-09-2025, 300 euro per week  

Aantal zondagen per maand:  
- Juli: 3  
- Augustus: 5 (+1 extra weekvolume, omdat einddatum geen zondag is)  

Maximaal volume:  
- Juli: 3 × 300 = **900 euro**  
- Augustus: (5 + 1) × 300 = **1800 euro** *

----

# IV078 Wat mag gedeclareerd worden wanneer een onvolledige periode is toegewezen?

## Algemeen
- Alleen voor de **inspanningsgerichte uitvoeringsvariant** geldt een uniforme werkwijze.  
- Voor de **outputgerichte uitvoeringsvariant** maken gemeente en aanbieder **bilaterale afspraken**.  

## Werkwijze inspanningsgericht
- Het daadwerkelijk geleverde volume in de gebroken periode mag gedeclareerd worden.  
- Bovengrens: het **maximale volume** dat in *ToegewezenProduct* aan de frequentie is toegekend.  
- Zie ook [IV077](#--hoe-moet-het-maximaal-te-declareren-volume-berekend-worden-bij-frequentie-per-week) voor de rekenmethodes.  

## Voorbeelden

### Voorbeeld 1 — Frequentie = week
**Toewijzing:** 3 uur/week, 12-11-2025 t/m 13-12-2025  

- Productperiode: 12-11-2025 t/m 30-11-2025  
- Maximaal declarabel: **9 uur** (3 weken × 3 uur), mits daadwerkelijk geleverd.  
- Let op: de eerste week (12-11 t/m 16-11) is geen volledige week, maar indien geleverd mag toch de volledige **3 uur** gedeclareerd worden.  

### Voorbeeld 2 — Frequentie = maand
**Toewijzing:** 15 uur/maand, 14-10-2025 t/m 13-12-2025  

- Productperiode: 14-10-2025 t/m 31-10-2025  
- Maximaal declarabel: **15 uur**, mits daadwerkelijk geleverd.  
- Ook al is oktober een **gebroken maand**, de volledige maandcapaciteit mag gedeclareerd worden als die uren geleverd zijn.  

---

# IV079 Hoe moet het volume in de prestatie gevuld worden wanneer de eenheid uren is en geleverde prestatie niet uit volledige uren bestaat?

## Algemeen
- Toewijzing en declaratie zijn in **uren**.  
- Geleverde zorg kan **niet uit hele uren bestaan** (bijv. 95 minuten).  
- Afrondingsregel:  
  - < 30 minuten → **afronden naar beneden**  
  - ≥ 30 minuten → **afronden naar boven**  
- **Minimaal volume:** 1 uur.  

## Berekening
1. Sommeer de geleverde zorg over de **gehele prestatieperiode**.  
2. Deel het totaal aantal minuten door 60 om het volume in uren te berekenen.  
3. Pas de afrondingsregel toe op het totaalvolume in de prestatieregel.  

### Voorbeeld
- Wekelijkse levering: 95 minuten  
- Prestatieperiode: 4 weken  

Berekening:  
1. Totaal minuten = 4 × 95 = 380 minuten  
2. Omrekenen naar uren: 380 / 60 ≈ 6 uur 20 minuten  
3. Afronden volgens regel: **6 uur**  

**Volume prestatie:** 6 uur

---

# IV081 Hoe moet het ProductTarief gevuld worden?

## Algemeen
- De **eenheid in de prestatie** moet gelijk zijn aan de **eenheid van de toewijzing**.  
- Voor deze eenheid moet in het **contract een tarief** voor het betreffende product zijn vastgelegd.  
- Het **ProductTarief** in de prestatie wordt gevuld met dit tarief.  

## Uitzondering voor uren/minuten
- Indien het tarief per **uur** is afgesproken, maar gedeclareerd wordt in **minuten**:  
  - Het tarief wordt omgerekend naar **tarief per minuut**: tarief ÷ 60  
  - Afronden op **2 decimalen**, volgens rekenkundige regels:  
    - 1,455 → **1,46**  
    - 1,454 → **1,45**  
- Het afgeronde tarief wordt **opgenomen in ProductTarief**, maar **niet gebruikt voor IngediendBedrag**.  

## Berekening IngediendBedrag
- Formule: (contractueel uurtarief × aantal minuten) ÷ 60
- Afronden op **2 decimalen**.  
- Zie ook **TR346**.

---

# IV084 Hoe moet de declaratie gevuld worden bij elkaar opvolgende toewijzingen binnen één declaratieperiode?

## Algemeen
- Bij **elkaar opvolgende toewijzingen** binnen een declaratieperiode:  
  - Maak **aparte Prestaties** per toewijzing **en per product**.  
  - Een **Prestatie kan nooit op meer dan één toewijzing** betrekking hebben.  

## Voorbeeld
- **Toewijzing 1:** 01-03-2025 t/m 09-03-2025  
- **Toewijzing 2:** 23-03-2025 t/m 31-03-2025  
- Er is **ononderbroken zorg geleverd** tijdens beide periodes.  

### Declaratie
- **Prestatie 1**: ProductPeriode 01-03-2025 t/m 09-03-2025  
- **Prestatie 2**: ProductPeriode 23-03-2025 t/m 31-03-2025  

---

# IV085 Wanneer kan een creditering van een declaratie verzonden worden?

## Algemeen
- Een **creditprestatie** wordt gebruikt als een eerder ingediende prestatie **onjuist** blijkt te zijn.  
- De aanbieder kan een prestatie **intrekken** door een creditprestatie te verzenden.  

## Voorwaarden
1. Er moet een **declaratie-antwoordbericht** op de originele (debet) prestatie zijn ontvangen.  
2. De originele prestatie mag **niet zijn afgekeurd** door de gemeente.  
   - Een door de gemeente afgekeurde prestatie wordt **nooit gecrediteerd**.  

## Opmerkingen
- Een creditering is een **eenzijdige handeling** van de aanbieder.  
- De gemeente **kan een ingediende creditprestatie niet afkeuren**, behalve bij **technische afkeur**.  
- Zie ook invulinstructies **IV087** en **IV088** voor details.

---

# IV086 Hoe moet worden omgegaan met debet en credit prestaties in een declaratiebericht?

## Algemeen
- Debet en credit prestaties kunnen **in één declaratiebericht** worden aangeleverd.  

## Regels
1. **Debet + identieke credit prestatie**  
   - Mag **niet in hetzelfde bericht** worden aangeleverd.  
   - Als debet en credit prestatie op **één moment bekend** zijn, horen ze **tegen elkaar weg te vallen**, niet in één bericht.  

2. **Credit + nieuwe debet prestatie**  
   - Mag **wel in hetzelfde bericht** worden aangeleverd.  

## Totaal declaratiebedrag
- Het **TotaalIngediendBedrag** in de header van het declaratiebericht wordt als volgt berekend:  
  - Debetprestaties: **optellen**  
  - Creditprestaties: **aftrekken**

---

# IV087 Hoe wordt een declaratie-antwoordbericht opgesteld?

## Algemeen
- Een declaratie-antwoordbericht informeert de aanbieder over:  
  1. De **beoordeling** (technisch/inhoudelijk) van het declaratiebericht.  
  2. Het **totaalbedrag** dat door de gemeente wordt toegekend.  
- Voor ieder declaratiebericht wordt **exact 1 declaratie-antwoordbericht** gestuurd (1-op-1).  
- Het bericht bevat altijd een **Header**.  

## Header
- **DeclaratieIdentificatie**: berichtidentificatie van het declaratiebericht dat beantwoord wordt.  
- Kan aangevuld worden met het **versienummer van de XSLT’s** die gebruikt zijn bij controle (verplicht bij afkeur op basis van XSLTs).  

## Afhandeling per situatie / controleniveau

### 1. Bericht volledig goedgekeurd
- Header retour met **Retourcode 0200** (geen opmerkingen over berichtklasse).  
- Berichtklasse **DeclaratieAntwoord**: retourcode **8001** (Declaratie volledig toegewezen).  
- Velden **TotaalGoedgekeurdBedrag** en **TotaalIngediendBedrag** vullen met waarde uit declaratiebericht.  

### 2. Controleniveau 1 — XSD-validatie fout
- Declaratiebericht **niet valide** tegen XSD → afzender ontvangt **foutmelding**.  
- **Geen declaratie-antwoordbericht** wordt verzonden.  

### 3. Controleniveau 2 — XSLT-validatie fout
- Fout bij controle die niet via XSD kan worden gevalideerd.  
- Declaratie-antwoordbericht bevat **alleen Header** met algemene **Retourcode 0001** (Bericht afgekeurd om technische redenen).  
- Versienummer van gebruikte XSLTs toevoegen.  
- Declaratie wordt **niet verwerkt** in administratie.  

**Voorbeeld:**  
- Fout in Header of kan niet afgeleverd worden → retourcode 0001.  

### 4. Controleniveau 3 of 4 — Berichtoverstijgende / externe controles
- **Fout in Header:** alleen Header retour met de bijbehorende retourcode.  
- **Fout in berichtklasse Declaratie:**  
  - Header retourcode 0200  
  - DeclaratieAntwoord retourcode voor afkeur  
  - **TotaalToegekendBedrag = 0**  
  - Declaratie wordt **niet verwerkt**  
- **Fout in Cliënt:** retourcode bij Cliënt + alle onderliggende Prestaties retour met retourcode 0233  
- **Fout in Prestatie:** Prestatie retour met bijbehorende retourcode; bijbehorende klasse Cliënt retourcode 0200  

**Opmerking:**  
- Prestaties worden altijd volledig goedgekeurd of volledig afgekeurd.  
- Prestaties waarvan het ingediende bedrag wordt toegekend, worden **niet opgenomen** in het declaratie-antwoordbericht.  

## Belangrijke uitzonderingen
- Declaratie-antwoordbericht **is geen ontvangstbevestiging**.  
- **Niet** bedoeld om extra informatie op te vragen of correcties door te geven.  
- Berichten kunnen info bevatten over meerdere cliënten; cliënten **zonder fouten** worden niet opgenomen.

---

# IV088 Welke retourcode moet gevuld worden in het declaratie-antwoordbericht?

## Algemeen
- De **retourcode** hangt af van de **controle op basis waarvan het bericht is afgekeurd**.  
- Declaratieberichten worden gecontroleerd op **vier niveaus**.  

## Controleniveau 1 — Berichtformaat (XSD)
- Het bericht wordt gevalideerd tegen het XSD.  
- **Bij niet-valide berichten:**  
  - Afzender ontvangt een **foutmelding**.  
  - **Geen declaratie-antwoordbericht** wordt verzonden.  
- Regels op dit niveau hebben **geen retourcode**.  

## Controleniveau 2 — Berichtinhoud (XSLT)
- Controle van alle regels binnen het bericht zelf (technische regels, condities, constraints).  
- Voor deze controles zijn XSLTs beschikbaar.  
- **Algemene retourcode:** 0001 (Bericht is technisch onjuist)  
- Bij fouten:  
  - Declaratie-antwoordbericht bevat alleen de **Header** met retourcode 0001.  
  - Versienummer van gebruikte XSLTs toevoegen.  

## Controleniveau 3 — Berichtoverstijgend
- Controle van het bericht ten opzichte van eerdere domeinspecifieke berichten.  
- Elke regel op dit niveau heeft een **specifieke retourcode**.  
- Deze retourcode wordt gevuld in de **berichtklasse waarin de fout is geconstateerd**.  

## Controleniveau 4 — Externe bron
- Controle van het bericht op basis van externe gegevens, zoals:  
  - Systeemdatum van verzender/ontvanger  
  - Externe codelijsten (bijv. AGB, CBS)  
  - Bilaterale afspraken (contractafspraken)  
- Elke regel op dit niveau heeft een **specifieke retourcode**.  
- Retourcode wordt gevuld in de **berichtklasse waarin de fout is geconstateerd**.  

---

# IV089 Hoe moet ProductPeriode gevuld worden?

## Begrippen
- **Declaratieperiode:** administratieve periode waarover geleverde hulp wordt verwerkt tot een declaratie. **Altijd een kalendermaand.**  
- **Productperiode:** valt altijd **binnen de geldigheidsperiode van de toewijzing**.  
  - Niet afhankelijk van de start- of stopdatum van de geleverde zorg.  
  - In het declaratiebericht wordt het **totale geleverde volume** van één specifiek product binnen één productperiode en één toewijzing opgenomen in **één Prestatie**.  
  - Prestaties kunnen direct in de volgende declaratieperiode of later gedeclareerd worden (zie IV076 voor volume bij frequentie per week).  

## Invullen van ProductPeriode

### Begindatum
- **Eerste dag van de kalendermaand** waarin de ProductPeriode valt, **indien** de Ingangsdatum van het ToegewezenProduct **voor of op de eerste dag** van die maand ligt.  
- **Ingangsdatum ToegewezenProduct**, indien deze **na de eerste dag** van de maand ligt.

### Einddatum
- **Laatste dag van de kalendermaand** waarin de ProductPeriode valt, **indien** de Einddatum van het ToegewezenProduct **op of na de laatste dag** van die maand ligt.  
- **Einddatum ToegewezenProduct**, indien deze **voor de laatste dag** van de maand ligt.

## Voorbeeld reguliere ProductPeriodes

ToegewezenProduct: 08-04-2025 t/m 17-06-2025  

| Maand | ProductPeriode            |
|-------|--------------------------|
| April | 08-04-2025 t/m 30-04-2025 |
| Mei   | 01-05-2025 t/m 31-05-2025 |
| Juni  | 01-06-2025 t/m 17-06-2025 |

## Trajectfinanciering (outputgericht in euro's)
- Gemeenten en aanbieders kunnen afspraken maken over **afwijkende declaratiemomenten**.  
- Indien resultaat pas aan het **eind van het traject** kan worden vastgesteld:  
  - ProductPeriode = **laatste ProductPeriode binnen toewijzingsperiode**  
  - Declaratie kan indien nodig **in delen** worden ingediend, maar ProductPeriode blijft **binnen de toewijzingsperiode**.

### Voorbeeld trajectfinanciering
- Toewijzing: 08-04-2025 t/m 17-06-2025  
- Declaraties in april en mei: geen  
- Declaratie in juni: **ProductPeriode 01-06-2025 t/m 17-06-2025**

---

# IV090 Hoe moet het declaratiebericht gevuld worden indien achteraf gedeclareerd wordt?

## Algemeen
- Zorg of ondersteuning geleverd tijdens een bepaalde **declaratieperiode** wordt meestal in de **eropvolgende declaratieperiode** gedeclareerd.  
- **Achteraf declareren** is toegestaan, maar:
  - **Niet** met een declaratieperiode **voor de laatst ingediende** declaratieperiode.  
  - De **ProductPeriode** mag wél in het verleden liggen (dit geeft de leveringsperiode aan).  

- Wanneer achteraf over **meerdere declaratieperiodes** wordt gedeclareerd:
  - In één declaratiebericht worden **evenveel Prestaties** opgenomen als het aantal afzonderlijke prestaties dat normaal in afzonderlijke berichten zou zijn ingediend.

## Voorbeelden

### 1. Achteraf declareren als een declaratieperiode mist
Situatie:  
- Reeds ingediende declaratieperiodes:  
  - 01-01-2025 t/m 31-01-2025  
  - 01-02-2025 t/m 28-02-2025  
  - 01-03-2025 t/m 31-03-2025  
  - 01-05-2025 t/m 31-05-2025 (april niet gedeclareerd)  

- In juni blijkt dat er voor april toch iets gedeclareerd moet worden.  
- Mogelijke declaratieperiodes voor achteraf declareren:  
  1. Als **2e declaratie van mei**: 01-05-2025 t/m 31-05-2025  
  2. Bij **eerste declaratie in juni**: 01-06-2025 t/m 30-06-2025  

### 2. Achteraf declareren wanneer hulpperiode meerdere declaratieperiodes beslaat
Situatie:  
- Geleverde ondersteuning aan cliënt: 15-02-2025 t/m 30-04-2025  
- Volgende declaratiebericht bevat **3 Prestaties**, elk met eigen ProductPeriode:  

| Prestatie | ProductPeriode           |
|-----------|-------------------------|
| 1         | 15-02-2025 t/m 28-02-2025 |
| 2         | 01-03-2025 t/m 31-03-2025 |
| 3         | 01-04-2025 t/m 30-04-2025 |

---

# IV091 Hoe moet een creditprestatie gevuld worden in een declaratiebericht?

## Algemeen
- In de **IngediendBedrag-regel** van een Prestatie geeft `DebetCredit` aan of de indienende partij een **vordering (Debet)** of **terugvordering (Credit)** doet.  
- Een **creditprestatie** is bedoeld om een eerder ingediende debetprestatie **onjuist of te veel gedeclareerd** te corrigeren.

## Crediteren van een declaratie
Een creditprestatie is **identiek aan de oorspronkelijke debetprestatie**, met uitzondering van:  

| Veld                  | Invulling creditprestatie                                    |
|-----------------------|--------------------------------------------------------------|
| **ReferentieNummer**      | Nieuw ReferentieNummer                                       |
| **VorigReferentieNummer** | ReferentieNummer van de oorspronkelijke debetprestatie      |
| **DebetCredit**           | C (Credit)                                                  |

## Belangrijk
- Crediteren is **alleen mogelijk** nadat het declaratie-antwoordbericht is ontvangen waarin de oorspronkelijke prestatie is **toegekend** (zie IV085).

---

# IV092 Hoe moet een Verzoek om Wijziging (VOW bericht) gevuld worden?

## Algemeen
- Elk VOW-bericht krijgt een **uniek Referentienummer**.
- Verplicht: **Reden van het verzoek** invullen.
- Bevat altijd alle actuele toegewezen producten van de cliënt.

## Gegevensgroepen in het VOW-bericht
1. **OngewijzigdProduct**
   - Identificeert toewijzingen die **niet wijzigen**.
   - Wordt gevuld met bestaande ToewijzingNummers die in de nieuwe situatie hetzelfde blijven.

2. **TeWijzigenProduct**
   - Identificeert toewijzingen waarvoor **wijzigingen** gewenst zijn.
   - Geldt alleen voor bestaande producten; het product zelf zit **niet** in deze groep.
   - Toegestane wijzigingen:
     - `Omvang`: Volume, Eenheid, Frequentie
     - `Budget`: kan worden aangepast (met ingangsdatum gelijk aan originele toewijzing)
     - `Einddatum`: mag worden aangepast
   - GewensteIngangsdatum:
     - Moet in de toekomst liggen binnen de originele toewijzing, of gelijk zijn aan originele ingangsdatum bij wijziging over gehele periode.
   - Speciale regels voor:
     - Budgetwijzigingen: GewensteIngangsdatum = originele ingangsdatum
     - Frequentie = "totaal binnen toewijzingsperiode": GewensteIngangsdatum = originele ingangsdatum

3. **NieuwProduct**
   - Voor producten waarvoor **geen actuele toewijzing** is.
   - Ook voor bestaande producten die een **nieuwe periode** starten (na einddatum originele toewijzing).
   - Gegevens vullen conform de regels voor nieuwe toewijzingen (inspannings- of outputgericht).

## Bedrijfsregels
- Afhankelijk van wijzigingen in `TeWijzigenProduct` kan de gemeente:
  - De bestaande toewijzing **aanpassen**, of
  - De bestaande toewijzing **intrekken** en een **nieuwe toewijzing** maken.
- Zie OP33x1 en OP257 voor details over het gebruik van bestaande toewijzingen versus nieuwe toewijzingen.

## Voorbeelden

### Voorbeeld 1
**Actuele situatie:**
- Toewijzing 432, Product B1, 1 maart 2025, 3 uur/week, eind 31 december 2026
- Toewijzing 543, Product C1, 1 maart 2025, 80 uur totaal, eind 31 december 2025

**Gewenste wijziging:**
- Product B1 vervangen door Product B2 vanaf 1 september 2025, 6 uur/week tot eind 2026

**VOW bericht:**
- OngewijzigdProduct: 543
- TeWijzigenProduct: 432, GewensteIngangsdatum 1 maart 2025, 3 uur/week, einddatum 31 augustus 2025
- NieuwProduct: B2, GewensteIngangsdatum 1 september 2025, 6 uur/week, einddatum 31 december 2026

### Voorbeeld 2a
**Actuele situatie:**
- Toewijzing 789, Product A1, 1 maart 2025, 3 uur/week, eind 31 december 2025
- Toewijzing 910, Product C1, 1 maart 2025, 4 dagdelen/maand, eind 31 december 2025

**Gewenste wijziging:**
- A1 verlengen en verhogen: 5 uur/week vanaf 1 november 2025 t/m 1 juli volgend jaar
- C1 verlengen t/m 1 juli

**VOW bericht:**
- TeWijzigenProduct: 789, GewensteIngangsdatum 1 november 2025, 5 uur/week, einddatum 1 juli 2026
- TeWijzigenProduct: 910, GewensteIngangsdatum 1 maart 2025, 4 dagdelen/maand, einddatum 1 juli 2026

### Voorbeeld 2b
**Actuele situatie:** zoals 2a

**Gewenste wijziging:**
- A1 verlengen en verhogen (vanaf 1 november 2025)
- C1 vanaf 1 januari 2026 voor 2 dagdelen/maand

**VOW bericht:**
- OngewijzigdProduct: 910
- TeWijzigenProduct: 789, GewensteIngangsdatum 1 november 2025, 5 uur/week, einddatum 1 juli 2026
- NieuwProduct: C1, GewensteIngangsdatum 1 januari 2026, 2 dagdelen/maand, einddatum 1 juli 2026

---

# IV093 Hoe wordt een Toewijzingbericht gevuld na aanleiding van een Verzoek om Wijziging (VOW) bericht?

## Algemeen
- Het Toewijzingbericht bevat **alle gevraagde wijzigingen uit het VOW**.
- Geen mix van wel/niet toegewezen producten; alles wordt conform aanvraag toegewezen.
- GewensteIngangsdatum kan worden aangepast indien reeds gepasseerd, in overleg met aanbieder.
- Alle ToegewezenProducten (ook ongewijzigde) krijgen **dezelfde ReferentieAanbieder** uit het VOW-bericht.

## Berichtklassen en vulling

### 1. OngewijzigdProduct
- Elk element uit VOW wordt ongewijzigd overgenomen.
- RedenWijziging blijft leeg.
- ReferentieAanbieder wordt overgenomen uit het VOW-bericht.

### 2. NieuwProduct
- Voor elk NieuwProduct in VOW wordt een nieuw ToegewezenProduct aangemaakt.
- Inhoud wordt volledig overgenomen uit VOW.
- RedenWijziging blijft leeg.
- ReferentieAanbieder wordt overgenomen uit VOW.

### 3. TeWijzigenProduct
Afhankelijk van type toewijzing:

#### a. Actuele toewijzing heeft budget of frequentie "totaal binnen geldigheidsduur"
- Wijziging geldt vanaf originele begindatum.
- Budget of totale omvang kan aangepast worden.
- Einddatum mag aangepast worden.
- Toewijzingnummer, Product en Begindatum blijven gelijk.

#### b. Actuele toewijzing heeft andere frequentie
- Afhankelijk van wijziging:
  - Alleen einddatum wijzigen → bestaande toewijzing aanpassen.
  - Omvang wijzigen → lopende toewijzing intrekken en nieuwe toewijzing vanaf GewensteIngangsdatum maken.

#### c. GewensteIngangsdatum in toekomst t.o.v. moment van toewijzen
- Velden uit VOW ongewijzigd overnemen.

#### d. GewensteIngangsdatum in verleden t.o.v. moment van toewijzen
- Toewijzing kan, indien mogelijk, met terugwerkende kracht worden uitgevoerd.
- Zo niet → datum in overleg met aanbieder aangepast.

## RedenWijziging en ReferentieAanbieder
- **RedenWijziging**:
  - Geïnitialiseerd door aanbieder bij aanpassing van lopende toewijzing
  - Leeg bij nieuwe toewijzing
- **ReferentieAanbieder**: altijd overgenomen uit VOW.

## Voorbeelden

### Voorbeeld 1
- Lopend:  
  - 123001, Product E, 4 uur/week, 01-01-2025 t/m 31-12-2025  
  - 123002, Product F, 3 uur/week, 01-01-2025 t/m 31-12-2025  
- Gewenste wijziging VOW:  
  - 123001, Product E, 4 uur/week, 01-01-2025 t/m 30-06-2026  
  - 123002, Product F, 6 uur/week, 12-06-2025 t/m 31-12-2025  

**Toewijzingbericht 02-06-2025**:
- 123001: E, 4 uur/week, eind 30-06-2026, RedenWijziging: "geïnitieerd door aanbieder"
- 123002: F, 3 uur/week, eind 11-06-2025, RedenWijziging: "geïnitieerd door aanbieder"
- 123078: F, 6 uur/week, ingangsdatum 12-06-2025, eind 31-12-2025, RedenWijziging leeg

### Voorbeeld 2
- Lopend:  
  - 345001, Product A, 01-01-2025 t/m 31-12-2025  
  - 345002, Product B, 01-01-2025 t/m 31-12-2025  
- VOW april 2023:  
  - Ongewijzigd: 345001  
  - TeWijzigen: 345002, eind 15-05-2025  
  - NieuwProduct: C vanaf 16-05-2025  

**Situatie a** (levering loopt door):
- 345001: ongewijzigd  
- 345002: einddatum 23-05-2025  
- C: ingangsdatum 24-05-2025

**Situatie b** (B stopt, C start):
- 345001: ongewijzigd  
- 345002: einddatum 15-05-2025  
- C: ingangsdatum 16-05-2025

### Voorbeeld 3
- Lopend: 678001, Product X, 01-01-2025 t/m 07-05-2026  
- VOW april 2026: Nieuw Y vanaf 08-05-2026  

**Situatie a** (levering loopt door):
- X: eind 07-05-2026  
- Y: ingangsdatum 08-05-2026  

**Situatie b** (levering stopt):
- X: eind 07-05-2026  
- Y: ingangsdatum 15-05-2026

---

# IV094 Hoe wordt een toewijzingbericht gevuld naar aanleiding van een VOT-bericht?

Wanneer een toewijzingbericht wordt verstuurd als gevolg van de **honorering van een VOT-bericht**:

### Toewijzing van producten
- Alle toe te wijzen producten worden toegewezen met parameters volgens het **oordeel van de gemeente**.
- De gemeente kan per product of productcategorie afwijken van de met de VOT gevraagde:
  - **Datums**  
  - **Omvang**
  - Of besluiten om een **ander product toe te wijzen** (bijvoorbeeld bij gestaffelde producten waarbij de productcode afhankelijk is van omvang).
- Bij een **aspecifiek product met budget** of een **generieke toewijzing** kan de gemeente een ander budget toewijzen.

### ReferentieAanbieder
- Elk toegewezen product krijgt de **ReferentieAanbieder** van de betreffende productaanvraag in het VOT-bericht.

### Overige actuele producten
- Alle andere **actuele toegewezen producten** voor deze cliënt bij deze aanbieder worden ook opgenomen in het toewijzingbericht.
- Voor deze producten is de **ReferentieAanbieder leeg**, zodat voldaan wordt aan **OP087**.

---

# IV095 Hoe moet de juiste gemeente worden gevuld?

Wanneer een gemeente in het **antwoordbericht** aangeeft dat zij **niet de verantwoordelijke gemeente** is voor de cliënt waarvoor een verzoek om toewijzing (VOT) is ingediend:

- `RedenAfwijzingVerzoek` wordt gevuld met de waarde **8 (Woonplaatsbeginsel)**.
- Het veld `Gemeente` moet de **gemeentecode** bevatten van de gemeente die volgens haar **wel verantwoordelijk** is.
  - Hierdoor weet de aanbieder bij welke gemeente het verzoek om toewijzing moet worden ingediend.

### Overige gevallen
- Bij **alle andere waarden** van `RedenAfwijzingVerzoek` **mag de klasse Woonplaatsbeginsel niet** worden opgenomen.

---

# IV096 Hoe wordt de sleutel van een start-/stopbericht gevuld?

De manier waarop de sleutel van een **start- of stopbericht** wordt gevuld, hangt af van de uitvoeringsvariant:

### Inspanningsgerichte of outputgerichte uitvoeringsvariant
- `ToewijzingNummer` wordt gebruikt als **sleutel** tussen het start-/stopbericht en de toewijzing.

### Taakgerichte uitvoeringsvariant
- Er is **geen sprake van een toewijzing**.
- De sleutel bestaat uit:
  - `Product`
  - `Begindatum`

---

# IV097 Hoe wordt ReferentieAanbieder gevuld in een ToegewezenProduct

## Algemeen
- **Wanneer vullen?**
  - Alleen wanneer een toewijzing wordt gestuurd **als direct gevolg van**:
    1. Verzoek om toewijzing (VOT)
    2. Verzoek om wijziging (VOW)
- **Initiatief van gemeente**
  - Als de gemeente een nieuwe of gewijzigde toewijzing verstuurt **zonder verzoek**, blijft **ReferentieAanbieder leeg**, ook als een eerder bericht dit wel had.

## Regels per type verzoek

### 1. Verzoek om Toewijzing (VOT)
- Elk gevraagd product heeft **een apart ReferentieAanbieder**.
- De ToegewezenProducten krijgen **het overeenkomstige ReferentieAanbieder** uit het VOT.

### 2. Verzoek om Wijziging (VOW)
- Alle wijzigingen en/of extra producten vormen **één samenhangend geheel**.
- Alle ToegewezenProducten in het toewijzingbericht krijgen **dezelfde ReferentieAanbieder** uit het VOW.

## Voorbeeld VOW

**Lopende toewijzingen:**

| ToewijzingNummer | Product | Ingangsdatum  | Einddatum     |
|-----------------|---------|---------------|---------------|
| 345001          | A       | 01-01-2025    | 31-12-2025    |
| 345002          | B       | 01-01-2025    | 31-12-2025    |

**VOW:** verlenging Product B t/m 30-06-2026, **ReferentieAanbieder = 667788**

**Toewijzingbericht na honorering:**

| ToewijzingNummer | Product | Ingangsdatum  | Einddatum     | ReferentieAanbieder |
|-----------------|---------|---------------|---------------|-------------------|
| 345001          | A       | 01-01-2025    | 31-12-2025    | 667788            |
| 345002          | B       | 01-01-2025    | 30-06-2026    | 667788            |

## Samengevat
- **ReferentieAanbieder volgt het verzoek** (VOT of VOW).
- **Niet** gevuld bij gemeentelijk initiatief.
- Bij VOW geldt **één ReferentieAanbieder voor alle wijzigingen/extra producten**.

---

# IV099 Wanneer moet `RedenWijziging` worden gevuld?

`RedenWijziging` geeft aan of `ToegewezenProduct` in een toewijzingsbericht is gewijzigd ten opzichte van de **laatste keer** dat dit bericht met hetzelfde `ToewijzingNummer` is verstuurd.

### Regels:

- Als het toegewezen product **niet is gewijzigd** ten opzichte van de laatste verzonden toewijzing, blijft `RedenWijziging` **leeg**.
- Als er **wel een wijziging** heeft plaatsgevonden, wordt `RedenWijziging` gevuld met de **code die past bij de wijziging**.
- Bij de **initiële toewijzing** van een product (nieuw `ToewijzingNummer`) is `RedenWijziging` **altijd leeg**.

---

