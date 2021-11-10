/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render as r, screen } from '@testing-library/react';
import { settings } from 'carbon-components';
import React, { createRef } from 'react';

import { Toolbar, ToolbarButton, ToolbarGroup } from '../..';
import { blockClass, componentName } from './Toolbar';

const { getByTestId, getByText } = screen;

const dataTestId = 'dataTestId';

function _render(props) {
  const Component = this;

  return r(
    <Component data-testid={dataTestId} {...props}>
      {Component.displayName}
    </Component>
  );
}

function test(Component) {
  const render = _render.bind(Component);
  const { displayName } = Component;

  it('has no accessibility violations', async () => {
    const { container } = render();

    await expect(container).toBeAccessible(displayName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('renders children', () => {
    render();

    getByText(displayName);
  });

  it('adds a class to the containing node', () => {
    const className = 'class-name';
    render({ className });

    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render();

    getByTestId(dataTestId);
  });

  it('forwards a reference to the appropriate DOM node', () => {
    const ref = createRef();
    render({ ref });

    expect(getByTestId(dataTestId)).toEqual(ref.current);
  });
}

describe(componentName, () => {
  test(Toolbar);

  it('renders the vertical variant', () => {
    _render.bind(Toolbar)({ vertical: true });

    const toolbar = getByTestId(dataTestId);

    expect(toolbar).toHaveAttribute('aria-orientation', 'vertical');
    expect(toolbar).toHaveClass(`${blockClass}--vertical`);
  });
});

describe(ToolbarButton.displayName, () => {
  test(ToolbarButton);

  it('renders the caret variant', () => {
    _render.bind(ToolbarButton)({ caret: true });

    expect(getByTestId(dataTestId)).toHaveClass(`${blockClass}__button--caret`);
  });

  it("renders the 'right' tooltip position for the vertical variant by default", () => {
    expect(
      r(
        <Toolbar vertical>
          <ToolbarButton data-testid={dataTestId} />
        </Toolbar>
      ).getByTestId(dataTestId)
    ).toHaveClass(`${settings.prefix}--btn--icon-only--right`);
  });
});

describe(ToolbarGroup.displayName, () => {
  test(ToolbarGroup);
});
