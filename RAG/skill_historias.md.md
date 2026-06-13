---
sourceFile: "skill_historias.md"
exportDate: "2026-06-10T21:39:35.752Z"
---

# skill_historias.md

d2da384e-d408-462d-bcf0-6f43fe957fe2

skill\_historias.md

890b1225-2e4c-49b4-86c5-3392513427ae

--------------------------------------------------------------------------------

name: skill\_historias

description: >

Genera historias narrativas de alto impacto basadas en casos jurídicos reales de todo el mundo

donde una prueba digital fue determinante en el resultado del juicio, con énfasis en materia

mercantil, civil y derecho corporativo. Usa este skill siempre que el usuario pida: historias

legales reales, casos de prueba digital, jurisprudencia narrativa, storytelling jurídico,

casos de WhatsApp/email/blockchain en juicios, contratos electrónicos impugnados, fraude

corporativo digital, o cualquier combinación de "prueba digital + caso legal + historia real".

También actívalo cuando el usuario mencione NotebookLM, contenido para reels legales, guiones

jurídicos, o pida adaptar un caso real al formato de historia para redes sociales o podcast.

Skill: Historias Reales de Prueba Digital en el Derecho

Producir historias narrativas detalladas, dramáticas y rigurosas sobre casos jurídicos reales

en los que la

evidencia digital

fue el eje central del litigio. El output está optimizado

para ser importado directamente en

como fuente de conocimiento, y también sirve

como guion base para Reels, TikToks, podcasts y artículos de divulgación legal.

--------------------------------------------------------------------------------

Estructura Maestra de Cada Historia

#### Cada historia generada debe seguir este esquema de 7 secciones:

configuracion\_historia:
  titulo:           (Nombre del caso, impactante y real)
  pais\_jurisdiccion: (País + tribunal o corte)
  año:              (Año del fallo o momento clave)
  rama\_derecho:     \[mercantil | civil | corporativo | penal-económico | laboral\]
  prueba\_digital:   (Tipo exacto: email, WhatsApp, blockchain, metadatos, grabación, etc.)
  resultado\_fallo:  (Quién ganó y por qué)
  impacto\_legal:    (Jurisprudencia creada o precedente)

narrativa:
  gancho:           (Pregunta o afirmación que engancha — 1 oración)
  contexto:         (Quiénes son los actores, qué estaba en juego — 2-3 párrafos)
  conflicto:        (El momento en que la prueba digital apareció o fue impugnada)
  clímax:           (Lo que el juez, árbitro o tribunal decidió sobre esa prueba)
  resolución:       (Resultado final del caso)
  lección\_legal:    (La norma o principio que se consolidó con este caso)
  cta\_reel:         (Llamada a la acción corta para redes sociales)

--------------------------------------------------------------------------------

Áreas de Derecho Cubiertas

1. Derecho Mercantil

Contratos electrónicos disputados (validez, firma electrónica, aceptación por email)

Fraude en operaciones comerciales digitales

Incumplimiento de acuerdos pactados vía mensajería instantánea

Facturas electrónicas como prueba de deuda

2. Derecho Civil

Contratos de compraventa de inmuebles gestionados por email

Herencias y testamentos digitales

Daño moral por publicaciones en redes sociales

Prueba de convivencia o divorcio por mensajes y geolocalización

3. Derecho Corporativo

Due diligence y revelación de información confidencial vía email

Acuerdos de accionistas pactados por WhatsApp o Slack

Fuga de información corporativa (forensia digital)

#### Contratos SaaS y licencias de software en disputa

4. Derecho Laboral (complementario)

Despidos por mensajes o publicaciones en redes

Acoso laboral documentado digitalmente

Contratos de trabajo firmados electrónicamente

--------------------------------------------------------------------------------

Banco de Casos Reales de Referencia

El modelo debe conocer y expandir sobre los siguientes casos paradigmáticos. Al generar una

historia, puede tomar uno de estos como base o buscar casos similares según la región solicitada.

Casos Globales Emblemáticos

Prueba Digital

Peregrine Financial Group (2012)

Emails internos + registros bancarios digitales

Corporativo/Fraude

WhatsApp como prueba en contratos verbales

España (TS 2016)

Capturas de pantalla WhatsApp

Enron Scandal (2001)

200,000+ emails corporativos

Corporativo

Livent Inc. Fraud

Hojas de cálculo manipuladas

Mercantil/Fraude

