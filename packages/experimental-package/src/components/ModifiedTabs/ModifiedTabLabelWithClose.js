import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'carbon-components-react';
import { Close16 } from '@carbon/icons-react';

export const ModifiedTabLabelWithClose = ({ label, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <span className="modified-tab-label">
      <span className="modified-tab-label__label">{label}</span>
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

ModifiedTabLabelWithClose.propTypes = {
  /**
   * Label content of the tab
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional onClose handler
   */
  onClose: PropTypes.func,
};

ModifiedTabLabelWithClose.defaultProps = {
  label: '',
  onClose: undefined,
};
