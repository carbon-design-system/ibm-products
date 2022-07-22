/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { AddSelectBody } from './AddSelectBody';
import { pkg } from '../../settings';
import { getGlobalFilterValues, normalize } from './add-select-utils';
import { Document16 } from '@carbon/icons-react';
import image from '../UserProfileImage/headshot.png'; // cspell:disable-line

const blockClass = `${pkg.prefix}--add-select`;
const componentName = AddSelectBody.name;
const defaultItems = {
  entries: [
    {
      id: '1',
      title: 'Kansas',
      value: 'kansas',
      tag: 'default',
      subtitle: 'test subtitle',
    },
    {
      id: '2',
      title: 'Texas',
      value: 'texas',
      tag: 'optional',
    },
    {
      id: '3',
      title: 'Florida',
      value: 'florida',
      tag: 'optional',
    },
  ],
};

const globalFilters = [
  {
    id: 'tag',
    label: 'Tag',
  },
];

const singleProps = {
  className: 'placeholder-class',
  description: 'select a category lorem ipsum',
  globalSearchLabel: 'test input title',
  globalSearchPlaceholder: 'Find categories',
  items: defaultItems,
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

const hierarchyItems = {
  entries: [
    ...defaultItems.entries,
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
};

const singleHierarchyProps = {
  ...singleProps,
  useNormalizedItems: true,
  items: hierarchyItems,
  normalizedItems: normalize(hierarchyItems),
};

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
);

const multiProps = {
  multi: true,
  className: 'placeholder-class',
  clearFiltersText: 'Clear filters',
  closeIconDescription: 'Close',
  columnInputPlaceholder: 'Find',
  description: 'Select business terms from the list',
  defaultModifiers: [],
  globalSearchLabel: 'test input label',
  globalSearchPlaceholder: 'Find business terms',
  influencerTitle: 'Selected business terms',
  items: defaultItems,
  itemsLabel: 'Business terms',
  metaIconDescription: 'View meta information',
  metaPanelTitle: 'Personal information',
  navIconDescription: 'View children',
  noResultsTitle: 'No results',
  noSelectionDescription:
    'Select a term to include the full set of the governance artifacts it contains in the governance scope.',
  noSelectionTitle: 'No business terms selected',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmit: (selections) => console.log(selections),
  onSubmitButtonText: 'Add',
  searchResultsLabel: 'Search results',
  title: 'Add business terms',
};

const propsWithModifiers = {
  defaultModifiers: [
    {
      id: '1',
      role: 'editor',
    },
    {
      id: '2',
      role: 'editor',
    },
    {
      id: '3',
      role: 'admin',
    },
  ],
  items: {
    entries: [...defaultItems.entries],
    modifiers: {
      id: 'role',
      label: 'Role',
      options: ['editor', 'admin'],
    },
  },
};

const itemsWithMeta = {
  entries: [
    {
      id: '1',
      value: 'kansas',
      title: 'Kansas',
      meta: [
        {
          id: 'description',
          title: 'description',
          value: 'description text',
        },
        {
          id: 'secondary_category',
          title: 'secondary category',
          value: 'knowledge accelerator',
        },
      ],
    },
  ],
};

const itemWithIcon = {
  entries: [
    {
      id: '1',
      value: 'kansas',
      title: 'Kansas',
      icon: Document16,
    },
  ],
};

const itemWithAvatar = {
  entries: [
    {
      id: '1',
      value: 'kansas',
      title: 'Kansas',
      avatar: {
        src: image,
        alt: 'head shot',
      },
    },
  ],
};

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

  it('renders SingleAddSelectBody', () => {
    const { container } = render(<AddSelectBody {...singleHierarchyProps} />);
    expect(container.querySelector(`.${blockClass}__single`)).toBeVisible();
  });

  it('returns the selected values on submit', () => {
    const onSubmit = jest.fn();
    const newProps = {
      ...singleProps,
      onSubmit,
    };
    render(<AddSelectBody {...newProps} />);
    const submitBtn = screen.getByText('submit selections');
    const radio = screen.getByLabelText('Kansas');
    fireEvent.click(radio);
    fireEvent.click(submitBtn);
    expect(onSubmit).toBeCalledWith('1');
  });

  it('filters the items', () => {
    render(<AddSelectBody {...singleHierarchyProps} />);
    const input = screen.getByPlaceholderText('Find categories');
    expect(screen.getByText('Categories'));
    expect(screen.getByText('Florida'));
    expect(screen.getByText('Kansas'));
    fireEvent.change(input, { target: { value: 'florida' } });
    expect(screen.getByText('Search results'));
    expect(screen.getByText('Florida'));
    expect(screen.queryByText('Kansas')).toBeNull();
  });

  it('displays no results', () => {
    render(<AddSelectBody {...singleProps} />);
    const input = screen.getByPlaceholderText('Find categories');
    fireEvent.change(input, { target: { value: 'aaa' } });
    expect(screen.getByText(singleProps.noResultsTitle));
  });

  it('displays child items', () => {
    render(<AddSelectBody {...singleHierarchyProps} />);
    const childrenButton = document.querySelector(
      `.${blockClass}__selections-view-children`
    );
    expect(screen.queryByText('Los Angeles')).toBeNull();
    fireEvent.click(childrenButton);
    expect(screen.queryByText('Los Angeles'));
  });

  it('displays breadcrumbs', () => {
    render(<AddSelectBody {...singleHierarchyProps} />);
    const childrenButton = document.querySelector(
      `.${blockClass}__selections-view-children`
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

  it('handles multi select submit', () => {
    const onSubmit = jest.fn();
    const newProps = {
      ...multiProps,
      onSubmit,
    };
    render(<AddSelectBody {...newProps} />);
    const submitBtn = screen.getByText('Add');
    const opt1 = screen.getByLabelText('Kansas');
    const opt2 = screen.getByLabelText('Texas');
    fireEvent.click(opt1);
    fireEvent.click(opt2);
    fireEvent.click(submitBtn);
    expect(onSubmit).toBeCalledWith(['1', '2']);
  });

  it('handles multi select submit with modifiers', () => {
    const onSubmit = jest.fn();
    const newProps = {
      ...multiProps,
      ...propsWithModifiers,
      onSubmit,
    };
    render(<AddSelectBody {...newProps} />);
    const submitBtn = screen.getByText('Add');
    const opt1 = screen.getByLabelText('Kansas');
    const opt2 = screen.getByLabelText('Texas');
    const opt3 = screen.getByLabelText('Florida');
    fireEvent.click(opt1);
    const dropdown = document.querySelector('#add-select-modifier-1 button');
    fireEvent.click(dropdown);
    const modifierOpts = document.querySelectorAll(
      '#add-select-modifier-1 .bx--list-box__menu-item'
    );
    fireEvent.click(modifierOpts[1]);
    fireEvent.click(opt2);
    fireEvent.click(opt3);
    fireEvent.click(opt3);
    fireEvent.click(submitBtn);
    expect(onSubmit).toBeCalledWith([
      {
        id: '1',
        role: 'admin',
      },
      {
        id: '2',
        role: 'editor',
      },
    ]);
  });

  it('handles items with meta data', () => {
    const newProps = {
      ...multiProps,
      items: itemsWithMeta,
    };
    render(<AddSelectBody {...newProps} />);
    const metaBtn = screen.getByText(newProps.metaIconDescription);
    expect(metaBtn);
    fireEvent.click(metaBtn);
    expect(screen.getByText(newProps.metaPanelTitle));
  });

  it('handles items with icons', () => {
    const newProps = {
      ...multiProps,
      items: itemWithIcon,
    };
    render(<AddSelectBody {...newProps} />);
    expect(document.querySelector(`${blockClass}__selections-cell-icon`));
  });

  it('handles items with avatar', () => {
    const newProps = {
      ...multiProps,
      items: itemWithAvatar,
    };
    render(<AddSelectBody {...newProps} />);
    expect(document.querySelector(`${blockClass}-cell-avatar`));
  });

  it('filters with global filters', () => {
    const normalizedItems = normalize(hierarchyItems);
    const newProps = {
      ...multiProps,
      items: hierarchyItems,
      useNormalizedItems: true,
      normalizedItems,
      globalFiltersIconDescription: 'Filter',
      globalFiltersPlaceholderText: 'Choose an option',
      globalFiltersPrimaryButtonText: 'Apply',
      globalFiltersSecondaryButtonText: 'Reset',
      globalFilterOpts: getGlobalFilterValues(globalFilters, normalizedItems),
    };
    render(<AddSelectBody {...newProps} />);
    fireEvent.click(screen.getByLabelText('Filter'));
    fireEvent.click(screen.getByTitle('Choose an option'));
    fireEvent.click(screen.getByText('default'));
    fireEvent.click(screen.getByText('Apply'));
    expect(screen.getByText('tag: default'));
    // test clear filters
    const clearFiltersBtn = screen.getByText('Clear filters');
    fireEvent.click(clearFiltersBtn);
    expect(screen.queryByText('tag: default')).toBeNull();
    // test clear tag
    fireEvent.click(screen.getByLabelText('Filter'));
    fireEvent.click(screen.getByTitle('Choose an option'));
    fireEvent.click(screen.getByText('default'));
    fireEvent.click(screen.getByText('Apply'));
    expect(screen.getByText('tag: default'));
    const closeIcon = document.querySelector('.bx--tag button');
    fireEvent.click(closeIcon);
    expect(screen.queryByText('tag: default')).toBeNull();
  });

  it('filters columns', () => {
    const normalizedItems = normalize(hierarchyItems);
    const newProps = {
      ...multiProps,
      items: hierarchyItems,
      useNormalizedItems: true,
      normalizedItems,
    };
    render(<AddSelectBody {...newProps} />);
    const input = screen.getByPlaceholderText('Find');
    fireEvent.change(input, { target: { value: 'florida' } });
    expect(screen.findByText('florida'));
    fireEvent.change(input, { target: { value: '' } });
    const selectAll = document.querySelector(
      '.c4p--add-select__column__select-all'
    );
    fireEvent.click(selectAll);
    expect(
      document.querySelectorAll('.c4p--add-select__sidebar-accordion-title')
        .length
    ).toBe(4);
    fireEvent.click(selectAll);
    expect(
      document.querySelectorAll('.c4p--add-select__sidebar-accordion-title')
        .length
    ).toBe(0);
    fireEvent.click(
      document.querySelector(`.c4p--add-select__selections-view-children`)
    );
    expect(screen.findByText('Los Angeles'));
    const globalSearch = screen.getByPlaceholderText('Find business terms');
    fireEvent.change(globalSearch, { target: { value: 'florida' } });
    fireEvent.change(globalSearch, { target: { value: '' } });
  });
});
