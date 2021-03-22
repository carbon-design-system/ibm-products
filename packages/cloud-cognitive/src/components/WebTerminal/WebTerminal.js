import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { pkg } from '../../settings';
const componentName = 'WebTerminal';
const blockClass = `${pkg.prefix}-web-terminal`;

export let WebTerminal = ({
  open,
  closeTerminal,
  documentationLinks,
  children,
  className,
}) => {
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

  const showDocumentationLinks = useMemo(() => documentationLinks.length > 0, [
    documentationLinks,
  ]);

  useEffect(() => {
    if (open) setRender(true);
  }, [open]);

  const onAnimationEnd = () => {
    if (!open) setRender(false);
  };

  return (
    shouldRender && (
      <div
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
              <button
                type="button"
                className={`${blockClass}__bar-icon-container`}>
                <Help className={`${blockClass}__bar-icon`} />
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
              </button>
            )}
          </div>
          <button
            type="button"
            className={cx([
              `${blockClass}__bar-icon-container`,
              `${blockClass}__close-button`,
            ])}
            onClick={closeTerminal}
            onKeyDown={closeTerminal}>
            <Close
              className={`${blockClass}__bar-icon ${blockClass}__bar-icon--close`}
            />
          </button>
        </header>
        <div className={`${blockClass}__body`}>{children}</div>
      </div>
    )
  );
};

// Return a placeholder if not released and not enabled by feature flag
WebTerminal = pkg.checkComponentEnabled(WebTerminal, componentName);

WebTerminal.defaultProps = {
  documentationLinks: [],
  className: '',
};

WebTerminal.propTypes = {
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

WebTerminal.displayName = componentName;
