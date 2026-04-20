#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Frontend Full Markdown Doc Generator
------------------------------------
Mendokumentasikan SELURUH ISI KODE frontend modern React + TS/TSX
berdasarkan struktur modular saat ini.

Folder target:
- src/app/**
- src/router/**
- src/layouts/**
- src/modules/**
- src/components/**
- src/services/**
- src/hooks/**
- src/types/**
- src/utils/**
- src/constants/**
- src/styles/**

Entry files:
- src/main.tsx
- src/app/App.tsx

Fitur:
- Otomatis deteksi file .ts, .tsx, .js, .jsx, .css
- Embed isi file lengkap pada Markdown (code fence) dengan language hint sesuai ekstensi
- Header setiap file: path relatif, SHA singkat, ukuran file
- Tanpa dependency eksternal (stdlib saja)
- Opsi --no-collapse untuk menampilkan kode tanpa <details>

Contoh:
    python frontend_md_full_docgen.py --root . --out docs/Frontend_FullDocs.md
    python frontend_md_full_docgen.py --root . --out docs/Frontend_FullDocs.md --no-collapse
    python frontend_md_full_docgen.py --root . --title "Dok Frontend Chicken Alibaba" --out docs/FE.md
"""

from pathlib import Path
from typing import List, Dict
import hashlib
import argparse
import re
from datetime import datetime
import sys

TARGETS: Dict[str, str] = {
    "App Bootstrap (src/app)": "src/app",
    "Router (src/router)": "src/router",
    "Layouts (src/layouts)": "src/layouts",
    "Modules (src/modules)": "src/modules",
    "Components (src/components)": "src/components",
    "Services (src/services)": "src/services",
    "Hooks (src/hooks)": "src/hooks",
    "Types (src/types)": "src/types",
    "Utils (src/utils)": "src/utils",
    "Constants (src/constants)": "src/constants",
    "Styles (src/styles)": "src/styles",
}

ENTRY_FILES = [
    "src/main.tsx",
    "src/app/App.tsx",
]

EXTS = (".ts", ".tsx", ".js", ".jsx", ".css")


# ---------- Utils ----------

def sha1_of_file(path: Path) -> str:
    h = hashlib.sha1()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()[:12]


def human_size(n: int) -> str:
    for unit in ["B", "KB", "MB", "GB"]:
        if n < 1024.0:
            return f"{n:.0f} {unit}"
        n /= 1024.0
    return f"{n:.0f} TB"


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return path.read_text(errors="replace")


def guess_lang_by_ext(path: Path) -> str:
    ext = path.suffix.lower()
    if ext == ".tsx":
        return "tsx"
    if ext == ".ts":
        return "ts"
    if ext == ".jsx":
        return "jsx"
    if ext == ".js":
        return "javascript"
    if ext == ".css":
        return "css"
    return ""


def collect_files(root: Path, rel: str) -> List[Path]:
    base = root / rel
    if not base.exists():
        return []

    files: List[Path] = []
    for p in base.rglob("*"):
        if p.is_file() and p.suffix.lower() in EXTS:
            files.append(p)

    return sorted(files, key=lambda p: str(p).lower())


def summarize(path: Path) -> Dict[str, str]:
    text = read_text(path)
    sha = sha1_of_file(path)
    size = path.stat().st_size if path.exists() else 0
    return {
        "path": str(path),
        "sha": sha,
        "size": str(size),
        "text": text,
        "lang": guess_lang_by_ext(path),
    }


def anchorize(title: str) -> str:
    a = title.lower().strip()
    a = re.sub(r"[^a-z0-9\s/_-]", "", a)
    a = a.replace("/", "-")
    a = re.sub(r"\s+", "-", a)
    a = re.sub(r"-+", "-", a)
    return a.strip("-")


# ---------- Doc Gen ----------

def make_markdown(
    sections: Dict[str, List[Dict[str, str]]],
    entries: List[Dict[str, str]],
    title: str,
    root: Path,
    collapse: bool,
) -> str:
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    md: List[str] = []

    md.append(f"# {title}\n")
    md.append(f"_Dihasilkan otomatis: {now}_  \n**Root:** `{root}`\n")

    # TOC
    md.append("## Daftar Isi")
    for label, files in sections.items():
        if not files:
            continue

        anc = anchorize(label)
        md.append(f"- [{label}](#{anc})")

        for meta in files:
            rel = Path(meta["path"])
            try:
                rel = rel.relative_to(root)
            except Exception:
                pass
            md.append(f"  - [{rel}](#file-{anchorize(str(rel))})")

    if entries:
        md.append(f"- [Entry Files](#entry-files)")
        for meta in entries:
            rel = Path(meta["path"])
            try:
                rel = rel.relative_to(root)
            except Exception:
                pass
            md.append(f"  - [{rel}](#file-{anchorize(str(rel))})")

    # Sections
    for label, files in sections.items():
        if not files:
            continue

        md.append(f"\n## {label}\n")

        for meta in files:
            p = Path(meta["path"])
            try:
                rel = p.relative_to(root)
            except Exception:
                rel = p

            file_anchor = anchorize(str(rel))
            size_value = int(meta["size"])

            md.append(f"<a id=\"file-{file_anchor}\"></a>")
            md.append(f"### {rel}")
            md.append(f"- SHA: `{meta['sha']}`  \n- Ukuran: {human_size(size_value)}")

            code_block = f"```{meta['lang']}\n{meta['text']}\n```\n"

            if collapse:
                md.append(
                    "<details><summary><strong>Lihat Kode Lengkap</strong></summary>\n\n"
                    + code_block
                    + "</details>\n"
                )
            else:
                md.append(code_block)

    # Entry files
    if entries:
        md.append("\n## Entry Files\n")

        for meta in entries:
            p = Path(meta["path"])
            try:
                rel = p.relative_to(root)
            except Exception:
                rel = p

            file_anchor = anchorize(str(rel))
            size_value = int(meta["size"])

            md.append(f"<a id=\"file-{file_anchor}\"></a>")
            md.append(f"### {rel}")
            md.append(f"- SHA: `{meta['sha']}`  \n- Ukuran: {human_size(size_value)}")

            code_block = f"```{meta['lang']}\n{meta['text']}\n```\n"

            if collapse:
                md.append(
                    "<details><summary><strong>Lihat Kode Lengkap</strong></summary>\n\n"
                    + code_block
                    + "</details>\n"
                )
            else:
                md.append(code_block)

    return "\n".join(md)


# ---------- Main ----------

def run() -> int:
    ap = argparse.ArgumentParser(
        description="Generate FULL Markdown docs for a modular React/TS frontend (embed all sources)."
    )
    ap.add_argument("--root", required=True, help="Path ke root frontend (berisi src/)")
    ap.add_argument("--out", default="docs/Frontend_FullDocs.md", help="Output file Markdown")
    ap.add_argument("--title", default="Dokumentasi Frontend (FULL Source)", help="Judul dokumen")
    ap.add_argument("--no-collapse", action="store_true", help="Tampilkan kode langsung (tanpa <details>)")
    args = ap.parse_args()

    root = Path(args.root).resolve()
    if not root.exists():
        print(f"[ERR] root tidak ditemukan: {root}", file=sys.stderr)
        return 2

    src_dir = root / "src"
    if not src_dir.exists():
        print(f"[ERR] folder src/ tidak ditemukan di: {root}", file=sys.stderr)
        return 2

    sections: Dict[str, List[Dict[str, str]]] = {}
    for label, rel in TARGETS.items():
        files = collect_files(root, rel)
        sections[label] = [summarize(p) for p in files]

    entries: List[Dict[str, str]] = []
    for ef in ENTRY_FILES:
        p = root / ef
        if p.exists() and p.is_file():
            entries.append(summarize(p))

    collapse = not args.no_collapse
    md = make_markdown(sections, entries, args.title, root, collapse)

    out_path = Path(args.out)
    if not out_path.is_absolute():
        out_path = (Path.cwd() / out_path).resolve()

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(md, encoding="utf-8")

    total_files = sum(len(v) for v in sections.values()) + len(entries)
    print(f"[OK] Markdown generated -> {out_path}")
    print(f"[INFO] Total files documented: {total_files}")
    print(f"[INFO] Total lines output: {len(md.splitlines())}")

    return 0


if __name__ == "__main__":
    raise SystemExit(run())