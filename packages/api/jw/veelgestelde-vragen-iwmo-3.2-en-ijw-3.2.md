# Algemene vragen

## Kunnen er bijlagen zoals zorgplannen meegestuurd worden met de berichten?

Het is niet mogelijk om via het berichtenverkeer van iJW/iWmo bijlagen mee te sturen.

## Kan ik nieuwe wensen indienen ten aanzien van iWmo 3.2 en iJw 3.2?

Voor alle iStandaarden (iWlz, iWmo, iJw, iPgb en iEb) is het mogelijk om nieuwe wensen in te dienen. Dit kunt u doen door een mail te sturen naar <info@istandaarden.nl>. Geeft u daarbij zo goed mogelijk aan wat het probleem is dat u opgelost wilt zien. Geef ook uw contactgegevens door, zodat wij extra uitleg bij uw wens kunnen vragen om deze goed in behandeling te nemen.

## Een partij waar ik gegevens mee uitwissel houdt zich niet aan de standaarden. Wat moet ik doen?

Indien een partij zich niet aan de standaarden houdt, kunt u dit melden aan Zorginstituut via <info@istandaarden.nl>. Het Zorginstituut zal dan met u en de betreffende partij contact opnemen om het gebruik van de standaard uit te leggen. Gezamenlijk zorgen ze er dan voor dat de standaard wordt gevolgd.

# Vragen over Toewijzingen

## Waarom is de beschikking uit de toewijzing gehaald?

Een beschikking is een juridisch document tussen gemeente en cliënt. Een toewijzing daarentegen is de opdracht van de gemeente aan de aanbieder voor het leveren van zorg aan de cliënt. Er is geen directe relatie tussen beide onderdelen. Door de beschikking uit het bericht te halen kan een gemeente nu nieuwe beschikkingen afgeven zonder dat dit per definitie leidt tot nieuwe toewijzingen en bijbehorende start- en stopberichten. Dit vermindert de administratieve lasten.

## Waarom is het toewijzingsnummer in de start- en stopberichten niet verplicht?

Omdat de start- en stopberichten ook voor de taakgerichte variant gebruikt kunnen worden, is het toewijzingsnummer niet verplicht. In de taakgerichte uitvoeringsvariant wordt namelijk geen toewijzing op cliëntniveau afgegeven.

## Welke toewijzingen moeten in het toewijzingsbericht opgenomen worden?

Doordat niveau van de beschikking uit de toewijzing is verwijderd per 1-1-2021, moeten in het toewijzingsbericht voor één cliënt altijd alle toewijzingen worden opgenomen voor één aanbieder die op of na de aanmaakdatum van het bericht geldig zijn, plus alle toewijzingen die gewijzigd zijn ten opzichte van het voorgaande toewijzingsbericht.

## Hoe kan ik een toewijzing corrigeren of wijzigen?

Wat in een toewijzing gewijzigd mag/kan worden zonder een nieuwe toewijzing aan te maken is nader uitgewerkt in bedrijfsregel OP033x1. Onder het corrigeren van toewijzingen wordt verstaan, het inkorten, het oprekken van de einddatum van de en het verwijderen van een toewijzing. Ook kunnen omvang (volume, eenheid, frequentie) en budget worden gewijzigd.  (OP033x1, OP362)

## Hoe kan ik een toewijzing verwijderen?

Door de einddatum van de toewijzing te wijzigen zodat deze gelijk is aan de ingangsdatum van de toewijzing. Daarbij wordt RedenWijziging gevuld met 13 (Verwijderd). De gewijzigde toewijzing wordt verstuurd naar de aanbieder. Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden. (OP033x1, OP362)

## Wat is het verschil tussen code 01 en 14 in de lijst Reden wijziging toewijzing?

In Release 3.1 (april 2022) is er gekozen voor een eenduidige werkwijze voor corrigeren van invoerfouten
De redenen voor het wijzigen van een toewijzing zijn toen gewijzigd. Eén code is komen te vervallen en twee nieuwe codes vervangen deze code. Zo is er een eenduidige werkwijze en duidelijkheid over de status van de toewijzingen waarvan de ingangs- en einddatum gelijk zijn aan elkaar.
Wijzigingen
De volgende wijzigingen zijn toen doorgevoerd en van invloed op de migratie van Release 3.0 naar 3.1:
- In de codelijst ‘Reden wijziging toewijzing’ is reden 01 ‘Administratieve correctie’ komen te vervallen.
- Daarvoor in de plaats zijn de redenen 13 ‘Verwijderd’ en 14 ‘Administratieve correctie’ opgenomen. Reden 14 lijkt hetzelfde als reden 01. Echter is reden 01 in de releases tot en met iWmo/iJw 3.0 voor meerdere doeleinden gebruikt.
- Een nieuwe regel stelt dat een toewijzing alleen verwijderd mag worden indien dit niet leidt tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg.
- Een nieuwe regel stelt dat een toewijzing enkel de reden wijziging 13 ‘Verwijderd’ mag bevatten als de einddatum gelijk is aan de ingangsdatum.
- Nieuwe regels stellen dat er niet gedeclareerd kan worden op verwijderde toewijzingen (met reden wijziging 13 ‘Verwijderd’).
- 
## Welke toewijzingen moeten in een toewijzingsbericht opgenomen worden, indien er maar één toewijzing wordt gewijzigd?

Een toewijzingsbericht bevat **altijd** **alle** actuele toewijzingen plus de eventueel gewijzigde toewijzingen ten opzichte van het vorige toewijzingsbericht voor één gemeente, één aanbieder en één cliënt.

