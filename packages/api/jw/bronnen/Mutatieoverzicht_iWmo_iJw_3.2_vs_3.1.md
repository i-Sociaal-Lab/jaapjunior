# Migratiehandreiking iWmo 3.1 en iJw 3.1 naar iWmo 3.2 en iJw 3.2



# 23 november 2022





# Inleiding



Dit document is een handreiking bij de migratie van iWmo 3.1 en iJw 3.1 naar iWmo 3.2 en iJw 3.2 per begin april 2023. De handreiking bevat richtlijnen voor gemeenten en aanbieders. U leest hoe u in de voorbereiding én na de inwerkingtreding van iWmo 3.2 en iJw 3.2 uw werkprocessen kunt aanpassen zodat die aansluiten bij de 3.2-versie van het berichtenverkeer.



De handreiking geeft een overzicht van aandachtspunten bij de overgang van iWmo 3.1 en iJw

3.1 naar iWmo 3.2 en iJw 3.2, vooral op inhoudelijk vlak.



Voor een gedetailleerd overzicht van alle veranderingen verwijzen wij u naar het





# Start- en stopzorg



Voor de start- en stopzorg zijn twee wijzigingen, waarbij één wijziging gaat over wanneer je een bestaande toewijzing moet verlengen door het oprekken van de bestaande toewijzing. De tweede wijziging betreft het verduidelijken van het gebruik van stopzorg.



## Verlengen van een bestaande toewijzing waar mogelijk

In releases 3.2 kan de gemeente niet langer in elke situatie zelf bepalen of een verlenging afgegeven wordt door een nieuwe toewijzing (met nieuw toewijzingnummer) of dat de einddatum van de bestaande toewijzing opgerekt wordt. In bepaalde situaties is de gemeente verplicht een verlenging af te geven door het oprekken van de einddatum van de bestaande toewijzing.



### Wijzigingen

De volgende wijziging is doorgevoerd:

Regels stellen dat het oprekken van de einddatum van de bestaande toewijzing voor een verlenging van de zorg of ondersteuning verplicht is, als aan alle onderstaande voorwaarden wordt voldaan:

het volume blijft gelijk of is leeg;

de frequentie is ofwel leeg ofwel ongelijk aan ‘Totaal geldigheidsduur toewijzing’ en gelijk aan de toewijzing;

de einddatum van de bestaande toewijzing is niet verstreken op het moment dat de toewijzing wordt opgerekt en verstuurd.

In deze gevallen moet de bestaande toewijzing worden aangepast en mag er geen nieuwe toewijzing (met nieuw toewijzingsnummer) worden afgeven.



### Aandachtspunten voorafgaand aan release 3.2

Voor deze wijziging is geen migratie nodig. Het oprekken van de einddatum van de bestaande toewijzing is ook al mogelijk in de huidige versie.



### Werkwijze vanaf release 3.2

Een bestaande toewijzing moet altijd worden verlengd door het oprekken van de einddatum  indien wordt voldaan aan alle bovenstaande voorwaarden, die ook staan in OP380. Doordat  de bestaande toewijzing wordt verlengd door de einddatum op te rekken, hoeft er geen stop- en startbericht te worden verstuurd.

Het versturen van stop- en startbericht was bij de oude werkwijze, het afgeven van een nieuwe toewijzing (met nieuw toewijzingsnummer) wel noodzakelijk.

N.B. De werkwijze voor het versturen van regieberichten is niet gewijzigd t.o.v. release 3.1.



## Verduidelijken gebruik stopzorg (tijdelijk en definitief)

Het doorgeven van een tijdelijke of definitieve stop vanuit de aanbieder geeft de gemeente inzicht in de levering van de zorg en/of ondersteuning. Het juiste gebruik van stopzorg is in releases 3.1 niet in alle gevallen duidelijk, met name het gebruik van een tijdelijke stop. In releases 3.2 is dit gebruik  verduidelijkt in de standaard.

Daarnaast is het mogelijk om bij een definitieve stop die direct volgt op een tijdelijke stop (dus zonder tussentijds startbericht) dezelfde einddatum te gebruiken.



### Wijzigingen

De volgende wijzigingen zijn doorgevoerd en van invloed op de migratie:

In berichtklassen StopProduct is de sleutel uitgebreid met ‘RedenBeëindiging’

Invulinstructie is aangepast zodat duidelijk is welke elementen tot de logische sleutel van het bericht horen

Een nieuwe regel dwingt af dat Einddatum StopProduct groter dan of gelijk moet zijn aan Einddatum uit actuele StopProduct indien deze voor hetzelfde StopProduct

bedoeld is

Een bestaande regel is gewijzigd zodat bij het verzenden van een definitieve stop, volgend op een tijdelijke stop, dit niet hoeft binnen 5 werkdagen na het stoppen van de levering, maar binnen 5 werkdagen nadat bekend is dat de levering definitief gestopt is.

Een nieuwe regel stelt dat na een (tijdelijke) stop het toegestaan is om een start te sturen.

Een nieuwe regel stelt dat na een tijdelijke stop, alleen een definitieve stop zonder tussenkomst van een startbericht mag volgen.

Een nieuwe regel stelt dat alleen een tijdelijke stop zonder tussenkomst van een startbericht gevolgd mag worden door een definitieve stop.





### Aandachtspunten voorafgaand aan release 3.2

