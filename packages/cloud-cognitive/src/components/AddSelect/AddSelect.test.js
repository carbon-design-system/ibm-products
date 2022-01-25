/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AddSelect } from './AddSelect';
import { carbon } from '../../settings';

const componentName = AddSelect.name;
const defaultProps = {
  items: [
    {
      label: 'item a',
      id: 1,
    },
    {
      label: 'item b',
      id: 2,
    },
    {
      label: 'item c',
      id: 3,
    },
  ],
  noSelectionTitle: 'No selection title',
  noSelectionDescription: 'No selection description',
  noResultsTitle: 'No results title',
  noResultsDescription: 'Try again description',
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

  it('renders', () => {
    render(<AddSelect {...defaultProps} />);
  });

  it('filters the items', () => {
    const { change } = fireEvent;
    const { container } = render(<AddSelect {...defaultProps} />);
    change(container.querySelector(`.${carbon.prefix}--text-input`), {
      target: { value: 'item a' },
    });
    expect(screen.queryByText('item a')).toBeVisible();
    expect(screen.queryByText('item b')).toBeNull();
    expect(screen.queryByText('item c')).toBeNull();
  });

  it('uses a custom filter', () => {
    const { fn } = jest;
    const { change } = fireEvent;
    const onSearchFilter = fn();
    const props = {
      ...defaultProps,
      onSearchFilter,
    };
    const { container } = render(<AddSelect {...props} />);
    change(container.querySelector(`.${carbon.prefix}--text-input`), {
      target: { value: 'value' },
    });
    expect(onSearchFilter).toHaveBeenCalled();
  });
});
