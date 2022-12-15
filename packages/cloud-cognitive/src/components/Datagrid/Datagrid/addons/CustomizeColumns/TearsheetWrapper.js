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
import CustomizeColumnsTearsheet from './CustomizeColumnsTearsheet';

const TearsheetWrapper = ({ instance }) => {
  const { onSaveColumnPrefs, isTearsheetOpen, setIsTearsheetOpen, labels, ...rest } =
    instance.customizeColumnsProps;
  if (isTearsheetOpen) {
    return (
      <CustomizeColumnsTearsheet
        {...rest}
        {...labels}
        isOpen={isTearsheetOpen}
        setIsTearsheetOpen={setIsTearsheetOpen}
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

TearsheetWrapper.propTypes = {
  instance: PropTypes.object.isRequired,
};

export default TearsheetWrapper;
