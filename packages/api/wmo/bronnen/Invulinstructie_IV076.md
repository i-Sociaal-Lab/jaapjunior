# 🧾 IV076 – Volume bij frequentie **week**

## 📘 Vraag
**Hoe moet het volume in de prestatie gevuld worden wanneer de toewijzing de frequentie ‘per week’ heeft? Hoeveel mag ik declareren?**

De productperiode binnen een declaratieperiode is **maximaal één kalendermaand**.  
Wanneer een *ToegewezenProduct* een frequentie **per week** heeft, kan een week verdeeld zijn over twee productperiodes (bijvoorbeeld als een week over twee maanden loopt).

Het bepalen van het volume hangt af van het type toewijzing:

- **Inspanningsgericht**
- **Outputgericht**

---

## 🔹 1. Inspanningsgerichte toewijzing

### 📖 Principe
De **datum van levering** bepaalt in welke productperiode de levering wordt opgenomen.

### ⚙️ Werkwijze
- Elke geleverde dag valt in de productperiode waarin die datum ligt.  
- Een week die over twee maanden valt, wordt automatisch gesplitst.  
- Het **volume per productperiode** = de **som van alle geleverde eenheden** (bijv. uren of dagdelen) binnen die maand.  
- Controleer dat het volume niet groter is dan het **maximaal toewijsbaar volume** (aantal weken × frequentievolume).

---

### 🧮 Voorbeeld inspanningsgericht

**Toewijzing:** 07-07-2025 t/m 07-09-2025, *3 uur per week*  
**Levering:** elke donderdag 2,5 uur

| Declaratieperiode | Productperiode | Leveringen | Volume (uren) | Max. volume |
|--------------------|----------------|-------------|----------------|--------------|
| Juli | 07-07-2025 t/m 31-07-2025 | 3 donderdagen | 7,5 | 9 |
| Augustus | 01-08-2025 t/m 31-08-2025 | 4 donderdagen | 10 | 15 |
| September | 01-09-2025 t/m 07-09-2025 | 1 donderdag | 2,5 | 3 |
| **Totaal** | 07-07-2025 t/m 07-09-2025 | 8 leveringen | **20 uur** | **27 uur (max)** |

---

## 🔹 2. Outputgerichte toewijzing

### 📖 Principe
De **week** bepaalt de productperiode, op basis van de **zondag**:

> Een week hoort bij de productperiode waarin de **zondag** van die week valt.

### ⚙️ Werkwijze
- Volume per week = het afgesproken weekvolume (bijv. bedrag of eenheid).  
- De productperiode bevat het volume van alle weken waarvan de **zondag** in die periode ligt.  
- Eindigt de toewijzing **niet op een zondag**, dan hoort de laatste (gebroken) week bij de productperiode waarin de **laatste zondag** van de toewijzing valt.

---

### 🧮 Voorbeeld 1 – Toewijzing eindigt op zondag

**Toewijzing:** 07-07-2025 t/m 07-09-2025, *€300 per week*

| Declaratieperiode | Productperiode | Aantal zondagen | Volume (€) |
|--------------------|----------------|------------------|-------------|
| Juli | 07-07-2025 t/m 31-07-2025 | 3 | 900 |
| Augustus | 01-08-2025 t/m 31-08-2025 | 5 | 1500 |
| September | 01-09-2025 t/m 07-09-2025 | 1 | 300 |

---

### 🧮 Voorbeeld 2 – Toewijzing eindigt **niet** op zondag

**Toewijzing:** 07-07-2025 t/m 06-09-2025, *€300 per week*

| Declaratieperiode | Productperiode | Aantal zondagen (+ laatste gebroken week) | Volume (€) |
|--------------------|----------------|--------------------------------------------|-------------|
| Juli | 07-07-2025 t/m 31-07-2025 | 3 | 900 |
| Augustus | 01-08-2025 t/m 31-08-2025 | 5 + 1 | 1800 |
| September | – | – | Geen declaratie meer |

---

## 🧭 Samenvattend beslisschema

| Type toewijzing | Volume per productperiode | Splitsing over maanden |
|-----------------|----------------------------|------------------------|
| **Inspanningsgericht** | Som van werkelijk geleverde eenheden (op datum) | ✅ Ja, levering per dag bepaalt maand |
| **Outputgericht** | Aantal weken (bepaald via zondagen) × weekvolume | ❌ Nee, week hoort bij maand van zondag |

---

## 💻 Automatiseringslogica (voor JaapJunior)

### 🧠 Pseudocode

```pseudo
if toegewezenProduct.frequentie == "week":
    
    if toegewezenProduct.type == "inspanningsgericht":
        # Volume per maand = som van werkelijk geleverde eenheden binnen die maand
        for levering in leveringen:
            periode = bepaalProductPeriode(levering.datum)
            volumePerPeriode[periode] += levering.volume

        # Controle: niet meer declareren dan toegestaan
        controleMaxVolume = aantalWeken(toewijzing.periode) * toegewezenProduct.weekVolume
        assert som(volumePerPeriode) <= controleMaxVolume

    else if toegewezenProduct.type == "outputgericht":
        # Volume per maand = aantal weken waarvan de zondag in die maand valt × weekvolume
        for week in wekenBinnen(toewijzing.periode):
            zondag = bepaalZondag(week)
            periode = bepaalProductPeriode(zondag)
            volumePerPeriode[periode] += toegewezenProduct.weekVolume

        # Uitzondering: eindigt de toewijzing niet op een zondag
        if not eindigtOpZondag(toewijzing.einddatum):
            laatsteZondag = bepaalLaatsteZondag(toewijzing.einddatum)
            periode = bepaalProductPeriode(laatsteZondag)
            volumePerPeriode[periode] += toegewezenProduct.weekVolume + 1
```


