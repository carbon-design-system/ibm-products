/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

import packageInfo from '../../ibm-products/package.json';

const { description, version } = packageInfo;

addons.setConfig({
  theme: create({
    brandTitle: `${description} v${version}`,
  }),

  sidebar: {
    renderLabel: (item) => item.name,
  },
});
