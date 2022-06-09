/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react';
// import { pkg } from '../../settings';
import { EditTearsheet } from './EditTearsheet';
import { EditTearsheetForm } from './EditTearsheetForm';
// import uuidv4 from '../../global/js/utils/uuidv4';

// const { prefix } = pkg;

// const blockClass = `${prefix}--tearsheet-edit`;
const componentName = EditTearsheet.displayName;

// values to use
// const children = `hello, world (${uuidv4()})`;
// const dataTestId = uuidv4();
const onRequestCloseFn = jest.fn();
const onRequestSubmitFn = jest.fn();

const defaultProps = {
  title: 'Edit topic',
  description: 'Specify details for the topic you want to update',
  submitButtonText: 'Save',
  cancelButtonText: 'Cancel',
  className: 'test-class-name',
  label: 'Test label',
  onRequestClose: onRequestCloseFn,
  onRequestSubmit: onRequestSubmitFn,
};

const renderEditTearsheet = ({ ...rest }) =>
  render(
    <EditTearsheet {...defaultProps} {...rest}>
      <EditTearsheetForm>Form 1</EditTearsheetForm>
    </EditTearsheet>
  );

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      root: null,
      rootMargin: '',
      thresholds: [],
      disconnect: () => null,
      observe: () => null,
      takeRecords: () => [],
      unobserve: () => null,
    }));
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    jest.useRealTimers();
  });

  it('renders a component EditTearsheet', () => {
    // render(<EditTearsheet />);
    renderEditTearsheet();
  });
});
