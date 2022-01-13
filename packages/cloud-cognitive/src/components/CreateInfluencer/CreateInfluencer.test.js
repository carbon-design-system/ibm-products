/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreateInfluencer } from '.';
import {
  CreateTearsheet,
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
  it('renders nothing inside of the influencer when an intro step is provided', () => {
    const steps = {
      steps: [
        <CreateTearsheetStep key="Intro" title="Intro title" introStep>
          content
        </CreateTearsheetStep>,
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
      ],
    };
    const influencerClass = `${blockClass}__left-nav`;
    const { container } = renderComponent({
      createComponents: steps,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
      currentStep: 1,
      createComponentName: CreateTearsheet.displayName,
    });
    const influencerElement = container.querySelector(`.${influencerClass}`);
    expect(influencerElement).toBeEmptyDOMElement();
    // Progress indicator should render after the intro step
    renderComponent({
      createComponents: steps,
      activeSectionIndex: 0,
      componentBlockClass: 'some-test-class-name',
      currentStep: 2,
      createComponentName: CreateTearsheet.displayName,
    });
    screen.getByText('Step 1 title');
  });
});
