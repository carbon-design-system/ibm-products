/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ActionBar, ActionBarItem } from '..';
import { Lightning16, Bee24 } from '@carbon/icons-react';

const ActionBarItems = (
  <>
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 1" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 2" />
    <ActionBarItem renderIcon={Bee24} iconDescription="Action 3" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 4" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 5" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 6" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 7" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 8" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 9" />
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

describe(ActionBar.name, () => {
  test('Renders an action bar', () => {
    render(
      <div style={{ width: 150, height: 40 }}>
        <ActionBar data-test="fish" className="fish">
          {ActionBarItems}
        </ActionBar>
      </div>
    );
    expect(
      screen.getByText(/Action 1/) && screen.getByText(/Action 10/)
    ).toBeTruthy();
  });
});
