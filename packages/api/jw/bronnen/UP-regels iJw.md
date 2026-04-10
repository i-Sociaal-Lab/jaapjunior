# Uitgangspunten berichtenverkeer iJw

## Meta Data
- Naam: Uitgangspunten
- Status: Productie
- Auteur: Zorginstituut Nederland
- Versie: iJw 3.2
- Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/
- Publicatiedatum: 29 september 2022
- AI-agent: Jw-agent
  
----------

## Inleiding voor AI-agent

Dit regelrapport beschrijft de Uitgangspunten die gelden binnen het berichtenverkeer van de Jeugdwet (iJw), release 3.2.0. 

Regels kunnen van toepassing zijn op het bericht, een berichtklasse, berichtelement of een datatype.

Retourberichten, m.u.v. het declaratiebericht, kennen dezelfde regels als het heenbericht en zijn niet apart opgenomen.

Het document dient als **naslagwerk en validatiebron** voor AI-agenten die vragen moeten beantwoorden, tekst moeten analyseren of processtappen moeten controleren binnen het domein van jeugdhulp, gemeenten en zorgaanbieders.

**Gebruik voor AI-agenten**

- Iedere regel is voorzien van een unieke code (zoals UP001, UP003, UP004) een titel en een toelichting.
- Uitgangspunten hebben een code die begint met UP
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iJw.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef bij het beantwoorden van vragen over regels uit het document ‘Regels op berichten iJw release 3.2’ altijd de volledige, letterlijke tekst van de gevraagde regel weer. Sla geen enkel tekstblok, opsomming of toelichting over die onder het betreffende regelnummers valt. Stop pas bij het volgende regelnummers of het einde van het document."
- Wanneer een gebruiker vraagt om de tekst van een specifieke regel (bijvoorbeeld OP001), selecteer en retourneer altijd de volledige tekst die hoort bij het betreffende regels, vanaf de eerste regel na het regelnummers tot en met de eerste volgende regel met een nieuw regelnummers of het einde van het document. Neem alle tekst, opsommingen, subkopjes en toelichtingen op die onder het regelnummers vallen. Geef geen interpretatie in dit geval.
- Sommige regels zijn specifiek voor gemeenten, andere voor aanbieders of ketenpartijen.
- Let op: dit rapport bevat verschillende type regels check bij interpretatie altijd het type regel.
- Let op: regelnummer (bijv. UP001, UP003) zijbedrijfn louter administratieve identifiers zonder hiërarchische betekenis. Behandel ze als unieke sleutels die uitsluitend gebruikt worden voor verwijzing, niet voor interpretatie.
- Bekijk alle regels om tot een juist antwoord te komen.
---

# iJw 3.2.0 – Uitgangspunten

## Uitgangspunten (UP-regels)

De volgende uitgangspunten vormen de basis voor het berichtenverkeer binnen de Jeugdwet (iJw 3.2.0):

### `UP001`| Ondersteuning Jw berichtenfamilie

Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up001/

- De Jw berichtenfamilie ondersteunt het toewijzen, leveren en declareren van Jeugdhulp in het kader van de Jeugdwet, geleverd als zorg in natura (ZIN).

-----

### `UP003`| Privacy cliënt  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up003/

De privacy van de cliënt is geborgd doordat aangesloten ketenpartijen zich conformeren aan de Algemene Verordening Gegevensbescherming (AVG).

-----

### `UP004`| Coördinatie door gemeente
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up004/

De volgens de wet verantwoordelijke gemeente coördineert de inzet van Jeugdhulp voor de cliënt via toewijzingen (inspannings- en outputgericht).

-----

### `UP006`| Identificatie cliënt  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up006/

De cliënt wordt in de informatievoorziening Jw geïdentificeerd met zijn BSN.

-----

### `UP007`| Beschikking gemeente  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up007/

De gemeente legt in een beschikking vast of een cliënt recht heeft op ondersteuning vanuit de Jeugdwet (inspannings- en outputgericht).

-----

### `UP016`| Jeugdhulp-producten  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up016/

Jeugdhulp wordt uitgedrukt in jeugdhulp-producten.

-----

### `UP017`| Gestandaardiseerde uitwisseling  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up017/

De informatie-uitwisseling in de Jeugdwet is gebaseerd op gestandaardiseerd berichtenverkeer.

-----

### `UP019`| Cliënt centraal  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up019/

De cliënt staat centraal in alle processen.

-----

### `UP023`| Eenmalige informatievraag  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up023/

Informatie wordt eenmalig bij de cliënt uitgevraagd.

-----

### `UP024`| Wet- en regelgeving  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up024/

De informatievoorziening Jw conformeert zich aan de wet- en regelgeving voortvloeiend uit de Jeugdwet.

-----

### `UP025`| Declaratie op cliëntniveau  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up0125/

De geleverde Jeugdhulp wordt gedeclareerd op cliëntniveau (inspannings- en outputgericht).

-----

### `UP026`| Uitvoeringsvarianten  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up026

De Jw berichtenfamilie ondersteunt drie uitvoeringsvarianten:  
- Outputgericht  
- Inspanningsgericht  
- Taakgericht

-----

### `UP027`| Declaratie binnen contract  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up027

De declaratie moet passen binnen de contractafspraken en binnen de toewijzing (inspannings- en outputgericht).

-----

### `UP028`| Contractafspraken  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up028/

Gemeente en aanbieder leggen een uitvoeringsvariant en een financieringsvorm voor de te verlenen jeugdhulp in een contract vast.

-----

### `UP031`| Geen verlies rechtmatigheid  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up031/

De gemeente doet geen aanpassingen in toewijzingen die bij de zorgaanbieder tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg leiden.

-----

### `UP032`| Melden zorgvraag  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up032/

De zorgaanbieder stelt de gemeente op de hoogte van (veranderingen in) zorgvraag via een Verzoek om Toewijzing of een Verzoek om Wijziging.

-----

### `UP037`| Uniek nummer beschikking  
Bon-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/uitgangspunt/up037/

De gemeente geeft iedere beschikking binnen het Jw-domein een uniek nummer.

-----
