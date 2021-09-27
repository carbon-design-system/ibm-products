/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';
import uuidv4 from '../../global/js/utils/uuidv4';

import { pkg } from '../../settings';

import { CreateSidePanel } from '.';

const { devtoolsAttribute, getDevtoolsId, prefix } = pkg;

const componentName = CreateSidePanel.displayName;

const title = 'Test Create Side panel';
const subtitle = 'Test Create Side panel subtitle';
const formDescription =
  'This is a test description. It has several lines. It should render a side panel.';
const selectorPrimaryFocus = '.bx--text-input';
const formTitle = 'This is a test form title';
const blockClass = `${prefix}--create-side-panel`;

const renderComponent = ({ ...rest }, children = <p>test</p>) =>
  render(
    <>
      <CreateSidePanel
        open
        {...{
          title,
          subtitle,
          formDescription,
          formTitle,
          selectorPrimaryFocus,
          primaryButtonText: 'Create',
          secondaryButtonText: 'Cancel',
          selectorPageContent: '#create-side-panel-test-page-content',
          ...rest,
        }}>
        {children}
      </CreateSidePanel>
      <div id="create-side-panel-test-page-content" />
    </>
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

  it('renders the side panel', () => {
    renderComponent();
    expect(screen.getByRole('complementary')).toHaveClass(blockClass);
  });

  it('renders a title', () => {
    renderComponent({ title });
    expect(screen.queryAllByText(/{title}/i)).toBeTruthy();
  });

  it('renders a subtitle', () => {
    renderComponent({ subtitle });
    expect(screen.queryAllByText(/{subtitle}/i)).toBeTruthy();
  });

  it('renders a forms title', () => {
    renderComponent({ formTitle });
    expect(screen.queryAllByText(/{formTitle}/i)).toBeTruthy();
  });

  it('renders a forms description', () => {
    renderComponent({ formDescription });
    expect(screen.queryAllByText(/{formDescription}/i)).toBeTruthy();
  });

  it('calls onRequestSubmit() when primary button is clicked', () => {
    const primaryHandler = jest.fn();
    renderComponent({
      onRequestSubmit: primaryHandler,
    });
    userEvent.click(screen.getByRole('button', { name: 'Create' }));
    expect(primaryHandler).toBeCalledTimes(1);
  });

  it('calls onRequestClose() when secondary button is clicked', () => {
    const secondaryHandler = jest.fn();
    renderComponent({
      onRequestClose: secondaryHandler,
    });
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(secondaryHandler).toBeCalledTimes(1);
  });

  it('disables primary focus button when `disableSubmit` prop is provided', () => {
    renderComponent({ disableSubmit: true, primaryButtonText: 'Create' });
    const submitButton = screen.getByRole('button', { name: 'Create' });
    const isDisabled = submitButton.className.includes('disabled');
    expect(isDisabled).toBeTruthy();
  });

  it('disables primary focus button when `disableSubmit` prop is provided', () => {
    renderComponent({ disableSubmit: true, primaryButtonText: 'Create' });
    const submitButton = screen.getByRole('button', { name: 'Create' });
    const isDisabled = submitButton.className.includes('disabled');
    expect(isDisabled).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const className = `class-${uuidv4()}`;
    renderComponent({ className: className });
    expect(screen.getByRole('complementary')).toHaveClass(className);
  });

  const dataTestId = uuidv4();

  it('adds additional properties to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref: ref });
    expect(ref.current).toEqual(screen.getByRole('complementary'));
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveAttribute(
      devtoolsAttribute,
      getDevtoolsId(componentName)
    );
  });

  it('should still support deprecated `pageContentSelector` prop', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    const warningSpy = jest.spyOn(console, 'warn').mockImplementation();
    renderComponent({
      pageContentSelector: '#create-side-panel-test-page-content',
      selectorPageContent: null,
    });
    expect(screen.getByRole('complementary')).toHaveClass(blockClass);
    errorSpy.mockRestore();
    warningSpy.mockRestore();
  });
});
