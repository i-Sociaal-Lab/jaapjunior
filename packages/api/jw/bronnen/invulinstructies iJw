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
- Wanneer een gebruiker vraagt om de tekst van een specifieke regel (bijvoorbeeld IV999), selecteer en retourneer altijd de volledige tekst die hoort bij het betreffende regelnummers, vanaf de eerste regel na het regelnummers tot en met de eerste volgende regel met een nieuw regelnummers of het einde van het document. Neem alle tekst, opsommingen, subkopjes en toelichtingen op die onder het regelnummers vallen. Geef geen interpretatie in dit geval.
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
</IV007>

<IV009>
  
**IV009**

*Hoe moet worden omgegaan met een geboortedatum?*

Wanneer de Geboortedatum niet volledig of onbekend is, dan wordt het deel dat wel bekend is gebruikt en wordt voor de overige delen de waarde 01 (dag en maand) of 1900 (jaar) gebruikt. Het element DatumGebruik geeft aan welk deel van de datum bekend is en dus te gebruiken.

Voorbeelden:

- Een volledig onbekende geboortedatum wordt 01-01-1900
- Is alleen bekend dat de geboorte in 1953 was, dan wordt de geboortedatum 01-01-1953
- Is alleen bekend dat de geboorte in september 1949 was, dan wordt de geboortedatum 01-09-1949
</IV009>

<IV013>
  
**IV013**

*Welke toewijzing is het meest recent?*

Om vast te kunnen stellen welke toewijzing het recentst is, zijn Toewijzingsdatum en Toewijzingstijd in het toewijzingbericht opgenomen. De gemeente vult deze velden met de datum en de tijd waarop de toewijzing definitief is vastgesteld. Het gaat hier om het moment waarop de gemeente de toewijzing vaststelt en niet om het moment van verzending van het bericht. De toewijzing met de meest recente Toewijzingsdatum en Toewijzingstijd is de actuele toewijzing.
Als een aanbieder de gemeente verzoekt om een bestaande toewijzing nog een keer te versturen, blijft de inhoud van Toewijzingsdatum en Toewijzingstijd onveranderd.
Een aanpassing van het volume of de einddatum in de toewijzing moet beschouwd worden als een gewijzigde toewijzing. De gemeente vult Toewijzingsdatum en Toewijzingstijd met de datum en tijd waarop de gemeente de aanpassing vaststelt.
</IV013>

<IV024>

**IV024**

*Hoe moeten bedragen worden gevuld?*

Bedragen worden in 1/100 van de gehanteerde valuta opgenomen. Als er sprake is van de euro (EUR), dan is als voorbeeld 10000 gelijk aan tienduizend eurocent oftewel 100 euro.
</IV024>

<IV033>

**IV033**

*Hoe moet XsltVersie gevuld worden?*

Wanneer de ontvanger fouten constateert in een bericht op basis van de ter beschikking gestelde XSLTs, wordt in het retourbericht aangegeven welke XSLT-versie gebruikt is voor de controle. Dit versienummer is opgenomen in de output van de XSLTs en dient overgenomen te worden in het retourbericht.
</IV033>

<IV034>

**IV034**

*Hoe moet XsdVersie gevuld worden?*

De waarde voor de elementen BasisschemaXsdVersie en BerichtXsdVersie in het datatype CDT_XsdVersie moeten overgenomen worden uit de schemadefinitie (XSD) waarop het bericht gecreëerd/gebaseerd is. Deze waarden staan in de schemadefinitie respectievelijk in /xs:schema/xs:annotation/xs:appinfo/<namespace>:BasisschemaXsdVersie en /xs:schema/xs:annotation/xs:appinfo/<namespace>:BerichtXsdVersie.
Voor "<namespace>" wordt de namespace van de desbetreffende iStandaard ingevuld, bijv. 'iJw', 'iWmo', enz.
Bijv: <jw301:Bericht xmlns:ijw="http://www.istandaarden.nl/ijw/3_2/basisschema/schema" xmlns:jw301="http://www.istandaarden.nl/ijw/3_2/jw301/schema">
</IV034>

<IV045>

**IV045**

*Hoe wordt de voogd vastgelegd indien dit een organisatie betreft?*

Indien de voogdij voor een cliënt bij een organisatie ligt, wordt in de Relatie de organisatienaam opgenomen als Geslachtsnaam, aangeduid met NaamGebruik 6 (niet-natuurlijk persoon).
</IV045>

<IV046>
  
**IV046**

*Welke gemeentecode moet gevuld worden?*

