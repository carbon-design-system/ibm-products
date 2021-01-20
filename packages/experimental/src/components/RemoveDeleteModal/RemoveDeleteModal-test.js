/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { RemoveDeleteModal } from '.';

import uuidv4 from '../../global/js/utils/uuidv4';
jest.mock('../../global/js/utils/uuidv4');

describe('RemoveDeleteModal', () => {
  beforeAll(() => {
    uuidv4.mockImplementation(() => 'testid');
  });

  test('renders without text confirmation', () => {
    const { click } = fireEvent;
    const { fn } = jest;

    const onRequestSubmit = fn();
    const onRequestClose = fn();

    const { getByText, container } = render(
      <RemoveDeleteModal
        open
        header="test header"
        body="test body"
        resource="the resource"
        primaryButtonText="submit"
        secondaryButtonText="cancel"
        onRequestSubmit={onRequestSubmit}
        onRequestClose={onRequestClose}
      />
    );

    click(getByText('submit'));
    expect(onRequestSubmit).toBeCalled();

    click(getByText('cancel'));
    expect(onRequestClose).toBeCalled();

    expect(container.querySelector('.bx--text-input')).toBeNull();
  });

  test('renders with text confirmation', () => {
    const { click, change } = fireEvent;
    const { fn } = jest;

    const onRequestSubmit = fn();

    const { getByText, container } = render(
      <RemoveDeleteModal
        open
        header="test header"
        body="test body"
        resource="bx2000"
        textConfirmation
        primaryButtonText="submit"
        onRequestSubmit={onRequestSubmit}
      />
    );

    const submit = getByText('submit');
    const input = container.querySelector('.bx--text-input');

    expect(input).not.toBeNull();

    click(submit);
    expect(onRequestSubmit).not.toBeCalled();

    change(input, { target: { value: 'bx4000' } });
    click(submit);
    expect(onRequestSubmit).not.toBeCalled();

    change(input, { target: { value: 'bx2000' } });
    click(submit);
    expect(onRequestSubmit).toBeCalled();
  });
});
