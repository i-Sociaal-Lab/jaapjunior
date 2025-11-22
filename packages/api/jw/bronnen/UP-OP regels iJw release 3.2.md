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

- Iedere regel is voorzien van een unieke code (zoals UP001, OP001, IV002), een titel en een toelichting.
- Uitgangspunten hebben een code die begint met UP
- Bedrijfsregels hebben een code die begint met OP
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iJw.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef bij het beantwoorden van vragen over regels uit het document ‘Regels op berichten iJw release 3.2’ altijd de volledige, letterlijke tekst van de gevraagde regel weer. Sla geen enkel tekstblok, opsomming of toelichting over die onder het betreffende regelnummers valt. Stop pas bij het volgende regelnummers of het einde van het document."
- Wanneer een gebruiker vraagt om de tekst van een specifieke regel (bijvoorbeeld OP001), selecteer en retourneer altijd de volledige tekst die hoort bij het betreffende regelnummers, vanaf de eerste regel na het regelnummers tot en met de eerste volgende regel met een nieuw regelnummers of het einde van het document. Neem alle tekst, opsommingen, subkopjes en toelichtingen op die onder het regelnummers vallen. Geef geen interpretatie in dit geval.
- Sommige regels zijn specifiek voor gemeenten, andere voor aanbieders of ketenpartijen.
- Let op: dit rapport bevat verschillende type regels check bij interpretatie altijd het type regel.
- Let op: regelnummer (bijv. OP001, OP047, IV008) zijn louter administratieve identifiers zonder hiërarchische betekenis. Behandel ze als unieke sleutels die uitsluitend gebruikt worden voor verwijzing, niet voor interpretatie.
- Bekijk alle regels om tot een juist antwoord te komen.
---

# iJw 3.2.0 – Uitgangspunten, Bedrijfsregels en Invulinstructies

## Uitgangspunten (UP-regels)

De volgende uitgangspunten vormen de basis voor het berichtenverkeer binnen de Jeugdwet (iJw 3.2.0):

### UP001
**Ondersteuning Jw berichtenfamilie**  
De Jw berichtenfamilie ondersteunt het toewijzen, leveren en declareren van Jeugdhulp in het kader van de Jeugdwet, geleverd als zorg in natura (ZIN).

### UP003
**Privacy cliënt**  
De privacy van de cliënt is geborgd doordat aangesloten ketenpartijen zich conformeren aan de Algemene Verordening Gegevensbescherming (AVG).

### UP004
**Coördinatie door gemeente**  
De volgens de wet verantwoordelijke gemeente coördineert de inzet van Jeugdhulp voor de cliënt via toewijzingen (inspannings- en outputgericht).

### UP006
**Identificatie cliënt**  
De cliënt wordt in de informatievoorziening Jw geïdentificeerd met zijn BSN.

### UP007
**Beschikking gemeente**  
De gemeente legt in een beschikking vast of een cliënt recht heeft op ondersteuning vanuit de Jeugdwet (inspannings- en outputgericht).

### UP016
**Jeugdhulp-producten**  
Jeugdhulp wordt uitgedrukt in jeugdhulp-producten.

### UP017
**Gestandaardiseerde uitwisseling**  
De informatie-uitwisseling in de Jeugdwet is gebaseerd op gestandaardiseerd berichtenverkeer.

### UP019
**Cliënt centraal**  
De cliënt staat centraal in alle processen.

### UP023
**Eenmalige informatievraag**  
Informatie wordt eenmalig bij de cliënt uitgevraagd.

### UP024
**Wet- en regelgeving**  
De informatievoorziening Jw conformeert zich aan de wet- en regelgeving voortvloeiend uit de Jeugdwet.

### UP025
**Declaratie op cliëntniveau**  
De geleverde Jeugdhulp wordt gedeclareerd op cliëntniveau (inspannings- en outputgericht).

### UP026
**Uitvoeringsvarianten**  
De Jw berichtenfamilie ondersteunt drie uitvoeringsvarianten:  
- Outputgericht  
- Inspanningsgericht  
- Taakgericht

### UP027
**Declaratie binnen contract**  
De declaratie moet passen binnen de contractafspraken en binnen de toewijzing (inspannings- en outputgericht).

