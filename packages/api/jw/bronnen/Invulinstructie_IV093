**IV093**

*Hoe wordt een Toewijzingbericht gevuld naar aanleiding van een verzoek om wijziging (VOW) bericht?*

Als een toewijzingbericht wordt gestuurd als gevolg van de honorering van een verzoek om wijziging, dan bevat deze alle in het verzoek gevraagde wijzigingen.
Er mag geen mix worden gemaakt van wel/niet toegewezen producten, alles wordt conform de aanvraag toegewezen. Indien de GewensteIngangsdatum al gepasseerd is, dan kan in overeenstemming met de aanbieder de wijziging hierop aangepast worden, dit betreft alleen de ingangsdatum en einddatum van de toewijzingen

Alle ToegewezenProducten in het bericht, ook de ongewijzigde, krijgen dezelfde ReferentieAanbieder uit het verzoek om wijziging bericht, omdat het een samenhangend geheel van ToegewezenProducten is, dat altijd als een geheel wordt toegewezen op basis van het verzoek.

De vulling van het toewijzingsbericht is afhankelijk van de gevraagde wijzigingen, de soort actuele toewijzing, en het moment van toewijzen ten opzichte van de gewenste ingangsdatum in het Verzoek om Wijzing.

OngewijzigdProduct:

Voor elke actuele toewijzing waarvoor een OngewijzigdProduct element is gevuld, wordt in het toewijzingbericht de toewijzing meegestuurd met ongewijzigde gegevens. RedenWijzing blijft leeg omdat er niets wijzigt, en ReferentieAanbieder wordt overgenomen uit Verzoek om Wijziging.

NieuwProduct:

Voor elk NieuwProduct element wordt in het toewijzingbericht een toewijzing meegestuurd.
In deze berichtklasse staan nieuwe producten waarvoor in die periode geen actueel ToegewezenProduct is. Voor het aanmaken van de ToegewezenProduct wordt de inhoud overgenomen uit het Verzoek om Wijziging. RedenWijzing blijft leeg omdat het een nieuw ToegewezenProduct betreft, ReferentieAanbieder wordt overgenomen uit Verzoek om Wijziging.

TeWijzigenProduct:

Voor elke aangevraagde wijziging uit TeWijzgenProduct wordt een toewijzing (of twee toewijzingen) opgesteld volgens onderstaande voorwaarden, conform OP33x1, OP257 en OP380.

Actuele toewijzing heeft budget of frequentie 'totaal binnen geldigheidsduur toewijzing'

Wanneer een actuele toewijzing moet wijzigen van het type budget of frequentie 'totaal binnen geldigheidsduur toewijzing', dan betreft dit altijd een wijziging vanaf de originele begindatum.
Het budget of de totale omvang kan gewijzigd zijn, en de einddatum kan zijn aangepast, maar Toewijzingnummer, Product (of geen Product bij generieke toewijzing) en Begindatum blijven gelijk.

Actuele toewijzing heeft frequentie anders dan 'totaal binnen geldigheidsduur toewijzing'.

Wanneer een wijziging is gewenst voor dit type toewijzing, dan is het afhankelijk van de wijziging of er een nieuwe toewijzing nodig is, of dat de bestaande toewijzing kan worden gewijzigd.
Bestaande regels OP33x1, OP257, OP380 geven aan, dat bij het wijzigen van alléén de einddatum de bestaande toewijzing kan of moet worden aangepast. In de andere gevallen, dus als de omvang wijzigt, dan moet de actuele toewijzing beëindigd worden en aansluitend een nieuwe toewijzing met de nieuwe omvang toegewezen worden.
De te gebruiken begin- en einddatum hierbij is afhankelijk van het moment van toewijzen, zie hieronder.

GewensteIngangsdatum in de toekomst t.o.v. moment van toewijzen.

Indien het moment van toewijzen voor de gewenste ingangsdatum van de wijziging ligt, dan worden de velden uit het verzoek om wijziging ongewijzigd overgenomen.

Producten in berichtklasse OngewijzigdProduct

Deze bevat alleen een Toewijzingsnummer, dit refereert naar een actuele toewijzing die ongewijzigd voortgezet moet worden. In het toewijzingsbericht wordt deze dan ook ongewijzigd opgenomen, alleen de ReferentieAanbieder wordt overgenomen uit het Verzoek om Wijziging. Het element RedenWijziging blijft leeg.

