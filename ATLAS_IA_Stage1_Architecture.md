# ATLAS OF DIAGNOSTIC FEATURES OF CHINESE CERAMICS AND PORCELAIN
## Stage 1 — Full System Architecture (Locked Foundation)
### Information Architecture Specification Document
**Version:** 1.0  
**Status:** LOCKED FOUNDATION  
**Scope:** Scientific information system, scalable to 300+ pages  
**Document type:** Architecture specification — not a design document

---

## TABLE OF CONTENTS

1. Full Website Hierarchy
2. Information Model (Core Entities & Relationships)
3. Navigation Model
4. URL Structure
5. Folder / Project Structure
6. Page Types (Templates)
7. Scalability Strategy

---

---

# SECTION 1 — FULL WEBSITE HIERARCHY

## Top-Level Domains (Main Sections)

The system is organized into **seven primary domains**. Each domain is an independent knowledge tree capable of containing dozens of pages. Domains are equal in architectural weight — none is subordinate to another. They are connected through the relationship layer (see Section 2), not through hierarchy.

```
ATLAS
├── 1. REFERENCE OBJECTS
├── 2. DIAGNOSTIC FEATURES
├── 3. KILNS
├── 4. DYNASTIES & PERIODS
├── 5. METHODOLOGY
├── 6. PUBLICATIONS
└── 7. ABOUT / SYSTEM
```

---

## Domain 1 — Reference Objects

Reference Objects are the empirical core of the system. Each represents a single ceramic or porcelain object with confirmed attribution, documented provenance, and measurable physical properties.

```
/objects/
├── [dynasty-slug]/
│   ├── [kiln-slug]/
│   │   └── [object-id]/          ← individual object pages
```

Estimated page count at full scale: **150–180 pages**

Sub-organization within this domain:

- By dynasty (Tang, Song, Yuan, Ming, Qing, etc.)
- By kiln or production site (Jingdezhen, Longquan, Ru, Jun, Ding, Guan, Yaozhou, etc.)
- By ware type (cross-reference only, not a primary axis)
- By material type (cross-reference only)

---

## Domain 2 — Diagnostic Features

Diagnostic Features are the analytical vocabulary of the system. Each feature represents a specific, observable or measurable property that can be used to attribute, date, or distinguish ceramic objects.

```
/features/
├── glaze/
│   ├── surface-quality/
│   ├── colour-palette/
│   ├── crackle/
│   └── pooling-behaviour/
├── microstructure/
│   ├── body-texture/
│   ├── inclusion-patterns/
│   └── vitrification/
├── firing-traces/
│   ├── kiln-furniture-marks/
│   ├── firing-atmosphere-effects/
│   └── thermal-deformation/
├── form-morphology/
│   ├── foot-rim-typology/
│   ├── wall-profiles/
│   └── handle-spout-construction/
├── decoration/
│   ├── painted-techniques/
│   ├── carved-incised/
│   └── applied-moulded/
└── material-composition/
    ├── body-materials/
    └── glaze-materials/
```

Estimated page count at full scale: **60–80 pages**

---

## Domain 3 — Kilns

Kiln pages document production sites as entities: their geographic location, active periods, characteristic output, known variations, and analytical signatures.

```
/kilns/
├── north-china/
│   ├── ding/
│   ├── jun/
│   ├── ru/
│   └── yaozhou/
├── south-china/
│   ├── jingdezhen/
│   ├── longquan/
│   ├── dehua/
│   └── jian/
├── imperial/
│   ├── guan-song/
│   └── imperial-jingdezhen/
└── regional/
    └── [regional-kilns]/
```

Estimated page count at full scale: **30–40 pages**

---

## Domain 4 — Dynasties & Periods

Dynasty pages provide the chronological scaffolding of the system. They are not art-historical narrative pages — they serve as structured indexes of what objects, kilns, and features belong to a given period, with brief contextual framing.

```
/periods/
├── tang/               (618–907)
├── five-dynasties/     (907–960)
├── song/               (960–1279)
│   ├── northern-song/
│   └── southern-song/
├── liao/               (907–1125)
├── jin/                (1115–1234)
├── yuan/               (1271–1368)
├── ming/               (1368–1644)
│   ├── early-ming/
│   ├── middle-ming/
│   └── late-ming/
└── qing/               (1644–1912)
    ├── early-qing/
    ├── middle-qing/
    └── late-qing/
```

Estimated page count at full scale: **18–24 pages**

---

## Domain 5 — Methodology

Methodology pages document the analytical and scientific methods used in the study of ceramics. These are reference pages for researchers, explaining techniques, instruments, procedures, and interpretation frameworks.

