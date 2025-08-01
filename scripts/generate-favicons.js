#!/usr/bin/env node

/**
 * Favicon Generation Script
 * 
 * This script helps generate PNG favicons from the SVG favicon.
 * You'll need to install a package like 'puppeteer' or 'sharp' to actually generate the PNGs.
 * 
 * Usage:
 * npm install sharp
 * node scripts/generate-favicons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (error) {
  console.log('Sharp not found. Install it with: npm install sharp');
  console.log('Then run this script again to generate PNG favicons.');
  process.exit(1);
}

async function generateFavicons() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const outputDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(svgPath)) {
    console.error('SVG favicon not found at:', svgPath);
    return;
  }
  
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 }
  ];
  
  console.log('Generating favicons...');
  
  for (const { name, size } of sizes) {
    try {
      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, name));
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`❌ Failed to generate ${name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Favicon generation complete!');
  console.log('Your favicons are ready in the public/ directory.');
}

// Run the script
generateFavicons().catch(console.error); 