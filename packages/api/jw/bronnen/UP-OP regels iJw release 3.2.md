## Regels op berichten iJw


## Meta Data
- Versie: 1.0
- Status: Productie
- Auteur: Zorginstituut Nederland
- Versie: iJw 3.2
- Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/
- Publicatiedatum: 29 september 2022
- AI-agent: Jw-agent
  
----------

## Inleiding voor AI-agent

Dit regelrapport beschrijft de Uitgangspunten en Bedrijfsregels die gelden binnen het berichtenverkeer van de Jeugdwet (iJw), release 3.2.0. 

Regels kunnen van toepassing zijn op het bericht, een berichtklasse, berichtelement of een datatype.

Retourberichten, m.u.v. het declaratiebericht, kennen dezelfde regels als het heenbericht en zijn niet apart opgenomen.

Het document dient als **naslagwerk en validatiebron** voor AI-agenten die vragen moeten beantwoorden, tekst moeten analyseren of processtappen moeten controleren binnen het domein van jeugdhulp, gemeenten en zorgaanbieders.

**Gebruik voor AI-agenten**

- Iedere regel is voorzien van een unieke code (zoals UP001, OP001, OP033, OP295), een titel en een toelichting.
- Uitgangspunten hebben een code die begint met UP
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

# iJw 3.2.0 – Uitgangspunten, Bedrijfsregels

## Uitgangspunten (UP-regels)

De volgende uitgangspunten vormen de basis voor het berichtenverkeer binnen de Jeugdwet (iJw 3.2.0):

### UP001
**Ondersteuning Jw berichtenfamilie**

Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up001/

- De Jw berichtenfamilie ondersteunt het toewijzen, leveren en declareren van Jeugdhulp in het kader van de Jeugdwet, geleverd als zorg in natura (ZIN).

### UP003
**Privacy cliënt**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up003/

De privacy van de cliënt is geborgd doordat aangesloten ketenpartijen zich conformeren aan de Algemene Verordening Gegevensbescherming (AVG).

### UP004
**Coördinatie door gemeente** 
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up004/

De volgens de wet verantwoordelijke gemeente coördineert de inzet van Jeugdhulp voor de cliënt via toewijzingen (inspannings- en outputgericht).

### UP006
**Identificatie cliënt**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up006/

De cliënt wordt in de informatievoorziening Jw geïdentificeerd met zijn BSN.

### UP007
**Beschikking gemeente**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up007/

De gemeente legt in een beschikking vast of een cliënt recht heeft op ondersteuning vanuit de Jeugdwet (inspannings- en outputgericht).

### UP016
**Jeugdhulp-producten**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up016/

Jeugdhulp wordt uitgedrukt in jeugdhulp-producten.

### UP017
**Gestandaardiseerde uitwisseling**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up017/

De informatie-uitwisseling in de Jeugdwet is gebaseerd op gestandaardiseerd berichtenverkeer.

### UP019
**Cliënt centraal**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up019/

De cliënt staat centraal in alle processen.

### UP023
**Eenmalige informatievraag**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up023/

Informatie wordt eenmalig bij de cliënt uitgevraagd.

### UP024
**Wet- en regelgeving**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up024/

De informatievoorziening Jw conformeert zich aan de wet- en regelgeving voortvloeiend uit de Jeugdwet.

### UP025
**Declaratie op cliëntniveau**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up0125/

De geleverde Jeugdhulp wordt gedeclareerd op cliëntniveau (inspannings- en outputgericht).

### UP026
**Uitvoeringsvarianten**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up026

De Jw berichtenfamilie ondersteunt drie uitvoeringsvarianten:  
- Outputgericht  
- Inspanningsgericht  
- Taakgericht

### UP027
**Declaratie binnen contract**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up027

De declaratie moet passen binnen de contractafspraken en binnen de toewijzing (inspannings- en outputgericht).

### UP028
**Contractafspraken**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up028/

Gemeente en aanbieder leggen een uitvoeringsvariant en een financieringsvorm voor de te verlenen jeugdhulp in een contract vast.

### UP031
**Geen verlies rechtmatigheid**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up031/

De gemeente doet geen aanpassingen in toewijzingen die bij de zorgaanbieder tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg leiden.

