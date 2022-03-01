//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { AddSelectList } from './AddSelectList';
const componentName = 'AddSelect';

export let AddSelectColumn = (props) => {
  const blockClass = `${pkg.prefix}--add-select__col`;
  return (
    <div className={blockClass}>
      <AddSelectList {...props} inColumn />
    </div>
  );
};

AddSelectColumn.displayName = componentName;
