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
- Invulinstructies hebben een code die begint met IV
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iJw.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef bij het beantwoorden van vragen over regels uit het document ‘Regels op berichten iJw release 3.2’ altijd de volledige, letterlijke tekst van de gevraagde regel weer. Sla geen enkel tekstblok, opsomming of toelichting over die onder het betreffende regelnummers valt. Stop pas bij het volgende regelnummers of het einde van het document."
- Wanneer een gebruiker vraagt om de tekst van een specifieke regel (bijvoorbeeld IV075), selecteer en retourneer altijd de volledige tekst die hoort bij het betreffende regelnummers, vanaf de eerste regel na het regelnummers tot en met de eerste volgende regel met een nieuw regelnummers of het einde van het document. Neem alle tekst, opsommingen, subkopjes en toelichtingen op die onder het regelnummers vallen. Geef geen interpretatie in dit geval.
- Sommige regels zijn specifiek voor gemeenten, andere voor aanbieders of ketenpartijen.
- Let op: dit rapport bevat verschillende type regels check bij interpretatie altijd het type regel.
- Let op: regelnummer (bijv. OP001, OP047, IV008) zijn louter administratieve identifiers zonder hiërarchische betekenis. Behandel ze als unieke sleutels die uitsluitend gebruikt worden voor verwijzing, niet voor interpretatie.
- Bekijk alle regels om tot een juist antwoord te komen.
---

# Uitgangspunten, Bedrijfsregels, Invulinstructies en Technische regels iJw 3.2.0

## Uitgangspunten (UP-regels)

**UP001**

*De Jw berichtenfamilie ondersteunt het toewijzen, leveren en declareren van Jeugdhulp in het kader van de Jeugdwet die geleverd wordt als zorg in natura (ZIN).*

**UP003**

*De privacy van de cliënt is in de iJw geborgd doordat aangesloten ketenpartijen zich conformeren aan de Algemene Verordening Gegevensbescherming (AVG).*

**UP004**

*De volgens de wet verantwoordelijke gemeente coördineert de inzet van Jeugdhulp voor de cliënt door middel van toewijzingen (inspannings- en outputgericht).*

**UP006**

*De cliënt wordt in de informatievoorziening Jw geïdentificeerd met zijn BSN.*

**UP007**

*De gemeente legt in een beschikking vast of een cliënt recht heeft op ondersteuning vanuit de Jeugdwet (inspannings- en outputgericht).*

**UP016**

*Jeugdhulp wordt uitgedrukt in jeugdhulp-producten.*

**UP017**

*De informatie-uitwisseling in de Jeugdwet is gebaseerd op gestandaardiseerd berichtenverkeer.*

**UP019**

*De cliënt staat centraal.*

**UP023**

*Informatie wordt eenmalig bij de cliënt uitgevraagd.*

**UP024**

*De informatievoorziening Jw conformeert zich aan de wet- en regelgeving die voortvloeit uit de Jeugdwet.*

**UP025**

*De geleverde Jeugdhulp wordt gedeclareerd op cliëntniveau (inspannings- en outputgericht).*

**UP026**

*De Jeugdwet berichtenfamilie ondersteunt drie verschillende uitvoeringsvarianten: outputgericht, inspanningsgericht en taakgericht.*

**UP027**

*De declaratie moet passen binnen de contractafspraken en binnen de toewijzing (inspannings- en outputgericht).*

**UP028**

*Gemeente en aanbieder leggen een uitvoeringsvariant en een financieringsvorm voor de te verlenen jeugdhulp in een contract vast.*

**UP031**

*De gemeente doet geen aanpassingen in toewijzingen die bij de zorgaanbieder tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg leiden.*

**UP032**

*De zorgaanbieder stelt de gemeente op de hoogte van (veranderingen in) zorgvraag door middel van een Verzoek om toewijzing of een Verzoek om wijziging.*

**UP037**

*De gemeente geeft iedere beschikking binnen het Jw domein een uniek nummer.*

---

# Bedrijfsregels (OP-regels)

**OP001**

*Van een cliënt wordt vastgelegd wie de gezagsdrager is. Indien het een cliënt betreft die 16 jaar of ouder is kan het gezag over de jeugdige ook bij de cliënt zelf liggen.*

**OP002**

*De gemeente stuurt in de toewijzing gegevens van de gezagsdrager van de cliënt mee. De gezagsdrager wordt opgenomen als relatie van de cliënt.*

**OP002x1**

*Indien een aanbieder in een Verzoek om toewijzing heeft aangegeven dat de gezagsdrager bekend is, hoeft in de daaropvolgende toewijzing de gezagsdrager niet meegegeven te worden.*

**OP002x2**

*Indien het gezag over een cliënt bij de jeugdige zelf ligt, wordt deze niet nogmaals als relatie opgenomen in de toewijzing.*

**OP003**

*Het gestandaardiseerd berichtenverkeer wordt niet gebruikt indien, naar oordeel van een (zorg)professional, de overdracht van cliëntgegevens ernstige risico's met zich meebrengt voor de veiligheid van de cliënt. Dit kan bijvoorbeeld gelden voor cliënten die opgenomen zijn of worden in een "blijf-van-mijn-lijf" huis.*

**OP011**

*De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is aangevangen.*

**OP033**

*Voor het doorgeven van wijzigingen, verwijderingen en correcties op een eerder verzonden regiebericht, moet gebruik gemaakt worden van de systematiek van status aanlevering. Correcties op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beëindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden. Met de status aanlevering van een berichtklasse kan worden aangegeven of:*
- *een berichtklasse nieuw is (waarde 1)*
- *een berichtklasse gewijzigd is (waarde 2). Een wijziging betekent dat de actuele aanlevering met dezelfde sleutel vervangen wordt. Deze waarde mag niet gebruikt worden in de iJw/iWmo.*
- *een berichtklasse verwijderd moet worden (waarde 3). Een verwijdering betekent dat de vorige aanlevering(en) met dezelfde sleutel als niet verzonden beschouwd moet worden.*

**OP033x1**

*Een afgegeven toewijzing mag gewijzigd worden waarbij de wijziging met een nieuw bericht moet worden doorgegeven.*

*De volgende wijzigingen in de einddatum zijn toegestaan:*
- *Intrekken: aanpassen van de gewenste einddatum toewijzing zodat de periode korter wordt (alleen toegestaan in overleg met de aanbieder).*
- *Oprekken: aanpassen van de gewenste einddatum toewijzing zodat de periode langer wordt (alleen toegestaan in overleg met de aanbieder).*
- *Verwijderen: de einddatum van de toewijzing wordt gewijzigd zodat deze gelijk is aan de ingangsdatum van de toewijzing. Daarbij wordt RedenWijziging gevuld met 13 (Verwijderd). Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden.*

*De volgende wijzigingen in volume en maximaal budget zijn toegestaan:*

- *Volume wijzigen: Als de omvang is gespecificeerd met in Frequentie de waarde "Totaal binnen geldigheidsduur toewijzing", dan mag Volume worden aangepast.*
*Indien dit op verzoek van de aanbieder is, mag dit zonder overleg worden aangepast door de gemeente.*
*Indien de gemeente het initiatief tot aanpassing van het volume neemt, mag dit alleen in overleg met en na instemming van de aanbieder worden aangepast.*
- *Budget wijzigen: Als Budget op verzoek van de aanbieder wordt gewijzigd, mag dit zonder overleg worden aangepast door de gemeente.*

*Indien de gemeente het initiatief tot aanpassing van het maximale budget neemt, mag dit alleen in overleg met en na instemming van de aanbieder worden aangepast.*

*De meest recente toewijzing op toewijzingsdatum en -tijd is bepalend voor de inhoud van de toewijzing.*

**OP033x2**

*Het gebruik van status aanlevering met waarde 2 (een berichtklasse is gewijzigd) is niet toegestaan.*

**OP039**

*In het berichtenverkeer mogen ketenpartijen cliëntgegevens doorgeven zoals deze in de administratie van de betreffende ketenpartij voorkomen, mits deze gegevens geen onderdeel zijn van een logische sleutel. Het staat ketenpartijen vrij om gewijzigde gegevens uit het berichtenverkeer over te nemen in hun administratie.*

**OP043**

*Indien aan een cliënt een PGB is toegekend is, mag op hetzelfde moment voor hetzelfde product geen toewijzing zijn afgegeven. Een toewijzing eindigt (uiterlijk) op de dag voorafgaand aan de ingangsdatum van het PGB.*

**OP047**

*Als een bericht niet aan de geldende standaard voldoet, mag het bericht afgekeurd worden.*

**OP065**

