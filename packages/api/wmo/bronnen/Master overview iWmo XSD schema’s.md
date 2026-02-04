# Master overview iWmo XSD schema’s

Versie: 1.0
Status: In behandeling
Auteur: Zorginstituut Nederland
Bron-link: https://www.istandaarden.nl/iwmo/releases/release-iwmo-3.2
Publicatiedatum: 29 september 2022
Type document: Brondocument Wmo-agent

# iWmo XSD – samenvattingen per schema

## Inleiding & AI‑interpretatiegids

Dit document bevat **samenvattingen van alle 14 iWmo XSD‑schema’s** die zijn aangeleverd per iWmo bericht. Gebruik de tabellen om snel de structuur, cardinaliteiten/verplichte velden en beschrijvingen (per data-element) te raadplegen. De omschrijvingen onder de tabellen bieden functionele betekenis van de data-elementen gebruikt in de berichten. Voor formele validatie (enumeraties, pattern‑restricties) verwijs naar het originele XSD‑bestand.

---

## Samenvatting **WMO301.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo301/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo301:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor de toewijzing van Wmo-ondersteuning aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo301:Header | 1..1 |
| Client | wmo301:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_Gemeente | 1..1 |
| Ontvanger | iwmo:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **Ontvanger**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VolledigeNaam | 1..1 |
| Communicatie | iwmo:CDT_Communicatie | 0..1 |
| JuridischeStatus | iwmo:LDT_JuridischeStatus | 0..1 |
| WettelijkeVertegenwoordiging | iwmo:LDT_WettelijkeVertegenwoordiging | 0..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |
| Relaties | wmo301:Relaties | 0..1 |
| Contactgegevens | wmo301:Contactgegevens | 1..1 |
| ToegewezenProducten | wmo301:ToegewezenProducten | 1..1 |

**Omschrijving child‑elementen**
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
| Relatie | wmo301:Relatie | 1..unbounded |

### Relatie

*Beschrijving*: Persoonsgegevens van de relatie van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Nummer | iwmo:LDT_Persoonsid | 1..1 |
| Volgorde | iwmo:LDT_RelatieVolgorde | 0..1 |
| Soort | iwmo:LDT_SoortRelatie | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 0..1 |
| Geslacht | iwmo:LDT_Geslacht | 0..1 |
| Naam | iwmo:CDT_VolledigeNaam | 1..1 |
| Contact | wmo301:Contact | 1..1 |

**Omschrijving child‑elementen**
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
| Soort | iwmo:LDT_AdresSoort | 1..1 |
| Adres | iwmo:CDT_Adres | 0..1 |
| Organisatie | iwmo:LDT_Organisatienaam | 0..1 |
| Telefoon | iwmo:CDT_Telefoonnummers | 0..1 |
| Emailadres | iwmo:LDT_Emailadres | 0..1 |
| Periode | iwmo:CDT_OpenPeriode | 0..1 |

**Omschrijving child‑elementen**
* **Soort**: Nadere typering van het adres.
* **Adres**: Adres van de client of relatie van de client.
* **Organisatie**: De naam van een organisatie waar de client of relatie van de client verblijft.
* **Telefoon**: De telefoonnummers waarop de client of relatie van de client te bereiken is.
* **Emailadres**: Het e-mailadres van de client of relatie van de client.
* **Periode**: Begindatum en/of een einddatum van het verblijf van de client of relatie van de client op een tijdelijk adres.

### Contactgegevens

| Child-element | Type | Card. |
| --- | --- | --- |
| Contact | wmo301:Contact | 1..unbounded |

### ToegewezenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| ToegewezenProduct | wmo301:ToegewezenProduct | 1..unbounded |

### ToegewezenProduct

*Beschrijving*: Gegevens over een product dat de gemeente toewijst aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| ReferentieAanbieder | iwmo:LDT_Referentie | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| Toewijzingsdatum | iwmo:LDT_Datum | 1..1 |
| Toewijzingstijd | iwmo:LDT_Tijd | 1..1 |
| Ingangsdatum | iwmo:LDT_Datum | 1..1 |
| Einddatum | iwmo:LDT_Datum | 0..1 |
| RedenWijziging | iwmo:LDT_RedenWijziging | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |

**Omschrijving child‑elementen**
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

