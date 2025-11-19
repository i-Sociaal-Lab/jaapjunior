**IV089**

*Hoe moet ProductPeriode gevuld worden?*

Voor declareren zijn de volgende begrippen van belang:

- Declaratieperiode: is een administratieve periode waarover de geleverde hulp in de administratie tot een declaratie wordt verwerkt. Dit is altijd een kalendermaand.
- Productperiode: De productperiode valt altijd binnen de geldigheidsperiode van de toewijzing. Een productperiode is niet afhankelijk van de startdatum en of stopdatum van de geleverde zorg.
In het declaratiebericht wordt het totale geleverde volume van 1 specifiek product binnen 1 productperiode aan 1 cliënt (behorende bij 1 toewijzing) opgenomen in 1 Prestatie. Deze prestaties worden direct in de erop volgende declaratieperiode, of eventueel achteraf in een latere declaratieperiode, gedeclareerd. (zie IV076 voor vullen volume bij frequentie per week)

De ProductPeriode Begindatum wordt gevuld met:

- De eerste dag van de kalendermaand waarin de ProductPeriode valt indien de Ingangsdatum van het ToegewezenProduct voor of op de eerste dag van deze kalendermaand ligt.
- De Ingangsdatum van het ToegewezenProduct indien de Ingangsdatum ToegewezenProduct na de eerste dag van de kalendermaand waarin de ProductPeriode valt ligt.

De ProductPeriode Einddatum wordt gevuld met:

- De laatste dag van de kalendermaand waarin de ProductPeriode valt indien de Einddatum van het ToegewezenProduct op of na de laatste dag van deze kalendermaand ligt.
- De Einddatum van het ToegewezenProduct indien de Einddatum ToegewezenProduct voor de laatste dag van de kalendermaand waarin de ProductPeriode valt ligt.

Voorbeeld

In onderstaande voorbeeld wordt uitgegaan van de volgende situatie:

Het ToegewezenProduct heeft Ingangsdatum 08-04-2025 en Einddatum 17-06-2025 (dit is de toegewezen periode)
ProductPeriodes voor de maanden April, Mei en Juni zijn dan:

- April: 08-04-2025 t/m 30-04-2025
- Mei  : 01-05-2025 t/m 31-05-2025
- Juni : 01-06-2025 t/m 17-06-2025

Trajectfinanciering

Gemeenten en aanbieders kunnen (op grond van OP264) onderling afwijkende afspraken maken over de momenten waarop, al dan niet in delen, gedeclareerd kan worden, in de situatie van een outputgericht product dat in euro's is toegewezen.

Als het resultaat pas aan het eind van het traject kan worden vastgesteld, wordt ProductPeriode gelijk gesteld aan de laatste ProductPeriode binnen de toewijzingsperiode. Gemeente en aanbieder kunnen ook afwijkende afspraken hebben gemaakt over het aantal declaratiemomenten. Hierbij wordt de ProductPeriode indien nodig aangepast zodat de ProductPeriode ook in deze situatie altijd binnen de periode van de toewijzing valt.

Voorbeeld

Afspraak is dat op het eind van het traject de declaratie mag worden ingediend.
Cliënt ontvangt outputgerichte hulp vanaf het begin tot het eind van toegewezen periode (08-04-2025 t/m 17-06-2025). Pas op 17-06-2025 kan het resultaat van de outputgerichte hulp worden vastgesteld. In de maanden April en Mei wordt er geen declaratie ingediend voor deze cliënt. Er volgt in de maand juni 1 Prestatie met de volgende ProductPeriode:

- Juni: 01-06-2025 t/m 17-06-2025
