/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Example } from '.';

const componentName = Example.displayName;

describe(componentName, () => {
  it('renders', async () => {
    render(<Example />);
  });
});