*Een retourbericht bevat alleen informatie over cliënten waarvan berichtklassen zijn afgekeurd. Cliënten waarvan alle berichtklassen volledig zijn goedgekeurd worden dus niet mee teruggestuurd in het retourbericht. Het retourbericht bevat alleen clienten waarvan in één of meer berichtklassen, over of behorend bij die client, fouten zijn geconstateerd. In dat geval wordt de berichtklasse Client inclusief alle onderliggende berichtklassen retour gezonden, voorzien van retourcodes.*

**OP071**

*Elke relatie krijgt een uniek nummer per gemeente per cliënt. Dit nummer mag niet gewijzigd worden.*

**OP072**

*Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beëindigd is. In het bericht moet gerefereerd worden aan de start van de levering.*

**OP076**

*Van iedere contactpersoon (relatie) moet worden opgegeven in welke relatie deze tot de cliënt staat. Gegevens over een contactpersoon mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de cliënt.*

**OP079**

*Het is verplicht om gebruik te maken van het BSN van de cliënt in de onderlinge uitwisseling van gegevens.*

**OP080**

*Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten. Hoewel ongewenst kan het noodzakelijk zijn een bericht met terugwerkende kracht te moeten versturen, bijvoorbeeld als gevolg van een bezwaarprocedure. Dit kan aanleiding zijn voor een serie berichten die vervolgens met terugwerkende kracht moeten worden verstuurd.
Daarnaast kan ook het afkeuren en corrigeren van berichten er toe leiden dat berichten in een andere volgorde worden verwerkt dan bedoeld. In deze situatie is het te adviseren om de ontvangst van retourberichten af te wachten om afkeur op een vervolgbericht te voorkomen.*

**OP086**

*Ondersteuningsproducten met een inspannings- of outputgerichte uitvoering worden altijd door de gemeente toegewezen met een toewijzingsbericht.*

**OP087**

*Een toewijzingsbericht bevat voor 1 cliënt altijd alle toewijzingen voor 1 aanbieder die op of na de aanmaakdatum van het bericht geldig zijn plus alle toewijzingen die gewijzigd zijn ten opzichte van het voorgaande toewijzingsbericht.

Deze regel is van toepassing indien voor 1 cliënt meerdere producten toegewezen zijn. Alle geldige toewijzingen binnen 1 cliënt, voor 1 aanbieder worden in 1 toewijzingsbericht geplaatst en naar de betreffende aanbieder gestuurd inclusief de toewijzingen die gewijzigd zijn sinds het laatst verstuurde toewijzingsbericht voor deze cliënt en aanbieder. Denk hierbij aan intrekkingen die zijn gedaan en waar de aanbieder nog niet van op de hoogte is.

Toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 13 (Verwijderd) worden niet gezien als actuele toewijzing. Ook toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 01 (Administratieve correctie (vervallen)) worden niet gezien als actuele toewijzing.

Voor iedere cliënt waarbij een toewijzing verandert, wordt een toewijzingsbericht gestuurd voor alle actuele toewijzingen voor die aanbieder behorende bij die cliënt*

**OP090**

*Voor ieder ontvangen heenbericht wordt binnen 3 werkdagen na ontvangst een retourbericht verzonden.*

De verzendende partij van het heenbericht is verantwoordelijk voor het signaleren van het ontbreken van een retourbericht en dient actie te ondernemen.*

**OP090x2**

*Indien voor een ontvangen heenbericht geen retourbericht kan worden gemaakt moet de ontvangende partij dit buiten het berichtenverkeer om melden aan de verzendende partij.*

**OP090x4**

*Voor ieder ontvangen declaratiebericht wordt binnen 10 werkdagen na ontvangst een declaratie-antwoordbericht verzonden.

Indien de gemeente niet binnen 10 werkdagen een declaratie-antwoordbericht kan versturen, neemt de gemeente buiten het berichtenverkeer om contact op met de aanbieder. De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van een declaratie-antwoordbericht en dient, indien er nog geen contact geweest is met de gemeente, actie te ondernemen.*

**OP091**

*Van een cliënt mogen aanvullende contactgegevens vastgelegd worden. Er moet dan wel vastgelegd worden wat voor soort adres het betreft.*

**OP095**

*Een bericht mag niet worden afgekeurd op basis van informatie waartoe de verzendende partij geen toegang heeft.*

**OP130**

*Van de relatie moet altijd een naam worden vastgelegd, aangevuld met een volledig adres en/of een telefoonnummer.*

**OP155**

*Een (tijdelijke) beëindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering.*

**OP179**

*De grootte van verzonden bestanden mag niet meer zijn dan 25 Mb.*

Deze regel wordt niet naar de techniek vertaald. Daar waar grotere bestanden verwerkt kunnen worden is dat uiteraard toegestaan. Daar waar de grootte van bestanden tot problemen in de verwerking leidt, is deze regel bedoeld om duidelijk te maken dat de verzender de bestandsgrootte moet aanpassen.

**OP186** 

Het beëindigen van een toewijzing op een datum die in het verleden ligt kan alleen in overeenstemming met de betreffende aanbieder

Deze regel is van toepassing op dié situaties waarin de aanbieder niet had kunnen weten dat hij geen ondersteuning meer mocht leveren.

**OP191**

*Het gebruik van ongestructureerde informatie dient tot een minimum beperkt te worden.*

Commentaar mag in de berichten gebruikt worden om extra informatie op te nemen. Het commentaar bevat een toelichting op de betreffende berichtklasse, die niet elders in het bericht kan worden opgenomen. Commentaar in het bericht mag geen tot een persoon herleidbare gegevens bevatten zonder toestemming van die persoon.

**OP192** 

*Verzonden berichten moeten voldoen aan de technische eisen.*

1. Het berichtuitwisselingsformaat is XML.
2. De bestandcodering is UTF-8.
3. Het gebruik van Byte-Order-Mark (BOM) is niet toegestaan.
4. Het einderegel teken is een combinatie van CR/LF (Windows einde-regel teken).
5. Gebruik xml als bestandextensie voor het bestand waar het XML bericht in opgenomen is.

**OP252** 

*Bij een (deels) onbekende geboortedatum moet aangegeven worden welk deel van de geboortedatum betrouwbaar is.*

**OP254** 

*In de iJw berichten worden AGB-codes gebruikt voor routering van de berichten en voor identificatie van de aanbieder.*

**OP257** 

*Bij een wijziging van de zorgvraag wordt voor het betreffende product een nieuwe toewijzing afgegeven.*

Bij een wijziging van de zorgvraag wordt voor het betreffende product een nieuwe toewijzing afgegeven of voor het betreffende product wordt een gewijzigde toewijzing gestuurd.

Bij het afgeven van een nieuwe toewijzing wordt een eventueel bestaande toewijzing beëindigd indien:

- De omvang van de te leveren ondersteuning wijzigt: er is meer of minder ondersteuning nodig op hetzelfde product dan vastgesteld in de bestaande toewijzing, behalve wanneer de omvang is gedefinieerd met een frequentie totaal binnen geldigheidsduur.
- Het product wijzigt: de cliënt heeft recht op een ander product dan vastgesteld in de bestaande toewijzing.

Het heeft de voorkeur een bestaande toewijzing aan te passen indien:

- De einddatum van de te leveren zorg of ondersteuning wijzigt (intrekken of oprekken)
- Het volume wijzigt bij een frequentie totaal binnen geldigheidsduur toewijzing
- Het maximaal budget wordt gewijzigd

**OP258** 

*Bij een beëindiging van een toewijzing wordt de aanbieder hiervan op de hoogte gebracht met een toewijzingbericht.*

**OP259**

*Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld toe te wijzen.*

Gestapeld betekent dat voor een cliënt hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt toegewezen aan dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.

Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode of dezelfde productcategorie indien productcode niet gevuld is. Indien productcategorie leeg is, geldt dat er geen ander toegewezen product voor (gedeeltelijk) dezelfde periode naast mag staan.

Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing. Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

**OP260** 

*Een ondersteuningsproduct wordt omschreven als een Productcategorie en kan nader gespecificeerd worden met een Productcode.*

**OP261** 

*Per ondersteuningsproduct wordt vastgelegd of de uitvoering inspanningsgericht, outputgericht of taakgericht is.*

**OP262** 

*Voor ondersteuningsproducten met een inspanningsgerichte uitvoering wordt een tarief per tijdseenheid afgesproken behalve voor ondersteuningsproducten met de eenheid stuks (inspanning) daar wordt een tarief per stuk afgesproken.*

**OP263**

*Voor ondersteuningsproducten met een outputgerichte werkwijze wordt een tarief per stuk afgesproken of wordt afgesproken dat een bedrag in euro's over een vastgestelde periode wordt vastgesteld.*

