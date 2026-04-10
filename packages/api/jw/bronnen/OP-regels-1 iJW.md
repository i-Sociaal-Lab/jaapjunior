## Bedrijfsregels (OP-regels)

---
ID: OP001 
Titel: Gezagsdrager van client
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op001/
Tekst: Van een cliënt wordt vastgelegd wie de gezagsdrager is. Indien het een client betreft die 16 jaar of ouder is kan het gezag over de jeugdige ook bij de client zelf liggen.
Tekst_raw:
 - Van een cliënt wordt vastgelegd wie de gezagsdrager is.
 - Indien het een client betreft die 16 jaar of ouder is kan het gezag over de jeugdige ook bij de client zelf liggen.
---

---
ID: OP002
Titel: Gegevens gezagsdrager in toewijzing
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002/
Tekst: De gemeente stuurt in de toewijzing gegevens van de gezagsdrager van de client mee. De gezagsdrager wordt opgenomen als relatie van de cliënt.
Tekst_raw:
 - De gemeente stuurt in de toewijzing de gegevens van de gezagsdrager mee.  
 - De gezagsdrager wordt opgenomen als relatie van de cliënt.
---

---
ID: OP002x1
Titel: Gezagsdrager bekend
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002x1/
Tekst: Indien een aanbieder in een Verzoek om toewijzing (VOT) heeft aangegeven dat de gezagsdrager bekend is, hoeft in de daaropvolgende toewijzing de gezagsdrager niet meegegeven te worden.
Tekst_raw:
 - Indien een aanbieder in een Verzoek om Toewijzing (VOT) heeft aangegeven dat de gezagsdrager bekend is, hoeft in de daaropvolgende toewijzing de gezagsdrager niet meegegeven te worden.
---

---
ID: OP002x2
Titel:  Gezag bij jeugdige
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op002x2/
Tekst: Als het gezag bij de jeugdige zelf ligt, wordt deze niet als relatie opgenomen in de toewijzing.
Tekst_raw:
 - Als het gezag bij de jeugdige zelf ligt, wordt deze niet als relatie opgenomen in de toewijzing.
---

---
ID: OP003
Titel: Uitzondering standaard berichtenverkeer
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op003/
Tekst: Gestandaardiseerd berichtenverkeer wordt niet gebruikt als een (zorg)professional oordeelt dat overdracht ernstige risico's voor de veiligheid van de cliënt oplevert (bijv. verblijf in "blijf-van-mijn-lijf" huis).
Tekst_raw:
 - Gestandaardiseerd berichtenverkeer wordt niet gebruikt als een (zorg)professional oordeelt dat overdracht ernstige risico's voor de veiligheid van de cliënt oplevert.
 - (bijv. verblijf in "blijf-van-mijn-lijf" huis).

---

---
ID: OP011
Titel: Begindatum levering melden
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op011/
Tekst: De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is gestart.
Tekst_raw:
 - De aanbieder meldt de begindatum van de levering nadat de ondersteuning daadwerkelijk is gestart.
---

---
ID: OP033
Titel: Wijzigingen met gebruik status aanlevering
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033/
Tekst: Voor wijzigingen, verwijderingen en correcties op een eerder verzonden regiebericht wordt de status aanlevering gebruikt Wijzigingen op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beeindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden.
Met de status aanlevering van een berichtklasse kan worden aangegeven of: een berichtklasse nieuw is (waarde 1) of een berichtklasse verwijderd is (waarde 3).
Toelichting : De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV008, IV074, OP033x1, OP033x2, TR071 en TR074.
Tekst_raw: Tekst: Voor wijzigingen, verwijderingen en correcties op een eerder verzonden regiebericht wordt de status aanlevering gebruikt Wijzigingen op een melding start product zijn uitsluitend toegestaan voor het geleverde product. Als de ondersteuning beeindigd is, kan de aanvang niet meer op deze manier gecorrigeerd worden.
Met de status aanlevering van een berichtklasse kan worden aangegeven of: 
 - een berichtklasse nieuw is (waarde 1)
 - berichtklasse verwijderd is (waarde 3).
Toelichting : De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: IV008, IV074, OP033x1, OP033x2, TR071 en TR074.
---

