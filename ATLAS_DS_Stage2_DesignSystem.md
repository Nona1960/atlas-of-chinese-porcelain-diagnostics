# ATLAS OF DIAGNOSTIC FEATURES OF CHINESE CERAMICS AND PORCELAIN
## Stage 2 — Design System (Locked Visual Language)
### Design System Specification Document
**Version:** 1.0  
**Status:** LOCKED VISUAL LANGUAGE  
**Depends on:** Stage 1 — Information Architecture Specification  
**Document type:** Design system definition — not a page design document

---

## TABLE OF CONTENTS

1. Design Philosophy & Principles
2. Color System (Locked)
3. Typography System
4. Grid & Layout System
5. Spacing System
6. Component Library
7. Card System (Unified Model)
8. Image & Microscopy Standards
9. Table System
10. Navigation System (UI Level)
11. Responsive Design Rules
12. Motion Rules
13. Design Consistency Rules

---

---

# SECTION 1 — DESIGN PHILOSOPHY & PRINCIPLES

## The Visual Premise

This system is designed for a single purpose: to present scientific knowledge about ceramic artifacts with maximum clarity and minimum interference. Every visual decision is a scientific decision. Decoration that does not carry information does not exist in this system.

The aesthetic reference is not digital product design. It is the printed academic atlas — the kind of publication produced by a national museum's research department, designed to remain legible, authoritative, and coherent across decades of use. The screen is a medium; the tradition is print scholarship.

## Five Design Laws

**Law 1 — Restraint is precision.**  
Every element on the page must earn its presence. If removing it would not reduce information, it should be removed. Visual weight is earned through content hierarchy, not decoration.

**Law 2 — Consistency is the system.**  
A design system that allows exceptions is not a system. Every deviation from the defined rules — even a justified one — erodes the system's authority. Rules are applied uniformly. Exceptions require versioned documentation.

**Law 3 — The object is primary.**  
The ceramic object — its image, its data, its provenance — is always the most visually prominent element on its page. The system's visual identity serves the object; it does not compete with it.

**Law 4 — Scientific language over marketing language.**  
Labels are precise. Descriptions are factual. Interactive states are minimal and purposeful. The system does not suggest, excite, or sell. It identifies, classifies, and documents.

**Law 5 — Long-term stability.**  
Design decisions are made for a 10-year horizon. No trend-driven choices. No dependence on third-party component libraries. No dependency on design tooling that may be discontinued. The system is built from CSS primitives and typographic logic.

---

---

# SECTION 2 — COLOR SYSTEM (LOCKED)

## 2.1 Locked Color Tokens

The following palette is the complete and permanent color system. No additions. No modifications. No exceptions.

```css
:root {
  /* ── Core tones ── */
  --ink:        #1a1410;   /* Primary text — near-black, warm */
  --stone:      #f7f4ef;   /* Page background — warm white */
  --parchment:  #ede8df;   /* Surface 1 — light warm tan */
  --parchment2: #e4ddd1;   /* Surface 2 — slightly deeper tan */

  /* ── Accent tones ── */
  --gold:       #b8860b;   /* Primary accent — dark gold (dynasty/kiln markers) */
  --gold-lt:    #d4a843;   /* Secondary accent — lighter gold (hover, highlights) */

  /* ── Domain identity tones ── */
  --ru-blue:    #7a9bab;   /* Ru ware reference — cool blue-grey */
  --ming-yel:   #c9a227;   /* Ming reference — warm golden yellow */
  --qing-cob:   #2d5a8e;   /* Qing cobalt reference — deep blue */

  /* ── Structural tones ── */
  --border:     #ccc4b4;   /* Primary border — warm grey */
  --border2:    #ddd7cc;   /* Secondary border — lighter, for nested elements */
  --muted:      #6b6255;   /* Muted text — metadata, captions, secondary labels */
  --muted2:     #3a342c;   /* Sub-heading text — dark warm brown */
}
```

## 2.2 Color Role Assignments

Every color has a defined role. Using a color outside its defined role is a system violation.

| Token        | Role                                                              |
|--------------|-------------------------------------------------------------------|
| `--ink`      | Body text, headings, primary data                                 |
| `--stone`    | Page background, modal backgrounds                                |
| `--parchment`| Card backgrounds, sidebar backgrounds, table row alternation A    |
| `--parchment2`| Table row alternation B, active nav items, hover backgrounds     |
| `--gold`     | Section markers, accents, active states, identification badges    |
| `--gold-lt`  | Hover transitions for gold elements only                          |
| `--ru-blue`  | Methodology domain color, analytical technique indicators         |
| `--ming-yel` | Ming dynasty period markers only                                  |
| `--qing-cob` | Qing dynasty period markers, cobalt-type indicators               |
| `--border`   | All structural borders — cards, tables, dividers, inputs          |
| `--border2`  | Nested borders — inner table lines, secondary dividers            |
| `--muted`    | Captions, metadata labels, secondary text, breadcrumbs            |
| `--muted2`   | Sub-headings, label text, navigation items (non-active)           |

## 2.3 Domain Color Mapping

Each knowledge domain has a single accent color derived from the locked palette. These are used only for domain identification elements (index page headers, entity type badges, breadcrumb roots) — never for body content.

| Domain             | Color Token    | Hex       |
|--------------------|----------------|-----------|
| Reference Objects  | `--gold`       | #b8860b   |
| Diagnostic Features| `--muted2`     | #3a342c   |
| Kilns              | `--muted`      | #6b6255   |
| Dynasties/Periods  | `--ming-yel`   | #c9a227   |
| Methodology        | `--ru-blue`    | #7a9bab   |
| Publications       | `--qing-cob`   | #2d5a8e   |
| About/System       | `--border`     | #ccc4b4   |

## 2.4 Forbidden Color Uses