### UP032
**Melden zorgvraag**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up032/

De zorgaanbieder stelt de gemeente op de hoogte van (veranderingen in) zorgvraag via een Verzoek om Toewijzing of een Verzoek om Wijziging.

### UP037
**Uniek nummer beschikking**  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up037/

De gemeente geeft iedere beschikking binnen het Jw-domein een uniek nummer.

---

## Bedrijfsregels (OP-regels)

### OP001 – Gezagsdrager
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op001

- Van een cliënt wordt vastgelegd wie de gezagsdrager is.  
- Voor cliënten van 16 jaar of ouder kan het gezag bij de cliënt zelf liggen.

### OP002 – Gegevens gezagsdrager in toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002

- De gemeente stuurt in de toewijzing de gegevens van de gezagsdrager mee.  
- De gezagsdrager wordt opgenomen als relatie van de cliënt.

### OP002x1
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002x1

- Als een aanbieder in een Verzoek om Toewijzing (VOT) heeft aangegeven dat de gezagsdrager bekend is, hoeft deze niet opnieuw in de toewijzing te worden opgenomen.

### OP002x2
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002x2

- Als het gezag bij de jeugdige zelf ligt, wordt deze niet als relatie opgenomen in de toewijzing.

### OP003 – Uitzondering standaard berichtenverkeer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op003

- Gestandaardiseerd berichtenverkeer wordt niet gebruikt als een (zorg)professional oordeelt dat overdracht ernstige risico's voor de veiligheid van de cliënt oplevert (bijv. verblijf in "blijf-van-mijn-lijf" huis).

### OP011 – Startdatum levering
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op011

- De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is gestart.

### OP033 – Wijzigingen en status aanlevering
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033/

- Voor wijzigingen, verwijderingen en correcties op een eerder verzonden regiebericht wordt de **status aanlevering** gebruikt:
- Correcties op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beeindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden.
- Met de status aanlevering van een berichtklasse kan worden aangegeven of:
  - **1** – berichtklasse nieuw  
  - **2** – berichtklasse gewijzigd (niet toegestaan in iJw/iWmo)  
  - **3** – berichtklasse verwijderd
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV008, IV074, OP033x1, OP033x2, TR071 en TR074.

### OP033x1 – Wijzigingen in toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033x1/
 
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
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033x2/

- Gebruik van status aanlevering waarde **2** (berichtklasse gewijzigd) is niet toegestaan.

### OP039 – Cliëntgegevens in berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op039/

- Ketenpartijen mogen cliëntgegevens doorgeven zoals geregistreerd in hun administratie, mits deze geen logische sleutel vormen.  
- Het is toegestaan gewijzigde gegevens over te nemen in de administratie.
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV002, IV007, IV045, IV047.

### OP043 – PGB en toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op043/

- Als een cliënt een PGB heeft, mag voor hetzelfde product geen toewijzing zijn afgegeven.  
- Een toewijzing eindigt uiterlijk op de dag vóór ingangsdatum PGB.

### OP047 – Afkeuren niet-standaard berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op047

- Berichten die niet voldoen aan de geldende standaard mogen worden afgekeurd.

### OP065 – Retourberichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op065

- Retourbericht bevat alleen informatie over afgekeurde berichtklassen.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet mee teruggestuurd.  
- Berichtklasse **Client** inclusief alle afgekeurde onderliggende berichtklassen wordt voorzien van retourcodes.

### OP071 – Uniek relatie-nummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op071

- Elke relatie krijgt een uniek nummer per gemeente per cliënt.  
- Dit nummer mag niet gewijzigd worden.

### OP072 – Beëindigen ondersteuning
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op072

- Beëindigen mag pas na melding start ondersteuning.  
- Stopbericht moet verwijzen naar de start van de levering.

### OP076 – Contactpersonen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op076

- Voor iedere contactpersoon moet de relatie tot de cliënt worden opgegeven.  
- Gegevens mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de cliënt.

### OP079 – Gebruik BSN
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op079

- Het gebruik van het BSN van de cliënt is verplicht in de onderlinge uitwisseling van gegevens.

