import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'carbon-components-react';
import { Close16 } from '@carbon/icons-react';

export const ModifiedTabLabel = ({ label, onClose }) => {
  const handleClose = (e) => {
    if (onClose) {
      const closed = onClose();
    }
  };
  return (
    <span className="modified-tab">
      <span className="modified-tab__label">{label}</span>
      {/* {onClose ? ( */}
      <Button
        hasIconOnly
        kind="ghost"
        renderIcon={Close16}
        size="small"
        tooltipAlignment="center"
        tooltipPosition="bottom"
        iconDescription="Close button"
        onClick={handleClose}
      />
      {/* ) : (
        ''
      )} */}
    </span>
  );
};

ModifiedTabLabel.propTypes = {
  /**
   * Label content of the tab
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional onClose handler
   */
  onClose: PropTypes.func,
};

ModifiedTabLabel.defaultProps = {
  label: '',
  onClose: undefined,
};
