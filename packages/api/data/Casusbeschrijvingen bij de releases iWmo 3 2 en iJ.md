# Casusbeschrijvingen bij de releases iWmo 3.2 en iJw 3.2

Versie: 1.1
Status: Productie
Auteur: Zorginstituut
Bron-link: https://www.istandaarden.nl/binaries/content/assets/istandaarden/iwmo/iwmo-3.2/casusbeschrijvingen-iwmo-3.2-en-ijw-3.2.pdf
Publicatiedatum: 29 september 2022
AI-agent: Jw-agent, Wmo-agent

# Inleiding voor AI-agent

Dit document bevat casusbeschrijvingen die betrekking hebben op de releases **iWmo 3.2** en **iJw 3.2**. De casussen zijn bedoeld om de toepassing van de informatiestandaarden in de praktijk te verduidelijken, met nadruk op de administratieve en procesmatige kant van het berichtenverkeer tussen gemeenten, aanbieders en andere betrokken partijen in het sociaal domein.

## Toelichting op het gebruik door AI-agenten

- **Doel:** Dit document geeft praktijkvoorbeelden van situaties die zich voordoen bij het versturen, verwerken en corrigeren van berichten in het kader van de Jeugdwet (iJw) en de Wet maatschappelijke ondersteuning (iWmo). De uitwerking van elke casus helpt bij het interpreteren en structureren van werkprocessen, regels, codes en het gebruik van standaardberichten.
- **Gebruik:** De AI-agent kan deze casusbeschrijvingen gebruiken om vragen over de werking, toepassing, uitzonderingen en correcte administratieve verwerking van de informatiestandaarden iWmo en iJw te beantwoorden. Het document is zowel geschikt voor ondersteuning van softwareontwikkeling als voor uitleg aan gebruikers/beleidsmedewerkers.
- **Opbouw:** Elke casus bestaat uit:
    - Een beschrijving van de situatie en gebeurtenis
    - De relevante bedrijfsregels en invulinstructies
    - De stappen in het procesverloop (wie doet wat, wanneer en met welk bericht)
    - Voorbeeldberichten met relevante invulwaarden
- **Let op:** De casusvoorbeelden zijn functioneel van aard en soms niet volledig of technisch 100% sluitend. Ze dienen als leidraad voor interpretatie van de standaarden, niet als juridisch bindende voorbeelden.

## Advies voor de AI-agent

- Gebruik de voorbeelden en toelichtingen als context bij het beantwoorden van vragen over berichtenverkeer, toewijzingen, start/stopzorg, wijzigingen en correcties.
- Hanteer bij interpretatie altijd de relevante bedrijfsregels en invulinstructies die bij elke casus genoemd worden en zoals volledig beschreven in het document Regelrapport iJw 3.2.
- Wees alert op verschillen tussen technische en functionele veldwaarden (zie de legenda in het document).
- Houd rekening met de specifieke toepassing (iWmo of iJw) maar realiseer je dat veel principes uitwisselbaar zijn.

---

- Voor actuele details en technische uitwerking van de berichten, raadpleeg altijd de officiële documentatie

# **Casusbeschrijvingen bij de releases iWmo 3.2 en iJw 3.2**

Versie voor publicatie bij definitieve specificaties.

## **Inleiding**

Op 22 juni 2022 zijn de conceptspecificaties van releases iWmo 3.2 en iJw 3.2 gepubliceerd.

Beide releases worden op 3 april 2023 van kracht. Om de wijzigingen ten opzichte van iWmo

3.1 en iJw 3.1 zo veel mogelijk te verduidelijken, is een aantal casussen uitgewerkt.

### **Doelen van dit document**

- Implementatieondersteuning
- Ontwikkeling van casuïstiek in het Informatiemodel iStandaarden

### **Doel van de casusbeschrijvingen**

De casusbeschrijvingen hebben primair tot doel om ‘de bedoeling’ van de 3.2-release concreet te maken. Ze leveren een bijdrage aan eenduidigheid bij de bouw van functionaliteit door softwareleveranciers én ze helpen gemeenten en aanbieders van zorg en ondersteuning hun werkprocessen beter in te richten voor de komende releases.

