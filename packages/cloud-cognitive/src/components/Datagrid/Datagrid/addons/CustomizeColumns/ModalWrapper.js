// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import CustomizeColumnsModal from './CustomizeColumnsModal';

const ModalWrapper = ({ instance }) => {
  const { onSaveColumnPrefs, isModalOpen, setIsModalOpen, labels, ...rest } =
    instance.customizeColumnsProps;
  if (isModalOpen) {
    return (
      <CustomizeColumnsModal
        {...rest}
        {...labels}
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        columnDefinitions={instance.allColumns}
        originalColumnDefinitions={instance.columns}
        onSaveColumnPrefs={(updatedColDefs) => {
          const hiddenIds = updatedColDefs
            .filter((colDef) => !colDef.isVisible)
            .map((colDef) => colDef.id);
          instance.setHiddenColumns(hiddenIds);
          if (typeof instance.setColumnOrder === 'function') {
            instance.setColumnOrder(updatedColDefs.map((colDef) => colDef.id));
          } else {
            // eslint-disable-next-line no-console
            console.warn(
              "Column order can not be updated. Did you forget to add 'useColumnOrder' in 'useDatagrid'"
            );
          }
          if (typeof onSaveColumnPrefs === 'function') {
            onSaveColumnPrefs(updatedColDefs);
          }
        }}
      />
    );
  }
  return null;
};

ModalWrapper.propTypes = {
  instance: PropTypes.object.isRequired,
};

export default ModalWrapper;
