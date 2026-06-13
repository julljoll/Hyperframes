import os
import asyncio
import subprocess
from pathlib import Path
import edge_tts

ROOT_DIR = Path(__file__).parent.parent
OUTPUT_DIR = ROOT_DIR / "videos" / "sha256-v08" / "audio"
VOICE = "es-CO-GonzaloNeural"  # Authoritative forensic/financial teller voice

TEXTS = [
    "En el mundo financiero, un empleado bancario descubrió cómo robar millones de dólares sin encender una sola alarma de seguridad.",
    "Utilizó la famosa 'Técnica del Salami', alterando el software para desviar fracciones de centavos de miles de transacciones hacia su cuenta.",
    "Al ser cantidades microscópicas, los clientes no lo notaban. El robo automatizado acumuló una inmensa fortuna de forma silenciosa e indetectable.",
    "Hasta que una auditoría forense intervino. Los peritos informáticos aislaron los servidores del banco aplicando el protocolo de 'Obtención por Aseguramiento'.",
    "Utilizando duplicadores forenses, crearon imágenes exactas de los discos duros, blindando la evidencia con inquebrantables algoritmos matemáticos Hash.",
    "El análisis profundo del código fuente y las bases de datos reveló el engaño: instrucciones ocultas que automatizaban el desvío sistemático.",
    "Esta alteración maliciosa o 'falsificación informática' fue la prueba reina. El empleado enfrentó severos cargos y prisión por Fraude Informático.",
    "La lección: en la informática forense, los robos microscópicos dejan huellas gigantes. Audita tus sistemas, ¡guarda este video y compártelo!"
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
        print(f"Error con voz {VOICE}: {e}. Intentando con voz alternativa (es-MX-JorgeNeural)...", end=" ")
        communicate = edge_tts.Communicate(text, "es-MX-JorgeNeural")
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
    print("Generando locuciones para el caso Salami (sha256-v08)...")
    print("=" * 60)
    for i, (text, limit) in enumerate(zip(TEXTS, LIMITS), 1):
        filename = f"clip-{i}.mp3"
        output_file = OUTPUT_DIR / filename
        await generate_clip(text, limit, output_file, i)
    print("=" * 60)
    print("Audios generados con éxito.")

if __name__ == "__main__":
    asyncio.run(main())
