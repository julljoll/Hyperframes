import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, "..");

const CLIPS = [
  {
    id: "c1",
    start: 0.0,
    duration: 8.0,
    badge: "Caso Real",
    icon: "warning",
    badgeClass: "red",
    text: "Amparo llevó su laptop a reparar. Días después, descubrió horrorizada que el técnico informático había robado y filtrado sus fotografías más íntimas.",
    title: "INTIMIDAD VIOLADA",
    question: "¿Abuso de confianza?",
    reveal: "Espionaje Técnico",
    isHook: true,
  },
  {
    id: "c2",
    start: 8.0,
    duration: 8.0,
    badge: "Acceso Ilegal",
    icon: "error",
    badgeClass: "red",
    text: "El técnico usó sus conocimientos para acceder ilegalmente a su correo, descargar las fotos y ocultarlas, creyendo que borraría todo rastro digital.",
  },
  {
    id: "c3",
    start: 16.0,
    duration: 8.0,
    badge: "Memoria RAM",
    icon: "policy",
    badgeClass: "yellow",
    text: "Pero la justicia intervino. Peritos informáticos ejecutaron una captura de la memoria RAM del equipo del sospechoso antes de que lo apagara.",
  },
  {
    id: "c4",
    start: 24.0,
    duration: 8.0,
    badge: "Evidencia Volátil",
    icon: "lock",
    badgeClass: "green",
    text: "En la memoria volátil, extrajeron la contraseña del correo de la víctima y probaron irrefutablemente que el técnico había accedido a su cuenta.",
  },
  {
    id: "c5",
    start: 32.0,
    duration: 8.0,
    badge: "Copia Forense",
    icon: "analytics",
    badgeClass: "green",
    text: "Además, incautaron un pendrive. Usando bloqueadores de escritura y software forense, realizaron una copia bit a bit blindada con algoritmos matemáticos Hash.",
  },
  {
    id: "c6",
    start: 40.0,
    duration: 8.0,
    badge: "Esteganografía",
    icon: "fingerprint",
    badgeClass: "red",
    text: "El análisis profundo reveló el engaño: el técnico intentó borrar las fotos y usó técnicas de esteganografía para ocultarlas dentro de otros archivos.",
  },
  {
    id: "c7",
    start: 48.0,
    duration: 8.0,
    badge: "Condena Penal",
    icon: "gavel",
    badgeClass: "green",
    text: "Un falso archivo de texto ocultaba en realidad una foto íntima. La implacable evidencia digital lo condenó por intromisión y espionaje informático.",
  },
  {
    id: "c8",
    start: 56.0,
    duration: 8.0,
    badge: "Lección Legal",
    icon: "share",
    badgeClass: "green",
    text: "La lección: borrar u ocultar archivos no engaña a la informática forense. Protege tu privacidad digital. ¡Guarda este video y compártelo!",
    isCloser: true,
  },
];

// Let's generate word-by-word audio tags
let audioTags = "";
let wordPopCounter = 1;

CLIPS.forEach((clip, cIdx) => {
  // Narration audio
  audioTags += `      <!-- Audio Locución Clip ${cIdx + 1} -->
      <audio
        id="a${cIdx + 1}"
        class="clip"
        data-start="${clip.start}"
        data-duration="${clip.duration}"
        data-track-index="2"
        data-volume="1"
        src="audio/clip-${cIdx + 1}.mp3"
        crossorigin="anonymous"
      ></audio>\n`;

  // Spaced word pops for word highlight SFX
  const words = clip.text.split(" ");
  const wordDuration = clip.duration / words.length;

  words.forEach((word, wIdx) => {
    // Only pop for words that have more than 2 letters
    if (word.replace(/[.,!¡?¿]/g, "").length >= 3) {
      const popStart = (clip.start + wIdx * wordDuration).toFixed(2);
      audioTags += `      <audio
        id="wp-${wordPopCounter++}"
        class="clip"
        data-start="${popStart}"
        data-duration="0.08"
        data-track-index="5"
        data-volume="0.05"
        src="audio/word-pop.wav"
        crossorigin="anonymous"
      ></audio>\n`;
    }
  });
});

