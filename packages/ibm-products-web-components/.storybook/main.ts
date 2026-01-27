/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { mergeConfig } from 'vite';
import { dirname, join } from 'node:path';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';
import remarkGfm from 'remark-gfm';
import glob from 'fast-glob';
import { getAutoTrack } from '../../../scripts/get-auto-track-script';

const stories = glob.sync(
  [
    './welcome/**/*.stories.*',
    '../docs/**/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  {
    ignore: ['../src/**/docs/*.mdx'],
    cwd: __dirname,
  }
);
const config = {
  stories: stories,
  addons: [
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  features: {
    previewCsfV3: true,
    buildStoriesJson: true,
    interactions: false, // disable Interactions tab
  },
  managerHead: (head: string) => {
    return `
      ${head}
      ${
        process.env.NODE_ENV !== 'development'
          ? getAutoTrack('ibm-products-web-components-storybook')
          : ''
      }
    `;
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [litStyleLoader(), litTemplateLoader()],
      optimizeDeps: {
        include: ['@storybook/web-components-vite'],
        exclude: ['lit', 'lit-html'],
      },
      css: {
        transformer: 'lightningcss', // Use Lightning CSS for transformations
        lightningcss: {
          // Allows for build to still pass even if lightning css finds invalid syntax
          // Doesn't seem to parse ::slotted() pseudo selector usage well
          errorRecovery: true,
        },
      },
    });
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