---
ID: OP033x1
Titel: Wijzigingen in toewijzing
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bericht: toewijzing
onderwerp: wijzigen
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033x1/
Tekst: Een afgegeven toewijzing mag gewijzigd worden waarbij de wijziging met een nieuw bericht moet worden doorgegeven. De volgende wijzigingen in de einddatum zijn toegestaan:
Intrekken: aanpassen van de gewenste einddatum toewijzing zodat de periode korter wordt (NB dit is alleen toegestaan in overleg met de aanbieder). 
Oprekken: aanpassen van de gewenste einddatum toewijzing zodat de periode langer wordt (NB dit is alleen toegestaan in overleg met de aanbieder).
Verwijderen: de einddatum van de toewijzing wordt gewijzigd zodat deze gelijk is aan de ingangsdatum van de toewijzing. Daarbij wordt RedenWijziging gevuld met 13 (Verwijderd). Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden.
De volgende wijzigingen in volume en maximaal budget zijn toegestaan:
Volume wijzigen: Als de omvang is gespecificeerd met in Frequentie de waarde “Totaal binnen geldigheidsduur toewijzing”, dan mag Volume worden aangepast.
Indien dit op verzoek van de aanbieder (via een verzoek om wijziging) is, mag dit zonder overleg worden aangepast door de gemeente.
Indien de gemeente het initiatief tot aanpassing van het volume neemt, mag dit alleen in overleg met en na instemming van de aanbieder worden aangepast.
Budget wijzigen: Als Budget op verzoek van de aanbieder (via een verzoek om wijziging) wordt gewijzigd, mag dit zonder overleg worden aangepast door de gemeente.
Indien de gemeente het initiatief tot aanpassing van het maximale budget neemt, mag dit alleen in overleg met en na instemming van de aanbieder worden aangepast.
De meest recente toewijzing op toewijzingsdatum en -tijd is bepalend voor de inhoud van de toewijzing
Tekst_raw:
 - Een afgegeven toewijzing mag gewijzigd worden waarbij de wijziging met een nieuw bericht moet worden doorgegeven. 
- Einddatum wijzigingen toegestaan:  
  - Intrekken: aanpassen van de gewenste einddatum toewijzing zodat de periode korter wordt (NB dit is alleen toegestaan in overleg met de aanbieder).
  - Oprekken: aanpassen van de gewenste einddatum toewijzing zodat de periode langer wordt (NB dit is alleen toegestaan in overleg met de aanbieder).
  - Verwijderen: de einddatum van de toewijzing wordt gewijzigd zodat deze gelijk is aan de ingangsdatum van de toewijzing. Daarbij wordt RedenWijziging gevuld met 13 (Verwijderd). Een verwijdering betekent dat de toewijzing als niet verzonden beschouwd moet worden.
- Volume wijzigingen: 
  - Frequentie = "Totaal binnen geldigheidsduur toewijzing": volume mag aangepast worden  
  - Initiatief gemeente = overleg met en instemming van aanbieder vereist  
  - Initiatief aanbieder = mag zonder overleg door gemeente worden aangepast  
- Budget wijzigingen:  
  - Aanvraag aanbieder = mag zonder overleg door gemeente worden aangepast  
  - Initiatief gemeente = overleg en instemming van aanbieder vereist  
- Belangrijk: meest recente toewijzing op toewijzingsdatum/-tijd is bepalend.
Toelichting: De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regel: IV066.
---

---
ID: OP033x2
Titel: Status aanlevering 2 is niet toegestaan.
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op033x2/
Tekst: - Gebruik van status aanlevering waarde **2** (berichtklasse gewijzigd) is niet toegestaan.
Tekst_raw:
 - Gebruik van status aanlevering waarde **2** (berichtklasse gewijzigd) is niet toegestaan.
---

---
ID: OP039
Titel: Cliëntgegevens in berichten
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op039/
Tekst: In het berichtenverkeer mogen ketenpartijen clientgegevens doorgeven zoals deze in de administratie van de betreffende ketenpartij voorkomen, mits deze gegevens geen onderdeel zijn van een logische sleutel. Het is toegestaan gewijzigde gegevens over te nemen in de administratie.
Tekst_raw:
 - Ketenpartijen mogen cliëntgegevens doorgeven in het berichtenverkeer zoals geregistreerd in hun administratie, mits deze geen logische sleutel vormen.  
 - Het is toegestaan gewijzigde gegevens over te nemen in de administratie.
