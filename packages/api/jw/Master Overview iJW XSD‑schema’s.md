# iJW‑berichten XSD‑schema’s (14 berichten)

Versie: 1.0
Status: Productie
Auteur: Ketenbureau i-Sociaal Domein
Toelichting: Gebaseerd op alle iJw XSD schema’s zoals gepubliceerd door het Zorginstituut Nederland
Bron-link: https://www.istandaarden.nl/ijw/releases/release-ijw-3.2
Publicatiedatum: 29 september 2022
Type document: Brondocument Jw-agent

# iJW XSD – samenvattingen per schema

## Inleiding & AI‑interpretatiegids

Dit document bevat **samenvattingen van 14 iJW XSD‑schema’s van de iStandaarden**.

Het is bedoeld om Large‑Language‑Model‑agenten snel toegang te geven tot de *semantische* en *structurele* inhoud van elk schema, zonder de volledige XSD’s in één prompt te hoeven laden.
A = 0..1

### Structuur van elke samenvatting

1. **Schema‑metadata**
    - `targetNamespace`, `version`, `elementFormDefault`, `attributeFormDefault`
    - Eventuele `import`/`include` verwijzingen
2. **Globale elementen**
    - Alle root‑elementen met hun typen
3. **ComplexTypes**
    - Zakelijke *beschrijving* (tekst uit `xs:documentation`)
    - **Tabel ‘Child‑elementen’**
        - Kolommen: `Name`, `Type`, `Card.` (= [`minOccurs..maxOccurs`])
        - Na de tabel staan – indien aanwezig – de *omschrijving per child‑element*
    - **Attributen‑sectie** (optioneel)

### Richtlijnen voor de AI‑agent

- Gebruik de tabellen om snel de structuur en cardinaliteiten van elk complexType te achterhalen.
- De omschrijvingen onder de tabellen bieden functionele betekenis; neem ze mee in beantwoording en mapping‑taken.
- Raadpleeg de rubriek *Schema‑metadata* om de juiste `targetNamespace` en versie te selecteren.
- Voor formele details zoals enumeraties, pattern‑restricties of `key/keyref` verwijzingen: **lees on‑demand het originele XSD‑bestand**.
- De XSD is de *enige bindende bron* voor technische validatie; de tabellen zijn informatief.

### Best‑practice promptflow (voorbeeld)

> Stap 1 – Retrieval: haal de relevante samenvatting(en) op basis van vraagcontext.
> 
> 
> *Stap 2 – Parse:* lees tabel om gewenste elementen, attributen en cardinaliteiten te vinden.
> 
> *Stap 3 – Controleer:* indien een patroon/enum nodig is, laad het betreffende XSD‑fragment.
> 
> *Stap 4 – Formuleer antwoord* of genereer mapping/validatie‑artefact.
> 

---

# Samenvatting JW301.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw301/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw301:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor de toewijzing van Jeugdhulp aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw301:Header | 1..1 |
| Client | jw301:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_Gemeente | 1..1 |
| Ontvanger | ijw:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **Ontvanger**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. min| Card. max|
| --- | --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1|1|
| Geboortedatum | ijw:CDT_Geboortedatum |1|1|
| Geslacht | ijw:LDT_Geslacht | 1|1|
| Naam | ijw:CDT_VolledigeNaam | 1|1|
| Communicatie | ijw:CDT_Communicatie |0|1|
| JuridischeStatus | ijw:LDT_JuridischeStatus |0|1|
| WettelijkeVertegenwoordiging | ijw:LDT_WettelijkeVertegenwoordiging |0|1|
| Commentaar | ijw:LDT_Commentaar |0|1|
| Relaties | jw301:Relaties |0|1|
| Contactgegevens | jw301:Contactgegevens |1|1|
| ToegewezenProducten | jw301:ToegewezenProducten |1|1|

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: Volledige naam van een natuurlijk persoon, aangeduid als Geslachtsnaam, eventueel Partnernaam, Voornamen en/of Voorletters en NaamGebruik.
* **Communicatie**: Aanduiding over bijzondere vorm van communicatie die gebruikt dient te worden.
* **JuridischeStatus**: Juridische situatie die voor de client van toepassing is op het moment van indicatiestelling.
* **WettelijkeVertegenwoordiging**: Wettelijke vertegenwoordiging die voor de client van toepassing is op het moment van beoordeling.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

### Relaties

| Child-element | Type | Card. |
| --- | --- | --- |
| Relatie | jw301:Relatie | 1..unbounded |

### Relatie

