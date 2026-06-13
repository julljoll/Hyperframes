# Fórmulas Narrativas por Tipo de Caso

## 1. RANSOMWARE (Fórmula: El Rehén Digital)

**Arco narrativo:**
HOOK (cifra de rescate impactante) → VÍCTIMA (quién era, qué tenía) → VECTOR (cómo entró) → CIFRADO (el momento) → NEGOCIACIÓN (pagaron o no) → FORENSE (cómo se rastreó) → LECCIÓN

**Hook templates:**
- "Pagaron $[X]M... y el atacante pidió el doble."
- "$[X] millones en criptomonedas. 48 horas. ¿Pagas o no?"
- "El hospital pagó $[X]M para recuperar datos de pacientes. Mira el error."

**Badge sequence:** `EL RESCATE` → `VECTOR INICIAL` → `CIFRADO TOTAL` → `NEGOCIACIÓN` → `ANÁLISIS` → `LA PREVENCIÓN`

**Power Words:** `CIFRADO`, `REHÉN`, `IRREVERSIBLE`, `BITCOIN`, `DECRYPTOR`, `EXFILTRADO`

---

## 2. PHISHING / BEC (Fórmula: La Identidad Robada)

**Arco narrativo:**
HOOK (transferencia bancaria pérdida) → CONTEXTO (empresa, empleado objetivo) → EL EMAIL (anatomía del engaño) → EL CLIC (el momento fatal) → DAÑO (consecuencias) → DETECCIÓN (cómo lo descubrieron) → LECCIÓN

**Hook templates:**
- "La contadora hizo todo bien. Y aun así perdieron $[X]M."
- "El CEO firmó la transferencia. Pero el CEO estaba de vacaciones."
- "Un email. Una transferencia. Nunca recuperaron el dinero."

**Badge sequence:** `EL OBJETIVO` → `EL ANZUELO` → `EL CLIC FATAL` → `TRANSFERENCIA` → `FORENSE EMAIL` → `DETECCIÓN`

**Power Words:** `SPEAR-PHISHING`, `SUPLANTACIÓN`, `BEC`, `WIRE TRANSFER`, `COMPROMETIDO`

---

## 3. APT / ESTADO-NACIÓN (Fórmula: El Espía Invisible)

**Arco narrativo:**
HOOK (duración del acceso oculto) → ACTOR (grupo APT, país de origen si es público) → INFILTRACIÓN (método inicial) → PERSISTENCIA (cómo se quedaron) → EXFILTRACIÓN (qué robaron) → DESCUBRIMIENTO (meses/años después) → LECCIÓN

**Hook templates:**
- "Estuvieron dentro **[X] meses**. Nadie lo vio."
- "APT-[X] robó diseños de defensa. Los tuvieron **[X] años** antes de saberlo."
- "El intruso estuvo en la red más tiempo que algunos empleados."

**Badge sequence:** `EL ACTOR` → `ACCESO INICIAL` → `PERSISTENCIA` → `MOVIMIENTO LATERAL` → `EXFILTRACIÓN` → `ATRIBUCIÓN`

**Power Words:** `APT`, `ESTADO-NACIÓN`, `INVISIBLE`, `PERSISTENCIA`, `LATERAL`, `ATRIBUCIÓN`

---

## 4. INSIDER THREAT (Fórmula: El Enemigo Interior)

**Arco narrativo:**
HOOK (traición inesperada) → PERFIL (empleado de confianza) → MOTIVACIÓN (dinero, venganza, ideología) → MÉTODO (qué acceso tenía) → EXTRACCIÓN (qué llevó) → DETECCIÓN (DLP, comportamiento anómalo) → LECCIÓN

**Hook templates:**
- "Tenía acceso a todo. Y lo vendió todo."
- "12 años en la empresa. 3 meses robando datos."
- "No fue un hacker externo. Fue alguien que conocían."

**Badge sequence:** `EL PERFIL` → `ACCESO PRIVILEGIADO` → `LA TRAICIÓN` → `EXTRACCIÓN` → `DETECCIÓN DLP` → `CONSECUENCIAS`

