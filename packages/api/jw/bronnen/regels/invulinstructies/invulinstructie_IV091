# IV091 - Hoe moet een creditprestatie gevuld worden in een declaratiebericht?

## Metadata

| Veld | Waarde |
|---|---|
| ID | IV091 |
| Type | Invulinstructie |
| Domein | iJw |
| Onderwerp | Declaratiebericht |
| Thema | Creditprestatie |
| Status | Productie |

---

## Vraag

Hoe moet een creditprestatie gevuld worden in een declaratiebericht?

---

## Antwoord

In de `IngediendBedrag`-regel van een `Prestatie` wordt met `DebetCredit` aangegeven of de indienende partij een vordering (`Debet`) of een terugvordering (`Credit`) doet bij de ontvanger van de declaratie.

### Crediteren declaratie

Een creditprestatie is identiek aan de oorspronkelijke debetprestatie, met uitzondering van:

- `ReferentieNummer`
  - De creditprestatie krijgt een nieuw `ReferentieNummer`.

- `VorigReferentieNummer`
  - Wordt gevuld met het `ReferentieNummer` van de oorspronkelijke debetprestatie.

- `DebetCredit`
  - In `IngediendBedrag` wordt `DebetCredit` gevuld met `C` (`Credit`).

- Voorwaarde voor crediteren
  - Crediteren is alleen mogelijk na ontvangst van het declaratie-antwoordbericht waarin de te crediteren prestatie is toegekend (zie `IV085`).

---

## Structuur voor vector search / RAG

### Kernbegrippen

- Creditprestatie
- Debetprestatie
- Declaratiebericht
- IngediendBedrag
- DebetCredit
- ReferentieNummer
- VorigReferentieNummer
- Declaratie-antwoordbericht
- IV085

### Samenvatting

Een creditprestatie in een declaratiebericht moet vrijwel identiek zijn aan de oorspronkelijke debetprestatie. De creditprestatie krijgt een nieuw `ReferentieNummer`, verwijst via `VorigReferentieNummer` naar de oorspronkelijke prestatie en gebruikt `DebetCredit = C`. Crediteren mag pas nadat de oorspronkelijke prestatie is toegekend in een declaratie-antwoordbericht.

### Gerelateerde regels / interpretaties

- IV085

### Zoektermen

- credit declaratie
- creditprestatie
- debet credit
- terugvordering
- declaratie corrigeren
- vorigreferentienummer
- referentienummer
- debetcredit C
- declaratieantwoordbericht
