# WJ001: Retourcode

## Definitie 
Melding in een retourbericht. Het betreft een code die in een retourbericht het resultaat van de beoordeling van een (deel van een) ontvangen bericht weergeeft.

## Definitie  
De reden waarom een toewijzing wordt gewijzigd.

## Metadata
- **ID:** WJ001
- **Naam:** Retourcode
- **Status:** Productie
- **ELement:**  LDT_RetourCode
- **Type bestand:**: Codelijst
- **Auteur:** Zorginstituut Nederland  
- **Standaard:** iWmo 3.2  
- **Bron:** https://informatiemodel.istandaarden.nl/informatiemodel/iwmo/3.2/codelijsten/wj001/
- **AI-agent:** Wmo-agent  

## Gebruik in berichten

- WMO302
- WMO306
- WMO308
- WMO316
- WMO318
- WMO320
- WMO325
  
-----

## Codelijst (uitgebreid met berichttypen)

| Code | Omschrijving                                                        | Regel | Berichttypen                                           |
| ---- | ------------------------------------------------------------------- | ----- | ------------------------------------------------------ |
| 0001 | Bericht is afgekeurd om technische redenen.                         |       | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323         |
| 0200 | Geen opmerking over deze berichtklasse.                             |       | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323         |
| 0233 | Berichtklasse is niet beoordeeld.                                   |       | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323         |
| 0611 | Het ingediende tarief komt niet overeen met het contractuele tarief | TR418 | WMO323                                                         |
| 8001 | Declaratie is volledig toegewezen.                                  |       | WMO323                                                         |
| 8017 | Van deze credit prestatie is geen debet prestatie bekend.           | TR323 | WMO323                                                         |
| 8021 | Referentienummer prestatie is reeds aangeleverd.                    | TR314 | WMO323                                                         |
| 8187 | De prestatie hoort niet bij deze cliënt.                            | TR304 | WMO317, WMO323, WMO325                                         |
| 8214 | DeclaratiePeriode is niet correct.                                  | TR318 | WMO323                                                         |
| 8848 | Dagtekening moet gelijk zijn aan of voor de systeemdatum liggen.    | TR135 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323, WMO325 |
| 9019 | Het regiebericht kan niet gekoppeld worden aan een toewijzing.      | TR019 | WMO305, WMO307                                                 |
| 9056 | Identificatie moet uniek zijn.                                      | TR056 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323, WMO325 |
| 9063 | Geen eerder bericht ontvangen.                                      | TR063 | WMO305, WMO307                                                 |
| 9069 | Geen actueel startbericht.                                          | TR069 | WMO307                                                         |
| 9071 | Startbericht kan niet verwijderd worden.                            | TR071 | WMO305                                                         |
| 9074 | Dubbele sleutel ontvangen.                                          | TR074 | WMO305, WMO307                                                 |
| 9307 | Begindatum prestatie ongeldig.                                      | TR307 | WMO323                                                         |
| 9308 | Einddatum prestatie ongeldig.                                       | TR308 | WMO323                                                         |
| 9319 | ProductPeriode ongeldig.                                            | TR319 | WMO323                                                         |
| 9321 | Volume overschrijdt.                                                | TR321 | WMO323                                                         |
| 9322 | Som volume overschrijdt.                                            | TR322 | WMO323                                                         |
| 9326 | Levering nog niet gestopt.                                          | TR326 | WMO305                                                         |
| 9332 | Toewijzing niet uniek.                                              | TR332 | WMO301                                                         |
| 9333 | Declaratienummer niet uniek.                                        | TR333 | WMO323                                                         |
| 9338 | Prestatie niet gekoppeld.                                           | TR338 | WMO323                                                         |
| 9339 | ProductCategorie mismatch.                                          | TR339 | WMO323                                                         |
| 9340 | ProductCode mismatch.                                               | TR340 | WMO323                                                         |
| 9341 | Eenheid mismatch.                                                   | TR341 | WMO323                                                         |
| 9346 | Bedrag berekening fout.                                             | TR346 | WMO323                                                         |
| 9347 | ReferentieAanbieder niet uniek.                                     | TR347 | WMO315, WMO317                                                 |
| 9349 | VOW onvolledig.                                                     | TR349 | WMO317                                                         |
| 9350 | OngewijzigdProduct fout.                                            | TR350 | WMO317                                                         |
| 9351 | TeWijzigenProduct fout.                                             | TR351 | WMO317                                                         |
| 9355 | ReferentieAanbieder onbekend.                                       | TR355 | WMO319                                                         |
| 9357 | GewensteIngangsdatum fout.                                          | TR357 | WMO317                                                         |
| 9359 | Dubbele toewijzing.                                                 | TR359 | WMO319                                                         |
| 9360 | Dubbel antwoordbericht.                                             | TR360 | WMO319                                                         |
| 9361 | Overlap producten.                                                  | TR361 | WMO317                                                         |
| 9365 | Antwoordbericht inconsistent.                                       | TR365 | WMO319                                                         |
| 9366 | ProductReferentie ontbreekt.                                        | TR366 | WMO325                                                         |
| 9367 | Waarde mismatch.                                                    | TR367 | WMO325                                                         |
| 9369 | Budget overschreden.                                                | TR369 | WMO323                                                         |
| 9373 | Budget wijziging fout.                                              | TR373 | WMO317                                                         |
| 9374 | Verzoek onderhanden.                                                | TR374 | WMO315, WMO317                                                 |
| 9375 | Omvang fout.                                                        | TR375 | WMO317                                                         |
| 9379 | ReferentieAanbieder fout.                                           | TR379 | WMO301                                                         |
| 9384 | Declaratie op verwijderde toewijzing.                               | TR384 | WMO323                                                         |
| 9385 | Toewijzing heeft declaraties.                                       | TR385 | WMO301                                                         |
| 9387 | Begindatum ProductPeriode fout.                                     | TR387 | WMO323                                                         |
| 9388 | Einddatum ProductPeriode fout.                                      | TR388 | WMO323                                                         |
| 9389 | Debet zonder credit.                                                | TR389 | WMO323                                                         |
| 9390 | Dubbele credit.                                                     | TR390 | WMO323                                                         |
| 9411 | Omvang verplicht.                                                   | TR411 | WMO317                                                         |
| 9412 | Omvang niet toegestaan.                                             | TR412 | WMO317                                                         |
| 9413 | StopProduct conflict.                                               | TR413 | WMO307                                                         |
| 9414 | Einddatum conflict.                                                 | TR414 | WMO307                                                         |
| 9415 | StopProduct duplicaat.                                              | TR415 | WMO307                                                         |
| S300 | Gemeentecode ongeldig.                                              | TR378 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO319, WMO323, WMO325 |
| S329 | ProductCode ongeldig.                                               | TR381 | WMO301, WMO305, WMO307, WMO315, WMO317, WMO323                 |

---