### UP028
**Contractafspraken**  
Gemeente en aanbieder leggen een uitvoeringsvariant en een financieringsvorm voor de te verlenen jeugdhulp in een contract vast.

### UP031
**Geen verlies rechtmatigheid**  
De gemeente doet geen aanpassingen in toewijzingen die bij de zorgaanbieder tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg leiden.

### UP032
**Melden zorgvraag**  
De zorgaanbieder stelt de gemeente op de hoogte van (veranderingen in) zorgvraag via een Verzoek om Toewijzing of een Verzoek om Wijziging.

### UP037
**Uniek nummer beschikking**  
De gemeente geeft iedere beschikking binnen het Jw-domein een uniek nummer.

---

## Bedrijfsregels (OP-regels)

### OP001 – Gezagsdrager
- Van een cliënt wordt vastgelegd wie de gezagsdrager is.  
- Voor cliënten van 16 jaar of ouder kan het gezag bij de cliënt zelf liggen.

### OP002 – Gegevens gezagsdrager in toewijzing
- De gemeente stuurt in de toewijzing de gegevens van de gezagsdrager mee.  
- De gezagsdrager wordt opgenomen als relatie van de cliënt.

### OP002x1
- Als een aanbieder in een Verzoek om Toewijzing (VOT) heeft aangegeven dat de gezagsdrager bekend is, hoeft deze niet opnieuw in de toewijzing te worden opgenomen.

### OP002x2
- Als het gezag bij de jeugdige zelf ligt, wordt deze niet als relatie opgenomen in de toewijzing.

### OP003 – Uitzondering standaard berichtenverkeer
- Gestandaardiseerd berichtenverkeer wordt niet gebruikt als een (zorg)professional oordeelt dat overdracht ernstige risico's voor de veiligheid van de cliënt oplevert (bijv. verblijf in "blijf-van-mijn-lijf" huis).

### OP011 – Startdatum levering
- De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is gestart.

### OP033 – Wijzigingen en status aanlevering
- Voor wijzigingen, verwijderingen en correcties op een eerder verzonden regiebericht wordt de **status aanlevering** gebruikt:
- Correcties op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beeindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden.
- Met de status aanlevering van een berichtklasse kan worden aangegeven of:
  - **1** – berichtklasse nieuw  
  - **2** – berichtklasse gewijzigd (niet toegestaan in iJw/iWmo)  
  - **3** – berichtklasse verwijderd
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV008, IV074, OP033x1, OP033x2, TR071 en TR074.

### OP033x1 – Wijzigingen in toewijzing
- Toewijzing kan gewijzigd worden via een nieuw bericht.  
- **Einddatum wijzigingen toegestaan:**  
  - Intrekken: aanpassen van de gewenste einddatum toewijzing zodat de periode korter wordt (NB dit is alleen toegestaan in overleg met de aanbieder).
  - Oprekken: aanpassen van de gewenste einddatum toewijzing zodat de periode langer wordt (NB dit is alleen toegestaan in overleg met de aanbieder).
  - Verwijderen: de einddatum van de toewijzing wordt gewijzigd zodat deze gelijk is aan de ingangsdatum van de toewijzing. Daarbij wordt RedenWijziging gevuld met 13 (Verwijderd). Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden.

- **Volume wijzigingen:**  
  - Frequentie = "Totaal binnen geldigheidsduur toewijzing": volume mag aangepast worden  
  - Initiatief gemeente = overleg met en instemming van aanbieder vereist  
  - Initiatief aanbieder = mag zonder overleg door gemeente worden aangepast  

- **Budget wijzigingen:**  
  - Aanvraag aanbieder = mag zonder overleg door gemeente worden aangepast  
  - Initiatief gemeente = overleg en instemming van aanbieder vereist  

- **Belangrijk:** meest recente toewijzing op toewijzingsdatum/-tijd is bepalend.
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regel: IV066.

### OP033x2
- Gebruik van status aanlevering waarde **2** (berichtklasse gewijzigd) is niet toegestaan.

