import React from 'react';
import PropTypes from 'prop-types';
import { Close, CloseFilled } from '@carbon/icons-react';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--modified-tabs`;
export const ModifiedTabLabelWithClose = ({
  unsavedContent,
  label,
  onClose,
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <span className={`${blockClass}__tab`}>
      <span className={`${blockClass}__tab-label`}>{label}</span>
      <button
        title="Close button"
        onClick={handleClose}
        className={`${blockClass}__tab-close`}
        type="button"
      >
        {unsavedContent ? <CloseFilled size={16} /> : <Close size={16} />}
      </button>
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
  /**
   * unsavedContent indicates tab contents have not been saved
   */
  unsavedContent: PropTypes.bool,
};
