import os
import asyncio
import subprocess
from pathlib import Path
import edge_tts

ROOT_DIR = Path(__file__).parent.parent
OUTPUT_DIR = ROOT_DIR / "videos" / "sha256-v07" / "audio"
VOICE = "es-MX-JorgeNeural"  # Professional neutral voice for investigation role

TEXTS = [
    "Amparo llevó su laptop a reparar. Días después, descubrió horrorizada que el técnico informático había robado y filtrado sus fotografías más íntimas.",
    "El técnico usó sus conocimientos para acceder ilegalmente a su correo, descargar las fotos y ocultarlas, creyendo que borraría todo rastro digital.",
    "Pero la justicia intervino. Peritos informáticos ejecutaron una captura de la memoria RAM del equipo del sospechoso antes de que lo apagara.",
    "En la memoria volátil, extrajeron la contraseña del correo de la víctima y probaron irrefutablemente que el técnico había accedido a su cuenta.",
    "Además, incautaron un pendrive. Usando bloqueadores de escritura y software forense, realizaron una copia bit a bit blindada con algoritmos matemáticos Hash.",
    "El análisis profundo reveló el engaño: el técnico intentó borrar las fotos y usó técnicas de esteganografía para ocultarlas dentro de otros archivos.",
    "Un falso archivo de texto ocultaba en realidad una foto íntima. La implacable evidencia digital lo condenó por intromisión y espionaje informático.",
    "La lección: borrar u ocultar archivos no engaña a la informática forense. Protege tu privacidad digital. ¡Guarda este video y compártelo!"
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
        print(f"Error con voz {VOICE}: {e}. Intentando con voz alternativa (es-CO-GonzaloNeural)...", end=" ")
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
    print("Generando locuciones para el caso de Amparo (sha256-v07)...")
    print("=" * 60)
    for i, (text, limit) in enumerate(zip(TEXTS, LIMITS), 1):
        filename = f"clip-{i}.mp3"
        output_file = OUTPUT_DIR / filename
        await generate_clip(text, limit, output_file, i)
    print("=" * 60)
    print("Audios generados con éxito.")

if __name__ == "__main__":
    asyncio.run(main())
