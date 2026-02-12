#!/usr/bin/env node

/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Get list of changed files in the PR (GitHub Actions context)
 * @returns {string[]} Array of changed file paths
 */
function getChangedFiles() {
  try {
    // In GitHub Actions, we compare against the base branch
    const baseBranch = process.env.GITHUB_BASE_REF || 'main';
    const baseRef = `origin/${baseBranch}`;
    
    console.log(`Comparing against base: ${baseRef}`);
    
    // Get changed files between base branch and current HEAD
    const output = execSync(
      `git diff --name-only ${baseRef}...HEAD`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }
    );
    
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error getting changed files:', error.message);
    // Fallback: try to get changed files from the last commit
    try {
      const output = execSync('git diff --name-only HEAD~1', {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'pipe']
      });
      return output.trim().split('\n').filter(Boolean);
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError.message);
      return [];
    }
  }
}

/**
 * Extract component names from changed file paths
 * @param {string[]} changedFiles - Array of changed file paths
 * @returns {Set<string>} Set of unique component names
 */
function extractChangedComponents(changedFiles) {
  const components = new Set();
  const componentPattern = /packages\/ibm-products\/src\/components\/([^\/]+)\//;
  
  changedFiles.forEach(file => {
    const match = file.match(componentPattern);
    if (match) {
      components.add(match[1]);
    }
  });
  
  return components;
}

/**
 * Check if AVT test file exists for a component
 * @param {string} componentName - Name of the component
 * @returns {boolean} True if AVT test exists
 */
function hasAvtTest(componentName) {
  const testPath = path.join(
    __dirname,
    '..',
    'e2e',
    'components',
    componentName,
    `${componentName}-test.avt.e2e.js`
  );
  return fs.existsSync(testPath);
}

/**
 * Generate Playwright test path pattern for changed components
 * @param {Set<string>} components - Set of component names
 * @returns {string} Playwright test path pattern or empty string
 */
function generateTestPattern(components) {
  const componentsWithTests = Array.from(components).filter(hasAvtTest);
  
  if (componentsWithTests.length === 0) {
    return '';
  }
  
  // Create a regex pattern that matches any of the changed components
  // Format: e2e/components/(Component1|Component2|Component3)/.*-test.avt.e2e.js
  const pattern = `e2e/components/(${componentsWithTests.join('|')})/.*-test\\.avt\\.e2e\\.js`;
  
  return pattern;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Detecting changed components for AVT tests...\n');
  
  const changedFiles = getChangedFiles();
  
  if (changedFiles.length === 0) {
    console.log('⚠️  No changed files detected. Running all AVT tests as fallback.');
    console.log('RUN_ALL_AVT=true');
    return;
  }
  
  console.log(`📝 Found ${changedFiles.length} changed file(s)`);
  
  const changedComponents = extractChangedComponents(changedFiles);
  
  if (changedComponents.size === 0) {
    console.log('ℹ️  No component changes detected. Skipping AVT tests.');
    console.log('SKIP_AVT=true');
    return;
  }
  
  console.log(`\n🎯 Changed components (${changedComponents.size}):`);
  changedComponents.forEach(comp => {
    const hasTest = hasAvtTest(comp);
    console.log(`  ${hasTest ? '✓' : '✗'} ${comp}${hasTest ? '' : ' (no AVT test)'}`);
  });
  
  const testPattern = generateTestPattern(changedComponents);
  
  if (!testPattern) {
    console.log('\n⚠️  No AVT tests found for changed components. Skipping AVT tests.');
    console.log('SKIP_AVT=true');
    return;
  }
  
  console.log(`\n✅ Generated test pattern:`);
  console.log(`   ${testPattern}\n`);
  
  // Output for GitHub Actions
  console.log(`TEST_PATTERN=${testPattern}`);
  console.log('RUN_SELECTIVE_AVT=true');
}

main();

// Made with Bob