Toelichting : De uitwerking van deze bedrijfsregel is vastgelegd in de volgende regels: UP023, IV002, IV007, IV045, IV047.
---

---
ID: OP043
Titel: PGB en toewijzing
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op043/
Tekst: Als een cliënt een PGB heeft, mag voor hetzelfde product geen toewijzing zijn afgegeven. Een toewijzing eindigt uiterlijk op de dag vóór ingangsdatum PGB.
Tekst_raw:
 - Als een cliënt een PGB heeft, mag voor hetzelfde product geen toewijzing zijn afgegeven.  
 - Een toewijzing eindigt uiterlijk op de dag vóór ingangsdatum PGB.
---

---
ID: OP047
Titel: Afkeuren berichten
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bericht: Alle berichten, retourbericht
onderwerp: afkeur, retourbericht, retourcode
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op047/
Tekst: Berichten die niet voldoen aan de geldende standaard mogen worden afgekeurd.
Tekst_raw:
 - Berichten die niet voldoen aan de geldende standaard mogen worden afgekeurd.
---

---
ID: OP065
Titel: Clienten in Retourberichten
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op065/
Tekst: Een retourbericht bevat alleen informatie over clienten waarvan berichtklassen zijn afgekeurd. Clienten waarvan alle berichtklassen volledig zijn goedgekeurd worden dus niet mee teruggestuurd in het retourbericht. Het retourbericht bevat alleen clienten waarvan in één of meer berichtklassen, over of behorend bij die client, fouten zijn geconstateerd. In dat geval wordt de berichtklasse Client inclusief alle onderliggende berichtklassen retour gezonden, voorzien van retourcodes.
Tekst_raw:
 - Een retourbericht bevat alleen informatie over clienten waarvan berichtklassen zijn afgekeurd.
 - Clienten waarvan alle berichtklassen volledig zijn goedgekeurd worden dus niet mee teruggestuurd in het retourbericht.
 - Het retourbericht bevat alleen clienten waarvan in één of meer berichtklassen, over of behorend bij die client, fouten zijn geconstateerd. In dat geval wordt de berichtklasse Client inclusief alle onderliggende berichtklassen retour gezonden, voorzien van retourcodes.
---

---
ID: OP071
Titel: Uniek relatie-nummer
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op071/
Tekst: Elke relatie krijgt een uniek nummer per gemeente per client. Dit nummer mag niet gewijzigd worden.
Tekst: 
 - Elke relatie krijgt een uniek nummer per gemeente per cliënt.  
 - Dit nummer mag niet gewijzigd worden.
---

---
ID: OP072
Titel: Beëindigen ondersteuning
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op072/
Tekst: Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beeindigd is. In het bericht moet gerefereerd worden aan de start van de levering.
Tekst_raw:
 - Pas na een melding start ondersteuning mag een aanbieder melden dat de levering beeindigd is.
 - In het bericht moet gerefereerd worden aan de start van de levering.
---

---
ID: OP076
Titel: Contactpersonen (relatie)
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op076/
Tekst: Van iedere contactpersoon (relatie) moet worden opgegeven in welke relatie deze tot de client staat. Gegevens over een contactpersoon mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de client.
Tekst_raw: 
 - Van iedere contactpersoon (relatie) moet worden opgegeven in welke relatie deze tot de client staat.
 - Gegevens over een contactpersoon mogen alleen worden opgenomen indien noodzakelijk voor communicatie met de client.
---

---
ID: OP079
Titel: Gebruik BSN
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op079/
Tekst: Het is verplicht om gebruik te maken van het BSN van de client in de onderlinge uitwisseling van gegevens.
Tekst_raw:
 - Het is verplicht om gebruik te maken van het BSN van de client in de onderlinge uitwisseling van gegevens.
---