Wanneer gemeenten en aanbieders kiezen voor een outputgerichte werkwijze moeten er duidelijke afspraken worden gemaakt over wat precies wordt verstaan onder de gewenste output en hoe kan worden vastgesteld hoe de output is behaald.

**OP264**

*Voor ondersteuningsproducten met een outputgerichte werkwijze wordt vastgesteld op welk moment gedeclareerd wordt.*

Bijvoorbeeld bij afronding van een traject, per behaalde mijlpaal of periodiek een vast bedrag.

**OP267**

*De aanbieder declareert in een eenheid die aansluit bij de toewijzing.*

**OP270**

*Aanbieder en gemeente maken onderling afspraken over de door te geven begin- en einddatum in de regieberichten.*

Het gebruik van de regieberichten is voor de uitvoeringsvarianten inspannings- en outputgericht verplicht. Binnen de Jeugdwet maken gemeente en aanbieder onderling afspraken welke datums gehanteerd moeten worden om de start en stop van de levering door te geven. Deze afspraak kan per product afwijken, maar dit heeft niet de voorkeur.

**OP271**

*De aanbieder verzendt een startbericht binnen vijf werkdagen na de daadwerkelijke datum waarop de ondersteuning gestart is.*

Indien de ondersteuning met terugwerkende kracht is toegewezen, binnen vijf werkdagen na ontvangst van het toewijzingbericht.

**OP272** 

*De aanbieder verzendt een stopbericht binnen vijf werkdagen na de daadwerkelijke datum waarop de ondersteuning beeindigd is.*

Het verzenden van de definitieve stop, volgend op een tijdelijke stop, hoeft niet binnen 5 werkdagen na het stoppen van de levering te zijn. Wel moet het stopbericht binnen 5 werkdagen nadat bekend is dat de levering definitief gestopt is verstuurd worden.

**OP274** 

*Na ontvangst van een verzoek om toewijzing stuurt de gemeente per aangevraagd product binnen 5 werkdagen ofwel een toewijzingbericht ofwel een antwoordbericht aan de aanbieder.*

Als een antwoordbericht in VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) bevat, dan wordt binnen 8 weken na dagtekening van het verzoek ofwel een toewijzing bericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) gestuurd. Er moet altijd uiteindelijk ofwel een toewijzingsbericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) worden gestuurd voor elk aangevraagd product uit het verzoek om toewijzing

**OP275**

*Iedere toewijzing binnen één gemeente heeft een uniek nummer per wettelijk domein.*

**OP276**

*De aanbieder declareert voor een cliënt waarvoor de aanbieder een toewijzing ontvangen heeft.*

**OP279**

De aanbieder declareert een product binnen de geldigheid van de toewijzing.

**OP280**

*Een declaratiebericht heeft betrekking op één declaratieperiode.*

Een declaratiebericht over een periode kan prestaties bevatten uit eerdere declaratieperioden.

**OP281**

*Een declaratiebericht kan prestaties van één of meer cliënten bevatten.*

**OP283**

*Iedere prestatie krijgt een uniek nummer (ProductReferentie) per aanbieder per wettelijk domein.*

**OP284**

*Indien iedere declaratieperiode zorg is geleverd door de aanbieder, moeten de declaratieperioden aansluitend zijn in opvolgende declaratieberichten.*

Als gedurende een volledige declaratieperiode door de aanbieder geen zorg is geleverd, zal de aanbieder over die betreffende periode geen declaratie indienen. Tenzij in deze declaratieperiode correcties op voorgaande declaraties moeten worden verstuurd. Dit betekent dat er hiaten in de opvolgende declaratieperioden kunnen voorkomen. Het hiaat heeft altijd de duur van 1 of meer kalendermaanden.

Overlap van declaratieperiode is (voor correcties) toegestaan op de laatst ingediende declaratieperiode. Zie ook IV090.

**OP286**

*Als de ontvanger van een heenbericht een technische fout constateert, keurt deze het bericht in zijn geheel af en laat hij dit weten aan de verzender.*

Het bericht moet daarmee functioneel als niet-verzonden worden beschouwd.

**OP288**

*Indien de start van de levering gemeld is met een Startbericht, wordt de beëindiging van die levering altijd doorgegeven met een Stopbericht.*

Dit geldt ook wanneer de levering volgens plan en/of op de einddatum van de toewijzing beëindigd wordt.

**OP289**

*Bij een toegewezen product kan slechts één startbericht actueel zijn.*

Op ieder moment kan er maar één begindatum zijn van een levering die gestart is naar aanleiding van één toegewezen product of productcategorie. Een startbericht kan dus nooit volgen op een startbericht voor hetzelfde toegewezen product, tenzij er voor dat toegewezen product een (tijdelijke) beëindiging is doorgegeven in een stopbericht, óf tenzij het een correctie betreft van het eerdere startbericht (zie IV008).

Let op: een product kan hierbij niet gevuld zijn (generiek) of bestaan uit alleen een productcategorie (aspecifiek) ofwel een productcategorie en een productcode (specifiek).

**OP295**

*Het gebruik van regieberichten is verplicht.*

Het gebruik van de regieberichten is voor de uitvoeringsvarianten inspannings- en outputgericht verplicht. Een Stopbericht kan alleen worden verstuurd indien er een bijbehorend Startbericht aanwezig is. Bij leveringen gestart voor het verplicht stellen van de regieberichten (iWmo/iJw release 2.4) kan het zo zijn dat er geen Startbericht gestuurd is. Bij eindigen van de levering kan in dat geval geen Stopbericht worden verstuurd.

**OP296**

*Het ingediende Verzoek om Toewijzing dient te passen binnen de gemaakte contractafspraken tussen gemeente en aanbieder.*

**OP297**

*Indien de zorgverlenercode van de verwijzer bekend is, dient de aanbieder deze mee te geven in het verzoek om toewijzing.*

Indien bij de verwijzing van huisarts, Jeugdarts, Gecertificeerde instelling of Medisch specialist een zorgverlenerscode (AGB-code van het Zorgpartijtype Zorgverlener) is meegegeven, dient bij de verwijzing deze ZorgverlenerCode gevuld te worden. Indien de zorgaanbieder deze informatie niet heeft, mag worden volstaan met de naam van de verwijzer.

**OP298**

*Het verlagen van het Volume bij de frequentie totaal binnen geldigheid toewijzing is alleen toegestaan na overleg met en instemming van de betreffende aanbieder.*

**OP299**

*Het verlagen van het Budget is alleen toegestaan na overleg met en instemming van de betreffende aanbieder.*

Indien dit op verzoek van de aanbieder (via een verzoek om wijziging) is, mag dit zonder overleg worden aangepast door de gemeente.

**OP302**

*De aanbieder declareert een zorg- of ondersteuningsproduct dat aansluit bij de toewijzing.*

De in de declaratie ingediende prestatie moet passen bij de toewijzing.

Dit betekent onder andere dat de prestatie hetzelfde óf (een) nader gespecificeerd(e) zorg- of ondersteuningsproduct bevat als de toewijzing.

- **Specifieke toewijzing**: (productcategorie en productcode zijn beiden gevuld in de toewijzing) wordt hetzelfde zorg- of ondersteuningsproduct gedeclareerd, ofwel dezelfde combinatie van productcategorie en productcode.
- **Aspecifieke toewijzing**: (in de toewijzing is alleen productcategorie gevuld, productcode is leeg) worden 1 of meer nader gespecificeerde zorg- of ondersteuningsproducten gedeclareerd. Dat betekent dat de aanbieder binnen de toegewezen productcategorie 1 of meer productcode(s) declareert die volgens de gehanteerde productcodelijst horen bij die productcategorie.
- **Generieke toewijzing**: (in de toewijzing is alleen het budget gevuld, productcategorie en productcode zijn leeg), declareert de aanbieder 1 of meer productcategorie(en) met bijpassende productcode(s) passend binnen het afgesproken contract met de gemeente.

**OP303**

*Het declaratie-antwoordbericht bevat alle informatie om het bericht administratief te verwerken.*

De aanbieder die een declaratie-antwoordbericht ontvangt kan op basis van de meegestuurde gegevens de reactie op de declaratie verwerken in haar systeem. Dit is vooral van belang wanneer van een ingediend declaratiebericht een deel van de ingediende prestaties niet wordt toegekend.

In het declaratie-antwoordbericht worden alleen de prestaties meegestuurd die zijn afgewezen. Daarbij wordt met een retourcode aangegeven wat de reden is dat de ingediende prestatie niet is toegekend.

