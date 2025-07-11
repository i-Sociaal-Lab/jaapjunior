# Regels op berichten iJw release 3.2

Versie: 1.0
Status: Productie
Auteur: Zorginstituut
Bron-link: https://www.istandaarden.nl/ijw/releases/release-ijw-3.2
Publicatiedatum: 29 september 2022
AI-agent: Jw-agent

# Regels op berichten iJw 3.2.0 (Jaap dd 8-06-2025)

## Inleiding voor AI-agent

Dit regelrapport beschrijft de functionele en technische regels die gelden binnen het berichtenverkeer van de Jeugdwet (iJw), release 3.2.0. 

Regels kunnen van toepassing zijn op het bericht, een berichtklasse, berichtelement of een datatype.

Retourberichten, m.u.v. het declaratiebericht, kennen dezelfde regels als het heenbericht en zijn niet apart opgenomen.

Het document dient als **naslagwerk en validatiebron** voor AI-agenten die vragen moeten beantwoorden, tekst moeten analyseren of processtappen moeten controleren binnen het domein van jeugdhulp, gemeenten en zorgaanbieders.

**Gebruik voor AI-agenten:**

- Iedere regel is voorzien van een unieke code (zoals UP001, OP001, IV002), een titel en een toelichting.
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iJw.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef altijd de exacte definitie van een regel zoals deze in dit document staat. Geef nooit een interpretatie van een regel.
- Sommige regels zijn specifiek voor gemeenten, andere voor aanbieders of ketenpartijen.
- Let op: dit rapport bevat zowel functionele als technische regels; check bij interpretatie altijd het type regel.

---

# Functionele en technische regels iJw 3.2.0

## Uitgangspunten (UP-regels)

**UP001:**

*De Jw berichtenfamilie ondersteunt het toewijzen, leveren en declareren van Jeugdhulp in het kader van de Jeugdwet die geleverd wordt als zorg in natura (ZIN).*

**UP003:**

*De privacy van de cliënt is in de iJw geborgd doordat aangesloten ketenpartijen zich conformeren aan de Algemene Verordening Gegevensbescherming (AVG).*

**UP004:**

*De volgens de wet verantwoordelijke gemeente coördineert de inzet van Jeugdhulp voor de cliënt door middel van toewijzingen (inspannings- en outputgericht).*

**UP006:**

*De cliënt wordt in de informatievoorziening Jw geïdentificeerd met zijn BSN.*

**UP007:**

*De gemeente legt in een beschikking vast of een cliënt recht heeft op ondersteuning vanuit de Jeugdwet (inspannings- en outputgericht).*

**UP016:**

*Jeugdhulp wordt uitgedrukt in jeugdhulp-producten.*

**UP017:**

*De informatie-uitwisseling in de Jeugdwet is gebaseerd op gestandaardiseerd berichtenverkeer.*

**UP019:**

*De cliënt staat centraal.*

**UP023:**

*Informatie wordt eenmalig bij de cliënt uitgevraagd.*

**UP024:**

*De informatievoorziening Jw conformeert zich aan de wet- en regelgeving die voortvloeit uit de Jeugdwet.*

**UP025:**

*De geleverde Jeugdhulp wordt gedeclareerd op cliëntniveau (inspannings- en outputgericht).*

**UP026:**

*De Jeugdwet berichtenfamilie ondersteunt drie verschillende uitvoeringsvarianten: outputgericht, inspanningsgericht en taakgericht.*

**UP027:**

*De declaratie moet passen binnen de contractafspraken en binnen de toewijzing (inspannings- en outputgericht).*

**UP028:**

*Gemeente en aanbieder leggen een uitvoeringsvariant en een financieringsvorm voor de te verlenen jeugdhulp in een contract vast.*

**UP031:**

*De gemeente doet geen aanpassingen in toewijzingen die bij de zorgaanbieder tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg leiden.*

**UP032:**

*De zorgaanbieder stelt de gemeente op de hoogte van (veranderingen in) zorgvraag door middel van een Verzoek om toewijzing of een Verzoek om wijziging.*

**UP037:**

*De gemeente geeft iedere beschikking binnen het Jw domein een uniek nummer.*

---

# Bedrijfsregels (OP-regels)

**OP001:**

*Van een cliënt wordt vastgelegd wie de gezagsdrager is. Indien het een cliënt betreft die 16 jaar of ouder is kan het gezag over de jeugdige ook bij de cliënt zelf liggen.*

**OP002:**

*De gemeente stuurt in de toewijzing gegevens van de gezagsdrager van de cliënt mee. De gezagsdrager wordt opgenomen als relatie van de cliënt.*

**OP002x1:**

*Indien een aanbieder in een Verzoek om toewijzing heeft aangegeven dat de gezagsdrager bekend is, hoeft in de daaropvolgende toewijzing de gezagsdrager niet meegegeven te worden.*

**OP002x2:**

*Indien het gezag over een cliënt bij de jeugdige zelf ligt, wordt deze niet nogmaals als relatie opgenomen in de toewijzing.*

**OP003:**

*Het gestandaardiseerd berichtenverkeer wordt niet gebruikt indien, naar oordeel van een (zorg)professional, de overdracht van cliëntgegevens ernstige risico's met zich meebrengt voor de veiligheid van de cliënt. Dit kan bijvoorbeeld gelden voor cliënten die opgenomen zijn of worden in een "blijf-van-mijn-lijf" huis.*

**OP011:**

*De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is aangevangen.*

**OP033:**

*Voor het doorgeven van wijzigingen en correcties op een eerder verzonden bericht, moet gebruik gemaakt worden van de systematiek van status aanlevering. Correcties op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beëindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden. Met de status aanlevering van een berichtklasse kan worden aangegeven of:
• een berichtklasse nieuw is (waarde 1);
• een berichtklasse gewijzigd is (waarde 2); een wijziging betekent dat de actuele aanlevering met dezelfde sleutel vervangen wordt. Deze waarde mag niet gebruikt worden in de iJw/iWmo.
• een berichtklasse verwijderd moet worden (waarde 3). Een verwijdering betekent dat de vorige aanlevering(en) met dezelfde sleutel als niet verzonden beschouwd moet worden.*

**OP033x1:**

*Een afgegeven toewijzing mag gewijzigd worden waarbij de wijziging met een nieuw bericht moet worden doorgegeven.*

- *De volgende wijzigingen in de einddatum zijn toegestaan:*
- *Intrekken: aanpassen van de gewenste einddatum toewijzing zodat de periode korter wordt (alleen toegestaan in overleg met de aanbieder).*
- *Oprekken: aanpassen van de gewenste einddatum toewijzing zodat de periode langer wordt (alleen toegestaan in overleg met de aanbieder).*
- *Verwijderen: de einddatum van de toewijzing wordt gewijzigd zodat deze gelijk is aan de ingangsdatum van de toewijzing. Daarbij wordt RedenWijziging gevuld met 13 (Verwijderd). Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden.*

*De volgende wijzigingen in volume en maximaal budget zijn toegestaan:*

- *Volume wijzigen: Als de omvang is gespecificeerd met in Frequentie de waarde "Totaal binnen geldigheidsduur toewijzing", dan mag Volume worden aangepast.
Indien dit op verzoek van de aanbieder is, mag dit zonder overleg worden aangepast door de gemeente.
Indien de gemeente het initiatief tot aanpassing van het volume neemt, mag dit alleen in overleg met en na instemming van de aanbieder worden aangepast.*
- Budget wijzigen: Als Budget op verzoek van de aanbieder wordt gewijzigd, mag dit zonder overleg worden aangepast door de gemeente.

Indien de gemeente het initiatief tot aanpassing van het maximale budget neemt, mag dit alleen in overleg met en na instemming van de aanbieder worden aangepast.

*De meest recente toewijzing op toewijzingsdatum en -tijd is bepalend voor de inhoud van de toewijzing.*

**OP033x2:**

*Het gebruik van status aanlevering met waarde 2 (een berichtklasse is gewijzigd) is niet toegestaan. Wijzigingen en correcties kunnen daarom niet altijd in één bericht worden doorgegeven.*

**OP039:**

*In het berichtenverkeer mogen ketenpartijen cliëntgegevens doorgeven zoals deze in de administratie van de betreffende ketenpartij voorkomen, mits deze gegevens geen onderdeel zijn van een logische sleutel. Het staat ketenpartijen vrij om gewijzigde gegevens uit het berichtenverkeer over te nemen in hun administratie.*

**OP043:**

*Indien aan een cliënt een PGB is toegekend is, mag op hetzelfde moment voor hetzelfde product geen toewijzing zijn afgegeven. Een toewijzing eindigt (uiterlijk) op de dag voorafgaand aan de ingangsdatum van het PGB.*

**OP047:**

*Als een bericht niet aan de geldende standaard voldoet, mag het bericht afgekeurd worden.*

**OP065:**

*Een retourbericht bevat alleen informatie over cliënten waarvan berichtklassen zijn afgekeurd. Cliënten waarvan alle berichtklassen volledig zijn goedgekeurd worden dus niet mee teruggestuurd in het retourbericht.*

**OP071:**

*Elke relatie krijgt een uniek nummer per gemeente per cliënt. Dit nummer mag niet gewijzigd worden.*

**OP072:**

*Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beëindigd is. In het bericht moet gerefereerd worden aan de start van de levering.*

**OP076:**

*Van iedere contactpersoon (relatie) moet worden opgegeven in welke relatie deze tot de cliënt staat. Gegevens over een contactpersoon mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de cliënt.*

**OP079:**

*Het is verplicht om gebruik te maken van het BSN van de cliënt in de onderlinge uitwisseling van gegevens.*

**OP080:**

*Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten. Hoewel ongewenst kan het noodzakelijk zijn een bericht met terugwerkende kracht te moeten versturen, bijvoorbeeld als gevolg van een bezwaarprocedure.*

**OP086:**

*Ondersteuningsproducten met een inspannings- of outputgerichte uitvoering worden altijd door de gemeente toegewezen met een toewijzingsbericht.*

**OP087:**

*Een toewijzingsbericht bevat voor 1 cliënt altijd alle toewijzingen voor 1 aanbieder die op of na de aanmaakdatum van het bericht geldig zijn plus alle toewijzingen die gewijzigd zijn ten opzichte van het voorgaande toewijzingsbericht.*

Deze regel is van toepassing indien voor 1 cliënt  meerdere producten toegewezen zijn. Alle geldige toewijzingen binnen 1 cliënt, voor 1 aanbieder worden in 1 toewijzingsbericht geplaatst en naar de betreffende aanbieder gestuurd inclusief de toewijzingen die gewijzigd zijn sinds het laatst verstuurde toewijzingsbericht voor deze cliënt en aanbieder. Denk hierbij aan intrekkingen die zijn gedaan en waar de aanbieder nog niet van op de hoogte is.

Toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 13 (Verwijderd) worden niet gezien als actuele toewijzing. Ook toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 01 (Administratieve correctie (vervallen)) worden niet gezien als actuele toewijzing.

Voor iedere cliënt waarbij een toewijzing verandert, wordt een toewijzingsbericht gestuurd voor alle actuele toewijzingen voor die aanbieder behorende bij die cliënt .

**OP090:**

*Voor ieder ontvangen heenbericht wordt binnen 3 werkdagen na ontvangst een retourbericht verzonden.*

De verzendende partij van het heenbericht is verantwoordelijk voor het signaleren van het ontbreken van een retourbericht en dient actie te ondernemen.

**OP090x2:**

*Indien voor een ontvangen heenbericht geen retourbericht kan worden gemaakt moet de ontvangende partij dit buiten het berichtenverkeer om melden aan de verzendende partij.*

**OP090x4:**

*Voor ieder ontvangen declaratiebericht wordt binnen 10 werkdagen na ontvangst een declaratie-antwoordbericht verzonden.*

Indien de gemeente niet binnen 10 werkdagen een declaratie-antwoordbericht kan versturen, neemt de gemeente buiten het berichtenverkeer om contact op met de aanbieder. De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van een declaratie-antwoordbericht en dient, indien er nog geen contact geweest is met de gemeente, actie te ondernemen.

**OP091:**

*Van een cliënt mogen aanvullende contactgegevens vastgelegd worden; er moet dan wel vastgelegd worden wat voor soort adres het betreft.*

**OP095:**

*Een bericht mag niet worden afgekeurd op basis van informatie waartoe de verzendende partij geen toegang heeft.*

**OP130:**

*Van de relatie moet altijd een naam worden vastgelegd, aangevuld met een volledig adres en/of een telefoonnummer.*

**OP155:**

*Een (tijdelijke) beëindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering.*

**OP179**: 

*De grootte van verzonden bestanden mag niet meer zijn dan 25 Mb.*

Deze regel wordt niet naar de techniek vertaald; daar waar grotere bestanden verwerkt kunnen worden is dat uiteraard toegestaan. Daar waar de grootte van bestanden tot problemen in de verwerking leidt, is deze regel bedoeld om duidelijk te maken dat de verzender de bestandsgrootte moet aanpassen.

OP186: 

Het beëindigen van een toewijzing op een datum die in het verleden ligt kan alleen in overeenstemming met de betreffende aanbieder

Deze regel is van toepassing op dié situaties waarin de aanbieder niet had kunnen weten dat hij geen ondersteuning meer mocht leveren.

**OP191**: 

*Het gebruik van ongestructureerde informatie dient tot een minimum beperkt te worden.*

Commentaar mag in de berichten gebruikt worden om extra informatie op te nemen. Het commentaar bevat een toelichting op de betreffende berichtklasse, die niet elders in het bericht kan worden opgenomen. Commentaar in het bericht mag geen tot een persoon herleidbare gegevens bevatten zonder toestemming van die persoon.

**OP192**: 

*Verzonden berichten moeten voldoen aan de technische eisen.*

1. Het berichtuitwisselingsformaat is XML.
2. 2. De bestandcodering is UTF-8.
3. 3. Het gebruik van Byte-Order-Mark (BOM) is niet toegestaan.
4. 4. Het einderegel teken is een combinatie van CR/LF (Windows einde-regel teken).
5. 5. Gebruik xml als bestandextensie voor het bestand waar het XML bericht in opgenomen is.

**OP252**: 

*Bij een (deels) onbekende geboortedatum moet aangegeven worden welk deel van de geboortedatum betrouwbaar is.*

**OP254**: 

*In de iJw berichten worden AGB-codes gebruikt voor routering van de berichten en voor identificatie van de aanbieder.*

**OP257:** 

*Bij een wijziging van de zorgvraag wordt voor het betreffende product een nieuwe toewijzing afgegeven.*

Bij een wijziging van de zorgvraag wordt voor het betreffende product een nieuwe toewijzing afgegeven of voor het betreffende product wordt een gewijzigde toewijzing gestuurd.

Bij het afgeven van een nieuwe toewijzing wordt een eventueel bestaande toewijzing beëindigd indien:

- De omvang van de te leveren ondersteuning wijzigt: er is meer of minder ondersteuning nodig op hetzelfde product dan vastgesteld in de bestaande toewijzing, behalve wanneer de omvang is gedefinieerd met een frequentie totaal binnen geldigheidsduur.
- Het product wijzigt: de cliënt heeft recht op een ander product dan vastgesteld in de bestaande toewijzing.

Het heeft de voorkeur een bestaande toewijzing aan te passen indien:

- De einddatum van de te leveren zorg of ondersteuning wijzigt (intrekken of oprekken)
- Het volume wijzigt bij een frequentie totaal binnen geldigheidsduur toewijzing
- Het maximaal budget wordt gewijzigd

**OP258:** 

*Bij een beëindiging van een toewijzing wordt de aanbieder hiervan op de hoogte gebracht met een toewijzingbericht.*

**OP259**

*Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld toe te wijzen.*

Gestapeld betekent dat voor een cliënt hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt toegewezen aan dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.

Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode of dezelfde productcategorie indien productcode niet gevuld is. Indien productcategorie leeg is, geldt dat er geen ander toegewezen product voor (gedeeltelijk) dezelfde periode naast mag staan.

Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing.  Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

**OP260:** 

*Een ondersteuningsproduct wordt omschreven als een Productcategorie en kan nader gespecificeerd worden met een Productcode.*

**OP261:** 

*Per ondersteuningsproduct wordt vastgelegd of de uitvoering inspanningsgericht, outputgericht of taakgericht is.*

**OP262:** 

*Voor ondersteuningsproducten met een inspanningsgerichte uitvoering wordt een tarief per tijdseenheid afgesproken behalve voor ondersteuningsproducten met de eenheid stuks (inspanning) daar wordt een tarief per stuk afgesproken.*

**OP263**: 

*Voor ondersteuningsproducten met een outputgerichte werkwijze wordt een tarief per stuk afgesproken of wordt afgesproken dat een bedrag in euro's over een vastgestelde periode wordt vastgesteld.*

Wanneer gemeenten en aanbieders kiezen voor een outputgerichte werkwijze moeten er duidelijke afspraken worden gemaakt over wat precies wordt verstaan onder de gewenste output en hoe kan worden vastgesteld hoe de output is behaald.

**OP264**: 

*Voor ondersteuningsproducten met een outputgerichte werkwijze wordt vastgesteld op welk moment gedeclareerd wordt.*

Bijvoorbeeld bij afronding van een traject, per behaalde mijlpaal of periodiek een vast bedrag.

OP267: 

*De aanbieder declareert in een eenheid die aansluit bij de toewijzing.*

**OP270**: 

*Aanbieder en gemeente maken onderling afspraken over de door te geven begin- en einddatum in de regieberichten.*

Het gebruik van de regieberichten is voor de uitvoeringsvarianten inspannings- en outputgericht verplicht. Binnen de Jeugdwet maken gemeente en aanbieder onderling afspraken welke datums gehanteerd moeten worden om de start en stop van de levering door te geven. Deze afspraak kan per product afwijken, maar dit heeft niet de voorkeur.

