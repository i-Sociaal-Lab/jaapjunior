# WJ001 — Retourcode *(uitgebreid)*

## Definitie

Melding in een retourbericht. Het betreft een code die in een retourbericht het resultaat van de beoordeling van een (deel van een) ontvangen bericht weergeeft.

---

# Metadata

| Eigenschap | Waarde |
|---|---|
| ID | WJ001 |
| Naam | Retourcode |
| Element | `LDT_RetourCode` |
| Type | Codelijst |
| Standaard | iWmo 3.2 |
| Status | Productie |
| Bron | https://informatiemodel.istandaarden.nl/informatiemodel/iwmo/3.2/codelijsten/wj001/ |
| Auteur | Zorginstituut Nederland |

---

# Codes

## Algemene technische retourcodes

| Code | Betekenis | TR-regel | Berichttypen |
|---|---|---|---|
| 0001 | Bericht is afgekeurd om technische redenen. | — | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323 |
| 0200 | Geen opmerking over deze berichtklasse. | — | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323 |
| 0233 | Berichtklasse is niet beoordeeld. | — | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323 |
| 8848 | Dagtekening moet gelijk zijn aan of voor de systeemdatum liggen. | TR135 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323, WMO325 |
| 9056 | Identificatie moet uniek zijn. | TR056 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323, WMO325 |

---

## Validaties op gemeenten, producten en tarieven

| Code | Betekenis | TR-regel | Berichttypen |
|---|---|---|---|
| S300 | Gemeentecode ongeldig. | TR378 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323, WMO325 |
| S329 | ProductCode ongeldig. | TR381 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO323 |
| 0611 | Het ingediende tarief komt niet overeen met het contractuele tarief | TR418 | WMO323 |

---

## Retourcodes voor regie-, start- en stopberichten

| Code | Betekenis | TR-regel | Berichttypen |
|---|---|---|---|
| 9019 | Het regiebericht kan niet gekoppeld worden aan een toewijzing. | TR019 | WMO305, WMO307 |
| 9063 | Het bericht kan niet verwerkt worden omdat geen eerder bericht ontvangen is | TR063 | WMO305, WMO307 |
| 9069 | Er is geen actueel startbericht met dezelfde sleutel. | TR069 | WMO307 |
| 9071 | Het eerdere startbericht kan niet verwijderd worden omdat de zorg al beeindigd is. | TR071 | WMO305 |
| 9074 | Er is al een eerder bericht ontvangen met dezelfde sleutel. | TR074 | WMO305, WMO307 |
| 9326 | De actuele levering is nog niet gestopt met een Stopbericht. | TR326 | WMO305 |
| 9413 | StatusAanlevering is waarde 1 of 2 en RedenBeeindiging heeft waarde 20, terwijl er al een ander StopProduct met hetzelfde Bsn, ToewijzingNummer, Begindatum en RedenBeeindiging waarde 20 is. | TR413 | WMO307 |
| 9414 | Einddatum is niet >= aan Einddatum uit actuele StopProduct met gelijk Bsn, ToewijzingNummer en Begindatum. | TR414 | WMO307 |
| 9415 | Er is al een StopProduct met gelijk Bsn, ToewijzingNummer, Begindatum en RedenBeeindiging <> waarde 20 en StatusAanlevering heeft waarde 1 of 2. | TR415 | WMO307 |

---

## Retourcodes voor declaraties en prestaties

| Code | Betekenis | TR-regel | Berichttypen |
|---|---|---|---|
| 8001 | Declaratie is volledig toegewezen. | — | WMO323 |
| 8017 | Van deze credit prestatie is geen debet prestatie bekend. | TR323 | WMO323 |
| 8021 | Referentienummer prestatie is reeds aangeleverd. | TR314 | WMO323 |
| 8214 | DeclaratiePeriode is niet de kalendermaand die volgt op voorgaande DeclaratiePeriode terwijl iedere declaratieperiode zorg geleverd is. | TR318 | WMO323 |
| 9307 | Begindatum prestatie ligt niet tussen de ingangsdatum en einddatum toewijzing. | TR307 | WMO323 |
| 9308 | Einddatum prestatie ligt niet tussen de ingangsdatum en einddatum toewijzing. | TR308 | WMO323 |
| 9319 | De ProductPeriode valt niet geheel binnen een DeclaratiePeriode. | TR319 | WMO323 |
| 9321 | Het ingediende volume overschrijdt het toegewezen volume. | TR321 | WMO323 |
| 9322 | De som van de ingediende volumes overschrijdt het toegewezen volume. | TR322 | WMO323 |
| 9333 | Declaratienummer is niet uniek. | TR333 | WMO323 |
| 9338 | Niet iedere prestatie in een declaratiebericht is gerelateerd aan een toegewezen product op basis van het toewijzingnummer. | TR338 | WMO323 |
| 9339 | ProductCategorie in de prestatie is niet gelijk aan ProductCategorie in het ToegewezenProduct. | TR339 | WMO323 |
| 9340 | ProductCode in de Prestatie is niet gelijk aan ProductCode in het ToegewezenProduct. | TR340 | WMO323 |
| 9341 | Eenheid in de Prestatie past niet bij Eenheid in het ToegewezenProduct. | TR341 | WMO323 |
| 9346 | Eenheid is ongelijk is aan waarde 83 (Euro’s), maar IngediendBedrag is niet gelijk aan GeleverdVolume vermenigvuldigd met (het onafgeronde) ProductTarief. | TR346 | WMO323 |
| 9369 | Budget is meegegeven, maar de som van GeleverdVolume in alle ingediende Prestaties passen niet binnen het toegewezen Budget. | TR369 | WMO323 |
| 9384 | Declaratie op toewijzing met RedenWijziging “13” (Verwijderd). | TR384 | WMO323 |
| 9387 | Begindatum van de ProductPeriode is niet eerste dag van de kalendermaand waarop ProductPeriode betrekking heeft en Ingangsdatum van de toewijzing ligt niet later in deze betreffende maand. | TR387 | WMO323 |
| 9388 | Einddatum van de ProductPeriode is niet laatste dag van de kalendermaand waarop ProductPeriode betrekking heeft en Einddatum van de toewijzing ligt niet eerder in deze betreffende maand. | TR388 | WMO323 |
| 9389 | Deze prestatie heeft een debetprestatie zonder bijbehorende creditprestatie. | TR389 | WMO323 |
| 9390 | Er is al een Prestatie met gelijk ProductReferentie met waarde Credit. | TR390 | WMO323 |

