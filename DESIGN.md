# Licht cobalt, design system voor [Jouw naam] blog

> Rustig, licht en precies. De sfeer van een moderne fintech, maar dan gemaakt om prettig te lezen. Cobalt is voor actie, teal is voor data.

**Thema:** licht
**Type site:** blog met uitleg over hoe ik dingen aanpak en bouw (Home Assistant, data, marketing, fintech)
**Uitgangspunt:** mobile first. Leesbaarheid gaat voor effect.

## Karakter

- Veel witruimte, weinig decoratie. Geen gradients, geen zware schaduwen.
- Eén actiekleur (cobalt) en één datakleur (teal). Meer kleur alleen in grafieken.
- Koppen zijn stevig maar niet schreeuwerig (Onest 600).
- Kaarten scheiden zich van de achtergrond door een iets donkerder vlak, niet door schaduw.

## Kleuren

### Basis

| Naam | Waarde | Token | Gebruik |
|------|--------|-------|---------|
| Canvas | `#fafafc` | `--color-canvas` | Achtergrond van de pagina |
| Surface | `#f0f1f6` | `--color-surface` | Kaarten, callouts, footer |
| Surface 2 | `#e3e5ef` | `--color-surface-2` | Afbeelding-placeholders, hover op kaarten |
| Line | `#dfe1ea` | `--color-line` | Scheidingslijnen en randen |
| Ink | `#171721` | `--color-ink` | Koppen en leestekst |
| Muted | `#50505e` | `--color-muted` | Intro's, meta-info, labels |

### Cobalt (primair, voor actie)

| Naam | Waarde | Token | Gebruik |
|------|--------|-------|---------|
| Cobalt | `#4353d8` | `--color-cobalt` | Primaire knop, actieve staat, focusring |
| Cobalt hover | `#3442c0` | `--color-cobalt-hover` | Hover op knop, tekstlinks |
| Cobalt soft | `#e8eafc` | `--color-cobalt-soft` | Zachte achtergrond voor highlights |
| Cobalt ink | `#2d3a9e` | `--color-cobalt-ink` | Tekst op Cobalt soft |

### Teal (secundair, voor data en onderwerpen)

| Naam | Waarde | Token | Gebruik |
|------|--------|-------|---------|
| Teal | `#0f766e` | `--color-teal` | Datapunten, grafieklijn 2, iconen bij data |
| Teal soft | `#e6f4f1` | `--color-teal-soft` | Achtergrond van tags, "Wat ik leerde"-blok |
| Teal ink | `#0f5f58` | `--color-teal-ink` | Tekst op Teal soft |

### Grafieken

Volgorde voor reeksen: Cobalt `#4353d8`, Teal `#0f766e`, Amber `#b45309`, Grijs `#8a8a9a`.
Gebruik nooit alleen kleur om verschil te tonen. Voeg labels of verschillende lijnstijlen toe.

### Status

| Naam | Waarde | Gebruik |
|------|--------|---------|
| Succes | `#0f766e` | Gelukt, positief |
| Let op | `#b45309` | Waarschuwing |
| Fout | `#b42318` | Fout, negatief |

### Contrast (gecontroleerd, WCAG AA vraagt 4,5:1)

- Ink op Canvas: 17,1:1
- Muted op Canvas: 7,6:1
- Wit op Cobalt: 6,1:1
- Cobalt hover op Canvas (links): 7,5:1
- Teal ink op Teal soft: 6,6:1
- Wit op Teal: 5,5:1

## Typografie

### Fonts (Google Fonts, gratis)

- **Onest** (400, 600, 700) voor koppen, tekst en interface.
- **JetBrains Mono** (400) voor codeblokken, bijvoorbeeld Home Assistant YAML.

Fallback: `'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif`

### Schaal

| Rol | Mobiel | Desktop | Gewicht | Regelhoogte | Letterafstand |
|-----|--------|---------|---------|-------------|---------------|
| Display (h1) | 38px | 56px | 600 | 1.1 | -0.015em |
| Kop 2 | 26px | 34px | 600 | 1.2 | -0.015em |
| Kop 3 | 22px | 26px | 600 | 1.25 | -0.01em |
| Intro | 18px | 20px | 400 | 1.6 | 0 |
| Leestekst | 18px | 19px | 400 | 1.65 | 0 |
| Klein | 16px | 16px | 400 | 1.5 | 0 |
| Meta en labels | 14px | 14px | 600 | 1.4 | 0.08em, hoofdletters |
| Code | 15px | 15px | 400 | 1.6 | 0 |

### Regels voor leesbaarheid

