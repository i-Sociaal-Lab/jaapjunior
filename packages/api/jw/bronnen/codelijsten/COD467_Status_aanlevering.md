# COD467 - Status aanlevering

## Definitie

Indicatie over de status van de informatie in de berichtklasse.

---

## Metadata

| Veld | Waarde |
|---|---|
| ID | COD467 |
| Naam | Status aanlevering |
| Element | LDT_StatusAanlevering |
| Type | Referentielijst |
| Standaard | iJw 3.2 |
| Status | Productie |
| Auteur | Zorginstituut Nederland |
| Laatst bijgewerkt | 01-01-2015 |
| Bron | https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/codelijsten/cod467/ |
| AI-agent | Jw-agent |

---

## Gebruikt in berichten

- JW305
- JW306
- JW307
- JW308

---

## Codes

| Code | Betekenis |
|---|---|
| 1 | Eerste aanlevering |
| 2 | Gewijzigde aanlevering |
| 3 | Verwijderen aanlevering |
| 9 | Niet van toepassing (ongewijzigd) |

---

## Toelichting

Deze referentielijst geeft de status van aanlevering aan binnen berichtklassen zoals:
- `StartProduct (JW305)`
- `StopProduct (JW307)`
- Code 2 en 9 mogen niet worden gebruikt, zie CS058

## Gerelateerde constraints
- CS058

---

## AI-context

Dit betreft een referentielijst voor `LDT_StatusAanlevering` binnen iJw 3.2.

De code beschrijft de status van een aanlevering of wijziging binnen een berichtklasse.