**OP271**: 

*De aanbieder verzendt een startbericht binnen vijf werkdagen na de daadwerkelijke datum waarop de ondersteuning gestart is.*

Indien de ondersteuning met terugwerkende kracht is toegewezen, binnen vijf werkdagen na ontvangst van het toewijzingbericht.

**OP272**: 

*De aanbieder verzendt een stopbericht binnen vijf werkdagen na de daadwerkelijke datum waarop de ondersteuning beeindigd is.*

Het verzenden van de definitieve stop, volgend op een tijdelijke stop, hoeft niet binnen 5 werkdagen na het stoppen van de levering te zijn. Wel moet het stopbericht binnen 5 werkdagen nadat bekend is dat de levering definitief gestopt is verstuurd worden.

**OP274**: 

*Na ontvangst van een verzoek om toewijzing stuurt de gemeente per aangevraagd product binnen 5 werkdagen ofwel een toewijzingbericht ofwel een antwoordbericht aan de aanbieder.*

Als een antwoordbericht in VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) bevat, dan wordt binnen 8 weken na dagtekening van het verzoek ofwel een toewijzing bericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) gestuurd. Er moet altijd uiteindelijk ofwel een toewijzingsbericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) worden gestuurd voor elk aangevraagd product uit het verzoek om toewijzing

**OP275**: 

*Iedere toewijzing binnen één gemeente heeft een uniek nummer per wettelijk domein.*

**OP276**:

*De aanbieder declareert voor een cliënt waarvoor de aanbieder een toewijzing ontvangen heeft.*

**OP279:**

De aanbieder declareert een product binnen de toegewezen periode.

**OP280:**

*Een declaratiebericht heeft betrekking op één declaratieperiode.*

Een declaratiebericht over een periode kan prestaties bevatten uit eerdere declaratieperioden.

**OP281:**

*Een declaratiebericht kan prestaties van één of meer cliënten bevatten.*

**OP283:**

*Iedere prestatie krijgt een uniek nummer (ProductReferentie) per aanbieder per wettelijk domein.*

**OP284:**

*Indien iedere declaratieperiode zorg is geleverd door de aanbieder, moeten de declaratieperioden aansluitend zijn in opvolgende declaratieberichten.*

Als gedurende een volledige declaratieperiode door de aanbieder geen zorg is geleverd, zal de aanbieder over die betreffende periode geen declaratie indienen. Tenzij in deze declaratieperiode correcties op voorgaande declaraties moeten worden verstuurd. Dit betekent dat er hiaten in de opvolgende declaratieperioden kunnen voorkomen. Het hiaat heeft altijd de duur van 1 of meer kalendermaanden.

Overlap van declaratieperiode is (voor correcties) toegestaan op de laatst ingediende declaratieperiode. Zie ook IV090.

**OP286:**

*Als de ontvanger van een heenbericht een technische fout constateert, keurt deze het bericht in zijn geheel af en laat hij dit weten aan de verzender.*

Het bericht moet daarmee functioneel als niet-verzonden worden beschouwd.

**OP288:**

*Indien de start van de levering gemeld is met een Startbericht, wordt de beëindiging van die levering altijd doorgegeven met een Stopbericht.*

Dit geldt ook wanneer de levering volgens plan en/of op de einddatum van de toewijzing beëindigd wordt.

**OP289:**

*Bij een toegewezen product kan slechts één startbericht actueel zijn.*

Op ieder moment kan er maar één begindatum zijn van een levering die gestart is naar aanleiding van één toegewezen product of productcategorie. Een startbericht kan dus nooit volgen op een startbericht voor hetzelfde toegewezen product, tenzij er voor dat toegewezen product een (tijdelijke) beëindiging is doorgegeven in een stopbericht, óf tenzij het een correctie betreft van het eerdere startbericht (zie IV008).

Let op: een product kan hierbij niet gevuld zijn (generiek) of bestaan uit alleen een productcategorie (aspecifiek) ofwel een productcategorie en een productcode (specifiek).

**OP295:**

*Het gebruik van regieberichten is verplicht.*

Het gebruik van de regieberichten is voor de uitvoeringsvarianten inspannings- en outputgericht verplicht. Een Stopbericht kan alleen worden verstuurd indien er een bijbehorend Startbericht aanwezig is. Bij leveringen gestart voor het verplicht stellen van de regieberichten (iWmo/iJw release 2.4) kan het zo zijn dat er geen Startbericht gestuurd is. Bij eindigen van de levering kan in dat geval geen Stopbericht worden verstuurd.

**OP296:**

*Het ingediende Verzoek om Toewijzing dient te passen binnen de gemaakte contractafspraken tussen gemeente en aanbieder.*

**OP297:**

*Indien de zorgverlenercode van de verwijzer bekend is, dient de aanbieder deze mee te geven in het verzoek om toewijzing.*

Indien bij de verwijzing van huisarts, Jeugdarts, Gecertificeerde instelling of Medisch specialist een zorgverlenerscode (AGB-code van het Zorgpartijtype Zorgverlener) is meegegeven, dient bij de verwijzing deze ZorgverlenerCode gevuld te worden. Indien de zorgaanbieder deze informatie niet heeft, mag worden volstaan met de naam van de verwijzer.

**OP298:**

*Het verlagen van het Volume bij de frequentie totaal binnen geldigheid toewijzing is alleen toegestaan na overleg met en instemming van de betreffende aanbieder.*

**OP299:**

*Het verlagen van het Budget is alleen toegestaan na overleg met en instemming van de betreffende aanbieder.*

Indien dit op verzoek van de aanbieder (via een verzoek om wijziging) is, mag dit zonder overleg worden aangepast door de gemeente.

**OP302:**

*De aanbieder declareert een zorg- of ondersteuningsproduct dat aansluit bij de toewijzing.*

De in de declaratie ingediende prestatie moet passen bij de toewijzing.

Dit betekent onder andere dat de prestatie hetzelfde óf (een) nader gespecificeerd(e) zorg- of ondersteuningsproduct bevat als de toewijzing.

- **Specifieke toewijzing**: (productcategorie en productcode zijn beiden gevuld in de toewijzing) wordt hetzelfde zorg- of ondersteuningsproduct gedeclareerd, ofwel dezelfde combinatie van productcategorie en productcode.
- **Aspecifieke toewijzing**: (in de toewijzing is alleen productcategorie gevuld, productcode is leeg) worden 1 of meer nader gespecificeerde zorg- of ondersteuningsproducten gedeclareerd. Dat betekent dat de aanbieder binnen de toegewezen productcategorie 1 of meer productcode(s) declareert die volgens de gehanteerde productcodelijst horen bij die productcategorie.
- **Generieke toewijzing**: (in de toewijzing is alleen het budget gevuld, productcategorie en productcode zijn leeg), declareert de aanbieder 1 of meer productcategorie(en) met bijpassende productcode(s) passend binnen het afgesproken contract met de gemeente.

**OP303:**

*Het declaratie-antwoordbericht bevat alle informatie om het bericht administratief te verwerken.*

De aanbieder die een declaratie-antwoordbericht ontvangt kan op basis van de meegestuurde gegevens de reactie op de declaratie verwerken in haar systeem. Dit is vooral van belang wanneer van een ingediend declaratiebericht een deel van de ingediende prestaties niet wordt toegekend.

In het declaratie-antwoordbericht worden alleen de prestaties meegestuurd die zijn afgewezen. Daarbij wordt met een retourcode aangegeven wat de reden is dat de ingediende prestatie niet is toegekend.

Toegekende prestaties

Toegekende prestaties worden niet opgenomen in het retourbericht. Alleen de som van de ingediende bedragen van de toegekende prestaties wordt in de berichtklasse `DeclaratieAntwoord` van het declaratie-antwoordbericht opgenomen.

**OP304:**

*Een declaratie-antwoordbericht bevat alleen detailinformatie over cliënten waarvan berichtklassen zijn afgekeurd.*

Een declaratie-antwoordbericht bevat alleen detailinformatie over cliënten waarvan berichtklassen zijn afgekeurd Cliënten waarvan alle berichtklassen volledig zijn goedgekeurd worden dus niet mee teruggestuurd in het declaratie-antwoordbericht. Het declaratie-antwoordbericht bevat alleen cliënten waarvan in 1 of meer Prestaties fouten zijn geconstateerd. In dat geval wordt de berichtklasse Cliënt inclusief alle afgekeurde Prestaties retour gezonden, voorzien van de bijbehorende retourcodes.

**OP305:**

*Indien een product op inspanningsbasis in stuks is gecontracteerd, moet toegewezen worden met eenheid 84: Stuks (inspanning).*

**OP306:**

*Het verzoek om wijziging bericht (VOW) wordt gebruikt als tijdens levering van zorg en/of ondersteuning blijkt dat een ander pakket van toegewezen producten nodig is.*

Een verzoek om wijziging bericht wordt altijd verstuurd vanuit een situatie waarbij er al geleverd wordt op basis van een of meer actuele toewijzingen.

Het bericht bevat altijd de complete gewenste situatie inclusief de ongewijzigde, gewijzigde en nieuwe toewijzingen.

Een verzoek om wijziging bericht kan niet gebruikt worden als er geen actuele toewijzing is.

**OP307:**

*Een verzoek om toewijzing bericht (VOT) wordt alleen gebruikt indien een cliënt zich met een (wettelijke) verwijzing of een open beschikking meldt bij de zorgaanbieder.*

Een verzoek om toewijzing bericht wordt altijd verstuurd op basis van een (wettelijke) verwijzing of een open beschikking.

Voor het product en de toewijzingsperiode dat met het verzoek wordt aangevraagd is er nog geen toewijzing voor dat product.

Een verzoek om toewijzing bericht kan niet gebruikt worden als er al een actuele toewijzing is voor dat product voor die periode.

**OP308:**

*Een aanbieder vraagt met een verzoek om wijziging bericht (VOW) een samenhangend geheel aan toewijzingen aan met daarin de volledige gewenste situatie.*

Wanneer de aanbieder constateert dat de situatie van de cliënt verandert gedurende het leveren van zorg/ondersteuning, waardoor er een ander pakket aan zorg of ondersteuning nodig is, dan wordt dit kenbaar gemaakt met een verzoek om wijziging bericht, waarin de complete gewenste nieuwe situatie (van ongewijzigde, gewijzigde en of nieuw gewenste producten of productcategorieën) wordt aangegeven.

**OP343:**

*Een verzoek om wijziging (VOW) moet tijdig ingediend worden.*

De gemeente moet redelijkerwijs in staat zijn om op een wijzigingsverzoek te reageren voor de gewenste ingangsdatum is bereikt.

**OP344:**

*Een verzoek wordt door de gemeente uiteindelijk beantwoord met een toewijzing of een afwijzing.*

Een verzoek om toewijzing of verzoek om wijziging bevat 1 of meerdere toe te wijzen of te wijzigen producten.

De gemeente reageert hierop met een of meer toegewezen producten in een toewijzingbericht, of geeft met een antwoordbericht te kennen dat het verzoek wordt afgewezen.

Eventueel is er eerst onderzoek nodig voordat wordt toegewezen of afgewezen.

Bij een verzoek om wijziging is de reactie van de gemeente altijd op het niveau van het complete verzoek, bij een verzoek om toewijzing kan de gemeente besluiten om elk aangevraagd product apart al dan niet te honoreren.

**OP345:**

*Als de gewenste ingangsdatum van een te wijzigen product uit een verzoek om wijziging (VOW) in het verleden ligt, dan mag de nieuwe omvang of het nieuwe budget niet leiden tot onrechtmatigheid voor al gedeclareerde en of geleverde  zorg.*

**OP346:**

*Na ontvangst van een verzoek om wijziging bericht stuurt de gemeente binnen 5 werkdagen ofwel een toewijzingbericht ofwel een antwoordbericht aan de aanbieder. (Requirement).*

Als in het antwoordbericht VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) bevat, dan wordt uiterlijk binnen 8 weken na dagtekening van het verzoek ofwel een toewijzingbericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) gestuurd. Er moet altijd uiteindelijk ofwel een toewijzingbericht ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) worden gestuurd.

**OP347:**

*Het is niet toegestaan om een zorg- of ondersteuningsproduct gestapeld aan te vragen.*

Stapeling betekent dat voor een cliënt hetzelfde zorg- of ondersteuningsproduct meerdere keren wordt aangevraagd door dezelfde aanbieder voor (gedeeltelijk) dezelfde periode.

Hetzelfde zorg- of ondersteuningsproduct betekent dezelfde productcode of dezelfde productcategorie indien productcode niet gevuld is. Indien productcategorie leeg is, geldt dat er geen ander aangevraagd product voor (gedeeltelijk) dezelfde periode naast mag staan.

Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of er sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing.  Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

**OP348:**

*Bij honoreren van een Verzoek om Wijziging (VOW) dient het aangevraagde overgenomen te worden in het toewijzingsbericht.*

Het toewijzingsbericht wordt gevuld conform IV093. De ingangsdatum en einddatum van de toewijzing kan afwijken van de in de VOW gevraagde data in het geval van toewijzen met terugwerkende kracht. Het ToewijzingNummer wijkt af indien voor de gevraagde wijziging een nieuwe toewijzing afgegeven moet worden (conform OP257 en IV066).

**OP349:**

*Iedere declaratie krijgt een uniek declaratienummer per aanbieder per wettelijk domein.*

**OP350:**

*Het is niet toegestaan een verzoek om wijziging of verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld.*

Als een verzoek is beantwoord met een retourbericht dat aangeeft dat er geen technische fouten zijn, dan is vanaf dat moment het verzoek in behandeling bij de gemeente. Totdat er ofwel een afkeur is gestuurd ofwel is gehonoreerd met een toewijzing, mag er door dezelfde aanbieder geen nieuw verzoek verzonden worden voor dezelfde cliënt.

**OP354:**

*Zorg of ondersteuning geleverd aan een cliënt tijdens een bepaalde declaratieperiode wordt direct in de erop volgende declaratieperiode of achteraf in een latere declaratieperiode gedeclareerd.*

**OP355:**

*Ieder ontvangen declaratie-antwoordbericht is gerelateerd aan een eerder ontvangen declaratiebericht.*

De koppeling kan zowel op berichtniveau als op declaratieniveau plaatsvinden.

**OP359:**

*Indien een verzoek om toewijzing wordt afgewezen op basis van het woonplaatsbeginsel, dient de gemeente dit binnen de wettelijke termijn van 2 weken af te wijzen en de financieel verantwoordelijke gemeente terug te geven aan de aanbieder met een antwoordbericht.*

**OP360:**

*Een prestatie mag alleen worden gecrediteerd indien deze niet eerder is gecrediteerd.*

**OP361:**

*Iedere aanvraag van een product in een verzoek om toewijzing (VOT) of Verzoek om wijziging (VOW) krijgt een uniek referentienummer per aanbieder per wettelijk domein.*

**OP362:**

*Het verwijderen van een toewijzing mag alleen indien dit niet leidt tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg.*

**OP363:**

*Bij een output- of inspanningsgerichte werkwijze meldt de aanbieder een start en stop van de ondersteuning van producten waarvoor een toewijzing is ontvangen.*

**OP364:**

*Regieberichten worden niet voorwaardelijk gesteld aan declaratie*

Het is niet toegestaan ingediende prestaties in een declaratiebericht af te keuren op basis van de start- en stopdatum in het regiebericht, of op basis van het ontbreken van een start- of stopbericht.

**OP365:**

*De aanbieder declareert een zorg- of ondersteuningsproduct met een omvang die aansluit bij de toewijzing en/of gecontracteerde afspraken.*

**OP366:**

*Een prestatieregel moet eerst volledig worden gecrediteerd voordat er een correctie op deze prestatieregel kan worden ingediend.*

Omdat een prestatieregel eerst volledig gecrediteerd moet worden alvorens er een correctie op deze prestatieregel ingediend kan worden, is het noodzakelijk dat bij de verwerking van de declaratieberichten eerst de creditregels verwerkt worden, en pas daarna de debetregels.

**OP367:**

*Een productperiode valt altijd binnen een kalendermaand.*

**OP368:**

*Een productperiode valt altijd binnen de geldigheidsperiode van een toewijzing.*

**OP377:**

*Alleen een tijdelijke stop mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stop.*

Een stop moet volgen op een startbericht. De enige uitzondering hierop is een definitieve stop die kan volgen op een startbericht of een tijdelijke stop.

**OP378:**

*Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan.*

**OP379:**

*Na een (tijdelijke) stop is het toegestaan een start te sturen.*

**OP380:**

*Het verplaatsen van de einddatum in de toekomst van de bestaande toewijzing voor het verlengen van de zorg of ondersteuning is verplicht in een aantal gevallen.*

Deze werkwijze is verplicht indien de toewijzing aan alle onderstaande voorwaarden voldoet:

- het volume blijft gelijk of is leeg.
- de frequentie is leeg of ongelijk aan totaal binnen geldigheidsduur toewijzing en blijft gelijk.
- de einddatum van de bestaande toewijzing is niet verstreken op het moment dat de toewijzing wordt opgerekt en verstuurd.

---

# Invulinstructies (IV-regels)

**IV002:**

*Hoe om te gaan met de adressering indien er sprake is van een organisatie?*

Alleen vullen indien cliënt en/of relatie cliënt in instelling verblijft.

**IV007:**

*Hoe wordt de naam van een cliënt of relatie vastgelegd?*

Van een cliënt of relatie worden de achternaam, voorvoegsel en voornamen en/of voorletters gescheiden vastgelegd. Voor het vastleggen van de VolledigeNaam van een cliënt geldt het volgende format:

