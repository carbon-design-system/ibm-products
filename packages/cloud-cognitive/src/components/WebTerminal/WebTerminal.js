/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useCallback, useMemo, useState, useEffect } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const componentName = 'WebTerminal';
const blockClass = `${pkg.prefix}--web-terminal`;

export let WebTerminal = React.forwardRef(
  (
    {
      children,
      className,
      closeTerminal,
      documentationLinks,
      open,
      actions = [],
      ...rest
    },
    ref
  ) => {
    const [shouldRender, setRender] = useState(open);

    /**
     * Triggers whenever the user clicks on an item in the help dropdown
     */
    const onDocumentationLinkClick = useCallback((event, onClick) => {
      // Runs the function provided by the user if it exists
      if (typeof onClick === 'function') {
        // Passes the event object incase the developer wants to event.preventDefault() the link redirect
        onClick(event);
      }
    }, []);

    const showDocumentationLinks = useMemo(
      () => documentationLinks.length > 0,
      [documentationLinks]
    );

    useEffect(() => {
      if (open) {
        setRender(true);
      }
    }, [open]);

    const onAnimationEnd = () => {
      if (!open) {
        setRender(false);
      }
    };

    return shouldRender ? (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        ref={ref}
        className={cx([
          blockClass,
          {
            [`${blockClass}--open`]: open,
            [`${blockClass}--closed`]: !open,
            [className]: className,
          },
        ])}
        style={{
          animation: `${
            open ? 'webTerminalEntrance 250ms' : 'webTerminalExit 250ms'
          }`,
        }}
        onAnimationEnd={onAnimationEnd}>
        <header className={`${blockClass}__bar`}>
          <div className={`${blockClass}__actions`}>
            {showDocumentationLinks && (
              <Button
                hasIconOnly
                kind="ghost"
                type="button"
                iconDescription="Show documentation links"
                renderIcon={Help}
                className={`${blockClass}__bar-icon-container`}>
                <ul className={`${blockClass}__bar-icon-dropdown`}>
                  {documentationLinks.map(
                    ({ label, onClick, href = null, openInNewTab = true }) => (
                      <li
                        key={label}
                        className={`${blockClass}__bar-icon-dropdown-item`}>
                        <a
                          className={`${blockClass}__bar-icon-dropdown-link`}
                          onClick={(event) =>
                            onDocumentationLinkClick(event, onClick)
                          }
                          href={href}
                          target={openInNewTab ? '_blank' : null}
                          rel="noreferrer noopener">
                          {label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </Button>
            )}
            {actions.map(({ renderIcon, onClick, iconDescription }) => (
              <Button
                key={iconDescription}
                hasIconOnly
                renderIcon={renderIcon}
                onClick={onClick}
                iconDescription={iconDescription}
                kind="ghost"
              />
            ))}
          </div>
          <Button
            hasIconOnly
            renderIcon={Close}
            kind="ghost"
            iconDescription="Close terminal"
            onClick={closeTerminal}
          />
        </header>
        <div className={`${blockClass}__body`}>{children}</div>
      </div>
    ) : null;
  }
);

// Return a placeholder if not released and not enabled by feature flag
WebTerminal = pkg.checkComponentEnabled(WebTerminal, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
WebTerminal.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
WebTerminal.propTypes = {
  /**
   * Provide your own terminal component as children to show up in the web terminal
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      renderIcon: PropTypes.object.isRequired,
      onClick: PropTypes.func.isRequired,
      iconDescription: PropTypes.string.isRequired,
    })
  ),

  /**
   * Provide your own terminal component as children to show up in the web terminal
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /**
   * Custom classname for additional styling of the web terminal
   */
  className: PropTypes.string,

  /**
   * Function that should set the open prop to false
   */
  closeTerminal: PropTypes.func.isRequired,

  /**
   * Array of objects for each documentation link
   */
  documentationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
      openInNewTab: PropTypes.bool,
    })
  ),

  /**
   * Boolean that determines if the web terminal is opened or closed
   */
  open: PropTypes.bool.isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
WebTerminal.defaultProps = {
  actions: [],
  documentationLinks: [],
  className: '',
};
