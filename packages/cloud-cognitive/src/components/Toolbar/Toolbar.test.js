/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { createRef } from 'react';

import { Toolbar, ToolbarGroup, ToolbarButton } from './index';
import uuidv4 from '../../global/js/utils/uuidv4';

import { blockClass, componentName } from './Toolbar';
import { blockClass as toolbarButtonClass } from './ToolbarButton';

const { getByTestId, getByText } = screen;
const { keyboard, tab } = userEvent;
const carbonPrefix = 'cds';

function _instance(prop) {
  return `${uuidv4()}--${prop}`;
}

function toBeAccessible(label, node, displayName) {
  it(label, async () => {
    const { container } = render(node);

    await expect(container).toBeAccessible(`${displayName} — ${label}`);
    await expect(container).toHaveNoAxeViolations();
  });
}

const children = _instance('children');
const dataTestId = _instance('dataTestId');

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
    const className = _instance('class-name');
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

  const instance = _instance(componentName);

  function _array(length) {
    return new Array(length).fill();
  }

  function getText(id) {
    return `${instance}--${id}`;
  }

  function key(text) {
    keyboard(`{${text}}`);
  }

  function setupFocus(length = 3, props) {
    render(
      <Toolbar {...props}>
        {_array(length).map((_value, index) => {
          const children = getText(index);

          return <ToolbarButton key={children}>{children}</ToolbarButton>;
        })}
      </Toolbar>
    );

    expect(document.body).toHaveFocus();

    tab();
    expect(getByText(getText(0))).toHaveFocus();
  }

  it('moves the focus out when tabbed', () => {
    setupFocus();

    tab();
    expect(document.body).toHaveFocus();
  });

  it('sets focus on the item that previously contained focus', () => {
    setupFocus();

    key('ArrowRight');

    tab();
    tab();

    expect(getByText(getText(1))).toHaveFocus();
  });

  function setupKeyFocus(props) {
    const length = 5;
    setupFocus(length, props);

    return _array(length - 1);
  }

  function expectMove(text, id) {
    key(text);

    expect(getByText(getText(id))).toHaveFocus();
  }

  function expectNextKeyFocus(text, props) {
    setupKeyFocus(props).forEach((_value, index) =>
      expectMove(text, index + 1)
    );
  }

  it('moves focus to the next item', () => {
    expectNextKeyFocus('ArrowRight');
  });

  function expectPreviousKeyFocus({ next, previous }, props) {
    const items = setupKeyFocus(props);
    const { length } = items;

    items.forEach(() => key(next));

    items.forEach((_value, index) =>
      expectMove(previous, length - (index + 1))
    );
  }

  it('moves focus to the previous item', () => {
    expectPreviousKeyFocus({ next: 'ArrowRight', previous: 'ArrowLeft' });
  });

  toBeAccessible(
    'has no accessibility violations for the vertical variant',
    <Toolbar {...props} vertical />,
    componentName
  );

  it('renders the vertical variant', async () => {
    const { rerender } = await render(
      <Toolbar {...props} data-testid={dataTestId} />
    );

    const className = `${blockClass}--vertical`;
    expect(getByTestId(dataTestId)).not.toHaveClass(className);

    await rerender(<Toolbar {...props} data-testid={dataTestId} vertical />);
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it('moves focus to the next item for the vertical variant', () => {
    expectNextKeyFocus('ArrowDown', { vertical: true });
  });

  it('moves focus to the previous item for the vertical variant', () => {
    expectPreviousKeyFocus(
      { next: 'ArrowDown', previous: 'ArrowUp' },
      { vertical: true }
    );
  });
});

const toolbarButtonComponentName = ToolbarButton.displayName;
describe(toolbarButtonComponentName, () => {
  test(ToolbarButton);

  toBeAccessible(
    'has no accessibility violations for the caret variant',
    <ToolbarButton {...props} caret />,
    ToolbarButton.displayName
  );

  it('renders the caret variant', async () => {
    const { rerender } = await render(
      <ToolbarButton data-testid={dataTestId} />
    );

    const className = `${toolbarButtonClass}--caret`;
    expect(getByTestId(dataTestId)).not.toHaveClass(className);

    await rerender(<ToolbarButton data-testid={dataTestId} caret />);
    expect(getByTestId(dataTestId)).toHaveClass(className);
  });

  it("renders the 'right' tooltip position for the vertical variant by default", async () => {
    const { rerender } = await render(
      <ToolbarButton data-testid={dataTestId} />
    );

    const className = `${carbonPrefix}--popover--right`;
    expect(getByTestId(dataTestId).parentElement).not.toHaveClass(className, {
      exact: false,
    });

    await rerender(
      <Toolbar vertical>
        <ToolbarButton data-testid={dataTestId} />
      </Toolbar>
    );
    expect(getByTestId(dataTestId).parentElement).toHaveClass(className, {
      exact: false,
    });
  });
});

describe(ToolbarGroup.displayName, () => {
  test(ToolbarGroup);
});
