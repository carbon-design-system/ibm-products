/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig, type UserConfig } from 'tsdown';
import alias from '@rollup/plugin-alias';
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
  '!src/**/*.test.ts',
  '!src/**/*.figma.ts',
  '!src/components/**/*-helpers.ts',
  '!src/**/_story-assets/**',
  '!src/**/*.d.ts',
  '!src/polyfills',
];

const libInputs = [
  'src/components/**/defs.ts',
  'src/globals/**/*.ts',
  '!src/globals/decorators/**/*.ts',
  '!src/globals/directives/**/*.ts',
  '!src/globals/internal/**/*.ts',
  '!src/globals/mixins/**/*.ts',
  '!src/**/*.stories.ts',
  '!src/**/*.test.ts',
  '!src/components/**/*-helpers.ts',
  '!src/**/_story-assets/**',
];

const sharedConfig: UserConfig = {
  banner: () => ({
    js: banner,
  }),
  platform: 'browser',
  dts: false,
  cwd: import.meta.dirname,
  unbundle: true,
  outExtensions: () => ({ js: '.js' }),
  tsconfig: path.resolve(import.meta.dirname, 'tsconfig.json'),
  target: 'es2022',
  failOnWarn: false,
  external: [
    ...Object.keys(
      (packageJson as any).default?.dependencies ||
        packageJson.dependencies ||
        {}
    ),
    ...Object.keys(
      (packageJson as any).default?.devDependencies ||
        packageJson.devDependencies ||
        {}
    ),
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
      targets: [
        {
          src: 'src/components/**/*.scss',
          dest: 'scss',
          ignore: ['**/story-styles.scss', '**/_story-assets/**'],
        },
      ],
      flatten: false,
    }),
    // Transforms .scss files into lit templates
    // Now uses modern sass.compileString() API for better performance
    // Type cast needed because litSCSS is a JS plugin without TS types
    (litSCSS as any)({
      includePaths: [
        path.resolve(import.meta.dirname, './node_modules'),
        path.resolve(import.meta.dirname, '../../node_modules'),
      ],
      async preprocessor(contents: string, id: string) {
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
    outputOptions(options) {
      return {
        ...options,
        // Keep style module filenames aligned with historical rollup output.
        // Without this, tsdown emits collision suffixes like `*2.js` for
        // component files that also have a same-basename `.scss?lit` import.
        chunkFileNames(chunkInfo) {
          const id = chunkInfo.facadeModuleId ?? '';
          if (id.endsWith('.scss') || id.endsWith('.scss?lit')) {
            return '[name].scss.js';
          }
          return '[name].js';
        },
        entryFileNames(chunkInfo) {
          const id = chunkInfo.facadeModuleId ?? '';
          if (id.endsWith('.scss') || id.endsWith('.scss?lit')) {
            return '[name].scss.js';
          }
          return '[name].js';
        },
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: path.resolve(import.meta.dirname, 'src'),
        sourcemap: true,
      };
    },
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
    outputOptions(options) {
      return {
        ...options,
        chunkFileNames(chunkInfo) {
          const id = chunkInfo.facadeModuleId ?? '';
          if (id.endsWith('.scss') || id.endsWith('.scss?lit')) {
            return '[name].scss.js';
          }
          return '[name].js';
        },
        entryFileNames(chunkInfo) {
          const id = chunkInfo.facadeModuleId ?? '';
          if (id.endsWith('.scss') || id.endsWith('.scss?lit')) {
            return '[name].scss.js';
          }
          return '[name].js';
        },
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: path.resolve(import.meta.dirname, 'src'),
        sourcemap: true,
      };
    },
    onSuccess() {
      console.info('✅ cjs build succeeded!');
    },
  },
]);

async function postBuild() {
  const sourceDir = path.resolve(import.meta.dirname, './es');

  if (sourceDir) {
    const targetDir = path.resolve(import.meta.dirname, './es-custom');

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
