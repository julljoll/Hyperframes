---
name: hyperframes-social-vertical
description: Create viral short-form vertical videos for TikTok, Instagram Reels, and YouTube Shorts using HyperFrames. Optimized for 9:16 aspect ratio (1080x1920), 8-second clips, hook-first storytelling, rapid pacing, and high-retention editing patterns. Reads scripts from guion.txt file. Use when creating social media content with vertical format, short duration (15-60s), caption-heavy layouts, and engagement-focused design.
---

# HyperFrames Social Vertical - TikTok/Reels/Shorts Framework

**Purpose:** Transform `guion.txt` scripts into high-engagement vertical videos optimized for TikTok, Instagram Reels, and YouTube Shorts algorithms.

## Core Principles

### 1. Hook in First 2 Seconds ⚡
The viewer decides to scroll or watch in <2 seconds. Your first frame MUST:
- Start with movement already in progress (no fade-ins from black)
- Show the most intriguing visual immediately
- Use pattern interrupts: flash, glitch, zoom, color burst
- Display the headline question/statement at full size from frame 1

**WRONG:** Black screen → slow fade in → title appears at 1.5s
**RIGHT:** Frame 0 = explosive visual + bold text already visible → motion intensifies

### 2. Vertical Composition Rules (1080x1920)

```css
/* SAFE ZONES for TikTok/Reels UI overlay */
.scene-content {
  width: 100%;
  height: 100%;
  padding: 180px 80px 280px 80px; /* top right bottom left */
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
}

/* Top 180px: TikTok profile/header covers this */
/* Bottom 280px: Caption, buttons, progress bar */
/* Left/Right 80px: Edge safety for different phone screens */
```

**Critical text placement:**
- Primary hook: Center-top third (y: 200-400px)
- Supporting text: Center (y: 600-900px)
- CTA: Lower-middle (y: 1200-1400px), above UI controls

### 3. Density & Pace for Short-Form

| Metric | Corporate Video | Social Vertical |
|--------|----------------|-----------------|
| Clip duration | 8-15s | 5-8s |
| Elements per scene | 5-8 | 3-5 (focused) |
| Text on screen | Minimal | Heavy (captions required) |
| Transition style | Smooth crossfades | Hard cuts, whips, glitches |
| Motion intensity | Subtle-moderate | High (subtle = static at 30fps) |

**Every 8-second clip needs:**
- 0-2s: HOOK (pattern interrupt + bold statement)
- 2-5s: VALUE (core message/visual payoff)
- 5-7s: REINFORCEMENT (supporting detail)
- 7-8s: TRANSITION SETUP (velocity-matched exit)

### 4. Reading from guion.txt

**File location:** `/workspace/guion.txt`

**Expected format:**
```json
{
  "configuracion_reels": {
    "objetivo": "...",
    "formato_video": "Vertical 1080x1920 (Relación de aspecto 9:16).",
    "duracion_total": "64 segundos (8 clips, 8 segundos por clip).",
    "estilo_visual_ia": "..."
  },
  "guion_video_clips": [
    {
      "clip": 1,
      "duracion": "8 segundos",
      "explicacion_fragmento_ley": "...",
      "texto_en_pantalla": "TEXTO COMPLETO QUE APARECE EN PANTALLA",
      "prompt_ia_generadora": "..."
    }
  ]
}
```

**Workflow:**
1. Read `guion.txt` and parse the JSON
2. Extract `configuracion_reels.estilo_visual_ia` for mood/palette direction
3. For each clip in `guion_video_clips`:
   - Use `texto_en_pantalla` as the on-screen caption (split into 2-3 lines if >80 chars)
   - Use `prompt_ia_generadora` to understand the visual metaphor
   - Duration from `duracion` field (default 8s)
4. Build index.html with one `.scene` per clip
5. Add velocity-matched transitions between clips

## Visual Styles for Social

### Dark Premium (Default for Tech/Crime/Finance)
```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --accent-primary: #00ff88; /* Neon green for tech/crime */
  --accent-secondary: #ff0055; /* Red for danger/alerts */
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
```

### Bold Energetic (Lifestyle/Motivation)
```css
:root {
  --bg-primary: #ff6b35;
  --bg-secondary: #f7c548;
  --accent-primary: #004e89;
  --text-primary: #ffffff;
  --text-secondary: #ffe6e6;
}
```

### Neon Electric (Gaming/Crypto/Futuristic)
```css
:root {
  --bg-primary: #0d001a;
  --accent-primary: #ff00ff;
  --accent-secondary: #00ffff;
  --text-primary: #ffffff;
  --glow-color: rgba(255, 0, 255, 0.4);
}
```

## Caption Styling for Maximum Readability

