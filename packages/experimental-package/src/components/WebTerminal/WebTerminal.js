import React from 'react';
import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import PropTypes from 'prop-types';

const WebTerminal = ({ open, closeTerminal }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="web-terminal">
      <header className="web-terminal__bar">
        <div className="web-terminal__actions">
          <Help className="web-terminal__bar-icon" />
        </div>
        <div className="web-terminal__close-container">
          <Close onClick={closeTerminal} className="web-terminal__bar-icon" />
        </div>
      </header>
    </div>
  );
};

export default WebTerminal;