// Let's generate HTML content
const htmlContent = `<!doctype html>
<!-- sha256-v07 · SHA256.US Laboratorio Forense · 64s · 1080x1920 · 30fps -->
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>SHA256.US — Amparo y el Servicio Técnico: Robo Forense</title>
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!-- Tailwind CSS v4 Browser Runtime -->
    <script>
      window.__tailwindReady = new Promise(function(resolve) {
        var loaded = document.readyState === "complete";
        var resolved = false;
        var observer;
        function readTailwindCss() {
          var styles = document.querySelectorAll("style");
          for (var i = styles.length - 1; i >= 0; i--) {
            var text = styles[i].textContent || "";
            if (text.indexOf("tailwindcss v") !== -1) return text;
          }
          return "";
        }
        function finish() {
          if (resolved || !loaded || !readTailwindCss()) return;
          resolved = true;
          if (observer) observer.disconnect();
          resolve(true);
        }
        observer = new MutationObserver(finish);
        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
          characterData: true
        });
        if (loaded) {
          finish();
        } else {
          window.addEventListener("load", function() {
            loaded = true;
            finish();
          }, { once: true });
        }
      });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.2.4/dist/index.global.js" integrity="sha384-v5YF9xS+gLRWdvrQ0u/WRbCkjSIH0NjHIPe8tBL1ZRrmI7PiSH6LLdzs0aAIMCuh" crossorigin="anonymous"></script>
    <style type="text/tailwindcss">
      @theme {
        --color-bg: #121414;
        --color-bg-dim: #0c0f0f;
        --color-surface: #1e2020;
        --color-yellow: #fecf06;
        --color-green: #00ff41;
        --color-red: #ff3b30;
        --color-text: #e2e2e2;
        --color-cyan: #00f0ff;
        --font-mono: "Share Tech Mono", monospace;
        --font-sans: "Ubuntu", sans-serif;
      }
      @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700;1,900&display=swap");

      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --bg: #121414;
        --bg-dim: #0c0f0f;
        --surface: #1e2020;
        --yellow: #fecf06;
        --green: #00ff41;
        --red: #ff3b30;
        --text: #e2e2e2;
        --cyan: #00f0ff;
      }

      html,
      body {
        width: 1080px;
        height: 1920px;
        background: var(--bg);
        color: var(--text);
        font-family: "Ubuntu", sans-serif;
        font-weight: 900;
        font-style: italic;
        overflow: hidden;
      }

      /* ── COMPOSITION ROOT ── */
      #sha256-v07 {
        position: relative;
        width: 1080px;
        height: 1920px;
        overflow: hidden;
        background: var(--bg);
      }

      /* ── ALL SCENES ── */
      .scene-wrap {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }

      /* ── BACKGROUND IMAGE LAYER ── */
      .bg-layer {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background: var(--bg-dim);
      }
      .bg-layer img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transform-origin: center center;
      }
      .bg-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(12, 15, 15, 0.45) 0%,
          rgba(12, 15, 15, 0.8) 55%,
          rgba(12, 15, 15, 0.96) 100%
        );
      }

      /* ── SCANLINE CRT EFFECT ── */
      .scanline-global {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 50;
        overflow: hidden;
      }
      .scanline-global::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: rgba(0, 255, 65, 0.08);
        box-shadow: 0 0 8px rgba(0, 255, 65, 0.05);
        position: absolute;
        top: 0;
        animation: scanAnim 5s linear infinite;
      }
      @keyframes scanAnim {
        from {
          top: -3px;
        }
        to {
          top: 100%;
        }
      }

      /* ── FORENSIC SIMULATION CANVAS ── */
      #forensic-canvas {
        position: absolute;
        top: 480px;
        left: 50%;
        transform: translateX(-50%);
        width: 720px;
        height: 720px;
        z-index: 5;
        pointer-events: none;
      }

      /* ── PERSISTENT LOGO ── */
      .sha-logo {
        position: absolute;
        top: 90px;
        left: 125px;
        font-family: "Share Tech Mono", monospace;
        font-size: 24px;
        font-weight: 400;
        font-style: normal;
        color: rgba(0, 255, 65, 0.7);
        letter-spacing: 0.12em;
        z-index: 70;
        border-bottom: 1px solid rgba(0, 255, 65, 0.25);
        padding-bottom: 5px;
      }

      /* ── HOOK CONTENT ── */
      .hook-wrap {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 125px;
        gap: 36px;
        background: transparent;
        z-index: 5;
      }
      .hook-sym {
        font-size: 110px;
        line-height: 1;
        color: var(--red);
        filter: drop-shadow(0 0 24px rgba(255, 59, 48, 0.65));
      }
      .hook-warn-label {
        font-family: "Share Tech Mono", monospace;
        font-size: 27px;
        font-weight: 400;
        font-style: normal;
        color: var(--red);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        border-top: 2px solid var(--red);
        border-bottom: 2px solid var(--red);
        padding: 10px 28px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hook-title {
        font-size: 78px;
        line-height: 1.05;
        color: var(--red);
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        filter: drop-shadow(0 0 18px rgba(255, 59, 48, 0.35));
      }
      .hook-body {
        font-size: 46px;
        line-height: 1.3;
        color: var(--text);
        text-align: center;
        max-width: 820px;
      }
      .hook-line {
        width: 90px;
        height: 3px;
        background: var(--red);
        box-shadow: 0 0 14px rgba(255, 59, 48, 0.55);
      }

      /* ── SCENE CONTENT & MARGINS ── */
      .scene-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 260px 125px 200px 125px;
        gap: 24px;
        text-align: center;
        z-index: 10;
        box-sizing: border-box;
      }

      .badge {
        font-family: "Share Tech Mono", monospace;
        font-size: 26px;
        font-weight: 400;
        font-style: normal;
        color: var(--yellow);
        letter-spacing: 0.13em;
        text-transform: uppercase;
        border: 1px solid rgba(254, 207, 6, 0.45);
        padding: 9px 22px;
        background: rgba(12, 15, 15, 0.85);
        border-radius: 0px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .badge.green {
        color: var(--green);
        border-color: rgba(0, 255, 65, 0.45);
      }
      .badge.red {
        color: var(--red);
        border-color: rgba(255, 59, 48, 0.45);
      }

      .meta-label-mono {
        font-family: "Share Tech Mono", monospace;
        font-size: 24px;
        font-weight: 400;
        font-style: normal;
        color: var(--green);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
      }
      .meta-label-mono.red {
        color: var(--red);
        text-shadow: 0 0 8px rgba(255, 59, 48, 0.4);
      }

      @utility dashed-box {
        width: 100%;
        border: 2px dashed rgba(255, 59, 48, 0.45);
        background-color: rgba(12, 15, 15, 0.9);
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        box-shadow: 0 0 25px rgba(255, 59, 48, 0.08);
        border-radius: 0px;
      }

      @utility progress-bar-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        background-color: rgba(12, 15, 15, 0.9);
        border: 1px solid rgba(254, 207, 6, 0.25);
        box-shadow: 0 0 20px rgba(254, 207, 6, 0.05);
        border-radius: 0px;
      }
      .progress-bar-title {
        font-family: "Share Tech Mono", monospace;
        font-size: 24px;
        color: var(--yellow);
        text-align: left;
        letter-spacing: 0.05em;
      }
      .progress-bar-track {
        width: 100%;
        height: 24px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
      }
      .progress-bar-fill {
        height: 100%;
        width: 100%;
        transform-origin: left center;
      }
      .progress-bar-fill.red {
        background: var(--red);
        box-shadow: 0 0 10px rgba(255, 59, 48, 0.5);
      }
      .progress-bar-fill.green {
        background: var(--green);
        box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
      }
      .progress-bar-label {
        font-family: "Share Tech Mono", monospace;
        font-size: 20px;
        color: #888;
        text-align: right;
      }

      /* ── TERMINAL CRT OUTPUT BOX ── */
      @utility terminal-box {
        width: 100%;
        background-color: rgba(12, 15, 15, 0.95);
        border: 1px solid rgba(0, 255, 65, 0.35);
        padding: 24px;
        font-family: "Share Tech Mono", monospace;
        font-size: 20px;
        text-align: left;
        box-shadow: 0 0 25px rgba(0, 255, 65, 0.08);
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 0px;
      }
      .term-line {
        color: var(--green);
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 8px;
      }
      .term-line.red {
        color: var(--red);
      }

      /* ── CLOSER / CTA ── */
      .closer-wrap {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 125px;
        gap: 40px;
        background: rgba(12, 15, 15, 0.45);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-top: 2px solid rgba(0, 255, 65, 0.18);
        z-index: 5;
      }
      .closer-label {
        font-family: "Share Tech Mono", monospace;
        font-size: 27px;
        font-style: normal;
        color: var(--yellow);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-align: center;
        padding: 10px 28px;
        border: 1px solid rgba(254, 207, 6, 0.35);
        border-radius: 0px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .closer-t1 {
        font-size: 54px;
        line-height: 1.2;
        color: var(--text);
        text-align: center;
      }
      .closer-t2 {
        font-size: 44px;
        line-height: 1.2;
        color: var(--text);
        text-align: center;
      }
      .closer-cta {
        font-size: 64px;
        color: var(--green);
        text-align: center;
        filter: drop-shadow(0 0 22px rgba(0, 255, 65, 0.55));
      }
      .closer-line {
        width: 130px;
        height: 3px;
        background: var(--green);
        box-shadow: 0 0 18px rgba(0, 255, 65, 0.65);
      }

      /* ── SUBTÍTULOS PALABRA POR PALABRA (z=65) ── */
      #captions-container {
        position: absolute;
        bottom: 240px;
        left: 125px;
        right: 125px;
        height: 200px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 12px 18px;
        z-index: 65;
        pointer-events: none;
        white-space: nowrap;
      }
      .caption-word {
        font-family: "Ubuntu", sans-serif;
        font-size: 60px;
        font-weight: 900;
        font-style: italic;
        color: rgba(255, 255, 255, 0.55);
        display: inline-block;
        text-transform: uppercase;
        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9);
        line-height: 1.0;
        letter-spacing: normal;
        transition:
          color 0.08s ease,
          transform 0.08s ease,
          text-shadow 0.08s ease;
        transform-origin: center center;
      }
      .caption-word.current-yellow {
        color: var(--yellow);
        text-shadow:
          0 0 18px rgba(254, 207, 6, 0.85),
          0 4px 12px rgba(0, 0, 0, 0.9);
        transform: scale(1.12);
      }
      .caption-word.current-green {
        color: var(--green);
        text-shadow:
          0 0 18px rgba(0, 255, 65, 0.85),
          0 4px 12px rgba(0, 0, 0, 0.9);
        transform: scale(1.12);
      }
      .caption-word.past {
        color: rgba(226, 226, 226, 0.85);
      }

      /* ── POWER WORDS ── */
      #pw-container {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 60;
        pointer-events: none;
      }
      .pw {
        position: absolute;
        font-size: 68px;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        text-align: center;
        padding: 18px 44px;
        background: rgba(10, 13, 13, 0.93);
        border: 2px solid;
        opacity: 0;
        visibility: hidden;
        transform: scale(0.85);
        border-radius: 0px;
      }
      .pw.yellow {
        color: var(--yellow);
        border-color: rgba(254, 207, 6, 0.65);
        box-shadow: 0 0 40px rgba(254, 207, 6, 0.22);
      }
      .pw.green {
        color: var(--green);
        border-color: rgba(0, 255, 65, 0.65);
        box-shadow: 0 0 40px rgba(0, 255, 65, 0.22);
      }
      .pw.red {
        color: var(--red);
        border-color: rgba(255, 59, 48, 0.65);
        box-shadow: 0 0 40px rgba(255, 59, 48, 0.22);
      }

      /* ── SOCIAL PROOFS ── */
      #sp-container {
        position: absolute;
        top: 220px;
        left: 125px;
        right: 125px;
        z-index: 55;
        pointer-events: none;
      }
      .sp {
        font-family: "Share Tech Mono", monospace;
        font-size: 24px;
        font-weight: 400;
        font-style: normal;
        color: var(--green);
        padding: 13px 22px;
        background: rgba(0, 255, 65, 0.08);
        border-left: 3px solid var(--green);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        width: 100%;
        transform: translateX(-30px);
      }

      /* ── LIGHTNING OVERLAY ── */
      .lightning-overlay {
        position: absolute;
        inset: 0;
        z-index: 92;
        pointer-events: none;
        opacity: 0;
      }
      .lightning-svg {
        width: 100%;
        height: 100%;
      }

      /* ── TRANSITIONS OVERLAY ELEMENTS ── */
      .transition-overlay {
        position: absolute;
        inset: 0;
        z-index: 80;
        pointer-events: none;
        opacity: 0;
        background: var(--bg);
      }

      /* Wipe */
      #t-wipe {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -300px;
        width: 250px;
        background: linear-gradient(90deg, transparent, rgba(0,255,65,0.8) 50%, var(--green) 90%, transparent);
        box-shadow: 0 0 60px rgba(0,255,65,0.7);
        z-index: 95;
        pointer-events: none;
        opacity: 0;
      }

      /* Code Explosion */
      #t-code-explosion {
        position: absolute;
        inset: 0;
        background: var(--bg-dim);
        display: none;
        opacity: 0;
        z-index: 90;
        pointer-events: none;
        font-family: "Share Tech Mono", monospace;
        font-size: 32px;
        color: var(--green);
        overflow: hidden;
        padding: 50px;
        box-sizing: border-box;
      }
      .code-matrix-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 15px;
        width: 100%;
        height: 100%;
      }

      /* Glitch Scanline Bar */
      #t-glitch-bar {
        position: absolute;
        left: 0;
        right: 0;
        height: 140px;
        background: rgba(254, 207, 6, 0.4);
        border-top: 4px solid var(--yellow);
        border-bottom: 4px solid var(--yellow);
        box-shadow: 0 0 40px rgba(254,207,6,0.6);
        z-index: 90;
        pointer-events: none;
        opacity: 0;
        top: -200px;
      }

      /* Binary Noise */
      #t-noise {
        position: absolute;
        inset: 0;
        z-index: 90;
        pointer-events: none;
        opacity: 0;
        background: black;
      }
      #t-noise-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
    </style>
  </head>
  <body>
    <div
      id="sha256-v07"
      data-composition-id="sha256-v07"
      data-width="1080"
      data-height="1920"
      data-start="0"
      data-duration="64.0"
    >
      <!-- ── PERSISTENT LOGO ── -->
      <div class="sha-logo">SHA256.US · LAB FORENSE</div>

      <!-- ── SCANLINE GLOBAL ── -->
      <div class="scanline-global"></div>

      <!-- ── FORENSIC SIMULATION CANVAS ── -->
      <canvas id="forensic-canvas"></canvas>

      <!-- ── LIGHTNING OVERLAY ── -->
      <div id="lightning" class="lightning-overlay" data-layout-ignore>
        <svg class="lightning-svg" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
          <polyline id="bolt-1" points="540,0 480,320 560,380 460,700 520,780 440,1100 500,1200 420,1920"
            stroke="#00FF41" stroke-width="4" fill="none"
            stroke-dasharray="2000" stroke-dashoffset="2000" opacity="0.9"/>
          <polyline id="bolt-2" points="800,0 760,280 830,350 740,680 810,760 730,1080 780,1200 700,1920"
            stroke="#FECF06" stroke-width="3" fill="none"
            stroke-dasharray="2000" stroke-dashoffset="2000" opacity="0.6"/>
        </svg>
      </div>

      <!-- ── TRANSITION OVERLAYS ── -->
      <div id="tr-overlay" class="transition-overlay" data-layout-ignore></div>
      <div id="t-wipe"></div>
      <div id="t-code-explosion">
        <div class="code-matrix-grid" id="t-code-grid"></div>
      </div>
      <div id="t-glitch-bar"></div>
      <div id="t-noise">
        <canvas id="t-noise-canvas"></canvas>
      </div>

      <!-- ── SCENE 1 — HOOK (0–8.0s) ── -->
      <div id="c1" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c1-bg" src="images/clip-1.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="hook-wrap">
          <div id="c1-sym" class="hook-sym">⚠</div>
          <div id="c1-warn" class="hook-warn-label">
            <span class="material-icons" style="font-size:36px;color:#ff3b30;">warning</span>
            Abuso de Confianza
          </div>
          <div id="c1-title" class="hook-title">INTIMIDAD VIOLADA</div>
          <div id="c1-line" class="hook-line"></div>
        </div>
      </div>

      <!-- ── SCENE 2 — Acceso Ilegal (8.0–16.0s) ── -->
      <div id="c2" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c2-bg" src="images/clip-2.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c2-dashed-box" class="dashed-box" style="border-color: var(--red);">
            <div id="c2-badge" class="badge red">
              <span class="material-icons" style="font-size:32px;color:#ff3b30;">error</span>
              Acceso Ilegal
            </div>
            <div id="c2-label" class="meta-label-mono red">ACCESO NO AUTORIZADO A CORREO</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 3 — Memoria RAM (16.0–24.0s) ── -->
      <div id="c3" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c3-bg" src="images/clip-3.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c3-badge" class="badge">
            <span class="material-icons" style="font-size:32px;color:#fecf06;">policy</span>
            Memoria RAM
          </div>
          <div id="c3-terminal" class="terminal-box" style="border-color: var(--yellow);">
            <div class="term-line" id="c3-term1">&gt; ram-cli capture --target suspect-pc</div>
            <div class="term-line" id="c3-term2">&gt; MEMORY DUMP: EXTRACTING VOLATILE DATA...</div>
            <div class="term-line" id="c3-term3">&gt; STATUS: RAM DUMP COMPLETE (SUCCESS)</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 4 — Evidencia Volátil (24.0–32.0s) ── -->
      <div id="c4" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c4-bg" src="images/clip-4.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c4-badge" class="badge green">
            <span class="material-icons" style="font-size:32px;color:#00ff41;">lock</span>
            Evidencia Volátil
          </div>
          <div id="c4-progress-container" class="progress-bar-container">
            <div class="progress-bar-title">EXTRAYENDO CONTRASEÑA EN TEXTO PLANO</div>
            <div class="progress-bar-track">
              <div id="c4-bar" class="progress-bar-fill green"></div>
            </div>
            <div class="progress-bar-label" id="c4-hash-label">CREDENCIALES DE CORREO IDENTIFICADAS</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 5 — Copia Forense (32.0–40.0s) ── -->
      <div id="c5" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c5-bg" src="images/clip-5.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c5-badge" class="badge green">
            <span class="material-icons" style="font-size:32px;color:#00ff41;">analytics</span>
            Copia Forense
          </div>
          <div id="c5-progress-container" class="progress-bar-container">
            <div class="progress-bar-title">COPIA FORENSE BIT A BIT DE PENDRIVE</div>
            <div class="progress-bar-track">
              <div id="c5-bar" class="progress-bar-fill green"></div>
            </div>
            <div class="progress-bar-label" id="c5-hash-label2">INTEGRIDAD HASH SHA-256 ASEGURADA</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 6 — Esteganografía (40.0–48.0s) ── -->
      <div id="c6" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c6-bg" src="images/clip-6.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c6-badge" class="badge red">
            <span class="material-icons" style="font-size:32px;color:#ff3b30;">fingerprint</span>
            Esteganografía
          </div>
          <div id="c6-dashed-box" class="dashed-box" style="border-color: var(--red);">
            <div id="c6-label" class="meta-label-mono red">OCULTACIÓN DETECTADA (ESTEGANOGRAFÍA)</div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:20px;color:#ff3b30;">ARCHIVOS DE IMAGEN OCULTOS EN README.LOG</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 7 — Condena Penal (48.0–56.0s) ── -->
      <div id="c7" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c7-bg" src="images/clip-7.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c7-badge" class="badge green">
            <span class="material-icons" style="font-size:32px;color:#00ff41;">gavel</span>
            Condena Penal
          </div>
          <div id="c7-terminal" class="terminal-box" style="border-color: var(--green);">
            <div class="term-line" id="c7-term1">&gt; SENTENCIA: CULPABLE DE ESPIONAJE INFORMÁTICO</div>
            <div class="term-line" id="c7-term2">&gt; MEDIDA: INTROMISIÓN Y REVELACIÓN DE SECRETOS</div>
            <div class="term-line" id="c7-term3">&gt; PENA: CONDENA DE PRISIÓN SEGÚN CÓDIGO PENAL</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 8 — CLOSER / CTA (56.0–64.0s) ── -->
      <div id="c8" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c8-bg" src="images/clip-8.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="closer-wrap">
          <div id="c8-label" class="closer-label">
            <span class="material-icons" style="font-size:32px;color:#00ff41;">share</span>
            Caso Forense · SHA256.US
          </div>
          <img id="outro-logo" class="outro-logo" src="images/logo-outro.png" />
          <p id="closer-cta" class="closer-cta">¡Guarda este Video!</p>
          <div id="c8-line" class="closer-line"></div>
        </div>
      </div>

      <!-- ── SUBTÍTULOS PALABRA POR PALABRA ── -->
      <div id="captions-container"></div>

      <!-- ── POWER WORDS ── -->
      <div id="pw-container">
        <div id="pw-estafa" class="pw red">FOTOS ROBADAS</div>
        <div id="pw-forensics" class="pw yellow">MEMORIA RAM</div>
        <div id="pw-condena" class="pw green">OCULTACIÓN DETECTADA</div>
      </div>

      <!-- ── SOCIAL PROOFS ── -->
      <div id="sp-container">
        <div id="sp1" class="sp">EL ESPIONAJE INFORMÁTICO ES UN DELITO PENAL</div>
        <div id="sp2" class="sp">LA MEMORIA RAM ALMACENA CLAVES EN TEXTO PLANO</div>
        <div id="sp3" class="sp">LA ESTEGANOGRAFÍA NO BURLA AL ANÁLISIS FORENSE</div>
      </div>

      <!-- ── AUDIO AUDIO TRACKS ── -->
      <!-- Background Music (Track 1) - Starting from offset 90.0s for varied drop rhythm -->
      <audio
        id="bg-music"
        class="clip"
        data-start="0.0"
        data-duration="64.0"
        data-track-index="1"
        data-volume="0.14"
        data-media-start="90.0"
        src="audio/bg-music.mp3"
        crossorigin="anonymous"
      ></audio>

      <!-- Audio Locución Clips (Track 2) -->
${audioTags}
      <!-- Transition Glitch Clips (Track 3) - Consistent Computerized Sound -->
      <audio id="sfx-g1" class="clip" data-start="7.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>
      <audio id="sfx-g2" class="clip" data-start="15.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>
      <audio id="sfx-g3" class="clip" data-start="23.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>
      <audio id="sfx-g4" class="clip" data-start="31.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>
      <audio id="sfx-g5" class="clip" data-start="39.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>
      <audio id="sfx-g6" class="clip" data-start="47.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>
      <audio id="sfx-g7" class="clip" data-start="55.8" data-duration="0.5" data-track-index="3" data-volume="0.5" src="audio/sfx-glitch.mp3" crossorigin="anonymous"></audio>

      <!-- Lightning Wave SFX clips (Track 4) -->
      <audio id="sfx-l1" class="clip" data-start="7.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>
      <audio id="sfx-l2" class="clip" data-start="15.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>
      <audio id="sfx-l3" class="clip" data-start="23.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>
      <audio id="sfx-l4" class="clip" data-start="31.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>
      <audio id="sfx-l5" class="clip" data-start="39.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>
      <audio id="sfx-l6" class="clip" data-start="47.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>
      <audio id="sfx-l7" class="clip" data-start="55.7" data-duration="0.6" data-track-index="4" data-volume="0.25" src="audio/lightning.wav" crossorigin="anonymous"></audio>

    </div><!-- /data-composition-id -->

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <script>
      "use strict";

      // Deterministic PRNG LCG
      var noiseSeed = 67890;
      function deterministicRandom() {
        noiseSeed = (noiseSeed * 9301 + 49297) % 233280;
        return noiseSeed / 233280;
      }

      window.__timelines = window.__timelines || {};
      var tl = gsap.timeline({ paused: true });

      var CLIPS_DATA = [
        { id: "c1", start: 0.0, duration: 8.0, text: "${CLIPS[0].text}" },
        { id: "c2", start: 8.0, duration: 8.0, text: "${CLIPS[1].text}" },
        { id: "c3", start: 16.0, duration: 8.0, text: "${CLIPS[2].text}" },
        { id: "c4", start: 24.0, duration: 8.0, text: "${CLIPS[3].text}" },
        { id: "c5", start: 32.0, duration: 8.0, text: "${CLIPS[4].text}" },
        { id: "c6", start: 40.0, duration: 8.0, text: "${CLIPS[5].text}" },
        { id: "c7", start: 48.0, duration: 8.0, text: "${CLIPS[6].text}" },
        { id: "c8", start: 56.0, duration: 8.0, text: "${CLIPS[7].text}" }
      ];

      /* ─────────────────────────────────────────────────────
         TRANSITION OVERLAYS PREPARATION
         ───────────────────────────────────────────────────── */
      (function() {
        var grid = document.getElementById("t-code-grid");
        for (var i = 0; i < 48; i++) {
          var el = document.createElement("div");
          el.textContent = deterministicRandom() > 0.5 ? "1" : "0";
          grid.appendChild(el);
        }

        var noiseCanvas = document.getElementById("t-noise-canvas");
        var nCtx = noiseCanvas.getContext("2d");
        noiseCanvas.width = 320;
        noiseCanvas.height = 568;
        
        function drawNoise() {
          var imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
          var data = imgData.data;
          for (var i = 0; i < data.length; i += 4) {
            var val = Math.floor(deterministicRandom() * 255);
            data[i] = val;
            data[i+1] = val;
            data[i+2] = val;
            data[i+3] = 255;
          }
          nCtx.putImageData(imgData, 0, 0);
        }

        // Noise draw tick linked to time (Varying noise triggers)
        tl.to({}, {
          duration: 64.0,
          onUpdate: function() {
            var time = tl.time();
            // Binary noise transitions
            if (time >= 15.7 && time <= 16.2) {
              drawNoise();
            }
          }
        }, 0);
      })();

      /* ─────────────────────────────────────────────────────
         DETERMINISTIC FORENSIC ANALYSIS SIMULATION (Canvas)
         ───────────────────────────────────────────────────── */
      (function () {
        var canvas = document.getElementById("forensic-canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = 720;
        canvas.height = 720;

        function seededRandom(s) {
          var x = Math.sin(s) * 10000;
          return x - Math.floor(x);
        }

        function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height - radius);
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          ctx.lineTo(x + radius, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
          ctx.closePath();
          if (fill) ctx.fill();
          if (stroke) ctx.stroke();
        }

        function drawLaptop(time, alertColor, cx, cy) {
          var px = cx - 180, py = cy - 120, pw = 360, ph = 210, pr = 8;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = alertColor;
          ctx.lineWidth = 4;
          // Draw screen frame
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          // Draw laptop base
          ctx.beginPath();
          ctx.moveTo(cx - 200, cy + 90);
          ctx.lineTo(cx + 200, cy + 90);
          ctx.lineTo(cx + 220, cy + 115);
          ctx.lineTo(cx - 220, cy + 115);
          ctx.closePath();
          ctx.fillStyle = "rgba(20, 22, 22, 0.95)";
          ctx.strokeStyle = alertColor;
          ctx.lineWidth = 3;
          ctx.fill();
          ctx.stroke();

          // Trackpad
          ctx.fillStyle = "rgba(12, 15, 15, 0.8)";
          ctx.fillRect(cx - 35, cy + 94, 70, 16);
          ctx.strokeRect(cx - 35, cy + 94, 70, 16);

          // Screen contents
          ctx.font = "normal 16px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(255, 59, 48, 0.85)";
          ctx.fillText("SYS: PRIVACY ALERT", px + 30, py + 40);
          
          // Draw Warning Symbol
          ctx.font = "70px sans-serif";
          ctx.fillStyle = "rgba(255, 59, 48, 0.9)";
          ctx.fillText("⚠️", cx - 35, cy - 10);
          
          ctx.font = "normal 13px 'Share Tech Mono'";
          ctx.fillStyle = "#e2e2e2";
          ctx.fillText("LAPTOP UNDER ATTACK", px + 40, cy + 50);
          ctx.fillText("STATUS: EXFILTRATION", px + 40, cy + 75);
        }

        function drawServer(time, alertColor, cx, cy) {
          var px = cx - 130, py = cy - 220, pw = 260, ph = 440;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = alertColor;
          ctx.lineWidth = 4;
          ctx.fillRect(px, py, pw, ph);
          ctx.strokeRect(px, py, pw, ph);

          // Server slots
          ctx.strokeStyle = "rgba(0, 255, 65, 0.15)";
          ctx.lineWidth = 1.5;
          var numSlots = 4;
          var slotHeight = ph / numSlots;
          for (var i = 0; i < numSlots; i++) {
            var spy = py + i * slotHeight;
            ctx.strokeRect(px + 10, spy + 10, pw - 20, slotHeight - 20);
            
            // Ventilation lines
            ctx.beginPath();
            for (var j = 0; j < 8; j++) {
              var lx = px + 40 + j * 12;
              ctx.moveTo(lx, spy + slotHeight / 2 - 8);
              ctx.lineTo(lx, spy + slotHeight / 2 + 8);
            }
            ctx.stroke();

            // LEDs
            var flashRed = Math.floor(time * 3 + i) % 2 === 0;
            ctx.fillStyle = flashRed ? "rgba(255, 59, 48, 0.85)" : "rgba(100, 10, 10, 0.5)";
            ctx.beginPath();
            ctx.arc(px + 210, spy + slotHeight / 2, 5, 0, Math.PI * 2);
            ctx.fill();

            var flashGreen = Math.floor(time * 2 + i) % 3 === 0;
            ctx.fillStyle = flashGreen ? "rgba(0, 255, 65, 0.85)" : "rgba(0, 80, 20, 0.5)";
            ctx.beginPath();
            ctx.arc(px + 230, spy + slotHeight / 2, 5, 0, Math.PI * 2);
            ctx.fill();
          }

          // Central Overlay info
          ctx.font = "normal 13px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(255, 59, 48, 0.9)";
          ctx.fillText("ALERT: UNLAWFUL ACCESS", px + 25, py + 30);
          
          ctx.font = "60px sans-serif";
          ctx.fillText("📁", cx - 35, cy - 25);

          ctx.font = "bold 12px 'Share Tech Mono'";
          ctx.fillStyle = "#ff3b30";
          ctx.fillText("ACCESSING USER MAIL...", px + 30, cy + 85);
          ctx.fillText("EXFILTRATION RECORDED", px + 35, cy + 110);
        }

        function drawRAM(time, alertColor, cx, cy) {
          var px = cx - 220, py = cy - 110, pw = 440, ph = 220, pr = 6;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = "rgba(254, 207, 6, 0.5)"; // ram color theme yellow
          ctx.lineWidth = 4;
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          // Golden connector pins at bottom edge
          ctx.strokeStyle = "rgba(254, 207, 6, 0.8)";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          for (var x = px + 20; x <= px + pw - 20; x += 10) {
            ctx.moveTo(x, py + ph - 16);
            ctx.lineTo(x, py + ph - 4);
          }
          ctx.stroke();

          // RAM Chips (4 rectangles)
          ctx.fillStyle = "rgba(20, 22, 22, 0.95)";
          ctx.strokeStyle = "rgba(254, 207, 6, 0.35)";
          ctx.lineWidth = 1.5;
          var chipWidth = 64;
          var chipHeight = 80;
          var startX = cx - 180;
          for (var i = 0; i < 4; i++) {
            var cxpos = startX + i * 95;
            ctx.fillRect(cxpos, py + 25, chipWidth, chipHeight);
            ctx.strokeRect(cxpos, py + 25, chipWidth, chipHeight);
            
            // Chip internal circuits
            ctx.strokeStyle = "rgba(254, 207, 6, 0.18)";
            ctx.beginPath();
            ctx.moveTo(cxpos + 10, py + 25);
            ctx.lineTo(cxpos + 10, py + 25 + chipHeight);
            ctx.moveTo(cxpos + chipWidth - 10, py + 25);
            ctx.lineTo(cxpos + chipWidth - 10, py + 25 + chipHeight);
            ctx.stroke();
          }

          // Texts and progress bar
          ctx.font = "normal 16px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(254, 207, 6, 0.9)";
          ctx.fillText("RAM DUMP IN PROGRESS", px + 35, py + 40);

          // Progress bar
          var percent = Math.min(100, Math.floor(((time - 16.0) / 8.0) * 100));
          ctx.strokeStyle = "rgba(0, 255, 65, 0.5)";
          ctx.strokeRect(px + 40, cy + 30, 360, 24);
          ctx.fillStyle = "rgba(0, 255, 65, 0.3)";
          ctx.fillRect(px + 42, cy + 32, 356 * (percent / 100), 20);

          ctx.font = "normal 13px 'Share Tech Mono'";
          ctx.fillStyle = "#e2e2e2";
          ctx.fillText("VOLATILE DUMPING", px + 45, cy + 80);
          ctx.fillText("PROGRESS: " + percent + "%", px + 260, cy + 80);
        }

        function drawTerminal(time, alertColor, cx, cy) {
          var px = cx - 180, py = cy - 200, pw = 360, ph = 400;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = "rgba(0, 255, 65, 0.5)"; // green console
          ctx.lineWidth = 4;
          ctx.fillRect(px, py, pw, ph);
          ctx.strokeRect(px, py, pw, ph);

          // Title bar
          ctx.fillStyle = "rgba(0, 255, 65, 0.12)";
          ctx.fillRect(px, py, pw, 30);
          
          ctx.font = "normal 12px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(0, 255, 65, 0.85)";
          ctx.fillText("TERMINAL://FORENSIC_DECRYPT", px + 15, py + 20);

          // Window buttons
          ctx.fillStyle = "rgba(0, 255, 65, 0.4)";
          ctx.beginPath();
          ctx.arc(px + pw - 50, py + 15, 4, 0, Math.PI * 2);
          ctx.arc(px + pw - 35, py + 15, 4, 0, Math.PI * 2);
          ctx.arc(px + pw - 20, py + 15, 4, 0, Math.PI * 2);
          ctx.fill();

          // Contents
          ctx.font = "normal 14px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(0, 255, 65, 0.9)";
          ctx.fillText("DECRYPTED PASSWORD", px + 35, py + 70);

          ctx.font = "normal 70px sans-serif";
          ctx.fillStyle = "rgba(0, 255, 65, 0.75)";
          ctx.fillText("🔑", cx - 35, cy - 10);

          ctx.font = "normal 12px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(0, 255, 65, 0.85)";
          ctx.fillText("KEYFOUND: aMpaRo_2026!", px + 35, cy + 90);
          ctx.fillText("CORRELATION ID: VERIFIED", px + 35, cy + 115);
        }

        function drawHDD(time, alertColor, cx, cy) {
          var px = cx - 180, py = cy - 200, pw = 360, ph = 400, pr = 12;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = "rgba(0, 255, 65, 0.5)";
          ctx.lineWidth = 4;
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          // Platter disk circle
          ctx.strokeStyle = "rgba(0, 255, 65, 0.15)";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(cx, cy - 35, 105, 0, Math.PI * 2);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(cx, cy - 35, 30, 0, Math.PI * 2);
          ctx.stroke();

          // Platter spin tick indicator
          var angle = time * 4.0;
          ctx.strokeStyle = "rgba(0, 255, 65, 0.4)";
          ctx.beginPath();
          ctx.moveTo(cx, cy - 35);
          ctx.lineTo(cx + Math.cos(angle) * 105, cy - 35 + Math.sin(angle) * 105);
          ctx.stroke();

          // Reader arm/head
          ctx.strokeStyle = "rgba(254, 207, 6, 0.7)";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(cx + 90, cy + 50);
          var headAngle = cy - 35 + Math.sin(time * 2) * 40;
          ctx.lineTo(cx + 20, headAngle);
          ctx.stroke();

          // Texts
          ctx.font = "normal 14px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(0, 255, 65, 0.9)";
          ctx.fillText("FORENSIC COPY HASH", px + 30, py + 45);

          ctx.font = "normal 12px 'Share Tech Mono'";
          ctx.fillStyle = "#e2e2e2";
          ctx.fillText("DD bs=4k conv=noerror", px + 30, cy + 90);
          ctx.fillText("STATUS: VERIFIED COPY", px + 30, cy + 115);
          
          var flash = Math.floor(time * 4) % 2 === 0;
          ctx.font = "bold 13px 'Share Tech Mono'";
          ctx.fillStyle = flash ? "rgba(0, 255, 65, 0.9)" : "rgba(0, 255, 65, 0.2)";
          ctx.fillText(">>> COPY 100% OK <<<", px + 30, cy + 145);
          ctx.fillText("SHA-256 HASH VERIFIED", px + 30, cy + 165);
        }

        function drawStego(time, alertColor, cx, cy) {
          var px = cx - 180, py = cy - 220, pw = 360, ph = 440, pr = 8;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = alertColor;
          ctx.lineWidth = 4;
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          // Nodes tree (canvas stego illustration)
          ctx.font = "normal 16px 'Share Tech Mono'";
          ctx.fillStyle = "rgba(255, 59, 48, 0.95)";
          ctx.fillText("STEGO PAYLOAD DETECT", px + 25, py + 45);

          // Stego files connection lines
          ctx.strokeStyle = "rgba(255, 59, 48, 0.3)";
          ctx.lineWidth = 1.5;
          for (var i = 0; i < 6; i++) {
            var x1 = px + 40 + seededRandom(i) * 280;
            var y1 = cy - 50 + seededRandom(i+10) * 160;
            var x2 = px + 40 + seededRandom(i+2) * 280;
            var y2 = cy - 50 + seededRandom(i+12) * 160;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            ctx.fillStyle = (i === 3 && Math.floor(time * 6) % 2 === 0) ? "#ff3b30" : "rgba(255, 59, 48, 0.7)";
            ctx.beginPath();
            ctx.arc(x1, y1, i === 3 ? 9 : 6, 0, Math.PI*2);
            ctx.fill();
            
            if (i === 3) {
              ctx.strokeStyle = "#ff3b30";
              ctx.beginPath();
              ctx.arc(x1, y1, 15, 0, Math.PI*2);
              ctx.stroke();
            }
          }

          ctx.font = "bold 11px 'Share Tech Mono'";
          ctx.fillStyle = "#ff3b30";
          ctx.fillText("README.LOG -> HIDDEN_IMG.PNG", px + 30, cy + 155);
        }

        function drawJustice(time, alertColor, cx, cy) {
          var px = cx - 180, py = cy - 200, pw = 360, ph = 400, pr = 6;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = alertColor;
          ctx.lineWidth = 4;
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          ctx.font = "normal 16px 'Share Tech Mono'";
          ctx.fillStyle = alertColor;
          ctx.fillText("VERDICT: CULPABLE", px + 35, py + 45);

          // Draw balance scale of justice
          ctx.strokeStyle = "rgba(0, 255, 65, 0.75)";
          ctx.lineWidth = 3.5;
          
          // Sway of scale
          var sway = Math.sin(time * 2.5) * 6; // angle in degrees

          ctx.save();
          ctx.translate(cx, cy - 30);
          
          // Support stand
          ctx.beginPath();
          ctx.moveTo(0, -60);
          ctx.lineTo(0, 60);
          ctx.moveTo(-40, 60);
          ctx.lineTo(40, 60);
          ctx.stroke();

          // Cross beam
          ctx.rotate(sway * Math.PI / 180);
          ctx.beginPath();
          ctx.moveTo(-70, -40);
          ctx.lineTo(70, -40);
          ctx.stroke();

          // Left tray strings & scale
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(-70, -40);
          ctx.lineTo(-90, 15);
          ctx.moveTo(-70, -40);
          ctx.lineTo(-50, 15);
          ctx.moveTo(-95, 15);
          ctx.lineTo(-45, 15);
          ctx.stroke();

          // Right tray strings & scale
          ctx.beginPath();
          ctx.moveTo(70, -40);
          ctx.lineTo(50, 15);
          ctx.moveTo(70, -40);
          ctx.lineTo(90, 15);
          ctx.moveTo(45, 15);
          ctx.lineTo(95, 15);
          ctx.stroke();

          ctx.restore();

          ctx.font = "normal 12px 'Share Tech Mono'";
          ctx.fillStyle = "#e2e2e2";
          ctx.fillText("CONDENA ESPIONAJE INFORM.", px + 25, cy + 90);
          ctx.fillStyle = "rgba(0, 255, 65, 0.9)";
          ctx.fillText("APLICANDO LEY PENAL", px + 25, cy + 115);
          ctx.fillText("VULNERACIÓN DE INTIMIDAD", px + 25, cy + 135);
        }

        function drawShield(time, alertColor, cx, cy) {
          var px = cx - 170, py = cy - 200, pw = 340, ph = 400, pr = 12;
          ctx.fillStyle = "rgba(12, 15, 15, 0.94)";
          ctx.strokeStyle = alertColor;
          ctx.lineWidth = 4;
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          ctx.font = "normal 16px 'Share Tech Mono'";
          ctx.fillStyle = alertColor;
          ctx.fillText("PRIVACY PROTECTED", px + 35, py + 45);

          // Draw Security Shield
          ctx.save();
          ctx.translate(cx, cy - 25);
          
          var pulse = 1.0 + 0.05 * Math.sin(time * 3);
          ctx.scale(pulse, pulse);
          
          ctx.lineWidth = 3.5;
          ctx.strokeStyle = "rgba(0, 255, 65, 0.8)";
          ctx.fillStyle = "rgba(0, 255, 65, 0.08)";
          
          ctx.beginPath();
          ctx.moveTo(0, -65);
          ctx.bezierCurveTo(35, -75, 55, -75, 65, -55);
          ctx.quadraticCurveTo(65, 0, 0, 55);
          ctx.quadraticCurveTo(-65, 0, -65, -55);
          ctx.bezierCurveTo(-55, -75, -35, -75, 0, -65);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Padlock inside shield
          ctx.strokeStyle = "rgba(0, 255, 65, 0.85)";
          ctx.fillStyle = "rgba(0, 255, 65, 0.15)";
          ctx.fillRect(-20, -10, 40, 30);
          ctx.strokeRect(-20, -10, 40, 30);
          
          ctx.beginPath();
          ctx.arc(0, -10, 13, Math.PI, 0);
          ctx.stroke();

          ctx.restore();

          ctx.font = "normal 12px 'Share Tech Mono'";
          ctx.fillStyle = "#e2e2e2";
          ctx.fillText("DATO FORENSE INMUTABLE", px + 35, cy + 90);
          ctx.fillText("EL BORRADO NO ES SUFICIENTE", px + 25, cy + 115);
        }

        function drawForensicSimulation(time) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Geometry parameters
          var cx = canvas.width / 2;
          var cy = canvas.height / 2;
          var scale = 1.0;

          // Scale zoom pulsing
          var scalePulse = 1.0 + 0.012 * Math.sin(time * 1.5);
          ctx.save();
          ctx.translate(cx, cy);
          ctx.scale(scalePulse, scalePulse);
          ctx.translate(-cx, -cy);

          // Draw futuristic background grid circular target
          ctx.strokeStyle = "rgba(0, 255, 65, 0.1)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, 320, 0, Math.PI * 2);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(cx, cy, 220, 0, Math.PI * 2);
          ctx.stroke();

          // crosshair lines
          ctx.beginPath();
          ctx.moveTo(cx - 340, cy); ctx.lineTo(cx - 240, cy);
          ctx.moveTo(cx + 240, cy); ctx.lineTo(cx + 340, cy);
          ctx.moveTo(cx, cy - 340); ctx.lineTo(cx, cy - 240);
          ctx.moveTo(cx, cy + 240); ctx.lineTo(cx, cy + 340);
          ctx.stroke();

          // Select alert status border color
          var alertColor = "rgba(0, 255, 65, 0.35)"; // green default
          if (time >= 0.0 && time < 16.0) {
            alertColor = "rgba(255, 59, 48, 0.5)"; // alert state red
          } else if (time >= 40.0 && time < 48.0) {
            alertColor = "rgba(255, 59, 48, 0.5)"; // alert state red
          } else if (time >= 48.0 && time < 56.0) {
            alertColor = "rgba(0, 255, 65, 0.75)"; // verified state green
          }

          // Visual Elements database router
          if (time < 8.0) {
            // Clip 1: Laptop under exfiltration
            drawLaptop(time, alertColor, cx, cy);
          } else if (time >= 8.0 && time < 16.0) {
            // Clip 2: Server unauthorized access
            drawServer(time, alertColor, cx, cy);
          } else if (time >= 16.0 && time < 24.0) {
            // Clip 3: RAM Chip voladizo
            drawRAM(time, alertColor, cx, cy);
          } else if (time >= 24.0 && time < 32.0) {
            // Clip 4: Terminal console decrypting keys
            drawTerminal(time, alertColor, cx, cy);
          } else if (time >= 32.0 && time < 40.0) {
            // Clip 5: Hard drive platter forensic image (DD copy)
            drawHDD(time, alertColor, cx, cy);
          } else if (time >= 40.0 && time < 48.0) {
            // Clip 6: Steganography hidden payloads
            drawStego(time, alertColor, cx, cy);
          } else if (time >= 48.0 && time < 56.0) {
            // Clip 7: Balance scales verdict
            drawJustice(time, alertColor, cx, cy);
          } else {
            // Clip 8: Security Shield protection
            drawShield(time, alertColor, cx, cy);
          }

          ctx.restore();
        }

        // Hook simulation update into timeline
        tl.to({}, {
          duration: 64.0,
          onUpdate: function() {
            drawForensicSimulation(tl.time());
          }
        }, 0);
      })();

      /* ─────────────────────────────────────────────────────
         SUBTITLE TIMING SCRIPT
         ───────────────────────────────────────────────────── */
      (function() {
        var currentClipIndex = -1;
        var currentWordIndex = -1;
        var currentChunkIndex = -1;

        function updateCaptions(time) {
          var activeClipIndex = -1;
          for (var i = 0; i < CLIPS_DATA.length; i++) {
            var clip = CLIPS_DATA[i];
            if (time >= clip.start && time < clip.start + clip.duration) {
              activeClipIndex = i;
              break;
            }
          }

          if (activeClipIndex !== currentClipIndex) {
            currentClipIndex = activeClipIndex;
            currentWordIndex = -1;
            currentChunkIndex = -1;
            var container = document.getElementById("captions-container");
            container.innerHTML = "";
          }

          if (currentClipIndex !== -1) {
            var clip = CLIPS_DATA[currentClipIndex];
            var words = clip.text.split(" ");
            var numWords = words.length;
            var wordDuration = clip.duration / numWords;
            var relativeTime = time - clip.start;
            var activeWordIndex = Math.floor(relativeTime / wordDuration);
            if (activeWordIndex >= numWords) activeWordIndex = numWords - 1;

            // Updated to maximum 2 words per line pagination chunk size
            var chunkIndex = Math.floor(activeWordIndex / 2);
            var container = document.getElementById("captions-container");

            if (chunkIndex !== currentChunkIndex) {
              currentChunkIndex = chunkIndex;
              container.innerHTML = "";
              
              var startWordIdx = chunkIndex * 2;
              var endWordIdx = Math.min(startWordIdx + 2, numWords);
              
              for (var wi = startWordIdx; wi < endWordIdx; wi++) {
                var span = document.createElement("span");
                span.className = "caption-word";
                span.id = "w-" + wi;
                span.textContent = words[wi].toUpperCase();
                container.appendChild(span);
              }
              currentWordIndex = -1;
            }

            if (activeWordIndex !== currentWordIndex) {
              currentWordIndex = activeWordIndex;
              var spans = container.querySelectorAll(".caption-word");
              spans.forEach(function (span) {
                var wi = parseInt(span.id.replace("w-", ""), 10);
                if (wi === activeWordIndex) {
                  if (activeWordIndex % 2 === 0) {
                    span.className = "caption-word current-yellow";
                  } else {
                    span.className = "caption-word current-green";
                  }
                } else if (wi < activeWordIndex) {
                  span.className = "caption-word past";
                } else {
                  span.className = "caption-word";
                }
              });
            }
          }
        }

        tl.to(
          {},
          {
            duration: 64.0,
            onUpdate: function () {
              updateCaptions(tl.time());
            },
          },
          0,
        );
      })();

      /* ─────────────────────────────────────────────────────
         7 UNIQUE SHUFFLED SCENE TRANSITIONS (VARYING IN EACH VIDEO)
         ───────────────────────────────────────────────────── */

      // Transition 1 (c1 -> c2 at 8.0s): Zoom Through (white scale-flash)
      tl.fromTo("#tr-overlay", { opacity: 0, scale: 0.95 }, { opacity: 0.9, scale: 1.05, duration: 0.15, ease: "power4.in" }, 7.85);
      tl.to("#tr-overlay", { opacity: 0, scale: 1.0, duration: 0.2, ease: "power2.out" }, 8.0);

      // Transition 2 (c2 -> c3 at 16.0s): Binary Noise
      tl.set("#t-noise", { opacity: 0.95 }, 15.85);
      tl.to("#t-noise", { opacity: 0, duration: 0.2, ease: "power2.in" }, 16.0);

      // Transition 3 (c3 -> c4 at 24.0s): Glitch + Chromatic Shift
      tl.to("#sha256-v07", {
        filter: "drop-shadow(10px 0px 0px #ff0000) drop-shadow(-10px 0px 0px #0000ff) skewX(8) hue-rotate(90deg)",
        duration: 0.15,
        ease: "none"
      }, 23.85);
      tl.to("#sha256-v07", {
        filter: "none",
        skewX: 0,
        duration: 0.15,
        ease: "power2.out"
      }, 24.0);

      // Transition 4 (c4 -> c5 at 32.0s): Diagonal Split Wipe
      tl.set("#t-glitch-bar", { opacity: 0.95 }, 31.85);
      tl.fromTo("#t-glitch-bar", { top: "-200px" }, { top: "1950px", duration: 0.25, ease: "none" }, 31.85);
      tl.set("#t-glitch-bar", { opacity: 0 }, 32.1);

      // Transition 5 (c5 -> c6 at 40.0s): Staggered Blocks (Camera shake + red overlay)
      tl.to("#sha256-v07", { x: 20, y: -20, duration: 0.04, ease: "none", repeat: 4, yoyo: true }, 39.85);
      tl.to("#sha256-v07", { x: 0, y: 0, duration: 0.05, ease: "none" }, 40.06);
      tl.to("#sha256-v07", { filter: "invert(0.9) sepia(1) saturate(3) hue-rotate(320deg)", duration: 0.08, ease: "none" }, 39.85);
      tl.to("#sha256-v07", { filter: "none", duration: 0.15, ease: "power2.out" }, 39.93);

      // Transition 6 (c6 -> c7 at 48.0s): Grid Dissolve
      tl.set("#t-code-explosion", { display: "block", opacity: 0.96 }, 47.85);
      tl.to("#t-code-explosion", { opacity: 0, duration: 0.22, ease: "power3.in" }, 48.0);
      tl.set("#t-code-explosion", { display: "none" }, 48.22);

      // Transition 7 (c7 -> c8 at 56.0s): Blur Zoom Crossfade
      tl.to("#sha256-v07", { filter: "blur(20px) contrast(1.4)", scale: 1.12, duration: 0.16, ease: "power2.in" }, 55.84);
      tl.to("#sha256-v07", { filter: "none", scale: 1.0, duration: 0.25, ease: "power3.out" }, 56.0);

      /* ─────────────────────────────────────────────────────
         TRANSITION LIGHTNING EFFECTS
         ───────────────────────────────────────────────────── */
      // S1 to S2 (t=8.0)
      tl.set("#lightning", { opacity: 1 }, 7.7);
      tl.fromTo("#bolt-1", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 7.7);
      tl.fromTo("#bolt-2", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.12, ease: "power4.out" }, 7.75);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 7.95);
      tl.set(["#bolt-1","#bolt-2"], { strokeDashoffset: 2000 }, 8.15);

      // S2 to S3 (t=16.0)
      tl.set("#lightning", { opacity: 1 }, 15.7);
      tl.fromTo("#bolt-1", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 15.7);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 15.95);
      tl.set("#bolt-1", { strokeDashoffset: 2000 }, 16.15);

      // S3 to S4 (t=24.0)
      tl.set("#lightning", { opacity: 1 }, 23.7);
      tl.fromTo("#bolt-2", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 23.7);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 23.95);
      tl.set("#bolt-2", { strokeDashoffset: 2000 }, 24.15);

      // S4 to S5 (t=32.0)
      tl.set("#lightning", { opacity: 1 }, 31.7);
      tl.fromTo("#bolt-1", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 31.7);
      tl.fromTo("#bolt-2", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.12, ease: "power4.out" }, 31.75);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 31.95);
      tl.set(["#bolt-1","#bolt-2"], { strokeDashoffset: 2000 }, 32.15);

      // S5 to S6 (t=40.0)
      tl.set("#lightning", { opacity: 1 }, 39.7);
      tl.fromTo("#bolt-1", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 39.7);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 39.95);
      tl.set("#bolt-1", { strokeDashoffset: 2000 }, 40.15);

      // S6 to S7 (t=48.0)
      tl.set("#lightning", { opacity: 1 }, 47.7);
      tl.fromTo("#bolt-2", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 47.7);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 47.95);
      tl.set("#bolt-2", { strokeDashoffset: 2000 }, 48.15);

      // S7 to S8 (t=56.0)
      tl.set("#lightning", { opacity: 1 }, 55.7);
      tl.fromTo("#bolt-1", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.15, ease: "power4.out" }, 55.7);
      tl.fromTo("#bolt-2", { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 0.12, ease: "power4.out" }, 55.75);
      tl.to("#lightning", { opacity: 0, duration: 0.15 }, 55.95);
      tl.set(["#bolt-1","#bolt-2"], { strokeDashoffset: 2000 }, 56.15);


      /* ─────────────────────────────────────────────────────
         CLIP 1 — HOOK (t = 0–8.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo("#c1", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 0);
      tl.fromTo(
        "#c1-bg",
        { scale: 1.05, x: -30, y: -15 },
        { scale: 1.18, x: 15, y: 10, duration: 8.0, ease: "none" },
        0,
      );
      tl.from("#c1-sym", { scale: 0.4, opacity: 0, duration: 0.5, ease: "back.out(2.5)" }, 0.2);
      tl.from("#c1-warn", { y: -35, opacity: 0, duration: 0.45, ease: "power3.out" }, 0.45);
      tl.from("#c1-title", { y: 55, opacity: 0, duration: 0.65, ease: "expo.out" }, 0.75);
      tl.from(
        "#c1-line",
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.45,
          ease: "power3.out",
          transformOrigin: "left center",
        },
        1.2,
      );

      // Fade out clip1 (before S1 transition)
      tl.to("#c1", { opacity: 0, duration: 0.2, ease: "power2.in" }, 8.0);
      tl.set("#c1", { display: "none" }, 8.2);

      /* ─────────────────────────────────────────────────────
         CLIP 2 — Acceso Ilegal (t = 8.0–16.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c2-bg",
        { scale: 1.2, x: 25, y: 15 },
        { scale: 1.05, x: -15, y: -10, duration: 8.0, ease: "none" },
        8.0,
      );
      tl.fromTo("#c2", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 8.0);
      tl.from("#c2-badge", { y: -45, opacity: 0, duration: 0.5, ease: "back.out(2.5)" }, 8.2);
      tl.from("#c2-dashed-box", { scale: 0.9, opacity: 0, duration: 0.5, ease: "expo.out" }, 8.4);

      // Fade out clip2
      tl.to("#c2", { opacity: 0, duration: 0.2, ease: "power2.in" }, 16.0);
      tl.set("#c2", { display: "none" }, 16.2);

      /* ─────────────────────────────────────────────────────
         CLIP 3 — Memoria RAM (t = 16.0–24.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c3-bg",
        { scale: 1.05, x: 20, y: -20 },
        { scale: 1.18, x: -20, y: 15, duration: 8.0, ease: "none" },
        16.0,
      );
      tl.fromTo("#c3", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 16.0);
      tl.from("#c3-badge", { y: -45, opacity: 0, duration: 0.5, ease: "power3.out" }, 16.2);
      tl.from("#c3-terminal", { scaleY: 0, opacity: 0, duration: 0.5, ease: "expo.out" }, 16.4);
      
      tl.to("#c3-term1", { opacity: 1, duration: 0.1 }, 17.2);
      tl.to("#c3-term2", { opacity: 1, duration: 0.1 }, 18.5);
      tl.to("#c3-term3", { opacity: 1, duration: 0.1 }, 20.2);

      // Fade out clip3
      tl.to("#c3", { opacity: 0, duration: 0.2, ease: "power2.in" }, 24.0);
      tl.set("#c3", { display: "none" }, 24.2);

      /* ─────────────────────────────────────────────────────
         CLIP 4 — Evidencia Volátil (t = 24.0–32.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c4-bg",
        { scale: 1.2, x: -25, y: 20 },
        { scale: 1.05, x: 15, y: -15, duration: 8.0, ease: "none" },
        24.0,
      );
      tl.fromTo("#c4", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 24.0);
      tl.from("#c4-badge", { y: -45, opacity: 0, duration: 0.5, ease: "back.out(2)" }, 24.2);
      tl.from(
        "#c4-progress-container",
        { scaleX: 0.9, opacity: 0, duration: 0.5, ease: "expo.out" },
        24.4,
      );
      tl.fromTo(
        "#c4-bar",
        { scaleX: 0.1 },
        { scaleX: 1.0, duration: 6.8, ease: "power1.inOut" },
        24.7,
      );

      // Fade out clip4
      tl.to("#c4", { opacity: 0, duration: 0.2, ease: "power2.in" }, 32.0);
      tl.set("#c4", { display: "none" }, 32.2);

      /* ─────────────────────────────────────────────────────
         CLIP 5 — Copia Forense (t = 32.0–40.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c5-bg",
        { scale: 1.05, x: -15, y: 25 },
        { scale: 1.18, x: 20, y: -15, duration: 8.0, ease: "none" },
        32.0,
      );
      tl.fromTo("#c5", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 32.0);
      tl.from("#c5-badge", { y: -45, opacity: 0, duration: 0.5, ease: "power3.out" }, 32.2);
      tl.from(
        "#c5-progress-container",
        { scaleX: 0.9, opacity: 0, duration: 0.5, ease: "expo.out" },
        32.4,
      );
      tl.fromTo(
        "#c5-bar",
        { scaleX: 0.1 },
        { scaleX: 1.0, duration: 6.8, ease: "power2.inOut" },
        32.7,
      );

      // Fade out clip5
      tl.to("#c5", { opacity: 0, duration: 0.2, ease: "power2.in" }, 40.0);
      tl.set("#c5", { display: "none" }, 40.2);

      /* ─────────────────────────────────────────────────────
         CLIP 6 — Esteganografía (t = 40.0–48.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c6-bg",
        { scale: 1.2, x: 15, y: -25 },
        { scale: 1.05, x: -25, y: 15, duration: 8.0, ease: "none" },
        40.0,
      );
      tl.fromTo("#c6", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 40.0);
      tl.from("#c6-badge", { y: -45, opacity: 0, duration: 0.5, ease: "back.out(2)" }, 40.2);
      tl.from("#c6-dashed-box", { scale: 0.9, opacity: 0, duration: 0.5, ease: "expo.out" }, 40.45);

      // Fade out clip6
      tl.to("#c6", { opacity: 0, duration: 0.2, ease: "power2.in" }, 48.0);
      tl.set("#c6", { display: "none" }, 48.2);

      /* ─────────────────────────────────────────────────────
         CLIP 7 — Condena Penal (t = 48.0–56.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c7-bg",
        { scale: 1.05, x: -25, y: -25 },
        { scale: 1.18, x: 20, y: 20, duration: 8.0, ease: "none" },
        48.0,
      );
      tl.fromTo("#c7", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 48.0);
      tl.from("#c7-badge", { y: -45, opacity: 0, duration: 0.5, ease: "power3.out" }, 48.2);
      tl.from("#c7-terminal", { scaleY: 0, opacity: 0, duration: 0.5, ease: "expo.out" }, 48.4);

      tl.to("#c7-term1", { opacity: 1, duration: 0.1 }, 49.0);
      tl.to("#c7-term2", { opacity: 1, duration: 0.1 }, 50.8);
      tl.to("#c7-term3", { opacity: 1, duration: 0.1 }, 52.5);

      // Fade out clip7
      tl.to("#c7", { opacity: 0, duration: 0.2, ease: "power2.in" }, 56.0);
      tl.set("#c7", { display: "none" }, 56.2);

      /* ─────────────────────────────────────────────────────
         CLIP 8 — CLOSER / CTA (t = 56.0–64.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo("#c8", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, 56.0);
      tl.fromTo(
        "#c8-bg",
        { scale: 1.2, x: 25, y: 25 },
        { scale: 1.05, x: -15, y: -15, duration: 8.0, ease: "none" },
        56.0,
      );
      tl.from("#c8-label", { y: -45, opacity: 0, duration: 0.55, ease: "back.out(2)" }, 56.4);
      tl.from("#outro-logo", { scale: 0.8, opacity: 0, duration: 0.65, ease: "back.out(1.4)" }, 57.0);
      tl.from("#closer-cta", { scale: 0.82, opacity: 0, duration: 0.5, ease: "back.out(2.2)" }, 57.6);
      tl.from(
        "#c8-line",
        { scaleX: 0, duration: 0.5, ease: "power3.out", transformOrigin: "left center" },
        58.2,
      );
      
      tl.to(
        "#closer-cta",
        { scale: 1.05, duration: 0.4, ease: "sine.inOut", yoyo: true, repeat: 5 },
        58.6,
      );

      // Fade composition to black at the end (mandatory closer fade out)
      tl.to("#sha256-v07", { opacity: 0, duration: 0.6, ease: "power2.in" }, 63.4);

      /* ─────────────────────────────────────────────────────
         POWER WORDS TIMING
         ───────────────────────────────────────────────────── */
      // PW1: "FOTOS ROBADAS" (t = 6.2s to 7.8s)
      tl.set("#pw-estafa", { visibility: "visible" }, 6.2);
      tl.to("#pw-estafa", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 6.2);
      tl.to("#pw-estafa", { opacity: 0, scale: 0.9, duration: 0.15, ease: "power2.in" }, 7.6);
      tl.set("#pw-estafa", { opacity: 0, visibility: "hidden" }, 7.75);

      // PW2: "MEMORIA RAM" (t = 21.0s to 23.0s)
      tl.set("#pw-forensics", { visibility: "visible" }, 21.0);
      tl.to("#pw-forensics", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 21.0);
      tl.to("#pw-forensics", { opacity: 0, scale: 0.9, duration: 0.15, ease: "power2.in" }, 22.8);
      tl.set("#pw-forensics", { opacity: 0, visibility: "hidden" }, 22.95);

      // PW3: "OCULTACIÓN DETECTADA" (t = 44.5s to 46.8s)
      tl.set("#pw-condena", { visibility: "visible" }, 44.5);
      tl.to("#pw-condena", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 44.5);
      tl.to("#pw-condena", { opacity: 0, scale: 0.9, duration: 0.15, ease: "power2.in" }, 46.5);
      tl.set("#pw-condena", { opacity: 0, visibility: "hidden" }, 46.65);

      /* ─────────────────────────────────────────────────────
         SOCIAL PROOFS TIMING
         ───────────────────────────────────────────────────── */
      // SP1 (t = 9.5s to 12.5s)
      tl.set("#sp1", { visibility: "visible" }, 9.5);
      tl.to("#sp1", { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 9.5);
      tl.to("#sp1", { opacity: 0, x: 30, duration: 0.3, ease: "power2.in" }, 12.2);
      tl.set("#sp1", { visibility: "hidden" }, 12.5);

      // SP2 (t = 25.5s to 28.5s)
      tl.set("#sp2", { visibility: "visible" }, 25.5);
      tl.to("#sp2", { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 25.5);
      tl.to("#sp2", { opacity: 0, x: 30, duration: 0.3, ease: "power2.in" }, 28.2);
      tl.set("#sp2", { visibility: "hidden" }, 28.5);

      // SP3 (t = 41.5s to 44.5s)
      tl.set("#sp3", { visibility: "visible" }, 41.5);
      tl.to("#sp3", { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 41.5);
      tl.to("#sp3", { opacity: 0, x: 30, duration: 0.3, ease: "power2.in" }, 44.2);
      tl.set("#sp3", { visibility: "hidden" }, 44.5);

      /* ─────────────────────────────────────────────────────
         REGISTRO OBLIGATORIO
         ───────────────────────────────────────────────────── */
      window.__timelines["sha256-v07"] = tl;
    </script>
  </body>
</html>
`;

// Save the index.html content
const destDir = path.join(ROOT_DIR, "videos", "sha256-v07");
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}
const destPath = path.join(destDir, "index.html");
fs.writeFileSync(destPath, htmlContent);

console.log("videos/sha256-v07/index.html generado exitosamente!");
console.log("Se incluyeron:", wordPopCounter - 1, "etiquetas de sonido de palabras.");
