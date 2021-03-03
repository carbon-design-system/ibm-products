/**
 * Copyright IBM Corp. FULL_YEAR, FULL_YEAR
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { DISPLAY_NAME } from '.';

import { pkg } from '../../global/js/settings';

const canaryClass = `${pkg.prefix}-canary`;

describe(name, () => {
  let DISPLAY_NAME;
  beforeAll(async () => {
    // must happen before component import
    pkg.overrideSettings({ flags: { component: { DISPLAY_NAME: false } } });
    // ensure import after settings change
    const { DISPLAY_NAME: LateLoadedComponent } = await import('.');
    DISPLAY_NAME = LateLoadedComponent;
  });

  test('Renders a canary if no package flags set', () => {
    pkg.overrideSettings({}, true);
    const { container } = render(<DISPLAY_NAME />);

    expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
  });
});
