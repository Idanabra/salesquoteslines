# SAP Horizon Design System

A recreation of the **SAP Horizon** visual language as used by **SAP Sales & Service Cloud V2 (SSC V2)** and other modern SAP Fiori apps. It exists so design agents can build custom frontends, mashups, and marketing assets that look and behave *indistinguishably* from the standard SAP interface — the exact goal of the source article this project is based on.

## Context & sources

This system was reverse-engineered from public, authoritative SAP material. The reader is **not** assumed to have access; links are recorded in case they do.

- **Inspiration / brief:** "Styling your Custom Frontend like SAP Sales and Service Cloud V2" — SAP Community blog by Jens Limbach. https://community.sap.com/t5/crm-and-cx-blog-posts-by-sap/styling-your-custom-frontend-like-sap-sales-and-service-cloud-v2/ba-p/14305503
- **Design tokens (ground truth):** `@sap-theming/theming-base-content`, theme `sap_horizon` — `content/Base/baseLib/sap_horizon/css_variables.css`. https://github.com/SAP/theming-base-content — every `--sap*` token, the "72" webfonts, and the SAP-icons font come from here (Apache-2.0).
- **Reference product frontend:** `jens-limbach/SSv2-custom-frontend-ai` — an Angular "Sample Management" custom object embedded in SSC V2. https://github.com/jens-limbach/SSv2-custom-frontend-ai — the UI kit in this system recreates its list-view workcenter.
- **SAP Fiori Horizon guidelines** (broader design language): https://experience.sap.com/fiori-design-web/

The design language is **SAP Horizon (Morning Horizon, light scheme)** — the current SAP Fiori theme. This is a faithful token/component recreation, not an official SAP package.

## What's inside (index / manifest)

Root:
- `styles.css` — **the one file consumers link.** `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`.
- `assets/fonts/` — the "72" family (Light/Regular/Semibold/Bold + SemiboldDuplex), 72Mono, and the SAP-icons glyph font.
- `components/` — reusable React primitives (below).
- `ui_kits/sample-management/` — the SSC V2 Sample Management workcenter recreation.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper.