## Samenvatting **WMO302.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo302/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo302:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor de toewijzing van Wmo-ondersteuning aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo302:Header | 1..1 |
| Client | wmo302:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_Gemeente | 1..1 |
| Ontvanger | iwmo:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | iwmo:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | iwmo:LDT_Datum | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieRetour | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo302:RetourCodes | 0..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VolledigeNaam | 1..1 |
| Communicatie | iwmo:CDT_Communicatie | 0..1 |
| JuridischeStatus | iwmo:LDT_JuridischeStatus | 0..1 |
| WettelijkeVertegenwoordiging | iwmo:LDT_WettelijkeVertegenwoordiging | 0..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |
| Relaties | wmo302:Relaties | 0..1 |
| Contactgegevens | wmo302:Contactgegevens | 1..1 |
| ToegewezenProducten | wmo302:ToegewezenProducten | 1..1 |
| RetourCodes | wmo302:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
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
| Relatie | wmo302:Relatie | 1..unbounded |

### Relatie

*Beschrijving*: Persoonsgegevens van de relatie van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Nummer | iwmo:LDT_Persoonsid | 1..1 |
| Volgorde | iwmo:LDT_RelatieVolgorde | 0..1 |
| Soort | iwmo:LDT_SoortRelatie | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 0..1 |
| Geslacht | iwmo:LDT_Geslacht | 0..1 |
| Naam | iwmo:CDT_VolledigeNaam | 1..1 |
| Contact | wmo302:Contact | 1..1 |
| RetourCodes | wmo302:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
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
| Soort | iwmo:LDT_AdresSoort | 1..1 |
| Adres | iwmo:CDT_Adres | 0..1 |
| Organisatie | iwmo:LDT_Organisatienaam | 0..1 |
| Telefoon | iwmo:CDT_Telefoonnummers | 0..1 |
| Emailadres | iwmo:LDT_Emailadres | 0..1 |
| Periode | iwmo:CDT_OpenPeriode | 0..1 |
| RetourCodes | wmo302:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Soort**: Nadere typering van het adres.
* **Adres**: Adres van de client of relatie van de client.
* **Organisatie**: De naam van een organisatie waar de client of relatie van de client verblijft.
* **Telefoon**: De telefoonnummers waarop de client of relatie van de client te bereiken is.
* **Emailadres**: Het e-mailadres van de client of relatie van de client.
* **Periode**: Begindatum en/of een einddatum van het verblijf van de client of relatie van de client op een tijdelijk adres.

### Contactgegevens

| Child-element | Type | Card. |
| --- | --- | --- |
| Contact | wmo302:Contact | 1..unbounded |

### ToegewezenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| ToegewezenProduct | wmo302:ToegewezenProduct | 1..unbounded |

### ToegewezenProduct

*Beschrijving*: Gegevens over een product dat de gemeente toewijst aan een aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| ReferentieAanbieder | iwmo:LDT_Referentie | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| Toewijzingsdatum | iwmo:LDT_Datum | 1..1 |
| Toewijzingstijd | iwmo:LDT_Tijd | 1..1 |
| Ingangsdatum | iwmo:LDT_Datum | 1..1 |
| Einddatum | iwmo:LDT_Datum | 0..1 |
| RedenWijziging | iwmo:LDT_RedenWijziging | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |
| RetourCodes | wmo302:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
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

## Samenvatting **WMO305.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo305/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo305:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de start van levering van Wmo-ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo305:Header | 1..1 |
| Client | wmo305:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VerkorteNaam | 1..1 |
| StartProducten | wmo305:StartProducten | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StartProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StartProduct | wmo305:StartProduct | 1..unbounded |

### StartProduct

*Beschrijving*: Gegevens over het product waarvan de levering gestart is.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | iwmo:LDT_Datum | 0..1 |
| Begindatum | iwmo:LDT_Datum | 1..1 |
| StatusAanlevering | iwmo:LDT_StatusAanlevering | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

## Samenvatting **WMO306.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo306/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo306:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de start van levering van Wmo-ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo306:Header | 1..1 |
| Client | wmo306:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | iwmo:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | iwmo:LDT_Datum | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieRetour | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo306:RetourCodes | 0..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VerkorteNaam | 1..1 |
| StartProducten | wmo306:StartProducten | 1..1 |
| RetourCodes | wmo306:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StartProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StartProduct | wmo306:StartProduct | 1..unbounded |

### StartProduct

