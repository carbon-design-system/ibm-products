import { mergeConfig } from 'vite';
import { dirname, join } from 'node:path';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';
import remarkGfm from 'remark-gfm';
import glob from 'fast-glob';
import { getAutoTrack } from '../../../scripts/get-auto-track-script';

const stories = glob.sync(
  [
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
        // TODO: Delete this and uncomment dev check below when finished testing locally
        getAutoTrack('ibm-products-web-components-storybook')
        // process.env.NODE_ENV !== 'development'
        //   ? getAutoTrack('ibm-products-web-components-storybook')
        //   : ''
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
    });
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
