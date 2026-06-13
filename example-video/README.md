# HyperFrames Example Video - Product Launch

Este ejemplo demuestra cómo crear un video promocional usando HyperFrames siguiendo las mejores prácticas del repositorio.

## Características implementadas

### 1. **Design System** (House Style)
- **Paleta**: Dark/Premium (`#0D1B2A`, `#1B263B`, `#FCA311`, `#E0E1DD`)
- **Tipografía**: Inter (sans-serif moderna)
- **Estilo**: Tech/cinemático con gradientes sutiles

### 2. **Background Layer** (Profundidad visual)
- 4 elementos decorativos persistentes:
  - 2 radial glows con breathing animation
  - Grid pattern sutil
  - Ghost text "LAUNCH" a baja opacidad
- Todos con animación ambiental lenta (GSAP)

### 3. **Layout Before Animation**
- Contenido posicionado en su estado más visible
- `.scene-content` con flexbox, padding y gap
- Sin posicionamiento absoluto para el contenido principal

### 4. **Data Attributes de Timing**
```html
<div class="clip" data-start="0" data-duration="8"></div>
```
- `data-start`: Cuándo comienza el clip
- `data-duration`: Duración en segundos
- `data-track-index`: Para control de pistas (implícito)

### 5. **GSAP Timeline**
- Entradas con `gsap.from()` (desde invisible/offscreen)
- Salidas con `gsap.to()` (hacia invisible/offscreen)
- Stagger en las feature cards (0.15s entre cada una)
- Eases variados: `power3.out`, `back.out()`, `sine.inOut`

### 6. **Ritmo de escena**
```
0.0s  → Background elements entran
0.5s  → Logo entra
1.0s  → Título hero entra
2.0s  → Subtítulo entra
3.0s  → Feature cards (staggered)
4.5s  → CTA button con bounce
7.0s  → Exit animations (reverse order)
8.0s  → Fin
```

## Cómo usar

### Opción 1: Preview en navegador
```bash
cd /workspace/example-video
npx hyperframes preview
```

### Opción 2: Renderizar a MP4
```bash
cd /workspace/example-video
npx hyperframes render --output product-launch.mp4
```

### Opción 3: Usar variables parametrizadas
El ejemplo puede extenderse con `data-composition-variables` para:
- Cambiar título y colores por CLI
- Generar múltiples versiones del mismo video
- Personalización programática para agentes de IA

## Estructura del archivo

```
index.html
├── <head>
│   ├── GSAP CDN
│   └── CSS styles
│       ├── Background decoratives
│       ├── Scene content layout
│       ├── Components (logo, title, cards, CTA)
│       └── Clip visibility states
├── <body>
│   └── [data-composition-id="root"]
│       ├── Background elements (.clip)
│       └── .scene-content
│           ├── Logo container
│           ├── Hero title
│           ├── Subtitle
│           ├── Feature cards (3x)
│           └── CTA button
└── <script>
    └── GSAP timeline con todos los tweens
```

## Referencias

- [HyperFrames SKILL.md](../skills/hyperframes/SKILL.md)
- [House Style](../skills/hyperframes/house-style.md)
- [Motion Principles](../skills/hyperframes/references/motion-principles.md)
- [Video Composition](../skills/hyperframes/references/video-composition.md)
