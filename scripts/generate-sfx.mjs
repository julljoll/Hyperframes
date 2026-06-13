#!/usr/bin/env node
/**
 * generate-sfx.mjs
 * Genera los archivos SFX base para SHA256.US usando síntesis de audio pura.
 * Requiere: npm install wav (o bun add wav)
 *
 * Salida:
 *   recursos_video/sfx/word-pop.mp3   — chirp electrónico 880Hz, 80ms
 *   recursos_video/sfx/lightning.mp3  — noise burst digital, 250ms
 *
 * Uso: node scripts/generate-sfx.mjs
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SFX_DIR = join(ROOT, "recursos_video", "sfx");

const SAMPLE_RATE = 44100;

/** Genera un buffer PCM Float32 de N samples */
function makeBuffer(samples) {
  return new Float32Array(samples);
}

/** Convierte Float32 [-1,1] a WAV PCM16 */
function float32ToWav(samples, sampleRate) {
  const numSamples = samples.length;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  function writeString(offset, str) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }
  function writeUint32LE(offset, val) {
    view.setUint32(offset, val, true);
  }
  function writeUint16LE(offset, val) {
    view.setUint16(offset, val, true);
  }

  writeString(0, "RIFF");
  writeUint32LE(4, 36 + numSamples * 2);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  writeUint32LE(16, 16);
  writeUint16LE(20, 1); // PCM
  writeUint16LE(22, 1); // mono
  writeUint32LE(24, sampleRate);
  writeUint32LE(28, sampleRate * 2);
  writeUint16LE(32, 2);
  writeUint16LE(34, 16);
  writeString(36, "data");
  writeUint32LE(40, numSamples * 2);

  for (let i = 0; i < numSamples; i++) {
    const clamped = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, clamped * 0x7fff, true);
  }
  return Buffer.from(buffer);
}

/** word-pop: chirp ascendente 440→1760 Hz, 80ms, con envelope */
function generateWordPop() {
  const duration = 0.08; // segundos
  const n = Math.floor(SAMPLE_RATE * duration);
  const buf = makeBuffer(n);
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const progress = i / n;
    // Frecuencia que sube de 440 a 1760 Hz
    const freq = 440 + 1320 * progress;
    // Envelope: ataque rápido, decay
    const env = progress < 0.1 ? progress / 0.1 : 1 - (progress - 0.1) / 0.9;
    buf[i] = Math.sin(2 * Math.PI * freq * t) * env * 0.7;
  }
  return buf;
}

/** lightning: noise burst con filtro hi-freq, 250ms, con envelope */
function generateLightning() {
  const duration = 0.25;
  const n = Math.floor(SAMPLE_RATE * duration);
  const buf = makeBuffer(n);
  // Seeded PRNG (mulberry32) para determinismo
  let seed = 0xdeadbeef;
  function rand() {
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    return ((seed >>> 0) / 0xffffffff) * 2 - 1;
  }
  let prev = 0;
  for (let i = 0; i < n; i++) {
    const progress = i / n;
    // Envelope: spike inicial, decay exponencial
    const env = Math.exp(-progress * 12) * (progress < 0.02 ? progress / 0.02 : 1);
    // Hi-pass noise: substrae media móvil
    const raw = rand();
    const hp = raw - prev * 0.7;
    prev = raw;
    // Capa de tono digital (square wave 2kHz)
    const square = Math.sin(2 * Math.PI * 2000 * (i / SAMPLE_RATE)) > 0 ? 0.3 : -0.3;
    buf[i] = (hp * 0.6 + square * 0.4) * env;
  }
  return buf;
}

console.log("🔊 Generando SFX para SHA256.US...");

const wordPop = generateWordPop();
const wordPopWav = float32ToWav(wordPop, SAMPLE_RATE);
writeFileSync(join(SFX_DIR, "word-pop.wav"), wordPopWav);
console.log("✅ word-pop.wav generado (80ms chirp electrónico)");

const lightning = generateLightning();
const lightningWav = float32ToWav(lightning, SAMPLE_RATE);
writeFileSync(join(SFX_DIR, "lightning.wav"), lightningWav);
console.log("✅ lightning.wav generado (250ms noise burst digital)");

console.log("");
console.log("📁 Archivos en: recursos_video/sfx/");
console.log("ℹ  Los archivos son WAV (sin ffmpeg). Para convertir a MP3:");
console.log("   ffmpeg -i word-pop.wav word-pop.mp3");
console.log("   ffmpeg -i lightning.wav lightning.mp3");
console.log("");
console.log("O usa los .wav directamente — HyperFrames acepta ambos formatos.");
