#Codelijst iJw release 3.2

- Lijstcodes beginnend met NUM worden in zowel Wmo als Jeugdwet gebruikt.
- Lijstcodes beginnend met COD worden in zowel Wmo als Jeugdwet gebruikt.
- Lijstcodes beginnend met WJ worden in zowel Wmo als Jeugdwet gebruikt.
- Lijstcodes beginnend met JZ worden alleen in de Jeugdwet gebruikt.
- Lijstcodes beginnend met WMO worden alleen in de WMO gebruikt.
- Lijstcodes WMO757 wordt in zowel Wmo als Jeugdwet gebruikt.
- Bedenk niet zelf nieuwe lijstnamen, lijstcodes, of codes.
- Let op: lijstnamen, lijstcodes en codes (bijv. Eenheid, COD002-VEKT, COD327, 01, 4) zijn louter administratieve identifiers zonder hiërarchische betekenis. Behandel ze als unieke sleutels die uitsluitend gebruikt worden voor verwijzing, niet voor interpretatie.
- zoek via lijstnaam
  
--------------
  
##Inhoudsopgave
- [Aanduiding woonadres] (#aanduiding-woonadres)
- [Berichtcode] (#berichtcode)
- [Code verwijzer] (#code-verwijzer)
- [Communicatievorm] (#communicatievorm)
- [Datumgebruik] (#datumgebruik)
- [Eenheid] (#eenheid)
- [Frequentie] (#frequentie)
- [Geslacht] (#geslacht)
- [Indicatie debet/credit] (#indicatie-debet/credit)
- [Ja of nee] (#ja-of-nee)
- [Juridische status] (#juridische-status)
- [Land] (#land)
- [Naamgebruik] (#naamgebruik)
- [Productcategorie] (#productcategorie)
- [Reden afwijzing verzoek] (#reden-afwijzing-verzoek)
- [Reden beeindiging] (#reden-beeindiging)
- [Reden beëindiging jeugdhulp] (#reden-beeindiging-jeugdhulp)
- [Reden verzoek] (#reden-verzoek)
- [Reden wijziging toewijzing] (#reden-wijziging-toewijzing)
- [Soort adres] (#soort-adres)
- [Soort relatie] (#soort-relatie)
- [Status aanlevering] (#status-aanlevering)
- [Verzoek antwoord] (#serzoek-antwoord)
- [Wettelijke vertegenwoordiging] (#wettelijke-vertegenwoordiging)

## Aanduiding woonadres

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|NUM061:Aanduiding woonadres|NUM061|AB|Aan boord|
|NUM061:Aanduiding woonadres|NUM061|BY|Bij|
|NUM061:Aanduiding woonadres|NUM061|TO|Tegenover|
|NUM061:Aanduiding woonadres|NUM061|WW|Woonwagen|

## Berichtcode

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD002-VEKT:Berichtcode|COD002-VEKT|436|JW301|
|COD002-VEKT:Berichtcode|COD002-VEKT|437|JW302|
|COD002-VEKT:Berichtcode|COD002-VEKT|438|JW305|
|COD002-VEKT:Berichtcode|COD002-VEKT|439|JW306|
|COD002-VEKT:Berichtcode|COD002-VEKT|440|JW307|
|COD002-VEKT:Berichtcode|COD002-VEKT|441|JW308|
|COD002-VEKT:Berichtcode|COD002-VEKT|446|JW315|
|COD002-VEKT:Berichtcode|COD002-VEKT|447|JW316|
|COD002-VEKT:Berichtcode|COD002-VEKT|486|JW317|
|COD002-VEKT:Berichtcode|COD002-VEKT|487|JW318|
|COD002-VEKT:Berichtcode|COD002-VEKT|488|JW319|
|COD002-VEKT:Berichtcode|COD002-VEKT|489|JW320|
|COD002-VEKT:Berichtcode|COD002-VEKT|490|JW323|
|COD002-VEKT:Berichtcode|COD002-VEKT|491|JW325|

## Code verwijzer

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD327:Code verwijzer|COD327|01|Gemeente|
|COD327:Code verwijzer|COD327|02|Huisarts|
|COD327:Code verwijzer|COD327|03|Jeugdarts|
|COD327:Code verwijzer|COD327|04|Gecertificeerde instelling|
|COD327:Code verwijzer|COD327|05|Medisch specialist|
|COD327:Code verwijzer|COD327|06|Zelfverwijzer/geen verwijzer|
|COD327:Code verwijzer|COD327|08|Rechter, Officier van Justitie, functionaris Justitiële jeugdinrichting|

## Cummunicatievorm

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD747:Communicatievorm|COD747|1|Tolk taal|
|COD747:Communicatievorm|COD747|2|Doventolk|
|COD747:Communicatievorm|COD747|3|Doofblindentolk|

## Datumgebruik

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD170:Datumgebruik|COD170|1|dag onbekend; alleen maand en jaar gebruiken|
|COD170:Datumgebruik|COD170|2|dag en maand onbekend; alleen jaar gebruiken|
|COD170:Datumgebruik|COD170|3|dag, maand en jaar onbekend; onbekende datum|

## Eenheid

|Lijstnaam|lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WJ756:Eenheid|WJ756|01|Minuut|
|WJ756:Eenheid|WJ756|04|Uur|
|WJ756:Eenheid|WJ756|14|Etmaal|
|WJ756:Eenheid|WJ756|16|Dagdeel (4 uur)|
|WJ756:Eenheid|WJ756|82|Stuks (output)|
|WJ756:Eenheid|WJ756|83|Euro's|
|WJ756:Eenheid|WJ756|84|Stuks (inspanning)|

## Frequentie

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WMO757:Frequentie|WMO757|1|Per dag|
|WMO757:Frequentie|WMO757|2|Per week|
|WMO757:Frequentie|WMO757|4|Per maand|
|WMO757:Frequentie|WMO757|6|Totaal binnen geldigheidsduur toewijzing|

## Geslacht

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD046:Geslacht|COD046|0|Onbekend|
|COD046:Geslacht|COD046|1|Mannelijk|
|COD046:Geslacht|COD046|2|Vrouwelijk|

## Indicatie debet/credit

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD043:Indicatie debet/credit|COD043|C|Creditbedrag en aantal|
|COD043:Indicatie debet/credit|COD043|D|Debetbedrag en aantal|

## Ja of Nee

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD260:Ja of nee|COD260|1|Ja|
|COD260:Ja of nee|COD260|2|Nee|

## Juridische status

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WJ232:Juridische status|WJ232|01|Rechterlijke machtiging (rm) voorlopig / voortgezette machtiging|
|WJ232:Juridische status|WJ232|02|RM op eigen verzoek|
|WJ232:Juridische status|WJ232|03|RM met voorwaardelijk ontslag|
|WJ232:Juridische status|WJ232|04|Onder toezichtstelling (ots)|
|WJ232:Juridische status|WJ232|05|In bewaring stelling (ibs)|
|WJ232:Juridische status|WJ232|11|Strafrechterlijke justitiele contacten: tbs|
|WJ232:Juridische status|WJ232|12|Strafrechterlijke justitiele contacten: overig|

## Land

|Lijstnaam|Lijstcode|Code|Waarde|
|---------|---------|----|------|
|COD032:Land|COD032|AD|ANDORRA|
|COD032:Land|COD032|AE|VERENIGDE|
|COD032:Land|COD032|AF|AFGHANISTAN|
|COD032:Land|COD032|AG|ANTIGUA|
|COD032:Land|COD032|AI|ANGUILA|
|COD032:Land|COD032|AL|ALBANIE|
|COD032:Land|COD032|AM|ARMENIE|
|COD032:Land|COD032|AO|ANGOLA|
|COD032:Land|COD032|AQ|ANTARTICA|
|COD032:Land|COD032|AR|ARGENTINIE|
|COD032:Land|COD032|AS|AMERIKAANS-SAMOA|
|COD032:Land|COD032|AT|OOSTENRIJK|
|COD032:Land|COD032|AU|AUSTRALIE|
|COD032:Land|COD032|AW|ARUBA|
|COD032:Land|COD032|AX|ÅLANDSEILANDEN|
|COD032:Land|COD032|AZ|AZERBEIDZJAN|
|COD032:Land|COD032|BA|BOSNIE|
|COD032:Land|COD032|BB|BARBADOS|
|COD032:Land|COD032|BD|BANGLADESH|
|COD032:Land|COD032|BE|BELGIE|
|COD032:Land|COD032|BF|BURKINA|
|COD032:Land|COD032|BG|BULGARIJE|
|COD032:Land|COD032|BH|BAHREIN|
|COD032:Land|COD032|BI|BURUNDI|
|COD032:Land|COD032|BJ|BENIN|
|COD032:Land|COD032|BL|SAINT|
|COD032:Land|COD032|BM|BERMUDA|
|COD032:Land|COD032|BN|BRUNEI|
|COD032:Land|COD032|BO|BOLIVIA|
|COD032:Land|COD032|BQ|BONAIRE,|
|COD032:Land|COD032|BR|BRAZILIE|
|COD032:Land|COD032|BS|BAHAMA'S|
|COD032:Land|COD032|BT|BHUTAN|
|COD032:Land|COD032|BV|BOUVET|
|COD032:Land|COD032|BW|BOTSWANA|
|COD032:Land|COD032|BY|WIT-RUSLand|
|COD032:Land|COD032|BZ|BELIZE|
|COD032:Land|COD032|CA|CANADA|
|COD032:Land|COD032|CC|COCOSEILANDEN|
|COD032:Land|COD032|CD|CONGO-KINSHASA|
|COD032:Land|COD032|CF|CENTRAAL-AFRIKAANSE|
|COD032:Land|COD032|CG|CONGO-BRAZZAVILLE|
|COD032:Land|COD032|CH|ZWITSERLand|
|COD032:Land|COD032|CI|IVOORKUST|
|COD032:Land|COD032|CK|COOKEILANDEN|
|COD032:Land|COD032|CL|CHILI|
|COD032:Land|COD032|CM|KAMEROEN|
|COD032:Land|COD032|CN|CHINA|
|COD032:Land|COD032|CO|COLOMBIA|
|COD032:Land|COD032|CR|COSTA|
|COD032:Land|COD032|CU|CUBA|
|COD032:Land|COD032|CV|KAAPVERDIE|
|COD032:Land|COD032|CW|CURAÇAO|
|COD032:Land|COD032|CX|CHRISTMASEILand|
|COD032:Land|COD032|CY|CYPRUS|
|COD032:Land|COD032|CZ|TSJECHIE|
|COD032:Land|COD032|DE|DUITSLand|
|COD032:Land|COD032|DJ|DJIBOUTI|
|COD032:Land|COD032|DK|DENEMARKEN|
|COD032:Land|COD032|DM|DOMINICA|
|COD032:Land|COD032|DO|DOMINICAANSE|
|COD032:Land|COD032|DZ|ALGERIJE|
|COD032:Land|COD032|EC|ECUADOR|
|COD032:Land|COD032|EE|ESTLand|
|COD032:Land|COD032|EG|EGYPTE|
|COD032:Land|COD032|EH|WESTELIJKE|
|COD032:Land|COD032|ER|ERITREA|
|COD032:Land|COD032|ES|SPANJE|
|COD032:Land|COD032|ET|ETHIOPIE|
|COD032:Land|COD032|FI|FINLand|
|COD032:Land|COD032|FJ|FIJI|
|COD032:Land|COD032|FK|FALKLANDEILANDEN|
|COD032:Land|COD032|FM|MICRONESIA|
|COD032:Land|COD032|FO|FAERÖER|
|COD032:Land|COD032|FR|FRANKRIJK|
|COD032:Land|COD032|GA|GABON|
|COD032:Land|COD032|GB|VERENIGD|
|COD032:Land|COD032|GD|GRENADA|
|COD032:Land|COD032|GE|GEORGIE|
|COD032:Land|COD032|GF|FRANS-GUYANA|
|COD032:Land|COD032|GG|GUERNSEY|
|COD032:Land|COD032|GH|GHANA|
|COD032:Land|COD032|GI|GIBRALTAR|
|COD032:Land|COD032|GL|GROENLand|
|COD032:Land|COD032|GM|GAMBIA|
|COD032:Land|COD032|GN|GUINEA|
|COD032:Land|COD032|GP|GUADELOUPE|
|COD032:Land|COD032|GQ|EQUATORIAAL-GUINEA|
|COD032:Land|COD032|GR|GRIEKENLand|
|COD032:Land|COD032|GS|ZUID-GEORGIE|
|COD032:Land|COD032|GT|GUATEMALA|
|COD032:Land|COD032|GU|GUAM|
|COD032:Land|COD032|GW|GUINEE-BISSAU|
|COD032:Land|COD032|GY|GUYANA|
|COD032:Land|COD032|HK|HONGKONG|
|COD032:Land|COD032|HM|HEARD|
|COD032:Land|COD032|HN|HONDURAS|
|COD032:Land|COD032|HR|KROATIE|
|COD032:Land|COD032|HT|HAÏTI|
|COD032:Land|COD032|HU|HONGARIJE|
|COD032:Land|COD032|ID|INDONESIE|
|COD032:Land|COD032|IE|IERLand|
|COD032:Land|COD032|IL|ISRAEL|
|COD032:Land|COD032|IM|ISLE|
|COD032:Land|COD032|IN|INDIA|
|COD032:Land|COD032|IO|BRITS|
|COD032:Land|COD032|IQ|IRAK|
|COD032:Land|COD032|IR|IRAN|
|COD032:Land|COD032|IS|IJSLand|
|COD032:Land|COD032|IT|ITALIE|
|COD032:Land|COD032|JE|JERSEY|
|COD032:Land|COD032|JM|JAMAICA|
|COD032:Land|COD032|JO|JORDANIE|
|COD032:Land|COD032|JP|JAPAN|
|COD032:Land|COD032|KE|KENIA|
|COD032:Land|COD032|KG|KIRGIZIE|
|COD032:Land|COD032|KH|CAMBODJA|
|COD032:Land|COD032|KI|KIRIBATI|
|COD032:Land|COD032|KM|COMOREN|
|COD032:Land|COD032|KN|SAINT|
|COD032:Land|COD032|KP|NOORD-KOREA|
|COD032:Land|COD032|KR|ZUID-KOREA|
|COD032:Land|COD032|KW|KOEWEIT|
|COD032:Land|COD032|KY|CAYMANEILANDEN|
|COD032:Land|COD032|KZ|KAZACHSTAN|
|COD032:Land|COD032|LA|LAOS|
|COD032:Land|COD032|LB|LIBANON|
|COD032:Land|COD032|LC|SAINT|
|COD032:Land|COD032|LI|LIECHTENSTEIN|
|COD032:Land|COD032|LK|SRI|
|COD032:Land|COD032|LR|LIBERIA|
|COD032:Land|COD032|LS|LESOTHO|
|COD032:Land|COD032|LT|LITOUWEN|
|COD032:Land|COD032|LU|LUXEMBURG|
|COD032:Land|COD032|LV|LETLand|
|COD032:Land|COD032|LY|LIBIE|
|COD032:Land|COD032|MA|MAROKKO|
|COD032:Land|COD032|MC|MONACO|
|COD032:Land|COD032|MD|MOLDAVIE|
|COD032:Land|COD032|ME|MONTENEGRO|
|COD032:Land|COD032|MF|SAINT|
|COD032:Land|COD032|MG|MADAGASKAR|
|COD032:Land|COD032|MH|MARSHALLEILANDEN|
|COD032:Land|COD032|MK|MACEDONIE|
|COD032:Land|COD032|ML|MALI|
|COD032:Land|COD032|MM|MYANMAR|
|COD032:Land|COD032|MN|MONGOLIE|
|COD032:Land|COD032|MO|MACAU|
|COD032:Land|COD032|MP|NOORDELIJKE|
|COD032:Land|COD032|MQ|MARTINIQUE|
|COD032:Land|COD032|MR|MAURITANIE|
|COD032:Land|COD032|MS|MONTSERRAT|
|COD032:Land|COD032|MT|MALTA|
|COD032:Land|COD032|MU|MAURITIUS|
|COD032:Land|COD032|MV|MALDIVEN|
|COD032:Land|COD032|MW|MALAWI|
|COD032:Land|COD032|MX|MEXICO|
|COD032:Land|COD032|MY|MALEISIE|
|COD032:Land|COD032|MZ|MOZAMBIQUE|
|COD032:Land|COD032|NA|NAMIBIE|
|COD032:Land|COD032|NC|NIEUW-CALEDONIE|
|COD032:Land|COD032|NE|NIGER|
|COD032:Land|COD032|NF|NORFOLK|
|COD032:Land|COD032|NG|NIGERIA|
|COD032:Land|COD032|NI|NICARAGUA|
|COD032:Land|COD032|NL|NEDERLand|
|COD032:Land|COD032|NO|NOORWEGEN|
|COD032:Land|COD032|NP|NEPAL|
|COD032:Land|COD032|NR|NAURU|
|COD032:Land|COD032|NU|NIUE|
|COD032:Land|COD032|NZ|NIEUW-ZEELand|
|COD032:Land|COD032|OM|OMAN|
|COD032:Land|COD032|PA|PANAMA|
|COD032:Land|COD032|PE|PERU|
|COD032:Land|COD032|PF|FRANS-POLYNESIE|
|COD032:Land|COD032|PG|PAPOEA-NIEUW-GUINEA|
|COD032:Land|COD032|PH|FILIPIJNEN|
|COD032:Land|COD032|PK|PAKISTAN|
|COD032:Land|COD032|PL|POLEN|
|COD032:Land|COD032|PM|SAINT-PIERRE|
|COD032:Land|COD032|PN|PITCAIRNEILANDEN|
|COD032:Land|COD032|PR|PUERTO|
|COD032:Land|COD032|PS|PALESTIJNSE|
|COD032:Land|COD032|PT|PORTUGAL|
|COD032:Land|COD032|PW|PALAU|
|COD032:Land|COD032|PY|PARAGUAY|
|COD032:Land|COD032|QA|QATAR|
|COD032:Land|COD032|RE|RÉUNION|
|COD032:Land|COD032|RO|ROEMENIE|
|COD032:Land|COD032|RS|SERVIE|
|COD032:Land|COD032|RU|RUSLand|
|COD032:Land|COD032|RW|RWANDA|
|COD032:Land|COD032|SA|SAOEDI-ARABIE|
|COD032:Land|COD032|SB|SALOMONSEILANDEN|
|COD032:Land|COD032|SC|SEYCHELLEN|
|COD032:Land|COD032|SD|SOEDAN|
|COD032:Land|COD032|SE|ZWEDEN|
|COD032:Land|COD032|SG|SINGAPORE|
|COD032:Land|COD032|SH|SINT-HELENA|
|COD032:Land|COD032|SI|SLOVENIE|
|COD032:Land|COD032|SJ|SPITSBERGEN|
|COD032:Land|COD032|SK|SLOWAKIJE|
|COD032:Land|COD032|SL|SIERRA|
|COD032:Land|COD032|SM|SAN|
|COD032:Land|COD032|SN|SENEGAL|
|COD032:Land|COD032|SO|SOMALIE|
|COD032:Land|COD032|SR|SURINAME|
|COD032:Land|COD032|SS|ZUID|
|COD032:Land|COD032|ST|SAO|
|COD032:Land|COD032|SV|EL|
|COD032:Land|COD032|SX|SINT|
|COD032:Land|COD032|SY|SYRIE|
|COD032:Land|COD032|SZ|SWAZILand|
|COD032:Land|COD032|TC|TURKS-|
|COD032:Land|COD032|TD|TSJAAD|
|COD032:Land|COD032|TF|FRANSE|
|COD032:Land|COD032|TG|TOGO|
|COD032:Land|COD032|TH|THAILand|
|COD032:Land|COD032|TJ|TADZJIKISTAN|
|COD032:Land|COD032|TK|TOKELAU|
|COD032:Land|COD032|TL|OOST-TIMOR|
|COD032:Land|COD032|TM|TURKMENISTAN|
|COD032:Land|COD032|TN|TUNESIE|
|COD032:Land|COD032|TO|TONGA|
|COD032:Land|COD032|TR|TURKIJE|
|COD032:Land|COD032|TT|TRINIDAD|
|COD032:Land|COD032|TV|TUVALU|
|COD032:Land|COD032|TW|TAIWAN|
|COD032:Land|COD032|TZ|TANZANIA|
|COD032:Land|COD032|UA|OEKRAINE|
|COD032:Land|COD032|UG|OEGANDA|
|COD032:Land|COD032|UM|KLEINE|
|COD032:Land|COD032|US|VERENIGDE|
|COD032:Land|COD032|UY|URUGUAY|
|COD032:Land|COD032|UZ|OEZBEKISTAN|
|COD032:Land|COD032|VA|VATICAANSTAD|
|COD032:Land|COD032|VC|SAINT|
|COD032:Land|COD032|VE|VENEZUELA|
|COD032:Land|COD032|VG|BRITSE|
|COD032:Land|COD032|VI|AMERIKAANSE|
|COD032:Land|COD032|VN|VIETNAM|
|COD032:Land|COD032|VU|VANUATU|
|COD032:Land|COD032|WF|WALLIS|
|COD032:Land|COD032|WS|SAMOA|
|COD032:Land|COD032|YE|JEMEN|
|COD032:Land|COD032|YT|MAYOTTE|
|COD032:Land|COD032|ZA|ZUID-AFRIKA|
|COD032:Land|COD032|ZM|ZAMBIA|
|COD032:Land|COD032|ZW|ZIMBABWE|

## Naamgebruik

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD700:Naamgebruik|COD700|1|Eigen naam|
|COD700:Naamgebruik|COD700|2|Naam echtgenoot of geregistreerd partner of alternatieve naam|
|COD700:Naamgebruik|COD700|3|Naam echtgenoot of geregistreerd partner gevolgd door eigen naam|
|COD700:Naamgebruik|COD700|4|Eigen naam gevolgd door naam echtgenoot of geregistreerd partner|
|COD700:Naamgebruik|COD700|5|Pseudoniem|
|COD700:Naamgebruik|COD700|6|Niet-natuurlijk persoon|

## Productcategorie

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|JZ020:Productcategorie|JZ020|31|(2015) Zonder verblijf: uitgevoerd door wijk- of buurtteam|
|JZ020:Productcategorie|JZ020|32|(2015) Zonder verblijf: ambulante jeugdhulp op locatie van de aanbieder|
|JZ020:Productcategorie|JZ020|33|(2015) Zonder verblijf: daghulp op locatie van de aanbieder|
|JZ020:Productcategorie|JZ020|34|(2015) Zonder verblijf: jeugdhulp in het netwerk van de jeugdige|
|JZ020:Productcategorie|JZ020|35|(2015) Met verblijf: pleegzorg|
|JZ020:Productcategorie|JZ020|36|(2015) Met verblijf: gezinsgericht|
|JZ020:Productcategorie|JZ020|37|(2015) Met verblijf: gesloten plaatsing|
|JZ020:Productcategorie|JZ020|38|(2015) Met verblijf: overig residentieel|
|JZ020:Productcategorie|JZ020|40|Persoonlijke verzorging|
|JZ020:Productcategorie|JZ020|41|Dagbehandeling|
|JZ020:Productcategorie|JZ020|42|Vervoerdiensten|
|JZ020:Productcategorie|JZ020|43|Jeugdhulp verblijf (incl. behandeling)|
|JZ020:Productcategorie|JZ020|44|Jeugdhulp verblijf (excl. behandeling)|
|JZ020:Productcategorie|JZ020|45|Jeugdhulp ambulant|
|JZ020:Productcategorie|JZ020|46|Jeugdhulp crisis|
|JZ020:Productcategorie|JZ020|47|Jeugdreclassering|
|JZ020:Productcategorie|JZ020|48|Jeugdbescherming|
|JZ020:Productcategorie|JZ020|49|Activiteiten in het preventief justitieel kader|
|JZ020:Productcategorie|JZ020|50|Maatwerkarrangementen jeugd|
|JZ020:Productcategorie|JZ020|51|Generalistische basis-ggz|
|JZ020:Productcategorie|JZ020|52|Specialistische ggz|
|JZ020:Productcategorie|JZ020|53|Kindergeneeskunde|
|JZ020:Productcategorie|JZ020|54|Jeugd-ggz|
|JZ020:Productcategorie|JZ020|55|Landelijk ingekochte zorg|

## Reden afwijzing verzoek

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WJ759:Reden afwijzing verzoek|WJ759|1|Geen wijziging, maar nieuwe aanvraag|
|WJ759:Reden afwijzing verzoek|WJ759|2|Past niet binnen budget|
|WJ759:Reden afwijzing verzoek|WJ759|3|Geen contract|
|WJ759:Reden afwijzing verzoek|WJ759|4|Past niet binnen contract|
|WJ759:Reden afwijzing verzoek|WJ759|5|Andere gemeente|
|WJ759:Reden afwijzing verzoek|WJ759|6|Stapeling|
|WJ759:Reden afwijzing verzoek|WJ759|7|Zorginhoudelijke afkeur|
|WJ759:Reden afwijzing verzoek|WJ759|8|Woonplaatsbeginsel|
|WJ759:Reden afwijzing verzoek|WJ759|9|Leeftijdsgrens is bereikt|

## Reden beeindiging

|Lijstnaam|Lijstcode|Code|Waarde|Gebruik|
|:--------|---------|----|------|-------|
|JZ588:Reden beeindiging|JZ588|02|Overlijden|Indien de client is overleden wordt deze code gebruikt|
|JZ588:Reden beeindiging|JZ588|20|Levering is tijdelijk beeindigd.|
|JZ588:Reden beeindiging|JZ588|31|Levering is volgens plan beeindigd.|Enige wijzigingen in het plan zijn normaal. Het is niet wenselijk om te rigide vast te houden aan een vooropgesteld plan. Als je met elkaar, zoals gepland, het traject doorloopt en niet voortijdig stopt, is het traject volgens plan afgesloten. Ook als de jongere de leeftijd van 18 jaar bereikt en de jeugdhulp wordt beëindigd|
|JZ588:Reden beeindiging|JZ588|32|Voortijdig afgesloten: eenzijdig door de client.|Het traject wordt voortijdig afgesloten, bijvoorbeeld omdat: 1. de cliënt op eigen initiatief naar een andere zorgaanbieder gaat; 2. de cliënt ontevreden is over de zorg; 3. de cliënt vindt dat de zorg niet (meer) nodig is; 4. cliënt geen hulp accepteert. Dit kan gaan om cliënten die ineens niet meer op afspraken verschijnen maar ook in een overleg aangeven te willen stoppen. Als de aanbieder nog wel mogelijkheden ziet om de client te helpen, is de afsluiting eenzijdig door de cliënt. Dit brengt in beeld hoe vaak je cliënten verliest waarmeeje dacht nog vooruitgang te kunnen boeken, uitval.|
|JZ588:Reden beeindiging|JZ588|33|Voortijdig afgesloten: eenzijdig door de aanbieder.|Het lukt de aanbieder niet voldoende passende hulp te bieden. De aanbieder komt tot de conclusie dat verdere hulp vanuit aanbieder niet meer haalbaar is, verantwoord is (bijvoorbeeld vanwege agressie richting de hulpverlener) en/of geen perspectief meer kent. Als de cliënt die conclusie niet deelt, geldt: ‘Voortijdig afgesloten: eenzijdig door de aanbieder.|
|JZ588:Reden beeindiging|JZ588|34|Voortijdig afgesloten: in overeenstemming.|De situatie van de jeugdige of het gezin is veranderd waardoor de gestarte hulp niet meer passend is. Als de cliënt en behandelaar het eens zijn dat de eerder afgesproken hulp geen toegevoegde waarde meer heeft, of dat andere hulp nodig is dan dat binnen het lopende traject geboden kan worden.|
|JZ588:Reden beeindiging|JZ588|35|Voortijdig afgesloten: wegens externe omstandigheden.|Indien er externe omstandigheden zijn die noodzaken dat de zorg moet worden gestopt, wordt deze code gebruikt. Denk bv Verhuizing, het overlijden van de cliënt, langdurige vermissing of ontvoering van het kind|
|JZ588:Reden beeindiging|JZ588|36|Geinitieerd door de gemeente|Indien op intiatief van een gemeente een toewijzing wordt beëindigd, wordt deze code gebruikt.|
|JZ588:Reden beeindiging|JZ588|37|In verband met wijzigingsverzoek|Indien op initatief van de aanbieder een bepaalde zorg die geleverd wordt, niet meer geleverd gaat worden, en de aanbieder heeft en VOW ingediend, wordt deze code gebruikt.|
|JZ588:Reden beeindiging|JZ588|38|Overstap naar andere aanbieder|Client gaat naar een andere aanbieder, dus de toewijzing bij deze aanbieder moet beeindigd worden.|
|JZ588:Reden beeindiging|JZ588|39|Uitstroom naar ander domein|Client gaat over naar ander domein, bijvoorbeeld naar Wlz, en daarom moet de zorg vanuit de Jeugdwet worden beëindigd. Ook de toewijzing zal hierdoor worden beeindigd.|

## Reden beëindiging jeugdhulp (CBS)
# Beleidsinformatie Jeugd

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|Reden Beeindiging Jeugdhulp|CBS|01|Beëindigd volgens plan|
|Reden Beeindiging Jeugdhulp|CBS|02|Voortijdig afgesloten: in overeenstemming|
|Reden Beeindiging Jeugdhulp|CBS|03|Voortijdig afgesloten: eenzijdig door de cliënt|
|Reden Beeindiging Jeugdhulp|CBS|04|Voortijdig afgesloten: eenzijdig door de aanbieder|
|Reden Beeindiging Jeugdhulp|CBS|05|Voortijdig afgesloten: wegens externe omstandigheden|

## Reden verzoek

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WJ758:Reden verzoek|WJ758|1|Verandering clientsituatie|
|WJ758:Reden verzoek|WJ758|2|Wijziging zorgplan|

## Reden wijziging toewijzing

|Lijstnaam|Lijstcode|Code|Waarde|Gebruik|
|:--------|---------|----|------|-------|
|JZ002:Reden wijziging toewijzing|JZ002|01|Administratieve correctie (vervallen)|nvt|
|JZ002:Reden wijziging toewijzing|JZ002|02|Client overleden|De toewijzing moet worden gestopt, omdat de client is overleden. Over het algemeen zal dan worden gevuld: einddatum toewijzing = overlijdensdatum client.|
|JZ002:Reden wijziging toewijzing|JZ002|03|Contractwijziging|Gemeente maakt een nieuwe contractafspraak met aanbieder, waardoor toewijzing nodig is met ander bijvoorbeeld andere productcodes. NB: niet elke contractwijziging zal leiden tot een nieuwe toewijzing.|
|JZ002:Reden wijziging toewijzing|JZ002|04|Herbeoordeling: verlenging toewijzing|Als gevolg van een herbeoordeling kan een toewijzing verlengd worden. Als de zorg verlengd wordt, dan kan eventueel gebruik gemaakt worden van dezelfde toewijzing.|
|JZ002:Reden wijziging toewijzing|JZ002|05|Herbeoordeling: verkorting toewijzing|In verschillende situaties zal de huidige toewijzing ingetrokken moeten worden: Client moet ander product toegewezen krijgen. Client moet korter zorg krijgen. Client moet andere omvang krijgen, bijvoorbeeld meer uren per week, tenzij het een toewijzing in budget of totaal per toewijzing periode betreft|
|JZ002:Reden wijziging toewijzing|JZ002|06|Uitstroom naar ander domein|Client gaat over naar ander domein, bijvoorbeeld naar Wlz, en daarom eindigt de Jw toewijzing.|
|JZ002:Reden wijziging toewijzing|JZ002|07|Verhuizing naar een andere gemeente|De gemeente kan een afgegeven Toewijzing niet zomaar intrekken bij verhuizing naar een andere gemeente. De gemeente die de toewijzing heeft verstrekt, blijft  er verantwoordelijk voor de cliënt tot het moment dat de cliënt is overgedragen aan de gemeente die volgens het woonplaatsbeginsel verantwoordelijk is voor de cliënt. Dit betekent dat een toewijzing door de oude gemeente niet kan worden afgesloten voordat er zekerheid is dat de nieuwe gemeente een aansluitende toewijzing verzendt.| 
|JZ002:Reden wijziging toewijzing|JZ002|08|Wijziging leveringsvorm|Client gaat gebruik maken van pgb.|
|JZ002:Reden wijziging toewijzing|JZ002|09|Overstap naar andere aanbieder|Client gaat naar een andere aanbieder, dus de toewijzing bij deze aanbieder moet beeindigd worden.|
|JZ002:Reden wijziging toewijzing|JZ002|10|Overgang naar nieuwe bekostigingssystematiek|De toewijzing is ingetrokken, omdat de client is overgegaan naar een andere regeling/bekostiging.|
|JZ002:Reden wijziging toewijzing|JZ002|11|Gemeentelijke herindeling|Volgens protocol gemeentelijke herindeling is deze toewijzing niet meer geldig.|
|JZ002:Reden wijziging toewijzing|JZ002|12|Geinitieerd door de aanbieder|Indien een toewijzing wijzigt als gevolg van een verzoek om wijziging, kan dit door de gemeente worden aangegeven middels deze code. Het is dan voor de aanbieder duidelijk op 
basis waarvan de wijziging is doorgevoerd.|
|JZ002:Reden wijziging toewijzing|JZ002|13|Verwijderd|Als een toewijzing ten onrechte is verstuurd en de gemeente dit ongedaan wil maken. Hierbij wordt de einddatum gelijk gesteld aan de ingangsdatum. De toewijzing moet als niet verzonden beschouwd worden.|
|JZ002:Reden wijziging toewijzing|JZ002|14|Administratieve correctie|Als de gemeente een (invoer)fout heeft gemaakt die hersteld moet worden. De velden die gewijzigd mogen worden, zijn beschreven in OP033X1|

## Soort adres

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD757:Soort adres|COD757|01|BRP-adres|
|COD757:Soort adres|COD757|02|Correspondentie-adres|
|COD757:Soort adres|COD757|03|Verblijfadres|
|COD757:Soort adres|COD757|04|Tijdelijk verblijfadres|

## Soort relatie

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|COD472:Soort relatie|COD472|03|Curator (juridisch)|
|COD472:Soort relatie|COD472|04|Financieel (gemachtigd)|
|COD472:Soort relatie|COD472|05|Financieel (toetsing)|
|COD472:Soort relatie|COD472|06|Leefeenheid|
|COD472:Soort relatie|COD472|07|Hulpverlener|
|COD472:Soort relatie|COD472|08|Specialist|
|COD472:Soort relatie|COD472|09|Anders|
|COD472:Soort relatie|COD472|10|Ouder|
|COD472:Soort relatie|COD472|11|Voogd|
|COD472:Soort relatie|COD472|12|Partner/echtgeno(o)t(e)|
|COD472:Soort relatie|COD472|13|Pleegouder|
|COD472:Soort relatie|COD472|14|Bewindvoerder|
|COD472:Soort relatie|COD472|15|Mentor|
|COD472:Soort relatie|COD472|16|Zoon/dochter|
|COD472:Soort relatie|COD472|17|Familielid|
|COD472:Soort relatie|COD472|18|Gezinslid|
|COD472:Soort relatie|COD472|19|Buur|
|COD472:Soort relatie|COD472|20|Vriend(in)/kennis|
|COD472:Soort relatie|COD472|21|Clientondersteuner|
|COD472:Soort relatie|COD472|22|Huisarts|
|COD472:Soort relatie|COD472|23|Erven van|
|COD472:Soort relatie|COD472|24|Werkgever|
|COD472:Soort relatie|COD472|25|Wijkcoach|

## Status aanlevering

|Lijstnaam|  Lijstcode|Code|Waarde|
|:--------|-----------|----|------|
|COD467:Status aanlevering|COD467|1|Eerste aanlevering|
|COD467:Status aanlevering|COD467|2|Gewijzigde aanlevering|
|COD467:Status aanlevering|COD467|3|Verwijderen aanlevering|
|COD467:Status aanlevering|COD467|9|Niet van toepassing (ongewijzigd)|

## Verzoek antwoord

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WJ760:Verzoek antwoord|WJ760|1|Verzoek afgewezen|
|WJ760:Verzoek antwoord|WJ760|2|Aanvraag in onderzoek|

## Wettelijke vertenwoordiging

|Lijstnaam|Lijstcode|Code|Waarde|
|:--------|---------|----|------|
|WJ003:Wettelijke vertegenwoordiging|WJ003|06|Voogdij|
|WJ003:Wettelijke vertegenwoordiging|WJ003|07|Bewindvoering|
|WJ003:Wettelijke vertegenwoordiging|WJ003|08|Mentorschap|
|WJ003:Wettelijke vertegenwoordiging|WJ003|09|Onder curatele stelling|
|WJ003:Wettelijke vertegenwoordiging|WJ003|10|Zaakwaarneming|


