Producten in berichtklasse TeWijzigenProduct

Hierin staan producten waarvoor een actueel ToegewezenProduct is, maar waarvoor nu een wijziging wordt gevraagd. Afhankelijk van wat er als wijziging gevraagd wordt zijn er twee verschillende wijzen waarop dit in het toewijzingbericht wordt opgenomen (zie ook OP257, OP380).

- Wanneer aan de voorwaarde van OP380 wordt voldaan, dan moet het actueel ToegewezenProduct worden aangepast en opnieuw worden verstuurd. De toewijzing houdt hetzelfde ToewijzingNummer. Wel wordt de ReferentieAanbieder overgenomen uit het Verzoek om Wijziging en de RedenWijziging wordt gevuld met 'geinitieerd door aanbieder'
- Wanneer aan de voorwaarden van OP257 wordt voldaan, kan het actueel ToegewezenProduct worden aangepast en opnieuw worden verstuurd. De toewijzing houdt hetzelfde ToewijzingNummer. Wel wordt de ReferentieAanbieder overgenomen uit het Verzoek om Wijziging en de RedenWijziging wordt gevuld met geinitieerd door aanbieder. Dit geldt voor wijzigingen van de Einddatum (intrekken of oprekken), wijzigingen van het Maximaal Budget en bij wijzigingen van het Volume indien de Frequentie de waarde totaal binnen geldigheidsduur toewijzing heeft.
- In de andere gevallen kan geen aangepast ToegewezenProduct worden verstuurd, en wordt de wijziging gerealiseerd in twee gedeelten: het actueel ToegewezenProduct wordt ingetrokken krijgt een einddatum GewensteIngangsdatum minus 1 dag. RedenWijziging wordt gevuld met geinitieerd door aanbieder en de ReferentieAanbieder wordt overgenomen uit het Verzoek om Wijziging.
Daarnaast wordt er een nieuw ToegewezenProduct gestuurd met als ingangsdatum de GewensteIngangsdatum en verder de gevraagde Einddatum, Omvang en/of Budget. ReferentieAanbieder wordt overgenomen uit het Verzoek om Wijziging, RedenWijziging blijft leeg omdat het een nieuwe toewijzing is. Zie voorbeeld 1 hieronder.

GewensteIngangsdatum ligt in het verleden t.o.v. moment van toewijzen

Als GewensteIngangsdatum op het moment van toewijzing in het verleden ligt, dan wordt buiten het berichtenverkeer met de aanbieder afgestemd of het mogelijk is dat de toewijzing met terugwerkende kracht gedaan wordt.
Als dat het geval is en geen rechtmatigheidsproblemen oplevert, dan wordt toegewezen zoals hiervoor, en wordt GewensteIngangsdatum uit het verzoek gebruikt.
Als dat niet kan, dan wordt afgestemd op welke manier de samenhang in het pakket van ToegewezenProducten kan worden gehandhaafd, door het kiezen van de juiste datum waarop de wijzigingen in gaan, zie de voorbeelden 2 en 3 hieronder.

Voorbeeld 1

Lopend ToegewezenProduct is

- ToewijzingNummer 123001, Product E, 4 uur/week, Ingangsdatum 1 januari 2025, Einddatum 31 december 2025
- ToewijzingNummer 123002, Product F, 3 uur/week, Ingangsdatum 1 januari 2025, Einddatum 31 december 2025

Medio mei 2025 wordt een wijziging aangevraagd met daarin ReferentieAanbieder A001

- TeWijzigenProduct: ToewijzingNummer123001, Product E, 4 uur/week, GewensteIngangsdatum 1 januari 2025, Einddatum 30 juni 2026
- TeWijzigenProduct: ToewijzingNummer123002, Product F, 6 uur/week, GewensteIngangsdatum 12 juni 2025, Einddatum 31 december 2025

De gemeente ontvangt het verzoek, en besluit om het verzoek te honoreren, en doet dit tijdig, door op 2 juni 2025 het toewijzingbericht te sturen.
De wijziging voor product E moet met een gewijzigd ToegewezenProduct gedaan worden, omdat wordt voldaan aan OP380.
De wijziging van product F wordt gedaan door het lopende ToegewezenProduct per 11 juni 2025 in te trekken, en aansluitend een nieuw ToegewezenProduct met het nieuwe volume te geven met een ingangsdatum van 12 juni 2025.

