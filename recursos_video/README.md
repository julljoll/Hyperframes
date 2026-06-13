# 📁 recursos_video — Flujo de Producción SHA256.US

Esta carpeta es el **punto de entrada** para cada video. Deposita aquí tus assets y el agente construye la composición completa.

---

## ⚡ Flujo Rápido — Cómo crear un video nuevo

### Paso 1: Crea la carpeta del video

```
Copia la carpeta _TEMPLATE y renómbrala con el ID de tu video:
  _TEMPLATE/  →  sha256-v02/
```

### Paso 2: Deposita tus assets

| Archivo             | Ruta dentro de tu carpeta     | Obligatorio                               |
| ------------------- | ----------------------------- | ----------------------------------------- |
| Audio de locución   | `audio/narration.mp3`         | ✅ Sí                                     |
| Texto del guion     | `guion.txt`                   | ✅ Sí                                     |
| Portada del video   | `portada/cover.png`           | ✅ Sí                                     |
| Logo para el outro  | `logo_outro/logo.png`         | ✅ Sí                                     |
| Música de fondo     | `musica_fondo/background.mp3` | ✅ Sí                                     |
| Imágenes por escena | `images/clip-01.png` …        | ⚪ Opcional (el agente da los prompts IA) |

### Paso 3: Pídele al agente que cree el video

```
"Crea el video sha256-v02 usando los recursos en recursos_video/sha256-v02"
```

El agente automáticamente:

1. Transcribe `audio/narration.mp3` → `transcript.json` (timestamps palabra por palabra)
2. Lee `guion.txt` para entender la estructura de escenas
3. Genera `videos/sha256-v02/index.html` con toda la composición
4. Aplica efectos: zoom Ken Burns, parallax, relámpagos, captions sincronizados, word SFX
5. Valida con `npx hyperframes lint` + `npx hyperframes validate`
6. Te entrega el preview y los prompts IA para las imágenes

---

## 🗂️ Estructura Completa

```
recursos_video/
│
├── README.md                        ← Esta guía
│
├── _TEMPLATE/                       ← Copia esta carpeta para cada video nuevo
│   ├── guion.txt                    ← Texto de la locución (lo que se dice en el audio)
│   ├── audio/
│   │   └── narration.mp3            ← Audio de locución que TÚ entregas
│   ├── musica_fondo/
│   │   └── background.mp3           ← Música de fondo que TÚ entregas
│   ├── portada/
│   │   └── cover.png                ← Portada del video (thumbnail)
│   ├── logo_outro/
│   │   └── logo.png                 ← Logo PNG con transparencia para el outro
│   └── images/                      ← Imágenes IA generadas (una por escena)
│
├── sfx/                             ← Efectos de sonido COMPARTIDOS (todos los videos)
│   ├── word-pop.wav                 ← Chirp electrónico por cada nueva palabra
│   ├── lightning.wav                ← Crujido digital para transiciones con relámpago
│   └── README.md                    ← Instrucciones de uso de SFX
│
├── logo_y_caratulas/                ← Recursos de marca COMPARTIDOS
│   └── logo-outro.png               ← Logo principal SHA256.US
│
└── sha256-v01/                      ← Ejemplo de video completo
    ├── guion.json
    ├── guion_completo.txt
    ├── locucion_base/
    ├── logo_custom/
    └── musica_fondo/
```

---

## 🎨 Efectos Automáticos en Cada Video

Cada video generado incluye automáticamente:

### Imagen de fondo

- **Ken Burns**: zoom lento `scale: 1.05 → 1.15` durante el clip
- **Parallax alternado**: escenas pares deslizan derecha→izquierda, impares izquierda→derecha
- **Overlay oscuro**: gradiente `rgba(12,15,15,0.4) → rgba(12,15,15,0.85)` para legibilidad

### Transiciones entre escenas (siempre diferentes)

| Posición     | Transición               | Efecto                        |
| ------------ | ------------------------ | ----------------------------- |
| Hook → S1    | Glitch + chromatic split | Distorsión digital de entrada |
| S1 → S2      | Zoom through             | Empuje cinematográfico        |
| S2 → S3      | Grid dissolve            | Bloques de datos tech         |
| S3 → S4      | Staggered blocks         | Reveal editorial por bloques  |
| S4 → S5      | Diagonal split           | Cambio de sección limpio      |
| S5 → S6      | Overexposure             | Clímax / reveal final         |
| S6 → Closer  | Blur crossfade           | Wind-down suave               |
| Closer → Fin | Color dip to black       | Cierre cinematográfico        |

### Relámpago digital entre transiciones

- SVG animado con trayecto irregular tipo zigzag
- Color: `#00FF41` (Cyber Green del design system)
- Duración: 0.15s + `lightning.wav` SFX sincronizado

### Captions (subtítulos) sincronizados

- Aparecen palabra por palabra en sync con el audio
- Palabra activa: `#FECF06` con glow + scale 1.08x
- Sonido `word-pop.wav` en cada nueva palabra
- Fuente: Ubuntu 900 italic, 52px

### Iconos Material Design

- Shield, gavel, fingerprint, security, analytics — según el clip
- Integrados en badges y alertas

### Outro

- Logo animado con zoom + glow
- Fondo blur oscuro
- Fade to black al final

---

## 📋 Requisitos del Audio

- **Formato**: MP3 o WAV
- **Calidad**: 128kbps mínimo
- **Idioma**: Español (el agente usa `--language es` en la transcripción)
- **Voz recomendada**: `es-CO-GonzaloNeural`, `es-VE-SebastianNeural` (Edge TTS)

---

## 🖼️ Requisitos de Imágenes

- **Resolución**: 1080×1920px (portrait 9:16)
- **Formato**: PNG o JPG
- **Estilo**: Fotorealismo conceptual, fondo oscuro, sin texto incrustado
- Una imagen por escena (el agente te da los prompts IA exactos para Midjourney/DALL-E)

---

_SHA256.US Laboratorio Forense — Flujo de Producción v2.0_
