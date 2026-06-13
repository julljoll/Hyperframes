# 📖 Hyperframes — Cómo está compuesto y cómo se usa

> Guía completa del repositorio `julljoll/Hyperframes` para entender cada parte,
> para qué sirve, y cómo fluye la producción de un video desde cero.

---

## ¿Qué es Hyperframes?

**Hyperframes** es un framework open-source creado por HeyGen que convierte HTML
en videos MP4 de forma determinista: el mismo archivo HTML siempre produce exactamente
el mismo video. La idea central es: **escribes HTML → el motor lo renderiza como video**.

No necesitas React. No necesitas un bundler. Un `index.html` que funciona en el
navegador también es un video válido. El motor abre ese HTML en Chrome sin cabeza
(headless), captura cada frame a 30 FPS, y los une con FFmpeg para producir un MP4.

El repositorio `julljoll/Hyperframes` es un **fork customizado** de
`heygen-com/hyperframes` adaptado para producir videos virales del canal
**SHA256.US Laboratorio Forense** (ciberseguridad / forense digital / TikTok / Reels).

---

## 🗺️ Mapa completo del repositorio

```
julljoll/Hyperframes/
│
├── 📄 README.md                    Documentación pública del framework
├── 📄 CLAUDE.md                    Instrucciones para Claude Code (desarrollo del monorepo)
├── 📄 AGENTS.md                    Instrucciones para todos los agentes IA del repo
├── 📄 AGENT.md                     Instrucciones específicas para el agente SHA256.US
├── 📄 DESIGN.md                    Design tokens del sistema "Terminal Justice"
├── 📄 CONTRIBUTING.md              Guía de contribución al proyecto
├── 📄 SECURITY.md                  Política de reporte de vulnerabilidades
├── 📄 ADOPTERS.md                  Equipos que usan Hyperframes en producción
├── 📄 LICENSE                      Licencia Apache 2.0
├── 📄 package.json                 Monorepo raíz — scripts y workspaces (bun)
├── 📄 bun.lock                     Lockfile de dependencias
├── 📄 Dockerfile.test              Imagen Docker para generar baselines de tests
│
├── 📁 packages/                    ← NÚCLEO DEL FRAMEWORK
├── 📁 registry/                    ← BLOQUES REUTILIZABLES (88 bloques)
├── 📁 skills/                      ← INSTRUCCIONES PARA AGENTES IA (16 skills)
├── 📁 docs/                        ← SITIO DE DOCUMENTACIÓN (Mintlify)
├── 📁 scripts/                     ← SCRIPTS DE BUILD, RELEASE Y PRODUCCIÓN
│
├── 📁 recursos_video/              ← ENTRADA: assets de cada video SHA256.US
├── 📁 videos/                      ← SALIDA: composiciones HTML generadas
│
└── 📁 base para este proyecto/     ← CONTEXTO ORIGINAL del canal SHA256.US
```

---

## 📁 PARTE 1 — `packages/` — El motor del framework

Esta carpeta contiene los 8 paquetes npm que forman el corazón del sistema.
Cada uno tiene una responsabilidad específica.

```
packages/
├── cli/                  → El comando `hyperframes` que usas en la terminal
├── core/                 → Tipos, parsers, linter, adaptadores de animación
├── engine/               → Captura de frames con Puppeteer + FFmpeg
├── producer/             → Pipeline completo: captura + encode + mezcla de audio
├── player/               → Web component <hyperframes-player> embebible
├── studio/               → Editor visual en el navegador
├── shader-transitions/   → Transiciones WebGL (shaders GLSL)
└── aws-lambda/           → Rendering distribuido en AWS Lambda
```

### `packages/cli/` — Lo que usas directamente

Es el paquete que instala el comando `npx hyperframes`. Contiene todos los
subcomandos que el agente y tú ejecutan en la terminal:

