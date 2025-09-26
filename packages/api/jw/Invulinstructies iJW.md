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

# Invulinstructies (IV-regels)
De tekst van elke invulinstructie kent een begin en een einde aangegeven door <IVXXX> en </IVXXX>
. De exacte en volledige tekst hiertussen dient altijd te worden teruggegeven.

<IV002>
**IV002**

*Hoe om te gaan met de adressering indien er sprake is van een organisatie?*

Alleen vullen indien cliënt en/of relatie cliënt in instelling verblijft.
</IV002>

<IV007>
**IV007**

*Hoe wordt de naam van een cliënt of relatie vastgelegd?*

Van een cliënt of relatie worden de achternaam, voorvoegsel en voornamen en/of voorletters gescheiden vastgelegd. Voor het vastleggen van de VolledigeNaam van een cliënt geldt het volgende format:

- De Geslachtsnaam wordt altijd vastgelegd. Deze bestaat uit de Naam en eventueel een Voorvoegsel
- De Partnernaam kan worden vastgelegd. Ook deze bestaat uit de Naam en eventueel een Voorvoegsel
- Voornamen kunnen worden vastgelegd, gescheiden door spaties
- Voorletters kunnen worden vastgelegd, aaneengesloten, zonder punten of spaties
- NaamGebruik geeft de gewenste aanspreekvorm aan. Hiermee wordt bij correspondentie de volgorde bepaald in het gebruik van de geslachtsnaam en de naam van de partner. Het vullen van NaamGebruik hangt dus af van hoe de cliënt of relatie zijn/haar naam hanteert.
</IV002>

<IV008>
**IV008**

*Hoe moet worden omgegaan met correcties van de regieberichten?*

Een correctie van een regiebericht, kan alleen indien het te corrigeren regiebericht is goedgekeurd door de gemeente.
Indien een regiebericht is afgekeurd, moet het als niet verzonden worden beschouwd, en moet een nieuw regiebericht worden gestuurd.

Voor de regieberichten (startbericht en stopbericht) bestaat de mogelijkheid om eerder verstuurde berichtklassen te corrigeren. Hiervoor wordt eerst de betreffende berichtklasse verwijderd en wordt vervolgens (eventueel) een nieuwe berichtklasse verstuurd.
Om aan te geven dat een berichtklasse dient te worden verwijderd wordt StatusAanlevering van de betreffende berichtklasse gevuld met de waarde 3 (verwijderen aanlevering). De te verwijderen berichtklasse wordt geidentificeerd door de logische sleutel van de klasse.

Eventueel kan in hetzelfde bericht ook de vervangende berichtklasse worden aangeleverd. In deze berichtklasse wordt StatusAanlevering gevuld met de waarde 1 (eerste aanlevering).

Of de vervangende berichtklasse kan worden aangeleverd in hetzelfde bericht of dat een nieuw bericht nodig is, is afhankelijk van het berichtelement dat gecorrigeerd moet worden. Dat heeft te maken met de logische sleutels:

1. Startproduct heeft als logische sleutel: (ToewijzingNummer, Product, Begindatum)
2. Stopproduct heeft als logische sleutel: (ToewijzingNummer, Product, Begindatum, RedenBeeindiging, Einddatum)

- Als het te corrigeren berichtelement onderdeel is van de logische sleutel: de correctie kan in hetzelfde bericht worden doorgegeven. Beide berichtklassen hebben een unieke sleutel.

- Als het te corrigeren berichtelement geen onderdeel is van de logische sleutel: de correctie moet in een apart bericht worden doorgegeven. De gecorrigeerde en de originele berichtklasse hebben dezelfde logische sleutel. Binnen een (1) bericht wordt hierop afgekeurd omdat de software dit interpreteert als dat er twee keer dezelfde berichtklasse is opgenomen.

Uiteraard moet worden voorkomen dat een nieuwe aanlevering eerder wordt verwerkt dan de correctie (verwijdering). Het is daarom te adviseren om waar mogelijk de correctie (verwijdering) en nieuwe aanlevering in hetzelfde bericht op te nemen.
</IV008>

**IV009**

*Hoe moet worden omgegaan met een geboortedatum?*

Wanneer de Geboortedatum niet volledig of onbekend is, dan wordt het deel dat wel bekend is gebruikt en wordt voor de overige delen de waarde 01 (dag en maand) of 1900 (jaar) gebruikt. Het element DatumGebruik geeft aan welk deel van de datum bekend is en dus te gebruiken.

Voorbeelden:

- Een volledig onbekende geboortedatum wordt 01-01-1900
- Is alleen bekend dat de geboorte in 1953 was, dan wordt de geboortedatum 01-01-1953
- Is alleen bekend dat de geboorte in september 1949 was, dan wordt de geboortedatum 01-09-1949

**IV013**

*Welke toewijzing is het meest recent?*

Om vast te kunnen stellen welke toewijzing het recentst is, zijn Toewijzingsdatum en Toewijzingstijd in het toewijzingbericht opgenomen. De gemeente vult deze velden met de datum en de tijd waarop de toewijzing definitief is vastgesteld. Het gaat hier om het moment waarop de gemeente de toewijzing vaststelt en niet om het moment van verzending van het bericht. De toewijzing met de meest recente Toewijzingsdatum en Toewijzingstijd is de actuele toewijzing.
Als een aanbieder de gemeente verzoekt om een bestaande toewijzing nog een keer te versturen, blijft de inhoud van Toewijzingsdatum en Toewijzingstijd onveranderd.
Een aanpassing van het volume of de einddatum in de toewijzing moet beschouwd worden als een gewijzigde toewijzing. De gemeente vult Toewijzingsdatum en Toewijzingstijd met de datum en tijd waarop de gemeente de aanpassing vaststelt.

**IV024**

*Hoe moeten bedragen worden gevuld?*

Bedragen worden in 1/100 van de gehanteerde valuta opgenomen. Als er sprake is van de euro (EUR), dan is als voorbeeld 10000 gelijk aan tienduizend eurocent oftewel 100 euro.

**IV028**

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

**IV032**

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

