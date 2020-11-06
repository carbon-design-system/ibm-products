/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Toolbar } from '.';

const { name } = Toolbar;

describe(name, () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(<Toolbar />);

    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });
});
