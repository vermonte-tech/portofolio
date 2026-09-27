# Vermonte Portfolio — Component Guide & HTML/CSS Architecture

This guide provides the blueprint for creating pure HTML/CSS/JavaScript components matching the Vermonte design.

---

## 1. Directory Structure

```
Portfolio/
├── assets/
│   └── images/            # Project artwork, vector icons, logo assets
├── css/
│   └── style.css          # Main stylesheet with CSS custom properties & components
├── js/
│   └── script.js         # Interactive behavior (filters, smooth scroll, form validation)
├── documentation/         # Complete project specs and design system guides
│   ├── DESIGN_SYSTEM.md
│   ├── SECTION_ANALYSIS.md
│   └── COMPONENT_GUIDE.md
├── index.html             # Primary entry point
├── home.html              # Alternative/backup home template
└── README.md              # Project setup, overview, and quickstart
```

---

## 2. Reusable Component Blueprint

### A. Navigation Bar (`.navbar`)
```html
<header class="navbar-wrapper">
  <nav class="navbar-pill">
    <a href="#hero" class="brand-logo">VERMONTE</a>
    <ul class="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="#contact" class="btn btn-teal btn-sm">
      Get in touch <span class="arrow">↗</span>
    </a>
  </nav>
</header>
```

### B. Buttons (`.btn`)
- **Primary Teal**: `.btn.btn-teal` — Teal background, white text, dark border, hard shadow.
- **Secondary White**: `.btn.btn-white` — White background, dark text, dark border, hard shadow.
- **Outlined Pill**: `.btn.btn-outline` — Transparent/light background, dark border, hover fill.
- **Icon Round**: `.btn-icon-round` — Circular button with arrow icon.

```html
<!-- Primary Button -->
<a href="#portfolio" class="btn btn-teal">
  See our work <span class="arrow">↗</span>
</a>

<!-- Secondary Button -->
<a href="#contact" class="btn btn-white">
  Start a project <span class="arrow">↗</span>
</a>
```

### C. Neo-Brutalist Card (`.card`)
```html
<div class="service-card">
  <div class="card-icon">✦</div>
  <h3 class="card-title">Brand Sprint</h3>
  <ul class="card-feature-list">
    <li>Positioning workshop</li>
    <li>Visual direction</li>
    <li>Launch-ready toolkit</li>
  </ul>
  <a href="#contact" class="btn btn-outline btn-sm">View tier</a>
</div>
```

### D. Project Showcase Card (`.project-card`)
```html
<article class="project-card" data-category="branding">
  <div class="project-media-banner">
    <div class="geo-circle"></div>
    <span class="banner-badge">BOLD / BRIGHT</span>
  </div>
  <div class="project-content">
    <span class="badge-category">BRAND IDENTITY</span>
    <h3 class="project-title">Aurora Arts Festival</h3>
    <p class="project-desc">A revitalized identity and digital experience.</p>
    <div class="project-footer">
      <div class="tag-group">
        <span class="tag-pill">Strategy</span>
        <span class="tag-pill">Webflow</span>
        <span class="tag-pill">Motion</span>
      </div>
      <a href="#project-detail" class="btn-icon-round" aria-label="View Aurora Arts Festival">↗</a>
    </div>
  </div>
</article>
```

### E. Interactive Filter Tabs (`.filter-tabs`)
```html
<div class="filter-group" role="tablist">
  <button class="filter-btn active" data-filter="all">All work</button>
  <button class="filter-btn" data-filter="branding">Branding</button>
  <button class="filter-btn" data-filter="digital">Digital</button>
  <button class="filter-btn" data-filter="development">Development</button>
</div>
```

### F. Inquiry Form Card (`.cta-card`)
```html
<div class="cta-card">
  <div class="cta-left">
    <h2 class="cta-heading">Let's make something magnetic.</h2>
    <p class="cta-subtext">Tell us what you are building. We will reply within two working days.</p>
  </div>
  <form class="cta-form" id="inquiryForm">
    <div class="form-group">
      <label for="email">Your email</label>
      <input type="email" id="email" placeholder="you@company.com" required>
    </div>
    <div class="form-group">
      <label for="project-type">Project type</label>
      <select id="project-type" required>
        <option value="" disabled selected>Choose a service</option>
        <option value="brand">Brand Sprint</option>
        <option value="digital">Digital Experiences</option>
        <option value="partnership">Creative Partnership</option>
      </select>
    </div>
    <button type="submit" class="btn btn-teal">
      Send inquiry <span class="arrow">↗</span>
    </button>
  </form>
</div>
```

---

## 3. Pure Frontend Setup (No Backend)
Since the project is completely client-side:
- **Form Handling**: Client-side JavaScript intercepts submission (`preventDefault()`) to show feedback toast / modal or integrates seamlessly with services like Formspree or EmailJS if desired later.
- **Filtering**: Lightweight vanilla JS event listeners toggle visibility of `.project-card` based on `data-category`.
- **Assets**: Pure SVG & CSS-based vector shapes and high-resolution web-optimized images.