```
/methodology/
├── analytical-techniques/
│   ├── xrf/
│   ├── sem-edx/
│   ├── xrd/
│   ├── raman-spectroscopy/
│   ├── thermoluminescence/
│   └── neutron-activation/
├── visual-examination/
│   ├── macroscopic-assessment/
│   ├── microscopy/
│   └── uv-fluorescence/
├── sampling-protocols/
│   ├── non-destructive/
│   └── micro-sampling/
└── attribution-frameworks/
    ├── typological-analysis/
    └── comparative-methodology/
```

Estimated page count at full scale: **20–30 pages**

---

## Domain 6 — Publications

The publications domain is the bibliographic layer of the system. Each entry is a structured record of a scholarly work that is cited elsewhere in the system.

```
/publications/
├── by-author/
│   └── [author-slug]/
├── by-topic/
│   ├── glaze-studies/
│   ├── kiln-archaeology/
│   ├── material-analysis/
│   └── typology/
└── [publication-id]/        ← canonical publication pages
```

Estimated page count at full scale: **40–60 pages** (publication records + author profiles)

---

## Domain 7 — About / System

System-level pages. Static and minimal. Not part of the knowledge graph.

```
/about/
├── about-the-atlas/
├── editorial-methodology/
├── contributors/
├── terms-of-use/
└── contact/
```

Page count: fixed at approximately **8–10 pages**

---

## Full Hierarchy Summary

| Domain               | Primary Pages (at scale) |
|----------------------|--------------------------|
| Reference Objects    | 150–180                  |
| Diagnostic Features  | 60–80                    |
| Kilns                | 30–40                    |
| Dynasties & Periods  | 18–24                    |
| Methodology          | 20–30                    |
| Publications         | 40–60                    |
| About / System       | 8–10                     |
| **TOTAL**            | **326–424**              |

The system is architecturally prepared for 300+ pages at initial specification.

---

---

# SECTION 2 — INFORMATION MODEL (CORE ENTITIES & RELATIONSHIPS)

## 2.1 Core Entities

The system is built on **seven core entity types**. Every page in the knowledge system is an instance of one of these entities.

---

### Entity 1: Reference Object (RO)

**Definition:** A single ceramic or porcelain artifact with confirmed or proposed attribution, documented physical properties, and research-grade descriptive data.

**Required fields:**
- Unique identifier (RO-[dynasty]-[kiln]-[sequence])
- Object type (vessel form)
- Dynasty / period
- Kiln attribution (confirmed / probable / proposed)
- Dimensions (height, diameter, weight)
- Physical condition
- Collection / accession number
- Acquisition provenance
- Analytical data (linked or embedded)
- Associated diagnostic features (linked)
- Bibliography (linked to Publication entities)
- Image set (minimum: overall, foot rim, glaze detail, cross-section if available)

**Relationship multiplicity:**
- Belongs to: one Dynasty (required), one or more Periods (optional refinement)
- Produced at: one Kiln (confirmed) or flagged as disputed
- Exhibits: one or more Diagnostic Features
- Documented in: one or more Publications
- Analyzed by: one or more Methodologies
- Composed of: one or more Materials / Bodies

---

### Entity 2: Diagnostic Feature (DF)

**Definition:** A specific, observable or measurable property that carries diagnostic value for attribution, dating, or identification of ceramic objects.

**Required fields:**
- Unique identifier (DF-[category]-[slug])
- Category (glaze / microstructure / firing-trace / form / decoration / material)
- Scientific description (precise, terminology-controlled)
- Visual documentation (reference images)
- Diagnostic significance (what does presence of this feature indicate)
- Period range (which dynasties / periods exhibit this feature)
- Kiln associations (which kilns are known to produce this feature)
- Methodology for identification (linked)

**Relationship multiplicity:**
- Exhibited by: one or more Reference Objects
- Associated with: one or more Kilns
- Active in: one or more Dynasty / Period ranges
- Identified via: one or more Methodologies
- Referenced in: one or more Publications

---

### Entity 3: Kiln

**Definition:** A ceramic production site — either a specific kiln complex, a named tradition, or a regional production area — defined by geography, active period, and characteristic output.

**Required fields:**
- Unique identifier (KLN-[region]-[slug])
- Geographic location (province, coordinates if known)
- Active period(s)
- Administrative status during operation (imperial / commercial / regional)
- Primary wares produced
- Excavation status (archaeological record availability)
- Characteristic diagnostic features (linked)
- Bibliography

