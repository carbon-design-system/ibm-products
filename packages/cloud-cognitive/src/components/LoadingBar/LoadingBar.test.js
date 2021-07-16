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

import { LoadingBar } from '.';

const blockClass = `${pkg.prefix}--loading-bar`;
const componentName = LoadingBar.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component LoadingBar', () => {
    render(<LoadingBar />);
    expect(screen.getByRole('progressbar')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<LoadingBar />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    render(<LoadingBar className={className} />);
    expect(screen.getByRole('progressbar')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<LoadingBar data-test-id={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<LoadingBar ref={ref} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('should add an id if provided', () => {
    const loadingBarId = 'test-id';
    const { container } = render(<LoadingBar id={loadingBarId} />);
    const containerElement = container.querySelector(
      `#loading-bar-id-${loadingBarId}`
    );
    expect(containerElement).toBeInTheDocument();
  });
});