### Components
Grouped under `components/`:
- **foundation/** — `Icon` (703-glyph SAP-icons font, by name)
- **forms/** — `Button`, `Input`, `Select`, `Checkbox`, `Switch`
- **data/** — `Card`, `ObjectStatus`, `Badge`, `Token`, `Avatar`
- **feedback/** — `MessageStrip`, `Dialog`
- **navigation/** — `ShellBar`

Each is `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, styled entirely through the `--sap*` CSS custom properties, importing only React. Mount them from `window.SAPHorizonDesignSystem_<hash>` after loading `_ds_bundle.js`.

### UI kits
- **Sample Management** (`ui_kits/sample-management/`) — an interactive recreation of the custom SSC V2 workcenter: ShellBar, side nav rail, KPI tiles, searchable/sortable sample table with `ObjectStatus`, a "Samples by account" dashboard, and a working Create Sample dialog.

---

## Content fundamentals

How SAP writes UI copy in this product surface:

- **Voice:** professional, neutral, enterprise. Second person ("you") in help text; imperative for actions ("Create Sample", "Configure Columns"). Never playful, never exclamatory.
- **Casing:** **Title Case for buttons and actions** ("Create Sample", "Show All", "Clear All Filters") and for column headers ("Sample Name", "Due Date"). **Sentence case for descriptions, messages, and labels** ("2 samples are approaching their due date").
- **Field labels:** short nouns, Title Case or sentence case, no trailing colon in Horizon ("Sample Name", "Due Date", "Ship To").
- **Empty / status text:** terse — "No samples found", "Loading samples…", "N/A" for missing values.
- **Statuses:** single words or short phrases — "Open", "In Progress", "Delivered", "Overdue".
- **Numbers & money:** value then unit/currency code — "240 EUR", "5 EA". Dates ISO-like "2026-08-12".
- **Tone examples (real):** "Sample created successfully.", "Failed to update: {reason}", "Are you sure you want to delete \"{name}\"?".
- **Emoji:** never. **Icons** (SAP-icons) carry all iconographic meaning.
- **No marketing fluff** inside the product; concise and task-focused.

## Visual foundations

- **Color:** built on SAP blue `--sapBrandColor #0070f2` (emphasized actions) and its darker interactive shade `#0064d9` (links, hover, selection). Neutral, near-monochrome canvas: page `#f5f6f7`, shell `#eff1f2`, cards pure white, ink `#131e29`, muted label `#556b82`. Semantics are used sparingly and always in pairs (foreground + tinted background): negative `#aa0808`/`#ffeaf4`, critical `#e76500`/`#fff8d6`, positive `#256f3a`/`#f5fae5`, informative `#0070f2`/`#e1f4ff`, neutral `#788fa6`/`#eff1f2`. A distinct purple gradient (`#5d36ff → #a100c2`) is reserved **only** for the Joule AI assistant. Max 1–2 background colors per screen.
- **Type:** the proprietary **"72"** typeface everywhere (Light 300 / Regular 400 / Semibold 600 / Bold 700). Body is 14px/1.5. Headers use 72 Bold: H1 48, H2 32, H3 24, H4 20, H5/H6 16/14. Buttons use *72-SemiboldDuplex* so labels don't shift width between states. Monospace is **72Mono** for IDs, code, amounts.
- **Spacing:** rem-based 8 / 16 / 32 / 48 scale (`--sapContent_Space_*`). Controls are 36px cozy or 26px compact. Consistent 1rem gutters; content max-width ~1600px, centered.
- **Backgrounds:** flat color only — **no** gradients (except the AI accent), no photographic hero images, no textures, no patterns inside the product. Marketing surfaces may use the hero-banner blue. Cards float on the grey page.
- **Corner radii:** deliberately tiered — fields **4px**, tokens **6px**, buttons **8px**, cards/tiles **12px**. This tiering is a signature Horizon trait; keep it.
- **Cards:** white fill, 12px radius, **no border**, resting shadow `--sapContent_Shadow0` (a soft double cool-grey shadow). Header = 72 Bold title + optional muted subtitle + right-aligned action.
- **Shadows / elevation:** always cool grey `rgba(34,53,72,…)`, never pure black. Four levels: Shadow0 (rest/cards) → Shadow1 (raised) → Shadow2 (dialogs) → Shadow3 (popovers). Modal scrim is `rgba(34,53,72,.6)`.
- **Borders:** hairline `.0625rem` (1px). Field borders `#556b81`; on hover/focus they turn interactive blue `#0064d9`. List row separators `#e5e5e5`.
- **Hover states:** neutral controls lighten to `#eaecee`; emphasized blue darkens to `#0064d9`; links underline. **Press/active:** neutral controls go to `#dee2e5`; emphasized buttons invert to white with a blue border. No scaling/bounce.
- **Focus:** a solid `#0032a5` ring, 2px — visible and high-contrast (accessibility is core to Fiori).
- **Animation:** minimal and functional. Short (~.1–.15s) ease transitions on background-color and toggle handles; **no** decorative motion, parallax, or bounce.
- **Transparency & blur:** essentially none in-product beyond the modal scrim. Surfaces are opaque.
- **Imagery vibe:** the product is UI-chrome, not imagery-led. Where illustration appears it is SAP's flat, cool-toned "Illustrative" palette (blues, teal, coral accents). Charts use the qualitative Category palette (`#0057d2`, `#df1278`, `#e76500`, `#07838f`, `#188918`, `#7800a4`).

## Iconography

- **Primary system:** the **SAP-icons** icon font (703 glyphs) shipped from `@sap-theming/theming-base-content`. Copied to `assets/fonts/SAP-icons.woff2` and declared via `@font-face` in `tokens/fonts.css`. Rendered by name through the `Icon` component (`<Icon name="add" />`) using the bundled name→codepoint map extracted from SAP-icons.json. This is SAP's own set — no substitution needed.
- **Style:** monoline, ~16px default, single-color following `currentColor`. Icons inherit semantic text colors for status.
- **Common names:** `add`, `decline`, `accept`, `search`, `filter`, `sort` / `sort-ascending` / `sort-descending`, `edit`, `delete`, `overflow`, `menu2`, `navigation-down-arrow`, `slim-arrow-down`, `account`, `product`, `customer`, `bell`, `grid`, `sys-help`, `alert`, `information`, `error`, `sys-enter-2`.
- **TNT / Business-Suite icon fonts** also exist in SAP; only the core SAP-icons set is bundled here. Add the others from `theming-base-content` if a design needs them.
- **Emoji:** never used. **Unicode symbols** are not used as icons — always the icon font.
- **Logo:** SAP's wordmark/logo is a **trademark and is intentionally not included or recreated.** Render the product name in 72 Bold where a mark would go (as the ShellBar and thumbnail do). Supply the official logo asset if a licensed context requires it.

## Caveats / substitutions

- The **"72" font** files are the genuine Apache-2.0 SAP webfonts from `theming-base-content` (subset woff2). Only the four core upright weights + SemiboldDuplex + 72Mono are bundled; italics, condensed, and "full" unicode-range variants were omitted for size.
- Components are **cosmetic recreations** of SAP Fiori behavior, not the official UI5 / `@ui5/webcomponents` implementations — pixel-faithful, not production-complete.
- No SAP **logo** is included (trademark). See Iconography.

## Namespace
Consuming HTML reads components from `window.SAPHorizonDesignSystem_<hash>` after loading `_ds_bundle.js`. Run the design-system check to confirm the current hash.
