//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { idAttribute } from '../../../component_helpers/IDHelper';
import {
  SideNav,
  SideNavItems,
  SideNavFooter,
  Content,
} from 'carbon-components-react';
import { idePrefix } from '../../../globals/js/settings';
export default class IdeNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render(
    {
      expanded,
      onToggle,
      showFirstLevel,
      navigationLinks,
      footerDescription,
      ariaAttributes,
      children,
      className,
      contentClassName,
      ...others
    } = this.props
  ) {
    let sideNavClasses = `${idePrefix}-navigation--nav-theme ${idePrefix}-navigation--nav-overrides ${
      !showFirstLevel ? `${idePrefix}-navigation__hide-nav` : ''
    }`;
    let contentClasses = `${idePrefix}-navigation--content ${
      !showFirstLevel ? `${idePrefix}-navigation--content__hide-nav` : ''
    } ${contentClassName}`;

    let toggleFunction =
      typeof onToggle === 'function' && expanded !== undefined
        ? onToggle
        : this.toggle;
    let toggleState = expanded !== undefined ? expanded : this.state.expanded;

    return (
      <div
        {...idAttribute('IdeNavigation')}
        className={`${className} ${idePrefix}-navigation`}
        {...others}
      >
        <SideNav
          {...idAttribute('IdeNavigation--left-nav')}
          {...ariaAttributes}
          className={sideNavClasses}
          isRail
          expanded={toggleState}
          addFocusListeners={false}
          addMouseListeners={false}
        >
          <SideNavItems
            {...idAttribute('IdeNavigation--left-nav-item-container')}
          >
            {navigationLinks}
          </SideNavItems>
          <SideNavFooter
            {...idAttribute('IdeNavigation--left-nav-toggle')}
            className={`${idePrefix}-navigation--toggle`}
            onToggle={toggleFunction}
            expanded={toggleState}
            assistiveText={footerDescription}
          />
        </SideNav>
        <Content
          {...idAttribute('IdeNavigation--content')}
          className={contentClasses}
        >
          {children}
        </Content>
      </div>
    );
  }
}

IdeNavigation.propTypes = {
  /** Required aria attributes. One or the other must be provided */
  ariaAttributes: PropTypes.oneOfType([
    PropTypes.shape({
      /** aria labelledby markup which is applied to the navigation, referencing the label which describe the nav. Must be provided */
      'aria-labelledby': PropTypes.string.isRequired
    }),
    PropTypes.shape({
      /** aria label which is applied to the navigation. Must be provided, and be pre translated */
      'aria-label': PropTypes.string.isRequired
    })
  ]),
  /** children. This should be/represent the current page selected by the user */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  /** contentClassName - optional styling to be applied to the the container which renders any children */
  contentClassName: PropTypes.string,
  /** expanded. Specify this to make this a controlled component. Use onToggle to be notified of expansion changes */
  expanded: PropTypes.bool,
  /** footerDescription - required. Provide a pre translated string to describe what the expansion control does */
  footerDescription: PropTypes.string.isRequired,
  /** navigation links. An array of Carbon SideNav items, being menus, links, text etc*/
  navigationLinks: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** onToggle. Called when a controlled component to notify the parent of a change in expansion state  */
  onToggle: PropTypes.func,
  /** showFirstLevel. Defaults to true. Set this to false to only show the content, and not the left navigation */
  showFirstLevel: PropTypes.bool,
  /** className - optional styling to be applied to the component */
};

IdeNavigation.defaultProps = {
  showFirstLevel: true,
  className: '',
  contentClassName: '',
  footerDescription:
    'Click here to expand or collapse the navigation - change this for a pre translated string!',
  navigationLinks: [],
  ariaAttributes: {
    'aria-label': 'Example Aria Labeled'
  },
};