### OP039 – Cliëntgegevens in berichten
- Ketenpartijen mogen cliëntgegevens doorgeven zoals geregistreerd in hun administratie, mits deze geen logische sleutel vormen.  
- Het is toegestaan gewijzigde gegevens over te nemen in de administratie.
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV002, IV007, IV045, IV047.

### OP043 – PGB en toewijzing
- Als een cliënt een PGB heeft, mag voor hetzelfde product geen toewijzing zijn afgegeven.  
- Een toewijzing eindigt uiterlijk op de dag vóór ingangsdatum PGB.

### OP047 – Afkeuren niet-standaard berichten
- Berichten die niet voldoen aan de geldende standaard mogen worden afgekeurd.

### OP065 – Retourberichten
- Retourbericht bevat alleen informatie over afgekeurde berichtklassen.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet mee teruggestuurd.  
- Berichtklasse **Client** inclusief alle afgekeurde onderliggende berichtklassen wordt voorzien van retourcodes.

### OP071 – Uniek relatie-nummer
- Elke relatie krijgt een uniek nummer per gemeente per cliënt.  
- Dit nummer mag niet gewijzigd worden.

### OP072 – Beëindigen ondersteuning
- Beëindigen mag pas na melding start ondersteuning.  
- Stopbericht moet verwijzen naar de start van de levering.

### OP076 – Contactpersonen
- Voor iedere contactpersoon moet de relatie tot de cliënt worden opgegeven.  
- Gegevens mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de cliënt.

### OP079 – Gebruik BSN
- Het gebruik van het BSN van de cliënt is verplicht in de onderlinge uitwisseling van gegevens.

### OP080 – Volgorde berichten
Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten.
- Volgorde en tijdstip van ontvangen/ verwerken berichten zijn niet bepalend.  
- Terugwerkende berichten kunnen noodzakelijk zijn (bijv. bezwaarprocedures).  
- Ontvang retourberichten afwachten om afkeur van vervolgberichten te voorkomen.

### OP086 – Toewijzing ondersteuningsproducten
- Ondersteuningsproducten met een **inspannings- of outputgerichte uitvoering** worden altijd door de gemeente toegewezen via een toewijzingsbericht.

### OP087 – Inhoud toewijzingsbericht
- Voor één cliënt bevat een toewijzingsbericht altijd:  
  - Alle toewijzingen voor één aanbieder die **geldig zijn op of na de aanmaakdatum** van het bericht.  
  - Alle toewijzingen die **gewijzigd zijn sinds het vorige toewijzingsbericht** (bijv. intrekkingen).  

- Uitzonderingen:  
  - Toewijzingen met einddatum = ingangsdatum en **RedenWijziging = 13 (Verwijderd)** worden niet als actueel beschouwd.  
  - Toewijzingen met einddatum = ingangsdatum en **RedenWijziging = 01 (Administratieve correctie)** worden ook niet als actueel beschouwd.  

**Belangrijk:** Voor iedere cliënt waarbij een toewijzing verandert, wordt een toewijzingsbericht gestuurd met alle actuele toewijzingen voor die aanbieder.

### OP090 – Retourberichten heenberichten
- Voor ieder ontvangen heenbericht wordt **binnen 3 werkdagen** een retourbericht verzonden.  
- De verzender is verantwoordelijk voor het signaleren van ontbrekende retourberichten en moet actie ondernemen.

### OP090x2
- Als er geen retourbericht kan worden gemaakt, meldt de ontvangende partij dit **buiten het berichtenverkeer om** aan de verzender.

### OP090x4 – Declaratie-antwoordbericht
- Voor ieder ontvangen declaratiebericht wordt **binnen 10 werkdagen** een declaratie-antwoordbericht verzonden.  
- Als dit niet lukt, neemt de gemeente buiten het berichtenverkeer contact op met de aanbieder.  
- De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van het antwoordbericht en dient actie te ondernemen.

### OP091 – Contactgegevens cliënt
- Aanvullende contactgegevens mogen worden vastgelegd.  
- Het soort adres moet altijd worden geregistreerd.

### OP095 – Afkeuren berichten
- Een bericht mag niet afgekeurd worden op basis van informatie waartoe de verzender **geen toegang heeft**.

