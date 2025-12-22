const fs = require('fs');
const path = require('path');

// This is a simple script to copy favicon for now
// For production, use: https://www.pwabuilder.com/imageGenerator

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, '../public/icons');
const faviconPath = path.join(__dirname, '../public/favicon.ico');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

console.log('Note: favicon.ico cannot be directly resized to PNG.');
console.log('Please use one of these options:\n');
console.log('1. Online converter: https://www.pwabuilder.com/imageGenerator');
console.log('2. Online converter: https://favicon.io/favicon-converter/');
console.log('3. Install sharp package: npm install sharp');
console.log('\nThen run: node scripts/convert-favicon-sharp.js');
console.log('\nRequired icon sizes:', sizes.map(s => `${s}x${s}`).join(', '));
