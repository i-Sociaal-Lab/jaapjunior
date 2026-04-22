## Bedrijfsregels op berichten iJw


## Meta Data
- Naam: Bedrijfsregels
- Versie: 1.0
- Status: Productie
- Auteur: Zorginstituut Nederland
- Versie: iJw 3.2
- Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/
- Publicatiedatum: 29 september 2022
- AI-agent: Jw-agent
  
------

## Inleiding voor AI-agent

Dit regelrapport beschrijft de Bedrijfsregels die gelden binnen het berichtenverkeer van de Jeugdwet (iJw), release 3.2.0. 

Regels kunnen van toepassing zijn op het bericht, een berichtklasse, berichtelement of een datatype.

Retourberichten, m.u.v. het declaratiebericht, kennen dezelfde regels als het heenbericht en zijn niet apart opgenomen.

Het document dient als **naslagwerk en validatiebron** voor AI-agenten die vragen moeten beantwoorden, tekst moeten analyseren of processtappen moeten controleren binnen het domein van jeugdhulp, gemeenten en zorgaanbieders.

**Gebruik voor AI-agenten**

- Iedere regel is voorzien van een unieke code (zoals OP001, OP033, OP295), een titel en een toelichting.
- Bedrijfsregels hebben een code die begint met OP
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iJw.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef bij het beantwoorden van vragen over regels uit het document ‘Regels op berichten iJw release 3.2’ altijd de volledige, letterlijke tekst van de gevraagde regel weer. Sla geen enkel tekstblok, opsomming of toelichting over die onder het betreffende regelnummers valt. Stop pas bij het volgende regelnummers of het einde van het document."
- Wanneer een gebruiker vraagt om de tekst van een specifieke regel (bijvoorbeeld OP001), selecteer en retourneer altijd de volledige tekst die hoort bij het betreffende regels, vanaf de eerste regel na het regelnummers tot en met de eerste volgende regel met een nieuw regelnummers of het einde van het document. Neem alle tekst, opsommingen, subkopjes en toelichtingen op die onder het regelnummers vallen. Geef geen interpretatie in dit geval.
- Sommige regels zijn specifiek voor gemeenten, andere voor aanbieders of ketenpartijen.
- Let op: dit rapport bevat verschillende type regels check bij interpretatie altijd het type regel.
- Let op: regelnummer (bijv. OP001, OP047) zijn louter administratieve identifiers zonder hiërarchische betekenis. Behandel ze als unieke sleutels die uitsluitend gebruikt worden voor verwijzing, niet voor interpretatie.
- Bekijk alle regels om tot een juist antwoord te komen.
---

# iJw 3.2.0 – Bedrijfsregels


## Bedrijfsregels (OP-regels)

### `OP186` | stoppen van toewijzing in het verleden
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op186/

- Beëindigen van een toewijzing in het verleden mag alleen in overeenstemming met de aanbieder.  
- Toepassing: situaties waarin de aanbieder niet had kunnen weten dat ondersteuning niet geleverd mocht worden.

---

### `OP191` | Ongestructureerde informatie
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op191/

- Gebruik van ongestructureerde informatie moet minimaal zijn.  
- Commentaar mag in de berichten JW301 en JW315 gebruikt worden om extra informatie op te nemen. Het commentaar bevat een toelichting op de betreffende berichtklasse (AangevraagdProduct, ToegewezenProduct), die niet elders in het bericht kan worden opgenomen.
- Commentaar in het bericht mag geen tot een persoon herleidbare gegevens bevatten zonder toestemming van die persoon.

---

### OP192 – Technische eisen verzonden berichten  
Bron: [OP192](https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op192/)

Verzonden berichten moeten voldoen aan de volgende technische eisen:

1. Formaat: `XML`  
2. Codering: `UTF-8`  
3. Byte-Order-Mark (BOM): niet toegestaan  
4. Einderegel: `CR/LF`  
5. Bestandsextensie: `.xml`

**Uitwerking van regel:** `UP017`

---

### OP252 – Onbekende geboortedatum  
Bron: [OP252](https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op252/)

- Bij een (gedeeltelijk) onbekende geboortedatum moet worden aangegeven welk deel betrouwbaar is.

