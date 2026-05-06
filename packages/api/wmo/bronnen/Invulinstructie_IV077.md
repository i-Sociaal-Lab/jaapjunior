# IV077 — Berekening maximaal te declareren volume bij frequentie per week

## Vraag
**Hoe moet het maximaal te declareren volume berekend worden over de productperiode bij gebruik van de frequentie per week in de toewijzing?**

---

## Inleiding
De frequentie *per week* sluit niet één-op-één aan op de declaratieperiode (kalendermaand).  
Om het **maximaal te declareren volume** binnen de productperiode te berekenen, zijn aanvullende afspraken nodig.  

Afhankelijk van de **uitvoeringsvariant** (inspanningsgericht of outputgericht) wordt een andere rekenmethode toegepast.  
> Zie ook [IV076](Invulinstructie_IV076) voor het vullen van het volume in de prestatie.

---

## Stappenplan

1. **Bepaal de uitvoeringsvariant** van de toewijzing: inspanningsgericht of outputgericht.  
2. **Bereken** het maximaal te declareren volume binnen de productperiode.  
3. **Controleer** of de levering binnen dit maximum past.  
4. **Controleer** of het totaal gedeclareerde volume binnen de toewijzing blijft.

---

## 🔹 Inspanningsgerichte toewijzing

Het maximale volume wordt bepaald op basis van het aantal (eventueel gebroken) kalenderweken binnen de productperiode.  
Dit aantal wordt vermenigvuldigd met het **weekvolume** uit de toewijzing.

Bij producten uit **Wmo Productcategorie 01** (Hulp bij het huishouden,HH) geldt een vaste rekenregel:  
> Het maximale volume = 6 × weekvolume.

Na berekening moet ook worden gecontroleerd dat het totaal van alle declaraties niet hoger is dan het totale toegewezen volume over de toewijzingsperiode.

---

### 🔸 Pseudocode — Inspanningsgericht

```pseudo
function berekenMaxVolumeInspanningsgericht(productperiode, toewijzing):
    if toewijzing.productcategorie == "01":
        maxVolume = 6 * toewijzing.weekVolume
    else:
        aantalWeken = telKalenderweken(productperiode binnen toewijzing)
        maxVolume = aantalWeken * toewijzing.weekVolume

    totaalMax = telKalenderweken(toewijzing.periode) * toewijzing.weekVolume
    return (maxVolume, totaalMax)
```

---

### 📘 Voorbeeld — Inspanningsgericht

Toewijzing:  
- Periode: **07-10-2025 t/m 30-12-2025**  
- Frequentie: **3 uur per week**

| Maand | Weeknummers | Aantal weken | Max. volume |
|--------|--------------|---------------|--------------|
| Oktober | 41–44 | 4 | 4 × 3 = **12 uur** |
| November | 44–48 | 5 | 5 × 3 = **15 uur** |
| December | 48–52 | 5 | 5 × 3 = **15 uur** |

**Maximaal volume toewijzingsperiode:**  
Week 41 t/m 52 + 1 = 13 weken × 3 uur = **39 uur**

---

## 🔹 Outputgerichte toewijzing

Het maximale volume per productperiode is gebaseerd op het aantal zondagen binnen de productperiode.  
Indien de einddatum van de toewijzing niet op een zondag valt, wordt één extra weekvolume toegevoegd aan de laatste productperiode waarin de laatste zondag van de toewijzing valt.

---

### 🔸 Pseudocode — Outputgericht

```pseudo
function berekenMaxVolumeOutputgericht(productperiode, toewijzing):
    aantalZondagen = telZondagen(productperiode)
    extraWeek = 0

    if toewijzing.eindDatum is not zondag:
        if laatsteZondagVanToewijzing in productperiode:
            extraWeek = 1

    maxVolume = (aantalZondagen + extraWeek) * toewijzing.weekVolume
    return maxVolume
```

---

### 📘 Voorbeeld 1 — Outputgericht

Toewijzing:  
- Periode: **06-10-2025 t/m 31-12-2025**  
- Frequentie: **300 euro per week**

| Maand | Zondagen in productperiode | Extra weekvolume? | Max. volume |
|--------|------------------------------|--------------------|--------------|
| Oktober | 3 | Nee | 3 × 300 = **€ 900** |
| November | 5 | Nee | 5 × 300 = **€ 1500** |
| December | 4 | Ja | (4+1) × 300 = **€ 1500** |

---

### 📘 Voorbeeld 2 — Outputgericht

Toewijzing:  
- Periode: **07-07-2025 t/m 05-09-2025**  
- Frequentie: **300 euro per week**

| Maand | Zondagen in productperiode | Extra weekvolume? | Max. volume |
|--------|------------------------------|--------------------|--------------|
| Juli | 3 | Nee | 3 × 300 = **€ 900** |
| Augustus | 5 | Ja | (5+1) × 300 = **€ 1800** |

---

## Samenvatting

| Uitvoeringsvariant | Rekenbasis | Bijzonderheden |
|--------------------|-------------|----------------|
| Inspanningsgericht | Aantal kalenderweken | Productcategorie 01 = altijd 6 × weekvolume |
| Outputgericht | Aantal zondagen + evt. 1 extra weekvolume | Extra week bij einddatum ≠ zondag |
