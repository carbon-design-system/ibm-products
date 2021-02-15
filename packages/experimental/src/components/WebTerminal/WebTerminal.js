import React, { useCallback, useMemo } from 'react';
import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkgPrefix } from '../../global/js/settings';

const WebTerminal = ({
  open,
  closeTerminal,
  documentationLinks,
  children,
  className,
}) => {
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

  return open ? (
    <div
      className={cx([
        `${pkgPrefix}-web-terminal`,
        {
          [`${pkgPrefix}-web-terminal--open`]: open,
          [`${pkgPrefix}-web-terminal--closed`]: !open,
        },
        className,
      ])}>
      <header className={`${pkgPrefix}-web-terminal__bar`}>
        <div className={`${pkgPrefix}-web-terminal__actions`}>
          {showDocumentationLinks && (
            <button
              type="button"
              className={`${pkgPrefix}-web-terminal__bar-icon-container`}>
              <Help className={`${pkgPrefix}-web-terminal__bar-icon`} />
              <ul className={`${pkgPrefix}-web-terminal__bar-icon-dropdown`}>
                {documentationLinks.map(
                  ({ label, onClick, href = null, openInNewTab = true }) => (
                    <li
                      key={label}
                      className={`${pkgPrefix}-web-terminal__bar-icon-dropdown-item`}>
                      <a
                        className={`${pkgPrefix}-web-terminal__bar-icon-dropdown-link`}
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
          className={`${pkgPrefix}-web-terminal__bar-icon-container`}
          onClick={closeTerminal}
          onKeyDown={closeTerminal}>
          <Close
            className={`${pkgPrefix}-web-terminal__bar-icon ${pkgPrefix}-web-terminal__bar-icon--close`}
          />
        </button>
      </header>
      <div className={`${pkgPrefix}-web-terminal__body`}>{children}</div>
    </div>
  ) : null;
};

WebTerminal.defaultProps = {
  documentationLinks: [],
  className: '',
};

WebTerminal.propTypes = {
  /**
   * Boolean that determines if the web terminal is opened or closed
   */
  open: PropTypes.bool.isRequired,
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
};

export default WebTerminal;
