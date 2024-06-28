/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { white, g10, g90, g100 } from '@carbon/themes';
import '../../ibm-products/src/feature-flags';

import { pkg } from '../../ibm-products/src/settings';

import index from './index.scss?inline';
import { StoryDocsPage } from '../../ibm-products/src/global/js/utils/StoryDocsPage';

// Enable all components, whether released or not, for storybook purposes
pkg._silenceWarnings(true);
pkg.setAllComponents(true);

const Style = ({ children, styles }) => (
  <>
    <style>{styles}</style>
    {children}
  </>
);

const isDev = CONFIG_TYPE === 'DEVELOPMENT';
if (isDev) {
  // use a prefix in all development storybook
  if (!pkg.originalPrefix) {
    pkg.originalPrefix = pkg.prefix;
  }
  if (pkg.prefix !== `dev-prefix--${pkg.originalPrefix}`) {
    pkg.prefix = `dev-prefix--${pkg.prefix}`;
  }
}

const decorators = [
  (storyFn, context) => {
    const {
      args,
      globals,
      parameters: { styles },
    } = context;
    const { theme } = globals;
    const story = storyFn();
    JSON.stringify(args.featureFlags);

    useEffect(() => {
      document.documentElement.setAttribute('data-carbon-theme', theme);
    }, [theme]);

    return (
      <div className="preview-position-fix story-wrapper">
        <Style styles={index}>
          {styles ? <Style styles={styles}>{story}</Style> : story}
        </Style>
      </div>
    );
  },
];

const makeViewport = (name, width, shadow) => ({
  name,
  styles: {
    border: '1px solid #1EA7FD',
    boxShadow: `0 0 50px 20px rgb(30 167 253 / ${shadow}%)`,
    width,
    // when width is fixed, leave room for a horizontal scroll bar
    height: width === '100%' ? '100%' : 'calc(100% - 12px)',
  },
});
const carbonViewports = {
  basic: makeViewport('Select a Carbon breakpoint', '100%', 0),
  smMin: makeViewport('sm (≥320px)', '320px', 25),
  smMid: makeViewport('sm — mid range', '496px', 25),
  smMax: makeViewport('sm — top of range', '671px', 25),
  mdMin: makeViewport('md (≥672px)', '672px', 20),
  mdMid: makeViewport('md — mid range', '864px', 20),
  mdMax: makeViewport('md — top of range', '1055px', 20),
  lgMin: makeViewport('lg (≥1056px)', '1056px', 15),
  lgMid: makeViewport('lg — mid range', '1184px', 15),
  lgMax: makeViewport('lg — top of range', '1311px', 15),
  xlgMin: makeViewport('xlg (≥1312px)', '1312px', 10),
  xlgMid: makeViewport('xlg — mid range', '1448px', 10),
  xlgMax: makeViewport('xlg — top of range', '1583px', 10),
  maxMin: makeViewport('max (≥1584px)', '1584px', 5),
  maxMid: makeViewport('max — mid range', '2000px', 5),
};

const parameters = {
  backgrounds: {
    // https://storybook.js.org/docs/react/essentials/backgrounds#grid
    grid: {
      cellSize: 8,
      opacity: 0.5,
    },
    values: [
      {
        name: 'white',
        value: white.background,
      },
      {
        name: 'g10',
        value: g10.background,
      },
      {
        name: 'g90',
        value: g90.background,
      },
      {
        name: 'g100',
        value: g100.background,
      },
    ],
  },
  controls: { expanded: true, hideNoControlsWarning: true },
  layout: 'centered',
  options: {
    showPanel: true,
    storySort: {
      method: 'alphabetical',
      order: [
        'Overview',
        ['Welcome', 'Getting started', 'Examples', '*'],
        'IBM Products',
        ['Components', 'Patterns', 'Internal', 'Onboarding'],
        'Community',
      ],
    },
  },

  // viewport sizes based on Carbon breakpoints
  viewport: {
    viewports: carbonViewports,
    defaultViewport: 'basic',
  },
  docs: {
    page: () => <StoryDocsPage />,
  },
};

const argTypes = {
  featureFlags: {
    table: {
      disable: true,
    },
  },
};

const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Set the global theme for displaying components',
    defaultValue: 'g10',
    toolbar: {
      icon: 'paintbrush',
      items: ['white', 'g10', 'g90', 'g100'],
    },
  },
};

export default { argTypes, decorators, parameters, globalTypes };
