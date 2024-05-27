import { MultiSelectProps } from '@carbon/react';
import { FormGroupProps } from '@carbon/react/lib/components/FormGroup/FormGroup';
import { RadioButtonProps } from '@carbon/react/lib/components/RadioButton/RadioButton';
import { RadioButtonGroupProps } from '@carbon/react/lib/components/RadioButtonGroup/RadioButtonGroup';
import { CheckboxProps } from '@carbon/react/lib/components/Checkbox';
import { NumberInputProps } from '@carbon/react/lib/components/NumberInput/NumberInput';

import { JSXElementConstructor, MutableRefObject, ReactNode } from 'react';
import {
  Filters,
  TableCommonProps,
  TableInstance,
  UseFiltersInstanceProps,
  UsePaginationInstanceProps,
  UseResizeColumnsState,
} from 'react-table';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export type DataGridFilter =
  | ({
      column?: string;
    } & {
      type: 'date';
      props: {
        // DatePickerProps
        DatePicker?: any;
        // DatePickerInputProps
        DatePickerInput?: any;
      };
    })
  | {
      type: 'number';
      props: {
        NumberInput?: NumberInputProps;
      };
    }
  | {
      type: 'checkbox';
      props: {
        FormGroup?: FormGroupProps;
        Checkbox?: CheckboxProps[];
      };
    }
  | {
      type: 'radio';
      props: {
        FormGroup?: FormGroupProps;
        RadioButton?: RadioButtonProps[];
        RadioButtonGroup?: RadioButtonGroupProps;
      };
    }
  | {
      type: 'multiSelect';
      props: {
        MultiSelect?: MultiSelectProps;
      };
    };

export interface ReactTableFiltersState {
  id: string;
  type: string;
  value: string;
}

interface Section {
  categoryTitle?: string;
  filters?: DataGridFilter[];
}

export interface FilterFlyoutProps {
  data?: any;
  filters?: DataGridFilter[];
  flyoutIconDescription?: string;
  onFlyoutClose?: () => void;
  onFlyoutOpen?: () => void;
  panelIconDescription?: string;
  primaryActionLabel?: string;
  reactTableFiltersState?: ReactTableFiltersState[];
  renderLabel?: () => void;
  secondaryActionLabel?: string;
  updateMethod?: string;
  variation?: string;
  panelTitle?: string;
  sections?: Section[];
  autoHideFilters: boolean;
}

export interface TableProps {
  className?: string;
  role?: string;
  style?: CSSStyleDeclaration;
}

interface DataGridTableState extends UseResizeColumnsState<any> {
  filters: Filters<DataGridFilter>;
}

export interface DataGridState
  extends TableCommonProps,
    UsePaginationInstanceProps<any>,
    Omit<TableInstance<any>, 'state'>,
    UseFiltersInstanceProps<any> {
  withVirtualScroll?: boolean;
  DatagridPagination?: JSXElementConstructor<any>;
  isFetching?: boolean;
  tableId?: string;
  filterProps?: FilterFlyoutProps;
  state: DataGridTableState;
  getFilterFlyoutProps?: () => FilterFlyoutProps;
  DatagridActions?: JSXElementConstructor<any>;
  CustomizeColumnsTearsheet?: JSXElementConstructor<any>;
  fullHeightDatagrid?: boolean;
  variableRowHeight?: boolean;
  useDenseHeader?: boolean;
  withInlineEdit?: boolean;
  verticalAlign?: string;
  gridTitle?: ReactNode;
  gridDescription?: ReactNode;
  gridRef?: MutableRefObject<HTMLDivElement>;
  DatagridBatchActions?: (args) => ReactNode;
  batchActions?: boolean;
  rowSize?: Size;
}