In de header van de berichten wordt de gemeente opgenomen die volgens de wet verantwoordelijk is voor zorg of ondersteuning aan de cliënt. Voor aanduiding van de gemeente wordt de CBS codelijst gehanteerd.
</IV046>

<IV047>
  
**IV047**

*Hoe om te gaan met de adressering van een cliënt indien alleen een briefadres bekend is?*

Van een cliënt wordt in de toewijzing altijd het GBA adres of verblijfadres meegegeven in de Contactgegevens. Dit is alleen niet mogelijk indien een cliënt in de basisregistratie personen (BRP) is ingeschreven met alleen een briefadres. Voor die situaties kan bij een Cliënt een Adres met Soort Correspondentie-adres worden meegegeven.
</IV047>

<IV052>
  
**IV052**

*Hoe om te gaan met Beschikkingnummer in Verzoek om toewijzing?*

De aanbieder dient het beschikkingnummer mee te geven in het Verzoek om Toewijzing bericht indien de cliënt van haar gemeente een beschikking heeft gekregen.
De gemeente kan op basis van het beschikkingnummmer eenvoudig de bestaande beschikking koppelen aan de informatie uit het Verzoek Om Toewijzing bericht.
</IV052>

<IV066>
  
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
</IV066>

<IV074>
  
**IV074**

*Wat is het verschil tussen de verschillende uitvoeringsvarianten?*

De iStandaarden ondersteunen een aantal verschillende uitvoeringsvarianten: inspanningsgericht, outputgericht en taakgericht. De specifieke eigenschappen van deze uitvoeringsvarianten zijn beschreven in het document Handreiking uitvoeringsvarianten, deze is beschikbaar via [www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw](http://www.istandaarden.nl/ibieb/handreiking-uitvoeringsvarianten-iwmo-en-ijw).
</IV074>

<IV079>
  
**IV079**

*Hoe moet het volume in de prestatie gevuld worden wanneer de eenheid in de prestatie uren is en de geleverde prestatie niet uit volledige uren bestaat?*

Indien er is toegewezen in uren en er wordt gedeclareerd in uren, kan het voorkomen dat de werkelijk geleverde zorg niet uit hele uren (60 minuten) bestaat.
In dat geval wordt het volume rekenkundig afgerond (< 30 minuten = omlaag >= 30 minuten = omhoog), met een minimaal volume van 1 uur.
Geleverde zorg per prestatie behorend bij een toewijzing wordt gesommeerd over de gehele declaratieperiode, waarbij de afronding pas plaats vindt op het totaal volume in de prestatieregel.

Dus indien er wekelijks 95 minuten worden geleverd en de prestatieperiode bevat 4 weken, dan wordt eerst het totaal over de prestatieperiode bepaald = 4 weken x 95 minuten = 380 minuten.
Er wordt gedeclareerd in uren: 380 / 60 = 6 uur en 20 minuten. Afgerond is dit 6 uur. In het volume van de prestatie wordt 6 uur gevuld.
</IV079>

<IV081>
  
**IV081**

*Hoe moet het ProductTarief gevuld worden?*

De eenheid in de prestatie moet gelijk zijn aan de eenheid van de toewijzing. Voor die eenheid dient in het contract een tarief voor het betreffende product te zijn vastgelegd. Het producttarief in de prestatie wordt gevuld met dat betreffende tarief.

Alleen voor uren en minuten is er een uitzondering mogelijk. Gemeente en aanbieder kunnen een tariefeenheid per uur afgesproken hebben, terwijl gedeclareerd wordt in minuten. In dat geval wordt in de Prestatie het ProductTarief omgerekend naar een tarief per minuut (tarief delen door 60 minuten) en afgerond op 2 decimalen volgens de rekenkundige regels. Dit betekent dat 1,455 wordt afgerond naar 1,46 en dat 1,454 wordt afgerond naar 1,45.

Dit (afgeronde) tarief wordt in de Prestatie bij ProductTarief opgenomen, maar niet gebruikt voor de berekening van IngediendBedrag.
Het IngediendBedrag wordt als volgt bepaald: (contractuele uurtarief * aantal minuten) / 60. Dit bedrag wordt vervolgens afgerond op 2 decimalen.(TR346)
</IV081>

<IV084>

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
</IV084>

<IV085>
  
**IV085**

*Wanneer kan een creditering van een declaratie verzonden worden?*

Wanneer een eerder ingediende prestatie door de aanbieder onjuist is bevonden, kan deze door de aanbieder worden ingetrokken door aanlevering van een credit prestatie.
Dit kan alleen nadat er een declaratie-antwoordbericht op de debet prestatie is ontvangen en de prestatie daarin niet is afgekeurd. Een door de gemeente afgekeurde prestatie wordt nooit gecrediteerd.

NB: een creditering is een eenzijdige handeling van de aanbieder, die niet bestreden kan worden door een gemeente. De gemeente kan een ingediende credit prestatie dus niet afkeuren, tenzij het technische afkeur betreft. Zie hiervoor invulinstructies IV088 en IV087).
</IV085>

