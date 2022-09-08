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
  CustomizeColumnsModalWrapper,
  ToggleButtonWrapper,
} from './Datagrid/addons/CustomizeColumns';

const useCustomizeColumns = (hooks) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  hooks.useInstance.push((instance) => {
    const { customizeColumnsProps } = instance;
    const { labels } = customizeColumnsProps || {};
    Object.assign(instance, {
      customizeColumnsProps: {
        ...customizeColumnsProps,
        isModalOpen,
        setIsModalOpen,
      },
      CustomizeColumnsButton: (props) => (
        <ToggleButtonWrapper
          iconTooltipLabel={labels?.iconTooltipLabel}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          {...props}
        />
      ),
      CustomizeColumnsModal: CustomizeColumnsModalWrapper,
    });
  });
};

export default useCustomizeColumns;
