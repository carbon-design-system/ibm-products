//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { SideNavLink, SideNavMenu } from 'carbon-components-react';
import { idePrefix } from '../../../globals/js/settings';
// export Ide varients of the Carbon SideNav items - these add the large prop, and alt hover states

export const IdeSideNavLink = ({ className = '', ...others }) => (
  <SideNavLink
    {...others}
    className={`${idePrefix}-navigation--altHover-link ${className}`}
    large
  />
);

export const IdeSideNavMenu = ({ className = '', ...others }) => (
  <SideNavMenu
    {...others}
    className={`${idePrefix}-navigation--altHover-menu ${className}`}
    large
  />
);
