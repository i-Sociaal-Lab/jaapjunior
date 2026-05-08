# Overzicht codelijsten iJw

## Definitie

Overzicht van veelgebruikte codelijsten binnen het iJw- en iWmo-berichtenverkeer.  
Deze codelijsten worden gebruikt voor validatie, codering, retourmeldingen en functionele duiding binnen het berichtenverkeer tussen gemeenten, zorgaanbieders, VECOZO, CAK, GGK, BIDN en VWS.

---

## Metadata

| Veld | Waarde |
|---|---|
| Domein | iJw |
| Type | Overzicht codelijsten |
| Gebruik | AI-chatbot / RAG / documentatie |
| Formaat | Markdown / JSON |
| Doel | Semantische zoekbaarheid en functionele ondersteuning |

---

# Codelijsten

| Code | Naam | Beschrijving | Bestand |
|---|---|---|---|
| Fo01 | Foutcodelijst | Deze lijst bevat de foutcodes die kunnen optreden binnen het iJw/iWmo berichtenverkeer via het GGK, BIDN, VECOZO, CAK en VWS. Gebruik deze lijst als naslagwerk bij het analyseren van retourmeldingen. | `Fo01_Foutcodelijst.md` |
| COD002VEKTIS | Berichtcode | Verplicht veld in de berichtheader conform Vektis-standaard. | `COD002VEKTIS_Berichtcode.md` |
| COD032 | Land | Identificatie van een (historisch/actueel) land of gebiedsdeel. | `COD032_Land.json` |
| COD043 | Indicatie debet/credit | Gecodeerde aanduiding voor debet of credit. | `COD043_Indicatie_debet_credit.md` |
| COD046 | Geslacht | Unieke aanduiding van de sexe van een persoon. | `COD046_Geslacht.md` |
| COD170 | Datumgebruik | Codering om aan te geven welk deel van een datum onbekend is. | `COD170_Datumgebruik.md` |
| COD260 | Ja of nee | Codering voor ja of nee. | `COD260_Ja_nee.md` |
| COD327 | Code verwijzer | Aanduiding van de aard van de (zelf)verwijzer. | `COD327_Code_verwijzer.md` |
| COD467 | Status aanlevering | Indicatie over de status van de informatie in de berichtklasse. | `COD467_Status_aanlevering.md` |
| COD472 | Soort relatie | De soort relatie die een persoon ten opzichte van de cliënt heeft. | `COD472_Soort_relatie.md` |
| COD700 | Naamgebruik | Aanduiding naamgebruik (gecodeerd). | `COD700_Naamgebruik.md` |
| COD747 | Communicatievorm | Gecodeerde aanduiding van de bijzondere vorm van communicatie die gebruikt dient te worden. | `COD747_Communicatievorm.md` |
| COD757 | Soort adres | Nadere typering van het adres. | `COD757_Soort_adres.md` |
| JZ002 | Reden wijziging toewijzing | De reden waarom een toewijzing wordt gewijzigd. | `JZ002_Reden_wijziging_toewijzing.md` |
| JZ020 | Productcategorie | Gecodeerde aanduiding van een (reeks van) productcategorie(en) in functionele termen die losgekoppeld is van een bepaalde leverancier, waarbij wordt beschreven wat de inhoud en aard van de productcategorie is in termen van hulpverlening (wonen, zorg en welzijn). | `JZ020_Productcategorie.md` |
| JZ588 | Reden beëindiging | De reden van beëindiging van de Jeugdhulp bij een cliënt. | `JZ588_Reden_beeindiging.md` |
| NUM061 | Aanduiding woonadres | De aanduiding die wordt gebruikt voor adressen die niet zijn voorzien van de gebruikelijke straatnaam en huisnummeraanduidingen. | `NUM061_Aanduiding_woonadres.md` |
| WJ001 | Retourcode | Melding in een retourbericht. Het betreft een code die in een retourbericht het resultaat van de beoordeling van een (deel van een) ontvangen bericht weergeeft. | `WJ001_Retourcode.md` |
| WJ003 | Wettelijke vertegenwoordiging | Wettelijke vertegenwoordiging die voor de cliënt van toepassing is op het moment van beoordeling. | `WJ003_wettelijke_vertegenwoordiging.md` |
| WJ232 | Juridische status | Juridische situatie die voor de cliënt van toepassing is op het moment van beoordeling. | `WJ232_Juridische_status.md` |
| WJ756 | Eenheid | Gecodeerde aanduiding van de mate van zorg betreffende een product, uitgedrukt in een eenheid. | `WJ756_Eenheid.md` |
| WJ758 | Reden verzoek | Gecodeerde aanduiding voor de reden van een verzoek. | `WJ758_Reden_verzoek.md` |
| WJ759 | Reden afwijzing verzoek | Gecodeerde aanduiding voor de reden van afwijzing van een verzoek. | `WJ759_Reden_afwijzing_verzoek.md` |
| WJ760 | Verzoek antwoord | Gecodeerde aanduiding voor het antwoord op een verzoek. | `WJ760_Verzoek_antwoord.md` |
| WMO757 | Frequentie | Frequentie van de te leveren of geleverde ondersteuning. | `WMO757_Frequentie.md` |

---

# AI-context

Deze codelijsten worden gebruikt binnen:
- iJw-berichtenverkeer
- validaties
- verzoek- en antwoordberichten
- toewijzingen
- startberichten
- stopberichten
- verzoek om toewijzing
- verzoek om wijziging
- antwoordbericht
- declaraties
- administratieve controles
- AI-chatbots en RAG-oplossingen

De bestanden zijn bedoeld voor:
- semantische zoekopdrachten
- retrieval augmented generation (RAG)
- functionele ondersteuning
- analyse van foutmeldingen
- interpretatie van retourcodes
- ondersteuning van gemeenten en zorgaanbieders