**NB** Tenzij anders beschreven, kan in plaats van iJw-berichten het overeenkomstige iWmo-bericht gelezen worden en andersom.

### **Opbouw van dit document**

In elk hoofdstuk is een casus uitgewerkt. Daarbij is deze indeling gehanteerd:

- **Inleiding**, waarin de situatie is beschreven en de gebeurtenis die zich in deze casus voordoet. Daarnaast is een overzicht opgenomen van de relevante bedrijfsregels en invulinstructies. Zo is direct duidelijk op welke onderdelen van de specificatie de casus is gebaseerd.
- **Stappen in de procesgang**, waarin in stappen is aangegeven welke activiteiten er door de gemeente en aanbieder rondom het berichtenverkeer worden ondernomen. Ieder heenbericht wordt gevolgd door een retourbericht. Indien het heenbericht wordt goedgekeurd, is het retourbericht niet opgenomen als aparte stap. Alleen als het heenbericht wordt afgekeurd, zal dit als aparte stap worden beschreven.

**NB** Dat het retourbericht bij een goedgekeurd heenbericht niet als stap in het document opgenomen wordt, neemt niet weg dat het in het berichtenverkeer verplicht is om retourberichten te versturen.

- **Voorbeeldvulling berichten**, deze bevatten een uitwerking van de invulling van de berichten aan de hand van voorbeeldwaarden. Veldnamen en ingevulde waarden zijn functioneel beschreven. De hier gegeven opsomming heeft niet de bedoeling om volledig te zijn, maar slechts om inzicht te geven in de waarde van de velden die van belang zijn voor de casus. Het is dan ook mogelijk dat verplichte velden niet genoemd worden.

### **Legenda**

In de berichtvoorbeelden zijn de veldnamen en veldwaarden op een functionele manier gebruikt, zodat de voorbeelden voor iedereen leesbaar en te begrijpen zijn. De daadwerkelijke veldwaarden in de berichten dienen op de technisch juiste wijze te worden gevuld. In de tabel staan de belangrijkste veldwaarden die in dit document anders worden gebruikt dan in de werkelijkheid.

| **Soort veld** | **Functionele vulling document** | **Technische vulling in bericht** |
| --- | --- | --- |
| Datumveld | dd-mm-eejj 21-10-2023 | eejjmmdd 20231021 |
| Codevelden | Code + omschrijving 04 (uur) | Code 04 |
| Bedragen | Bedrag in euro's 1234,00 | Bedrag in eurocenten 123400 |
| Negatieve bedragen | Negatieve bedragen worden functioneel weergegeven als: -1234,00 |  |

### **Meer informatie**

Hebt u vragen over de casusbeschrijvingen voor iWmo 3.2 en iJw 3.2? Neemt u dan contact op Zorginstituut Nederland

Team Informatiestandaarden

(020) 797 89 48

info@istandaarden.nl

www.istandaarden.nl

**Bezoekadres**

Willem Dudokhof 1

1112 ZA Diemen

**Postadres**

Postbus 320

1110 AH Diemen

**Het nut van landelijke afspraken over samenwerking in het administratieve proces**

De informatiestandaarden iWmo en iJw zijn landelijke afspraken over samenwerking in het administratieve proces. Ze zijn ontwikkeld om beleidsonafhankelijk te werken. Net als iWlz geven iWmo en iJw een kader dat de inhoudelijke beleidsvrijheid niet raakt, maar dat wel zorgt voor eenduidigheid in het administratieve proces en voor duidelijke bedrijfsafspraken.

In de ministeriële regeling is het gebruik van de informatiestandaarden iWmo en iJw verplicht gesteld met ingang van de dag volgend op de publicatie (publicatiedatum 25-07-2019) van de ministeriële regeling.

**Hoe gebruikt u informatiestandaarden?**

- Maak in uw hele organisatie duidelijk dat landelijke afspraken bestaan over samenwerking in het administratieve proces en dat deze zijn vastgelegd in de standaarden iWmo en iJw.
- Betrek daarbij de collega’s van beleid, inkoop, financiële administratie, control en informatiemanagement.
- Zorg ervoor dat de landelijke afspraken meegenomen worden in het beleids- en inkoopproces.

