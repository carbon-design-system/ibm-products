// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { Reset16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { Button, Search } from 'carbon-components-react';
import * as React from 'react';
import keyBy from 'lodash/keyBy';
import { pkg } from '../../../../../settings';
import { isColumnVisible } from './common';

const blockClass = `${pkg.prefix}--datagrid`;

const Actions = ({
  searchText,
  columns,
  originalColumnDefinitions,
  setColumnsObject,
  setSearchText,
  findColumnPlaceholderLabel = 'Find column',
  resetToDefaultLabel = 'Reset to default',
}) => {
  return (
    <div
      className={`${blockClass}__customize-columns-modal--actions`}
      test-id={`${blockClass}__customize-columns-modal--actions`}
    >
      <Search
        placeholder={findColumnPlaceholderLabel}
        value={searchText}
        size="sm"
        labelText={findColumnPlaceholderLabel}
        onChange={(e) => {
          // TODO: is it performant?
          setSearchText(e.target.value);
        }}
        test-id={`${blockClass}__customize-columns-modal--search`}
      />
      <Button
        onClick={() => {
          const reset = resetToOriginal(columns, originalColumnDefinitions);
          setColumnsObject(reset);
        }}
        size="sm"
        kind="ghost"
        renderIcon={Reset16}
        test-id={`${blockClass}__customize-columns-modal--reset`}
      >
        {resetToDefaultLabel}
      </Button>
    </div>
  );
};

const resetToOriginal = (columnDefinitions, originalColumnDefinitions) => {
  const keyedDefs = keyBy(columnDefinitions, 'id');
  return originalColumnDefinitions.map((colDef) => ({
    ...keyedDefs[colDef.id],
    isVisible: isColumnVisible(colDef),
  }));
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
