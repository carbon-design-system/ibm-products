/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from 'carbon-components-react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

const blockClass = `${pkg.prefix}--create-modal`;

import { CreateModal } from '.';
const componentName = CreateModal.displayName;

const className = `class-${uuidv4()}`;
const title = 'This is a test title';
const subtitle = 'This is a test subtitle';
const description =
  'This is a test description. It has several lines. It should render a modal.';
const primaryFocus = '.bx--text-input';
const dataTestId = uuidv4();

// render a CreateModal with title, subtitle, description, and any other required props
const renderComponent = ({ ...rest }) =>
  render(
    <CreateModal
      open
      {...{
        title,
        subtitle,
        description,
        primaryFocus,
        disableSubmit: false,
        ...rest,
      }}>
      <TextInput
        key="form-field-1"
        id="1"
        labelText="Text input label"
        helperText="Helper text goes here"
        placeholder="Placeholder"
      />
    </CreateModal>
  );

describe(componentName, () => {
  it('renders a component CreateModal', () => {
    renderComponent();
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('renders description', () => {
    renderComponent();
    expect(screen.getByText(description)).toBeTruthy();
  });

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText(subtitle)).toBeTruthy();
  });

  it('applies className to the root node', () => {
    renderComponent({ className });
    expect(screen.getByRole('presentation')).toHaveClass(className);
  });

  it('is visible when open is true', () => {
    renderComponent({ open: true });
    expect(screen.getByRole('presentation')).toHaveClass('is-visible');
  });

  it('is not visible when open is not true', () => {
    renderComponent({ open: false });
    expect(screen.getByRole('presentation')).not.toHaveClass('is-visible');
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current.outerModal.current).toHaveClass(blockClass);
  });

  it('adds additional properties to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName, 'scan_label');
    await expect(container).toHaveNoAxeViolations();
  }, 80000);

  it('calls onSubmit() when primary button is clicked', () => {
    const primaryHandler = jest.fn();
    renderComponent({ primaryButtonText: 'Create', onSubmit: primaryHandler });
    userEvent.click(screen.getByRole('button', { name: 'Create' }));
    expect(primaryHandler).toBeCalledTimes(1);
  });

  it('calls onClose() when secondary button is clicked', () => {
    const secondaryHandler = jest.fn();
    renderComponent({
      secondaryButtonText: 'Cancel',
      onClose: secondaryHandler,
    });
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(secondaryHandler).toBeCalledTimes(1);
  });

  it('notifies a click on each button', () => {
    const primaryHandler = jest.fn();
    const secondaryHandler = jest.fn();
    renderComponent({
      onSubmit: primaryHandler,
      onClose: secondaryHandler,
    });
    screen.getAllByRole('button').forEach(userEvent.click);
    expect(primaryHandler).toBeCalledTimes(1);
    expect(secondaryHandler).toBeCalledTimes(1);
  });

  it('disables primary focus button when `disableSubmit` prop is provided', () => {
    renderComponent({ disableSubmit: true, primaryButtonText: 'Create' });
    const submitButton = screen.getByRole('button', { name: 'Create' });
    const isDisabled = submitButton.className.includes('disabled');
    expect(isDisabled).toBeTruthy();
  });

  it('applies focus to selected element', () => {
    const { container } = renderComponent({ primaryFocus });
    const firstInput = container.querySelector(primaryFocus);
    expect(firstInput === document.activeElement).toBeTruthy();
  });
});
