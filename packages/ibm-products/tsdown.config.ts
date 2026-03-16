/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig, type UserConfig } from 'tsdown';
import packageJson from './package.json' with { type: 'json' };

const banner = `/**
 * Copyright IBM Corp. 2020, ${new Date().getFullYear()}
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

// Generate external patterns for all peer dependencies and dependencies
function getExternalPatterns() {
  const deps = [
    ...Object.keys(packageJson.peerDependencies || {}),
    ...Object.keys(packageJson.dependencies || {}),
  ];

  return deps.map((name) => {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${escapedName}(/.*)?`);
  });
}

const sharedConfig: UserConfig = {
  entry: ['./src/index.ts'],
  banner: () => ({
    js: banner,
  }),
  platform: 'browser',
  dts: false,
  unbundle: true,
  external: getExternalPatterns(),
  failOnWarn: false,
  logLevel: 'warn',
  loader: {
    '.js': 'jsx',
  },
  target: 'es2020',
};

export default defineConfig([
  {
    ...sharedConfig,
    format: 'esm',
    outDir: 'es',
    outExtensions: () => ({ js: '.js' }),
    onSuccess() {
      console.info('✅ esm build succeeded!');
    },
  },
  {
    ...sharedConfig,
    outDir: 'lib',
    format: 'cjs',
    onSuccess() {
      console.info('✅ cjs build succeeded!');
    },
  },
]);
