import { mergeConfig } from 'vite';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import sass from 'sass';
import viteSVGResultCarbonIconLoader from '../tools/vite-svg-result-carbon-icon-loader';

const config = {
  stories: [
    '../src/**/__stories__/*.mdx',
    '../src/**/__stories__/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            implementation: sass,
          },
        },
      },
      plugins: [
        postcss(),
        postcssLit({
          // include: [
          //   './node_modules',
          //   '../../node_modules',
          //   '../src/**/*.scss',
          //   '../src/**/*.scss?*',
          // ],
          include: [
            '**/*.{css,sss,pcss,styl,stylus,sass,scss,less}',
            '**/*.{css,sss,pcss,styl,stylus,sass,scss,less}?*'
          ],
        }),
        // viteSVGResultCarbonIconLoader(),
      ],
    });
  },
};
export default config;