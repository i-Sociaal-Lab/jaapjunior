# JZ002 - Reden wijziging toewijzing

## Definitie

De reden waarom een toewijzing wordt gewijzigd.

---

## Metadata

| Eigenschap   | Waarde                                                                              |
| ------------ | ----------------------------------------------------------------------------------- |
| ID           | JZ002                                                                               |
| Naam         | Reden wijziging toewijzing                                                          |
| Status       | Productie                                                                           |
| Element      | LDT_RedenWijziging                                                                  |
| Type bestand | Codelijst                                                                           |
| Auteur       | Zorginstituut Nederland                                                             |
| Standaard    | iJw 3.2                                                                             |
| Bron         | (https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/codelijsten/jz002/ |
| AI-agent     | Jw-agent                                                                            |

---

## Gebruikt in berichten

- JW301
- JW302

---

## Beschrijving

Deze tabel toont de mogelijke redenen voor beëindiging van een jeugdhulptraject, inclusief aanleiding (reden wijziging toewijzing en initiatief aanbieder).

## Toelichting
In Release 3.1 (april 2022) is er gekozen voor een eenduidige werkwijze voor het corrigeren van invoerfouten.
De redenen voor het wijzigen van een toewijzing zijn toen gewijzigd. Eén code (01) is komen te vervallen en door twee nieuwe codes (13 en 14) vervangen. Zo is er een eenduidige werkwijze en duidelijkheid over de status van de toewijzingen waarvan de ingangs- en einddatum gelijk zijn aan elkaar. 
De volgende wijzigingen zijn toen doorgevoerd en waren van invloed op de migratie van Release 3.0 naar 3.1:

In de codelijst ‘Reden wijziging toewijzing’ is reden 01 ‘Administratieve correctie’ komen te vervallen.
Daarvoor in de plaats zijn de redenen 13 ‘Verwijderd’ en 14 ‘Administratieve correctie’ opgenomen.
Reden 14 lijkt hetzelfde als reden 01. Echter is reden 01 in de releases tot en met iWmo/iJw 3.0 voor meerdere doeleinden gebruikt. Om de historie achter ons te laten, is gekozen voor een nieuwe code (Reden 14).
Een nieuwe regel stelt dat een toewijzing alleen verwijderd mag worden indien dit niet leidt tot verlies van rechtmatigheid van geleverde en/of gedeclareerde zorg.
Een nieuwe regel stelt dat een toewijzing enkel de reden wijziging 13 ‘Verwijderd’ mag bevatten als de einddatum gelijk is aan de ingangsdatum.
Nieuwe regels stellen dat er niet gedeclareerd kan worden op verwijderde toewijzingen (met reden wijziging 13 ‘Verwijderd’).

---

# Codes

| Code | Omschrijving                                 | Toelichting                                                                                                                                                                                                                                                                                                                                                                                                            | Reden beëindiging |
| ---- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 01   | Administratieve correctie (vervallen)        | Niet gebruiken                                                                                                                                                                                                                                                                                                                                                                                                         | nvt               |
| 02   | Cliënt overleden                             | De toewijzing is gestopt, omdat de client is overleden. Over het algemeen zal dan worden gevuld einddatum toewijzing = overlijdensdatum client.                                                                                                                                                                                                                                                                        | 02                |
| 03   | Contractwijziging                            | Gemeente maakt een nieuwe contractafspraak met aanbieder, waardoor het nodig is om een andere toewijzing te sturen met bijvoorbeeld andere productcodes. NB niet elke contractwijziging zal leiden tot een nieuwe toewijzing. Indien een contract wordt opgezegd en de toewijzingen worden geëindigd, wordt ook deze code gebruikt.                                                                                    | 36                |
| 04   | Herbeoordeling verlenging toewijzing         | Als gevolg van een herbeoordeling door de gemeente kan een toewijzing verlengd worden.                                                                                                                                                                                                                                                                                                                                 | nvt               |
| 05   | Herbeoordeling verkorting toewijzing         | In verschillende situaties zal de huidige toewijzing ingetrokken moeten worden. Client moet ander product toegewezen krijgen. Client moet korter zorg krijgen. Client moet andere omvang krijgen, bijvoorbeeld meer/minder uren per week, tenzij het een toewijzing in budget of totaal per toewijzing periode betreft. De beoordeling vindt plaats door gemeente op basis van client contact.                         | 36                |
| 06   | Uitstroom naar ander domein                  | Een toewijzing wordt ingetrokken omdat een cliënt zorg gaat ontvangen vanuit de Wmo, Zvw of Wlz.                                                                                                                                                                                                                                                                                                                       | 39                |
| 07   | Verhuizing naar een andere gemeente          | De gemeente zal een afgegeven toewijzing intrekken bij verhuizing van een client naar een andere gemeente. Als einddatum wordt meestal genomen de inschrijfdatum van de client in de nieuwe gemeente -1 dag. In de Wmo geldt de eigen verantwoordelijkheid van de inwoner. Een overdracht is niet nodig. De inwoner moet zich melden bij de Wmo van zijn nieuwe gemeente en daar wordt gekeken wat men daar indiceert. | 35                |
| 08   | Wijziging leveringsvorm                      | Toewijzing wordt beeindigd, omdat client eerst zorg in natura (ZIN) kreeg en overstapt naar zorg via pgb.                                                                                                                                                                                                                                                                                                              | 36                |
| 09   | Overstap naar andere aanbieder               | Cliënt gaat naar een andere aanbieder, dus de toewijzing bij de huidige aanbieder moet beëindigd worden.                                                                                                                                                                                                                                                                                                               | 38                |
| 10   | Overgang naar nieuwe bekostigingssystematiek | De toewijzing is ingetrokken, omdat de client is overgegaan naar een andere regeling/bekostiging. Bijvoorbeeld een inspanningsgerichte toewijzing, wordt vervangen door een outputgerichte toewijzing. Deze code is toegevoegd vanwege de beëindiging van DBC-systematiek op 31 december 2017.                                                                                                                         | 36                |
| 11   | Gemeentelijke herindeling                    | Volgens protocol gemeentelijke herindeling, de bestaande toewijzing (oude gemeente) wordt beëindigd, een nieuwe toewijzing wordt gestart met de nieuwe gemeentecode. De oude toewijzing krijgt reden wijziging toewijzing 11, de nieuwe toewijzing krijgt geen reden wijziging toewijzing.                                                                                                                             | 36                |
| 12   | Geïnitieerd door de aanbieder                | Indien een toewijzing wijzigt als gevolg van een verzoek om wijziging, of een verzoek via een ander kanaal, kan dit door de gemeente worden aangegeven middels deze code. Het is dan voor de aanbieder duidelijk op basis waarvan de wijziging is doorgevoerd.                                                                                                                                                         | 37                |
| 13   | Verwijderd                                   | Als een toewijzing ten onrechte is verstuurd en de gemeente dit ongedaan wil maken. Hierbij wordt de einddatum gelijk gesteld aan de ingangsdatum. De toewijzing moet als niet verzonden beschouwd worden.                                                                                                                                                                                                             | nvt               |
| 14   | Administratieve correctie                    | Als de gemeente een (invoer)fout heeft gemaakt die hersteld moet worden. De velden die gewijzigd mogen worden, zijn beschreven in OP033X1. Ook indien een aanbieder een definitief stopbericht stuurt en de gemeente beslist om de toewijzing in te trekken, wordt deze code gebruikt.                                                                                                                                 | nvt               |
