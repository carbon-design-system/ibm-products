/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

import { LoadingBar } from '.';

const blockClass = `${pkg.prefix}--loading-bar`;
const componentName = LoadingBar.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component LoadingBar', () => {
    render(<LoadingBar> </LoadingBar>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<LoadingBar> </LoadingBar>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    render(<LoadingBar className={className}> </LoadingBar>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<LoadingBar data-testid={dataTestId}> </LoadingBar>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<LoadingBar ref={ref}> </LoadingBar>);
    expect(ref.current).toHaveClass(blockClass);
  });
});