Toegekende prestaties

Toegekende prestaties worden niet opgenomen in het retourbericht. Alleen de som van de ingediende bedragen van de toegekende prestaties wordt in de berichtklasse `DeclaratieAntwoord` van het declaratie-antwoordbericht opgenomen.

**OP304**

*Een declaratie-antwoordbericht bevat alleen detailinformatie over cliënten waarvan berichtklassen zijn afgekeurd.*

Een declaratie-antwoordbericht bevat alleen detailinformatie over cliënten waarvan berichtklassen zijn afgekeurd Cliënten waarvan alle berichtklassen volledig zijn goedgekeurd worden dus niet mee teruggestuurd in het declaratie-antwoordbericht. Het declaratie-antwoordbericht bevat alleen cliënten waarvan in 1 of meer Prestaties fouten zijn geconstateerd. In dat geval wordt de berichtklasse Cliënt inclusief alle afgekeurde Prestaties retour gezonden, voorzien van de bijbehorende retourcodes.

**OP305**

*Indien een product op inspanningsbasis in stuks is gecontracteerd, moet toegewezen worden met eenheid 84: Stuks (inspanning).*

**OP306**

*Het verzoek om wijziging bericht (VOW) wordt gebruikt als tijdens levering van zorg en/of ondersteuning blijkt dat een ander pakket van toegewezen producten nodig is.*

Een verzoek om wijziging bericht wordt altijd verstuurd vanuit een situatie waarbij er al geleverd wordt op basis van een of meer actuele toewijzingen.

Het bericht bevat altijd de complete gewenste situatie inclusief de ongewijzigde, gewijzigde en nieuwe toewijzingen.

Een verzoek om wijziging bericht kan niet gebruikt worden als er geen actuele toewijzing is.

**OP307**

*Een verzoek om toewijzing bericht (VOT) wordt alleen gebruikt indien een cliënt zich met een (wettelijke) verwijzing of een open beschikking meldt bij de zorgaanbieder.*

Een verzoek om toewijzing bericht wordt altijd verstuurd op basis van een (wettelijke) verwijzing of een open beschikking.

Voor het product en de toewijzingsperiode dat met het verzoek wordt aangevraagd is er nog geen toewijzing voor dat product.

Een verzoek om toewijzing bericht kan niet gebruikt worden als er al een actuele toewijzing is voor dat product voor die periode.

**OP308**

*Een aanbieder vraagt met een verzoek om wijziging bericht (VOW) een samenhangend geheel aan toewijzingen aan met daarin de volledige gewenste situatie.*

Wanneer de aanbieder constateert dat de situatie van de cliënt verandert gedurende het leveren van zorg/ondersteuning, waardoor er een ander pakket aan zorg of ondersteuning nodig is, dan wordt dit kenbaar gemaakt met een verzoek om wijziging bericht, waarin de complete gewenste nieuwe situatie (van ongewijzigde, gewijzigde en of nieuw gewenste producten of productcategorieën) wordt aangegeven.

**OP343**

*Een verzoek om wijziging (VOW) moet tijdig ingediend worden.*

De gemeente moet redelijkerwijs in staat zijn om op een wijzigingsverzoek te reageren voor de gewenste ingangsdatum is bereikt.

**OP344**

*Een verzoek wordt door de gemeente uiteindelijk beantwoord met een toewijzing of een afwijzing.*

Een verzoek om toewijzing of verzoek om wijziging bevat 1 of meerdere toe te wijzen of te wijzigen producten.

De gemeente reageert hierop met een of meer toegewezen producten in een toewijzingbericht, of geeft met een antwoordbericht te kennen dat het verzoek wordt afgewezen.

Eventueel is er eerst onderzoek nodig voordat wordt toegewezen of afgewezen.

Bij een verzoek om wijziging is de reactie van de gemeente altijd op het niveau van het complete verzoek, bij een verzoek om toewijzing kan de gemeente besluiten om elk aangevraagd product apart al dan niet te honoreren.

**OP345**

*Als de gewenste ingangsdatum van een te wijzigen product uit een verzoek om wijziging (VOW) in het verleden ligt, dan mag de nieuwe omvang of het nieuwe budget niet leiden tot onrechtmatigheid voor al gedeclareerde en of geleverde zorg.*

**OP346**

*Na ontvangst van een verzoek om wijziging bericht stuurt de gemeente binnen 5 werkdagen ofwel een toewijzingbericht ofwel een antwoordbericht aan de aanbieder. (Requirement).*

Als in het antwoordbericht VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) bevat, dan wordt uiterlijk binnen 8 weken na dagtekening van het verzoek ofwel een toewijzingbericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) gestuurd. Er moet altijd uiteindelijk ofwel een toewijzingbericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) worden gestuurd.

**OP347**

*Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld aan te vragen.*

Stapeling betekent dat voor een cliënt hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt aangevraagd door dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.

Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode of dezelfde productcategorie indien productcode niet gevuld is. Indien productcategorie leeg is, geldt dat er geen ander aangevraagd product voor (gedeeltelijk) dezelfde periode naast mag staan.

Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of er sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing. Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

**OP348**

*Bij honoreren van een Verzoek om Wijziging (VOW) dient het aangevraagde overgenomen te worden in het toewijzingsbericht.*

Het toewijzingsbericht wordt gevuld conform IV093. De ingangsdatum en einddatum van de toewijzing kan afwijken van de in de VOW gevraagde data in het geval van toewijzen met terugwerkende kracht. Het ToewijzingNummer wijkt af indien voor de gevraagde wijziging een nieuwe toewijzing afgegeven moet worden (conform OP257 en IV066).

**OP349**

*Iedere declaratie krijgt een uniek declaratienummer per aanbieder per wettelijk domein.*

**OP350**

*Het is niet toegestaan een verzoek om wijziging of verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld.*

Als een verzoek is beantwoord met een retourbericht dat aangeeft dat er geen technische fouten zijn, dan is vanaf dat moment het verzoek in behandeling bij de gemeente. Totdat er ofwel een afkeur is gestuurd ofwel is gehonoreerd met een toewijzing, mag er door dezelfde aanbieder geen nieuw verzoek verzonden worden voor dezelfde cliënt.

**OP354**

*Zorg of ondersteuning geleverd aan een cliënt tijdens een bepaalde declaratieperiode wordt direct in de erop volgende declaratieperiode of achteraf in een latere declaratieperiode gedeclareerd.*

**OP355**

*Ieder ontvangen declaratie-antwoordbericht is gerelateerd aan een eerder ontvangen declaratiebericht.*

De koppeling kan zowel op berichtniveau als op declaratieniveau plaatsvinden.

**OP359**

*Indien een verzoek om toewijzing wordt afgewezen op basis van het woonplaatsbeginsel, dient de gemeente dit binnen de wettelijke termijn van 2 weken af te wijzen en de financieel verantwoordelijke gemeente terug te geven aan de aanbieder met een antwoordbericht.*

**OP360**

*Een prestatie mag alleen worden gecrediteerd indien deze niet eerder is gecrediteerd.*

**OP361**

*Iedere aanvraag van een product in een verzoek om toewijzing (VOT) of Verzoek om wijziging (VOW) krijgt een uniek referentienummer per aanbieder per wettelijk domein.*

**OP362**

*Het verwijderen van een toewijzing mag alleen indien dit niet leidt tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg.*

**OP363**

*Bij een output- of inspanningsgerichte werkwijze meldt de aanbieder een start en stop van de ondersteuning van producten waarvoor een toewijzing is ontvangen.*

**OP364**

*Regieberichten worden niet voorwaardelijk gesteld aan declaratie*

Het is niet toegestaan ingediende prestaties in een declaratiebericht af te keuren op basis van de start- en stopdatum in het regiebericht, of op basis van het ontbreken van een start- of stopbericht.

**OP365**

*De aanbieder declareert een zorg- of ondersteuningsproduct met een omvang die aansluit bij de toewijzing en/of gecontracteerde afspraken.*

**OP366**

*Een prestatieregel moet eerst volledig worden gecrediteerd voordat er een correctie op deze prestatieregel kan worden ingediend.*

Omdat een prestatieregel eerst volledig gecrediteerd moet worden alvorens er een correctie op deze prestatieregel ingediend kan worden, is het noodzakelijk dat bij de verwerking van de declaratieberichten eerst de creditregels verwerkt worden, en pas daarna de debetregels.

**OP367**

*Een productperiode valt altijd binnen een kalendermaand.*

**OP368**

*Een productperiode valt altijd binnen de geldigheidsperiode van een toewijzing.*

**OP377**

*Alleen een tijdelijke stop mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stop.*