*Beschrijving*: Persoonsgegevens van de relatie van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Nummer | ijw:LDT_Persoonsid | 1..1 |
| Volgorde | ijw:LDT_RelatieVolgorde | 0..1 |
| Soort | ijw:LDT_SoortRelatie | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 0..1 |
| Geslacht | ijw:LDT_Geslacht | 0..1 |
| Naam | ijw:CDT_VolledigeNaam | 1..1 |
| Contact | jw301:Contact | 1..1 |

**Omschrijving child-elementen**
* **Nummer**: Identificerend nummer van de relatie van een client.
* **Volgorde**: Aanduiding van de prioriteit van de contactpersoon.
* **Soort**: De soort relatie die een persoon ten opzichte van de client heeft.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: Volledige naam van een natuurlijk persoon, aangeduid als Geslachtsnaam, eventueel Partnernaam, Voornamen en/of Voorletters en NaamGebruik.

### Contact

*Beschrijving*: Gegevens voor de aanduiding van het adres van de client of relatie.

| Child-element | Type | Card. |
| --- | --- | --- |
| Soort | ijw:LDT_AdresSoort | 1..1 |
| Adres | ijw:CDT_Adres | 0..1 |
| Organisatie | ijw:LDT_Organisatienaam | 0..1 |
| Telefoon | ijw:CDT_Telefoonnummers | 0..1 |
| Emailadres | ijw:LDT_Emailadres | 0..1 |
| Periode | ijw:CDT_OpenPeriode | 0..1 |

**Omschrijving child-elementen**
* **Soort**: Nadere typering van het adres.
* **Adres**: Adres van de client of relatie van de client.
* **Organisatie**: De naam van een organisatie waar de client of relatie van de client verblijft.
* **Telefoon**: De telefoonnummers waarop de client of relatie van de client te bereiken is.
* **Emailadres**: Het e-mailadres van de client of relatie van de client.
* **Periode**: Begindatum en/of een einddatum van het verblijf van de client of relatie van de client op een tijdelijk adres.

### Contactgegevens

| Child-element | Type | Card. |
| --- | --- | --- |
| Contact | jw301:Contact | 1..unbounded |

### ToegewezenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| ToegewezenProduct | jw301:ToegewezenProduct | 1..unbounded |

### ToegewezenProduct

*Beschrijving*: Gegevens over een product dat de gemeente toewijst aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| ReferentieAanbieder | ijw:LDT_Referentie | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| Toewijzingsdatum | ijw:LDT_Datum | 1..1 |
| Toewijzingstijd | ijw:LDT_Tijd | 1..1 |
| Ingangsdatum | ijw:LDT_Datum | 1..1 |
| Einddatum | ijw:LDT_Datum | 0..1 |
| RedenWijziging | ijw:LDT_RedenWijziging | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |
| Commentaar | ijw:LDT_Commentaar | 0..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **Toewijzingsdatum**: De datum waarop de gemeente de toewijzing van de zorg aan de zorgaanbieder definitief heeft vastgesteld.
* **Toewijzingstijd**: Het tijdstip waarop de gemeente de toewijzing van de zorg aan de zorgaanbieder definitief heeft vastgesteld.
* **Ingangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden.
* **Einddatum**: De datum waarop de toegewezen product voor de laatste keer geleverd dient te worden.
* **RedenWijziging**: De reden waarom een toewijzing wordt gewijzigd.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toegewezen budget
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

---

# Samenvatting JW302.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw302/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw302:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor de toewijzing van Jeugdhulp aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw302:Header | 1..1 |
| Client | jw302:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_Gemeente | 1..1 |
| Ontvanger | ijw:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | ijw:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | ijw:LDT_Datum | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieRetour | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw302:RetourCodes | 0..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **Ontvanger**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **IdentificatieRetour**: Naam of nummer ter identificatie van een retourbericht.
* **DagtekeningRetour**: Dagtekening van het retourbericht.
* **XsltVersie**: Volgnummer van de formele uitgifte van een versie van de XSLT’s die zijn ingezet voor de controle van het heenbericht.
* **XsdVersieRetour**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het retourbericht.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VolledigeNaam | 1..1 |
| Communicatie | ijw:CDT_Communicatie | 0..1 |
| JuridischeStatus | ijw:LDT_JuridischeStatus | 0..1 |
| WettelijkeVertegenwoordiging | ijw:LDT_WettelijkeVertegenwoordiging |[0..1]|
| Commentaar | ijw:LDT_Commentaar | 0..1 |
| Relaties | jw302:Relaties | 0..1 |
| Contactgegevens | jw302:Contactgegevens | 1..1 |
| ToegewezenProducten | jw302:ToegewezenProducten | 1..1 |
| RetourCodes | jw302:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: Volledige naam van een natuurlijk persoon, aangeduid als Geslachtsnaam, eventueel Partnernaam, Voornamen en/of Voorletters en NaamGebruik.
* **Communicatie**: Aanduiding over bijzondere vorm van communicatie die gebruikt dient te worden.
* **JuridischeStatus**: Juridische situatie die voor de client van toepassing is op het moment van indicatiestelling.
* **WettelijkeVertegenwoordiging**: Wettelijke vertegenwoordiging die voor de client van toepassing is op het moment van beoordeling.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

