---
name: Tvarita
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#44474d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7e'
  primary: '#031632'
  on-primary: '#ffffff'
  primary-container: '#1a2b48'
  on-primary-container: '#8293b5'
  inverse-primary: '#b6c7eb'
  secondary: '#9d422b'
  on-secondary: '#ffffff'
  secondary-container: '#fd8c6f'
  on-secondary-container: '#74240f'
  tertiary: '#261200'
  on-tertiary: '#ffffff'
  tertiary-container: '#432400'
  on-tertiary-container: '#cc822f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7eb'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#ffdbd2'
  secondary-fixed-dim: '#ffb4a2'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#7e2b16'
  tertiary-fixed: '#ffdcbe'
  tertiary-fixed-dim: '#ffb871'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6a3c00'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 72px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: plusJakartaSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style
This design system centers on **Modern Cultural Discovery**, blending the prestige of a high-end digital museum with the agility of a premium startup. The aesthetic is **Modern Editorial**, characterized by a sophisticated interplay of classical motifs and contemporary digital execution. 

The UI should feel like a high-end physical publication brought to life—confident, curated, and expansive. It avoids the dry, institutional feel of traditional archives in favor of a vibrant, story-driven experience. The goal is to evoke a sense of "New Heritage"—respectful of the past but firmly designed for a modern, digitally native audience. 

Key visual principles include:
- **Asymmetric Balance:** Intentional placement of elements to create a dynamic, rhythmic flow.
- **Visual Storytelling:** Large-scale imagery and layered compositions that mimic a physical exhibition.
- **Digital Refinement:** Crisp lines, smooth transitions, and high-quality micro-interactions that signal a premium software experience.

## Colors
The palette is rooted in a warm, organic foundation. The **Warm Ivory (#F9F7F2)** serves as the "canvas," providing a softer, more premium feel than pure white, reminiscent of high-quality parchment or limestone.

- **Deep Indigo:** Used for primary branding, navigation, and core structural elements to provide a grounded, authoritative contrast.
- **Terracotta & Muted Saffron:** Earthy, vibrant accents used for calls to action, cultural highlights, and storytelling motifs.
- **Deep Green & Turmeric:** Secondary accents used for categorization, tags, and interactive states to maintain a diverse, globally-inspired spectrum.
- **Charcoal:** Exclusively for typography to ensure maximum legibility while maintaining a softer edge than true black.

## Typography
The typographic hierarchy relies on a high-contrast pairing:
- **EB Garamond** (Serif): Used for storytelling, headlines, and pull-quotes. It brings a literary, authoritative, and elegant voice to the platform.
- **Plus Jakarta Sans** (Sans-Serif): Used for UI, navigation, and body text. Its modern, slightly rounded geometry ensures the platform feels accessible and technologically sophisticated.

Large display sizes should use negative letter-spacing for a tighter, editorial look. Body text must maintain a generous line-height to ensure comfort during long-form reading of cultural narratives.

## Layout & Spacing
This design system utilizes a **Fluid-Fixed Hybrid Grid**. While the maximum container width is capped at 1440px, the spacing between elements is generous and often asymmetric to avoid a rigid "bootstrap" look.

- **Asymmetry:** Side-by-side content should rarely be perfectly centered. Use 5-column/7-column splits for content blocks to create visual interest.
- **Vertical Rhythm:** Use large vertical gaps (e.g., 120px–160px) between major sections to allow the "Warm Ivory" background to act as a visual breather.
- **Sticky Navigation:** The primary header is a transparent-to-frosted sticky bar that allows imagery to bleed behind it, reinforcing the immersive "museum" feel.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Subtle Overlaps** rather than heavy shadows.

- **The Layered Card:** Use a subtle "stacking" effect where images overlap slightly with text blocks or other images. This simulates physical layers of history or artifacts.
- **Soft Shadows:** If depth is required for interactive elements, use extremely diffused, low-opacity shadows tinted with the Deep Indigo (e.g., `rgba(26, 43, 72, 0.08)`).
- **Glassmorphism:** Use background blurs (`backdrop-filter: blur(12px)`) for sticky headers and modal overlays to maintain a sense of space and context.

## Shapes
The shape language is **Soft (0.25rem)**. This subtle rounding removes the clinical sharpness of modern tech but avoids the "bubbly" look of consumer social apps.

- **Images:** Maintain sharp or very slightly rounded corners (4px) to respect the integrity of photography.
- **Interactive Elements:** Buttons and tags use a slightly more pronounced rounding (8px) to denote "tap-ability."
- **Organic Accents:** Occasionally use circular "stamp" or "seal" motifs for badges or secondary calls to action to nod toward cultural artifacts.

## Components

### Navigation
- **Sticky Transparent Bar:** Resides at the top with a `blur` effect on scroll. Links are in `label-caps`. The logo uses the primary Deep Indigo.

### Image Cards
- **The "Story" Card:** An image container with an overlapping text box. The text box should be offset (e.g., -24px bottom/left) to break the grid.
- **Interaction:** On hover, images should subtly scale (1.02x) within their frame.

### Interactive Tags
- **Muted Saffron & Turmeric Pills:** Used for cultural categories (e.g., "Art", "Ritual", "History").
- **Styling:** Small `label-caps` text with a 1px solid border or a very pale background fill of the same hue.

### Buttons
- **Primary:** Solid Deep Indigo with Ivory text.
- **Secondary:** Transparent with a 1.5px Charcoal border.
- **Tertiary:** Text-only with a simple 1px underline that expands on hover.

### Form Fields
- **Admin & Suggestion Inputs:** Minimalist style. No background fill; 1px Charcoal bottom border only. On focus, the border transitions to Terracotta. Labels use `label-caps` positioned above the input.

### Lists
- **Discovery Lists:** Use large-format list items with high-resolution thumbnails and a "Read More" serif link that appears on hover.