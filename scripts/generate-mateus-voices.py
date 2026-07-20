#!/usr/bin/env python3
"""Generate natural neural voice clips for Mateus learning games."""

from __future__ import annotations

import asyncio
import re
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "audio" / "mateus"

VOICES = {
    "en": "en-US-AriaNeural",
    "pt": "pt-PT-RaquelNeural",
    "pl": "pl-PL-ZofiaNeural",
}

ITEMS = [
    ("dog", {"en": "dog", "pt": "cão", "pl": "pies"}),
    ("cat", {"en": "cat", "pt": "gato", "pl": "kot"}),
    ("lion", {"en": "lion", "pt": "leão", "pl": "lew"}),
    ("fish", {"en": "fish", "pt": "peixe", "pl": "ryba"}),
    ("bird", {"en": "bird", "pt": "pássaro", "pl": "ptak"}),
    ("cow", {"en": "cow", "pt": "vaca", "pl": "krowa"}),
    ("horse", {"en": "horse", "pt": "cavalo", "pl": "koń"}),
    ("pig", {"en": "pig", "pt": "porco", "pl": "świnia"}),
    ("sheep", {"en": "sheep", "pt": "ovelha", "pl": "owca"}),
    ("monkey", {"en": "monkey", "pt": "macaco", "pl": "małpa"}),
    ("rabbit", {"en": "rabbit", "pt": "coelho", "pl": "królik"}),
    ("frog", {"en": "frog", "pt": "sapo", "pl": "żaba"}),
    ("apple", {"en": "apple", "pt": "maçã", "pl": "jabłko"}),
    ("banana", {"en": "banana", "pt": "banana", "pl": "banan"}),
    ("orange", {"en": "orange", "pt": "laranja", "pl": "pomarańcza"}),
    ("grape", {"en": "grape", "pt": "uva", "pl": "winogrono"}),
    ("strawberry", {"en": "strawberry", "pt": "morango", "pl": "truskawka"}),
    ("pineapple", {"en": "pineapple", "pt": "ananás", "pl": "ananas"}),
    ("watermelon", {"en": "watermelon", "pt": "melancia", "pl": "arbuz"}),
    ("pear", {"en": "pear", "pt": "pêra", "pl": "gruszka"}),
    ("cherry", {"en": "cherry", "pt": "cereja", "pl": "wiśnia"}),
    ("lemon", {"en": "lemon", "pt": "limão", "pl": "cytryna"}),
    ("carrot", {"en": "carrot", "pt": "cenoura", "pl": "marchewka"}),
    ("tomato", {"en": "tomato", "pt": "tomate", "pl": "pomidor"}),
    ("potato", {"en": "potato", "pt": "batata", "pl": "ziemniak"}),
    ("corn", {"en": "corn", "pt": "milho", "pl": "kukurydza"}),
    ("broccoli", {"en": "broccoli", "pt": "brócolos", "pl": "brokuł"}),
    ("pepper", {"en": "pepper", "pt": "pimento", "pl": "papryka"}),
    ("cucumber", {"en": "cucumber", "pt": "pepino", "pl": "ogórek"}),
    ("eggplant", {"en": "eggplant", "pt": "beringela", "pl": "bakłażan"}),
]

NUMBERS = [
    (1, {"en": "one", "pt": "um", "pl": "jeden"}),
    (2, {"en": "two", "pt": "dois", "pl": "dwa"}),
    (3, {"en": "three", "pt": "três", "pl": "trzy"}),
    (4, {"en": "four", "pt": "quatro", "pl": "cztery"}),
    (5, {"en": "five", "pt": "cinco", "pl": "pięć"}),
    (6, {"en": "six", "pt": "seis", "pl": "sześć"}),
    (7, {"en": "seven", "pt": "sete", "pl": "siedem"}),
    (8, {"en": "eight", "pt": "oito", "pl": "osiem"}),
    (9, {"en": "nine", "pt": "nove", "pl": "dziewięć"}),
    (10, {"en": "ten", "pt": "dez", "pl": "dziesięć"}),
]

LETTERS = {
    "en": list("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    "pt": list("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    "pl": list("AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ"),
}

HELLO = {
    "en": "Hello Mateus",
    "pt": "Olá Mateus, o menino mais bonito do mundo",
    "pl": "Cześć Mateus",
}

LETTER_PREFIX = {
    "en": "letter",
    "pt": "letra",
    "pl": "litera",
}


def slug(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"[^a-z0-9\-ąćęłńóśźżãáâàéêíóôõúüç]", "", text, flags=re.IGNORECASE)
    return text or "clip"


async def save_clip(text: str, voice: str, path: Path, sem: asyncio.Semaphore, force: bool = False) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if not force and path.exists() and path.stat().st_size > 500:
        return
    async with sem:
        communicate = edge_tts.Communicate(text, voice, rate="-5%")
        await communicate.save(str(path))
        print(f"ok {path.relative_to(ROOT)} ({text})")


async def main() -> None:
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--lang", choices=["en", "pt", "pl"], help="Only regenerate one language")
    parser.add_argument("--force", action="store_true", help="Overwrite existing clips")
    args = parser.parse_args()

    langs = [args.lang] if args.lang else list(VOICES.keys())
    force = args.force or bool(args.lang)

    sem = asyncio.Semaphore(4)
    tasks = []

    for lang in langs:
        voice = VOICES[lang]
        tasks.append(save_clip(HELLO[lang], voice, OUT / lang / "hello.mp3", sem, force))

        for item_id, words in ITEMS:
            tasks.append(save_clip(words[lang], voice, OUT / lang / f"item-{item_id}.mp3", sem, force))

        for n, words in NUMBERS:
            tasks.append(save_clip(words[lang], voice, OUT / lang / f"number-{n}.mp3", sem, force))

        for letter in LETTERS[lang]:
            spoken = f"{LETTER_PREFIX[lang]} {letter}"
            key = f"letter-{slug(letter)}"
            tasks.append(save_clip(spoken, voice, OUT / lang / f"{key}.mp3", sem, force))

    await asyncio.gather(*tasks)
    print(f"done: {len(tasks)} clips")


if __name__ == "__main__":
    asyncio.run(main())
