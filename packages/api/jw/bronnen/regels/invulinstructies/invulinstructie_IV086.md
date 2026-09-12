**IV086**

*Hoe moet worden omgegaan met debet en credit prestaties in een declaratiebericht?*

Debet en credit prestaties kunnen in 1 declaratiebericht worden aangeleverd. Hierbij geldt:

- Een 1e debet prestatie en een identieke credit prestatie mogen niet in 1 declaratiebericht worden aangeleverd.
Als de 1e debet en credit prestatie op 1 moment bekend zijn, dan horen die tegen elkaar weg te vallen en niet in 1 bericht te staan.
- Een credit prestatie en een 2e debet prestatie kunnen desgewenst in hetzelfde bericht worden aangeleverd.

Totaal declaratiebedrag

Het totale declaratiebedrag van alle debet en credit prestaties in het declaratiebericht wordt ingevuld in TotaalIngediendBedrag in de header van het bericht. Hierbij worden debetbedragen opgeteld en creditbedragen afgetrokken.
