/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Double-tap detection constants
 */
export const DOUBLE_TAP = {
  /** Maximum time between taps to be considered a double-tap (ms) */
  MAX_TIME_MS: 300,
  /** Maximum distance between taps to be considered a double-tap (px) */
  MAX_DISTANCE_PX: 24,
  /** Haptic feedback duration for double-tap (ms) */
  VIBRATION_MS: 8,
} as const;

/**
 * Keyboard navigation constants
 */
export const KEYBOARD = {
  /** Default step size for arrow key navigation (px) */
  DEFAULT_STEP_PX: 5,
  /** Large step size when Shift key is held (px) */
  LARGE_STEP_PX: 25,
} as const;

/**
 * ARIA attribute constants
 */
export const ARIA = {
  /** Role for resizer handle */
  ROLE_SEPARATOR: 'separator',
  /** Live region politeness */
  LIVE_ASSERTIVE: 'assertive',
  /** Minimum value for slider */
  VALUE_MIN: '0',
  /** Maximum value for slider */
  VALUE_MAX: '100',
  /** Default value for slider */
  VALUE_DEFAULT: '50',
} as const;

/**
 * Component selector constants
 */
export const SELECTORS = {
  /** Resizer grid component tag */
  GRID: 'clabs-resizer-grid',
  /** Resizer panel component tag */
  PANEL: 'clabs-resizer-panel',
  /** Resizer handle component tag */
  HANDLE: 'clabs-resizer-handle',
  /** Resizer handle pivot component tag */
  PIVOT: 'clabs-resizer-handle-pivot',
} as const;

/**
 * Slot name constants
 */
export const SLOTS = {
  /** Left panel slot */
  LEFT: 'left',
  /** Right panel slot */
  RIGHT: 'right',
  /** Top panel slot */
  TOP: 'top',
  /** Bottom panel slot */
  BOTTOM: 'bottom',
  /** Horizontal handle slot */
  HANDLE_HORIZONTAL: 'handle-horizontal',
  /** Vertical handle slot */
  HANDLE_VERTICAL: 'handle-vertical',
  /** Pivot slot */
  PIVOT: 'pivot',
  /** Icon slot */
  ICON: 'icon',
} as const;

/**
 * Event name constants
 */
export const EVENTS = {
  /** Resize start event */
  RESIZE_START: 'resize-start',
  /** Resize drag event */
  RESIZE_DRAG: 'resize-drag',
  /** Resize end event */
  RESIZE_END: 'resize-end',
  /** Resize reset event */
  RESIZE_RESET: 'resize-reset',
} as const;
