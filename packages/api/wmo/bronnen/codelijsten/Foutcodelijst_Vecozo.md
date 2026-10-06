# Foutcodelijst VECOZO

Bij het indienen van berichten vindt een ontvangstcontrole plaats. Goedgekeurde berichten kunnen na deze controle daadwerkelijk ingediend worden. 
Er vindt dan een tweede controle plaats. Als het bericht wordt afgekeurd, sturen we het niet door naar de geadresseerde. 
Het bericht krijgt de status ‘Afgekeurd door dienst’.

Hieronder staat een overzicht van de meest voorkomende foutmeldingen en oorzaken:

|Foutcode|Omschrijving|Toelichting|
|--------|------------|-----------|
|BRS01|Afzender is niet bekend bij VECOZO|De afzender (de AGB-code in combinatie met de 'rol') moet bekend zijn in ons systeem. Deze kan de waarde Instelling, Zorgverlener of Praktijk hebben*. Als de AGB-code klopt, is er waarschijnlijk via uw software een verkeerde rol ingevuld. Neem contact op met uw softwareleverancier.|
|BRS02|Indiener beschikt niet over de juiste rol om voor dit berichttype berichten in te dienen|Het gebruikte VECOZO-account heeft niet de juiste autorisatie. De contactpersoon kan dit aanpassen via Gebruikersbeheer.|
|BRS03|Indiener is niet gemachtigd om namens de afzender het bericht in te dienen|Als de indiener en de afzender niet gelijk zijn, controleren wij of de indiener namens de afzender het bericht mag indienen.|
|||Is dat niet het geval, dan volgt deze melding. Er moet een toestemmingsverklaring worden ingesteld door de contactpersoon van de afzender.|
|BRS04 |Geadresseerde partij is niet aangesloten bij VECOZO|De geadresseerde partij moet bij ons aangesloten zijn. Controleer ook de AGB-code en/of UZOVI-code.|
|BRS05|Geadresseerde partij beschikt niet over de juiste rol om voor dit berichttype berichten te ontvangen|De geadresseerde partij moet bij ons aangesloten zijn voor de juiste grondslag (Zvw, Wlz, Wmo en/of Jeugdwet). |
|BRS06|Payload is groter dan toegestaan|Het bestand (de payload) dat wordt ingediend is te groot. De maximale grootte verschilt per dienst.|
|BRS12|Virus gedetecteerd in payload|Het ingediende bestand bevat een virus en is verwijderd.|
|BRS13|Berichtinhoud voldoet niet aan XSD|Het bericht voldoet niet aan de vereiste opbouw en structuur. Neem contact op met uw softwareleverancier.|
|BRS14|Payload bevat geen well-formed XML|Het bericht bevat geen of geen geldige XML-bestandsopmaak, of is niet volledig. Neem contact op met uw softwareleverancier.|
|BRS15|Geen geldig ZIP-bestand aangeleverd|Het bericht is niet aangeleverd in een geldig ZIP-formaat.|
|BRS16|ZIP-bestand bevat meer bestanden dan toegestaan|Een ZIP-bestand mag bij bepaalde diensten maar één bestand bevatten. |
|BRS17|ZIP-bestand bevat wachtwoordbeveiliging|Het ZIP-bestand is beveiligd met een wachtwoord. Ons systeem kan deze bestanden niet inlezen. Verwijder het wachtwoord.|
|BRS18|Bericht bevat persoonsgegevens die niet zijn toegestaan op deze omgeving|Op de testomgevingen zijn uitsluitend fictieve persoonsgegevens toegestaan.|
|BRS19|Bestand in ZIP-bestand is groter dan toegestaan|Een bestand in het ZIP-bestand is groter dan toegestaan. Maak het bestand kleiner of splits het op. |
|BRS20|Identificatie moet per berichtsoort uniek zijn voor de verzendende partij|De inhoud van het veld Identificatie en IdentificatieRetour moet uniek te zijn voor de betreffende AGB-code.Neem contact op met uw softwareleverancier.|
|BRS21|ZIP-bestand bevat minder bestanden dan toegestaan|Een ZIP-bestand moet minimaal één bestand bevatten.|
|BRS28|Het bericht is afgekeurd op basis van XSLT-controles|Het bericht voldoet niet aan de vereiste controleregels. Neem contact op met uw softwareleverancier.|
|BRS29|ZIP-bestand bevat mappenstructuur|Een ZIP-bestand mag geen mappen bevatten, alleen bestanden.|
|BRS33|Bericht kan niet afgeleverd worden|Er is geen routeerregel ingesteld voor het bericht. Controleer of u de juiste UZOVI heeft gebruikt.|
|BRS114|TraceerID is niet uniek|Het gebruikte TraceerID is al gekoppeld aan een ander bericht. De inhoud van het veld TraceerID moet uniek zijn voor de betreffende AGB-code. Neem contact op met uw softwareleverancier.|


















