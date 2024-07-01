/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {
  CustomizeColumnsTearsheetWrapper,
  ToggleButtonWrapper,
} from './Datagrid/addons/CustomizeColumns';
import { DataGridState } from './types';
import { Hooks, TableInstance } from 'react-table';

const useCustomizeColumns = (hooks: Hooks) => {
  const [isTearsheetOpen, setIsTearsheetOpen] = React.useState(false);
  hooks.useInstance.push((instance: TableInstance) => {
    const { customizeColumnsProps } = instance as DataGridState;
    const { labels } = customizeColumnsProps || {};
    Object.assign(instance, {
      customizeColumnsProps: {
        ...customizeColumnsProps,
        isTearsheetOpen,
        setIsTearsheetOpen,
      },
      CustomizeColumnsButton: (props) => (
        <ToggleButtonWrapper
          iconTooltipLabel={labels?.iconTooltipLabel}
          isTearsheetOpen={isTearsheetOpen}
          setIsTearsheetOpen={setIsTearsheetOpen}
          {...props}
        />
      ),
      CustomizeColumnsTearsheet: CustomizeColumnsTearsheetWrapper,
    });
  });
};

export default useCustomizeColumns;
