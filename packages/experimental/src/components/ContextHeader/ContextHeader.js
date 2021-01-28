//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import { pkgPrefix } from '../../global/js/settings';

const ContextHeader = ({ namespace, name, task }) => {
  return (
    <div className={`${pkgPrefix}-context-header`}>
      <span className={`${pkgPrefix}-context-header--task`}>{task}</span>
      <span className={`${pkgPrefix}-context-header--name`}>{name}</span>
      <span className={`${pkgPrefix}-context-header--separator`}>|</span>
      <span className={`${pkgPrefix}-context-header--namespace`}>
        {namespace}
      </span>
    </div>
  );
};

ContextHeader.displayName = 'ContextHeader';

ContextHeader.propTypes = {
  name: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
};

export default ContextHeader;