### OP080 – Volgorde berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op080

Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten.
- Volgorde en tijdstip van ontvangen/ verwerken berichten zijn niet bepalend.  
- Terugwerkende berichten kunnen noodzakelijk zijn (bijv. bezwaarprocedures).  
- Ontvang retourberichten afwachten om afkeur van vervolgberichten te voorkomen.

### OP086 – Toewijzing ondersteuningsproducten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op086

- Ondersteuningsproducten met een **inspannings- of outputgerichte uitvoering** worden altijd door de gemeente toegewezen via een toewijzingsbericht.

### OP087 – Inhoud toewijzingsbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op087

- Voor één cliënt bevat een toewijzingsbericht altijd:  
  - Alle toewijzingen voor één aanbieder die **geldig zijn op of na de aanmaakdatum** van het bericht.  
  - Alle toewijzingen die **gewijzigd zijn sinds het vorige toewijzingsbericht** (bijv. intrekkingen).  

- Uitzonderingen:  
  - Toewijzingen met einddatum = ingangsdatum en **RedenWijziging = 13 (Verwijderd)** worden niet als actueel beschouwd.  
  - Toewijzingen met einddatum = ingangsdatum en **RedenWijziging = 01 (Administratieve correctie)** worden ook niet als actueel beschouwd.  

**Belangrijk:** Voor iedere cliënt waarbij een toewijzing verandert, wordt een toewijzingsbericht gestuurd met alle actuele toewijzingen voor die aanbieder.

### OP090 – Reactietijd en verplichting Retourberichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090

- Voor ieder ontvangen heenbericht wordt **binnen 3 werkdagen** een retourbericht verzonden.  
- De verzender is verantwoordelijk voor het signaleren van ontbrekende retourberichten en moet actie ondernemen.

### OP090x2
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090x2

- Als er geen retourbericht kan worden gemaakt, meldt de ontvangende partij dit **buiten het berichtenverkeer om** aan de verzender.

### OP090x4 – Declaratie-antwoordbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090x4

- Voor ieder ontvangen declaratiebericht wordt **binnen 10 werkdagen** een declaratie-antwoordbericht verzonden.  
- Als dit niet lukt, neemt de gemeente buiten het berichtenverkeer contact op met de aanbieder.  
- De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van het antwoordbericht en dient actie te ondernemen.

### OP091 – Contactgegevens cliënt
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op091

- Aanvullende contactgegevens mogen worden vastgelegd.  
- Het soort adres moet altijd worden geregistreerd.

### OP095 – Afkeuren berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op095

- Een bericht mag niet afgekeurd worden op basis van informatie waartoe de verzender **geen toegang heeft**.

### OP130 – Welke Relatiegegevens moeten verplicht gevuld worden?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op130
- Van een relatie moet altijd een **naam** worden vastgelegd, aangevuld met een **volledig adres** en/of **telefoonnummer**.

### OP155 – Tijdelijke stop levering
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op155

- Een (tijdelijke) beëindiging van levering bevat een verwijzing naar de **laatste melding van de start** van de levering.

### OP179 – Bestandsgrootte
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op179

- Maximale bestandsgrootte voor verzending is **25 MB**.  
- Uitzonderingen zijn toegestaan indien grotere bestanden verwerkt kunnen worden.  
- Doel: verzender attenderen op aanpassing bij problemen in verwerking.

### OP186 – Stop toewijzing verleden
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op186

- Beëindigen van een toewijzing in het verleden mag alleen in **overeenstemming met de aanbieder**.  
- Toepassing: situaties waarin de aanbieder niet had kunnen weten dat ondersteuning niet geleverd mocht worden.

### OP191 – Ongestructureerde informatie
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op191

- Gebruik van ongestructureerde informatie moet minimaal zijn.  
- **Commentaar mag** in het bericht ter toelichting, mits geen persoonsgegevens zonder toestemming.

### OP192 – Technische eisen berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op192

- Formaat: **XML**  
- Codering: **UTF-8**  
- Byte-Order-Mark (BOM) niet toegestaan  
- Einderegel: **CR/LF**  
- Bestandsextensie: `.xml`

### OP252 – Onbekende geboortedatum
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op252

- Bij een (gedeeltelijk) onbekende geboortedatum moet worden aangegeven welk deel **betrouwbaar** is.

