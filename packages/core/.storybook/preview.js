/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { withInfo } from '@storybook/addon-info';
import { withCarbonTheme } from '@carbon/storybook-addon-theme/react';

import { pkg } from '../../cloud-cognitive/src/settings';

import index from './index.scss';

// Enable all components, whether released or not, for storybook purposes
pkg._silenceWarnings(true);
pkg.setAllComponents(true);

const Style = ({ children, styles }) => {
  const { unuse, use } = styles;

  useEffect(() => {
    use();

    return () => unuse();
  }, []);

  return children;
};

const decorators = [
  withInfo,
  (storyFn, { parameters: { styles } }) => {
    const story = storyFn();

    return (
      <div className="preview-position-fix">
        <Style styles={index}>
          {styles ? <Style styles={styles}>{story}</Style> : story}
        </Style>
      </div>
    );
  },
  withCarbonTheme,
];

const order = [
  'Cloud & Cognitive/Released',
  'Cloud & Cognitive/Canary',
  'Cloud & Cognitive/Internal',
  'Legacy',
];
const toOrder = (value) => {
  const inOrder = order.findIndex((item) => value.startsWith(item));
  // length is last index + 1
  return inOrder < 0 ? order.length : inOrder;
};

const carbonViewports = {
  basic: {
    name: 'Select a Carbon breakpoint',
    styles: {
      border: '1px solid #1EA7FD',
      boxShadow: '0 0 50px 20px rgb(30 167 253 / 0%)',
      width: '100%',
      height: '100%',
    },
  },
  sm: {
    name: 'Carbon small (sm) = 320px',
    styles: {
      border: '1px solid #1EA7FD',
      boxShadow: '0 0 50px 20px rgb(30 167 253 / 25%)',
      width: '320px',
      height: 'calc(100% - 12px)',
    },
  },
  md: {
    name: 'Carbon medium (md) = 672px',
    styles: {
      border: '1px solid #1EA7FD',
      boxShadow: '0 0 50px 20px rgb(30 167 253 / 20%)',
      width: '672px',
      height: 'calc(100% - 12px)',
    },
  },
  lg: {
    name: 'Carbon large (lg) = 1056px',
    styles: {
      border: '1px solid #1EA7FD',
      boxShadow: '0 0 50px 20px rgb(30 167 253 / 15%)',
      width: '1056px',
      height: 'calc(100% - 12px)',
    },
  },
  xlg: {
    name: 'Carbon extra large xlg) = 1312px',
    styles: {
      border: '1px solid #1EA7FD',
      boxShadow: '0 0 50px 20px rgb(30 167 253 / 10%)',
      width: '1312px',
      height: 'calc(100% - 12px)',
    },
  },
  max: {
    name: 'Carbon maximum (max) = 1584px',
    styles: {
      border: '1px solid #1EA7FD',
      boxShadow: '0 0 50px 20px rgb(30 167 253 / 5%)',
      width: '1584px',
      height: 'calc(100% - 12px)',
    },
  },
};

const parameters = {
  controls: { expanded: true, hideNoControlsWarning: true },
  layout: 'centered',
  options: {
    storySort: (a, b) => {
      // const storybookOrder = ['Cloud & Cognitive', ['Released', 'Canary'], 'Legacy'];
      const aInOrder = toOrder(a[1].kind);
      const bInOrder = toOrder(b[1].kind);

      if (aInOrder !== bInOrder) {
        return aInOrder - bInOrder;
      } else {
        // from storybook doc example https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
        return a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      }
    },
  },

  // Optional default Carbon theme.
  carbonTheme: {
    theme: 'g10',
  },

  // viewport sizes based on Carbon breakpoints
  viewport: {
    viewports: carbonViewports,
    defaultViewport: 'basic',
  },
};

export { decorators, parameters };
