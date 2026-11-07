import re

import numpy as np
import opensimplex
from PIL import Image

WIDTH, HEIGHT = 1920, 1080
SUPERSAMPLE = 2  
SCALE = 300
COUNT = 10

css = open("style.css").read()
color = {
    name: np.array([int(h[i : i + 2], 16) for i in (0, 2, 4)])
    for name, h in re.findall(r"--([a-z-]+): #([0-9a-f]{6});", css)
}


def noise(scale, seed_offset):
    x = np.arange(WIDTH * SUPERSAMPLE) / (scale * SUPERSAMPLE)
    y = np.arange(HEIGHT * SUPERSAMPLE) / (scale * SUPERSAMPLE)
    return opensimplex.noise2array(x + seed_offset, y + seed_offset)


for i in range(1, COUNT + 1):
    opensimplex.random_seed()

    t = noise(SCALE, 0) + 0.35 * noise(SCALE / 3, 100)

    pixels = np.full(t.shape + (3,), color["navy-blue"])
    pixels[t > -0.1] = color["sky-blue"]
    pixels[t > 0.35] = color["sky-pink"]

    image = Image.fromarray(pixels.astype(np.uint8))
    image = image.resize((WIDTH, HEIGHT), Image.LANCZOS)
    image.save(f"assets/images/clouds{i}.png")
