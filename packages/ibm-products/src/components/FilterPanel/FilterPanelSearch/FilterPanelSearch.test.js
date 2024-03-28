/**
 * Copyright IBM Corp. FULL_YEAR, FULL_YEAR
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../../settings';
import uuidv4 from '../../../global/js/utils/uuidv4';

import { FilterPanelSearch } from '.';
// import { FilterPanelAccordionItem, FilterPanelCheckbox } from '..';

const blockClass = `${pkg.prefix}--filter-panel-search`;
const componentName = FilterPanelSearch.displayName;

// values to use
const className = `class-${uuidv4()}`;
const count = 5;
const dataTestId = uuidv4();
const labelText = `hello, world (${uuidv4()})`;

const renderComponent = ({ ...rest } = {}) =>
  render(
    <FilterPanelSearch labelText={labelText} {...{ ...rest }}>
      <FilterPanelAccordionItem labelText="Accordion item">
        <FilterPanelCheckbox labelText="Checkbox" id={uuidv4()} />
      </FilterPanelAccordionItem>
    </FilterPanelSearch>
  );

describe(componentName, () => {
  const { getComputedStyle } = window;

  beforeEach(() => {
    window.getComputedStyle = jest.fn();
  });

  afterEach(() => {
    window.getComputedStyle = getComputedStyle;
  });

  it('renders a component FilterPanelSearch', async () => {
    const { container } = renderComponent();
    const component = container.querySelector(`.${blockClass}`);
    expect(component).toBeInTheDocument();
  });

  it('renders a count', async () => {
    renderComponent({ count });
    expect(
      screen.getByText(/5/, {
        selector: `.${blockClass} .c4p--filter-panel-group__title .c4p--filter-panel-label__count`,
      })
    );
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    const component = container.querySelector(`.${blockClass}`);
    expect(component).toBeAccessible(componentName);
    expect(component).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const { container } = renderComponent({ className });
    const component = container.querySelector(`.${blockClass}`);
    expect(component).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    renderComponent({ ['data-testid']: dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderComponent({ ['data-testid']: dataTestId });
    // NOTE
    // FilterPanelSearch returns a FilterPanelGroup with a child Accordion.
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      'FilterPanelGroup'
    );
  });
});
