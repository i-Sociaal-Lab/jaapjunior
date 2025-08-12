Release iJw 3.2
Procesbeschrijving
## 30 september 2021
Dit document is een weergave van de procesbeschrijvingen zoals die zijn opgenomen in het 
informatiemodel bij iJw release 3.2. 
 
 
Versiebeheer
 
Versie 1.0
Datum 30-09-2021
Toelichting Versie bij publicatie definitieve specificaties iJw 3.1

## Inhoudsopgave (automatisch gegenereerd)

- [Inleiding](#inleiding)
- [1 Jeugdwet Ketenproces](#1-jeugdwet-ketenproces)
- [1.1 Proces iStandaarden](#11-proces-istandaarden)
- [2 Beoordelen](#2-beoordelen)
- [2.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant](#21-inspanningsgerichte-en-outputgerichte-uitvoeringsvariant)
- [2.2 Taakgerichte uitvoeringsvariant](#22-taakgerichte-uitvoeringsvariant)
- [2.3 Beoordelen (naar gemeente)](#23-beoordelen-naar-gemeente)
- [2.4 Beoordelen (naar aanbieder)](#24-beoordelen-naar-aanbieder)
- [2.5 Verzoek om toewijzing](#25-verzoek-om-toewijzing)
- [2.6 Vaststellen beschikking](#26-vaststellen-beschikking)
- [3 Toeleiden](#3-toeleiden)
- [3.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant](#31-inspanningsgerichte-en-outputgerichte-uitvoeringsvariant)
- [3.2 Taakgerichte uitvoeringsvariant](#32-taakgerichte-uitvoeringsvariant)
- [3.3 Toewijzen](#33-toewijzen)
- [3.4 Intrekken](#34-intrekken)
- [4 Leveren](#4-leveren)
- [4.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant](#41-inspanningsgerichte-en-outputgerichte-uitvoeringsvariant)
- [4.2 Taakgerichte uitvoeringsvariant](#42-taakgerichte-uitvoeringsvariant)
- [4.3 Starten Jeugdhulp](#43-starten-jeugdhulp)
- [4.4 Beëindigen Jeugdhulp](#44-beeindigen-jeugdhulp)
- [4.5 Monitoren](#45-monitoren)
- [5 Declareren Jeugdwet](#5-declareren-jeugdwet)
- [5.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant](#51-inspanningsgerichte-en-outputgerichte-uitvoeringsvariant)
- [5.2 Taakgericht uitvoeringsvariant](#52-taakgericht-uitvoeringsvariant)
- [5.3 Aanleveren declaratie](#53-aanleveren-declaratie)
- [5.4 Retourinformatie declaratie](#54-retourinformatie-declaratie)
- [5.5 Berichtenverkeer declareren](#55-berichtenverkeer-declareren)
- [5.6 Afhandelen declaratie](#56-afhandelen-declaratie)

## Inleiding 
 
Op 30 September 2021 zijn de definitieve specificaties van releases iWmo 3.1 en iJw 3.1 
gepubliceerd. Beide releases worden op 1 april 2022 van kracht.  
 
In het informatiemodel voor iJw staan onder het tabblad “Processen” de processen beschreven 
die behoren bij de gegevensuitwisseling tussen gemeenten en aanbieder binnen de Jeugdwet. 
Dit document is een exacte weergave van de beschrijving in het informatiemodel. 
 

## 1 Jeugdwet Ketenproces 
Het ketenproces voor jeugdhulp start meestal wanneer een cliënt of zijn gezagsdrager een 
aanvraag doet voor jeugdhulp. Hierop wordt samen met de cliënt en de gezagsdrager(s) 
bekeken wat de hulpvraag is en wat de beste oplossing is voor de cliënt (beoordelen). 
Afhankelijk van de beoordeling wordt vastgesteld of de cliënt toegang heeft tot jeugdhulp.
Wanneer is vastgesteld dat de cliënt toegang heeft tot jeugdhulp, stuurt de gemeente een 
officiële opdracht tot levering van de jeugdhulp (toeleiden). De geleverde jeugdhulp (levering) 
wordt gedeclareerd bij de gemeente volgens de geldende contractafspraken (financiering).
Gegevensuitwisseling binnen de processen beoordelen, toeleiden en financiering is van belang 
om de rechtmatigheid van de te leveren zorg en ondersteuning vast te kunnen stellen. 
Gegevensuitwisseling rondom het proces leveren is van belang om regie te voeren op het 
daadwerkelijk plaatsvinden van zorg en ondersteuning.

## 2 Beoordelen 
 
Bij de beoordeling wordt vastgesteld of de cliënt toegang heeft tot jeugdhulp. De toegang tot 
jeugdhulp kan door verschillende partijen bepaald worden:

* De gemeente, of bijvoorbeeld een sociaal wijkteam in opdracht van de gemeente, 
beoordeelt de cliënt en legt in een beschikking de toegang tot jeugdhulp vast.
 
* Een huisarts, jeugdarts of medisch specialist verwijst een cliënt door naar jeugdhulp
 
* Een rechter, Raad voor de Kinderbescherming of Officier van Justitie legt de cliënt 
jeugdhulp op.
 
Een gecertificeerde instelling kan naast jeugdbescherming en jeugdreclassering, ook 
reguliere jeugdhulp bepalen in overleg met de gemeente. Na overleg met de gemeente 
bepaalt gecertificeerde instelling welke jeugdhulp, die door de gemeente is ingekocht, 
wordt ingezet. (Zie voor meer informatie over toeleiding door een gecertificeerde 
instelling de handreiking 'Gebruik van iJw-berichtenverkeer door gemeenten en 
gecertificeerde jeugdzorginstellingen' en de Factsheet Woonplaatsbeginsel.)

## 2.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant  
Bij de beoordeling wordt vastgesteld welke jeugdhulp een cliënt nodig heeft, hoeveel jeugdhulp 
(omvang) en hoe lang (voor welke periode). Wanneer de beoordeling wordt uitgevoerd door 
een andere partij dan de gemeente, vraagt de aanbieder daarna bij de gemeente voor de 
betreffende jeugdhulp een toewijzing aan.  
 
Naar aanleiding van de beoordeling stelt de gemeente een beschikking vast voor de cliënt. 
Hierin wordt vastgelegd welke jeugdhulpproducten, met welke omvang en voor welke periode, 
de cliënt nodig heeft. Eén beschikking is het resultaat van één beoordeling en kan meerdere 
producten bevatten: de toegewezen producten. Binnen de Jeugdwet is het ook mogelijk dat 
voor ieder product voor één cliënt een aparte beschikking wordt opgesteld. Deze beschikkingen 
kunnen gelijktijdig geldig zijn. Ook is het mogelijk om een aanbieder een budget mee te geven 
voor een vooraf gedefinieerde periode. Het is dan aan de aanbieder te bepalen welke zorg 
ingezet moet worden. 
 
## 2.2 Taakgerichte uitvoeringsvariant  
Binnen de uitvoeringsvariant Taakgericht bepaalt de jeugdhulpaanbieder zelf, in opdracht van 
de gemeente, of de cliënt toegang heeft tot jeugdhulp. De gemeente speelt geen rol bij de 
beoordeling en stelt niet op niveau van de individuele cliënt een beschikking vast. 
 
## 2.3 Beoordelen (naar gemeente) 
De gemeente, of bijvoorbeeld een sociaal wijkteam namens de gemeente, beoordeelt welke 
jeugdhulp een cliënt nodig heeft, hoeveel jeugdhulp (omvang) en hoe lang (voor welke periode).

## 2.4  Beoordelen (naar aanbieder) 
De aanbieder beoordeelt welke jeugdhulp de cliënt nodig heeft, eventueel hoeveel en hoe lang. 
Binnen een inspanningsgerichte of outputgerichte werkwijze vraagt de aanbieder vervolgens 
bij de gemeente voor de betreffende producten een toewijzing aan. Dit is alleen mogelijk voor 
die situaties waarbij het recht op jeugdhulp al vaststaat, zoals na verwijzing door een medisch 
specialist of vanuit het justitiële domein via een gecertificeerde instelling.

## 2.5 Verzoek om toewijzing 
De aanbieder verzoekt de gemeente om een toewijzing te sturen voor het leveren va n 
jeugdhulp waarvoor reeds een titel tot levering bestaat. 
  
Het Verzoek om toewijzing bericht kan alleen gebruikt worden voor situaties waarbij het recht 
op jeugdhulp al vaststaat en is daarmee één van de rechtmatigheidsberichten. Met het 
Verzoek om toewijzing geeft de aanbieder aan dat hij de zorg wil opstarten. De gemeente 
stuurt altijd binnen drie werkdagen een retourbericht om aan te geven dat het Verzoek om 
toewijzing ontvangen is.

De gemeente die het Verzoek om toewijzing ontvangt is verplicht om te toetsen of, op basis 
van het woonplaatsbeginsel, de cliënt onder haar verantwoordelijkheid valt. Wanneer dat zo is, 
stuurt de gemeente de aanbieder een officiële toewijzing voor de te leveren jeugdhulp.

## 2.5.1 Verzoek om toewijzing afwijzen  
Wanneer volgens het woonplaatsbeginsel een andere gemeente verantwoordelijk is voor de 
cliënt, vindt een overdracht plaats. De gemeente die het Verzoek om toewijzing ontvangen 
heeft, beantwoord het verzoek om toewijzing (binnen 2 weken) met een antwoordbericht met 
reden “woonplaatsbeginsel”, waarin de juiste gemeente gecommuniceerd wordt. De aanbieder 
verstuurt vervolgens het Verzoek om toewijzing aan de verantwoordelijke gemeente.
De gemeente die de aanvraag ontvangt is verantwoordelijk voor de cliënt, tot het moment dat 
de cliënt is overgedragen aan de gemeente die volgens het woonplaatsbeginsel 
verantwoordelijk is voor de cliënt.
Wanneer de gemeente vaststelt dat het verzoek onterecht is omdat er een ongewenste 
samenloop met een ander lopend zorgtraject is, kan dit ook via het antwoordbericht 
gecommuniceerd worden. Wanneer de gemeente vaststelt dat het verzoek onterecht is omdat 
het niet aansluit bij de contractafspraken, wordt de betreffende reden gemeld in het 
antwoordbericht, als antwoord op het verzoek. De aanbieder kan daarna een gewijzigd verzoek 
om toewijzing verzenden.

## 2.5.2 Verzoek om toewijzing corrigeren  
Wanneer de aanbieder vaststelt dat er een verkeerde toewijzing is aangevraagd, bijvoorbeeld 
doordat een verkeerd product is opgenomen, neemt de aanbieder buiten het berichtenverkeer 
om contact op met de gemeente. Na afstemming met de gemeente kan vervolgens (nadat het 
eerdere verzoek is afgewezen) een nieuw Verzoek om toewijzing bericht verzonden worden.
Het Verzoek om toewijzing bericht  bevat clientgegevens en gegevens over de producten 
waarvoor de toewijzing wordt aangevraagd.

## 2.5.3 Berichtenverkeer Verzoek om toewijzing 
Na ontvangst van een Verzoek om toewijzing stuurt de gemeente altijd binnen drie werkdagen 
een retourbericht om aan te geven dat het Verzoek om toewijzing ontvangen is.  
 
Indien het heenbericht niet aan de technische specificaties voldoet, kan het worden afgekeurd 
in een retourbericht. De verzender van het heenbericht kan de afgekeurde regels opnieuw 
aanleveren in een nieuw Verzoek om toewijzing.  
Aansluitend aan het Verzoek om toewijzing stuurt de gemeente altijd binnen 5 werkdagen 
ofwel een toewijzingsbericht ofwel een of meerdere antwoordberichten aan de aanbieder. 
 
## 2.6 Vaststellen beschikking 
Naar aanleiding van de beoordeling stelt de gemeente een beschikking(1) vast voor de cliënt. 
Hierin wordt vastgelegd welke jeugdhulpproducten, met welke omvang en voor welke periode, 
de cliënt nodig heeft. Eén beschikking is het resultaat van één beoordeling en kan meerdere 
producten bevatten: de toegewezen producten. Binnen de Jeugdwet is het ook mogelijk dat 
voor ieder product voor één cliënt een aparte beschikking wordt opgesteld. Deze beschikkingen 
kunnen gelijktijdig geldig zijn. De beschikking wordt niet gecommuniceerd via het 
berichtenverkeer.

(1) Wanneer de toegang niet door de gemeente zelf bepaald is, kan de gemeente er voor kiezen om dit niet in een officiële
beschikking vast te leggen. Voor het berichtenverkeer gaan we er vanuit dat er altijd een 'beschikking' is afgegeven. Wanneer 
er geen officiële beschikking is afgegeven, wordt het recht op jeugdhulp toch behandeld als ware het vervat in een beschikking.

## 3 Toeleiden 
 
3.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant 
De informatiestroom rondom de toeleiding is van belang om een rechtmatige uitvoering te 
kunnen doen binnen de uitvoeringsvarianten inspanningsgericht en outputgericht.  
 
Toewijzen: De gemeente wijst de producten, die in de beschikking zijn vastgelegd, toe aan 
een of meerdere jeugdhulp aanbieders. De aanbieder krijgt daarmee de opdracht om voor de 
cliënt de toegewezen producten te leveren. De aanbieder stuurt altijd een retourbericht om aan 
te geven dat de toewijzing ontvangen is. Het versturen van dit retourbericht is belangrijke 
informatie, die ook de gemeente kan gebruiken in haar contact met de cliënt. Indien de 
aanbieder de opdracht niet kan of wil accepteren, neemt hij daarna buiten het 
berichtenverkeer om contact op met de gemeente. 
 
Intrekken: Indien de gemeente constateert dat een toegewezen product niet meer geleverd 
hoeft te worden, wordt de toewijzing voor dit product ingetrokken. Daarmee wordt de opdracht 
voor de jeugdhulp aanbieder beëindigd. De gemeente trekt de toewijzing in bijvoorbeeld als de 
cliënt overlijdt, verhuist naar een andere gemeente of voor het betreffende product een 
Persoonsgebonden Budget (pgb) gaat ontvangen.

## 3.1.1 Inspanningsgericht 
De gemeente en aanbieder maken duidelijke afspraken over de levering. De toewijzing kan 
specifiek, aspecifiek of generiek zijn.  
 
Bij een specifieke toewijzing is in de toewijzing opgenomen welk product er moet worden 
geleverd, wat het volume in tijdseenheden is en met welke frequentie er geleverd mag 
worden, voor ondersteuningsproducten met de eenheid stuks (inspanning) wordt een tarief per 
stuk afgesproken.  
 
Bij een aspecifieke toewijzing is het aan de aanbieder te bepalen welke van de gecontracteerde 
producten binnen de categorie worden ingezet. Daarbij wordt geen volume of frequentie 
aangegeven, maar kan met een budget worden aangegeven hoeveel er maximaal in de 
betreffende periode besteed mag worden aan zorg of ondersteuning. 
 
Bij een generieke toewijzing zijn zowel productcategorie als productcode leeg, en wordt alleen 
het maximum bedrag in het budget aangegeven dat in de betreffende periode aan zorg of 
ondersteuning gedeclareerd mag worden. 
 
Een gemeente kan meerdere toewijzingen tegelijkertijd (mits niet gestapeld) toewijzen aan 
een aanbieder.

## 3.1.2 Outputgericht 
De gemeente en aanbieder maken duidelijke afspraken over de te behalen output. De manier 
waarop deze output wordt behaald, is niet vastgelegd. Bij outputgerichte uitvoering is er een 
vooraf gedefinieerd product. In de toewijzing is opgenomen welke producten er moeten 
worden geleverd, hoeveel (in aantal) of voor welk bedrag (in euro’s) en met welke frequentie. 
 
3.2 Taakgerichte uitvoeringsvariant 
Binnen een taakgerichte uitvoeringsvariant wordt de toegang tot zorg en/of ondersteuning 
bepaald door de aanbieder; de gemeente speelt geen rol bij de toegang (geen toewijzing door 
gemeenten).  
 
De gemeente geeft een taak aan de aanbieder voor zorg en/of ondersteuning van een 
(deel)populatie. Deze aanbieder heeft de vrijheid om de invulling van deze taak vorm te 
geven. De aanbieder krijgt hiervoor een vooraf afgesproken totaalbedrag.

## 3.3 Toewijzen 
Met de toewijzing geeft de gemeente een aanbieder opdracht tot levering van jeugdhulp voor 
een specifieke cliënt. Het geeft de aanbieder het recht om de zorg te gaan leveren en is 
daarmee één van de rechtmatigheidsberichten.  
 
In het bericht wordt het toegewezen product omschreven. Dit toegewezen product kan 
aspecifiek zijn (dat wil zeggen dat alleen een productcategorie wordt toegewezen) of specifiek 
(dat wil zeggen dat binnen de productcategorie ook een specifieke productcode wordt 
toegewezen) of generiek (dat wil zeggen dat er geen productcategorie en ook geen 
productcode wordt toegewezen, maar alleen een budget). 
 
## 3.3.1 Wijzigen van een Toewijzing 
Nadat de toewijzing is toegekend en ontvangen door de aanbieder kunnen er diverse redenen 
zijn om de toewijzing te wijzigen.  
 
Indien de wijziging geconstateerd wordt door de gemeente (bv overlijden of overgang naar 
pgb), wordt er door de gemeente een gewijzigde toewijzing gestuurd. 
  
Indien de wijziging ontstaat bij de behandeling van de client, zal de aanbieder een Verzoek om 
wijziging sturen aan de gemeente. Daarin kunnen verschillende situaties worden aangevraagd:

* Verlengen van een toewijzing
* Verkorten van een toewijzing

* Wijzigen van het volume
* Wijzigen van het budget

* Aanvragen nieuw product.

De gemeenten zal als gevolg van het Verzoek om wijziging binnen 5 werkdagen een 
Antwoordbericht of een toewijzing sturen. Nadat de gemeente akkoord is met het verzoek om 
wijziging, zal de gehele aangevraagde situatie worden toegekend. 
 
Behalve de wijziging zelf (nieuwe einddatum) wordt in het bericht met de intrekking van de 
toewijzing ook meegegeven wat de reden van de wijziging is. Hiervoor is een speciale tabel 
beschikbaar waaruit de reden gekozen kan worden (codelijst Reden wijziging toewijzing, 
JZ002). Zie voor meer informatie de casuïstiek.  
 
## 3.3.2 Corrigeren van een Toewijzing  
Wanneer een afgegeven Toewijzing gecorrigeerd moet worden, bijvoorbeeld omdat een 
verkeerd Product is toegewezen, wordt dit doorgegeven als een Intrekking. Hierin wordt als 
RedenWijziging "13 (Verwijderd)" meegegeven en is de einddatum gelijk aan de ingangsdatum 
van de eerdere Toewijzing. De eerdere Toewijzing moet als 'niet verzonden' beschouwd 
worden. De gecorrigeerde Toewijzing kan met een nieuw ToewijzingNummer in hetzelfde 
bericht worden meegegeven.   
  
## 3.3.3 Berichtenverkeer Toewijzen 
Na ontvangst van een Toewijzing stuurt de aanbieder altijd binnen drie werkdagen een 
retourbericht om aan te geven dat de toewijzing ontvangen is. 
 
Indien het heenbericht niet aan de technische specificaties voldoet, kan het worden afgekeurd 
in een retourbericht. De verzender van het heenbericht kan de afgekeurde cliënten opnieuw 
aanleveren in een nieuwe Toewijzing.  
 
## 3.4 Intrekken 
De gemeente kan een eerder afgegeven toewijzing intrekken, daarmee wordt de opdracht tot 
levering van een jeugdhulpproduct voor een specifieke cliënt voor die aanbieder beëindigd. De 
intrekking bevat dezelfde gegevens als de toewijzing, maar nu met de einddatum ingevuld of 
met een einddatum die ligt vóór de einddatum van de eerder verzonden toewijzing.  
 
De gemeente kan een toewijzing bijvoorbeeld intrekken wanneer bij een nieuwe beoordeling 
wordt vastgesteld dat een cliënt de eerder toegewezen jeugdhulp niet meer nodig heeft. De 
toewijzing krijgt dan een (nieuwe) einddatum.

Ook kan het voorkomen dat de client de jeugdhulp bij een andere aanbieder gaat voortzetten. 
Dan krijgt alleen de toewijzing (toegewezen product) een (nieuwe) einddatum. 
 
Behalve de wijziging zelf (nieuwe einddatum) wordt ook meegegeven wat de reden van de 
wijziging is. Hiervoor is een speciale tabel beschikbaar waaruit de reden gekozen kan worden 
(codelijst Reden wijziging toewijzing JZ002). De redenen van wijziging zijn hieronder nader 
toegelicht. Zie voor meer informatie de casuistiek.  
 
## JZ002: Reden wijziging toewijzing

* Client overleden
De toewijzing moet worden gestopt, omdat de client is overleden.
Over het algemeen zal dan worden gevuld: einddatum toewijzing = overlijdensdatum client.   
 
* Contractwijziging  
Gemeente maakt een nieuwe contractafspraak met aanbieder, waardoor toewijzing nodig is 
met ander bijvoorbeeld andere productcodes. NB: niet elke contractwijziging zal leiden tot een 
nieuwe toewijzing.  
 
* Herbeoordeling: verlenging toewijzing 
Als gevolg van een herbeoordeling kan een toewijzing verlengd worden. Als de zorg verlengd 
wordt, dan kan eventueel gebruik gemaakt worden van dezelfde toewijzing.
 
* Herbeoordeling: verkorting toewijzing 
In verschillende situaties zal de huidige toewijzing ingetrokken moeten worden:

- Client moet ander product toegewezen krijgen.
- Client moet korter zorg krijgen.
- Client moet andere omvang krijgen, bijvoorbeeld meer uren per week, tenzij het een 
toewijzing in budget of totaal per toewijzing periode betreft.

* Uitstroom naar ander domein 
Client gaat over naar ander domein, bijvoorbeeld naar Wlz, en daarom eindigt de Jw 
toewijzing.  
 
* Verhuizing naar een andere gemeente  
De gemeente kan een afgegeven Toewijzing niet zomaar intrekken bij verhuizing naar een 
andere gemeente. De gemeente die de toewijzing heeft verstrekt, blijft verantwoordelijk voor 
de cliënt tot het moment dat de cliënt is overgedragen aan de gemeente die volgens het 
woonplaatsbeginsel verantwoordelijk is voor de cliënt. Dit betekent dat een toewijzing door de 
oude gemeente niet kan worden afgesloten voordat er zekerheid is dat de nieuwe gemeente 
een aansluitende toewijzing verzendt.  
 
* Wijziging leveringsvorm  
Client gaat gebruik maken van pgb.  
 
* Overstap naar andere aanbieder  
Client gaat naar een andere aanbieder, dus de toewijzing bij deze aanbieder moet beeindigd 
worden.  
 
* Overgang naar nieuwe bekostigingssystematiek  
De toewijzing is ingetrokken, omdat de client is overgegaan naar een andere 
regeling/bekostiging.  
 
* Gemeentelijke herindeling  
Volgens protocol gemeentelijke herindeling is deze toewijzing niet meer geldig. 
 
* Geinitieerd door de aanbieder 
Indien een toewijzing wijzigt als gevolg van een verzoek om wijziging, kan dit door de 
gemeente worden aangegeven middels deze code. Het is dan voor de aanbieder duidelijk op 
basis waarvan de wijziging is doorgevoerd.

* Verwijderd 
Als een toewijzing ten onrechte is verstuurd en de gemeente dit ongedaan wil maken. Hierbij 
wordt de einddatum gelijk gesteld aan de ingangsdatum. De toewijzing moet als niet 
verzonden beschouwd worden. 
 
* Administratieve correctie 
Als de gemeente een (invoer)fout heeft gemaakt die hersteld moet worden. De velden die 
gewijzigd mogen worden, zijn beschreven in OP033X1

## 3.4.1 Berichtenverkeer Intrekking 
Na ontvangst van een Intrekking stuurt de aanbieder altijd binnen drie werkdagen een 
retourbericht om aan te geven dat de intrekking ontvangen is. 
 
Indien het heenbericht niet aan de technische specificaties voldoet, kan het worden afgekeurd 
in een retourbericht. De verzender van het heenbericht kan de afgekeurde cliënten opnieuw 
aanleveren in een nieuwe Intrekking.

## 4 Leveren
De informatiestromen rondom de levering bieden inzicht in het feitelijk plaatsvinden van 
jeugdhulp. Met de Start- en Stopberichten is het voor de gemeente mogelijk om een cliënt te 
volgen, en te sturen op het feitelijk plaatsvinden van zorg en ondersteuning. Gemeenten zijn 
vrij in de mate waarin zij regie op cliëntniveau willen voeren, echter in het berichtenverkeer is 
het gebruik van regieberichten verplicht voor Inspannings- en Outputgericht werken. Hierbij 
maken gemeente en aanbieder afspraken over de invulling/betekenis van de start- en 
einddatums in de regieberichten. 
  
## 4.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant 
Voor de uitvoeringsvarianten Inspanningsgericht en Outputgericht (met uitzondering van de 
Gecertificeerde Instellingen) wordt gebruik gemaakt van de regieberichten. De aanbieder geeft 
aan de gemeente door wanneer de levering daadwerkelijk gestart wordt. De aanbieder 
reageert daarmee op de opdracht die de gemeente verstrekt heeft (toewijzing). Wanneer de 
jeugdhulp beëindigd wordt, geeft de aanbieder dit ook door aan de gemeente in een 
stopbericht. In het geval dat de levering tijdelijk beëindigd wordt, moet de aanbieder opnieuw 
doorgeven wanneer de levering hervat wordt of wanneer deze definitief beëindigd wordt. 
 
## 4.2 Taakgerichte uitvoeringsvariant 
In de uitvoeringsvariant Taakgericht verloopt de toegang tot jeugdhulp via de aanbieder, 
binnen de vooraf bepaalde kaders. In het kader van regievoering door de gemeente kan een 
afspraak tussen gemeente en aanbieder worden gemaakt over het gebruik van de 
informatiestromen voor start en stop jeugdhulp. De berichten staan in dat geval op zichzelf en 
zijn niet gerelateerd aan een toewijzing en/of een declaratie. 
 
## 4.3 Starten Jeugdhulp 
Met het Startbericht geeft de aanbieder aan de gemeente door wanneer hij gestart is met de 
levering. Het bericht is bedoeld om de gemeente inzicht te geven in het daadwerkelijk 
plaatsvinden van de levering van zorg en ondersteuning. Er kunnen geen rechten ontleend 
worden aan dit bericht, dat wil bijvoorbeeld zeggen dat er geen afhankelijkheid met de 
betaling (declaratie) mag bestaan. Het Startbericht is daarmee één van de regieberichten.  
 
Binnen een inspannings- of outputgerichte werkwijze is het Startbericht gerelateerd aan de 
toewijzing, het sleutelveld ToewijzingNummer is dan gevuld met het ToewijzingNummer uit de 
toewijzing. Na een toewijzing wordt één startbericht gestuurd om aan te geven dat de levering 
conform die toewijzing gestart is.  
 
Binnen een taakgerichte werkwijze kan het Startbericht gebruikt worden in het kader van 
regievoering door de gemeente. Het bericht is in dat geval nooit gerelateerd aan een 
toewijzing en daardoor zal het ToewijzingNummer leeg zijn.  
 
Het Startbericht bevat de clientgegevens en de gegevens over de producten waarvoor de 
levering is gestart. Indien het Startbericht is gerelateerd aan een toewijzing, dan geldt dat het 
product in het Startbericht gelijk is aan het product in de Toewijzing. Dit geldt zowel voor een 
aspecifieke toewijzing (indien de productcategorie is gevuld) als voor een specifieke toewijzing 
(waarbij productcategorie en productcode beide gevuld zijn). Indien er sprake is van een 
generieke toewijzing (waarbij productcategorie en productcode beide niet gevuld zijn), wordt 
het startzorg bericht ook generiek ingevoerd (geen productcategorie en productcode).

## 4.3.1 Doorgeven wijziging client situatie.  
Na ontvangst van de toewijzing is gestart met het leveren van ondersteuning en is het proces 
Leveren ondersteuning actief. Dit wordt voor de uitvoeringsvarianten inspannings- en 
outputgericht verplicht (met uitzondering van voor de Gecertificeerde Instellingen) bevestigd 
door het sturen van een startbericht.   
 
Binnen dit proces kan een verandering ontstaan in de situatie van de client, waardoor hij 
bijvoorbeeld meer of andere ondersteuning nodig heeft. Er is in dat geval een aanpassing
nodig van de te leveren zorg of ondersteuning. De aanbieder heeft hiervoor toestemming nodig 
van de gemeente. Om die toestemming aan te vragen, stuurt de aanbieder een verzoek om 
wijziging bericht. Hierin wordt de volledige gewenste nieuwe situatie weergegeven, het bericht 
bevat:
 
* Ongewijzigde producten, hiervan wordt alleen het toewijzingnummer ingevuld 
* Te wijzigen producten, hiervan wordt op basis van het toewijzingnummer aangegeven 
wat de nieuwe einddatum, omvang of budget moet zijn.
* Nieuw producten, hierin worden alle nieuwe producten opgegeven(inclusief datums, 
omvang en eventueel budget).

Afhankelijk van de soort wijziging wordt er een nieuwe en/of gewijzigde toewijzing gestuurd. 
Bijvoorbeeld wanneer een ander product nodig is wordt een nieuwe toewijzing verzonden 
waarin het vorige toegewezen product wordt ingetrokken en een ander product wordt 
toegewezen. Wanneer hetzelfde product langer, of juist korter, geleverd moet worden, wordt 
een gewijzigde toewijzing gestuurd met hetzelfde product met een andere einddatum. 
 
Net als bij het verwerken van een verzoek om toewijzing (zie proces 2.5 verzoek om 
toewijzing) kan een gemeente het verzoek honoreren met een toewijzing bericht, of afwijzen 
met een antwoordbericht. Ook hier kan de gemeente met een antwoordbericht aangeven dat 
er naar aanleiding van het verzoek eerst onderzoek gedaan moet worden alvorens en besluit 
kan worden genomen. 
 
Na ontvangst van de nieuwe toewijzing geeft de aanbieder met een startbericht door dat de 
levering gestart is. Indien een voorgaande toewijzing wordt ingetrokken, geeft de aanbieder 
door dat de levering op die toewijzing beeindigd is, zoals beschreven in het deelproces 
Beeindigen. Indien het een gewijzigde toewijzing betreft en er sprake is van doorlopende zorg, 
dan hoeft de aanbieder dit niet te melden met een nieuw startbericht. 
 
Een opsomming van de verschillende situaties rond wijziging en sturen van nieuw 
Toewijzingbericht staat beschreven in Procesbeschrijving Toeleiden/Intrekken Jeugdhulp.  
 
## 4.3.2 Berichtenverkeer Start Jeugdhulp 
Na ontvangst van een Startbericht stuurt de gemeente altijd binnen drie werkdagen een 
retourbericht om aan te geven dat het bericht ontvangen is. 
 
Indien het heenbericht niet aan de technische specificaties voldoet, kan het worden afgekeurd 
in een retourbericht. De verzender van het heenbericht kan de afgekeurde regels opnieuw 
aanleveren in een nieuw Startbericht.

## 4.4 Beëindigen Jeugdhulp 
Met het Stopbericht geeft de aanbieder aan de gemeente door wanneer de levering beeindigd 
is en wat de reden is van de beeindiging. Het bericht is bedoeld om de gemeente inzicht te 
geven in het daadwerkelijk plaatsvinden van de levering van zorg en ondersteuning. Er kunnen 
geen rechten ontleend worden aan dit bericht, dat wil bijvoorbeeld zeggen dat er geen 
afhankelijkheid met de betaling (declaratie) mag bestaan. Het Stopbericht is daarmee één van 
de regieberichten.  
De start van de levering wordt voor de uitvoeringsvarianten inspannings- en outputgericht 
verplicht (met uitzondering van voor de Gecertificeerde Instellingen) altijd doorgegeven met 
een Startbericht en de beeindiging van de levering wordt altijd doorgegeven met een 
Stopbericht. De beeindiging kan plaatsvinden op initiatief van de gemeente: de aanbieder 
ontvangt een Intrekkingbericht van de gemeente. Met het Stopbericht geeft de aanbieder door 
wanneer de levering definitief gestopt is.  
Ook als de einddatum conform de einddatum uit de Toewijzing is wordt een Stopbericht 
gestuurd.  
Na het sturen van een Stopbericht kan er binnen de kaders van de toewijzing opnieuw een 
Startbericht worden gestuurd, bijvoorbeeld in het geval van een tijdelijke beeindiging. Het is
niet toegestaan om tegelijkertijd meerdere Startberichten te versturen zonder tussenliggende 
stop.  
 
De beëindiging kan ook plaatsvinden op initiatief van de aanbieder. De aanbieder stuurt altijd 
een Stopbericht aan de gemeente wanneer de start van de levering met een Startbericht is 
doorgegeven. Het is vervolgens aan de gemeente om de betreffende toewijzing al dan niet 
overeenkomstig met een intrekkingsbericht te beeindigen.
 
Bij een tijdelijke beëindiging, bijvoorbeeld indien de cliënt wordt opgenomen in het 
ziekenhuis, verwacht de aanbieder dat de levering van de toegewezen jeugdhulp op 
een later moment weer hervat wordt. De afgegeven toewijzing blijft geldig en blijft bij 
de gemeente open staan. (toewijzing aanhouden). De aanbieder houdt contact met de 
cliënt en geeft aan de gemeente door wanneer de levering hervat wordt ofwel definitief 
wordt beëindigd (monitoren).
Het Stopbericht is altijd gerelateerd aan een eerder verzonden Startbericht op basis van de 
elementen in de logische sleutel. 
 
Het Stopbericht bevat cliëntgegevens en gegevens over de producten waarvoor de levering 
beëindigd is.  
  
## 4.4.1 Berichtenverkeer Stop Jeugdhulp 
Na ontvangst van een Stopbericht stuurt de gemeente altijd binnen drie werkdagen een 
retourbericht om aan te geven dat het bericht ontvangen is.  
 
Indien het heenbericht niet aan de technische specificaties voldoet, kan het worden afgekeurd 
in een retourbericht. De verzender van het heenbericht kan de afgekeurde regels opnieuw 
aanleveren in een nieuw Stopbericht.   
 
## 4.5 Monitoren 
Indien een cliënt voor langere tijd geen jeugdhulp ontvangt, bijvoorbeeld in het geval van een 
ziekenhuisopname, kan dit in het berichtenverkeer worden doorgegeven als een tijdelijke 
beëindiging van de levering. De aanbieder houdt contact met de cliënt. Indien de jeugdhulp 
weer hervat wordt, stuurt de aanbieder opnieuw een Startbericht. Dit Startbericht is 
gerelateerd aan de oorspronkelijke toewijzing. Indien de levering niet meer hervat wordt, 
stuurt de aanbieder nogmaals een Stopbericht. Dit Stopbericht is gerelateerd aan het 
oorspronkelijke Startbericht, maar bevat een reden voor de definitieve beëindiging (zie 
hiervoor codelijst JZ588: Reden Beëindiging) 
 
Gebruikmaken van deze functionaliteit dient in samenspraak met gemeente en aanbieder 
plaats te vinden.

## 5 Declareren Jeugdwet

## 5.1 Inspanningsgerichte en outputgerichte uitvoeringsvariant 
Voor de uitvoeringsvarianten inspanningsgericht en outputgericht wordt de geleverde zorg of 
ondersteuning gedeclareerd op cliëntniveau. 
 
De aanbieder declareert maandelijks de geleverde ondersteuning waarvoor de gemeente een 
opdracht heeft gegeven (toewijzing). 
 
## 5.2 Taakgericht uitvoeringsvariant 
Bij taakgerichte uitvoering is geen sprake van declaratie via het berichtenverkeer iJw. 
 
## 5.3 Aanleveren declaratie  
De aanbieder declareert in het berichtenverkeer de geleverde producten in overeenstemming 
met de toegewezen producten. De declaratieberichten zijn onderdeel van de rechtmatigheidsberichten. 
 
## 5.4 Retourinformatie declaratie  
De gemeente beantwoordt een declaratiebericht binnen 10 werkdagen na ontvangst met een 
declaratie-antwoordbericht.  
 
## 5.4.1 Retourinformatie declaratie 
In het declaratie-antwoordbericht wordt aangegeven welke prestaties zijn afgewezen. Het 
totaalbedrag dat toegekend wordt, wordt berekend op basis van de toegekende prestaties. De  
afgewezen prestaties kunnen door de aanbieder in een nieuw declaratiebericht gecorrigeerd 
worden aangeleverd.  
 
## 5.5 Berichtenverkeer declareren 
Na ontvangst van een declaratiebericht stuurt de gemeente altijd binnen 10 werkdagen een 
declaratie-antwoordbericht. Zie de procesbeschrijving bij “Aanleveren declaratie” voor meer 
informatie hierover. 
 
## 5.6 Afhandelen declaratie  
Aanbieder en gemeente weten op basis van de ingediende declaraties en de daarvan 
toegekende prestaties wat het bedrag is dat over een bepaalde periode door de gemeente 
moet worden uitbetaald.
