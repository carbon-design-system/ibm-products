import React, { useCallback } from 'react';
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
            <div className={`${pkgPrefix}-web-terminal__bar-icon-container`}>
              <Help className={`${pkgPrefix}-web-terminal__bar-icon`} />
              <ul className={`${pkgPrefix}-web-terminal__bar-icon-dropdown`}>
                {documentationLinks.map(
                  ({ label, onClick, href = null, openInNewTab = true }) => (
                    <li
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
            </div>
          )}
        </div>
        <div
          className={`${pkgPrefix}-web-terminal__bar-icon-container`}
          onClick={closeTerminal}>
          <Close
            className={`${pkgPrefix}-web-terminal__bar-icon ${pkgPrefix}-web-terminal__bar-icon--close`}
          />
        </div>
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
  open: PropTypes.bool.isRequired,
  closeTerminal: PropTypes.func.isRequired,
  documentationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
      openInNewTab: PropTypes.bool,
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default WebTerminal;
