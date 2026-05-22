# IV008 

Hoe moet worden omgegaan met correcties van de regieberichten?

Voor de regieberichten (start- en stopbericht) bestaat de mogelijkheid om eerder verstuurde berichtklassen te corrigeren. Hiervoor wordt eerst de betreffende berichtklasse verwijderd en wordt vervolgens (eventueel) een nieuwe berichtklasse verstuurd.
Om aan te geven dat een berichtklasse dient te worden verwijderd wordt StatusAanlevering van de betreffende berichtklasse gevuld met de waarde 3 (verwijderen aanlevering). De te verwijderen berichtklasse wordt geidentificeerd door de logische sleutel van de klasse.

Eventueel kan in hetzelfde bericht ook de vervangende berichtklasse worden aangeleverd; in deze berichtklasse wordt StatusAanlevering gevuld met de waarde 1 (eerste aanlevering).

Of de vervangende berichtklasse kan worden aangeleverd in hetzelfde bericht of dat een nieuw bericht nodig is, is afhankelijk van het berichtelement dat gecorrigeerd moet worden. Dat heeft te maken met de logische sleutels:

Het te corrigeren berichtelement (ToewijzingNummer, Product, Begindatum) is onderdeel van de logische sleutel: de correctie kan in hetzelfde bericht worden doorgegeven. Beide berichtklassen hebben een unieke logische sleutel.
Het te corrigeren berichtelement (ToewijzingIngangsdatum) is geen onderdeel van de logische sleutel: de correctie moet in een apart bericht worden doorgegeven. De gecorrigeerde en de originele berichtklasse hebben dezelfde logische sleutel. Binnen een (1) bericht wordt hierop afgekeurd omdat de software dit interpreteert als dat er twee keer dezelfde berichtklasse is opgenomen.
Uiteraard moet worden voorkomen dat een nieuwe aanlevering eerder wordt verwerkt dan de correctie (verwijdering). Het is daarom te adviseren om waar mogelijk de correctie (verwijdering) en nieuwe aanlevering in hetzelfde bericht op te nemen.
Zie ook: OP033, OP289, TR326
