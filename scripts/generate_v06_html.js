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
    badge: "Juicio Inédito",
    icon: "warning",
    badgeClass: "yellow",
    text: "En Caracas, un tribunal enfrentó un juicio inédito: un supuesto 'experto' estafó miles de dólares ofreciendo falsas inversiones en criptomonedas.",
    title: "ESTAFA CRIPTO",
    question: "¿Inversiones garantizadas?",
    reveal: "Falsa Promesa",
    isHook: true,
  },
  {
    id: "c2",
    start: 8.0,
    duration: 8.0,
    badge: "Plataforma Caída",
    icon: "error",
    badgeClass: "red",
    text: "Las víctimas transferían su dinero confiando en él. De repente, la plataforma cerró y él alegó haber sufrido un ciberataque internacional.",
  },
  {
    id: "c3",
    start: 16.0,
    duration: 8.0,
    badge: "Aseguramiento",
    icon: "policy",
    badgeClass: "yellow",
    text: "Para descubrir la verdad, la fiscalía ordenó la 'Obtención por Aseguramiento' de sus equipos, enviándolos al Centro Nacional de Informática Forense.",
  },
  {
    id: "c4",
    start: 24.0,
    duration: 8.0,
    badge: "Cadena de Custodia",
    icon: "lock",
    badgeClass: "green",
    text: "Bajo el estricto protocolo del MUCCEF, los peritos aislaron los computadores y realizaron copias forenses, protegiéndolas mediante el cálculo de algoritmos Hash.",
  },
  {
    id: "c5",
    start: 32.0,
    duration: 8.0,
    badge: "Blockchain Forensics",
    icon: "analytics",
    badgeClass: "red",
    text: "El peritaje desmintió el falso hackeo. Analizando la cadena de bloques y los metadatos internos, rastrearon el flujo exacto de las criptomonedas.",
  },
  {
    id: "c6",
    start: 40.0,
    duration: 8.0,
    badge: "Billetera Vinculada",
    icon: "fingerprint",
    badgeClass: "red",
    text: "Las evidencias digitales revelaron que las llaves privadas y las billeteras receptoras del dinero estaban vinculadas directamente al computador personal del acusado.",
  },
  {
    id: "c7",
    start: 48.0,
    duration: 8.0,
    badge: "Condena Judicial",
    icon: "gavel",
    badgeClass: "green",
    text: "El juez lo condenó por Fraude Informático, aplicando las severas penas de la Ley Especial Contra los Delitos Informáticos de Venezuela.",
  },
  {
    id: "c8",
    start: 56.0,
    duration: 8.0,
    badge: "Lección Legal",
    icon: "share",
    badgeClass: "green",
    text: "La lección: en la cadena de bloques siempre queda un rastro digital inborrable. ¡Protege tus inversiones, guarda y comparte este video!",
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
    // Only pop for words that have more than 2 letters (or important beats) to make it cleaner and sound premium
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
<!-- sha256-v06 · SHA256.US Laboratorio Forense · 64s · 1080x1920 · 30fps -->
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>SHA256.US — Fraude con Criptomonedas: El Juicio de Caracas</title>
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <style>
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
      #sha256-v06 {
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
        color: var(--yellow);
        filter: drop-shadow(0 0 24px rgba(254, 207, 6, 0.65));
      }
      .hook-warn-label {
        font-family: "Share Tech Mono", monospace;
        font-size: 27px;
        font-weight: 400;
        font-style: normal;
        color: var(--yellow);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        border-top: 2px solid var(--yellow);
        border-bottom: 2px solid var(--yellow);
        padding: 10px 28px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hook-title {
        font-size: 78px;
        line-height: 1.05;
        color: var(--yellow);
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        filter: drop-shadow(0 0 18px rgba(254, 207, 6, 0.35));
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
        background: var(--green);
        box-shadow: 0 0 14px rgba(0, 255, 65, 0.55);
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

      .dashed-box {
        width: 100%;
        border: 3px dashed var(--green);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: 24px;
        box-sizing: border-box;
        background: rgba(12, 15, 15, 0.65);
        backdrop-filter: blur(8px);
        border-radius: 0px;
      }

      .progress-bar-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 24px;
        background: rgba(12, 15, 15, 0.85);
        border: 1px solid rgba(254, 207, 6, 0.25);
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
      .terminal-box {
        width: 100%;
        background: rgba(12, 15, 15, 0.85);
        border: 1px solid rgba(0, 255, 65, 0.3);
        padding: 24px;
        font-family: "Share Tech Mono", monospace;
        font-size: 22px;
        text-align: left;
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.05);
        transform-origin: top center;
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
      id="sha256-v06"
      data-composition-id="sha256-v06"
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
            <span class="material-icons" style="font-size:36px;color:#FECF06;">warning</span>
            Caso Forense · Caracas
          </div>
          <div id="c1-title" class="hook-title">ESTAFA CRIPTO</div>
          <div id="c1-line" class="hook-line"></div>
        </div>
      </div>

      <!-- ── SCENE 2 — Coartada Falsa (8.0–16.0s) ── -->
      <div id="c2" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c2-bg" src="images/clip-2.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c2-dashed-box" class="dashed-box" style="border-color: var(--red);">
            <div id="c2-badge" class="badge red">
              <span class="material-icons" style="font-size:32px;color:#ff3b30;">error</span>
              Coartada Falsa
            </div>
            <div id="c2-label" class="meta-label-mono red">PLATAFORMA CAÍDA Y HACKEO ALEGADO</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 3 — Aseguramiento (16.0–24.0s) ── -->
      <div id="c3" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c3-bg" src="images/clip-3.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c3-badge" class="badge">
            <span class="material-icons" style="font-size:32px;color:#fecf06;">policy</span>
            Aseguramiento
          </div>
          <div id="c3-progress-container" class="progress-bar-container">
            <div class="progress-bar-title">OBTENCIÓN POR ASEGURAMIENTO EN CENIF</div>
            <div class="progress-bar-track">
              <div id="c3-bar" class="progress-bar-fill green"></div>
            </div>
            <div class="progress-bar-label" id="c3-progress-label">CONEXIÓN A DISPOSITIVOS ESTABLECIDA</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 4 — Cadena de Custodia (24.0–32.0s) ── -->
      <div id="c4" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c4-bg" src="images/clip-4.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c4-badge" class="badge green">
            <span class="material-icons" style="font-size:32px;color:#00ff41;">lock</span>
            MUCCEF
          </div>
          <div id="c4-progress-container" class="progress-bar-container">
            <div class="progress-bar-title">GARANTÍA DE INALTERABILIDAD - HASH SHA-256</div>
            <div class="progress-bar-track">
              <div id="c4-bar" class="progress-bar-fill green"></div>
            </div>
            <div class="progress-bar-label" id="c4-hash-label">INTEGRIDAD DE COPIAS CERTIFICADA</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 5 — Blockchain Forensics (32.0–40.0s) ── -->
      <div id="c5" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c5-bg" src="images/clip-5.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c5-badge" class="badge red">
            <span class="material-icons" style="font-size:32px;color:#ff3b30;">analytics</span>
            Blockchain Forensics
          </div>
          <div id="c5-terminal" class="terminal-box">
            <div class="term-line" id="c5-term1">&gt; blockchain-cli scan --address 0x71C...</div>
            <div class="term-line red" id="c5-term2">&gt; ALERT: DIRECT TRANSFER DETECTED (NO HACK)</div>
            <div class="term-line" id="c5-term3">&gt; TRACE: TRANSACTION METADATA CORRELATION</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 6 — Billetera Vinculada (40.0–48.0s) ── -->
      <div id="c6" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c6-bg" src="images/clip-6.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c6-badge" class="badge red">
            <span class="material-icons" style="font-size:32px;color:#ff3b30;">fingerprint</span>
            Billetera Vinculada
          </div>
          <div id="c6-dashed-box" class="dashed-box" style="border-color: var(--red);">
            <div id="c6-label" class="meta-label-mono red">ASOCIACIÓN DIRECTA VINCULADA</div>
            <div style="font-family:'Share Tech Mono',monospace;font-size:22px;color:#ff3b30;">LLAVES PRIVADAS ASOCIADAS AL EQUIPO PERSONAL</div>
          </div>
        </div>
      </div>

      <!-- ── SCENE 7 — Condena Judicial (48.0–56.0s) ── -->
      <div id="c7" class="scene-wrap">
        <div class="bg-layer" data-layout-allow-overflow>
          <img id="c7-bg" src="images/clip-7.png" alt="" crossorigin="anonymous" data-layout-allow-overflow />
          <div class="bg-overlay"></div>
        </div>
        <div class="scene-content">
          <div id="c7-badge" class="badge green">
            <span class="material-icons" style="font-size:32px;color:#00ff41;">gavel</span>
            Condena Judicial
          </div>
          <div id="c7-terminal" class="terminal-box" style="border-color: var(--green);">
            <div class="term-line" id="c7-term1">&gt; ACUSADO: CULPABLE DE FRAUDE INFORMÁTICO</div>
            <div class="term-line" id="c7-term2">&gt; SENTENCIA: PENAS LEY DELITOS INFORMÁTICOS VENEZUELA</div>
            <div class="term-line" id="c7-term3">&gt; MEDIDA: DECOMISO DE ACTIVOS E INHABILITACIÓN</div>
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
            Laboratorio Forense · SHA256.US
          </div>
          <img id="outro-logo" class="outro-logo" src="images/logo-outro.png" />
          <p id="closer-cta" class="closer-cta">¡Guarda y Comparte!</p>
          <div id="c8-line" class="closer-line"></div>
        </div>
      </div>

      <!-- ── SUBTÍTULOS PALABRA POR PALABRA ── -->
      <div id="captions-container"></div>

      <!-- ── POWER WORDS ── -->
      <div id="pw-container">
        <div id="pw-estafa" class="pw red">ESTAFA CRIPTO</div>
        <div id="pw-forensics" class="pw yellow">RASTRO DIGITAL</div>
        <div id="pw-condena" class="pw green">CONDENA</div>
      </div>

      <!-- ── SOCIAL PROOFS ── -->
      <div id="sp-container">
        <div id="sp1" class="sp">LEY ESPECIAL CONTRA DELITOS INFORMÁTICOS</div>
        <div id="sp2" class="sp">EL PROTOCOLO MUCCEF EVITA IMPUGNACIONES</div>
        <div id="sp3" class="sp">EL DELITO DE FRAUDE TIENE CÁRCEL EN VENEZUELA</div>
      </div>

      <!-- ── AUDIO AUDIO TRACKS ── -->
      <!-- Background Music (Track 1) -->
      <audio
        id="bg-music"
        class="clip"
        data-start="0.0"
        data-duration="64.0"
        data-track-index="1"
        data-volume="0.14"
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
      var noiseSeed = 54321;
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

        // Noise draw tick linked to time
        tl.to({}, {
          duration: 64.0,
          onUpdate: function() {
            var time = tl.time();
            // Trigger binary noise frame render
            if (time >= 47.7 && time <= 48.2) {
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

          // Phone/Terminal body
          var px = cx - 140, py = cy - 240, pw = 280, ph = 480, pr = 30;
          ctx.fillStyle = "rgba(12, 15, 15, 0.93)";
          ctx.strokeStyle = "rgba(0, 255, 65, 0.35)";
          ctx.lineWidth = 4;
          
          if (time >= 8.0 && time < 16.0) {
            ctx.strokeStyle = "rgba(255, 59, 48, 0.5)"; // alert state red
          } else if (time >= 32.0 && time < 48.0) {
            ctx.strokeStyle = "rgba(255, 59, 48, 0.5)"; // alert state red
          } else if (time >= 48.0 && time < 56.0) {
            ctx.strokeStyle = "rgba(0, 255, 65, 0.75)"; // verified state green
          }
          
          roundRect(ctx, px, py, pw, ph, pr, true, true);

          // Render screens depending on current clip index
          if (time < 8.0) {
            // Screen 1: Bitcoin symbol / initial scan
            ctx.font = "normal 18px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(0, 255, 65, 0.8)";
            ctx.fillText("SYS: BLOCKCHAIN SCAN", px + 30, py + 50);
            
            // Draw Bitcoin symbol
            ctx.font = "80px sans-serif";
            ctx.fillStyle = "rgba(254, 207, 6, 0.85)";
            ctx.fillText("₿", cx - 25, cy + 20);
            
            ctx.font = "normal 14px 'Share Tech Mono'";
            ctx.fillStyle = "#e2e2e2";
            ctx.fillText("CASE: CARACAS CRIPTO", px + 40, cy + 100);
            ctx.fillText("STATUS: SCANNING...", px + 40, cy + 130);
            
          } else if (time >= 8.0 && time < 16.0) {
            // Screen 2: Crashing stock chart coartada ciberataque
            ctx.font = "normal 14px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(255, 59, 48, 0.8)";
            ctx.fillText("ALERTA: PLATAFORMA DOWN", px + 25, py + 40);
            
            // Draw a crashing chart line
            ctx.strokeStyle = "rgba(255, 59, 48, 0.8)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(px + 30, cy - 80);
            ctx.lineTo(px + 90, cy - 40);
            ctx.lineTo(px + 150, cy - 110);
            ctx.lineTo(px + 210, cy + 40);
            ctx.lineTo(px + 250, cy + 80);
            ctx.stroke();

            ctx.font = "bold 13px 'Share Tech Mono'";
            ctx.fillStyle = "#ff3b30";
            ctx.fillText("HACKEO INTERNACIONAL?", px + 30, cy + 120);
            ctx.fillText("COARTADA DECLARADA", px + 40, cy + 140);

          } else if (time >= 16.0 && time < 24.0) {
            // Screen 3: MUCCEF Extraction process
            ctx.font = "normal 18px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(254, 207, 6, 0.85)";
            ctx.fillText("CENIF EXTRACTING...", px + 35, py + 50);

            // Progress bar
            var percent = Math.min(100, Math.floor(((time - 16.0) / 8.0) * 100));
            ctx.strokeStyle = "rgba(0,255,65,0.5)";
            ctx.strokeRect(px + 30, cy - 20, 220, 25);
            ctx.fillStyle = "rgba(0,255,65,0.35)";
            ctx.fillRect(px + 32, cy - 18, 216 * (percent / 100), 21);

            ctx.font = "normal 14px 'Share Tech Mono'";
            ctx.fillStyle = "#e2e2e2";
            ctx.fillText("OBTENCIÓN POR ASEGURAM", px + 35, cy + 40);
            ctx.fillText("DUMPING DATA: " + percent + "%", px + 40, cy + 65);
            
            // Forensic cables animation outside phone
            ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(px + 140, py + ph);
            ctx.quadraticCurveTo(cx - 80, cy + 320, cx - 180, cy + 340);
            ctx.stroke();

          } else if (time >= 24.0 && time < 32.0) {
            // Screen 4: Hash integrity
            ctx.font = "normal 16px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(0, 255, 65, 0.9)";
            ctx.fillText("MUCCEF HASH SECURED", px + 35, py + 50);

            ctx.font = "normal 80px sans-serif";
            ctx.fillStyle = "rgba(0, 255, 65, 0.7)";
            ctx.fillText("🔒", cx - 45, cy + 20);

            // Print some Hash text
            ctx.font = "normal 12px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(0,255,65,0.8)";
            ctx.fillText("SHA-256 HASH VERIFIED:", px + 25, cy + 80);
            ctx.fillText("7A890D81884C7D659A2FEAA0C55AD025", px + 25, cy + 105);
            ctx.fillText("C3EEF69286A2D407519E870D189178A2", px + 25, cy + 125);

          } else if (time >= 32.0 && time < 40.0) {
            // Screen 5: Blockchain scanning (Bitcoin, ledger check)
            ctx.font = "normal 16px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(255, 59, 48, 0.9)";
            ctx.fillText("BLOCKCHAIN CORRELATION", px + 25, py + 50);

            ctx.font = "normal 12px 'Share Tech Mono'";
            ctx.fillStyle = "#e2e2e2";
            ctx.fillText("SELECT tx_hash, to_wallet", px + 20, cy - 40);
            ctx.fillText("FROM ledger_data;", px + 20, cy - 20);
            
            // Fails flashing
            var flash = Math.floor(time * 4) % 2 === 0;
            ctx.font = "bold 15px 'Share Tech Mono'";
            ctx.fillStyle = flash ? "rgba(255, 59, 48, 0.9)" : "rgba(255, 59, 48, 0.2)";
            ctx.fillText(">>> NO EXTERNAL HACK <<<", px + 25, cy + 40);
            ctx.fillText(">>> DIRECT FLOW FOUND <<<", px + 25, cy + 70);

            ctx.font = "normal 12px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(0, 255, 65, 0.5)";
            ctx.fillText("METADATA CORRELATION", px + 30, cy + 130);
            ctx.fillText("MATCH: INTERNAL WALLET", px + 30, cy + 155);

          } else if (time >= 40.0 && time < 48.0) {
            // Screen 6: Billetera vinculada (wallet address node check)
            ctx.font = "normal 18px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(255, 59, 48, 0.95)";
            ctx.fillText("PRIVATE KEY LINKED", px + 35, py + 50);

            // Draw network nodes
            ctx.strokeStyle = "rgba(255, 59, 48, 0.4)";
            ctx.lineWidth = 1.5;
            for (var i = 0; i < 6; i++) {
              var x1 = px + 40 + seededRandom(i) * 200;
              var y1 = cy - 40 + seededRandom(i+10) * 160;
              var x2 = px + 40 + seededRandom(i+2) * 200;
              var y2 = cy - 40 + seededRandom(i+12) * 160;
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.stroke();

              ctx.fillStyle = "rgba(255, 59, 48, 0.75)";
              ctx.beginPath();
              ctx.arc(x1, y1, 6, 0, Math.PI*2);
              ctx.fill();
            }

            ctx.font = "bold 11px 'Share Tech Mono'";
            ctx.fillStyle = "#ff3b30";
            ctx.fillText("MATCH: WALLET -> COMPUTER", px + 30, cy + 150);

          } else if (time >= 48.0 && time < 56.0) {
            // Screen 7: Verdict Condena
            ctx.font = "normal 18px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(0, 255, 65, 0.95)";
            ctx.fillText("VERDICT: CULPABLE", px + 35, py + 50);

            // Gavel symbol
            ctx.font = "70px sans-serif";
            ctx.fillStyle = "rgba(0, 255, 65, 0.85)";
            ctx.fillText("⚖", cx - 35, cy - 10);

            ctx.font = "normal 13px 'Share Tech Mono'";
            ctx.fillStyle = "#e2e2e2";
            ctx.fillText("CONDENA FRAUDE INFORM.", px + 35, cy + 80);
            ctx.fillStyle = "rgba(0, 255, 65, 0.9)";
            ctx.fillText("APLICANDO LEY ESPECIAL", px + 35, cy + 110);
            ctx.fillText("CONTRA DELITOS INFORM.", px + 35, cy + 130);

          } else {
            // Screen 8: Outro CTA Shield
            ctx.font = "normal 18px 'Share Tech Mono'";
            ctx.fillStyle = "rgba(0, 255, 65, 0.8)";
            ctx.fillText("SHA256.US SECURE", px + 35, py + 50);

            // Shield / Secure symbol
            ctx.font = "80px sans-serif";
            ctx.fillStyle = "rgba(0, 255, 65, 0.75)";
            ctx.fillText("🛡️", cx - 40, cy + 10);

            ctx.font = "normal 13px 'Share Tech Mono'";
            ctx.fillStyle = "#e2e2e2";
            ctx.fillText("TECNOLOGÍA DE BLOQUES", px + 40, cy + 90);
            ctx.fillText("RASTRO DIGITAL INBORRABLE", px + 25, cy + 115);
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
         7 UNIQUE SCENE TRANSITIONS
         ───────────────────────────────────────────────────── */

      // Transition 1 (c1 -> c2 at 8.0s): Glitch + Chromatic Shift
      tl.to("#sha256-v06", {
        filter: "drop-shadow(10px 0px 0px #ff0000) drop-shadow(-10px 0px 0px #0000ff) skewX(8) hue-rotate(90deg)",
        duration: 0.15,
        ease: "none"
      }, 7.85);
      tl.to("#sha256-v06", {
        filter: "none",
        skewX: 0,
        duration: 0.15,
        ease: "power2.out"
      }, 8.0);

      // Transition 2 (c2 -> c3 at 16.0s): Zoom Through (white scale-flash)
      tl.fromTo("#tr-overlay", { opacity: 0, scale: 0.95 }, { opacity: 0.9, scale: 1.05, duration: 0.15, ease: "power4.in" }, 15.85);
      tl.to("#tr-overlay", { opacity: 0, scale: 1.0, duration: 0.2, ease: "power2.out" }, 16.0);

      // Transition 3 (c3 -> c4 at 24.0s): Grid Dissolve
      tl.set("#t-code-explosion", { display: "block", opacity: 0.96 }, 23.85);
      tl.to("#t-code-explosion", { opacity: 0, duration: 0.22, ease: "power3.in" }, 24.0);
      tl.set("#t-code-explosion", { display: "none" }, 24.22);

      // Transition 4 (c4 -> c5 at 32.0s): Staggered Blocks (Camera shake + red overlay)
      tl.to("#sha256-v06", { x: 20, y: -20, duration: 0.04, ease: "none", repeat: 4, yoyo: true }, 31.85);
      tl.to("#sha256-v06", { x: 0, y: 0, duration: 0.05, ease: "none" }, 32.06);
      tl.to("#sha256-v06", { filter: "invert(0.9) sepia(1) saturate(3) hue-rotate(320deg)", duration: 0.08, ease: "none" }, 31.85);
      tl.to("#sha256-v06", { filter: "none", duration: 0.15, ease: "power2.out" }, 31.93);

      // Transition 5 (c5 -> c6 at 40.0s): Diagonal Split Wipe
      tl.set("#t-glitch-bar", { opacity: 0.95 }, 39.85);
      tl.fromTo("#t-glitch-bar", { top: "-200px" }, { top: "1950px", duration: 0.25, ease: "none" }, 39.85);
      tl.set("#t-glitch-bar", { opacity: 0 }, 40.1);

      // Transition 6 (c6 -> c7 at 48.0s): Binary Noise
      tl.set("#t-noise", { opacity: 0.95 }, 47.85);
      tl.to("#t-noise", { opacity: 0, duration: 0.2, ease: "power2.in" }, 48.0);

      // Transition 7 (c7 -> c8 at 56.0s): Blur Zoom Crossfade
      tl.to("#sha256-v06", { filter: "blur(20px) contrast(1.4)", scale: 1.12, duration: 0.16, ease: "power2.in" }, 55.84);
      tl.to("#sha256-v06", { filter: "none", scale: 1.0, duration: 0.25, ease: "power3.out" }, 56.0);

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
         CLIP 2 — Coartada Falsa (t = 8.0–16.0s)
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
         CLIP 3 — Aseguramiento (t = 16.0–24.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c3-bg",
        { scale: 1.05, x: 20, y: -20 },
        { scale: 1.18, x: -20, y: 15, duration: 8.0, ease: "none" },
        16.0,
      );
      tl.fromTo("#c3", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 16.0);
      tl.from("#c3-badge", { y: -45, opacity: 0, duration: 0.5, ease: "power3.out" }, 16.2);
      tl.from(
        "#c3-progress-container",
        { scaleX: 0.9, opacity: 0, duration: 0.5, ease: "expo.out" },
        16.4,
      );
      tl.fromTo(
        "#c3-bar",
        { scaleX: 0.1 },
        { scaleX: 1.0, duration: 6.8, ease: "power2.inOut" },
        16.7,
      );

      // Fade out clip3
      tl.to("#c3", { opacity: 0, duration: 0.2, ease: "power2.in" }, 24.0);
      tl.set("#c3", { display: "none" }, 24.2);

      /* ─────────────────────────────────────────────────────
         CLIP 4 — Cadena de Custodia (t = 24.0–32.0s)
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
         CLIP 5 — Blockchain Forensics (t = 32.0–40.0s)
         ───────────────────────────────────────────────────── */
      tl.fromTo(
        "#c5-bg",
        { scale: 1.05, x: -15, y: 25 },
        { scale: 1.18, x: 20, y: -15, duration: 8.0, ease: "none" },
        32.0,
      );
      tl.fromTo("#c5", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" }, 32.0);
      tl.from("#c5-badge", { y: -45, opacity: 0, duration: 0.5, ease: "power3.out" }, 32.2);
      tl.from("#c5-terminal", { scaleY: 0, opacity: 0, duration: 0.5, ease: "expo.out" }, 32.4);
      
      tl.to("#c5-term1", { opacity: 1, duration: 0.1 }, 33.2);
      tl.to("#c5-term2", { opacity: 1, duration: 0.1 }, 34.5);
      tl.to("#c5-term3", { opacity: 1, duration: 0.1 }, 36.2);

      // Fade out clip5
      tl.to("#c5", { opacity: 0, duration: 0.2, ease: "power2.in" }, 40.0);
      tl.set("#c5", { display: "none" }, 40.2);

      /* ─────────────────────────────────────────────────────
         CLIP 6 — Billetera Vinculada (t = 40.0–48.0s)
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
         CLIP 7 — Condena Judicial (t = 48.0–56.0s)
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
      tl.to("#sha256-v06", { opacity: 0, duration: 0.6, ease: "power2.in" }, 63.4);

      /* ─────────────────────────────────────────────────────
         POWER WORDS TIMING
         ───────────────────────────────────────────────────── */
      // PW1: "ESTAFA CRIPTO" (t = 11.5s to 12.8s)
      tl.set("#pw-estafa", { visibility: "visible" }, 11.5);
      tl.to("#pw-estafa", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 11.5);
      tl.to("#pw-estafa", { opacity: 0, scale: 0.9, duration: 0.15, ease: "power2.in" }, 12.6);
      tl.set("#pw-estafa", { visibility: "hidden" }, 12.8);

      // PW2: "RASTRO DIGITAL" (t = 35.5s to 37.0s)
      tl.set("#pw-forensics", { visibility: "visible" }, 35.5);
      tl.to("#pw-forensics", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 35.5);
      tl.to("#pw-forensics", { opacity: 0, scale: 0.9, duration: 0.15, ease: "power2.in" }, 36.8);
      tl.set("#pw-forensics", { visibility: "hidden" }, 37.0);

      // PW3: "CONDENA" (t = 51.5s to 53.0s)
      tl.set("#pw-condena", { visibility: "visible" }, 51.5);
      tl.to("#pw-condena", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 51.5);
      tl.to("#pw-condena", { opacity: 0, scale: 0.9, duration: 0.15, ease: "power2.in" }, 52.8);
      tl.set("#pw-condena", { visibility: "hidden" }, 53.0);

      /* ─────────────────────────────────────────────────────
         SOCIAL PROOFS TIMING
         ───────────────────────────────────────────────────── */
      // SP1 (t = 9.5s to 12.5s)
      tl.set("#sp1", { visibility: "visible" }, 9.5);
      tl.to("#sp1", { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 9.5);
      tl.to("#sp1", { opacity: 0, x: 30, duration: 0.3, ease: "power2.in" }, 12.2);
      tl.set("#sp1", { visibility: "hidden" }, 12.5);

      // SP2 (t = 33.5s to 36.5s)
      tl.set("#sp2", { visibility: "visible" }, 33.5);
      tl.to("#sp2", { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 33.5);
      tl.to("#sp2", { opacity: 0, x: 30, duration: 0.3, ease: "power2.in" }, 36.2);
      tl.set("#sp2", { visibility: "hidden" }, 36.5);

      // SP3 (t = 50.5s to 53.5s)
      tl.set("#sp3", { visibility: "visible" }, 50.5);
      tl.to("#sp3", { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 50.5);
      tl.to("#sp3", { opacity: 0, x: 30, duration: 0.3, ease: "power2.in" }, 53.2);
      tl.set("#sp3", { visibility: "hidden" }, 53.5);

      /* ─────────────────────────────────────────────────────
         REGISTRO OBLIGATORIO
         ───────────────────────────────────────────────────── */
      window.__timelines["sha256-v06"] = tl;
    </script>
  </body>
</html>
`;

// Save the index.html content
const destDir = path.join(ROOT_DIR, "videos", "sha256-v06");
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}
const destPath = path.join(destDir, "index.html");
fs.writeFileSync(destPath, htmlContent);

console.log("videos/sha256-v06/index.html generado exitosamente!");
console.log("Se incluyeron:", wordPopCounter - 1, "etiquetas de sonido de palabras.");
