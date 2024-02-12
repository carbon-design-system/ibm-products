/**
 * @file Navigation item class.
 * @copyright IBM Security 2019 - 2021
 */

import { Launch } from '@carbon/icons-react';
// import setupGetInstanceId from 'carbon-components-react/es/tools/setupGetInstanceId';
import classnames from 'classnames';
import { bool, elementType, func, node, number, string } from 'prop-types';
import uuidv4 from '../../global/js/utils/uuidv4';
import React, { Component, useRef } from 'react';

// import Icon from '../../Icon';
import NavItemLink from './NavItemLink';

// import { getComponentNamespace } from '../../../globals/namespace';

// const getInstanceId = setupGetInstanceId();

// export const namespace = getComponentNamespace('nav__list__item');
import { pkg } from '../../settings';

const componentName = 'NavItem';
export const blockClass = `${pkg.prefix}--nav-item`;

/**
 * Navigation item component.
 */
export default class NavItem extends Component {
  static propTypes = {
    /** @type {string} Hypertext reference for active page. */
    activeHref: string,

    /** @type {Node} Children. */
    children: node,

    /** @type {string} Extra classes to add. */
    className: string,

    /** @type {string} Currently selected item. */
    current: string,

    /** @type {bool} Whether the item is disabled. */
    disabled: bool,

    /** @type {elementType} The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`. */
    element: elementType,

    /** @type {Function} Click handler of an item. */
    handleItemSelect: func,

    /** @type {string} The href of the nav item. */
    href: string,

    /** @type {string} Identifier. */
    id: string,

    /** @type {string} Label of an item. */
    label: string,

    /** @type {bool} Whether the item is a link. */
    link: bool,

    /** @type {Function} Click handler of an item. */
    onClick: func,

    /** @type {number} `tabindex` of an item. */
    tabIndex: number,
  };

  static defaultProps = {
    activeHref: '#',
    children: null,
    className: '',
    current: null,
    disabled: false,
    element: 'a',
    handleItemSelect: null,
    href: undefined,
    id: null,
    label: 'hello', //TODO
    link: true,
    onClick: () => {},
    tabIndex: 0,
  };

  state = {
    current: this.props.current,
  };

  static getDerivedStateFromProps(props, state) {
    return props.current === state.current ? null : { current: props.current };
  }

  instanceId = `${blockClass}__${uuidv4()}`;

  render() {
    const {
      className,
      element,
      tabIndex,
      children,
      disabled,
      label,
      onClick,
      href,
      activeHref,
      current: _, // Throw away.
      handleItemSelect,
      link,
      id,
      ...other
    } = this.props;

    const isAbsoluteLink = new RegExp('^([a-z]+://|//)', 'i');
    const externalLink =
      isAbsoluteLink.test(href) && href.indexOf(window.location.host) === -1;

    const navItemId = id || this.instanceId;

    const classNames = classnames(blockClass, className, {
      [`${blockClass}--active`]:
        (this.state.current !== null && this.state.current === navItemId) ||
        (activeHref !== undefined && activeHref === href && !externalLink),
      [`${blockClass}--disabled`]: disabled,
    });

    const externalLinkProps = externalLink && {
      rel: 'noopener noreferrer',
      target: '_blank',
    };

    const handleDisabled = (action, defaultValue = null) =>
      !disabled ? action : defaultValue;

    const linkClassName = `${blockClass}__link`;

    const navItemTabIndex = handleDisabled(tabIndex, -1);

    // console.log('Children:', this.props.children);
    // console.log('ClassNames:', this.props.className);
    // console.log('Label:', this.props.label);
    // console.log('Link:', this.props.link);

    return (
      // <>NavItem here</>

      <li
        className={classNames}
        label={label}
        onClick={(event) => handleDisabled(onClick(event, href))}
        onKeyPress={(event) => handleDisabled(onClick(event, href))}
        role="menuitem"
      >
        {link ? (
          <NavItemLink
            id={navItemId}
            className={classnames(linkClassName, {
              [`${blockClass}__link--external`]: externalLink,
            })}
            element={element}
            href={href}
            tabIndex={navItemTabIndex}
            {...other}
            {...externalLinkProps}
          >
            {children}
            {externalLink && (
              <Launch className={`${blockClass}__link--external__icon`} />
            )}
          </NavItemLink>
        ) : (
          <div
            id={navItemId}
            className={linkClassName}
            onClick={handleDisabled(handleItemSelect)}
            onKeyPress={handleDisabled(handleItemSelect)}
            role="menuitem"
            tabIndex={navItemTabIndex}
          >
            {children}
          </div>
        )}
      </li>
    );
  }
}