## **Toewijzingen**

### **1 Van Toewijzing naar Verlengen Toewijzing via Oprekken Einddatum**

**1.1 Inleiding**

*1.1.1 Situatie en gebeurtenis*

De gemeente stuurt een toewijzingsbericht naar de aanbieder voor ambulante Jeugdhulp met omvang 3 uur per week en einddatum 30 juni 2023. De aanbieder start met leveren. Medio april heeft de wettelijke vertegenwoordiger contact met de gemeente om de zorg te laten verlengen omdat de zorgvraag onveranderd is.

De gemeente gaat akkoord met de vraag om de zorg te verlengen. Hiervoor stuurt de gemeente een toewijzingsbericht met daarin de gewijzigde toewijzing. De einddatum van de bestaande toewijzing wordt hiervoor opgerekt.

*1.1.2 Relevante bedrijfsregels en invulinstructies*

| **Nr** | **Omschrijving** |
| --- | --- |
| OP033x1 | Een afgegeven toewijzing mag gewijzigd worden waarbij de wijziging met een nieuw bericht moet worden doorgegeven. |
| OP257 | Bij een wijziging van de zorgvraag wordt voor het betreffende product een nieuwe toewijzing afgegeven. |
| OP380 | Het oprekken van de einddatum van de bestaande toewijzing voor een verlenging van de zorg of ondersteuning is verplicht. |

**1.2 Stappen in de procesgang**

De stappen in de tabel worden doorlopen.

| **Stap** | **Omschrijving** | **Berichten** |
| --- | --- | --- |
| 1 | De gemeente stuurt een initieel toewijzingsbericht naar de aanbieder | JW301 |
| 2 | De aanbieder verwerkt de toewijzing, start met de daadwerkelijke zorglevering en stuurt een startbericht naar de gemeente | JW305 |
| 3 | De wettelijke vertegenwoordiger heeft contact met de gemeente en geeft aan dat de zorglevering ook na 30 juni 2023 nog wenselijk is. | Geen |
| 4 | De gemeente is akkoord, stuurt een nieuw toewijzingsbericht met daarin de gewijzigde toewijzing (einddatum van de bestaande toewijzing wordt opgerekt) | JW301 |

**1.3 Voorbeeldvulling berichten**

*Stap 1: De gemeente stuurt een toewijzingsbericht*

De gemeente stuurt op 01-01-2023 een initieel toewijzingsbericht voor (45A04) Jeugdhulp ambulant regulier inspanningsgericht, 3 uur per week.

**Toewijzing (301):**

Header

Cliënt: BSN 999900006

**Toegewezen Product**

| Toewijzingnummer | 667899 |
| --- | --- |
| Referentie aanbieder |  |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Toewijzingsdatum toegewezen product | 01-01-2023 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Einddatum toegewezen product | 30-06-2023 |
| Reden wijziging |  |
| Volume | 3 |
| Eenheid | 04 (Uur) |
| Frequentie | 2 (Per week) |

*Stap 2: De aanbieder stuurt een startbericht*

De aanbieder verwerkt de ontvangen toewijzing, start met de daadwerkelijke zorglevering en stuurt een startbericht.

**Start (305):**

Header

Cliënt

BSN 999900006

**StartProduct**

| Toewijzingnummer | 667899 |
| --- | --- |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Begindatum levering | 05-01-2023 |
| Status aanlevering start product | 1 (Eerste aanlevering) |

*Stap 3: Wettelijk vertegenwoordiger vraagt verlenging*

Medio april neemt de wettelijk vertegenwoordiger contact op met de gemeente om aan te geven dat de zorg ook na 30 juni nog wenselijk is.

*Stap 4: Gemeente verlengt de toewijzing met een toewijzingsbericht*

De gemeente oordeelt dat de zorg inderdaad verlengd moet worden. Omdat de toewijzing aan alle voorwaarden uit OP380 voldoet, moet de einddatum van de bestaande toewijzing worden aangepast. Voor deze casus betekent dat:

