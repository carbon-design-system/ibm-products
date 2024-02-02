/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { UserAvatar } from '.';

const blockClass = `${pkg.prefix}--user-avatar`;
const componentName = UserAvatar.displayName;

// values to use
const dataTestId = uuidv4();
const theme = 'light';

const renderComponent = ({ ...rest } = {}) =>
  render(<UserAvatar {...{ theme, ...rest }} />);

describe(componentName, () => {
  it('should return a circle with background color', async () => {
    const { container } = renderComponent({
      backgroundColor: 'light-cyan',
    });
    const element = container.querySelector(`.${blockClass}`);

    const hasBackgroundColor = element.className.includes('light-cyan');
    expect(hasBackgroundColor).toBeTruthy();
  });

  it('should return an icon for the avatar image', async () => {
    const { container } = renderComponent();
    const renderedSVG = container.querySelector('svg');
    expect(renderedSVG).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const customClass = 'test';
    const { container } = renderComponent({ className: customClass });
    const element = container.querySelector(`.${blockClass}`);
    expect(element).toHaveClass(customClass);
  });

  it('should recognize theme setting', async () => {
    const { container } = renderComponent();
    const element = container.querySelector(`.${blockClass}`);
    const hasThemeClass = element.className.includes('light');
    expect(hasThemeClass).toBeTruthy();
  });

  it('adds additional props to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
