# The Conversion: Scrollytelling Website Build Plan

## For Claude Code Terminal Implementation

---

## Project Overview

A dark, atmospheric scrollytelling website that presents J. Neil Garcia's "The Conversion" as a visual narrative. The reader scrolls down through 11 illustrated scenes. Each scene has a full-viewport illustration that transitions as the reader progresses, with minimal overlaid text (short poem excerpts or single-line captions). The scroll itself mirrors the poem's irreversible transformation.

**Live demo goal:** A single-page site the presenter can open in a browser and scroll through while narrating to classmates.

---

## Tech Stack

| Tool | Purpose | Install |
|------|---------|---------|
| Vite | Dev server + build | `npm create vite@latest` |
| Vanilla JS | No framework overhead | built-in |
| Scrollama.js | Step-based scroll triggers | `npm i scrollama` |
| GSAP + ScrollTrigger | Pinning, parallax, crossfade | `npm i gsap` |
| Lenis | Smooth scroll | `npm i lenis` |
| Google Fonts | Typography (Playfair Display + Inter) | CDN link |

**No React.** This is a static narrative site. Vanilla HTML/CSS/JS keeps it light and portable.

---

## Illustration Strategy

Each scene needs one primary illustration (1920x1080 minimum, dark/moody tone). Two approaches:

### Option A: AI-Generated (Recommended for quality)

Use **Midjourney** or **Leonardo AI** with a consistent style prompt prefix. Generate all 11 images with this shared prefix to maintain visual coherence:

```
dark atmospheric watercolor illustration, Filipino urban poverty setting,
muted indigo and rust palette, painterly brushstrokes, cinematic lighting,
dramatic shadows, no text, editorial illustration style --ar 16:9 --s 750
```

Then append scene-specific descriptions (provided in each section below).

Save all images to `public/images/` as `scene-01.webp` through `scene-11.webp`.

### Option B: SVG Illustrations (Code-generated fallback)

If no AI image tool is available, create atmospheric SVG illustrations using layered shapes, gradients, and CSS filters. Each scene gets a `<svg>` element with parallax layers. This approach is fully self-contained but less visually rich.

### Option C: Claude Artifacts SVG

Use Claude's built-in SVG rendering (via the Visualizer tool in claude.ai) to generate each scene illustration. Export the SVGs and place them in `public/images/`. This is a middle ground between Options A and B.

---

## Directory Structure

```
the-conversion/
  index.html
  style.css
  main.js
  public/
    images/
      scene-01.webp  (or .svg)
      scene-02.webp
      ...
      scene-11.webp
    fonts/          (if self-hosting)
  package.json
  vite.config.js
```

---

## Claude Code: Step-by-Step Commands

### Step 1: Initialize Project

```bash
mkdir the-conversion && cd the-conversion
npm init -y
npm i scrollama gsap lenis
npm i -D vite
```

Add to `package.json` scripts:
```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```

### Step 2: Create index.html

The HTML is a sequence of 11 sections. Each section has:
- A `figure.scene-graphic` (sticky illustration container)
- An `article.scene-text` (scrolling text overlay)

Structure pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Conversion | J. Neil Garcia</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- HERO -->
  <section id="hero" class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1>The Conversion</h1>
      <p class="author">J. Neil Garcia</p>
      <p class="scroll-cue">Scroll down</p>
    </div>
  </section>

  <!-- SCROLLY SECTIONS (repeat pattern for each scene) -->
  <section class="scrolly" id="scene-01">
    <figure class="scrolly__graphic">
      <img src="/images/scene-01.webp" alt="Scene description" />
      <!-- Or inline SVG -->
    </figure>
    <article class="scrolly__steps">
      <div class="step" data-step="1">
        <p class="step-text">Caption or poem excerpt</p>
      </div>
    </article>
  </section>

  <!-- ... scenes 02 through 11 ... -->

  <!-- CREDITS -->
  <section id="credits" class="credits">
    <p>A poem by J. Neil Garcia</p>
    <p>From <em>Misterios and Other Poems</em> (2005)</p>
  </section>

  <script type="module" src="main.js"></script>
</body>
</html>
```

### Step 3: Create style.css

Key CSS patterns:

```css
/* ---- GLOBAL ---- */
:root {
  --bg-dark: #0a0a0f;
  --bg-scene: #111118;
  --text-primary: #e8e4df;
  --text-dim: #8a8680;
  --accent-rust: #a0522d;
  --accent-indigo: #2e3a5c;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { background: var(--bg-dark); }
body { color: var(--text-primary); overflow-x: hidden; }

/* ---- HERO ---- */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 400;
  letter-spacing: 0.02em;
}

