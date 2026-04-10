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

### `OP001` | Gezagsdrager van client
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op001

- Van een cliënt wordt vastgelegd wie de gezagsdrager is.  
- Indien het een client betreft die 16 jaar of ouder is kan het gezag over de jeugdige ook bij de client zelf liggen.

-----

### OP002` | Gegevens gezagsdrager in toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002

- De gemeente stuurt in de toewijzing de gegevens van de gezagsdrager mee.  
- De gezagsdrager wordt opgenomen als relatie van de cliënt.

-----

### OP002x1 Gezagsdrager bekend
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002x1

- Als een aanbieder in een Verzoek om Toewijzing (VOT) heeft aangegeven dat de gezagsdrager bekend is, hoeft in de daaropvolgende toewijzing de gezagsdrager niet meegegeven te worden.

-----

### `OP002x2` |  Gezag ligt bij jeugdige zelf
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002x2

- Als het gezag bij de jeugdige zelf ligt, wordt deze niet als relatie opgenomen in de toewijzing.

-----

### `OP003` | Uitzondering standaard berichtenverkeer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op003

- Gestandaardiseerd berichtenverkeer wordt niet gebruikt als een (zorg)professional oordeelt dat overdracht ernstige risico's voor de veiligheid van de cliënt oplevert (bijv. verblijf in "blijf-van-mijn-lijf" huis).

-----

### `OP011` | Startdatum / Begindatum levering melden
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op011

- De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is gestart.
- Dit wordt gedaan door het sturen van een startbericht.

-----

### `OP033` | Wijzigingen en status aanlevering
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033/

- Voor wijzigingen, verwijderingen en correcties op een eerder verzonden regiebericht wordt de **status aanlevering** gebruikt:
- Correcties op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beeindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden.
- Met de status aanlevering van een berichtklasse kan worden aangegeven of:
  - **1** – berichtklasse nieuw  
  - **2** – berichtklasse gewijzigd (niet toegestaan in iJw/iWmo)  
  - **3** – berichtklasse verwijderd
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV008, IV074, OP033x1, OP033x2, TR071 en TR074.

-----

### `OP033x1` | Wijzigingen in toewijzing
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

-----

### `OP033x2` | Status aanlevering 2 is niet toegestaan.
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033x2/

- Gebruik van status aanlevering waarde **2** (berichtklasse gewijzigd) is niet toegestaan.

-----

### `OP039` | Cliëntgegevens in berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op039/

- Ketenpartijen mogen cliëntgegevens doorgeven in het berichtenverkeer zoals geregistreerd in hun administratie, mits deze geen logische sleutel vormen.  
- Het is toegestaan gewijzigde gegevens over te nemen in de administratie.
Toelichting
De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: UP023, IV002, IV007, IV045, IV047.

-----

### `OP043` | PGB en toewijzing
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op043/

- Als een cliënt een PGB heeft, mag voor hetzelfde product geen toewijzing zijn afgegeven.  
- Een toewijzing eindigt uiterlijk op de dag vóór ingangsdatum PGB.

-----

### `OP047` | Afkeuren niet-standaard berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op047

- Berichten die niet voldoen aan de geldende standaard mogen worden afgekeurd.

-----

### `OP065` | Retourberichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op065

- Retourbericht bevat alleen informatie over afgekeurde berichtklassen.  
- Cliënten met volledig goedgekeurde berichtklassen worden niet mee teruggestuurd.  
- Berichtklasse **Client** inclusief alle afgekeurde onderliggende berichtklassen wordt voorzien van retourcodes.

-----

### `OP071` | Uniek relatie-nummer
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op071

- Elke relatie krijgt een uniek nummer per gemeente per cliënt.  
- Dit nummer mag niet gewijzigd worden.

-----

### `OP072` | Beëindigen ondersteuning
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op072

- Beëindigen mag pas nadat er eerst een melding start ondersteuning is gestuurd.  
- Stopbericht moet verwijzen naar de start van de levering.

-----

### `OP076` | Contactpersonen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op076

- Voor iedere contactpersoon moet de relatie tot de cliënt worden opgegeven.  
- Gegevens mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de cliënt.