- Leestekst nooit kleiner dan 17px op mobiel.
- Maximale regelbreedte voor artikelen: 680px (ongeveer 65 tekens).
- Leestekst altijd in Ink, niet in Muted. Muted is voor bijzaken.
- Geen tekst in volledige hoofdletters langer dan drie woorden.

## Ruimte en vorm

- **Basis:** 4px
- **Schaal:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96
- **Zijmarge mobiel:** 24px. Desktop: 48px.
- **Ruimte tussen secties:** 48px mobiel, 96px desktop
- **Paginabreedte:** max 1120px. Artikeltekst: max 680px.

| Element | Radius |
|---------|--------|
| Knoppen, tags | 999px (pill) |
| Kaarten | 16px |
| Invoervelden, codeblokken | 12px |
| Afbeeldingen in artikel | 12px |

Schaduw: geen. Alleen een zachte schaduw `0 6px 20px rgba(23,23,33,0.08)` voor een uitklapmenu.

## Componenten

### Primaire knop
Cobalt vlak, witte tekst, Onest 600 16px, pill, minimaal 48px hoog, 22px padding links en rechts. Hover: Cobalt hover. Focus: 2px ring in Cobalt met 2px ruimte ertussen.
Maximaal één primaire knop per scherm.

### Tekstlink
Cobalt hover, Onest 600, onderstreept met 4px afstand. In leestekst: onderstreept, gewicht 400.

### Tag (onderwerp)
Teal soft achtergrond, Teal ink tekst, Onest 600 14px, pill, minimaal 36px hoog, 14px padding.

### Artikelkaart
Surface achtergrond, 16px radius, afbeelding bovenaan (verhouding 16:9), daaronder 24px padding met: meta (onderwerp en leestijd), kop 2, korte intro in Muted, link "Lees verder" met pijl-icoon.

### Artikellijst
Titel in Onest 600 19px, meta eronder in 14px Muted. Items gescheiden door een 1px Line. Hele rij is klikbaar.

### "Wat ik leerde"-blok
Teal soft achtergrond, 16px radius, 20px padding. Label "Wat ik leerde" in Teal ink 15px bold, tekst in Ink 17px. Maximaal één per artikel.

### Codeblok
Surface achtergrond, 1px Line rand, 12px radius, 16px padding, JetBrains Mono 15px. Horizontaal scrollen binnen het blok, nooit de pagina.

### Grafiek
Witte of Canvas achtergrond, rasterlijnen in Line, labels in Muted 14px. Reekskleuren in de vaste volgorde. Altijd een titel en bron eronder.

### Navigatie
Mobiel: naam links, menuknop rechts (44x44, Surface, pill). Desktop: naam links, links rechts (Artikelen, Onderwerpen, Over mij). 1px Line onder de balk.

## Doen

- Gebruik Cobalt alleen voor dingen waar je op klikt.
- Gebruik Teal voor alles wat met data of onderwerpen te maken heeft.
- Houd knoppen en tags altijd pill-vormig.
- Zorg dat alles wat klikbaar is minstens 44px hoog is.

## Niet doen

- Geen gradients, geen glow, geen emoji als icoon.
- Geen Cobalt en Teal direct naast elkaar als vlakken, dan vechten ze om aandacht.
- Geen pure zwarte tekst (`#000`), gebruik Ink.
- Geen lichtgrijze leestekst.

## CSS variabelen

```css
:root {
  --color-canvas: #fafafc;
  --color-surface: #f0f1f6;
  --color-surface-2: #e3e5ef;
  --color-line: #dfe1ea;
  --color-ink: #171721;
  --color-muted: #50505e;

  --color-cobalt: #4353d8;
  --color-cobalt-hover: #3442c0;
  --color-cobalt-soft: #e8eafc;
  --color-cobalt-ink: #2d3a9e;

  --color-teal: #0f766e;
  --color-teal-soft: #e6f4f1;
  --color-teal-ink: #0f5f58;

  --color-amber: #b45309;
  --color-error: #b42318;

  --font-sans: 'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace;

  --text-display: clamp(38px, 5vw + 1rem, 56px);
  --text-h2: clamp(26px, 2.5vw + 1rem, 34px);
  --text-h3: clamp(22px, 1vw + 1rem, 26px);
  --text-body: clamp(18px, 0.2vw + 1rem, 19px);
  --text-small: 16px;
  --text-meta: 14px;
  --leading-body: 1.65;

  --radius-pill: 999px;
  --radius-card: 16px;
  --radius-input: 12px;

  --space-page-x: 24px;
  --max-page: 1120px;
  --max-prose: 680px;
}

@media (min-width: 768px) {
  :root { --space-page-x: 48px; }
}
```

## Later misschien

- Donker thema (op basis van de Nachtblauw-variant), via `prefers-color-scheme`.
