//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { TableToolbarSearch } from 'carbon-components-react';
import { idePrefix } from '../../globals/js/settings';
import PropTypes from 'prop-types';

const IdeTableToolbarSearch = React.forwardRef(
  ({ className, ...otherProps }, ref) => {
    let searchClasses = `${idePrefix}-table-toolbar-search`;
    if (className) {
      searchClasses += ' ' + className;
    }

    return (
      <TableToolbarSearch
        ref={ref}
        searchContainerClass={searchClasses}
        {...otherProps}
      />
    );
  }
);

IdeTableToolbarSearch.propTypes = {
  /** custom class name */
  className: PropTypes.string,
};

export default IdeTableToolbarSearch;
