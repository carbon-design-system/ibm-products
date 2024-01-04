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

import { CoachmarkStack } from '.';

const blockClass = `${pkg.prefix}--coachmark-stack`;
const componentName = CoachmarkStack.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component CoachmarkStack', async () => {
    render(<CoachmarkStack> </CoachmarkStack>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<CoachmarkStack> </CoachmarkStack>);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    render(<CoachmarkStack>{children}</CoachmarkStack>);
    screen.getByText(children);
  });

  it('applies className to the containing node', async () => {
    render(<CoachmarkStack className={className}> </CoachmarkStack>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(<CoachmarkStack data-testid={dataTestId}> </CoachmarkStack>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<CoachmarkStack ref={ref}> </CoachmarkStack>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(<CoachmarkStack data-testid={dataTestId}> </CoachmarkStack>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
