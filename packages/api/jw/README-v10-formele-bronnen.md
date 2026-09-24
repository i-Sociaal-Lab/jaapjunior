# JaapJunior – bron-URL correctie

Deze drie bestanden horen bij elkaar:

- `prompt.md` – vervanging van `packages/api/jw/prompt.md`
- `vragen-agent.md` – vervanging van `packages/api/jw/vragen-agent.md`
- `agent.ts` – vervanging van `packages/api/src/agent.ts`

## Wat is aangepast

1. Regelcodes worden zichtbaar in hoofdletters gehouden, maar URL's gebruiken lowercase.
2. OP/UP/TR/CD/CS/IV gebruiken hun specifieke formele URL-pad.
3. JW-berichten gebruiken de berichtpagina, bijvoorbeeld:
   `JW305` → `https://informatiemodel.istandaarden.nl/informatiemodel/ijw/3.2/berichten/jw305/`
4. Directe `.xsd`-links zoals `/xsd/jw305.xsd` worden niet meer gebruikt.
5. `agent.ts` corrigeert bekende oude/verkeerde regel- en XSD-URL's in het uiteindelijke antwoord.
6. `vragen-agent.md` blijft de formele-bronnen-eerst strategie gebruiken.

## Plaatsing

```text
packages/api/
├── src/
│   └── agent.ts
└── jw/
    ├── prompt.md
    └── vragen-agent.md
```

De README hoeft niet naar de runtime-map; dit is alleen documentatie.
