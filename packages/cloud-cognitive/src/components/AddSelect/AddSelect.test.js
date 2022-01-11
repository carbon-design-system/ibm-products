/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { AddSelect } from './AddSelect';

const componentName = AddSelect.name;
const defaultProps = {};

URL.createObjectURL = jest.fn(() => Promise.resolve('download-link'));

describe(componentName, () => {
  it('renders', () => {
    render(<AddSelect {...defaultProps} />);
  });
});
