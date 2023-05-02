/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput, usePrefix } from '@carbon/react';

import { pkg } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';

const blockClass = `${pkg.prefix}--create-modal`;

import { CreateModal } from '.';
import { expectError } from '../../global/js/utils/test-helper';
const componentName = CreateModal.displayName;

const className = `class-${uuidv4()}`;
const title = 'This is a test title';
const subtitle = 'This is a test subtitle';
const description =
  'This is a test description. It has several lines. It should render a modal.';
const dataTestId = uuidv4();

// render a CreateModal with title, subtitle, description, and any other required props
// eslint-disable-next-line react/prop-types
const RenderComponent = forwardRef(({ children, ...rest }, ref) => {
  const carbonPrefix = usePrefix();
  return (
    <CreateModal
      ref={ref}
      open
      {...{
        title,
        subtitle,
        description,
        selectorPrimaryFocus: `.${carbonPrefix}--text-input`,
        disableSubmit: false,
        primaryButtonText: 'Create',
        secondaryButtonText: 'Cancel',
        ...rest,
      }}
    >
      {children}
    </CreateModal>
  );
});

describe(componentName, () => {
  it('renders a component CreateModal', () => {
    render(<RenderComponent />);
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  it('renders title', () => {
    render(<RenderComponent />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('renders description', () => {
    render(<RenderComponent />);
    expect(screen.getByText(description)).toBeTruthy();
  });

  it('renders subtitle', () => {
    render(<RenderComponent />);
    expect(screen.getByText(subtitle)).toBeTruthy();
  });

  it('applies className to the root node', () => {
    render(<RenderComponent className={className} />);
    expect(screen.getByRole('presentation')).toHaveClass(className);
  });

  it('is visible when open is true', () => {
    render(<RenderComponent open />);
    expect(screen.getByRole('presentation')).toHaveClass('is-visible');
  });

  it('is not visible when open is not true', () => {
    const { container } = render(<RenderComponent open={false} />);
    expect(container.firstChild).not.toHaveClass('is-visible');
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<RenderComponent ref={ref} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds additional properties to the containing node', () => {
    render(<RenderComponent data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<RenderComponent data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it.skip('has no accessibility violations', async () => {
    const { container } = render(<RenderComponent />);
    await expect(container).toBeAccessible(componentName, 'scan_label');
    await expect(container).toHaveNoAxeViolations();
  });

  it('calls onRequestSubmit() when primary button is clicked', () => {
    const primaryHandler = jest.fn();
    render(<RenderComponent onRequestSubmit={primaryHandler} />);
    userEvent.click(screen.getByRole('button', { name: 'Create' }));
    expect(primaryHandler).toBeCalledTimes(1);
  });

  it('calls onRequestClose() when secondary button is clicked', () => {
    const secondaryHandler = jest.fn();
    render(<RenderComponent onRequestClose={secondaryHandler} />);
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(secondaryHandler).toBeCalledTimes(1);
  });

  it('notifies a click on each button', () => {
    const primaryHandler = jest.fn();
    const secondaryHandler = jest.fn();
    render(
      <RenderComponent
        onRequestSubmit={primaryHandler}
        onRequestClose={secondaryHandler}
      />
    );
    userEvent.click(screen.getByRole('button', { name: 'Create' }));
    expect(primaryHandler).toBeCalledTimes(1);
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(secondaryHandler).toBeCalledTimes(1);
  });

  it('disables primary focus button when `disableSubmit` prop is provided', () => {
    render(<RenderComponent disableSubmit primaryButtonText="Create" />);
    const submitButton = screen.getByRole('button', { name: 'Create' });
    const isDisabled = submitButton.className.includes('disabled');
    expect(isDisabled).toBeTruthy();
  });

  it('applies focus to selected element', () => {
    const textInputId = 'test-input-id';
    const { container } = render(
      <RenderComponent>
        <TextInput
          key="form-field-1"
          id={textInputId}
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </RenderComponent>
    );
    const firstInput = container.querySelector(`#${textInputId}`);
    expect(firstInput === document.activeElement).toBeTruthy();
  });

  it('throws an error if there are more than 4 child nodes inside of the modal', () =>
    expectError(
      'The `CreateModal` component does not take more than 4 nodes as children',
      () => {
        const { container } = render(
          <RenderComponent>
            <TextInput
              key="form-field-1"
              id="1"
              labelText="Text input label"
              helperText="Helper text goes here"
              placeholder="Placeholder"
            />
            <TextInput
              key="form-field-2"
              id="2"
              labelText="Text input label"
              helperText="Helper text goes here"
              placeholder="Placeholder"
            />
            <TextInput
              key="form-field-3"
              id="3"
              labelText="Text input label"
              helperText="Helper text goes here"
              placeholder="Placeholder"
            />
            <TextInput
              key="form-field-4"
              id="4"
              labelText="Text input label"
              helperText="Helper text goes here"
              placeholder="Placeholder"
            />
            <TextInput
              key="form-field-5"
              id="5"
              labelText="Text input label"
              helperText="Helper text goes here"
              placeholder="Placeholder"
            />
          </RenderComponent>
        );
        expect(() => {
          render(...container);
        }).toThrow();
      }
    ));
});
