//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import { Canary } from '../_Canary';
import { pkg } from '../../settings';
const componentName = 'ContextHeader';

export const ContextHeader = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({ namespace, name, task }) => {
      return (
        <div className={`${pkg.prefix}-context-header`}>
          <span className={`${pkg.prefix}-context-header--task`}>{task}</span>
          <span className={`${pkg.prefix}-context-header--name`}>{name}</span>
          <span className={`${pkg.prefix}-context-header--separator`}>|</span>
          <span className={`${pkg.prefix}-context-header--namespace`}>
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
ContextHeader.displayName = componentName;

export default ContextHeader;