*Beschrijving*: Gegevens over het product waarvan de levering gestart is.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | iwmo:LDT_Datum | 0..1 |
| Begindatum | iwmo:LDT_Datum | 1..1 |
| StatusAanlevering | iwmo:LDT_StatusAanlevering | 1..1 |
| RetourCodes | wmo306:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

## Samenvatting **WMO307.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo307/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo307:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de stop van levering van Wmo-ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo307:Header | 1..1 |
| Client | wmo307:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VerkorteNaam | 1..1 |
| StopProducten | wmo307:StopProducten | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StopProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StopProduct | wmo307:StopProduct | 1..unbounded |

### StopProduct

*Beschrijving*: Gegevens over het beeindigen van de levering van ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | iwmo:LDT_Datum | 0..1 |
| Begindatum | iwmo:LDT_Datum | 1..1 |
| RedenBeeindiging | iwmo:LDT_RedenBeeindiging | 1..1 |
| Einddatum | iwmo:LDT_Datum | 1..1 |
| StatusAanlevering | iwmo:LDT_StatusAanlevering | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **RedenBeeindiging**: De reden van beeindiging van de Wmo-ondersteuning bij de client.
* **Einddatum**: De datum waarop de Wmo-ondersteuning bij client wordt beeindigd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

## Samenvatting **WMO308.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo308/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo308:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het melden van de stop van levering van Wmo-ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo308:Header | 1..1 |
| Client | wmo308:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | iwmo:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | iwmo:LDT_Datum | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieRetour | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo308:RetourCodes | 0..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VerkorteNaam | 1..1 |
| StopProducten | wmo308:StopProducten | 1..1 |
| RetourCodes | wmo308:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De naam van een natuurlijk persoon, aangeduid als Geslachtsnaam en eventueel Voornamen en/of Voorletters.

### StopProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| StopProduct | wmo308:StopProduct | 1..unbounded |

### StopProduct

*Beschrijving*: Gegevens over het beeindigen van de levering van ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| ToewijzingIngangsdatum | iwmo:LDT_Datum | 0..1 |
| Begindatum | iwmo:LDT_Datum | 1..1 |
| RedenBeeindiging | iwmo:LDT_RedenBeeindiging | 1..1 |
| Einddatum | iwmo:LDT_Datum | 1..1 |
| StatusAanlevering | iwmo:LDT_StatusAanlevering | 1..1 |
| RetourCodes | wmo308:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **ToewijzingIngangsdatum**: De datum waarop de toegewezen product voor de eerste keer geleverd dient te worden (gelijk aan de Ingangsdatum van het toegewezen product in het Toewijzingbericht).
* **Begindatum**: Datum vanaf wanneer een ondersteuningsproduct wordt geleverd.
* **RedenBeeindiging**: De reden van beeindiging van de Wmo-ondersteuning bij de client.
* **Einddatum**: De datum waarop de Wmo-ondersteuning bij client wordt beeindigd.
* **StatusAanlevering**: Indicatie over de status van de informatie in de berichtklasse.

---

## Samenvatting **WMO315.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo315/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo315:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het aanvragen van een toewijzing voor Wmo-ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo315:Header | 1..1 |
| Client | wmo315:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VerkorteNaam | 1..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |
| AangevraagdeProducten | wmo315:AangevraagdeProducten | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De achternaam van een natuurlijk persoon, aangeduid als Naam en Voorvoegsel.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

### AangevraagdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| AangevraagdProduct | wmo315:AangevraagdProduct | 1..unbounded |

### AangevraagdProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | iwmo:LDT_Referentie | 1..1 |
| BeschikkingNummer | iwmo:LDT_Nummer | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| BeschikkingIngangsdatum | iwmo:LDT_Datum | 0..1 |
| ToewijzingIngangsdatum | iwmo:LDT_Datum | 1..1 |
| ToewijzingEinddatum | iwmo:LDT_Datum | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |
| Verwijzer | iwmo:CDT_Verwijzer | 1..1 |
| Raamcontract | iwmo:LDT_JaNee | 0..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |

**Omschrijving child‑elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **BeschikkingNummer**: Identificerend nummer van een beschikking zoals vastgesteld door de gemeente.
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

## Samenvatting **WMO316.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo316/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo316:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor het aanvragen van een toewijzing voor Wmo-ondersteuning.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo316:Header | 1..1 |
| Client | wmo316:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | iwmo:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | iwmo:LDT_Datum | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieRetour | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo316:RetourCodes | 0..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

