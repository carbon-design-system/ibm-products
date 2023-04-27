/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import CustomizeColumnsTearsheet from './CustomizeColumnsTearsheet';

const TearsheetWrapper = ({ instance }) => {
  const {
    onSaveColumnPrefs,
    isTearsheetOpen,
    setIsTearsheetOpen,
    labels,
    ...rest
  } = instance.customizeColumnsProps;
  return (
    <CustomizeColumnsTearsheet
      {...rest}
      {...labels}
      isOpen={isTearsheetOpen}
      isTableSortable={instance?.isTableSortable}
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
};

TearsheetWrapper.propTypes = {
  instance: PropTypes.object.isRequired,
};

export default TearsheetWrapper;