**Uitwerking van regel:** `UP017`

--
### `OP254` | AGB-codes
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op254/

- iJw-berichten gebruiken **AGB-codes** voor routering en identificatie van de aanbieder.

**Uitwerking van regel:** `UP017`
---

### OP257 — Wijziging zorgvraag → nieuwe of aangepaste toewijzing

**Bron:** https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op257/

#### Hoofdregel
Bij een wijziging van de zorgvraag:
- wordt een **nieuwe toewijzing afgegeven**, of  
- wordt een **bestaande toewijzing gewijzigd**

#### Nieuwe toewijzing (bestaande beëindigen)
Beëindig de bestaande toewijzing indien:
- de **omvang van ondersteuning wijzigt**
- het **product wijzigt**

#### Bestaande toewijzing aanpassen (voorkeur)
Pas de bestaande toewijzing aan indien:
- de **einddatum wijzigt**
- het **volume wijzigt** bij frequentie *“totaal binnen geldigheidsduur”*
- het **maximaal budget wijzigt**

#### Uitwerking van regel
- `UP007`
---

### `OP258` | Beëindiging toewijzing
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op258/

- Bij beëindiging van een toewijzing wordt de aanbieder geïnformeerd via een **toewijzingsbericht**.

---

### `OP259` | Geen stapeling van producten bij toewijzen
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op259/

Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld toe te wijzen
- **Gestapeld:** betekent dat voor een client hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt toegewezen aan dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.
Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander toegewezen product voor (gedeeltelijk) dezelfde periode naast mag staan.
- Zelfde product: dezelfde **productcode** of **productcategorie** (als productcode leeg) of (als productcategorie is leeg).
- Uitzonderingen:  
  - Verwijderde toewijzingen (einddatum = ingangsdatum, RedenWijziging = 13)  
  - Administratieve correcties (RedenWijziging = 01)  
  - Deze worden **niet als actuele toewijzing** gezien.

---

### `OP260` | Hoe wordt een ondersteuningsproduct omschreven?
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op260/

- Een ondersteuningsproduct wordt omschreven als een **Productcategorie** en kan nader worden gespecificeerd met een **Productcode**.

---

### `OP261` | Uitvoeringsvariant per product
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op261/

- Per ondersteuningsproduct wordt vastgelegd of de uitvoering **inspanningsgericht**, **outputgericht** of **taakgericht** is.

---

### `OP262` | Tarieven inspanningsgericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op262/

- Er wordt een tarief per tijdseenheid afgesproken.  
- Uitzondering: eenheid = stuks (inspanning) → tarief per stuk.

---

### `OP263` | Tarieven outputgericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op263/

- Er wordt een tarief per stuk of een bedrag in euro’s afgesproken over een vastgestelde periode.  
- Gemeente en aanbieder maken duidelijke afspraken over de **definitie van output** en **vaststellen hoe kan worden vastgesteld dat behaalde output is behaald**.

---

### `OP264` | Declaratiemoment outputgerichte ondersteuningsproducten
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op264/

- Vaststelling van het declaratiemoment, bijvoorbeeld:  
  - Bij afronding traject  
  - Per behaalde mijlpaal  
  - Periodiek vast bedrag

---

### `OP267` | Declaratie-eenheid
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op267/

- Aanbieder declareert in een eenheid die aansluit bij de **toewijzing**.

---

### `OP270` | Afspraken over begin- en einddatum Regieberichten
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op270/

Aanbieder en gemeente maken onderling afspraken over de door te geven begin- en einddatum in de regieberichten, (lees startbericht, stopbericht).
- Afspraken over begin- en einddatums tussen **gemeente en aanbieder**.  
- Verplicht bij uitvoeringsvarianten: **inspannings- en outputgericht**.  
- Afspraken over begin- en eindatum per product kan afwijken, maar dit heeft **niet de voorkeur**.

---

### `OP271` | moment versturen Startbericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op271/

- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke start.  
- Indien ondersteuning met terugwerkende kracht is toegewezen → binnen 5 werkdagen na ontvangst toewijzingbericht.

---

### `OP272` | moment versturen Stopbericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op272/

- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke stop.  
- Definitieve stop volgend op tijdelijke stop → binnen 5 werkdagen nadat bekend is dat levering **definitief gestopt** is.

---

### `OP274` | moment versturen toewijzingsbericht of antwoordbericht na VOT 
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op274/

- Gemeente stuurt **binnen 5 werkdagen** per aangevraagd product:  
  - Toewijzingsbericht of  
  - Antwoordbericht  

- Als **VerzoekAntwoord = 2 (In onderzoek)**:  
  - Binnen 8 weken → toewijzingsbericht of antwoordbericht met **VerzoekAntwoord = 1 (Afgewezen)**.  
  - Elk product uit het VOT moet uiteindelijk **toewijzing of afwijzing** hebben.

---

### `OP275` | Uniek toewijzingsnummer
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op275/

- Iedere toewijzing binnen een gemeente heeft een **uniek nummer per wettelijk domein**.

---

### `OP276` | Declareren indien toewijzing is ontvangen
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op276/

- Aanbieder declareert voor cliënten waarvoor een **toewijzing ontvangen** is.

---

### `OP279` | Declaratie binnen toegewezen periode
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op279/

- Declaratie vindt plaats **binnen de geldigheid** van de toewijzing of anders gezegd, binnen te toegewezen periode

---

### `OP280` | Declaratiebeircht en declaratieperiode 
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op280/

- Declaratiebericht heeft betrekking op **één declaratieperiode**.  
- Kan prestaties bevatten uit **eerder verlopen declaratieperioden**.

---

### `OP281` | Declaratiebericht met één of meerdere cliënten
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op281/

- Een declaratiebericht kan prestaties bevatten van **één of meer cliënten**.

---

### `OP283` | Uniek prestatie-nummer
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op283/

- Iedere prestatie/declaratieregel krijgt een **uniek nummer (ProductReferentie)** per aanbieder per wettelijk domein.

---

### `OP284` | Aansluitende declaratieperioden
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op284/

- Als iedere declaratieperiode zorg is geleverd, moeten declaratieperioden **aansluitend** zijn in opvolgende berichten.  
- Geen zorg geleverd → geen declaratie over die periode, tenzij **correcties op eerdere declaraties** nodig zijn.  
- Hiaten in declaratieperioden zijn toegestaan (duur = 1 of meer kalendermaanden).  
- Overlap van declaratieperioden voor correcties is toegestaan op de laatst ingediende periode.

---

### `OP286` | Technische fouten heenbericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op286/

- Bij technische fouten keurt ontvanger **het hele bericht af**.  
- Bericht wordt **functioneel als niet-verzonden** beschouwd en verzender geïnformeerd via een retourbericht.

---

### `OP288` | Stopbericht na Startbericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op288/

- Als een Startbericht is gestuurd, wordt de beëindiging altijd doorgegeven met een **Stopbericht**.  
- Dit geldt ook bij levering volgens plan of op einddatum van de toewijzing.

---

### `OP289` | Eén actueel Startbericht bij toegewezen product
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op289/

- Per toegewezen product kan slechts **één startdatum** actueel zijn.  
- Startbericht mag niet volgen op een bestaand Startbericht voor hetzelfde product of prouductcategorie, tenzij:  
  - Er een (tijdelijke) beëindiging via Stopbericht is doorgegeven, of  
  - Het betreft een correctie van het eerdere Startbericht.  
- let op een startbericht kan **generiek**, **aspecifiek**, of **specifiek** zijn.

---

### `OP295` | Gebruik van regeieberichten (start-/stopberichten) is verplicht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op295/

- Gebruik van regieberichten is verplicht bij **inspannings- en outputgericht**.  
- Stopbericht mag alleen gestuurd worden als er een **Startbericht** is.  
- Bij oudere leveringen (iWmo/iJw release 2.4, voor 2021) zonder Startbericht → Stopbericht mag niet.

---

### `OP296` | Verzoek om Toewijzing moet passend zijn
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op296/
- Moet passen binnen de **contractafspraken** tussen gemeente en aanbieder.

---

### `OP297` | Zorgverlenercode van verwijzer bekend?
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op297/
- Indien deze bekend is, moet de **ZorgverlenerCode (AGB)** van verwijzer worden meegegeven.  
- Ontbreekt de AGB-code → naam van de verwijzer volstaat.

