# Vermonte Portfolio — Minimalist Black & White Design System

A refined, high-contrast, editorial corporate design system engineered for a professional, clean, and modern creative technology studio.

---

## 1. Color Palette & Tokens (Monochrome / High Contrast)

| Token Name | Hex / Value | Purpose / Application |
| :--- | :--- | :--- |
| `--bg-primary` | `#FFFFFF` | Main canvas background, light cards, primary contrast surface |
| `--bg-secondary` | `#FAFAFA` | Subtle section backdrops, service cards, preview cards |
| `--bg-tertiary` | `#F4F4F5` | Badges, tags, icon backdrop containers |
| `--bg-dark` | `#09090B` | Deep matte black for CTA section, footer, dark containers |
| `--bg-dark-surface` | `#121215` | Elevated dark card container in contact section |
| `--text-primary` | `#09090B` | Primary headings, titles, high-contrast body text |
| `--text-secondary` | `#52525B` | Subheadings, descriptive copy, nav links |
| `--text-muted` | `#71717A` | Subtle metadata, category badges, tags |
| `--text-white` | `#FFFFFF` | Text on dark backgrounds, primary button text |
| `--border-subtle` | `#E4E4E7` | Standard 1px clean border for cards, inputs, navbar |
| `--border-medium` | `#D4D4D8` | Hover border state, secondary buttons |
| `--border-dark` | `#27272A` | Borders in dark sections & dark cards |
| `--accent-black` | `#000000` | Primary interactive buttons, brand dot indicator |

---

## 2. Typography Hierarchy

### Font Families
- **Display & Interface**: **`Plus Jakarta Sans`** (weights `300` to `800`) — Ultra-refined, modern geometric grotesk with tight tracking for clean corporate authority.
- **Accents / Monospace**: **`Space Grotesk`** — Clean technical and geometric accents.

### Scales & Typographic Rules

| Element | Size | Weight | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `3.8rem` (60px) | `800` Extrabold | `-0.04em` | `1.08` |
| **Section Title (H2)** | `2.75rem` (44px) | `800` Extrabold | `-0.035em` | `1.10` |
| **Card Title (H3)** | `1.35rem - 1.6rem` (22–26px) | `700` Bold | `-0.025em` | `1.25` |
| **Lead / Intro Copy** | `1.1rem` (17.5px) | `400` Regular | `Normal` | `1.65` |
| **Eyebrow / Badge** | `0.75rem` (12px) | `700` Bold | `+0.12em` | `1.0` |
| **Buttons** | `0.9rem` (14.5px) | `600` SemiBold | `-0.01em` | `1.0` |

---

## 3. UI Component Architecture

### A. Floating Glassmorphism Navbar (`.navbar-pill`)
- Background: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(16px)`
- Border: `1px solid var(--border-subtle)`
- Elevation: `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- Brand logo with solid black accent mark.

### B. Button System
- **Primary (`.btn-primary`)**: Solid black `#000000` with white text, micro-lift on hover (`translateY(-1px)`).
- **Secondary (`.btn-secondary`)**: Clean outline with `#D4D4D8` border, subtle gray background on hover.
- **Micro-arrow (`.arrow`)**: Smooth diagonal translation on hover (`transform: translate(2px, -2px)`).

### C. Cards & Grid System
- Subtle hairline borders (`1px solid #E4E4E7`) with soft, diffuse modern shadows (`box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.06)` on hover).
- Generous internal padding (`2.5rem`) for luxury breathing room.

---

## 4. Layout & Responsive Breakpoints
- Max Container Width: `1180px`
- Desktop: 2-column Hero, 3-column Services, 2-column Portfolio, 4-column Footer.
- Tablet / Mobile: Responsive single-column reflow with mobile menu toggle.