Er is geen migratie nodig voor deze wijziging. Het is nu ook al mogelijk om een tijdelijk stopzorg te sturen en daarna een definitieve stopzorg. Dit is in releases 3.1 alleen niet mogelijk met dezelfde einddatum.



### Werkwijze vanaf release 3.2

Alleen een tijdelijke stopzorg mag zonder tussenkomst van een startbericht gevolgd worden door een definitieve stopzorg. Als er een reden beëindiging is met waarde 20 (levering is tijdelijk beëindigd), dan moet de volgende reden beëindiging ongelijk zijn aan waarde 20, als er geen startbericht tussendoor is verzonden. Daarbij moet de einddatum groter dan of gelijk zijn aan de einddatum van de tijdelijke stopzorg.





# Kleine wijzigingen



In het informatiemodel zijn diverse verbeteringen doorgevoerd die de kwaliteit van de standaarden hebben verbeterd. Er zijn hier twee wijzigingen als aandachtspunt opgenomen.



## Gebruik van oude gemeentecodes in geval van gemeentelijke herindeling

In releases 3.2 is het mogelijk gemaakt om in geval van gemeentelijke herindeling een vervallen gemeentecode tijdelijk nog te gebruiken, om administratieve handelingen correct af te handelen.



### Wijzigingen

De volgende wijziging is doorgevoerd en van invloed op de migratie:

Een regel is aangepast waarbij het gebruik van gemeentecodes uit een oudere CBS-lijst in geval van een gemeentelijke herindeling tijdelijk is toegestaan. Een oudere CBS-lijst met gemeentecodes mag gebruikt worden indien deze actueel is op Ingangsdatum van

ToegewezenProduct (uit 301-beircht) of in geval van een Verzoek om toewijzing (315-bericht) op ToewijzingIngangsdatum in AangevraagdProduct (uit 315-bericht)



### Aandachtspunten voorafgaand aan release 3.2

Het gebruik van de vervallen gemeentecodes is in de huidige versie ook toegestaan maar niet beschreven in het informatiemodel.



### Werkwijze vanaf release 3.2

Indien er sprake is van een gemeentelijke herindeling en er worden nog berichten uitgewisseld, dan wordt in de header de gemeentecode gebruikt die voorkomt op de CBScodelijst die actueel was op de ingangsdatum van het toegewezen product, waarover gecommuniceerd wordt. Indien het bericht een verzoek om toewijzing is, dan wordt de CBScodelijst gebruikt die actueel is op de ToewijzingsIngangsdatum in AangevraagdProduct (uit315-bericht).





## Het ingediende tarief dient overeen te komen met het contractuele tarief

In releases 3.2 is de ontbrekende technische regel toegevoegd bij de retourcode die aangeeft dat de prestatie in de ingediende declaratie niet het producttarief bevat dat de gemeente op basis van de contractafspraken verwacht.



### Wijzigingen

De volgende wijziging is doorgevoerd en van invloed op de migratie:

Een regel is toegevoegd waarbij het producttarief in de prestatie overeen dient te komen met het contractuele tarief van de productcode. De regel is nu gekoppeld aan de retourcode 0611.



### Aandachtspunten voorafgaand aan release 3.2

De functionele impact hiervan is minimaal omdat de controle (voor zover bekend) ook nu al uitgevoerd wordt.





### Werkwijze vanaf release 3.2

Indien ook in releases 3.1 het ingediend tarief gecontroleerd wordt, dan is er geen wijziging in de werkwijze. Het ingediend tarief dient overeen te komen met het contractuele tarief. Dit wordt anders afgekeurd.













# Wijzigingen naar aanleiding van het nieuwe Standaard administratieprotocol voor Gecertificeerde Instellingen (SAP GI)



Het Ketenbureau i-Sociaal domein heeft het standaard administratieprotocol voor gecertificeerde instellingen (SAP GI) gepubliceerd. Hiermee wijzigt ook het gebruik van het iJW-berichtenverkeer voor de GI’s en gemeenten die hiermee samenwerken.



## Handreiking werkwijze GI’s vervalt

Met de nieuwe SAP GI is de handreiking werkwijze GI’s komen te vervallen.

De verwijzingen in het informatiemodel naar deze handreiking zijn om die reden verwijderd.



### Wijzigingen

Alle verwijzingen in het informatiemodel naar de handreiking werkwijze GI’s zijn verwijderd.



### Aandachtspunten voorafgaand aan release 3.2

Voor deze wijziging is geen migratie nodig.



### Werkwijze vanaf release 3.2

De standaard iJw wordt ook gevolgd door de GI’s. De handreiking is hierbij niet meer van toepassing.





## Regieberichten verplicht

Het gebruik van regieberichten voor de uitvoeringsvarianten inspannings- en outputgericht is verplicht voor GI’s.



### Wijzigingen

Regels over het gebruik van de regieberichten zijn tekstueel gewijzigd. Daar stonden uitzonderingen in opgenomen voor GI’s. Deze uitzonderingen zijn verwijderd waardoor het gebruik van de regieberichten voor de uitvoeringsvarianten inspannings- en outputgericht verplicht wordt voor GI’s.



### Aandachtspunten voorafgaand aan release 3.2

Voor deze wijziging is geen migratie nodig.



### Werkwijze vanaf release 3.2

Het gebruik van regieberichten voor de uitvoeringsvarianten inspannings- en outputgericht is verplicht voor GI’s.

