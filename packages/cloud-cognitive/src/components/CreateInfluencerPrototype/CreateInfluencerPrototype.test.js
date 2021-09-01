/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render } from '@testing-library/react';
import { CreateInfluencerPrototype } from '.';
import {
  CreateTearsheet,
  CreateTearsheetSection,
  CreateTearsheetStep,
} from '../CreateTearsheet';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--create-influencer`;
const section1Title = 'Section 1 title';
// Remove `ms` from moderate02 carbon motion value so we can simply pass the number of milliseconds.
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

const renderComponent = ({ ...rest }) =>
  render(<CreateInfluencerPrototype {...rest} />);
describe(CreateInfluencerPrototype.displayName, () => {
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
});