*Beschrijving*: Persoonsgegevens van de client.

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Geboortedatum | iwmo:CDT_Geboortedatum | 1..1 |
| Geslacht | iwmo:LDT_Geslacht | 1..1 |
| Naam | iwmo:CDT_VerkorteNaam | 1..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |
| AangevraagdeProducten | wmo316:AangevraagdeProducten | 1..1 |
| RetourCodes | wmo316:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.
* **Geboortedatum**: Datum waarop een natuurlijk persoon geboren is.
* **Geslacht**: De sekse van een persoon, zoals bij geboorte formeel vastgesteld of nadien formeel gewijzigd.
* **Naam**: De achternaam van een natuurlijk persoon, aangeduid als Naam en Voorvoegsel.
* **Commentaar**: Vrije tekst (bijvoorbeeld toelichting) in een bericht.

### AangevraagdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| AangevraagdProduct | wmo316:AangevraagdProduct | 1..unbounded |

### AangevraagdProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | iwmo:LDT_Referentie | 1..1 |
| BeschikkingNummer | iwmo:LDT_Nummer | 0..1 |
| Product | iwmo:CDT_Product | 0..1 |
| BeschikkingIngangsdatum | iwmo:LDT_Datum | 0..1 |
| ToewijzingIngangsdatum | iwmo:LDT_Datum | 1..1 |
| ToewijzingEinddatum | iwmo:LDT_Datum | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |
| Verwijzer | iwmo:CDT_Verwijzer | 1..1 |
| Raamcontract | iwmo:LDT_JaNee | 0..1 |
| Commentaar | iwmo:LDT_Commentaar | 0..1 |
| RetourCodes | wmo316:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **BeschikkingNummer**: Identificerend nummer van een beschikking zoals vastgesteld door de gemeente.
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

## Samenvatting **WMO317.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo317/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo317:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor Verzoek om wijziging Wmo-hulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo317:Header | 1..1 |
| Client | wmo317:Client | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
* **BerichtVersie**: Volgnummer van de formele uitgifte van een major release van een iStandaard.
* **BerichtSubversie**: Volgnummer van de formele uitgifte van een minor release van een iStandaard.
* **Afzender**: Identificerende code van een aanbieder van zorg of ondersteuning.
* **Ontvanger**: Identificatie van een gemeente die betrokken is bij de uitvoering van zorg of ondersteuning.
* **BerichtIdentificatie**: Naam of nummer en dagtekening ter identificatie van een totale aanlevering.
* **XsdVersie**: Volgnummer van de formele uitgifte van een versie van de XSD’s die zijn ingezet voor het opstellen van het heenbericht.

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Verzoek | wmo317:Verzoek | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Verzoek

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | iwmo:LDT_Referentie | 1..1 |
| RedenVerzoek | iwmo:LDT_RedenVerzoek | 1..1 |
| OngewijzigdeProducten | wmo317:OngewijzigdeProducten | 0..1 |
| TeWijzigenProducten | wmo317:TeWijzigenProducten | 0..1 |
| NieuweProducten | wmo317:NieuweProducten | 0..1 |

**Omschrijving child‑elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **RedenVerzoek**: Reden waarom een verzoek wordt ingediend.

### OngewijzigdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| OngewijzigdProduct | wmo317:OngewijzigdProduct | 1..unbounded |

### OngewijzigdProduct

*Beschrijving*: Gegevens over het product dat ongewijzigd voortgezet gaat worden.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.

### TeWijzigenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| TeWijzigenProduct | wmo317:TeWijzigenProduct | 1..unbounded |

### TeWijzigenProduct

*Beschrijving*: Gegevens over het product waarvoor een wijziging wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| GewensteIngangsdatum | iwmo:LDT_Datum | 1..1 |
| Einddatum | iwmo:LDT_Datum | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het te wijzigen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

### NieuweProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| NieuwProduct | wmo317:NieuwProduct | 1..unbounded |

### NieuwProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| Product | iwmo:CDT_Product | 0..1 |
| GewensteIngangsdatum | iwmo:LDT_Datum | 1..1 |
| Einddatum | iwmo:LDT_Datum | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |

**Omschrijving child‑elementen**
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het nieuw toe te wijzen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

---

