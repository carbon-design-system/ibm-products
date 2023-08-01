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

import { InterstitialScreenViewModule } from '.';

const blockClass = `${pkg.prefix}--interstitial-screen-view-module`;
const componentName = InterstitialScreenViewModule.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component InterstitialScreenViewModule', () => {
    render(<InterstitialScreenViewModule> </InterstitialScreenViewModule>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<InterstitialScreenViewModule> </InterstitialScreenViewModule>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<InterstitialScreenViewModule>{children}</InterstitialScreenViewModule>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<InterstitialScreenViewModule className={className}> </InterstitialScreenViewModule>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<InterstitialScreenViewModule data-testid={dataTestId}> </InterstitialScreenViewModule>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<InterstitialScreenViewModule ref={ref}> </InterstitialScreenViewModule>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<InterstitialScreenViewModule data-testid={dataTestId}> </InterstitialScreenViewModule>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