| Comando                               | Qué hace                                               |
| ------------------------------------- | ------------------------------------------------------ |
| `hyperframes init my-video`           | Crea una carpeta con el `index.html` de plantilla      |
| `hyperframes preview`                 | Abre el video en el navegador con live reload          |
| `hyperframes lint`                    | Valida la estructura HTML de la composición            |
| `hyperframes validate`                | Valida en Chrome headless (JS + assets + WCAG)         |
| `hyperframes render -o out.mp4`       | Renderiza el MP4 final                                 |
| `hyperframes transcribe audio.mp3`    | Transcribe un audio a `transcript.json` con timestamps |
| `hyperframes add flash-through-white` | Instala un bloque del registro                         |
| `hyperframes inspect`                 | Inspecciona los clips y duraciones de una composición  |

### `packages/engine/` — El corazón del render

Usa **Puppeteer** (Chrome headless) para abrir el `index.html`, **seekar**
(avanzar frame a frame el timeline GSAP), capturar cada frame como imagen PNG,
y pasárselos a FFmpeg para construir el MP4. Por eso el output es determinístico:
no depende del reloj, sino de posiciones exactas en el timeline.

### `packages/producer/` — El pipeline completo

Orquesta todo: llama al engine para capturar los frames de video, mezcla las
pistas de audio (narración + música + SFX) con FFmpeg, y produce el archivo final.
Los tests de regresión (`tests/**/output.mp4`) verifican que el output no cambia
entre versiones usando métricas PSNR.

---

## 📁 PARTE 2 — `registry/` — Los 88 bloques reutilizables

Son fragmentos de HTML/CSS/JS listos para instalar en cualquier composición
con `npx hyperframes add <nombre-del-bloque>`. Hay tres tipos:

```
registry/
├── blocks/        → Sub-composiciones completas (escenas, overlays, transiciones)
├── components/    → Efectos y snippets individuales
└── examples/      → Plantillas de proyectos completos
```

### Categorías de bloques destacados

**Transiciones** (15+ variantes):
`transitions-3d`, `transitions-blur`, `transitions-cover`, `transitions-grid`,
`transitions-destruction`, `transitions-push`, `transitions-dissolve`,
`transitions-distortion`, `transitions-mechanical`, `transitions-radial`,
`transitions-scale`, `transitions-light`, `transitions-other`,
`flash-through-white`, `glitch`, `whip-pan`, `cinematic-zoom`

**Shader transitions** (WebGL):
`cross-warp-morph`, `chromatic-radial-split`, `domain-warp-dissolve`,
`gravitational-lens`, `ridged-burn`, `ripple-waves`, `swirl-vortex`,
`thermal-distortion`, `sdf-iris`, `light-leak`

**Overlays sociales**:
`instagram-follow`, `tiktok-follow`, `macos-notification`, `reddit-post`,
`x-post`, `spotify-card`, `yt-lower-third`, `logo-outro`

**VFX**:
`vfx-iphone-device`, `vfx-liquid-glass`, `vfx-magnetic`, `vfx-portal`,
`vfx-shatter`, `vfx-text-cursor`, `vfx-liquid-background`

**Code snippets** (temas):
`code-snippet-dark-2026`, `code-snippet-monokai`, `code-snippet-visual-studio-dark`,
`code-snippet-apple-terminal-*` (10+ variantes de terminal Apple)

**Mapas y datos**:
`us-map`, `us-map-bubble`, `us-map-flow`, `us-map-hex`, `spain-map`,
`world-map`, `data-chart`, `flowchart`, `flowchart-vertical`

**Efectos de marca**:
`ios26-liquid-glass`, `macos-tahoe-liquid-glass`, `liquid-glass-context-menu`,
`liquid-glass-media-controls`, `liquid-glass-widgets`

Para instalar cualquier bloque en tu video:

```bash
npx hyperframes add glitch
npx hyperframes add tiktok-follow
npx hyperframes add data-chart
```

---

## 📁 PARTE 3 — `skills/` — Las instrucciones para agentes IA

Los skills son el **"manual de instrucciones"** que los agentes IA (Claude Code,
Cursor, DeepSeek, Gemini CLI, OpenCode) deben leer antes de escribir
composiciones. Sin los skills, el agente comete errores típicos de web developer
que no se aplican a video.