### Relaties

| Child-element | Type | Card. |
| --- | --- | --- |
| Relatie | jw302:Relatie | 1..unbounded |

### Relatie

*Beschrijving*: Persoonsgegevens van de relatie van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Nummer | ijw:LDT_Persoonsid | 1..1 |
| Volgorde | ijw:LDT_RelatieVolgorde | 0..1 |
| Soort | ijw:LDT_SoortRelatie | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 0..1 |
| Geslacht | ijw:LDT_Geslacht | 0..1 |
| Naam | ijw:CDT_VolledigeNaam | 1..1 |
| Contact | jw302:Contact | 1..1 |
| RetourCodes | jw302:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Nummer**: Identificerend nummer van de relatie van een client.
* **Volgorde**: Aanduiding van de prioriteit van de contactpersoon.
* **Soort**: De soort relatie die een persoon ten opzichte van de client heeft.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: Volledige naam van een natuurlijk persoon, aangeduid als Geslachtsnaam, eventueel Partnernaam, Voornamen en/of Voorletters en NaamGebruik.

### Contact

*Beschrijving*: Gegevens voor de aanduiding van het adres van de client of relatie.

| Child-element | Type | Card. |
| --- | --- | --- |
| Soort | ijw:LDT_AdresSoort | 1..1 |
| Adres | ijw:CDT_Adres | 0..1 |
| Organisatie | ijw:LDT_Organisatienaam | 0..1 |
| Telefoon | ijw:CDT_Telefoonnummers | 0..1 |
| Emailadres | ijw:LDT_Emailadres | 0..1 |
| Periode | ijw:CDT_OpenPeriode | 0..1 |
| RetourCodes | jw302:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Soort**: Nadere typering van het adres.
* **Adres**: Adres van de client of relatie van de client.
* **Organisatie**: De naam van een organisatie waar de client of relatie van de client verblijft.
* **Telefoon**: De telefoonnummers waarop de client of relatie van de client te bereiken is.
* **Emailadres**: Het e-mailadres van de client of relatie van de client.
* **Periode**: Begindatum en/of een einddatum van het verblijf van de client of relatie van de client op een tijdelijk adres.

### Contactgegevens

| Child-element | Type | Card. |
| --- | --- | --- |
| Contact | jw302:Contact | 1..unbounded |

### ToegewezenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| ToegewezenProduct | jw302:ToegewezenProduct | 1..unbounded |

### ToegewezenProduct

*Beschrijving*: Gegevens over een product dat de gemeente toewijst aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| ReferentieAanbieder | ijw:LDT_Referentie | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| Toewijzingsdatum | ijw:LDT_Datum | 1..1 |
| Toewijzingstijd | ijw:LDT_Tijd | 1..1 |
| Ingangsdatum | ijw:LDT_Datum | 1..1 |
| Einddatum | ijw:LDT_Datum | 0..1 |
| RedenWijziging | ijw:LDT_RedenWijziging | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |
| Commentaar | ijw:LDT_Commentaar | 0..1 |
| RetourCodes | jw302:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **Toewijzingsdatum**: De datum waarop de gemeente de toewijzing van de zorg aan de zorgaanbieder definitief heeft vastgesteld.
* **Toewijzingstijd**: Het tijdstip waarop de gemeente de toewijzing van de zorg aan de zorgaanbieder definitief heeft vastgesteld.
* **Ingangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden.
* **Einddatum**: De datum waarop de toegewezen product voor de laatste keer geleverd dient te worden.
* **RedenWijziging**: De reden waarom een toewijzing wordt gewijzigd.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toegewezen budget
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

---

# Samenvatting JW305.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw305/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw305:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de start van levering van Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw305:Header | 1..1 |
| Client | jw305:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VerkorteNaam | 1..1 |
| StartProducten | jw305:StartProducten | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StartProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StartProduct | jw305:StartProduct | 1..unbounded |

### StartProduct

*Beschrijving*: Gegevens over het product waarvan de levering gestart is.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | ijw:LDT_Datum | 0..1 |
| Begindatum | ijw:LDT_Datum | 1..1 |
| StatusAanlevering | ijw:LDT_StatusAanlevering | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

