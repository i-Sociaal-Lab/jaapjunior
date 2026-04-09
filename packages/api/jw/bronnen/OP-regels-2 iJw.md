## Bedrijfsregels op berichten iJw


## Meta Data
- Naam: Bedrijfsregels
- Versie: 1.0
- Status: Productie
- Auteur: Zorginstituut Nederland
- Versie: iJw 3.2
- Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/
- Publicatiedatum: 29 september 2022
- AI-agent: Jw-agent
  
----------

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

### OP186 – stoppen van toewijzing in het verleden
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op186

- Beëindigen van een toewijzing in het verleden mag alleen in **overeenstemming met de aanbieder**.  
- Toepassing: situaties waarin de aanbieder niet had kunnen weten dat ondersteuning niet geleverd mocht worden.

-----

### OP191 – Ongestructureerde informatie
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op191

- Gebruik van ongestructureerde informatie moet minimaal zijn.  
- **Commentaar mag** in het bericht ter toelichting, mits geen persoonsgegevens zonder toestemming.

-----

### OP192 – Technische eisen berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op192

- Formaat: **XML**  
- Codering: **UTF-8**  
- Byte-Order-Mark (BOM) niet toegestaan  
- Einderegel: **CR/LF**  
- Bestandsextensie: `.xml`

-----

### OP252 – Onbekende geboortedatum
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op252

- Bij een (gedeeltelijk) onbekende geboortedatum moet worden aangegeven welk deel **betrouwbaar** is.

-----

### OP254 – AGB-codes
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op254

- iJw-berichten gebruiken **AGB-codes** voor routering en identificatie van de aanbieder.

-----

### OP257 – Wijziging zorgvraag
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op257

- Bij een wijziging van de zorgvraag wordt voor het betreffende product een nieuwe toewijzing afgegeven of voor het betreffende product wordt een gewijzigde toewijzing gestuurd.
- Bij het afgeven van een nieuwe toewijzing wordt een eventueel bestaande toewijzing beeindigd indien:

- **Beëindigen bestaande toewijzing** indien:  
  - Omvang van ondersteuning wijzigt (meer of minder ondersteuning nodig).  
  - Product wijzigt (ander product nodig).  

- **Voorkeur aanpassing bestaande toewijzing** indien:  
  - Einddatum zorg of ondersteuning wijzigt (intrekken/oprekken)  
  - Volume wijzigt bij frequentie “totaal binnen geldigheidsduur”  
  - Maximaal budget wordt gewijzigd

-----

### OP258 – Beëindiging toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op258

- Bij beëindiging van een toewijzing wordt de aanbieder geïnformeerd via een **toewijzingsbericht**.

-----

### OP259 – Geen stapeling van producten bij toewijzen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op259/

Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld toe te wijzen
- **Gestapeld:** betekent dat voor een client hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt toegewezen aan dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.
Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander toegewezen product voor (gedeeltelijk) dezelfde periode naast mag staan.
- Zelfde product: dezelfde **productcode** of **productcategorie** (als productcode leeg) of (als productcategorie is leeg).
- Uitzonderingen:  
  - Verwijderde toewijzingen (einddatum = ingangsdatum, RedenWijziging = 13)  
  - Administratieve correcties (RedenWijziging = 01)  
  - Deze worden **niet als actuele toewijzing** gezien.

-----

### OP260 – Productomschrijving
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op260

- Een ondersteuningsproduct wordt omschreven als een **Productcategorie** en kan nader worden gespecificeerd met een **Productcode**.

-----

### OP261 – Uitvoeringsvariant per product
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op261

- Per ondersteuningsproduct wordt vastgelegd of de uitvoering **inspanningsgericht**, **outputgericht** of **taakgericht** is.

-----

### OP262 – Tarieven inspanningsgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op262

- Er wordt een tarief per tijdseenheid afgesproken.  
- Uitzondering: eenheid = stuks (inspanning) → tarief per stuk.

-----

### OP263 – Tarieven outputgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op263

