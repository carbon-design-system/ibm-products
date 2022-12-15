/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { carbon, pkg } from '../../settings';
import { EditTearsheet } from './EditTearsheet';
import { EditTearsheetForm } from './EditTearsheetForm';
import uuidv4 from '../../global/js/utils/uuidv4';

const { prefix } = pkg;

const editTearsheetBlockClass = `${prefix}--tearsheet-edit`;
const componentName = EditTearsheet.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const form1Title = uuidv4();
const form2Title = uuidv4();
const form3Title = uuidv4();
const form4Title = uuidv4();
const form1Description = uuidv4();
const form1Subtitle = uuidv4();

const onCloseFn = jest.fn();
const onCloseReturnsTrue = jest.fn(() => true);
const ref = React.createRef();

const defaultProps = {
  title: 'Edit topic',
  description: 'Specify details for the topic you want to update',
  submitButtonText: 'Save',
  cancelButtonText: 'Cancel',
  className: 'test-class-name',
  label: '',
  influencerWidth: 'narrow',
  onClose: onCloseFn,
  open: true,
  ref,
};

const renderEditTearsheet = ({ ...rest }) =>
  render(
    <EditTearsheet {...rest}>
      <EditTearsheetForm
        title={form1Title}
        fieldsetLegendText={form1Title}
        description={form1Description}
        subtitle={form1Subtitle}
      >
        form 1 content
        <button type="button" disabled>
          Test
        </button>
        <input type="text" />
      </EditTearsheetForm>
      <EditTearsheetForm title={form2Title} hasFieldset={false}>
        form 2 content
      </EditTearsheetForm>
      <EditTearsheetForm title={form3Title} fieldsetLegendText={form3Title}>
        form 3 content
      </EditTearsheetForm>
      <EditTearsheetForm title={form4Title} fieldsetLegendText={form4Title}>
        form 4 content
      </EditTearsheetForm>
    </EditTearsheet>
  );

const renderEmptyEditTearsheet = ({ ...rest }) =>
  render(
    <EditTearsheet {...rest}>
      <p>Child element that persists across all forms</p>
    </EditTearsheet>
  );

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
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
    pkg.feature['default-portal-target-body'] = false;
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    jest.useRealTimers();
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  it('renders the EditTearsheet component', () => {
    const { container } = renderEditTearsheet({
      ...defaultProps,
    });
    expect(container.querySelector(`.${editTearsheetBlockClass}`)).toBeTruthy();
    expect(ref.current).not.toBeNull();
  });

  it('should not render any EditTearsheetForm when there are no EditTearsheetForm components included', () => {
    const { container } = renderEmptyEditTearsheet(defaultProps);
    const editTearsheetForms = container.querySelectorAll(
      `.${editTearsheetBlockClass}__form`
    );
    expect(Array(...editTearsheetForms)).toStrictEqual([]);
  });

  xit('has no accessibility violations', async () => {
    const { container } = renderEditTearsheet({ ...defaultProps });
    await expect(() => container.toBeAccessible());
    await expect(() => container.toHaveNoAxeViolations());
  });

  it('adds additional props to the containing node', () => {
    render(<EditTearsheet data-testid={dataTestId}> </EditTearsheet>);
    screen.getByTestId(dataTestId);
  });

  it('renders the primaryButtonLabel and secondaryButtonLabel properties', () => {
    renderEditTearsheet({ ...defaultProps });
    screen.getByText(defaultProps.submitButtonText);
    screen.getByText(defaultProps.cancelButtonText);
  });

  it('calls onClose() when the tearsheet is closed', () => {
    render(
      <EditTearsheet
        {...{ ...defaultProps }}
        onClose={onCloseReturnsTrue}
        open
      />
    );
    const editTearsheet = document.querySelector(`.${carbon.prefix}--modal`);
    expect(editTearsheet).toHaveClass('is-visible');
    const closeButton = screen.getByTitle('Close');
    userEvent.click(closeButton);
    expect(editTearsheet).not.toHaveClass('is-visible');
  });

  it('applies className to the root node', () => {
    renderEditTearsheet({ className });
    const editTearsheet = document.querySelector(`.${carbon.prefix}--modal`);
    expect(editTearsheet).toHaveClass(className);
  });
});
