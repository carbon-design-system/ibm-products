/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './resizer-handle.scss?lit';
import type { ResizerAxis, Position } from './types.js';
import {
  DOUBLE_TAP,
  KEYBOARD,
  ARIA,
  SELECTORS,
  SLOTS,
  EVENTS,
} from './constants.js';
import {
  determineAxis,
  calculateFlexRatio,
  formatSplitRatio,
  isWithinDistance,
  triggerHapticFeedback,
  createCustomEvent,
  getOrientationFromAxis,
  safeClosest,
  safeQuerySelectorAll,
} from './utils.js';

/**
 * Resizer handle component for resizing panels
 */
class ResizerHandleTemplate extends LitElement {
  static styles = styles;

  /**
   * Resize axis - determined automatically from slot or can be set explicitly
   */
  @property({ type: String, reflect: true })
  axis: ResizerAxis = 'y';

  /**
   * Internal state for tracking drag operations
   */
  @state()
  private _isDragging = false;

  private _startNode?: HTMLElement;
  private _endNode?: HTMLElement;
  private _grid?: HTMLElement;
  private _startSize = 0;
  private _endSize = 0;
  private _lastTapTime = 0;
  private _lastTapPosition: Position = { x: 0, y: 0 };

  // Event handler references for proper cleanup
  private _boundStartDrag?: (e: PointerEvent) => void;
  private _boundHandleKeyDown?: (e: KeyboardEvent) => void;
  private _boundMove?: (e: PointerEvent) => void;
  private _boundStop?: (e: PointerEvent) => void;

  /**
   * Mirror hover state from a related pivot interaction
   * @param {boolean} isHovered - Whether synthetic hover should be applied
   */
  setSyntheticHoverState(isHovered: boolean): void {
    this.toggleAttribute('data-synthetic-hover', isHovered);
    this.requestUpdate();
  }

  /**
   * Mirror active state from a related pivot interaction
   * @param {boolean} isActive - Whether synthetic active should be applied
   */
  setSyntheticActiveState(isActive: boolean): void {
    this.toggleAttribute('data-synthetic-active', isActive);
    this.requestUpdate();
  }

  /**
   * Update ARIA attributes based on current panel sizes
   */
  private _updateAriaAttributes(): void {
    if (!this._grid || !this._startNode || !this._endNode) {
      return;
    }

    try {
      const rectStart = this._startNode.getBoundingClientRect();
      const rectEnd = this._endNode.getBoundingClientRect();
      const isHorizontal = this.axis === 'x';

      const startSize = isHorizontal ? rectStart.width : rectStart.height;
      const endSize = isHorizontal ? rectEnd.width : rectEnd.height;
      const totalSize = startSize + endSize;

      if (totalSize > 0) {
        const percentage = Math.round((startSize / totalSize) * 100);
        this.setAttribute('aria-valuenow', percentage.toString());
        this.setAttribute('aria-valuemin', ARIA.VALUE_MIN);
        this.setAttribute('aria-valuemax', ARIA.VALUE_MAX);
        this.setAttribute('aria-valuetext', formatSplitRatio(percentage));
      }
    } catch (error) {
      console.error('Error updating ARIA attributes:', error);
    }
  }

  /**
   * Lifecycle callback when element is connected to the DOM
   */
  connectedCallback() {
    super.connectedCallback();

    try {
      this._initializeComponent();
      this._setupEventListeners();
    } catch (error) {
      console.error('Error initializing resizer handle:', error);
    }
  }

  /**
   * Lifecycle callback after first render
   */
  firstUpdated(): void {
    // Update ARIA attributes after initial render when dimensions are available
    // Only for grid-based usage (declarative mode)
    if (this._grid && this._startNode && this._endNode) {
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(() => {
        this._updateAriaAttributes();
      });
    }
  }

  /**
   * Lifecycle callback when element is disconnected from the DOM
   */
  disconnectedCallback() {
    this._cleanup();
    super.disconnectedCallback();
  }

  /**
   * Initialize component state and references
   */
  private _initializeComponent(): void {
    this._grid = safeClosest(this, SELECTORS.GRID) || undefined;

    // Determine axis from slot or cursor style
    const slot = this.getAttribute('slot');
    const cursor = getComputedStyle(this).cursor;
    this.axis = determineAxis(slot, cursor);

    // Only set up grid-based nodes if we have a grid
    if (this._grid) {
      const panels = safeQuerySelectorAll<HTMLElement>(
        this._grid,
        SELECTORS.PANEL
      );

      if (this.axis === 'x') {
        this._startNode = panels.find((p) => p.slot === SLOTS.LEFT);
        this._endNode = panels.find((p) => p.slot === SLOTS.RIGHT);
      } else {
        this._startNode = panels.find((p) => p.slot === SLOTS.TOP);
        this._endNode = panels.find((p) => p.slot === SLOTS.BOTTOM);
      }
    }

    this._setupAccessibility();
  }

