/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { CreateTearsheetNarrow } from '.';

const blockClass = `${pkg.prefix}--create-tearsheet-narrow`;
const componentName = CreateTearsheetNarrow.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const dataTestId = uuidv4();
const onRequestCloseFn = jest.fn();
const onRequestSubmitFn = jest.fn();

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
  onRequestClose: onRequestCloseFn,
  onRequestSubmit: onRequestSubmitFn,
};

const renderComponent = ({ ...rest }) =>
  render(
    <CreateTearsheetNarrow {...defaultProps} {...rest}>
      {children}
    </CreateTearsheetNarrow>
  );

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
);

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    pkg.feature['default-portal-target-body'] = false;
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  it('renders a component CreateTearsheetNarrow', () => {
    renderComponent();
    expect(screen.getByText(/Create action/)).toBeVisible();
    expect(screen.getByText(defaultProps.formDescription)).toBeVisible();
    expect(screen.getByText(defaultProps.formTitle)).toBeVisible();
    expect(screen.getByText(defaultProps.secondaryButtonText)).toBeVisible();
    expect(screen.getByText(defaultProps.primaryButtonText)).toBeVisible();
  });

  it.skip('has no accessibility violations', async () => {
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
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('should disable the primary action button', () => {
    renderComponent({
      disableSubmit: true,
    });
    expect(
      screen.getByText(defaultProps.primaryButtonText).closest('button')
    ).toBeDisabled();
  });

  it('should click on both action buttons', () => {
    const { click } = userEvent;
    renderComponent();
    click(screen.getByText(defaultProps.primaryButtonText));
    click(screen.getByText(defaultProps.secondaryButtonText));
    expect(onRequestCloseFn).toHaveBeenCalledTimes(1);
    expect(onRequestSubmitFn).toHaveBeenCalledTimes(1);
  });
});
