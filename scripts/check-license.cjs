#!/usr/bin/env node

/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const { promisify } = require('util');
const { program } = require('commander');
const { exec } = require('child_process');
const gitignoreToGlob = require('gitignore-to-glob');
const path = require('path');
const reLicense = require('./license-text.cjs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const execPromise = promisify(exec);
const {
  currentYear,
  reLicenseTextCurrentYear,
  reLicenseTextSingleYear,
  reLicenseTextRange,
} = reLicense;

program
  .option(
    '-c, --test-current-year',
    'Ensures the license header represents the current year'
  )
  .option(
    '-w, --write-current-year',
    'Updates the license header to represent the current year'
  )
  .option('-a, --check-all-files', 'Grabs all files in the project to check');

program.parse();

/**
 * Stores the arguments
 *
 * @type {{}}
 */
const options = program.opts();

/**
 * Checks files with the given paths for valid license text.
 *
 * @param {string[]} paths The file paths to check for valid license text.
 * @param {object} options The options.
 * @param {boolean} options.testCurrentYear `true` to see if the license text contains the current year.
 * @param {boolean} options.writeCurrentYear `true` to update the given file with the current year for the license text.
 * @param {boolean} options.checkAllFiles `true` to grab all files in the project to check.
 * @returns {Promise<void>} The promise that is fulfilled when the check finishes.
 */
const check = async (paths, options) => {
  let checkPaths = [];
  const { globby } = await import('globby');

  if (options.checkAllFiles) {
    const gitIgnorePath = await globby(
      path.resolve(__dirname, '../.gitignore'),
      {
        cwd: path.resolve(__dirname, '..'),
        gitignore: true,
      }
    );

    checkPaths = await globby(
      gitIgnorePath.reduce(
        (acc, item) => acc.concat(gitignoreToGlob(item)),
        [
          '**/*.{js,ts,tsx,scss,html}',
          '!**/*.snap.js',
          '!examples/**',
          '!packages/ibm-products/scripts/generate/templates/**',
        ]
      )
    );
  } else if (options.writeCurrentYear) {
    // Get the list of staged files
    const { stdout } = await execPromise('git diff --cached --name-only');
    const allPaths = stdout.split('\n').filter(Boolean);

    checkPaths = await globby(
      allPaths.map((file) => path.relative(__dirname, file)),
      {
        cwd: path.resolve(__dirname, '..'),
        gitignore: true,
        expandDirectories: {
          files: ['**/*.{js,ts,tsx,scss,html}'],
          exclude: [
            '**/*.snap.js',
            'examples/**',
            '!packages/ibm-products/scripts/generate/templates/**',
          ],
        },
      }
    );
  }

  const checkFiles = checkPaths || paths;

  const filesWithErrors = (
    await Promise.all(
      checkFiles.map(async (item) => {
        if (item.indexOf('.yarn') !== -1) {
          return;
        }
        const contents = await readFile(item, 'utf8');
        const result = (
          options.testCurrentYear || options.writeCurrentYear
            ? reLicenseTextCurrentYear
            : reLicense
        ).test(contents);
        if (!result) {
          if (options.writeCurrentYear) {
            const newContents = contents
              .replace(
                reLicenseTextSingleYear,
                (match) => `${match}, ${currentYear}`
              )
              .replace(
                reLicenseTextRange,
                (match, token) => `${token}${currentYear}`
              );
            if (!reLicenseTextCurrentYear.test(newContents)) {
              return item;
            }
            await writeFile(item, newContents, 'utf8');
          } else {
            return item;
          }
        }
      })
    )
  ).filter(Boolean);
  if (filesWithErrors.length > 0) {
    throw new Error(
      `Cannot find license text in: ${filesWithErrors.join(', ')}`
    );
  }
};

check(program.args, options).then(
  () => {
    process.exit(0);
  },
  (error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }
);
