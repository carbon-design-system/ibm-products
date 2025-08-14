/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig, type UserConfig } from 'tsdown';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path';
import litSCSS from './tools/rollup-plugin-lit-scss.js';
import fs from 'fs-extra';
import { globby } from 'globby';
import * as packageJson from './package.json' with { type: 'json' };

const banner = `/**
 * Copyright IBM Corp. 2020, ${new Date().getFullYear()}
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

const esInputs = [
  'src/**/*.ts',
  '!src/**/*.stories.ts',
  '!src/**/*.d.ts',
  '!src/polyfills',
];

const libInputs = [
  'src/**/*.ts',
  'src/components/**/defs.ts',
  'src/globals/**/*.ts',
  '!src/globals/decorators/**/*.ts',
  '!src/globals/directives/**/*.ts',
  '!src/globals/internal/**/*.ts',
  '!src/globals/mixins/**/*.ts',
  '!src/**/*.stories.ts',
];

const sharedConfig: UserConfig = {
  banner: () => ({
    js: banner,
    dts: banner,
  }),
  platform: 'neutral',
  dts: true,
  cwd: import.meta.dirname,
  unbundle: true,
  outExtensions: () => ({ js: '.js' }),
  external: [
    '@carbon/utilities',
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.devDependencies),
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
    [
      json({
        exclude: ['./package.json'],
      }),
    ],
    // Transforms .scss files into lit templates
    // This custom rollup plugin uses sass.render api
    // internally which is very slow, we should explore
    // some alternative
    litSCSS({
      // @ts-expect-error
      includePaths: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, '../../node_modules'),
      ],
      async preprocessor(contents, id) {
        return (
          await postcss([autoprefixer(), cssnano()]).process(contents, {
            from: id,
          })
        ).css;
      },
    }),
  ],
};

export default defineConfig([
  {
    ...sharedConfig,
    entry: esInputs,
    outDir: 'es',
    onSuccess() {
      console.info('✅ esm build succeeded!');
    },
    hooks: {
      'build:done': async () => await postBuild(),
    },
  },
  {
    ...sharedConfig,
    entry: libInputs,
    outDir: 'lib',
    format: 'cjs',
    onSuccess() {
      console.info('✅ cjs build succeeded!');
    },
  },
]);

async function postBuild() {
  const sourceDir = path.resolve(__dirname, './es');

  if (sourceDir) {
    const targetDir = path.resolve(__dirname, './es-custom');

    // Copy `es` directory to `es-custom`
    await fs.copy(sourceDir, targetDir);

    // Find all files in the `es-custom` directory
    const files = await globby([`${targetDir}/**/*`], { onlyFiles: true });

    // Replace "cds" with "cds-custom" in all files
    await Promise.all(
      files.map(async (file) => {
        let content = await fs.promises.readFile(file, 'utf8');
        content = content.replace(/cds/g, 'cds-custom');
        content = content.replace(
          /import\s+['"]@carbon\/web-components\/es\/components\/(.*?)['"]/g,
          "import '@carbon/web-components/es-custom/components/$1'"
        );
        await fs.promises.writeFile(file, content);
      })
    );
  }
}