**Relationship multiplicity:**
- Active during: one or more Dynasties / Periods
- Produced: one or more Reference Object types
- Characterized by: one or more Diagnostic Features
- Documented in: one or more Publications

---

### Entity 4: Dynasty / Period

**Definition:** A chronological unit used to organize the system. Dynasties are primary; sub-periods are secondary refinements where scholarly convention requires them.

**Required fields:**
- Unique identifier (DYN-[slug])
- Date range (start–end CE)
- Political entity (ruling house)
- Capital(s)
- Brief ceramic-historical characterization (100–200 words maximum, factual only)
- Active kilns during period (linked)
- Characteristic features of period (linked)
- Key reference objects (linked, curated selection)

**Relationship multiplicity:**
- Contains: many Reference Objects
- Hosts: many Kilns (active)
- Exhibits: many Diagnostic Features
- Referenced in: many Publications

---

### Entity 5: Material / Body

**Definition:** A specific clay body or material composition associated with ceramic production. May refer to paste, glaze chemistry, or raw material sources.

**Required fields:**
- Unique identifier (MAT-[type]-[slug])
- Material type (body paste / glaze / slip / pigment)
- Known composition range (chemical, where available)
- Source region (if known)
- Firing temperature range
- Associated kilns (linked)
- Associated periods (linked)

**Relationship multiplicity:**
- Used by: one or more Kilns
- Active during: one or more Dynasties
- Characteristic of: one or more Diagnostic Features
- Analyzed by: one or more Methodologies

---

### Entity 6: Publication

**Definition:** A scholarly work — monograph, journal article, excavation report, or exhibition catalogue — that is cited by other entities in the system.

**Required fields:**
- Unique identifier (PUB-[year]-[slug])
- Author(s) (linked to Author Profile entities)
- Title
- Publication type (article / book / report / catalogue)
- Publisher / Journal
- Year
- Language
- DOI or stable URL (if available)
- Subject tags (controlled vocabulary)
- Entities documented (linked: which objects, kilns, features are treated)

**Relationship multiplicity:**
- Authored by: one or more Authors
- Documents: one or more Reference Objects, Kilns, Diagnostic Features, Methodologies

---

### Entity 7: Methodology

**Definition:** An analytical or examination technique used in the scientific study of ceramics.

**Required fields:**
- Unique identifier (MTH-[slug])
- Full name + abbreviation
- Technique category (elemental / structural / visual / dating)
- Principle of operation (brief, scientifically accurate)
- Information yielded (what can be determined)
- Limitations
- Non-destructive or requires sampling
- Instruments / equipment
- Representative publications (linked)
- Objects analyzed by this method in the system (linked)

**Relationship multiplicity:**
- Used on: one or more Reference Objects
- Identifies: one or more Diagnostic Features
- Documented in: one or more Publications

---

## 2.2 Entity Relationship Map

```
                    ┌─────────────────┐
                    │   PUBLICATION   │
                    └────────┬────────┘
                             │ documents / cites
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐
  │  REFERENCE    │  │  DIAGNOSTIC   │  │     KILN      │
  │    OBJECT     │◄─┤   FEATURE     ├─►│               │
  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘
          │                  │                  │
          │ belongs to       │ active in        │ active during
          ▼                  ▼                  ▼
  ┌───────────────────────────────────────────────────────┐
  │                  DYNASTY / PERIOD                     │
  └───────────────────────────────────────────────────────┘
          │
          │ composed of
          ▼
  ┌───────────────┐          ┌───────────────┐
  │   MATERIAL /  │◄─────────┤  METHODOLOGY  │
  │     BODY      │ analyzed │               │
  └───────────────┘    by    └───────────────┘
```

---

## 2.3 Controlled Vocabularies

To preserve system integrity at scale, the following fields must use **controlled vocabulary lists** (defined in the data layer):

- Object type / vessel form
- Ware category
- Feature category
- Kiln region
- Material type
- Technique category
- Dynasty names (standardized)
- Attribution certainty level: `confirmed` / `probable` / `proposed` / `disputed`

---

---

# SECTION 3 — NAVIGATION MODEL

## 3.1 Main Navigation Logic

The top-level navigation exposes the seven primary domains. It is **flat and domain-first** — no mega-menus, no deep dropdowns at the navigation level. The navigation does not reflect the full hierarchy; it provides entry points into each domain.

```
[Objects]  [Features]  [Kilns]  [Periods]  [Methodology]  [Publications]  [About]
```

Within each domain, the user lands on a **domain index page** — a structured, filterable list of all entities in that domain. This is the primary means of traversal within a domain.

---

## 3.2 Domain Index Pages