---

## Retourcodes voor toewijzingen en wijzigingen

| Code | Betekenis | TR-regel | Berichttypen |
|---|---|---|---|
| 8187 | De prestatie hoort niet bij deze cliënt. | TR304 | WMO317, WMO323, WMO325 |
| 9332 | Toewijzing heeft geen uniek nummer binnen wettelijk domein. | TR332 | WMO301 |
| 9347 | ReferentieAanbieder is niet uniek voor de aanbieder binnen het wettelijk domein. | TR347 | WMO315, WMO317 |
| 9349 | Het VOW bericht bevat niet alle actuele toegewezen producten van de cliënt, hetzij in OngewijzigdProduct, hetzij in TeWijzigenProduct. | TR349 | WMO317 |
| 9350 | OngewijzigdProduct is niet gerelateerd aan een actueel toegewezen product op basis van het toewijzingnummer. | TR350 | WMO317 |
| 9351 | TeWijzigenProduct is niet gerelateerd aan een actuele toewijzing op basis van ToewijzingNummer. | TR351 | WMO317 |
| 9357 | GewensteIngangsdatum is kleiner dan of gelijk aan de dagtekening, maar niet gelijk aan de ingangsdatum van het originele ToegewezenProduct. | TR357 | WMO317 |
| 9359 | Er is al een toewijzing gestuurd met deze ReferentieAanbieder. | TR359 | WMO319 |
| 9360 | Er is al een antwoordbericht met deze ReferentieAanbieder, terwijl antwoordbericht in VerzoekAntwoord waarde 2 (aanvraag in onderzoek) heeft. | TR360 | WMO319 |
| 9361 | Het product komt vaker voor met overlappende zorgperiodes. | TR361 | WMO317 |
| 9365 | Er is al een antwoordbericht met dezelfde ReferentieAanbieder waar VerzoekAntwoord niet de waarde ‘Aanvraag in onderzoek’ heeft. | TR365 | WMO319 |
| 9373 | Budget is gewijzigd, maar GewensteIngangsdatum is niet gelijk aan die in de actuele toewijzing. | TR373 | WMO317 |
| 9374 | Er is al een verzoek onderhanden. | TR374 | WMO315, WMO317 |
| 9375 | Omvang is gevuld, terwijl Product in toewijzing met ToewijzingNummer leeg is en Einddatum groter dan 31-12-2020 of leeg is. | TR375 | WMO317 |
| 9379 | ReferentieAanbieder refereert niet naar een verzoek om toewijzing of verzoek om wijziging, is onterecht gevuld. | TR379 | WMO301 |
| 9385 | Toewijzing heeft goedgekeurde declaratieregels. | TR385 | WMO301 |
| 9411 | Omvang is leeg, terwijl Code in Product bij de toewijzing met ToewijzingNummer gevuld is. | TR411 | WMO317 |
| 9412 | Omvang is niet leeg, terwijl Code in Product bij de toewijzing met ToewijzingNummer leeg is en einddatum groter dan 31-12-2020 of leeg is. | TR412 | WMO317 |

---

## Retourcodes voor declaratie-antwoorden

| Code | Betekenis | TR-regel | Berichttypen |
|---|---|---|---|
| 9366 | ProductReferentie komt niet voor in een Declaratiebericht. | TR366 | WMO325 |
| 9367 | De waarde komt niet overeen met de waarde uit heenbericht met gelijke ProductReferentie. | TR367 | WMO325 |

---

# Toelichting

De kolom **Berichttypen** is afgeleid uit de technische regels (TR-regels). Hierdoor is direct zichtbaar op welke berichttypen een retourcode van toepassing is.

---

# AI-context

Dit betreft een codelijst (enumeratie) voor `LDT_RetourCode` binnen iWmo 3.2.

De retourcode beschrijft het resultaat van de technische of inhoudelijke beoordeling van een ontvangen bericht of berichtonderdeel.

De TR-regel verwijst naar de validatieregel waarop de retourmelding gebaseerd is.
