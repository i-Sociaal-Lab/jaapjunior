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

### OP271 – moment versturen Startbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op271

- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke start.  
- Indien ondersteuning met terugwerkende kracht is toegewezen → binnen 5 werkdagen na ontvangst toewijzingbericht.

-----

### OP272 – moment versturen Stopbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op272

- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke stop.  
- Definitieve stop volgend op tijdelijke stop → binnen 5 werkdagen nadat bekend is dat levering **definitief gestopt** is.

-----

### OP274 – moment versturen toewijzingsbericht of antwoordbericht na VOT
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op274

- Gemeente stuurt **binnen 5 werkdagen** per aangevraagd product:  
  - Toewijzingsbericht of  
  - Antwoordbericht  

- Als **VerzoekAntwoord = 2 (In onderzoek)**:  
  - Binnen 8 weken → toewijzingsbericht of antwoordbericht met **VerzoekAntwoord = 1 (Afgewezen)**.  
  - Elk product uit het VOT moet uiteindelijk **toewijzing of afwijzing** hebben.

-----

### OP275 – Uniek toewijzingsnummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op275

- Iedere toewijzing binnen een gemeente heeft een **uniek nummer per wettelijk domein**.

-----

### OP276 – Declaratie
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op276

- Aanbieder declareert voor cliënten waarvoor een **toewijzing ontvangen** is.

-----

### OP279 – Declaratie binnen geldigheid binnen toegewezen periode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op279

- Declaratie vindt plaats **binnen de geldigheid** van de toewijzing of anders gezegd, binnen te toegewezen periode

-----

### OP280 – Declaratieperiode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op280

- Declaratiebericht heeft betrekking op **één declaratieperiode**.  
- Kan prestaties bevatten uit **eerder verlopen declaratieperioden**.

-----

### OP281 – Declaratiebericht meerdere cliënten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op281

- Een declaratiebericht kan prestaties bevatten van **één of meer cliënten**.

-----

### OP283 – Uniek prestatie-nummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op283

- Iedere prestatie/declaratieregel krijgt een **uniek nummer (ProductReferentie)** per aanbieder per wettelijk domein.

-----

### OP284 – Aansluitende declaratieperioden
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op284

- Als iedere declaratieperiode zorg is geleverd, moeten declaratieperioden **aansluitend** zijn in opvolgende berichten.  
- Geen zorg geleverd → geen declaratie over die periode, tenzij **correcties op eerdere declaraties** nodig zijn.  
- Hiaten in declaratieperioden zijn toegestaan (duur = 1 of meer kalendermaanden).  
- Overlap van declaratieperioden voor correcties is toegestaan op de laatst ingediende periode.

-----

### OP286 – Technische fouten heenbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op286

- Bij technische fouten keurt ontvanger **het hele bericht af**.  
- Bericht wordt **functioneel als niet-verzonden** beschouwd en verzender geïnformeerd via een retourbericht.

-----

### OP288 – Stopbericht na Startbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op288

- Als een Startbericht is gestuurd, wordt de beëindiging altijd doorgegeven met een **Stopbericht**.  
- Dit geldt ook bij levering volgens plan of op einddatum van de toewijzing.

-----

### OP289 – Eén actueel Startbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op289

- Per toegewezen product kan slechts **één startdatum** actueel zijn.  
- Startbericht mag niet volgen op een bestaand Startbericht voor hetzelfde product, tenzij:  
  - Er een (tijdelijke) beëindiging via Stopbericht is doorgegeven, of  
  - Het betreft een correctie van het eerdere Startbericht.  
- Toewijzing kan **generiek**, **aspecifiek**, of **specifiek** zijn.

-----

### OP295 – Gebruik van regeieberichten (start-/stopberichten) is verplicht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op295

- Gebruik van regieberichten is verplicht bij **inspannings- en outputgericht**.  
- Stopbericht mag alleen gestuurd worden als er een **Startbericht** is.  
- Bij oudere leveringen (iWmo/iJw release 2.4, voor 2021) zonder Startbericht → Stopbericht mag niet.

-----

### OP296 – Verzoek om Toewijzing moet passend zijn
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op296
- Moet passen binnen de **contractafspraken** tussen gemeente en aanbieder.

-----

### OP297 – Zorgverlenercode van verwijzer bekend?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op297
- Indien deze bekend is, moet de **ZorgverlenerCode (AGB)** van verwijzer worden meegegeven.  
- Ontbreekt de AGB-code → naam van de verwijzer volstaat.

-----

### OP298 – Verlagen volume
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op298

- Dit is alleen toegestaan **na overleg met en instemming van** de aanbieder bij frequentie “totaal binnen geldigheidsduur”.

-----

### OP299 – Verlagen budget
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op299

- Dit is alleen toegestaan **na overleg met en instemming van** de aanbieder.
- Op verzoek van de aanbieder via een wijzigingsverzoek → mag gemeente **zonder overleg** aanpassen.

-----

### OP302 – Declaratie passend bij toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op302

- De aanbieder declareert een zorg- of ondersteuningsproduct dat aansluit bij de toewijzing
- Soorten toewijzing:  
  - **Specifiek**: productcategorie + productcode beide gevuld → zelfde combinatie declareren.  
  - **Aspecifiek**: alleen productcategorie gevuld → aanbieder declareert 1 of meer productcodes die volgens de gehanteerde productcodelijst horen bij die productcategorie.
  - **Generiek**: alleen budget gevuld → 1, productcategorie + productode zijn leeg. De aanbieder declareert 1 of meer productcategorieën + bijbehorende productcodes die zijn afgesproken tussen aanbieder een gemeente.

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

### OP344 – Reactie gemeente op VOT of VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op344

