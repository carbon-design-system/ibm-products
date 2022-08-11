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
}) => {
  const [visibleColumns, setVisibleColumns] = useState('');
  const [totalColumns, setTotalColumns] = useState('');
  const [searchText, setSearchText] = useState('');
  const [columnObjects, setColumnsObject] = useState(
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
    //copy the modified column definition to columnObject
    const changedDefinitions = columnObjects.map((definition) => {
      if (definition.id === col.id) {
        definition.isVisible = value;
        return definition;
      }
      return definition;
    });
    setColumnsObject(changedDefinitions);
    setDirty();
  };

  const setDirty = () => {
    if (!isDirty) {
      setIsDirty(true);
    }
  };

  const getVisibleColumnsCount = useCallback(() => {
    let result = 0;

    columnObjects.forEach((col) => {
      if (col.isVisible) {
        result++;
      }
    });
    return result;
  }, [columnObjects]);

  const string = searchText.trim().toLowerCase();

  useEffect(() => {
    setVisibleColumns(getVisibleColumnsCount());
    setTotalColumns(columnObjects.length);
  }, [getVisibleColumnsCount, columnObjects.length]);

  return (
    <Modal
      className={`${blockClass}__customize-columns-modal`}
      open={isOpen}
      modalHeading={`${customizeModalHeadingLabel} (${visibleColumns}/${totalColumns})`}
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
          setColumnsObject(cols);
          setDirty();
        }}
        setSearchText={setSearchText}
      />
      {isOpen && (
        <Columns
          setVisibleColumns={setVisibleColumns}
          getVisibleColumnsCount={getVisibleColumnsCount}
          columns={columnObjects}
          filterString={string}
          onSelectColumn={onCheckboxCheck}
          setColumnsObject={(cols) => {
            setColumnsObject(cols);
            setDirty();
          }}
        />
      )}
    </Modal>
  );
};

CustomizeColumnsModal.propTypes = {
  columnDefinitions: PropTypes.array.isRequired,
  customizeModalHeadingLabel: PropTypes.string,
  instructionsLabel: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onSaveColumnPrefs: PropTypes.func.isRequired,
  originalColumnDefinitions: PropTypes.array.isRequired,
  primaryButtonTextLabel: PropTypes.string,
  secondaryButtonTextLabel: PropTypes.string,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CustomizeColumnsModal;
