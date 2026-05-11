# 📘 Foutcodelijst Berichtenverkeer

Deze lijst bevat de foutcodes die kunnen optreden binnen het iJw/iWmo berichtenverkeer via het GGK, BIDN, VECOZO, CAK en VWS.  
Gebruik deze lijst als naslagwerk bij het analyseren van retourmeldingen.

---

| **Foutcode** | **Omschrijving foutcode**                                                             | **Verzender**   | **Informatie / Toelichting**                                                                 |
|:-------------:|---------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|
| **IB001** | Bericht voldoet niet aan XSD. | **BIDN / CAK / VWS** | BIDN controleert niet op de Payload maar wel op de Envelop. CAK en VWS controleren de Payload. |
| **IB002** | De verzendende organisatie is niet geautoriseerd om gebruik te maken van het GGK. | **BIDN** | Neem contact op met de servicedesk. |
| **IB003** | Het ontvangen bericht overschrijdt de maximaal toegestane bestandsgrootte van 25MB. | **BIDN** | Verdeel de berichten over meerdere bestanden/aanleveringen. |
| **IB004** | De functie wordt niet ondersteund. | **BIDN** | Voorbeeld: er wordt een WMO399 verstuurd. |
| **IB005** | Gemeentecode is niet bekend bij het GGK, controleer de StUF-envelop. | **BIDN** | Gemeentecode is niet bekend bij het GGK. |
| **IB006** | Zendend systeem niet geautoriseerd voor combinatie van berichtcode, entiteittype en functie. | **BIDN** |  |
| **IB007** | Combinatie functie en organisatie is niet toegestaan. | **BIDN** |  |
| **IB008** | Indienende partij beschikt niet over juiste rol voor dit berichttype. | **VECOZO** | AGB-code beschikt niet over juiste rol en/of grondslag voor betreffende product. |
| **IB009** | Indiener heeft geen toestemmingsverklaring van afzender voor dit berichttype. | **VECOZO** |  |
| **IB010** | Geadresseerde partij niet aangesloten bij VECOZO of AGB is incorrect. | **VECOZO** |  |
| **IB011** | Geadresseerde partij beschikt niet over juiste rol voor dit berichttype. | **VECOZO** |  |
| **IB012** | Payload is groter dan toegestaan (max. 25MB). | **VECOZO** |  |
| **IB013** | Bestand bevat een virus en is verwijderd. | **VECOZO** |  |
| **IB014** | Payload voldoet niet aan de XSD. | **VECOZO** | Neem contact op met softwareleverancier + XSD-foutmelding. |
| **IB015** | Bericht bevat niet-toegestane persoonsgegevens. | **VECOZO** | Wordt alleen gebruikt op de KTO. |
| **IB016** | Referentienummer is niet uniek. | **VECOZO / CAK** |  |
| **IB017** | Applicatiegegevens niet of onjuist gevuld. | **VECOZO** |  |
| **IB018** | Applicatiegegevens niet of onjuist gevuld. | **VECOZO** |  |
| **IB019** | Declaratie-antwoord reeds ingediend. | **VECOZO** |  |
| **IB020** | Declaratie-antwoord reeds ingediend. | **VECOZO** |  |
| **IB021** | AlsAntwoordOp niet gevuld. | **VECOZO** |  |
| **IB022** | AlsAntwoordOp niet gevuld. | **VECOZO** |  |
| **IB023** | Functie is niet actief. | **BIDN** |  |
| **IB901** | Geen geldig ZIP-bestand aangeleverd. | **VECOZO** |  |
| **IB902** | ZIP-bestand bevat meer bestanden dan toegestaan. | **VECOZO** |  |
| **IB903** | ZIP-bestand bevat wachtwoordbeveiliging. | **VECOZO** |  |
| **IB904** | Bestand in ZIP-bestand is groter dan toegestaan (max. 25MB). | **VECOZO** |  |
| **IB905** | ZIP-bestand bevat minder bestanden dan toegestaan. | **VECOZO** | ZIP-bestand mag niet leeg zijn. |

---

📎 **Toelichting:**
- *BIDN* = Berichtenverkeer i-Domein Nederland  
- *CAK* = Centraal Administratie Kantoor  
- *VWS* = Ministerie van Volksgezondheid, Welzijn en Sport  
- *VECOZO* = VEilig COmmunicatie ZOrg  

---

**Laatste update:** november 2025  