### OP254 – AGB-codes
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op254

- iJw-berichten gebruiken **AGB-codes** voor routering en identificatie van de aanbieder.

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

### OP258 – Beëindiging toewijzing
- Bij beëindiging van een toewijzing wordt de aanbieder geïnformeerd via een **toewijzingsbericht**.

### OP259 – Geen stapeling van producten bij toewijzen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op258

Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld toe te wijzen
- **Gestapeld:** betekent dat voor een client hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt toegewezen aan dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.
Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander toegewezen product voor (gedeeltelijk) dezelfde periode naast mag staan.
- Zelfde product: dezelfde **productcode** of **productcategorie** (als productcode leeg) of (als productcategorie is leeg).
- Uitzonderingen:  
  - Verwijderde toewijzingen (einddatum = ingangsdatum, RedenWijziging = 13)  
  - Administratieve correcties (RedenWijziging = 01)  
  - Deze worden **niet als actuele toewijzing** gezien.

### OP260 – Productomschrijving
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op260

- Een ondersteuningsproduct wordt omschreven als een **Productcategorie** en kan nader worden gespecificeerd met een **Productcode**.

### OP261 – Uitvoeringsvariant per product
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op261

- Per ondersteuningsproduct wordt vastgelegd of de uitvoering **inspanningsgericht**, **outputgericht** of **taakgericht** is.

### OP262 – Tarieven inspanningsgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op262

- Er wordt een tarief per tijdseenheid afgesproken.  
- Uitzondering: eenheid = stuks (inspanning) → tarief per stuk.

### OP263 – Tarieven outputgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op263

- Er wordt een tarief per stuk of een bedrag in euro’s afgesproken over een vastgestelde periode.  
- Gemeente en aanbieder maken duidelijke afspraken over de **definitie van output** en **vaststellen hoe kan worden vastgesteld dat behaalde output is behaald**.

### OP264 – Declaratiemoment outputgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op264

- Vaststelling van het declaratiemoment, bijvoorbeeld:  
  - Bij afronding traject  
  - Per behaalde mijlpaal  
  - Periodiek vast bedrag

### OP267 – Declaratie-eenheid
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op267

- Aanbieder declareert in een eenheid die aansluit bij de **toewijzing**.

### OP270 – Afspraken over Regieberichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op270

Aanbieder en gemeente maken onderling afspraken over de door te geven begin- en einddatum in de regieberichten, (lees startbericht, stopbericht).
- Afspraken over begin- en einddatums tussen **gemeente en aanbieder**.  
- Verplicht bij uitvoeringsvarianten: **inspannings- en outputgericht**.  
- Afspraken over begin- en eindatum per product kan afwijken, maar dit heeft **niet de voorkeur**.

### OP271 – moment versturen Startbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op271

- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke start.  
- Indien ondersteuning met terugwerkende kracht is toegewezen → binnen 5 werkdagen na ontvangst toewijzingbericht.

### OP272 – moment versturen Stopbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op272

- Aanbieder verzendt binnen **5 werkdagen** na daadwerkelijke stop.  
- Definitieve stop volgend op tijdelijke stop → binnen 5 werkdagen nadat bekend is dat levering **definitief gestopt** is.

### OP274 – moment versturen toewijzingsbericht of antwoordbericht na VOT
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op274

- Gemeente stuurt **binnen 5 werkdagen** per aangevraagd product:  
  - Toewijzingsbericht of  
  - Antwoordbericht  

- Als **VerzoekAntwoord = 2 (In onderzoek)**:  
  - Binnen 8 weken → toewijzingsbericht of antwoordbericht met **VerzoekAntwoord = 1 (Afgewezen)**.  
  - Elk product uit het VOT moet uiteindelijk **toewijzing of afwijzing** hebben.

### OP275 – Uniek toewijzingsnummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op275

- Iedere toewijzing binnen een gemeente heeft een **uniek nummer per wettelijk domein**.

### OP276 – Declaratie
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op276

- Aanbieder declareert voor cliënten waarvoor een **toewijzing ontvangen** is.

### OP279 – Declaratie binnen geldigheid binnen toegewezen periode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op279