---

| Foutcode | Omschrijving foutcode                                                             | Verzender   | Informatie / Toelichting |
| -------- | --------------------------------------------------------------------------------- | ----------- | ------------------------ |
| IB001 | Bericht voldoet niet aan XSD. | BIDN / CAK / VWS | BIDN controleert niet op de Payload maar wel op de Envelop. CAK en VWS controleren de Payload. |
| IB002 | De verzendende organisatie is niet geautoriseerd om gebruik te maken van het GGK. | BIDN | Neem contact op met de servicedesk. |
| IB003 | Het ontvangen bericht overschrijdt de maximaal toegestane bestandsgrootte van 25MB. | BIDN | Verdeel de berichten over meerdere bestanden/aanleveringen. |
| IB004 | De functie wordt niet ondersteund. | BIDN | Voorbeeld: er wordt een WMO399 verstuurd. |
| IB005 | Gemeentecode is niet bekend bij het GGK, controleer de StUF-envelop. | BIDN | Gemeentecode is niet bekend bij het GGK. |
| IB006 | Zendend systeem niet geautoriseerd voor combinatie van berichtcode, entiteittype en functie. | BIDN |  |
| IB007 | Combinatie functie en organisatie is niet toegestaan. | BIDN |  |
| IB008 | Indienende partij beschikt niet over juiste rol voor dit berichttype. | VECOZO | AGB-code beschikt niet over juiste rol en/of grondslag voor betreffende product. |
| IB009 | Indiener heeft geen toestemmingsverklaring van afzender voor dit berichttype. | VECOZO |  |
| IB010 | Geadresseerde partij niet aangesloten bij VECOZO of AGB is incorrect. | VECOZO |  |
| IB011 | Geadresseerde partij beschikt niet over juiste rol voor dit berichttype. | VECOZO |  |
| IB012 | Payload is groter dan toegestaan (max. 25MB). | VECOZO |  |
| IB013 | Bestand bevat een virus en is verwijderd. | VECOZO |  |
| IB014 | Payload voldoet niet aan de XSD. | VECOZO | Neem contact op met softwareleverancier + XSD-foutmelding. |
| IB015 | Bericht bevat niet-toegestane persoonsgegevens. | VECOZO | Wordt alleen gebruikt op de KTO. |
| IB016 | Referentienummer is niet uniek. | VECOZO / CAK |  |
| IB017 | Applicatiegegevens niet of onjuist gevuld. | VECOZO |  |
| IB018 | Applicatiegegevens niet of onjuist gevuld. | VECOZO |  |
| IB019 | Declaratie-antwoord reeds ingediend. | VECOZO |  |
| IB020 | Declaratie-antwoord reeds ingediend. | VECOZO |  |
| IB021 | AlsAntwoordOp niet gevuld. | VECOZO |  |
| IB022 | AlsAntwoordOp niet gevuld. | VECOZO |  |
| IB023 | Functie is niet actief. | BIDN |  |
| IB901 | Geen geldig ZIP-bestand aangeleverd. | VECOZO |  |
| IB902 | ZIP-bestand bevat meer bestanden dan toegestaan. | VECOZO |  |
| IB903 | ZIP-bestand bevat wachtwoordbeveiliging. | VECOZO |  |
| IB904 | Bestand in ZIP-bestand is groter dan toegestaan (max. 25MB). | VECOZO |  |
| IB905 | ZIP-bestand bevat minder bestanden dan toegestaan. | VECOZO | ZIP-bestand mag niet leeg zijn. |

---

📎 Toelichting:
- *BIDN* = Berichtenverkeer i-Domein Nederland  
- *CAK* = Centraal Administratie Kantoor  
- *VWS* = Ministerie van Volksgezondheid, Welzijn en Sport  
- *VECOZO* = VEilig COmmunicatie ZOrg  

---

Laatste update: november 2025  


