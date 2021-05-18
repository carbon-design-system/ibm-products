/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import uuidv4 from '../../global/js/utils/uuidv4';

import { CreateSidePanel } from '.';

const componentName = CreateSidePanel.displayName;

const title = uuidv4();
const subtitle = uuidv4();
const description =
  'This is a test description. It has several lines. It should render a side panel.';
const selectorPrimaryFocus = '.bx--text-input';
const formTitle = 'This is a test form title';
const onRequestCloseFn = jest.fn();

// render an ExampleComponent with button labels and any other required props
const renderComponent = ({ ...rest }, children = <p>test</p>) =>
  render(
    <>
      <CreateSidePanel
        open
        {...{
          title,
          subtitle,
          description,
          formTitle,
          selectorPrimaryFocus,
          onRequestClose: onRequestCloseFn,
          primaryButtonText: 'Create',
          secondaryButtonText: 'Cancel',
          ...rest,
        }}
        pageContentSelector="#create-side-panel-test-page-content"
        onRequestClose={onRequestCloseFn}>
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
    renderComponent({ subtitle, title: 'Test Create Side panel', formTitle });
    expect(screen.queryAllByText(/Test Create Side panel/i)).toBeTruthy();
    expect(screen.getByText(subtitle));
    expect(screen.getByText(formTitle));
  });
});
