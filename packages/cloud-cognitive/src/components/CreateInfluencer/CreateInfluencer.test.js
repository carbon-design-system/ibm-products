/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateInfluencer } from '.';
import {
  CreateTearsheetSection,
  CreateTearsheetStep,
} from '../CreateTearsheet';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--create-influencer`;
const section1Title = 'Section 1 title';
const defaultProps = {
  createComponents: {
    steps: [
      <CreateTearsheetStep
        key="Step 1"
        title="Step 1 title"
        secondaryLabel="Step 1 secondary label">
        content
      </CreateTearsheetStep>,
      <CreateTearsheetStep
        key="Step 2"
        title="Step 2 title"
        secondaryLabel="Step 2 secondary label">
        content
      </CreateTearsheetStep>,
      <CreateTearsheetStep
        key="Step 3"
        title="Step 3 title"
        secondaryLabel="Step 3 secondary label">
        content
      </CreateTearsheetStep>,
    ],
    sections: [
      <CreateTearsheetSection
        key="section-1"
        id="section-1"
        title={section1Title}>
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
      secondaryLabel="Step 1 secondary label">
      content
    </CreateTearsheetStep>,
    <CreateTearsheetStep
      key="Step 2"
      title="Step 2 title"
      secondaryLabel="Step 2 secondary label">
      content
    </CreateTearsheetStep>,
    <CreateTearsheetStep
      key="Step 3"
      title="Step 3 title"
      secondaryLabel="Step 3 secondary label">
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
  it('renders the CreateInfluencer component', () => {
    const { container } = renderComponent({
      createComponents: defaultProps.createComponents,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
      currentStep: 1,
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
    expect(toggleFn).toHaveBeenCalledTimes(1);
  });
  it('renders the CreateInfluencer with toggle on', () => {
    const { click } = userEvent;
    const viewAllToggleLabelText = 'Show all available options';
    const sideNavAriaLabel = 'Side nav aria label';
    const activeSectionIndexFn = jest.fn();
    const { rerender } = renderComponent({
      createComponents: defaultProps.createComponents,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
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
    const warn = jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    rerender(
      renderComponent({
        createComponents: invalidCreateComponents,
        activeSectionIndex: 0,
        componentBlockClass: 'some-test-class-name',
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
      })
    );
    warn.mockRestore();
  });
});
