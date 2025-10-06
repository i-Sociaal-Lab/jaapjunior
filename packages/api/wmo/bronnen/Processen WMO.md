# Processen WMO

Versie: 3.2
Status: Productie
Auteur: Zorginstituut Nederland
Bron-link: https://informatiemodel.istandaarden.nl/informatiemodel/iwmo/3.2/processen/
Publicatiedatum: 15 mei 2025
AI-agent: Wmo-agent

## **Instructie voor de AI-agent: Gebruik van het document “Procesbeschrijvingen iStandaarden iWmo mei 2025”**

Dit document bevat procesbeschrijvingen van de administratieve processen zoals die zijn vastgelegd in de iStandaarden voor de Wmo (iWmo). Deze processen vormen het fundament voor het digitale berichtenverkeer tussen gemeenten en zorgaanbieders in het sociaal domein. Het document beschrijft per proces welke stappen worden doorlopen, welke berichten uitgewisseld worden, en welke rollen en gegevens hierin een rol spelen.

### **Doel van deze bron**

- De procesbeschrijvingen dienen als referentie voor alle partijen die werken met het berichtenverkeer volgens de iWmo-standaard, zoals gemeenten, aanbieders, softwareleveranciers en ketenpartners.
- Ze geven inzicht in **wie** op welk moment **welk bericht** verstuurt, **welke gegevens** daarbij worden uitgewisseld en **hoe** berichten technisch gevalideerd en inhoudelijk beoordeeld worden.

### **Uitgangspunten voor beantwoording van vragen:**

- **Gebruik als praktische leidraad**: Baseer antwoorden over administratieve processen, rollen, volgordes van berichten, en technische validatie op de informatie in dit document.
- **Verbinding met wet- en regelgeving**: Licht toe dat deze processen zijn gebaseerd op wettelijke verplichtingen uit de WMO, en dat de iStandaarden de praktische uitwerking daarvan vormen. Leg indien relevant de relatie uit met de WMO, de Regeling WMO en de rol van landelijke afspraken.
- **Specifieke processen**: Beschrijf bij vragen over specifieke processen (zoals toewijzen, leveren, declareren, wijzigen) de relevante stappen, berichttypen (zoals 301, 305, 315, 317, 323, 325) en de volgorde of logica zoals beschreven in dit document.
- **Begrippen en afkortingen**: Gebruik de definities en terminologie zoals in dit document gehanteerd. Als begrippen elders (bijvoorbeeld in de WMO, iStandaarden of gemeentecodelijst) verder zijn uitgewerkt, verwijs hier dan expliciet naar.
- **Grenzen van de bron**: Meld het altijd als een vraag niet beantwoord kan worden op basis van deze procesbeschrijvingen alleen, en verwijs eventueel naar de relevante iStandaard, de WMO, Regeling WMO of de website van VNG, Ketenbureau i-Sociaal Domein of andere formele bronnen.

### **Over deze bron**

Dit document is een procesmatige uitwerking van de iWmo-standaard versie 3.2 en beschrijft de standaardprocessen zoals die landelijk worden gehanteerd. Het is geen wettelijke tekst, maar een operationele vertaling van wet- en regelgeving naar uitvoerbare processtappen en berichtstromen binnen het berichtenverkeer WMO.

Gebruik deze bron als uitgangspunt voor het beantwoorden van vragen over **hoe** administratieve processen in het berichtenverkeer iWmo verlopen, en verwijs bij meer fundamentele of juridische vragen naar de betreffende wet- en regelgeving en iStandaarden regels.

# Processen iStandaarden

De procesbeschrijvingen in de iStandaarden beschrijven het administratieve proces wanneer een cliënt zorg of ondersteuning nodig heeft. In de processen is beschreven welke partijen welke gegevens uitwisselen of delen, en op welk moment dit plaatsvindt.

We kennen binnen de iJw en de iWmo standaarden de volgende processen:

- Proces Toeleiden Wmo
- Proces Beoordelen WMO
- Proces Leveren WMO
- Proces Declareren en Declaratie beantwoorden WMO

## Proces Toeleiden Wmo

### Verzoek om toewijzing indienen

Wanneer de aanbieder vaststelt dat een client zich bij hem gemeld heeft met een open beschikking, vraagt de aanbieder (indien die de zorg wil gaan leveren) 

hiervoor een toewijzing aan bij de gemeente.

De aanbieder stuurt hiervoor een Verzoek om toewijzing naar de gemeente, met daarin voor ieder aan te vragen product een verzoek.

### Toewijzen

Wanneer de gemeente vaststelt dat voor de client een toewijzing moet worden afgegeven, stuurt de gemeente een toewijzingsbericht naar de aanbieder.

Dit toewijzingsbericht is de opdracht aan de aanbieder om te gaan leveren. Het toewijzingsbericht valt daarmee onder de rechtmatigheidsberichten.

Het toewijzingsbericht bevat voor 1 client altijd alle toewijzingen voor 1 aanbieder die op of na de aanmaakdatum van het bericht geldig zijn, 

