// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import PropTypes from 'prop-types';
import { Search } from '@carbon/react';
import * as React from 'react';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const Actions = ({
  searchText,
  setSearchText,
  findColumnPlaceholderLabel = 'Find column',
}) => {
  return (
    <div className={`${blockClass}__customize-columns-modal--actions`}>
      <Search
        placeholder={findColumnPlaceholderLabel}
        value={searchText}
        size="sm"
        labelText={findColumnPlaceholderLabel}
        onChange={(e) => {
          // TODO: is it performant?
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

Actions.propTypes = {
  columns: PropTypes.array.isRequired,
  findColumnPlaceholderLabel: PropTypes.string,
  originalColumnDefinitions: PropTypes.array.isRequired,
  resetToDefaultLabel: PropTypes.string,
  searchText: PropTypes.string.isRequired,
  setColumnsObject: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default Actions;