Een stop moet volgen op een startbericht. De enige uitzondering hierop is een definitieve stop die kan volgen op een startbericht of een tijdelijke stop.

**OP378**

*Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan.*

**OP379**

*Na een (tijdelijke) stop is het toegestaan een start te sturen.*

**OP380**

*Het verplaatsen van de einddatum in de toekomst van de bestaande toewijzing voor het verlengen van de zorg of ondersteuning is verplicht in een aantal gevallen.*

Deze werkwijze is verplicht indien de toewijzing aan alle onderstaande voorwaarden voldoet:

- het volume blijft gelijk of is leeg.
- de frequentie is leeg of ongelijk aan totaal binnen geldigheidsduur toewijzing en blijft gelijk.
- de einddatum van de bestaande toewijzing is niet verstreken op het moment dat de toewijzing wordt opgerekt en verstuurd.

---

# Invulinstructies (IV-regels)

# IV002: Adressering bij organisatie

## Hoe om te gaan met adressering als het om een organisatie gaat?

- Adressering wordt **alleen gevuld** als de cliënt en/of relatie **in een instelling verblijft**.

# IV007: Vastleggen van naam van cliënt of relatie

## Hoe wordt de naam vastgelegd?

- **Achternaam**, **voorvoegsel**, **voornamen** en/of **voorletters** worden gescheiden vastgelegd.

### Format voor `VolledigeNaam`
- **Geslachtsnaam**: altijd vastleggen (Naam + eventueel Voorvoegsel).  
- **Partnernaam**: optioneel, ook Naam + eventueel Voorvoegsel.  
- **Voornamen**: gescheiden door spaties.  
- **Voorletters**: aaneengesloten, zonder punten of spaties.  
- **NaamGebruik**: geeft de gewenste aanspreekvorm aan en bepaalt de volgorde bij correspondentie (geslachtsnaam en partnernaam).

> Het vullen van `NaamGebruik` hangt af van hoe de cliënt of relatie zijn/haar naam hanteert.

# IV008: Correcties van regieberichten

## Hoe moet worden omgegaan met correcties?

- **Correcties** van een regiebericht zijn alleen toegestaan als het oorspronkelijke bericht **is goedgekeurd** door de gemeente.  
- Afgekeurde regieberichten worden beschouwd als **niet verzonden**; er moet een **nieuw bericht** worden gestuurd.

### Correctieprocedure voor berichtklassen (start-/stopbericht)
1. **Verwijderen van de bestaande berichtklasse**
   - Vul `StatusAanlevering` van de berichtklasse met **3 (verwijderen aanlevering)**.
   - Identificeer de te verwijderen berichtklasse via de **logische sleutel** van de klasse.

2. **Eventuele vervangende berichtklasse**
   - Kan in hetzelfde bericht worden aangeleverd.
   - Vul `StatusAanlevering` met **1 (eerste aanlevering)**.

### Logische sleutels
- **Startproduct**: `(ToewijzingNummer, Product, Begindatum)`  
- **Stopproduct**: `(ToewijzingNummer, Product, Begindatum, RedenBeeindiging, Einddatum)`

### Wanneer correctie in hetzelfde bericht of apart bericht
- **Onderdeel van logische sleutel**: correctie kan in **zelfde bericht** worden doorgegeven (unieke sleutel per berichtklasse).  
- **Niet onderdeel van logische sleutel**: correctie moet in **apart bericht** worden doorgegeven (anders afkeur door dubbele sleutel).

### Advies
- Zorg dat een **nieuwe aanlevering** nooit eerder wordt verwerkt dan de **correctie (verwijdering)**.  
- Waar mogelijk: neem **correctie en nieuwe aanlevering in hetzelfde bericht** op.

# IV009: Omgaan met geboortedatum

## Hoe moet een geboortedatum worden gevuld?

- Wanneer de **geboortedatum** niet volledig of onbekend is:
  - Wordt het **bekende deel** gebruikt.
  - Voor de **onbekende delen** geldt:
    - Dag en maand: `01`
    - Jaar: `1900`
- Het element **`DatumGebruik`** geeft aan welk deel van de datum bekend is en gebruikt moet worden.

### Voorbeelden
- Volledig onbekend: `01-01-1900`  
- Alleen bekend dat geboorte in 1953 was: `01-01-1953`  
- Alleen bekend dat geboorte in september 1949 was: `01-09-1949`

# IV013: Meest recente toewijzing

## Welke toewijzing is het meest recent?

- Om de **meest recente toewijzing** vast te stellen, worden de velden **`Toewijzingsdatum`** en **`Toewijzingstijd`** in het toewijzingbericht opgenomen.  
- De **gemeente** vult deze velden in met de datum en tijd waarop de **toewijzing definitief is vastgesteld**.  
  - Dit is **het moment van vaststelling**, niet het moment van verzending.  
- De toewijzing met de **meest recente `Toewijzingsdatum` en `Toewijzingstijd`** is de actuele toewijzing.

### Bij herverzoek door aanbieder
- Als een aanbieder vraagt om een **bestaande toewijzing opnieuw te versturen**, blijven **`Toewijzingsdatum` en `Toewijzingstijd` onveranderd**.

### Bij aanpassing
- Wijzigingen zoals **volume of einddatum** worden beschouwd als een **gewijzigde toewijzing**.  
- De gemeente vult dan de velden met de **datum en tijd van vaststelling van de aanpassing**.

# IV024: Vullen van bedragen

## Hoe moeten bedragen worden gevuld?

- Bedragen worden **altijd in 1/100 van de gehanteerde valuta** opgenomen.  
- Voor de **euro (EUR)** betekent dit bijvoorbeeld:
  - `10000` = 10.000 eurocent = **100 euro**.


# IV028 — Hoe wordt een retourbericht opgesteld?

Een retourbericht wordt gestuurd om de zender te informeren over de beoordeling (technisch/inhoudelijk) van het heenbericht.  
- Voor ieder heenbericht wordt slechts **1 retourbericht** gestuurd (1-op-1).  
- De ontvanger stuurt **altijd** een retourbericht naar de verzender.  

> Let op: voor het **declaratie-antwoordbericht (325-bericht)** is een aparte invulinstructie opgesteld: [IV087].

---

## Opbouw retourbericht

Een retourbericht bevat altijd een **Header**:

- `BerichtCode` = berichtcode van het betreffende retourbericht.  
- Overige elementen (incl. Afzender en Ontvanger) worden ongewijzigd overgenomen van het heenbericht.  
- Toevoegen: `IdentificatieRetour` en `DagtekeningRetour`.  
- Optioneel: versienummer van de gebruikte XSLT’s (verplicht indien afkeur op basis van XSLTs).  

---

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

---

## Voorbeeld

Een gemeente ontvangt een **Startbericht** met:  
- `StartProduct` met `StatusAanlevering = 3` (verwijderen aanlevering)  
- maar er is **geen eerder Startbericht** ontvangen met `StatusAanlevering = 1` (eerste aanlevering).  

➡️ Bericht wordt afgekeurd op basis van **TR063**.  

**Retourbericht** in dit geval:  
- Header: retourcode **0200**  
- Cliënt: retourcode **0200**  
- StartProduct: retourcode **9063** (“Geen eerder bericht ontvangen → bericht kan niet verwerkt worden”).  


# IV032: Vullen van retourcode in het retourbericht

## Welke retourcode moet worden gevuld?

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

# IV033: Vullen van XsltVersie

## Hoe moet `XsltVersie` worden gevuld?

- Wanneer de **ontvanger fouten** constateert in een bericht op basis van de beschikbare **XSLTs**, wordt in het **retourbericht** aangegeven welke **XSLT-versie** is gebruikt voor de controle.  
- Dit **versienummer** staat in de **output van de XSLTs** en moet **worden overgenomen** in het retourbericht.

# IV034: Vullen van XsdVersie

## Hoe moet `XsdVersie` worden gevuld?

- De waarden voor de elementen **`BasisschemaXsdVersie`** en **`BerichtXsdVersie`** in het datatype `CDT_XsdVersie` moeten worden overgenomen uit de **schemadefinitie (XSD)** waarop het bericht is gebaseerd.  
- In de schemadefinitie zijn deze waarden te vinden op de volgende paden:  
  - `/xs:schema/xs:annotation/xs:appinfo/<namespace>:BasisschemaXsdVersie`  
  - `/xs:schema/xs:annotation/xs:appinfo/<namespace>:BerichtXsdVersie`  
- `<namespace>` wordt vervangen door de namespace van de betreffende iStandaard, bijvoorbeeld: `iJw`, `iWmo`, enz.  