### OP130 – Relatiegegevens
- Van een relatie moet altijd een **naam** worden vastgelegd, aangevuld met een **volledig adres** en/of **telefoonnummer**.

### OP155 – Tijdelijke stop levering
- Een (tijdelijke) beëindiging van levering bevat een verwijzing naar de **laatste melding van de start** van de levering.

### OP179 – Bestandsgrootte
- Maximale bestandsgrootte voor verzending is **25 MB**.  
- Uitzonderingen zijn toegestaan indien grotere bestanden verwerkt kunnen worden.  
- Doel: verzender attenderen op aanpassing bij problemen in verwerking.

### OP186 – Stop toewijzing verleden
- Beëindigen van een toewijzing in het verleden mag alleen in **overeenstemming met de aanbieder**.  
- Toepassing: situaties waarin de aanbieder niet had kunnen weten dat ondersteuning niet geleverd mocht worden.

### OP191 – Ongestructureerde informatie
- Gebruik van ongestructureerde informatie moet minimaal zijn.  
- **Commentaar mag** in het bericht ter toelichting, mits geen persoonsgegevens zonder toestemming.

### OP192 – Technische eisen berichten
- Formaat: **XML**  
- Codering: **UTF-8**  
- Byte-Order-Mark (BOM) niet toegestaan  
- Einderegel: **CR/LF**  
- Bestandsextensie: `.xml`

### OP252 – Onbekende geboortedatum
- Bij een (gedeeltelijk) onbekende geboortedatum moet worden aangegeven welk deel **betrouwbaar** is.

### OP254 – AGB-codes
- iJw-berichten gebruiken **AGB-codes** voor routering en identificatie van de aanbieder.

### OP257 – Wijziging zorgvraag
- Bij wijziging van de zorgvraag:  
  - Nieuwe toewijzing of gewijzigde toewijzing voor het product.  

- **Beëindigen bestaande toewijzing** indien:  
  - Omvang van ondersteuning wijzigt (meer of minder ondersteuning nodig).  
  - Product wijzigt (ander product nodig).  

- **Voorkeur aanpassing bestaande toewijzing** indien:  
  - Einddatum zorg of ondersteuning wijzigt (intrekken/oprekken)  
  - Volume wijzigt bij frequentie “totaal binnen geldigheidsduur”  
  - Maximaal budget wordt gewijzigd

### OP258 – Beëindiging toewijzing
- Bij beëindiging van een toewijzing wordt de aanbieder geïnformeerd via een **toewijzingsbericht**.

### OP259 – Geen stapeling van producten bij toewijzen
Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld toe te wijzen
- **Gestapeld:** betekent dat voor een client hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt toegewezen aan dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.
Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander toegewezen product voor (gedeeltelijk) dezelfde periode naast mag staan.
- Zelfde product: dezelfde **productcode** of **productcategorie** (als productcode leeg) of (als productcategorie is leeg).
- Uitzonderingen:  
  - Verwijderde toewijzingen (einddatum = ingangsdatum, RedenWijziging = 13)  
  - Administratieve correcties (RedenWijziging = 01)  
  - Deze worden **niet als actuele toewijzing** gezien.

### OP260 – Productomschrijving
- Een ondersteuningsproduct wordt omschreven als een **Productcategorie** en kan nader worden gespecificeerd met een **Productcode**.

### OP261 – Uitvoering per product
- Vastleggen van de uitvoering: **inspanningsgericht**, **outputgericht**, of **taakgericht**.

### OP262 – Tarieven inspanningsgericht
- Tarief per tijdseenheid afgesproken.  
- Uitzondering: eenheid = stuks (inspanning) → tarief per stuk.

### OP263 – Tarieven outputgericht
- Tarief per stuk of een bedrag in euro’s over een vastgestelde periode.  
- Gemeente en aanbieder maken duidelijke afspraken over de **definitie van output** en **vaststellen van behaalde output**.

### OP264 – Declaratiemoment outputgericht
- Vaststelling van het declaratiemoment, bijvoorbeeld:  
  - Bij afronding traject  
  - Per behaalde mijlpaal  
  - Periodiek vast bedrag

