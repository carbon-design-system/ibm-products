/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useState, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Launch } from '@carbon/icons-react';
import uuidv4 from '../../global/js/utils/uuidv4';
import NavItemLink from './NavItemLink';

// The block part of our conventional BEM class names (blockClass__E--M).
export const blockClass = `${pkg.prefix}--nav-item`;
const componentName = 'NavItem';

/**
 * Navigation item component.
 */
export let NavItem = ({
  activeHref,
  children,
  className,
  current,
  disabled,
  element,
  handleItemSelect,
  href,
  id,
  label = '',
  link = true,
  onClick,
  tabIndex = 0,
  // Collect any other property values passed in.
  ...other
}) => {
  const [currentItem, setCurrentItem] = useState(current);

  const internalId = useRef(uuidv4());
  const instanceId = `${blockClass}__${internalId.current}`;
  const navItemId = id || instanceId;

  const isAbsoluteLink = new RegExp('^([a-z]+://|//)', 'i');
  const externalLink =
    isAbsoluteLink.test(href) && href.indexOf(window.location.host) === -1;
  const linkClassName = `${blockClass}__link`;

  const classNames = cx(blockClass, className, {
    [`${blockClass}--active`]:
      (currentItem !== null && currentItem === navItemId) ||
      (activeHref !== undefined && activeHref === href && !externalLink),
    [`${blockClass}--disabled`]: disabled,
  });

  const handleDisabled = (action, defaultValue = null) =>
    !disabled ? action : defaultValue;
  const navItemTabIndex = handleDisabled(tabIndex, -1);

  const externalLinkProps = externalLink && {
    rel: 'noopener noreferrer',
    target: '_blank',
  };

  useEffect(() => {
    if (current !== currentItem) {
      setCurrentItem(current);
    }
  }, [current, currentItem]);

  return (
    <li
      className={classNames}
      label={label}
      onClick={(event) => handleDisabled(onClick(event, href))}
      onKeyPress={(event) => handleDisabled(onClick(event, href))}
      role="menuitem"
      {...getDevtoolsProps(componentName)}
    >
      {link ? (
        <NavItemLink
          id={navItemId}
          className={cx(linkClassName, {
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
};

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
NavItem.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
NavItem.propTypes = {
  /**
   * Hypertext reference for active page.
   */
  activeHref: PropTypes.string,
  /**
   * Provide the contents of the Nav.
   */
  children: PropTypes.node.isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Currently selected item.
   */
  current: PropTypes.string,
  /**
   * Whether the item is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.
   */
  element: PropTypes.elementType,

  /**
   * Click handler of an item.
   */
  handleItemSelect: PropTypes.func,

  /**
   * The href of the nav item.
   */
  href: PropTypes.string,

  /**
   * Identifier.
   */
  id: PropTypes.string,

  /**
   * Label of an item.
   */
  label: PropTypes.string,

  /**
   * Whether the item is a link.
   */
  link: PropTypes.bool,

  /**
   * Click handler of an item.
   */
  onClick: PropTypes.func,

  /**
   * `tabindex` of an item.
   */
  tabIndex: PropTypes.number,
};

export default NavItem;
