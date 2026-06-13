# Esquema Completo: video-config.json

Este es el esquema de referencia oficial para el motor Remotion de SHA256.US.

## Esquema Completo

```json
{
  "hook": {
    "warning": "string — TÍTULO EN MAYÚSCULAS. Máx 5 palabras. Color: #FECF06",
    "text1": "string — Pregunta o afirmación de gancho. Máx 12 palabras.",
    "text2": "string — Segunda línea complementaria. Máx 10 palabras.",
    "image": "string — Ruta: images/vN_clip-0.png",
    "duration": 75
  },
  "sections": [
    {
      "id": "string — clip-1, clip-2, etc.",
      "image": "string — Ruta: images/vN_clip-N.png",
      "badge": "string — Máx 3 palabras EN MAYÚSCULAS. Ej: VECTOR DE ATAQUE",
      "text": "string — Máx 15 palabras. Sin emojis. Pacing agresivo.",
      "layout": "left | center | split | right",
      "label": "string — OPCIONAL. Marca de agua técnica. Ej: SHA256.US FORENSE",
      "isDashed": "boolean — OPCIONAL. true = borde punteado estilo terminal",
      "hasScanline": "boolean — OPCIONAL. true = overlay de scanlines CRT",
      "isTerminal": "boolean — OPCIONAL. true = texto estilo output de terminal",
      "highlight": "string — OPCIONAL. Palabra específica a resaltar en #FECF06",
      "duration": "number — OPCIONAL. Frames personalizados (default: 90)"
    }
  ],
  "powerWords": [
    {
      "word": "string — UNA palabra en MAYÚSCULAS",
      "frame": "number — Frame exacto de aparición",
      "color": "#FECF06 | #13FF43 | #e2e2e2"
    }
  ],
  "socialProofs": [
    {
      "frame": "number — Frame de aparición (no solapar con powerWords)",
      "text": "string — Dato estadístico o legal verificable. Sin emojis. Máx 12 palabras."
    }
  ],
  "closer": {
    "text1": "string — CTA principal. Directa. Máx 10 palabras.",
    "text2": "string — Instrucción secundaria (seguir, guardar, comentar). Máx 8 palabras.",
    "image": "string — Ruta: images/vN_clip-final.png",
    "duration": 90
  }
}
```

## Reglas de Layouts

| Layout   | Descripción                                           | Cuándo usar                       |
| -------- | ----------------------------------------------------- | --------------------------------- |
| `left`   | Texto alineado a la izquierda con imagen a la derecha | Contexto, datos                   |
| `center` | Texto centrado sobre imagen de fondo                  | Momentos de impacto, revelaciones |
| `split`  | Panel dividido 50/50 texto-imagen                     | Comparaciones, antes/después      |
| `right`  | Texto alineado a la derecha                           | Variación visual, análisis        |

## Cálculo de Frames para powerWords y socialProofs

Con 6 secciones de 90 frames c/u + hook (75) + closer (90):

- Total: 75 + (6 × 90) + 90 = **705 frames**

Distribución recomendada de powerWords:

- Frame 40: En el hook (impacto inicial)
- Frame 150: Fin de sección 1 (contexto establecido)
- Frame 280: Clímax del conflicto
- Frame 420: Punto de análisis técnico
- Frame 560: La lección clave
- Frame 650: Pre-closer (urgencia final)

Distribución de socialProofs:

- Frame 120: Después del hook (credibilidad)
- Frame 380: A mitad del video (refuerzo)

## Ejemplo Real Completo

```json
{
  "hook": {
    "warning": "ATAQUE CONFIRMADO",
    "text1": "¿Cómo robaron $65M con un solo correo?",
    "text2": "El FBI tardó 8 meses en rastrearlos.",
    "image": "images/v7_clip-0.png",
    "duration": 75
  },
  "sections": [
    {
      "id": "clip-1",
      "image": "images/v7_clip-1.png",
      "badge": "EL OBJETIVO",
      "text": "2019. Empresa farmacéutica de Fortune 500. 12,000 empleados.",
      "layout": "left",
      "label": "SHA256.US FORENSE"
    },
    {
      "id": "clip-2",
      "image": "images/v7_clip-2.png",
      "badge": "VECTOR INICIAL",
      "text": "Un email. Dominio falso con diferencia de un carácter.",
      "layout": "center",
      "isDashed": true
    },
    {
      "id": "clip-3",
      "image": "images/v7_clip-3.png",
      "badge": "EXFILTRACIÓN",
      "text": "72 horas. 140GB de datos. Sin alertas de SIEM.",
      "layout": "split",
      "hasScanline": true,
      "isTerminal": true
    },
    {
      "id": "clip-4",
      "image": "images/v7_clip-4.png",
      "badge": "ANÁLISIS FORENSE",
      "text": "El hash SHA256 del payload coincidía con malware de 2017.",
      "layout": "right",
      "highlight": "SHA256"
    },
    {
      "id": "clip-5",
      "image": "images/v7_clip-5.png",
      "badge": "LA LECCIÓN",
      "text": "MFA y monitoreo DNS hubieran detenido esto en minutos.",
      "layout": "center"
    }
  ],
  "powerWords": [
    { "word": "VULNERADO", "frame": 40, "color": "#FECF06" },
    { "word": "EXFILTRACIÓN", "frame": 180, "color": "#13FF43" },
    { "word": "INVISIBLE", "frame": 310, "color": "#FECF06" },
    { "word": "FORENSE", "frame": 450, "color": "#13FF43" },
    { "word": "PREVENIBLE", "frame": 580, "color": "#FECF06" }
  ],
  "socialProofs": [
    { "frame": 120, "text": "Fuente: FBI IC3 Report 2019 — BEC Losses: $1.7B USD" },
    { "frame": 390, "text": "NIST SP 800-61 Rev.2 — Incident Response Framework" }
  ],
  "closer": {
    "text1": "Guarda esto. Tu empresa podría ser el siguiente objetivo.",
    "text2": "Sigue SHA256.US. Un caso forense cada semana.",
    "image": "images/v7_clip-final.png",
    "duration": 90
  }
}
```