plus alle toewijzingen die gewijzigd zijn ten opzichten van het voorgaande toewijzingsbericht.

## Proces beoordelen Wmo

Op het moment dat de gemeente een Verzoek om toewijzing of Verzoek om wijziging ontvangt van de aanbieder gaat de gemeente dit beoordelen. 

Afhankelijk van de beoordeling van het verzoek kan dit leiden tot een antwoordbericht of een toewijzingsbericht, of een antwoordbericht en een 

toewijzingsbericht.

De gemeente verstuurt een antwoordbericht indien er onderzoek nodig is alvorens het verzoek beoordeeld kan worden of om het verzoek af te wijzen 

indien het verzoek niet akkoord is.

Bij een Verzoek om wijziging wordt door de aanbieder een samenhangend geheel aan toewijzingen aangevraagd die de volledige gewenste situatie 

weergeeft. De gemeente beoordeelt het verzoek dan ook als geheel en geeft dus altijd voor het gehele verzoek 1 reactie (antwoordbericht of toewijzingbericht). 

Het verzoek wordt dus in zijn geheel afgewezen of akkoord bevonden.

Bij een Verzoek om toewijzing worden door de aanbieder een of meer verzoeken gedaan voor producten. 

De gemeente beoordeelt ieder van die verzoeken afzonderlijk. De gemeente stuurt dan ook per verzoek een reactie (antwoordbericht of toewijzingbericht) 

of het betreffende product afgewezen of akkoord bevonden wordt.

### Verzoek afwijzen

Bij het opstellen van het antwoordbericht om een verzoek af te wijzen wordt op basis van ReferentieAanbieder de koppeling gemaakt naar het ingediende verzoek. 

Bij het verzoek om toewijzing-bericht legt de ReferentieAanbieder een relatie naar het AangevraagdProduct. 

In een verzoek om wijziging-bericht legt de ReferentieAanbieder een relatie naar het Verzoek.

De gemeente vult VerzoekAntwoord met waarde 1 (Verzoek afgewezen), om aan te geven dat de gemeente het verzoek afwijst. Daarnaast is de gemeente verplicht om RedenAfwijzingVerzoek met de reden te vullen waarom het verzoek afgewezen is.

Na het opstellen verzendt de gemeente het bericht naar de aanbieder. Als de gemeente geen foutmelding ontvangt (bericht voldoet aan XSD-validatie), 

dan ontvangt de aanbieder dit bericht.

Vervolgens gaat de aanbieder het bericht verder technisch controleren tegen de regels in de standaard en stelt op basis van deze controle een retourbericht op. Alleen een volledig goedgekeurd bericht wordt verwerkt als antwoordbericht.


## Proces Leveren Wmo

### Start en stop melden

Wanneer de aanbieder gestart is met het leveren van de daadwerkelijk toegewezen zorg, meldt die dit aan de gemeente.
De aanbieder stuurt hiervoor een startbericht naar de gemeente. In dit startbericht vult de aanbieder de begindatum met de startdatum van de 

levering van de daadwerkelijk toegewezen zorg.

Op het moment dat de levering van de daadwerkelijk toegewezen zorg (tijdelijk) gestopt wordt, geeft de aanbieder dit door aan de gemeente. 

De aanbieder stuurt hiervoor een stopbericht en vult de einddatum met de stopdatum van de levering van de daadwerkelijk toegewezen zorg.

Zowel zorg die tijdelijk- als definitief gestopt is, kan herstart worden, dan stuurt de aanbieder opnieuw een startbericht naar de gemeente. 

Zodra blijkt dat de zorg niet meer gestart wordt na een tijdelijke stop, stuurt de aanbieder een definitieve stop.

De start- en stopberichten zijn regieberichten en mogen niet voorwaardelijk gesteld worden aan declaratie.

NB bij de uitvoeringsvariant Taakgericht kan de gemeente afgesproken hebben dat er geen gebruik gemaakt wordt van start- en stopberichten. 

Het hierboven beschreven proces is dan niet van toepassing.

Indien er gebruik gemaakt wordt van de start- en stopberichten maar niet van het toewijzingsbericht, dan wordt Startproduct in het startbericht en 

StopProduct in het stopbericht niet gerelateerd aan het ToewijzingNummer uit het toewijzingsbericht.

**Start melden**

Bij het opstellen van het startbericht vult de aanbieder Begindatum met de startdatum van de levering van de daadwerkelijk toegewezen ondersteuning.

Na het opstellen verzendt de aanbieder het bericht naar de gemeente, als de aanbieder geen foutmelding ontvangt (bericht voldoet aan de XSD-validatie),

dan ontvangt de gemeente dit bericht. Vervolgens gaat de gemeente het bericht verder technisch controleren tegen de regels in de standaard. 

Daarna stelt de gemeente op basis van deze controle een retourbericht op. Alleen bij een volledig goedgekeurd bericht wordt de start Wmo-ondersteuning verwerkt.

**Definitieve stop melden**

Bij het opstellen van het stopbericht vult de aanbieder Einddatum met de stopdatum van de levering van de daadwerkelijk toegewezen ondersteuning.

