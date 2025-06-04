/**
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { dirname, join, resolve } from 'path';
import remarkGfm from 'remark-gfm';

const stories = [
  '../src/**/!(*.internal).stories.*',
  '../../core/src/**/!(*.internal).stories.*',
  '../../../examples/carbon-for-ibm-products/example-gallery/src/example-gallery.stories.js',
];

export default {
  staticDirs: ['../public'],

  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath('@storybook/addon-viewport'),
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: true,
        toolbars: true,
        viewport: true,
      },
    },
    // https://www.npmjs.com/package/storybook-addon-accessibility-checker
    getAbsolutePath('@storybook/addon-a11y'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
  },

  stories,

  typescript: {
    reactDocgen: 'react-docgen', // Favor docgen from prop-types instead of TS interfaces
  },

  managerHead: (head) => {
    return `
      ${head}
      ${
        process.env.NODE_ENV !== 'development'
          ? `
          <script src="https://cdn.amplitude.com/script/f6f1d9025934f04f5a2a8bebb74abf2f.js"></script>
          <script>
            window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
            window.amplitude.init('f6f1d9025934f04f5a2a8bebb74abf2f', {
              "fetchRemoteConfig":true,
              "autocapture":true
            });
          </script>`
          : ''
      }
    `;
  },

  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      esbuild: {
        include: /\.[jt]sx?$/,
        exclude: [],
        loader: 'tsx',
      },
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
      },
      resolve: {
        alias: {
          ALIAS_STORY_STYLE_CONFIG: resolve(
            configType === 'DEVELOPMENT'
              ? '../ibm-products-styles/src/config-dev.scss'
              : '../ibm-products-styles/src/config.scss'
          ),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern',
            quietDeps: true,
            silenceDeprecations: [
              'mixed-decls',
              'global-builtin',
              'legacy-js-api',
            ],
          },
        },
      },
    });
  },

  docs: {
    autodocs: 'tag',
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