```
skills/
├── hyperframes/           → Skill principal: reglas completas de composición
│   ├── SKILL.md           → Las reglas (leer esto primero)
│   └── references/
│       ├── captions.md            → Subtítulos palabra por palabra
│       ├── transitions.md         → Catálogo de transiciones
│       ├── motion-principles.md   → Principios de movimiento GSAP
│       ├── beat-direction.md      → Ritmo y estructura temporal
│       ├── prompt-expansion.md    → Cómo expandir un brief en composición
│       ├── design-picker.md       → Flujo para elegir design system
│       ├── house-style.md         → Estilos predefinidos
│       ├── visual-styles.md       → 8 estilos visuales nombrados
│       └── video-composition.md   → Reglas de composición de video
│
├── hyperframes-cli/       → Comandos del CLI (init, lint, render...)
├── hyperframes-media/     → Assets: TTS, transcripción, background removal
├── hyperframes-registry/  → Cómo instalar y usar bloques del registry
│
├── gsap/                  → Patrones GSAP correctos para video
├── tailwind/              → Tailwind v4 en composiciones HyperFrames
├── animejs/               → Adapter para Anime.js
├── css-animations/        → Adapter para CSS animations
├── lottie/                → Adapter para Lottie
├── three/                 → Adapter para Three.js
├── waapi/                 → Adapter para Web Animations API
├── typegpu/               → GPU compute en composiciones
│
├── website-to-hyperframes/ → Pipeline para convertir una URL en video
├── remotion-to-hyperframes/ → Migración desde Remotion a HyperFrames
├── remotion-viral-video/   → (skill heredado SHA256.US de la era Remotion)
└── contribute-catalog/    → Cómo contribuir bloques al catalog
```

### Cómo se instalan los skills

```bash
npx skills add heygen-com/hyperframes
```

Esto descarga todos los skills a la carpeta de skills del agente activo.
Una vez instalados, el agente los invoca con comandos como:

```
/hyperframes          → activa el skill principal de composición
/hyperframes-cli      → activa el skill de comandos CLI
/gsap                 → activa el skill de GSAP
/tailwind             → activa el skill de Tailwind v4
/hyperframes-media    → activa el skill de assets (TTS, transcripción)
```

---

## 📁 PARTE 4 — `recursos_video/` — Los assets de cada video SHA256.US

Esta es la carpeta **de entrada** para producción. Aquí depositas los materiales
que el agente necesita para construir cada video.

```
recursos_video/
│
├── README.md              → Guía del flujo de producción (leer primero)
│
├── _TEMPLATE/             → Carpeta modelo — copia esto para cada video nuevo
│   ├── guion.txt          → El texto exacto que se dice en el audio
│   ├── audio/
│   │   └── narration.mp3  → La locución que tú grabas o generas con TTS
│   ├── musica_fondo/
│   │   └── background.mp3 → Música de fondo cyberpunk/tech
│   ├── portada/
│   │   └── cover.png      → Thumbnail del video
│   ├── logo_outro/
│   │   └── logo.png       → Logo PNG transparente para el outro
│   └── images/
│       └── clip-01.png … clip-NN.png  → Imágenes IA (una por escena)
│
├── sfx/                   → Efectos de sonido COMPARTIDOS (todos los videos)
│   ├── word-pop.wav        → Chirp electrónico cuando aparece cada palabra
│   └── lightning.wav      → Crujido digital en cada transición
│
├── logo_y_caratulas/      → Recursos de marca compartidos
│   └── logo-outro.png     → Logo principal SHA256.US
│
├── sha256-v01/            → Video 1 — assets completos
├── sha256-v05/            → Video 5
├── sha256-v06/            → Video 6
├── sha256-v07/            → Video 7
└── sha256-v08/            → Video 8 (el más reciente)
```

### El flujo de producción en 3 pasos simples

**Paso 1** — Copia `_TEMPLATE/` y renómbrala:

```
_TEMPLATE/ → sha256-v09/
```

**Paso 2** — Deposita tus archivos dentro de `sha256-v09/`:

```
audio/narration.mp3       (tu locución)
guion.txt                 (el texto de la locución)
portada/cover.png         (thumbnail)
logo_outro/logo.png       (logo para el final)
musica_fondo/background.mp3  (música)
images/clip-01.png … clip-08.png  (imágenes por escena)
```

