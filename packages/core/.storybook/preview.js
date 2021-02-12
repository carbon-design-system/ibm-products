/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { withInfo } from '@storybook/addon-info';
import React, { useEffect } from 'react';
import { withCarbonTheme } from '@carbon/storybook-addon-theme/react';

import index from './index.scss';

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

const parameters = {
  controls: { expanded: true, hideNoControlsWarning: true },
  layout: 'centered',
  options: {
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        return 0;
      } else {
        if (
          a[1].kind.startsWith('Cloud & Cognitive/Released/') &&
          b[1].kind.startsWith('Cloud & Cognitive/Canary/')
        )
          return -1;
        if (
          b[1].kind.startsWith('Cloud & Cognitive/Released/') &&
          a[1].kind.startsWith('Cloud & Cognitive/Canary/')
        )
          return 1;
        console.log(a[1].kind, b[1].kind);
        return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      }
    },
  },

  // Optional default Carbon theme.
  carbonTheme: {
    theme: 'g10',
  },
};

export { decorators, parameters };
