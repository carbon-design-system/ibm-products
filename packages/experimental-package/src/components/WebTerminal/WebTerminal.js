import React, { useCallback, useState } from 'react';
import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import PropTypes from 'prop-types';

const WebTerminal = ({ open, closeTerminal, documentationLinks }) => {
  if (!open) {
    return null;
  }

  const onDocumentationLinkClick = useCallback((event, onClick) => {
    // Runs the function provided by the user if it exists
    if (typeof onClick === 'function') {
      // Passes the event object incase the user wants to event.preventDefault() the link redirect
      onClick(event);
    }
  }, []);

  return (
    <div className="web-terminal">
      <header className="web-terminal__bar">
        <div className="web-terminal__actions">
          <div className="web-terminal__bar-icon-container">
            <Help className="web-terminal__bar-icon" />
            <ul className="web-terminal__bar-icon-dropdown">
              {documentationLinks.map(
                ({ label, onClick, href = null, openInNewTab = true }) => (
                  <li className="web-terminal__bar-icon-dropdown-item">
                    <a
                      className="web-terminal__bar-icon-dropdown-link"
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
        </div>
        <div
          className="web-terminal__bar-icon-container"
          onClick={closeTerminal}>
          <Close className="web-terminal__bar-icon web-terminal__bar-icon--close" />
        </div>
      </header>
    </div>
  );
};

export default WebTerminal;
