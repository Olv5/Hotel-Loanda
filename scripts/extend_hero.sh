#!/bin/bash
set -e

# Extract top 60px of the real photo
convert assets/images/hero2.jpg.bak -crop 1376x60+0+0 +repage /tmp/top_strip.png

# Stretch vertically with slight vertical blur so grain remains natural and matches
convert /tmp/top_strip.png -resize 1376x280! -blur 0x16 /tmp/sky_stretched.png

# Create a gradient for the upper atmosphere (zenith)
convert -size 1376x280 gradient:"#3d4d5e-#ffffff" /tmp/zenith_grad.png
convert /tmp/sky_stretched.png /tmp/zenith_grad.png -compose Multiply -composite /tmp/sky_top.png

# Softly blend bottom 40px of sky_top into the top 40px of the photo using a mask
# Total height = 240 (sky) + 768 (hotel) = 1008px
convert -size 1376x1008 xc:none \
  /tmp/sky_top.png -geometry +0+0 -composite \
  assets/images/hero2.jpg.bak -geometry +0+240 -composite \
  /tmp/temp_extended.jpg

# Now let's smooth the transition line around y=240 by blending a 40px slice with blur
convert /tmp/temp_extended.jpg -crop 1376x60+0+210 +repage -blur 0x6 /tmp/seam_blur.png
convert /tmp/temp_extended.jpg /tmp/seam_blur.png -geometry +0+210 -compose Blend -define compose:args=40,60 -composite /tmp/final_extended.jpg

# Also optimize color profile and subtle richness: quality 94
convert /tmp/final_extended.jpg -quality 94 assets/images/hero2.jpg

echo "Successfully updated assets/images/hero2.jpg"
identify assets/images/hero2.jpg
