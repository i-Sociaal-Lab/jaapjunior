````markdown id="gk48qm"
# IV007 - Hoe wordt de naam van een cliënt of relatie vastgelegd?

## Metadata

| Veld | Waarde |
|---|---|
| ID | IV007 |
| Type | Interpretatievraag |
| Domein | iJw / iWmo |
| Onderwerp | Naamgegevens |
| Thema | Vastlegging persoonsgegevens |
| Status | Productie |

---

## Vraag

Hoe wordt de naam van een cliënt of relatie vastgelegd?

---

## Antwoord

Van een cliënt of relatie worden de achternaam, voorvoegsel en voornamen en/of voorletters gescheiden vastgelegd.

Voor het vastleggen van de `VolledigeNaam` van een cliënt geldt het volgende format:

- De `Geslachtsnaam` wordt altijd vastgelegd.
  - Deze bestaat uit de `Naam` en eventueel een `Voorvoegsel`.

- De `Partnernaam` kan worden vastgelegd.
  - Ook deze bestaat uit de `Naam` en eventueel een `Voorvoegsel`.

- `Voornamen` kunnen worden vastgelegd, gescheiden door spaties.

- `Voorletters` kunnen worden vastgelegd:
  - aaneengesloten;
  - zonder punten;
  - zonder spaties.

- `NaamGebruik` geeft de gewenste aanspreekvorm aan.
  - Hiermee wordt bij correspondentie de volgorde bepaald in het gebruik van de geslachtsnaam en de naam van de partner.
  - Het vullen van `NaamGebruik` hangt af van hoe de cliënt of relatie zijn/haar naam hanteert.

---

## Structuur van naamgegevens

### Verplichte onderdelen

| Onderdeel | Toelichting |
|---|---|
| Geslachtsnaam | Altijd verplicht |
| Naam | Onderdeel van de geslachtsnaam |
| Voorvoegsel | Optioneel onderdeel van geslachtsnaam |

---

### Optionele onderdelen

| Onderdeel | Toelichting |
|---|---|
| Partnernaam | Naam van partner |
| Voornamen | Gescheiden door spaties |
| Voorletters | Zonder punten of spaties |
| NaamGebruik | Gewenste aanspreekvorm |

---

## Voorbeelden

### Voorletters

Correct:

```text
JH
````

Niet correct:

```text
J. H.
```

---

### Voornamen

Correct:

```text
Jan Hendrik
```

---

### Geslachtsnaam met voorvoegsel

```text
van Dijk
```

---

## Structuur voor vector search / RAG

### Kernbegrippen

* VolledigeNaam
* Geslachtsnaam
* Partnernaam
* Voorletters
* Voornamen
* Voorvoegsel
* NaamGebruik
* Aanspreekvorm
* Correspondentie
* Persoonsgegevens

### Samenvatting

Naamgegevens van een cliënt of relatie worden gescheiden vastgelegd. De geslachtsnaam is verplicht en bestaat uit naam plus eventueel voorvoegsel. Partnernaam, voornamen, voorletters en naamgebruik kunnen aanvullend worden vastgelegd. NaamGebruik bepaalt de gewenste aanspreekvorm in correspondentie.

### Belangrijke voorwaarden

* Geslachtsnaam is verplicht.
* Voorletters worden zonder punten of spaties vastgelegd.
* Voornamen worden gescheiden door spaties.
* NaamGebruik bepaalt de volgorde van namen in correspondentie.

### Zoektermen

* volledige naam cliënt
* naamgebruik
* geslachtsnaam
* partnernaam
* voorletters zonder punten
* voornamen
* voorvoegsel
* aanspreekvorm
* persoonsgegevens naam