- Declaratie vindt plaats **binnen de geldigheid** van de toewijzing of anders gezegd, binnen te toegewezen periode

### OP280 – Declaratieperiode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op280

- Declaratiebericht heeft betrekking op **één declaratieperiode**.  
- Kan prestaties bevatten uit **eerder verlopen declaratieperioden**.

### OP281 – Declaratiebericht meerdere cliënten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op281

- Een declaratiebericht kan prestaties bevatten van **één of meer cliënten**.

### OP283 – Uniek prestatie-nummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op283

- Iedere prestatie/declaratieregel krijgt een **uniek nummer (ProductReferentie)** per aanbieder per wettelijk domein.

### OP284 – Aansluitende declaratieperioden
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op284

- Als iedere declaratieperiode zorg is geleverd, moeten declaratieperioden **aansluitend** zijn in opvolgende berichten.  
- Geen zorg geleverd → geen declaratie over die periode, tenzij **correcties op eerdere declaraties** nodig zijn.  
- Hiaten in declaratieperioden zijn toegestaan (duur = 1 of meer kalendermaanden).  
- Overlap van declaratieperioden voor correcties is toegestaan op de laatst ingediende periode.

### OP286 – Technische fouten heenbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op286

- Bij technische fouten keurt ontvanger **het hele bericht af**.  
- Bericht wordt **functioneel als niet-verzonden** beschouwd en verzender geïnformeerd via een retourbericht.

### OP288 – Stopbericht na Startbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op288

- Als een Startbericht is gestuurd, wordt de beëindiging altijd doorgegeven met een **Stopbericht**.  
- Dit geldt ook bij levering volgens plan of op einddatum van de toewijzing.

### OP289 – Eén actueel Startbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op289

- Per toegewezen product kan slechts **één startdatum** actueel zijn.  
- Startbericht mag niet volgen op een bestaand Startbericht voor hetzelfde product, tenzij:  
  - Er een (tijdelijke) beëindiging via Stopbericht is doorgegeven, of  
  - Het betreft een correctie van het eerdere Startbericht.  
- Toewijzing kan **generiek**, **aspecifiek**, of **specifiek** zijn.

### OP295 – Gebruik van regeieberichten (start-/stopberichten) is verplicht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op295

- Gebruik van regieberichten is verplicht bij **inspannings- en outputgericht**.  
- Stopbericht mag alleen gestuurd worden als er een **Startbericht** is.  
- Bij oudere leveringen (iWmo/iJw release 2.4, voor 2021) zonder Startbericht → Stopbericht mag niet.

### OP296 – Verzoek om Toewijzing moet passend zijn
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op296
- Moet passen binnen de **contractafspraken** tussen gemeente en aanbieder.

### OP297 – Zorgverlenercode van verwijzer bekend?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op297
- Indien deze bekend is, moet de **ZorgverlenerCode (AGB)** van verwijzer worden meegegeven.  
- Ontbreekt de AGB-code → naam van de verwijzer volstaat.

### OP298 – Verlagen volume
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op298

- Dit is alleen toegestaan **na overleg met en instemming van** de aanbieder bij frequentie “totaal binnen geldigheidsduur”.

### OP299 – Verlagen budget
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op299

- Dit is alleen toegestaan **na overleg met en instemming van** de aanbieder.
- Op verzoek van de aanbieder via een wijzigingsverzoek → mag gemeente **zonder overleg** aanpassen.

### OP302 – Declaratie passend bij toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op302

- De aanbieder declareert een zorg- of ondersteuningsproduct dat aansluit bij de toewijzing
- Soorten toewijzing:  
  - **Specifiek**: productcategorie + productcode beide gevuld → zelfde combinatie declareren.  
  - **Aspecifiek**: alleen productcategorie gevuld → aanbieder declareert 1 of meer productcodes die volgens de gehanteerde productcodelijst horen bij die productcategorie.
  - **Generiek**: alleen budget gevuld → 1, productcategorie + productode zijn leeg. De aanbieder declareert 1 of meer productcategorieën + bijbehorende productcodes die zijn afgesproken tussen aanbieder een gemeente.

### OP303 – Declaratie-antwoordbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op303

