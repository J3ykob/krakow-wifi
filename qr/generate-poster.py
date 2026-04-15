#!/usr/bin/env python3
"""Generate dead-simple printable QR code posters for citycompass.pl"""

import subprocess
import re
from pathlib import Path

URL = "https://citycompass.pl"
OUT_DIR = Path(__file__).parent

INK = "#000000"
BG = "#ffffff"


def get_qr_modules():
    result = subprocess.run(
        ["qrencode", "-o", "-", "-t", "SVG", "-s", "1", "-m", "0", "-l", "H", URL],
        capture_output=True,
        text=True,
    )
    svg = result.stdout
    size_match = re.search(r'<rect x="0" y="0" width="(\d+)" height="(\d+)" fill="#ffffff"', svg)
    size = int(size_match.group(1))
    modules = re.findall(
        r'<rect x="(\d+)" y="(\d+)" width="1" height="1" fill="#000000"/>', svg
    )
    return size, [(int(x), int(y)) for x, y in modules]


def render_qr(modules, x_offset, y_offset, scale):
    parts = []
    for x, y in modules:
        cx = x_offset + x * scale
        cy = y_offset + y * scale
        parts.append(
            f'<rect x="{cx}" y="{cy}" width="{scale}" height="{scale}" fill="{INK}"/>'
        )
    return "\n".join(parts)


def wifi(cx, cy, size):
    """Bold WiFi signal icon centered at (cx, cy)."""
    s = size
    sw = s * 0.18
    return f'''
    <g transform="translate({cx},{cy})">
      <path d="M -{s*0.85} -{s*0.15} A {s*0.9} {s*0.9} 0 0 1 {s*0.85} -{s*0.15}"
            stroke="{INK}" stroke-width="{sw}" fill="none" stroke-linecap="round"/>
      <path d="M -{s*0.55} {s*0.12} A {s*0.6} {s*0.6} 0 0 1 {s*0.55} {s*0.12}"
            stroke="{INK}" stroke-width="{sw}" fill="none" stroke-linecap="round"/>
      <path d="M -{s*0.25} {s*0.4} A {s*0.3} {s*0.3} 0 0 1 {s*0.25} {s*0.4}"
            stroke="{INK}" stroke-width="{sw}" fill="none" stroke-linecap="round"/>
      <circle cx="0" cy="{s*0.62}" r="{s*0.11}" fill="{INK}"/>
    </g>
    '''


def make_poster_a6():
    qr_size, modules = get_qr_modules()
    W, H = 800, 1130

    qr_scale = 17
    qr_pixel_size = qr_size * qr_scale
    qr_x = (W - qr_pixel_size) / 2
    qr_y = 380

    qr_rendered = render_qr(modules, qr_x, qr_y, qr_scale)

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="105mm" height="148mm">
  <rect width="{W}" height="{H}" fill="{BG}"/>

  <!-- WiFi icon -->
  {wifi(W/2, 130, 70)}

  <!-- Headline -->
  <text x="{W/2}" y="320" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="100" font-weight="900" fill="{INK}"
        letter-spacing="-3">FREE WIFI</text>

  <!-- QR -->
  {qr_rendered}

  <!-- URL -->
  <text x="{W/2}" y="{H - 80}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="38" font-weight="700" fill="{INK}"
        letter-spacing="1">citycompass.pl</text>
</svg>
'''


def make_sticker():
    qr_size, modules = get_qr_modules()
    W = H = 800

    qr_scale = 14
    qr_pixel_size = qr_size * qr_scale
    qr_x = (W - qr_pixel_size) / 2
    qr_y = 250

    qr_rendered = render_qr(modules, qr_x, qr_y, qr_scale)

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="80mm" height="80mm">
  <rect width="{W}" height="{H}" fill="{BG}"/>

  <!-- WiFi icon + headline inline -->
  {wifi(155, 145, 50)}

  <text x="220" y="170" text-anchor="start"
        font-family="Helvetica, Arial, sans-serif"
        font-size="74" font-weight="900" fill="{INK}"
        letter-spacing="-2">FREE WIFI</text>

  {qr_rendered}

  <text x="{W/2}" y="{H - 55}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="32" font-weight="700" fill="{INK}">citycompass.pl</text>
</svg>
'''


def make_card():
    qr_size, modules = get_qr_modules()
    W, H = 850, 550

    qr_scale = 13
    qr_pixel_size = qr_size * qr_scale
    qr_x = W - qr_pixel_size - 50
    qr_y = (H - qr_pixel_size) / 2

    qr_rendered = render_qr(modules, qr_x, qr_y, qr_scale)

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="85mm" height="55mm">
  <rect width="{W}" height="{H}" fill="{BG}"/>

  <!-- WiFi icon -->
  {wifi(115, 130, 50)}

  <text x="60" y="240" text-anchor="start"
        font-family="Helvetica, Arial, sans-serif"
        font-size="80" font-weight="900" fill="{INK}"
        letter-spacing="-3">FREE</text>
  <text x="60" y="325" text-anchor="start"
        font-family="Helvetica, Arial, sans-serif"
        font-size="80" font-weight="900" fill="{INK}"
        letter-spacing="-3">WIFI</text>

  <text x="60" y="400" text-anchor="start"
        font-family="Helvetica, Arial, sans-serif"
        font-size="26" font-weight="700" fill="{INK}">citycompass.pl</text>

  {qr_rendered}
</svg>
'''


def main():
    posters = {
        "poster-a6.svg": make_poster_a6(),
        "sticker-square.svg": make_sticker(),
        "card.svg": make_card(),
    }
    for name, svg in posters.items():
        path = OUT_DIR / name
        path.write_text(svg)
        print(f"✓ {name}")


if __name__ == "__main__":
    main()