Het toewijzingbericht bevat dus:

ToewijzingNummer 123001, Product E, 4 uur/week, Einddatum 30 juni 2026, ReferentieAanbieder A001, RedenWijziging is geïnitieerd door aanbieder

ToewijzingNummer 123002, Product F, 3 uur/week, Einddatum 11 juni 2025 ReferentieAanbieder A001, RedenWijziging is geïnitieerd door aanbieder

ToewijzingNummer 123078, Product F, 6 uur/week, ingangsdatum 12 juni 2025, Einddatum 31 december 2025, ReferentieAanbieder A001, RedenWijziging is leeg

Voorbeeld 2

Lopende toewijzing is:

- ToewijzingNummer 345001, Product A, Ingangsdatum 1 januari 2025, Einddatum 31 december 2025
- ToewijzingNummer 345002, Product B, Ingangsdatum 1 januari 2025, Einddatum 31 december 2025

Medio april 2023 wordt een wijziging aangevraagd met daarin:

- Ongewijzigd laten van Toewijzing 345001, product A
- Wijziging: ToewijzingNummer 345002, product B, GewensteIngangsdatum 1 januari 2025, Einddatum 15 mei 2025
- Starten van nieuw product C per 16 mei 2025
De toewijzing wordt gedaan per 23 mei 2025, omdat de gemeente eerst onderzoek moest doen. Dan wordt afgestemd wat er moet gebeuren, en welke datum moet worden gekozen.

Situatie a: product B en product C zijn aansluitend nodig, en de aanbieder is doorgegaan met leveren van A en B.

Dan kan worden afgesproken dat de toewijzing wordt gestuurd met een andere maar nog steeds aansluitende datums per 24 mei 2025

- Product A blijft ongewijzigd
- Product B krijgt een toegewezen einddatum 23 mei 2025
- Product C krijgt een toegewezen ingangsdatum 24 mei 2025

Situatie b: product B en product C zijn aansluitend nodig, en de aanbieder is op 16 mei 2025 overgeschakeld naar het leveren van A en C.

Dan kan worden afgesproken dat de toewijzing wordt gestuurd zoals in het verzoek, met terugwerkende kracht

- Product A blijft ongewijzigd
- Product B krijgt een toegewezen einddatum 15 mei 2025
- Product C krijgt een toegewezen ingangsdatum 16 mei 2025
NB: Het overschakelen naar product C gebeurt terwijl er op dat moment nog geen rechtmatigheid is. Dit zal in afstemming met de gemeente moeten gebeuren om problemen rond declaratie te voorkomen.

Voorbeeld 3

Lopende toewijzing is:
- ToewijzingNummer 678001, Product X, Ingangsdatum 1 januari 2025, einddatum 7 mei 2026

Medio april 2026 wordt een wijziging aangevraagd met daarin:
- Ongewijzigd laten ToewijzingNummer 678001
- Nieuw product Y, Ingangsdatum 8 mei 2026
  
De toewijzing wordt gedaan per 15 mei 2026, omdat de gemeente eerst onderzoek moest doen.

Situatie a: product X en product Y zijn aansluitend nodig, en de aanbieder is op 7 mei 2026 gestart met het leveren van Y. Dan kan worden afgesproken dat de toewijzing wordt gestuurd met terugwerkende kracht zoals in het verzoek.

- Product X blijft ongewijzigd met einddatum 7 mei 2026
- Product Y krijgt een toegewezen ingangsdatum 8 mei 2026

NB: Het starten met leveren van product Y gebeurt terwijl er op dat moment nog geen rechtmatigheid is. Dit zal in afstemming met de gemeente moeten gebeuren om problemen rond declaraties te voorkomen.

Situatie b: product X en product Y zijn niet strikt noodzakelijk aansluitend, en door het uitblijven van de toewijzing is de aanbieder gestopt met leveren per 7 mei 2026.

Dan kan worden afgesproken dat de toewijzing wordt gestuurd zonder terugwerkende kracht en zonder aansluiting in de opvolgende toewijzing

- Product X blijft ongewijzigd met einddatum 7 mei 2026
- Product Y krijgt een toegewezen ingangsdatum 15 mei 2026
