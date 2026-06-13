# Hyperframes

Open-source video rendering framework: write HTML, render video.

Forked from `heygen-com/hyperframes`. Used for framework development AND
SHA256.US forensic video production (ciberseguridad forense — TikTok/Reels/Shorts).

## Dev Commands

```bash
bun install                    # Install (NOT pnpm — never create pnpm-lock.yaml)
bun run build                  # Build all packages (core first, then rest)
bun run test                   # Run all tests (vitest; NOT jest/mocha)
bun run --filter <pkg> test    # Single package; e.g. @hyperframes/core
bun run --filter '*' typecheck # Typecheck all packages (tsc --noEmit)
bun run lint                   # Lint: oxlint . && tsx scripts/lint-skills.ts
bun run lint:fix               # oxlint --fix .
bun run format                 # Format: oxfmt . (NOT prettier, NOT biome)
bun run format:check           # CI check only (also in pre-commit)
bun run knip                   # Dead code detection
bun run test:scripts           # Test root scripts/ utilities
```

## Composition CLI

```bash
npx hyperframes lint <path>    # Composition HTML structure check
npx hyperframes validate <path># Composition runtime check (headless Chrome)
npx hyperframes preview <path> # Dev preview with live reload
npx hyperframes render <path>  # Render to MP4
```

On Windows, prefix commands with `npx.cmd` (e.g. `npx.cmd hyperframes lint .`).

## Key Conventions

- **Package manager**: bun. `pnpm install` creates a `pnpm-lock.yaml` — forbidden.
- **Lint/Format**: oxlint + oxfmt. Config: `.oxlintrc.json` (correctness errors, react/typescript), `.oxfmtrc.json` (double quotes, semicolons, 2-space, trailing commas, printWidth 100).
- **Testing**: vitest. Each package has its own vitest config. Producer tests require Docker (see below).
- **TypeScript**: strict, `noUncheckedIndexedAccess`, ESNext modules, bundler resolution. No `any`, no `as T` assertions.
- **Commits**: conventional commits (enforced by commitlint + lefthook pre-commit).
- **Editor**: space indent, 2 spaces, LF, utf-8 (`.editorconfig`).
- **CI**: `HYPERFRAMES_NO_TELEMETRY=1` suppresses telemetry. Node.js >= 22.
- **Pre-commit**: oxlint staged JS/TS, oxfmt --check staged JS/TS/JSON/MD/YAML, tsc --noEmit core+studio, fallow audit, 600-line limit on studio files.
- **Git LFS**: required for golden baseline `.mp4` files under `packages/producer/tests/**/output.mp4`.
- **Scripts**: custom scripts use `tsx scripts/<name>.ts`; test scripts use `node --import tsx --test`.
- **Skills**: 16 agent skills in `.agents/skills/` (hyperframes, gsap, tailwind, three, waapi, lottie, animejs, css-animations, etc.) — locked via `skills-lock.json`.

## Windows Gotchas

