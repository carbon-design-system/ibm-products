/**
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'path';
import remarkGfm from 'remark-gfm';
import { getAutoTrack } from '../../../scripts/get-auto-track-script';

const require = createRequire(import.meta.url);

const stories = [
  '../src/**/!(*.internal).stories.*',
  './ComponentPlayground/**/*.stories.*',
  './Welcome/**/*.stories.*',
  './PrebuiltPatterns/**/*.mdx',
  '../../../examples/carbon-for-ibm-products/example-gallery/src/example-gallery.stories.*',
];

export default {
  staticDirs: ['../public'],

  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-addon-accessibility-checker'),
    getAbsolutePath('@storybook/addon-links'),
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
  ],

  features: {
    previewCsfV3: true,
    buildStoriesJson: true,
    interactions: false, // disable Interactions tab
  },

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
          ? getAutoTrack('ibm-products-react-storybook')
          : ''
      }
    `;
  },

  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      build: {
        sourcemap: true,
        rollupOptions: {
          onLog(level, log, handler) {
            // https://github.com/vitejs/vite/issues/15012#issuecomment-1815854072
            if (log.code === 'MODULE_LEVEL_DIRECTIVE') {
              return;
            }
            handler(level, log);
          },
        },
      },
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
          '@carbon/ibm-products': resolve(
            __dirname,
            '../src/components/index.ts'
          ),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern',
            quietDeps: true,
            silenceDeprecations: ['global-builtin', 'legacy-js-api'],
          },
        },
      },
      experimental: {
        enableNativePlugin: true,
      },
    });
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'Overview',
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