---
ID: OP080
Titel: Volgorde berichten
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op080/
Tekst: Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten. Hoewel ongewenst kan het noodzakelijk zijn een bericht met terugwerkende kracht te moeten versturen, bijvoorbeeld als gevolg van een bezwaarprocedure. Dit kan aanleiding zijn voor een serie berichten die vervolgens met terugwerkende kracht moeten worden verstuurd.
Daarnaast kan ook het afkeuren en corrigeren van berichten er toe leiden dat berichten in een andere volgorde worden verwerkt dan bedoeld. In deze situatie is het te adviseren om de ontvangst van retourberichten af te wachten om afkeur op een vervolgbericht te voorkomen.
Tekst_raw:
 - Aan het tijdstip waarop en de volgorde waarin berichten worden ontvangen en verwerkt kunnen ketenpartijen geen betekenis hechten.
 - Hoewel ongewenst kan het noodzakelijk zijn een bericht met terugwerkende kracht te moeten versturen, bijvoorbeeld als gevolg van een bezwaarprocedure.
 - Dit kan aanleiding zijn voor een serie berichten die vervolgens met terugwerkende kracht moeten worden verstuurd.
 - Daarnaast kan ook het afkeuren en corrigeren van berichten er toe leiden dat berichten in een andere volgorde worden verwerkt dan bedoeld. In deze situatie is het te adviseren om de ontvangst van retourberichten af te wachten om afkeur op een vervolgbericht te voorkomen.
---

---
ID: OP086
Titel: inspannings- of outputgericht
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
onderwerp: uitvoeringsvariant, inspanningsgericht, outputgericht
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op086/
Tekst: Ondersteuningsproducten met een inspannings- of outputgerichte uitvoering worden altijd door de gemeente toegewezen via een toewijzingsbericht.
Tekst_raw:
 - Ondersteuningsproducten met een inspannings- of outputgerichte uitvoering worden altijd door de gemeente toegewezen via een toewijzingsbericht.
---

---
ID: OP087
Titel: Inhoud toewijzingsbericht
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op087/
Tekst: Een toewijzingsbericht bevat voor 1 client altijd alle toewijzingen voor 1 aanbieder die op of na de aanmaakdatum van het bericht geldig zijn plus alle toewijzingen die gewijzigd zijn ten opzichte van het voorgaande toewijzingsbericht. Deze regel is van toepassing indien voor 1 client meerdere producten toegewezen zijn. Alle geldige toewijzingen binnen 1 client, voor 1 aanbieder worden in 1 toewijzingsbericht geplaatst en naar de betreffende aanbieder gestuurd inclusief de toewijzingen die gewijzigd zijn sinds het laatst verstuurde toewijzingsbericht voor deze client en aanbieder. Denk hierbij aan intrekkingen die zijn gedaan en waar de aanbieder nog niet van op de hoogte is.
Toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 13 (Verwijderd) worden niet gezien als actuele toewijzing. Ook toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 01 (Administratieve correctie (vervallen)) worden niet gezien als actuele toewijzing.
Tekst_raw:
 - Een toewijzingsbericht bevat voor 1 client altijd alle toewijzingen voor 1 aanbieder die op of na de aanmaakdatum van het bericht geldig zijn plus alle toewijzingen die gewijzigd zijn ten opzichte van het voorgaande toewijzingsbericht.
 - Deze regel is van toepassing indien voor 1 client meerdere producten toegewezen zijn. Alle geldige toewijzingen voor 1 client, voor 1 aanbieder worden in 1 toewijzingsbericht geplaatst en naar de betreffende aanbieder gestuurd inclusief de toewijzingen die gewijzigd zijn sinds het laatst verstuurde toewijzingsbericht voor deze client en aanbieder.
 - Denk hierbij aan intrekkingen die zijn gedaan en waar de aanbieder nog niet van op de hoogte is.
 - Toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 13 (Verwijderd) worden niet gezien als actuele toewijzing.
 - Ook toewijzingen met einddatum gelijk aan ingangsdatum en RedenWijziging gevuld met 01 (Administratieve correctie (vervallen)) worden niet gezien als actuele toewijzing.
---

---
ID: OP090
Titel: Reactietijd en verplichting Retourberichten
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090/
Tekst: Voor ieder ontvangen bericht wordt binnen 3 werkdagen na ontvangst een retourbericht verzonden. De verzender is verantwoordelijk voor het signaleren van ontbrekende retourberichten en moet actie ondernemen.
Tekst_raw:
 - Voor ieder ontvangen bericht wordt binnen 3 werkdagen na ontvangst een retourbericht verzonden.
 - De verzender is verantwoordelijk voor het signaleren van ontbrekende retourberichten en moet actie ondernemen.