## Samenvatting **WMO318.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo318/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo318:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor Verzoek om wijziging Wmo-hulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo318:Header | 1..1 |
| Client | wmo318:Client | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | iwmo:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | iwmo:LDT_Datum | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieRetour | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo318:RetourCodes | 0..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Verzoek | wmo318:Verzoek | 1..1 |
| RetourCodes | wmo318:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Verzoek

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | iwmo:LDT_Referentie | 1..1 |
| RedenVerzoek | iwmo:LDT_RedenVerzoek | 1..1 |
| OngewijzigdeProducten | wmo318:OngewijzigdeProducten | 0..1 |
| TeWijzigenProducten | wmo318:TeWijzigenProducten | 0..1 |
| NieuweProducten | wmo318:NieuweProducten | 0..1 |
| RetourCodes | wmo318:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ReferentieAanbieder**: Naam of nummer die als referentie kan worden meegegeven.
* **RedenVerzoek**: Reden waarom een verzoek wordt ingediend.

### OngewijzigdeProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| OngewijzigdProduct | wmo318:OngewijzigdProduct | 1..unbounded |

### OngewijzigdProduct

*Beschrijving*: Gegevens over het product dat ongewijzigd voortgezet gaat worden.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| RetourCodes | wmo318:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.

### TeWijzigenProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| TeWijzigenProduct | wmo318:TeWijzigenProduct | 1..unbounded |

### TeWijzigenProduct

*Beschrijving*: Gegevens over het product waarvoor een wijziging wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| GewensteIngangsdatum | iwmo:LDT_Datum | 1..1 |
| Einddatum | iwmo:LDT_Datum | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |
| RetourCodes | wmo318:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het te wijzigen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

### NieuweProducten

| Child-element | Type | Card. |
| --- | --- | --- |
| NieuwProduct | wmo318:NieuwProduct | 1..unbounded |

### NieuwProduct

*Beschrijving*: Gegevens over het product waarvoor een toewijzing wordt aangevraagd.

| Child-element | Type | Card. |
| --- | --- | --- |
| Product | iwmo:CDT_Product | 0..1 |
| GewensteIngangsdatum | iwmo:LDT_Datum | 1..1 |
| Einddatum | iwmo:LDT_Datum | 0..1 |
| Omvang | iwmo:CDT_Omvang | 0..1 |
| Budget | iwmo:LDT_Budget | 0..1 |
| RetourCodes | wmo318:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Product**: Gecodeerde omschrijving van een product, dienst of resultaat ten behoeve van het leveren van ondersteuning aan een client.
* **GewensteIngangsdatum**: De gewenste ingangsdatum van het nieuw toe te wijzen product of budget.
* **Einddatum**: De gewenste Einddatum van het toe te wijzen Product of Budget.
* **Omvang**: Aanduiding van de omvang van de te leveren of geleverde ondersteuning, uitgedrukt in Volume, Eenheid en Frequentie.
* **Budget**: Aanduiding van het toe te wijzen budget

---

## Samenvatting **WMO319.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo319/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo319:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor antwoordinformatie over het Verzoek om toewijzing of Verzoek om wijziging Wmo-hulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo319:Header | 1..1 |
| Antwoord | wmo319:Antwoord | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_Gemeente | 1..1 |
| Ontvanger | iwmo:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| ReferentieAanbieder | iwmo:LDT_Referentie | 1..1 |
| VerzoekAntwoord | iwmo:LDT_VerzoekAntwoord | 1..1 |
| RedenAfwijzingVerzoek | iwmo:LDT_RedenAfwijzingVerzoek | 0..1 |

**Omschrijving child‑elementen**
* **VerzoekAntwoord**: Het antwoord op een verzoek.
* **RedenAfwijzingVerzoek**: De reden waarom een verzoek van een zorgaanbieder wordt afgewezen door de gemeente.

---

## Samenvatting **WMO320.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo320/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo320:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor antwoordinformatie over het Verzoek om toewijzing of Verzoek om wijziging Wmo-hulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo320:Header | 1..1 |
| Antwoord | wmo320:Antwoord | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_Gemeente | 1..1 |
| Ontvanger | iwmo:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| IdentificatieRetour | iwmo:LDT_IdentificatieBericht | 1..1 |
| DagtekeningRetour | iwmo:LDT_Datum | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieRetour | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo320:RetourCodes | 0..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### Antwoord

*Beschrijving*: Gegevens over het antwoord dat de gemeente geeft op een verzoek van de aanbieder.