- Systeemdatum van de verzender/ontvanger
- Een externe codelijst zoals de AGB-codelijst of de gemeentelijke indeling van CBS
- Bilaterale afspraken tussen ketenpartijen, zoals contractafspraken die opgenomen zijn in een regel binnen de iStandaarden.

Deze regels hebben een eigen retourcode die gevuld wordt in het retourbericht bij de berichtklasse waarin de fout geconstateerd is. Indien een fout geconstateerd is, leidt dit tot volledige afkeur van het bericht.

**IV033**

*Hoe moet XsltVersie gevuld worden?*

Wanneer de ontvanger fouten constateert in een bericht op basis van de ter beschikking gestelde XSLTs, wordt in het retourbericht aangegeven welke XSLT-versie gebruikt is voor de controle. Dit versienummer is opgenomen in de output van de XSLTs en dient overgenomen te worden in het retourbericht.

**IV034**

*Hoe moet XsdVersie gevuld worden?*

De waarde voor de elementen BasisschemaXsdVersie en BerichtXsdVersie in het datatype CDT_XsdVersie moeten overgenomen worden uit de schemadefinitie (XSD) waarop het bericht gecreëerd/gebaseerd is. Deze waarden staan in de schemadefinitie respectievelijk in /xs:schema/xs:annotation/xs:appinfo/<namespace>:BasisschemaXsdVersie en /xs:schema/xs:annotation/xs:appinfo/<namespace>:BerichtXsdVersie.
Voor "<namespace>" wordt de namespace van de desbetreffende iStandaard ingevuld, bijv. 'iJw', 'iWmo', enz.
Bijv: <jw301:Bericht xmlns:ijw="http://www.istandaarden.nl/ijw/3_2/basisschema/schema" xmlns:jw301="http://www.istandaarden.nl/ijw/3_2/jw301/schema">

**IV042**

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

**IV045**

*Hoe wordt de voogd vastgelegd indien dit een organisatie betreft?*

Indien de voogdij voor een cliënt bij een organisatie ligt, wordt in de Relatie de organisatienaam opgenomen als Geslachtsnaam, aangeduid met NaamGebruik 6 (niet-natuurlijk persoon).

**IV046**

*Welke gemeentecode moet gevuld worden?*

In de header van de berichten wordt de gemeente opgenomen die volgens de wet verantwoordelijk is voor zorg of ondersteuning aan de cliënt. Voor aanduiding van de gemeente wordt de CBS codelijst gehanteerd.

**IV047**

*Hoe om te gaan met de adressering van een cliënt indien alleen een briefadres bekend is?*

Van een cliënt wordt in de toewijzing altijd het GBA adres of verblijfadres meegegeven in de Contactgegevens. Dit is alleen niet mogelijk indien een cliënt in de basisregistratie personen (BRP) is ingeschreven met alleen een briefadres. Voor die situaties kan bij een Cliënt een Adres met Soort Correspondentie-adres worden meegegeven.

**IV052**

*Hoe om te gaan met Beschikkingnummer in Verzoek om toewijzing?*

De aanbieder dient het beschikkingnummer mee te geven in het Verzoek om Toewijzing bericht indien de cliënt van haar gemeente een beschikking heeft gekregen.
De gemeente kan op basis van het beschikkingnummmer eenvoudig de bestaande beschikking koppelen aan de informatie uit het Verzoek Om Toewijzing bericht.

**IV066**

*Wanneer krijgt een toewijzing een nieuw ToewijzingNummer?*

Een initiële toekenning van een product aan een cliënt is een nieuwe toewijzing en krijgt een nieuw toewijzingnummer. Een initiële toekenning kent nooit een RedenWijziging.
Indien een eerder afgegeven toewijzing gewijzigd wordt (intrekken, oprekken, verwijderen of corrigeren), wordt het ToewijzingNummer gevuld van de initiële toekenning. De startberichten, stopberichten en declaratieberichten refereren naar het ToewijzingNummer uit het toewijzingbericht. Het (opnieuw) versturen van een bericht heeft geen invloed op ToewijzingNummer.

Let op: wijzigen van een toewijzing is slechts beperkt toegestaan (Zie ook OP33x1):

- de toewijzing kan worden verwijderd
- de einddatum kan worden aangepast
- het budget kan worden aangepast
- de omvang kan worden aangepast indien de frequentie de waarde 6 (Totaal binnen geldigheidsduur toewijzing) heeft.
Indien de omvang bij andere frequenties dan Totaal binnen geldigheidsduur toewijzing gewijzigd wordt, betekent dat dat de bestaande toewijzing wordt ingetrokken en een nieuwe toewijzing wordt verzonden met als Ingangsdatum de datum waarop de gewijzigde omvang ingaat. Dit betreft dan een nieuwe initiele toekenning met een nieuw ToewijzingNummer.

**IV074**

*Wat is het verschil tussen de verschillende uitvoeringsvarianten?*