Each domain has one index page that:
- Lists all entities of that type
- Allows filtering by relevant facets (period, kiln, feature category, etc.)
- Presents entities in a consistent record format (identifier, name, brief descriptor, key relationships)
- Does not paginate — uses in-page filtering (JavaScript, client-side at this scale)

Domain index pages are not content pages. They are navigation infrastructure.

---

## 3.3 Cross-Linking Logic (Relationship Navigation)

Every entity page contains a **Relationships panel** — a structured sidebar or section listing all linked entities of each type:

On a Reference Object page:
- Dynasty: [linked]
- Kiln: [linked]
- Diagnostic Features exhibited: [list of links]
- Materials: [list of links]
- Analytical methods applied: [list of links]
- Publications: [list of links]

On a Diagnostic Feature page:
- Objects exhibiting this feature: [list of links]
- Associated kilns: [list of links]
- Period range: [linked dynasty pages]
- Identification method: [linked]
- Publications: [list of links]

Cross-links are **bidirectional** — if Object A links to Feature X, Feature X must list Object A. This is enforced at the data layer, not maintained manually.

---

## 3.4 Breadcrumb Logic

Breadcrumbs reflect the **canonical path** of the entity, not the user's navigation history.

Examples:

```
Atlas → Objects → Song Dynasty → Longquan → RO-SONG-LQN-001

Atlas → Features → Glaze → Crackle → DF-GLAZE-CRACKLE-GUAN

Atlas → Kilns → South China → Longquan → KLN-SOUTH-LONGQUAN

Atlas → Methodology → Analytical Techniques → XRF → MTH-XRF
```

Breadcrumbs are generated from the entity's canonical path in the hierarchy, not from URL alone.

---

## 3.5 Internal Linking Strategy

**Rule 1 — Link on first mention only within a page body.**  
Do not repeat links to the same entity multiple times within a page's main text.

**Rule 2 — Relationship panels are always complete.**  
The relationship panel must list ALL linked entities, regardless of whether they are mentioned in the body text.

**Rule 3 — No orphan pages.**  
Every page must be reachable from at least two paths: its domain index and at least one cross-link from a related entity. Pages with no cross-links are data quality errors.

**Rule 4 — Attribution certainty is always visible.**  
When a Reference Object links to a Kiln, the certainty level (`confirmed`, `probable`, `proposed`, `disputed`) must be displayed at the link, not only on the object page.

---

## 3.6 Search Concept (Future Implementation)

Search is not implemented in Stage 1 but the architecture must accommodate it. Search will operate as:

- **Full-text search** across all page content (Pagefind or similar static search index)
- **Faceted entity search** within domain indexes (client-side filtering on JSON data)
- **Relationship-aware search**: searching for a kiln returns not just the kiln page, but all objects attributed to it
- **Identifier search**: entering a system ID (e.g., `RO-SONG-LQN-001`) navigates directly to that entity

Search UI will be defined in Stage 2. The data layer must emit a structured JSON index compatible with static search at build time.

---

---

# SECTION 4 — URL STRUCTURE

## Design Principles

- URLs are **canonical, permanent, and meaningful**
- URLs reflect entity type and classification, not navigation path
- URLs use **lowercase, hyphen-separated slugs** only
- No query strings in canonical URLs
- IDs are embedded in slugs, not appended as query parameters
- URLs must remain stable even if page titles or classifications are later revised

---

## 4.1 Reference Objects

```
/objects/{dynasty}/{kiln}/{object-id}/

Examples:
/objects/song/longquan/ro-song-lqn-001/
/objects/tang/yue/ro-tang-yue-007/
/objects/ming/jingdezhen/ro-ming-jdz-042/
/objects/qing/imperial-jingdezhen/ro-qing-imp-015/
```

**Object ID format:** `ro-{dynasty-code}-{kiln-code}-{sequence}`

---

## 4.2 Diagnostic Features

```
/features/{category}/{feature-slug}/

Examples:
/features/glaze/crackle-ice-pattern/
/features/glaze/pooling-foot-rim/
/features/microstructure/large-quartz-inclusions/
/features/firing-traces/kiln-spur-marks-tripod/
/features/form-morphology/foot-rim-unglazed-ring/
/features/decoration/underglaze-cobalt-line-wash/
```

---

## 4.3 Kilns

```
/kilns/{region}/{kiln-slug}/

Examples:
/kilns/south-china/longquan/
/kilns/north-china/ding/
/kilns/north-china/ru/
/kilns/imperial/guan-southern-song/
/kilns/south-china/jingdezhen/
```

---

