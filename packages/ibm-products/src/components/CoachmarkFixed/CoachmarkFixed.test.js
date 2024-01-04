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

import { CoachmarkFixed } from '.';

const blockClass = `${pkg.prefix}--coachmark-fixed`;
const componentName = CoachmarkFixed.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component CoachmarkFixed', async () => {
    render(<CoachmarkFixed> </CoachmarkFixed>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<CoachmarkFixed> </CoachmarkFixed>);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    render(<CoachmarkFixed>{children}</CoachmarkFixed>);
    screen.getByText(children);
  });

  it('applies className to the containing node', async () => {
    render(<CoachmarkFixed className={className}> </CoachmarkFixed>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(<CoachmarkFixed data-testid={dataTestId}> </CoachmarkFixed>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<CoachmarkFixed ref={ref}> </CoachmarkFixed>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(<CoachmarkFixed data-testid={dataTestId}> </CoachmarkFixed>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
