/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { CreateTearsheetNarrow } from '.';

const blockClass = `${pkg.prefix}--create-tearsheet-narrow`;
const componentName = CreateTearsheetNarrow.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const dataTestId = uuidv4();

const defaultProps = {
  title: 'Create partition',
  className: 'test-class-name',
  description: 'Select the number of partitions you want to create',
  formTitle: 'Core configuration',
  formDescription:
    'We recommend you fill out and evaluate these details at a minimum before deploying your topic.',
  primaryButtonText: 'Create action',
  secondaryButtonText: 'Cancel',
  label: 'Test label',
};

// render an ExampleComponent with button labels and any other required props
const renderComponent = ({ ...rest }) =>
  render(
    <CreateTearsheetNarrow {...defaultProps} {...rest}>
      {children}
    </CreateTearsheetNarrow>
  );

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('renders a component CreateTearsheetNarrow', () => {
    renderComponent();
    expect(screen.getByText(/Create action/)).toBeVisible();
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    renderComponent();
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    const { container } = renderComponent();
    const outerElement = container.querySelector(`.${blockClass}`);
    expect(outerElement).toHaveClass(defaultProps.className);
  });

  it('adds additional props to the containing node', () => {
    renderComponent({ 'data-test-id': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).not.toBeNull();
  });
});