| Child-element | Type | Card. |
| --- | --- | --- |
| ReferentieAanbieder | iwmo:LDT_Referentie | 1..1 |
| VerzoekAntwoord | iwmo:LDT_VerzoekAntwoord | 1..1 |
| RedenAfwijzingVerzoek | iwmo:LDT_RedenAfwijzingVerzoek | 0..1 |
| RetourCodes | wmo320:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **VerzoekAntwoord**: Het antwoord op een verzoek.
* **RedenAfwijzingVerzoek**: De reden waarom een verzoek van een zorgaanbieder wordt afgewezen door de gemeente.

---

## Samenvatting **WMO323.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo323/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo323:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht voor declaratie Wmo-hulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo323:Header | 1..1 |
| Declaratie | wmo323:Declaratie | 1..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_AgbCode | 1..1 |
| Ontvanger | iwmo:LDT_Gemeente | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| DeclaratiePeriode | iwmo:CDT_GeslotenPeriode | 1..1 |
| DeclaratieDagtekening | iwmo:LDT_Datum | 1..1 |
| TotaalIngediendBedrag | iwmo:CDT_TotaalBedragMetDC | 1..1 |
| Clienten | wmo323:Clienten | 1..1 |

**Omschrijving child‑elementen**
* **DeclaratieNummer**: Unieke identificatie van een declaratie
* **DeclaratiePeriode**: Eerste en laatste dag van een administratieve periode waarop de gegevensuitwisseling betrekking heeft.
* **DeclaratieDagtekening**: Datum van ondertekening van een declaratie door de declarant.
* **TotaalIngediendBedrag**: Het bedrag dat in zijn totaliteit gedeclareerd is.

### Clienten

| Child-element | Type | Card. |
| --- | --- | --- |
| Client | wmo323:Client | 1..unbounded |

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Prestaties | wmo323:Prestaties | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Prestaties

| Child-element | Type | Card. |
| --- | --- | --- |
| Prestatie | wmo323:Prestatie | 1..unbounded |

### Prestatie

| Child-element | Type | Card. |
| --- | --- | --- |
| ProductReferentie | iwmo:CDT_Referentie | 1..1 |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| ProductCategorie | iwmo:LDT_ProductCategorie | 1..1 |
| ProductCode | iwmo:LDT_ProductCode | 1..1 |
| ProductPeriode | iwmo:CDT_GeslotenPeriode | 1..1 |
| GeleverdVolume | iwmo:LDT_Volume | 1..1 |
| Eenheid | iwmo:LDT_Eenheid | 1..1 |
| ProductTarief | iwmo:LDT_Bedrag | 0..1 |
| IngediendBedrag | iwmo:CDT_BedragMetDC | 1..1 |

**Omschrijving child‑elementen**
* **ProductReferentie**: Identificerende referentie van de declaratie van een zorg - of ondersteuningsprestatie.
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **ProductCategorie**: Gecodeerde aanduiding van hoofdcategorieen van producten in het kader van de Wet maatschappelijke ondersteuning (Wmo).
* **ProductCode**: Gecodeerde aanduiding van producten in het kader van de Wet maatschappelijke ondersteuning (Wmo).
* **ProductPeriode**: Periode binnen de declaratieperiode waarop het product feitelijk is of wordt uitgevoerd.
* **GeleverdVolume**: Hoeveelheid verricht product in een prestatieperiode.
* **Eenheid**: De eenheid waarin de zorg/behandeling wordt uitgedrukt.
* **ProductTarief**: Tarief van een individueel product.
* **IngediendBedrag**: Het bedrag dat gedeclareerd wordt.

---

## Samenvatting **WMO325.xsd**

### 1. Schema‑metadata

- **targetNamespace**: `http://www.istandaarden.nl/iwmo/3_2/wmo325/schema`
- **elementFormDefault**: `qualified`

### Imports/Includes

- import → `http://www.istandaarden.nl/iwmo/3_2/basisschema/schema` (schemaLocation: basisschema.xsd)

### 2. Globale elementen

- `Bericht` : type `wmo325:Root`

### 3. ComplexTypes

### Root

*Beschrijving*: Bericht met retourinformatie voor declaratie Wmo-hulp.

| Child-element | Type | Card. |
| --- | --- | --- |
| Header | wmo325:Header | 1..1 |
| DeclaratieAntwoord | wmo325:DeclaratieAntwoord | 0..1 |

### Header