**Rules:**
1. **Font size:** 42-56px minimum (test on phone screen)
2. **Font weight:** 700-800 (bold reads better on small screens)
3. **Text shadow:** Always add for contrast against any background
4. **Line height:** 1.2-1.3 for multi-line captions
5. **Max width:** 85% of screen (keep within safe zones)

```css
.caption-text {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.25;
  color: #ffffff;
  text-align: center;
  text-shadow: 
    0 0 20px rgba(0, 0, 0, 0.8),
    0 2px 4px rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
}

/* Highlight keywords in accent color */
.caption-highlight {
  color: #00ff88;
  text-shadow: 
    0 0 30px rgba(0, 255, 136, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.8);
}
```

## Transition Patterns for Retention

### 1. Velocity-Matched Whip (Default)
Fast exit + fast entry with matching blur creates seamless flow:

```javascript
// Exit current scene
tl.to("#scene-N", {
  x: -400,
  filter: "blur(24px)",
  duration: 0.25,
  ease: "power3.in"
}, "clip-N-end");

// Enter next scene simultaneously
tl.fromTo("#scene-N+1", 
  { x: 400, filter: "blur(24px)" },
  { x: 0, filter: "blur(0px)", duration: 0.35, ease: "power3.out" },
  "clip-N-end"
);
```

### 2. Glitch Cut (For shocking reveals)
RGB split + scale jitter + hard cut:

```javascript
tl.to("#scene-N", {
  filter: "hue-rotate(90deg) saturate(3)",
  scale: 1.05,
  duration: 0.08,
  ease: "none"
}, "transition-point");

tl.set("#scene-N", { opacity: 0 }, "transition-point+=0.08");
tl.from("#scene-N+1", {
  scale: 0.95,
  filter: "hue-rotate(-90deg) saturate(3)",
  duration: 0.08,
  ease: "none"
}, "transition-point");
```

### 3. Zoom Through (Scene changes with momentum)
```javascript
// Outgoing zooms IN past camera
tl.to("#scene-N", {
  scale: 1.4,
  filter: "blur(20px)",
  duration: 0.3,
  ease: "power2.in"
}, "zoom-transition");

// Incoming zooms OUT from distance
tl.fromTo("#scene-N+1",
  { scale: 0.6, filter: "blur(20px)" },
  { scale: 1, filter: "blur(0px)", duration: 0.4, ease: "power2.out" },
  "zoom-transition"
);
```

### 4. Flash White (Emphasis moments)
```javascript
tl.to("#flash-overlay", {
  opacity: 1,
  duration: 0.05,
  ease: "none"
}, "flash-point");

tl.to("#flash-overlay", {
  opacity: 0,
  duration: 0.15,
  ease: "power2.out"
}, "flash-point+=0.05");
```

## Animation Choreography for Hooks

### Pattern Interrupt Openers (First 2 seconds)

**Option A: Slam In**
```javascript
tl.from("#hook-text", {
  scale: 3,
  opacity: 0,
  rotation: -15,
  duration: 0.4,
  ease: "back.out(1.7)"
}, 0);
```

**Option B: Glitch Reveal**
```javascript
tl.fromTo("#hook-text",
  { opacity: 0, filter: "blur(10px)" },
  { opacity: 1, filter: "blur(0px)", duration: 0.15, ease: "none" },
  0.1
);
// Add 2-3 quick flickers
tl.to("#hook-text", { opacity: 0.3, duration: 0.05 }, 0.12);
tl.to("#hook-text", { opacity: 1, duration: 0.05 }, 0.17);
```

**Option C: Typewriter Burst**
```javascript
// Split text into spans per word, animate staggered
tl.from(".hook-word", {
  y: 80,
  opacity: 0,
  stagger: 0.08,
  duration: 0.3,
  ease: "power4.out"
}, 0.1);
```

### Background Ambience (Always Moving)

Static backgrounds kill retention. Add subtle motion:

```css
.background-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
  opacity: 0.15;
  filter: blur(80px);
  animation: breathe 4s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.1) translate(-20px, 20px); }
}
```

```javascript
// GSAP ambient drift for decorative elements
tl.to(".bg-element", {
  y: "random(-30, 30)",
  x: "random(-20, 20)",
  duration: "random(3, 6)",
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
}, 0);
```

