/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Axis type for resizer components
 */
export type ResizerAxis = 'x' | 'y';

/**
 * Position coordinates
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Resize event detail for resize-start event
 */
export interface ResizeStartDetail {
  axis: ResizerAxis;
  startPosition: Position;
}

/**
 * Resize event detail for resize-drag event
 */
export interface ResizeDragDetail {
  axis: ResizerAxis;
  delta: number;
  position: Position;
}

/**
 * Resize event detail for resize-end event
 */
export interface ResizeEndDetail {
  axis: ResizerAxis;
  delta: number;
  position: Position;
}

/**
 * Custom events emitted by resizer components
 */
export interface ResizerEventMap {
  'resize-start': CustomEvent<ResizeStartDetail>;
  'resize-drag': CustomEvent<ResizeDragDetail>;
  'resize-end': CustomEvent<ResizeEndDetail>;
  'resize-reset': CustomEvent<void>;
}
