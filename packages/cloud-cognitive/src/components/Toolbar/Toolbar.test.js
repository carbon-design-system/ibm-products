/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import { settings } from 'carbon-components';
import React, { createRef } from 'react';

import { Toolbar, ToolbarButton, ToolbarGroup } from '../..';
import uuidv4 from '../../global/js/utils/uuidv4';

import { blockClass, componentName } from './Toolbar';
import { blockClass as toolbarButtonClass } from './ToolbarButton';

const { getByTestId, getByText } = screen;

function instance(prop) {
  return `${uuidv4()}--${prop}`;
}

function toBeAccessible(label, node, displayName) {
  it(label, async () => {
    const { container } = render(node);

    await expect(container).toBeAccessible(`${displayName} — ${label}`);
    await expect(container).toHaveNoAxeViolations();
  });
}

const children = instance('children');
const dataTestId = instance('dataTestId');

const props = { children };

function test(Component) {
  toBeAccessible(
    'has no accessibility violations',
    <Component {...props} />,
    Component.displayName
  );

  it('renders children', () => {
    render(<Component {...props} />);

    getByText(children);
  });

  it('adds a class to the containing node', () => {
    const className = instance('class-name');
    render(
      <Component {...props} className={className} data-testid={dataTestId} />
    );

    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<Component {...props} data-testid={dataTestId} />);

    getByTestId(dataTestId);
  });

  it('forwards a reference to the appropriate DOM node', () => {
    const ref = createRef();
    render(<Component {...props} ref={ref} data-testid={dataTestId} />);

    expect(getByTestId(dataTestId)).toEqual(ref.current);
  });
}

describe(componentName, () => {
  test(Toolbar);

  toBeAccessible(
    'has no accessibility violations for the vertical variant',
    <Toolbar {...props} vertical />,
    componentName
  );

  it('renders the vertical variant', () => {
    const { rerender } = render(
      <Toolbar {...props} data-testid={dataTestId} />
    );

    const className = `${blockClass}--vertical`;
    expect(getByTestId(dataTestId)).not.toHaveClass(className);

    rerender(<Toolbar {...props} data-testid={dataTestId} vertical />);
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });
});

describe(ToolbarButton.displayName, () => {
  test(ToolbarButton);

  toBeAccessible(
    'has no accessibility violations for the caret variant',
    <ToolbarButton {...props} caret />,
    ToolbarButton.displayName
  );

  it('renders the caret variant', () => {
    const { rerender } = render(<ToolbarButton data-testid={dataTestId} />);

    const className = `${toolbarButtonClass}--caret`;
    expect(getByTestId(dataTestId)).not.toHaveClass(className);

    rerender(<ToolbarButton data-testid={dataTestId} caret />);
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it("renders the 'right' tooltip position for the vertical variant by default", () => {
    const { rerender } = render(<ToolbarButton data-testid={dataTestId} />);

    const className = `${settings.prefix}--btn--icon-only--right`;
    expect(getByTestId(dataTestId)).not.toHaveClass(className);

    rerender(
      <Toolbar vertical>
        <ToolbarButton data-testid={dataTestId} />
      </Toolbar>
    );
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });
});

describe(ToolbarGroup.displayName, () => {
  test(ToolbarGroup);
});