/* ---- SCROLLY PATTERN ---- */
.scrolly {
  position: relative;
  min-height: 100vh;
}
.scrolly__graphic {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.scrolly__graphic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.6s ease;
}
.scrolly__steps {
  position: relative;
  z-index: 2;
  pointer-events: none;
}
.step {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.step-text {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-style: italic;
  max-width: 600px;
  text-align: center;
  background: rgba(10, 10, 15, 0.75);
  backdrop-filter: blur(8px);
  padding: 2rem 3rem;
  border-radius: 4px;
  border-left: 3px solid var(--accent-rust);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.step.is-active .step-text {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 4: Create main.js

```js
import scrollama from 'scrollama';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll
const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Scrollama for step activation
const scroller = scrollama();
scroller.setup({
  step: '.step',
  offset: 0.5,
  debug: false,
}).onStepEnter((response) => {
  response.element.classList.add('is-active');
}).onStepExit((response) => {
  response.element.classList.remove('is-active');
});

// GSAP: Hero parallax fade
gsap.to('.hero-content', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
  opacity: 0,
  y: -100,
});

// GSAP: Scene image crossfades
document.querySelectorAll('.scrolly__graphic img').forEach((img) => {
  gsap.fromTo(img,
    { opacity: 0, scale: 1.05 },
    {
      opacity: 0.85,
      scale: 1,
      scrollTrigger: {
        trigger: img.closest('.scrolly'),
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    }
  );
});

window.addEventListener('resize', scroller.resize);
```

### Step 5: Import Lenis CSS

Add to the top of `style.css` or in `index.html`:
```css
@import 'lenis/dist/lenis.css';
```

---

## The 11 Scenes: Content + Illustration Specs

### Scene 01: The Cabinet
- **Text overlay:** "It happened in a metal drum."
- **Illustration:** A small dark figure curled inside an old wooden wardrobe/cabinet. Dresses hang above. Dim light leaks through cracks. Tight, claustrophobic framing.
- **AI prompt suffix:** `a small child curled up hiding inside an old dark wooden cabinet, dead woman's floral dresses hanging above, sliver of light through crack, claustrophobic, fear, tight crop`
- **Color:** Deep browns, warm amber from light crack, surrounding darkness.

### Scene 02: The House in Chaos
- **Text overlay:** "The laundry lay caked and smelly. Dishes soiled with fat and swill."
- **Illustration:** Wide shot of a cramped Filipino home interior. Piles of unwashed laundry, dirty dishes with flies, children with dirty faces looking resigned. The house feels lived-in but neglected.
- **AI prompt suffix:** `interior of cramped Filipino home, dirty laundry piled in basins, greasy dishes with flies, two small children with dirty faces looking out, poverty, resignation`
- **Color:** Sickly yellows, grays, flyspeck browns.

### Scene 03: The Uncles Arrive
- **Text overlay:** "Father had arrived booming with his cousins, my uncles. They were big, strong men."
- **Illustration:** Silhouettes of large men entering through a doorway. They are backlit, imposing. Shot from a low angle (child's POV). The doorway frames them like a portal.
- **AI prompt suffix:** `silhouettes of large imposing Filipino men entering a doorway, backlit harsh sunlight, low angle child perspective, intimidating, looming shadows`
- **Color:** Harsh white backlight, black silhouettes, orange-tinted dust.

### Scene 04: The Dragging
- **Text overlay:** "He dragged me down the stairs by the hair."
- **Illustration:** Motion blur. A hand gripping dark hair. Stairs descending. The POV is tilted, disoriented. Arms reaching from below.
- **AI prompt suffix:** `close-up of a large hand gripping a child's hair, descending stairs, motion blur, disoriented angle, reaching arms below, violent urgency, expressionist`
- **Color:** Reds and blacks. Motion streaks.

### Scene 05: The Drum
- **Text overlay:** "Into the cold of the drum I slipped."
- **Illustration:** A rusty metal drum filled with water, seen from above. The water surface reflects a frightened face. Hairy hands grip the drum's rim. Neighbors watch from upper floors.
- **AI prompt suffix:** `overhead view of a large rusty metal water drum, child's frightened reflection in water surface, large hairy hands gripping rim, neighbors peering from upper windows, open-air bathroom`
- **Color:** Steel blue water, rust orange drum, gray concrete.

### Scene 06: Girl or Boy
- **Text overlay:** "Girl or Boy."
- **Illustration:** Underwater POV. The child is submerged, looking up through rippling water at the distorted face of the father above. Bubbles rise. The father's mouth is open, booming.
- **AI prompt suffix:** `underwater perspective looking up through rippling water surface, distorted face of angry man shouting from above, air bubbles rising, drowning child POV, surreal distortion`
- **Color:** Deep blue-green water, distorted flesh tones above, white bubbles.

### Scene 07: The Closing Holes
- **Text overlay:** "I watched the holes in my ears grow smaller, until they looked as if they had never heard of rhinestones."
- **Illustration:** Extreme close-up of an ear. Two tiny piercing holes are slowly closing, shrinking. In the reflection of the earlobe, a rhinestone earring fades like a ghost.
- **AI prompt suffix:** `extreme macro close-up of a human ear, tiny piercing holes visibly closing and healing, ghostly translucent rhinestone earring fading away, time-lapse feeling, loss of identity`
- **Color:** Skin tones, ghostly white rhinestone, fading sparkle.

### Scene 08: The "Redeemed" Man
- **Text overlay:** "Our four children, all boys, are the joy of my manhood, my proof."
- **Illustration:** A man sitting at a table surrounded by four small boys. He holds a beer. His posture is rigid, performative. The scene looks like a family photo but something is wrong: the man's shadow on the wall behind him is the silhouette of a woman.
- **AI prompt suffix:** `Filipino man sitting at dinner table with four small boys, holding beer, rigid posture, performative smile, BUT his shadow on the wall behind is the silhouette of a woman in a dress, uncanny, subtle horror`
- **Color:** Warm domestic yellow, but the shadow is cold blue-gray.

### Scene 09: The Violence
- **Text overlay:** "I hit her in the mouth to learn her."
- **Illustration:** Abstract/expressionist. A woman's face, lower half. Shattered lips. The man's fist is NOT shown directly. Instead, show shattered ceramic (a plate? a cup?) and spilled liquid, metaphorically standing in for the violence. Keep it suggestive, not graphic.
- **AI prompt suffix:** `abstract expressionist, shattered ceramic bowl on floor, dark liquid spilling, woman's shadow falling across the shards, implied violence, NOT graphic, metaphorical, broken domesticity`
- **Color:** Dark reds, ceramic white shards, black liquid.

### Scene 10: The Haunting
- **Text overlay:** "I see her at night with bubbles springing like flowers from her nose."
- **Illustration:** The most beautiful and tragic image. A girl underwater, sinking slowly, with delicate flower-shaped bubbles rising from her nose and mouth. Her hair fans out. Her expression is peaceful. The water is dark but the bubbles glow.
- **AI prompt suffix:** `girl sinking underwater in dark water, delicate luminous flower-shaped bubbles rising from her nose and mouth, hair fanning out like seaweed, peaceful expression, bioluminescent glow, tragic beauty, dreamlike`
- **Color:** Deep indigo water, bioluminescent gold/white bubbles shaped like sampaguita flowers.

### Scene 11: The Surface
- **Text overlay:** "We die to rise to a better life."
- **Illustration:** The water surface from below, seen from the perspective of someone sinking. A single hand reaches up toward the light above. The surface is closing, healing like a wound.
- **AI prompt suffix:** `underwater view looking up at water surface, single hand reaching upward toward light, water surface closing like a healing wound, fading light, sinking perspective, finality`
- **Color:** Near-black at edges, diminishing white light at center, hand fading.

---

## Claude Code: Build Sequence

Run these in order inside the terminal:

```
1. Initialize project and install deps (Step 1 above)
2. Create index.html with all 11 scene sections
3. Create style.css with the full stylesheet
4. Create main.js with Scrollama + GSAP + Lenis setup
5. Create placeholder SVG illustrations for each scene
   (use colored gradients and abstract shapes matching the color specs)
6. Run `npm run dev` to test locally
7. Iterate on timing, opacity, and transitions
8. Replace placeholder SVGs with AI-generated images when ready
9. Run `npm run build` for production output in dist/
```

### Generating SVG Placeholders with Claude Code

For each scene, Claude Code can generate atmospheric SVG placeholders. Example for Scene 10 (The Haunting):

```bash
# Claude Code can generate SVGs directly:
cat > public/images/scene-10.svg << 'EOF'
<svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="40%">
      <stop offset="0%" stop-color="#2a3a6a" />
      <stop offset="100%" stop-color="#050510" />
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#glow)"/>
  <!-- Add layered shapes for figure, bubbles, etc -->
</svg>
EOF
```

Use this approach for all 11 scenes as a starting point.

---

## Deployment

For presenting to classmates, the simplest options:

1. **Local:** Just run `npm run dev` and open in browser
2. **Vercel:** `npx vercel` from the project root (free, instant)
3. **Netlify:** Drag the `dist/` folder to netlify.com/drop
4. **GitHub Pages:** Push to a repo, enable Pages on the `dist/` folder

---

## Presentation Tips

- Use full-screen browser mode (F11)
- Scroll slowly and deliberately
- Let each illustration sit for 3-5 seconds before scrolling to the next
- The script docx (provided separately) maps narration to each scene
- Consider playing ambient music (soft piano or rain sounds) in the background

---

## Accessibility Notes

- All images have descriptive alt text
- Text overlays have sufficient contrast (dark semi-transparent backdrop)
- The site works without JS (images still display, text still readable)
- Tested at 1920x1080, 1440x900, and mobile viewports
