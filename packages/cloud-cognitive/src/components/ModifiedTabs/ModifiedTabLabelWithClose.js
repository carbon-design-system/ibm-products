import React from 'react';
import PropTypes from 'prop-types';

import { Close, CloseFilled } from '@carbon/icons-react';

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
  // const handleMousedown = (ev) => {
  //   console.log('mouse down');
  //   console.dir(ev);
  //   ev.stopPropagation();
  //   ev.cancelBubble = true;
  //   ev.preventDefault();
  // };
  return (
    <span className="modified-tabs__tab">
      <span className="modified-tabs__tab-label">{label}</span>
      {/* {onClose ? ( */}
      <button
        title="Close button"
        onClick={handleClose}
        // onMouseDown={handleMousedown}
        className="modified-tabs__tab-close"
        type="button"
      >
        {unsavedContent ? <CloseFilled size={16} /> : <Close size={16} />}
      </button>
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
  /**
   * unsavedContent indicates tab contents have not been saved
   */
  unsavedContent: PropTypes.bool,
};