-----

### `OP079` | Gebruik BSN
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op079

- Het gebruik van het BSN van de cliënt is verplicht in de onderlinge uitwisseling van gegevens.

-----

### `OP080` | Volgorde berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op080

Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten.
- Volgorde en tijdstip van ontvangen/ verwerken berichten zijn niet bepalend.  
- Terugwerkende berichten kunnen noodzakelijk zijn (bijv. bij bezwaarprocedures).  
- Het afkeuren en corrigeren van berichten kan er toe leiden dat berichten in een andere volgorde worden verwerkt dan bedoeld. In deze situatie is het te adviseren om de ontvangst van retourberichten af te wachten om afkeur op een vervolgbericht te voorkomen.

-----

### `OP086` | Toewijzing ondersteuningsproducten inspannings- of outputgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op086/

- Ondersteuningsproducten met een **inspannings- of outputgerichte uitvoering** worden altijd door de gemeente toegewezen via een toewijzingsbericht.

### `OP087` | Inhoud toewijzingsbericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op087/

- Voor één cliënt bevat een toewijzingsbericht altijd:  
  - Alle toewijzingen voor één aanbieder die **geldig zijn op of na de aanmaakdatum** van het bericht.  
  - Alle toewijzingen die **gewijzigd zijn sinds het vorige toewijzingsbericht** (bijv. intrekkingen).  

- Uitzonderingen:  
  - Toewijzingen met einddatum = ingangsdatum en **RedenWijziging = 13 (Verwijderd)** worden niet als actueel beschouwd.  
  - Toewijzingen met einddatum = ingangsdatum en **RedenWijziging = 01 (Administratieve correctie)** worden ook niet als actueel beschouwd.  

**Belangrijk:** Voor iedere cliënt waarbij een toewijzing verandert, wordt een toewijzingsbericht gestuurd met alle actuele toewijzingen voor die aanbieder.

-----

### `OP090` | Reactietijd en verplichting Retourberichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090/

- Voor ieder ontvangen heenbericht wordt **binnen 3 werkdagen** een retourbericht verzonden.  
- De verzender is verantwoordelijk voor het signaleren van ontbrekende retourberichten en moet actie ondernemen.

-----

### `OP090x2` | Het retoubericht kan niet worden aangemaakt.
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090x2/

- Als er geen retourbericht kan worden gemaakt, meldt de ontvangende partij dit **buiten het berichtenverkeer om** aan de verzender.

-----

### `OP090x4` | Declaratie-antwoordbericht 
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090x4/

- Voor ieder ontvangen declaratiebericht wordt **binnen 10 werkdagen** een declaratie-antwoordbericht verzonden.  
- Als dit niet lukt, neemt de gemeente buiten het berichtenverkeer contact op met de aanbieder.  
- De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van het antwoordbericht en dient actie te ondernemen.

-----

### `OP091` | Contactgegevens cliënt
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op091/

- Aanvullende contactgegevens mogen worden vastgelegd.  
- Het soort adres moet altijd worden vastgelegd.

-----

### `OP095` | Afkeuren berichten
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op095

- Een bericht mag niet afgekeurd worden op basis van informatie waartoe de verzender **geen toegang heeft**.

-----

### `OP130` | Welke Relatiegegevens moeten verplicht gevuld worden?
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op130
- Van een relatie moet altijd een **naam** worden vastgelegd, aangevuld met een **volledig adres** en/of **telefoonnummer**.

-----

### `OP155` | Tijdelijke stop levering
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op155

- Een (tijdelijke) beëindiging van levering bevat een verwijzing naar de **laatste melding van de start** van de levering.

-----

### `OP179` | Bestandsgrootte
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op179

- Maximale bestandsgrootte voor verzending is **25 MB**.  
- Uitzonderingen zijn toegestaan indien grotere bestanden verwerkt kunnen worden.
- Doel: Daar waar de grootte van bestanden tot problemen in de verwerking leidt, is deze regel bedoeld om duidelijk te maken dat de verzender de bestandsgrootte moet aanpassen.
  
-----