- No pure black (#000000) — use `--ink`
- No pure white (#ffffff) — use `--stone`
- No color gradients
- No drop shadows
- No colored text other than `--ink`, `--muted`, `--muted2`, and domain identity accents on badges
- No background colors other than those defined in role assignments

---

---

# SECTION 3 — TYPOGRAPHY SYSTEM

## 3.1 Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --font-body:    'Inter', 'Helvetica Neue', sans-serif;
}
```

**Cormorant Garamond** — all headings, figure numbers, large pull quotes, entity identifiers displayed in display size. Carries the scholarly authority of the system. Used with restraint at display size; never at body size.

**Inter** — all body text, metadata, labels, navigation, captions, table content, form elements. Maximum legibility at reading size.

## 3.2 Type Scale

The scale uses a 1.25 ratio (Major Third). All values defined in `rem` with `px` reference.

```css
:root {
  --text-xs:   0.75rem;   /* 12px — micro labels, scale bars */
  --text-sm:   0.875rem;  /* 14px — captions, metadata, navigation */
  --text-base: 1rem;      /* 16px — body text baseline */
  --text-md:   1.125rem;  /* 18px — lead paragraphs, large body */
  --text-lg:   1.25rem;   /* 20px — H4, card titles */
  --text-xl:   1.5rem;    /* 24px — H3 */
  --text-2xl:  1.875rem;  /* 30px — H2 */
  --text-3xl:  2.375rem;  /* 38px — H1 */
  --text-4xl:  3rem;      /* 48px — Page titles, domain headers */
  --text-5xl:  3.75rem;   /* 60px — System home, hero titles only */
}
```

## 3.3 Heading System

### H1 — Page Title / Entity Name
```css
h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);       /* 48px */
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: var(--space-4);    /* 32px */
}
```
Usage: one per page only. Object name, feature name, kiln name. Never a navigation label.

### H2 — Major Section Header
```css
h2 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);       /* 30px */
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-top: var(--space-10);      /* 80px */
  margin-bottom: var(--space-3);    /* 24px */
  padding-bottom: var(--space-2);   /* 16px */
  border-bottom: 1px solid var(--border);
}
```
Usage: major content divisions within a page. Max 4–6 per page.

### H3 — Sub-section Header
```css
h3 {
  font-family: var(--font-display);
  font-size: var(--text-xl);        /* 24px */
  font-weight: 500;
  line-height: 1.3;
  color: var(--muted2);
  margin-top: var(--space-8);       /* 64px */
  margin-bottom: var(--space-2);    /* 16px */
}
```
Usage: sub-sections. Never more than 3 levels of heading depth on a single page.

### H4 — Minor Section Label
```css
h4 {
  font-family: var(--font-body);
  font-size: var(--text-lg);        /* 20px */
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--muted);
  margin-top: var(--space-6);       /* 48px */
  margin-bottom: var(--space-1);    /* 8px */
}
```
Usage: field labels, metadata group headers, card section labels.

## 3.4 Body Text

### Paragraph (primary)
```css
p {
  font-family: var(--font-body);
  font-size: var(--text-base);      /* 16px */
  font-weight: 400;
  line-height: 1.7;
  color: var(--ink);
  max-width: 68ch;
  margin-bottom: var(--space-3);    /* 24px */
}
```
Maximum line length 68 characters. Never full container width for running text.

### Lead paragraph (first paragraph of body text)
```css
p.lead {
  font-family: var(--font-body);
  font-size: var(--text-md);        /* 18px */
  font-weight: 300;
  line-height: 1.65;
  color: var(--ink);
}
```

## 3.5 Caption System

### Figure caption (scientific image)
```css
figcaption {
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  font-weight: 400;
  line-height: 1.5;
  color: var(--muted);
  margin-top: var(--space-2);       /* 16px */
}

figcaption .fig-number {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--muted2);
}
```

Format: **Fig. 1.** Description text. Scale bar reference. Attribution.

### Microscopy caption (additional fields)
Appended after standard caption:
```
Magnification: ×40  |  Technique: SEM-BSE  |  Scale: 200 μm
```

## 3.6 Label & Metadata System

### Entity identifier badge
```css
.entity-id {
  font-family: var(--font-body);
  font-size: var(--text-xs);        /* 12px */
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
```
Example: `RO-SONG-LQN-001`

### Metadata label
```css
.meta-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);        /* 12px */
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}
```
Example: `Dynasty`, `Kiln`, `Attribution`

### Metadata value
```css
.meta-value {
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  font-weight: 400;
  color: var(--ink);
}
```

### Tag / controlled vocabulary item
```css
.tag {
  font-family: var(--font-body);
  font-size: var(--text-xs);        /* 12px */
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted2);
  background: var(--parchment);
  border: 1px solid var(--border);
  padding: 2px 8px;
  border-radius: 0;                 /* No border radius — scientific context */
}
```

## 3.7 Bibliography Style

```css
.bibliography-entry {
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--ink);
  padding-left: 2em;
  text-indent: -2em;
  margin-bottom: var(--space-2);    /* 16px */
}

.bibliography-entry .pub-id {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.06em;
  display: block;
  margin-bottom: 2px;
}
```

Format follows modified Chicago Author-Date: Author surname, Forename. *Title in italics*. Place: Publisher, Year.

## 3.8 Navigation Text

```css
.nav-item {
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--muted2);
}

.nav-item.active {
  color: var(--ink);
  font-weight: 600;
}

.breadcrumb-item {
  font-family: var(--font-body);
  font-size: var(--text-xs);        /* 12px */
  font-weight: 400;
  letter-spacing: 0.03em;
  color: var(--muted);
}
```

---

---

# SECTION 4 — GRID & LAYOUT SYSTEM

## 4.1 Container System

```css
:root {
  --max-width:        1100px;   /* System maximum — never exceeded */
  --max-width-text:   720px;    /* Text column maximum — article content */
  --max-width-narrow: 580px;    /* Narrow context — forms, focused reading */

  --container-padding-desktop: 48px;
  --container-padding-tablet:  32px;
  --container-padding-mobile:  20px;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-desktop);
}
```

## 4.2 Column Structure

The system uses a 12-column grid. Defined as CSS Grid on the container.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);              /* 32px column gap */
}
```

### Standard column patterns (locked)

| Layout name        | Content area | Sidebar   | Use case                        |
|--------------------|--------------|-----------|---------------------------------|
| Full               | 12 cols      | —         | Domain index, methodology pages |
| Content + Sidebar  | 8 cols       | 4 cols    | Entity pages (objects, features)|
| Narrow             | 8 cols (centered) | —    | Article text, publication pages |
| Two-column         | 6 + 6 cols   | —         | Comparison, features index      |
| Three-column       | 4 + 4 + 4    | —         | Cards grid (domain indexes)     |

