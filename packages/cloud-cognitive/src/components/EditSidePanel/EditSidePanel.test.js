/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';
import { pkg, carbon } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { EditSidePanel } from '.';
import { act } from 'react-dom/test-utils';

const blockClass = `${pkg.prefix}--edit-side-panel`;
const componentName = EditSidePanel.displayName;

// values to use
const childrenContent = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const title = uuidv4();
const subtitle = uuidv4();
const formDescription = uuidv4();
const formTitle = uuidv4();
const selectorPrimaryFocus = `.${carbon.prefix}--text-input`;
const primaryButtonText = 'Save';
const secondaryButtonText = 'Cancel';
const onRequestSubmitFn = jest.fn();
const onRequestCloseFn = jest.fn();

const renderEditPanel = ({ ...rest } = {}, children = childrenContent) =>
  render(
    <EditSidePanel
      open
      {...{
        title,
        subtitle,
        formDescription,
        formTitle,
        selectorPrimaryFocus,
        primaryButtonText,
        secondaryButtonText,
        onRequestSubmit: onRequestSubmitFn,
        onRequestClose: onRequestCloseFn,
        ...rest,
      }}
    >
      {children}
    </EditSidePanel>
  );

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('renders a component EditSidePanel', () => {
    renderEditPanel();
    expect(screen.getByRole('complementary')).toHaveClass(blockClass);
  });

  xit('has no accessibility violations', async () => {
    const { container } = renderEditPanel();
    await act(async () => {
      await expect(container).toBeAccessible(componentName);
      await expect(container).toHaveNoAxeViolations();
    });
  });

  it(`renders children`, () => {
    renderEditPanel();
    screen.getByText(childrenContent);
  });

  it('applies className to the containing node', () => {
    renderEditPanel({
      className,
    });
    expect(screen.getByRole('complementary')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    renderEditPanel({
      'data-testid': dataTestId,
    });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderEditPanel({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderEditPanel({
      'data-testid': dataTestId,
    });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('clicks on the primary action button', () => {
    const { click } = userEvent;
    renderEditPanel();
    const primaryActionButton = screen.getByText(primaryButtonText);
    click(primaryActionButton);
    expect(onRequestSubmitFn).toHaveBeenCalledTimes(1);
  });
});
