**IV087**

*Hoe wordt een declaratie-antwoordbericht opgesteld?*

Een declaratie-antwoordbericht wordt gestuurd om de aanbieder te informeren over de beoordeling (technisch/inhoudelijk) van het declaratiebericht. Daarnaast wordt de aanbieder geinformeerd over het totaalbedrag dat door de gemeente wordt toegekend op de declaratie.
Voor ieder verzonden declaratiebericht wordt slechts 1 declaratie-antwoordbericht gestuurd (1-op-1). De gemeente stuurt altijd een declaratie-antwoordbericht naar de aanbieder.

Een declaratie-antwoordbericht bevat altijd een Header.

- In de Header wordt DeclaratieIdentificatie gevuld met de berichtidentificatie van het declaratiebericht dat beantwoord wordt.
- De Header kan worden aangevuld met het versienummer van de XSLT's die gebruikt zijn om het bericht te controleren. Dit is verplicht indien afkeur plaatsvindt op basis van de XSLTs.
Wat na de Header volgt is afhankelijk van of en op welk controleniveau fouten zijn geconstateerd:
- Bij afkeur op controleniveau 1 of 2 (zie IV088) is het afgekeurde declaratiebericht niet verwerkt door de gemeente.
- Bij afkeur op controleniveau 3 of 4, is het declaratiebericht (deels) verwerkt. Prestaties die niet beoordeeld zijn (indien fout op berichtklasse Cliënt is geconstateerd) of niet voldoen aan de controles, zijn afgewezen.
De vulling van het declaratie-antwoordbericht is afhankelijk van de situatie en de geconstateerde fouten:

Het bericht is volledig goedgekeurd:
De Header wordt retour gestuurd met retourcode 0200 (geen opmerkingen over deze berichtklasse) en een Declaratie-Antwoord berichtklasse met Retourcode 8001 (Declaratie is volledig toegewezen), waarbij TotaalGoedgekeurdBedrag en TotaalIngediendBedrag worden gevuld met de waarde van TotaalIngediendBedrag van het bijbehorende declaratiebericht.

Controleniveau 1: Er zijn fouten geconstateerd bij XSD-validatie
Indien het declaratiebericht niet valideert tegen het XSD krijgt de afzender een foutmelding. Er wordt geen declaratie-antwoordbericht verzonden.

Controleniveau 2: Er zijn fouten geconstateerd bij XSLT-validatie
Voor alle regels die binnen een bericht gecontroleerd kunnen worden, maar die niet via het XSD gevalideerd kunnen worden, zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren. Wanneer een declaratiebericht een fout oplevert bij een controle op één van deze
regels wordt in het declaratie-antwoordbericht alleen de Header retour gestuurd met de algemene retourcode 0001 (Bericht is afgekeurd om technische redenen). Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven. Het declaratiebericht wordt als niet verzonden beschouwd en is niet verwerkt in de administratie van de gemeente.
Voorbeeld:

- Het declaratiebericht bevat een fout in de Header of kan niet worden afgeleverd bij de gemeente: retourcode 0001 (Bericht is afgekeurd om technische reden).

Controleniveau 3 of 4: Er zijn fouten geconstateerd op berichtoverstijgende controles of controles tegen een externe bron
Indien er een fout geconstateerd is in de Header, bevat het declaratie-antwoordbericht alleen de Header met daarbij de retourcode van de regel op basis waarvan de fout geconstateerd is.

Indien een fout geconstateerd is in de berichtklasse Declaratie, wordt de Header retour gestuurd met retourcode 0200 (geen opmerking over deze berichtklasse), berichtklasse DeclaratieAntwoord krijgt de betreffende retourcode voor afkeur. Het TotaalToegekendBedrag wordt gevuld met 0 (zie ook TR342). De declaratie wordt als niet verzonden beschouwd en is niet verwerkt in de administratie van de gemeente.
Voorbeeld:

- Het declaratienummer is niet uniek: Declaratienummer moet uniek zijn voor de verzendende partij. De Header krijgt dan retourcode 0200 (geen opmerking over deze berichtklasse), berichtklasse DeclaratieAntwoord krijgt retourcode 9333, en bij TotaalToegekendBedrag wordt 0 gevuld.
Indien een fout geconstateerd is in de berichtklassen onder Declaratie, wordt de Header retour gestuurd met retourcode 0200 (Geen opmerking over deze berichtklasse). TotaalToegekendBedrag in de berichtklasse DeclaratieAntwoord wordt gevuld met het totaal goedgekeurde bedrag (som van alle toegekende prestaties) en de klasse krijgt retourcode 0200. Indien een fout is geconstateerd in Cliënt wordt de betreffende retourcode bij de Cliënt gevuld en worden alle onderliggende Prestaties retour gestuurd met retourcode 0233 (Berichtklasse is niet beoordeeld). Indien een fout is geconstateerd in een Prestatie, wordt deze Prestatie retour gestuurd met de bijbehorende retourcode. Hierbij wordt tevens de bijbehorende klasse Cliënt meegestuurd met retourcode 0200 (Geen opmerking over deze berichtklasse). In de retour gestuurde Prestaties worden één of meerdere retourcodes gevuld om de inhoudelijke reden van afwijzing aan te geven.
NB: Prestaties worden altijd volledig goed of volledig afgekeurd. Prestaties waarvan het ingediende bedrag wordt toegekend, worden niet opgenomen in het declaratie-antwoordbericht.
Het declaratie-antwoordbericht dient niet:
- Als ontvangstbevestiging.
- Voor het opvragen van (extra) informatie door de gemeente.
- Voor het doorgeven van correcties op declaratiegegevens aan de aanbieder.
NB: Een bericht kan informatie over meerdere cliënten bevatten. Cliënten waarin geen fouten zijn geconstateerd, worden niet opgenomen in het declaratie-antwoordbericht.
