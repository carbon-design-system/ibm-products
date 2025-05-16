import { mergeConfig } from 'vite';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';
import glob from 'fast-glob';

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
    '@storybook/addon-links',
    '@storybook/addon-toolbars',
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
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  managerHead: (head: string) => {
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
          </script>
        `
          : ''
      }
    `;
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [litStyleLoader(), litTemplateLoader()],
    });
  },
};
export default config;
