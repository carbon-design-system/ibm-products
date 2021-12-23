/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { ProgressiveLoading } from '.';

const blockClass = `${pkg.prefix}--progressive-loading`;
const componentName = ProgressiveLoading.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component ProgressiveLoading', () => {
    render(<ProgressiveLoading> </ProgressiveLoading>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ProgressiveLoading> </ProgressiveLoading>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<ProgressiveLoading>{children}</ProgressiveLoading>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<ProgressiveLoading className={className}> </ProgressiveLoading>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<ProgressiveLoading data-testid={dataTestId}> </ProgressiveLoading>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<ProgressiveLoading ref={ref}> </ProgressiveLoading>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<ProgressiveLoading data-testid={dataTestId}> </ProgressiveLoading>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
