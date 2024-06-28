export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Theme = 'light' | 'dark';

export interface SpreadsheetColumn {
  rowHeight?: number;
  rowHeaderWidth?: number;
  width?: number;
}

export interface ActiveCellCoordinates {
  row?: number | string;
  column?: number | string;
}

export interface PrevState {
  cellEditorValue?: string;
  activeCellCoordinates?: ActiveCellCoordinates;
  isEditing?: boolean;
  selectionAreaData?: any[];
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
