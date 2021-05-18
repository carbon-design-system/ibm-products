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
  'Legacy',
];
const toOrder = (value) => {
  const inOrder = order.findIndex((item) => value.startsWith(item));
  // length is last index + 1
  return inOrder < 0 ? order.length : inOrder;
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
};

export { decorators, parameters };