- Bevat alle informatie om een declaratie administratief te verwerken.  
- Alleen **afgekeurde prestaties** worden meegestuurd met een **retourcode**.  
- Toegekende prestaties worden niet apart vermeld, alleen de som van de ingediende bedragen en van de toegekende prestaties bedragen wordt opgenomen in `DeclaratieAntwoord`.

### OP304 – Detailinformatie retourbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op304

- Retourbericht bevat alleen cliënten met **afgekeurde berichtklassen**.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet teruggestuurd.  
- Berichtklasse `Cliënt` inclusief alle afgekeurde prestaties en retourcodes wordt geretourneerd.

### OP305 – Producten op basis van inspanningsgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op305

- Producten in **stuks** (inspanning) moeten toegewezen worden met **eenheid 84**.

### OP306 – Verzoek om wijziging (VOW)
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op306

- Het verzoek om wijziging bericht wordt gebruikt als tijdens levering van zorg en/of ondersteuning blijkt dat een ander pakket van toegewezen producten nodig is
- Een verzoek om wijziging bericht wordt altijd verstuurd vanuit een situatie waarbij er al geleverd wordt op basis van een of meer actuele toewijzingen.
- Wordt gebruikt bij veranderingen in de zorgsituatie van een cliënt.  
- Verstuurd vanuit **actuele toewijzingen**.  
- Bevat de **complete gewenste situatie** (ongewijzigd, gewijzigd en nieuw).  
- Kan niet gebruikt worden zonder actuele toewijzing.

### OP307 – Verzoek om toewijzing (VOT)
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op307

- Een verzoek om toewijzing bericht wordt alleen gebruikt indien een cliënt zich met een (wettelijke) verwijzing of een open beschikking meldt bij de zorgaanbieder
- Wordt altijd gebruikt bij **(wettelijke) verwijzing of open beschikking**.
- Alleen indien er nog **geen actuele toewijzing** is voor het product en periode.
- Kan niet gebruikt worden als er al een actuele toewijzing bestaat.

### OP308 – VOW als samenhangend geheel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op308

- Een aanbieder vraagt met een verzoek om wijziging bericht (VOW) een samenhangend geheel aan toewijzingen aan met daarin de volledige gewenste situatie.
- VOW bevat **complete nieuwe situatie** bij verandering van de zorgsituatie van de client.  
- Inclusief ongewijzigde, gewijzigde en nieuwe producten/productcategorieën.

### OP343 – Tijdige indiening VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op343

Een verzoek om wijziging moet tijdig ingediend worden.
- Gemeente moet redelijkerwijs kunnen **reageren vóór de gewenste ingangsdatum**. Let hierbij op een mogelijk 8 weken onderzoekstermijn.

### OP344 – Reactie gemeente op VOT of VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op344

- Gemeente antwoordt met **toewijzing** of **afwijzing**.  
- Eventueel eerst onderzoek nodig.  
- Bij VOW: reactie op **hele verzoek**.  
- Bij VOT: gemeente kan per product besluiten.

### OP345 – Wijziging met terugwerkende kracht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op345

- Nieuwe omvang of budget mag **niet leiden tot onrechtmatigheid** van al geleverde of gedeclareerde zorg.

### OP346 – Reactietermijn VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op346

- Binnen **5 werkdagen** toewijzing- of antwoordbericht.  
- Indien waarde 2 ("Aanvraag in onderzoek") → binnen **8 weken** na dagtekening van het verzoek en definitieve toewijzing of afwijzing (waarde 1).

### OP347 – Geen stapeling bij aanvragen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op347

Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld aan te vragen
- **Stapeling** = zelfde product meerdere keren voor dezelfde periode door dezelfde aanbieder.  
- Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode (Specifiek) of dezelfde productcategorie indien productcode niet gevuld is (Aspecifiek). Indien productcategorie leeg is (Generiek), geldt dat er geen ander aangevraagd product voor (gedeeltelijk) dezelfde periode naast mag staan. 
- Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of er sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing.
- Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

### OP348 – Honoreren VOW 
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op348

- Aangevraagde/gewijzigde producten in een VOW, worden 1 op 1 **overgenomen in toewijzingsbericht**, zie IV093.  
- Ingangs- en einddatum kunnen afwijken bij terugwerkende kracht.
- Toewijzingnummer wijkt af indien voor een wijziging en nieuwe toewijzing moet worden afgegeven. (conform OP257 en IV066)

