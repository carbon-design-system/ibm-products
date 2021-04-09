/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { Saving } from '.';

const { name } = Saving;

describe(name, () => {
  test('should render', async () => {
    render(<Saving />);
  });

  test('renders manual type', async () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const props = {
      defaultText: 'Save',
      cancelButtonText: 'Cancel',
      onSave,
      onCancel,
    };

    const { rerender, getByText } = render(<Saving {...props} />);
    fireEvent.click(getByText(props.defaultText));
    expect(onSave).toBeCalled();
    fireEvent.click(getByText(props.cancelButtonText));
    expect(onCancel).not.toBeCalled();
    rerender(<Saving {...props} status="inprogress" />);
    fireEvent.click(getByText(props.cancelButtonText));
    expect(onCancel).toBeCalled();
  });

  test('renders auto type', async () => {
    const props = {
      type: 'auto',
      defaultText: 'Save',
      failText: 'Failed to save',
      inProgressText: 'Saving...',
      successText: 'Saved',
    };

    const { rerender, getByText } = render(<Saving {...props} />);
    expect(getByText(props.defaultText)).toBeVisible();
    rerender(<Saving {...props} status="inprogress" />);
    expect(getByText(props.inProgressText)).toBeVisible();
    rerender(<Saving {...props} status="success" />);
    expect(getByText(props.successText)).toBeVisible();
    rerender(<Saving {...props} status="fail" />);
    expect(getByText(props.failText)).toBeVisible();
  });
});