- het volume blijft gelijk
- de frequentie is ongelijk aan totaal binnen geldigheidsduur toewijzing en blijft gelijk
- de einddatum van de bestaande toewijzing is nog niet verstreken

**Toewijzing (301):**

Header

Cliënt: BSN 999900006

**ToegewezenProduct**

| Toewijzingnummer | 667899 |
| --- | --- |
| Referentie aanbieder |  |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Toewijzingsdatum toegewezen product | 10-05-2023 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Einddatum toegewezen product | 31-12-2023 |
| Reden wijziging | 04 (herbeoordeling: verlenging toewijzing) |
| Volume | 3 |
| Eenheid | 04 (Uur) |
| Frequentie | 2 (Per week) |

## **Start- en stopzorg**

### **2 Van Levering via Tijdelijke Stopzorg naar Definitieve Stopzorg (gelijke einddatum)**

**2.1 Inleiding**

*2.1.1 Situatie en gebeurtenis*

De gemeente geeft een toewijzing voor het leveren van Wmo-ondersteuning af aan de aanbieder, waarna deze de zorglevering opstart. Op een gegeven moment geeft de aanbieder via een stopbericht door dat de levering van de zorg tijdelijk gestopt is, omdat de cliënt is opgenomen in het ziekenhuis.

Als na 2 weken blijkt dat de cliënt niet meer naar huis komt, en de levering van de zorg niet herstart hoeft te worden, stuurt de aanbieder een nieuw stopbericht om de definitieve stop door te geven.

*2.1.2 Relevante bedrijfsregels en invulinstructies*

| **Nr** | **Omschrijving** |
| --- | --- |
| OP072 | Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beëindigd is. |
| OP155 | Een (tijdelijke) beëindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering. |
| OP272 | De aanbieder verzendt een stopbericht binnen vijf werkdagen na de datum waarop de levering van de daadwerkelijk toegewezen ondersteuning echt beëindigd is. |
| OP377 | Alleen een tijdelijke stop mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stop. |
| OP378 | Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan. |

**2.2 Stappen in de procesgang**

De stappen in de tabel worden doorlopen.

| **Stap** | **Omschrijving** | **Berichten** |
| --- | --- | --- |
| 1 | De gemeente stuurt een initieel toewijzingsbericht naar de aanbieder | WMO301 |
| 2 | De aanbieder verwerkt de toewijzing, start met de daadwerkelijke zorglevering en stuurt een startbericht naar de gemeente | WMO305 |
| 3 | De aanbieder stuurt een stopbericht om de tijdelijke stop door te geven | WMO307 |
| 4 | De aanbieder stuurt een stopbericht om de definitieve stop door te geven | WMO307 |

**2.3 Voorbeeldvulling berichten**

*Stap 1: De gemeente stuurt een toewijzingsbericht*

De gemeente stuurt op 09-05-2023 een initieel toewijzingsbericht voor dagbesteding regulier inspanningsgericht, 6 dagdelen per week.

**Toewijzing (301):**

Header

Cliënt: BSN 999996770

| **ToegewezenProduct** |  |
| --- | --- |
| Toewijzingnummer | 668877 |
| Referentie aanbieder |  |
| Productcategorie | 07 |
| Productcode | 07A12 |
| Toewijzingsdatum toegewezen product | 09-05-2023 |
| Ingangsdatum toegewezen product | 15-05-2023 |
| Einddatum toegewezen product | 31-12-2023 |
| Reden wijziging |  |
| Volume | 6 |
| Eenheid | 16 (Dagdeel (4 uur)) |
| Frequentie | 2 (Per week) |

*Stap 2: De aanbieder stuurt een startbericht*

De aanbieder verwerkt de ontvangen toewijzing, start met de daadwerkelijke zorglevering en stuurt een startbericht

**Start (305):**

Header

Cliënt: BSN 999996770

| **StartProduct** |  |
| --- | --- |
| Toewijzingnummer | 668877 |
| Productcategorie | 07 |
| Productcode | 07A12 |
| Ingangsdatum toegewezen product | 15-05-2023 |
| Begindatum levering | 17-05-2023 |
| Status aanlevering start product | 1 (Eerste aanlevering) |