### OP267 – Declaratie-eenheid
- Aanbieder declareert in een eenheid die aansluit bij de **toewijzing**.

### OP270 – Afspraken over Regieberichten
Aanbieder en gemeente maken onderling afspraken over de door te geven begin- en einddatum in de regieberichten, (lees startbericht, stopbericht).
- Afspraken over begin- en einddatums tussen **gemeente en aanbieder**.  
- Verplicht bij uitvoeringsvarianten: **inspannings- en outputgericht**.  
- Afspraken over begin- en eindatum per product kan afwijken, maar dit heeft **niet de voorkeur**.

### OP271 – Startbericht
- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke start.  
- Indien ondersteuning met terugwerkende kracht is toegewezen → binnen 5 werkdagen na ontvangst toewijzingbericht.

### OP272 – Stopbericht
- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke stop.  
- Definitieve stop volgend op tijdelijke stop → binnen 5 werkdagen nadat bekend is dat levering **definitief gestopt** is.

### OP274 – Verzoek om toewijzing
- Gemeente stuurt **binnen 5 werkdagen** per aangevraagd product:  
  - Toewijzingsbericht of  
  - Antwoordbericht  

- Als **VerzoekAntwoord = 2 (In onderzoek)**:  
  - Binnen 8 weken → toewijzingsbericht of antwoordbericht met **VerzoekAntwoord = 1 (Afgewezen)**.  
  - Elk product uit het verzoek moet uiteindelijk **toewijzing of afwijzing** hebben.

### OP275 – Uniek toewijzingsnummer
- Iedere toewijzing binnen een gemeente heeft een **uniek nummer per wettelijk domein**.

### OP276 – Declaratieaanvraag
- Aanbieder declareert voor cliënten waarvoor **toewijzing ontvangen** is.

### OP279 – Declaratie binnen geldigheid
- Declaratie vindt plaats **binnen de geldigheid** van de toewijzing.

### OP280 – Declaratieperiode
- Declaratiebericht heeft betrekking op **één declaratieperiode**.  
- Kan prestaties bevatten uit **eerder verlopen declaratieperioden**.

### OP281 – Declaratiebericht meerdere cliënten
- Een declaratiebericht kan prestaties bevatten van **één of meer cliënten**.

### OP283 – Uniek prestatie-nummer
- Iedere prestatie krijgt een **uniek nummer (ProductReferentie)** per aanbieder per wettelijk domein.

### OP284 – Aansluitende declaratieperioden
- Als iedere declaratieperiode zorg is geleverd, moeten declaratieperioden **aansluitend** zijn in opvolgende berichten.  
- Geen zorg geleverd → geen declaratie over die periode, tenzij **correcties op eerdere declaraties** nodig zijn.  
- Hiaten in declaratieperioden zijn toegestaan (duur = 1 of meer kalendermaanden).  
- Overlap voor correcties is toegestaan op de laatst ingediende periode.

### OP286 – Technische fouten heenbericht
- Bij technische fouten keurt ontvanger **het hele bericht af**.  
- Bericht wordt **functioneel als niet-verzonden** beschouwd en verzender geïnformeerd.

### OP288 – Stopbericht bij Startbericht
- Als een Startbericht is gestuurd, wordt de beëindiging altijd doorgegeven met een **Stopbericht**.  
- Geldt ook bij levering volgens plan of op einddatum van de toewijzing.

### OP289 – Eén actueel Startbericht
- Per toegewezen product kan slechts **één startdatum** actueel zijn.  
- Startbericht mag niet volgen op een bestaand Startbericht voor hetzelfde product, tenzij:  
  - Er een (tijdelijke) beëindiging via Stopbericht is doorgegeven, of  
  - Het betreft een correctie van het eerdere Startbericht.  
- Toewijzing kan **generiek**, **aspecifiek**, of **specifiek** zijn.

### OP295 – Verplichting regieberichten
- Gebruik van regieberichten is verplicht bij **inspannings- en outputgericht**.  
- Stopbericht mag alleen gestuurd worden als er een **Startbericht** is.  
- Bij oudere leveringen (iWmo/iJw release 2.4) zonder Startbericht → Stopbericht mag niet.

