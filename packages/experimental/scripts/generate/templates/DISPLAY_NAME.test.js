/**
 * Copyright IBM Corp. FULL_YEAR, FULL_YEAR
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

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
    const { container } = render(<DISPLAY_NAME />);
    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<DISPLAY_NAME />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<DISPLAY_NAME>{children}</DISPLAY_NAME>);
    expect(screen.getByText(children)).toBeTruthy();
  });

  it('adds className to the containing node', () => {
    const { container } = render(<DISPLAY_NAME className={className} />);
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  it('adds additional props to the containing node', () => {
    render(<DISPLAY_NAME data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toBeTruthy();
  });
});