# Samenvatting JW306.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw306/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw306:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de start van levering van Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw306:Header | 1..1 |
| Client | jw306:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | ijw:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | ijw:LDT_Datum | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieRetour | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw306:RetourCodes | 0..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **IdentificatieRetour**: Naam of nummer ter identificatie van een retourbericht.
* **DagtekeningRetour**: Dagtekening van het retourbericht.
* **XsltVersie**: Volgnummer van de formele uitgifte van een versie van de XSLT’s die zijn ingezet voor de controle van het heenbericht.
* **XsdVersieRetour**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het retourbericht.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VerkorteNaam | 1..1 |
| StartProducten | jw306:StartProducten | 1..1 |
| RetourCodes | jw306:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StartProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StartProduct | jw306:StartProduct | 1..unbounded |

### StartProduct

*Beschrijving*: Gegevens over het product waarvan de levering gestart is.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | ijw:LDT_Datum | 0..1 |
| Begindatum | ijw:LDT_Datum | 1..1 |
| StatusAanlevering | ijw:LDT_StatusAanlevering | 1..1 |
| RetourCodes | jw306:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

# Samenvatting JW307.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw307/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw307:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de stop van levering van Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw307:Header | 1..1 |
| Client | jw307:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VerkorteNaam | 1..1 |
| StopProducten | jw307:StopProducten | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StopProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StopProduct | jw307:StopProduct | 1..unbounded |

### StopProduct

*Beschrijving*: Gegevens over het beeindigen van de levering van ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | ijw:LDT_Datum | 0..1 |
| Begindatum | ijw:LDT_Datum | 1..1 |
| RedenBeeindiging | ijw:LDT_RedenBeeindiging | 1..1 |
| Einddatum | ijw:LDT_Datum | 1..1 |
| StatusAanlevering | ijw:LDT_StatusAanlevering | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **RedenBeeindiging**: De reden van beeindiging van de Jeugdhulp bij de client.
* **Einddatum**: De datum waarop de Jeugdhulp bij de client wordt beeindigd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

# Samenvatting JW308.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw308/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw308:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de stop van levering van Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw308:Header | 1..1 |
| Client | jw308:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | ijw:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | ijw:LDT_Datum | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieRetour | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw308:RetourCodes | 0..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **IdentificatieRetour**: Naam of nummer ter identificatie van een retourbericht.
* **DagtekeningRetour**: Dagtekening van het retourbericht.
* **XsltVersie**: Volgnummer van de formele uitgifte van een versie van de XSLT’s die zijn ingezet voor de controle van het heenbericht.
* **XsdVersieRetour**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het retourbericht.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VerkorteNaam | 1..1 |
| StopProducten | jw308:StopProducten | 1..1 |
| RetourCodes | jw308:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StopProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StopProduct | jw308:StopProduct | 1..unbounded |

### StopProduct

*Beschrijving*: Gegevens over het beeindigen van de levering van ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | ijw:LDT_Datum | 0..1 |
| Begindatum | ijw:LDT_Datum | 1..1 |
| RedenBeeindiging | ijw:LDT_RedenBeeindiging | 1..1 |
| Einddatum | ijw:LDT_Datum | 1..1 |
| StatusAanlevering | ijw:LDT_StatusAanlevering | 1..1 |
| RetourCodes | jw308:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **RedenBeeindiging**: De reden van beeindiging van de Jeugdhulp bij de client.
* **Einddatum**: De datum waarop de Jeugdhulp bij de client wordt beeindigd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

# Samenvatting JW315.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw315/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw315:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het aanvragen van een toewijzing voor Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw315:Header | 1..1 |
| Client | jw315:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VerkorteNaam | 1..1 |
| GezagsdragerBekend | ijw:LDT_JaNee | 0..1 |
| Commentaar | ijw:LDT_Commentaar | 0..1 |
| AangevraagdeProducten | jw315:AangevraagdeProducten | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De achternaam van een natuurlijk persoon, aangeduid als Naam en Voorvoegsel.
* **GezagsdragerBekend**: Indicatie in een Verzoek om toewijzing waarin de aanbieder kan aangeven dat de gezagsdrager bekend is.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

### AangevraagdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| AangevraagdProduct | jw315:AangevraagdProduct | 1..unbounded |

### AangevraagdProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | ijw:LDT_Referentie | 1..1 |
| BeschikkingNummer | ijw:LDT_Nummer | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| BeschikkingIngangsdatum | ijw:LDT_Datum | 0..1 |
| ToewijzingIngangsdatum | ijw:LDT_Datum | 1..1 |
| ToewijzingEinddatum | ijw:LDT_Datum | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |
| Verwijzer | ijw:CDT_Verwijzer | 1..1 |
| Raamcontract | ijw:LDT_JaNee | 0..1 |
| Commentaar | ijw:LDT_Commentaar | 0..1 |

