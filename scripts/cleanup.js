#!/usr/bin/env node

/**
 * Project Cleanup Script
 * 
 * This script helps clean up the project by removing temporary files,
 * build artifacts, and other unnecessary files.
 * 
 * Usage:
 * node scripts/cleanup.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');

// Files and directories to clean
const cleanupTargets = [
  // System files
  '.DS_Store',
  'Thumbs.db',
  'ehthumbs.db',
  'Desktop.ini',
  
  // Log files
  '*.log',
  'npm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',
  'pnpm-debug.log*',
  'lerna-debug.log*',
  
  // Temporary files
  '*.tmp',
  '*.temp',
  '*.swp',
  '*.swo',
  '*~',
  
  // Cache directories
  '.cache',
  '.parcel-cache',
  '.eslintcache',
  '.stylelintcache',
  '.rpt2_cache',
  '.rts2_cache_cjs',
  '.rts2_cache_es',
  '.rts2_cache_umd',
  
  // Build outputs (keep dist for deployment)
  'dist-ssr',
  'build',
  
  // Coverage
  'coverage',
  '.nyc_output',
  '*.lcov',
  
  // IDE files
  '.vscode/settings.json',
  '.idea',
  '*.iml',
  '*.ipr',
  '*.iws',
  
  // OS generated files
  '.Spotlight-V100',
  '.Trashes',
  '._*',
  '.AppleDouble',
  '.LSOverride',
  'Icon',
  '.DocumentRevisions-V100',
  '.fseventsd',
  '.TemporaryItems',
  '.VolumeIcon.icns',
  '.com.apple.timemachine.donotpresent',
  '.AppleDB',
  '.AppleDesktop',
  'Network Trash Folder',
  'Temporary Items',
  '.apdisk',
  
  // Backup files
  '*.bak',
  '*.backup',
  '*.old',
  
  // Archive files
  '*.zip',
  '*.tar.gz',
  '*.rar',
  
  // Database files
  '*.db',
  '*.sqlite',
  '*.sqlite3',
  
  // Certificate files
  '*.pem',
  '*.key',
  '*.crt',
  '*.csr',
  
  // Local development files
  '*.local',
  
  // Test results
  'test-results',
  'playwright-report',
  'playwright/.cache',
];

// Directories to clean recursively
const cleanupDirectories = [
  'node_modules/.cache',
  '.netlify',
];

function findFiles(pattern, directory = projectRoot) {
  const files = [];
  
  function walkDir(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          // Simple pattern matching
          if (pattern.includes('*')) {
            const regex = new RegExp(pattern.replace(/\*/g, '.*'));
            if (regex.test(item)) {
              files.push(fullPath);
            }
          } else if (item === pattern) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(directory);
  return files;
}

function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`🗑️  Removed directory: ${dirPath}`);
    } catch (error) {
      console.log(`⚠️  Could not remove directory: ${dirPath}`);
    }
  }
}

function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed file: ${filePath}`);
    } catch (error) {
      console.log(`⚠️  Could not remove file: ${filePath}`);
    }
  }
}

async function cleanup() {
  console.log('🧹 Starting project cleanup...\n');
  
  let totalRemoved = 0;
  
  // Clean up files
  for (const pattern of cleanupTargets) {
    const files = findFiles(pattern);
    for (const file of files) {
      removeFile(file);
      totalRemoved++;
    }
  }
  
  // Clean up directories
  for (const dir of cleanupDirectories) {
    const dirPath = path.join(projectRoot, dir);
    removeDirectory(dirPath);
    totalRemoved++;
  }
  
  // Clean up specific directories recursively
  const specificDirs = [
    path.join(projectRoot, 'node_modules', '.cache'),
    path.join(projectRoot, '.netlify'),
  ];
  
  for (const dir of specificDirs) {
    removeDirectory(dir);
    totalRemoved++;
  }
  
  console.log(`\n✅ Cleanup complete! Removed ${totalRemoved} items.`);
  console.log('\n📋 Next steps:');
  console.log('1. Run "npm install" to reinstall dependencies if needed');
  console.log('2. Run "npm run build" to rebuild the project');
  console.log('3. Run "npm run dev" to start development server');
}

// Run cleanup
cleanup().catch(console.error); 