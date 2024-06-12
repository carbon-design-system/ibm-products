/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const path = require('path');
const { rollup } = require('rollup');
const stripBanner = require('rollup-plugin-strip-banner');
const {
  loadBaseTsCompilerOpts,
  loadTsCompilerOpts,
} = require('typescript-config-carbon');
const { readFileSync } = require('fs');
const packageJson = JSON.parse(readFileSync('./package.json'));

async function build() {
  const reactEntrypoint = {
    filepath: path.resolve(__dirname, '..', 'src', 'index.ts'),
    rootDir: 'src',
    outputDirectory: path.resolve(__dirname, '..'),
  };
  const formats = [
    {
      type: 'esm',
      directory: 'es',
    },
    {
      type: 'commonjs',
      directory: 'lib',
    },
  ];

  // Build @carbon/react formats
  for (const format of formats) {
    const outputDirectory = path.join(
      reactEntrypoint.outputDirectory,
      format.directory
    );

    const reactInputConfig = getRollupConfig(
      reactEntrypoint.filepath,
      reactEntrypoint.rootDir,
      outputDirectory
    );
    const reactBundle = await rollup(reactInputConfig);

    await reactBundle.write({
      dir: outputDirectory,
      format: format.type,
      preserveModules: true,
      preserveModulesRoot: path.dirname(reactEntrypoint.filepath),
      banner,
      exports: 'named',
    });
  }
}

const banner = `/**
 * Copyright IBM Corp. 2020, ${new Date().getFullYear()}
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

// Base babel config for js and ts
const babelConfig = {
  babelrc: false,
  exclude: ['/node_modules/'],
  ignore: ['/node_modules/'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['extends browserslist-config-carbon'],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'dev-expression',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-react-constant-elements',
  ],
  babelHelpers: 'bundled',
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
};

function getTsCompilerOptions() {
  const baseOpts = loadBaseTsCompilerOpts();
  const projectTsConfigPath = path.resolve('./tsconfig.json');
  const overrideOpts = loadTsCompilerOpts(projectTsConfigPath);
  return { ...baseOpts, ...overrideOpts };
}

function getRollupConfig(input, rootDir, outDir) {
  return {
    input,
    // Mark dependencies listed in `package.json` as external so that they are
    // not included in the output bundle.
    external: [
      ...Object.keys(packageJson.peerDependencies),
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
      nodeResolve(),
      commonjs({
        include: /node_modules/,
      }),
      typescript({
        noEmitOnError: true,
        noForceEmit: true,
        outputToFilesystem: false,
        compilerOptions: {
          ...getTsCompilerOptions(),
          rootDir,
          outDir,
        },
      }),
      babel(babelConfig),
      stripBanner(),
      {
        transform(_code, id) {
          // Make sure to mark feature-flags.js as having side-effects to make
          // sure it gets included in the final bundle
          if (id === path.join(__dirname, '..', 'src', 'feature-flags.js')) {
            return {
              moduleSideEffects: true,
            };
          }
        },
      },
    ],
  };
}

build().catch((error) => {
  console.log(error);
  process.exit(1);
});
