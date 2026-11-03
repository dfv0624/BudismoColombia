#!/usr/bin/env python3
"""
Generador de tarjetas conceptuales editoriales para TikTok (1080x1920)
Estilo: Budismo Colombia — Repositorio Conceptual
budismocolombia.com
"""

import argparse
import math
import os
import re
import sys
from PIL import Image, ImageDraw, ImageFont

REPO_PATH = os.path.join(os.path.dirname(__file__), "..", "lib", "repository.ts")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "tiktok")

def load_repository_concepts():
    if not os.path.exists(REPO_PATH):
        raise FileNotFoundError(f"No se encontró {REPO_PATH}")

    with open(REPO_PATH, "r", encoding="utf-8") as f:
        text = f.read()

    pillars_raw = re.findall(
        r'\{\s*id:\s*\"([^\"]+)\",\s*num:\s*\"([^\"]+)\",\s*pali:\s*\"([^\"]+)\",\s*title:\s*\"([^\"]+)\",\s*desc:\s*\"([^\"]+)\",\s*nodes:\s*\[([\s\S]*?)\n\s*\]\s*\}',
        text
    )

    concepts = []
    for p_id, p_num, p_pali, p_title, p_desc, raw_nodes in pillars_raw:
        pillar_header = f"EJE {p_num} · {p_pali.upper()} ({p_title.upper()})"
        node_matches = re.findall(
            r'\{\s*id:\s*\"([a-z_]+)\",\s*code:\s*\"([^\"]+)\",\s*type:\s*\"([^\"]+)\",\s*name:\s*\"([^\"]+)\",\s*pali:\s*\"([^\"]+)\",\s*translation:\s*\"([^\"]+)\",\s*summary:\s*\"([^\"]+)\",\s*quote:\s*\"([^\"]+)\",\s*essence:\s*\"([^\"]+)\",\s*steps:\s*\[([\s\S]*?)\]\s*,\s*source:\s*\"([^\"]+)\"',
            raw_nodes
        )
        for n in node_matches:
            steps_raw = re.findall(r'\{\s*title:\s*\"([^\"]+)\",\s*desc:\s*\"([^\"]+)\"\s*\}', n[9])
            pali_parts = n[4].split("·")
            devanagari = pali_parts[0].strip() if len(pali_parts) > 1 else ""
            pali_label = pali_parts[1].strip() if len(pali_parts) > 1 else n[4].strip()

            concepts.append({
                "id": n[0],
                "code": n[1],
                "pillar_header": pillar_header,
                "type": n[2],
                "name": n[3],
                "devanagari": devanagari,
                "pali_label": pali_label,
                "translation": n[5],
                "summary": n[6],
                "quote": n[7],
                "essence": n[8],
                "steps": steps_raw,
                "source": n[10]
            })

    return concepts

def draw_dharmachakra(draw, cx, cy, radius, color, width=3):
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], outline=color, width=width)
    hub_r = radius * 0.32
    draw.ellipse([cx - hub_r, cy - hub_r, cx + hub_r, cy + hub_r], outline=color, width=width)
    center_dot_r = radius * 0.08
    draw.ellipse([cx - center_dot_r, cy - center_dot_r, cx + center_dot_r, cy + center_dot_r], fill=color)
    for i in range(8):
        angle = i * (math.pi / 4)
        x1 = cx + hub_r * math.cos(angle)
        y1 = cy + hub_r * math.sin(angle)
        x2 = cx + radius * math.cos(angle)
        y2 = cy + radius * math.sin(angle)
        draw.line([(x1, y1), (x2, y2)], fill=color, width=width)

def wrap_text(text, font, max_width, draw):
    words = text.split()
    lines = []
    current_line = []
    for word in words:
        test_line = ' '.join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        w = bbox[2] - bbox[0]
        if w <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(' '.join(current_line))
                current_line = [word]
            else:
                lines.append(word)
    if current_line:
        lines.append(' '.join(current_line))
    return lines