- De Geslachtsnaam wordt altijd vastgelegd. Deze bestaat uit de Naam en eventueel een Voorvoegsel;
- De Partnernaam kan worden vastgelegd. Ook deze bestaat uit de Naam en eventueel een Voorvoegsel;
- Voornamen kunnen worden vastgelegd, gescheiden door spaties;
- Voorletters kunnen worden vastgelegd, aaneengesloten, zonder punten of spaties;
- NaamGebruik geeft de gewenste aanspreekvorm aan. Hiermee wordt bij correspondentie de volgorde bepaald in het gebruik van de geslachtsnaam en de naam van de partner. Het vullen van NaamGebruik hangt dus af van hoe de cliënt of relatie zijn/haar naam hanteert.

**IV008:**

*Hoe moet worden omgegaan met correcties van de regieberichten?*

Voor de regieberichten (start- en stopbericht) bestaat de mogelijkheid om eerder verstuurde berichtklassen te corrigeren. Hiervoor wordt eerst de betreffende berichtklasse verwijderd en wordt vervolgens (eventueel) een nieuwe berichtklasse verstuurd.
Om aan te geven dat een berichtklasse dient te worden verwijderd wordt StatusAanlevering van de betreffende berichtklasse gevuld met de waarde 3 (verwijderen aanlevering). De te verwijderen berichtklasse wordt geidentificeerd door de logische sleutel van de klasse.

Eventueel kan in hetzelfde bericht ook de vervangende berichtklasse worden aangeleverd; in deze berichtklasse wordt StatusAanlevering gevuld met de waarde 1 (eerste aanlevering).

Of de vervangende berichtklasse kan worden aangeleverd in hetzelfde bericht of dat een nieuw bericht nodig is, is afhankelijk van het berichtelement dat gecorrigeerd moet worden. Dat heeft te maken met de logische sleutels:

1. Het te corrigeren berichtelement (ToewijzingNummer, Product, Begindatum) is onderdeel van de logische sleutel: de correctie kan in hetzelfde bericht worden doorgegeven. Beide berichtklassen hebben een unieke logische sleutel.
2. Het te corrigeren berichtelement (ToewijzingIngangsdatum) is geen onderdeel van de logische sleutel: de correctie moet in een apart bericht worden doorgegeven. De gecorrigeerde en de originele berichtklasse hebben dezelfde logische sleutel. Binnen een (1) bericht wordt hierop afgekeurd omdat de software dit interpreteert als dat er twee keer dezelfde berichtklasse is opgenomen.

Uiteraard moet worden voorkomen dat een nieuwe aanlevering eerder wordt verwerkt dan de correctie (verwijdering). Het is daarom te adviseren om waar mogelijk de correctie (verwijdering) en nieuwe aanlevering in hetzelfde bericht op te nemen.

**IV009:**

*Hoe moet worden omgegaan met een geboortedatum?*

Wanneer de Geboortedatum niet volledig of onbekend is, dan wordt het deel dat wel bekend is gebruikt en wordt voor de overige delen de waarde 01 (dag en maand) of 1900 (jaar) gebruikt. Het element DatumGebruik geeft aan welk deel van de datum bekend is en dus te gebruiken.

Voorbeelden:

- Een volledig onbekende geboortedatum wordt 01-01-1900
- Is alleen bekend dat de geboorte in 1953 was, dan wordt de geboortedatum 01-01-1953
- Is alleen bekend dat de geboorte in september 1949 was, dan wordt de geboortedatum 01-09-1949

**IV013:**

*Welke toewijzing is het meest recent?*

Om vast te kunnen stellen welke toewijzing het recentst is, zijn Toewijzingsdatum en Toewijzingstijd in het toewijzingbericht opgenomen. De gemeente vult deze velden met de datum en de tijd waarop de toewijzing definitief is vastgesteld. Het gaat hier om het moment waarop de gemeente de toewijzing vaststelt en niet om het moment van verzending van het bericht. De toewijzing met de meest recente Toewijzingsdatum en Toewijzingstijd is de actuele toewijzing.
Als een aanbieder de gemeente verzoekt om een bestaande toewijzing nog een keer te versturen, blijft de inhoud van Toewijzingsdatum en Toewijzingstijd onveranderd.
Een aanpassing van het volume of de einddatum in de toewijzing moet beschouwd worden als een gewijzigde toewijzing. De gemeente vult Toewijzingsdatum en Toewijzingstijd met de datum en tijd waarop de gemeente de aanpassing vaststelt.

**IV024:**

*Hoe moeten bedragen worden gevuld?*

Bedragen worden in 1/100 van de gehanteerde valuta opgenomen. Als er sprake is van de euro (EUR), dan is als voorbeeld 10000 gelijk aan tienduizend eurocent oftewel 100 euro.

**IV028:**

*Hoe wordt een retourbericht opgesteld?*

Een retourbericht wordt gestuurd om de zender te informeren over de beoordeling (technisch/inhoudelijk) van het heenbericht. Voor ieder heenbericht wordt slechts 1 retourbericht gestuurd (1-op-1). De ontvanger stuurt altijd een retourbericht naar de verzender.
Deze invulinstructie heeft betrekking op bijna alle retourberichten. Voor het declaratie-antwoordbericht (325-bericht) is een aparte invulinstructie opgesteld (IV087).
Een retourbericht wordt als volgt opgebouwd:
Een retourbericht bevat altijd een Header.

- In de Header wordt BerichtCode gevuld met de berichtcode van het betreffende retourbericht.
- Overige elementen, inclusief Afzender en Ontvanger, worden ongewijzigd overgenomen van de header van het heenbericht.
- De Header wordt aangevuld met identificerende gegevens van het retourbericht (IdentificatieRetour en DagtekeningRetour) en kan worden aangevuld met het versienummer van de XSLT's die gebruikt zijn om het bericht te controleren. Dit laatste is verplicht indien afkeur plaatsvindt op basis van de XSLTs.
Wat na de Header volgt is afhankelijk van of en op welk controleniveau fouten zijn geconstateerd:

Er zijn geen fouten geconstateerd:
Wanneer geen fouten geconstateerd zijn, is het heenbericht volledig goedgekeurd. Het retourbericht bevat in dat geval alleen een Header, zonder retourcodes.

Controleniveau 1: Er zijn fouten geconstateerd bij XSD-validatie
Indien het bericht niet valideert tegen het XSD krijgt de afzender een foutmelding. Er wordt geen retourbericht verzonden.

Controleniveau 2: Er zijn fouten geconstateerd bij XSLT-validatie
Voor alle regels die binnen een bericht gecontroleerd kunnen worden, maar die niet via het XSD gevalideerd kunnen worden, zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren. Wanneer een bericht een fout oplevert bij een controle op één van deze
regels wordt alleen de Header retour gestuurd met de algemene retourcode 0001 (Bericht is afgekeurd om technische redenen).
Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven.

Controleniveau 3 of 4: Er zijn fouten geconstateerd op berichtoverstijgende controles of controles tegen een externe bron
Indien er een fout geconstateerd is in de Header, bevat het retourbericht alleen de Header met daarbij de retourcode van de regel op basis waarvan de fout geconstateerd is.
Indien in één of meer berichtklassen over een Cliënt fouten zijn geconstateerd, worden alle berichtklassen van die Cliënt ongewijzigd overgenomen in het retourbericht. Bij iedere berichtklasse wordt telkens met een retourcode aangegeven wat de status is:

- Geen fouten geconstateerd in deze berichtklasse: retourcode 0200
- Deze berichtklasse is niet gecontroleerd: retourcode 0233
- Er is een fout geconstateerd in deze berichtklasse: de retourcode van de regel op basis waarvan de fout geconstateerd is.
Bijvoorbeeld: De gemeente ontvangt een startbericht met daarin een StartProduct met StatusAanlevering 3 (verwijderen aanlevering), maar heeft niet eerder een startbericht met hetzelfde StartProduct en StatusAanlevering 1 (eerste aanlevering) ontvangen. Het bericht wordt dan afgekeurd op basis van TR063.
In het retourbericht worden in deze situatie de volgende retourcodes gevuld:
- Header: Retourcode 0200 (Geen opmerkingen over deze berichtklasse)
- Cliënt: Retourcode 0200 (Geen opmerkingen over deze berichtklasse)
- StartProduct: Retourcode 9063 (Het bericht kan niet verwerkt worden omdat geen eerder bericht ontvangen is)

**IV032:**

*Welke retourcode moet gevuld worden in het retourbericht?*

Welke retourcode gevuld moet worden, wordt bepaald door controle op basis waarvan het bericht wordt afgekeurd. Deze controles zijn beschreven als technisch te controleren regels die op verschillende niveaus gecontroleerd worden. Bij iedere technisch te controleren regel is aangegeven op welk controleniveau deze gecontroleerd wordt. Indien van toepassing is ook aangegeven welke retourcode gebruikt moet worden in het retourbericht indien op basis van de regel een heenbericht wordt afgekeurd.
Deze invulinstructie heeft betrekking op bijna alle retourberichten. Voor het declaratie-antwoordbericht (325-bericht) is een aparte invulinstructie opgesteld (IV088).
Een ontvangen heenbericht wordt op vier niveaus gecontroleerd:
Controleniveau 1: berichtformaat (XSD)
Het bericht wordt gevalideerd tegen het XSD.

Indien het bericht niet valideert, krijgt de afzender een foutmelding. Er wordt geen retourbericht verzonden. Regels op dit controleniveau hebben daarom geen retourcode.

Controleniveau 2: berichtinhoud (XSLT)
Het bericht wordt gecontroleerd tegen alle regels (technische regels, condities en constraints) die binnen het bericht zelf te controleren zijn. Voor deze regels zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren.

Deze regels hebben een algemene retourcode (0001) die gevuld wordt in het retourbericht.
Wanneer fouten worden geconstateerd bevat het retourbericht alleen de Header met retourcode 0001 (Bericht is technisch onjuist). Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven.

Controleniveau 3: berichtoverstijgend
Het bericht wordt gecontroleerd op alle technische regels die berichtoverstijgend zijn. Dat wil zeggen dat de informatie in het heenbericht gecontroleerd wordt ten opzichte van informatie in één of meer eerder ontvangen domeinspecifieke berichten.

Deze regels hebben een eigen retourcode die gevuld wordt in het retourbericht bij de berichtklasse waarin de fout geconstateerd is. Indien een fout geconstateerd is, leidt dit tot volledige afkeur van het bericht.

Controleniveau 4: externe bron
Het bericht wordt gecontroleerd op alle technische regels waarvoor informatie nodig is die geen onderdeel is van het iStandaarden berichtenverkeer. Dit betreft bijvoorbeeld:

- Systeemdatum van de verzender/ontvanger;
- Een externe codelijst zoals de AGB-codelijst of de gemeentelijke indeling van CBS;
- Bilaterale afspraken tussen ketenpartijen, zoals contractafspraken die opgenomen zijn in een regel binnen de iStandaarden.

Deze regels hebben een eigen retourcode die gevuld wordt in het retourbericht bij de berichtklasse waarin de fout geconstateerd is. Indien een fout geconstateerd is, leidt dit tot volledige afkeur van het bericht.

**IV033:**

*Hoe moet XsltVersie gevuld worden?*

Wanneer de ontvanger fouten constateert in een bericht op basis van de ter beschikking gestelde XSLTs, wordt in het retourbericht aangegeven welke XSLT-versie gebruikt is voor de controle. Dit versienummer is opgenomen in de output van de XSLTs en dient overgenomen te worden in het retourbericht.

**IV034:**

*Hoe moet XsdVersie gevuld worden?*

De waarde voor de elementen BasisschemaXsdVersie en BerichtXsdVersie in het datatype CDT_XsdVersie moeten overgenomen worden uit de schemadefinitie (XSD) waarop het bericht gecreëerd/gebaseerd is. Deze waarden staan in de schemadefinitie respectievelijk in /xs:schema/xs:annotation/xs:appinfo/<namespace>:BasisschemaXsdVersie en /xs:schema/xs:annotation/xs:appinfo/<namespace>:BerichtXsdVersie.
Voor "<namespace>" wordt de namespace van de desbetreffende  iStandaard ingevuld, bijv. 'iJw', 'iWmo', enz.

**IV042:**

*Hoe moet de omvang van te leveren of geleverde ondersteuning gevuld worden?*

In het verzoek om toewijzing en in de toewijzing wordt de omvang van de te leveren ondersteuning opgegeven in het berichtelement Omvang, dat bestaat uit de elementen Volume, Eenheid en Frequentie. Deze elementen dienen in onderlinge samenhang gevuld te worden.

In het declaratiebericht wordt de omvang van de geleverde ondersteuning tijdens de betreffende productperiode opgegeven in de berichtelementen GeleverdVolume en Eenheid. Deze elementen dienen in onderlinge samenhang gevuld te worden.

