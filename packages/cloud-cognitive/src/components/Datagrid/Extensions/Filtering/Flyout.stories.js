/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Add16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';
import { Datagrid, useDatagrid, useFiltering } from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { DatagridActions } from '../../utils/DatagridActions';
import { StatusIcon } from '../../../StatusIcon';
import { pkg } from '../../../../settings';

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/Filtering/Flyout`,
  component: Datagrid,
  parameters: {
    styles,
    docs: { page: mdx },
  },
  argTypes: {
    featureFlags: {
      table: {
        disable: true,
      },
    },
  },
};

const getBatchActions = () => {
  return [
    {
      label: 'Duplicate',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Add',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Select all',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
      type: 'select_all',
    },
    {
      label: 'Publish to catalog',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Download',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Delete',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
      hasDivider: true,
      kind: 'danger',
    },
  ];
};

const FilteringUsage = ({ defaultGridProps }) => {
  const {
    gridDescription,
    gridTitle,
    useDenseHeader,
    filterProps,
    emptyStateTitle,
    emptyStateDescription,
    initialState,
  } = defaultGridProps;

  const headers = [
    {
      Header: 'Row Index',
      accessor: (row, i) => i,
      sticky: 'left',
      id: 'rowIndex', // id is required when accessor is a function.
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      filter: 'number',
      width: 60,
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    // Shows the date filter example
    {
      Header: 'Joined',
      accessor: 'joined',
      filter: 'date',
      Cell: ({ cell: { value } }) => <span>{value.toLocaleDateString()}</span>,
    },
    // Shows the checkbox filter example
    {
      Header: 'Password strength',
      accessor: 'passwordStrength',
      filter: 'checkbox',
      Cell: ({ cell: { value } }) => {
        const iconProps = {
          size: 'sm',
          theme: 'light',
          kind: value,
          iconDescription: value,
        };

        return (
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <StatusIcon {...iconProps} />
            {iconProps.iconDescription}
          </span>
        );
      },
    },
    // Shows the checkbox filter example
    {
      Header: 'Role',
      accessor: 'role',
    },
  ];

  const columns = React.useMemo(() => headers, []);
  const [data] = useState(makeData(20));

  // Warnings are ordinarily silenced in storybook, add this to test
  pkg._silenceWarnings(false);
  // Enable feature flag for `useFiltering` hook
  pkg.feature['Datagrid.useFiltering'] = true;
  pkg._silenceWarnings(true);

  const datagridState = useDatagrid(
    {
      columns,
      data,
      initialState,
      DatagridActions,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
      filterProps,
      gridTitle,
      gridDescription,
      useDenseHeader,
      emptyStateTitle,
      emptyStateDescription,
    },
    useFiltering
  );

  return <Datagrid datagridState={datagridState} />;
};

const FilteringTemplateWrapper = ({ ...args }) => {
  return <FilteringUsage defaultGridProps={{ ...args }} />;
};

const filters = [
  {
    type: 'date',
    column: 'joined',
    props: {
      DatePicker: {
        datePickerType: 'range',
      },
      DatePickerInput: {
        start: {
          id: 'date-picker-input-id-start',
          placeholder: 'mm/dd/yyyy',
          labelText: 'Joined start date',
        },
        end: {
          id: 'date-picker-input-id-end',
          placeholder: 'mm/dd/yyyy',
          labelText: 'Joined end date',
        },
      },
    },
  },
  {
    type: 'number',
    column: 'visits',
    props: {
      NumberInput: {
        min: 0,
        id: 'visits-number-input',
        invalidText: 'A valid value is required',
        label: 'Visits',
        placeholder: 'Type a number amount of visits',
      },
    },
  },
  {
    type: 'checkbox',
    column: 'passwordStrength',
    props: {
      FormGroup: {
        legendText: 'Password strength',
      },
      Checkbox: [
        {
          id: 'normal',
          labelText: 'Normal',
          value: 'normal',
        },
        {
          id: 'minor-warning',
          labelText: 'Minor warning',
          value: 'minor-warning',
        },
        {
          id: 'critical',
          labelText: 'Critical',
          value: 'critical',
        },
      ],
    },
  },
  {
    type: 'radio',
    column: 'role',
    props: {
      FormGroup: {
        legendText: 'Role',
      },
      RadioButtonGroup: {
        orientation: 'vertical',
        legend: 'Role legend',
        name: 'role-radio-button-group',
      },
      RadioButton: [
        {
          id: 'developer',
          labelText: 'Developer',
          value: 'developer',
        },
        {
          id: 'designer',
          labelText: 'Designer',
          value: 'designer',
        },
        {
          id: 'researcher',
          labelText: 'Researcher',
          value: 'researcher',
        },
      ],
    },
  },
  {
    type: 'dropdown',
    column: 'status',
    props: {
      Dropdown: {
        id: 'marital-status-dropdown',
        ariaLabel: 'Marital status dropdown',
        items: ['relationship', 'complicated', 'single'],
        label: 'Marital status',
        titleText: 'Marital status',
      },
    },
  },
];

export const FlyoutBatch = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter flyout with batch update',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'flyout',
      updateMethod: 'batch',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      flyoutIconDescription: 'Open filters',
      onFlyoutOpen: action('onFlyoutOpen'),
      onFlyoutClose: action('onFlyoutClose'),
      filters,
    },
    featureFlags: ['Datagrid.useFiltering'],
  },
});

export const FlyoutInstant = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter flyout with instant update',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'flyout',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      flyoutIconDescription: 'Open filters',
      onFlyoutOpen: action('onFlyoutOpen'),
      onFlyoutClose: action('onFlyoutClose'),
      filters,
    },
  },
});

export const FlyoutWithInitialFilters = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter flyout with initial filters',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    initialState: {
      filters: [
        {
          id: 'role',
          type: 'radio',
          value: 'developer',
        },
      ],
    },
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'flyout',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      flyoutIconDescription: 'Open filters',
      onFlyoutOpen: action('onFlyoutOpen'),
      onFlyoutClose: action('onFlyoutClose'),
      filters,
    },
  },
});
