import {
  MultiSelectSortingProps,
  FormGroupProps,
  RadioButtonProps,
  RadioButtonGroupProps,
  CheckboxProps,
  NumberInputProps,
  DatePickerProps,
  DatePickerInputProps,
} from '@carbon/type';
import { JSXElementConstructor, MutableRefObject, ReactNode } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg';

export type Filter =
  | ({
      column?: string;
    } & {
      type: 'date';
      props: {
        DatePicker?: DatePickerProps;
        DatePickerInput?: DatePickerInputProps;
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
        MultiSelect?: MultiSelectSortingProps;
      };
    };

export interface ReactTableFiltersState {
  id: string;
  type: string;
  value: string;
}

interface Section {
  categoryTitle?: string;
  filters?: Filter[];
}

export interface FilterFlyoutProps {
  data?: any;
  filters?: Filter[];
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
  // TODO: Change any
  autoHideFilters: any;
}

export interface Column {
  Header?: string;
  accessor?: () => void;
  sticky: 'left' | 'right';
  id?: string;
  width?: string;
  className?: string;
}

export interface TableProps {
  className?: string;
  role?: string;
  style?: CSSStyleDeclaration;
}

export interface DataGridState {
  withVirtualScroll?: boolean;
  DatagridPagination?: JSXElementConstructor<any>;
  isFetching?: boolean;
  tableId?: string;
  filterProps?: FilterFlyoutProps;
  className?: string;
  columns?: Column[];
  getTableProps?: () => TableProps;
  getFilterFlyoutProps?: () => FilterFlyoutProps;
  DatagridActions?: JSXElementConstructor<any>;
  CustomizeColumnsTearsheet?: JSXElementConstructor<any>;
  skeletonRowCount?: number;
  fullHeightDatagrid?: boolean;
  variableRowHeight?: boolean;
  useDenseHeader?: boolean;
  withInlineEdit?: boolean;
  verticalAlign?: string;
  gridTitle?: ReactNode;
  gridDescription?: ReactNode;
  totalColumnsWidth?: number;
  gridRef?: MutableRefObject<HTMLDivElement>;
  setAllFilters?: (...args) => void;
  getAllFilters?: () => void;
  DatagridBatchActions?: (args) => ReactNode;
  batchActions?: boolean;
  rowSize?: Size;
  // TODO: Change any
  page?: any;
  state?: any;
  rows?: any;
  data?: any;
  onColResizeEnd?: any;
  initialState?: any;
  defaultColumn?: any;
  getSubRows?: any;
  getRowId?: any;
  stateReducer?: any;
  useControlledState?: any;
  plugins?: any;
  getHooks?: any;
  dispatch?: any;
  allColumns?: any;
  initialRows?: any;
  flatRows?: any;
  rowsById?: any;
  headerGroups?: any;
  headers?: any;
  flatHeaders?: any;
  visibleColumns?: any;
  totalColumnsMinWidth?: any;
  totalColumnsMaxWidth?: any;
  allColumnsHidden?: any;
  toggleHideColumn?: any;
  setHiddenColumns?: any;
  toggleHideAllColumns?: any;
  getToggleHideAllColumnsProps?: any;
  HeaderRow?: any;
  resetResizing?: any;
  rowSizeDropdownProps?: any;
  RowSizeDropdown?: any;
  preFilteredRows?: any;
  preFilteredFlatRows?: any;
  preFilteredRowsById?: any;
  filteredRows?: any;
  filteredFlatRows?: any;
  filteredRowsById?: any;
  setFilter?: any;
  preGlobalFilteredRows?: any;
  preGlobalFilteredFlatRows?: any;
  preGlobalFilteredRowsById?: any;
  globalFilteredRows?: any;
  globalFilteredFlatRows?: any;
  globalFilteredRowsById?: any;
  setGlobalFilter?: any;
  disableGlobalFilter?: any;
  preSortedRows?: any;
  preSortedFlatRows?: any;
  sortedRows?: any;
  sortedFlatRows?: any;
  setSortBy?: any;
  toggleSortBy?: any;
  preExpandedRows?: any;
  expandedRows?: any;
  expandedDepth?: any;
  isAllRowsExpanded?: any;
  toggleRowExpanded?: any;
  toggleAllRowsExpanded?: any;
  getToggleAllRowsExpandedProps?: any;
  pageOptions?: any;
  pageCount?: any;
  canPreviousPage?: any;
  canNextPage?: any;
  gotoPage?: any;
  previousPage?: any;
  nextPage?: any;
  setPageSize?: any;
  selectedFlatRows?: any;
  isAllRowsSelected?: any;
  isAllPageRowsSelected?: any;
  toggleRowSelected?: any;
  toggleAllRowsSelected?: any;
  getToggleAllRowsSelectedProps?: any;
  getToggleAllPageRowsSelectedProps?: any;
  toggleAllPageRowsSelected?: any;
  footerGroups?: any;
  prepareRow?: any;
  getTableBodyProps?: any;
}
