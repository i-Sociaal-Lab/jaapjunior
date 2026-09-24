**IV066**

*Wanneer krijgt een toewijzing een nieuw ToewijzingNummer?*

Een initiele toekenning van een product aan een client is een nieuwe toewijzing en krijgt een nieuw toewijzingnummer. Een initiele toekenning kent nooit een RedenWijziging.

Indien een eerder afgegeven toewijzing gewijzigd wordt (intrekken, oprekken, verwijderen of corrigeren), wordt het ToewijzingNummer gevuld van de initiele toekenning. De start-, stop en declaratieberichten refereren naar het ToewijzingNummer uit het toewijzingbericht. Het (opnieuw) versturen van een bericht heeft geen invloed op ToewijzingNummer.

Let op: wijzigen van een toewijzing is slechts beperkt toegestaan (Zie ook OP33x1):

- de toewijzing kan worden verwijderd
- de einddatum kan worden aangepast
- het budget kan worden aangepast
- de omvang kan worden aangepast indien de frequentie de waarde 6 (Totaal binnen geldigheidsduur toewijzing) heeft. 
Indien de omvang bij andere frequenties dan Totaal binnen geldigheidsduur toewijzing gewijzigd wordt, betekent dat dat de bestaande toewijzing wordt ingetrokken en een nieuwe toewijzing wordt verzonden met als Ingangsdatum de datum waarop de gewijzigde omvang ingaat. Dit betreft dan een nieuwe initiele toekenning met een nieuw ToewijzingNummer.