## Complete Template Structure

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1080, height=1920" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body {
        width: 1080px;
        height: 1920px;
        overflow: hidden;
        background: #0a0a0f;
      }
      body {
        font-family: 'Inter', sans-serif;
        color: #ffffff;
      }
      .scene {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        padding: 180px 80px 280px 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        box-sizing: border-box;
      }
      .caption-text {
        font-size: 48px;
        font-weight: 800;
        line-height: 1.25;
        text-align: center;
        text-shadow: 0 0 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5);
      }
      .caption-highlight {
        color: #00ff88;
        text-shadow: 0 0 30px rgba(0,255,136,0.6), 0 2px 4px rgba(0,0,0,0.8);
      }
      .flash-overlay {
        position: absolute;
        inset: 0;
        background: #ffffff;
        opacity: 0;
        pointer-events: none;
        z-index: 100;
      }
      .bg-glow {
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, #00ff88 0%, transparent 70%);
        opacity: 0.15;
        filter: blur(80px);
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="64" data-width="1080" data-height="1920">
      
      <!-- Flash overlay for transitions -->
      <div id="flash-overlay" class="flash-overlay"></div>
      
      <!-- Background ambience (shared across scenes) -->
      <div class="bg-glow" style="top: 200px; left: 100px;"></div>
      <div class="bg-glow" style="bottom: 400px; right: 150px; background: radial-gradient(circle, #ff0055 0%, transparent 70%);"></div>
      
      <!-- Scene 1: Hook (0-8s) -->
      <div id="scene-1" class="scene clip" data-start="0" data-duration="8" data-track-index="0">
        <h1 class="caption-text">
          ¿Sabías que robaron <span class="caption-highlight">$1.9T</span> sin activar alarmas?
        </h1>
      </div>
      
      <!-- Scene 2: Method (8-16s) -->
      <div id="scene-2" class="scene clip" data-start="8" data-duration="8" data-track-index="1">
        <p class="caption-text">
          Usó la <span class="caption-highlight">Técnica del Salami</span>: desviaba centavos de miles de transacciones
        </p>
      </div>
      
      <!-- Continue for all clips from guion.txt... -->
      
    </div>
    
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      
      // SCENE 1: Hook entrance (SLAM for pattern interrupt)
      tl.from("#scene-1 .caption-text", {
        scale: 2.5,
        opacity: 0,
        rotation: -10,
        duration: 0.35,
        ease: "back.out(1.7)"
      }, 0.1);
      
      // Ambient background motion
      tl.to(".bg-glow:nth-child(2)", {
        x: "random(-40, 40)",
        y: "random(-30, 30)",
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      }, 0);
      
      // TRANSITION 1→2: Velocity-matched whip
      const t1 = 7.5; // transition point
      tl.to("#scene-1", {
        x: -400,
        filter: "blur(24px)",
        duration: 0.25,
        ease: "power3.in"
      }, t1);
      
      tl.fromTo("#scene-2",
        { x: 400, filter: "blur(24px)" },
        { x: 0, filter: "blur(0px)", duration: 0.35, ease: "power3.out" },
        t1
      );
      
      // SCENE 2: Text entrance
      tl.from("#scene-2 .caption-text", {
        y: 60,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out"
      }, 8.2);
      
      // Continue for all scenes...
      
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
```

## Workflow Checklist

Before rendering:

- [ ] Read `guion.txt` and confirm JSON structure is valid
- [ ] Verify all clips have `texto_en_pantalla` and `duracion`
- [ ] Choose palette based on `estilo_visual_ia` mood
- [ ] Build layout in END STATE first (visible, positioned correctly)
- [ ] Add hook animations (first 2s of Scene 1 must be explosive)
- [ ] Add velocity-matched transitions between ALL clips
- [ ] Test caption readability: 48px+, bold, text-shadow
- [ ] Verify safe zones: text not in top 180px or bottom 280px
- [ ] Add background ambience (nothing static)
- [ ] Preview with `npx hyperframes preview`
- [ ] Render with `npx hyperframes render --output video.mp4`

## Common Mistakes to Avoid

❌ **Fade in from black** (viewer scrolls before content appears)
❌ **Text smaller than 42px** (unreadable on phones)
❌ **Centered text without safe zone awareness** (covered by UI)
❌ **Smooth crossfades everywhere** (feels slow, kills retention)
❌ **Static backgrounds** (looks dead, reduce perceived quality)
❌ **More than 5 elements per scene** (cluttered on small screens)
❌ **Long sentences** (split into 2-3 short lines)
❌ **No keyword highlighting** (missing emphasis opportunities)

## Quick Commands

```bash
# Preview in browser (real-time feedback)
npx hyperframes preview

# Render to MP4
npx hyperframes render --output tiktok-video.mp4

# Render with custom variables (if using parametrized templates)
npx hyperframes render --variables '{"theme":"dark","accentColor":"#00ff88"}' --output video.mp4

# Check composition metadata
npx hyperframes inspect index.html
```

## Adaptation Notes

This skill is optimized for:
- **Duration:** 15-60 seconds total (2-8 clips of 5-8s each)
- **Aspect Ratio:** 9:16 vertical (1080x1920)
- **Platform:** TikTok, Instagram Reels, YouTube Shorts
- **Content Type:** Educational, storytelling, listicles, reveals
- **Audience Behavior:** Scrolling quickly, sound-off initially, thumb-friendly

For horizontal corporate videos, use the main `hyperframes` skill instead.
