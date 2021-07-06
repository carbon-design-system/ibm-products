/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ActionBar, ActionBarItem } from '.';
import { Lightning16, Bee16 } from '@carbon/icons-react';
import { mockHTMLElement } from '../../global/js/utils/test-helper';

const actions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
  key: `key is this num ${num}`,
  renderIcon: num % 2 ? Lightning16 : Bee16,
  iconDescription: `Action ${num.toString().padStart(2, '0')}`,
  onClick: () => {},
}));

const ActionBarChildren = (
  <>
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 01" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 02" />
    <ActionBarItem renderIcon={Bee16} iconDescription="Action 03" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 04" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 05" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 06" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 07" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 08" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 09" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 10" />
  </>
);

// eslint-disable-next-line react/prop-types
const TestActionBar = ({ width, children = null, ...rest }) => {
  return (
    <div style={{ width, height: 40 }}>
      <ActionBar {...rest}>{children}</ActionBar>
    </div>
  );
};

describe(ActionBar.displayName, () => {
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

    render(<TestActionBar width={1150}>{ActionBarChildren}</TestActionBar>);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 10/);

    expect(warn).toBeCalledWith(
      'The prop `children` of `ActionBar` has been deprecated and will soon be removed. See documentation on the `actions` prop.'
    );

    warn.mockRestore(); // Remove mock
  });

  it('Renders an action bar', () => {
    render(<TestActionBar width={1150} actions={actions} />);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 10/);
  });

  it('Renders an action bar with overflow items', () => {
    const overflowAriaLabel = 'Overflow aria label';
    // not enough room so should see an overflow.
    render(
      <TestActionBar
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
    render(<TestActionBar width={1150} maxVisible={2} actions={actions} />);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 02/);

    expect(screen.queryByText(/Action 03/)).toBeNull();
  });
});