**Omschrijving child-elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **BeschikkingNummer**: Identificerend nummer van de opdracht om ondersteuning te leveren zoals vastgesteld door de gemeente. Dit is niet noodzakelijkerwijs een officiele beschikking.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **BeschikkingIngangsdatum**: Ingangsdatum van een afgegeven beschikking.
* **ToewijzingIngangsdatum**: De aangevraagde Ingangsdatum van het toe te wijzen Product.
* **ToewijzingEinddatum**: De aangevraagde Einddatum van het toe te wijzen Product.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het aangevraagde budget
* **Verwijzer**: Gegevens over de persoon of instantie die een client heeft doorverwezen naar ondersteuning, aangeduid als Type en Naam of ZorgverlenerCode.
* **Raamcontract**: Indicator of de aanbieder voor de te leveren ondersteuning beroep doet op een landelijk raamcontract.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

---

# Samenvatting JW316.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw316/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw316:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het aanvragen van een toewijzing voor Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw316:Header | 1..1 |
| Client | jw316:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | ijw:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | ijw:LDT_Datum | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieRetour | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw316:RetourCodes | 0..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **IdentificatieRetour**: Naam of nummer ter identificatie van een retourbericht.
* **DagtekeningRetour**: Dagtekening van het retourbericht.
* **XsltVersie**: Volgnummer van de formele uitgifte van een versie van de XSLT’s die zijn ingezet voor de controle van het heenbericht.
* **XsdVersieRetour**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het retourbericht.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | ijw:CDT_Geboortedatum | 1..1 |
| Geslacht | ijw:LDT_Geslacht | 1..1 |
| Naam | ijw:CDT_VerkorteNaam | 1..1 |
| GezagsdragerBekend | ijw:LDT_JaNee | 0..1 |
| Commentaar | ijw:LDT_Commentaar | 0..1 |
| AangevraagdeProducten | jw316:AangevraagdeProducten | 1..1 |
| RetourCodes | jw316:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De achternaam van een natuurlijk persoon, aangeduid als Naam en Voorvoegsel.
* **GezagsdragerBekend**: Indicatie in een Verzoek om toewijzing waarin de aanbieder kan aangeven dat de gezagsdrager bekend is.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

### AangevraagdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| AangevraagdProduct | jw316:AangevraagdProduct | 1..unbounded |

### AangevraagdProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | ijw:LDT_Referentie | 1..1 |
| BeschikkingNummer | ijw:LDT_Nummer | 0..1 |
| Product | ijw:CDT_Product | 0..1 |
| BeschikkingIngangsdatum | ijw:LDT_Datum | 0..1 |
| ToewijzingIngangsdatum | ijw:LDT_Datum | 1..1 |
| ToewijzingEinddatum | ijw:LDT_Datum | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |
| Verwijzer | ijw:CDT_Verwijzer | 1..1 |
| Raamcontract | ijw:LDT_JaNee | 0..1 |
| Commentaar | ijw:LDT_Commentaar | 0..1 |
| RetourCodes | jw316:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **BeschikkingNummer**: Identificerend nummer van de opdracht om ondersteuning te leveren zoals vastgesteld door de gemeente. Dit is niet noodzakelijkerwijs een officiele beschikking.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **BeschikkingIngangsdatum**: Ingangsdatum van een afgegeven beschikking.
* **ToewijzingIngangsdatum**: De aangevraagde Ingangsdatum van het toe te wijzen Product.
* **ToewijzingEinddatum**: De aangevraagde Einddatum van het toe te wijzen Product.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het aangevraagde budget
* **Verwijzer**: Gegevens over de persoon of instantie die een client heeft doorverwezen naar ondersteuning, aangeduid als Type en Naam of ZorgverlenerCode.
* **Raamcontract**: Indicator of de aanbieder voor de te leveren ondersteuning beroep doet op een landelijk raamcontract.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

---

# Samenvatting JW317.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw317/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw317:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor Verzoek om wijziging Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw317:Header | 1..1 |
| Client | jw317:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Verzoek | jw317:Verzoek | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Verzoek

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | ijw:LDT_Referentie | 1..1 |
| RedenVerzoek | ijw:LDT_RedenVerzoek | 1..1 |
| OngewijzigdeProducten | jw317:OngewijzigdeProducten | 0..1 |
| TeWijzigenProducten | jw317:TeWijzigenProducten | 0..1 |
| NieuweProducten | jw317:NieuweProducten | 0..1 |

