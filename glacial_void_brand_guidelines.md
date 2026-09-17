# Glacial Void — Personal Brand Color System
**Owner:** Your Name · AI Engineer · Founder  
**Version:** 1.0  
**Last updated:** 2026

---

## Overview

Glacial Void is a dark, minimal, precision-coded color system built for a personal brand operating at the intersection of AI engineering, founding, and service delivery. It is designed to communicate **depth, trust, and controlled intelligence** across all digital surfaces — social media, portfolio, YouTube, pitch decks, and client-facing materials.

**Core philosophy:** Two actual colors. Everything else is neutrals and hierarchy. Less is the strategy.

---

## 1. Primary — The Gradient

The gradient is your identity. It appears on every hero surface, post background, banner, and primary visual.

### Glacial Void Gradient

```
Type:      Linear gradient
Direction: 135deg (diagonal) — default
From:      #070B0F  →  Near-void black
Mid-1:     #071828  →  Deep navy shadow
Mid-2:     #044470  →  Compressed glacial blue
To:        #035888  →  Arctic ice depth
```

### CSS
```css
/* Standard — banners, post backgrounds, hero sections */
background: linear-gradient(135deg, #070B0F 0%, #071828 35%, #044470 72%, #035888 100%);

/* Vertical — cards, carousels, story formats */
background: linear-gradient(180deg, #070B0F 0%, #071828 50%, #044470 100%);

/* Horizontal — LinkedIn banner, YouTube channel art */
background: linear-gradient(90deg, #070B0F 0%, #071828 40%, #044470 100%);

/* Radial — profile picture frame, avatar backgrounds */
background: radial-gradient(ellipse at 80% 90%, #035888 0%, #071828 50%, #070B0F 100%);
```

### Glow Overlay (optional)
Add this on top of the gradient for depth and the signature "abyss glow" effect:
```css
/* Bottom-right glow — standard placement */
background: radial-gradient(circle, rgba(10,158,212,0.20) 0%, rgba(6,100,160,0.08) 45%, transparent 70%);
position: absolute;
bottom: -60px; right: -60px;
width: 340px; height: 340px;
border-radius: 50%;
```

### Ice Texture (optional)
Subtle diagonal lines that add tactile depth at low opacity:
```css
background: repeating-linear-gradient(
  108deg,
  transparent,
  transparent 55px,
  rgba(180, 230, 255, 0.025) 56px
);
opacity: 0.03;
```

### Usage Rules
- Use on **every** post background, banner, and hero surface
- Always use with the glow overlay on content-heavy pieces
- Never place the gradient on small elements (badges, pills, buttons)
- On YouTube thumbnails: use 135deg or 180deg variant

---

## 2. Neutral Surfaces

Three structured dark surfaces for layering depth. These are not colors — they are the architecture everything sits on.

| Name          | Hex       | RGB                | Use |
|---------------|-----------|---------------------|-----|
| Void base     | `#0D1117` | rgb(13, 17, 23)    | Page background, outermost container |
| Deep panel    | `#111820` | rgb(17, 24, 32)    | Cards, post containers, content panels |
| Lifted surface| `#162030` | rgb(22, 32, 48)    | Hover states, inner cards, elevated elements |

### CSS
```css
--surface-base:    #0D1117;
--surface-panel:   #111820;
--surface-lifted:  #162030;
```

