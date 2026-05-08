# WJ759 — Reden afwijzing verzoek

## Definitie
Reden van afwijzen van een verzoek om toewijzing of een verzoek om wijziging.

---

## Metadata

| Veld | Waarde |
|---|---|
| ID | WJ759 |
| Naam | Reden afwijzing verzoek |
| Element | LDT_RedenAfwijzingVerzoek |
| Type | Codelijst |
| Standaard | iJw 3.2 |
| Status | Productie |
| Auteur | Zorginstituut Nederland |
| Bron | https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/codelijsten/wj759/ |
| AI-agent | Jw-agent |

---

## Gebruikt in berichten

- JW319
- JW320

---

## Vraagvarianten / zoektermen

Deze codelijst bevat redenen waarom een verzoek om toewijzing (VOT) of verzoek om wijziging (VOW) kan worden afgewezen.

### Mogelijke vraagvarianten

#### VOT-gerelateerde vragen

- met welke reden kan een vot worden afgewezen?
- waarom wordt een vot afgekeurd?
- welke afwijsredenen bestaan er voor een vot?
- reden afwijzing vot
- afwijsreden vot
- afgekeurde vot
- vot afwijscode
- vot retourcode afwijzing
- afkeur reden verzoek om toewijzing
- waarom is een verzoek om toewijzing afgewezen?

#### VOW-gerelateerde vragen

- met welke reden kan een vow worden afgewezen?
- waarom wordt een vow afgekeurd?
- welke afwijsredenen bestaan er voor een vow?
- reden afwijzing vow
- afwijsreden vow
- afgekeurde vow
- vow afwijscode
- vow retourcode afwijzing
- afkeur reden verzoek om wijziging
- waarom is een verzoek om wijziging afgewezen?

#### Algemene vraagvarianten

- welke redenen voor afwijzing van een verzoek zijn er?
- welke codes horen bij afwijzing van een verzoek?
- waarom is mijn verzoek afgewezen?
- welke reden van afwijzing moet ik gebruiken?
- welke afkeurcodes bestaan er binnen iJw?
- reden afwijzing verzoek
- reden retourbericht jw319
- reden retourbericht jw320
- welke code gebruik ik bij afwijzing?
- afwijzing verzoek toewijzing
- afwijzing verzoek wijziging

---

## Codes

| Code | Betekenis |
|---|---|
| 1 | Geen wijziging, maar nieuwe aanvraag |
| 2 | Past niet binnen budget |
| 3 | Geen contract |
| 4 | Past niet binnen contract |
| 5 | Andere gemeente |
| 6 | Stapeling |
| 7 | Zorginhoudelijke afkeur |
| 8 | Woonplaatsbeginsel |
| 9 | Leeftijdsgrens is bereikt |

---

## AI-context

Dit betreft een codelijst (enumeratie) voor `LDT_RedenAfwijzingVerzoek` binnen iJw 3.2.

De code beschrijft de reden waarom een verzoek in een JW319- of JW320-bericht is afgewezen.

Functionele context:
- afwijzing verzoek om toewijzing (VOT)
- afwijzing verzoek om wijziging (VOW)
- retourberichten vanuit gemeenten
- afkeurcodes binnen het berichtenverkeer
- redenen waarom een aanvraag niet wordt geaccepteerd
