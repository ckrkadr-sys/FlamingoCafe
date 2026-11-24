"""Remove the background from food photos with rembg and save trimmed, transparent PNGs.

Originals are never touched: each <name>.jpg becomes <name>-cutout.png in the output folder.

Setup (outside the project, e.g. in %TEMP%):
    python -m venv %TEMP%\\rembg-venv
    %TEMP%\\rembg-venv\\Scripts\\pip install "rembg[cpu]"
Run:
    %TEMP%\\rembg-venv\\Scripts\\python scripts/cutout.py src/assets/food src/assets/food \\
        --model isnet-general-use --only kahvalti-iki-kisilik menemen
Models download once to ~/.u2net (outside the project).

Light plates and boards on a light backdrop often come out half-transparent or missing.
--solid T makes the mask hard: each model's mask is cut at alpha > T, the masks are unioned,
specks dropped, gaps and inner holes filled, and the edge softened by ~1px. Combinations that worked:
    --model isnet-general-use,birefnet-general --solid 24   (fettucini, peynir-tabagi, omlet-mantarli-kasarli)
    --model bria-rmbg --solid 64                             (most thumbnails: plates, boards, bowls, glasses)
    --model isnet-general-use                                (sahanda-*: keeps the holes in the pan handles)
    --model bria-rmbg,isnet-general-use --solid 24 --paper 60  (sigara-boregi: paper liner)
"""
import argparse
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter
from rembg import new_session, remove


def fill_holes(mask: Image.Image) -> Image.Image:
    # Flood the background from a padded border; whatever the flood cannot reach is object.
    pad = Image.new("L", (mask.width + 2, mask.height + 2), 0)
    pad.paste(mask, (1, 1))
    ImageDraw.floodfill(pad, (0, 0), 128)
    return pad.crop((1, 1, mask.width + 1, mask.height + 1)).point(lambda v: 0 if v == 128 else 255)


def solid_mask(img: Image.Image, sessions: list, t: int, paper: int | None = None) -> Image.Image:
    masks = [remove(img, session=s, only_mask=True).point(lambda a: 255 if a > t else 0) for s in sessions]
    if paper is not None:  # near-white paper the models drop: keep pixels with HSV saturation < paper
        masks.append(img.convert("HSV").getchannel("S").point(lambda v: 255 if v < paper else 0))
    m = masks[0]
    for other in masks[1:]:
        m = ImageChops.lighter(m, other)
    m = m.filter(ImageFilter.MinFilter(5)).filter(ImageFilter.MaxFilter(5))  # drop specks
    m = m.filter(ImageFilter.MaxFilter(7)).filter(ImageFilter.MinFilter(7))  # close thin gaps
    return fill_holes(m).filter(ImageFilter.GaussianBlur(1.2))


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", type=Path, help="folder with the source .jpg/.png photos")
    ap.add_argument("output", type=Path, help="folder for <name>-cutout.png")
    ap.add_argument("--model", default="isnet-general-use", help="rembg model(s), comma-separated (isnet-general-use, birefnet-general, bria-rmbg, ...)")
    ap.add_argument("--solid", type=int, metavar="T", help="hard mask: alpha > T from every model, unioned, holes filled")
    ap.add_argument("--paper", type=int, metavar="S", help="with --solid: also keep low-saturation pixels (white paper on a coloured backdrop)")
    ap.add_argument("--only", nargs="*", help="photo names without extension; default: every photo in input")
    ap.add_argument("--suffix", default="-cutout", help="appended to the output name")
    ap.add_argument("--pad", type=int, default=8, help="transparent margin kept around the trimmed object (px)")
    args = ap.parse_args()

    sources = [p for p in sorted(args.input.iterdir()) if p.suffix.lower() in {".jpg", ".jpeg", ".png"} and not p.stem.endswith(args.suffix)]
    if args.only:
        sources = [p for p in sources if p.stem in args.only]
        missing = set(args.only) - {p.stem for p in sources}
        if missing:
            raise SystemExit(f"not found in {args.input}: {', '.join(sorted(missing))}")
    args.output.mkdir(parents=True, exist_ok=True)

    models = args.model.split(",")
    if len(models) > 1 and args.solid is None:
        raise SystemExit("several models need --solid (their masks are merged)")
    sessions = [new_session(m) for m in models]
    for src in sources:
        img = Image.open(src).convert("RGB")
        if args.solid is None:
            out = remove(img, session=sessions[0])
        else:
            out = img.convert("RGBA")
            out.putalpha(solid_mask(img, sessions, args.solid, args.paper))
        # Trim the empty transparent border so the object fills its box (alpha <= 8 counts as empty).
        box = out.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
        if box is None:
            print(f"skip {src.name}: model found no object")
            continue
        l, t, r, b = box
        p = args.pad
        out = out.crop((max(l - p, 0), max(t - p, 0), min(r + p, out.width), min(b + p, out.height)))
        dest = args.output / f"{src.stem}{args.suffix}.png"
        out.save(dest, optimize=True)
        print(f"{src.name} -> {dest} {out.width}x{out.height} ({args.model})")


if __name__ == "__main__":
    main()