Blockchain como prueba de propiedad IP

China (Hangzhou 2018)

Hash en blockchain

Caso "Selfie" como firma digital

Reino Unido

Fotografía con metadatos

HealthSouth Fraud

Registros contables digitales alterados

Corporativo

Ashley Madison Data Breach Lawsuits

Canadá/EE.UU.

Base de datos filtrada

Civil/Privacidad

Contrato por WhatsApp - caso israelí

Cadena de mensajes + emojis 🙏

Metadatos de Word revelan autoría

Propiedades ocultas de archivo

Civil/Penal

#### Nota sobre el caso israelí (caso del emoji):

En 2023, un tribunal israelí condenó a un

arrendatario a pagar daños porque el uso del emoji 🙏 en un chat fue interpretado como

confirmación del contrato de arrendamiento. Prueba de la evolución del lenguaje digital

en el derecho de contratos.

--------------------------------------------------------------------------------

Parámetros de Generación (Variables de Input)

Cuando el usuario active este skill, recoger los siguientes parámetros antes de generar:

parametros\_input:
  region\_geografica:    \[global | latinoamerica | europa | norteamerica | asia | especifica\]
  rama\_derecho:         \[mercantil | civil | corporativo | laboral | todos\]
  tipo\_prueba\_digital:  \[email | whatsapp | blockchain | metadatos | grabacion | redes\_sociales | todos\]
  formato\_output:       \[historia\_larga | guion\_reel | resumen\_notebooklm | ficha\_tecnica\]
  tono:                 \[divulgativo | academico | narrativo-dramatico | periodistico\]
  longitud:             \[corta\_300palabras | media\_600palabras | larga\_1200palabras\]

Si el usuario no especifica parámetros, usar estos

región: global

rama: mercantil + corporativo

tipo prueba: todos

formato: historia\_larga

tono: narrativo-dramático

longitud: media\_600palabras

--------------------------------------------------------------------------------

Reglas de Calidad del Output

#### SIEMPRE incluir:

✅ Nombre real del caso o identificador judicial cuando exista

✅ País y año verificables

✅ Norma jurídica aplicada (ej: Art. 4 Ley de Mensajes de Datos, Federal Rules of Evidence 902)

✅ Qué tipo exacto de prueba digital se presentó

✅ Cómo fue autenticada esa prueba ante el tribunal

✅ El argumento de la parte contraria (impugnación de la prueba)

✅ La decisión del juez sobre la admisibilidad

✅ Lección legal concreta y aplicable hoy

#### NUNCA hacer:

❌ Inventar casos que no existan

❌ Mezclar jurisdicciones sin advertirlo

❌ Omitir la fuente o identificador del caso

❌ Usar lenguaje excesivamente técnico sin explicación

❌ Presentar el resultado como definitivo si el caso está en apelación

--------------------------------------------------------------------------------

Formatos de Output Específicos

Formato A — Historia Larga (NotebookLM / Artículo)

# \[TÍTULO DEL CASO\]
\*\*País:\*\* | \*\*Año:\*\* | \*\*Tribunal:\*\* | \*\*Área:\*\* | \*\*Prueba Digital:\*\*

---

## El Contexto
\[2-3 párrafos describiendo el conflicto, las partes y los antecedentes\]

## La Prueba que lo Cambió Todo
\[El momento exacto en que la evidencia digital entró al proceso\]

## El Debate Jurídico
\[Argumento de ambas partes sobre la validez de la prueba\]

## La Decisión del Tribunal
\[Razonamiento del juez, norma aplicada, decisión sobre admisibilidad\]

## El Resultado
\[Fallo final, consecuencias para las partes\]

## La Lección
\[Principio jurídico consolidado, aplicación práctica hoy\]

---
\*Fuente: \[referencia del caso\]\*
\*Marco normativo: \[ley o convención aplicada\]\*

Formato B — Guion para Reel/TikTok (5 clips × 3 segundos)

{
  "configuracion\_reel": {
    "caso": "",
    "hook\_pregunta": "",
    "duracion\_total": "15 segundos"
  },
  "clips": \[
    { "clip": 1, "texto\_pantalla": "", "prompt\_imagen": "" },
    { "clip": 2, "texto\_pantalla": "", "prompt\_imagen": "" },
    { "clip": 3, "texto\_pantalla": "", "prompt\_imagen": "" },
    { "clip": 4, "texto\_pantalla": "", "prompt\_imagen": "" },
    { "clip": 5, "texto\_pantalla": "\[CTA\]", "prompt\_imagen": "" }
  \]
}