### OP349 – Uniek declaratienummer
 Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op349
 
- Iedere declaratie krijgt een **uniek nummer per aanbieder en wettelijk domein**.

### OP350 – Geen dubbele VOT of VOW
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op350

- Het is niet toegestaan een verzoek om wijziging of verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld. 
- In behandeling = tot afkeur of toewijzing → geen nieuw verzoek voor dezelfde cliënt.

### OP354 – In welke declaratieperiode wordt gedeclareerd?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op354

- Zorg/ondersteuning aan client wordt gedeclareerd in **volgende of latere periode**.

### OP355 – Declaratie-antwoordbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op355

- Altijd gerelateerd aan **eerder ontvangen declaratiebericht**.  
- Koppeling kan zowel op bericht- als declaratieniveau.

### OP359 – Afwijzing VOT vanwege woonplaatsbeginsel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op359

- Indien een verzoek om toewijzing wordt afgewezen op basis van het woonplaatsbeginsel, dient de gemeente dit binnen de wettelijke termijn van 2 weken af te wijzen en de financieel verantwoordelijke gemeente terug te geven aan de aanbieder

### OP360 – Wanneer mag je een prestatie crediteren?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op360

- Een prestatie mag **alleen gecrediteerd worden als deze nog niet eerder gecrediteerd is**.

### OP361 – Uniek referentienummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op361

- Iedere aanvraag in VOT of VOW krijgt een **uniek referentienummer per aanbieder en per wettelijk domein**.

### OP362 – Verwijderen toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op362

- Alleen toegestaan als **rechtmatigheid van geleverde/declaratie zorg** niet verloren gaat.

### OP363 – Start/stop meldingen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op363

- Aanbieder meldt de start en de stop van ondersteuning bij **output- of inspanningsgerichte** producten, met een startbericht of stopbericht.

### OP364 – Regieberichten (start- stopbericht)
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op364

- Regieberichten zijn **Niet voorwaardelijk** aan een declaratie.  
- Een Prestatie in een declaratiebericht kan **niet afgekeurd** worden op basis van start-/stopdatum in een regiebericht of ontbrekende start- stopberichten.

### OP365 – Declaratie passend bij toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op365

- De aanbieder declareert een zorg- of ondersteuningsproduct met een omvang die aansluit bij de toewijzing en/of gecontracteerde afspraken.

### OP366 – Crediteren voor correctie
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op366

- Een prestatieregel moet eerst volledig gecrediteerd worden om daarna een **correctie** op de prestatieregel te kunnen indienen.   
- Verwerking: **creditregels eerst**, daarna debetregels. Omdat een prestatieregel eerst volledig gecrediteerd moet worden alvorens er een correctie op deze prestatieregel ingediend kan worden, is het noodzakelijk dat bij de verwerking van de declaratieberichten eerst de creditregels verwerkt worden, en pas daarna de debetregels.

### OP367 – Productperiode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op367

- Valt altijd binnen **kalendermaand**.

### OP368 – Productperiode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op368

- Een productperiode valt altijd binnen de **geldigheidsperiode** van een toewijzing

### OP377 – Tijdelijke stop gevolgd door definitieve stop
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op377

- Alleen een tijdelijke stop mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stop.
- Een (tijdelijk) Stopbericht volgt op **startbericht**.  
- Uitzondering: definitieve stop kan volgen op start of tijdelijke stop.

### OP378 – Definitieve stop zonder start
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op378

- Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan.

### OP379 – Start na stop
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op379

- Na tijdelijke of definitieve stop is het toegestaan een **startbericht** te sturen.

### OP380 – Verplaatsen einddatum toewijzing in de toekomst (verlengen) is verplicht indien:
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op380

- Deze werkwijze is verplicht indien de toewijzing aan alle onderstaande voorwaarden voldoet:
  - Volume blijft gelijk of is leeg.  
  - Frequentie is leeg of ongelijk aan totaal binnen geldigheidsduur toewijzing en blijft gelijk.  
  - Einddatum bestaande toewijzing **niet verstreken** op moment van verlengen en versturen.

----




