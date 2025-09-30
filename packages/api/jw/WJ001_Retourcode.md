# WJ001: Retourcode

**Definitie:**  
Melding in een retourbericht. Het betreft een code die in een retourbericht het resultaat van de beoordeling van een (deel van een) ontvangen bericht weergeeft.

- Zoek de regel die hoort bij de retourcode op in 'TR-CD-CS regels JW 3.2' en toon de tekst van de regel in het antwoord.
---

## Codelijst

| Code | Omschrijving | Regel |
|------|--------------|-------|
| 0001 | Bericht is afgekeurd om technische redenen. | |
| 0200 | Geen opmerking over deze berichtklasse. | |
| 0233 | Berichtklasse is niet beoordeeld. | |
| 0611 | Het ingediende tarief komt niet overeen met het contractuele tarief | TR418 |
| 8001 | Declaratie is volledig toegewezen. | |
| 8017 | Van deze credit prestatie is geen debet prestatie bekend. | TR323 |
| 8021 | Referentienummer prestatie is reeds aangeleverd. | TR314 |
| 8187 | De prestatie hoort niet bij deze cliënt. | TR304 |
| 8214 | DeclaratiePeriode is niet de kalendermaand die volgt op voorgaande DeclaratiePeriode terwijl iedere declaratieperiode zorg geleverd is. | TR318 |
| 8848 | Dagtekening moet gelijk zijn aan of voor de systeemdatum liggen. | TR135 |
| 9019 | Het regiebericht kan niet gekoppeld worden aan een toewijzing. | TR019 |
| 9056 | Identificatie moet per berichtsoort uniek zijn voor de verzendende partij. | TR056 |
| 9063 | Het bericht kan niet verwerkt worden omdat geen eerder bericht ontvangen is. | TR063 |
| 9069 | Er is geen actueel startbericht met dezelfde sleutel. | TR382 |
| 9071 | Het eerdere startbericht kan niet verwijderd worden omdat de zorg al beëindigd is. | TR071 |
| 9074 | Er is al een eerder bericht ontvangen met dezelfde sleutel. | TR074 |
| 9307 | Begindatum prestatie ligt niet tussen de ingangsdatum en einddatum toewijzing | TR307 |
| 9308 | Einddatum prestatie ligt niet tussen de ingangsdatum en einddatum toewijzing | TR308 |
| 9319 | De ProductPeriode valt niet geheel binnen een DeclaratiePeriode. | TR319 |
| 9321 | Het ingediende volume overschrijdt het toegewezen volume. | TR321 |
| 9322 | De som van de ingediende volumes overschrijdt het toegewezen volume. | TR322 |
| 9326 | De actuele levering is nog niet gestopt met een Stopbericht. | TR326 |
| 9332 | Toewijzing heeft geen uniek nummer binnen wettelijk domein. | TR332 |
| 9333 | Declaratienummer is niet uniek. | TR333 |
| 9338 | Niet iedere prestatie in een declaratiebericht is gerelateerd aan een toegewezen product op basis van het toewijzingsnummer. | TR338 |
| 9339 | ProductCategorie in de prestatie is niet gelijk aan ProductCategorie in het ToegewezenProduct. | TR339 |
| 9340 | ProductCode in de Prestatie is niet gelijk aan ProductCode in het ToegewezenProduct. | TR340 |
| 9341 | Eenheid in de Prestatie past niet bij Eenheid in het ToegewezenProduct. | TR341 |
| 9346 | Eenheid is ongelijk aan waarde 83 (Euro's), maar IngediendBedrag is niet gelijk aan GeleverdVolume × ProductTarief. | TR346 |
| 9347 | ReferentieAanbieder is niet uniek voor de aanbieder binnen het wettelijk domein. | TR347 |
| 9349 | Het VOW-bericht bevat niet alle actuele toegewezen producten van de cliënt. | TR349 |
| 9350 | OngewijzigdProduct is niet gerelateerd aan een actueel toegewezen product. | TR350 |
| 9351 | TeWijzigenProduct is niet gerelateerd aan een actuele toewijzing. | TR351 |
| 9355 | ReferentieAanbieder in het antwoordbericht komt niet voor in een eerder verzoek om toewijzing of wijziging. | TR355 |
| 9357 | GewensteIngangsdatum is kleiner dan of gelijk aan de dagtekening, maar niet gelijk aan de ingangsdatum van het originele ToegewezenProduct. | TR357 |
| 9359 | Er is al een toewijzing gestuurd met deze ReferentieAanbieder. | TR359 |
| 9360 | Er is al een antwoordbericht met deze ReferentieAanbieder, terwijl het antwoordbericht "aanvraag in onderzoek" heeft. | TR360 |
| 9361 | Het product komt vaker voor met overlappende zorgperiodes. | TR361 |
| 9365 | Er is al een antwoordbericht met dezelfde ReferentieAanbieder waar VerzoekAntwoord niet "aanvraag in onderzoek" is. | TR365 |
| 9366 | ProductReferentie komt niet voor in een Declaratiebericht. | TR365 |
| 9367 | De waarde komt niet overeen met de waarde uit het heenbericht met gelijke ProductReferentie. | TR367 |
| 9369 | Budget is meegegeven, maar de geleverde volumes passen niet binnen het toegewezen budget. | TR369 |
| 9373 | Budget is gewijzigd, maar GewensteIngangsdatum is niet gelijk aan die in de actuele toewijzing. | TR373 |
| 9374 | Er is al een verzoek onderhanden. | TR374 |
| 9375 | Omvang is gevuld terwijl Product in toewijzing leeg is en einddatum > 31-12-2020 of leeg. | TR375 |
| 9379 | ReferentieAanbieder refereert niet naar een verzoek om toewijzing of wijziging, onterecht gevuld. | TR379 |
| 9384 | Declaratie op toewijzing met RedenWijziging "13" (Verwijderd). | TR384 |
| 9385 | Toewijzing heeft goedgekeurde declaratieregels. | TR385 |
| 9387 | Begindatum van de ProductPeriode is niet eerste dag van de kalendermaand en ingangsdatum toewijzing ligt niet later in die maand. | TR387 |
| 9388 | Einddatum van de ProductPeriode is niet laatste dag van de kalendermaand en einddatum toewijzing ligt niet eerder in die maand. | TR388 |
| 9389 | Deze prestatie heeft een debetprestatie zonder bijbehorende creditprestatie. | TR389 |
| 9390 | Er is al een Prestatie met gelijk ProductReferentie met waarde Credit. | TR390 |
| 9411 | Omvang is leeg, terwijl Code in Product bij de toewijzing gevuld is. | TR411 |
| 9412 | Omvang is niet leeg, terwijl Code in Product bij de toewijzing leeg is en einddatum > 31-12-2020 of leeg. | TR412 |
| 9413 | StatusAanlevering = 1 of 2 en RedenBeeindiging = 20, terwijl er al een ander StopProduct met dezelfde sleutel is. | TR413 |
| 9414 | Einddatum is niet ≥ aan Einddatum uit actueel StopProduct met dezelfde sleutel. | TR414 |
| 9415 | Er is al een StopProduct met dezelfde sleutel en RedenBeeindiging ≠ 20 terwijl StatusAanlevering = 1 of 2. | TR415 |
| S300 | Gemeentecode komt niet voor in de lijst van CBS. | TR378 |
| S329 | ProductCode hoort niet bij de ProductCategorie. | TR381 |
