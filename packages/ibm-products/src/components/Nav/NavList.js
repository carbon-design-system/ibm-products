/**
 * @file Navigation list class.
 * @copyright IBM Security 2019 - 2021
 */

import React, { Component } from 'react';
import { ChevronDown } from '@carbon/icons-react';
import classnames from 'classnames';
import { bool, func, node, number, string } from 'prop-types';

// import { getComponentNamespace } from '../../../globals/namespace';

// import Icon from '../../Icon';
import NavItem, { blockClass as navItemBlockClass } from './NavItem';

// export const navListNamespace = getComponentNamespace('nav__list');
import { pkg } from '../../settings';

const componentName = 'NavList';
const blockClass = `${pkg.prefix}--nav-list`;

// export const NavList = ({
//   activeHref = '#',
//   children,
//   className = '',
//   icon = '',
//   id = '',
//   isExpandedOnPageload = false,
//   navigationItemTitle = '',
//   onItemClick = () => {},
//   onListClick = () => {},
//   tabIndex = 0,
//   title = '',
// }) => {
//   const [open, setOpen] = useState(isExpandedOnPageload);

// };

export default class NavList extends Component {
  constructor(props) {
    super(props);

    const { activeHref, children } = this.props;
    let { isExpandedOnPageload: open } = this.props;

    // Reads all children, filters out children without HREF attributes, and creates an array of HREF strings.
    if (!open) {
      const hrefs = React.Children.toArray(children)
        .filter(
          ({ props: childProps }) =>
            childProps.href && childProps.href.length > 0
        )
        .map(({ props: childProps }) => childProps.href);

      open = hrefs.includes(activeHref);
    }

    this.state = { open };

    this.buildNewItemChild = this.buildNewItemChild.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  /**
   * Creates a new child list item.
   * @param {NavItem} child The child list item to create.
   * @param {number} index The index of the child list item.
   * @returns {NavItem} The new child list item.
   */
  buildNewItemChild({ props }, index) {
    const { onItemClick, activeHref } = this.props;

    const { onClick } = props;

    return (
      <NavItem
        {...props}
        key={`${navItemBlockClass}--${index}`}
        onClick={(event, href) => {
          onItemClick(event, href);

          if (onClick) {
            onClick(event);
          }
        }}
        activeHref={activeHref}
        tabIndex={this.state.open ? 0 : -1}
      />
    );
  }

  /**
   * Closes the list.
   */
  close() {
    if (this.state.open) {
      this.setState({ open: false });
    }
  }

  /**
   * Handles toggling the list.
   * @param {SyntheticEvent} event The event fired when the list is toggled.
   */
  toggle({ which, type }) {
    const { open } = this.state;
    const { id, onListClick } = this.props;

    // Enter (13) and spacebar (32).
    if (which === 13 || which === 32 || type === 'click') {
      if (!open) {
        onListClick(id);
      }
      this.setState({ open: !open });
    }
  }

  render() {
    const { className, children, icon, tabIndex, title, navigationItemTitle } =
      this.props;
    const { open } = this.state;

    const classNames = classnames(blockClass, className, {
      [`${blockClass}--expanded`]: open,
    });

    const newChildren = React.Children.map(children, (child, index) =>
      this.buildNewItemChild(child, index)
    );

    return (
      <li
        className={classNames}
        tabIndex={tabIndex}
        onClick={this.toggle}
        onKeyPress={this.toggle}
        role="menuitem"
      >
        <div className={`${blockClass}__link`}>
          {icon && (
            <img
              alt={navigationItemTitle}
              className={`${blockClass}__img`}
              src={icon}
            />
          )}
          <div className={`${blockClass}__content`}>{title}</div>
          <ChevronDown className={`${blockClass}__icon`} />
        </div>
        <ul
          aria-label={title}
          aria-hidden={!open}
          className={`${blockClass} ${blockClass}--nested`}
          role="menu"
        >
          {newChildren}
        </ul>
      </li>
    );
  }
}

NavList.defaultProps = {
  activeHref: '#',
  className: '',
  children: null,
  id: '',
  isExpandedOnPageload: false,
  onItemClick: () => {},
  onListClick: () => {},
  tabIndex: 0,
  title: '',
  icon: '',
  navigationItemTitle: '',
};

NavList.propTypes = {
  /** @type {string} Hypertext reference for active page. */
  activeHref: string,

  /** @type {Node} Child elements. */
  children: node,

  /** @type {string} Extra classes to add. */
  className: string,

  /** @type {string} Icon of a list. */
  icon: string,

  /** @type {string} ID of a list. */
  id: string,

  /** @type {boolean} State of a list. */
  isExpandedOnPageload: bool,

  /** @type {boolean} Title of nav. */
  navigationItemTitle: string,

  /** @type {Function} Click handler for an item. */
  onItemClick: func,

  /** @type {Function} Click handler for a list. */
  onListClick: func,

  /** @type {number} `tabindex` of an item. */
  tabIndex: number,

  /** @type {string} Label of the list. */
  title: string,
};

NavList.displayName = 'NavList';
