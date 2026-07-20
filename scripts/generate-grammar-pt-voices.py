#!/usr/bin/env python3
"""Generate European Portuguese (Portugal) neural voice clips for the grammar app."""

from __future__ import annotations

import asyncio
import json
import re
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
DATA_JS = ROOT / "assets" / "js" / "learn-grammar-pt-data.js"
OUT = ROOT / "assets" / "audio" / "grammar-pt"
VOICE = "pt-PT-RaquelNeural"  # Natural female voice from Portugal


def extract_json_object(text: str) -> dict:
    start = text.find("{")
    if start < 0:
        raise ValueError("No JSON object found in data file")
    # The file is window.LGP_DATA = { ... };
    payload = text[start:]
    payload = re.sub(r";\s*$", "", payload.strip())
    return json.loads(payload)


def collect_clips(data: dict) -> dict[str, str]:
    clips: dict[str, str] = {}
    for mod in data.get("modules", []):
        for section in mod.get("sections", []):
            for ex in section.get("examples", []):
                ex_id = ex.get("id")
                pt = (ex.get("pt") or "").strip()
                if ex_id and pt:
                    clips[ex_id] = pt
        for q in mod.get("quiz", []):
            audio_pt = (q.get("audioPt") or "").strip()
            qid = q.get("id")
            if qid and audio_pt:
                clips[qid] = audio_pt
    return clips


async def save_clip(text: str, path: Path, sem: asyncio.Semaphore) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and path.stat().st_size > 500:
        return
    async with sem:
        communicate = edge_tts.Communicate(text, VOICE, rate="-5%")
        await communicate.save(str(path))
        print(f"ok {path.name} :: {text}")


async def main() -> None:
    raw = DATA_JS.read_text(encoding="utf-8")
    # Convert JS assignment to pure JSON-ish: already JSON-compatible object literal
    data = extract_json_object(raw.replace("window.LGP_DATA = ", "", 1))
    clips = collect_clips(data)
    print(f"clips to generate: {len(clips)} with voice {VOICE}")
    OUT.mkdir(parents=True, exist_ok=True)

    sem = asyncio.Semaphore(5)
    tasks = [
        save_clip(text, OUT / f"{clip_id}.mp3", sem)
        for clip_id, text in sorted(clips.items())
    ]
    await asyncio.gather(*tasks)
    print(f"done: {len(tasks)} clips in {OUT}")


if __name__ == "__main__":
    asyncio.run(main())