Actuele toewijzingen zijn toewijzingen waarvan de einddatum leeg is of waarvoor geldt dat de einddatum op of na de huidige datum ligt.

## Wat is het verschil tussen ‘Stuks (inspanning)’ en ‘Stuks (output)’?

Het verschil tussen ‘Stuks (inspanning)’ en ‘Stuks (output)’, is de uitvoeringsvariant waarbinnen deze eenheid valt.

‘Stuks (inspanning)’ wordt gebruikt binnen de inspanningsgerichte uitvoeringsvariant en houdt in dat alleen de daadwerkelijke levering / inspanning gedeclareerd mag worden.

‘Stuks (output)’ wordt gebruikt binnen de outputgerichte uitvoeringsvariant en voor declaratie is het leveren van de afgesproken output van belang. Het accent ligt daarbij niet op de inspanning die daarvoor geleverd is maar op de output die behaald moet worden.

## Hoe kan ik van een reeds afgegeven toewijzing de ingangsdatum vervroegen?

Optie 1

Er wordt een extra toewijzing aangemaakt vanaf de gewenste ingangsdatum tot en met één dag voor de ingangsdatum van de eerste afgegeven toewijzing.

Optie 2

De afgegeven toewijzing kan worden ingetrokken.

## Kun je op basis van een generieke toewijzing meerdere zorgtrajecten starten?
Ja, het is mogelijk om op basis van een generieke toewijzing meerdere zorgtrajecten te starten. Dit wordt ondersteund binnen de iJw-standaard. In het regelrapport wordt dit als volgt beschreven:

OP302: Bij een generieke toewijzing (in de toewijzing is alleen het budget gevuld, productcategorie en productcode zijn leeg), declareert de aanbieder 1 of meer productcategorie(en) met bijpassende productcode(s) passend binnen het afgesproken contract met de gemeente. (Bron: regelrapport-ijw-3.2.0.docx)
Dit betekent dat de aanbieder binnen het afgesproken contract met de gemeente, op basis van de generieke toewijzing, meerdere zorgtrajecten kan starten en declareren. Elk zorgtraject kan bestaan uit een combinatie van productcategorieën en productcodes die passen binnen het toegewezen budget.

Deze zorgtrajecten worden niet afzonderlijk voorzien van een startbericht. Voor de gehele toewijzing wordt 1 generiek startbericht gemaakt bij start van de eerste levering.

Samenvatting
Op basis van een generieke toewijzing kan de aanbieder meerdere zorgtrajecten starten en declareren. Elk zorgtraject moet bestaan uit productcategorieën en productcodes die passen binnen het afgesproken contract met de gemeente en binnen het toegewezen budget.

# Vragen over VOT & VOW (Verzoek Om Toewijzing & Verzoek Om Wijziging)

## Wanneer gebruik ik een Verzoek om Toewijzing (VOT) en wanneer een Verzoek om Wijziging (VOW)?

Een Verzoek om Toewijzing (VOT) moet gebruikt worden wanneer de cliënt zich bij de aanbieder meldt met een wettelijke verwijzing of met een open beschikking.

Een Verzoek om Wijziging (VOW) moet gebruikt worden indien er sprake is een gewijzigde zorgsituatie bij een al lopende zorglevering, waardoor aanpassing van de actuele toewijzingen gewenst is.

