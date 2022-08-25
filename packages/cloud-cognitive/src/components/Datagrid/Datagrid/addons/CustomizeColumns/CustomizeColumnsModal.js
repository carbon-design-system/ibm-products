/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'carbon-components-react';
import { isColumnVisible } from './common';
import Columns from './Columns';
import Actions from './Actions';
import { pkg } from '../../../../../settings';
import { useCallback } from 'react';

const blockClass = `${pkg.prefix}--datagrid`;

const CustomizeColumnsModal = ({
  isOpen,
  setIsModalOpen,
  onSaveColumnPrefs,
  columnDefinitions,
  originalColumnDefinitions,
  customizeModalHeadingLabel = 'Customize Columns',
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
  const [columnObjects, setColumnObjects] = useState(
    columnDefinitions
      // hide the columns without Header, e.g the sticky actions, spacer
      .filter((colDef) => !!colDef.Header.props)
      // only sort the hidden column to the end when modal reopen
      .sort((defA, defB) => {
        const isVisibleA = isColumnVisible(defA);
        const isVisibleB = isColumnVisible(defB);
        if (isVisibleA && !isVisibleB) {
          return -1;
        }
        if (!isVisibleA && isVisibleB) {
          return 1;
        }
        return 0;
      })
  );

  const [isDirty, setIsDirty] = useState(false);

  const onRequestClose = () => {
    setIsModalOpen(false);
  };
  const onRequestSubmit = () => {
    setIsModalOpen(false);
    const updatedColumns = columnObjects.map((colDef) => ({
      id: colDef.id,
      isVisible: colDef.isVisible,
    }));
    onSaveColumnPrefs(updatedColumns);
  };

  const onCheckboxCheck = (col, value) => {
    const changedDefinitions = columnObjects.map((definition) => {
      if (
        (Array.isArray(col) && col.indexOf(definition) != null) ||
        definition.id === col.id
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
    setVisibleColumnsCount(getVisibleColumnsCount());
    setTotalColumns(columnObjects.length);
  }, [getVisibleColumnsCount, columnObjects.length]);

  return (
    <Modal
      className={`${blockClass}__customize-columns-modal`}
      open={isOpen}
      modalHeading={`${customizeModalHeadingLabel} (${visibleColumnsCount}/${totalColumns})`}
      primaryButtonText={primaryButtonTextLabel}
      secondaryButtonText={secondaryButtonTextLabel}
      selectorPrimaryFocus={`.${blockClass}__customize-columns-column-list--focus`}
      primaryButtonDisabled={!isDirty}
      onRequestClose={onRequestClose}
      onRequestSubmit={onRequestSubmit}
      size="sm"
      hasForm
    >
      <div className={`${blockClass}__customize-columns-instructions`}>
        {instructionsLabel}
      </div>
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
        />
      )}
    </Modal>
  );
};

CustomizeColumnsModal.propTypes = {
  assistiveTextDisabledInstructionsLabel: PropTypes.string,
  assistiveTextInstructionsLabel: PropTypes.string,
  columnDefinitions: PropTypes.array.isRequired,
  customizeModalHeadingLabel: PropTypes.string,
  findColumnPlaceholderLabel: PropTypes.string,
  instructionsLabel: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onSaveColumnPrefs: PropTypes.func.isRequired,
  originalColumnDefinitions: PropTypes.array.isRequired,
  primaryButtonTextLabel: PropTypes.string,
  resetToDefaultLabel: PropTypes.string,
  secondaryButtonTextLabel: PropTypes.string,
  selectAllLabel: PropTypes.string,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CustomizeColumnsModal;