## 4.4 Dynasties & Periods

```
/periods/{dynasty-slug}/
/periods/{dynasty-slug}/{sub-period-slug}/

Examples:
/periods/song/
/periods/song/northern-song/
/periods/song/southern-song/
/periods/ming/
/periods/ming/early-ming/
/periods/qing/
```

---

## 4.5 Methodology Pages

```
/methodology/{category}/{method-slug}/

Examples:
/methodology/analytical-techniques/xrf/
/methodology/analytical-techniques/sem-edx/
/methodology/visual-examination/uv-fluorescence/
/methodology/sampling-protocols/non-destructive/
/methodology/attribution-frameworks/typological-analysis/
```

---

## 4.6 Publications

```
/publications/{publication-id}/
/publications/authors/{author-slug}/

Examples:
/publications/pub-1998-wood-chinese-glazes/
/publications/pub-2003-kerr-wood-science-ceramics/
/publications/pub-2015-zhang-longquan-excavation/
/publications/authors/nigel-wood/
/publications/authors/robert-kerr/
```

**Publication ID format:** `pub-{year}-{author-surname}-{short-title}`

---

## 4.7 Domain Index Pages

```
/objects/
/features/
/kilns/
/periods/
/methodology/
/publications/
/about/
```

---

## 4.8 Special Pages

```
/                           ← System home / entry point
/search/                    ← Search interface (future)
/about/
/about/editorial-methodology/
/about/contributors/
```

---

---

# SECTION 5 — FOLDER / PROJECT STRUCTURE

## Design Principles

- Static site generator compatible (Hugo, Eleventy, or hand-built HTML)
- Clear separation of: pages / components / styles / data / assets
- Data layer is independent of markup — content is separable from presentation
- Component files are never page files
- Assets are organized by entity type, mirroring page structure

---

## Full Folder Structure

