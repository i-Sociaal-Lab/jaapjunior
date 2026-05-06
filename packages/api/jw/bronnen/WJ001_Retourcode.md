# WJ001: Retourcode (uitgebreid)

## Definitie

Melding in een retourbericht. Het betreft een code die in een retourbericht het resultaat van de beoordeling van een (deel van een) ontvangen bericht weergeeft.

---

## Metadata

* **ID:** WJ001
* **Naam:** Retourcode
* **Status:** Productie
* **Element:** LDT_RetourCode
* **Type bestand:** Codelijst
* **Standaard:** iJw 3.2

---

## 📊 Codelijst

| Code | Omschrijving                                                        | Regel | Berichttypen                                           |
| ---- | ------------------------------------------------------------------- | ----- | ------------------------------------------------------ |
| 0001 | Bericht is afgekeurd om technische redenen.                         |       | JW301, JW305, JW307, JW315, JW317, JW319, JW323        |
| 0200 | Geen opmerking over deze berichtklasse.                             |       | JW301, JW305, JW307, JW315, JW317, JW319, JW323        |
| 0233 | Berichtklasse is niet beoordeeld.                                   |       | JW301, JW305, JW307, JW315, JW317, JW319, JW323        |
| 0611 | Het ingediende tarief komt niet overeen met het contractuele tarief | TR418 | JW323                                                  |
| 8001 | Declaratie is volledig toegewezen.                                  |       | JW323                                                  |
| 8017 | Van deze credit prestatie is geen debet prestatie bekend.           | TR323 | JW323                                                  |
| 8021 | Referentienummer prestatie is reeds aangeleverd.                    | TR314 | JW323                                                  |
| 8187 | De prestatie hoort niet bij deze cliënt.                            | TR304 | JW317, JW323, JW325                                    |
| 8214 | DeclaratiePeriode is niet correct.                                  | TR318 | JW323                                                  |
| 8848 | Dagtekening moet gelijk zijn aan of voor de systeemdatum liggen.    | TR135 | JW301, JW305, JW307, JW315, JW317, JW319, JW323, JW325 |
| 9019 | Het regiebericht kan niet gekoppeld worden aan een toewijzing.      | TR019 | JW305, JW307                                           |
| 9056 | Identificatie moet uniek zijn.                                      | TR056 | JW301, JW305, JW307, JW315, JW317, JW319, JW323, JW325 |
| 9063 | Geen eerder bericht ontvangen.                                      | TR063 | JW305, JW307                                           |
| 9069 | Geen actueel startbericht.                                          | TR069 | JW307                                                  |
| 9071 | Startbericht kan niet verwijderd worden.                            | TR071 | JW305                                                  |
| 9074 | Dubbele sleutel ontvangen.                                          | TR074 | JW305, JW307                                           |
| 9307 | Begindatum prestatie ongeldig.                                      | TR307 | JW323                                                  |
| 9308 | Einddatum prestatie ongeldig.                                       | TR308 | JW323                                                  |
| 9319 | ProductPeriode ongeldig.                                            | TR319 | JW323                                                  |
| 9321 | Volume overschrijdt.                                                | TR321 | JW323                                                  |
| 9322 | Som volume overschrijdt.                                            | TR322 | JW323                                                  |
| 9326 | Levering nog niet gestopt.                                          | TR326 | JW305                                                  |
| 9332 | Toewijzing niet uniek.                                              | TR332 | JW301                                                  |
| 9333 | Declaratienummer niet uniek.                                        | TR333 | JW323                                                  |
| 9338 | Prestatie niet gekoppeld.                                           | TR338 | JW323                                                  |
| 9339 | ProductCategorie mismatch.                                          | TR339 | JW323                                                  |
| 9340 | ProductCode mismatch.                                               | TR340 | JW323                                                  |
| 9341 | Eenheid mismatch.                                                   | TR341 | JW323                                                  |
| 9346 | Bedrag berekening fout.                                             | TR346 | JW323                                                  |
| 9347 | ReferentieAanbieder niet uniek.                                     | TR347 | JW315, JW317                                           |
| 9349 | VOW onvolledig.                                                     | TR349 | JW317                                                  |
| 9350 | OngewijzigdProduct fout.                                            | TR350 | JW317                                                  |
| 9351 | TeWijzigenProduct fout.                                             | TR351 | JW317                                                  |
| 9355 | ReferentieAanbieder onbekend.                                       | TR355 | JW319                                                  |
| 9357 | GewensteIngangsdatum fout.                                          | TR357 | JW317                                                  |
| 9359 | Dubbele toewijzing.                                                 | TR359 | JW319                                                  |
| 9360 | Dubbel antwoordbericht.                                             | TR360 | JW319                                                  |
| 9361 | Overlap producten.                                                  | TR361 | JW317                                                  |
| 9365 | Antwoordbericht inconsistent.                                       | TR365 | JW319                                                  |
| 9366 | ProductReferentie ontbreekt.                                        | TR366 | JW325                                                  |
| 9367 | Waarde mismatch.                                                    | TR367 | JW325                                                  |
| 9369 | Budget overschreden.                                                | TR369 | JW323                                                  |
| 9373 | Budget wijziging fout.                                              | TR373 | JW317                                                  |
| 9374 | Verzoek onderhanden.                                                | TR374 | JW315, JW317                                           |
| 9375 | Omvang fout.                                                        | TR375 | JW317                                                  |
| 9379 | ReferentieAanbieder fout.                                           | TR379 | JW301                                                  |
| 9384 | Declaratie op verwijderde toewijzing.                               | TR384 | JW323                                                  |
| 9385 | Toewijzing heeft declaraties.                                       | TR385 | JW301                                                  |
| 9387 | Begindatum ProductPeriode fout.                                     | TR387 | JW323                                                  |
| 9388 | Einddatum ProductPeriode fout.                                      | TR388 | JW323                                                  |
| 9389 | Debet zonder credit.                                                | TR389 | JW323                                                  |
| 9390 | Dubbele credit.                                                     | TR390 | JW323                                                  |
| 9411 | Omvang verplicht.                                                   | TR411 | JW317                                                  |
| 9412 | Omvang niet toegestaan.                                             | TR412 | JW317                                                  |
| 9413 | StopProduct conflict.                                               | TR413 | JW307                                                  |
| 9414 | Einddatum conflict.                                                 | TR414 | JW307                                                  |
| 9415 | StopProduct duplicaat.                                              | TR415 | JW307                                                  |
| S300 | Gemeentecode ongeldig.                                              | TR378 | JW301, JW305, JW307, JW315, JW317, JW319, JW323, JW325 |
| S329 | ProductCode ongeldig.                                               | TR381 | JW301, JW305, JW307, JW315, JW317, JW323               |

---

## Toelichting

De kolom *Berichttypen* is afgeleid uit de technische regels (TR-regels). Hierdoor is direct zichtbaar op welke berichttypen een retourcode van toepassing is.