**Omschrijving child-elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **RedenVerzoek**: Reden waarom een verzoek wordt ingediend.

### OngewijzigdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| OngewijzigdProduct | jw317:OngewijzigdProduct | 1..unbounded |

### OngewijzigdProduct

*Beschrijving*: Gegevens over het product dat ongewijzigd voortgezet gaat worden.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.

### TeWijzigenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| TeWijzigenProduct | jw317:TeWijzigenProduct | 1..unbounded |

### TeWijzigenProduct

*Beschrijving*: Gegevens over het product waarvoor een wijziging wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| GewensteIngangsdatum | ijw:LDT_Datum | 1..1 |
| Einddatum | ijw:LDT_Datum | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het te wijzigen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

### NieuweProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| NieuwProduct | jw317:NieuwProduct | 1..unbounded |

### NieuwProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| Product | ijw:CDT_Product | 0..1 |
| GewensteIngangsdatum | ijw:LDT_Datum | 1..1 |
| Einddatum | ijw:LDT_Datum | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |

**Omschrijving child-elementen**
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het nieuw toe te wijzen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

---

# Samenvatting JW318.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw318/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw318:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor Verzoek om wijziging Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw318:Header | 1..1 |
| Client | jw318:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | ijw:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | ijw:LDT_Datum | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieRetour | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw318:RetourCodes | 0..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **IdentificatieRetour**: Naam of nummer ter identificatie van een retourbericht.
* **DagtekeningRetour**: Dagtekening van het retourbericht.
* **XsltVersie**: Volgnummer van de formele uitgifte van een versie van de XSLT’s die zijn ingezet voor de controle van het heenbericht.
* **XsdVersieRetour**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het retourbericht.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Verzoek | jw318:Verzoek | 1..1 |
| RetourCodes | jw318:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Verzoek

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | ijw:LDT_Referentie | 1..1 |
| RedenVerzoek | ijw:LDT_RedenVerzoek | 1..1 |
| OngewijzigdeProducten | jw318:OngewijzigdeProducten | 0..1 |
| TeWijzigenProducten | jw318:TeWijzigenProducten | 0..1 |
| NieuweProducten | jw318:NieuweProducten | 0..1 |
| RetourCodes | jw318:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **RedenVerzoek**: Reden waarom een verzoek wordt ingediend.

### OngewijzigdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| OngewijzigdProduct | jw318:OngewijzigdProduct | 1..unbounded |

### OngewijzigdProduct

*Beschrijving*: Gegevens over het product dat ongewijzigd voortgezet gaat worden.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| RetourCodes | jw318:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.

### TeWijzigenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| TeWijzigenProduct | jw318:TeWijzigenProduct | 1..unbounded |

### TeWijzigenProduct

*Beschrijving*: Gegevens over het product waarvoor een wijziging wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| GewensteIngangsdatum | ijw:LDT_Datum | 1..1 |
| Einddatum | ijw:LDT_Datum | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |
| RetourCodes | jw318:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het te wijzigen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

### NieuweProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| NieuwProduct | jw318:NieuwProduct | 1..unbounded |

### NieuwProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| Product | ijw:CDT_Product | 0..1 |
| GewensteIngangsdatum | ijw:LDT_Datum | 1..1 |
| Einddatum | ijw:LDT_Datum | 0..1 |
| Omvang | ijw:CDT_Omvang | 0..1 |
| Budget | ijw:LDT_Budget | 0..1 |
| RetourCodes | jw318:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het nieuw toe te wijzen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

---

# Samenvatting JW319.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw319/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw319:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor antwoordinformatie over het Verzoek om toewijzing of Verzoek om wijziging Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw319:Header | 1..1 |
| Antwoord | jw319:Antwoord | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_Gemeente | 1..1 |
| Ontvanger | ijw:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **Ontvanger**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Antwoord

*Beschrijving*: Gegevens over het antwoord dat de gemeente geeft op een verzoek van de aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | ijw:LDT_Referentie | 1..1 |
| VerzoekAntwoord | ijw:LDT_VerzoekAntwoord | 1..1 |
| RedenAfwijzingVerzoek | ijw:LDT_RedenAfwijzingVerzoek | 0..1 |
| Woonplaatsbeginsel | jw319:Woonplaatsbeginsel | 0..1 |

**Omschrijving child-elementen**
* **VerzoekAntwoord**: Het antwoord op een verzoek.
* **RedenAfwijzingVerzoek**: De reden waarom een verzoek van een zorgaanbieder wordt afgewezen door de gemeente.

### Woonplaatsbeginsel

