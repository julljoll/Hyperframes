# Patrón de Video Viral para TikTok (Sin Iconos)

Este documento define la estructura y configuración obligatoria (`src/video-config.json`) para generar videos de alto impacto viral en TikTok, Reels y Shorts. Sigue este patrón exacto para maximizar la retención y optimizar el rendimiento ante el algoritmo actual.

---

## ⚡ Reglas del Algoritmo de TikTok (Retención al 100%)

1. **Gancho Ultra Rápido (Hook):** Máximo 75 frames (2.5 segundos). Los primeros frames deben usar colores de alerta alta (Amarillo `#FECF06` o Verde `#00FF41`) y una pregunta intrincada o título impactante.
2. **Pacing Acelerado (Ritmo Dinámico):** Transición de escenas cada 60-90 frames (2-3 segundos) para evitar la pérdida de interés.
3. **Cierre Inmediato (Closer CTA):** Máximo 90 frames (3.0 segundos). La llamada a la acción debe ser directa y veloz, previniendo que el usuario deslice hacia otro video.
4. **Sin Iconos en Pantalla:** Los banners de prueba social (`socialProofs`) deben ser texto limpio de alta credibilidad. Está prohibido usar emojis o iconos en el archivo JSON.
5. **Palabras de Poder (Power Words):** Destellos sincronizados de palabras clave en mayúsculas por 15-30 frames.
6. **Efecto Parallax, Zoom Continuo y Transición Matrix en Fondos:** Las imágenes de fondo deben desplazarse verticalmente (efecto Parallax) con un zoom Ken Burns progresivo (`1.05` a `1.15`) en ciclos de 3 segundos. Adicionalmente, las transiciones de corte entre imágenes deben aplicar un filtro de color de glitch digital estilo Matrix (tono verde neón de alto contraste y sepia) y mostrar un overlay de código binario holográfico fluorescente en los frames de transición para mantener al espectador altamente enganchado.
7. **Único Diálogo en Pantalla (Subtítulos Limpios):** Debe mostrarse **un solo subtítulo o diálogo a la vez**. Está prohibido duplicar el texto en los paneles visuales de las secciones y en las leyendas de voz en off (`AnimatedCaption`) de forma simultánea, ya que esto desvía la atención del usuario. Todo diálogo narrado se renderizará únicamente mediante subtítulos dinámicos palabra por palabra centrados.
8. **Efecto de Sonido de Transición Computarizado:** Cada cambio de escena o transición debe ir acompañado de un efecto de sonido digital/computarizado corto para alertar y re-enganchar el oído del espectador.
9. **Movimiento e Intercalado Obligatorio en Imágenes:** Ninguna imagen de fondo puede quedar estática. Todas deben aplicar zoom y parallax continuos en movimiento. Para evitar la monotonía, se debe intercalar la dirección del movimiento horizontal entre imágenes consecutivas (una de izquierda a derecha, la siguiente de derecha a izquierda).
10. **Efecto de Sonido e Iluminación de Relámpago:** Para transiciones o momentos dramáticos, se debe aplicar un destello de luz blanca (flicker rápido de fondo claro y oscuro simulando un relámpago) sincronizado con un efecto de sonido de trueno/relámpago que ilumine la escena de forma impactante.
11. **Diseño de Textos y Márgenes Obligatorios:** Todos los textos y subtítulos del video deben mostrarse **siempre centrados** y respetar estrictamente los siguientes márgenes de seguridad en pantalla:
    * **Margen Lateral (Izquierdo/Derecho):** 125 px
    * **Margen Superior:** 300 px
    * **Margen Inferior:** 200 px
12. **Tamaños de Letra para Legibilidad en Móviles (Resolución 1080x1920):**
    * **Subtítulos Principales (Palabra por palabra):** `48px` a `56px` (máxima legibilidad rápida).
    * **Títulos Principales / Alertas / Hooks:** `64px` a `80px`.
    * **Textos Secundarios / Citas / Contenidos de Sección:** `32px` a `42px`.
    * **Etiquetas secundarias / Badges / Banners:** `24px` a `28px`.
    * *Evitar tamaños menores a `24px` en cualquier composición vertical de 1080x1920.*

---

## 🛠️ Estructura del Config (`src/video-config.json`)

Cada vez que crees un video, rellena el archivo `src/video-config.json` respetando el siguiente esquema exacto:

```json
{
  "hook": {
    "warning": "TÍTULO DE ALERTA (Mayúsculas)",
    "text1": "¿Pregunta intrigante o afirmación inicial que detenga el scroll?",
    "text2": "La revelación o el gancho complementario en la segunda línea.",
    "image": "images/clip-0.png",
    "duration": 75
  },
  "sections": [
    {
      "id": "clip-1",
      "image": "images/clip-1.png",
      "badge": "Subtítulo de Escena",
      "text": "Frase muy corta y al grano. Pacing rápido.",
      "layout": "left",
      "label": "MARCA DE AGUA"
    },
    {
      "id": "clip-2",
      "image": "images/clip-2.png",
      "badge": "El Conflicto",
      "text": "Desarrollo del punto clave en máximo dos líneas.",
      "layout": "center",
      "isDashed": true,
      "label": "DATOS DE TELEMETRÍA"
    },
    {
      "id": "clip-3",
      "image": "images/clip-3.png",
      "badge": "La Solución / Detalle",
      "text": "Explicación técnica o visual con tipografía estilo terminal.",
      "layout": "split",
      "hasScanline": true,
      "isTerminal": true
    }
  ],
  "powerWords": [
    {"word": "PALABRA CLAVE", "frame": 50, "color": "#FECF06"},
    {"word": "OTRA PALABRA", "frame": 180, "color": "#00FF41"}
  ],
  "socialProofs": [
    {"frame": 120, "text": "Texto legal o estadístico sin iconos ni emojis"},
    {"frame": 400, "text": "Fuente o dato científico verificado"}
  ],
  "closer": {
    "text1": "Llamada a la acción rápida y directa.",
    "text2": "¡Instrucción final para guardar o compartir el video!",
    "image": "images/clip-4.png",
    "duration": 90
  }
}
```

---

## 🚀 Flujo de Trabajo para Generación del Video

1. **Editar Configuración:** Rellena `src/video-config.json` siguiendo esta plantilla.
2. **Generar Audio TTS:**
   ```bash
   npm run audio:google
   ```
   *(Este comando lee el config, genera las voces con Google TTS y actualiza automáticamente las duraciones de frames en `src/audioConfig.ts`)*
3. **Previsualizar en Remotion Studio:**
   ```bash
   npm run dev
   ```
4. **Renderizar en HD (9:16 - 1080x1920):**
   ```bash
   npm run build:google-tts
   ```