**Paso 3** — Le dices al agente:

```
"Crea el video sha256-v09 usando los recursos en recursos_video/sha256-v09"
```

El agente hace el resto automáticamente.

---

## 📁 PARTE 5 — `videos/` — Las composiciones HTML generadas

Esta es la carpeta **de salida**. Por cada video producido existe una subcarpeta
con el `index.html` de la composición final.

```
videos/
├── sha256-v01/
│   └── index.html    → Composición completa lista para renderizar
├── sha256-v02/
│   └── index.html
├── ...
└── sha256-v08/
    └── index.html
```

Ese `index.html` **es** el video. Lo puedes abrir en el navegador y verlo.
Lo puedes renderizar con `npx hyperframes render videos/sha256-v08 -o out/sha256-v08.mp4`.

### Anatomía de un `index.html` de composición

```html
<div data-composition-id="sha256-video" data-width="1080" data-height="1920">
  <!-- Cada clip es un <div class="clip"> con atributos de tiempo -->
  <div class="clip" data-start="0" data-duration="2.5" data-track-index="0">
    <!-- contenido del hook -->
  </div>

  <div class="clip" data-start="2.5" data-duration="2.5" data-track-index="0">
    <!-- contenido de la escena 1 -->
  </div>

  <!-- Audio con pistas independientes -->
  <audio
    data-start="0"
    data-duration="30"
    data-track-index="3"
    data-volume="1.0"
    src="../../recursos_video/sha256-v09/audio/narration.mp3"
  ></audio>

  <audio
    data-start="0"
    data-duration="30"
    data-track-index="4"
    data-volume="0.12"
    src="../../recursos_video/sha256-v09/musica_fondo/background.mp3"
  ></audio>

  <!-- Timeline GSAP — siempre pausado, siempre registrado -->
  <script>
    window.__timelines = window.__timelines || {};
    const tl = gsap.timeline({ paused: true });
    // ... animaciones ...
    window.__timelines["sha256-video"] = tl;
  </script>
</div>
```

Los atributos clave que controlan el timing:

| Atributo              | Qué hace                                                     |
| --------------------- | ------------------------------------------------------------ |
| `data-start`          | Segundo en que empieza el clip                               |
| `data-duration`       | Duración del clip en segundos                                |
| `data-track-index`    | Pista de composición (0=video, 3=narración, 4=música, 5=SFX) |
| `data-volume`         | Volumen del audio (0.0 a 1.0)                                |
| `data-composition-id` | Identificador único de la composición                        |
| `data-width/height`   | Resolución del video (1080×1920 para portrait 9:16)          |

---

## 📁 PARTE 6 — `scripts/` — Automatización y compilación

Contiene dos tipos de scripts: los del framework (release, changelog, tests)
y los específicos del canal SHA256.US.

```
scripts/
│
│   ← Scripts del framework (no tocar):
├── release-prepare.ts         → Prepara una versión nueva del npm package
├── draft-changelog.ts         → Genera el CHANGELOG automáticamente
├── generate-registry-items.ts → Actualiza el registry.json de bloques
├── generate-catalog-pages.ts  → Genera páginas del catálogo en docs/
├── lint-skills.ts             → Valida la estructura de los skills
│
│   ← Scripts SHA256.US (los que usa el agente para producción):
├── generate_v05_html.js       → Compilador del video v05
├── generate_v06_html.js       → Compilador del video v06
├── generate_v07_html.js       → Compilador del video v07
├── generate_v08_html.js       → Compilador del video v08 (más reciente)
│
├── generate_audio_v02.py      → Generador de TTS para v02
├── generate_audio_v03.py      → Generador de TTS para v03
├── ...
└── generate_audio_v08.py      → Generador de TTS para v08
```

### El patrón `generate_vNN_html.js`

Para cada video nuevo, el agente escribe un script Node.js que:

1. Define el array `CLIPS` con los textos y duraciones de cada escena
2. Genera el `index.html` completo con todas las animaciones, captions, audio y transitions
3. Lo escribe en `videos/sha256-vNN/index.html`