### Usage Rules
- Stack surfaces: base → panel → lifted (never skip a level)
- Never use pure black (#000000) — Void base is your true dark
- Borders between surfaces: `rgba(10, 158, 212, 0.14)` — the glacial border token

---

## 3. Text Hierarchy

Three levels of text. Controls all visual hierarchy without introducing color.

| Name    | Value                        | Use |
|---------|------------------------------|-----|
| Bright  | `#D8EEFF`                   | Headlines, names, key statements |
| Muted   | `rgba(180, 220, 255, 0.55)` | Body copy, descriptions, supporting text |
| Ghost   | `rgba(180, 220, 255, 0.25)` | Timestamps, labels, metadata |

### CSS
```css
--text-bright:  #D8EEFF;
--text-muted:   rgba(180, 220, 255, 0.55);
--text-ghost:   rgba(180, 220, 255, 0.25);
```

### Usage Rules
- Headlines always use Bright — no exceptions
- Body copy always uses Muted — never Bright (too intense for reading)
- Never use pure white (#FFFFFF) — too harsh against the gradient
- Font weight: 500 for headlines, 400 for body

---

## 4. Accent Color

One accent. One job. Used at maximum 8% of any composition.

| Name           | Hex       | RGB                  |
|----------------|-----------|----------------------|
| Glacial pulse  | `#0A9ED4` | rgb(10, 158, 212)   |
| Glacial tint   | `rgba(10, 158, 212, 0.12)` | Pill/badge backgrounds |
| Glacial border | `rgba(10, 158, 212, 0.28)` | Card borders, dividers |

### CSS
```css
--accent:        #0A9ED4;
--accent-tint:   rgba(10, 158, 212, 0.12);
--accent-border: rgba(10, 158, 212, 0.28);
--accent-glow:   rgba(10, 158, 212, 0.40);  /* box-shadow use only */
```

### CTA Button
```css
.cta-button {
  background: #0A9ED4;
  color: #070B0F;
  font-weight: 500;
  border-radius: 8px;
  padding: 12px 24px;
  box-shadow: 0 0 24px rgba(10, 158, 212, 0.45);
}
```

### Tag / Badge
```css
.tag {
  background: rgba(10, 158, 212, 0.12);
  border: 0.5px solid rgba(10, 158, 212, 0.32);
  color: #0A9ED4;
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 11px;
  font-weight: 500;
}
```

### Usage Rules
- CTAs, active links, key highlighted words, icons, tags, badges
- **Max 8%** of any single composition
- Never use as a background fill on large areas
- Never use on body text (only on deliberate accent words)
- The glow effect (`box-shadow: 0 0 24px rgba(10,158,212,0.45)`) — buttons and live indicator dots only

---

## 5. Semantic Color

One semantic color only. Used to signal status or draw attention to one key idea per post.

| Name         | Background  | Text color  |
|--------------|-------------|-------------|
| Signal teal  | `#1A6B8A`   | `#5DC8F0`   |

### CSS
```css
--semantic-bg:   rgba(26, 107, 138, 0.20);
--semantic-border: rgba(26, 107, 138, 0.40);
--semantic-text: #5DC8F0;
```

### Semantic Pill
```css
.status-pill {
  background: rgba(26, 107, 138, 0.20);
  border: 0.5px solid rgba(26, 107, 138, 0.40);
  color: #5DC8F0;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 11px;
}
```

### Usage Rules
- "Available for projects" badge
- Key stat callout in a post
- A highlighted quote block
- **One instance per post maximum**
- Never use as a second accent color or decorative element

---

## 6. Complete CSS Variables Reference

Paste this into any project as your design token foundation:

```css
:root {
  /* Primary gradient stops */
  --gv-0: #070B0F;
  --gv-1: #071828;
  --gv-2: #044470;
  --gv-3: #035888;

  /* Neutral surfaces */
  --surface-base:    #0D1117;
  --surface-panel:   #111820;
  --surface-lifted:  #162030;

  /* Text hierarchy */
  --text-bright: #D8EEFF;
  --text-muted:  rgba(180, 220, 255, 0.55);
  --text-ghost:  rgba(180, 220, 255, 0.25);

  /* Accent */
  --accent:         #0A9ED4;
  --accent-tint:    rgba(10, 158, 212, 0.12);
  --accent-border:  rgba(10, 158, 212, 0.28);
  --accent-glow:    rgba(10, 158, 212, 0.40);

  /* Semantic */
  --semantic-bg:     rgba(26, 107, 138, 0.20);
  --semantic-border: rgba(26, 107, 138, 0.40);
  --semantic-text:   #5DC8F0;

  /* Borders */
  --border-default: rgba(10, 158, 212, 0.14);
  --border-strong:  rgba(10, 158, 212, 0.28);
}
```

---

## 7. Usage by Surface / Format

### LinkedIn
| Element              | Color / Treatment |
|----------------------|-------------------|
| Profile banner       | Glacial Void 90deg gradient |
| Post background      | Glacial Void 135deg gradient + glow |
| Card panels          | `#111820` Deep panel |
| Headline text        | `#D8EEFF` Bright |
| Body text            | Muted text |
| Tags / hashtags      | Accent tint pill |
| CTA                  | `#0A9ED4` solid button |
| Availability badge   | Signal teal pill |

### Instagram / Carousel
| Element              | Color / Treatment |
|----------------------|-------------------|
| Slide background     | Glacial Void 135deg gradient |
| Slide number         | Ghost text |
| Tag pill             | Accent tint |
| Headline             | Bright text, 500 weight |
| Body                 | Muted text |
| Footer divider       | `rgba(10,158,212,0.14)` |
| CTA slide            | Radial glow + accent button |

### YouTube
| Element              | Color / Treatment |
|----------------------|-------------------|
| Channel art banner   | Glacial Void 90deg, full width |
| Thumbnail background | Glacial Void 135deg or 180deg |
| Thumbnail text       | `#D8EEFF` Bright, 500 weight |
| Thumbnail accent     | `#0A9ED4` on key word only |
| End screen bg        | `#0D1117` Void base |

### Portfolio Website
| Element              | Color / Treatment |
|----------------------|-------------------|
| Page background      | `#0D1117` Void base |
| Hero section         | Glacial Void 135deg gradient |
| Cards                | `#111820` Deep panel, glacial border |
| Nav background       | `#0D1117` + blur |
| Nav links            | Muted text → Bright on hover |
| Primary CTA button   | `#0A9ED4` with glow shadow |
| Secondary button     | Accent tint + accent border |
| Section dividers     | `rgba(10,158,212,0.14)` |

### Pitch Deck / Presentations
| Element              | Color / Treatment |
|----------------------|-------------------|
| Slide background     | `#0D1117` or Glacial Void gradient |
| Title slide          | Full gradient + glow |
| Content slides       | `#0D1117` base, `#111820` panels |
| Headlines            | `#D8EEFF` Bright |
| Body                 | Muted text |
| Data highlights      | `#0A9ED4` accent |
| Chart accent color   | `#0A9ED4` |

### Profile Picture / Avatar
| Element              | Color / Treatment |
|----------------------|-------------------|
| Background           | Radial gradient: `#0A9ED4` → `#035888` |
| Frame / ring         | `rgba(10,158,212,0.40)` |

---

## 8. Composition Ratio

Every piece of content should follow this ratio:

| Layer          | Color              | Ratio |
|----------------|--------------------|-------|
| Void base      | Gradient darks     | 60%   |
| Surface panels | `#111820`          | 25%   |
| Accent         | `#0A9ED4`          | 10%   |
| Semantic       | Signal teal        | 5%    |

**The rule:** If you look at a finished post and the accent feels loud, you've used too much of it. It should feel like a flash — not a fill.

---

## 9. What Not to Do

- **No pure black (#000000)** — use `#0D1117` instead
- **No pure white (#FFFFFF)** — use `#D8EEFF` instead
- **No warm colors** — this palette is entirely cool-toned; any warm color will break the system
- **No secondary accent** — `#0A9ED4` is the only accent color, full stop
- **No large accent fills** — accent on text, icons, buttons, small tags only
- **No random colors in posts** — one off-brand post costs you weeks of consistency
- **No gradients other than Glacial Void** — don't introduce other gradients
- **No light backgrounds** — exception: warm white `#F5F0E8` on quote posts only, once per week maximum

---

## 10. Brand Personality This Palette Communicates

| What they see         | What they feel               |
|-----------------------|------------------------------|
| Dark gradient         | Premium, serious, deliberate |
| No warm tones         | Precision, not playfulness   |
| Single accent flash   | Controlled, intentional      |
| Tight text hierarchy  | Systems thinker              |
| Consistent surfaces   | Trustworthy, professional    |

**The positioning:** Not the loudest in the room. The deepest.

---

*Glacial Void Brand System v1.0 — Built for: AI Engineer · Founder · Service Startup · Product*