---

---
ID: OP090x2
Titel: Retourbericht kan niet worden aangemaakt
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090x2/
Tekst: Als er geen retourbericht kan worden gemaakt, meldt de ontvangende partij dit buiten het berichtenverkeer om aan de verzender.
Tekst_raw:
 - Als er geen retourbericht kan worden gemaakt, meldt de ontvangende partij dit buiten het berichtenverkeer om aan de verzender.
---

---
ID: OP090x4
Titel: Declaratie-antwoordbericht
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op090x4/
Tekst: Voor ieder ontvangen declaratiebericht wordt binnen 10 werkdagen na ontvangst een declaratie-antwoordbericht verzonden. Indien de gemeente niet binnen 10 werkdagen een declaratie-antwoordbericht kan versturen, neemt de gemeente buiten het berichtenverkeer om contact op met de aanbieder. De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van een declaratie-antwoordbericht en dient, indien er nog geen contact geweest is met de gemeente, actie te ondernemen.
Tekst_raw:
 - Voor ieder ontvangen declaratiebericht wordt binnen 10 werkdagen na ontvangst een declaratie-antwoordbericht verzonden.
 - Indien de gemeente niet binnen 10 werkdagen een declaratie-antwoordbericht kan versturen, neemt de gemeente buiten het berichtenverkeer om contact op met de aanbieder.
 - De aanbieder is verantwoordelijk voor het signaleren van het ontbreken van een declaratie-antwoordbericht en dient, indien er nog geen contact geweest is met de gemeente, actie te ondernemen.
---

---
ID: OP091
Titel: Contactgegevens cliënt
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bericht: toewijzinge
onderwerp: contactgegevens
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op091/
Tekst: Van een client mogen aanvullende contactgegevens vastgelegd worden; er moet dan wel vastgelegd worden wat voor soort adres het betreft.
Tekst_raw:
 - Van een client mogen aanvullende contactgegevens vastgelegd worden;
 - er moet dan wel vastgelegd worden wat voor soort adres het betreft.
---

---
ID: OP095
Titel: Afkeuren berichten
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel 
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op095/
Tekst: Een bericht mag niet worden afgekeurd op basis van informatie waartoe de verzendende partij geen toegang heeft.
Tekst_raw:
 - Een bericht mag niet worden afgekeurd op basis van informatie waartoe de verzendende partij geen toegang heeft.
---

---
ID: OP130
Titel: Welke Relatiegegevens moeten verplicht gevuld worden?
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op130/
Tekst: Van de relatie moet altijd een naam worden vastgelegd, aangevuld met een volledig adres en/of een telefoonnummer.
Tekst_raw: 
 - Van de relatie moet altijd een naam worden vastgelegd.
 - Aangevuld met een volledig adres en/of een telefoonnummer.
---

---
ID: OP155
Titel: Tijdelijke stop levering
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op155/
Tekst: Een (tijdelijke) beeindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering.
Tekst_raw:
 - Een (tijdelijke) beeindiging van levering, bevat een verwijzing naar de laatste melding van de start van de levering.
---

---
ID: OP179
Titel: Bestandsgrootte
Versie: iJw 3.2
Domein: Jeugdwet
Auteur: Zorginstituut Nederland
Type: bedrijfsregel
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/regels/bedrijfsregel/op179/
Tekst: De grootte van verzonden bestanden mag niet meer zijn dan 25 Mb. Deze regel wordt niet naar de techniek vertaald; daar waar grotere bestanden verwerkt kunnen worden is dat uiteraard toegestaan.
Daar waar de grootte van bestanden tot problemen in de verwerking leidt, is deze regel bedoeld om duidelijk te maken dat de verzender de bestandsgrootte moet aanpassen.
Tekst_raw:
 - De grootte van verzonden bestanden mag niet meer zijn dan 25 Mb. Deze regel wordt niet naar de techniek vertaald;
 - daar waar grotere bestanden verwerkt kunnen worden is dat uiteraard toegestaan.
 - Daar waar de grootte van bestanden tot problemen in de verwerking leidt, is deze regel bedoeld om duidelijk te maken dat de verzender de bestandsgrootte moet aanpassen.
---
