/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { settings } from 'carbon-components';
import React, { createRef } from 'react';

import { Toolbar, ToolbarButton, ToolbarGroup } from '../..';
import uuidv4 from '../../global/js/utils/uuidv4';

import { blockClass, componentName } from './Toolbar';
import { blockClass as toolbarButtonClass } from './ToolbarButton';

const { getByTestId, getByText } = screen;
const { keyboard, tab } = userEvent;

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

  const component = instance(componentName);

  function _array(length) {
    return new Array(length).fill();
  }

  function getText(id) {
    return `${component}--${id}`;
  }

  function key(text) {
    keyboard(`{Arrow${text}}`);
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

    key('Right');

    tab();
    tab();

    expect(getByText(getText(1))).toHaveFocus();
  });

  function expectNextKeyFocus(text, props) {
    const length = 5;
    setupFocus(length, props);

    _array(length - 1).forEach((_value, index) => {
      key(text);

      expect(getByText(getText(index + 1))).toHaveFocus();
    });
  }

  it('moves focus to the next item', () => {
    expectNextKeyFocus('Right');
  });

  function expectPreviousKeyFocus({ next, previous }, props) {
    const children = 5;
    setupFocus(children, props);

    const length = children - 1;

    _array(length)
      .map(() => key(next))
      .forEach((_value, index) => {
        key(previous);

        expect(getByText(getText(length - (index + 1)))).toHaveFocus();
      });
  }

  it('moves focus to the previous item', () => {
    expectPreviousKeyFocus({ next: 'Right', previous: 'Left' });
  });

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

  it('moves focus to the next item for the vertical variant', () => {
    expectNextKeyFocus('Down', { vertical: true });
  });

  it('moves focus to the previous item for the vertical variant', () => {
    expectPreviousKeyFocus(
      { next: 'Down', previous: 'Up' },
      { vertical: true }
    );
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
