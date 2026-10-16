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
| Standaard | iWmo 3.2 |
| Status | Productie |
| Auteur | Zorginstituut Nederland |
| Bron | https://informatiemodel.istandaarden.nl/informatiemodel/iwmo/3.2/codelijsten/wj759/ |
| AI-agent | Wmo-agent |

---

## Gebruikt in berichten

- WMO319
- WMO320

---

## Vraagvarianten / zoektermen

Deze codelijst bevat redenen waarom een verzoek om toewijzing (VOT) of verzoek om wijziging (VOW) kan worden afgewezen.

### Mogelijke vraagvarianten

#### VOT-gerelateerde vragen

- met welke reden kan een vot worden afgewezen?
- wat zijn de redenen waarom een vot kan worden afgewezen?
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
- wat zijn de redenen waarom een vow kan worden afgewezen?
- waarom wordt een vow afgekeurd?
- welke afwijsredenen bestaan er voor een vow?
- reden afwijzing vow
- afwijsreden vow
- afgekeurde vow
- vow afwijscode
- vow reden afwijzing
- afkeur reden verzoek om wijziging
- waarom is een verzoek om wijziging afgewezen?

#### Algemene vraagvarianten

- welke redenen voor afwijzing van een verzoek om toewijzing zijn er?
- welke redenen voor afwijzing van een verzoek om wijziging zijn er?
- welke codes horen bij afwijzing van een verzoek?
- waarom is mijn verzoek afgewezen?
- welke reden van afwijzing moet ik gebruiken?
- welke afkeurcodes bestaan er binnen iWmo voor en VOT of VOW?
- reden afwijzing verzoek
- reden amtwoordbericht wmo319
- welke code gebruik ik bij afwijzing VOT of VOW?
- afwijzing verzoek toewijzing
- afwijzing verzoek wijziging

---
## Toepassing van de codes

Alle onderstaande afwijsredenen mogen gebruikt worden voor de afwijzing van:

- verzoek om toewijzing (VOT)
- verzoek om wijziging (VOW)

Dezelfde codelijst geldt voor zowel VOT als VOW.
Er bestaat geen aparte afwijscodelijst voor VOW.

---
## Synoniemen

### Functionele synoniemen

| Term | Synoniemen / alternatieve formuleringen |
|---|---|
| Afwijzing | Afkeur, weigering, niet accepteren |
| Afwijzen | Afkeuren, weigeren, retourneren |
| Reden afwijzing | Afwijsreden, afkeurreden, foutreden, retourreden |
| Afwijscode | Retourcode, foutcode, afkeurcode, redencode |
| Verzoek | Aanvraag, verzoekbericht |
| Antwoordbericht | Retourbericht, reactiebericht, responsbericht |
| Gemeente wijst af | Gemeente retourneert, gemeente keurt af |
| Niet geaccepteerd | Afgekeurd, geweigerd, afgewezen |
| Bericht afgewezen | Bericht afgekeurd, bericht geretourneerd |
| Toewijzingsverzoek | VOT, verzoek om toewijzing |
| Wijzigingsverzoek | VOW, verzoek om wijziging |

---

### Technische synoniemen

| Technische term | Alternatieve zoektermen |
|---|---|
| WMO319 | antwoordbericht, retourbericht, gemeentelijk antwoordbericht |
| LDT_RedenAfwijzingVerzoek | afwijscodelijst, reden afwijzing verzoek |
| WJ759 | afwijsredenen iWmo, codelijst afwijzing verzoek |

---

### Zoektermen voor AI / RAG retrieval

- afkeurcodes WMO319
- afkeurreden VOT
- afkeurreden VOW
- afwijsredenen verzoek
- redenen afgewezen verzoek
- redenen afgekeurde aanvraag
- waarom wijst gemeente verzoek af?
- code afgewezen verzoek
- code afgekeurde vot
- code afgekeurde vow
- afwijsbericht gemeente
- verzoek niet geaccepteerd
- verzoek geweigerd
- aanvraag afgewezen gemeente
- afwijzing zorgverzoek
- afkeur verzoekbericht

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

Dit betreft een codelijst (enumeratie) voor `LDT_RedenAfwijzingVerzoek` binnen iWmo 3.2.

De code beschrijft de reden waarom een verzoek om toewijzing of een verzoek om wijziging in een WMO319-bericht is afgewezen.

Functionele context:
- afwijzing verzoek om toewijzing (VOT)
- afwijzing verzoek om wijziging (VOW)
- antwoordbericht vanuit gemeenten
- afkeurcodes binnen het berichtenverkeer
- redenen waarom een verzoek niet wordt geaccepteerd
