  **IV008**
*Hoe moet worden omgegaan met correcties van de regieberichten?*

Een correctie van een regiebericht, kan alleen indien het te corrigeren regiebericht is goedgekeurd door de gemeente.
Indien een regiebericht is afgekeurd, moet het als niet verzonden worden beschouwd, en moet een nieuw regiebericht worden gestuurd.

Voor de regieberichten (startbericht en stopbericht) bestaat de mogelijkheid om eerder verstuurde berichtklassen te corrigeren. Hiervoor wordt eerst de betreffende berichtklasse verwijderd en wordt vervolgens (eventueel) een nieuwe berichtklasse verstuurd.
Om aan te geven dat een berichtklasse dient te worden verwijderd wordt StatusAanlevering van de betreffende berichtklasse gevuld met de waarde 3 (verwijderen aanlevering). De te verwijderen berichtklasse wordt geidentificeerd door de logische sleutel van de klasse.

Eventueel kan in hetzelfde bericht ook de vervangende berichtklasse worden aangeleverd. In deze berichtklasse wordt StatusAanlevering gevuld met de waarde 1 (eerste aanlevering).

Of de vervangende berichtklasse kan worden aangeleverd in hetzelfde bericht of dat een nieuw bericht nodig is, is afhankelijk van het berichtelement dat gecorrigeerd moet worden. Dat heeft te maken met de logische sleutels:

1. Startproduct heeft als logische sleutel: (ToewijzingNummer, Product, Begindatum)
2. Stopproduct heeft als logische sleutel: (ToewijzingNummer, Product, Begindatum, RedenBeeindiging, Einddatum)

- Als het te corrigeren berichtelement onderdeel is van de logische sleutel: de correctie kan in hetzelfde bericht worden doorgegeven. Beide berichtklassen hebben een unieke sleutel.
- Als het te corrigeren berichtelement geen onderdeel is van de logische sleutel: de correctie moet in een apart bericht worden doorgegeven. De gecorrigeerde en de originele berichtklasse hebben dezelfde logische sleutel. Binnen een (1) bericht wordt hierop afgekeurd omdat de software dit interpreteert als dat er twee keer dezelfde berichtklasse is opgenomen.

Uiteraard moet worden voorkomen dat een nieuwe aanlevering eerder wordt verwerkt dan de correctie (verwijdering). Het is daarom te adviseren om waar mogelijk de correctie (verwijdering) en nieuwe aanlevering in hetzelfde bericht op te nemen.
