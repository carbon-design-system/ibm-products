/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  }, 80000);

  it('calls onSubmit() when primary button is clicked', () => {
    const { fn } = jest;
    const { click } = fireEvent;
    const onSubmit = fn();
    renderComponent({ primaryButtonText: 'Create', onSubmit: onSubmit });
    const submitButton = screen.getByRole('button', { name: 'Create' });
    click(submitButton);
    expect(onSubmit).toBeCalled();
  });

  it('calls onClose() when secondary button is clicked', () => {
    const { fn } = jest;
    const { click } = fireEvent;
    const onClose = fn();
    renderComponent({ secondaryButtonText: 'Cancel', onClose: onClose });
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    click(cancelButton);
    expect(onClose).toBeCalled();
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
