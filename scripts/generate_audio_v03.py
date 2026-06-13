import os
import asyncio
import subprocess
from pathlib import Path
import edge_tts

ROOT_DIR = Path(__file__).parent.parent
OUTPUT_DIR = ROOT_DIR / "videos" / "sha256-v03" / "audio"
VOICE = "es-CO-GonzaloNeural"  # Colombian male voice, authoritative forensic tone

TEXTS = [
    "¿Un código digital puede destruir reactores físicos? Stuxnet.",
    "Bypaseando redes aisladas mediante memorias USB infectadas con zero-days.",
    "Se infiltró secretamente en las centrifugadoras de Natanz sin levantar alertas.",
    "El virus alteró drásticamente la velocidad del rotor de las máquinas.",
    "Causó destrucción mecánica masiva de mil centrifugadoras de uranio.",
    "Engañaba a los operarios reproduciendo lecturas falsas de sensores normales.",
    "Se propagó fuera de la planta debido a un error de su creador.",
    "Asegura tus sistemas industriales hoy. Síguenos en SHA256 punto u ese."
]

LIMITS = [2.4, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9, 3.5]

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
    communicate = edge_tts.Communicate(text, VOICE)
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
    print("Generando locuciones para Stuxnet (sha256-v03) usando Edge TTS...")
    print("=" * 60)
    for i, (text, limit) in enumerate(zip(TEXTS, LIMITS), 1):
        filename = f"clip-{i}.mp3"
        output_file = OUTPUT_DIR / filename
        await generate_clip(text, limit, output_file, i)
    print("=" * 60)
    print("Audios generados con éxito.")

if __name__ == "__main__":
    asyncio.run(main())
