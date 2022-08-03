/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import React from 'react';

import packageInfo from '../../cloud-cognitive/package.json';

const { description } = packageInfo;

addons.setConfig({
  theme: create({
    brandTitle: `${description} (v11 preview)`,
  }),

  sidebar: {
    renderLabel: (item) => {
      const parts = item.name.split('#');
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      switch (parts[1]) {
        // if the name has #canary then render a 'Canary' tag on the right
        case 'canary':
          return (
            <div
              style={{
                flex: '1 0 auto',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
              }}
            >
              {parts[0]}
              <div
                style={{
                  background: dark ? '#555555' : '#e0e0e0',
                  /* stylelint-disable-next-line carbon/type-token-use */
                  fontSize: '11px',
                  border: '.1px solid transparent',
                  /* stylelint-disable-next-line carbon/layout-token-use */
                  padding: '0 .5rem',
                  /* stylelint-disable-next-line carbon/layout-token-use */
                  margin: '0 .5em',
                  borderRadius: '8px',
                }}
              >
                Canary
              </div>
            </div>
          );

        // if the name has #legacy then render a 'Legacy' tag on the right
        case 'legacy':
          return (
            <div
              style={{
                flex: '1 0 auto',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
              }}
            >
              {parts[0]}
              <div
                style={{
                  background: dark ? '#3a3a3a' : '#eeeeee',
                  /* stylelint-disable-next-line carbon/type-token-use */
                  fontSize: '11px',
                  border: '.1px solid transparent',
                  /* stylelint-disable-next-line carbon/layout-token-use */
                  padding: '0 .5rem',
                  /* stylelint-disable-next-line carbon/layout-token-use */
                  margin: '0 .5em',
                  borderRadius: '8px',
                }}
              >
                Legacy
              </div>
            </div>
          );

        // if the name doesn't have a recognized # label, just render the name
        default:
          return parts[0];
      }
    },
  },
});
