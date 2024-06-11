/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TearsheetNarrow } from '../../../../Tearsheet';
import Columns from './Columns';
import Actions from './Actions';
import { pkg } from '../../../../../settings';
import { useCallback } from 'react';

const blockClass = `${pkg.prefix}--datagrid`;

const CustomizeColumnsTearsheet = ({
  isOpen,
  setIsTearsheetOpen,
  onSaveColumnPrefs,
  columnDefinitions,
  originalColumnDefinitions,
  customizeTearsheetHeadingLabel = 'Customize columns',
  primaryButtonTextLabel = 'Save',
  secondaryButtonTextLabel = 'Cancel',
  instructionsLabel = 'Select columns to display them. Click and drag the box to reorder the columns. These specifications will be saved and persist if you leave and return to the data table.',
  findColumnPlaceholderLabel = 'Find column',
  resetToDefaultLabel = 'Reset to default',
  assistiveTextInstructionsLabel = 'Press space bar to toggle drag drop mode, use arrow keys to move selected elements.',
  assistiveTextDisabledInstructionsLabel = 'Reordering columns are disabled because they are filtered currently.',
  selectAllLabel = 'Column name',
}) => {
  const [visibleColumnsCount, setVisibleColumnsCount] = useState('');
  const [totalColumns, setTotalColumns] = useState('');
  const [searchText, setSearchText] = useState('');
  const [columnObjects, setColumnObjects] = useState(columnDefinitions);
  const [isDirty, setIsDirty] = useState(false);

  const onRequestClose = () => {
    setColumnObjects(columnDefinitions);
    setIsTearsheetOpen(false);
  };

  const onRequestSubmit = () => {
    setIsTearsheetOpen(false);
    const updatedColumns = columnObjects.map((colDef) => ({
      id: colDef.id,
      isVisible: colDef.isVisible,
    }));
    onSaveColumnPrefs(updatedColumns);
  };

  const onCheckboxCheck = (col, value) => {
    const changedDefinitions = columnObjects.map((definition) => {
      if (
        ((Array.isArray(col) && col.indexOf(definition) != -1) ||
          definition.id === col.id) &&
        definition.canFilter &&
        !definition.disabled
      ) {
        return { ...definition, isVisible: value };
      }
      return definition;
    });

    setColumnObjects(changedDefinitions);
    setDirty();
  };

  const setDirty = () => {
    if (!isDirty) {
      setIsDirty(true);
    }
  };

  const getVisibleColumnsCount = useCallback(() => {
    return columnObjects.filter((col) => col.isVisible).length;
  }, [columnObjects]);

  const string = searchText.trim().toLowerCase();

  useEffect(() => {
    const notFilterableCount = columnObjects.filter(
      (col) => !col.canFilter
    ).length;
    const actionCount = columnObjects.filter(
      (col) => col.id === 'actions'
    ).length;
    setVisibleColumnsCount(
      getVisibleColumnsCount() - notFilterableCount - actionCount
    );
    setTotalColumns(columnObjects.length - notFilterableCount - actionCount);
  }, [getVisibleColumnsCount, columnObjects]);

  return (
    <TearsheetNarrow
      className={`${blockClass}__customize-columns-tearsheet`}
      open={isOpen}
      title={`${customizeTearsheetHeadingLabel} (${visibleColumnsCount}/${totalColumns})`}
      description={instructionsLabel}
      actions={[
        {
          kind: 'secondary',
          label: secondaryButtonTextLabel,
          onClick: onRequestClose,
        },
        {
          kind: 'primary',
          label: primaryButtonTextLabel,
          onClick: onRequestSubmit,
          disabled: !isDirty,
        },
      ]}
    >
      <Actions
        columns={columnObjects}
        originalColumnDefinitions={originalColumnDefinitions}
        searchText={searchText}
        setColumnsObject={(cols) => {
          setColumnObjects(cols);
          setDirty();
        }}
        setSearchText={setSearchText}
        findColumnPlaceholderLabel={findColumnPlaceholderLabel}
        resetToDefaultLabel={resetToDefaultLabel}
      />
      {isOpen && (
        <Columns
          assistiveTextInstructionsLabel={assistiveTextInstructionsLabel}
          assistiveTextDisabledInstructionsLabel={
            assistiveTextDisabledInstructionsLabel
          }
          getVisibleColumnsCount={getVisibleColumnsCount}
          columns={columnObjects}
          filterString={string}
          onSelectColumn={onCheckboxCheck}
          setColumnsObject={(cols) => {
            setColumnObjects(cols);
            setDirty();
          }}
          selectAllLabel={selectAllLabel}
          customizeTearsheetHeadingLabel={customizeTearsheetHeadingLabel}
        />
      )}
    </TearsheetNarrow>
  );
};

CustomizeColumnsTearsheet.propTypes = {
  assistiveTextDisabledInstructionsLabel: PropTypes.string,
  assistiveTextInstructionsLabel: PropTypes.string,
  columnDefinitions: PropTypes.array.isRequired,
  customizeTearsheetHeadingLabel: PropTypes.string,
  findColumnPlaceholderLabel: PropTypes.string,
  instructionsLabel: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onSaveColumnPrefs: PropTypes.func.isRequired,
  originalColumnDefinitions: PropTypes.array.isRequired,
  primaryButtonTextLabel: PropTypes.string,
  resetToDefaultLabel: PropTypes.string,
  secondaryButtonTextLabel: PropTypes.string,
  selectAllLabel: PropTypes.string,
  setIsTearsheetOpen: PropTypes.func.isRequired,
};

export default CustomizeColumnsTearsheet;