**Power Words:** `PRIVILEGIADO`, `TRAICIÓN`, `DLP`, `ANOMALÍA`, `EXFILTRADO`, `INSIDER`

---

## 5. ZERO-DAY / VULNERABILIDAD CRÍTICA (Fórmula: La Brecha Invisible)

**Arco narrativo:**
HOOK (impacto masivo antes de que existiera el parche) → QUÉ ES (explicación de zero-day en 1 oración) → DESCUBRIMIENTO (quién lo encontró primero) → EXPLOTACIÓN (cómo se usó en la naturaleza) → DIVULGACIÓN (responsible disclosure o no) → PARCHE (cuánto tardó) → LECCIÓN

**Hook templates:**
- "El parche llegó **[X] días** después. Para entonces, ya era tarde."
- "Afectó a [X] millones de dispositivos. Y nadie lo sabía."
- "Lo descubrieron el mismo día que lo estaban explotando."

**Badge sequence:** `ZERO-DAY` → `SUPERFICIE DE ATAQUE` → `PRIMER EXPLOIT` → `IMPACTO MASIVO` → `DIVULGACIÓN` → `MITIGACIÓN`

**Power Words:** `ZERO-DAY`, `EXPLOIT`, `CVE`, `PARCHE`, `SUPERFICIE`, `EXPOSICIÓN`

---

## 6. CASO FORENSE / INVESTIGACIÓN (Fórmula: El Rastro Digital)

**Arco narrativo:**
HOOK (crimen digital o hallazgo sorprendente) → EVIDENCIA INICIAL (qué activó la investigación) → ARTEFACTOS (qué dejó el atacante) → ANÁLISIS (metodología forense) → ATRIBUCIÓN (a quién apunta la evidencia) → RESOLUCIÓN → LECCIÓN

**Hook templates:**
- "Un solo hash SHA256 los conectó con 14 ataques en 3 países."
- "Borraron los logs. Pero olvidaron los metadatos."
- "El timestamp los delató. Su zona horaria era [X]."

**Badge sequence:** `EVIDENCIA` → `ARTEFACTOS` → `ANÁLISIS HASH` → `CORRELACIÓN` → `ATRIBUCIÓN` → `RESOLUCIÓN`

**Power Words:** `HASH`, `ARTEFACTO`, `TIMESTAMP`, `FORENSE`, `ATRIBUCIÓN`, `CORRELACIÓN`

---

## Plantilla Universal de Guión (Adaptar por Tipo)

```
[HOOK - Voz urgente, pausa al final]:
"[Pregunta o dato que detiene el scroll]... [pausa] Este es el caso de [nombre/empresa/fecha]."

[ESCENA 1 - Contexto]:
"[Año]. [Quién era la víctima]. [Dato de escala que genere impacto]."

[ESCENA 2 - Vector]:
"Todo comenzó con [método de ataque]. [Una sola acción que lo desencadenó todo]."

[ESCENA 3 - Escalada]:
"En [tiempo transcurrido], [consecuencia medible]. [Cifra de impacto exacta]."

[ESCENA 4 - Forense]:
"Los investigadores encontraron [artefacto técnico]. El patrón era [observación técnica accesible]."

[ESCENA 5 - Lección]:
"[Medida de seguridad específica] hubiera [resultado diferente]. [Dato de efectividad]."

[CLOSER - CTA directa]:
"[Nombre de tu empresa/canal] analiza este tipo de casos cada semana. [Instrucción de acción: guardar, seguir, comentar]."
```

---

## Adaptaciones por Plataforma

### TikTok
- Narración más rápida, cortes más frecuentes
- Power words más agresivos visualmente
- CTA: "Guarda", "Comenta", "Duet"
- Música: tendencia actual de TikTok + SFX computarizado

### Instagram Reels
- Puede ser ligeramente más largo (hasta 90s)
- Estética más pulida, más glassmorphism
- CTA: "Guarda en colección", "Comparte con tu equipo IT"
- Stories de seguimiento con encuesta

### YouTube Shorts
- Intro más larga permitida (hasta 10s)
- Puede incluir branding más visible
- CTA: "Suscríbete", "Mira el análisis completo en el canal"
- Link a video largo relacionado
