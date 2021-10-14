/**
 * Copyright IBM Corp. FULL_YEAR, FULL_YEAR
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { DISPLAY_NAME } from '.';

const blockClass = `${pkg.prefix}--STYLE_NAME`;
const componentName = DISPLAY_NAME.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component DISPLAY_NAME', () => {
    render(<DISPLAY_NAME> </DISPLAY_NAME>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<DISPLAY_NAME> </DISPLAY_NAME>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<DISPLAY_NAME>{children}</DISPLAY_NAME>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<DISPLAY_NAME className={className}> </DISPLAY_NAME>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<DISPLAY_NAME data-testid={dataTestId}> </DISPLAY_NAME>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<DISPLAY_NAME ref={ref}> </DISPLAY_NAME>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<DISPLAY_NAME data-testid={dataTestId}> </DISPLAY_NAME>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
