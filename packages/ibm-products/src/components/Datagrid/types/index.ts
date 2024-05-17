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

export type Filter =
  | ({
      column?: string;
    } & {
      type: 'date';
      props: {
        DatePicker?: DatePickerProps;
        DatePickerInput: DatePickerInputProps;
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

export interface FilterProps {
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
}

export interface DataGridState {
  withVirtualScroll?: boolean;
  DatagridPagination?: () => void;
  isFetching?: boolean;
  tableId?: string;
  filterProps?: FilterProps;
  className?: string;
  columns?: any;
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
  state?: any;
  dispatch?: any;
  allColumns?: any;
  rows?: any;
  initialRows?: any;
  flatRows?: any;
  rowsById?: any;
  headerGroups?: any;
  headers?: any;
  flatHeaders?: any;
  visibleColumns?: any;
  totalColumnsMinWidth?: any;
  totalColumnsWidth?: any;
  totalColumnsMaxWidth?: any;
  allColumnsHidden?: any;
  toggleHideColumn?: any;
  setHiddenColumns?: any;
  toggleHideAllColumns?: any;
  getToggleHideAllColumnsProps?: any;
  HeaderRow?: any;
  resetResizing?: any;
  rowSize?: any;
  rowSizeDropdownProps?: any;
  RowSizeDropdown?: any;
  preFilteredRows?: any;
  preFilteredFlatRows?: any;
  preFilteredRowsById?: any;
  filteredRows?: any;
  filteredFlatRows?: any;
  filteredRowsById?: any;
  setFilter?: any;
  setAllFilters?: any;
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
  page?: any;
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
  getTableProps?: any;
  getTableBodyProps?: any;
}
