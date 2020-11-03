//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { SideNavLink, SideNavMenu } from 'carbon-components-react';
import { idePrefix } from '../../../globals/js/settings';
import PropTypes from 'prop-types';

export const IdeSideNavLink = ({
  className = '',
  // eslint-disable-next-line
  children = <></>,
  ariaLabel = '',
  ...others
}) => (
  <SideNavLink
    {...others}
    className={`${idePrefix}-navigation--altHover-link ${className}`}
    // eslint-disable-next-line
    children={children}
    aria-label={ariaLabel}
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

IdeSideNavLink.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

IdeSideNavMenu.propTypes = {
  className: PropTypes.string,
};
