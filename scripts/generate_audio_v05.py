import os
import asyncio
import subprocess
from pathlib import Path
import edge_tts

ROOT_DIR = Path(__file__).parent.parent
OUTPUT_DIR = ROOT_DIR / "videos" / "sha256-v05" / "audio"
VOICE = "es-VE-SebastianNeural"  # Venezuelan male voice, matches case location

TEXTS = [
    "En Venezuela, un gerente enfrentó graves cargos cuando una empleada usó la Ley de la Mujer para acusarlo de acoso sexual mediante chats.",
    "Como prueba, ella consignó voluntariamente su teléfono ante la Fiscalía, mostrando conversaciones de WhatsApp donde él presuntamente le exigía favores íntimos.",
    "El tribunal ordenó al Centro Nacional de Informática Forense, el CENIF, realizar una extracción física del dispositivo móvil aplicando el estricto protocolo MUCCEF.",
    "Los peritos extrajeron las bases de datos con herramientas avanzadas y aplicaron algoritmos Hash para garantizar la inalterabilidad legal de la evidencia.",
    "Al analizar el código interno, descubrieron el fraude. Los mensajes no pasaron por los servidores reales y carecían de firmas criptográficas legítimas.",
    "El peritaje reveló que ella utilizó una aplicación de terceros para fabricar conversaciones falsas y simular el perfil del gerente a la perfección.",
    "Ante la prueba forense irrefutable, el juez absolvió inmediatamente al acusado e imputó a la mujer por simulación de hecho punible y perjurio.",
    "La lección: fabricar evidencia digital deja rastros imborrables. La informática forense no miente. ¡Protege tus derechos, guarda y comparte este video!"
]

# Each clip is exactly 8.0 seconds
LIMITS = [8.0] * 8

def get_audio_duration(file_path: Path) -> float:
    try:
        result = subprocess.run(
            ["ffprobe", "-v", "quiet", "-show_entries", "format=duration",
             "-of", "default=noprint_wrappers=1:nokey=1", str(file_path)],
            capture_output=True, text=True, check=True
        )
        return float(result.stdout.strip()) if result.stdout.strip() else 0.0
    except Exception as e:
        print(f"\n⚠️  ffprobe falló al leer {file_path.name}: {e}")
        return 0.0

def speed_up_audio(file_path: Path, ratio: float):
    temp_path = file_path.with_name(f"{file_path.stem}_temp.mp3")
    try:
        subprocess.run(
            ["ffmpeg", "-y", "-i", str(file_path), "-filter:a", f"atempo={ratio:.2f}", str(temp_path)],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True
        )
        if temp_path.exists():
            os.replace(temp_path, file_path)
    except Exception as e:
        print(f"\n⚠️  Error al acelerar el audio: {e}")
        if temp_path.exists():
            os.remove(temp_path)

async def generate_clip(text: str, limit: float, output_path: Path, index: int):
    print(f"[{index}/{len(TEXTS)}] Generando audio con Edge TTS (límite {limit}s)...", end=" ", flush=True)
    try:
        communicate = edge_tts.Communicate(text, VOICE)
        await communicate.save(output_path)
    except Exception as e:
        print(f"Error con voz {VOICE}: {e}. Intentando con voz alternatva (es-CO-GonzaloNeural)...", end=" ")
        communicate = edge_tts.Communicate(text, "es-CO-GonzaloNeural")
        await communicate.save(output_path)

    duration = get_audio_duration(output_path)
    if duration == 0:
        duration = limit
        
    if duration > limit:
        ratio = duration / limit
        if ratio > 2.0:
            ratio = 2.0
        speed_up_audio(output_path, ratio)
        duration = get_audio_duration(output_path)
        print(f"Acelerado a {ratio:.2f}x -> {duration:.2f}s")
    else:
        print(f"OK {duration:.2f}s")

async def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print("Generando locuciones para el caso de chats falsos (sha256-v05)...")
    print("=" * 60)
    for i, (text, limit) in enumerate(zip(TEXTS, LIMITS), 1):
        filename = f"clip-{i}.mp3"
        output_file = OUTPUT_DIR / filename
        await generate_clip(text, limit, output_file, i)
    print("=" * 60)
    print("Audios generados con éxito.")

if __name__ == "__main__":
    asyncio.run(main())