- `bun install --frozen-lockfile --linker=hoisted` (bun's default "isolated" linker breaks on Windows GHA runners).
- FFmpeg must be installed and on `PATH`.
- Use `npx.cmd` for hyperframes CLI, not `npx`.

## Producer Regression Tests (Docker Only)

Golden baselines MUST be generated inside `Dockerfile.test`, NOT on the host.
Chrome/FFmpeg version drift produces pixel-level PSNR failures.

```bash
docker build -t hyperframes-producer:test -f Dockerfile.test .
bun run --cwd packages/producer docker:test:update <test-name>
```

Host-side `bun run --cwd packages/producer test:update` is only for local
experimentation — baselines committed from the host will fail CI.

## Adding a CLI Command

1. Define in `packages/cli/src/commands/<name>.ts` via `defineCommand` (citty)
2. Export `examples: Example[]` (imported from `./_examples.js`)
3. Register in `packages/cli/src/cli.ts` under `subCommands` (lazy-loaded)
4. Add to `GROUPS` in `packages/cli/src/help.ts` (or it won't appear in `--help`)
5. Document in `docs/packages/cli.mdx`

## Release Process (2-Pass)

All 8 packages share one version. `publish.yml` triggers on `v*` tag push.

```bash
bun run release:prepare <version>  # e.g. 0.6.72
```

**Pass 1**: writes `releases/v<version>.md` + prepends changelog entry, exits non-zero.
Edit both files (remove `<!-- TODO -->` marker, write summary).

**Pass 2** (after TODO removed): bumps versions, creates `chore: release v<version>`
commit + lightweight tag.

Then:

```bash
git push origin main --tags
```

Pre-release versions (`0.6.72-alpha.1`) publish to the matching npm dist-tag.

## Composition Conventions

- GSAP timelines must be `paused: true`, built synchronously (no async/setTimeout),
  registered on `window.__timelines[key]` matching root `data-composition-id`.
- No `Date.now()`, no unseeded `Math.random()`, no render-time network fetches.
- Clips use `class="clip"`, `data-start`, `data-duration`, `data-track-index`.
- No `repeat: -1` — calculate finite iterations.
- Non-deterministic patterns break rendering — same input must always produce the same MP4.

## SHA256.US — Forensic Video Production

Format: **1080×1920 portrait** (9:16), **30 FPS**, MP4.

### Timeline Structure

| Segment       | Duration     | Frames    |
| ------------- | ------------ | --------- |
| Hook (gancho) | exactly 2.5s | 75 frames |
| Scenes (3–8)  | 2–3s each    | 60-90 f   |
| Closer (CTA)  | exactly 3s   | 90 frames |

### Production Workflow

1. Verify assets in `recursos_video/sha256-vNN/` (narration.mp3, guion.txt, cover.png, logo.png, background.mp3)
2. Transcribe: `npx.cmd hyperframes transcribe recursos_video/sha256-vNN/audio/narration.mp3 --model small --language es`
3. Compile: `node scripts/generate_vNN_html.js` (generates `videos/sha256-vNN/index.html`)
4. Copy shared assets: sfx (word-pop.wav, lightning.wav), background music, logo-outro.png to `videos/sha256-vNN/`
5. Validate: `npx.cmd hyperframes lint . && npx.cmd hyperframes validate .`
6. Preview: `npx.cmd hyperframes preview videos/sha256-vNN`
7. Render: `npx.cmd hyperframes render videos/sha256-vNN -o out/sha256-vNN.mp4`

### Design System (Terminal Justice)

- **Background**: `#121414` | **Primary (Alert Yellow)**: `#FECF06`
- **Secondary (Cyber Green)**: `#00FF41` | **On-surface**: `#e2e2e2`
- **Surface dim**: `#0c0f0f` | **Surface container**: `#1e2020`
- **Typography**: Ubuntu 900 italic (headings/body), Share Tech Mono 400 (code/hash)
- **Border radius**: 0px (all elements) | **Glassmorphism**: `rgba(18,20,20,0.85)` with `backdrop-filter: blur(12px)`
- **Green glow**: `box-shadow: 0 0 20px rgba(0,255,65,0.3)`

### Animation Rules

- Ken Burns: odd scenes = zoom-in (`1.05->1.18`) + pan; even = zoom-out (`1.20->1.05`) + pan
- Transitions vary by position (glitch, zoom-through, grid dissolve, staggered blocks, diagonal split, overexposure, blur crossfade, color dip to black)
- Lightning SVG (`#00FF41` zigzag) before every scene transition
- Captions: word-by-word, <=2 words/line, 56-64px, alternating yellow/green highlight, present in ALL clips

## Project Structure

```
packages/
  cli/                  -> hyperframes CLI (citty commands)
  core/                 -> Types, parsers, generators, linter, runtime, frame adapters
  engine/               -> Puppeteer + FFmpeg capture engine
  player/               -> <hyperframes-player> web component
  producer/             -> Full rendering pipeline (capture, encode, audio mix)
  shader-transitions/   -> WebGL shader transitions
  studio/               -> Browser-based composition editor (React)
  aws-lambda/           -> Distributed rendering SDK
registry/               -> Reusable blocks and components
.agents/skills/         -> 16 agent skill definitions (also in skills/)
scripts/                -> Build, release, codegen, and SHA256.US video compilation utilities
recursos_video/         -> Input assets per SHA256.US video
videos/                 -> Output SHA256.US compositions
```
