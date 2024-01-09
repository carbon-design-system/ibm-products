/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { CoachmarkOverlayElement, CoachmarkOverlayElements } from '..';
import { CoachmarkStack } from '.';
import { act } from 'react-dom/test-utils';

const blockClass = `${pkg.prefix}--coachmark-stack`;
const overlayBlockClass = `${pkg.prefix}--coachmark-overlay--stack`;
const componentName = CoachmarkStack.displayName;
const dataTestId = uuidv4();
const childDataTestId = `coachmark_${uuidv4()}`;

// values to use
const childrenContent = [
  <CoachmarkOverlayElements closeButtonLabel={'Close 1'} key="1">
    <CoachmarkOverlayElement
      title="Test Element 1"
      description="Description goes here"
    />
  </CoachmarkOverlayElements>,

  <CoachmarkOverlayElements
    data-testid={childDataTestId}
    closeButtonLabel={'Close 2'}
    key="2"
  >
    <CoachmarkOverlayElement
      title="Test Element 1"
      description="Description goes here"
    />
  </CoachmarkOverlayElements>,

  <CoachmarkOverlayElements closeButtonLabel={'Close 3'} key="3">
    <CoachmarkOverlayElement
      title="Test Element 1"
      description="Description goes here"
    />
  </CoachmarkOverlayElements>,
];
const className = `class-${uuidv4()}`;

const renderCoachmarkStack = ({ ...rest } = {}, children = childrenContent) =>
  render(<CoachmarkStack {...rest}>{children}</CoachmarkStack>);

describe(componentName, () => {
  it('renders a component CoachmarkStack', () => {
    renderCoachmarkStack({
      title: 'Coachmark Stack',
      description: 'Coachmark Stack Description',
      navLinkLabels: ['Label 1', 'Label 2', 'Label 3'],
      tagline: 'Test Tagline',
      'data-testid': dataTestId,
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(overlayBlockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderCoachmarkStack({
      title: 'Coachmark Stack',
      description: 'Coachmark Stack Description',
      navLinkLabels: ['Label 1', 'Label 2', 'Label 3'],
      tagline: 'Test Tagline',
      'data-testid': dataTestId,
    });
    await act(async () => {
      await expect(container).toBeAccessible(componentName);
      await expect(container).toHaveNoAxeViolations();
    });
  });

  it(`adds additional props to the containing node and renders children`, () => {
    renderCoachmarkStack({
      title: 'Coachmark Stack',
      description: 'Coachmark Stack Description',
      navLinkLabels: ['Label 1', 'Label 2', 'Label 3'],
      tagline: 'Test Tagline',
      'data-testid': dataTestId,
    });
    screen.getByTestId(dataTestId);
    screen.getByTestId(childDataTestId);
  });

  it('applies className to the containing node', () => {
    renderCoachmarkStack({
      title: 'Coachmark Stack',
      description: 'Coachmark Stack Description',
      navLinkLabels: ['Label 1', 'Label 2', 'Label 3'],
      tagline: 'Test Tagline',
      'data-testid': dataTestId,
      className,
    });

    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderCoachmarkStack({
      title: 'Coachmark Stack',
      description: 'Coachmark Stack Description',
      navLinkLabels: ['Label 1', 'Label 2', 'Label 3'],
      tagline: 'Test Tagline',
      'data-testid': dataTestId,
      ref,
    });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderCoachmarkStack({
      title: 'Coachmark Stack',
      description: 'Coachmark Stack Description',
      navLinkLabels: ['Label 1', 'Label 2', 'Label 3'],
      tagline: 'Test Tagline',
      'data-testid': dataTestId,
    });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
