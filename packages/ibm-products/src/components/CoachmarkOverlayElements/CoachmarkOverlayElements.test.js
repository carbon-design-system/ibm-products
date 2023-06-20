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

import { CoachmarkOverlayElements } from '.';

const blockClass = `${pkg.prefix}--coachmark-overlay-elements`;
const componentName = CoachmarkOverlayElements.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component CoachmarkOverlayElements', () => {
    render(<CoachmarkOverlayElements> </CoachmarkOverlayElements>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<CoachmarkOverlayElements> </CoachmarkOverlayElements>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<CoachmarkOverlayElements>{children}</CoachmarkOverlayElements>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<CoachmarkOverlayElements className={className}> </CoachmarkOverlayElements>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<CoachmarkOverlayElements data-testid={dataTestId}> </CoachmarkOverlayElements>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<CoachmarkOverlayElements ref={ref}> </CoachmarkOverlayElements>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<CoachmarkOverlayElements data-testid={dataTestId}> </CoachmarkOverlayElements>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
