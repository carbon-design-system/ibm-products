/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { fileURLToPath } from 'url';
import { globby } from 'globby';
import { rollup } from 'rollup';
import alias from '@rollup/plugin-alias';
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import cssnano from 'cssnano';
import litSCSS from '../tools/rollup-plugin-lit-scss.js';
import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';
import postcss from 'postcss';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import fs from 'fs';

import * as packageJson from '../package.json' assert { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Gets all of the folders and returns out
 *
 * @param {string} dir Directory to check
 * @returns {string[]} List of folders
 * @private
 */
function _getFolders(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
}

async function build() {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  const folders = _getFolders('src/components');

  for (let i = folders.length - 1; i >= 0; i--) {
    if (!fs.existsSync(`src/components/${folders[i]}/index.ts`)) {
      folders.splice(i, 1);
    }
  }

  return rollup(getRollupConfig({ folders }))
    .then((bundle) => {
      bundle.write({
        format: 'es',
        dir: 'dist',
        banner: 'let process = { env: {} };',
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Generates the multi-input for the rollup config
 *
 * @param {Array} folders Package names as inputs
 * @returns {{}} Object with inputs
 * @private
 */
function _generateInputs(folders) {
  const inputs = {};

  folders.forEach((folder) => {
    inputs[`${folder}.min`] = `src/components/${folder}/index.ts`;
  });

  return inputs;
}

function getRollupConfig({ folders = [] } = {}) {
  return {
    input: _generateInputs(folders),
    // Mark dependencies listed in `package.json` as external so that they are
    // not included in the output bundle.
    external: [
      ...Object.keys(packageJson.default.dependencies),
      ...Object.keys(packageJson.default.devDependencies),
    ].map((name) => {
      // Transform the name of each dependency into a regex so that imports from
      // nested paths are correctly marked as external.
      //
      // Example:
      // import 'module-name';
      // import 'module-name/path/to/nested/module';
      return new RegExp(`^${name}(/.*)?`);
    }),
    plugins: [
      alias({
        entries: [{ find: /^(.*)\.scss\?lit$/, replacement: '$1.scss' }],
      }),
      copy({
        targets: [{ src: 'src/components/**/*.scss', dest: 'scss' }],
        flatten: false,
      }),
      [json()],
      nodeResolve({
        browser: true,
        mainFields: ['jsnext', 'module', 'main'],
        extensions: ['.js', '.ts'],
      }),
      commonjs({
        include: [/node_modules/],
        sourceMap: true,
      }),
      litSCSS({
        includePaths: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../../../node_modules'),
        ],
        async preprocessor(contents, id) {
          return (
            await postcss([autoprefixer(), cssnano()]).process(contents, {
              from: id,
            })
          ).css;
        },
      }),
      typescript({
        noEmitOnError: true,
        declaration: false,
        compilerOptions: {
          rootDir: 'src',
          outDir: 'dist',
        },
      }),
    ],
  };
}

build().catch((error) => {
  console.log(error);
  process.exit(1);
});