```
atlas-root/
│
├── pages/                          ← All HTML pages, mirrors URL structure
│   ├── index.html                  ← System home
│   ├── search/
│   │   └── index.html
│   ├── objects/
│   │   ├── index.html              ← Domain index
│   │   ├── song/
│   │   │   ├── longquan/
│   │   │   │   ├── index.html      ← Kiln-within-dynasty sub-index
│   │   │   │   └── ro-song-lqn-001/
│   │   │   │       └── index.html  ← Object page
│   │   │   └── [other kilns]/
│   │   └── [other dynasties]/
│   ├── features/
│   │   ├── index.html
│   │   ├── glaze/
│   │   │   ├── index.html
│   │   │   └── crackle-ice-pattern/
│   │   │       └── index.html
│   │   └── [other categories]/
│   ├── kilns/
│   │   ├── index.html
│   │   └── [region]/[kiln]/index.html
│   ├── periods/
│   │   ├── index.html
│   │   └── [dynasty]/index.html
│   ├── methodology/
│   │   ├── index.html
│   │   └── [category]/[method]/index.html
│   ├── publications/
│   │   ├── index.html
│   │   ├── authors/
│   │   │   └── [author-slug]/index.html
│   │   └── [pub-id]/index.html
│   └── about/
│       ├── index.html
│       └── [about-pages]/index.html
│
├── components/                     ← Reusable HTML partials / includes
│   ├── head.html                   ← <head> block (meta, css links)
│   ├── nav-main.html               ← Top navigation
│   ├── breadcrumb.html             ← Breadcrumb component
│   ├── footer.html
│   ├── entity-header.html          ← Shared entity page header (ID, title, type)
│   ├── relationship-panel.html     ← Cross-link relationship sidebar
│   ├── image-viewer.html           ← Image display component
│   ├── data-table.html             ← Structured data table
│   ├── citation-block.html         ← Bibliography / citation display
│   ├── domain-index-filter.html    ← Domain index filtering UI
│   └── search-widget.html          ← Search interface (future)
│
├── css/
│   ├── reset.css                   ← Normalization baseline
│   ├── tokens.css                  ← Design tokens (Stage 2 will populate this)
│   ├── layout.css                  ← Grid, max-width, spacing system
│   ├── typography.css              ← Type scale and text styles
│   ├── components.css              ← Component-level styles
│   ├── pages/
│   │   ├── object-page.css
│   │   ├── feature-page.css
│   │   ├── domain-index.css
│   │   └── home.css
│   └── print.css                   ← Print stylesheet (scientific use case)
│
├── js/
│   ├── lib/                        ← Third-party libraries (vendored)
│   │   └── pagefind/               ← Search index (future)
│   ├── components/
│   │   ├── domain-filter.js        ← Client-side filtering on index pages
│   │   ├── image-viewer.js         ← Image zoom / gallery
│   │   └── relationship-graph.js   ← Future: visual relationship map
│   └── utils/
│       └── entity-loader.js        ← Loads entity JSON for dynamic rendering
│
├── data/                           ← Structured data layer (source of truth)
│   ├── objects/
│   │   └── ro-song-lqn-001.json    ← One JSON file per entity
│   ├── features/
│   │   └── df-glaze-crackle-ice.json
│   ├── kilns/
│   │   └── kln-south-longquan.json
│   ├── periods/
│   │   └── dyn-song.json
│   ├── methodology/
│   │   └── mth-xrf.json
│   ├── publications/
│   │   └── pub-1998-wood-chinese-glazes.json
│   ├── materials/
│   │   └── mat-glaze-celadon-longquan.json
│   ├── vocabularies/               ← Controlled vocabulary lists
│   │   ├── vessel-forms.json
│   │   ├── ware-categories.json
│   │   ├── feature-categories.json
│   │   ├── kiln-regions.json
│   │   ├── dynasties.json
│   │   └── attribution-certainty.json
│   └── index/                      ← Pre-built index files for search and filtering
│       ├── objects-index.json
│       ├── features-index.json
│       ├── kilns-index.json
│       └── publications-index.json
│
├── assets/
│   ├── images/
│   │   ├── objects/
│   │   │   └── ro-song-lqn-001/
│   │   │       ├── ro-song-lqn-001-overall.jpg
│   │   │       ├── ro-song-lqn-001-foot-rim.jpg
│   │   │       ├── ro-song-lqn-001-glaze-detail.jpg
│   │   │       └── ro-song-lqn-001-cross-section.jpg
│   │   ├── features/
│   │   │   └── df-glaze-crackle-ice/
│   │   │       └── [reference images]
│   │   ├── kilns/
│   │   │   └── kln-south-longquan/
│   │   │       └── [site images, maps]
│   │   ├── methodology/
│   │   │   └── [technique diagrams]
│   │   └── ui/
│   │       └── [system icons, logos]
│   ├── maps/
│   │   └── [geographic data files — SVG or GeoJSON]
│   └── documents/
│       └── [downloadable PDFs, data exports]
│
├── build/                          ← Generated output (never edit manually)
│   └── [compiled site output]
│
├── docs/                           ← System documentation
│   ├── ARCHITECTURE.md             ← This document
│   ├── STYLE_GUIDE.md              ← Stage 2 output
│   ├── DATA_SCHEMA.md              ← Entity JSON schemas
│   ├── EDITORIAL_GUIDELINES.md     ← Scientific editorial standards
│   └── CONTRIBUTING.md             ← How new content is added
│
└── config/
    ├── site.json                   ← Global site configuration
    ├── navigation.json             ← Navigation structure definition
    └── redirects.json              ← URL redirect map (for future migrations)
```

---

---

# SECTION 6 — PAGE TYPES (TEMPLATES)

Seven page templates will be designed in Stage 2. They are defined here by function and content requirements only — no design decisions are made at this stage.

---

### Template 1: Scientific Article Page

**Purpose:** Long-form scholarly text on a topic that spans multiple entities (e.g., "The development of Longquan celadon glaze technology in the Southern Song period").

**Content structure:**
- Article title
- Author(s) + date
- Abstract (200 words)
- Body text (structured with academic headings)
- Figures and captions (inline)
- Data tables
- References (linked to Publication entities)
- Related entities panel (linked objects, features, kilns, periods discussed)

**Canonical path:** `/articles/{article-slug}/`

---

### Template 2: Reference Object Page

**Purpose:** The primary data record for a single ceramic object.

**Content structure:**
- Object identifier + canonical title
- Attribution certainty indicator
- Essential data table (dimensions, period, kiln, ware type, collection)
- Image viewer (multi-image: overall, foot rim, glaze, technical)
- Physical description (controlled vocabulary + free text)
- Analytical data section (methods used, results, data tables)
- Diagnostic features exhibited (linked)
- Attribution discussion (brief scholarly commentary)
- Provenance record
- Bibliography (linked)
- Relationship panel (all linked entities)
- Breadcrumb

---

### Template 3: Diagnostic Feature Page

**Purpose:** Scientific documentation of a single identifiable feature.

**Content structure:**
- Feature identifier + name
- Feature category
- Scientific definition
- Reference image set (with captions)
- Diagnostic significance (what attribution value does this feature carry)
- Variability notes (how does this feature vary across kilns/periods)
- Identification methodology (linked)
- Period distribution (visual timeline — future)
- Kiln associations (linked)
- Reference objects exhibiting this feature (linked, with thumbnails)
- Bibliography
- Relationship panel

