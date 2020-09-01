//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import { Add16 } from '@carbon/icons-react';

export const ModifiedTabNew = ({ label, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <span className="modified-tab" onClick={handleClick}>
      <span className="modified-tab__label">{label}</span>
      <Add16 />
    </span>
  );
};

ModifiedTabNew.propTypes = {
  /**
   * Label content of the tab
   */
  label: PropTypes.string,
  /**
   * Optional onClick handler
   */
  onClick: PropTypes.func,
};

ModifiedTabNew.defaultProps = {
  label: '',
  onClick: undefined,
};
