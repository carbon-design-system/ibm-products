// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import * as React from 'react';
import {
  CustomizeColumnsTearsheetWrapper,
  ToggleButtonWrapper,
} from './Datagrid/addons/CustomizeColumns';

const useCustomizeColumns = (hooks) => {
  const [isTearsheetOpen, setIsTearsheetOpen] = React.useState(false);
  hooks.useInstance.push((instance) => {
    const { customizeColumnsProps } = instance;
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