---

### Template 4: Methodology Page

**Purpose:** Technical reference page for an analytical or examination technique.

**Content structure:**
- Method identifier + full name + abbreviation
- Method category
- Operating principle
- Information yielded
- Limitations and constraints
- Destructive / non-destructive classification
- Instrumentation
- Standard procedures (brief, referenced to literature)
- Objects in the atlas analyzed by this method (linked)
- Key publications (linked)
- Relationship panel

---

### Template 5: Publication Page

**Purpose:** Structured bibliographic record.

**Content structure:**
- Publication identifier
- Full citation (standard academic format)
- Author(s) (linked to Author Profile)
- Abstract or scope note (if available)
- Subject tags
- Entities documented in this publication (linked: objects, kilns, features)
- DOI / stable link
- Note on availability

---

### Template 6: Dynasty / Period Page

**Purpose:** Chronological index and contextual framing.

**Content structure:**
- Dynasty name + date range
- Brief ceramic-historical characterization (factual, 150–200 words)
- Active kilns during period (linked, with activity status)
- Characteristic diagnostic features of period (linked)
- Reference objects in the atlas from this period (filterable list)
- Chronological position (relative timeline — future visual)
- Key publications on period (linked)
- Relationship panel

---

### Template 7: Kiln Page

**Purpose:** Documentation of a ceramic production site as a knowledge entity.

**Content structure:**
- Kiln identifier + name
- Geographic location (map — future)
- Active periods (linked to Dynasty pages)
- Production summary (ware types, output character)
- Excavation status + archaeological record
- Characteristic diagnostic features (linked)
- Reference objects attributed to this kiln (linked, with attribution certainty shown)
- Bibliography
- Relationship panel

---

### Template 8: Author Profile Page

**Purpose:** Record of a scholar whose publications are cited in the system.

**Content structure:**
- Author identifier + name
- Institutional affiliation (if known)
- Research specialization
- Publications in the atlas (linked)
- Objects or entities they are the primary source for (linked)

---

### Template 9: Domain Index Page

**Purpose:** Navigation infrastructure — not a content page.

**Content structure:**
- Domain title
- Filter / facet controls (period, region, category, etc.)
- Entity list (identifier, title, key relationship summary, thumbnail if applicable)
- Entity count
- Sorting options

---

### Template 10: System Home Page

**Purpose:** Entry point to the atlas. Orientation and navigation.

**Content structure:**
- Atlas title and brief statement of scope
- Entry points to all seven domains (with entity counts)
- Search entry point (future)
- Recent additions or editorial notes (optional)

---

---

# SECTION 7 — SCALABILITY STRATEGY (300+ PAGES)

## 7.1 How the System Scales Without Redesign

**The entity model is the system.** Each new page is a new instance of an existing entity type. No new templates, navigation structures, or URL patterns need to be invented. Adding 50 more Reference Object pages requires only: creating the data file, creating the HTML file from the existing template, adding the images, and updating the objects index. Nothing else changes.

The folder structure is already organized to accommodate the full projected scope. Adding a new dynasty sub-period, a new kiln, or a new methodology technique requires creating a sub-folder within an already-defined path.

Domain index pages are generated from index JSON files, not maintained manually. Adding a new entity automatically appears in its domain index at the next build.

---

## 7.2 How Consistency Is Preserved

**Consistency is enforced structurally, not editorially.**

- All content of the same entity type shares one template
- All shared fields use controlled vocabulary (enforced by the data schema)
- All images follow the same naming convention and folder structure
- All cross-links are defined in the data layer, not in HTML
- Style is defined once in `tokens.css` — all components inherit from it

A scientific article published in 2031 will look and behave identically to one published in 2026, because both are instances of the same template with the same token system.

---

## 7.3 How Duplication Is Avoided

**The data layer is the single source of truth.**

If Longquan Kiln's date range changes based on new excavation data, that change is made in one place: `kln-south-longquan.json`. Every page that references Longquan draws from that file. Nothing is duplicated in HTML.

Controlled vocabulary lists (`/data/vocabularies/`) prevent synonym duplication (e.g., "Jingdezhen" vs. "Ching-te-Chen" vs. "Jingde Zhen" — only one form exists in the system).

---

## 7.4 How New Knowledge Is Added Safely