### Column assignments

```css
/* Content + Sidebar layout */
.col-content  { grid-column: span 8; }
.col-sidebar  { grid-column: span 4; }

/* Full width */
.col-full     { grid-column: span 12; }

/* Narrow centered */
.col-narrow   { grid-column: 3 / span 8; }

/* Three-column card grid */
.col-card     { grid-column: span 4; }
```

## 4.3 Breakpoints

```css
:root {
  --bp-desktop: 1100px;
  --bp-tablet:  768px;
  --bp-mobile:  480px;
}

/* Usage */
@media (max-width: 1100px) { /* tablet+ adjustments  */ }
@media (max-width: 768px)  { /* tablet adjustments   */ }
@media (max-width: 480px)  { /* mobile adjustments   */ }
```

### Breakpoint behavior table

| Element              | Desktop (>1100px)    | Tablet (768–1100px) | Mobile (<768px)      |
|----------------------|----------------------|----------------------|----------------------|
| Container padding    | 48px                 | 32px                 | 20px                 |
| Grid columns         | 12                   | 8                    | 4                    |
| Content + Sidebar    | 8 + 4 cols           | 12 + hidden sidebar  | 12 stacked           |
| Card grid            | 3 columns            | 2 columns            | 1 column             |
| Navigation           | Horizontal top bar   | Horizontal (compact) | Hamburger menu       |
| H1 font size         | 48px                 | 38px                 | 30px                 |
| H2 font size         | 30px                 | 26px                 | 22px                 |
| Body text            | 16px                 | 16px                 | 15px                 |
| Image viewer         | Full width (8 cols)  | Full width (12 cols) | Full width           |

## 4.4 Whitespace Principles

Whitespace in this system is structural. It encodes hierarchy and relationship, not aesthetic preference.

- **Between sections (H2):** 80px above, 24px below
- **Between sub-sections (H3):** 64px above, 16px below
- **Between paragraphs:** 24px
- **Between cards in a grid:** 32px
- **Between metadata fields:** 12px
- **Between a label and its value:** 4px
- **Inside a card:** 24px padding on all sides
- **Inside a table cell:** 12px vertical, 16px horizontal

---

---

# SECTION 5 — SPACING SYSTEM

## 5.1 Spacing Scale

```css
:root {
  --space-0:  0;
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  40px;
  --space-6:  48px;
  --space-7:  56px;
  --space-8:  64px;
  --space-9:  72px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;
}
```

No arbitrary spacing values. All spacing must reference a token. If a needed value is not in the scale, the nearest token is used — the scale is not extended.

## 5.2 Border System

```css
:root {
  --border-width-thin:   1px;
  --border-width-medium: 2px;
  --border-width-heavy:  3px;

  --border-color:        var(--border);
  --border-color-light:  var(--border2);
  --border-color-accent: var(--gold);

  --border-radius:       0;   /* No border radius — ever. Scientific context. */
}
```

**Border radius is permanently zero.** Rounded corners carry an association with consumer product design. This system is a scientific instrument. All borders are rectilinear.

---

---

# SECTION 6 — COMPONENT LIBRARY

## 6.1 Navigation Bar

### Structure
```
[Atlas wordmark]  [Objects] [Features] [Kilns] [Periods] [Methodology] [Publications] [About]  [Search icon]
```

### CSS specification
```css
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: var(--stone);
  border-bottom: 1px solid var(--border);
  height: 56px;
  display: flex;
  align-items: center;
}

.nav-bar__wordmark {
  font-family: var(--font-display);
  font-size: var(--text-lg);        /* 20px */
  font-weight: 400;
  color: var(--ink);
  letter-spacing: 0.02em;
  margin-right: var(--space-6);     /* 48px */
  flex-shrink: 0;
}

.nav-bar__items {
  display: flex;
  gap: var(--space-4);              /* 32px */
  flex: 1;
}

.nav-bar__item {
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  font-weight: 500;
  color: var(--muted2);
  text-decoration: none;
  padding: 2px 0;
  border-bottom: 2px solid transparent;
  transition: color 150ms ease, border-color 150ms ease;
}

.nav-bar__item:hover {
  color: var(--ink);
}

.nav-bar__item.active {
  color: var(--ink);
  border-bottom-color: var(--gold);
}
```

### Behavior rules
- Sticky positioning — stays visible during scroll
- Active state: gold underline, no background change
- No dropdown menus
- Domain index accessed by clicking the nav item directly

---

## 6.2 Breadcrumbs

### Structure
```
Atlas › Objects › Song Dynasty › Longquan › RO-SONG-LQN-001
```

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-1);              /* 8px */
  margin-bottom: var(--space-4);    /* 32px */
  font-family: var(--font-body);
  font-size: var(--text-xs);        /* 12px */
  color: var(--muted);
}

.breadcrumb__item {
  color: var(--muted);
  text-decoration: none;
  transition: color 150ms ease;
}

.breadcrumb__item:hover {
  color: var(--ink);
}

.breadcrumb__separator {
  color: var(--border);
  user-select: none;
}

.breadcrumb__current {
  color: var(--ink);
  font-weight: 500;
}
```

---

## 6.3 Sidebar Navigation

Used on entity pages to show in-page structure and relationship panel.

```css
.sidebar {
  grid-column: span 4;
  position: sticky;
  top: calc(56px + var(--space-4)); /* Below nav bar */
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.sidebar__section {
  margin-bottom: var(--space-5);    /* 40px */
}

.sidebar__title {
  font-family: var(--font-body);
  font-size: var(--text-xs);        /* 12px */
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-2);    /* 16px */
  padding-bottom: var(--space-1);   /* 8px */
  border-bottom: 1px solid var(--border2);
}

.sidebar__link {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  font-weight: 400;
  color: var(--muted2);
  text-decoration: none;
  padding: 4px 0;
  transition: color 150ms ease;
}

.sidebar__link:hover {
  color: var(--ink);
}

.sidebar__link.active {
  color: var(--gold);
  font-weight: 500;
}
```

---

## 6.4 Footer

```css
.footer {
  background: var(--parchment);
  border-top: 1px solid var(--border);
  padding: var(--space-10) 0 var(--space-6);
  margin-top: var(--space-16);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-6);
}

