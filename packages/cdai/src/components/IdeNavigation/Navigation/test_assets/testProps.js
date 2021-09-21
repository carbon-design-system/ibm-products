import React from 'react';
import { Link32, Menu32 } from '@carbon/icons-react';
import { SideNavMenuItem } from 'carbon-components-react';
import { IdeSideNavLink, IdeSideNavMenu } from '../IdeNavigationItems.js';

export const sampleNavLinks = [
  <IdeSideNavLink key={'snlink1'} renderIcon={Link32} href="javascript:void()">
    Sample Link with Icon
  </IdeSideNavLink>,
  <IdeSideNavLink key={'snlink2'} href="javascript:void()">
    Sample Link
  </IdeSideNavLink>,
];

export const sampleNavMenus = [
  <IdeSideNavMenu key={'snmenu'} title="Sample menu">
    <SideNavMenuItem href="javascript:void(0)">Menu item one</SideNavMenuItem>
    <SideNavMenuItem href="javascript:void(0)">Menu item two</SideNavMenuItem>
    <SideNavMenuItem href="javascript:void(0)">Menu item three</SideNavMenuItem>
  </IdeSideNavMenu>,
  <IdeSideNavMenu
    key={'snmenu2'}
    title="Sample menu with icon"
    renderIcon={Menu32}
  >
    <SideNavMenuItem href="javascript:void(0)">Menu item one</SideNavMenuItem>
    <SideNavMenuItem href="javascript:void(0)">Menu item two</SideNavMenuItem>
    <SideNavMenuItem href="javascript:void(0)">Menu item three</SideNavMenuItem>
  </IdeSideNavMenu>,
];

export const navigationCoreProps = {
  showFirstLevel: true,
  ariaAttributes: {
    'aria-labelledby': '#myId',
    'aria-label': 'sample aria label to describe the nav',
  },
  footerDescription: 'Expand or collapse the navigation',
  navigationLinks: [].concat(sampleNavMenus).concat(sampleNavLinks),
};
