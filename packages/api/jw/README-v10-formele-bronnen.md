# JaapJunior v10 – formele bronnen eerst

Deze wijziging doet drie dingen:

1. Correctievragen krijgen expliciete retrievaltermen voor formele correctie-instructies.
2. Bij regel-/correctievragen wordt eerst uitsluitend de formele bronset opgehaald.
3. Een tweede LLM-controle bepaalt of de formele bronset de vraag volledig beantwoordt. Alleen bij `false` worden FAQ/casus/SAP-GI toegevoegd.

Voor de testvraag over een startbericht na een definitief stopbericht moet de formele set bijvoorbeeld OP379/TR326 kunnen vinden. Voor vragen over het corrigeren van een eerder startbericht moet IV008 door de gerichte correctiezoekopdrachten vindbaar zijn.

Let op: `agent.ts` gebruikt een bronclassificatie op basis van bestands-/metadata-termen. Controleer na implementatie in de logs `===== FORMELE BRONNEN =====` of het aantal gevonden formele bronnen > 0 is.
