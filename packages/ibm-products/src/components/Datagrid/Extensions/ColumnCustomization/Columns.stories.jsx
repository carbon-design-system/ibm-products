/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from '../../_storybook-styles.scss?inline';
import { DocsPage } from './ColumnCustomization.docs-page';
import Columns from '../../Datagrid/addons/CustomizeColumns/Columns';

export default {
  title: 'Deprecated/Datagrid/Datagrid/ColumnCustomization/Columns',
  component: Columns,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: { page: DocsPage },
    layout: 'fullscreen',
  },
  argTypes: {
    featureFlags: {
      table: {
        disable: true,
      },
    },
  },
};

const columns = [
  {
    id: 1,
    Header: 'Column 1',
  },
  {
    id: 2,
    Header: 'Column 2',
  },
  {
    id: 3,
    Header: 'Column 3',
  },
];

function noop() {}

export const Default = {
  args: {
    selectAllLabel: 'Select all',
    columns,
    filterString: '',
    getVisibleColumnsCount: () => 3,
    onSelectColumn: noop,
    setColumnsObject: noop,
  },
};
