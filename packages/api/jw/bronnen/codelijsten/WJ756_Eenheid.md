Ja. Voor RAG/vector search zijn tabellen vaak minder goed vindbaar dan expliciete tekst met één code per sectie. Je wilt dat vragen zoals:

* "Wat betekent eenheid 14?"
* "Wat is code 14?"
* "Etmaal welke eenheidscode?"
* "Wat betekent WJ756 code 14?"
* "Eenheid etmaal"
* "Mag ik declareren in etmalen?"

allemaal dezelfde chunk vinden.

Ik zou de codelijst daarom omzetten naar een structuur zoals hieronder.

---

# WJ756 - Eenheid

## Metadata

| Eigenschap      | Waarde      |
| --------------- | ----------- |
| Codelijst       | WJ756       |
| Naam            | Eenheid     |
| Domein          | iJw         |
| Versie          | 3.2         |
| Gegevenselement | LDT_Eenheid |

## Definitie

De eenheid waarin het volume van een product, prestatie of zorg wordt uitgedrukt.

De code uit deze codelijst bepaalt hoe het volume en de frequentie van een toewijzing of declaratie moeten worden geïnterpreteerd.

---

## Zoekindex

**Synoniemen en zoektermen**

* eenheid
* eenheidscode
* code eenheid
* volume-eenheid
* declaratie-eenheid
* zorgeenheid
* WJ756
* LDT_Eenheid
* iJw eenheid
* producteenheid
* frequentie-eenheid

---

# Code 01 - Minuut

## Betekenis

De zorg wordt uitgedrukt in minuten.

## Code

01

## Zoektermen

* 01
* minuut
* minuten
* tijdseenheid minuut
* eenheid minuut
* code 01

## Voorbeeld

Volume 120 betekent 120 minuten zorg.

---

# Code 04 - Uur

## Betekenis

De zorg wordt uitgedrukt in uren.

## Code

04

## Zoektermen

* 04
* uur
* uren
* tijdseenheid uur
* eenheid uur
* code 04

## Voorbeeld

Volume 8 betekent 8 uur zorg.

---

# Code 14 - Etmaal

## Betekenis

De zorg wordt uitgedrukt in etmalen.

## Code

14

## Zoektermen

* 14
* etmaal
* etmalen
* dag en nacht
* verblijfsetmaal
* eenheid etmaal
* code 14
* WJ756 14

## Voorbeeld

Volume 6 betekent 6 etmalen zorg.

### Veelgestelde vragen

**Wat betekent eenheid 14?**

Eenheidscode 14 betekent etmaal.

**Welke code hoort bij etmaal?**

Bij etmaal hoort code 14.

---

# Code 16 - Dagdeel (4 uur)

## Betekenis

De zorg wordt uitgedrukt in dagdelen van vier uur.

## Code

16

## Zoektermen

* 16
* dagdeel
* dagdelen
* 4 uur
* vier uur
* code 16

## Voorbeeld

Volume 3 betekent 3 dagdelen van ieder 4 uur.

---

# Code 82 - Stuks (output)

## Betekenis

De zorg wordt uitgedrukt in geleverde producten of resultaten.

## Code

82

## Zoektermen

* 82
* stuks output
* output
* resultaat
* code 82

---

# Code 83 - Euro's

## Betekenis

De zorg wordt uitgedrukt in euro's.

## Code

83

## Zoektermen

* 83
* euro
* euro's
* bedrag
* geldbedrag
* code 83

---

# Code 84 - Stuks (inspanning)

## Betekenis

De zorg wordt uitgedrukt in aantallen verrichte activiteiten of inspanningen.

## Code

84

## Zoektermen

* 84
* stuks inspanning
* inspanning
* activiteit
* code 84

---

## Overzicht alle codes

| Code | Betekenis          |
| ---- | ------------------ |
| 01   | Minuut             |
| 04   | Uur                |
| 14   | Etmaal             |
| 16   | Dagdeel (4 uur)    |
| 82   | Stuks (output)     |
| 83   | Euro's             |
| 84   | Stuks (inspanning) |

---

## AI-instructie

Wanneer een vraag een waarde bevat voor het gegevenselement **LDT_Eenheid**:

1. Zoek de code op in codelijst WJ756.
2. Vertaal de code naar de betekenis.
3. Gebruik de betekenis in het antwoord.
4. Noem indien relevant zowel code als betekenis.
5. Voer berekeningen uit op basis van de betekenis van de eenheid.
6. Gebruik nooit uitsluitend de numerieke code zonder betekenis.

---

Deze structuur werkt meestal veel beter voor RAG dan alleen een tabel, omdat iedere code meerdere keren voorkomt in natuurlijke taal, zoektermen, voorbeelden en FAQ-vorm. Daardoor worden vragen als **"wat betekent 14?"**, **"eenheid 14"** en **"etmaal code"** veel betrouwbaarder gevonden.
