/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineConfig, type UserConfig } from 'tsdown';

const banner = `/**
 * Copyright IBM Corp. 2020, ${new Date().getFullYear()}
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

const sharedConfig: UserConfig = {
  entry: ['./src/index.ts'],
  banner: () => ({
    js: banner,
    dts: banner,
  }),
  platform: 'neutral',
  dts: true,
  unbundle: true,
  external: ['@carbon/icons-react', '@carbon/colors', '@floating-ui/react'],
};

export default defineConfig([
  {
    ...sharedConfig,
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
