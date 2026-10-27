---
domein:
- JW
- WMO
onderwerp: StUF-berichtenverkeer
titel: StUF Bv03-bericht -- technische ontvangstbevestiging
toepasbaarheid: Algemeen; alleen van toepassing op koppelingen die StUF
  Bv03 gebruiken
type: toelichting
zoektermen:
- Bv03
- StUF Bv03
- ontvangstbevestiging
- technische bevestiging
- crossRefNummer
- referentienummer
---

# StUF Bv03-bericht -- technische ontvangstbevestiging

## Wat is een Bv03-bericht?

Een **StUF Bv03-bericht** is een technische ontvangstbevestiging die bij
daarvoor ingerichte asynchrone StUF-berichten kan worden verstuurd. De
ontvanger geeft hiermee terugkoppeling over de technische ontvangst en
de beoordeling of het ontvangen bericht op basis van de stuurgegevens
verwerkbaar wordt geacht.

Een Bv03-bericht is geen inhoudelijke beslissing over de aanvraag of de
zorg die in het oorspronkelijke bericht wordt beschreven.

## Wanneer wordt een Bv03-bericht verstuurd?

Een Bv03-bericht wordt verstuurd wanneer de gebruikte StUF-koppeling en
de bijbehorende afspraken voorzien in een dergelijke technische
bevestiging. De ontvanger stuurt de bevestiging nadat het
oorspronkelijke bericht technisch is ontvangen en beoordeeld op basis
van de stuurgegevens.

**Let op:** ga er niet zonder meer van uit dat bij ieder bericht in het
JW- of WMO-berichtenverkeer een Bv03-bericht wordt verstuurd. Dit hangt
af van het gebruikte koppelvlak, de berichtafspraken en de inrichting
van de betrokken systemen. Een Bv03 is alleen van toepassing waar StUF
Bv03 wordt gebruikt.

## Wat betekent een Bv03-bericht?

Een Bv03 geeft een technische bevestiging. Het betekent niet automatisch
dat:

-   de inhoud van het oorspronkelijke bericht inhoudelijk is
    goedgekeurd;
-   de gevraagde ondersteuning of zorg is toegekend;
-   de verdere verwerking in het ontvangende systeem succesvol is
    afgerond.

Eventuele inhoudelijke of functionele terugkoppeling verloopt via de
daarvoor afgesproken berichten en processen.

## Bv03 en Fo03

Bij StUF-berichtenverkeer kan, afhankelijk van de gebruikte afspraken,
onderscheid worden gemaakt tussen:

-   **Bv03:** de ontvanger bevestigt dat het bericht technisch is
    ontvangen en op basis van de stuurgegevens verwerkbaar wordt geacht.
-   **Fo03:** de ontvanger meldt een technische fout waardoor het
    bericht niet als verwerkbaar wordt geaccepteerd.

Raadpleeg voor de precieze betekenis en toepassing altijd de
specificatie van het gebruikte StUF-koppelvlak.

## Referentienummer en crossreferentienummer

In een Bv03-bericht staan onder andere de volgende velden:

-   **`referentienummer`**: het unieke referentienummer van het
    Bv03-bericht zelf.
-   **`crossRefNummer`**: het referentienummer van het oorspronkelijke
    bericht waarop de bevestiging betrekking heeft.

Met het crossreferentienummer kan de verzender de technische bevestiging
koppelen aan het oorspronkelijke bericht.

## Voorbeeld uit een Bv03-bericht

``` xml
<StUF:referentienummer>31527698-f436-4a53-a9e4-300dbed91077</StUF:referentienummer>
<StUF:crossRefNummer>6f85704f-6f00-4d0b-b66e-d8bdb0d2c901</StUF:crossRefNummer>
```

In dit voorbeeld is het referentienummer het nummer van de bevestiging
en verwijst het crossreferentienummer naar het oorspronkelijke bericht.

## Toepassing binnen JW en WMO

Deze toelichting is generiek voor het StUF-berichtenverkeer en kan als
achtergrondinformatie worden gebruikt bij vragen over zowel JW als WMO.
De uitleg betekent **niet** dat Bv03 standaard onderdeel is van alle
iJw- of iWmo-berichtstromen. Controleer voor een concrete situatie welke
berichtstandaard, koppeling en technische afspraken van toepassing zijn.
