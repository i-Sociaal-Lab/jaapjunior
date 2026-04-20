## berekening elfproef
Formule: (9⋅d_1+8⋅d_2+7⋅d_3+6⋅d_4+5⋅d_5+4⋅d_6+3⋅d_7+2⋅d_8-1⋅d_9) mod 11 = 0
# Stappen
Neem een BSN van 9 cijfers: d₁ d₂ ... d₉
Vermenigvuldig elk cijfer met een gewicht:
9 t/m 2 voor de eerste 8 cijfers
-1 voor het laatste cijfer
Tel alles bij elkaar op
De uitkomst moet deelbaar zijn door 11
Als dat zo is: het nummer voldoet aan de elfproef
Uitzondering op de controle van BSN's zijn BSN's die aan de elfproef voldoen zijn test-BSN’s (999900006 t/m 999999990)


Voorbeeld: BSN: 123456782
Berekening: 1×9 + 2×8 + 3×7 + 4×6 + 5×5 + 6×4 + 7×3 + 8×2 − 2×1
Uitkomst: = 9 + 16 + 21 + 24 + 25 + 24 + 21 + 16 − 2 = 154
resultaat: 154 ÷ 11 = 14, rest 0 → geldig volgens elfproef