.footer__brand {
  font-family: var(--font-display);
  font-size: var(--text-xl);        /* 24px */
  font-weight: 300;
  color: var(--ink);
  margin-bottom: var(--space-2);
}

.footer__description {
  font-size: var(--text-sm);
  color: var(--muted);
  line-height: 1.6;
  max-width: 32ch;
}

.footer__col-title {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-2);
}

.footer__link {
  display: block;
  font-size: var(--text-sm);
  color: var(--muted2);
  text-decoration: none;
  padding: 3px 0;
  transition: color 150ms ease;
}

.footer__link:hover {
  color: var(--ink);
}

.footer__bottom {
  margin-top: var(--space-8);
  padding-top: var(--space-3);
  border-top: 1px solid var(--border2);
  font-size: var(--text-xs);
  color: var(--muted);
  display: flex;
  justify-content: space-between;
}
```

---

## 6.5 Buttons

Only three button types exist in this system.

### Primary button
```css
.btn-primary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--stone);
  background: var(--ink);
  border: 1px solid var(--ink);
  padding: 10px 24px;
  border-radius: 0;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
}

.btn-primary:hover {
  background: var(--muted2);
  border-color: var(--muted2);
}
```

### Secondary button
```css
.btn-secondary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink);
  background: transparent;
  border: 1px solid var(--border);
  padding: 10px 24px;
  border-radius: 0;
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease;
}

.btn-secondary:hover {
  background: var(--parchment);
  border-color: var(--border);
}
```

### Ghost button (text link with structure)
```css
.btn-ghost {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--muted2);
  background: transparent;
  border: none;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
}

.btn-ghost:hover {
  color: var(--ink);
  border-color: var(--ink);
}
```

---

## 6.6 Card System (all types — see also Section 7)

Base card structure shared by all card types:

```css
.card {
  background: var(--stone);
  border: 1px solid var(--border);
  padding: var(--space-3);          /* 24px */
  transition: border-color 200ms ease;
}

.card:hover {
  border-color: var(--muted);
}
```

---

## 6.7 Scientific Tables

See Section 9 for full table system definition.

---

## 6.8 Image Gallery

Used on domain index pages and entity pages with multiple reference images.

```css
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-2);              /* 16px */
}

.image-gallery__item {
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--parchment2);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 200ms ease;
}

.image-gallery__item:hover {
  border-color: var(--muted);
}

.image-gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 200ms ease;
}
```

---

## 6.9 Image Viewer (lightbox/focal display)

Full-size image display. Activated by clicking any gallery thumbnail.

```css
.image-viewer {
  position: fixed;
  inset: 0;
  background: rgba(26, 20, 16, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  opacity: 0;
  transition: opacity 200ms ease;
}

.image-viewer.open {
  opacity: 1;
}

.image-viewer__img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
}

.image-viewer__caption {
  position: absolute;
  bottom: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
  color: var(--parchment);
  font-size: var(--text-sm);
  text-align: center;
  max-width: 60ch;
}

.image-viewer__close {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  color: var(--parchment);
  font-size: var(--text-sm);
  cursor: pointer;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: var(--font-body);
}
```

---

## 6.10 Microscopy Image Block

A specialized, structured component for presenting scientific microscopy images with mandatory metadata.

```css
.microscopy-block {
  border: 1px solid var(--border);
  margin: var(--space-6) 0;
}

.microscopy-block__image-area {
  background: #0a0a0a;              /* Near-black — microscopy convention */
  position: relative;
  overflow: hidden;
}

.microscopy-block__image-area img {
  display: block;
  width: 100%;
}

/* Scale bar overlay */
.microscopy-block__scale-bar {
  position: absolute;
  bottom: var(--space-2);
  right: var(--space-2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.microscopy-block__scale-line {
  height: 2px;
  background: #ffffff;
  width: 80px;                      /* Width set per image by data attribute */
}

.microscopy-block__scale-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 0.04em;
}

.microscopy-block__metadata {
  background: var(--parchment);
  padding: var(--space-2) var(--space-3);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
  border-top: 1px solid var(--border);
}

.microscopy-block__meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
```

### Required metadata fields for every microscopy image

| Field          | Example value                 |
|----------------|-------------------------------|
| Technique      | SEM-BSE / SEM-SE / PLM / OM  |
| Magnification  | ×40 / ×200 / ×1000           |
| Scale          | 200 μm / 50 μm / 10 μm       |
| Object ID      | RO-SONG-LQN-001               |

All four fields are **mandatory**. An image without all four fields cannot be published.

---

## 6.11 Figure Captions

```css
.figure {
  margin: var(--space-5) 0;
}

.figure__image {
  display: block;
  width: 100%;
  border: 1px solid var(--border);
}

.figure__caption {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid var(--border2);
}

.figure__number {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--muted2);
  flex-shrink: 0;
}

.figure__text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--muted);
  line-height: 1.5;
}
```

---

## 6.12 Diagnostic Feature Card

```css
.feature-card {
  border: 1px solid var(--border);
  background: var(--stone);
  padding: var(--space-3);
}

.feature-card__category {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-1);
}

.feature-card__id {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.feature-card__name {
  font-family: var(--font-display);
  font-size: var(--text-xl);        /* 24px */
  font-weight: 400;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: var(--space-2);
}

.feature-card__description {
  font-size: var(--text-sm);
  color: var(--muted);
  line-height: 1.55;
  margin-bottom: var(--space-3);
  max-width: 52ch;
}

.feature-card__meta {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  border-top: 1px solid var(--border2);
  padding-top: var(--space-2);
}
```

---

## 6.13 Reference Object Card

```css
.object-card {
  border: 1px solid var(--border);
  background: var(--stone);
  display: grid;
  grid-template-columns: 120px 1fr;
}

.object-card__image {
  width: 120px;
  aspect-ratio: 1;
  object-fit: cover;
  background: var(--parchment2);
  border-right: 1px solid var(--border);
}

.object-card__body {
  padding: var(--space-2) var(--space-3);
}

.object-card__id {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 4px;
}

.object-card__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);        /* 20px */
  font-weight: 400;
  color: var(--ink);
  margin-bottom: var(--space-2);
}