**Adding a new Reference Object:**
1. Create `data/objects/ro-[id].json` following the schema
2. Add images to `assets/images/objects/ro-[id]/`
3. Create `pages/objects/[dynasty]/[kiln]/ro-[id]/index.html` from template
4. Update `data/index/objects-index.json`
5. Add cross-references to linked Feature, Kiln, and Period data files
6. Validate: confirm no orphan links, confirm controlled vocabulary compliance

**Adding a new Diagnostic Feature:**
Same five-step pattern, different entity type.

**Adding a new methodology:**
Same pattern. No new template needed.

**Adding a new dynasty sub-period:**
Create the period JSON, create the sub-folder and page, link from the parent dynasty page. No structural change required.

---

## 7.5 How Structure Remains Stable Over Time

**Three stability mechanisms:**

**Mechanism 1 — URL permanence.**  
URLs are defined by entity type and identifier, not by editorial categories that might be revised. If the scholarly consensus on a kiln's regional classification changes, the URL does not change. A redirect is added to `config/redirects.json` if a URL must change for any reason.

**Mechanism 2 — Schema versioning.**  
Entity JSON schemas are versioned. When a new field is added to the Reference Object schema (e.g., a new analytical data category), the schema version increments and a migration note is added to `docs/DATA_SCHEMA.md`. Existing records remain valid under the previous schema version and are migrated on the next editorial pass.

**Mechanism 3 — Template isolation.**  
Page templates are separate from content. A template can be redesigned (Stage 2, Stage 3) without touching any content file. All content lives in the data layer and page bodies. Presentational decisions are entirely in CSS and components.

---

## 7.6 Editorial Governance at Scale

As the system grows beyond 100 pages, the following must be in place:

- **Editorial checklist** for each entity type (defined in `docs/EDITORIAL_GUIDELINES.md`)
- **Data validation script** — run before each publication batch to check: broken links, missing required fields, vocabulary compliance, orphan pages
- **Entity log** — a master register of all entities with status: `draft`, `review`, `published`
- **Change log** — `docs/CHANGELOG.md` records every significant revision to existing pages, especially attribution changes on Reference Objects

---

---

# APPENDIX A — ENTITY IDENTIFIER REFERENCE

| Entity Type        | Prefix | Format                              | Example                        |
|--------------------|--------|-------------------------------------|--------------------------------|
| Reference Object   | RO     | RO-{DYN}-{KLN}-{SEQ}               | RO-SONG-LQN-001                |
| Diagnostic Feature | DF     | DF-{CAT}-{SLUG}                     | DF-GLAZE-CRACKLE-ICE           |
| Kiln               | KLN    | KLN-{REGION}-{SLUG}                 | KLN-SOUTH-LONGQUAN             |
| Dynasty / Period   | DYN    | DYN-{SLUG}                          | DYN-SONG-SOUTHERN              |
| Material / Body    | MAT    | MAT-{TYPE}-{SLUG}                   | MAT-GLAZE-CELADON-LQN          |
| Publication        | PUB    | PUB-{YEAR}-{AUTHOR}-{SHORT}         | PUB-1998-WOOD-CHINESE-GLAZES   |
| Methodology        | MTH    | MTH-{SLUG}                          | MTH-XRF                        |
| Author             | AUT    | AUT-{SURNAME}-{INITIAL}             | AUT-WOOD-N                     |

---

# APPENDIX B — ATTRIBUTION CERTAINTY LEVELS

All kiln attributions on Reference Object pages must display one of four certainty levels. These are part of the controlled vocabulary and must never appear as free text.

| Level     | Definition                                                                 |
|-----------|----------------------------------------------------------------------------|
| confirmed | Attribution established by analytical data and/or excavation evidence      |
| probable  | Attribution supported by strong typological and/or visual evidence         |
| proposed  | Attribution argued in published scholarship but not yet widely accepted     |
| disputed  | Multiple competing attributions in the literature; no consensus            |

---

# APPENDIX C — STAGE ROADMAP

| Stage | Scope                                             | Status     |
|-------|---------------------------------------------------|------------|
| 1     | Information Architecture (this document)          | COMPLETE   |
| 2     | Design System (tokens, typography, components)    | NEXT       |
| 3     | Template Development (HTML/CSS per page type)     | PENDING    |
| 4     | Data Layer (JSON schemas, first 10 entities)      | PENDING    |
| 5     | First Publication Batch (25 pages)                | PENDING    |
| 6     | Search Implementation                             | PENDING    |
| 7     | Ongoing Editorial Expansion                       | RECURRING  |

---

*End of Stage 1 Architecture Specification*  
*This document is the locked foundation. All subsequent stages depend on the structures defined here.*  
*Revisions to this document require explicit versioning and change log entry.*
