# PWA Icons

To complete the PWA setup, you need to add the following icon files to this directory:

## Required Icons:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## How to Generate Icons:

### Option 1: Use an online tool
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload your logo/icon (square image recommended, at least 512x512px)
3. Download the generated icon pack
4. Copy all the PNG files to this directory

### Option 2: Use a tool like ImageMagick
If you have a logo.png file, you can generate all sizes using ImageMagick:

```bash
# Generate all required sizes
convert logo.png -resize 72x72 icon-72x72.png
convert logo.png -resize 96x96 icon-96x96.png
convert logo.png -resize 128x128 icon-128x128.png
convert logo.png -resize 144x144 icon-144x144.png
convert logo.png -resize 152x152 icon-152x152.png
convert logo.png -resize 192x192 icon-192x192.png
convert logo.png -resize 384x384 icon-384x384.png
convert logo.png -resize 512x512 icon-512x512.png
```

## Icon Design Tips:

- Use a square aspect ratio (1:1)
- Keep it simple - complex details don't show well at small sizes
- Use your brand colors
- Make sure it looks good on both light and dark backgrounds
- Test how it looks when rounded (mobile devices often add rounded corners)

## Current Setup:

- Background color: #000000 (Black)
- Theme color: #22c55e (Green)

Your icon should work well with these colors!