.object-card__attribution {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin-bottom: var(--space-2);
}

.object-card__certainty {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 2px 6px;
  border: 1px solid currentColor;
}

/* Certainty level colors */
.certainty--confirmed  { color: #3a6b3a; }
.certainty--probable   { color: var(--qing-cob); }
.certainty--proposed   { color: var(--ming-yel); }
.certainty--disputed   { color: #8b3a2a; }
```

---

## 6.14 Publication Card

```css
.publication-card {
  border: 1px solid var(--border);
  background: var(--stone);
  padding: var(--space-3);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-3);
}

.publication-card__year {
  font-family: var(--font-display);
  font-size: var(--text-2xl);       /* 30px */
  font-weight: 300;
  color: var(--border);
  line-height: 1;
  width: 56px;
  text-align: right;
}

.publication-card__id {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 4px;
}

.publication-card__title {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-style: italic;
  color: var(--ink);
  line-height: 1.4;
  margin-bottom: 6px;
}

.publication-card__author {
  font-size: var(--text-sm);
  color: var(--muted2);
}

.publication-card__type {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  background: var(--parchment);
  border: 1px solid var(--border2);
  padding: 2px 6px;
  margin-top: var(--space-2);
}
```

---

## 6.15 Section Headers

Used at the top of domain index pages.

```css
.section-header {
  padding: var(--space-10) 0 var(--space-6);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-6);
}

.section-header__domain {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-2);
}

.section-header__title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);       /* 60px */
  font-weight: 300;
  line-height: 1.0;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-3);
}

.section-header__count {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--muted);
}
```

---

## 6.16 Quote Blocks

For significant scholarly quotes within article pages.

```css
.quote-block {
  margin: var(--space-6) 0;
  padding: var(--space-4) var(--space-5);
  border-left: 3px solid var(--gold);
  background: var(--parchment);
}

.quote-block__text {
  font-family: var(--font-display);
  font-size: var(--text-xl);        /* 24px */
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  color: var(--ink);
  margin-bottom: var(--space-2);
}

.quote-block__attribution {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--muted);
  font-style: normal;
}
```

---

## 6.17 Scientific Notes Block

For inline annotations, methodological notes, uncertainty disclosures.

```css
.note-block {
  margin: var(--space-4) 0;
  padding: var(--space-3);
  border: 1px solid var(--border2);
  background: var(--parchment);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-2);
}

.note-block__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  height: fit-content;
}

.note-block__text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--muted2);
  line-height: 1.6;
}
```

---

## 6.18 Warning Block

For attribution disputes, data gaps, analytical limitations.

```css
.warning-block {
  margin: var(--space-4) 0;
  padding: var(--space-3);
  border: 1px solid #8b3a2a;
  background: #fcf5f4;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-2);
}

.warning-block__label {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8b3a2a;
  white-space: nowrap;
}

.warning-block__text {
  font-size: var(--text-sm);
  color: var(--muted2);
  line-height: 1.6;
}
```

---

## 6.19 Bibliography Block

At the end of each entity page and article page.

```css
.bibliography-block {
  margin-top: var(--space-10);
  padding-top: var(--space-6);
  border-top: 2px solid var(--border);
}

.bibliography-block__title {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-4);
}

.bibliography-block__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
```

---

## 6.20 Cross-Link Block (Related Entities)

Used in the sidebar relationship panel.

```css
.crosslink-block {
  margin-bottom: var(--space-4);
}

.crosslink-block__title {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  padding-bottom: var(--space-1);
  border-bottom: 1px solid var(--border2);
  margin-bottom: var(--space-1);
}

.crosslink-block__item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 5px 0;
  border-bottom: 1px solid var(--border2);
  text-decoration: none;
  transition: background 150ms ease;
}

.crosslink-block__item:hover {
  background: var(--parchment);
}

.crosslink-block__item-name {
  font-size: var(--text-sm);
  color: var(--muted2);
}