De iStandaarden ondersteunen een aantal verschillende uitvoeringsvarianten: inspanningsgericht, outputgericht en taakgericht. De specifieke eigenschappen van deze uitvoeringsvarianten zijn beschreven in het document Handreiking uitvoeringsvarianten, deze is beschikbaar via [www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw](http://www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw).

<IV075>
**IV075**

*Hoe moeten productgegevens gevuld worden?*

Welke productcodes gebruikt mogen worden in het berichtenverkeer is afhankelijk van bilaterale afspraken. Er is een landelijke codelijst 021 - PRODUCTCODE beschikbaar. Gemeente en aanbieder leggen in de contractafspraken vast of deze codelijst gebruikt wordt. Het is ook mogelijk dat gemeenten een eigen productcodelijst gebruiken.

*Bij het aanvragen van een product via een VOT of een VOW wordt Product in AangevraagdProduct (VOT) of NieuwProduct (VOW) gevuld afhankelijk van de gewenste toewijzingsvariant:

- Bij het aanvragen van een specifieke toewijzing moet zowel de productcategorie als de productcode gevuld worden.
- Bij het aanvragen van aspecifieke toewijzingen moet alleen de productcategorie gevuld zijn.
- Bij het aanvragen van generieke toewijzingen is het product leeg, de productcategorie en de productcode zijn niet gevuld.*

*Voor het vullen van het Product in Startberichten en Stopberichten (bij inspannings- en outputgerichte uitvoeringsvariant) en Declaratieberichten is de vulling afhankelijk van ToegewezenProduct in de bijbehorende Toewijzing*

*In een Startbericht (305) of Stopbericht (307) wordt altijd hetzelfde zorg- of ondersteuningsproduct opgenomen zoals meegegeven in het Toewijzingsbericht (301).

- Bij specifieke toewijzingen moet in het Startbericht en Stopbericht zowel de productcategorie als de productcode gevuld worden.
- Bij aspecifieke toewijzingen moet in het Startbericht en Stopbericht alleen de productcategorie gevuld zijn.
- Bij generieke toewijzingen is het product leeg, de productcategorie en de productcode zijn niet gevuld.*

*In een Declaratiebericht (323) wordt altijd een productcategorie en productcode gevuld.*

- Aspecifieke toewijzing. Indien in ToegewezenProduct alleen een productcategorie is gevuld, wordt deze productcategorie overgenomen en wordt een bij de toegewezen productcategorie behorende productcode (volgens de productcodelijst die gebruikt moet worden) gevuld. Dit betekent dat op 1 toewijzingsnummer, toegewezen categorie meerdere prestaties voor dezelfde periode kunnen volgen indien meerdere producten van dezelfde productcategorie zijn geleverd.
- Generieke toewijzing met maximaal budget. Indien in ToegewezenProduct de productcategorie en productcode niet gevuld zijn dan wordt de productcategorie en productcode gevuld behorend bij de levering (gebaseerd op de productcodelijst die gebruikt moet worden). Dit betekent dat op 1 toewijzingsnummer meerdere prestatieregels voor dezelfde periode kunnen volgen indien meerdere producten uit dezelfde of verschillende productcategorieën zijn geleverd.
</IV075>

<IV076>
**IV076**

*Hoe moet het volume in de prestatie gevuld worden, wanneer de toewijzing de frequentie week heeft?*

De productperiode binnen een declaratieperiode is altijd maximaal een kalendermaand. Als ToegewezenProduct de frequentie per week heeft, is het mogelijk dat de week verdeeld is over 2 productperiodes (kalendermaanden). Bijvoorbeeld wanneer halverwege een week een nieuwe maand begint. Voor het bepalen van het volume behorend bij de productperiode zijn twee methoden (voor inspanningsgerichte toewijzing en voor outputgerichte toewijzing).

Methode bij Inspanningsgerichte toewijzing
De datum van levering bepaalt in welke productperiode de leveringen worden ingediend.
De productperiode bevat het te declareren volume van alle leveringen op dagen die vallen in de betreffende productperiode. Bij weken die vallen over 2 productperioden bepaalt de datum van levering in welke ProductPeriode de levering opgenomen wordt.

Voorbeeld:
Toewijzing: 07-07-2025 t/m 07-09-2025 voor 3 uur per week
Levering: elke week op donderdag 2,5 uur

Declaratieperiode juli
Declaratieperiode: 01-07-2025 t/m 31-07-2025
Productperiode: 07-07-2025 t/m 31-07-2025
Volume: 7,5 (4 leveringen x 2,5 uur = 10 uur)
Controle maximaal volume 9 (4 weken x 3 uur = 12 uur)

Declaratieperiode augustus
Declaratieperiode: 01-08-2025 t/m 31-08-2025
Productperiode: 01-08-2025 t/m 31-08-2025
Volume: 10 (4 leveringen x 2,5 uur = 10 uur)

Controle maximaal volume 15 (5 weken x 3 uur= 15 uur)

Declaratieperiode september
Declaratieperiode: 01-09-2025 t/m 30-09-2025
Productperiode: 01-09-2025 t/m 07-09-2025
Volume: 2,5 (1 leveringen x 2,5 uur = 2,5 uur)
Controle maximaal volume 3 (1 week x 3 uur= 3 uur)

Controle maximaal volume over toewijzingsperiode 24 uur
07-07-2025 t/m 07-09-2025 = 9 weken
9 weken x 3 uur = 27 uur

Methode bij Outputgerichte toewijzing
De productperiode bevat het te declareren volume van de weken waarvan de zondag valt in de productperiode.

Hierop is één uitzondering:
Indien een toewijzing niet op een zondag eindigt wordt het te declareren volume van de laatste (gebroken) week opgenomen in de productperiode waarbinnen de laatste zondag van de toewijzing valt.

Beide situaties worden met een voorbeeld toegelicht:

Voorbeeld 1 (toewijzing eindigt op een zondag):
Toewijzing: 07-07-2025 t/m 07-09-2025 voor 300 euro per week

Declaratieperiode juli
Declaratieperiode: 01-07-2025 t/m 31-07-2025
Productperiode: 07-07-2025 t/m 31-07-2025
Volume: Aantal zondagen in de productperiode * 300 euro (900 euro)

Declaratieperiode augustus
Declaratieperiode: 01-08-2025 t/m 31-08-2025
Productperiode: 01-08-2025 t/m 31-08-2025
Volume: Aantal zondagen in de productperiode * 300 euro (1500 euro)

Declaratieperiode september
Declaratieperiode: 01-09-2025 t/m 30-09-2025
Productperiode: 01-09-2025 t/m 04-09-2025
Volume: Aantal zondagen in de productperiode * 300 euro (300 euro)

Voorbeeld 2 (toewijzing eindigt niet op een zondag):
Toewijzing: 07-07-2025 t/m 06-09-2025 voor 300 euro per week

Declaratieperiode juli
Declaratieperiode: 01-07-2025 t/m 31-07-2025
Productperiode: 07-07-2025 t/m 31-07-2025
Volume: Aantal zondagen in de productperiode * 300 euro (900 euro)

Declaratieperiode augustus
Declaratieperiode 01-08-2025 t/m 31-08-2025
Productperiode 01-08-2025 t/m 31-08-2025
Volume Aantal zondagen in de productperiode + 1 * 300 euro (1800 euro)

Declaratieperiode september
Over september wordt er geen declaratie meer ingediend. De laatste week, die gedeeltelijk in september valt, is al meegenomen in de declaratie over augustus.
</IV075>

<IV077>
**IV077**

*Hoe moet het maximaal te declareren volume berekend worden over de productperiode bij gebruik van de frequentie per week in de toewijzing?*

De frequentie per week is niet 1-op-1 passend binnen de declaratieperiode maand. Hierdoor zijn bij de omrekening naar een maximaal te declareren volume binnen de productperiode aanvullende afspraken noodzakelijk, zodat het volume in de prestatie gecontroleerd kan worden. Afhankelijk van de uitvoeringsvarianten zijn hiervoor verschillende rekenmethoden opgesteld. (voor het vullen van het volume in de prestatie bij toewijzingen met frequentie week, zie IV076)

Stappen
Stap 1: Bepaal de uitvoeringsvariant van de toewijzing, inspanningsgericht of outputgericht.
Stap 2: bereken eerst het max. te declareren volume binnen productperiode. 
Stap 3: bereken of hetgeen geleverd is binnen dit max. te declareren volume binnen productperiode past.
Stap 4: bereken of alles wat gedeclareerd is ook is toegestaan binnen de toewijzing.

Rekenmethode inspanningsgerichte bij toewijzing met frequentie per week.
Het maximale te declareren volume wordt bepaald op basis van het aantal (eventueel gebroken) kalenderweken dat binnen de productperiode ligt, binnen de toewijzing. Dit aantal wordt vermenigvuldigd met het volume uit de toewijzing. Voor het bepalen van het aantal kalenderweken, worden de weeknummers geteld van de productperiode.
Dit resulteert bij een productperiode van een volledige maand in 4, 5 of 6 maal het weekvolume.

Om te voorkomen dat deze rekenmethode resulteert in meer ruimte dan totaal toegewezen is, moet het totaal volume over alle ingediende prestatieregels ook gecontroleerd worden tegen het maximale volume over de toewijzingsperiode.

Rekenmethode Outputgerichte toewijzing met frequentie per week.
Het maximale volume van de productperiode wordt bepaald op basis van het aantal zondagen dat binnen de productperiode ligt (plus 1 indien in die productperiode de laatste zondag van de toewijzing ligt en de einddatum van de toewijzing geen zondag is). Dit aantal wordt vermenigvuldigd met het volume uit de toewijzing.

Voorbeeld bij inspanningsgerichte toewijzing:
Cliënt heeft een toewijzing voor 3 uur per week met ingangsdatum 7-10-2025 en einddatum 30-12-2025
Bepaal het aantal kalenderweken in de productperiode.

- Oktober : 4 (week 41 t/m 44)
- November: 5 (week 44 t/m 48)
- December: 5 (week 48 t/m 52,01)
  
Maximaal volume per productperiode: Vermenigvuldig het aantal kalenderweken per productperiode met het toegewezen volume per week:
- Oktober : 12 uur (4 weken x 3 uur)
- November: 15 uur (5 weken x 3 uur)
- December: 15 uur (5 weken x 3 uur)

Maximaal volume over de toewijzingsperiode: tel het aantal weken (eventueel gebroken) binnen de toewijzing en vermenigvuldig dit met het volume uit de toewijzing:
- 07-10-2025 t/m 30-12-2025 = week 41 t/m week 52 + 1 = 13 weken,  13 weken x 3 uur (volume uit de toewijzing) = 39 uur
Het maximale volume over de toewijzingsperiode is 39 uur

Voorbeeld bij Outputgerichte toewijzing:
Cliënt heeft een toewijzing voor 300 euro per week met ingangsdatum 01-10-2025 en einddatum 31-12-2025
Het aantal zondagen in de productperiodes:

- Oktober: 07-10 t/m 31-10 -> telt 3 zondagen
- November: 1-11 t/m 30-11 -> telt 5 zondagen
- December: 1-12 t/m 31-12 -> telt 4 zondagen. Daar wordt een weekvolume bijgeteld, omdat de einddatum van de toewijzing niet op zondag is.
Maximaal volume per productperiode: Het aantal zondagen vermenigvuldigd met het volume uit de toewijzing (evt. vermeerderd met een extra weekvolume):
- Oktober 3 zondagen : 3 x weekvolume (300 euro) = 900 euro
- November 4 zondagen: 5 x weekvolume (300 euro) = 1500 euro
- December 4 zondagen + 1 weekvolume: 5 x weekvolumes (300 euro) = 1500 euro

Voorbeeld bij Outputgerichte toewijzing:
Cliënt heeft een toewijzing voor 300 euro per week met ingangsdatum 07-07-2025 en einddatum 05-09-2025
Het aantal zondagen in de productperiodes:
- Juli: 07-07 t/m 31-07 -> telt 3 zondagen
- Augustus: 1-08 t/m 31-08 -> telt 5 zondagen
 1-08 t/m 31-08 -> telt 5 zondagen. Daar wordt een weekvolume bijgeteld, omdat de einddatum van de toewijzing niet op zondag is maar 31 augustus is.
  
Maximaal volume per productperiode: Het aantal zondagen vermenigvuldigd met het volume uit de toewijzing (evt. vermeerderd met een extra weekvolume):
- Juli 3 zondagen : 3 x weekvolume (300 euro) = 900 euro
- Augustus 5 zondagen + 1 weekvolume: 6 x weekvolumes (300 euro) = 1800 euro
</IV077>

<IV078>
**IV078**

*Wat mag gedeclareerd worden wanneer een onvolledige periode is toegewezen?*

Alleen voor de inspanningsgerichte uitvoeringsvariant is een uniforme werkwijze geformuleerd. Voor de outputgerichte uitvoeringsvariant is het aan de gemeente om gezamenlijk met de aanbieder te komen tot een afspraak hierover.

Werkwijze voor inspanningsgerichte uitvoeringsvariant, het in de gebroken periode daadwerkelijk geleverde volume wordt gedeclareerd. Met als bovengrens voor deze gebroken periode het maximale volume, dat in ToegewezenProduct aan de frequentie is toegekend.

Voorbeeld 1:

frequentie in ToegewezenProduct = week

Toewijzing voor 3 uur per week met ingangsdatum 12-11-2025 en einddatum 13-12-2025

Voor de productperiode 12-11-2025 t/m 30-11-2025 mag maximaal 9 uur gedeclareerd worden, indien deze uren ook daadwerkelijk geleverd zijn. (zie ook rekenmethode IV077. De eerste week (12-11-2025 t/m 16-11-2025) is geen volledige kalenderweek, maar indien geleverd mag voor deze week de volledige 3 uur worden gedeclareerd.

Voorbeeld 2:

Frequentie in ToegewezenProduct = maand

Toewijzing voor 15 uur per maand met ingangsdatum 14-10-2025 en einddatum 13-12-2025

Voor de productperiode 14-10-2025 t/m 31-10-2025 mag maximaal 15 uur gedeclareerd worden, indien deze uren ook daadwerkelijk geleverd zijn. Ondanks dat de ingangsdatum 14-10-2025 is en er dus geen hele kalendermaand is toegewezen, mag (mits geleverd) de volledige 15 uur gedeclareerd worden.
<IV078>

**IV079**

*Hoe moet het volume in de prestatie gevuld worden wanneer de eenheid in de prestatie uren is en de geleverde prestatie niet uit volledige uren bestaat?*

Indien er is toegewezen in uren en er wordt gedeclareerd in uren, kan het voorkomen dat de werkelijk geleverde zorg niet uit hele uren (60 minuten) bestaat.
In dat geval wordt het volume rekenkundig afgerond (< 30 minuten = omlaag >= 30 minuten = omhoog), met een minimaal volume van 1 uur.
Geleverde zorg per prestatie behorend bij een toewijzing wordt gesommeerd over de gehele declaratieperiode, waarbij de afronding pas plaats vindt op het totaal volume in de prestatieregel.

Dus indien er wekelijks 95 minuten worden geleverd en de prestatieperiode bevat 4 weken, dan wordt eerst het totaal over de prestatieperiode bepaald = 4 weken x 95 minuten = 380 minuten.
Er wordt gedeclareerd in uren: 380 / 60 = 6 uur en 20 minuten. Afgerond is dit 6 uur. In het volume van de prestatie wordt 6 uur gevuld.

**IV081**

*Hoe moet het ProductTarief gevuld worden?*

De eenheid in de prestatie moet gelijk zijn aan de eenheid van de toewijzing. Voor die eenheid dient in het contract een tarief voor het betreffende product te zijn vastgelegd. Het producttarief in de prestatie wordt gevuld met dat betreffende tarief.

Alleen voor uren en minuten is er een uitzondering mogelijk. Gemeente en aanbieder kunnen een tariefeenheid per uur afgesproken hebben, terwijl gedeclareerd wordt in minuten. In dat geval wordt in de Prestatie het ProductTarief omgerekend naar een tarief per minuut (tarief delen door 60 minuten) en afgerond op 2 decimalen volgens de rekenkundige regels. Dit betekent dat 1,455 wordt afgerond naar 1,46 en dat 1,454 wordt afgerond naar 1,45.

Dit (afgeronde) tarief wordt in de Prestatie bij ProductTarief opgenomen, maar niet gebruikt voor de berekening van IngediendBedrag.
Het IngediendBedrag wordt als volgt bepaald: (contractuele uurtarief * aantal minuten) / 60. Dit bedrag wordt vervolgens afgerond op 2 decimalen.(TR346)

**IV084**

*Hoe moet de declaratie gevuld worden wanneer sprake is van elkaar opvolgende toewijzingen binnen 1 declaratieperiode?*

Als sprake is van elkaar opvolgende toewijzingen binnen een declaratieperiode, dan volgen aparte Prestaties per toewijzing en per product in de declaratie over die declaratieperiode. Een Prestatie kan dus nooit op meer dan 1 toewijzing betrekking hebben.

Voorbeeld

In onderstaand voorbeeld wordt uitgegaan van de volgende situatie:

- De eerste toewijzing heeft Ingangsdatum 01-03-2025 en Einddatum 09-03-2025
- De opvolgende toewijzing heeft Ingangsdatum 23-03-2025 en Einddatum 31-03-2025
- Er is ononderbroken zorg geleverd gedurende beide toegewezen periodes

Er worden nu 2 Prestaties ingediend met de volgende ProductPeriodes:
ProductPeriode Prestatie 1: 01-03-2025 t/m 09-03-2025
ProductPeriode Prestatie 2: 23-03-2025 t/m 31-03-2025

**IV085**

*Wanneer kan een creditering van een declaratie verzonden worden?*

Wanneer een eerder ingediende prestatie door de aanbieder onjuist is bevonden, kan deze door de aanbieder worden ingetrokken door aanlevering van een credit prestatie.
Dit kan alleen nadat er een declaratie-antwoordbericht op de debet prestatie is ontvangen en de prestatie daarin niet is afgekeurd. Een door de gemeente afgekeurde prestatie wordt nooit gecrediteerd.

NB: een creditering is een eenzijdige handeling van de aanbieder, die niet bestreden kan worden door een gemeente. De gemeente kan een ingediende credit prestatie dus niet afkeuren, tenzij het technische afkeur betreft. Zie hiervoor invulinstructies IV088 en IV087).

**IV086**

*Hoe moet worden omgegaan met debet en credit prestaties in een declaratiebericht?*

Debet en credit prestaties kunnen in 1 declaratiebericht worden aangeleverd. Hierbij geldt:

- Een 1e debet prestatie en een identieke credit prestatie mogen niet in 1 declaratiebericht worden aangeleverd. Als de 1e debet en credit prestatie op 1 moment bekend zijn, dan horen die tegen elkaar weg te vallen en niet in 1 bericht te staan.
- Een credit prestatie en een 2e debet prestatie kunnen desgewenst in hetzelfde bericht worden aangeleverd.

Totaal declaratiebedrag

Het totale declaratiebedrag van alle debet en credit prestaties in het declaratiebericht wordt ingevuld in TotaalIngediendBedrag in de header van het bericht. Hierbij worden debetbedragen opgeteld en creditbedragen afgetrokken.

<IV087>
**IV087**

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
De Header wordt retour gestuurd met retourcode 0200 (geen opmerkingen over deze berichtklasse) en een Declaratie-Antwoord berichtklasse met Retourcode 8001 (Declaratie is volledig toegewezen), waarbij TotaalGoedgekeurdBedrag en TotaalIngediendBedrag worden gevuld met de waarde van TotaalIngediendBedrag van het bijbehorende declaratiebericht.

Controleniveau 1: Er zijn fouten geconstateerd bij XSD-validatie
Indien het declaratiebericht niet valideert tegen het XSD krijgt de afzender een foutmelding. Er wordt geen declaratie-antwoordbericht verzonden.

Controleniveau 2: Er zijn fouten geconstateerd bij XSLT-validatie
Voor alle regels die binnen een bericht gecontroleerd kunnen worden, maar die niet via het XSD gevalideerd kunnen worden, zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren. Wanneer een declaratiebericht een fout oplevert bij een controle op één van deze
regels wordt in het declaratie-antwoordbericht alleen de Header retour gestuurd met de algemene retourcode 0001 (Bericht is afgekeurd om technische redenen). Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven. Het declaratiebericht wordt als niet verzonden beschouwd en is niet verwerkt in de administratie van de gemeente.
Voorbeeld:

- Het declaratiebericht bevat een fout in de Header of kan niet worden afgeleverd bij de gemeente: retourcode 0001 (Bericht is afgekeurd om technische reden).

Controleniveau 3 of 4: Er zijn fouten geconstateerd op berichtoverstijgende controles of controles tegen een externe bron
Indien er een fout geconstateerd is in de Header, bevat het declaratie-antwoordbericht alleen de Header met daarbij de retourcode van de regel op basis waarvan de fout geconstateerd is.

Indien een fout geconstateerd is in de berichtklasse Declaratie, wordt de Header retour gestuurd met retourcode 0200 (geen opmerking over deze berichtklasse), berichtklasse DeclaratieAntwoord krijgt de betreffende retourcode voor afkeur. Het TotaalToegekendBedrag wordt gevuld met 0 (zie ook TR342). De declaratie wordt als niet verzonden beschouwd en is niet verwerkt in de administratie van de gemeente.
Voorbeeld:

- Het declaratienummer is niet uniek: Declaratienummer moet uniek zijn voor de verzendende partij. De Header krijgt dan retourcode 0200 (geen opmerking over deze berichtklasse), berichtklasse DeclaratieAntwoord krijgt retourcode 9333, en bij TotaalToegekendBedrag wordt 0 gevuld.
Indien een fout geconstateerd is in de berichtklassen onder Declaratie, wordt de Header retour gestuurd met retourcode 0200 (Geen opmerking over deze berichtklasse). TotaalToegekendBedrag in de berichtklasse DeclaratieAntwoord wordt gevuld met het totaal goedgekeurde bedrag (som van alle toegekende prestaties) en de klasse krijgt retourcode 0200. Indien een fout is geconstateerd in Cliënt wordt de betreffende retourcode bij de Cliënt gevuld en worden alle onderliggende Prestaties retour gestuurd met retourcode 0233 (Berichtklasse is niet beoordeeld). Indien een fout is geconstateerd in een Prestatie, wordt deze Prestatie retour gestuurd met de bijbehorende retourcode. Hierbij wordt tevens de bijbehorende klasse Cliënt meegestuurd met retourcode 0200 (Geen opmerking over deze berichtklasse). In de retour gestuurde Prestaties worden één of meerdere retourcodes gevuld om de inhoudelijke reden van afwijzing aan te geven.
NB: Prestaties worden altijd volledig goed of volledig afgekeurd. Prestaties waarvan het ingediende bedrag wordt toegekend, worden niet opgenomen in het declaratie-antwoordbericht.
Het declaratie-antwoordbericht dient niet:
- Als ontvangstbevestiging.
- Voor het opvragen van (extra) informatie door de gemeente.
- Voor het doorgeven van correcties op declaratiegegevens aan de aanbieder.
NB: Een bericht kan informatie over meerdere cliënten bevatten. Cliënten waarin geen fouten zijn geconstateerd, worden niet opgenomen in het declaratie-antwoordbericht.
</IV075>

<IV088>
**IV088**

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

- Systeemdatum van de verzender/ontvanger.
- Een externe codelijst zoals de AGB-codelijst of de gemeentelijke indeling van CBS.
- Bilaterale afspraken tussen ketenpartijen, zoals contractafspraken die opgenomen zijn in een regel binnen de iStandaarden.

Deze regels hebben een eigen retourcode die gevuld wordt in het declaratie-antwoordbericht bij de berichtklasse waarin de fout geconstateerd is.
</IV088>

<IV089>
**IV089**

*Hoe moet ProductPeriode gevuld worden?*

Voor declareren zijn de volgende begrippen van belang:

- Declaratieperiode: is een administratieve periode waarover de geleverde hulp in de administratie tot een declaratie wordt verwerkt. Dit is altijd een kalendermaand.
- Productperiode: De productperiode valt altijd binnen de geldigheidsperiode van de toewijzing. Een productperiode is niet afhankelijk van de startdatum en of stopdatum van de geleverde zorg.
In het declaratiebericht wordt het totale geleverde volume van 1 specifiek product binnen 1 productperiode aan 1 cliënt (behorende bij 1 toewijzing) opgenomen in 1 Prestatie. Deze prestaties worden direct in de erop volgende declaratieperiode, of eventueel achteraf in een latere declaratieperiode, gedeclareerd. (zie IV076 voor vullen volume bij frequentie per week)

De ProductPeriode Begindatum wordt gevuld met:

- De eerste dag van de kalendermaand waarin de ProductPeriode valt indien de Ingangsdatum van het ToegewezenProduct voor of op de eerste dag van deze kalendermaand ligt.
- De Ingangsdatum van het ToegewezenProduct indien de Ingangsdatum ToegewezenProduct na de eerste dag van de kalendermaand waarin de ProductPeriode valt ligt.

De ProductPeriode Einddatum wordt gevuld met:

- De laatste dag van de kalendermaand waarin de ProductPeriode valt indien de Einddatum van het ToegewezenProduct op of na de laatste dag van deze kalendermaand ligt.
- De Einddatum van het ToegewezenProduct indien de Einddatum ToegewezenProduct voor de laatste dag van de kalendermaand waarin de ProductPeriode valt ligt.

Voorbeeld

In onderstaande voorbeeld wordt uitgegaan van de volgende situatie:

Het ToegewezenProduct heeft Ingangsdatum 08-04-2025 en Einddatum 17-06-2025 (dit is de toegewezen periode)
ProductPeriodes voor de maanden April, Mei en Juni zijn dan:

- April: 08-04-2025 t/m 30-04-2025
- Mei  : 01-05-2025 t/m 31-05-2025
- Juni : 01-06-2025 t/m 17-06-2025

Trajectfinanciering

Gemeenten en aanbieders kunnen (op grond van OP264) onderling afwijkende afspraken maken over de momenten waarop, al dan niet in delen, gedeclareerd kan worden, in de situatie van een outputgericht product dat in euro's is toegewezen.

Als het resultaat pas aan het eind van het traject kan worden vastgesteld, wordt ProductPeriode gelijk gesteld aan de laatste ProductPeriode binnen de toewijzingsperiode. Gemeente en aanbieder kunnen ook afwijkende afspraken hebben gemaakt over het aantal declaratiemomenten. Hierbij wordt de ProductPeriode indien nodig aangepast zodat de ProductPeriode ook in deze situatie altijd binnen de periode van de toewijzing valt.

Voorbeeld

Afspraak is dat op het eind van het traject de declaratie mag worden ingediend.
Cliënt ontvangt outputgerichte hulp vanaf het begin tot het eind van toegewezen periode (08-04-2025 t/m 17-06-2025). Pas op 17-06-2025 kan het resultaat van de outputgerichte hulp worden vastgesteld. In de maanden April en Mei wordt er geen declaratie ingediend voor deze cliënt. Er volgt in de maand juni 1 Prestatie met de volgende ProductPeriode:

- Juni: 01-06-2025 t/m 17-06-2025
</IV089>

**IV090**

*Hoe moet het declaratiebericht gevuld worden indien achteraf gedeclareerd wordt?*

Zorg of ondersteuning geleverd aan een cliënt tijdens een bepaalde declaratieperiode wordt direct in de erop volgende declaratieperiode of achteraf in een latere declaratieperiode gedeclareerd.

Wanneer achteraf wordt gedeclareerd, mag dit niet met een declaratieperiode worden gedaan die voor de laatst ingediende declaratieperiode ligt. De productperiode zelf mag wel in het verleden liggen, aangezien hiermee de periode van levering wordt aangeduid
Wanneer achteraf wordt gedeclareerd over meerdere declaratieperiodes worden in één declaratiebericht evenveel prestaties opgenomen als het aantal afzonderlijke prestaties dat verzonden zou zijn wanneer deze in afzonderlijke berichten waren opgenomen.

Voorbeelden

In onderstaande voorbeelden wordt uitgegaan van de volgende situatie:

De volgende declaratieperiodes zijn ingediend:
01-01-2025 t/m 31-01-2025
01-02-2025 t/m 28-02-2025
01-03-2025 t/m 31-03-2025
01-05-2025 t/m 31-05-2025 (In april was er blijkbaar niets te declareren)

Achteraf declareren als een declaratieperiode mist

In juni blijkt dat in april 2025 toch iets te declareren was, aangezien in maart 2025 zorg is geleverd aan een cliënt. Aangezien er al een declaratieperiode is ingediend die na April 2025 ligt (namelijk mei 2025), kunnen de nog niet ingediende Prestaties van Maart 2025 worden ingediend met één van de volgende declaratieperiodes:

- Als 2e declaratie van de maand mei: DeclaratiePeriode 01-05-2025 t/m 31-05-2025
- Bij de eerstvolgende declaratie in juni: DeclaratiePeriode 01-06-2025 t/m 30-06-2025

Achteraf declareren als de hulpperiode meerdere declaratieperiodes beslaat

In juni blijkt dat (ononderbroken) geleverde ondersteuning aan een cliënt tussen 15-02-2025 t/m 30-04-2025 nog niet is gedeclareerd. Er dient per declaratieperiode een Prestatie te worden ingediend. Er volgen in het volgende declaratiebericht 3 Prestaties met de volgende productperiodes:

- ProductPeriode Prestatie 1: 15-02-2025 t/m 28-02-2025
- ProductPeriode Prestatie 2: 01-03-2025 t/m 31-03-2025
- ProductPeriode Prestatie 3: 01-04-2025 t/m 30-04-2025

**IV091**

*Hoe moet een creditprestatie gevuld worden in een declaratiebericht?*

In de IngediendBedrag-regel van een Prestatie wordt met DebetCredit aangegeven of de indienende partij een vordering (debet) of een terugvordering (credit) doet bij de ontvanger van de declaratie.

Crediteren declaratie:

Een creditprestatie is identiek aan de oorspronkelijke debetprestatie, met uitzondering van:

- ReferentieNummer: de creditprestatie krijgt een nieuw ReferentieNummer.
- VorigReferentieNummer wordt gevuld met het ReferentieNummer van de oorspronkelijke debetprestatie.
- DebetCredit in IngediendBedrag wordt gevuld met C (Credit)

Crediteren is alleen mogelijk na ontvangst van het declaratie-antwoordbericht waarin de te crediteren prestatie is toegekend (zie IV085).

**IV092**

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

Toewijzing 432, product B1, vanaf 1 maart 2025, 3 uur per week, einddatum 31 december 2026

Toewijzing 543, product C1, vanaf 1 maart 2025, 80 uur totaal over periode, einddatum 31 december 2025

Gewenst is om het product B1 vanaf 1 september 2025 te vervangen door product B2, voor 6 uur per week tot eind 2026 (en daarom moet product B1 dus stoppen per 31 augustus)

VOW bericht bevat:

- OngewijzigdProduct: ToewijzingNummer 543
- TeWijzigenProduct: ToewijzingNummer 432, GewensteIngangsdatum 1 maart 2025, 3 uur per week, einddatum 31 augustus 2025
- NieuwProduct: Product B2, GewensteIngangsdatum 1 september 2025, 6 uur per week, einddatum 31 december 2026

Voorbeeld 2a, Actuele situatie:

Toewijzing 789, product A1, vanaf 1 maart 2025, 3 uur per week, einddatum 31 december 2025

Toewijzing 910, product C1, vanaf 1 maart 2025, 4 dagdelen per maand, einddatum 31 december 2025

In oktober 2025 wordt duidelijk: gewenst is om voor product A1 de levering te verlengen én te verhogen: vanaf 1 november 2025 met 5 uur per week, tot 1 juli volgend jaar

Daarnaast is het nodig om na 31 december 2025 ook nog door te gaan met Product C1, ook tot 1 juli.

VOW bericht bevat:

- TeWijzigenProduct: ToewijzingNummer 789, GewensteIngangsdatum 1 november 2025, 5 uur per week, einddatum 1 juli 2026
- TeWijzigenProduct: ToewijzigenNummer 910, GewensteIngangsdatum 1 maart 2025, 4 dagdelen per maand, einddatum 1 juli 2026

Voorbeeld 2b, Actuele situatie:

Toewijzing 789, product A1, vanaf 1 maart 2025, 3 uur per week, einddatum 31 december 2025

Toewijzing 910, product C1, vanaf 1 maart 2025, 4 dagdelen per maand, einddatum 31 december 2025

In oktober 2025 wordt duidelijk: gewenst is om voor product A1 de levering te verlengen én te verhogen: vanaf 1 november 2025 met 5 uur per week, tot 1 juli volgend jaar

Daarnaast is het nodig om vanaf 1 januari 2026 ook nog door te gaan met Product C1, maar dan voor 2 dagdelen per maand, ook tot 1 juli. Dit is een ingangsdatum die niet overlapt met de actuele wijziging, dus hiervoor wordt NieuwProduct gebruikt.

VOW bericht bevat:

- OngewijzigdProduct: ToewijzingNummer 910
- TeWijzigenProduct: ToewijzingNummer 789, GewensteIngangsdatum 1 november 2025, 5 uur per week, einddatum 1 juli 2026
- NieuwProduct: Product C1 GewensteIngangsdatum 1 januari 2026, 2 dagdelen per maand, einddatum 1 juli 2026

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

**IV094**

*Hoe wordt een toewijzingbericht gevuld naar aanleiding van een verzoek om toewijzing (VOT) bericht?*

Als een Toewijzingbericht wordt gestuurd als gevolg van de honorering van een VOT bericht, dan worden alle toe te wijzen producten toegewezen met parameters volgens het oordeel van gemeente.
De gemeente kan per product/productcategorie afwijken van de met de VOT gevraagde datums en omvang, of besluiten om een ander product toe te wijzen (bijvoorbeeld bij gestaffelde producten waarbij de productcode afhankelijk is van omvang)

In het geval dat er een aspecifiek product met budget of een generieke toewijzing wordt aangevraagd kan de gemeente besluiten om een ander budget toe te wijzen.

Elk toegewezen product krijgt de ReferentieAanbieder van de betreffende productaanvraag in het VOT bericht.

Alle andere actuele toegewezen producten voor deze cliënt bij deze aanbieder worden ook in het toewijzingbericht opgenomen zodat voldaan wordt aan OP087, de ReferentieAanbieder is hierbij leeg.

**IV095**

*Hoe moet de juiste gemeente gevuld worden?*

Indien de gemeente in het antwoordbericht aangeeft dat zij niet de verantwoordelijke gemeente is van de cliënt waarvoor een verzoek om toewijzing is ingediend, wordt RedenAfwijzingVerzoek in het antwoordbericht gevuld met de waarde 8 (Woonplaatsbeginsel).

In dat geval moet de gemeente in Gemeente de gemeentecode meegeven die volgens haar wel de verantwoordelijke gemeente is. De aanbieder weet dan bij welke gemeente het verzoek om toewijzing moet worden ingediend.

Bij alle andere waarden van RedenAfwijzingVerzoek dient de klasse Woonplaatsbeginsel niet te worden opgenomen.

**IV096**

*Hoe wordt de sleutel van een startbericht/stopbericht gevuld?*

Indien sprake is van inspanningsgericht of outputgerichte uitvoeringsvariant, zal ToewijzingNummer gebruikt worden als sleutel tussen het start-/stopbericht en de toewijzing.

Bij een taakgerichte uitvoeringsvariant, is geen sprake van een toewijzing, daarom zal de sleutel bestaan uit Product en Begindatum.

**IV097**

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

- ToewijzingNummer 345001, Product A, Ingangsdatum 1 januari 2025, einddatum 31 december 2025
- ToewijzingNummer 345002, Product B, Ingangsdatum 1 januari 2025, einddatum 31 december 2025
Er wordt een verzoek om wijziging gestuurd om de toewijzing van Product B te verlengen met een half jaar t/m 30 juni 2026, met ReferentieAanbieder 667788 (NB: beide producten moeten opgenomen worden in het verzoek om wijziging.)

Als de gemeente dit verzoek honoreert dan wordt een toewijzing gestuurd met beide ToegewezenProducten (conform regel OP087) met beiden dezelfde ReferentieAanbieder:

- ToewijzingNummer 345001, Product A, Ingangsdatum 1 januari 2025, einddatum 31 december 2025, Referentieaanbieder 667788
- ToewijzingNummer 345002, Product B, Ingangsdatum 1 januari 2025, einddatum 30 juni 2026, Referentieaanbieder 667788

**IV099**

*Wanneer moet RedenWijziging worden gevuld?*

RedenWijziging geeft aan of ToegewezenProduct in een toewijzingsbericht is gewijzigd ten opzichte van de laatste keer dat deze (met hetzelfde ToewijzingNummer) is verstuurd.

Indien het toegewezen product met hetzelfde toewijzingsnummer ongewijzigd is ten opzichte van de laatst verzonden toewijzing, dan is RedenWijziging leeg.

Op het moment dat er wel een wijziging heeft plaatsgevonden, wordt RedenWijziging gevuld met de code die past bij de wijziging die is doorgevoerd.

Bij de initiële toewijzing van een product (een nieuwe toewijzing met een nieuw toewijzingsnummer) is RedenWijziging altijd leeg.

---
