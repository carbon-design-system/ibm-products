/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { ActionBar, ActionBarItem } from '..';
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

const TestActionBar = ({ width, children }) => {
  return (
    <div style={{ width, height: 40 }}>
      <ActionBar data-test="fish" className="fish">
        {children}
      </ActionBar>
    </div>
  );
};

describe(ActionBar.name, () => {
  it('Renders an action bar', () => {
    // const { rerender, container } =
    render(
      <TestActionBar width={1150}>{ActionBarItems}</TestActionBar>
    );

    expect(
      screen.getByText(/Action 01/) && screen.getByText(/Action 10/)
    ).toBeTruthy();
  });

  it ('Renders an action bar with overflow items')
    render(<TestActionBar width={200}>{ActionBarItems}</TestActionBar>);

    console.log('container 2nd:', container.outerHTML);
  });
});
