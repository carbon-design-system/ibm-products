/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AddSelect } from './AddSelect';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--add-select`;
const componentName = AddSelect.name;
const singleProps = {
  className: 'placeholder-class',
  description: 'select a category lorem ipsum',
  globalSearchLabel: 'test input title',
  globalSearchPlaceholder: 'Find categories',
  items: {
    entries: [
      {
        id: '1',
        title: 'Kansas',
        value: 'kansas',
      },
      {
        id: '2',
        title: 'Texas',
        value: 'texas',
      },
      {
        id: '3',
        title: 'Florida',
        value: 'florida',
      },
    ],
  },
  itemsLabel: 'Categories',
  navIconDescription: 'View children',
  noResultsTitle: 'No results',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmit: (selection) => console.log(selection),
  onSubmitButtonText: 'submit selections',
  searchResultsLabel: 'Search results',
  title: 'Select category',
};

const singleHierarchyProps = {
  ...singleProps,
  items: {
    entries: [
      ...singleProps.items.entries,
      {
        id: '4',
        title: 'California',
        value: 'california',
        children: {
          entries: [
            {
              id: '5',
              title: 'Los Angeles',
              value: 'la',
            },
          ],
        },
      },
    ],
  },
};

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
);

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    pkg.feature['default-portal-target-body'] = false;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  it('renders SingleAddSelect', () => {
    const { container } = render(<AddSelect {...singleHierarchyProps} />);
    expect(container.querySelector(`.${blockClass}__single`)).toBeVisible();
  });

  it('returns the selected values on submit', () => {
    const onSubmit = jest.fn();
    const newProps = {
      ...singleProps,
      onSubmit,
    };
    render(<AddSelect {...newProps} />);
    const submitBtn = screen.getByText('submit selections');
    const radio = screen.getByLabelText('Kansas');
    fireEvent.click(radio);
    fireEvent.click(submitBtn);
    expect(onSubmit).toBeCalledWith('1');
  });

  it('filters the items', () => {
    render(<AddSelect {...singleHierarchyProps} />);
    const input = screen.getByPlaceholderText('Find categories');
    expect(screen.queryByText('Florida'));
    expect(screen.queryByText('Kansas'));
    fireEvent.change(input, { target: { value: 'florida' } });
    expect(screen.queryByText('Florida'));
    expect(screen.queryByText('Kansas')).toBeNull();
  });

  it('displays child items', () => {
    render(<AddSelect {...singleHierarchyProps} />);
    const childrenButton = document.querySelector(
      `.${pkg.prefix}--add-select__selections-view-children`
    );
    expect(screen.queryByText('Los Angeles')).toBeNull();
    fireEvent.click(childrenButton);
    expect(screen.queryByText('Los Angeles'));
  });

  it('displays breadcrumbs', () => {
    render(<AddSelect {...singleHierarchyProps} />);
    const childrenButton = document.querySelector(
      `.${pkg.prefix}--add-select__selections-view-children`
    );
    expect(document.querySelectorAll('.bx--breadcrumb-item').length).toEqual(1);
    expect(
      document.querySelectorAll('.bx--breadcrumb-item')[0].textContent
    ).toBe('Categories');
    fireEvent.click(childrenButton);
    expect(document.querySelectorAll('.bx--breadcrumb-item').length).toEqual(2);
    expect(
      document.querySelectorAll('.bx--breadcrumb-item')[1].textContent
    ).toBe('California');
  });

  // it('renders MultiAddSelect', () => {
  //   const { container } = render(<AddSelect {...defaultProps} multi />);
  //   expect(container.querySelector(`.${blockClass}__multi`)).toBeVisible();
  // });
});
