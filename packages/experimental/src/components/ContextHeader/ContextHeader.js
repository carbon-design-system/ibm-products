//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import { expPrefix } from '../../global/js/settings';

const ContextHeader = ({
  namespace,
  name,
  task,
}) => {
  return (
    <div className={`${expPrefix}-context-header`}>
      <span className={`${expPrefix}-context-header--task`}>{task}</span>
      <span className={`${expPrefix}-context-header--name`}>{name}</span>
      <span className={`${expPrefix}-context-header--separator`}>|</span>
      <span className={`${expPrefix}-context-header--namespace`}>{namespace}</span>
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
