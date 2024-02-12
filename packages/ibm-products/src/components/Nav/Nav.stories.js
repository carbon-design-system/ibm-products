/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import Nav from './Nav';
import NavItem from './NavItem';
import NavList from './NavList';
import mdx from './Nav.mdx';

import styles from './_storybook-styles.scss';

// const navDisplayName = Nav.displayName;
// console.log(navDisplayName);

export default {
  title: getStoryTitle('Nav'),
  component: Nav,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <Nav heading="Nav example" label="Navigation">
        <NavList title="Nav list 1">
          <NavItem key="navitem_1-1" element="span" customprop="uniqueValue">
            Nav item 1-1 (with a custom element)
          </NavItem>
          <NavItem key="navitem_1-2" onClick={action('onClick')}>
            Nav item 1-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 2 expanded on page load" isExpandedOnPageload>
          <NavItem key="navitem_2-1" href="#navitem_2-1">
            Nav item 2-1
          </NavItem>
          <NavItem key="navitem_2-2" href="#navitem_2-2">
            Nav item 2-2
          </NavItem>
        </NavList>
        <NavList title="Nav list 3">
          <NavItem key="navitem_3-1" href="#navitem_3-1">
            Nav item 3-1
          </NavItem>
          <NavItem key="navitem_3-2" href="https://www.ibm.com/">
            Nav item that is an external link and wraps to a new line
          </NavItem>
        </NavList>
      </Nav>
    </div>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const nav = prepareStory(Template, {
  args: {
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Nav-args
    children: 'hello, world',
    label: 'test',
  },
});
