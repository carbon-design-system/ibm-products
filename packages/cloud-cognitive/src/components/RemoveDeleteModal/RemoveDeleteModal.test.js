/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { RemoveDeleteModal } from '.';

const componentName = RemoveDeleteModal.displayName;
const resource = 'bx1001';
const defaultProps = {
  body: 'test body',
  className: 'test-class',
  title: 'test title',
  iconDescription: 'test icon description',
  inputInvalidText: 'invalid input',
  inputLabelText: `type ${resource} to confirm`,
  inputPlaceholderText: 'name of resource',
  open: true,
  primaryButtonText: 'primary button text',
  resource,
  secondaryButtonText: 'secondary button text',
  label: 'test label',
  textConfirmation: false,
};

describe(componentName, () => {
  it('renders without text confirmation', () => {
    const { click } = userEvent;
    const { fn } = jest;

    const onRequestSubmit = fn();
    const onRequestClose = fn();
    const props = {
      ...defaultProps,
      onRequestClose,
      onRequestSubmit,
    };

    const { getByText, container } = render(<RemoveDeleteModal {...props} />);

    click(getByText(props.primaryButtonText));
    expect(onRequestSubmit).toBeCalled();

    click(getByText(props.secondaryButtonText));
    expect(onRequestClose).toBeCalled();

    expect(container.querySelector('.bx--text-input')).toBeNull();
  });

  it('renders with text confirmation', () => {
    const { change } = fireEvent;
    const { click } = userEvent;
    const { fn } = jest;

    const onRequestSubmit = fn();
    const props = {
      ...defaultProps,
      textConfirmation: true,
      onRequestSubmit,
    };

    const { getByText, container } = render(<RemoveDeleteModal {...props} />);

    expect(container.querySelector('.bx--text-input')).not.toBeNull();

    click(getByText(props.primaryButtonText));
    expect(onRequestSubmit).not.toBeCalled();

    change(container.querySelector('.bx--text-input'), {
      target: { value: 'bx1002' },
    });
    click(getByText(props.primaryButtonText));
    expect(onRequestSubmit).not.toBeCalled();

    change(container.querySelector('.bx--text-input'), {
      target: { value: 'bx1001' },
    });
    click(getByText(props.primaryButtonText));
    expect(onRequestSubmit).toBeCalled();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<RemoveDeleteModal {...defaultProps} />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<RemoveDeleteModal {...defaultProps} />);
    expect(container.firstChild).toHaveClass(defaultProps.className);
  });

  it('adds additional properties to the containing node', () => {
    render(<RemoveDeleteModal {...defaultProps} data-testid="test-id" />);
    screen.getByTestId('test-id');
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<RemoveDeleteModal {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