  /**
   * Setup accessibility attributes
   */
  private _setupAccessibility(): void {
    this.setAttribute('role', ARIA.ROLE_SEPARATOR);
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-orientation', getOrientationFromAxis(this.axis));
    this.setAttribute('aria-live', ARIA.LIVE_ASSERTIVE);

    // For grid-based usage, set default ARIA values initially
    // For standalone usage, users must provide ARIA attributes themselves
    if (this._grid && this._startNode && this._endNode) {
      this.setAttribute('aria-valuenow', ARIA.VALUE_DEFAULT);
      this.setAttribute('aria-valuemin', ARIA.VALUE_MIN);
      this.setAttribute('aria-valuemax', ARIA.VALUE_MAX);
      this.setAttribute('aria-valuetext', formatSplitRatio(50));
    }
  }

  /**
   * Setup event listeners
   */
  private _setupEventListeners(): void {
    // Bind the internal handler, not the public API
    this._boundStartDrag = this._handlePointerDown.bind(this);
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this.addEventListener('pointerdown', this._boundStartDrag);
    this.addEventListener('keydown', this._boundHandleKeyDown);
  }

  /**
   * Cleanup event listeners and state
   */
  private _cleanup(): void {
    // Remove event listeners
    if (this._boundStartDrag) {
      this.removeEventListener('pointerdown', this._boundStartDrag);
      this._boundStartDrag = undefined;
    }
    if (this._boundHandleKeyDown) {
      this.removeEventListener('keydown', this._boundHandleKeyDown);
      this._boundHandleKeyDown = undefined;
    }

    // Remove window event listeners if they exist
    if (this._boundMove) {
      window.removeEventListener('pointermove', this._boundMove);
      this._boundMove = undefined;
    }
    if (this._boundStop) {
      window.removeEventListener('pointerup', this._boundStop);
      this._boundStop = undefined;
    }

    // Clean up attributes
    this.removeAttribute('data-synthetic-hover');
    this.removeAttribute('data-synthetic-active');

    // Reset state
    this._isDragging = false;
  }

  /**
   * Reset panel sizes to default
   * @param {MouseEvent} e - The mouse event
   */
  /**
   * Reset panel sizes to default
   * @param {MouseEvent} e - The mouse event
   */
  resetSizes = (e: MouseEvent): void => {
    e.preventDefault();

    try {
      // Emit reset event for standalone usage
      this.dispatchEvent(createCustomEvent(EVENTS.RESIZE_RESET));

      // Also reset grid if present (backward compatibility)
      if (this._grid) {
        this._grid.style.removeProperty('--start-element-size');
        this._grid.style.removeProperty('--end-element-size');

        // Update ARIA attributes after transition
        /** Handle transition end event */
        const handleTransitionEnd = () => {
          this._updateAriaAttributes();
          this._grid?.removeEventListener('transitionend', handleTransitionEnd);
        };

        this._grid.addEventListener('transitionend', handleTransitionEnd, {
          once: true,
        });
      }
    } catch (error) {
      console.error('Error resetting sizes:', error);
    }
  };

  /**
   * Get the pivot position based on parent panel slot (public API for pivot component)
   * @returns The pivot position
   */
  get pivot(): 'start' | 'end' | undefined {
    return this._pivot;
  }

  /**
   * Get the pivot position based on parent panel slot (internal implementation)
   * @returns The pivot position
   */
  private get _pivot(): 'start' | 'end' | undefined {
    const panel = safeClosest(this, SELECTORS.PANEL);
    if (!panel) {
      return undefined;
    }

    const slot = panel.getAttribute('slot');
    if (slot === SLOTS.LEFT) {
      return 'end';
    }
    if (slot === SLOTS.RIGHT) {
      return 'start';
    }
    return undefined;
  }

  /**
   * Detect double tap for mobile and desktop
   * @param {PointerEvent} e - The pointer event
   * @returns {boolean} True if double tap detected
   */
  /**
   * Detect double tap for mobile and desktop
   * @param {PointerEvent} e - The pointer event
   * @returns {boolean} True if double tap detected
   */
  private _detectDoubleTap(e: PointerEvent): boolean {
    const now = Date.now();
    const dt = now - this._lastTapTime;
    const currentPos: Position = { x: e.clientX, y: e.clientY };

    if (
      dt < DOUBLE_TAP.MAX_TIME_MS &&
      isWithinDistance(
        currentPos,
        this._lastTapPosition,
        DOUBLE_TAP.MAX_DISTANCE_PX
      )
    ) {
      triggerHapticFeedback(DOUBLE_TAP.VIBRATION_MS);
      this.resetSizes(e as any);
      this._lastTapTime = 0;
      return true;
    }

    this._lastTapTime = now;
    this._lastTapPosition = currentPos;

    return false;
  }