### OP296 – Verzoek om Toewijzing
- Moet passen binnen de **contractafspraken** tussen gemeente en aanbieder.

### OP297 – Zorgverlenercode
- Indien bekend, moet de **ZorgverlenerCode (AGB)** van verwijzer worden meegegeven.  
- Ontbreekt de AGB-code → naam van de verwijzer volstaat.

### OP298 – Verlagen volume
- Alleen toegestaan **na overleg en instemming** van de aanbieder bij frequentie “totaal binnen geldigheidsduur”.

### OP299 – Verlagen budget
- Alleen toegestaan **na overleg en instemming** van de aanbieder.  
- Op verzoek van de aanbieder via wijziging → mag gemeente **zonder overleg** aanpassen.

### OP302 – Declaratie passend bij toewijzing
- Ingediende prestatie moet **passen bij toewijzing**.  
- Soorten toewijzing:  
  - **Specifiek**: productcategorie + productcode beide gevuld → zelfde combinatie declareren.  
  - **Aspecifiek**: alleen productcategorie gevuld → 1 of meer productcodes uit dezelfde categorie declareren.  
  - **Generiek**: alleen budget gevuld → 1 of meer productcategorieën + bijbehorende productcodes passend binnen contract declareren.

### OP303 – Declaratie-antwoordbericht
- Bevat alle informatie om een declaratie administratief te verwerken.  
- Alleen **afgekeurde prestaties** worden meegestuurd met een **retourcode**.  
- Toegekende prestaties worden niet apart vermeld, alleen de som van de bedragen wordt opgenomen in `DeclaratieAntwoord`.

### OP304 – Detailinformatie retourbericht
- Retourbericht bevat alleen cliënten met **afgekeurde berichtklassen**.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet teruggestuurd.  
- Berichtklasse `Cliënt` inclusief alle afgekeurde prestaties en retourcodes wordt geretourneerd.

### OP305 – Producten op inspanningsbasis
- Producten in **stuks** (inspanning) moeten toegewezen worden met **eenheid 84**.

### OP306 – Verzoek om wijziging (VOW)
- Wordt gebruikt bij veranderingen in de zorgsituatie van een cliënt.  
- Verstuurd vanuit **actuele toewijzingen**.  
- Bevat de **complete gewenste situatie** (ongewijzigd, gewijzigd en nieuw).  
- Kan niet gebruikt worden zonder actuele toewijzing.

### OP307 – Verzoek om toewijzing (VOT)
Een verzoek om toewijzing bericht wordt alleen gebruikt indien een cliënt zich met een (wettelijke) verwijzing of een open beschikking meldt bij de zorgaanbieder
- Wordt altijd gebruikt bij **(wettelijke) verwijzing of open beschikking**.
- Alleen indien er nog **geen actuele toewijzing** is voor het product en periode.
- Kan niet gebruikt worden als er al een actuele toewijzing bestaat.

### OP308 – VOW als samenhangend geheel
Een aanbieder vraagt met een verzoek om wijziging bericht (VOW) een samenhangend geheel aan toewijzingen aan met daarin de volledige gewenste situatie.
- VOW bevat **complete nieuwe situatie** bij verandering van de zorgsituatie van de client.  
- Inclusief ongewijzigde, gewijzigde en nieuwe producten/productcategorieën.

### OP343 – Tijdige indiening VOW
Een verzoek om wijziging moet tijdig ingediend worden.
- Gemeente moet redelijkerwijs kunnen **reageren vóór de gewenste ingangsdatum**.

### OP344 – Reactie gemeente
- Gemeente antwoordt met **toewijzing** of **afwijzing**.  
- Eventueel eerst onderzoek nodig.  
- Bij VOW: reactie op **hele verzoek**.  
- Bij VOT: gemeente kan per product besluiten.

### OP345 – Wijziging met terugwerkende kracht
- Nieuwe omvang of budget mag **niet leiden tot onrechtmatigheid** van al geleverde of gedeclareerde zorg.

