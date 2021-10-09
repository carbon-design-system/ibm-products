/**
 * @file Header list item tests.
 * @copyright IBM Security 2018
 */

import { shallow } from 'enzyme';
import React from 'react';

import { children, className } from '../../../_mocks_';

import HeaderListItem from '../';

describe('HeaderListItem', () => {
  describe('Rendering', () => {
    const hasPopup = false;
    const isExpanded = false;

    const headerListItem = shallow(
      <HeaderListItem
        className={className}
        hasPopup={hasPopup}
        isExpanded={isExpanded}>
        {children}
      </HeaderListItem>
    );

    it('renders children', () => {
      expect(headerListItem.children().exists()).toEqual(true);
    });

    it('renders extra classes', () => {
      expect(headerListItem.hasClass(className)).toEqual(true);
    });
  });
});
