/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { ActionBar, ActionBarItem } from '.';
import { Lightning16, Bee24 } from '@carbon/icons-react';

const ActionBarItems = (
  <>
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 01" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 02" />
    <ActionBarItem renderIcon={Bee24} iconDescription="Action 03" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 04" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 05" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 06" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 07" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 08" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 09" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 10" />
  </>
);

Object.defineProperties(window.HTMLElement.prototype, {
  offsetWidth: {
    get: function () {
      return parseInt(this.style.width, 10) || this.parentNode.offsetWidth;
    },
  },
  offsetHeight: {
    get: function () {
      return parseInt(this.style.height, 10) || this.parentNode.offsetHeight;
    },
  },
});

// eslint-disable-next-line react/prop-types
const TestActionBar = ({ width, children, ...rest }) => {
  return (
    <div style={{ width, height: 40 }}>
      <ActionBar className="fish" {...rest}>
        {children}
      </ActionBar>
    </div>
  );
};

describe(ActionBar.displayName, () => {
  const { click } = fireEvent;

  it('Renders an action bar', () => {
    render(<TestActionBar width={1150}>{ActionBarItems}</TestActionBar>);

    screen.getByText(/Action 01/);
    screen.getByText(/Action 10/);
  });

  it('Renders an action bar with overflow items', () => {
    const overflowAriaLabel = 'Overflow aria label';
    // not enough room so should see an overflow.
    render(
      <TestActionBar width={200} overflowAriaLabel={overflowAriaLabel}>
        {ActionBarItems}
      </TestActionBar>
    );

    expect(screen.queryByText(/Action 10/)).toBeNull();

    // Click overflow button and check for last action
    const ofBtn = screen.getByLabelText(overflowAriaLabel);
    click(ofBtn);
    screen.getByText(/Action 10/);
  });

  it('Renders an action bar with max items set', () => {
    render(
      <TestActionBar width={1150} maxVisibleActionBarItems={2}>
        {ActionBarItems}
      </TestActionBar>
    );

    screen.getByText(/Action 01/);
    screen.getByText(/Action 02/);

    expect(screen.queryByText(/Action 03/)).toBeNull();
  });
});