### Voorbeeld
```xml
<jw301:Bericht 
    xmlns:ijw="http://www.istandaarden.nl/ijw/3_2/basisschema/schema" 
    xmlns:jw301="http://www.istandaarden.nl/ijw/3_2/jw301/schema">


# IV042 — Hoe moet de omvang van te leveren of geleverde ondersteuning gevuld worden?

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

---

## Regels voor vullen
- Als **Eenheid = 83 (Euro’s)** → `GeleverdVolume` bevat een bedrag in **eurocenten**.  
  - Voorbeeld: `10000` = 10.000 eurocent = **100 euro**.  
- Als **Eenheid ≠ 83 (Euro’s)** → `GeleverdVolume` bevat een **geheel getal zonder decimalen**.  

---

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


# IV045: Vastleggen van voogd bij organisatie

## Hoe wordt de voogd vastgelegd indien dit een organisatie betreft?

- Als de **voogdij** voor een cliënt bij een **organisatie** ligt:  
  - Wordt in de **Relatie** de **organisatienaam** opgenomen als `Geslachtsnaam`.  
  - Wordt aangeduid met `NaamGebruik = 6` (**niet-natuurlijk persoon**).

# IV046: Gemeentecode in berichten

## Welke gemeentecode moet worden gevuld?

- In de **header** van de berichten wordt de **gemeente** opgenomen die volgens de wet **verantwoordelijk** is voor zorg of ondersteuning aan de cliënt.  
- Voor de aanduiding van de gemeente wordt de **CBS-codelijst** gehanteerd.

# IV047: Adressering van cliënt bij alleen briefadres

## Hoe om te gaan met adressering als alleen een briefadres bekend is?

- In een toewijzing wordt altijd het **GBA-adres** of **verblijfadres** van de cliënt meegegeven in de **Contactgegevens**.  
- Dit is **niet mogelijk** als de cliënt in de **Basisregistratie Personen (BRP)** alleen een **briefadres** heeft.  
- In dat geval kan bij de cliënt een **Adres** met het type **Correspondentie-adres** worden meegegeven.

# IV052: Gebruik van Beschikkingnummer in VOT

## Hoe om te gaan met `Beschikkingnummer` in een Verzoek om Toewijzing (VOT)?

- De **aanbieder** dient het `Beschikkingnummer` mee te geven in het **VOT-bericht** als de cliënt van haar gemeente een beschikking heeft ontvangen.
- De **gemeente** kan op basis van dit `Beschikkingnummer` eenvoudig de **bestaande beschikking koppelen** aan de informatie uit het VOT-bericht.

# IV066 — Wanneer krijgt een toewijzing een nieuw ToewijzingNummer?

## Basisregels
- Een **initiële toekenning** van een product aan een cliënt is een **nieuwe toewijzing** → krijgt een **nieuw ToewijzingNummer**.  
- Een initiële toekenning kent **nooit een RedenWijziging**.  
- Bij een **wijziging van een eerder afgegeven toewijzing** (intrekken, oprekken, verwijderen, corrigeren) → gebruik het **ToewijzingNummer van de initiële toekenning**.  
- **Startberichten**, **stopberichten** en **declaratieberichten** verwijzen altijd naar het ToewijzingNummer uit het oorspronkelijke toewijzingbericht.  
- Het (opnieuw) versturen van een bericht heeft **geen invloed** op het ToewijzingNummer.  

---

## Toegestane wijzigingen (beperkt)
Het wijzigen van een toewijzing is slechts beperkt toegestaan (zie ook *OP33x1*):  
- De toewijzing kan worden **verwijderd**.  
- De **einddatum** kan worden aangepast.  
- Het **budget** kan worden aangepast.  
- De **omvang** kan worden aangepast *indien* de frequentie = `6` (**Totaal binnen geldigheidsduur toewijzing**).  

---

## Nieuwe initiële toekenning vereist
Als de **omvang** gewijzigd wordt bij een andere frequentie dan `6` (Totaal binnen geldigheidsduur):  
- De bestaande toewijzing wordt **ingetrokken**.  
- Een **nieuwe toewijzing** wordt verzonden met:  
  - **Ingangsdatum** = de datum waarop de gewijzigde omvang ingaat.  
  - **Nieuw ToewijzingNummer**.  


# IV074 — Wat is het verschil tussen de verschillende uitvoeringsvarianten?

## Uitvoeringsvarianten
De iStandaarden ondersteunen de volgende uitvoeringsvarianten:  
- **Inspanningsgericht**  
- **Outputgericht**  
- **Taakgericht**  

## Toelichting
De specifieke eigenschappen van deze varianten zijn beschreven in het document **Handreiking uitvoeringsvarianten**.  

📄 Zie: [Handreiking uitvoeringsvarianten iWmo en iJw](http://www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw).  


# IV075 — Hoe moeten productgegevens gevuld worden?

## Algemeen
- Welke productcodes gebruikt mogen worden in het berichtenverkeer is afhankelijk van **bilaterale afspraken**.  
- Er is een landelijke codelijst **021 - PRODUCTCODE** beschikbaar.  
- Gemeente en aanbieder leggen in de **contractafspraken** vast of deze landelijke codelijst gebruikt wordt of dat een **eigen productcodelijst** geldt.  

---

## Aanvragen (VOT of VOW)
Het element **Product** wordt gevuld in:  
- `AangevraagdProduct` (VOT)  
- `NieuwProduct` (VOW)  

Afhankelijk van de gewenste toewijzingsvariant:  
- **Specifieke toewijzing** → vul **productcategorie én productcode**.  
- **Aspecifieke toewijzing** → vul **alleen productcategorie**.  
- **Generieke toewijzing** → **Product leeg**, dus geen productcategorie en productcode gevuld.  

---

## Start- en Stopberichten (305 / 307)
Bij inspannings- en outputgerichte uitvoeringsvarianten:  
- Hetzelfde product opnemen als in de **Toewijzing (301)**.  
- **Specifieke toewijzing** → vul **productcategorie én productcode**.  
- **Aspecifieke toewijzing** → vul **alleen productcategorie**.  
- **Generieke toewijzing** → **Product leeg** (geen productcategorie of productcode).  

---

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


# IV076 — Hoe moet het volume in de prestatie gevuld worden, wanneer de toewijzing de frequentie week heeft?

## Algemeen
- Een productperiode binnen een declaratieperiode is **altijd maximaal een kalendermaand**.  
- Als **ToegewezenProduct** de frequentie **per week** heeft, kan een week verdeeld zijn over 2 productperiodes (wanneer een maand halverwege een week begint).  
- Er bestaan 2 methoden om het volume te bepalen:  
  - **Inspanningsgerichte toewijzing**  
  - **Outputgerichte toewijzing**  

---

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

---

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


# IV077 — Hoe moet het maximaal te declareren volume berekend worden bij frequentie per week?

## Algemeen
- De frequentie **per week** past niet 1-op-1 binnen de declaratieperiode (maand).  
- Daarom gelden aanvullende afspraken om te berekenen wat het **maximaal declarabele volume** per productperiode is.  
- Werkwijze:  
  1. Bepaal uitvoeringsvariant (inspanning of output).  
  2. Bereken het maximaal volume binnen de productperiode.  
  3. Controleer of het geleverde volume hierin past.  
  4. Controleer of het totaal gedeclareerde volume binnen de toewijzing past.  

---

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
- December: 5 (week 48–52,01)  

Maximaal volume per maand:  
- Oktober: 4 × 3 = **12 uur**  
- November: 5 × 3 = **15 uur**  
- December: 5 × 3 = **15 uur**  

Maximaal volume over toewijzingsperiode:  
- 07-10-2025 t/m 30-12-2025 = 13 weken × 3 uur = **39 uur**  

---

## Methode 2 — Outputgerichte toewijzing
- Maximaal volume = **aantal zondagen binnen de productperiode** × weekvolume uit de toewijzing.  
- Uitzondering: als de toewijzing **niet eindigt op een zondag**, tel je 1 weekvolume extra bij de productperiode waarin de laatste zondag van de toewijzing valt.  

### Voorbeeld 1 — Eindigt op zondag
**Toewijzing:** 01-10-2025 t/m 31-12-2025, 300 euro per week  

Aantal zondagen per maand:  
- Oktober: 3  
- November: 5  
- December: 4 (+1 extra weekvolume, omdat einddatum geen zondag is)  

Maximaal volume:  
- Oktober: 3 × 300 = **900 euro**  
- November: 5 × 300 = **1500 euro**  
- December: (4 + 1) × 300 = **1500 euro**  

---

### Voorbeeld 2 — Eindigt niet op zondag
**Toewijzing:** 07-07-2025 t/m 05-09-2025, 300 euro per week  

Aantal zondagen per maand:  
- Juli: 3  
- Augustus: 5 (+1 extra weekvolume, omdat einddatum geen zondag is)  

Maximaal volume:  
- Juli: 3 × 300 = **900 euro**  
- Augustus: (5 + 1) × 300 = **1800 euro**  


# IV078 — Wat mag gedeclareerd worden wanneer een onvolledige periode is toegewezen?

## Algemeen
- Alleen voor de **inspanningsgerichte uitvoeringsvariant** geldt een uniforme werkwijze.  
- Voor de **outputgerichte uitvoeringsvariant** maken gemeente en aanbieder **bilaterale afspraken**.  

---

## Werkwijze inspanningsgericht
- Het daadwerkelijk geleverde volume in de gebroken periode mag gedeclareerd worden.  
- Bovengrens: het **maximale volume** dat in *ToegewezenProduct* aan de frequentie is toegekend.  
- Zie ook [IV077](#iv077--hoe-moet-het-maximaal-te-declareren-volume-berekend-worden-bij-frequentie-per-week) voor de rekenmethodes.  

---

## Voorbeelden

### Voorbeeld 1 — Frequentie = week
**Toewijzing:** 3 uur/week, 12-11-2025 t/m 13-12-2025  

- Productperiode: 12-11-2025 t/m 30-11-2025  
- Maximaal declarabel: **9 uur** (3 weken × 3 uur), mits daadwerkelijk geleverd.  
- Let op: de eerste week (12-11 t/m 16-11) is geen volledige week, maar indien geleverd mag toch de volledige **3 uur** gedeclareerd worden.  

---

### Voorbeeld 2 — Frequentie = maand
**Toewijzing:** 15 uur/maand, 14-10-2025 t/m 13-12-2025  

- Productperiode: 14-10-2025 t/m 31-10-2025  
- Maximaal declarabel: **15 uur**, mits daadwerkelijk geleverd.  
- Ook al is oktober een **gebroken maand**, de volledige maandcapaciteit mag gedeclareerd worden als die uren geleverd zijn.  


# IV079 — Hoe moet het volume in de prestatie gevuld worden wanneer de eenheid uren is en geleverde prestatie niet uit volledige uren bestaat?

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


# IV081 — Hoe moet het ProductTarief gevuld worden?

## Algemeen
- De **eenheid in de prestatie** moet gelijk zijn aan de **eenheid van de toewijzing**.  
- Voor deze eenheid moet in het **contract een tarief** voor het betreffende product zijn vastgelegd.  
- Het **ProductTarief** in de prestatie wordt gevuld met dit tarief.  

---

## Uitzondering voor uren/minuten
- Indien het tarief per **uur** is afgesproken, maar gedeclareerd wordt in **minuten**:  
  - Het tarief wordt omgerekend naar **tarief per minuut**: tarief ÷ 60  
  - Afronden op **2 decimalen**, volgens rekenkundige regels:  
    - 1,455 → **1,46**  
    - 1,454 → **1,45**  
- Het afgeronde tarief wordt **opgenomen in ProductTarief**, maar **niet gebruikt voor IngediendBedrag**.  

---

## Berekening IngediendBedrag
- Formule: (contractueel uurtarief × aantal minuten) ÷ 60
- Afronden op **2 decimalen**.  
- Zie ook **TR346**.


# IV084 — Hoe moet de declaratie gevuld worden bij elkaar opvolgende toewijzingen binnen één declaratieperiode?

## Algemeen
- Bij **elkaar opvolgende toewijzingen** binnen een declaratieperiode:  
  - Maak **aparte Prestaties** per toewijzing **en per product**.  
  - Een **Prestatie kan nooit op meer dan één toewijzing** betrekking hebben.  

---

## Voorbeeld
- **Toewijzing 1:** 01-03-2025 t/m 09-03-2025  
- **Toewijzing 2:** 23-03-2025 t/m 31-03-2025  
- Er is **ononderbroken zorg geleverd** tijdens beide periodes.  

### Declaratie
- **Prestatie 1**: ProductPeriode 01-03-2025 t/m 09-03-2025  
- **Prestatie 2**: ProductPeriode 23-03-2025 t/m 31-03-2025  


# IV085 — Wanneer kan een creditering van een declaratie verzonden worden?

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


# IV086 — Hoe moet worden omgegaan met debet en credit prestaties in een declaratiebericht?

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


# IV087 — Hoe wordt een declaratie-antwoordbericht opgesteld?

## Algemeen
- Een declaratie-antwoordbericht informeert de aanbieder over:  
  1. De **beoordeling** (technisch/inhoudelijk) van het declaratiebericht.  
  2. Het **totaalbedrag** dat door de gemeente wordt toegekend.  
- Voor ieder declaratiebericht wordt **exact 1 declaratie-antwoordbericht** gestuurd (1-op-1).  
- Het bericht bevat altijd een **Header**.  

---

## Header
- **DeclaratieIdentificatie**: berichtidentificatie van het declaratiebericht dat beantwoord wordt.  
- Kan aangevuld worden met het **versienummer van de XSLT’s** die gebruikt zijn bij controle (verplicht bij afkeur op basis van XSLTs).  

---

## Afhandeling per situatie / controleniveau

### 1. Bericht volledig goedgekeurd
- Header retour met **Retourcode 0200** (geen opmerkingen over berichtklasse).  
- Berichtklasse **DeclaratieAntwoord**: retourcode **8001** (Declaratie volledig toegewezen).  
- Velden **TotaalGoedgekeurdBedrag** en **TotaalIngediendBedrag** vullen met waarde uit declaratiebericht.  

---

### 2. Controleniveau 1 — XSD-validatie fout
- Declaratiebericht **niet valide** tegen XSD → afzender ontvangt **foutmelding**.  
- **Geen declaratie-antwoordbericht** wordt verzonden.  

---

### 3. Controleniveau 2 — XSLT-validatie fout
- Fout bij controle die niet via XSD kan worden gevalideerd.  
- Declaratie-antwoordbericht bevat **alleen Header** met algemene **Retourcode 0001** (Bericht afgekeurd om technische redenen).  
- Versienummer van gebruikte XSLTs toevoegen.  
- Declaratie wordt **niet verwerkt** in administratie.  

**Voorbeeld:**  
- Fout in Header of kan niet afgeleverd worden → retourcode 0001.  

---

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

---

## Belangrijke uitzonderingen
- Declaratie-antwoordbericht **is geen ontvangstbevestiging**.  
- **Niet** bedoeld om extra informatie op te vragen of correcties door te geven.  
- Berichten kunnen info bevatten over meerdere cliënten; cliënten **zonder fouten** worden niet opgenomen.

# IV088 — Welke retourcode moet gevuld worden in het declaratie-antwoordbericht?

## Algemeen
- De **retourcode** hangt af van de **controle op basis waarvan het bericht is afgekeurd**.  
- Declaratieberichten worden gecontroleerd op **vier niveaus**.  

---

## Controleniveau 1 — Berichtformaat (XSD)
- Het bericht wordt gevalideerd tegen het XSD.  
- **Bij niet-valide berichten:**  
  - Afzender ontvangt een **foutmelding**.  
  - **Geen declaratie-antwoordbericht** wordt verzonden.  
- Regels op dit niveau hebben **geen retourcode**.  

---

## Controleniveau 2 — Berichtinhoud (XSLT)
- Controle van alle regels binnen het bericht zelf (technische regels, condities, constraints).  
- Voor deze controles zijn XSLTs beschikbaar.  
- **Algemene retourcode:** 0001 (Bericht is technisch onjuist)  
- Bij fouten:  
  - Declaratie-antwoordbericht bevat alleen de **Header** met retourcode 0001.  
  - Versienummer van gebruikte XSLTs toevoegen.  

---

## Controleniveau 3 — Berichtoverstijgend
- Controle van het bericht ten opzichte van eerdere domeinspecifieke berichten.  
- Elke regel op dit niveau heeft een **specifieke retourcode**.  
- Deze retourcode wordt gevuld in de **berichtklasse waarin de fout is geconstateerd**.  

---

## Controleniveau 4 — Externe bron
- Controle van het bericht op basis van externe gegevens, zoals:  
  - Systeemdatum van verzender/ontvanger  
  - Externe codelijsten (bijv. AGB, CBS)  
  - Bilaterale afspraken (contractafspraken)  
- Elke regel op dit niveau heeft een **specifieke retourcode**.  
- Retourcode wordt gevuld in de **berichtklasse waarin de fout is geconstateerd**.  


# IV089 — Hoe moet ProductPeriode gevuld worden?

## Begrippen
- **Declaratieperiode:** administratieve periode waarover geleverde hulp wordt verwerkt tot een declaratie. **Altijd een kalendermaand.**  
- **Productperiode:** valt altijd **binnen de geldigheidsperiode van de toewijzing**.  
  - Niet afhankelijk van de start- of stopdatum van de geleverde zorg.  
  - In het declaratiebericht wordt het **totale geleverde volume** van één specifiek product binnen één productperiode en één toewijzing opgenomen in **één Prestatie**.  
  - Prestaties kunnen direct in de volgende declaratieperiode of later gedeclareerd worden (zie IV076 voor volume bij frequentie per week).  

---

## Invullen van ProductPeriode

### Begindatum
- **Eerste dag van de kalendermaand** waarin de ProductPeriode valt, **indien** de Ingangsdatum van het ToegewezenProduct **voor of op de eerste dag** van die maand ligt.  
- **Ingangsdatum ToegewezenProduct**, indien deze **na de eerste dag** van de maand ligt.

### Einddatum
- **Laatste dag van de kalendermaand** waarin de ProductPeriode valt, **indien** de Einddatum van het ToegewezenProduct **op of na de laatste dag** van die maand ligt.  
- **Einddatum ToegewezenProduct**, indien deze **voor de laatste dag** van de maand ligt.

---

## Voorbeeld reguliere ProductPeriodes

ToegewezenProduct: 08-04-2025 t/m 17-06-2025  

| Maand | ProductPeriode            |
|-------|--------------------------|
| April | 08-04-2025 t/m 30-04-2025 |
| Mei   | 01-05-2025 t/m 31-05-2025 |
| Juni  | 01-06-2025 t/m 17-06-2025 |

---

## Trajectfinanciering (outputgericht in euro's)
- Gemeenten en aanbieders kunnen afspraken maken over **afwijkende declaratiemomenten**.  
- Indien resultaat pas aan het **eind van het traject** kan worden vastgesteld:  
  - ProductPeriode = **laatste ProductPeriode binnen toewijzingsperiode**  
  - Declaratie kan indien nodig **in delen** worden ingediend, maar ProductPeriode blijft **binnen de toewijzingsperiode**.

### Voorbeeld trajectfinanciering
- Toewijzing: 08-04-2025 t/m 17-06-2025  
- Declaraties in april en mei: geen  
- Declaratie in juni: **ProductPeriode 01-06-2025 t/m 17-06-2025**


# IV090 — Hoe moet het declaratiebericht gevuld worden indien achteraf gedeclareerd wordt?

## Algemeen
- Zorg of ondersteuning geleverd tijdens een bepaalde **declaratieperiode** wordt meestal in de **eropvolgende declaratieperiode** gedeclareerd.  
- **Achteraf declareren** is toegestaan, maar:
  - **Niet** met een declaratieperiode **voor de laatst ingediende** declaratieperiode.  
  - De **ProductPeriode** mag wél in het verleden liggen (dit geeft de leveringsperiode aan).  

- Wanneer achteraf over **meerdere declaratieperiodes** wordt gedeclareerd:
  - In één declaratiebericht worden **evenveel Prestaties** opgenomen als het aantal afzonderlijke prestaties dat normaal in afzonderlijke berichten zou zijn ingediend.

---

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

---

### 2. Achteraf declareren wanneer hulpperiode meerdere declaratieperiodes beslaat
Situatie:  
- Geleverde ondersteuning aan cliënt: 15-02-2025 t/m 30-04-2025  
- Volgende declaratiebericht bevat **3 Prestaties**, elk met eigen ProductPeriode:  

| Prestatie | ProductPeriode           |
|-----------|-------------------------|
| 1         | 15-02-2025 t/m 28-02-2025 |
| 2         | 01-03-2025 t/m 31-03-2025 |
| 3         | 01-04-2025 t/m 30-04-2025 |


# IV091 — Hoe moet een creditprestatie gevuld worden in een declaratiebericht?

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


# IV092 — Hoe moet een Verzoek om Wijziging (VOW bericht) gevuld worden?

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


# IV093 — Vulling Toewijzingbericht na Verzoek om Wijziging (VOW)

## Algemeen
- Het Toewijzingbericht bevat **alle gevraagde wijzigingen uit het VOW**.
- Geen mix van wel/niet toegewezen producten; alles wordt conform aanvraag toegewezen.
- GewensteIngangsdatum kan worden aangepast indien reeds gepasseerd, in overleg met aanbieder.
- Alle ToegewezenProducten (ook ongewijzigde) krijgen **dezelfde ReferentieAanbieder** uit het VOW-bericht.

---

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

---

## RedenWijziging en ReferentieAanbieder
- **RedenWijziging**:
  - Geïnitialiseerd door aanbieder bij aanpassing van lopende toewijzing
  - Leeg bij nieuwe toewijzing
- **ReferentieAanbieder**: altijd overgenomen uit VOW.

---

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


# IV094: Toewijzingbericht na VOT

## Hoe wordt een toewijzingbericht gevuld naar aanleiding van een VOT-bericht?

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


# IV095: Vullen van de juiste gemeente

## Hoe moet de juiste gemeente worden gevuld?

Wanneer een gemeente in het **antwoordbericht** aangeeft dat zij **niet de verantwoordelijke gemeente** is voor de cliënt waarvoor een verzoek om toewijzing (VOT) is ingediend:

- `RedenAfwijzingVerzoek` wordt gevuld met de waarde **8 (Woonplaatsbeginsel)**.
- Het veld `Gemeente` moet de **gemeentecode** bevatten van de gemeente die volgens haar **wel verantwoordelijk** is.
  - Hierdoor weet de aanbieder bij welke gemeente het verzoek om toewijzing moet worden ingediend.

### Overige gevallen
- Bij **alle andere waarden** van `RedenAfwijzingVerzoek` **mag de klasse Woonplaatsbeginsel niet** worden opgenomen.


# IV096: Sleutel van start- en stopbericht

## Hoe wordt de sleutel gevuld?

De manier waarop de sleutel van een **start- of stopbericht** wordt gevuld, hangt af van de uitvoeringsvariant:

### Inspanningsgerichte of outputgerichte uitvoeringsvariant
- `ToewijzingNummer` wordt gebruikt als **sleutel** tussen het start-/stopbericht en de toewijzing.

### Taakgerichte uitvoeringsvariant
- Er is **geen sprake van een toewijzing**.
- De sleutel bestaat uit:
  - `Product`
  - `Begindatum`


# IV097 — Vulling van ReferentieAanbieder in ToegewezenProduct

## Algemeen
- **Wanneer vullen?**
  - Alleen wanneer een toewijzing wordt gestuurd **als direct gevolg van**:
    1. Verzoek om toewijzing (VOT)
    2. Verzoek om wijziging (VOW)
- **Initiatief van gemeente**
  - Als de gemeente een nieuwe of gewijzigde toewijzing verstuurt **zonder verzoek**, blijft **ReferentieAanbieder leeg**, ook als een eerder bericht dit wel had.

---

## Regels per type verzoek

### 1. Verzoek om Toewijzing (VOT)
- Elk gevraagd product heeft **een apart ReferentieAanbieder**.
- De ToegewezenProducten krijgen **het overeenkomstige ReferentieAanbieder** uit het VOT.

### 2. Verzoek om Wijziging (VOW)
- Alle wijzigingen en/of extra producten vormen **één samenhangend geheel**.
- Alle ToegewezenProducten in het toewijzingbericht krijgen **dezelfde ReferentieAanbieder** uit het VOW.

---

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

---

## Samengevat
- **ReferentieAanbieder volgt het verzoek** (VOT of VOW).
- **Niet** gevuld bij gemeentelijk initiatief.
- Bij VOW geldt **één ReferentieAanbieder voor alle wijzigingen/extra producten**.

# IV099: RedenWijziging

## Wanneer moet `RedenWijziging` worden gevuld?

`RedenWijziging` geeft aan of `ToegewezenProduct` in een toewijzingsbericht is gewijzigd ten opzichte van de **laatste keer** dat dit bericht met hetzelfde `ToewijzingNummer` is verstuurd.

### Regels:

- Als het toegewezen product **niet is gewijzigd** ten opzichte van de laatste verzonden toewijzing, blijft `RedenWijziging` **leeg**.
- Als er **wel een wijziging** heeft plaatsgevonden, wordt `RedenWijziging` gevuld met de **code die past bij de wijziging**.
- Bij de **initiële toewijzing** van een product (nieuw `ToewijzingNummer`) is `RedenWijziging` **altijd leeg**.


