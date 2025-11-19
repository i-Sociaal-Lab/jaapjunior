**IV028**

*Hoe wordt een retourbericht opgesteld?*

Een retourbericht wordt gestuurd om de zender te informeren over de beoordeling (technisch/inhoudelijk) van het heenbericht. Voor ieder heenbericht wordt slechts 1 retourbericht gestuurd (1-op-1). De ontvanger stuurt altijd een retourbericht naar de verzender.
Deze invulinstructie heeft betrekking op bijna alle retourberichten. Voor het declaratie-antwoordbericht (325-bericht) is een aparte invulinstructie opgesteld (IV087).
Een retourbericht wordt als volgt opgebouwd:
Een retourbericht bevat altijd een Header.

- In de Header wordt BerichtCode gevuld met de berichtcode van het betreffende retourbericht.
- Overige elementen, inclusief Afzender en Ontvanger, worden ongewijzigd overgenomen van de header van het heenbericht.
- De Header wordt aangevuld met identificerende gegevens van het retourbericht (IdentificatieRetour en DagtekeningRetour) en kan worden aangevuld met het versienummer van de XSLT's die gebruikt zijn om het bericht te controleren. Dit laatste is verplicht indien afkeur plaatsvindt op basis van de XSLTs.
Wat na de Header volgt is afhankelijk van of en op welk controleniveau fouten zijn geconstateerd:

Er zijn geen fouten geconstateerd:
Wanneer geen fouten geconstateerd zijn, is het heenbericht volledig goedgekeurd. Het retourbericht bevat in dat geval alleen een Header, zonder retourcodes.

Controleniveau 1: Er zijn fouten geconstateerd bij XSD-validatie
Indien het bericht niet valideert tegen het XSD krijgt de afzender een foutmelding. Er wordt geen retourbericht verzonden.

Controleniveau 2: Er zijn fouten geconstateerd bij XSLT-validatie
Voor alle regels die binnen een bericht gecontroleerd kunnen worden, maar die niet via het XSD gevalideerd kunnen worden, zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren. Wanneer een bericht een fout oplevert bij een controle op één van deze
regels wordt alleen de Header retour gestuurd met de algemene retourcode 0001 (Bericht is afgekeurd om technische redenen).
Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven.

Controleniveau 3 of 4: Er zijn fouten geconstateerd op berichtoverstijgende controles of controles tegen een externe bron
Indien er een fout geconstateerd is in de Header, bevat het retourbericht alleen de Header met daarbij de retourcode van de regel op basis waarvan de fout geconstateerd is.
Indien in één of meer berichtklassen over een Cliënt fouten zijn geconstateerd, worden alle berichtklassen van die Cliënt ongewijzigd overgenomen in het retourbericht. Bij iedere berichtklasse wordt telkens met een retourcode aangegeven wat de status is:

- Geen fouten geconstateerd in deze berichtklasse: retourcode 0200
- Deze berichtklasse is niet gecontroleerd: retourcode 0233
- Er is een fout geconstateerd in deze berichtklasse: de retourcode van de regel op basis waarvan de fout geconstateerd is.
Bijvoorbeeld: De gemeente ontvangt een startbericht met daarin een StartProduct met StatusAanlevering 3 (verwijderen aanlevering), maar heeft niet eerder een startbericht met hetzelfde StartProduct en StatusAanlevering 1 (eerste aanlevering) ontvangen. Het bericht wordt dan afgekeurd op basis van TR063.
In het retourbericht worden in deze situatie de volgende retourcodes gevuld:
- Header: Retourcode 0200 (Geen opmerkingen over deze berichtklasse)
- Cliënt: Retourcode 0200 (Geen opmerkingen over deze berichtklasse)
- StartProduct: Retourcode 9063 (Het bericht kan niet verwerkt worden omdat geen eerder bericht ontvangen is)