| Child-element | Type | Card. |
| --- | --- | --- |
| Gemeente | ijw:LDT_Gemeente | 1..1 |

---

# Samenvatting JW320.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw320/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw320:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor antwoordinformatie over het Verzoek om toewijzing of Verzoek om wijziging Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw320:Header | 1..1 |
| Antwoord | jw320:Antwoord | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_Gemeente | 1..1 |
| Ontvanger | ijw:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | ijw:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | ijw:LDT_Datum | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieRetour | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw320:RetourCodes | 0..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **Ontvanger**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **IdentificatieRetour**: Naam of nummer ter identificatie van een retourbericht.
* **DagtekeningRetour**: Dagtekening van het retourbericht.
* **XsltVersie**: Volgnummer van de formele uitgifte van een versie van de XSLT’s die zijn ingezet voor de controle van het heenbericht.
* **XsdVersieRetour**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het retourbericht.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Antwoord

*Beschrijving*: Gegevens over het antwoord dat de gemeente geeft op een verzoek van de aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | ijw:LDT_Referentie | 1..1 |
| VerzoekAntwoord | ijw:LDT_VerzoekAntwoord | 1..1 |
| RedenAfwijzingVerzoek | ijw:LDT_RedenAfwijzingVerzoek | 0..1 |
| Woonplaatsbeginsel | jw320:Woonplaatsbeginsel | 0..1 |
| RetourCodes | jw320:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **VerzoekAntwoord**: Het antwoord op een verzoek.
* **RedenAfwijzingVerzoek**: De reden waarom een verzoek van een zorgaanbieder wordt afgewezen door de gemeente.

### Woonplaatsbeginsel

| Child-element | Type | Card. |
| --- | --- | --- |
| Gemeente | ijw:LDT_Gemeente | 1..1 |
| RetourCodes | jw320:RetourCodes | 1..1 |

---

# Samenvatting JW323.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw323/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw323:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor declaratie Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw323:Header | 1..1 |
| Declaratie | jw323:Declaratie | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_AgbCode | 1..1 |
| Ontvanger | ijw:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Declaratie

*Beschrijving*: Gegevens over de ingediende declaratie.

| Child-element | Type | Card. |
| --- | --- | --- |
| DeclaratieNummer | ref | 1..1 |
| DeclaratiePeriode | ijw:CDT_GeslotenPeriode | 1..1 |
| DeclaratieDagtekening | ijw:LDT_Datum | 1..1 |
| TotaalIngediendBedrag | ijw:CDT_TotaalBedragMetDC | 1..1 |
| Clienten | jw323:Clienten | 1..1 |

**Omschrijving child-elementen**
* **DeclaratieNummer**: Unieke identificatie van een declaratie
* **DeclaratiePeriode**: Eerste en laatste dag van een administratieve periode waarop de gegevensuitwisseling betrekking heeft.
* **DeclaratieDagtekening**: Datum van ondertekening van een declaratie door de declarant.
* **TotaalIngediendBedrag**: Het bedrag dat in zijn totaliteit gedeclareerd is.

### Clienten

| Child-element | Type | Card. |
| --- | --- | --- |
| Client | jw323:Client | 1..unbounded |

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Prestaties | jw323:Prestaties | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Prestaties

| Child-element | Type | Card. |
| --- | --- | --- |
| Prestatie | jw323:Prestatie | 1..unbounded |

### Prestatie

| Child-element | Type | Card. |
| --- | --- | --- |
| ProductReferentie | ijw:CDT_Referentie | 1..1 |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| ProductCategorie | ijw:LDT_ProductCategorie | 1..1 |
| ProductCode | ijw:LDT_ProductCode | 1..1 |
| ProductPeriode | ijw:CDT_GeslotenPeriode | 1..1 |
| GeleverdVolume | ijw:LDT_Volume | 1..1 |
| Eenheid | ijw:LDT_Eenheid | 1..1 |
| ProductTarief | ijw:LDT_Bedrag | 0..1 |
| IngediendBedrag | ijw:CDT_BedragMetDC | 1..1 |

**Omschrijving child-elementen**
* **ProductReferentie**: Identificerende referentie van de declaratie van een zorg - of ondersteuningsprestatie.
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **ProductCategorie**: Gecodeerde aanduiding van hoofdcategorieen van producten in het kader van de Jeugdwet (Jw)
* **ProductCode**: Gecodeerde aanduiding van producten in het kader van de Jeugdwet (Jw)
* **ProductPeriode**: Periode binnen de declaratieperiode waarop het product feitelijk is of wordt uitgevoerd.
* **GeleverdVolume**: Hoeveelheid verricht product in een prestatieperiode.
* **Eenheid**: De eenheid waarin de zorg/behandeling wordt uitgedrukt.
* **ProductTarief**: Tarief van een individueel product.
* **IngediendBedrag**: Het bedrag dat gedeclareerd wordt.