Om de juiste afweging te maken welk bericht gebruikt moet worden, is een stroomschema opgesteld: ‘Wanneer wordt VOT of VOW gebruikt?’. Dit schema is als [infographic](https://www.istandaarden.nl/iwmo/ondersteuning-bij-de-releases/vow-informatiepunt)te vinden op de ondersteuningspagina’s voor release 3.2.

## Wanneer gebruik ik in RedenAfwijzingVerzoek code 5 (Andere Gemeente) en wanneer code 8 (Woonplaatsbeginsel)?

Code 8 (Woonplaatsbeginsel) mag alleen gebruikt worden als een Verzoek om Toewijzing afgewezen wordt in verband met het woonplaatsbeginsel. Deze reden is dus alleen van toepassing in het domein van de Jeugdwet (iJw).

Code 5 (Andere gemeente) moet in alle andere gevallen gebruikt worden wanneer een Verzoek om Toewijzing of Verzoek om Wijziging aan de niet verantwoordelijke gemeente verstuurd is, of wanneer tijdens het beoordelingsproces blijkt dat de gemeente niet langer verantwoordelijk is voor de cliënt.

## Wat wordt bedoeld met Raamcontract J/N?

Raamcontract J/N is een indicator of de aanbieder voor de te leveren ondersteuning beroep doet op een landelijk raamcontract.
De VNG maakt namens alle gemeenten afspraken met aanbieders die een essentiële, landelijke functie vervullen in het zorglandschap. Voor deze functies sluiten we (namens het collectief van gemeenten) raamovereenkomsten waarbinnen gemeenten naar gebruik afrekenen. Zij hebben hiervoor het mandaat gekregen in de algemene ledenvergadering.
zie : https://vng.nl/artikelen/over-landelijke-inkoop-jeugdzorg-en-wmo-zg

## Hoe wordt een VOW-bericht gevuld?

Voor het vullen van het VOW-bericht is een infographic opgesteld: ‘Hoe wordt VOW gevuld?’. Deze infographic bestaat uit twee onderdelen. Het eerste onderdeel is een stroomschema. Aan de hand hiervan kunt u controleren of het VOW-bericht volledig en correct gevuld is en klaar is om ingediend te worden.

Het tweede deel van de infographic geeft een overzicht van alle functionele wijzigingen die een aanbieder kan aanvragen als gevolg van een gewijzigde zorgsituatie. Per wijziging is een scenario uitgewerkt welke berichtklassen binnen het VOW-bericht gevuld moeten worden en hoe de elementen binnen deze berichtklassen gevuld moeten worden.

Deze PowerPoint is te vinden op de ondersteuningspagina's voor release 3.2 : https://www.istandaarden.nl/iwmo/ondersteuning-bij-de-releases/vow-informatiepunt)

## Hoe wordt het toewijzingsbericht gevuld na het honoreren van een VOW?

Om het vullen van een toewijzingsbericht als gevolg van het honoreren van een VOW uniform te laten verlopen, is een tabel met uitgewerkte scenario’s gemaakt. Algemeen geldt : Een VOW wordt in zijn geheel goedgekeurd, of afgekeurd. Dat betekent dat hetgeen wordt aangevraagd in een VOW, niet mag worden gewijzigd door de gemeente.

De tabel beschrijft de situatie die in het VOW-bericht gevraagd wordt en verwijst dan naar een scenario. In het uitgewerkte scenario wordt vervolgens weergegeven welke toegewezen producten in het toewijzingsbericht moeten worden opgenomen en hoe de elementen van deze toegewezen producten gevuld moeten worden.

De tabel en de uitgewerkte scenario’s zijn als te vinden op de ondersteuningspagina’s voor release 3.2. https://www.istandaarden.nl/iwmo/ondersteuning-bij-de-releases/vow-informatiepunt)

## Voor Release 3.0 was het mogelijk om een inhoudelijke reactie op een Verzoek om Toewijzing (315) te geven met een retourbericht (316). Vervangt het antwoordbericht (319) deze inhoudelijke terugkoppeling?

Ja, het antwoordbericht vervangt per 1-1-2021 deze inhoudelijke terugkoppeling in het 316-retourbericht. In versie 2.4 kon de gemeente in het retourbericht van het Verzoek om Toewijzing (316) een inhoudelijke reactie geven met een functionele retourcode. Dit had als doel om aan te geven waarom een verzoek niet gehonoreerd werd. Dit was in feite een tussenoplossing. Vanaf versie 3.0 is deze functionaliteit vervangen door het antwoordbericht (319). Vanaf versie 3.0 bevat het retourbericht van het Verzoek om Toewijzing (316) daarom geen functionele retourcodes meer.

## Mijn Verzoek om Wijziging is afgewezen door de gemeente. Wat nu?

Een gemeente dient een VOW in zijn geheel af te wijzen of in zijn geheel te honoreren en mag in dat laatste geval zelf geen aanpassingen aanbrengen in de gewenste zorg. Indien een gemeente een VOW afwijst kan, afhankelijk van de reden afwijzing en eventueel in overleg met de gemeente, een nieuw Verzoek om Wijziging worden ingediend. Ieder Verzoek om Wijziging wordt opnieuw door de gemeente beoordeeld.

De actuele toewijzingen blijven na afwijzing van een VOW ongewijzigd. De aanbieder dient de zorg dan volgens die toewijzingen door te leveren.

## Ontvang ik een nieuwe toewijzing nadat ik een Verzoek om Wijziging heb ingediend?

Als een gemeente een Verzoek om Wijziging honoreert, zal deze een nieuw toewijzingsbericht sturen met daarin alle actuele toewijzingen en alle ten opzichte van het voorgaande toewijzingsbericht gewijzigde toewijzingen voor de betreffende cliënt. De toewijzingen in dit nieuwe toewijzingsbericht bevatten de complete nieuwe situatie voor de cliënt bij die aanbieder.

## Wordt een Verzoek om Toewijzing (315) alleen gebruikt binnen iJw of kan deze ook binnen iWmo gebruikt worden?

Een Verzoek om Toewijzing (315) kan zowel binnen iJw (als gevolg van een wettelijke verwijzing) als binnen iWmo (als gevolg van een open beschikking) gebruikt worden.

Niet iedere gemeente werkt met open beschikkingen. Daarom zal niet iedere aanbieder gebruik kunnen maken van het 315-bericht binnen de iWmo. Dit is een afspraak tussen gemeenten en aanbieders.


## Is het gebruik van het nieuwe VOW-bericht verplicht?

Het VOW-bericht en bijbehorende proces zijn vanaf release 3.0 verplicht als de aanbieder bij de gemeente een verzoek mag indienen om de toegewezen zorg te wijzigen. Bijvoorbeeld omdat er een verandering is in de situatie van de cliënt.

Momenteel zijn er veel verschillende manieren waarop een aanbieder de wijziging in de cliëntsituatie en daarmee een verzoek tot een wijziging in de toegewezen zorg aan de gemeente moet doorgeven. Deze ongewenste diversiteit zorgt voor onduidelijkheid en fouten. Dit is zowel voor de aanbieder als voor de gemeente onwenselijk.

Voor deze situaties is in release 3.0 daarom het VOW-bericht gemaakt, zodat hier vanaf 2021 een standaard bericht en proces voor is. De aanbieder vraagt met het VOW-bericht dus een gewenste wijziging aan in de zorg voor de cliënt. Het is aan de gemeente om deze wijzigingsaanvraag te beoordelen en vervolgens te honoreren of af te wijzen (eventueel na eerst nader onderzoek te hebben gedaan).

Er zijn ook gemeenten waar de aanbieder momenteel geen rol heeft in het doorgeven van wijzigingen in de cliëntsituatie. De gemeente zorgt in dit geval zelf voor het signaal voor wijzigingen en verlengingen of heeft dit bij een andere organisatie of bij de cliënt zelf belegd. In dat geval wordt er geen gebruik gemaakt van het VOW-bericht en zal de gemeente geen signaal vanuit de aanbieder ontvangen. De gemeente zorgt dan zelf voor eventuele wijzigingen in de toewijzingen en zorgt dat de aanbieder deze tijdig ontvangt om de juiste zorg aan de cliënt te kunnen leveren.

## Moeten alle actuele toewijzingen van een cliënt in een VOW-bericht worden opgenomen?

Ja. Een VOW-bericht bevat alle actuele toewijzingen met eventueel de gewenste wijzigingen op deze toewijzingen. Daarnaast bevat het VOW-bericht ook alle nieuwe gewenste producten.

Een VOW geeft dus de complete nieuwe gewenste situatie van een cliënt weer. Zie voor een uitgebreidere toelichting op het vullen van een VOW-bericht IV092 in het informatiemodel alsmede de infographic https://www.istandaarden.nl/iwmo/ondersteuning-bij-de-releases/vow-informatiepunt)op de ondersteuningspagina van het Zorginstituut.

## Welke voordelen heeft het gebruik van het VOW-bericht?

Met de introductie van het VOW-bericht wordt er een uniforme werkwijze geïntroduceerd voor het doorgeven van wijzigingen in de zorgvraag van een cliënt vanuit de aanbieder, waarbij te allen tijde inzicht is in de status van het verzoek. Door de ongewenste diversiteit in werkwijzen te beperken, worden de administratieve lasten binnen het wijzigingsproces verminderd.

## In welke situaties kan een VOW worden gebruikt?

Een Verzoek om Wijziging wordt onder andere gebruikt voor die situaties, waar eerder in het informatiemodel stond “neem buiten het berichtenverkeer contact op met de gemeente” als er sprake is van een wijziging in de zorgvraag van de cliënt. Voorbeelden hiervan zijn opgenomen in de infographic https://www.istandaarden.nl/iwmo/ondersteuning-bij-de-releases/vow-informatiepunt) die te vinden is op de ondersteuningspagina voor release 3.2.

## Moet de gemeente altijd een nieuwe beschikking sturen op het moment dat een VOW wordt gehonoreerd?

Nee, dat is niet altijd nodig. Dit is afhankelijk van de inhoud van de beschikking en de toewijzing. Indien een gevraagde wijziging past binnen de afgegeven beschikking is het niet nodig om een nieuwe beschikking af te geven.

Een beschikking is een document tussen de gemeente en de burger. Het afgeven van een beschikking is geen onderdeel van het berichtenverkeer. Een beschikking is niet hetzelfde als een toewijzing. Een toewijzing is de opdracht tot het leveren van zorg en/of ondersteuning vanuit de gemeente naar de aanbieder.

## Moet bij een VOW een onderbouwing worden ingediend?

Via het berichtenverkeer is hier geen mogelijkheid voor. Wel dient er een reden voor het verzoek te worden opgegeven bij het indienen van een VOW. Binnen release 3.2 zijn de volgende redenen mogelijk:

- Verandering cliëntsituatie
- Wijziging zorgplan

Indien de gemeente tevens een onderbouwing vraagt voor een ingediend VOW, dient dit buiten het berichtenverkeer om aangeleverd te worden.

## Kan ik nieuwe producten toevoegen en zorg verzwaren zonder dat er een keukentafelgesprek is geweest/het vastligt in een beschikking?

Of er een keukentafelgesprek moet plaatsvinden en/of een nieuwe beschikking moet worden afgegeven, ligt aan de situatie. Een VOW wordt gebruikt in die situaties waar er op dit moment buiten het berichtenverkeer om contact met de gemeente wordt opgenomen. Als in het huidig proces van de gemeente is vastgelegd dat een cliënt zelf contact moet opnemen met de gemeente voor een keukentafelgesprek, zal dit door het nieuwe bericht niet wijzigen.

## Moet ik er bij het aanvragen van een wijziging rekening mee houden dat een toewijzing een nieuw toewijzingsnummer moet krijgen?

Nee, bij het aanvragen van een wijziging hoef je geen rekening te houden met het uiteindelijke resultaat in de toewijzing. Ongewijzigde toewijzingen komen in de klasse OngewijzigdProduct, gewijzigde toewijzing in de klasse TeWijzigenProduct en nieuwe producten in de klasse NieuwProduct. Het kan zijn dat een wijziging van een bestaande toewijzing (bijvoorbeeld het wijzigen van volume, eenheid of frequentie) leidt tot het afsluiten van een bestaande toewijzing en het aanmaken van een nieuwe toewijzing. Voorbeelden hiervan zijn opgenomen in de infographic Hoe wordt toewijzingsbericht gevuld na VOW https://www.istandaarden.nl/iwmo/ondersteuning-bij-de-releases/vow-informatiepunt.

## Kan de gemeente de aanbieder verplichten het VOW-bericht te gebruiken?

Indien de gemeente het wijzigingsproces zo heeft ingeregeld dat de aanbieder een verzoek kan indienen om andere zorg te mogen leveren aan de cliënt, is zowel de aanbieder als ook de gemeente verplicht om hierbij gebruik te maken van het VOW-bericht en het bijbehorende proces.

## Aanbieders sturen een Start zorg of Stop zorg weleens twee keer op. Wat moet ik als gemeente doen als het VOW-bericht dubbel naar mij wordt verzonden?

Er kan op enig moment maar één VOW of één VOT in behandeling zijn voor een cliënt. Als één van deze berichten nog in behandeling is moet ieder ander VOW- of VOT-bericht worden afgekeurd.

## Is het technisch verplicht om bij de ingangsdatum van een VOW een datum in de toekomst te vullen?

De nieuwe situatie zoals gedefinieerd in het VOW bericht moet altijd een toekomstige situatie zijn. Wijzigingen mogen niet met terugwerkende kracht aangevraagd worden. Omdat het wel mogelijk is om bijvoorbeeld een volume over een totale looptijd, of een budget over een bepaalde periode te verhogen/verlagen, is het technisch wel toegestaan om het veld GewensteIngangdatum te vullen met een datum in het verleden.

## Hoe ga ik om met een VOW met meerdere producten, waarvan de ene wordt goedgekeurd en de andere wordt afgekeurd?

Een VOW dient altijd in zijn geheel te worden goedgekeurd dan wel in zijn geheel te worden afgekeurd. In tegenstelling tot een VOT is het bij een VOW niet toegestaan om per product goed te keuren dan wel af te keuren dan wel wijzigingen aan te brengen in de gewenste producten en volumes. De situatie in de vraag kan dus niet voorkomen.

## Als op het moment van toewijzen de gewenste ingangsdatum uit de VOW verstreken is, mag de aangevraagde wijziging (bijvoorbeeld aanpassing van het volume) dan met terugwerkende kracht toegewezen worden?

Dit mag alleen na overleg met en instemming van de aanbieder. Dit om te voorkomen dat de rechtmatigheid van reeds geleverde zorg in het gedrang komt.

## Kan ik een VOW intrekken als ik er achter kom dat ik niet de juiste gewenste zorg heb verstuurd in het VOW-bericht?

Het is op dit moment niet mogelijk om een VOW-bericht in te trekken. Mocht je er achter komen dat een verstuurd VOW-bericht niet de gewenste zorg bevat voor een cliënt, dient buiten het berichtenverkeer om contact te worden opgenomen met de gemeente en gevraagd worden om het verzoek af te wijzen. Nadat het verzoek is afgewezen kan eventueel een nieuw VOW-bericht worden verstuurd.

**Let op:** Zolang het onjuiste VOW-bericht nog in behandeling is kan er geen ander VOW-bericht voor de betreffende cliënt worden ingediend (TR374).

## Welke berichten kunnen volgen op een VOW- of een VOT-bericht?

Als reactie op een verstuurd VOW en VOT zijn er drie mogelijkheden. De gemeente kan het verzoek honoreren door een toewijzingsbericht (301) te sturen. Ook kan de gemeente het verzoek afwijzen met het antwoordbericht (319). De derde mogelijkheid is dat de gemeente het verzoek nader gaat onderzoeken en dit meldt met het antwoordbericht (319).

Nadat de gemeente dit onderzoek heeft afgerond zal deze het verzoek alsnog honoreren met een toewijzingsbericht of afwijzen met een antwoordbericht.

## Mag ik als aanbieder starten met het leveren van de gewenste zorg indien de gemeente een VOW in onderzoek neemt?

De toewijzing gaat over de rechtmatigheid van de te leveren zorg. Zolang de aanbieder geen aangepaste toewijzing heeft ontvangen van de gemeente, blijft de eerdere toewijzing van toepassing. Indien een gewenste ingangsdatum uit een VOW verstrijkt voordat de gemeente het verzoek heeft gehonoreerd of afgewezen, kan de aanbieder buiten het berichtenverkeer om contact opnemen met de gemeente om af te spreken welke zorg geleverd mag worden.

## Gaat een verzoek om toewijzing dat wordt afgewezen o.b.v. het woonplaatsbeginsel automatisch over naar de nieuwe gemeente?

Het is aan de gemeenten onderling om afstemming te hebben over een verzoek waarvan de ontvangende gemeente vindt niet financieel verantwoordelijk te zijn. Pas na overeenstemming, zal de ontvangende gemeente het verzoek afkeuren met reden woonplaatsbeginsel (en voorzien van de juiste gemeente), en is het aan de aanbieder om het verzoek opnieuw in te dienen bij de aangegeven gemeente. Aangezien die gemeente op de hoogte is, kan de nieuwe gemeente het verzoek direct in behandeling nemen.

## Hoe te handelen als gemeente wanneer een aanbieder toch een VOW verstuurt, maar geen rol heeft in het doorgeven van wijzigingen in de cliëntsituatie?

Er zijn gemeenten waar de aanbieder momenteel geen rol heeft in het doorgeven van wijzigingen in de cliëntsituatie. De gemeente zorgt in dit geval zelf voor het signaal voor wijzigingen en verlengingen of heeft dit bij een andere organisatie of bij de cliënt zelf belegd.

Als een aanbieder bij een gemeente hierin geen rol speelt maar toch een VOW bericht verstuurt naar de gemeente dient dit VOW bericht wel afgehandeld te worden. De handelswijze hiervoor is als volgt:

De gemeente stuurt een 318-retourbericht en vervolgens een afwijzing van het VOW middels een 319-bericht. Hierbij wordt RedenAfwijzingVerzoek gevuld met de waarde 4 (“Past niet binnen contract”). De aanbieder stuurt na ontvangst van het 319-bericht het 320-retourbericht.

Het is namelijk noodzakelijk om ook in deze situatie het VOW bericht af te handelen, aangezien het niet is toegestaan een verzoek om wijziging of verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld (OP350).

## Hoe te handelen als gemeente wanneer een aanbieder een VOT verstuurt, maar geen contract heeft voor het leveren van zorg bij betreffende gemeente.

De gemeente stuurt een 318-retourbericht en vervolgens een afwijzing van het VOW middels een 319-bericht. Hierbij wordt RedenAfwijzingVerzoek gevuld met de waarde 3 (“Geen contract”). De aanbieder stuurt na ontvangst van het 319-bericht het 320-retourbericht.

Het is namelijk noodzakelijk om ook in deze situatie het VOT bericht af te handelen, aangezien het niet is toegestaan een  verzoek om toewijzing te sturen als een eerder verzoek nog niet is afgehandeld (OP350).

# Vragen over Declareren

## In de header van het declaratie-antwoordbericht staan de elementen BerichtIdentificatie en DeclaratieIdentificatie. Wat is het verschil tussen deze twee elementen?

Het element BerichtIdentificatie is de identificatie en de dagtekening van het bericht. Dit element staat in de header van ieder iStandaarden bericht en is ter identificatie van het specifieke bericht. Bij het declaratie-antwoordbericht is dit dus de identificatie van dat betreffende declaratieantwoordbericht.

Het element DeclaratieIdentificatie bevat de waarde van BerichtIdentificatie van het bijbehorende declaratiebericht. Hiermee is het declaratie-antwoordbericht altijd te koppelen aan het bijbehorende declaratiebericht. Dit is van belang indien afkeur op het gehele bericht plaatsvindt. In dat geval wordt de berichtklasse DeclaratieAntwoord niet opgenomen in het declaratieantwoordbericht en kan de koppeling dus niet via het DeclaratieNummer worden gelegd.

## Hoe ga ik om met frequentie ‘Per week’ nu DeclaratiePeriode een kalendermaand is?

De frequentie ‘Per week’ sluit niet aan op de declaratieperiode maand. Een week kan over de grens van een kalendermaand heen gaan en daardoor in twee kalendermaanden vallen. Er zijn daarom eenduidige afspraken gemaakt voor het indienen van declaraties bij toewijzingen met de frequentie

‘Per week’. Deze afspraken gaan over het bepalen van de juiste declaratieperiode en productperiode bij de leveringen en het vaststellen van het maximaal te declareren volume per maand.

Voor zowel de inspanningsgericht als outputgerichte uitvoeringsvariant is de werkwijze beschreven. Deze [werkwijzen](https://www.istandaarden.nl/ibieb/werkwijze-frequentie-per-week) zijn als aanvullende documentatie te vinden op de ondersteuningspagina voor release 3.2.

## Is het mogelijk om binnen een declaratiebericht af te keuren op het niveau van prestatieregel?

Ja, dit is ook binnen de huidige release nog steeds mogelijk. Indien een declaratiebericht meerdere prestatieregels bevat, is het mogelijk om een aantal prestatieregels af te keuren terwijl andere prestatieregels goedgekeurd worden.

Het is niet mogelijk om een prestatieregel gedeeltelijk goed te keuren. Een prestatieregel wordt altijd helemaal goedgekeurd of helemaal afgekeurd.

## Is het mogelijk om trajecten per maand te laten declareren?

Volgens de definitie van de handreiking trajectfinanciering wordt met een traject een arrangement of traject bedoeld waarbij de financiering is opgedeeld in 2 delen.

Aanbieder en gemeente spreken af dat een bepaald percentage bij de start van het arrangement / traject wordt gedeclareerd en het restant als het arrangement / traject is beëindigd.

Voor deze situaties is een declaratie per maand dus niet toegestaan. Zie voor de juiste werkwijze de Handreiking trajectfinanciering[.](https://www.istandaarden.nl/ibieb/handreiking-trajectfinanciering-iwmo-30-en-ijw-30)

In andere gevallen is het wel mogelijk om een volume per maand toe te wijzen, dat dan ook per maand gedeclareerd wordt.

## Hoe declareer ik een toewijzing met de eenheid Euro's

Als Eenheid de waarde 83 (Euro’s) bevat, wordt in GeleverdVolume een bedrag gevuld in eurocent. Bijvoorbeeld 10000 is gelijk aan tienduizend eurocent oftewel 100 euro. Het tarief wordt niet gevuld, omdat er geen sprake is van een tarief.
Als Eenheid een andere waarde dan 83 (Euro’s) bevat, wordt GeleverdVolume gevuld met een geheel getal, zonder decimalen.
Voorbeeld:
In een declaratie wordt aangegeven dat in de afgelopen productperiode ondersteuning is geleverd volgens het vaste, afgesproken maandbedrag van 200 euro. Dit wordt als volgt aangegeven in het declaratiebericht:
GeleverdVolume: 20000
Eenheid: 83 (Euro’s)
IngediendBedrag: 20000

## Kan door de werkwijze behorend bij frequentie per week het gedeclareerde volume het maximale volume behorend bij de toewijzing overstijgen?

Nee dit is niet mogelijk. De werkwijze voor het berekenen van het maximaal te declareren volume bij de frequentie per week, bestaat uit 2 delen.

In het eerste deel wordt gecontroleerd of het te declareren volume past binnen het maximale volume voor de betreffende declaratieperiode. Het tweede deel controleert daarnaast of het cumulatieve volume uit alle declaraties behorend bij de toewijzingsperiode past binnen het maximaal toegekende volume over de toewijzingsperiode. Op deze wijze kan er niet meer worden gedeclareerd dan passend binnen de toewijzing.

Deze [werkwijzen](https://www.istandaarden.nl/ibieb/werkwijze-frequentie-per-week) zijn als aanvullende documentatie te vinden op de ondersteuningspagina voor release 3.2.

## Zijn er geen retourberichten op het 323 en 325 bericht?

Het klopt dat er geen retourberichten gedefinieerd zijn op het declaratiebericht (323) en het declaratie-antwoordbericht (325).

Het declaratie-antwoordbericht (325) bevat echter zowel de technische als de inhoudelijke terugkoppeling op het declaratiebericht en bevat alle informatie om het bericht administratief te verwerken.

## Zijn er controles op het ingediende volume in een declaratie ten opzichte van het toegewezen volume of budget in de toewijzing?

Ja deze controles zijn er in release 3.2 nog steeds. Naast de al bestaande technische regels (TR321 en TR322) is een technische regel (TR369) toegevoegd zodat het ingediende volume ook gecontroleerd wordt ten opzichte van het budget als dat in de toewijzing is meegegeven.

## Het declaratie-antwoord bericht bevat niet de goedgekeurde regels. Hoe weet ik als aanbieder nu wat er is goedgekeurd?

Het klopt dat het declaratie-antwoordbericht geen goedgekeurde prestatieregels bevat. Dit is ongewijzigd ten opzichte van de werking van het “oude” 304-bericht .

In de berichtklasse DeclaratieAntwoord is het totaal ingediende bedrag en totaal toegekende bedrag opgenomen. Het verschil tussen het ingediende en toegekende bedrag is te verklaren door de afgekeurde prestatieregels. Zie voor een uitgebreide toelichting ook invulinstructie IV087.

## Als alle ingediende prestaties zijn goedgekeurd, krijg ik als aanbieder dan geen declaratie-antwoordbericht?

Voor ieder ingediend declaratiebericht (323) wordt binnen 10 werkdagen na ontvangst door de gemeente een declaratie-antwoordbericht (325) verzonden. Dit is opgenomen in de bedrijfsregels in het informatiemodel. Dus ook in de situatie dat alle ingediende prestatieregels goedgekeurd zijn, wordt er een declaratie-antwoordbericht verzonden. Deze bevat dan geen prestatieregels, aangezien die allemaal goedgekeurd zijn. In de berichtklasse DeclaratieAntwoord zal het totaal toegekende bedrag in dit geval gelijk zijn aan het totaal ingediende bedrag.

## Is het toegestaan om in 1 declaratieperiode 2 prestatieregels voor de dezelfde productperiode op te nemen voor hetzelfde product en dezelfde toewijzing bij dezelfde cliënt?

Nee dit is niet toegestaan. De declaratiemethode is die van som over declaratieperiode. Alle leveringen behorende bij 1 toewijzing die vallen binnen 1 productperiode moeten worden gesommeerd tot 1 prestatieregel.

## Klopt het dat vanaf release 3.0 in het nieuwe declaratiebericht nog maar 1 declaratiemethode van toepassing is?

Ja. In het 303-bericht waren er twee declaratiemethodes mogelijk: ‘werkelijke productperiodes’ en ‘som van declaratie/factuurperiode’ (zie IV063). In het 323-bericht is enkel de declaratiemethode ‘som van declaratieperiode’ mogelijk. In IV089 van het Informatiemodel wordt uitgelegd hoe de ProductPeriode gevuld dient te worden.

## Mag een start (305) of stop (307) bericht voorwaardelijk zijn voor de goedkeur van een declaratie?

Nee, de regieberichten mogen niet voorwaardelijk worden gesteld voor de goedkeur of afkeur van een declaratie, zie OP364. Er zijn diverse regels gedefinieerd, waarbij wordt aangegeven dat het sturen van een start/stop bericht verplicht is. Het is dus niet meer nodig om dit aanvullend aan het Informatiemodel op te nemen in het eigen administratieprotocol. Een aanbieder dient binnen 5 dagen na het starten van de zorg een startbericht te sturen en binnen 5 dagen na het stoppen een stopbericht.

Daarnaast is het niet toegestaan om de startdatum in het startbericht en de stopdatum in het stopbericht te controleren tegen de declaratieperiode. Een en ander is nader uitgewerkt in Invulinstructie IV089: Hoe moet ProductPeriode gevuld worden?

# Vragen over Start- Stopberichten

## Mag ik een startbericht sturen, nadat ik een definitieve stop heb gestuurd?
Ja, dat mag. Na een tijdelijke stop of na een definitieve stop is het toegestaan een startbericht te sturen.
zie OP379.

# Vragen over Afsluiten zorg

## Moet na het intrekken van een toewijzing door de gemeente een Stopzorg door de aanbieder worden gestuurd?

Dit ligt aan het proces en de berichten die hieraan vooraf gegaan zijn.

Indien de intrekking een gevolg is van een door de aanbieder gestuurde (definitieve) Stopzorg, heeft de aanbieder de toewijzing hiermee al definitief gestopt. De aanbieder hoeft dan niet nogmaals een stop te sturen.

In alle andere gevallen dient de aanbieder als reactie op een intrekking altijd een Stopzorg te sturen.

## Hoe kan een Startzorg-bericht verwijderd worden?

Een Startzorg kan verwijderd worden middels de status aanlevering. Zie hiervoor ook OP033 en IV008 in het informatiemodel.

## Hoe kan een Stopzorg-bericht verwijderd worden?

Een Stopzorg kan verwijderd worden middels de status aanlevering. Zie hiervoor ook OP033 en IV008 in het informatiemodel.

# Vragen over reactietijden

| Berichttype | Berichtnaam | Maximale reactietermijn |
| --- | --- | --- |
| 301 | Toewijzingsbericht | Vanuit Verzoek om Toewijzing: De gemeente kan per aangevraagd \nproduct een 301 of een 319 sturen. Reactietermijn 5 werkdagen. \n\nVanuit Verzoek om Wijziging: De gemeente kan alleen voor het hele \nVOW een 301 of een 319 sturen. Reactietermijn 5 werkdagen. \n\n"aanvraag in onderzoek": \nAls een VOT of VOW in onderzoek wordt genomen, dan wordt \nbinnen 8 weken na dagtekening van het verzoek ofwel een \n301 ofwel een 319 met Verzoek afgewezen gestuurd.\n\nWoonplaastbeginsel:\nIndien een gemeente onderzoek moet doen naar het wooplaatsbeginsel\nHeeft de gemeente een reactietermijn van 10 dagen voor een 319 (afkeur)\nof een 301. |
| 302 | Toewijzingsbericht retour | 3 werkdagen na ontvangst van het 301-bericht |
| 305 | Startzorgbericht | De aanbieder verzendt een Startzorgbericht binnen \n5 werkdagen na de daadwerkelijke datum waarop de \nondersteuning gestart is of, indien de ondersteuning \nmet terugwerkende kracht is toegewezen, \nbinnen 5 werkdagen na ontvangst van het \nToewijzingsbericht (301 bericht). |
| 306 | Startzorgbericht retour | 3 werkdagen na ontvangst van het 305-bericht |
| 307 | Stopzorgbericht | De aanbieder verzendt een Stopzorgbericht binnen 5 werkdagen \nna de daadwerkelijke datum waarop de ondersteuning beëindigd is. |
| 308 | Stopzorgbericht retour | 3 werkdagen na ontvangst van het 307-bericht |
| 315 | Verzoek om toewijzing | 5 werkdagen na de beoordeling/intake |
| 316 | Verzoek om toewijzing retour | 3 werkdagen na ontvangst van het 315-bericht |
| 317 | Verzoek om Wijziging | De aanbieder kan het verzoek opstellen en insturen zodra \nde wens en gewenste ingangsdatum bekend zijn. |
| 318 | Verzoek om wijziging retour | 3 werkdagen na ontvangst van het 317-bericht |
| 319 | Antwoordbericht | De gemeente verzendt een antwoordbericht binnen 5 werkdagen \nna ontvangst van een 315- of 317-bericht als het verzoek wordt \nafgewezen of in onderzoek wordt genomen. Het antwoordbericht\n wordt gebruikt om de aanbieder te informeren dat de aanvraag \n(VOT- of VOW-bericht) is afgewezen of dat de gemeente de \naanvraag in onderzoek heeft genomen. Als in het Antwoordbericht \nVerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) bevat \ndan wordt bij afwijzing uiterlijk binnen 8 weken na dagtekening \nvan het verzoek een Antwoordbericht met in het veld \nVerzoekAntwoord de waarde 1 (Verzoek afgewezen) gestuurd. |
| 320 | Antwoordbericht retour | 3 werkdagen |
| 323 | Declaratiebericht | Volgens afspraak tussen gemeente en aanbieder voor geleverde zorg |
| 325 | Declaratie-antwoord bericht | 10 werkdagen na ontvangst van het 325-bericht, zie ook OP090x4 |

# Vragen over controles

## Hoe wordt gecontroleerd of partijen zich aan verplicht gebruik berichtenverkeer houden?

De naleving wordt op verschillende manieren bewaakt:

- Accountantscontrole: Gemeenten en aanbieders zijn verplicht hun administratie goed op orde te hebben. Tijdens de jaarlijkse accountantscontrole wordt gekeken of de processen correct verlopen, inclusief het gebruik van de iStandaarden.

- Ketenbureau i-Sociaal Domein: Dit bureau monitort de werking van het berichtenverkeer en signaleert knelpunten. Zij hebben geen sanctiebevoegdheid, maar geven signalen en adviezen aan gemeenten en aanbieders.

- Contractuele afspraken: In de overeenkomsten tussen gemeenten en aanbieders zijn vaak bepalingen opgenomen over het gebruik van het berichtenverkeer. Niet-naleving kan leiden tot opschorting van betalingen of andere contractuele maatregelen.

In de ministeriële regeling zelf staan geen specifieke controle- of sanctiebepalingen, maar de verplichting wordt indirect gehandhaafd via deze toezichtslagen.

Letterlijke tekst uit de documentatie:
De MR-Staatscourant juli 2019 regelt alleen de verplichting:

“Toepassing van de iJw houdt in ieder geval in dat er overeenkomstig de iJw elektronisch berichtenverkeer is tussen gemeenten en de in het eerste lid bedoelde personen en instanties bij het toewijzen, factureren en declareren, en leveren van producten, diensten of resultaten.”

De controle zelf wordt georganiseerd via de gemeentelijke en aanbiederspraktijk, niet vanuit de regeling.

# Vragen over Modules

## Hoe weet ik of mijn bericht voldoet aan de specificaties?

Via de validatiemodule op istandaarden.nl kunt u de berichten valideren. De berichten worden dan gecontroleerd tegen de XSD en XSLT. De validatiemodule kunt u vinden op https://www.istandaarden.nl/modules/validatiemodule.

Via de Testvoorziening iStandaarden (TiS) van Zorginstituut Nederland kunnen softwareleveranciers hun producten testen in de rol van elke partij die deelneemt aan het iStandaarden-berichtenverkeer, en zo nodig verbeteren.

Voor meer informatie of het aanvragen van een account kunt u contact opnemen met Zorginstituut Nederland (<info@istandaarden.nl>).