def render_card(concept, theme="dark", out_path=None):
    W, H = 1080, 1920

    if theme == "dark":
        bg_color = (14, 14, 14)       # #0E0E0E
        fg_color = (233, 236, 240)    # #E9ECF0
        muted_color = (130, 136, 145) # #828891
        border_color = (38, 41, 45)   # #26292D
        box_bg = (20, 21, 23)
        watermark_color = (22, 23, 25)
        accent_color = (195, 160, 85) # subtle gold
    else:
        bg_color = (244, 246, 248)    # #F4F6F8
        fg_color = (18, 19, 20)       # #121314
        muted_color = (105, 110, 118) # #696E76
        border_color = (218, 222, 227)# #DADEE3
        box_bg = (255, 255, 255)
        watermark_color = (235, 238, 241)
        accent_color = (165, 125, 45)

    img = Image.new("RGB", (W, H), bg_color)
    draw = ImageDraw.Draw(img)

    L = 100
    R = W - 130
    content_w = R - L

    # Load system fonts
    font_mono_small   = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 22)
    font_mono_mid     = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 26)
    font_deva_water   = ImageFont.truetype("/System/Library/Fonts/Supplemental/DevanagariMT.ttc", 170)
    font_deva_large   = ImageFont.truetype("/System/Library/Fonts/Supplemental/DevanagariMT.ttc", 60)
    font_serif_italic = ImageFont.truetype("/System/Library/Fonts/Supplemental/Georgia Italic.ttf", 32)
    font_sans_body    = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 27, index=0)
    font_sans_bold    = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 27, index=1)
    font_sans_sub     = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30, index=0)

    name_len = len(concept["name"])
    title_size = 72 if name_len < 12 else (58 if name_len < 18 else 48)
    font_title_bold = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", title_size, index=1)

    # 1. Subtle inner frame border
    draw.rectangle([60, 160, W - 60, H - 240], outline=border_color, width=2)

    # 2. Devanagari background watermark
    if concept["devanagari"]:
        draw.text((R - 400, 410), concept["devanagari"], font=font_deva_water, fill=watermark_color)

    # 3. Top Header (y = 210)
    y = 210
    draw_dharmachakra(draw, L + 24, y + 22, radius=22, color=fg_color, width=3)
    draw.text((L + 64, y + 4), "BUDISMO COLOMBIA", font=font_mono_mid, fill=fg_color)
    draw.text((L + 64, y + 32), "REPOSITORIO CONCEPTUAL", font=font_mono_small, fill=muted_color)

    code_text = f"FICHA · {concept['code']}"
    c_bbox = draw.textbbox((0, 0), code_text, font=font_mono_mid)
    draw.text((R - (c_bbox[2] - c_bbox[0]), y + 14), code_text, font=font_mono_mid, fill=muted_color)

    # Divider line
    y = 290
    draw.line([(L, y), (R, y)], fill=border_color, width=2)

    # 4. Pillar categorization
    y = 330
    draw.text((L, y), concept["pillar_header"], font=font_mono_small, fill=muted_color)

    # 5. Main Title & Devanagari
    y = 385
    draw.text((L, y), concept["name"].upper(), font=font_title_bold, fill=fg_color)
    
    if concept["devanagari"]:
        name_bbox = draw.textbbox((L, y), concept["name"].upper(), font=font_title_bold)
        deva_x = min(name_bbox[2] + 30, R - 200)
        draw.text((deva_x, y + 2), concept["devanagari"], font=font_deva_large, fill=fg_color)

    y = 475
    sub_text = f"{concept['pali_label']}  ·  {concept['translation']}"
    sub_lines = wrap_text(sub_text, font_sans_sub, content_w, draw)
    for s_line in sub_lines:
        draw.text((L, y), s_line, font=font_sans_sub, fill=muted_color)
        y += 40

    # 6. Central Quote Block
    y = max(y + 20, 560)
    box_top = y
    q_lines = wrap_text(concept["quote"], font_serif_italic, content_w - 70, draw)
    box_height = 40 + len(q_lines) * 46 + 48

    draw.rectangle([L, box_top, R, box_top + box_height], fill=box_bg, outline=border_color, width=2)
    draw.line([(L, box_top), (L, box_top + box_height)], fill=accent_color, width=6)

    cur_qy = box_top + 30
    for line in q_lines:
        draw.text((L + 35, cur_qy), line, font=font_serif_italic, fill=fg_color)
        cur_qy += 46
    draw.text((L + 35, cur_qy + 8), f"— {concept['source']}", font=font_mono_small, fill=muted_color)

    # 7. Essence / Insight
    y = box_top + box_height + 40
    draw.text((L, y), "LA LEY OBSERVABLE", font=font_mono_small, fill=muted_color)
    y += 36

    e_lines = wrap_text(concept["essence"], font_sans_body, content_w, draw)
    for line in e_lines[:3]:
        draw.text((L, y), line, font=font_sans_body, fill=fg_color)
        y += 38

    # 8. Practical steps
    y += 25
    draw.line([(L, y), (R, y)], fill=border_color, width=2)
    y += 35

    draw.text((L, y), "MÉTODO DE APLICACIÓN DIARIA", font=font_mono_small, fill=muted_color)
    y += 45

    for idx, step in enumerate(concept["steps"][:3], start=1):
        num_str = f"0{idx}"
        title_str, desc_str = step[0], step[1]
        draw.text((L, y), f"[{num_str}]", font=font_mono_mid, fill=accent_color)
        draw.text((L + 70, y), title_str.upper(), font=font_sans_bold, fill=fg_color)
        y += 36
        p_lines = wrap_text(desc_str, font_sans_body, content_w - 70, draw)
        for line in p_lines:
            draw.text((L + 70, y), line, font=font_sans_body, fill=muted_color)
            y += 34
        y += 20

    # 9. Bottom Footer
    footer_y = H - 320
    draw.line([(L, footer_y), (R, footer_y)], fill=border_color, width=2)

    draw.text((L, footer_y + 24), "budismocolombia.com", font=font_mono_mid, fill=fg_color)
    draw.text((L, footer_y + 56), "Archivo abierto · 20 conceptos de filosofía budista aplicada", font=font_sans_body, fill=muted_color)

    if not out_path:
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        out_path = os.path.join(OUTPUT_DIR, f"{concept['id']}-{theme}.png")

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    img.save(out_path, quality=95)
    return out_path

