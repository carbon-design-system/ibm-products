//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { render } from '@testing-library/react';
import React from 'react';
import { SingleAddSelect } from './SingleAddSelect';

const componentName = SingleAddSelect.name;
const defaultProps = {
  globalSearchLabel: 'test input label',
  noSelectionTitle: 'No selection title',
  noSelectionDescription: 'No selection description',
  noResultsTitle: 'No results title',
  noResultsDescription: 'Try again description',
  open: true,
};

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('renders', async () => {
    render(<SingleAddSelect {...defaultProps} />);
  });
});