---

# Samenvatting JW325.xsd

## 1. Schema-metadata

- **targetNamespace**: `http://www.istandaarden.nl/ijw/3_2/jw325/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- `import` → namespace `http://www.istandaarden.nl/ijw/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

## 2. Globale elementen

- `Bericht` : type `jw325:Root`

## 3. ComplexTypes

### Root

*Beschrijving*: Bericht met retourinformatie voor declaratie Jeugdhulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | jw325:Header | 1..1 |
| DeclaratieAntwoord | jw325:DeclaratieAntwoord | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | ijw:LDT_Gemeente | 1..1 |
| Ontvanger | ijw:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | ijw:CDT_XsdVersie | 1..1 |
| DeclaratieIdentificatie | ijw:CDT_BerichtIdentificatie | 1..1 |
| XsltVersie | ijw:LDT_Versie | 0..1 |
| XsdVersieDeclaratie | ijw:CDT_XsdVersie | 1..1 |
| RetourCodes | jw325:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht (zie Codelijst iJw, COD002-VEKT).
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **Ontvanger**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.
* **DeclaratieIdentificatie**: DeclaratieIdentificatie dient om het declaratie-antwoordbericht en het eerder verstuurde declaratiebericht aan elkaar te koppelen.

### RetourCodes

| Child-element | Type | Card. |
| --- | --- | --- |
| RetourCode | ijw:LDT_RetourCode | 1..unbounded |

**Omschrijving child-elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### DeclaratieAntwoord

*Beschrijving*: Gegevens over het antwoord op een ingediende declaratie.

| Child-element | Type | Card. |
| --- | --- | --- |
| DeclaratieNummer | ijw:LDT_IdentificatieDeclaratie | 1..1 |
| TotaalIngediendBedrag | ijw:CDT_TotaalBedragMetDC | 1..1 |
| TotaalToegekendBedrag | ijw:CDT_TotaalBedragMetDC | 1..1 |
| Clienten | jw325:Clienten | 0..1 |
| RetourCodes | jw325:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **DeclaratieNummer**: Unieke identificatie van een declaratie
* **TotaalIngediendBedrag**: Het bedrag dat in zijn totaliteit gedeclareerd is.
* **TotaalToegekendBedrag**: Het bedrag dat in zijn totaliteit toegekend is.

### Clienten

| Child-element | Type | Card. |
| --- | --- | --- |
| Client | jw325:Client | 1..unbounded |

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | ijw:LDT_BurgerServicenummer | 1..1 |
| Prestaties | jw325:Prestaties | 1..1 |
| RetourCodes | jw325:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Prestaties

| Child-element | Type | Card. |
| --- | --- | --- |
| Prestatie | jw325:Prestatie | 1..unbounded |

### Prestatie

| Child-element | Type | Card. |
| --- | --- | --- |
| ProductReferentie | ijw:CDT_Referentie | 1..1 |
| ToewijzingNummer | ijw:LDT_Nummer | 1..1 |
| ProductCategorie | ijw:LDT_ProductCategorie | 1..1 |
| ProductCode | ijw:LDT_ProductCode | 1..1 |
| ProductPeriode | ijw:CDT_GeslotenPeriode | 1..1 |
| GeleverdVolume | ijw:LDT_Volume | 1..1 |
| Eenheid | ijw:LDT_Eenheid | 1..1 |
| ProductTarief | ijw:LDT_Bedrag | 0..1 |
| IngediendBedrag | ijw:CDT_BedragMetDC | 1..1 |
| RetourCodes | jw325:RetourCodes | 1..1 |

**Omschrijving child-elementen**
* **ProductReferentie**: Identificerende referentie van de declaratie van een zorg - of ondersteuningsprestatie.
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **ProductCategorie**: Gecodeerde aanduiding van hoofdcategorieen van producten in het kader van de Jeugdwet (Jw).
* **ProductCode**: Gecodeerde aanduiding van producten in het kader van de Jeugdwet (Jw).
* **ProductPeriode**: Periode binnen de declaratie-/factuurperiode waarop het product feitelijk is of wordt uitgevoerd.
* **GeleverdVolume**: Hoeveelheid verricht product in een prestatieperiode.
* **Eenheid**: De eenheid waarin de zorg/behandeling wordt uitgedrukt.
* **ProductTarief**: Tarief van een individueel product.
* **IngediendBedrag**: Het bedrag dat gedeclareerd wordt.
