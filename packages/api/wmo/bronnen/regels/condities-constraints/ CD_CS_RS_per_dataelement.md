# Condities constraints per data-element bericht

Versie: 1.0
Status: In behandeling
Auteur: Zorginstituut Nederland
Publicatiedatum: 29 september 2022
Type document: Brondocument Wmo-agent

## Inleiding voor AI-agent

Dit document beschrijft de condities (CD), constraints (CS) en restricties (RS) die gelden binnen het berichtenverkeer van de Wmo (iWmo), release 3.2.0. 

De condities, constraints en restricties vormen een onderdeel van de regels van het berichtenverkeer iWmo en gelden per berichtelement of een datatype.

**Conditie**

Een conditie is een technisch te controleren voorwaarde waaronder een (bericht)element gevuld moet of mag worden.

- Een conditie is van toepassing op een (bericht)element.

**Constraint**

Een constraint is een beperking van de toegestane waarden van een (bericht)element of logisch datatype. Een constraint is altijd te controleren binnen het bericht en is daarmee niet berichtoverstijgend. Een constraint die een formaatbeperking uitdrukt van een logisch datatype noemen we ook wel een restrictie.

- Een constraint is van toepassing op een (bericht)element of datatype.

**Restrictie**

Een restrictie beschrijft hoe een data-element in een bericht moet worden gevuld, bijvoorbeeld de maximale lengte of het invullen van de datum zonder tijdzone.

Het document dient als **naslagwerk en validatiebron** voor AI-agenten die vragen moeten beantwoorden, tekst moeten analyseren of processtappen moeten controleren binnen het domein van jeugdhulp, gemeenten en zorgaanbieders.

**Gebruik voor AI-agenten:**

- Iedere conditie, constraint of restrictie is voorzien van een unieke code (zoals CD007, CS139, RS017),en een toelichting.
- De regels vormen de basis voor correcte administratieve verwerking, gegevensuitwisseling en procesondersteuning binnen iWmo.
- Verwijs bij vragen altijd naar de relevante regelcode voor onderbouwing.
- Geef altijd de exacte definitie van een conditie, constraint of restrictie zoals deze in dit document staat. Geef nooit een eigen interpretatie van een regel.

**Brondocumenten**

Condities (CD-regels): https://informatiemodel.istandaarden.nl/informatiemodel/iWmo/3.2/regels/conditie/#regel

Constraints (CS-regels): https://informatiemodel.istandaarden.nl/informatiemodel/iWmo/3.2/regels/constraint/#regel

## Tabel condities, constraints, restricties per berichtelement