- Gemeente antwoordt met **toewijzing** of **afwijzing**.  
- Eventueel eerst onderzoek nodig.  
- Bij VOW: reactie op **hele verzoek**.  
- Bij VOT: gemeente kan per product besluiten.

-----

### OP345 – Wijziging met terugwerkende kracht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op345

- Nieuwe omvang of budget mag **niet leiden tot onrechtmatigheid** van al geleverde of gedeclareerde zorg.

-----

### OP346 – Reactietermijn VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op346

- Binnen **5 werkdagen** toewijzing- of antwoordbericht.  
- Indien waarde 2 ("Aanvraag in onderzoek") → binnen **8 weken** na dagtekening van het verzoek en definitieve toewijzing of afwijzing (waarde 1).

-----

### OP347 – Geen stapeling bij aanvragen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op347

Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld aan te vragen
- **Stapeling** = zelfde product meerdere keren voor dezelfde periode door dezelfde aanbieder.  
- Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander aangevraagd product voor (gedeeltelijk) dezelfde periode naast mag staan. 
- Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of er sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing.
- Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

-----

### OP348 – Honoreren VOW 
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op348

- Aangevraagde/gewijzigde producten in een VOW, worden 1 op 1 **overgenomen in toewijzingsbericht**, zie IV093.  
- Ingangs- en einddatum kunnen afwijken bij terugwerkende kracht.
- Toewijzingnummer wijkt af indien voor een wijziging en nieuwe toewijzing moet worden afgegeven. (conform OP257 en IV066)

-----

### OP349 – Uniek declaratienummer
 Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op349
 
- Iedere declaratie krijgt een **uniek nummer per aanbieder en wettelijk domein**.

-----

### OP350 – Geen dubbele VOT of VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op350

- Het is niet toegestaan een verzoek om wijziging of verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld. 
- In behandeling = tot afkeur of toewijzing → geen nieuw verzoek voor dezelfde cliënt.

-----

### OP354 – In welke declaratieperiode wordt gedeclareerd?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op354

- Zorg/ondersteuning aan client wordt gedeclareerd in **volgende of latere periode**.

-----

### OP355 – Declaratie-antwoordbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op355

- Altijd gerelateerd aan **eerder ontvangen declaratiebericht**.  
- Koppeling kan zowel op bericht- als declaratieniveau.

-----

### OP359 – Afwijzing VOT vanwege woonplaatsbeginsel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op359

- Indien een verzoek om toewijzing wordt afgewezen op basis van het woonplaatsbeginsel, dient de gemeente dit binnen de wettelijke termijn van 2 weken af te wijzen en de financieel verantwoordelijke gemeente terug te geven aan de aanbieder

-----

### OP360 – Wanneer mag je een prestatie crediteren?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op360

- Een prestatie mag **alleen gecrediteerd worden als deze nog niet eerder gecrediteerd is**.

-----

### OP361 – Uniek referentienummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op361

- Iedere aanvraag in VOT of VOW krijgt een **uniek referentienummer per aanbieder en per wettelijk domein**.

-----

### OP362 – Verwijderen toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op362

- Alleen toegestaan als **rechtmatigheid van geleverde/declaratie zorg** niet verloren gaat.

-----

### OP363 – Start/stop meldingen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op363

- Aanbieder meldt de start en de stop van ondersteuning bij **output- of inspanningsgerichte** producten, met een startbericht of stopbericht.

-----

### OP364 – Regieberichten (start- stopbericht)
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op364

- Regieberichten zijn **Niet voorwaardelijk** aan een declaratie.  
- Een Prestatie in een declaratiebericht kan **niet afgekeurd** worden op basis van start-/stopdatum in een regiebericht of ontbrekende start- stopberichten.

-----

### OP365 – Declaratie passend bij toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op365

- De aanbieder declareert een zorg- of ondersteuningsproduct met een omvang die aansluit bij de toewijzing en/of gecontracteerde afspraken.

-----

### OP366 – Crediteren voor correctie
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op366

- Een prestatieregel moet eerst volledig gecrediteerd worden om daarna een **correctie** op de prestatieregel te kunnen indienen.   
- Verwerking: **creditregels eerst**, daarna debetregels. Omdat een prestatieregel eerst volledig gecrediteerd moet worden alvorens er een correctie op deze prestatieregel ingediend kan worden, is het noodzakelijk dat bij de verwerking van de declaratieberichten eerst de creditregels verwerkt worden, en pas daarna de debetregels.

-----

### OP367 – Productperiode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op367

- Valt altijd binnen **kalendermaand**.

-----

### OP368 – Productperiode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op368

- Een productperiode valt altijd binnen de **geldigheidsperiode** van een toewijzing

-----

### OP377 – Tijdelijke stop gevolgd door definitieve stop
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op377

- Alleen een tijdelijke stop mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stop.
- Een (tijdelijk) Stopbericht volgt op **startbericht**.  
- Uitzondering: definitieve stop kan volgen op start of tijdelijke stop.

-----

### OP378 – Definitieve stop zonder start
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op378

-----

- Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan.

### OP379 – Start na stop
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op379

- Na tijdelijke of definitieve stop is het toegestaan een **startbericht** te sturen.

-----

### OP380 – Verplaatsen einddatum toewijzing in de toekomst (verlengen) is verplicht indien:
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op380

- Deze werkwijze is verplicht indien de toewijzing aan alle onderstaande voorwaarden voldoet:
  - Volume blijft gelijk of is leeg.  
  - Frequentie is leeg of ongelijk aan totaal binnen geldigheidsduur toewijzing en blijft gelijk.  
  - Einddatum bestaande toewijzing **niet verstreken** op moment van verlengen en versturen.