Por qué se hace así: el HTML de un video típico tiene más de 1000 líneas. Generarlo
con un script es más confiable que editarlo a mano o que el agente lo escriba
directamente en un solo turno.

```bash
# Flujo de uso:
node scripts/generate_v09_html.js
# → crea videos/sha256-v09/index.html
```

### Los scripts Python de audio (`generate_audio_vNN.py`)

Generan la locución con Edge TTS y ajustan la velocidad usando FFmpeg si el
audio excede 8 segundos por clip. Usan voces en español neutro / colombiano:

```bash
python scripts/generate_audio_v09.py
# → crea recursos_video/sha256-v09/audio/narration.mp3
```

---

## 📁 PARTE 7 — `base para este proyecto/` — El ADN del canal SHA256.US

Esta carpeta contiene los documentos fundacionales que definen el estilo visual
y la estrategia viral del canal. Todo agente debe leerlos antes de componer.

```
base para este proyecto/
├── README.md              → Historia del proyecto (era Remotion → era HyperFrames)
├── DESIGN.md              → Design tokens completos de "Terminal Justice"
├── tiktok-viral-pattern.md → Psicología de retención, hooks, estructura de tiempo
└── project-blueprint.json  → Blueprint JSON completo del proyecto
```

### `DESIGN.md` — El sistema "Terminal Justice"

Define el lenguaje visual del canal. Los valores exactos que ningún agente puede
cambiar o inventar:

| Token               | Valor                    | Uso                        |
| ------------------- | ------------------------ | -------------------------- |
| `background`        | `#121414`                | Fondo de todos los clips   |
| `surface-dim`       | `#0c0f0f`                | Fondos de paneles anidados |
| `surface-container` | `#1e2020`                | Cards y containers         |
| `primary`           | `#FECF06` (Alert Yellow) | Títulos H1, alertas, hooks |
| `secondary`         | `#00FF41` (Cyber Green)  | H2, estados válidos, CTA   |
| `on-surface`        | `#e2e2e2`                | Texto de cuerpo            |
| `outline`           | `rgba(0,255,65,0.15)`    | Bordes de paneles glass    |
| `error`             | `#ffb4ab`                | Estados de error / amenaza |

Fuentes: `Ubuntu 900 italic` (todo el texto visual) + `Share Tech Mono 400`
(logs, código, hashes). Sin border-radius en ningún elemento.

### `tiktok-viral-pattern.md` — La estructura de tiempo obligatoria

Define la estructura que hace que los videos tengan alta retención:

| Segmento       | Duración      | Regla                                                 |
| -------------- | ------------- | ----------------------------------------------------- |
| **Hook**       | 2.5 segundos  | Fondo sólido negro, texto grande, pregunta intrigante |
| **Escenas**    | 2–3s cada una | 3 a 8 clips con Ken Burns y transición entre cada uno |
| **Closer/CTA** | 3 segundos    | Logo, call to action, fade to black                   |

---

## 📄 Los archivos de instrucciones en la raíz

Estos cuatro archivos son los que los agentes leen como "manual de operaciones":

### `AGENTS.md` — Para todos los agentes del repositorio

Instrucciones generales: cómo instalar dependencias (`bun install`, no `npm`),
cómo hacer lint (`oxlint`, no `eslint`), cómo validar composiciones, la estructura
de carpetas. Cualquier agente que trabaje en este repo lo lee primero.

### `AGENT.md` — El agente SHA256.US específico

Instrucciones detalladas para producir videos del canal. Contiene el design system
completo, las reglas de animación GSAP, el workflow paso a paso, el checklist
pre-entrega, los ejemplos de HTML y los patrones de Ken Burns. Es el documento
más importante para producción de videos.

### `CLAUDE.md` — Para Claude Code específicamente

Instrucciones de desarrollo del monorepo: cómo hacer build (`bun run build`),
cómo correr tests, cómo agregar un nuevo comando CLI, cómo generar baselines de
tests de regresión dentro de Docker. Es para desarrollar el framework en sí, no
para crear videos.

### `DESIGN.md` (en la raíz)

El design system en formato `frame.md` — el formato que HyperFrames reconoce
automáticamente como especificación de diseño para video. Tiene los mismos tokens
que `base para este proyecto/DESIGN.md` pero en el formato estándar del framework.