Formato C — Ficha Técnica (NotebookLM Source Card)

CASO: 
JURISDICCIÓN: 
AÑO: 
NORMA APLICADA: 
TIPO DE PRUEBA DIGITAL: 
MÉTODO DE AUTENTICACIÓN: 
RESULTADO: 
PRECEDENTE CREADO: 
FUENTE PRIMARIA: 
PALABRAS CLAVE: \[prueba digital, nombre del caso, país, área del derecho\]

--------------------------------------------------------------------------------

Integración con NotebookLM

Para maximizar el uso de estas historias en

, generar el output siguiendo estas

reglas de optimización de fuentes:

Encabezados claros

→ NotebookLM los usa para segmentar el conocimiento

Palabras clave explícitas

→ Facilitan las preguntas al notebook

Sección de "Lección Legal"

separada → Permite queries tipo "¿qué aprendemos de este caso?"

Datos estructurados

(país, año, tribunal) → Permiten filtrar por jurisdicción

Citas de normas

completas → NotebookLM puede referenciarlas en respuestas

CTA y resumen al final

→ Útil si el notebook se usa para crear contenido

#### Prompt sugerido para NotebookLM al cargar estas historias:

"Eres un experto en derecho digital y prueba electrónica. Tienes acceso a casos reales

de todo el mundo. Cuando te pregunte sobre un tipo de prueba o área del derecho, dame

siempre: el nombre del caso real más relevante, qué prueba digital fue clave, cómo se

autenticó y cuál fue el resultado."

--------------------------------------------------------------------------------

Ejemplo de Output Completo

Historia: El Contrato Sellado con un Emoji 🙏

Tribunal de Distrito de Petah Tikva

Derecho Mercantil — Contratos |

#### Prueba Digital:

#### Cadena de mensajes WhatsApp

--------------------------------------------------------------------------------

El Contexto

Un propietario israelí publicó un anuncio para arrendar su propiedad. Un potencial arrendatario

lo contactó por WhatsApp, negoció los términos y, al final de la conversación, respondió con

el emoji 🙏 (manos juntas). El propietario retiró el inmueble del mercado, convencido de que

había un acuerdo. El arrendatario nunca se presentó a firmar el contrato formal.

La Prueba que lo Cambió Todo

El propietario presentó ante el tribunal la cadena completa de mensajes de WhatsApp, incluyendo

la secuencia en que se discutieron precio, plazo y condiciones, culminando con el emoji.

Argumentó que ese emoji equivalía a una confirmación de aceptación del contrato.

El Debate Jurídico

El arrendatario sostuvo que un emoji no puede constituir manifestación de voluntad contractual

y que nunca hubo acuerdo formal. El propietario argumentó que en el contexto de la conversación,

el emoji expresaba inequívocamente aceptación, y que el principio de buena fe contractual

le impedía retractarse causando daño al arrendador.

La Decisión del Tribunal

El juez Shmuel Bilu determinó que el emoji 🙏, en el contexto de la negociación completa,

constituía una señal suficiente de intención positiva de cerrar el trato. Condenó al arrendatario

a pagar daños equivalentes a medio mes de renta por haber generado confianza legítima sin

intención de cumplir. El tribunal advirtió que "los nuevos métodos de comunicación obligan

al derecho a evolucionar su interpretación de la manifestación de voluntad."

En la era digital, el contexto determina el valor jurídico de un mensaje. Un emoji, una palabra,

incluso un "👍" pueden ser interpretados como consentimiento contractual si el contexto

conversacional lo justifica. Documentar siempre tus negociaciones digitales con claridad.

--------------------------------------------------------------------------------

Fuente: Tribunal de Distrito de Petah Tikva, Israel, 2023. Caso ampliamente citado en:

Reuters, The Guardian, Harvard Law Review Blog.

Marco normativo: Ley de Contratos israelí (principios de buena fe y daño de confianza)

--------------------------------------------------------------------------------

Notas de Mantenimiento del Skill

Actualizar el banco de casos

cada 6 meses con nuevos fallos relevantes

Priorizar casos de Latinoamérica

si el usuario indica que su audiencia es hispanohablante

Cross-reference

con la Ley Modelo UNCITRAL sobre Comercio Electrónico para casos internacionales

Verificar vigencia

de las normas citadas antes de publicar en formatos legales formales

