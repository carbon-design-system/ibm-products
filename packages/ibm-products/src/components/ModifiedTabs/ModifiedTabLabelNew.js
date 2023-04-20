//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import { Add20 } from '@carbon/icons-react';

export const ModifiedTabLabelNew = ({ label }) => {
  return (
    <span className="modified-tabs__tab-new">
      <span className="modified-tabs__tab-new__label">{label}</span>
      <span className="modified-tabs__tab-new-img">
        <Add20 />
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
