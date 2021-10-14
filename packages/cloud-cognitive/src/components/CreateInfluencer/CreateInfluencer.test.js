/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { moderate02 } from '@carbon/motion';
import { CreateInfluencer } from '.';
import { CreateFullPage } from '../CreateFullPage';
import {
  CreateTearsheet,
  CreateTearsheetSection,
  CreateTearsheetStep,
} from '../CreateTearsheet';
import { expectWarn } from '../../global/js/utils/test-helper';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--create-influencer`;
const section1Title = 'Section 1 title';
// Remove `ms` from moderate02 carbon motion value so we can simply pass the number of milliseconds.
const timerValue = Number(moderate02.substring(0, moderate02.length - 2));
const defaultProps = {
  createComponents: {
    steps: [
      <CreateTearsheetStep
        key="Step 1"
        title="Step 1 title"
        secondaryLabel="Step 1 secondary label"
      >
        content
      </CreateTearsheetStep>,
      <CreateTearsheetStep
        key="Step 2"
        title="Step 2 title"
        secondaryLabel="Step 2 secondary label"
      >
        content
      </CreateTearsheetStep>,
      <CreateTearsheetStep
        key="Step 3"
        title="Step 3 title"
        secondaryLabel="Step 3 secondary label"
      >
        content
      </CreateTearsheetStep>,
    ],
    sections: [
      <CreateTearsheetSection
        key="section-1"
        id="section-1"
        title={section1Title}
      >
        section content
      </CreateTearsheetSection>,
      <CreateTearsheetSection key="section-2" id="section-2" title="Section 2">
        section content
      </CreateTearsheetSection>,
      <CreateTearsheetSection key="section-3" id="section-3" title="Section 3">
        section content
      </CreateTearsheetSection>,
    ],
  },
};

const invalidCreateComponents = {
  steps: [
    <CreateTearsheetStep
      key="Step 1"
      title="Step 1 title"
      secondaryLabel="Step 1 secondary label"
    >
      content
    </CreateTearsheetStep>,
    <CreateTearsheetStep
      key="Step 2"
      title="Step 2 title"
      secondaryLabel="Step 2 secondary label"
    >
      content
    </CreateTearsheetStep>,
    <CreateTearsheetStep
      key="Step 3"
      title="Step 3 title"
      secondaryLabel="Step 3 secondary label"
    >
      content
    </CreateTearsheetStep>,
  ],
  sections: [
    <CreateTearsheetSection key="section-1" title={section1Title}>
      section content
    </CreateTearsheetSection>,
    <CreateTearsheetSection key="section-2" id="section-2" title="Section 2">
      section content
    </CreateTearsheetSection>,
    <CreateTearsheetSection key="section-3" id="section-3" title="Section 3">
      section content
    </CreateTearsheetSection>,
  ],
};

const renderComponent = ({ ...rest }) => render(<CreateInfluencer {...rest} />);
describe(CreateInfluencer.displayName, () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the CreateInfluencer component', () => {
    const { container } = renderComponent({
      createComponents: defaultProps.createComponents,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
      currentStep: 1,
      createComponentName: CreateTearsheet.displayName,
    });
    expect(container.firstChild).toHaveClass(blockClass);
  });
  it('renders the CreateInfluencer component with the toggle', () => {
    const { click } = userEvent;
    const viewAllToggleLabelText = 'Show all available options';
    const sideNavAriaLabel = 'Side nav aria label';
    const toggleFn = jest.fn();
    const { container } = renderComponent({
      createComponents: defaultProps.createComponents,
      activeSectionIndex: 0,
      componentBlockClass: blockClass,
      createComponentName: CreateTearsheet.displayName,
      componentName: 'TestComponent',
      currentStep: 1,
      includeViewAllToggle: true,
      sideNavAriaLabel,
      toggleState: false,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText: 'Off',
      viewAllToggleOnLabelText: 'On',
      handleToggleState: toggleFn,
      handleActiveSectionIndex: jest.fn(),
    });
    const viewAllToggleElement = container.querySelector(
      `#${blockClass}__view-all-toggle`
    );
    expect(viewAllToggleElement).toBeInTheDocument();
    click(viewAllToggleElement);
    act(() => jest.advanceTimersByTime(timerValue));
  });
  it('renders the CreateInfluencer from CreateFullPage with toggle on and clicks a side nav item', () => {
    const { click } = userEvent;
    const viewAllToggleLabelText = 'Show all available options';
    const sideNavAriaLabel = 'Side nav aria label';
    const activeSectionIndexFn = jest.fn();
    renderComponent({
      createComponents: defaultProps.createComponents,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
      createComponentName: CreateFullPage.displayName,
      componentName: 'TestComponent',
      currentStep: 1,
      includeViewAllToggle: true,
      sideNavAriaLabel,
      toggleState: true,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText: 'Off',
      viewAllToggleOnLabelText: 'On',
      handleToggleState: jest.fn(),
      handleActiveSectionIndex: activeSectionIndexFn,
    });
    expect(screen.getByLabelText(sideNavAriaLabel));
    click(screen.getByText(section1Title));
    expect(activeSectionIndexFn).toHaveBeenCalledTimes(1);
  });

  it('renders the CreateInfluencer from CreateTearsheet with toggle on and clicks a side nav item', () => {
    const { click } = userEvent;
    const viewAllToggleLabelText = 'Show all available options';
    const sideNavAriaLabel = 'Side nav aria label';
    const activeSectionIndexFn = jest.fn();
    renderComponent({
      createComponents: defaultProps.createComponents,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
      createComponentName: CreateTearsheet.displayName,
      componentName: 'TestComponent',
      currentStep: 1,
      includeViewAllToggle: true,
      sideNavAriaLabel,
      toggleState: true,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText: 'Off',
      viewAllToggleOnLabelText: 'On',
      handleToggleState: jest.fn(),
      handleActiveSectionIndex: activeSectionIndexFn,
    });
    expect(screen.getByLabelText(sideNavAriaLabel));
    click(screen.getByText(section1Title));
    expect(activeSectionIndexFn).toHaveBeenCalledTimes(1);
  });

  it('renders the CreateInfluencer with a missing id on the section component', () =>
    expectWarn(
      `${CreateTearsheet.displayName}Section component is missing a required prop of 'id'`,
      () => {
        const viewAllToggleLabelText = 'Show all available options';
        const sideNavAriaLabel = 'Side nav aria label';
        const activeSectionIndexFn = jest.fn();
        const { click } = userEvent;
        const { container } = renderComponent({
          createComponents: invalidCreateComponents,
          activeSectionIndex: 0,
          componentBlockClass: 'some-test-class-name',
          createComponentName: CreateTearsheet.displayName,
          componentName: 'TestComponent',
          currentStep: 1,
          includeViewAllToggle: true,
          sideNavAriaLabel,
          toggleState: true,
          viewAllToggleLabelText,
          viewAllToggleOffLabelText: 'Off',
          viewAllToggleOnLabelText: 'On',
          handleToggleState: jest.fn(),
          handleActiveSectionIndex: activeSectionIndexFn,
        });
        click(screen.getByText(section1Title));
        const viewAllToggleElement = container.querySelector(
          `#${blockClass}__view-all-toggle`
        );
        expect(viewAllToggleElement).toBeInTheDocument();
        click(viewAllToggleElement);
        act(() => jest.advanceTimersByTime(timerValue));
      }
    ));
});