| Bericht | Berichtklasse | Berichtelement/Datatype | CDT-element | CDT-element | Sleutelelement | Codelijst | Regelcode | Regel | Soortregel | Retourcode |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WMO Retour | Header | IdentificatieRetour_IdentificatieBericht |  |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO Retour | Header | IdentificatieRetour_IdentificatieBericht |  |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO Retour | Header | DagtekeningRetour_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO Retour | Header | XsltVersie_Versie |  |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO Retour | Header | XsdVersieRetour_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO Retour | Header | XsdVersieRetour_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO Retour | RetourCodes | RetourCode_RetourCode |  |  |  | WJ001 | RS011 | Maximale lengte 4 posities | Restrictie |  |
| WMO301 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO301 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO301 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO301 | Client | Geboortedatum_Geboortedatum | Datum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | Client | Geboortedatum_Geboortedatum | DatumGebruik |  |  |  | CS139 | Voor Geboortedatum geldt dat DatumGebruik en Datum met elkaar in overeenstemming moeten zijn. | Constraint | 0001 |
| WMO301 | Client | Geboortedatum_Geboortedatum | DatumGebruik_DatumGebruik |  |  | COD170 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Client | Geslacht_Geslacht |  |  |  | COD046 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Client | Naam |  |  |  |  | CS318 | NaamGebruik 6 (Niet-natuurlijk persoon) niet vullen. | Constraint | 0001 |
| WMO301 | Client | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Partnernaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Partnernaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Partnernaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Partnernaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Voornamen_Naam |  |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Voornamen_Naam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Voorletters_Voorletters |  |  |  | RS013 | Maximale lengte 6 posities | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | Voorletters_Voorletters |  |  |  | RS045 | Aaneengesloten vullen (zonder punten of spaties). | Restrictie |  |
| WMO301 | Client | Naam_VolledigeNaam | NaamGebruik |  |  |  | CS050 | Als Partnernaam gevuld is, dan NaamGebruik vullen met waarde 1, 2, 3 of 4. Anders waarde 1 of 6 vullen. | Constraint | 0001 |
| WMO301 | Client | Naam_VolledigeNaam | NaamGebruik_NaamGebruik |  |  | COD700 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Client | Communicatie_Communicatie | Vorm_Communicatievorm |  |  | COD747 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Client | Communicatie_Communicatie | Taal |  |  |  | CD007 | Als Communicatie / Vorm de waarde 1 (tolk taal) heeft, dan verplicht vullen, anders leeglaten. | Conditie | 0001 |
| WMO301 | Client | Communicatie_Communicatie | Taal_Taal |  |  |  | RS021 | Maximale lengte 25 posities | Restrictie |  |
| WMO301 | Client | Communicatie_Communicatie | Taal_Taal |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Client | JuridischeStatus_JuridischeStatus |  |  |  | WJ232 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | Client | WettelijkeVertegenwoordiging_WettelijkeVertegenwoordiging |  |  |  | WJ003 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | Client | Commentaar_Commentaar |  |  |  |  | RS031 | Commentaarvelden niet leeg. | Restrictie |  |
| WMO301 | Contact | Soort_AdresSoort |  |  | ja | COD757 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis |  |  |  | CD025 | Als Adres / LandCode de waarde NL (Nederland) heeft, dan verplicht vullen. | Conditie | 0001 |
| WMO301 | Contact | Adres_Adres | Huis_Huis | Huisnummer_Huisnummer |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis_Huis | Huisnummer_Huisnummer |  |  | RS004 | Maximale waarde 99999 (5*9) | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis_Huis | Huisletter_Huisletter |  |  | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis_Huis | Huisletter_Huisletter |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis_Huis | HuisnummerToevoeging_HuisnummerToevoeging |  |  | RS011 | Maximale lengte 4 posities | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis_Huis | HuisnummerToevoeging_HuisnummerToevoeging |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Huis_Huis | AanduidingWoonadres_AanduidingWoonadres |  | NUM061 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Postcode |  |  |  | CD034 | Als Soort adres de waarde 1 (BRP-adres) of 3 (verblijfadres) heeft, dan verplicht vullen. | Conditie | 0001 |
| WMO301 | Contact | Adres_Adres | Postcode |  |  |  | CS089 | Als LandCode de waarde NL (Nederland) heeft, dan moet het formaat overeenkomen met dat van een Nederlandse postcode. | Constraint | 0001 |
| WMO301 | Contact | Adres_Adres | Postcode_Postcode |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Postcode_Postcode |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Straatnaam_Straatnaam |  |  |  | RS020 | Maximale lengte 24 posities | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Straatnaam_Straatnaam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Plaatsnaam_Plaatsnaam |  |  |  | RS026 | Maximale lengte 80 posities | Restrictie |  |
| WMO301 | Contact | Adres_Adres | Plaatsnaam_Plaatsnaam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Adres_Adres | LandCode |  |  |  | CD005 | Als Postcode gevuld is, dan verplicht vullen, anders leeg laten. | Conditie | 0001 |
| WMO301 | Contact | Adres_Adres | LandCode_LandCode |  |  | COD032 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | Contact | Organisatie_Organisatienaam |  |  |  |  | RS023 | Maximale lengte 35 posities | Restrictie |  |
| WMO301 | Contact | Organisatie_Organisatienaam |  |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon01_Telefoon | Telefoonnummer_Telefoonnummer |  |  | RS018 | Maximale lengte 15 posities | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon01_Telefoon | Telefoonnummer_Telefoonnummer |  |  | RS046 | Aaneengesloten vullen met cijfers. | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon01_Telefoon | Landnummer_Landnummer |  |  | RS011 | Maximale lengte 4 posities | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon01_Telefoon | Landnummer_Landnummer |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon02_Telefoon | Telefoonnummer_Telefoonnummer |  |  | RS018 | Maximale lengte 15 posities | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon02_Telefoon | Telefoonnummer_Telefoonnummer |  |  | RS046 | Aaneengesloten vullen met cijfers. | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon02_Telefoon | Landnummer_Landnummer |  |  | RS011 | Maximale lengte 4 posities | Restrictie |  |
| WMO301 | Contact | Telefoon_Telefoonnummers | Telefoon02_Telefoon | Landnummer_Landnummer |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Emailadres_Emailadres |  |  |  |  | RS026 | Maximale lengte 80 posities | Restrictie |  |
| WMO301 | Contact | Emailadres_Emailadres |  |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Contact | Periode |  |  |  |  | CD009 | Alleen als Soort adres de waarde 04 (tijdelijk adres) heeft, is vullen toegestaan. | Conditie | 0001 |
| WMO301 | Contact | Periode_OpenPeriode | Begindatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | Contact | Periode_OpenPeriode | Einddatum |  |  |  | CS003 | Indien van toepassing vullen met een waarde die groter is dan, of gelijk is aan de Begindatum (of Ingangsdatum) van de aangeduide periode. | Constraint | 0001 |
| WMO301 | Contact | Periode_OpenPeriode | Einddatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | Header | Afzender_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO301 | Header | Ontvanger_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO301 | Header | Ontvanger_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO301 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO301 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO301 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO301 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO301 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO301 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO301 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO301 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO301 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO301 | Relatie | Nummer_Persoonsid |  |  | ja |  | RS019 | Maximale lengte 20 posities | Restrictie |  |
| WMO301 | Relatie | Nummer_Persoonsid |  |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Relatie | Volgorde_RelatieVolgorde |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | Relatie | Volgorde_RelatieVolgorde |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO301 | Relatie | Soort_SoortRelatie |  |  |  | COD472 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | Relatie | Geboortedatum_Geboortedatum | Datum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | Relatie | Geboortedatum_Geboortedatum | DatumGebruik |  |  |  | CS139 | Voor Geboortedatum geldt dat DatumGebruik en Datum met elkaar in overeenstemming moeten zijn. | Constraint | 0001 |
| WMO301 | Relatie | Geboortedatum_Geboortedatum | DatumGebruik_DatumGebruik |  |  | COD170 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Relatie | Geslacht_Geslacht |  |  |  | COD046 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Partnernaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Partnernaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Partnernaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Partnernaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Voornamen_Naam |  |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Voornamen_Naam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Voorletters_Voorletters |  |  |  | RS013 | Maximale lengte 6 posities | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | Voorletters_Voorletters |  |  |  | RS045 | Aaneengesloten vullen (zonder punten of spaties). | Restrictie |  |
| WMO301 | Relatie | Naam_VolledigeNaam | NaamGebruik |  |  |  | CS050 | Als Partnernaam gevuld is, dan NaamGebruik vullen met waarde 1, 2, 3 of 4. Anders waarde 1 of 6 vullen. | Constraint | 0001 |
| WMO301 | Relatie | Naam_VolledigeNaam | NaamGebruik_NaamGebruik |  |  | COD700 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | ToegewezenProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | ToegewezenProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO301 | ToegewezenProduct | ReferentieAanbieder_Referentie |  |  |  |  | RS024 | Maximale lengte 36 posities | Restrictie |  |
| WMO301 | ToegewezenProduct | ReferentieAanbieder_Referentie |  |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | ToegewezenProduct | Product |  |  |  |  | CD079 | Indien Budget leeg is, dan verplicht vullen | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Product_Product | Categorie_ProductCategorie |  |  |WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | ToegewezenProduct | Product_Product | Code_ProductCode |  |  |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO301 | ToegewezenProduct | Product_Product | Code_ProductCode |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO301 | ToegewezenProduct | Toewijzingsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | ToegewezenProduct | Toewijzingstijd_Tijd |  |  |  |  | RS034 | Tijd vullen zonder tijdszone. | Restrictie |  |
| WMO301 | ToegewezenProduct | Ingangsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | ToegewezenProduct | Einddatum |  |  |  |  | CD075 | Verplicht vullen indien Budget gevuld is | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Einddatum |  |  |  |  | CD076 | Verplicht vullen indien Frequentie waarde 2 (per week) | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Einddatum |  |  |  |  | CS003 | Indien van toepassing vullen met een waarde die groter is dan, of gelijk is aan de Begindatum (of Ingangsdatum) van de aangeduide periode. | Constraint | 0001 |
| WMO301 | ToegewezenProduct | Einddatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO301 | ToegewezenProduct | RedenWijziging |  |  |  |  | CS335 | RedenWijziging 13 (verwijderd) mag alleen gebruikt worden indien de ingangsdatum gelijk is aan de einddatum | Constraint | 0001 |
| WMO301 | ToegewezenProduct | RedenWijziging |  |  |  |  | CS336 | 01 (Administratieve correctie (vervallen)) niet gebruiken | Constraint | 0001 |
| WMO301 | ToegewezenProduct | RedenWijziging_RedenWijziging |  |  |  | WMO002 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | ToegewezenProduct | Omvang |  |  |  |  | CD041 | Indien Code in Product gevuld is, verplicht vullen. | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Omvang |  |  |  |  | CD077 | Indien Budget gevuld is, dan leeg laten | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Omvang |  |  |  |  | CD080 | Indien Code in Product leeg is en Einddatum van het ToegewezenProduct groter dan 31-12-2020 of leeg is, dan leeg laten | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Omvang |  |  |  |  | CS338 | Indien eenheid de waarde 14, 16, 83 of 84 heeft en Einddatum groter dan 31-12-2020 of leeg is, dan Frequentie vullen met de waarde 2 , 4 of 6 | Constraint | 0001 |
| WMO301 | ToegewezenProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | ToegewezenProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO301 | ToegewezenProduct | Omvang_Omvang | Eenheid_Eenheid |  |  | WJ756 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO301 | ToegewezenProduct | Omvang_Omvang | Frequentie_Frequentie |  |  | WMO757 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO301 | ToegewezenProduct | Commentaar_Commentaar |  |  |  |  | RS031 | Commentaarvelden niet leeg. | Restrictie |  |
| WMO301 | ToegewezenProduct | Budget |  |  |  |  | CD078 | Indien Omvang gevuld is, dan leeg laten | Conditie | 0001 |
| WMO301 | ToegewezenProduct | Budget_Budget |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO301 | ToegewezenProduct | Budget_Budget |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO305 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO305 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO305 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO305 | Client | Geboortedatum_Geboortedatum | Datum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO305 | Client | Geboortedatum_Geboortedatum | DatumGebruik |  |  |  | CS139 | Voor Geboortedatum geldt dat DatumGebruik en Datum met elkaar in overeenstemming moeten zijn. | Constraint | 0001 |
| WMO305 | Client | Geboortedatum_Geboortedatum | DatumGebruik_DatumGebruik |  |  | COD170 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO305 | Client | Geslacht_Geslacht |  |  |  | COD046 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Voornamen_Naam |  |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Voornamen_Naam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Voorletters_Voorletters |  |  |  | RS013 | Maximale lengte 6 posities | Restrictie |  |
| WMO305 | Client | Naam_VerkorteNaam | Voorletters_Voorletters |  |  |  | RS045 | Aaneengesloten vullen (zonder punten of spaties). | Restrictie |  |
| WMO305 | Header | Afzender_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO305 | Header | Afzender_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO305 | Header | Ontvanger_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO305 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO305 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO305 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO305 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO305 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO305 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO305 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO305 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO305 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO305 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO305 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO305 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO305 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO305 | StartProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO305 | StartProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO305 | StartProduct | Product_Product | Categorie_ProductCategorie |  | ja | WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO305 | StartProduct | Product_Product | Code_ProductCode |  | ja |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO305 | StartProduct | Product_Product | Code_ProductCode |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO305 | StartProduct | ToewijzingIngangsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO305 | StartProduct | Begindatum_Datum |  |  | ja |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO305 | StartProduct | StatusAanlevering |  |  |  |  | CS058 | 1 (eerste aanlevering) of 3 (verwijderen aanlevering) vullen. | Constraint | 0001 |
| WMO305 | StartProduct | StatusAanlevering_StatusAanlevering |  |  |  | COD467 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO307 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO307 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO307 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO307 | Client | Geboortedatum_Geboortedatum | Datum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO307 | Client | Geboortedatum_Geboortedatum | DatumGebruik |  |  |  | CS139 | Voor Geboortedatum geldt dat DatumGebruik en Datum met elkaar in overeenstemming moeten zijn. | Constraint | 0001 |
| WMO307 | Client | Geboortedatum_Geboortedatum | DatumGebruik_DatumGebruik |  |  | COD170 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO307 | Client | Geslacht_Geslacht |  |  |  | COD046 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Voornamen_Naam |  |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Voornamen_Naam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Voorletters_Voorletters |  |  |  | RS013 | Maximale lengte 6 posities | Restrictie |  |
| WMO307 | Client | Naam_VerkorteNaam | Voorletters_Voorletters |  |  |  | RS045 | Aaneengesloten vullen (zonder punten of spaties). | Restrictie |  |
| WMO307 | Header | Afzender_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO307 | Header | Afzender_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO307 | Header | Ontvanger_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO307 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO307 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO307 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO307 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO307 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO307 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO307 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO307 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO307 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO307 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO307 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO307 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO307 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO307 | StopProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO307 | StopProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO307 | StopProduct | Product_Product | Categorie_ProductCategorie |  | ja |WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO307 | StopProduct | Product_Product | Code_ProductCode |  | ja |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO307 | StopProduct | Product_Product | Code_ProductCode |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO307 | StopProduct | ToewijzingIngangsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO307 | StopProduct | Begindatum_Datum |  |  | ja |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO307 | StopProduct | StatusAanlevering |  |  |  |  | CS058 | 1 (eerste aanlevering) of 3 (verwijderen aanlevering) vullen. | Constraint | 0001 |
| WMO307 | StopProduct | StatusAanlevering_StatusAanlevering |  |  |  | COD467 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO307 | StopProduct | RedenBeeindiging_RedenBeeindiging |  |  | ja | WMO588 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO307 | StopProduct | Einddatum_Datum |  |  | ja |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO315 | AangevraagdProduct | BeschikkingNummer_Nummer |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO315 | AangevraagdProduct | BeschikkingNummer_Nummer |  |  |  |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO315 | AangevraagdProduct | Product |  |  |  |  | CD079 | Indien Budget leeg is, dan verplicht vullen | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Product_Product | Categorie_ProductCategorie |  |  |WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | Product_Product | Code_ProductCode |  |  |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | Product_Product | Code_ProductCode |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | AangevraagdProduct | ToewijzingIngangsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO315 | AangevraagdProduct | ToewijzingEinddatum |  |  |  |  | CD075 | Verplicht vullen indien Budget gevuld is | Conditie | 0001 |
| WMO315 | AangevraagdProduct | ToewijzingEinddatum |  |  |  |  | CD076 | Verplicht vullen indien Frequentie waarde 2 (per week) | Conditie | 0001 |
| WMO315 | AangevraagdProduct | ToewijzingEinddatum |  |  |  |  | CS003 | Indien van toepassing vullen met een waarde die groter is dan, of gelijk is aan de Begindatum (of Ingangsdatum) van de aangeduide periode. | Constraint | 0001 |
| WMO315 | AangevraagdProduct | ToewijzingEinddatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO315 | AangevraagdProduct | Omvang |  |  |  |  | CD041 | Indien Code in Product gevuld is, verplicht vullen. | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Omvang |  |  |  |  | CD077 | Indien Budget gevuld is, dan leeg laten | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Omvang |  |  |  |  | CD095 | Indien Code in AangevraagdProduct leeg is en ToewijzingEinddatum van het AangevraagdProduct groter dan 31-12-2020 of leeg is, dan leeg laten | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Omvang |  |  |  |  | CS343 | Indien eenheid de waarde 14, 16, 83 of 84 heeft en ToewijzingEinddatum is groter dan 31-12-2020 of leeg, dan Frequentie vullen met waarde 2, 4 of 6 | Constraint | 0001 |
| WMO315 | AangevraagdProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO315 | AangevraagdProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO315 | AangevraagdProduct | Omvang_Omvang | Eenheid_Eenheid |  |  | WJ756 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | Omvang_Omvang | Frequentie_Frequentie |  |  | WMO757 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO315 | AangevraagdProduct | ReferentieAanbieder_Referentie |  |  | ja |  | RS024 | Maximale lengte 36 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | ReferentieAanbieder_Referentie |  |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | AangevraagdProduct | BeschikkingIngangsdatum |  |  |  |  | CD043 | Indien Beschikkingnummer gevuld is, verplicht vullen, anders leeg laten. | Conditie | 0001 |
| WMO315 | AangevraagdProduct | BeschikkingIngangsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | Type_TypeVerwijzer |  |  | COD327 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | Naam |  |  |  | CD066 | Als type verwijzer gelijk is aan 02, 03, 04 of 05 en ZorgverlenerCode is gevuld, dan is Naamverwijzer leeg. | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | Naam |  |  |  | CD067 | Als type verwijzer gelijk is aan 02, 03, 04 of 05 en ZorgverlenerCode is leeg, dan is Naamverwijzer gevuld. | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | Naam_NaamVerwijzer |  |  |  | RS025 | Maximale lengte 64 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | Naam_NaamVerwijzer |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | ZorgverlenerCode |  |  |  | CD068 | Als type verwijzer ongelijk is aan 02, 03, 04 of 05, dan is ZorgverlenerCode leeg. | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | ZorgverlenerCode_AgbCode |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO315 | AangevraagdProduct | Verwijzer_Verwijzer | ZorgverlenerCode_AgbCode |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO315 | AangevraagdProduct | Raamcontract_JaNee |  |  |  | COD260 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO315 | AangevraagdProduct | Commentaar_Commentaar |  |  |  |  | RS031 | Commentaarvelden niet leeg. | Restrictie |  |
| WMO315 | AangevraagdProduct | Budget |  |  |  |  | CD078 | Indien Omvang gevuld is, dan leeg laten | Conditie | 0001 |
| WMO315 | AangevraagdProduct | Budget_Budget |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO315 | AangevraagdProduct | Budget_Budget |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO315 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO315 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO315 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO315 | Client | Geboortedatum_Geboortedatum | Datum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO315 | Client | Geboortedatum_Geboortedatum | DatumGebruik |  |  |  | CS139 | Voor Geboortedatum geldt dat DatumGebruik en Datum met elkaar in overeenstemming moeten zijn. | Constraint | 0001 |
| WMO315 | Client | Geboortedatum_Geboortedatum | DatumGebruik_DatumGebruik |  |  | COD170 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO315 | Client | Geslacht_Geslacht |  |  |  | COD046 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Achternaam_Naam |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS016 | Maximale lengte 10 posities | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Geslachtsnaam_Achternaam | Voorvoegsel_Voorvoegsel |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Voornamen_Naam |  |  |  | RS028 | Maximale lengte 200 posities | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Voornamen_Naam |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Voorletters_Voorletters |  |  |  | RS013 | Maximale lengte 6 posities | Restrictie |  |
| WMO315 | Client | Naam_VerkorteNaam | Voorletters_Voorletters |  |  |  | RS045 | Aaneengesloten vullen (zonder punten of spaties). | Restrictie |  |
| WMO315 | Client | GezagsdragerBekend_JaNee |  |  |  | COD260 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO315 | Client | Commentaar_Commentaar |  |  |  |  | RS031 | Commentaarvelden niet leeg. | Restrictie |  |
| WMO315 | Header | Afzender_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO315 | Header | Afzender_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO315 | Header | Ontvanger_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO315 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO315 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO315 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO315 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO315 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO315 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO315 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO315 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO315 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO315 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO315 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO315 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO315 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO317 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO317 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO317 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO317 | Header | Afzender_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO317 | Header | Afzender_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO317 | Header | Ontvanger_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO317 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO317 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO317 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO317 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO317 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO317 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO317 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO317 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO317 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO317 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO317 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO317 | NieuwProduct | Product |  |  | ja |  | CD079 | Indien Budget leeg is, dan verplicht vullen | Conditie | 0001 |
| WMO317 | NieuwProduct | Product_Product | Categorie_ProductCategorie |  | ja |WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO317 | NieuwProduct | Product_Product | Code_ProductCode |  | ja |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO317 | NieuwProduct | Product_Product | Code_ProductCode |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO317 | NieuwProduct | GewensteIngangsdatum_Datum |  |  | ja |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO317 | NieuwProduct | Einddatum |  |  |  |  | CD075 | Verplicht vullen indien Budget gevuld is | Conditie | 0001 |
| WMO317 | NieuwProduct | Einddatum |  |  |  |  | CD076 | Verplicht vullen indien Frequentie waarde 2 (per week) | Conditie | 0001 |
| WMO317 | NieuwProduct | Einddatum |  |  |  |  | CS003 | Indien van toepassing vullen met een waarde die groter is dan, of gelijk is aan de Begindatum (of Ingangsdatum) van de aangeduide periode. | Constraint | 0001 |
| WMO317 | NieuwProduct | Einddatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO317 | NieuwProduct | Omvang |  |  |  |  | CD041 | Indien Code in Product gevuld is, verplicht vullen. | Conditie | 0001 |
| WMO317 | NieuwProduct | Omvang |  |  |  |  | CD077 | Indien Budget gevuld is, dan leeg laten | Conditie | 0001 |
| WMO317 | NieuwProduct | Omvang |  |  |  |  | CD096 | Indien Code in NieuwProduct leeg is en Einddatum groter dan 31-12-2020 of leeg is, dan leeg laten | Conditie | 0001 |
| WMO317 | NieuwProduct | Omvang |  |  |  |  | CS338 | Indien eenheid de waarde 14, 16, 83 of 84 heeft en Einddatum groter dan 31-12-2020 of leeg is, dan Frequentie vullen met de waarde 2 , 4 of 6 | Constraint | 0001 |
| WMO317 | NieuwProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | NieuwProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO317 | NieuwProduct | Omvang_Omvang | Eenheid_Eenheid |  |  | WJ756 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO317 | NieuwProduct | Omvang_Omvang | Frequentie_Frequentie |  |  | WMO757 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO317 | NieuwProduct | Budget |  |  |  |  | CD078 | Indien Omvang gevuld is, dan leeg laten | Conditie | 0001 |
| WMO317 | NieuwProduct | Budget_Budget |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | NieuwProduct | Budget_Budget |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO317 | OngewijzigdProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | OngewijzigdProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO317 | TeWijzigenProduct | GewensteIngangsdatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO317 | TeWijzigenProduct | Einddatum |  |  |  |  | CD075 | Verplicht vullen indien Budget gevuld is | Conditie | 0001 |
| WMO317 | TeWijzigenProduct | Einddatum |  |  |  |  | CD076 | Verplicht vullen indien Frequentie waarde 2 (per week) | Conditie | 0001 |
| WMO317 | TeWijzigenProduct | Einddatum |  |  |  |  | CS003 | Indien van toepassing vullen met een waarde die groter is dan, of gelijk is aan de Begindatum (of Ingangsdatum) van de aangeduide periode. | Constraint | 0001 |
| WMO317 | TeWijzigenProduct | Einddatum_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO317 | TeWijzigenProduct | Omvang |  |  |  |  | CD077 | Indien Budget gevuld is, dan leeg laten | Conditie | 0001 |
| WMO317 | TeWijzigenProduct | Omvang |  |  |  |  | CS338 | Indien eenheid de waarde 14, 16, 83 of 84 heeft en Einddatum groter dan 31-12-2020 of leeg is, dan Frequentie vullen met de waarde 2 , 4 of 6 | Constraint | 0001 |
| WMO317 | TeWijzigenProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | TeWijzigenProduct | Omvang_Omvang | Volume_Volume |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO317 | TeWijzigenProduct | Omvang_Omvang | Eenheid_Eenheid |  |  | WJ756 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO317 | TeWijzigenProduct | Omvang_Omvang | Frequentie_Frequentie |  |  | WMO757 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO317 | TeWijzigenProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | TeWijzigenProduct | ToewijzingNummer_Nummer |  |  | ja |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO317 | TeWijzigenProduct | Budget |  |  |  |  | CD078 | Indien Omvang gevuld is, dan leeg laten | Conditie | 0001 |
| WMO317 | TeWijzigenProduct | Budget_Budget |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO317 | TeWijzigenProduct | Budget_Budget |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO317 | Verzoek | ReferentieAanbieder_Referentie |  |  | ja |  | RS024 | Maximale lengte 36 posities | Restrictie |  |
| WMO317 | Verzoek | ReferentieAanbieder_Referentie |  |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO317 | Verzoek | RedenVerzoek_RedenVerzoek |  |  |  | WJ758 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO319 | Antwoord | ReferentieAanbieder_Referentie |  |  | ja |  | RS024 | Maximale lengte 36 posities | Restrictie |  |
| WMO319 | Antwoord | ReferentieAanbieder_Referentie |  |  | ja |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO319 | Antwoord | VerzoekAntwoord_VerzoekAntwoord |  |  | ja | WJ760 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO319 | Antwoord | RedenAfwijzingVerzoek |  |  |  |  | CD085 | Als VerzoekAntwoord de waarde 1 (Verzoek afgewezen) heeft, dan vullen | Conditie | 0001 |
| WMO319 | Antwoord | RedenAfwijzingVerzoek |  |  |  |  | CD086 | Als VerzoekAntwoord de waarde 2 (Aanvraag in onderzoek) heeft, dan leeg laten | Conditie | 0001 |
| WMO319 | Antwoord | RedenAfwijzingVerzoek_RedenAfwijzingVerzoek |  |  |  | WJ759 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO319 | Header | Afzender_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO319 | Header | Ontvanger_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO319 | Header | Ontvanger_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO319 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO319 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO319 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO319 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO319 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO319 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO319 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO319 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO319 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO319 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO319 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO319 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO319 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO319 | Woonplaatsbeginsel | Gemeente_Gemeente |  |  | ja |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO323 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO323 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO323 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO323 | Declaratie | DeclaratieNummer |  |  | ja |  | CS319 | Aaneengesloten vullen met cijfers en/of letters | Constraint |  |
| WMO323 | Declaratie | DeclaratieNummer_IdentificatieDeclaratie |  |  | ja |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO323 | Declaratie | DeclaratiePeriode |  |  |  |  | CS100 | Vullen met een datum die groter dan of gelijk is aan 01-01-2021 | Constraint | 0001 |
| WMO323 | Declaratie | DeclaratiePeriode |  |  |  |  | CS340 | De periode is exact gelijk aan 1 hele kalendermaand | Constraint | 0001 |
| WMO323 | Declaratie | DeclaratiePeriode_GeslotenPeriode | Begindatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO323 | Declaratie | DeclaratiePeriode_GeslotenPeriode | Einddatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO323 | Declaratie | DeclaratieDagtekening_Datum |  |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO323 | Declaratie | TotaalIngediendBedrag_TotaalBedragMetDC | TotaalBedrag_TotaalBedrag |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Declaratie | TotaalIngediendBedrag_TotaalBedragMetDC | TotaalBedrag_TotaalBedrag |  |  |  | RS040 | Maximale waarde 999999999999 (12*9) | Restrictie |  |
| WMO323 | Declaratie | TotaalIngediendBedrag_TotaalBedragMetDC | DebetCredit |  |  |  | CS325 | Indien (Totaal)Bedrag de waarde 0 heeft, dan DebetCredit vullen met D (Debet). | Constraint | 0001 |
| WMO323 | Declaratie | TotaalIngediendBedrag_TotaalBedragMetDC | DebetCredit_DebetCredit |  |  | COD043 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO323 | Header | Afzender_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO323 | Header | Afzender_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO323 | Header | Ontvanger_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO323 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO323 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO323 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO323 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO323 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO323 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO323 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO323 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO323 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO323 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO323 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO323 | Prestatie | ProductReferentie_Referentie | ReferentieNummer_ReferentieNummer |  | ja |  | RS019 | Maximale lengte 20 posities | Restrictie |  |
| WMO323 | Prestatie | ProductReferentie_Referentie | VorigReferentieNummer |  | ja |  | CD060 | Verplicht vullen indien DebetCredit bij het ingediende bedrag de waarde C (credit) heeft, anders leeg laten. | Conditie | 0001 |
| WMO323 | Prestatie | ProductReferentie_Referentie | VorigReferentieNummer_ReferentieNummer |  | ja |  | RS019 | Maximale lengte 20 posities | Restrictie |  |
| WMO323 | Prestatie | ToewijzingNummer_Nummer |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Prestatie | ToewijzingNummer_Nummer |  |  |  |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO323 | Prestatie | ProductCategorie_ProductCategorie |  |  |  |WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO323 | Prestatie | ProductCode_ProductCode |  |  |  |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO323 | Prestatie | ProductCode_ProductCode |  |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO323 | Prestatie | ProductPeriode |  |  |  |  | CS100 | Vullen met een datum die groter dan of gelijk is aan 01-01-2021 | Constraint | 0001 |
| WMO323 | Prestatie | ProductPeriode |  |  |  |  | CS337 | Einddatum in de ProductPeriode vullen met een datum die valt in dezelfde kalendermaand en jaar als de Begindatum van de ProductPeriode | Constraint | 0001 |
| WMO323 | Prestatie | ProductPeriode_GeslotenPeriode | Begindatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO323 | Prestatie | ProductPeriode_GeslotenPeriode | Einddatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO323 | Prestatie | GeleverdVolume_Volume |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Prestatie | GeleverdVolume_Volume |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO323 | Prestatie | Eenheid_Eenheid |  |  |  | WJ756 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO323 | Prestatie | ProductTarief |  |  |  |  | CD087 | Als eenheid ongelijk is aan 83 (euro’s) dan verplicht vullen, anders leeg laten. | Conditie | 0001 |
| WMO323 | Prestatie | ProductTarief_Bedrag |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Prestatie | ProductTarief_Bedrag |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO323 | Prestatie | IngediendBedrag |  |  |  |  | CS339 | Indien Eenheid de waarde 83 (euro’s) heeft, moet IngediendBedrag gelijk zijn aan GeleverdVolume. | Constraint | 0001 |
| WMO323 | Prestatie | IngediendBedrag_BedragMetDC | Bedrag_Bedrag |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO323 | Prestatie | IngediendBedrag_BedragMetDC | Bedrag_Bedrag |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO323 | Prestatie | IngediendBedrag_BedragMetDC | DebetCredit |  |  |  | CS325 | Indien (Totaal)Bedrag de waarde 0 heeft, dan DebetCredit vullen met D (Debet). | Constraint | 0001 |
| WMO323 | Prestatie | IngediendBedrag_BedragMetDC | DebetCredit_DebetCredit |  |  | COD043 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO325 | Client | Bsn_BurgerServicenummer |  |  | ja |  | CS002 | De waarde moet voldoen aan de 11-proef. | Constraint | 0001 |
| WMO325 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS015 | Maximale lengte 9 posities | Restrictie |  |
| WMO325 | Client | Bsn_BurgerServicenummer |  |  | ja |  | RS037 | Vullen met 9 cijfers. | Restrictie |  |
| WMO325 | DeclaratieAntwoord | DeclaratieNummer_IdentificatieDeclaratie |  |  | ja |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO325 | DeclaratieAntwoord | TotaalIngediendBedrag_TotaalBedragMetDC | TotaalBedrag_TotaalBedrag |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | DeclaratieAntwoord | TotaalIngediendBedrag_TotaalBedragMetDC | TotaalBedrag_TotaalBedrag |  |  |  | RS040 | Maximale waarde 999999999999 (12*9) | Restrictie |  |
| WMO325 | DeclaratieAntwoord | TotaalIngediendBedrag_TotaalBedragMetDC | DebetCredit |  |  |  | CS325 | Indien (Totaal)Bedrag de waarde 0 heeft, dan DebetCredit vullen met D (Debet). | Constraint | 0001 |
| WMO325 | DeclaratieAntwoord | TotaalIngediendBedrag_TotaalBedragMetDC | DebetCredit_DebetCredit |  |  | COD043 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO325 | DeclaratieAntwoord | TotaalToegekendBedrag_TotaalBedragMetDC | TotaalBedrag_TotaalBedrag |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | DeclaratieAntwoord | TotaalToegekendBedrag_TotaalBedragMetDC | TotaalBedrag_TotaalBedrag |  |  |  | RS040 | Maximale waarde 999999999999 (12*9) | Restrictie |  |
| WMO325 | DeclaratieAntwoord | TotaalToegekendBedrag_TotaalBedragMetDC | DebetCredit |  |  |  | CS325 | Indien (Totaal)Bedrag de waarde 0 heeft, dan DebetCredit vullen met D (Debet). | Constraint | 0001 |
| WMO325 | DeclaratieAntwoord | TotaalToegekendBedrag_TotaalBedragMetDC | DebetCredit_DebetCredit |  |  | COD043 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO325 | Header | Afzender_Gemeente |  |  |  |  | RS035 | Vullen met 4 cijfers. | Restrictie |  |
| WMO325 | Header | Ontvanger_AgbCode |  |  |  |  | RS014 | Maximale lengte 8 posities | Restrictie |  |
| WMO325 | Header | Ontvanger_AgbCode |  |  |  |  | RS036 | Vullen met 8 cijfers. | Restrictie |  |
| WMO325 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO325 | Header | BerichtIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO325 | Header | BerichtIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO325 | Header | BerichtCode_BerichtCode |  |  |  |  | RS010 | Maximale lengte 3 posities | Restrictie |  |
| WMO325 | Header | BerichtCode_BerichtCode |  |  |  |  | RS047 | Vullen met BerichtCode volgens de specificatie | Restrictie |  |
| WMO325 | Header | BerichtVersie |  |  |  |  | CS025 | BerichtVersie vullen met 3. | Constraint |  |
| WMO325 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | Header | BerichtVersie_BerichtVersie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO325 | Header | BerichtSubversie |  |  |  |  | CS015 | BerichtSubversie vullen met 2. | Constraint |  |
| WMO325 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | Header | BerichtSubversie_BerichtSubversie |  |  |  |  | RS002 | Maximale waarde 99 | Restrictie |  |
| WMO325 | Header | XsdVersie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO325 | Header | XsdVersie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO325 | Header | DeclaratieIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS017 | Maximale lengte 12 posities | Restrictie |  |
| WMO325 | Header | DeclaratieIdentificatie_BerichtIdentificatie | Identificatie_IdentificatieBericht |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO325 | Header | DeclaratieIdentificatie_BerichtIdentificatie | Dagtekening_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO325 | Header | XsltVersie_Versie |  |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO325 | Header | XsdVersieDeclaratie_XsdVersie | BerichtXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO325 | Header | XsdVersieDeclaratie_XsdVersie | BasisschemaXsdVersie_Versie |  |  |  | RS048 | Vullen met een versienummer bestaande uit drie gehele getallen, gescheiden met punten. | Restrictie |  |
| WMO325 | Prestatie | ProductReferentie_Referentie | ReferentieNummer_ReferentieNummer |  | ja |  | RS019 | Maximale lengte 20 posities | Restrictie |  |
| WMO325 | Prestatie | ProductReferentie_Referentie | VorigReferentieNummer |  | ja |  | CD060 | Verplicht vullen indien DebetCredit bij het ingediende bedrag de waarde C (credit) heeft, anders leeg laten. | Conditie | 0001 |
| WMO325 | Prestatie | ProductReferentie_Referentie | VorigReferentieNummer_ReferentieNummer |  | ja |  | RS019 | Maximale lengte 20 posities | Restrictie |  |
| WMO325 | Prestatie | ToewijzingNummer_Nummer |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | Prestatie | ToewijzingNummer_Nummer |  |  |  |  | RS006 | Maximale waarde 999999999 (9*9) | Restrictie |  |
| WMO325 | Prestatie | ProductCategorie_ProductCategorie |  |  |  |WMO020 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO325 | Prestatie | ProductCode_ProductCode |  |  |  |  | RS012 | Maximale lengte 5 posities | Restrictie |  |
| WMO325 | Prestatie | ProductCode_ProductCode |  |  |  |  | RS033 | Geen lege elementen in XML. | Restrictie |  |
| WMO325 | Prestatie | ProductPeriode_GeslotenPeriode | Begindatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO325 | Prestatie | ProductPeriode_GeslotenPeriode | Einddatum_Datum |  |  |  | RS032 | Datum vullen zonder tijdzone. | Restrictie |  |
| WMO325 | Prestatie | GeleverdVolume_Volume |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | Prestatie | GeleverdVolume_Volume |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO325 | Prestatie | Eenheid_Eenheid |  |  |  | WJ756 | RS009 | Maximale lengte 2 posities | Restrictie |  |
| WMO325 | Prestatie | ProductTarief_Bedrag |  |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | Prestatie | ProductTarief_Bedrag |  |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO325 | Prestatie | IngediendBedrag_BedragMetDC | Bedrag_Bedrag |  |  |  | RS001 | Minimale waarde 0 | Restrictie |  |
| WMO325 | Prestatie | IngediendBedrag_BedragMetDC | Bedrag_Bedrag |  |  |  | RS005 | Maximale waarde 99999999 (8*9) | Restrictie |  |
| WMO325 | Prestatie | IngediendBedrag_BedragMetDC | DebetCredit |  |  |  | CS325 | Indien (Totaal)Bedrag de waarde 0 heeft, dan DebetCredit vullen met D (Debet). | Constraint | 0001 |
| WMO325 | Prestatie | IngediendBedrag_BedragMetDC | DebetCredit_DebetCredit |  |  | COD043 | RS008 | Maximale lengte 1 positie | Restrictie |  |
| WMO325 | RetourCodes | RetourCode_RetourCode |  |  |  | WJ001 | RS011 | Maximale lengte 4 posities | Restrictie |  |
