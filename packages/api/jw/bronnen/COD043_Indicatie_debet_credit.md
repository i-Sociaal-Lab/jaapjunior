# COD043 — Indicatie debet/credit

## Definitie

Gecodeerde aanduiding voor debet of credit.

---

## Metadata

| Veld | Waarde |
|---|---|
| ID | COD043 |
| Naam | Indicatie debet/credit |
| Element | LDT_DebetCredit |
| Type | Codelijst |
| Standaard | iJw 3.2 |
| Status | Productie |
| Auteur | Zorginstituut Nederland |
| Bron | https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/codelijsten/cod043/ |
| AI-agent | Jw-agent |

---

## Gebruik in berichten

- JW323
- JW325

---

## Codes

| Code | Betekenis |
|---|---|
| C | Creditbedrag en aantal |
| D | Debetbedrag en aantal |

---

## Toelichting

- **C (Credit):** Wordt gebruikt voor correcties, verminderingen of terugboekingen.
- **D (Debet):** Wordt gebruikt voor bedragen die in rekening worden gebracht.

---

## AI-context

Dit betreft een codelijst (enumeratie) voor `LDT_DebetCredit` binnen iJw 3.2.

De code geeft aan of een declaratieregel een debet- of creditmutatie betreft.

- `D` vertegenwoordigt een reguliere declaratie (debet).
- `C` vertegenwoordigt een correctie of terugboeking (credit).
