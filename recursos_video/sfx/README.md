# 🔊 SFX — Efectos de Sonido SHA256.US

Esta carpeta contiene los efectos de sonido electrónicos que se usan en todas las composiciones de video.

## Archivos

| Archivo         | Uso                                                   | Duración | Volumen recomendado  |
| --------------- | ----------------------------------------------------- | -------- | -------------------- |
| `word-pop.mp3`  | Se dispara con cada nueva palabra de la transcripción | < 0.1s   | `data-volume="0.08"` |
| `lightning.mp3` | Crujido digital entre transiciones con relámpago      | < 0.3s   | `data-volume="0.25"` |

## Cómo se usan en el HTML

```html
<!-- Word SFX — un elemento <audio> por palabra importante -->
<audio
  id="sfx-w3"
  src="../../recursos_video/sfx/word-pop.mp3"
  data-start="2.14"
  data-duration="0.1"
  data-track-index="5"
  data-volume="0.08"
></audio>

<!-- Lightning SFX — dispara junto al overlay de relámpago -->
<audio
  id="sfx-t1"
  src="../../recursos_video/sfx/lightning.mp3"
  data-start="7.85"
  data-duration="0.3"
  data-track-index="5"
  data-volume="0.25"
></audio>
```

## Cómo generar los SFX (si necesitas reemplazarlos)

Los archivos actuales son tonos sintéticos generados con la Web Audio API.
Para regenerarlos, ejecuta el script incluido:

```bash
node scripts/generate-sfx.mjs
```

Esto crea `word-pop.mp3` (chirp 880Hz, 80ms) y `lightning.mp3` (noise burst 250ms).

---

_SHA256.US Laboratorio Forense — SFX v1.0_
