/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { AddSelectBreadcrumbs } from './AddSelectBreadcrumbs';

const componentName = AddSelectBreadcrumbs.name;
const defaultProps = {
  path: [
    {
      id: 'default',
      title: 'default',
    },
  ],
  onClick: () => {},
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
    render(<AddSelectBreadcrumbs {...defaultProps} />);
  });

  it('handles click', () => {
    const onClick = jest.fn();
    const newProps = {
      ...defaultProps,
      onClick,
    };
    render(<AddSelectBreadcrumbs {...newProps} />);
    fireEvent.click(screen.queryByText('default'));
    expect(onClick).toBeCalled();
  });

  it('displays multiple breadcrumbs', () => {
    const newProps = {
      ...defaultProps,
      path: [
        {
          id: 'default',
          title: 'default',
        },
        {
          id: 'level2',
          title: 'level 2',
        },
      ],
    };
    render(<AddSelectBreadcrumbs {...newProps} />);
    expect(screen.getByText('default'));
    expect(screen.getByText('level 2'));
    expect(document.querySelectorAll('.bx--breadcrumb-item').length).toEqual(2);
    expect(
      document.querySelectorAll('.bx--breadcrumb-item--current').length
    ).toEqual(1);
  });
});