### OP346 – Reactietermijn VOW
- Binnen **5 werkdagen** toewijzing- of antwoordbericht.  
- Indien waarde 2 ("Aanvraag in onderzoek") → binnen **8 weken** na dagtekening van het verzoek en definitieve toewijzing of afwijzing (waarde 1).

### OP347 – Geen stapeling bij aanvragen
Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld aan te vragen
- **Stapeling** = zelfde product meerdere keren voor dezelfde periode door dezelfde aanbieder.  
- Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander aangevraagd product voor (gedeeltelijk) dezelfde periode naast mag staan. 
- Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of er sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing.
- Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

### OP348 – Honoreren VOW
- Aangevraagde producten worden **overgenomen in toewijzingsbericht**.  
- Ingangs- en einddatum kunnen afwijken bij terugwerkende kracht.  
- Toewijzingnummer wijkt af bij nieuwe toewijzing. (conform OP257 en IV066)

### OP349 – Uniek declaratienummer
- Iedere declaratie krijgt een **uniek nummer per aanbieder en wettelijk domein**.

### OP350 – Geen dubbele verzoeken
- Het is niet toegestaan een verzoek om wijziging of verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld. 
- In behandeling = tot afkeur of toewijzing → geen nieuw verzoek voor dezelfde cliënt.

### OP354 – Declaratieperiode
- Zorg/ondersteuning aan client wordt gedeclareerd in **volgende of latere periode**.

### OP355 – Declaratie-antwoordbericht
- Altijd gerelateerd aan **eerder ontvangen declaratiebericht**.  
- Koppeling kan op bericht- of declaratieniveau.

### OP359 – Afwijzing woonplaatsbeginsel
- Afwijzen binnen **2 weken** en financieel verantwoordelijke gemeente teruggeven.

### OP360 – Crediteren van prestaties
- Prestatie mag **alleen gecrediteerd worden als deze nog niet eerder gecrediteerd is**.

### OP361 – Uniek referentienummer
- Iedere aanvraag in VOT of VOW krijgt een **uniek referentienummer per aanbieder en per wettelijk domein**.

### OP362 – Verwijderen toewijzing
- Alleen toegestaan als **rechtmatigheid van geleverde/declaratie zorg** niet verloren gaat.

### OP363 – Start/stop meldingen
- Aanbieder meldt start en stop van ondersteuning bij **output- of inspanningsgerichte** producten.

### OP364 – Regieberichten
- Regieberichten zijn **Niet voorwaardelijk** aan een declaratie.  
- Een Prestatie in een declaratiebericht kan **niet afgekeurd** worden op basis van start/stopdatum regiebericht of ontbrekende start- stopberichten.

### OP365 – Declaratie passend bij toewijzing
- Declaratie moet aansluiten bij **toewijzing en/of contractafspraken**.

### OP366 – Crediteren voor correctie
- Prestatieregel eerst volledig crediteren **voor correctie**.  
- Verwerking: **creditregels eerst**, daarna debetregels. Omdat een prestatieregel eerst volledig gecrediteerd moet worden alvorens er een correctie op deze prestatieregel ingediend kan worden, is het noodzakelijk dat bij de verwerking van de declaratieberichten eerst de creditregels verwerkt worden, en pas daarna de debetregels.

### OP367 – Productperiode
- Valt altijd binnen **kalendermaand**.

### OP368 – Geldigheidsperiode
- Valt altijd binnen **geldigheidsperiode van toewijzing**.

### OP377 – Tijdelijke stop gevolgd door definitieve stop
- Stop volgt op **startbericht**.  
- Uitzondering: definitieve stop kan volgen op start of tijdelijke stop.

### OP378 – Definitieve stop zonder start
- Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan.

### OP379 – Start na stop
- Na tijdelijke of definitieve stop is het toegestaan een **startbericht** te sturen.

### OP380 – Verplaatsen einddatum toewijzing in de toekomst
- Deze werkwijze is verplicht indien de toewijzing aan alle onderstaande voorwaarden voldoet:
  - Volume blijft gelijk of is leeg.  
  - Frequentie is leeg of ongelijk aan totaal binnen geldigheidsduur toewijzing en blijft gelijk.  
  - Einddatum bestaande toewijzing **niet verstreken** op moment van verlengen en versturen.

----




