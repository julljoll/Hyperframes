#!/usr/bin/env python3
"""
Google TTS Audio Generator Script for HyperFrames
Genera las locuciones en español de Venezuela usando la API de Google TTS,
y las guarda en videos/sha256-v01-gemini/audio/
"""

import os
import subprocess
import urllib.request
import urllib.parse
from pathlib import Path

# Rutas de Archivos
ROOT_DIR = Path(__file__).parent.parent
OUTPUT_DIR = ROOT_DIR / "videos" / "sha256-v01-gemini" / "audio"

# Textos en español con acentos correctos (8 fragmentos de 8 segundos c/u)
TEXTS = [
    "En Venezuela, un hombre casi va a prisión cuando una compañera instrumentalizó la Ley de la Mujer, acusándolo falsamente de acoso sexual.",
    "Para sustentar su mentira ante la Fiscalía, ella presentó capturas de pantalla de WhatsApp impresas donde él supuestamente la amenazaba y acosaba.",
    "Acorralado, él entregó su teléfono a las autoridades bajo la 'Obtención por Consignación', exigiendo un peritaje informático para demostrar su total inocencia.",
    "Aplicando el MUCCEF, los peritos forenses aislaron el equipo y extrajeron la base de datos original de WhatsApp desde la memoria interna.",
    "El análisis reveló la verdad: las capturas impresas estaban manipuladas. Los metadatos de WhatsApp demostraron que ella había editado y borrado sus propios mensajes.",
    "Para darle validez irrefutable a esta prueba, los expertos calcularon los algoritmos Hash, blindando la evidencia digital contra cualquier intento de impugnación.",
    "El juez desestimó los cargos de acoso. La evidencia digital lo absolvió, y ella enfrentó a la justicia por simulación de hecho punible.",
    "La lección: un simple 'pantallazo' no es prueba definitiva. La informática forense revela la verdad oculta. ¡Guarda y comparte este video!"
]

def get_audio_duration(file_path: Path) -> float:
    """Usa ffprobe para obtener la duración en segundos del archivo de audio"""
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

def download_google_tts(text: str, lang: str, output_path: Path):
    """Descarga el audio usando el endpoint de Google Translate TTS sin librerías externas"""
    encoded_text = urllib.parse.quote(text)
    url = f"https://translate.google.com/translate_tts?ie=UTF-8&tl={lang}&client=tw-ob&q={encoded_text}"
    
    req = urllib.request.Request(
        url, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    )
    
    with urllib.request.urlopen(req) as response:
        with open(output_path, "wb") as f:
            f.write(response.read())

def speed_up_audio(file_path: Path, ratio: float):
    """Ajusta la velocidad del audio usando ffmpeg atempo"""
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

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print("Google TTS (Translate Engine) - Generador de Locucion")
    print(f"Destino: {OUTPUT_DIR}")
    print("=" * 60)

    for i, text in enumerate(TEXTS, 1):
        filename = f"clip-{i}.mp3"
        output_file = OUTPUT_DIR / filename
        print(f"[{i}/{len(TEXTS)}] Generando audio para '{filename}'...", end=" ", flush=True)
        
        try:
            download_google_tts(text, "es", output_file)
            duration = get_audio_duration(output_file)
            if duration == 0:
                duration = 8.0  # Fallback a 8s
            
            # Si el audio excede el límite de la escena (8 segundos), lo aceleramos
            limit = 7.8
            if duration > limit:
                ratio = duration / limit
                # ffmpeg atempo soporta hasta 2.0. Si es mayor, lo limitamos
                if ratio > 2.0:
                    ratio = 2.0
                speed_up_audio(output_file, ratio)
                duration = get_audio_duration(output_file)
                frames = round(duration * 30)
                print(f"Acelerado a {ratio:.2f}x -> {duration:.2f}s ({frames} frames)")
            else:
                frames = round(duration * 30)
                print(f"OK {duration:.2f}s ({frames} frames)")
        except Exception as e:
            print(f"Error: {e}")

    print("=" * 60)
    print("Proceso completado. Todos los clips de audio han sido generados.")

if __name__ == "__main__":
    main()