*Stap 3:* *De aanbieder stuurt een stopbericht*

De aanbieder krijgt bericht dat de cliënt is opgenomen in het ziekenhuis en dus tijdelijk niet deelneemt aan de dagbesteding. De aanbieder stuurt een stopbericht aan de gemeente om de tijdelijke stop te melden.

**Stop (307):**

Header

Cliënt: BSN 999996770

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 668877 |
| Productcategorie | 07 |
| Productcode | 07A12 |
| Ingangsdatum toegewezen product | 15-05-2023 |
| Begindatum levering | 17-05-2023 |
| Reden beëindiging | 20 (Levering is tijdelijk beëindigd) |
| Einddatum levering | 20-06-2023 |
| Status aanlevering stop product | 1 (Eerste aanlevering) |

*Stap 4: De aanbieder stuurt een stopbericht*

Na 2 weken krijgt de aanbieder bericht dat de cliënt niet meer thuis komt vanuit het ziekenhuis, maar naar een verpleeghuis gaat. De dagbesteding wordt dan ook niet meer herstart. De aanbieder stuurt (binnen 5 werkdagen na vaststelling definitieve stop) een stopbericht aan de gemeente om de definitieve stop te melden.

De einddatum levering moet gevuld worden met een datum die groter dan of gelijk is aan de einddatum levering die in de tijdelijke stop is doorgegeven (TR414). In deze situatie geeft de aanbieder een einddatum door die gelijk is aan die van de tijdelijke stop, dit omdat er geen levering meer is geweest. Tevens kan de gemeente hierdoor deze datum gebruiken voor het afmelden van de eigen bijdrage CAK. Op deze wijze wordt voorkomen dat de cliënt nog eigen bijdrage moet betalen, terwijl deze niet langer de zorg krijgt.

**Stop (307):**

Header

Cliënt

BSN 999996770

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 668877 |
| Productcategorie | 07 |
| Productcode | 07A12 |
| Ingangsdatum toegewezen product | 15-05-2023 |
| Begindatum levering | 17-05-2023 |
| Reden beëindiging | 23 (Levering is in overeenstemming voortijdig beëindigd) |
| Einddatum levering | 20-06-2023 |
| Status aanlevering stop product | 1 (Eerste aanlevering) |

### **3 Van Tijdelijke Stopzorg naar Definitieve Stopzorg (ongelijke einddatum)**

**3.1 Inleiding**

*3.1.1 Situatie en gebeurtenis*

Client maakt sinds 2020 gebruik van dagbesteding. In juni 2023 wordt cliënt opgenomen in het ziekenhuis en maakt tijdelijk geen gebruik van de dagbesteding. De aanbieder meldt dit aan de gemeente door middel van een tijdelijke stop in een stopbericht. Als na een korte periode blijkt dat de cliënt niet meer terug naar huis kan en dus ook geen gebruik meer gaat maken van de dagbesteding meldt de aanbieder de definitieve stop wederom met een stopbericht. Als einddatum levering in het stopbericht wordt de datum gebruikt waarop bekend is dat de cliënt niet meer zal terugkeren.

*N.b. de stappen in deze casus worden beschreven vanaf het moment dat de aanbieder de tijdelijke stopzorg meldt. De eerdere stappen waarin de gemeente de toewijzing afgeeft en waarin de aanbieder de startzorg meldt zijn regulier doorlopen, maar worden niet beschreven.*

*3.1.2 Relevante bedrijfsregels en invulinstructies*

| **Nr** | **Omschrijving** |
| --- | --- |
| OP072 | Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beëindigd is. |
| OP155 | Een (tijdelijke) beëindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering. |
| OP272 | De aanbieder verzendt een stopbericht binnen vijf werkdagen na de datum waarop de levering van de daadwerkelijk toegewezen ondersteuning echt beëindigd is. |
| OP377 | Alleen een tijdelijke stop mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stop. |
| OP378 | Zonder tussenkomst van een startbericht is na een tijdelijke stop alleen een definitieve stop toegestaan. |

