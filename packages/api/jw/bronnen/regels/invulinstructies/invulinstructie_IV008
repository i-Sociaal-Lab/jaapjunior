# IV008 - Hoe moet worden omgegaan met correcties van de regieberichten?

## Metadata

| Veld | Waarde |
|---|---|
| ID | IV008 |
| Type | Interpretatievraag |
| Domein | iJw |
| Onderwerp | Regieberichten |
| Thema | Correcties |
| Status | Productie |

---

## Vraag

Hoe moet worden omgegaan met correcties van de regieberichten?

---

## Antwoord

Een correctie van een regiebericht kan alleen plaatsvinden indien het te corrigeren regiebericht is goedgekeurd door de gemeente.

Indien een regiebericht is afgekeurd, moet dit als niet verzonden worden beschouwd en moet een nieuw regiebericht worden gestuurd.

Voor regieberichten (`Startproduct` en `Stopproduct`) bestaat de mogelijkheid om eerder verstuurde berichtklassen te corrigeren. Hiervoor wordt eerst de betreffende berichtklasse verwijderd en vervolgens eventueel een nieuwe berichtklasse verstuurd.

---

## Correctieproces

### Stap 1 - Verwijderen oorspronkelijke berichtklasse

Om aan te geven dat een berichtklasse verwijderd moet worden:

- `StatusAanlevering` wordt gevuld met waarde `3`
- Betekenis: `verwijderen aanlevering`

De te verwijderen berichtklasse wordt geïdentificeerd door de logische sleutel van de klasse.

---

### Stap 2 - Eventueel vervangen door nieuwe berichtklasse

De vervangende berichtklasse kan:

- in hetzelfde bericht worden meegestuurd
- of in een nieuw bericht worden aangeleverd

In de vervangende berichtklasse wordt:

- `StatusAanlevering` gevuld met waarde `1`
- Betekenis: `eerste aanlevering`

---

## Logische sleutels

### Startproduct

Logische sleutel:

```text
(ToewijzingNummer, Product, Begindatum)
````

### Stopproduct

Logische sleutel:

```text
(ToewijzingNummer, Product, Begindatum, RedenBeeindiging, Einddatum)
```

---

## Regels voor correcties

### Correctie van een element dat onderdeel is van de logische sleutel

De correctie mag in hetzelfde bericht worden doorgegeven.

Reden:

* Beide berichtklassen hebben een unieke logische sleutel.
* Hierdoor ontstaan geen dubbele sleutels binnen hetzelfde bericht.

---

### Correctie van een element dat géén onderdeel is van de logische sleutel

De correctie moet in een apart bericht worden doorgegeven.

Reden:

* De originele en gecorrigeerde berichtklasse hebben dezelfde logische sleutel.
* Binnen één bericht wordt dit afgekeurd omdat de software dit interpreteert als dubbele berichtklassen.

---

## Verwerkingsvolgorde

Voorkom dat een nieuwe aanlevering eerder wordt verwerkt dan de correctie (`verwijdering`).

Daarom geldt het advies:

* Neem waar mogelijk de correctie (`StatusAanlevering = 3`) en de nieuwe aanlevering (`StatusAanlevering = 1`) op in hetzelfde bericht.

---

## Structuur voor vector search / RAG

### Kernbegrippen

* Regiebericht
* Correctie
* Startproduct
* Stopproduct
* StatusAanlevering
* Verwijderen aanlevering
* Eerste aanlevering
* Logische sleutel
* ToewijzingNummer
* Begindatum
* RedenBeeindiging
* Einddatum
* Berichtklasse

### Samenvatting

Correcties op regieberichten zijn alleen toegestaan wanneer het oorspronkelijke bericht is goedgekeurd. Correcties verlopen door eerst de oorspronkelijke berichtklasse te verwijderen (`StatusAanlevering = 3`) en daarna eventueel een vervangende berichtklasse aan te leveren (`StatusAanlevering = 1`). Of dit in hetzelfde bericht kan, hangt af van de logische sleutel van de berichtklasse.

### Belangrijke voorwaarden

* Afgekeurde regieberichten gelden als niet verzonden.
* Correcties zijn alleen toegestaan op goedgekeurde berichten.
* Correcties op logische sleutelelementen mogen in hetzelfde bericht.
* Correcties op niet-sleutelelementen vereisen een apart bericht.
* Verwijdering moet vóór vervangende aanlevering verwerkt worden.

### Zoektermen

* correctie regiebericht
* statusaanlevering 3
* statusaanlevering 1
* verwijderen aanlevering
* eerste aanlevering
* logische sleutel
* startproduct corrigeren
* stopproduct corrigeren
* berichtklasse verwijderen
* dubbele logische sleutel
* regiebericht afgekeurd
