/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import uuidv4 from '../../global/js/utils/uuidv4';

import { Datagrid } from '.';
import { BasicUsage } from './Datagrid.stories';
const dataTestId = uuidv4();

const componentName = Datagrid.displayName;

describe(componentName, () => {
  it('renders a component ExampleComponent', () => {
    render(<BasicUsage data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      Datagrid.displayName
    );
  });
});