**3.2 Stappen in de procesgang**

De stappen in de tabel worden doorlopen.

| **Stap** | **Omschrijving** | **Berichten** |
| --- | --- | --- |
| 1 | De aanbieder stuurt een stopbericht om de tijdelijke stop door te geven | WMO307 |
| 2 | De aanbieder stuurt een stopbericht om de definitieve stop door te geven, met einddatum ongelijk aan einddatum tijdelijke stop | WMO307 |

**3.3 Voorbeeldvulling berichten**

*Stap 1:* *De aanbieder stuurt een stopbericht*

In juni 2023 wordt de cliënt opgenomen in het ziekenhuis. De aanbieder meldt de tijdelijke stopzorg aan de gemeente met een stopbericht.

**Stop (307):**

Header

Cliënt: BSN 999996782

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 12563 |
| Productcategorie | 07 |
| Productcode | 07A01 |
| Ingangsdatum toegewezen product | 16-03-2020 |
| Begindatum levering | 30-03-2020 |
| Reden beëindiging | 20 (Levering is tijdelijk beëindigd) |
| Einddatum levering | 07-06-2023 |
| Status aanlevering stop product | 1 (Eerste aanlevering) |

*Stap 2:* *De aanbieder stuurt een stopbericht*

Na een opname van ruim 3 weken wordt duidelijk dat de cliënt niet genoeg opknapt om terug te keren naar huis, en zal daardoor ook geen gebruik meer maken van de dagbesteding. De zorg stopt nu definitief. De aanbieder meldt de definitieve stopzorg bij de gemeente met een stopbericht.

De einddatum levering moet gevuld worden met een datum die groter dan of gelijk is aan de einddatum levering die in de tijdelijke stop is doorgegeven (TR414). In deze situatie wordt de einddatum levering gevuld met de datum waarop bekend werd dat de cliënt geen gebruik meer gaat maken van de dagbesteding.

**Stop (307):**

Header

Cliënt: BSN 999996782

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 12563 |
| Productcategorie | 07 |
| Productcode | 07A01 |
| Ingangsdatum toegewezen product | 16-03-2020 |
| Begindatum levering | 30-03-2020 |
| Reden beëindiging | 23 (Levering is in overeenstemming voortijdig beëindigd) |
| Einddatum levering | 29-06-2023 |
| Status aanlevering stop product | 1 (Eerste aanlevering) |

### **4 Van levering via Stopzorg naar Corrigeren Stopzorg**

**4.1 Inleiding**

*4.1.1 Situatie en gebeurtenis*

De gemeente stuurt een toewijzingsbericht naar de aanbieder voor ambulante Jeugdhulp met omvang 3 uur per week en einddatum 30 juni 2023. De aanbieder start met leveren en meldt de startzorg aan de gemeente met een startbericht.

De zorglevering wordt volgens plan beëindigd en de aanbieder stuurt een stopzorg aan de gemeente. Enkele dagen later signaleert de aanbieder dat per abuis de verkeerde reden beëindiging is doorgegeven.

De aanbieder corrigeert het eerder verstuurde stopbericht door deze aanlevering te verwijderen (status aanlevering 3 (verwijderen aanlevering)) en een nieuwe aanlevering te versturen. Door een technisch aanpassing is het nu het toegestaan voor deze correctie de verwijderde berichtklasse en de nieuwe vervangende berichtklasse in één stopbericht te sturen.

*4.1.2 Relevante bedrijfsregels en invulinstructies*

| **Nr** | **Omschrijving** |
| --- | --- |
| OP033 | Voor het doorgeven van wijzigingen en correcties op een eerder verzonden bericht, moet gebruik gemaakt worden van de systematiek van status aanlevering. |
| OP033x2 | Het gebruik van status aanlevering met een waarde 2 (een berichtklasse is gewijzigd) is niet toegestaan. |
| OP072 | Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beëindigd is. |
| OP155 | Een (tijdelijke) beëindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering. |
| OP272 | De aanbieder verzendt een stopbericht binnen vijf werkdagen na de datum waarop de levering van de daadwerkelijk toegewezen ondersteuning echt beëindigd is. |
| IV008 | Hoe moet worden omgegaan met correcties van de regieberichten? |