  /**
   * Start dragging the resizer handle (public API for pivot component)
   * @param {PointerEvent} e - The pointer event
   */
  startDrag = (e: PointerEvent): void => {
    this._handlePointerDown(e);
  };

  /**
   * Handle pointer down to start dragging (internal implementation)
   * @param {PointerEvent} e - The pointer event
   */
  private _handlePointerDown = (e: PointerEvent): void => {
    if (this._detectDoubleTap(e)) {
      return;
    }

    try {
      e.preventDefault();
      this._isDragging = true;
      this.setSyntheticActiveState(true);

      const startPosition: Position = { x: e.clientX, y: e.clientY };
      const startValue = this.axis === 'x' ? e.clientX : e.clientY;

      // Emit drag start event
      this.dispatchEvent(
        createCustomEvent(EVENTS.RESIZE_START, {
          axis: this.axis,
          startPosition,
        })
      );

      // For grid-based usage, get panel sizes
      if (this._grid && this._startNode && this._endNode) {
        const rectStart = this._startNode.getBoundingClientRect();
        const rectEnd = this._endNode.getBoundingClientRect();

        this._startSize =
          this.axis === 'x' ? rectStart.width : rectStart.height;
        this._endSize = this.axis === 'x' ? rectEnd.width : rectEnd.height;
      }

      // Create bound handlers for cleanup
      this._boundMove = this._createMoveHandler(startValue);
      this._boundStop = this._createStopHandler(startValue);

      window.addEventListener('pointermove', this._boundMove);
      window.addEventListener('pointerup', this._boundStop);
    } catch (error) {
      console.error('Error starting drag:', error);
      this._isDragging = false;
      this.setSyntheticActiveState(false);
    }
  };

  /**
   * Create move handler with closure over start position
   * @param {number} startValue - Starting position value
   * @returns {(e: PointerEvent) => void} Move handler function
   */
  private _createMoveHandler(startValue: number): (e: PointerEvent) => void {
    return (e: PointerEvent) => {
      if (!this._isDragging) {
        return;
      }

      try {
        const currentValue = this.axis === 'x' ? e.clientX : e.clientY;
        const delta = currentValue - startValue;
        const position: Position = { x: e.clientX, y: e.clientY };

        // Emit drag event with delta for standalone usage
        this.dispatchEvent(
          createCustomEvent(EVENTS.RESIZE_DRAG, {
            axis: this.axis,
            delta,
            position,
          })
        );

        // Also update grid if present (backward compatibility)
        if (this._grid && this._startNode && this._endNode) {
          this._updateGridSizes(delta);
        }
      } catch (error) {
        console.error('Error during drag:', error);
      }
    };
  }

  /**
   * Create stop handler with closure over start position
   * @param {number} startValue - Starting position value
   * @returns {(e: PointerEvent) => void} Stop handler function
   */
  private _createStopHandler(startValue: number): (e: PointerEvent) => void {
    return (e: PointerEvent) => {
      try {
        const currentValue = this.axis === 'x' ? e.clientX : e.clientY;
        const delta = currentValue - startValue;
        const position: Position = { x: e.clientX, y: e.clientY };

        // Emit drag end event
        this.dispatchEvent(
          createCustomEvent(EVENTS.RESIZE_END, {
            axis: this.axis,
            delta,
            position,
          })
        );

        // Cleanup
        if (this._boundMove) {
          window.removeEventListener('pointermove', this._boundMove);
          this._boundMove = undefined;
        }
        if (this._boundStop) {
          window.removeEventListener('pointerup', this._boundStop);
          this._boundStop = undefined;
        }

        if (this._grid) {
          this._grid.style.removeProperty('transition');
        }

        this._isDragging = false;
        this.setSyntheticActiveState(false);
      } catch (error) {
        console.error('Error stopping drag:', error);
        this._isDragging = false;
        this.setSyntheticActiveState(false);
      }
    };
  }

  /**
   * Update grid sizes during drag
   * @param {number} delta - Movement delta
   */
  private _updateGridSizes(delta: number): void {
    if (!this._grid) {
      return;
    }

    this._grid.style.transition = 'none';

    const start = this._startSize + delta;
    const end = this._endSize - delta;
    const total = start + end || 1;

    this._grid.style.setProperty(
      '--start-element-size',
      `${calculateFlexRatio(start, total)}fr`
    );
    this._grid.style.setProperty(
      '--end-element-size',
      `${calculateFlexRatio(end, total)}fr`
    );

    // Update ARIA attributes during drag
    this._updateAriaAttributes();
  }

