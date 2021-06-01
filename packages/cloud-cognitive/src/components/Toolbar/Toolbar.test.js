/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Toolbar, ToolbarItem } from '.';
import { Lightning16, Bee16 } from '@carbon/icons-react';
import { mockHTMLElement } from '../../global/js/utils/test-helper';

const actions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
  renderIcon: num % 2 ? Lightning16 : Bee16,
  iconDescription: `Action ${num.toString().padStart(2, '0')}`,
  onClick: () => {},
}));

const ToolbarChildren = (
  <>
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 01" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 02" />
    <ToolbarItem renderIcon={Bee16} iconDescription="Action 03" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 04" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 05" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 06" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 07" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 08" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 09" />
    <ToolbarItem renderIcon={Lightning16} iconDescription="Action 10" />
  </>
);

// eslint-disable-next-line react/prop-types
const TestToolbar = ({ width, children = null, ...rest }) => {
  return (
    <div style={{ width, height: 40 }}>
      <Toolbar {...rest}>{children}</Toolbar>
    </div>
  );
};

describe(Toolbar.displayName, () => {
  const { ResizeObserver } = window;
  let mockElement;

  beforeEach(() => {
    mockElement = mockHTMLElement({
      offsetWidth: {
        get: function () {
          return parseInt(this.style.width, 10) || this.parentNode.offsetWidth;
        },
      },
      offsetHeight: {
        get: function () {
          return (
            parseInt(this.style.height, 10) || this.parentNode.offsetHeight
          );
        },
      },
    });
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    mockElement.mockRestore();
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  const { click } = fireEvent;

  it('Works with deprecated children', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<TestToolbar width={1150}>{ToolbarChildren}</TestToolbar>);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 10/);

    expect(warn).toBeCalledWith(
      'The prop `children` of `Toolbar` has been deprecated and will soon be removed. See documentation on the `actions` prop.'
    );

    warn.mockRestore(); // Remove mock
  });

  it('Renders an action bar', () => {
    render(<TestToolbar width={1150} actions={actions} />);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 10/);
  });

  it('Renders an action bar with overflow items', () => {
    const overflowAriaLabel = 'Overflow aria label';
    // not enough room so should see an overflow.
    render(
      <TestToolbar
        width={200}
        overflowAriaLabel={overflowAriaLabel}
        actions={actions}
      />
    );

    expect(screen.queryByText(/Action 10/)).toBeNull();

    // Click overflow button and check for last action
    const ofBtn = screen.getByLabelText(overflowAriaLabel);
    click(ofBtn);
    screen.getByText(/Action 10/);
  });

  it('Renders an action bar with max items set', () => {
    render(<TestToolbar width={1150} maxVisible={2} actions={actions} />);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 02/);

    expect(screen.queryByText(/Action 03/)).toBeNull();
  });
});
