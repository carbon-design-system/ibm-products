/**
 * @file Navigation item tests.
 * @copyright IBM Security 2019 - 2020
 */

import { shallow } from 'enzyme';
import React from 'react';

import { className, href, label } from '../../../_mocks_';

import { NavItem } from '../../../..';

const { fn } = jest;

describe('NavItem', () => {
  let navigationItem;
  const onClick = fn();

  beforeEach(() => {
    navigationItem = shallow(
      <NavItem className={className} href={href()} onClick={onClick}>
        {label}
      </NavItem>
    );
  });

  describe('Rendering', () => {
    it('renders correctly', () => {
      expect(navigationItem).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(navigationItem.render()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should invoke the `onClick` method when the navigation item is selected', () => {
      navigationItem.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