  /**
   * Handle keyboard navigation for resizing
   * @param {KeyboardEvent} e - The keyboard event
   */
  private _handleKeyDown = (e: KeyboardEvent): void => {
    const navigationKeys = [
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End',
    ];

    if (![...navigationKeys, 'PageUp', 'PageDown'].includes(e.key)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    try {
      const step = e.shiftKey
        ? KEYBOARD.LARGE_STEP_PX
        : KEYBOARD.DEFAULT_STEP_PX;
      let delta = 0;

      const isHorizontal = this.axis === 'x';

      // Calculate delta based on key pressed
      if (e.key === 'ArrowUp' && !isHorizontal) {
        delta = -step;
      } else if (e.key === 'ArrowDown' && !isHorizontal) {
        delta = step;
      } else if (e.key === 'ArrowLeft' && isHorizontal) {
        delta = -step;
      } else if (e.key === 'ArrowRight' && isHorizontal) {
        delta = step;
      } else if (e.key === 'Home') {
        // For grid mode, calculate delta; for standalone mode, parent will handle
        if (this._grid && this._startNode) {
          const rect = this._startNode.getBoundingClientRect();
          delta = isHorizontal ? -rect.width : -rect.height;
        } else {
          // Standalone mode: emit event with key, parent handles the logic
          delta = 0; // Will be handled by parent based on key
        }
      } else if (e.key === 'End') {
        // For grid mode, calculate delta; for standalone mode, parent will handle
        if (this._grid && this._endNode) {
          const rect = this._endNode.getBoundingClientRect();
          delta = isHorizontal ? rect.width : rect.height;
        } else {
          // Standalone mode: emit event with key, parent handles the logic
          delta = 0; // Will be handled by parent based on key
        }
      }

      // Always call keyboard resize for Home/End to emit events, even with delta=0
      if (e.key === 'Home' || e.key === 'End' || delta !== 0) {
        this._handleKeyboardResize(delta, e.key);
      }
    } catch (error) {
      console.error('Error handling keyboard navigation:', error);
    }
  };

  /**
   * Handle keyboard-based resize operation
   * @param {number} delta - Movement delta in pixels
   * @param {string} key - The key that was pressed
   */
  private _handleKeyboardResize(delta: number, key: string): void {
    const position: Position = { x: 0, y: 0 };

    // Emit resize start event for standalone usage
    this.dispatchEvent(
      createCustomEvent(EVENTS.RESIZE_START, {
        axis: this.axis,
        startPosition: position,
        isKeyboard: true,
        key,
      })
    );

    // Get current sizes and update grid if present
    if (this._grid && this._startNode && this._endNode) {
      const rectStart = this._startNode.getBoundingClientRect();
      const rectEnd = this._endNode.getBoundingClientRect();
      const isHorizontal = this.axis === 'x';

      this._startSize = isHorizontal ? rectStart.width : rectStart.height;
      this._endSize = isHorizontal ? rectEnd.width : rectEnd.height;

      // Apply the delta
      const start = this._startSize + delta;
      const end = this._endSize - delta;
      const total = start + end || 1;

      this._grid.style.setProperty(
        '--start-element-size',
        `${calculateFlexRatio(start, total)}fr`
      );
      this._grid.style.setProperty(
        '--end-element-size',
        `${calculateFlexRatio(end, total)}fr`
      );

      // Update ARIA attributes after keyboard resize
      this._updateAriaAttributes();
    }

    // Emit resize event for standalone usage with keyboard flag and key
    this.dispatchEvent(
      createCustomEvent(EVENTS.RESIZE_DRAG, {
        axis: this.axis,
        delta,
        position,
        isKeyboard: true,
        key,
      })
    );

    // Emit resize end event
    this.dispatchEvent(
      createCustomEvent(EVENTS.RESIZE_END, {
        axis: this.axis,
        delta,
        position,
        isKeyboard: true,
        key,
      })
    );
  }

  /**
   * Render the resizer handle
   * @returns {TemplateResult} The template result
   */
  /**
   * Render the resizer handle
   * @returns The template result
   */
  render() {
    return html`
      <div class="handle-content">
        <span class="sr-only">
          Use arrow keys to resize, hold Shift for larger steps. Double-click to
          reset.
        </span>
        <div>
          ${this._pivot === 'start'
            ? html`<slot name="${SLOTS.PIVOT}"></slot>`
            : ''}
        </div>
        <div class="icon-container" part="icon-container">
          <slot name="${SLOTS.ICON}"></slot>
        </div>
        <div>
          ${this._pivot === 'end'
            ? html`<slot name="${SLOTS.PIVOT}"></slot>`
            : ''}
        </div>
      </div>
    `;
  }
}

export default ResizerHandleTemplate;
