#!/usr/bin/env node

/**
 * XML Validation Script
 * 
 * This script validates XML files for common syntax errors
 * like unescaped ampersands and other issues.
 * 
 * Usage:
 * node scripts/validate-xml.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');

// XML files to validate
const xmlFiles = [
  'public/sitemap.xml',
  'public/image-sitemap.xml',
  'public/sitemap-index.xml'
];

// Common XML issues to check for
const xmlIssues = [
  {
    pattern: /&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/g,
    description: 'Unescaped ampersand (&) - should be &amp;',
    severity: 'ERROR'
  },
  {
    pattern: /<[^>]*&[^>]*>/g,
    description: 'Ampersand in tag attributes without proper escaping',
    severity: 'ERROR'
  },
  {
    pattern: /[^\x00-\x7F]/g,
    description: 'Non-ASCII characters that might need encoding',
    severity: 'WARNING'
  }
];

function validateXMLFile(filePath) {
  const fullPath = path.join(projectRoot, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  let hasErrors = false;
  
  console.log(`\n🔍 Validating: ${filePath}`);
  console.log('─'.repeat(50));
  
  // Check for XML declaration
  if (!content.startsWith('<?xml')) {
    console.log('⚠️  WARNING: Missing XML declaration');
  }
  
  // Check for common issues
  xmlIssues.forEach(issue => {
    const matches = content.match(issue.pattern);
    if (matches) {
      console.log(`❌ ${issue.severity}: ${issue.description}`);
      console.log(`   Found ${matches.length} occurrence(s)`);
      
      // Show specific lines with issues
      lines.forEach((line, index) => {
        if (issue.pattern.test(line)) {
          console.log(`   Line ${index + 1}: ${line.trim()}`);
        }
      });
      
      hasErrors = true;
    }
  });
  
  // Check for proper XML structure
  if (filePath.includes('sitemap.xml') && !filePath.includes('sitemap-index') && !content.includes('<urlset')) {
    console.log('❌ ERROR: Missing <urlset> root element');
    hasErrors = true;
  }
  
  if (filePath.includes('sitemap-index') && !content.includes('<sitemapindex')) {
    console.log('❌ ERROR: Missing <sitemapindex> root element');
    hasErrors = true;
  }
  
  // Check for proper closing tags
  if (!content.includes('</urlset>') && !content.includes('</sitemapindex>')) {
    console.log('❌ ERROR: Missing closing root tag');
    hasErrors = true;
  }
  
  if (!hasErrors) {
    console.log('✅ No issues found');
  }
  
  return !hasErrors;
}

async function validateAllXML() {
  console.log('🔍 XML Validation Report');
  console.log('='.repeat(50));
  
  let allValid = true;
  
  for (const file of xmlFiles) {
    const isValid = validateXMLFile(file);
    if (!isValid) {
      allValid = false;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  
  if (allValid) {
    console.log('🎉 All XML files are valid!');
  } else {
    console.log('❌ Some XML files have issues that need to be fixed.');
    console.log('\n💡 Tips:');
    console.log('   - Replace & with &amp; in XML content');
    console.log('   - Ensure all tags are properly closed');
    console.log('   - Check for proper XML declaration');
    console.log('   - Validate against XML schema if available');
  }
  
  return allValid;
}

// Run validation
validateAllXML().catch(console.error); 