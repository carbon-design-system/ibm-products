export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Theme = 'light' | 'dark';
export interface Column {
  Header?: string;
  accessor?: string | (() => void);
  Cell?: () => void; // optional cell formatter
  rowHeight?: number;
  rowHeaderWidth?: number;
  width?: number;
}

export interface ActiveCellCoordinates {
  row?: number | string;
  column?: number | string;
}

export interface PrevState {
  activeCellCoordinates?: ActiveCellCoordinates;
  isEditing?: boolean;
  selectionAreaData?: object[];
  clickAndHoldActive?: boolean;
  rowHeight?: number;
  cellSize?: Size;
}

export interface Point {
  column?: number;
}

export interface ItemType {
  matcher?: string;
  point1?: Point;
  point2?: Point;
}