.crosslink-block__item-id {
  font-size: var(--text-xs);
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

---

---

# SECTION 7 — CARD SYSTEM (UNIFIED MODEL)

## 7.1 Unified Card Rules

All three card types (Reference Object, Diagnostic Feature, Publication) obey identical structural logic. Only content differs.

### Universal card rules

| Property        | Value                          |
|-----------------|--------------------------------|
| Background      | `--stone`                      |
| Border          | `1px solid var(--border)`      |
| Padding         | `var(--space-3)` (24px)        |
| Border radius   | `0`                            |
| Hover state     | Border darkens to `var(--muted)` |
| Hover transition| `border-color 200ms ease`      |
| Shadow          | None                           |
| Internal spacing| `var(--space-2)` between fields|

### Card anatomy (all types)

```
┌──────────────────────────────────────────┐
│  [entity type label — xs, uppercase, muted]  │
│  [entity identifier — xs, mono, muted]   │
│                                          │
│  [primary name — display font, 20–24px]  │
│                                          │
│  [description or metadata — sm, muted]  │
│                                          │
│ ─────────────────────────────────────── │
│  [tag]  [tag]  [tag]    [metadata]      │
└──────────────────────────────────────────┘
```

### Tags system

All tags follow identical visual rules:
- Font: `--font-body`, `--text-xs`, `font-weight: 500`
- Letter spacing: `0.04em`
- Text transform: `uppercase`
- Color: `var(--muted2)`
- Background: `var(--parchment)`
- Border: `1px solid var(--border)`
- Padding: `2px 8px`
- Border radius: `0`
- Tags are **non-interactive** (display only) unless they are filter controls on index pages

### Hover behavior

One rule only: border color darkens from `--border` (#ccc4b4) to `--muted` (#6b6255). No scale, no lift, no shadow, no background change. The hover is a confirmation, not a call to action.

---

---

# SECTION 8 — IMAGE & MICROSCOPY STANDARDS

## 8.1 Image Categories

The system handles five image types. Each has mandatory requirements.

| Category           | Context                            | Scale bar | Metadata panel |
|--------------------|------------------------------------|-----------|----------------|
| Macro photography  | Overall object documentation       | No        | No             |
| Detail photography | Surface, glaze, foot rim, markings | Optional  | No             |
| Optical microscopy | Cross-sections, microstructure     | Required  | Required       |
| SEM imagery        | BSE, SE, EDX maps                  | Required  | Required       |
| Comparative panels | Side-by-side attribution studies   | If applicable | Per image  |

## 8.2 Macro Photography Standards

```css
.photo-macro {
  display: block;
  width: 100%;
  border: 1px solid var(--border);
  background: var(--parchment2);   /* Fallback before image loads */
}
```

- Image must be photographed against a neutral background (preferably 18% grey or white)
- Minimum resolution: 2400px on longest edge
- No processing beyond white balance correction and exposure normalization
- No cropping tighter than showing the full object plus a 5% margin

## 8.3 Microscopy Image Standards

Every microscopy image must carry:
1. A rendered scale bar embedded in the image (white bar, white label, bottom right)
2. The microscopy metadata panel below the image (see Component 6.10)

Scale bar specifications:
- Color: `#ffffff`
- Bar height: 2px
- Label: font-size 11px, weight 500, color `#ffffff`
- Position: bottom-right, 16px margin from edges

## 8.4 Cross-Section Standards

```css
.cross-section-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;                         /* Minimal gap — images form a pair */
  border: 1px solid var(--border);
}
```

When showing a cross-section alongside a macro:
- Left: macro overall
- Right: cross-section detail
- Both images at equal height
- Combined caption with separate Fig. numbering for each half

## 8.5 SEM Image Standards

SEM (BSE/SE/EDX) images follow microscopy standards with additional requirements:
- EDX maps must include a color key legend embedded in the image
- BSE images display in greyscale only — never colorized
- Beam parameters (kV, working distance) included in metadata panel if available

## 8.6 Comparative Panels

When multiple images are shown side-by-side for comparative purposes:

```css
.comparative-panel {
  display: grid;
  gap: var(--space-2);
  margin: var(--space-6) 0;
}

/* Two items */
.comparative-panel--2 { grid-template-columns: 1fr 1fr; }

/* Three items */
.comparative-panel--3 { grid-template-columns: 1fr 1fr 1fr; }
```

Each cell in the panel:
- Has its own embedded label (top-left corner, white text on dark overlay)
- Has its own figure number
- Shares one combined caption below the panel

## 8.7 Magnification & Scale Bar Logic

Scale bars must be rendered physically accurate relative to the displayed image. The following reference table provides standard scale bar widths in pixels for common magnifications at standard display sizes.

| Magnification | Scale value | Bar width at 800px display width |
|---------------|-------------|----------------------------------|
| ×10           | 1 mm        | ~80px                            |
| ×40           | 200 μm      | ~64px                            |
| ×100          | 100 μm      | ~80px                            |
| ×200          | 50 μm       | ~80px                            |
| ×1000         | 10 μm       | ~80px                            |

Actual pixel width must be computed from original image metadata. The values above are approximations for reference only.

---

---

# SECTION 9 — TABLE SYSTEM

## 9.1 Base Table

```css
.table-scientific {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--text-sm);        /* 14px */
  color: var(--ink);
  border: 1px solid var(--border);
  margin: var(--space-4) 0;
}

.table-scientific thead th {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted2);
  background: var(--parchment);
  padding: 10px 16px;
  text-align: left;
  border-bottom: 2px solid var(--border);
  white-space: nowrap;
}

.table-scientific tbody td {
  padding: 10px 16px;
  vertical-align: top;
  border-bottom: 1px solid var(--border2);
  line-height: 1.5;
}

.table-scientific tbody tr:last-child td {
  border-bottom: none;
}

.table-scientific tbody tr:nth-child(even) {
  background: var(--parchment);
}

.table-scientific tbody tr:hover {
  background: var(--parchment2);
}

/* Right-align numeric columns */
.table-scientific td.numeric,
.table-scientific th.numeric {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* Sortable column header */
.table-scientific th.sortable {
  cursor: pointer;
  user-select: none;
}

.table-scientific th.sortable::after {
  content: ' ↕';
  color: var(--border);
  font-size: 10px;
}

.table-scientific th.sort-asc::after  { content: ' ↑'; color: var(--muted); }
.table-scientific th.sort-desc::after { content: ' ↓'; color: var(--muted); }
```

## 9.2 Comparative Table

Used for kiln comparisons, feature comparisons, material comparisons.

```css
.table-comparative {
  /* Inherits .table-scientific */
}

.table-comparative th:first-child,
.table-comparative td:first-child {
  font-weight: 600;
  background: var(--parchment);
  border-right: 2px solid var(--border);
  white-space: nowrap;
}

/* Positive match cell */
.table-comparative td.match {
  background: #f0f5f0;
  color: #3a6b3a;
  font-weight: 500;
}

/* Negative / absent cell */
.table-comparative td.absent {
  color: var(--muted);
  font-style: italic;
}

/* Uncertain cell */
.table-comparative td.uncertain {
  color: var(--muted);
}

.table-comparative td.uncertain::before {
  content: '? ';
}
```

## 9.3 Diagnostic Classification Table

Used for the structured listing of diagnostic features within a period or kiln context.

```css
.table-diagnostic {
  /* Inherits .table-scientific */
}

.table-diagnostic .feature-id {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}

.table-diagnostic .significance-high   { color: #3a6b3a; font-weight: 500; }
.table-diagnostic .significance-medium { color: var(--ming-yel); }
.table-diagnostic .significance-low    { color: var(--muted); }
```

## 9.4 Object Data Table

The primary structured data table on a Reference Object page. Two-column: label + value.

```css
.table-object-data {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);
}

.table-object-data tr {
  border-bottom: 1px solid var(--border2);
}

.table-object-data tr:last-child {
  border-bottom: none;
}

.table-object-data th {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  background: var(--parchment);
  padding: 8px 16px;
  text-align: left;
  width: 180px;
  vertical-align: top;
  border-right: 1px solid var(--border2);
}

.table-object-data td {
  font-size: var(--text-sm);
  color: var(--ink);
  padding: 8px 16px;
  vertical-align: top;
  line-height: 1.5;
}
```

---

---

# SECTION 10 — NAVIGATION SYSTEM (UI LEVEL)

## 10.1 Top Navigation

Full specification in Component 6.1. Behavioral rules:

- Navigation bar is `position: sticky` — always visible during scroll
- Maximum one level — no dropdowns, no flyouts, no mega-menus
- Active domain marked with gold underline (`border-bottom: 2px solid var(--gold)`)
- Wordmark links to system home
- Search icon (right-aligned) links to `/search/` — implemented in Stage 6

## 10.2 Sidebar Structure

The sidebar appears on all entity pages (Reference Object, Diagnostic Feature, Kiln, Dynasty, Methodology, Publication).

### Sidebar sections (in order):

1. **On this page** — in-page jump links (H2 anchors)
2. **In this domain** — sibling entities (same dynasty/kiln/category)
3. **Related entities** — cross-domain links by entity type
4. **Key publications** — cited publications on this entity

Each section uses the `.crosslink-block` component (6.20).

On tablet and mobile, the sidebar moves below the main content.

## 10.3 Breadcrumb Logic

Full specification in Component 6.2. Additional rules:

- Maximum depth: 5 levels (Atlas › Domain › Category › Sub-category › Entity)
- On mobile: collapse to show only parent and current page
- Current page item is not a link (it is the user's location)

## 10.4 Pagination

Used on domain index pages when filtered results exceed 30 items.

```css
.pagination {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border);
  font-family: var(--font-body);
  font-size: var(--text-sm);
}

.pagination__item {
  padding: 6px 12px;
  border: 1px solid var(--border);
  color: var(--muted2);
  text-decoration: none;
  transition: background 150ms ease;
}

.pagination__item:hover {
  background: var(--parchment);
}

.pagination__item.active {
  background: var(--ink);
  color: var(--stone);
  border-color: var(--ink);
}

.pagination__item.disabled {
  color: var(--border);
  pointer-events: none;
}
```

## 10.5 Domain Filter (Index pages)

```css
.domain-filter {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-bottom: var(--space-5);
  padding: var(--space-3);
  background: var(--parchment);
  border: 1px solid var(--border);
}

.filter-control {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.filter-control__label {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.filter-control__select {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--ink);
  background: var(--stone);
  border: 1px solid var(--border);
  padding: 6px 10px;
  border-radius: 0;
  appearance: none;
  min-width: 160px;
}

.filter-control__select:focus {
  outline: 2px solid var(--gold);
  outline-offset: 1px;
}
```

---

---

# SECTION 11 — RESPONSIVE DESIGN RULES

## 11.1 Breakpoint Definitions

```css
/* Three breakpoints only — no intermediate complexity */
@media (max-width: 1100px) { /* Large tablet — minor adjustments  */ }
@media (max-width: 768px)  { /* Tablet — layout restructures      */ }
@media (max-width: 480px)  { /* Mobile — simplified layout        */ }
```

## 11.2 Layout Adaptation Rules

### Desktop (>1100px)
- 12-column grid active
- Sidebar visible (4 columns)
- Card grid: 3 columns
- Navigation: full horizontal

### Tablet (768–1100px)
- 8-column grid
- Sidebar hidden — collapsed into accordion below main content
- Card grid: 2 columns
- Navigation: horizontal, condensed (wordmark only + icons)
- Container padding: 32px

### Mobile (<768px)
- 4-column grid
- Sidebar hidden — accessible via "Show related" button
- Card grid: 1 column
- Navigation: hamburger menu
- Container padding: 20px
- Microscopy metadata: 2 columns (stacked pairs)
- Tables: horizontal scroll wrapper

## 11.3 Typography Adaptation

```css
@media (max-width: 768px) {
  h1 { font-size: var(--text-3xl); }     /* 38px → from 48px */
  h2 { font-size: var(--text-xl); }      /* 24px → from 30px */
  .section-header__title { font-size: var(--text-3xl); }
}

@media (max-width: 480px) {
  h1 { font-size: var(--text-2xl); }     /* 30px */
  h2 { font-size: var(--text-lg); }      /* 20px */
  body { font-size: 15px; }
}
```

## 11.4 Table Responsiveness

Tables on mobile use horizontal scroll, not collapsed layout. Scientific tables must not have columns hidden or removed on mobile — data integrity is non-negotiable.

```css
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid var(--border);
  margin: var(--space-4) 0;
}

.table-wrapper .table-scientific {
  margin: 0;
  min-width: 600px;
}
```

## 11.5 Image Responsiveness

All images are responsive by default:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

The microscopy block metadata panel collapses to 2 columns on tablet and 1 column on mobile.

---

---

# SECTION 12 — MOTION RULES

## 12.1 Permitted Transitions

The complete list of permitted motion in this system:

| Element               | Property         | Duration  | Easing         |
|-----------------------|------------------|-----------|----------------|
| Navigation items      | `color`          | 150ms     | `ease`         |
| Navigation active bar | `border-color`   | 150ms     | `ease`         |
| Card hover            | `border-color`   | 200ms     | `ease`         |
| Button hover          | `background`, `color`, `border-color` | 150ms | `ease` |
| Breadcrumb hover      | `color`          | 150ms     | `ease`         |
| Sidebar links         | `color`          | 150ms     | `ease`         |
| Image viewer open     | `opacity`        | 200ms     | `ease`         |
| Filter select focus   | `outline`        | instant   | —              |
| Table row hover       | `background`     | 100ms     | `ease`         |

## 12.2 Forbidden Motion

- No translate/scale transforms on hover
- No box-shadow transitions
- No keyframe animations
- No scroll-triggered animations
- No parallax effects
- No entrance animations (fade-in on load)
- No loading spinners (use skeleton states in plain CSS)
- No carousel auto-play

## 12.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

This rule is mandatory and non-negotiable. Users who have set `prefers-reduced-motion` receive an immediately-responsive interface with no transitions.

---

---

# SECTION 13 — DESIGN CONSISTENCY RULES

## 13.1 The Four Consistency Laws

**Spacing law:** Every spacing value used in the system — margin, padding, gap — must be a token from the spacing scale (Section 5). No arbitrary pixel values. If a needed value is not in the scale, round to the nearest token.

**Border law:** All borders are `1px solid var(--border)` or `1px solid var(--border2)`. The only exceptions are: the gold accent underline in navigation (`2px solid var(--gold)`), the quote block left border (`3px solid var(--gold)`), and the H2 bottom divider (`1px solid var(--border)`). No other border variations.

**Typography law:** All type is set in `--font-display` or `--font-body`. All sizes use the type scale tokens. Line heights are: `1.0–1.1` for display headings, `1.2–1.3` for content headings, `1.5–1.6` for metadata, `1.65–1.7` for body text. No overrides outside these ranges.

**Interaction law:** Hover states change one property only: `color`, `border-color`, or `background`. Never more than one property per hover state. The change is always towards a darker or more saturated value — never lighter, never colored.

## 13.2 Component Checklist

Before any component is added to the system, it must satisfy all of the following:

- [ ] Uses only locked color tokens
- [ ] Uses only locked spacing tokens
- [ ] Uses only `--font-display` or `--font-body`
- [ ] Border radius is zero
- [ ] Hover state changes one property only
- [ ] Transition duration is 150ms or 200ms only
- [ ] No shadow
- [ ] No gradient
- [ ] Can be rendered in print stylesheet without modification

## 13.3 CSS Architecture Rules

```
css/
├── reset.css          ← Box-sizing, margin reset only
├── tokens.css         ← All :root variables (colors, spacing, type scale)
├── typography.css     ← Type selectors only (h1–h4, p, figcaption, etc.)
├── layout.css         ← Container, grid, breakpoints
├── components.css     ← All component classes
└── pages/
    ├── entity.css     ← Entity page specifics
    ├── index.css      ← Domain index page specifics
    └── home.css       ← System home specifics
```

- `tokens.css` is loaded first — all other files depend on it
- No component imports tokens by string value — only by variable
- No `!important` except in `prefers-reduced-motion` reset
- Specificity is flat — components use single class selectors
- No nesting deeper than one level (`.card .card__title` — not `.section .card .card__title`)

## 13.4 Print Stylesheet

```css
@media print {
  .nav-bar,
  .sidebar,
  .breadcrumb,
  .domain-filter,
  .pagination,
  .image-viewer { display: none; }

  body {
    font-size: 11pt;
    color: #000;
    background: #fff;
  }

  h1 { font-size: 22pt; page-break-after: avoid; }
  h2 { font-size: 16pt; page-break-after: avoid; }
  h3 { font-size: 13pt; page-break-after: avoid; }

  .table-scientific { font-size: 9pt; }
  .figure { page-break-inside: avoid; }
  .microscopy-block { page-break-inside: avoid; }

  a[href]::after {
    content: ' [' attr(href) ']';
    font-size: 9pt;
    color: #666;
  }
}
```

---

---

# APPENDIX A — COMPLETE TOKEN REFERENCE

```css
:root {
  /* ── Colors ── */
  --ink:        #1a1410;
  --stone:      #f7f4ef;
  --parchment:  #ede8df;
  --parchment2: #e4ddd1;
  --gold:       #b8860b;
  --gold-lt:    #d4a843;
  --ru-blue:    #7a9bab;
  --ming-yel:   #c9a227;
  --qing-cob:   #2d5a8e;
  --border:     #ccc4b4;
  --border2:    #ddd7cc;
  --muted:      #6b6255;
  --muted2:     #3a342c;

  /* ── Typography ── */
  --font-display: 'Cormorant Garamond', 'Georgia', serif;
  --font-body:    'Inter', 'Helvetica Neue', sans-serif;

  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-md:   1.125rem;
  --text-lg:   1.25rem;
  --text-xl:   1.5rem;
  --text-2xl:  1.875rem;
  --text-3xl:  2.375rem;
  --text-4xl:  3rem;
  --text-5xl:  3.75rem;

  /* ── Spacing ── */
  --space-0:  0;
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  40px;
  --space-6:  48px;
  --space-7:  56px;
  --space-8:  64px;
  --space-9:  72px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;

  /* ── Layout ── */
  --max-width:        1100px;
  --max-width-text:   720px;
  --max-width-narrow: 580px;

  --container-padding-desktop: 48px;
  --container-padding-tablet:  32px;
  --container-padding-mobile:  20px;

  --nav-height: 56px;

  /* ── Borders ── */
  --border-width-thin:   1px;
  --border-width-medium: 2px;
  --border-width-heavy:  3px;
  --border-radius:       0;

  /* ── Transitions ── */
  --transition-fast:   150ms ease;
  --transition-medium: 200ms ease;
}
```

---

# APPENDIX B — FONT LOADING

```html
<!-- In <head> of every page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

Font display strategy: `swap` — text renders immediately in system fallback, then swaps to web font on load. Never `block`.

---

# APPENDIX C — CERTAINTY BADGE REFERENCE

| Value      | Color (text)  | Hex     | Usage                                    |
|------------|---------------|---------|------------------------------------------|
| confirmed  | Dark green    | #3a6b3a | Analytically established attribution     |
| probable   | `--qing-cob`  | #2d5a8e | Strong typological / visual evidence     |
| proposed   | `--ming-yel`  | #c9a227 | Argued in literature, not yet consensus  |
| disputed   | Dark red      | #8b3a2a | Competing attributions, no consensus     |

All four use: `border: 1px solid currentColor` · `background: transparent` · `padding: 2px 6px` · `font-size: var(--text-xs)` · `letter-spacing: 0.05em` · `text-transform: uppercase`

---

# APPENDIX D — STAGE HANDOFF NOTES FOR STAGE 3

Stage 3 (Template Development) receives the following locked deliverables from Stage 2:

1. `tokens.css` — complete, locked, no modifications permitted
2. `typography.css` — all type selectors defined
3. `components.css` — all components defined
4. `layout.css` — grid, container, breakpoints defined

Stage 3 may add:
- Page-specific layout files under `css/pages/`
- JS behavior for components (filter, image viewer, sidebar)
- HTML templates implementing the component library

Stage 3 may NOT:
- Add new color values
- Add new spacing values not in the scale
- Add new font families
- Add border radius
- Add box shadows
- Add gradient backgrounds
- Add new components without documenting them in this specification (which then requires a versioned revision)

---

*End of Stage 2 Design System Specification*  
*This document is the locked visual language. All template development in Stage 3 depends on the definitions contained here.*  
*Color tokens, typography, and spacing scale are permanently locked after this stage.*