Als Eenheid de waarde 83 (Euro's) bevat, wordt in GeleverdVolume een bedrag gevuld in eurocent. Bijvoorbeeld 10000 is gelijk aan tienduizend eurocent oftewel 100 euro.

Als Eenheid een andere waarde dan 83 (Euro's) bevat, wordt GeleverdVolume gevuld met een geheel getal, zonder decimalen.

Voorbeelden

Voorbeeld 1A:
In een inspanningsgerichte toewijzing wordt aangegeven dat een cliënt recht heeft op 5 dagdelen per week ondersteuning. Omvang in de toewijzing wordt als volgt gevuld:
Volume: 5
Eenheid: 16 (Dagdeel (4 uur))
Frequentie: 2 (Per week)

Voorbeeld 2A:
In een outputgerichte toewijzing wordt aangegeven dat een cliënt ondersteuning krijgt voor een vast bedrag van 200 euro per maand. Omvang in de toewijzing wordt als volgt gevuld:
Volume: 20000
Eenheid: 83 (Euro's)
Frequentie: 4 (Per maand)

Voorbeeld 1B:
In een declaratie wordt aangegeven dat in de afgelopen productperiode in totaal 20 dagdelen ondersteuning is geleverd. Dit wordt als volgt aangegeven in het declaratiebericht:
GeleverdVolume: 20
Eenheid: 16 (Dagdeel (4 uur))

Voorbeeld 2B:
In een declaratie wordt aangegeven dat in de afgelopen productperiode ondersteuning is geleverd volgens het vaste, afgesproken maandbedrag van 200 euro. Dit wordt als volgt aangegeven in het declaratiebericht:
GeleverdVolume: 20000
Eenheid: 83 (Euro's)

**IV045:**

*Hoe wordt de voogd vastgelegd indien dit een organisatie betreft?*

Indien de voogdij voor een cliënt bij een organisatie ligt, wordt in de Relatie de organisatienaam opgenomen als Geslachtsnaam, aangeduid met NaamGebruik 6 (niet-natuurlijk persoon).

**IV046:**

*Welke gemeentecode moet gevuld worden?*

In de header van de berichten wordt de gemeente opgenomen die volgens de wet verantwoordelijk is voor zorg of ondersteuning aan de cliënt. Voor aanduiding van de gemeente wordt de CBS codelijst gehanteerd.

**IV047:**

*Hoe om te gaan met de adressering van een cliënt indien alleen een briefadres bekend is?*

Van een cliënt wordt in de toewijzing altijd het GBA adres of verblijfadres meegegeven in de Contactgegevens. Dit is alleen niet mogelijk indien een cliënt in de basisregistratie personen (BRP) is ingeschreven met alleen een briefadres. Voor die situaties kan bij een Cliënt een Adres met Soort Correspondentie-adres worden meegegeven.

**IV052:**

*Hoe om te gaan met Beschikkingnummer in Verzoek om toewijzing?*

De aanbieder dient het beschikkingnummer mee te geven in het Verzoek om Toewijzing bericht indien de cliënt van haar gemeente een beschikking heeft gekregen.
De gemeente kan op basis van het beschikkingnummmer eenvoudig de bestaande beschikking koppelen aan de informatie uit het Verzoek Om Toewijzing bericht.

**IV066:**

*Wanneer krijgt een toewijzing een nieuw ToewijzingNummer?*

Een initiële toekenning van een product aan een cliënt is een nieuwe toewijzing en krijgt een nieuw toewijzingnummer. Een initiële toekenning kent nooit een RedenWijziging.
Indien een eerder afgegeven toewijzing gewijzigd wordt (intrekken, oprekken, verwijderen of corrigeren), wordt het ToewijzingNummer gevuld van de initiële toekenning. De start-, stop en declaratieberichten refereren naar het ToewijzingNummer uit het toewijzingbericht. Het (opnieuw) versturen van een bericht heeft geen invloed op ToewijzingNummer.

Let op: wijzigen van een toewijzing is slechts beperkt toegestaan (Zie ook OP33x1):

- de toewijzing kan worden verwijderd
- de einddatum kan worden aangepast
- het budget kan worden aangepast
- de omvang kan worden aangepast indien de frequentie de waarde 6 (Totaal binnen geldigheidsduur toewijzing) heeft.
Indien de omvang bij andere frequenties dan Totaal binnen geldigheidsduur toewijzing gewijzigd wordt, betekent dat dat de bestaande toewijzing wordt ingetrokken en een nieuwe toewijzing wordt verzonden met als Ingangsdatum de datum waarop de gewijzigde omvang ingaat. Dit betreft dan een nieuwe initiele toekenning met een nieuw ToewijzingNummer.

**IV074:**

*Wat is het verschil tussen de verschillende uitvoeringsvarianten?*

De iStandaarden ondersteunen een aantal verschillende uitvoeringsvarianten: inspanningsgericht, outputgericht en taakgericht. De specifieke eigenschappen van deze uitvoeringsvarianten zijn beschreven in het document Handreiking uitvoeringsvarianten, deze is beschikbaar via [www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw](http://www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw).

**IV075:**

*Hoe moeten productgegevens gevuld worden?*

Welke productcodes gebruikt mogen worden in het berichtenverkeer is afhankelijk van bilaterale afspraken. Er is een landelijke codelijst 021 - PRODUCTCODE beschikbaar. Gemeente en aanbieder leggen in de contractafspraken vast of deze codelijst gebruikt wordt. Het is ook mogelijk dat gemeenten een eigen productcodelijst gebruiken.

Bij het aanvragen van een product via een VOT of een VOW wordt Product in AangevraagdProduct (VOT) of NieuwProduct (VOW) gevuld afhankelijk van de gewenste toewijzingsvariant:

- Bij het aanvragen van een specifieke toewijzing moet zowel de productcategorie als de productcode gevuld worden.
- Bij het aanvragen van aspecifieke toewijzingen moet alleen de productcategorie gevuld zijn.
- Bij het aanvragen van generieke toewijzingen is het product leeg; de productcategorie en de productcode zijn niet gevuld.

Voor het vullen van het Product in Start- en Stopberichten (bij inspannings- en outputgerichte uitvoeringsvariant) en Declaratieberichten is de vulling afhankelijk van ToegewezenProduct in de bijbehorende Toewijzing:
In een Startbericht (305) of Stopbericht (307) wordt altijd hetzelfde zorg- of ondersteuningsproduct opgenomen zoals meegegeven in het Toewijzingsbericht (301).

- Bij specifieke toewijzingen moet in het Start- en Stopbericht zowel de productcategorie als de productcode gevuld worden.
- Bij aspecifieke toewijzingen moet in het Start- en Stopbericht alleen de productcategorie gevuld zijn.
- Bij generieke toewijzingen is het product leeg; de productcategorie en de productcode zijn niet gevuld.

In een Declaratiebericht (323) wordt altijd een productcategorie en productcode gevuld.

- Indien in ToegewezenProduct de productcategorie en productcode niet gevuld zijn (generieke toewijzing met maximaal budget) dan wordt de productcategorie en productcode gevuld behorend bij de levering (gebaseerd op de productcodelijst die gebruikt moet worden). Dit betekent dat op 1 ToegewezenProduct meerdere prestatieregels voor dezelfde periode kunnen volgen indien meerdere producten uit dezelfde of verschillende productcategorieën zijn geleverd.
- Indien in ToegewezenProduct alleen een productcategorie is gevuld (aspecifieke toewijzing), wordt deze productcategorie overgenomen en wordt een bij de toegewezen productcategorie behorende productcode (volgens de productcodelijst die gebruikt moet worden) gevuld. Dit betekent dat op 1 ToegewezenProduct meerdere prestaties voor dezelfde periode kunnen volgen indien meerdere producten van dezelfde productcategorie zijn geleverd.

**IV076:**

*Hoe moet het volume in de prestatie gevuld worden, wanneer de toewijzing de frequentie week heeft?*

De productperiode binnen een declaratieperiode is altijd maximaal een kalendermaand. Als ToegewezenProduct de frequentie per week heeft, is het mogelijk dat de week verdeeld is over 2 productperiodes (kalendermaanden). Bijvoorbeeld wanneer halverwege een week een nieuwe maand begint. Voor het bepalen van het volume behorend bij de productperiode zijn twee methoden (voor inspanningsgerichte toewijzing en voor outputgerichte toewijzing).

Methode bij Inspanningsgerichte toewijzing
De datum van levering bepaalt in welke productperiode de leveringen worden ingediend.
De productperiode bevat het te declareren volume van alle leveringen op dagen die vallen in de betreffende productperiode. Bij weken die vallen over 2 productperioden bepaalt de datum van levering in welke ProductPeriode de levering opgenomen wordt.

Voorbeeld:
Toewijzing:     11-07-2022 t/m 04-09-2022 voor 3 uur per week
Levering:    elke week op donderdag 2,5 uur

Declaratieperiode juli
Declaratieperiode:    01-07-2022 t/m 31-07-2022
Productperiode:        11-07-2022 t/m 31-07-2022
Volume:            7,5 (3 leveringen x 2,5 uur = 7,5 uur)
Controle maximaal volume 9 (3 weken x 3 uur = 9 uur)

Declaratieperiode augustus
Declaratieperiode:    01-08-2022 t/m 31-08-2022
Productperiode:        01-08-2022 t/m 31-08-2022
Volume:            10 (4 leveringen x 2,5 uur = 10 uur)
(n.b. in week 35 valt de levering op donderdag 01-09, dus deze levering zit in ProductPeriode september)

Controle maximaal volume 15 (5 weken x 3 uur= 15 uur)

Declaratieperiode september
Declaratieperiode:    01-09-2022 t/m 30-09-2022
Productperiode:        01-09-2022 t/m 04-09-2022
Volume:            2,5 (1 leveringen x 2,5 uur = 2,5 uur)
Controle maximaal volume 3 (1 week x 3 uur= 3 uur)

Controle maximaal volume over toewijzingsperiode 24 uur
11-07-2022 t/m 04-09-2022 = 8 weken
8 weken x 3 uur = 24 uur

Methode bij Outputgerichte toewijzing
De productperiode bevat het te declareren volume van de weken waarvan de zondag valt in de productperiode.

Hierop is één uitzondering:
Indien een toewijzing niet op een zondag eindigt wordt het te declareren volume van de laatste (gebroken) week opgenomen in de productperiode waarbinnen de laatste zondag van de toewijzing valt.

Beide situaties worden met een voorbeeld toegelicht:

Voorbeeld 1 (toewijzing eindigt op een zondag):
Toewijzing:     11-07-2022 t/m 04-09-2022 voor 300 euro per week

Declaratieperiode juli
Declaratieperiode:   01-07-2022 t/m 31-07-2022
Productperiode:        11-07-2022 t/m 31-07-2022
Volume:            Aantal zondagen in de productperiode * 300 euro (900 euro)

Declaratieperiode augustus
Declaratieperiode:    01-08-2022 t/m 31-08-2022
Productperiode:        01-08-2022 t/m 31-08-2022
Volume:            Aantal zondagen in de productperiode * 300 euro (1200 euro)

Declaratieperiode september
Declaratieperiode:    01-09-2022 t/m 30-09-2022
Productperiode:        01-09-2022 t/m 04-09-2022
Volume:            Aantal zondagen in de productperiode * 300 euro (300 euro)

Voorbeeld 2 (toewijzing eindigt niet op een zondag):
Toewijzing:     11-07-2022 t/m 03-09-2022 voor 300 euro per week

Declaratieperiode juli
Declaratieperiode:    01-07-2022 t/m 31-07-2022
Productperiode:        11-07-2022 t/m 31-07-2022
Volume:            Aantal zondagen in de productperiode * 300 euro (900 euro)

Declaratieperiode augustus
Declaratieperiode    01-08-2022 t/m 31-08-2022
Productperiode        01-08-2022 t/m 31-08-2022
Volume            Aantal zondagen in de productperiode + 1 * 300 euro (1500 euro)

Declaratieperiode september
Over september wordt er geen declaratie meer ingediend. De laatste week, die gedeeltelijk in september valt, is al meegenomen in de declaratie over augustus.

**IV077:**

*Hoe moet het maximaal te declareren volume berekend worden over de productperiode bij gebruik van de frequentie per week in de toewijzing?*

De frequentie per week is niet 1-op1 passend binnen de declaratieperiode maand. Hierdoor zijn bij de omrekening naar een maximaal te declareren volume over de productperiode  aanvullende afspraken noodzakelijk, zodat het volume in de prestatie gecontroleerd kan worden. Afhankelijk van de uitvoeringsvarianten zijn hiervoor verschillende rekenmethoden opgesteld. (voor het vullen van het volume in de prestatie bij toewijzingen met frequentie week, zie IV076)

Rekenmethode inspanningsgerichte toewijzing met frequentie per week
Het maximale volume wordt bepaald op basis van het aantal (eventueel gebroken) kalenderweken die de productperiode beslaat, binnen de toewijzing. Dit aantal wordt vermenigvuldigd met het volume uit de toewijzing. Voor het bepalen van het aantal kalenderweken, worden de weeknummers geteld.
Dit resulteert bij een productperiode van een volledige maand in 4, 5 of 6 maal het weekvolume.
Echter indien de toewijzing een Product uit de Wmo Productcategorie 01 (huishoudelijke hulp) betreft, dan wordt het maximale volume bepaald door standaard 6 maal het weekvolume uit de toewijzing te nemen.

Om te voorkomen dat deze rekenmethode resulteert in meer ruimte dan totaal toegewezen, moet het totaal volume over alle ingediende prestatieregels ook gecontroleerd worden tegen het maximale volume over de toewijzingsperiode.

Rekenmethode Outputgerichte toewijzing met frequentie per week
Het maximale volume van de productperiode wordt bepaald op basis van het aantal zondagen dat binnen de productperiode ligt (plus 1 indien in die productperiode de laatste zondag van de toewijzing ligt en de einddatum van de toewijzing geen zondag is). Dit aantal wordt vermenigvuldigd met het volume uit de toewijzing.

Voorbeeld bij inspanningsgerichte toewijzing:
Cliënt heeft een toewijzing voor 3 uur per week met ingangsdatum 11-10-2022 en einddatum 28-12-2022
Bepaal het aantal kalenderweken in de productperiode

- Oktober: 4 (week 41 t/m 44)
- November: 5 (week 44 t/m 48)
- December: 5 (week 48 t/m 52)
Maximaal volume per productperiode: Vermenigvuldig het aantal kalenderweken per productperiode met het toegewezen volume per week:.
- Oktober: 12 uur (4 weken x 3 uur)
- November: 15 uur (5 weken x 3 uur)
- December: 15 uur (5 weken x 3 uur)
Maximaal volume over de toewijzingsperiode: tel het aantal weken (eventueel gebroken) binnen de toewijzing en vermenigvuldig dit met het volume uit de toewijzing:
- 11-10-2022 t/m 28-12-2022 = week 41 t/m week 52 = 12 weken * 12 weken x 3 uur (volume uit de toewijzing) = 36 uur
Het maximale volume over de toewijzingsperiode is 36 uur

Voorbeeld bij Outputgerichte toewijzing:
Cliënt heeft een toewijzing voor 300 euro per week met ingangsdatum 11-10-2022 en einddatum 31-12-2022
Het aantal zondagen in de productperiodes:

- Oktober: 11-10 t/m 31-10 -> telt 3 zondagen
- November: 1-11 t/m 30-11 -> telt 4 zondagen
- December: 1-12 t/m 31-12 -> telt 4 zondagen. Daar wordt een weekvolume bijgeteld, omdat de einddatum van de toewijzing niet op zondag is.
Maximaal volume per productperiode: Het aantal zondagen vermenigvuldigd met het volume uit de toewijzing (evt. vermeerderd met een extra weekvolume):
- Oktober 3 zondagen: 3x weekvolume (300 euro) = 900 euro
- November 4 zondagen: 4x weekvolume (300 euro) = 1200 euro
- December 4 zondagen + 1 weekvolume: 5x weekvolumes (300 euro) = 1500 euro

**IV078:**

*Wat mag gedeclareerd worden wanneer een onvolledige periode is toegewezen?*

Alleen voor de inspanningsgerichte uitvoeringsvariant is een uniforme werkwijze geformuleerd. Voor de outputgerichte uitvoeringsvariant is het aan de gemeente om gezamenlijk met de aanbieder te komen tot een afspraak hierover.

Werkwijze voor inspanningsgerichte uitvoeringsvariant, het in de gebroken periode daadwerkelijk geleverde volume wordt gedeclareerd. Met als bovengrens voor deze gebroken periode het maximale volume, dat in ToegewezenProduct aan de frequentie is toegekend.

Voorbeeld 1:

frequentie in ToegewezenProduct = week

Toewijzing voor 3 uur per week met ingangsdatum 12-10-2021 en einddatum 13-12-2021

Voor de  productperiode 12-10-2021 t/m 31-10-2021 mag maximaal 9 uur gedeclareerd worden, indien deze uren ook daadwerkelijk geleverd zijn. (zie ook rekenmethode IV077. De eerste week (12-10-2021 t/m 17-10-2021) is geen volledige kalenderweek, maar indien geleverd mag voor deze week de volledige 3 uur worden gedeclareerd.

Voorbeeld 2:

Frequentie in ToegewezenProduct = maand

Toewijzing voor 15 uur per maand met ingangsdatum 12-10-2021 en einddatum 13-12-2021

Voor de productperiode 12-10-2021 t/m 31-10-2021 mag maximaal 15 uur gedeclareerd worden, indien deze uren ook daadwerkelijk geleverd zijn. Ondanks dat de ingangsdatum 12-10-2021 is en er dus geen hele kalendermaand is toegewezen, mag (mits geleverd) de volledige 15 uur gedeclareerd worden.

**IV079:**

*Hoe moet het volume in de prestatie gevuld worden wanneer de eenheid in de prestatie uren is en de geleverde prestatie niet uit volledige uren bestaat?*

Indien er is toegewezen in uren en er wordt gedeclareerd in uren, kan het voorkomen dat de werkelijk geleverde zorg niet uit hele uren (60 minuten) bestaat.
In dat geval wordt het volume rekenkundig afgerond (< 30 minuten = omlaag >= 30 minuten = omhoog), met een minimaal volume van 1 uur.
Geleverde zorg per prestatie behorend bij een toewijzing wordt gesommeerd over de gehele declaratieperiode, waarbij de afronding pas plaats vindt op het totaal volume in de prestatieregel.

Dus indien er wekelijks 95 minuten worden geleverd en de prestatieperiode bevat 4 weken, dan wordt eerst het totaal over de prestatieperiode bepaald = 4 weken x 95 minuten =380 minuten.
Er wordt gedeclareerd in uren: 380 / 60 = 6 uur en 20 minuten. Afgerond is dit 6 uur. In het volume van de prestatie wordt 6 uur gevuld.

**IV081:**

*Hoe moet het ProductTarief gevuld worden?*

De eenheid in de prestatie moet gelijk zijn aan de eenheid van de toewijzing. Voor die eenheid dient in het contract een tarief voor het betreffende product te zijn vastgelegd. Het producttarief in de prestatie wordt gevuld met dat betreffende tarief.

Alleen voor uren en minuten is er een uitzondering mogelijk. Gemeente en aanbieder kunnen een tariefeenheid per uur afgesproken hebben, terwijl gedeclareerd wordt in minuten. In dat geval wordt in de Prestatie het ProductTarief omgerekend naar een tarief per minuut (tarief delen door 60 minuten) en afgerond op 2 decimalen volgens de rekenkundige regels. Dit betekent dat 1,455 wordt afgerond naar 1,46 en dat 1,454 wordt afgerond naar 1,45.

Dit (afgeronde) tarief wordt in de Prestatie bij ProductTarief opgenomen, maar niet gebruikt voor de berekening van IngediendBedrag.
Het IngediendBedrag wordt als volgt bepaald: (contractuele uurtarief * aantal minuten) / 60. Dit bedrag wordt vervolgens afgerond op 2 decimalen.(TR346)

**IV084:**

*Hoe moet de declaratie gevuld worden wanneer sprake is van elkaar opvolgende toewijzingen binnen 1 declaratieperiode?*

Als sprake is van elkaar opvolgende toewijzingen binnen een declaratieperiode, dan volgen aparte Prestaties per toewijzing en per product in de declaratie over die declaratieperiode. Een Prestatie kan dus nooit op meer dan 1 toewijzing betrekking hebben.

Voorbeeld

In onderstaand voorbeeld wordt uitgegaan van de volgende situatie:

- De eerste toewijzing heeft Ingangsdatum 01-03-2021 en Einddatum 09-03-2021
- De opvolgende toewijzing heeft Ingangsdatum 23-03-2021 en Einddatum 31-03-2021
- Er is ononderbroken zorg geleverd gedurende beide toegewezen periodes

Er worden nu 2 Prestaties ingediend met de volgende ProductPeriodes:
ProductPeriode Prestatie 1: 01-03-2021 t/m 09-03-2021
ProductPeriode Prestatie 2: 23-03-2021 t/m 31-03-2021

**IV085:**

*Wanneer kan een creditering van een declaratie verzonden worden?*

Wanneer een eerder ingediende prestatie door de aanbieder onjuist is bevonden, kan deze door de aanbieder worden ingetrokken door aanlevering van een credit prestatie.
Dit kan alleen nadat er een declaratie-antwoordbericht op de debet prestatie is ontvangen en de prestatie daarin niet is afgekeurd. Een door de gemeente afgekeurde prestatie wordt nooit gecrediteerd.

NB: een creditering  is een eenzijdige handeling van de aanbieder, die niet bestreden kan worden door een gemeente. De gemeente kan een ingediende credit prestatie dus niet afkeuren, tenzij het technische afkeur betreft. Zie hiervoor invulinstructies IV088 en IV087).

**IV086:**

*Hoe moet worden omgegaan met debet en credit prestaties in een declaratiebericht?*

Debet en credit prestaties kunnen in 1 declaratiebericht worden aangeleverd. Hierbij geldt:

- Een 1e debet prestatie en een identieke credit prestatie mogen niet in 1 declaratiebericht worden aangeleverd. Als de 1e debet en credit prestatie op 1 moment bekend zijn, dan horen die tegen elkaar weg te vallen en niet in 1 bericht te staan.
- Een credit prestatie en een 2e debet prestatie kunnen desgewenst in hetzelfde bericht worden aangeleverd.

Totaal declaratiebedrag

Het totale declaratiebedrag van alle debet en credit prestaties in het declaratiebericht wordt ingevuld in TotaalIngediendBedrag in de header van het bericht. Hierbij worden debetbedragen opgeteld en creditbedragen afgetrokken.

**IV087:**

*Hoe wordt een declaratie-antwoordbericht opgesteld?*

Een declaratie-antwoordbericht wordt gestuurd om de aanbieder te informeren over de beoordeling (technisch/inhoudelijk) van het declaratiebericht. Daarnaast wordt de aanbieder geinformeerd over het totaalbedrag dat door de gemeente wordt toegekend op de declaratie.
Voor ieder verzonden declaratiebericht wordt slechts 1 declaratie-antwoordbericht gestuurd (1-op-1). De gemeente stuurt altijd een declaratie-antwoordbericht naar de aanbieder.

Een declaratie-antwoordbericht bevat altijd een Header.

- In de Header wordt DeclaratieIdentificatie gevuld met de berichtidentificatie van het declaratiebericht dat beantwoord wordt.
- De Header kan worden aangevuld met het versienummer van de XSLT's die gebruikt zijn om het bericht te controleren. Dit is verplicht indien afkeur plaatsvindt op basis van de XSLTs.
Wat na de Header volgt is afhankelijk van of en op welk controleniveau fouten zijn geconstateerd:
- Bij afkeur op controleniveau 1 of 2 (zie IV088) is het afgekeurde declaratiebericht niet verwerkt door de gemeente.
- Bij afkeur op controleniveau 3 of 4, is het declaratiebericht (deels) verwerkt. Prestaties die niet beoordeeld zijn (indien fout op berichtklasse Cliënt is geconstateerd) of niet voldoen aan de controles, zijn afgewezen.
De vulling van het declaratie-antwoordbericht is afhankelijk van de situatie en de geconstateerde fouten:

Het bericht is volledig goedgekeurd:
De Header wordt retour gestuurd met retourcode 0200 (geen opmerkingen over deze berichtklasse) en een Declaratie-Antwoord berichtklasse met Retourcode 8001 (Declaratie is volledig toegewezen), waarbij TotaalGoedgekeurdBedrag  en TotaalIngediendBedrag worden gevuld met de waarde van TotaalIngediendBedrag van het bijbehorende declaratiebericht.

Controleniveau 1: Er zijn fouten geconstateerd bij XSD-validatie
Indien het declaratiebericht niet valideert tegen het XSD krijgt de afzender een foutmelding. Er wordt geen declaratie-antwoordbericht verzonden.

Controleniveau 2: Er zijn fouten geconstateerd bij XSLT-validatie
Voor alle regels die binnen een bericht gecontroleerd kunnen worden, maar die niet via het XSD gevalideerd kunnen worden, zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren. Wanneer een declaratiebericht een fout oplevert bij een controle op één van deze
regels wordt in het declaratie-antwoordbericht alleen de Header retour gestuurd met de algemene retourcode 0001 (Bericht is afgekeurd om technische redenen). Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven. Het declaratiebericht wordt als niet verzonden beschouwd en is niet verwerkt in de administratie van de gemeente.
Voorbeeld:

- Het declaratiebericht bevat een fout in de Header of kan niet worden afgeleverd bij de gemeente: retourcode 0001 (Bericht is afgekeurd om technische reden).

Controleniveau 3 of 4: Er zijn fouten geconstateerd op berichtoverstijgende controles of controles tegen een externe bron
Indien er een fout geconstateerd is in de Header, bevat het declaratie-antwoordbericht alleen de Header met daarbij de retourcode van de regel op basis waarvan de fout geconstateerd is.

Indien een fout geconstateerd is in de berichtklasse Declaratie, wordt de Header retour gestuurd met retourcode 0200 (geen opmerking over deze berichtklasse), berichtklasse DeclaratieAntwoord krijgt de betreffende retourcode voor afkeur. Het TotaalToegekendBedrag wordt gevuld met 0 (zie ook TR342).  De declaratie wordt als niet verzonden beschouwd en is niet verwerkt in de administratie van de gemeente.
Voorbeeld:

- Het declaratienummer is niet uniek: Declaratienummer moet uniek zijn voor de verzendende partij. De Header krijgt dan retourcode 0200 (geen opmerking over deze berichtklasse), berichtklasse DeclaratieAntwoord krijgt retourcode 9333, en bij TotaalToegekendBedrag wordt 0 gevuld.
Indien een fout geconstateerd is in de berichtklassen onder Declaratie, wordt de Header retour gestuurd met retourcode 0200 (Geen opmerking over deze berichtklasse). TotaalToegekendBedrag in de berichtklasse DeclaratieAntwoord wordt gevuld met het totaal goedgekeurde bedrag (som van alle toegekende prestaties) en de klasse krijgt retourcode 0200. Indien een fout is geconstateerd in Cliënt wordt de betreffende retourcode bij de Cliënt gevuld en worden alle onderliggende Prestaties retour gestuurd met retourcode 0233 (Berichtklasse is niet beoordeeld). Indien een fout is geconstateerd in een Prestatie, wordt deze Prestatie retour gestuurd met de bijbehorende retourcode. Hierbij wordt tevens de bijbehorende klasse Cliënt meegestuurd met retourcode 0200 (Geen opmerking over deze berichtklasse). In de retour gestuurde Prestaties worden één of meerdere retourcodes gevuld om de inhoudelijke reden van afwijzing aan te geven.
NB: Prestaties worden altijd volledig goed of volledig afgekeurd. Prestaties waarvan het ingediende bedrag wordt toegekend, worden niet opgenomen in het declaratie-antwoordbericht.
Het declaratie-antwoordbericht dient niet:
- Als ontvangstbevestiging.
- Voor het opvragen van (extra) informatie door de gemeente.
- Voor het doorgeven van correcties op declaratiegegevens aan de aanbieder.
NB: Een bericht kan informatie over meerdere cliënten bevatten. Cliënten waarin geen fouten zijn geconstateerd, worden niet opgenomen in het declaratie-antwoordbericht.

**IV088:**

*Welke retourcode moet gevuld worden in het declaratie-antwoordbericht?*

Welke retourcode gevuld moet worden, wordt bepaald door controle op basis waarvan het bericht wordt afgekeurd. Deze controles zijn beschreven als technisch te controleren regels die op verschillende niveaus gecontroleerd worden. Bij iedere technisch te controleren regel is aangegeven op welk controleniveau deze gecontroleerd wordt. Indien van toepassing is ook aangegeven welke retourcode gebruikt moet worden in het declaratie-antwoordbericht indien op basis van de regel een declaratiebericht wordt afgekeurd.
Een ontvangen declaratiebericht wordt op vier niveaus gecontroleerd:
Controleniveau 1: berichtformaat (XSD)
Het bericht wordt gevalideerd tegen het XSD.

Indien het declaratiebericht niet valideert, krijgt de afzender een foutmelding. Er wordt geen declaratie-antwoordbericht verzonden. Regels op dit controleniveau hebben daarom geen retourcode.

Controleniveau 2: berichtinhoud (XSLT)
Het declaratiebericht wordt gecontroleerd tegen alle regels (technische regels, condities en constraints) die binnen het bericht zelf te controleren zijn. Voor deze regels zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren.

Deze regels hebben een algemene retourcode (0001) die gevuld wordt in het declaratie-antwoordbericht.
Wanneer fouten worden geconstateerd bevat het declaratie-antwoordbericht alleen de Header met retourcode 0001 (Bericht is technisch onjuist). Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven.

Controleniveau 3: berichtoverstijgend
Het declaratiebericht wordt gecontroleerd op alle technische regels die berichtoverstijgend zijn. Dat wil zeggen dat de informatie in het declaratiebericht gecontroleerd wordt ten opzichte van informatie in één of meer eerder ontvangen domeinspecifieke berichten.

Deze regels hebben een eigen retourcode die gevuld wordt in het declaratie-antwoordbericht bij de berichtklasse waarin de fout geconstateerd is.

Controleniveau 4: externe bron
Het declaratiebericht wordt gecontroleerd op alle technisch controleerbare regels waarvoor informatie nodig is die geen onderdeel is van het iStandaarden berichtenverkeer. Dit betreft bijvoorbeeld:

- Systeemdatum van de verzender/ontvanger;
- Een externe codelijst zoals de AGB-codelijst of de gemeentelijke indeling van CBS;
- Bilaterale afspraken tussen ketenpartijen, zoals contractafspraken die opgenomen zijn in een regel binnen de iStandaarden.

Deze regels hebben een eigen retourcode die gevuld wordt in het declaratie-antwoordbericht bij de berichtklasse waarin de fout geconstateerd is.

**IV089:**

*Hoe moet ProductPeriode gevuld worden?*

Voor declareren zijn de volgende begrippen van belang:

- Declaratieperiode: is een administratieve periode waarover de geleverde hulp in de administratie tot een declaratie wordt verwerkt. Dit is altijd een kalendermaand.
- Productperiode: is de begin- en einddatum van een geleverd product binnen een declaratieperiode. De productperiode valt altijd binnen de geldigheidsperiode van de toewijzing.
In het declaratiebericht wordt het totale geleverde volume van 1 specifiek product binnen 1 productperiode aan 1 cliënt (behorende bij 1 toewijzing) opgenomen in 1 Prestatie. Deze prestaties worden direct in de erop volgende declaratieperiode, of eventueel achteraf in een latere declaratieperiode, gedeclareerd. (zie IV076 voor vullen volume bij frequentie per week)

De ProductPeriode Begindatum wordt gevuld met:

- De eerste dag van de kalendermaand waarin de ProductPeriode valt indien de Ingangsdatum van het ToegewezenProduct voor of op de eerste dag van deze kalendermaand ligt.
- De Ingangsdatum van het ToegewezenProduct indien de Ingangsdatum ToegewezenProduct na de eerste dag van de kalendermaand waarin de ProductPeriode valt ligt.

De ProductPeriode Einddatum wordt gevuld met:

- De laatste dag van de kalendermaand waarin de ProductPeriode valt indien de Einddatum van het ToegewezenProduct op of na de laatste dag van deze kalendermaand ligt.
- De Einddatum van het ToegewezenProduct indien de Einddatum ToegewezenProduct voor de laatste dag van de kalendermaand waarin de ProductPeriode valt ligt.

Voorbeeld

In onderstaande voorbeeld wordt uitgegaan van de volgende situatie:

Het ToegewezenProduct heeft Ingangsdatum 08-04-2022 en Einddatum 17-06-2022 (dit is de toegewezen periode)
ProductPeriodes voor de maanden April, Mei en Juni zijn dan:

- April: 08-04-2022 t/m 30-04-2022
- Mei: 01-05-2022 t/m 31-05-2022
- Juni: 01-06-2022 t/m 17-06-2022

Trajectfinanciering

Gemeenten en aanbieders kunnen (op grond van OP264) onderling afwijkende afspraken maken over de momenten waarop, al dan niet in delen, gedeclareerd kan worden, in de situatie van een outputgericht product dat in euro's is toegewezen.

Als het resultaat pas aan het eind van het traject kan worden vastgesteld, wordt ProductPeriode gelijk gesteld aan de laatste ProductPeriode binnen de toewijzingsperiode. Gemeente en aanbieder kunnen ook afwijkende afspraken hebben gemaakt over het aantal declaratiemomenten. Hierbij wordt de ProductPeriode indien nodig aangepast zodat de ProductPeriode ook in deze situatie altijd binnen de periode van de toewijzing valt.

Voorbeeld

Afspraak is dat op het eind van het traject de declaratie mag worden ingediend.
Cliënt ontvangt outputgerichte hulp vanaf het begin tot het eind van toegewezen periode (08-04-2021 t/m 17-06-2021). Pas op 17-06-2021 kan het resultaat van de outputgerichte hulp worden vastgesteld. In de maanden April en Mei wordt er geen declaratie ingediend voor deze cliënt. Er volgt in de maand juni 1 Prestatie met de volgende ProductPeriode:

- Juni: 01-06-2021 t/m 17-06-2021

**IV090:**

*Hoe moet het declaratiebericht gevuld worden indien achteraf gedeclareerd wordt?*

Zorg of ondersteuning geleverd aan een cliënt tijdens een bepaalde declaratieperiode wordt direct in de erop volgende declaratieperiode of achteraf in een latere declaratieperiode gedeclareerd.

Wanneer achteraf wordt gedeclareerd, mag dit niet met een declaratieperiode worden gedaan die voor de laatst ingediende declaratieperiode ligt. De productperiode zelf mag wel in het verleden liggen, aangezien hiermee de periode van levering wordt aangeduid
Wanneer achteraf wordt gedeclareerd over meerdere declaratieperiodes worden in één declaratiebericht evenveel prestaties opgenomen als het aantal afzonderlijke prestaties dat verzonden zou zijn wanneer deze in afzonderlijke berichten waren opgenomen.

Voorbeelden

In onderstaande voorbeelden wordt uitgegaan van de volgende situatie:

De volgende declaratieperiodes zijn ingediend:
01-01-2021 t/m 31-01-2021

01-02-2021 t/m 28-02-2021

01-03-2021 t/m 31-03-2021

01-05-2021 t/m 31-05-2021 (In april was er blijkbaar niets te declareren)

Achteraf declareren als een declaratieperiode mist

In juni blijkt dat in april 2021 toch iets te declareren was, aangezien in maart 2021 zorg is geleverd aan een cliënt. Aangezien er al een declaratieperiode is ingediend die na April 2021 ligt (namelijk mei 2021), kunnen de nog niet ingediende Prestaties van Maart 2021 worden ingediend met één van de volgende declaratieperiodes:

- Als 2e declaratie van de maand mei: DeclaratiePeriode 01-05-2021 t/m 31-05-2021
- Bij de eerstvolgende declaratie in juni: DeclaratiePeriode 01-06-2021 t/m 30-06-2021

Achteraf declareren als de hulpperiode meerdere declaratieperiodes beslaat

In juni blijkt dat (ononderbroken) geleverde ondersteuning aan een cliënt tussen 15-02-2021 t/m 30-04-2021 nog niet is gedeclareerd. Er dient per declaratieperiode een Prestatie te worden ingediend. Er volgen in het volgende declaratiebericht 3 Prestaties met de volgende productperiodes:

- ProductPeriode Prestatie 1: 15-02-2021 t/m 28-02-2021
- ProductPeriode Prestatie 2: 01-03-2021 t/m 31-03-2021
- ProductPeriode Prestatie 3: 01-04-2021 t/m 30-04-2021

**IV091:**

*Hoe moet een creditprestatie gevuld worden in een declaratiebericht?*

In de IngediendBedrag-regel van een Prestatie wordt met DebetCredit aangegeven of de indienende partij een vordering (debet) of een terugvordering (credit) doet bij de ontvanger van de declaratie.

Crediteren declaratie:

Een creditprestatie is identiek aan de oorspronkelijke debetprestatie, met uitzondering van:

- ReferentieNummer: de creditprestatie krijgt een nieuw ReferentieNummer.
- VorigReferentieNummer wordt gevuld met het ReferentieNummer van de oorspronkelijke debetprestatie.
- DebetCredit in IngediendBedrag wordt gevuld met C (Credit)

Crediteren is alleen mogelijk na ontvangst van het declaratie-antwoordbericht waarin de te crediteren prestatie is toegekend (zie IV085).

**IV092:**

*Hoe moet een Verzoek om Wijziging (VOW bericht) gevuld worden?*

Op berichtniveau wordt een uniek Referentienummer gevuld en wordt verplicht de reden van het verzoek ingevuld.
Het verzoek om wijziging bevat alle actuele toegewezen producten bij de cliënt.
Het VOW bericht bevat drie groepen gegevens om de gewenste nieuwe situatie aan te vragen:

- OngewijzigdProduct: hiermee worden de toewijzingen geïdentificeerd (via ToewijzingNummer) die ongewijzigd moeten blijven.
- TeWijzigenProduct: hiermee worden de toewijzingen geïdentificeerd (via ToewijzingNummer) waarvoor een wijziging gewenst is, en worden de wijzigingen aangegeven.
- NieuwProduct: hiermee worden de gegevens voor een gewenste nieuwe toewijzing van een nieuw Product aangegeven.

Het gebruik en de vulling wordt hieronder nader toegelicht:

OngewijzigdProduct

Dit wordt gevuld voor elke actuele toewijzing waar niets aan hoeft te veranderen. Hetzelfde product met dezelfde kenmerken zijn gewenst in de nieuwe situatie.

TeWijzigenProduct

Dit wordt gevuld voor elke actuele toewijzing waarbij de omvang, het budget en/of de einddatum moet veranderen. Hierbij gelden de volgende voorwaarden:

- Het Product is gelijk aan dat van de originele toewijzing en zit daarom niet in de berichtklasse.
- In de Omvang mogen het Volume, Eenheid en Frequentie worden gewijzigd.
- De gewenste wijziging mag niet leiden tot onrechtmatigheid van reeds geleverde zorg.
- De GewensteIngangsdatum geeft aan op welk moment de wijziging zou moeten ingaan. Deze datum moet ofwel in de toekomst liggen (maar wel binnen de periode van de originele toewijzing), ofwel moet deze gelijk zijn aan de originele ingangsdatum als het een wijziging over de gehele periode betreft.
- Als de wijziging een toegewezen Budget betreft, dan moet de GewensteIngangsdatum gelijk zijn aan de ingangsdatum van de originele toewijzing. De einddatum mag wel worden aangepast samen met de budgetwijziging. Oftewel: het gehele budget wordt aangepast en daarbij mag de periode worden ingekort of verlengd.
- Als de wijziging betrekking heeft op een toewijzing met als Frequentie totaal binnen toewijzingsperiode, dan moet de GewensteIngangsdatum gelijk zijn aan de ingangsdatum van de originele toewijzing. De einddatum mag wel worden aangepast samen met deze wijziging. Oftewel: het totaal wordt aangepast en daarbij mag de periode worden ingekort of verlengd.

NieuwProduct

Dit wordt gevuld voor het aanvragen van producten waarvoor geen actuele toewijzing is. Ook een bestaand product maar voor een geheel nieuwe periode (GewensteIngangsdatum ligt na de einddatum van de originele toewijzing) wordt aangevraagd in de groep NieuwProduct.
De kenmerken behorend bij deze gewenste nieuwe toewijzing worden gevuld, conform de regels rond het aanvragen en toewijzen van inspanningsgerichte en outputgerichte producten in de verschillende variaties.

Afhankelijk van de wijzigingen in TewijzigenProduct kan bij honoreren door de gemeente gebruik gemaakt worden van dezelfde toewijzing met gewijzigde gegevens, of moet de actuele toewijzing worden ingetrokken en een nieuwe aansluitende toewijzing worden gemaakt. Bedrijfsregels OP33x1 en OP257 beschrijven in detail wanneer een bestaande toewijzing kan worden gebruikt of een nieuwe toewijzing moet worden gemaakt.

Voorbeelden:

Voorbeeld 1, Actuele situatie:

Toewijzing 432, product B1, vanaf 1 maart 2021, 3 uur per week, einddatum 31 december 2022

Toewijzing 543, product C1, vanaf 1 maart 2021, 80 uur totaal over periode, einddatum 31 december 2021

Gewenst is om het product B1 vanaf 1 september 2021 te vervangen door product B2, voor 6 uur per week tot eind 2022 (en daarom moet product B1 dus stoppen per 31 augustus)

VOW bericht bevat:

- OngewijzigdProduct: ToewijzingNummer 543
- TeWijzigenProduct: ToewijzingNummer 432, GewensteIngangsdatum 1 maart 2021, 3 uur per week, einddatum 31 augustus 2021
- NieuwProduct: Product B2, GewensteIngangsdatum 1 september 2021, 6 uur per week, einddatum 31 december 2022

Voorbeeld 2a, Actuele situatie:

Toewijzing 789, product A1, vanaf 1 maart 2021, 3 uur per week, einddatum 31 december 2021

Toewijzing 910, product C1, vanaf 1 maart 2021, 4 dagdelen per maand, einddatum 31 december 2021

In oktober 2021 wordt duidelijk: gewenst is om voor product A1 de levering te verlengen én te verhogen: vanaf 1 november 2021 met 5 uur per week, tot 1 juli volgend jaar

Daarnaast is het nodig om na 31 december 2021 ook nog door te gaan met Product C1, ook tot 1 juli.

VOW bericht bevat:

- TeWijzigenProduct: ToewijzingNummer 789, GewensteIngangsdatum 1 november 2021, 5 uur per week, einddatum 1 juli 2022
- TeWijzigenProduct: ToewijzigenNummer 910, GewensteIngangsdatum 1 maart 2021, 4 dagdelen per maand, einddatum 1 juli 2022

Voorbeeld 2b, Actuele situatie:

Toewijzing 789, product A1, vanaf 1 maart 2021, 3 uur per week, einddatum 31 december 2021

Toewijzing 910, product C1, vanaf 1 maart 2021, 4 dagdelen per maand, einddatum 31 december 2021

In oktober 2021 wordt duidelijk: gewenst is om voor product A1 de levering te verlengen én te verhogen: vanaf 1 november 2021 met 5 uur per week, tot 1 juli volgend jaar

Daarnaast is het nodig om vanaf 1 januari 2022 ook nog door te gaan met Product C1, maar dan voor 2 dagdelen per maand, ook tot 1 juli. Dit is een ingangsdatum die niet overlapt met de actuele wijziging, dus hiervoor wordt NieuwProduct gebruikt.

VOW bericht bevat:

- OngewijzigdProduct: ToewijzingNummer 910
- TeWijzigenProduct: ToewijzingNummer 789, GewensteIngangsdatum 1 november 2021, 5 uur per week, einddatum 1 juli 2022
- NieuwProduct: Product C1 GewensteIngangsdatum 1 januari 2022, 2 dagdelen per maand, einddatum 1 juli 2022

**IV093:**

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

Actuele toewijzing heeft frequentie anders dan 'totaal binnen geldigheidsduut toewijzing'.

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
- In de andere gevallen kan geen aangepast ToegewezenProduct worden verstuurd, en wordt de wijziging gerealiseerd in twee gedeelten: het actueel ToegewezenProduct wordt ingetrokken; krijgt een einddatum GewensteIngangsdatum minus 1 dag. RedenWijziging wordt gevuld met geinitieerd door aanbieder en de ReferentieAanbieder wordt overgenomen uit het Verzoek om Wijziging.
Daarnaast wordt er een nieuw ToegewezenProduct gestuurd met als ingangsdatum de GewensteIngangsdatum en verder de gevraagde Einddatum, Omvang en/of Budget. ReferentieAanbieder wordt overgenomen uit het Verzoek om Wijziging, RedenWijziging blijft leeg omdat het een nieuwe toewijzing is. Zie voorbeeld 1 hieronder.

GewensteIngangsdatum ligt in het verleden t.o.v. moment van toewijzen

Als GewensteIngangsdatum op het moment van toewijzing in het verleden ligt, dan wordt buiten het berichtenverkeer met de aanbieder afgestemd of het mogelijk is dat de toewijzing met terugwerkende kracht gedaan wordt.
Als dat het geval is en geen rechtmatigheidsproblemen oplevert, dan wordt toegewezen zoals hiervoor, en wordt GewensteIngangsdatum uit het verzoek gebruikt.
Als dat niet kan, dan wordt afgestemd op welke manier de samenhang in het pakket van ToegewezenProducten kan worden gehandhaafd, door het kiezen van de juiste datum waarop de wijzigingen in gaan, zie de voorbeelden 2 en 3 hieronder.

Voorbeeld 1

Lopend ToegewezenProduct is

- ToewijzingNummer 123001, Product E, 4 uur/week, Ingangsdatum 1 januari 2023, Einddatum 31 december 2023
- ToewijzingNummer 123002, Product F, 3 uur/week, Ingangsdatum 1 januari 2023, Einddatum 31 december 2023

Medio mei 2023 wordt een wijziging aangevraagd met daarin ReferentieAanbieder A001

- TeWijzigenProduct: ToewijzingNummer123001, Product E, 4 uur/week, GewensteIngangsdatum 1 januari 2020, Einddatum 30 juni 2024
- TeWijzigenProduct: ToewijzingNummer123002, Product F, 6 uur/week, GewensteIngangsdatum 12 juni 2023, Einddatum 31 december 2023

De gemeente ontvangt het verzoek, en besluit om het verzoek te honoreren, en doet dit tijdig, door op 2 juni 2023 het toewijzingbericht te sturen.
De wijziging voor product E moet met een gewijzigd ToegewezenProduct gedaan worden, omdat wordt voldaan aan OP380.
De wijziging van product F wordt gedaan door het lopende ToegewezenProduct per 11 juni 2023 in te trekken, en aansluitend een nieuw ToegewezenProduct met het nieuwe volume te geven met een startdatum van 12 juni 2023.

Het toewijzingbericht bevat dus:

ToewijzingNummer 123001, Product E, 4 uur/week, Einddatum 30 juni 2024,

ReferentieAanbieder A001, RedenWijziging is geïnitieerd door aanbieder

ToewijzingNummer 123002, Product F, 3 uur/week, Einddatum 11 juni 2023

ReferentieAanbieder A001, RedenWijziging is geïnitieerd door aanbieder

ToewijzingNummer 123078, Product F, 6 uur/week, startdatum 12 juni 2023, Einddatum 31 december 2023, ReferentieAanbieder A001, RedenWijziging is leeg

Voorbeeld 2

Lopende toewijzing is:

- ToewijzingNummer 345001, Product A, Ingangsdatum 1 januari 2023, Einddatum 31 december 2023
- ToewijzingNummer 345002, Product B, Ingangsdatum 1 januari 2023, Einddatum 31 december 2023

Medio april 2023 wordt een wijziging aangevraagd met daarin:

- Ongewijzigd laten van Toewijzing 345001
- Wijziging: ToewijzingNummer 345002, product B, GewensteIngangsdatum 1 januari 2023, Einddatum 15 mei 2023
- Starten van nieuw product C per 16 mei 2023
De toewijzing wordt gedaan per 23 mei 2023, omdat de gemeente eerst onderzoek moest doen. Dan wordt afgestemd wat er moet gebeuren, en welke datum moet worden gekozen.

Situatie a: product B en product C zijn aansluitend nodig, en de aanbieder is doorgegaan met leveren van A en B.

Dan kan worden afgesproken dat de toewijzing wordt gestuurd met andere maar nog steeds aansluitende datums per 24 mei 2023

- Product A blijft ongewijzigd
- Product B krijgt een toegewezen einddatum 23 mei 2023
- Product C krijgt een toegewezen ingangsdatum 24 mei 2023

Situatie b: product B en product C zijn aansluitend nodig, en de aanbieder is op 16 mei 2023 overgeschakeld naar het leveren van A en C.

Dan kan worden afgesproken dat de toewijzing wordt gestuurd zoals in het verzoek, met terugwerkende kracht

- Product A blijft ongewijzigd
- Product B krijgt een toegewezen einddatum 15 mei 2023
- Product C krijgt een toegewezen ingangsdatum 16 mei 2023
NB: Het overschakelen naar product C gebeurt terwijl er op dat moment nog geen rechtmatigheid is. Dit zal in afstemming met de gemeente moeten gebeuren om problemen rond declaratie te voorkomen.

Voorbeeld 3

Lopende toewijzing is:

- ToewijzingNummer 678001, Product X, Ingangsdatum 1 januari 2022, einddatum 7 mei 2023

Medio april 2023 wordt een wijziging aangevraagd met daarin:

- Ongewijzigd laten ToewijzingNummer 678001
- Nieuw product Y, Ingangsdatum 8 mei 2023
De toewijzing wordt gedaan per 15 mei 2023, omdat de gemeente eerst onderzoek moest doen.

Situatie a: product X en product Y zijn aansluitend nodig, en de aanbieder is op 7 mei 2023 gestart met het leveren van Y. Dan kan worden afgesproken dat de toewijzing wordt gestuurd met terugwerkende kracht zoals in het verzoek.

- Product X blijft ongewijzigd met einddatum 7 mei 2023
- Product Y krijgt een toegewezen ingangsdatum 8 mei 2023
NB: Het starten met leveren van product Y gebeurt terwijl er op dat moment nog geen rechtmatigheid is. Dit zal in afstemming met de gemeente moeten gebeuren om problemen rond declaratie te voorkomen.

Situatie b: product X en product Y zijn niet strikt noodzakelijk aansluitend, en door het uitblijven van de toewijzing is de aanbieder gestopt met leveren per 7 mei 2023.

Dan kan worden afgesproken dat de toewijzing wordt gestuurd zonder terugwerkende kracht en zonder aansluiting in de opvolgende toewijzing

- Product X blijft ongewijzigd met einddatum 7 mei 2023
- Product Y krijgt een toegewezen ingangsdatum 15 mei 2023

---

**IV094:**

*Hoe wordt een toewijzingbericht gevuld naar aanleiding van een verzoek om toewijzing (VOT) bericht?*

Als een Toewijzingbericht wordt gestuurd als gevolg van de honorering van een VOT bericht, dan worden alle toe te wijzen producten toegewezen met parameters volgens het oordeel van gemeente.
De gemeente kan per product/productcategorie afwijken van de met de VOT gevraagde datums en omvang, of besluiten om een ander product toe te wijzen (bijvoorbeeld bij gestaffelde producten waarbij de productcode afhankelijk is van omvang)

In het geval dat er een aspecifiek product met budget of een generieke toewijzing wordt aangevraagd kan de gemeente besluiten om een ander budget toe te wijzen.

Elk toegewezen product krijgt de ReferentieAanbieder van de betreffende productaanvraag in het VOT bericht.

Alle andere actuele toegewezen producten voor deze cliënt bij deze aanbieder worden ook in het toewijzingbericht opgenomen zodat voldaan wordt aan OP087, de ReferentieAanbieder is hierbij leeg.

**IV095:**

*Hoe moet de juiste gemeente gevuld worden?*

Indien de gemeente in het antwoordbericht aangeeft dat zij niet de verantwoordelijke gemeente is van de cliënt waarvoor een verzoek om toewijzing is ingediend, wordt RedenAfwijzingVerzoek in het antwoordbericht gevuld met de waarde 8 (Woonplaatsbeginsel).

In dat geval moet de gemeente in Gemeente de gemeentecode meegeven die volgens haar wel de verantwoordelijke gemeente is. De aanbieder weet dan bij welke gemeente het verzoek om toewijzing moet worden ingediend.

Bij alle andere waarden van RedenAfwijzingVerzoek dient de klasse Woonplaatsbeginsel niet te worden opgenomen.

**IV096:**

*Hoe wordt de sleutel van een start-/stopbericht gevuld?*

Indien sprake is van inspanningsgericht of outputgerichte uitvoeringsvariant, zal ToewijzingNummer gebruikt worden als sleutel tussen het start-/stopbericht en de toewijzing.

Bij een taakgerichte uitvoeringsvariant, is geen sprake van een toewijzing, daarom zal de sleutel bestaan uit Product en Begindatum.

**IV097:**

*Hoe wordt ReferentieAanbieder gevuld in een ToegewezenProduct?*

De ReferentieAanbieder wordt alleen gevuld wanneer een toewijzing wordt gestuurd als direct gevolg van een verzoek om toewijzing of een verzoek om wijziging.

Als een nieuwe of gewijzigde toewijzing wordt gestuurd op initiatief van de gemeente wordt ReferentieAanbieder niet gevuld, ook niet als in een eerder bericht ToegewezenProduct (met hetzelfde ToewijzingNummer) wel een gevuld element ReferentieAanbieder had.

Voorbeeld:

Na een verzoek om toewijzing wordt als gevolg daarvan een ToegewezenProduct gestuurd, deze bevat dan ReferentieAanbieder. Na verloop van tijd stuurt de gemeenten op haar initiatief een gewijzigde ToegewezenProduct, bijvoorbeeld met een Einddatum ingevuld. Deze gewijzigde toewijzing heeft dan geen ReferentieAanbieder omdat het geen direct gevolg van een verzoek is.

Bij een verzoek om toewijzing heeft ieder gevraagd product een apart ReferentieAanbieder. Bij de ToegewezenProducten die als direct gevolg van deze aanvraag worden gestuurd krijgt elk ToegewezenProduct de ReferentieAanbieder uit het overeenkomstige gevraagde product.

Bij een verzoek om wijziging gaat het om een samenhangend geheel met 1 ReferentieAanbieder voor alle wijzigingen en/of extra producten.

In het toewijzingbericht dat als gevolg van dit verzoek wordt gestuurd krijgen alle producten dezelfde ReferentieAanbieder in ToegewezenProduct.

Voorbeeld:

Er lopen twee toegewezen producten:

- ToewijzingNummer 345001, Product A, Ingangsdatum 1 januari 2020, einddatum 31 december 2020
- ToewijzingNummer 345002, Product B, Ingangsdatum 1 januari 2020, einddatum 31 december 2020
Er wordt een verzoek om wijziging gestuurd om de toewijzing van Product B te verlengen met een half jaar t/m 30 juni 2021, met ReferentieAanbieder 667788 (NB: beide producten moeten opgenomen worden in het verzoek om wijziging.)

Als de gemeente dit verzoek honoreert dan wordt een toewijzing gestuurd met beide ToegewezenProducten (conform regel OP087) met beiden dezelfde ReferentieAanbieder:

- ToewijzingNummer 345001, Product A, Ingangsdatum 1 januari 2020, einddatum 31 december 2020, Referentieaanbieder 667788
- ToewijzingNummer 345002, Product B, Ingangsdatum 1 januari 2020, einddatum 30 juni 2021, Referentieaanbieder 667788

**IV099:**

*Wanneer moet RedenWijziging worden gevuld?*

RedenWijziging geeft aan of ToegewezenProduct in een toewijzingsbericht is gewijzigd ten opzichte van de laatste keer dat deze (met hetzelfde ToewijzingNummer) is verstuurd.

Indien het toegewezen product met hetzelfde toewijzingsnummer ongewijzigd is ten opzichte van de laatst verzonden toewijzing, dan is RedenWijziging leeg.

Op het moment dat er wel een wijziging heeft plaatsgevonden, wordt RedenWijziging gevuld met de code die past bij de wijziging die is doorgevoerd.

Bij de initiële toewijzing van een product (een nieuwe toewijzing met een nieuw toewijzingsnummer) is RedenWijziging altijd leeg.

---

# Technische regels (TR-regels)

**TR002:**

*Geboortedatum mag niet meer dan 120 jaar voor de Dagtekening liggen, tenzij Geboortedatum onbekend is.*

Geboortedatum is onbekend als DatumGebruik de waarde '3 (dag, maand en jaar onbekend; onbekende datum)' heeft en Datum de waarde '01-01-1900' heeft.

**TR006:**

*De berichtklasse Contact moet een berichtelement Telefoon, en/of de combinatie Huis en Postcode bevatten.*

**TR018:**

*Einddatum moet groter dan of gelijk zijn aan Begindatum.*

**TR019:**

*Bij een output- of inspanningsgerichte werkwijze moet de melding van de start of de stop van de ondersteuning gerelateerd zijn aan een toewijzing op basis van het ToewijzingNummer.*

**TR056:**

*Identificatie moet per berichtsoort uniek zijn voor de verzendende partij.*

**TR061:**

*Bij een Cliënt moet minimaal één Adres voorkomen waarvan Soort de waarde '01' (BRP-adres), '02' (Correspondentie-adres) of '03' (Verblijfadres) heeft.*

**TR063:**

*Indien StatusAanlevering de waarde 3 (aanlevering verwijderen) bevat, dan moet voor de betreffende Cliënt een eerdere aanlevering met dezelfde logische sleutel verstuurd zijn.*

Gezien het corrigerende karakter van een aanlevering met StatusAanlevering 3, is het niet nodig om hierop overige inhoudelijke controles uit te voeren.

Opmerking:

Deze regel is bedoeld om het gebruik van de waarde 3 in goede banen te leiden en zegt niets over het mogelijk toegestaan zijn van deze waarde. Eventuele beperkingen van dit gebruik worden via een constraint (of eventueel andere technische regels) beschreven.

**TR071:**

*StatusAanlevering mag niet de waarde '3' bevatten als er voor de betreffende melding start zorg al een stop zorg is verstuurd.*

**TR074:**

*Indien StatusAanlevering de waarde '1' bevat, dan moet de sleutel van de betreffende aanlevering niet alleen uniek zijn binnen het bericht zelf, maar ook in combinatie met alle reeds ontvangen berichten.*

**TR101:**

*Binnen een bericht zijn dubbele regels niet toegestaan.*

Dat betekent dat voor iedere berichtklasse de logische sleutel in combinatie met de logische sleutels van de bovenliggende berichtklassen uniek moet zijn.

**TR134:**

*Vullen met een bestaande datum die niet groter is dan de Dagtekening van het bericht.*

**TR135:**

*Vullen met een bestaande datum die niet in de toekomst ligt.*

**TR137:**

*Vullen met een waarde die groter is dan, of gelijk is aan de Begindatum van de aangeduide periode én die niet groter is dan de Dagtekening van het bericht.*

**TR302:**

*Een Product mag alleen vaker in een toewijzingsbericht voorkomen indien de zorgperiodes elkaar niet overlappen.*

Indien de productcode niet is meegegeven dan geldt deze technische regel op niveau van productcategorie. Indien productcategorie leeg is, dan mag de toewijzing met geen enkel ander toegewezen product overlappen.

Verwijderde toewijzingen (waarvan de einddatum gelijk is aan de ingangsdatum en de reden wijziging is gevuld met 13 (Verwijderd)) maken geen onderdeel uit van de bepaling of er sprake is van stapeling. Deze toewijzingen worden niet gezien als actuele toewijzing.  Hetzelfde geldt voor toewijzingen met reden wijziging 01 (Administratieve correctie (vervallen)) en einddatum gelijk aan ingangsdatum.

**TR304:**

*Bsn moet overeenkomen met Bsn van een Cliënt.*

**TR307:**

*Begindatum in ProductPeriode in Prestatie moet groter dan of gelijk zijn aan Ingangsdatum in ToegewezenProduct.*

**TR308:**

*Einddatum in ProductPeriode in Prestatie moet kleiner dan of gelijk zijn aan Einddatum in ToegewezenProduct, indien die gevuld is.*

**TR314:**

*ReferentieNummer van de Prestatie moet uniek zijn voor de aanbieder binnen het wettelijk domein waarop de Prestatie betrekking heeft, zowel binnen één bericht als berichtoverstijgend.*

ReferentieNummer is uniek voor de aanbieder binnen het wettelijk domein waarop de Prestatie betrekking heeft over alle (sub)versies per berichtsoort.

**TR315:**

*VorigReferentieNummer van de Prestatie moet uniek zijn in het bericht.*

**TR316:**

*Debetregels mogen niet in hetzelfde bericht gecrediteerd worden.*

VorigReferentieNummer mag geen waarde bevatten gelijk aan ReferentieNummer van een Prestatie in hetzelfde bestand.

Creditering van een debet prestatie in hetzelfde bericht is niet toegestaan.

**TR318:**

*Indien iedere DeclaratiePeriode zorg is geleverd, moet DeclaratiePeriode de kalendermaand volgend op voorgaande DeclaratiePeriode zijn.*

Als gedurende één of meer DeclaratiePerioden door de aanbieder geen zorg is geleverd, zal de DeclaratiePeriode Begindatum van de volgende declaratie dag 1 zijn van de kalendermaand waarin de zorg weer is geleverd.

Voorbeeld:

De declaratieperiode is altijd een kalendermaand.

In mei en juni wordt zorg geleverd, die respectievelijk in juni en juli wordt gedeclareerd (met declaratieperioden mei en juni).

In juli en augustus wordt geen zorg geleverd en hoeven er ook geen correcties op vorige declaraties te worden ingediend.

Vanaf september wordt er weer zorg geleverd.

De declaraties die worden verstuurd zullen de volgende DeclaratiePerioden bevatten:

- DeclaratiePeriode mei: 01-05-2022 t/m 31-05-2022
- DeclaratiePeriode juni: 01-06-2022 t/m 30-06-2022
- DeclaratiePeriode September: 01-09-2022 t/m 30-09-2022 (01-09-2022 is dag 1 van de kalendermaand waarin de zorg weer wordt geleverd)

**TR319:**

*Een declaratiebericht bevat alleen prestaties waarvan de ProductPeriode valt binnen de huidige, of een voorgaande declaratieperiode.*

**TR321:**

*Indien in het ToegewezenProduct een Omvang is meegegeven, moet GeleverdVolume in de Prestatie passen binnen Volume in het ToegewezenProduct.*

Hierbij moet rekening worden gehouden met de waarden van Eenheid en Frequentie in het ToegewezenProduct enerzijds en de waarde van Eenheid en de duur van de ProductPeriode in de Prestatie anderzijds.

**TR322:**

*Indien in het ToegewezenProduct een Omvang is meegegeven, moet de som van GeleverdVolume in alle ingediende Prestaties die betrekking hebben op dat ToegewezenProduct passen binnen de toegewezen Omvang.*

Hierbij moet rekening worden gehouden met de waarden van Eenheid, Frequentie en totale loopduur van het ToegewezenProduct enerzijds en de waarde van Eenheid en de duur van de DeclaratiePeriode in de ingediende Prestaties anderzijds. De som van het GeleverdVolume in alle ingediende Prestaties die betrekking hebben op dat ToegewezenProduct mag het maximale volume berekend over de loopduur van de toewijzing niet overstijgen.

**TR323:**

*Een credit Prestatie moet gerelateerd zijn aan een eerder verzonden (goedgekeurde) debet Prestatie op basis van sleutelvelden.*

VorigReferentieNummer van de credit Prestatie moet worden gevuld met ReferentieNummer van de oorspronkelijke debet Prestatie.

**TR326:**

*Een Startbericht mag pas verstuurd worden als er géén actueel Startbericht bij ToegewezenProduct is.*

Een actueel startbericht is een startbericht waarbij nog geen stopbericht is verstuurd met dezelfde combinatie van sleutelvelden (gekoppeld via het toewijzingnummer) en dat niet is verwijderd d.m.v. een startbericht met status aanlevering verwijderen (zie IV008).

De levering is dan nog niet gestopt, en er mag geen start gestuurd worden. Pas nadat er een stopbericht is gekomen kan er opnieuw een startbericht voor het toegewezen product (dezelfde combinatie van sleutelvelden) gestuurd worden.

**TR332:**

*Ieder ToegewezenProduct binnen één gemeente heeft een uniek nummer per wettelijk domein.*

**TR333:**

*DeclaratieNummer van de Declaratie moet uniek zijn voor de aanbieder binnen het wettelijk domein waarop de Declaratie betrekking heeft.*

**TR335:**

*Einddatum mag niet meer dan 5 jaar voor DeclaratieDagtekening liggen.*

**TR337:**

*De DeclaratieIdentificatie dient overeen te komen met de BerichtIdentificatie van een eerder ontvangen Declaratiebericht.*

Een Declaratie-antwoordbericht is een reactie op een eerder verstuurd Declaratiebericht. Ieder Declaratie-antwoordbericht is gerelateerd aan een ingediende Declaratiebericht o.b.v. DeclaratieIdentificatie.

**TR338:**

*De Prestatie is gerelateerd aan een ToegewezenProduct op basis van het Toewijzingnummer.*

**TR339:**

*ProductCategorie in Prestatie moet gelijk zijn aan ProductCategorie in het ToegewezenProduct indien deze opgenomen is.*

Indien de ProductCategorie in de Toewijzing gevuld is, dan moet in het declaratiebericht in de Prestatie de toegewezen ProductCategorie overgenomen worden.

**TR340:**

*ProductCode in Prestatie moet gelijk zijn aan ProductCode in het ToegewezenProduct, indien deze opgenomen is.*

Indien de ProductCode in de Toewijzing gevuld is, dan moet in het declaratiebericht in de Prestatie de toegewezen ProductCode overgenomen worden.

**TR341:**

*Eenheid in Prestatie moet passen bij Eenheid in het ToegewezenProduct.*

Dit betekent dat de eenheid in de declaratie gelijk moet zijn aan de eenheid uit de toewijzing. Bij toewijzing in uren mag ook in minuten gedeclareerd worden. Voor een meer uitgebreide beschrijving zie IV081.

Voor aspecifieke of generieke toewijzingen geldt dat de eenheid overeen dient te komen met de eenheid in de gemaakte contractafspraken.

**TR342:**

*Alleen afgewezen Prestaties dienen meegestuurd te worden in het declaratie-antwoordbericht op een declaratie.*

Indien afkeur op berichtklasse DeclaratieAntwoord plaatsvindt, dan vindt er geen beoordeling plaats van de prestaties. Deze worden niet opgenomen in het antwoordbericht en daardoor is het niet mogelijk om hiervan de som te bepalen. In deze situatie dient het TotaalToegekendbedrag gevuld te worden met 0. Indien berichtklasse DeclaratieAntwoord geen afkeur bevat, geldt onderstaande. Wanneer niet alle prestaties van een ingediende declaratiebericht zijn goedgekeurd, is er in het declaratie-antwoordbericht een verschil tussen het TotaalIngediendBedrag van de declaratie en het TotaalToegekendBedrag in het declaratie-antwoordbericht. Dit verschil dient verklaard te kunnen worden uit de meegestuurde afgewezen prestaties.

De volgende controle dwingt dit af: SOM (Prestatie.IngediendBedrag) = DeclaratieAntwoord.TotaalIngediendBedrag -/- TotaalToegekendbedrag

**TR346:**

*Indien Eenheid ongelijk is aan waarde 83 (Euro’s), moet IngediendBedrag gelijk zijn aan GeleverdVolume vermenigvuldigd met ProductTarief.*

Indien tarief per uur is afgesproken en de declaratie in minuten wordt gedaan, vindt omrekening van het producttarief plaatst. Indien het uurtarief niet deelbaar is door 60, zal het berekende producttarief per minuut niet op hele eurocenten uitkomen. In dat geval wordt bij de berekening van IngediendBedrag eerst het contractuele uurtarief vermenigvuldigd met GeleverdVolume en daarna gedeeld door 60 en afgerond op 2 decimalen.  Zie IV081

**TR347:**

*ReferentieAanbieder is uniek voor de aanbieder binnen het wettelijk domein*

**TR349:**

*Het verzoek om wijziging bericht bevat alle actuele ToegewezenProducten van de cliënt.*

Het verzoek om wijziging bericht bevat alle actuele toegewezen producten van de cliënt, hetzij in OngewijzigdProduct, hetzij in TeWijzigenProduct.

Actuele toewijzingen zijn toewijzingen die op of na de huidige datum geldig zijn, of waarvan de ingangsdatum in de toekomst ligt. Toewijzingen waarvan de einddatum en ingangsdatum aan elkaar gelijk zijn met reden wijziging 13 (Verwijderd) of reden wijziging 01 (Administratieve correctie ((vervallen)), worden niet gezien als actuele toewijzing.

Alle actuele toewijzingen zijn terug te vinden, hetzij als OngewijzigdProduct, hetzij als TeWijzigenProduct.

**TR350:**

*Ieder OngewijzigdProduct in een verzoek om wijziging bericht is gerelateerd aan een actueel toegewezen product op basis van het ToewijzingNummer.*

**TR351:**

*Ieder TeWijzigenProduct in een verzoek om wijziging is gerelateerd aan een actueel ToegewezenProduct op basis van ToewijzingNummer.*

**TR352:**

*Bij een verzoek om wijziging komt minstens 1 OngewijzigdProduct of TeWijzigenProduct voor.*

Een verzoek om wijziging bericht is gebaseerd op een situatie waarbij er minstens 1 actuele toewijzing is.

In het bericht moet daarom minstens 1 product zitten dat ongewijzigd blijft of gewijzigd moet worden, aangezien alle op Ingangsdatum geldige of in de toekomst geldige ToegewezenProducten voor die betreffende aanbieder/cliënt in het verzoek om wijziging bericht moeten worden opgenomen

**TR353:**

*Bij een verzoek om wijziging komt minstens 1 TeWijzigenProduct of NieuwProduct voor.*

Als er helemaal niets veranderd hoeft te worden is er geen aanleiding voor een VOW bericht, dus moet minstens een te wijzigen product of een nieuw toe te wijzen product zijn.

**TR355:**

*ReferentieAanbieder in het antwoordbericht komt voor in een eerder verzoek om toewijzing of verzoek om wijziging.*

ReferentieAanbieder in het antwoordbericht moet worden gevuld met het ReferentieAanbieder van het oorspronkelijke verzoek om wijziging of verzoek om toewijzing.

**TR357:**

*Als GewensteIngangsdatum kleiner dan of gelijk is aan de dagtekening, dan is GewensteIngangsdatum gelijk aan ingangsdatum van het originele ToegewezenProduct.*

Als een wijziging niet in de toekomst moet ingaan, dan is het altijd een wijziging die voor de gehele looptijd geldt.

**TR358:**

*De waarde van TotaalBedrag in TotaalIngediendBedrag  moet gelijk zijn aan de SOM van de waarden van Bedrag in Ingediendbedrag in alle onderliggende Prestaties, rekening houdend met indicatie debet/credit.*

Debetposten worden opgeteld, creditposten worden afgetrokken.

**TR359:**

*Als een antwoordbericht wordt verstuurd, mag er niet al eerder een toewijzingsbericht gestuurd zijn met dezelfde ReferentieAanbieder.*

**TR360:**

*Een antwoordbericht met in VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek), mag alleen gestuurd worden indien er nog geen antwoordbericht is met deze ReferentieAanbieder.*

Er kan slechts 1 maal een antwoordbericht verstuurd worden met in VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek).

Daarna moet er ofwel een toewijzing ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) worden gestuurd.

**TR361:**

*Een Product mag alleen vaker in verzoek om wijziging voorkomen als de zorgperiodes elkaar niet overlappen.*

Voor producten die zijn opgenomen in de berichtklasse TeWijzigenProduct of OngewijzigdProduct moet op basis van het ToewijzingNummer de overlap op de aangevraagde producten gecontroleerd worden. Indien de productcode niet is meegegeven dan geldt deze technische regel op niveau van productcategorie. Indien productcategorie leeg is, dan mag dit met geen enkel ander aangevraagd product overlappen.

**TR365:**

*Als er al een antwoordbericht is met dezelfde ReferentieAanbieder dan moet VerzoekAntwoord daar de waarde 2 (Aanvraag in onderzoek) hebben.*

Er kan slechts 1 maal een antwoordbericht verstuurd worden met in VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek).

Daarna moet er ofwel een toewijzing ofwel een antwoordbericht met in VerzoekAntwoord de waarde 1 (Verzoek afgewezen) worden gestuurd.

**TR366:**

*Iedere Prestatie in een declaratieantwoord is gerelateerd aan een declaratiebericht op basis van ProductReferentie.*

**TR367:**

*Waarde moet overeenkomen met waarde uit het declaratiebericht dat gerelateerd is op basis van ProductReferentie.*

**TR369:**

*Indien in het ToegewezenProduct een Budget is meegegeven, moet de som van GeleverdVolume in alle ingediende Prestaties die betrekking hebben op dat ToegewezenProduct passen binnen het toegewezen Budget.*

**TR371:**

*Waarde moet overeenkomen met waarde van XsdVersie uit het declaratiebericht dat gerelateerd is op basis van DeclaratieIdentificatie.*

**TR373:**

*Indien in een TeWijzigenProduct het Budget of het totaal over toewijzingsperiode wordt gewijzigd, dient GewensteIngangsdatum gelijk te zijn aan de actuele toewijzing.*

Als in een verzoek om wijziging een budgetaanpassing wordt gevraagd, is dit altijd voor de gehele looptijd van de betreffende toewijzing.

**TR374:**

*Een verzoek mag alleen worden verstuurd als er geen onderhanden verzoek is voor de betreffende cliënt van dezelfde aanbieder.*

Een verzoek is in behandeling todat er ofwel een antwoordbericht met VerzoekAntwoord "Verzoek afgewezen" ofwel een toewijzingsbericht met dezelfde ReferentieAanbieder gestuurd is.

**TR375:**

*Indien Product in de toewijzing met ToewijzingNummer leeg is en Einddatum groter dan 31-12-2020 of leeg is, dan leeg laten.*

**TR376:**

*Het DeclaratieNummer dient overeen te komen met het DeclaratieNummer van een eerder ontvangen Declaratie.*

Bij iedere goed of (deels) afgekeurde Declaratie is het Declaratie-antwoord gerelateerd aan een ingediende declaratie o.b.v. DeclaratieNummer. Een goed of (deels) afgekeurde declaratie wordt middels een Declaratie-antwoordbericht verstuurd en is een functionele/inhoudelijke reactie.

**TR377:**

*Indien RedenAfwijzingVerzoek de waarde 8 (Woonplaatsbeginsel) heeft, dan berichtklasse Woonplaatsbeginsel opnemen.*

**TR378:**

*Vullen met een bestaande gemeentecode uit het overzicht van CBS dat actueel is op Ingangsdatum of ToewijzingIngangsdatum.*

De gemeentecode moet voorkomen in de Gemeentelijke indeling (zie [https://www.cbs.nl/](https://www.cbs.nl/))

Indien er sprake is van een gemeentelijke herindeling is het toegestaan om een oudere CBS lijst met gemeentecodes te gebruiken die actueel is op Ingangsdatum van ToegewezenProduct (uit 301-bericht) of in geval van een Verzoek om toewijzing (315-bericht) op ToewijzingIngangsdatum in AangevraagdProduct (uit 315-bericht).

**TR379:**

*Indien ToegewezenProduct wordt verstuurd ter honorering van een VOT of VOW, dient ReferentieAanbieder te worden gevuld met ReferentieAanbieder uit die VOT of VOW, anders leeglaten.*

Dit geldt alleen de eerste keer dat ToegewezenProduct wordt verstuurd na honorering van een VOT of VOW. Een VOT kan meerdere AangevraagdProducten bevatten die ieder een eigen ReferentieAanbieder hebben. ReferentieAanbieder wordt dan overgenomen van het gehonoreerde AangevraagdProduct.

In een VOW kunnen meerdere producten zitten, die samen het verzoek vormen. De ReferentieAanbieder geldt voor het verzoek als geheel. Bij honorering wordt in ieder ToegewezenProduct deze ReferentieAanbieder overgenomen.

**TR380:**

*Vullen met een datum die groter is dan de dagtekening van het bericht.*

**TR381:**

*ProductCode vullen met een code die, volgens de gehanteerde productcodelijst, past bij de ProductCategorie.*

**TR382:**

*De sleutelelementen uit het startbericht moeten in het stopbericht, waarin wordt aangegeven dat de betreffende levering (tijdelijk) beëindigd wordt, ongewijzigd worden overgenomen.*

**TR383:**

*ReferentieAanbieder is uniek voor elk AangevraagdProduct binnen het bericht.*

**TR384:**

*Het is niet toegestaan te declareren op een toewijzing met RedenWijziging waarde "13" (Verwijderd).*

**TR385:**

*Indien de toewijzing goedgekeurde (niet gecrediteerde) prestatiesregels met gelijk ToewijzingNummer heeft, is het niet toegestaan deze toewijzing te verwijderen met RedenWijziging waarde 13 (verwijderd).*

**TR386:**

*Een Product mag alleen vaker in een verzoek om toewijzing voorkomen indien de zorgperiodes elkaar niet overlappen.*

Indien de productcode niet is meegegeven dan geldt deze technische regel op niveau van productcategorie. Indien productcategorie leeg is, dan mag het verzoek met geen enkel ander toegewezen product overlappen.

**TR387:**

*De Begindatum van een ProductPeriode is altijd de eerste dag van de kalendermaand waarop de ProductPeriode betrekking heeft tenzij de Ingangsdatum van de toewijzing later in de betreffende maand ligt.*

De Begindatum van de ProductPeriode in de declaratie is altijd gelijk aan de eerste dag van de maand behorende bij de ProductPeriode, tenzij de Begindatum van de bijbehorende toewijzing later in de betreffende maand ligt. In dat geval is de Begindatum van de ProductPeriode gelijk aan de Begindatum van de toewijzing.

**TR388:**

*De Einddatum van een ProductPeriode is altijd de laatste dag van de kalendermaand waarop de ProductPeriode betrekking heeft tenzij de Einddatum van de toewijzing eerder in de betreffende maand ligt.*

De Einddatum van de ProductPeriode in de declaratie is altijd gelijk aan de laatste dag van de maand behorende bij de ProductPeriode, tenzij de Einddatum van de bijbehorende toewijzing eerder in de betreffende maand ligt. In dat geval is de Einddatum van de ProductPeriode gelijk aan de Einddatum van de toewijzing.

**TR389:**

*Prestatie met DebetCredit in IngediendBedrag waarde Debet mag alleen ingezonden worden voor dezelfde ProductPeriode, ProductCategorie en ProductCode met gelijk ToewijzingNummer als er niet al eerder een debetprestatie is verzonden.*

Indien eerder verzonden Prestatie met DebetCredit in IngediendBedrag waarde Debet, een bijbehorende creditprestatie heeft, is het verzenden van een Prestatie met DebetCredit in IngediendBedrag waarde Debet wel toegestaan. Een debetprestatie heeft een creditprestatie, als er voor dezelfde ProductPeriode een creditprestatie bestaat, waarbij VorigeReferentieNummer de waarde heeft van ReferentieNummer uit de debetprestatie.

**TR390:**

*DebetCredit mag alleen waarde Credit hebben indien voor Prestatie met gelijk ProductReferentie niet een Prestatie met Credit bestaat.*

**TR409:**

*Als RedenAfwijzingVerzoek ongelijk is aan 8 (Woonplaatsbeginsel), dan berichtklasse Woonplaatsbeginsel weglaten.*

**TR410:**

*Een Product mag alleen vaker in de berichtklassen NieuwProduct voorkomen als de zorgperiodes elkaar niet overlappen.*

Indien de productcode niet is meegegeven dan geldt deze technische regel op niveau van productcategorie. Indien productcategorie leeg is, dan mag dit met geen enkel ander aangevraagd product overlappen.

**TR411:**

*Indien Code in Product bij de toewijzing met ToewijzingNummer gevuld is, dan Omvang verplicht vullen.*

**TR412:**

*Indien Code in Product bij de toewijzing met ToewijzingNummer leeg is en einddatum groter dan 31-12-2020 of leeg is, dan leeg laten.*

**TR413:**

*Als er al een StopProduct voor hetzelfde Bsn, ToewijzingNummer, Begindatum en met RedenBeeindiging waarde 20 is, dan moet RedenBeeindiging <> aan waarde 20 zijn, indien StatusAanlevering waarde 1 of 2 heeft.*

**TR414:**

*Als er al een StopProduct voor hetzelfde Bsn, ToewijzingNummer en Begindatum is, dan moet Einddatum >= zijn aan Einddatum uit actuele StopProduct.*

**TR415:**

*Er mag geen StopProduct zijn met gelijk Bsn, ToewijzingNummer, Begindatum en RedenBeeindiging <> waarde 20, indien StatusAanlevering waarde 1 of 2 heeft.*

**TR416:**

*Prestatie met DebetCredit in IngediendBedrag waarde Debet mag alleen ingezonden worden voor dezelfde ProductPeriode, ProductCategorie en ProductCode met gelijk ToewijzingNummer als er niet al een Prestatie met waarde Debet is.*

**TR418:**

*ProductTarief in Prestatie dient overeen te komen met het contractuele tarief van ProductCode.*

---

# Condities (CD-regels)

**CD005:**

*Als Postcode gevuld is, dan verplicht vullen, anders leeg laten.*

**CD007:**

*Als Communicatie / Vorm de waarde 1 (tolk taal) heeft, dan verplicht vullen, anders leeglaten.*

**CD009:**

*Alleen als Soort adres de waarde 04 (tijdelijk adres) heeft, is vullen toegestaan.*

**CD025:**

*Als Adres / LandCode de waarde NL (Nederland) heeft, dan verplicht vullen.*

**CD034:**

*Als Soort adres de waarde 1 (BRP-adres) of 3 (verblijfadres) heeft, dan verplicht vullen.*

**CD041:**

*Indien Code in Product gevuld is, verplicht vullen.*

**CD043:**

*Indien Beschikkingnummer gevuld is, verplicht vullen, anders leeg laten.*

**CD060:**

*Verplicht vullen indien DebetCredit bij het ingediende bedrag de waarde C (credit) heeft, anders leeg laten.*

**CD066:**

*Als type verwijzer gelijk is aan 02, 03, 04 of 05 en ZorgverlenerCode is gevuld, dan is Naamverwijzer leeg.*

**CD067:**

*Als type verwijzer gelijk is aan 02, 03, 04 of 05 en ZorgverlenerCode is leeg, dan is Naamverwijzer gevuld.*

**CD068:**

*Als type verwijzer ongelijk is aan 02, 03, 04 of 05, dan is ZorgverlenerCode leeg.*

**CD075:**

*Verplicht vullen indien Budget gevuld is*

**CD076:**

*Verplicht vullen indien Frequentie waarde 2 (per week)*

Om te kunnen berekenen of bij declaratie een prestatie binnen de totale omvang van de toewijzing valt is het van belang de einddatum van de toewijzing te hebben.

Dit heeft dus te maken met de omrekening van wekelijks toewijzen naar maandelijks declareren en de controle op volume van de declaraties ten opzichte van de toewijzing.

**CD077:**

*Indien Budget gevuld is, dan leeg laten*

**CD078:**

*Indien Omvang gevuld is, dan leeg laten*

**CD079:**

*Indien Budget leeg is, dan verplicht vullen*

**CD080:**

*Indien Code in Product leeg is en Einddatum van het ToegewezenProduct groter dan 31-12-2020 of leeg is, dan leeg laten*

**CD085:**

*Als VerzoekAntwoord de waarde 1 (Verzoek afgewezen) heeft, dan vullen*

**CD086:**

*Als VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) heeft, dan leeg laten*

**CD087:**

*Als eenheid ongelijk is aan 83 (euro's) dan verplicht vullen, anders leeg laten.*

**CD095:**

*Indien Code in AangevraagdProduct leeg is en ToewijzingEinddatum van het AangevraagdProduct groter dan 31-12-2020 of leeg is, dan leeg laten*

**CD096:**

*Indien Code in NieuwProduct leeg is en Einddatum groter dan 31-12-2020 of leeg is, dan leeg laten*

---

# Constraints (CS-regels)

**CS002:**

*De waarde moet voldoen aan de 11-proef.*

**CS003:**

*Indien van toepassing vullen met een waarde die groter is dan, of gelijk is aan de Begindatum (of Ingangsdatum) van de aangeduide periode.*

**CS015:**

*BerichtSubversie vullen met 2.*

**CS025:**

*BerichtVersie vullen met 3.*

**CS050:**

*Als Partnernaam gevuld is, dan NaamGebruik vullen met waarde 1, 2, 3 of 4. Anders waarde 1 of 6 vullen.*

Als Partnernaam gevuld is, wordt in NaamGebruik aangegeven hoe de persoon zijn naam wenst te gebruiken. Hiervoor kunnen de volgende waarden gebruikt worden:

1 (eigen naam), 2 (naam echtgenoot of geregistreerd partner of alternatieve naam), 3 (naam echtgenoot of geregistreerd partner gevolgd door eigen naam) of 4 (eigen naam gevolgd door naam echtgenoot of geregistreerd partner). Indien geen Partnernaam gevuld is, wordt 1 (eigen naam) gevuld voor een persoon of 6 (niet-natuurlijk persoon) indien het een organisatie betreft (zie ook IV045).

**CS058:**

*1 (eerste aanlevering) of 3 (verwijderen aanlevering) vullen.*

**CS089:**

*Als LandCode de waarde NL (Nederland) heeft, dan moet het formaat overeenkomen met dat van een Nederlandse postcode.*

Concreet betekent dit dat de waarde moet voldoen aan de reguliere expressie: [1-9][0-9]{3}[a-zA-Z]{2}. Zie ook [https://www.postcode.nl/](https://www.postcode.nl/).

**CS100:**

*Vullen met een datum die groter dan of gelijk is aan 01-01-2021*

**CS139:**

*Voor Geboortedatum geldt dat DatumGebruik en Datum met elkaar in overeenstemming moeten zijn.*

Concreet betekent dit dat:

Als DatumGebruik de waarde 3 heeft, moet Datum 01-01-1900 zijn;

Als DatumGebruik de waarde 2 heeft, moet Datum 01-01-EEJJ zijn;

Als DatumGebruik de waarde 1 heeft, moet Datum 01-MM-EEJJ zijn.

**CS318:**

*NaamGebruik 6 (Niet-natuurlijk persoon) niet vullen.*

**CS319:**

*Aaneengesloten vullen met cijfers en/of letters*

**CS325:**

*Indien (Totaal)Bedrag de waarde 0 heeft, dan DebetCredit vullen met D (Debet).*

**CS335:**

*RedenWijziging 13 (verwijderd) mag alleen gebruikt worden indien de ingangsdatum gelijk is aan de einddatum.*

Een toewijzing kan verwijderd worden door de einddatum gelijk te zetten aan de ingangsdatum en de reden wijziging te vullen met 13 (Verwijderd). Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden. Deze toewijzingen worden niet gezien als actuele toewijzingen.

**CS336:**

*01 (Administratieve correctie (vervallen)) niet gebruiken.*

**CS337:**

*Einddatum in de ProductPeriode vullen met een datum die valt in dezelfde kalendermaand en jaar als de Begindatum van de ProductPeriode.*

Doordat een ProductPeriode altijd in dezelfde maand valt kunnen er geen productperiodes over meerdere maanden ingediend worden.

**CS338:**

*Indien eenheid de waarde 14, 16, 83 of 84 heeft en Einddatum groter dan 31-12-2020 of leeg is, dan Frequentie vullen met de waarde 2 , 4 of 6.*

Indien eenheid de waarde 14 (etmaal), 16 (dagdeel), 83 (euro's) of 84 (stuks (inspanning)) heeft en Einddatum > 31-12-2020 of leeg is, dan Frequentie vullen met de waarde 2 (Per week), 4 (Per maand) of 6 (Totaal binnen geldigheidsduur toewijzing)

**CS339:**

*Indien Eenheid de waarde 83 (euro's) heeft, moet IngediendBedrag gelijk zijn aan GeleverdVolume.*

**CS340:**

*De periode is exact gelijk aan 1 hele kalendermaand.*

**CS343:**

*Indien eenheid de waarde 14, 16, 83 of 84 heeft en ToewijzingEinddatum is groter dan 31-12-2020 of leeg, dan Frequentie vullen met waarde 2, 4 of 6.*

Indien eenheid de waarde 14 (etmaal), 16 (dagdeel), 83 (euro's) of 84 (stuks (inspanning)) heeft en ToewijzingEinddatum > 31-12-2020 of leeg is, dan Frequentie vullen met de waarde 2 (Per week), 4 (Per maand) of 6 (Totaal binnen geldigheidsduur toewijzing)

---

# Restrictions (RS-regels)

**RS001:**

*Minimale waarde 0*

**RS002:**

*Maximale waarde 99*

**RS003:**

*Maximale waarde 9999*

**RS004:**

*Maximale waarde 99999 (5*9)*

**RS005:**

*Maximale waarde 99999999 (8*9)*

**RS006:**

*Maximale waarde 999999999 (9*9)*

**RS007:**

*Minimale lengte 1 positie*

**RS008:**

*Maximale lengte 1 positie*

**RS009:**

*Maximale lengte 2 posities*

**RS010:**

*Maximale lengte 3 posities*

**RS011:**

*Maximale lengte 4 posities*

**RS012:**

*Maximale lengte 5 posities*

**RS013:**

*Maximale lengte 6 posities*

**RS014:**

*Maximale lengte 8 posities*

**RS015:**

*Maximale lengte 9 posities*

**RS016:**

*Maximale lengte 10 posities*

**RS017:**

*Maximale lengte 12 posities*

**RS018:**

*Maximale lengte 15 posities*

**RS019:**

*Maximale lengte 20 posities*

**RS020:**

*Maximale lengte 24 posities*

**RS021:**

*Maximale lengte 25 posities*

**RS023:**

*Maximale lengte 35 posities*

**RS024:**

*Maximale lengte 36 posities*

**RS025:**

*Maximale lengte 64 posities*

**RS026:**

*Maximale lengte 80 posities*

**RS028:**

*Maximale lengte 200 posities*

**RS031:**

*Commentaarvelden niet leeg.*

Ten behoeve van het uitsluiten van empty elements in het xml-bericht.

Bij optionele elementen van het type string is het in xml toegestaan om het element leeg op te nemen in een bericht. Doormiddel van het pattern is dit niet meer toegestaan en moet er altijd vulling zijn anders dan spaties.

**RS032:**

*Datum vullen zonder tijdzone.*

Bij datatypen van het type date is het niet toegestaan een Tijdszone mee te geven.

Bijvoorbeeld:

2016-08-30 is goed

2016-08-30Z is niet goed

**RS033:**

*Geen lege elementen in XML.*

Ten behoeve van het uitsluiten van empty elements in het xml-bericht.

Bij optionele elementen van het type string is het in xml toegestaan om het element leeg op te nemen in een bericht. Doormiddel van het pattern is dit niet meer toegestaan en moet er altijd vulling zijn anders dan spaties.

**RS034:**

*Tijd vullen zonder tijdszone.*

Bij datatypen van het type time is het niet toegestaan om een tijdzone mee te geven. Alleen HH:MM:SS (en optioneel miliseconden .mmm) is toegestaan

Bijvoorbeeld:

13:59:41 of 13.59.41.123 is toegestaan

13.59.41+1 is niet toegestaan

**RS035:**

*Vullen met 4 cijfers.*

**RS036:**

*Vullen met 8 cijfers.*

**RS037:**

*Vullen met 9 cijfers.*

**RS039:**

*Maximale lengte 14 posities*

**RS040:**

*Maximale waarde 999999999999 (12*9)*

**RS045:**

*Aaneengesloten vullen (zonder punten of spaties).*

**RS046:**

*Aaneengesloten vullen met cijfers.*

**RS047:**

*Vullen met BerichtCode volgens de specificatie.*

**RS048:**

*Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten.*