def main():
    parser = argparse.ArgumentParser(description="Generador de fichas TikTok de Budismo Colombia")
    parser.add_argument("--id", type=str, help="ID del concepto (ej. anicca, dukkha, sati, vipassana)")
    parser.add_argument("--theme", type=str, choices=["dark", "light", "both"], default="both", help="Tema visual")
    parser.add_argument("--all", action="store_true", help="Generar todas las 20 fichas")
    parser.add_argument("--list", action="store_true", help="Listar todos los conceptos disponibles")
    args = parser.parse_args()

    concepts = load_repository_concepts()

    if args.list:
        print("\n=== CONCEPTOS DISPONIBLES EN BUDISMO COLOMBIA ===")
        for c in concepts:
            print(f"[{c['code']}] {c['id']:<15} -> {c['name']} ({c['pali_label']})")
        print("\nEjemplo de uso: python3 scripts/generate_tiktok_card.py --id sati --theme dark\n")
        return

    to_render = []
    if args.all:
        to_render = concepts
    elif args.id:
        found = [c for c in concepts if c["id"].lower() == args.id.lower()]
        if not found:
            print(f"Error: No se encontró el concepto con id '{args.id}'. Usa --list para ver los disponibles.")
            sys.exit(1)
        to_render = found
    else:
        to_render = [concepts[0]]

    themes = ["dark", "light"] if args.theme == "both" else [args.theme]

    print(f"\nGenerando {len(to_render) * len(themes)} tarjeta(s) para TikTok...")
    for c in to_render:
        for t in themes:
            path = render_card(c, theme=t)
            print(f"✓ [{c['code']}] {c['name']} ({t}) -> {os.path.relpath(path)}")

    print(f"\n¡Completado! Las imágenes están listas en: {os.path.relpath(OUTPUT_DIR)}")

if __name__ == "__main__":
    main()
