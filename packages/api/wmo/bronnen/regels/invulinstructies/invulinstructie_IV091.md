**IV091**

*Hoe moet een creditprestatie gevuld worden in een declaratiebericht?*

In de IngediendBedrag-regel van een Prestatie wordt met DebetCredit aangegeven of de indienende partij een vordering (debet) of een terugvordering (credit) doet bij de ontvanger van de declaratie.

Crediteren declaratie:
Een creditprestatie is identiek aan de oorspronkelijke debetprestatie, met uitzondering van:

- ReferentieNummer: de creditprestatie krijgt een nieuw ReferentieNummer.
- VorigReferentieNummer wordt gevuld met het ReferentieNummer van de oorspronkelijke debetprestatie.
- DebetCredit in IngediendBedrag wordt gevuld met C (Credit)
- Crediteren is alleen mogelijk na ontvangst van het declaratie-antwoordbericht waarin de te crediteren prestatie is toegekend (zie IV085).