---

## 🔄 Flujo completo de producción — De asset a MP4

```
1. PREPARAR ASSETS
   └── Copiar _TEMPLATE/ → recursos_video/sha256-v09/
   └── Depositar: narration.mp3, guion.txt, cover.png, logo.png, background.mp3

2. GENERAR LOCUCIÓN (si no existe)
   └── python scripts/generate_audio_v09.py
   └── → recursos_video/sha256-v09/audio/narration.mp3

3. TRANSCRIBIR AUDIO (agente)
   └── npx hyperframes transcribe recursos_video/sha256-v09/audio/narration.mp3 --language es
   └── → recursos_video/sha256-v09/transcript.json
        (timestamps de cada palabra para sincronizar captions)

4. ESCRIBIR EL COMPILADOR (agente)
   └── scripts/generate_v09_html.js
        (lee guion.txt + transcript.json, genera el HTML completo)

5. COMPILAR LA COMPOSICIÓN (agente)
   └── node scripts/generate_v09_html.js
   └── → videos/sha256-v09/index.html

6. VALIDAR
   └── npx hyperframes lint videos/sha256-v09      (estructura HTML)
   └── npx hyperframes validate videos/sha256-v09  (JS + assets + WCAG)
   └── Ambos deben pasar con 0 errores

7. PREVISUALIZAR
   └── npx hyperframes preview videos/sha256-v09
   └── → Abre en el navegador con live reload

8. RENDERIZAR
   └── npx hyperframes render videos/sha256-v09 -o out/sha256-v09.mp4
   └── → out/sha256-v09.mp4  ← el video final
```

---

## 🛠️ Comandos de desarrollo del monorepo

Estos son para modificar el framework en sí, no para crear videos:

```bash
bun install           # Instalar dependencias (NUNCA pnpm install)
bun run build         # Compilar todos los paquetes
bun run test          # Correr todos los tests
bun run dev           # Iniciar el studio en el navegador

bunx oxlint <files>   # Lint (NO eslint)
bunx oxfmt <files>    # Format (NO prettier)

# Releases
bun run release:prepare 0.7.0   # Preparar una versión nueva
git push origin main --tags     # Publicar a npm
```

---

## ⚠️ Reglas que el agente nunca puede romper

Extraídas de `AGENT.md` y `AGENTS.md`:

1. **No usar `pnpm`** — solo `bun` para instalar dependencias del monorepo
2. **No usar `eslint` ni `prettier`** — solo `oxlint` y `oxfmt`
3. **No inventar colores** — solo los tokens de Terminal Justice
4. **No border-radius > 0** — todo rectangular
5. **No `Math.random()` ni `Date.now()`** — el render debe ser determinístico
6. **No `gsap.to()` antes del último clip** — solo `gsap.fromTo()` y `gsap.from()`
7. **No `repeat: -1`** — calcular las iteraciones exactas con `Math.ceil()`
8. **No construir el timeline dentro de `async/await` o `setTimeout`** — sincrónicamente
9. **No jumpcuts** — siempre hay una transición entre escenas
10. **No empezar a generar HTML sin leer los 6 archivos del checklist de lectura**

---

## 📚 Recursos externos

| Recurso                                  | URL                                                  |
| ---------------------------------------- | ---------------------------------------------------- |
| Documentación oficial                    | https://hyperframes.heygen.com/introduction          |
| Playground (probar composiciones online) | https://www.hyperframes.dev/                         |
| Catálogo de bloques                      | https://hyperframes.heygen.com/catalog               |
| Showcase (videos de ejemplo)             | https://hyperframes.heygen.com/showcase              |
| Quickstart                               | https://hyperframes.heygen.com/quickstart            |
| Discord                                  | https://discord.gg/EbK98HBPdk                        |
| Guía GSAP                                | https://hyperframes.heygen.com/guides/gsap-animation |
| Deploy en AWS Lambda                     | https://hyperframes.heygen.com/deploy/aws-lambda     |

---

_Documento generado desde el análisis completo de `julljoll/Hyperframes` — junio 2026_
