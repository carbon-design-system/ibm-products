/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
// import uuidv4 from '../../global/js/utils/uuidv4';

import { ScrollGradient } from '.';

const blockClass = `${pkg.prefix}--scroll-gradient`;
const componentName = ScrollGradient.displayName;

// values to use
// const children = `hello, world (${uuidv4()})`;
// const className = `class-${uuidv4()}`;
// const dataTestId = uuidv4();

describe(componentName, () => {
  it.skip('renders a component ScrollGradient', async () => {
    render(<ScrollGradient> </ScrollGradient>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  // it('has no accessibility violations', async () => {
  //   const { container } = render(<ScrollGradient> </ScrollGradient>);
  //   expect(container).toBeAccessible(componentName);
  //   expect(container).toHaveNoAxeViolations();
  // });

  // it(`renders children`, async () => {
  //   render(<ScrollGradient>{children}</ScrollGradient>);
  //   screen.getByText(children);
  // });

  // it('applies className to the containing node', async () => {
  //   render(<ScrollGradient className={className}> </ScrollGradient>);
  //   expect(screen.getByRole('main')).toHaveClass(className);
  // });

  // it('adds additional props to the containing node', async () => {
  //   render(<ScrollGradient data-testid={dataTestId}> </ScrollGradient>);
  //   screen.getByTestId(dataTestId);
  // });

  // it('forwards a ref to an appropriate node', async () => {
  //   const ref = React.createRef();
  //   render(<ScrollGradient ref={ref}> </ScrollGradient>);
  //   expect(ref.current).toHaveClass(blockClass);
  // });

  // it('adds the Devtools attribute to the containing node', async () => {
  //   render(<ScrollGradient data-testid={dataTestId}> </ScrollGradient>);

  //   expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
  //     componentName
  //   );
  // });
});
