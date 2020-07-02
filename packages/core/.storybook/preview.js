/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

import './index.scss';

addDecorator(withKnobs);

// https://github.com/storybookjs/storybook/issues/8128
addDecorator((...args) =>
  new URL(document.location).searchParams.get('viewMode') === 'docs'
    ? args[0]()
    : centered(...args)
);