---

### `OP298` | Verlagen volume
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op298/

- Dit is alleen toegestaan **na overleg met en instemming van** de aanbieder bij frequentie “totaal binnen geldigheidsduur”.

---

### `OP299` | Verlagen budget
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op299/

- Dit is alleen toegestaan **na overleg met en instemming van** de aanbieder.
- Op verzoek van de aanbieder via een wijzigingsverzoek → mag gemeente **zonder overleg** aanpassen.

---

### `OP302` | Declaratie passend bij toewijzing
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op302/

- De aanbieder declareert een zorg- of ondersteuningsproduct dat aansluit bij de toewijzing
- Soorten toewijzing:  
  - **Specifiek**: productcategorie + productcode beide gevuld → zelfde combinatie declareren.  
  - **Aspecifiek**: alleen productcategorie gevuld → aanbieder declareert 1 of meer productcodes die volgens de gehanteerde productcodelijst horen bij die productcategorie.
  - **Generiek**: alleen budget gevuld → 1, productcategorie + productode zijn leeg. De aanbieder declareert 1 of meer productcategorieën + bijbehorende productcodes die zijn afgesproken tussen aanbieder een gemeente.

---

### `OP303` | Declaratie-antwoordbericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op303/

- Bevat alle informatie om een declaratie administratief te verwerken.  
- Alleen **afgekeurde prestaties** worden meegestuurd met een **retourcode**.  
- Toegekende prestaties worden niet apart vermeld, alleen de som van de ingediende bedragen en van de toegekende prestaties bedragen wordt opgenomen in `DeclaratieAntwoord`.

---

### `OP304` | Detailinformatie retourbericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op304/

- Retourbericht bevat alleen cliënten met **afgekeurde berichtklassen**.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet teruggestuurd.  
- Berichtklasse `Cliënt` inclusief alle afgekeurde prestaties en retourcodes wordt geretourneerd.

---

### `OP305` | Producten op basis van inspanningsgericht
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op305/

- Producten in **stuks** (inspanning) moeten toegewezen worden met **eenheid 84**.

---

### `OP306` | Verzoek om wijziging (VOW)
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op306/

- Het verzoek om wijziging bericht wordt gebruikt als tijdens levering van zorg en/of ondersteuning blijkt dat een ander pakket van toegewezen producten nodig is
- Een verzoek om wijziging bericht wordt altijd verstuurd vanuit een situatie waarbij er al geleverd wordt op basis van een of meer actuele toewijzingen.
- Wordt gebruikt bij veranderingen in de zorgsituatie van een cliënt.  
- Verstuurd vanuit **actuele toewijzingen**.  
- Bevat de **complete gewenste situatie** (ongewijzigd, gewijzigd en nieuw).  
- Kan niet gebruikt worden zonder actuele toewijzing.

---

### `OP307` | Verzoek om toewijzing (VOT)
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op307/

- Een verzoek om toewijzing bericht wordt alleen gebruikt indien een cliënt zich met een (wettelijke) verwijzing of een open beschikking meldt bij de zorgaanbieder
- Wordt altijd gebruikt bij **(wettelijke) verwijzing of open beschikking**.
- Alleen indien er nog **geen actuele toewijzing** is voor het product en periode.
- Kan niet gebruikt worden als er al een actuele toewijzing bestaat.

---

### `OP308` | VOW als samenhangend geheel
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op308/

- Een aanbieder vraagt met een verzoek om wijziging bericht (VOW) een samenhangend geheel aan toewijzingen aan met daarin de volledige gewenste situatie.
- VOW bevat **complete nieuwe situatie** bij verandering van de zorgsituatie van de client.  
- Inclusief ongewijzigde, gewijzigde en nieuwe producten/productcategorieën.

---

### `OP343` | Tijdige indiening VOW
Bron: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op343/

Een verzoek om wijziging moet tijdig ingediend worden.
- Gemeente moet redelijkerwijs kunnen **reageren vóór de gewenste ingangsdatum**. Let hierbij op een mogelijk 8 weken onderzoekstermijn.

---