- Er wordt een tarief per stuk of een bedrag in euro’s afgesproken over een vastgestelde periode.  
- Gemeente en aanbieder maken duidelijke afspraken over de **definitie van output** en **vaststellen hoe kan worden vastgesteld dat behaalde output is behaald**.

-----

### OP264 – Declaratiemoment outputgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op264

- Vaststelling van het declaratiemoment, bijvoorbeeld:  
  - Bij afronding traject  
  - Per behaalde mijlpaal  
  - Periodiek vast bedrag

-----

### OP267 – Declaratie-eenheid
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op267

- Aanbieder declareert in een eenheid die aansluit bij de **toewijzing**.

-----

### OP270 – Afspraken over Regieberichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op270

Aanbieder en gemeente maken onderling afspraken over de door te geven begin- en einddatum in de regieberichten, (lees startbericht, stopbericht).
- Afspraken over begin- en einddatums tussen **gemeente en aanbieder**.  
- Verplicht bij uitvoeringsvarianten: **inspannings- en outputgericht**.  
- Afspraken over begin- en eindatum per product kan afwijken, maar dit heeft **niet de voorkeur**.

-----
gemeente.

-----

### OP303 – Declaratie-antwoordbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op303

- Bevat alle informatie om een declaratie administratief te verwerken.  
- Alleen **afgekeurde prestaties** worden meegestuurd met een **retourcode**.  
- Toegekende prestaties worden niet apart vermeld, alleen de som van de ingediende bedragen en van de toegekende prestaties bedragen wordt opgenomen in `DeclaratieAntwoord`.

-----

### OP304 – Detailinformatie retourbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op304

- Retourbericht bevat alleen cliënten met **afgekeurde berichtklassen**.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet teruggestuurd.  
- Berichtklasse `Cliënt` inclusief alle afgekeurde prestaties en retourcodes wordt geretourneerd.

-----

### OP305 – Producten op basis van inspanningsgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op305

- Producten in **stuks** (inspanning) moeten toegewezen worden met **eenheid 84**.

-----

### OP306 – Verzoek om wijziging (VOW)
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op306

- Het verzoek om wijziging bericht wordt gebruikt als tijdens levering van zorg en/of ondersteuning blijkt dat een ander pakket van toegewezen producten nodig is
- Een verzoek om wijziging bericht wordt altijd verstuurd vanuit een situatie waarbij er al geleverd wordt op basis van een of meer actuele toewijzingen.
- Wordt gebruikt bij veranderingen in de zorgsituatie van een cliënt.  
- Verstuurd vanuit **actuele toewijzingen**.  
- Bevat de **complete gewenste situatie** (ongewijzigd, gewijzigd en nieuw).  
- Kan niet gebruikt worden zonder actuele toewijzing.

-----

### OP307 – Verzoek om toewijzing (VOT)
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op307

- Een verzoek om toewijzing bericht wordt alleen gebruikt indien een cliënt zich met een (wettelijke) verwijzing of een open beschikking meldt bij de zorgaanbieder
- Wordt altijd gebruikt bij **(wettelijke) verwijzing of open beschikking**.
- Alleen indien er nog **geen actuele toewijzing** is voor het product en periode.
- Kan niet gebruikt worden als er al een actuele toewijzing bestaat.

-----

### OP308 – VOW als samenhangend geheel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op308

- Een aanbieder vraagt met een verzoek om wijziging bericht (VOW) een samenhangend geheel aan toewijzingen aan met daarin de volledige gewenste situatie.
- VOW bevat **complete nieuwe situatie** bij verandering van de zorgsituatie van de client.  
- Inclusief ongewijzigde, gewijzigde en nieuwe producten/productcategorieën.

-----

### OP343 – Tijdige indiening VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op343

Een verzoek om wijziging moet tijdig ingediend worden.
- Gemeente moet redelijkerwijs kunnen **reageren vóór de gewenste ingangsdatum**. Let hierbij op een mogelijk 8 weken onderzoekstermijn.

-----
