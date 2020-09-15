import React from 'react';
import PropTypes from 'prop-types';

import { Close16 } from '@carbon/icons-react';

export const ModifiedTabLabelWithClose = ({ label, onClose }) => {
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
        type="button">
        <Close16 />
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
};

ModifiedTabLabelWithClose.defaultProps = {
  label: '',
  onClose: undefined,
};