| Child-element | Type | Card. |
| --- | --- | --- |
| BerichtCode | ref | 1..1 |
| BerichtVersie | ref | 1..1 |
| BerichtSubversie | ref | 1..1 |
| Afzender | iwmo:LDT_Gemeente | 1..1 |
| Ontvanger | iwmo:LDT_AgbCode | 1..1 |
| BerichtIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsdVersie | iwmo:CDT_XsdVersie | 1..1 |
| DeclaratieIdentificatie | iwmo:CDT_BerichtIdentificatie | 1..1 |
| XsltVersie | iwmo:LDT_Versie | 0..1 |
| XsdVersieDeclaratie | iwmo:CDT_XsdVersie | 1..1 |
| RetourCodes | wmo325:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **BerichtCode**: Code ter identificatie van een soort bericht.
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
| RetourCode | iwmo:LDT_RetourCode | 1..unbounded |

**Omschrijving child‑elementen**
* **RetourCode**: Gecodeerde aanduiding in een retourbericht van het resultaat van de beoordeling van een (deel van het) ontvangen bericht.

### DeclaratieAntwoord

*Beschrijving*: Gegevens over het antwoord op een ingediende declaratie.

| Child-element | Type | Card. |
| --- | --- | --- |
| DeclaratieNummer | iwmo:LDT_IdentificatieDeclaratie | 1..1 |
| TotaalIngediendBedrag | iwmo:CDT_TotaalBedragMetDC | 1..1 |
| TotaalToegekendBedrag | iwmo:CDT_TotaalBedragMetDC | 1..1 |
| Clienten | wmo325:Clienten | 0..1 |
| RetourCodes | wmo325:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **DeclaratieNummer**: Unieke identificatie van een declaratie
* **TotaalIngediendBedrag**: Het bedrag dat in zijn totaliteit gedeclareerd is.
* **TotaalToegekendBedrag**: Het bedrag dat in zijn totaliteit toegekend is.

### Clienten

| Child-element | Type | Card. |
| --- | --- | --- |
| Client | wmo325:Client | 1..unbounded |

### Client

| Child-element | Type | Card. |
| --- | --- | --- |
| Bsn | iwmo:LDT_BurgerServicenummer | 1..1 |
| Prestaties | wmo325:Prestaties | 1..1 |
| RetourCodes | wmo325:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **Bsn**: Een door de overheid toegekend identificerend nummer in het kader van het vereenvoudigen van het contact tussen overheid en burgers en het verminderen van de administratieve lasten.

### Prestaties

| Child-element | Type | Card. |
| --- | --- | --- |
| Prestatie | wmo325:Prestatie | 1..unbounded |

### Prestatie

| Child-element | Type | Card. |
| --- | --- | --- |
| ProductReferentie | iwmo:CDT_Referentie | 1..1 |
| ToewijzingNummer | iwmo:LDT_Nummer | 1..1 |
| ProductCategorie | iwmo:LDT_ProductCategorie | 1..1 |
| ProductCode | iwmo:LDT_ProductCode | 1..1 |
| ProductPeriode | iwmo:CDT_GeslotenPeriode | 1..1 |
| GeleverdVolume | iwmo:LDT_Volume | 1..1 |
| Eenheid | iwmo:LDT_Eenheid | 1..1 |
| ProductTarief | iwmo:LDT_Bedrag | 0..1 |
| IngediendBedrag | iwmo:CDT_BedragMetDC | 1..1 |
| RetourCodes | wmo325:RetourCodes | 1..1 |

**Omschrijving child‑elementen**
* **ProductReferentie**: Identificerende referentie van de declaratie van een zorg - of ondersteuningsprestatie.
* **ToewijzingNummer**: Identificerend nummer van de opdracht om een zorg - of ondersteuningsproduct te leveren, zoals vastgesteld door de gemeente.
* **ProductCategorie**: Gecodeerde aanduiding van hoofdcategorieen van producten in het kader van de Wet maatschappelijke ondersteuning (Wmo).
* **ProductCode**: Gecodeerde aanduiding van producten in het kader van de Wet maatschappelijke ondersteuning (Wmo).
* **ProductPeriode**: Periode binnen de declaratie-/factuurperiode waarop het product feitelijk is of wordt uitgevoerd.
* **GeleverdVolume**: Hoeveelheid verricht product in een prestatieperiode.
* **Eenheid**: De eenheid waarin de zorg/behandeling wordt uitgedrukt.
* **ProductTarief**: Tarief van een individueel product.
* **IngediendBedrag**: Het bedrag dat gedeclareerd wordt.