**4.2 Stappen in de procesgang**

De stappen in de tabel worden doorlopen.

| **Stap** | **Omschrijving** | **Berichten** |
| --- | --- | --- |
| 1 | De gemeente stuurt een initieel toewijzingsbericht naar de aanbieder | JW301 |
| 2 | De aanbieder verwerkt de toewijzing, start met de daadwerkelijke zorglevering en stuurt een startbericht naar de gemeente | JW305 |
| 3 | De aanbieder stuurt een stopbericht | JW307 |
| 4 | De aanbieder stuurt een correctie op het stopbericht | JW307 |

*Stap 1:* *De gemeente stuurt een toewijzingsbericht*

De gemeente stuurt op 01-01-2023 een initieel toewijzingsbericht voor (45A04) Jeugdhulp ambulant regulier inspanningsgericht, 3 uur per week.

**Toewijzing (301):**

Header

Cliënt: BSN 999900006

| **ToegewezenProduct** |  |
| --- | --- |
| Toewijzingnummer | 667899 |
| Referentie aanbieder |  |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Toewijzingsdatum toegewezen product | 01-01-2023 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Einddatum toegewezen product | 30-06-2023 |
| Reden wijziging |  |
| Volume | 3 |
| Eenheid | 04 (Uur) |
| Frequentie | 2 (Per week) |

*Stap 2: De aanbieder stuurt een startbericht*

De aanbieder verwerkt de ontvangen toewijzing, start met de daadwerkelijke zorglevering en stuurt een startbericht

**Start (305):**

Header

Cliënt: BSN 999900006

| **StartProduct** |  |
| --- | --- |
| Toewijzingnummer | 667899 |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Begindatum levering | 05-01-2023 |
| Status aanlevering start product | 1 (Eerste aanlevering) |

*Stap 3: De aanbieder stuurt een stopbericht*

De zorglevering wordt beëindigd, de aanbieder meldt dit met een stopbericht aan de gemeente.

**Stop (307):**

Header

Cliënt

BSN 999900006

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 667899 |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Begindatum levering | 05-01-2023 |
| Reden beëindiging | 22 (Levering is eenzijdig door aanbieder beëindigd) |
| Einddatum levering | 17-06-2023 |
| Status aanlevering stop product | 1 (Eerste aanlevering) |

*Stap 4: De aanbieder stuurt een stopbericht*

Enkele dagen nadat het stopbericht verstuurt is door de aanbieder, constateert deze dat per

ongeluk de verkeerde reden beëindiging is doorgeven.

De administratie heeft reden beëindiging 22 (levering is eenzijdig door aanbieder beëindigd)

gevuld maar dit had reden 19 (levering volgens plan beëindigd) moeten zijn.

Om dit te corrigeren stuurt de aanbieder een nieuw stopbericht met hierin zowel de intrekking

van de eerder verstuurde stop, als de nieuwe vervangende stop.

Door een technisch aanpassing is het nu het toegestaan voor deze correctie de verwijderde

berichtklasse en de nieuwe vervangende berichtklasse in één stopbericht te sturen.

**Stop (307):**

Header

Cliënt: BSN 999900006

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 667899 |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Begindatum levering | 05-01-2023 |
| Reden beëindiging | 22 (Levering is eenzijdig door aanbieder beëindigd) |
| Einddatum levering | 17-06-2023 |
| Status aanlevering stop product | 3 (Verwijdere aanlevering) |

| **StopProduct** |  |
| --- | --- |
| Toewijzingnummer | 667899 |
| Productcategorie | 45 |
| Productcode | 45A04 |
| Ingangsdatum toegewezen product | 01-01-2023 |
| Begindatum levering | 05-01-2023 |
| Reden beëindiging | 19 (Levering volgens plan beëindigd) |
| Einddatum levering | 17-06-2023 |
| Status aanlevering stop product | 1 (Eerste aanlevering) |