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
import { CoachmarkFixed } from '.';

const blockClass = `${pkg.prefix}--coachmark-fixed`;
const componentName = CoachmarkFixed.displayName;

// values to use
const dataTestId = uuidv4();
const className = `class-${uuidv4()}`;

const renderCoachmarkFixed = ({ ...rest } = {}) =>
  render(
    <CoachmarkFixed {...rest}>
      <CoachmarkOverlayElements
        aria-label="Coachmark Overlay Element container"
        closeButtonLabel="Done"
        nextButtonLabel="Next"
        previousButtonLabel="Back"
      >
        <CoachmarkOverlayElement
          aria-label="Element 1"
          title="Hello World"
          description="Link opens in new tab."
        />
        <CoachmarkOverlayElement
          aria-label="Element 2"
          title="Hello World 2"
          description="Link opens on this page."
        />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>
  );

describe(componentName, () => {
  it('renders a component CoachmarkFixed', () => {
    renderCoachmarkFixed({
      tagline: 'TaglineText',
      onClose: () => console.log('CLOSE'),
      'data-testid': dataTestId,
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderCoachmarkFixed({
      tagline: 'TaglineText',
      onClose: () => console.log('CLOSE'),
      'data-testid': dataTestId,
    });
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  // it(`renders children`, () => {
  //   renderCoachmarkFixed({
  //     tagline: 'TaglineText',
  //     onClose: () => console.log('CLOSE'),
  // 'data-testid': dataTestId,
  //   });
  //   screen.getByText(children);
  // });

  it('applies className to the containing node', () => {
    renderCoachmarkFixed({
      className,
      tagline: 'TaglineText',
      onClose: () => console.log('CLOSE'),
      'data-testid': dataTestId,
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    const tmpTestID = `coachmarkFixed-${uuidv4()}`;
    renderCoachmarkFixed({
      className,
      tagline: 'TaglineText',
      onClose: () => console.log('CLOSE'),
      'data-testid': tmpTestID,
    });
    screen.getByTestId(tmpTestID);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderCoachmarkFixed({
      className,
      tagline: 'TaglineText',
      onClose: () => console.log('CLOSE'),
      'data-testid': dataTestId,
      ref,
    });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderCoachmarkFixed({
      className,
      tagline: 'TaglineText',
      onClose: () => console.log('CLOSE'),
      'data-testid': dataTestId,
    });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
