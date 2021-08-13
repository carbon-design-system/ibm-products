/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render as r, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Toolbar, ToolbarButton, ToolbarGroup } from '../..';
import { blockClass } from './Toolbar';

const { getByTestId } = screen;

const dataTestId = 'dataTestId';

function _render(props) {
  const Component = this;

  return r(
    <Component data-test-id={dataTestId} {...props}>
      {Component.displayName}
    </Component>
  );
}

function test(Component) {
  const render = _render.bind(Component);

  it('has no accessibility violations', async () => {
    const { container } = render();

    await expect(container).toBeAccessible(Component.displayName);
    await expect(container).toHaveNoAxeViolations();
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

describe(Toolbar.displayName, () => {
  test(Toolbar);

  it('renders the vertical variant', () => {
    _render.bind(Toolbar)({ vertical: true });

    expect(getByTestId(dataTestId)).toHaveClass(`${blockClass}--vertical`);
  });
});

describe(ToolbarButton.displayName, () => {
  test(ToolbarButton);
});

describe(ToolbarGroup.displayName, () => {
  test(ToolbarGroup);
});
