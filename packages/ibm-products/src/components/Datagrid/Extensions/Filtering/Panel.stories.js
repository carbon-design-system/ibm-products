/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Tooltip } from '@carbon/react';
import {
  Datagrid,
  useDatagrid,
  useFiltering,
  useColumnCenterAlign,
} from '../../index';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';

import { ARG_TYPES } from '../../utils/getArgTypes';
import { getBatchActions } from '../../Datagrid.stories';
import { DatagridActions } from '../../utils/DatagridActions';
import { handleFilterTagLabelText } from '../../utils/handleFilterTagLabelText';
import { DocsPage } from './Filtering.docs-page';
import { StatusIcon } from '../../../StatusIcon';
import { action } from '@storybook/addon-actions';
import { makeData } from '../../utils/makeData';
import { pkg } from '../../../../settings';
import styles from '../../_storybook-styles.scss';

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/Panel`,
  component: Datagrid,
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
  excludeStories: ['FilteringUsage', 'filterProps'],
};

// This is to show off the View all button in checkboxes
const dummyCheckboxes = Array(25)
  .fill(null)
  .map((_, index) => ({
    id: `${index}`,
    labelText: `Dummy checkbox ${index + 1}`,
    value: 'dummy-checkbox',
    disabled: true,
  }));

export const FilteringUsage = ({ defaultGridProps }) => {
  const {
    gridDescription,
    gridTitle,
    useDenseHeader,
    filterProps,
    emptyStateTitle,
    emptyStateDescription,
    initialState,
    data: initialData,
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
      width: 160,
      centerAlignedColumn: true,
      Cell: ({ cell: { value } }) => {
        const iconProps = {
          size: 'sm',
          theme: 'light',
          kind: value,
          iconDescription: value,
        };
        return (
          <Tooltip label={iconProps.iconDescription}>
            <button type="button" className="sb--tooltip-trigger">
              <StatusIcon {...iconProps} />
            </button>
          </Tooltip>
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
  const [data] = useState(initialData ?? makeData(20));

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
    useFiltering,
    useColumnCenterAlign
  );

  // Warnings are ordinarily silenced in storybook, add this to test
  pkg._silenceWarnings(false);
  // Enable feature flag for `useFiltering` hook
  pkg.feature['Datagrid.useFiltering'] = true;
  pkg._silenceWarnings(true);

  return <Datagrid datagridState={datagridState} />;
};

const FilteringTemplateWrapper = ({ ...args }) => {
  return <FilteringUsage defaultGridProps={{ ...args }} />;
};

export const filterProps = {
  variation: 'panel',
  updateMethod: 'batch',
  primaryActionLabel: 'Apply',
  secondaryActionLabel: 'Cancel',
  panelIconDescription: `Open filters`,
  closeIconDescription: 'Close panel',
  sections: [
    {
      categoryTitle: 'Category title',
      hasAccordion: true,
      filters: [
        {
          filterLabel: 'Joined',
          filter: {
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
        },
        {
          filterLabel: 'Status',
          filter: {
            type: 'dropdown',
            column: 'status',
            props: {
              Dropdown: {
                id: 'marital-status-dropdown',
                ['aria-label']: 'Marital status dropdown',
                items: ['relationship', 'complicated', 'single'],
                label: 'Marital status',
                titleText: 'Marital status',
              },
            },
          },
        },
      ],
    },
    {
      categoryTitle: 'Category title',
      filters: [
        {
          filterLabel: 'Role',
          filter: {
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
        },
        {
          filterLabel: 'Visits',
          filter: {
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
        },
        {
          filterLabel: 'Password strength',
          filter: {
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
        },
      ],
    },
  ],
  onPanelOpen: action('onPanelOpen'),
  onPanelClose: action('onPanelClose'),
  panelTitle: 'Filter',
  renderLabel: (key, value) => handleFilterTagLabelText(key, value),
  renderDateLabel: (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    return `${startDateObj.toLocaleDateString()} - ${endDateObj.toLocaleDateString()}`;
  },
};

export const PanelBatch = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel with batch update',
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
    filterProps,
  },
});

export const PanelInstant = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel with instant update',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    featureFlags: ['Datagrid.useFiltering'],
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'panel',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      panelIconDescription: `Open filters`,
      closeIconDescription: 'Close panel',
      sections: [
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Joined',
              filter: {
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
            },
            {
              filterLabel: 'Status',
              filter: {
                type: 'dropdown',
                column: 'status',
                props: {
                  Dropdown: {
                    id: 'marital-status-dropdown',
                    ['aria-label']: 'Marital status dropdown',
                    items: ['relationship', 'complicated', 'single'],
                    label: 'Marital status',
                    titleText: 'Marital status',
                  },
                },
              },
            },
          ],
        },
        {
          categoryTitle: 'Category title',
          filters: [
            {
              filterLabel: 'Role',
              filter: {
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
            },
            {
              filterLabel: 'Visits',
              filter: {
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
            },
            {
              filterLabel: 'Password strength',
              filter: {
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
            },
          ],
        },
      ],
      onPanelOpen: action('onPanelOpen'),
      onPanelClose: action('onPanelClose'),
      panelTitle: 'Filter',
    },
  },
});

export const PanelWithInitialFilters = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel with initial filters',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    featureFlags: ['Datagrid.useFiltering'],
    initialState: {
      filters: [
        {
          id: 'role',
          type: 'radio',
          value: 'developer',
        },
        {
          id: 'passwordStrength',
          type: 'checkbox',
          value: [
            {
              id: 'normal',
              labelText: 'Normal',
              value: 'normal',
              selected: false,
            },
            {
              id: 'minor-warning',
              labelText: 'Minor warning',
              value: 'minor-warning',
              selected: true,
            },
            {
              id: 'critical',
              labelText: 'Critical',
              value: 'critical',
              selected: false,
            },
          ],
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
      variation: 'panel',
      updateMethod: 'batch',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      panelIconDescription: `Open filters`,
      closeIconDescription: 'Close panel',
      sections: [
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Joined',
              filter: {
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
            },
            {
              filterLabel: 'Status',
              filter: {
                type: 'dropdown',
                column: 'status',
                props: {
                  Dropdown: {
                    id: 'marital-status-dropdown',
                    ['aria-label']: 'Marital status dropdown',
                    items: ['relationship', 'complicated', 'single'],
                    label: 'Marital status',
                    titleText: 'Marital status',
                  },
                },
              },
            },
          ],
        },
        {
          categoryTitle: 'Category title',
          filters: [
            {
              filterLabel: 'Role',
              filter: {
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
            },
            {
              filterLabel: 'Visits',
              filter: {
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
            },
            {
              filterLabel: 'Password strength',
              filter: {
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
            },
          ],
        },
      ],
      onPanelOpen: action('onPanelOpen'),
      onPanelClose: action('onPanelClose'),
      panelTitle: 'Filter',
    },
  },
});

export const PanelOnlyAccordions = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel only accordions',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    featureFlags: ['Datagrid.useFiltering'],
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'panel',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      panelIconDescription: `Open filters`,
      closeIconDescription: 'Close panel',
      sections: [
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Joined',
              filter: {
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
            },
            {
              filterLabel: 'Status',
              filter: {
                type: 'dropdown',
                column: 'status',
                props: {
                  Dropdown: {
                    id: 'marital-status-dropdown',
                    ['aria-label']: 'Marital status dropdown',
                    items: ['relationship', 'complicated', 'single'],
                    label: 'Marital status',
                    titleText: 'Marital status',
                  },
                },
              },
            },
          ],
        },
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Role',
              filter: {
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
            },
            {
              filterLabel: 'Visits',
              filter: {
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
            },
            {
              filterLabel: 'Password strength',
              filter: {
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
            },
          ],
        },
      ],
      onPanelOpen: action('onPanelOpen'),
      onPanelClose: action('onPanelClose'),
      panelTitle: 'Filter',
    },
  },
});

export const PanelNoAccordions = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel no accordions',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    featureFlags: ['Datagrid.useFiltering'],
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'panel',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      panelIconDescription: `Open filters`,
      closeIconDescription: 'Close panel',
      sections: [
        {
          categoryTitle: 'Category title',
          hasAccordion: false,
          filters: [
            {
              filterLabel: 'Joined',
              filter: {
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
            },
            {
              filterLabel: 'Status',
              filter: {
                type: 'dropdown',
                column: 'status',
                props: {
                  Dropdown: {
                    id: 'marital-status-dropdown',
                    ['aria-label']: 'Marital status dropdown',
                    items: ['relationship', 'complicated', 'single'],
                    label: 'Marital status',
                    titleText: 'Marital status',
                  },
                },
              },
            },
          ],
        },
        {
          categoryTitle: 'Category title',
          hasAccordion: false,
          filters: [
            {
              filterLabel: 'Role',
              filter: {
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
            },
            {
              filterLabel: 'Visits',
              filter: {
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
            },
            {
              filterLabel: 'Password strength',
              filter: {
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
            },
          ],
        },
      ],
      onPanelOpen: action('onPanelOpen'),
      onPanelClose: action('onPanelClose'),
      panelTitle: 'Filter',
    },
  },
});

export const PanelNoData = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel no data (disabled)',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    featureFlags: ['Datagrid.useFiltering'],
    data: [],
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No data',
    emptyStateDescription: 'There is no data to show 🤠',
    filterProps: {
      variation: 'panel',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      panelIconDescription: `Open filters`,
      closeIconDescription: 'Close panel',
      sections: [
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Joined',
              filter: {
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
            },
            {
              filterLabel: 'Status',
              filter: {
                type: 'dropdown',
                column: 'status',
                props: {
                  Dropdown: {
                    id: 'marital-status-dropdown',
                    ['aria-label']: 'Marital status dropdown',
                    items: ['relationship', 'complicated', 'single'],
                    label: 'Marital status',
                    titleText: 'Marital status',
                  },
                },
              },
            },
          ],
        },
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Role',
              filter: {
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
            },
            {
              filterLabel: 'Visits',
              filter: {
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
            },
            {
              filterLabel: 'Password strength',
              filter: {
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
            },
          ],
        },
      ],
      onPanelOpen: action('onPanelOpen'),
      onPanelClose: action('onPanelClose'),
      panelTitle: 'Filter',
    },
  },
});

export const PanelManyCheckboxes = prepareStory(FilteringTemplateWrapper, {
  storyName: 'Filter panel with many checkboxes',
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    filterProps: ARG_TYPES.filterProps,
  },
  args: {
    featureFlags: ['Datagrid.useFiltering'],
    gridTitle: 'Data table title',
    gridDescription: 'Additional information if needed',
    useDenseHeader: false,
    emptyStateTitle: 'No filters match',
    emptyStateDescription:
      'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
    filterProps: {
      variation: 'panel',
      updateMethod: 'instant',
      primaryActionLabel: 'Apply',
      secondaryActionLabel: 'Cancel',
      panelIconDescription: `Open filters`,
      closeIconDescription: 'Close panel',
      sections: [
        {
          categoryTitle: 'Category title',
          hasAccordion: true,
          filters: [
            {
              filterLabel: 'Joined',
              filter: {
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
            },
            {
              filterLabel: 'Status',
              filter: {
                type: 'dropdown',
                column: 'status',
                props: {
                  Dropdown: {
                    id: 'marital-status-dropdown',
                    ['aria-label']: 'Marital status dropdown',
                    items: ['relationship', 'complicated', 'single'],
                    label: 'Marital status',
                    titleText: 'Marital status',
                  },
                },
              },
            },
          ],
        },
        {
          categoryTitle: 'Category title',
          filters: [
            {
              filterLabel: 'Role',
              filter: {
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
            },
            {
              filterLabel: 'Visits',
              filter: {
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
            },
            {
              filterLabel: 'Password strength',
              filter: {
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
                    ...dummyCheckboxes,
                  ],
                },
              },
            },
          ],
        },
      ],
      onPanelOpen: action('onPanelOpen'),
      onPanelClose: action('onPanelClose'),
      panelTitle: 'Filter',
    },
  },
});
