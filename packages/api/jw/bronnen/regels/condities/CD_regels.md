# Conditieregels iJw-berichten

## Definitie

Overzicht van conditionele validatieregels binnen de iJw-standaard 3.2.

De conditieregels beschrijven onder welke voorwaarden elementen verplicht gevuld moeten worden, leeg moeten blijven of alleen onder specifieke omstandigheden mogen voorkomen binnen iJw-berichten.

---

## Metadata

| Veld | Waarde |
|---|---|
| Titel | Conditieregels iJw-berichten |
| Type | Validatieregels |
| Standaard | iJw 3.2 |
| Laatst bewerkt | 14-10-2025 |
| Bron | iJw standaard 3.2 |
| Regelcategorie | Conditieregels |
| AI-agent | Jw-agent |

---

## Toepassing

Deze regels worden gebruikt voor:
- validatie van iJw-berichten
- controle op verplichte of verboden elementen
- inhoudelijke berichtcontrole via XSLT-validaties
- interpretatie van afhankelijkheden tussen elementen
- foutafhandeling via retourcodes

De regels zijn van toepassing op verschillende berichttypen binnen de iJw-standaard, zoals:
- JW301
- JW315
- JW317
- JW319
- JW323
- JW325

---

## Conditieregels

| Type | Prioriteit | Regelcode | Omschrijving | Toelichting | Retourcode | Controleniveau | Berichttypen |
|---|---|---|---|---|---|---|---|
| Conditie | 5 | CD005 | Als Postcode gevuld is, dan verplicht vullen, anders leeg laten. | | 0001 | berichtinhoud (XSLT) | JW301 |
| Conditie | 5 | CD007 | Als Communicatie / Vorm de waarde 1 (tolk taal) heeft, dan verplicht vullen, anders leeg laten. | | 0001 | berichtinhoud (XSLT) | JW301 |
| Conditie | 5 | CD009 | Alleen als Soort adres de waarde 04 (tijdelijk adres) heeft, is vullen toegestaan. | | 0001 | berichtinhoud (XSLT) | JW301 |
| Conditie | 5 | CD025 | Als Adres / LandCode de waarde NL (Nederland) heeft, dan verplicht vullen. | | 0001 | berichtinhoud (XSLT) | JW301 |
| Conditie | 5 | CD034 | Als Soort adres de waarde 1 (BRP-adres) of 3 (verblijfadres) heeft, dan verplicht vullen. | | 0001 | berichtinhoud (XSLT) | JW301 |
| Conditie | 5 | CD041 | Indien Code in Product gevuld is, verplicht vullen. | | 0001 | berichtinhoud (XSLT) | JW301, JW315, JW317 |
| Conditie | 5 | CD043 | Indien Beschikkingnummer gevuld is, verplicht vullen, anders leeg laten. | | 0001 | berichtinhoud (XSLT) | JW315 |
| Conditie | 5 | CD060 | Verplicht vullen indien DebetCredit bij het ingediende bedrag de waarde C (credit) heeft, anders leeg laten. | | 0001 | berichtinhoud (XSLT) | JW323, JW325 |
| Conditie | 5 | CD066 | Als type verwijzer gelijk is aan 02, 03, 04 of 05 en ZorgverlenerCode is gevuld, dan is Naamverwijzer leeg. | | 0001 | berichtinhoud (XSLT) | JW315 |
| Conditie | 5 | CD067 | Als type verwijzer gelijk is aan 02, 03, 04 of 05 en ZorgverlenerCode is leeg, dan is Naamverwijzer gevuld. | | 0001 | berichtinhoud (XSLT) | JW315 |
| Conditie | 5 | CD068 | Als type verwijzer ongelijk is aan 02, 03, 04 of 05, dan is ZorgverlenerCode leeg. | | 0001 | berichtinhoud (XSLT) | JW315 |
| Conditie | 5 | CD075 | Verplicht vullen indien Budget gevuld is. | | 0001 | berichtinhoud (XSLT) | JW301, JW315, JW317 |
| Conditie | 5 | CD076 | Verplicht vullen indien Frequentie waarde 2 (per week). | Om te kunnen berekenen of bij declaratie een prestatie binnen de totale omvang van de toewijzing valt is het van belang de einddatum van de toewijzing te hebben. Dit heeft dus te maken met de omrekening van wekelijks toewijzen naar maandelijks declareren en de controle op volume van declaraties ten opzichte van de toewijzing. | 0001 | berichtinhoud (XSLT) | JW301, JW315, JW317 |
| Conditie | 5 | CD077 | Indien Budget gevuld is, dan leeg laten. | | 0001 | berichtinhoud (XSLT) | JW301, JW315, JW317 |
| Conditie | 5 | CD078 | Indien Omvang gevuld is, dan leeg laten. | | 0001 | berichtinhoud (XSLT) | JW301, JW315, JW317 |
| Conditie | 5 | CD079 | Indien Budget leeg is, dan verplicht vullen. | | 0001 | berichtinhoud (XSLT) | JW301, JW315, JW317 |
| Conditie | 5 | CD080 | Indien Code in Product leeg is en Einddatum van het ToegewezenProduct groter dan 31-12-2020 of leeg is, dan leeg laten. | | 0001 | berichtinhoud (XSLT) | JW301 |
| Conditie | 5 | CD085 | Als VerzoekAntwoord de waarde 1 (Verzoek afgewezen) heeft, dan vullen. | | 0001 | berichtinhoud (XSLT) | JW319 |
| Conditie | 5 | CD086 | Als VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) heeft, dan leeg laten. | | 0001 | berichtinhoud (XSLT) | JW319 |
| Conditie | 5 | CD087 | Als eenheid ongelijk is aan 83 (euro's) dan verplicht vullen, anders leeg laten. | | 0001 | berichtinhoud (XSLT) | JW323 |
| Conditie | 5 | CD095 | Indien Code in AangevraagdProduct leeg is en ToewijzingEinddatum van het AangevraagdProduct groter dan 31-12-2020 of leeg is, dan leeg laten. | | 0001 | berichtinhoud (XSLT) | JW315 |
| Conditie | 5 | CD096 | Indien Code in NieuwProduct leeg is en Einddatum groter dan 31-12-2020 of leeg is, dan leeg laten. | | 0001 | berichtinhoud (XSLT) | JW317 |

---

## AI-context

Dit document bevat conditionele validatieregels voor iJw-berichten binnen standaardversie 3.2.

De regels definiëren afhankelijkheden tussen elementen en beschrijven:
- verplichte invulling
- verboden combinaties
- conditionele aanwezigheid van elementen
- contextafhankelijke validaties

De conditieregels worden gebruikt voor:
- berichtvalidatie
- XSLT-validaties
- retourcodebepaling
- workflowvalidatie
- interpretatie van berichtstructuren

De regels zijn semantisch afhankelijk van:
- berichttype
- codelijsten
- elementwaarden
- onderlinge relaties tussen elementen

Retourcode `0001` verwijst doorgaans naar een technische of inhoudelijke afkeur tijdens berichtvalidatie.
