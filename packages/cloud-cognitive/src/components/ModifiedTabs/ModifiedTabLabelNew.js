//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '@carbon/icons-react';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--modified-tabs`;
export const ModifiedTabLabelNew = ({ label }) => {
  return (
    <span className={`${blockClass}__tab-new`}>
      <span className={`${blockClass}__tab-new__label`}>{label}</span>
      <span className={`${blockClass}__tab-new-img`}>
        <Add size={20} />
      </span>
    </span>
  );
};

ModifiedTabLabelNew.propTypes = {
  /**
   * Label content of the tab
   */
  label: PropTypes.string,
  /**
   * Optional onClick handler
   */
  onClick: PropTypes.func,
};
