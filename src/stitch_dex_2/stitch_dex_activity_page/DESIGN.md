# Design System Strategy: The Midnight Monolith

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Midnight Monolith."** 

In the chaotic landscape of decentralized finance, this system acts as a singular, high-contrast point of focus. It rejects the cluttered "dashboard" aesthetic in favor of a high-end editorial experience. By utilizing a pure black foundation and center-aligned layouts, we create a "theatrical" stage for financial transactions. We break the standard grid through intentional verticality and dramatic scale shifts in typography, ensuring the user's eye is never distracted by peripheral noise. This is not a tool; it is a premium instrument.

## 2. Colors: High-Contrast Void
The palette is built on a foundation of absolute darkness, allowing the vibrant primary accents to "vibrate" against the background.

*   **Primary Action Yellow:** `#FFD217` (implemented via `primary-container`). This is our "Signal" color. It is reserved exclusively for the most critical user actions.
*   **The "No-Line" Rule:** Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background shifts. To separate a swap module from the background, move from `surface` (`#0e0e0e`) to `surface-container-low` (`#131313`).
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. 
    *   **Level 0 (Background):** `surface` (`#0e0e0e`).
    *   **Level 1 (Sections):** `surface-container-low` (`#131313`).
    *   **Level 2 (Cards/Modals):** `surface-container-high` (`#1f1f1f`).
*   **The Glass & Gradient Rule:** For floating elements or "active" states, use Glassmorphism. Apply a 20px `backdrop-blur` with a semi-transparent `surface-variant` (`#262626` at 60% opacity). Main CTAs should utilize a subtle linear gradient from `primary` to `primary-dim` to provide a "machined" metallic finish.

## 3. Typography: Editorial Precision
We use **Inter** not as a generic sans-serif, but as a Swiss-style precision tool.

*   **Display & Headline:** Use `display-lg` (3.5rem) for primary asset balances. The high contrast between the pure white text (`on-background`) and the black void creates an authoritative presence.
*   **Information Density:** Use `label-md` and `label-sm` for secondary metadata (TX hashes, slippage). Increase letter-spacing (tracking) by 5% for these labels to maintain legibility against the dark background.
*   **Hierarchy:** The brand identity is conveyed through the dramatic jump between `display-sm` for headers and `body-md` for content. This "Large-and-Small" approach mimics high-end fashion typography, stripping away the "middle-ground" sizes that make apps look cluttered.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are largely invisible on a `#000000` background. Therefore, depth is communicated through light, not shadow.

*   **The Layering Principle:** Instead of a drop shadow, a "lifted" element is indicated by its brightness. A card sitting on the `surface` must be `surface-container-highest` to feel elevated.
*   **Ambient Glow:** When a floating effect is required (like a dropdown), use a "Shadow Glow." Instead of a black shadow, use a 40px blur of the `surface-tint` at 4% opacity. This creates a subtle "halo" that suggests the element is emitting light.
*   **The "Ghost Border" Fallback:** In high-density data views where containment is legally or functionally required, use a Ghost Border. This is the `outline-variant` token at 15% opacity. It should be barely perceptible, felt rather than seen.

## 5. Components: The Pill & The Plate

### Buttons
*   **Primary:** Pill-shaped (`rounded-full`). Background: `primary-container` (`#FFD217`). Text: `on-primary-container`. No border.
*   **Secondary:** Pill-shaped. Background: `surface-container-highest`. Text: `on-surface`.
*   **Tertiary:** Text-only using `primary` color tokens, with a pill-shaped `outline-variant` Ghost Border on hover.

### Input Fields
*   **The Swap Plate:** Text inputs should not look like boxes. They are "Plates"—flat `surface-container-low` areas with no borders. Upon focus, the bottom edge transitions to a 2px `primary` underline, or the entire plate subtlely shifts to `surface-container-high`.

### Cards & Lists
*   **Anti-Divider Rule:** Forbid 1px horizontal lines between list items. Instead, use `1.5rem` (Spacing `md`) of vertical white space or a subtle alternating shift between `surface-container-low` and `surface-container-lowest`. 
*   **Interactive State:** On hover, a list item or card should transition its background color slightly and scale by 1.01% to simulate "physical" tactility.

### Context-Specific: The Swap Module
*   **The Monolith:** The central swap component should be the brightest object on the screen, utilizing `surface-container-highest` with a `lg` (2rem) corner radius for the outer container, while internal "plates" (token inputs) use `full` (pill) rounding to maintain the signature language.

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace the void. Use generous margins to let the center-aligned content breathe.
*   **Do** use `primary` sparingly. If everything is yellow, nothing is important.
*   **Do** use `surface-bright` for hover states on dark components to create a "backlit" effect.

### Don't:
*   **Don't** use pure grey. Use the specific `surface-container` tiers to ensure the tonal warmth remains consistent.
*   **Don't** use sidebars. If navigation is needed, use a floating pill-shaped header or a bottom-docked "dock" style menu.
*   **Don't** use standard "Success" green unless absolutely necessary. Use white or the primary yellow to maintain the sophisticated, restricted palette.