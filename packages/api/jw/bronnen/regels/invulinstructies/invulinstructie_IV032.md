**IV032**

*Welke retourcode moet gevuld worden in het retourbericht?*

Welke retourcode gevuld moet worden, wordt bepaald door controle op basis waarvan het bericht wordt afgekeurd. Deze controles zijn beschreven als technisch te controleren regels die op verschillende niveaus gecontroleerd worden. Bij iedere technisch te controleren regel is aangegeven op welk controleniveau deze gecontroleerd wordt. Indien van toepassing is ook aangegeven welke retourcode gebruikt moet worden in het retourbericht indien op basis van de regel een heenbericht wordt afgekeurd.
Deze invulinstructie heeft betrekking op bijna alle retourberichten. Voor het declaratie-antwoordbericht (325-bericht) is een aparte invulinstructie opgesteld (IV088).
Een ontvangen heenbericht wordt op vier niveaus gecontroleerd:
Controleniveau 1: berichtformaat (XSD)
Het bericht wordt gevalideerd tegen het XSD.

Indien het bericht niet valideert, krijgt de afzender een foutmelding. Er wordt geen retourbericht verzonden. Regels op dit controleniveau hebben daarom geen retourcode.

Controleniveau 2: berichtinhoud (XSLT)
Het bericht wordt gecontroleerd tegen alle regels (technische regels, condities en constraints) die binnen het bericht zelf te controleren zijn. Voor deze regels zijn XSLTs beschikbaar die gebruikt kunnen worden om de controles uit te voeren.

Deze regels hebben een algemene retourcode (0001) die gevuld wordt in het retourbericht.
Wanneer fouten worden geconstateerd bevat het retourbericht alleen de Header met retourcode 0001 (Bericht is technisch onjuist). Wanneer de ter beschikking gestelde XSLTs gebruikt zijn, moet bovendien het versienummer van de XSLTs worden meegegeven.

Controleniveau 3: berichtoverstijgend
Het bericht wordt gecontroleerd op alle technische regels die berichtoverstijgend zijn. Dat wil zeggen dat de informatie in het heenbericht gecontroleerd wordt ten opzichte van informatie in één of meer eerder ontvangen domeinspecifieke berichten.

Deze regels hebben een eigen retourcode die gevuld wordt in het retourbericht bij de berichtklasse waarin de fout geconstateerd is. Indien een fout geconstateerd is, leidt dit tot volledige afkeur van het bericht.

Controleniveau 4: externe bron
Het bericht wordt gecontroleerd op alle technische regels waarvoor informatie nodig is die geen onderdeel is van het iStandaarden berichtenverkeer. Dit betreft bijvoorbeeld:

- Systeemdatum van de verzender/ontvanger
- Een externe codelijst zoals de AGB-codelijst of de gemeentelijke indeling van CBS
- Bilaterale afspraken tussen ketenpartijen, zoals contractafspraken die opgenomen zijn in een regel binnen de iStandaarden.

Deze regels hebben een eigen retourcode die gevuld wordt in het retourbericht bij de berichtklasse waarin de fout geconstateerd is. Indien een fout geconstateerd is, leidt dit tot volledige afkeur van het bericht.
