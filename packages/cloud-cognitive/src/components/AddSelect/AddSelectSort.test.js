//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { AddSelectSort } from './AddSelectSort';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--add-select-sort`;
const componentName = AddSelectSort.name;

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
    render(<AddSelectSort sortByLabel="test sort title" />);
  });

  it('renders with options', () => {
    const props = {
      sortBy: ['title'],
      sortByLabel: 'test sort title',
    };
    render(<AddSelectSort {...props} />);
  });

  it('sorts on click', () => {
    const attributeHandler = jest.fn();
    const directionHandler = jest.fn();
    const props = {
      setSortAttribute: attributeHandler,
      setSortDirection: directionHandler,
      sortBy: ['title'],
      sortByLabel: 'test sort title',
    };
    render(<AddSelectSort {...props} />);
    const menu = document.querySelector(`.${blockClass}_overflow`);
    fireEvent.click(menu);
    const menuItem = document.querySelector(`.${blockClass}_overflow-item`);
    fireEvent.click(menuItem);
    expect(attributeHandler).toHaveBeenCalled();
    expect(directionHandler).toHaveBeenCalled();
  });
});