De aanbieder vult tevens de RedenBeeindiging met de reden waarom de levering is gestopt. De aanbieder geeft aan dat sprake is van een definitieve stop 

door bij RedenBeeindiging een andere reden dan reden 20 (Levering is tijdelijk beeindigd) te vullen.

Na het opstellen verzendt de aanbieder het bericht naar de gemeente, als de aanbieder geen foutmelding ontvangt (bericht voldoet aan de XSD-validatie), 

dan ontvangt de gemeente dit bericht. Vervolgens gaat de gemeente het bericht verder technisch controleren tegen de regels in de standaard. Daarna stelt de gemeente op basis van deze controle een retourbericht op. Alleen bij een volledig goedgekeurd bericht wordt de stop Wmo-ondersteuning verwerkt.

**Tijdelijke stop melden**

Bij het opstellen van het stopbericht vult de aanbieder Einddatum met de stopdatum van de levering van de daadwerkelijk toegewezen ondersteuning.

De aanbieder vult tevens de RedenBeeindiging met de reden waarom de levering is gestopt. De aanbieder geeft aan dat sprake is van een tijdelijke stop 

door bij RedenBeeindiging de reden 20 (Levering is tijdelijk beeindigd) te vullen.

Na het opstellen verzendt de aanbieder het bericht naar de gemeente, als de aanbieder geen foutmelding ontvangt (bericht voldoet aan de XSD-validatie), 

dan ontvangt de gemeente dit bericht. Vervolgens gaat de gemeente het bericht verder technisch controleren tegen de regels in de standaard. 

Daarna stelt de gemeente op basis van deze controle een retourbericht op. Alleen bij een volledig goedgekeurd bericht wordt de stop Wmo-ondersteuning verwerkt.

### Verzoek om wijziging indienen

Bij het opstellen van het verzoek om wijziging-bericht vult de aanbieder een verzoek met daarin de totale gewenste nieuwe situatie (van ongewijzigde, gewijzigde of nieuwe producten of productcategorieen). 

De aanbieder vult daarbij de details van de gewenste nieuwe situatie.

Het verzoek om wijziging-bericht bevat 1 verzoek dat op basis van de ReferentieAanbieder kan worden geidentificeerd door de aanbieder.

Na het opstellen verzendt de aanbieder het bericht naar de gemeente. Als de aanbieder geen foutmelding ontvangt (bericht voldoet aan XSD-validatie), 

dan ontvangt de gemeente dit bericht.

Vervolgens gaat de gemeente het bericht verder technisch controleren tegen de regels in de standaard en stelt op basis van deze controle een 

retourbericht op. Alleen bij een volledig goedgekeurd bericht wordt het verzoek om wijziging-bericht verwerkt en beoordeeld.

## Proces Declareren en Declaratie beantwoorden Wmo

Wanneer de aanbieder vaststelt dat de declaratieperiode is afgelopen of een declaratie is afgekeurd stuurt de aanbieder een declaratie naar de gemeente.

De aanbieder stuurt hiervoor een declaratiebericht en geeft in dit bericht aan welke prestaties, in welke declaratieperiode en voor welk totaal ingediend bedrag worden gedeclareerd. De gehele declaratie krijgt een declaratienummer als unieke identificatie van de declaratie.

Dit declaratienummer dient ook om het antwoordbericht volgend op de declaratie aan het declaratiebericht te kunnen koppelen.

In het declaratie antwoordbericht geeft de gemeente terugkoppeling aan de aanbieder of de prestaties correct zijn ingediend en wat het totaal toegekend bedrag is.

### Declareren

Bij het opstellen van het declaratiebericht vult de aanbieder voor iedere in te dienen prestatie een aparte prestatieregel met daarin de details van de te declareren zorg of ondersteuning.

De prestaties worden geindentificeerd door een ProductReferentie. Dit nummer moet voor de aanbieder binnen het wettelijk domein waarop de prestaties betrekking hebben uniek zijn.

Na het opstellen verzendt de aanbieder het bericht naar de gemeente. Als de aanbieder geen foutmelding ontvangt (bericht voldoet aan de XSD-validatie), dan ontvangt de gemeente dit bericht.

En gaat de gemeente het bericht verder technisch controleren tegen de regels in de standaard en verwerkt de eventuele goedgekeurde regels uit de declaratie.

### Declaratie beantwoorden

Wanneer de gemeente het declaratiebericht gecontroleerd heeft, stelt die op basis van deze controle het declaratie-antwoordbericht op.

Na het opstellen verzendt de gemeente het bericht naar de aanbieder, als de gemeente geen foutmelding ontvangt (bericht voldoet aan de XSD-validatie), dan ontvangt de aanbieder dit bericht.

De aanbieder ziet op basis van de retourcodes in het declaratie antwoordbericht of de ingediende declaratie volledig is goedgekeurd of dat er prestaties zijn afgekeurd. 

Op basis van deze controle kan de aanbieder bepalen of opnieuw een declaratie gestuurd moet worden.