<IV086>
  
**IV086**

*Hoe moet worden omgegaan met debet en credit prestaties in een declaratiebericht?*

Debet en credit prestaties kunnen in 1 declaratiebericht worden aangeleverd. Hierbij geldt:

- Een 1e debet prestatie en een identieke credit prestatie mogen niet in 1 declaratiebericht worden aangeleverd. Als de 1e debet en credit prestatie op 1 moment bekend zijn, dan horen die tegen elkaar weg te vallen en niet in 1 bericht te staan.
- Een credit prestatie en een 2e debet prestatie kunnen desgewenst in hetzelfde bericht worden aangeleverd.

Totaal declaratiebedrag

Het totale declaratiebedrag van alle debet en credit prestaties in het declaratiebericht wordt ingevuld in TotaalIngediendBedrag in de header van het bericht. Hierbij worden debetbedragen opgeteld en creditbedragen afgetrokken.
</IV086>

<IV091>


**IV091**

*Hoe moet een creditprestatie gevuld worden in een declaratiebericht?*

In de IngediendBedrag-regel van een Prestatie wordt met DebetCredit aangegeven of de indienende partij een vordering (debet) of een terugvordering (credit) doet bij de ontvanger van de declaratie.

Crediteren declaratie:

Een creditprestatie is identiek aan de oorspronkelijke debetprestatie, met uitzondering van:

- ReferentieNummer: de creditprestatie krijgt een nieuw ReferentieNummer.
- VorigReferentieNummer wordt gevuld met het ReferentieNummer van de oorspronkelijke debetprestatie.
- DebetCredit in IngediendBedrag wordt gevuld met C (Credit)

Crediteren is alleen mogelijk na ontvangst van het declaratie-antwoordbericht waarin de te crediteren prestatie is toegekend (zie IV085).
</IV091>

<IV094>

**IV094**

*Hoe wordt een toewijzingbericht gevuld naar aanleiding van een verzoek om toewijzing (VOT) bericht?*

Als een Toewijzingbericht wordt gestuurd als gevolg van de honorering van een VOT bericht, dan worden alle toe te wijzen producten toegewezen met parameters volgens het oordeel van gemeente.
De gemeente kan per product/productcategorie afwijken van de met de VOT gevraagde datums en omvang, of besluiten om een ander product toe te wijzen (bijvoorbeeld bij gestaffelde producten waarbij de productcode afhankelijk is van omvang)

In het geval dat er een aspecifiek product met budget of een generieke toewijzing wordt aangevraagd kan de gemeente besluiten om een ander budget toe te wijzen.

Elk toegewezen product krijgt de ReferentieAanbieder van de betreffende productaanvraag in het VOT bericht.

Alle andere actuele toegewezen producten voor deze cliënt bij deze aanbieder worden ook in het toewijzingbericht opgenomen zodat voldaan wordt aan OP087, de ReferentieAanbieder is hierbij leeg.
</IV094>

<IV095>

**IV095**

*Hoe moet de juiste gemeente gevuld worden?*

Indien de gemeente in het antwoordbericht aangeeft dat zij niet de verantwoordelijke gemeente is van de cliënt waarvoor een verzoek om toewijzing is ingediend, wordt RedenAfwijzingVerzoek in het antwoordbericht gevuld met de waarde 8 (Woonplaatsbeginsel).

In dat geval moet de gemeente in Gemeente de gemeentecode meegeven die volgens haar wel de verantwoordelijke gemeente is. De aanbieder weet dan bij welke gemeente het verzoek om toewijzing moet worden ingediend.

Bij alle andere waarden van RedenAfwijzingVerzoek dient de klasse Woonplaatsbeginsel niet te worden opgenomen.
</IV095>

<IV096>

**IV096**

*Hoe wordt de sleutel van een startbericht/stopbericht gevuld?*

Indien sprake is van inspanningsgericht of outputgerichte uitvoeringsvariant, zal ToewijzingNummer gebruikt worden als sleutel tussen het start-/stopbericht en de toewijzing.

Bij een taakgerichte uitvoeringsvariant, is geen sprake van een toewijzing, daarom zal de sleutel bestaan uit Product en Begindatum.
</IV096>
