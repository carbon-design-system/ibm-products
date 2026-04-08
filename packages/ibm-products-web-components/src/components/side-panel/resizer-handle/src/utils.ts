/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ResizerAxis, Position } from './types.js';

/**
 * Calculate the ratio for flex sizing
 * @param {number} value - The value to calculate ratio for
 * @param {number} total - The total value
 * @returns {number} The calculated ratio, clamped to [0, 1]
 */
export function calculateFlexRatio(value: number, total: number): number {
  if (total <= 0) {
    return 0;
  }
  return Math.max(0, Math.min(1, value / total));
}

/**
 * Format percentage for ARIA valuetext
 * @param {number} percentage - Percentage value (0-100)
 * @returns {string} Formatted string like "60% / 40%"
 */
export function formatSplitRatio(percentage: number): string {
  const start = Math.round(Math.max(0, Math.min(100, percentage)));
  const end = 100 - start;
  return `${start}% / ${end}%`;
}

/**
 * Determine axis from slot name or cursor style
 * @param {string | null} slot - Slot attribute value
 * @param {string} [cursor] - Computed cursor style
 * @returns {ResizerAxis} Determined axis
 */
export function determineAxis(
  slot: string | null,
  cursor?: string
): ResizerAxis {
  if (slot === 'handle-vertical') {
    return 'y';
  }
  if (slot === 'handle-horizontal') {
    return 'x';
  }
  // Fallback to cursor detection
  if (cursor && cursor.includes('ew')) {
    return 'x';
  }
  return 'y'; // Default
}

/**
 * Check if two positions are within distance threshold
 * @param {Position} pos1 - First position
 * @param {Position} pos2 - Second position
 * @param {number} threshold - Distance threshold
 * @returns {boolean} True if positions are within threshold
 */
export function isWithinDistance(
  pos1: Position,
  pos2: Position,
  threshold: number
): boolean {
  const dx = Math.abs(pos1.x - pos2.x);
  const dy = Math.abs(pos1.y - pos2.y);
  return dx < threshold && dy < threshold;
}

/**
 * Safely query selector with error handling
 * @param {Element | Document} root - Root element to query from
 * @param {string} selector - CSS selector
 * @returns {T | null} Found element or null
 */
export function safeQuerySelector<T extends HTMLElement = HTMLElement>(
  root: Element | Document,
  selector: string
): T | null {
  try {
    return root.querySelector<T>(selector);
  } catch (error) {
    console.error(`Error querying selector "${selector}":`, error);
    return null;
  }
}

/**
 * Safely query all elements with error handling
 * @param {Element | Document} root - Root element to query from
 * @param {string} selector - CSS selector
 * @returns {T[]} Array of found elements
 */
export function safeQuerySelectorAll<T extends HTMLElement = HTMLElement>(
  root: Element | Document,
  selector: string
): T[] {
  try {
    return Array.from(root.querySelectorAll<T>(selector));
  } catch (error) {
    console.error(`Error querying selector "${selector}":`, error);
    return [];
  }
}

/**
 * Safely find closest ancestor with error handling
 * @param {Element} element - Element to start from
 * @param {string} selector - CSS selector
 * @returns {T | null} Found ancestor or null
 */
export function safeClosest<T extends HTMLElement = HTMLElement>(
  element: Element,
  selector: string
): T | null {
  try {
    return element.closest<T>(selector);
  } catch (error) {
    console.error(`Error finding closest "${selector}":`, error);
    return null;
  }
}

/**
 * Trigger haptic feedback if available
 * @param {number} duration - Vibration duration in ms
 */
export function triggerHapticFeedback(duration: number): void {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(duration);
    } catch (error) {
      // Silently fail if vibration is not supported or blocked
    }
  }
}

/**
 * Create a custom event with proper typing
 * @param {string} eventName - Name of the event
 * @param {T} [detail] - Event detail payload
 * @param {EventInit} [options] - Event options
 * @returns {CustomEvent<T>} Custom event
 */
export function createCustomEvent<T = any>(
  eventName: string,
  detail?: T,
  options?: EventInit
): CustomEvent<T> {
  return new CustomEvent<T>(eventName, {
    bubbles: true,
    composed: true,
    detail,
    ...options,
  });
}

/**
 * Get orientation from axis
 * @param {ResizerAxis} axis - Resize axis
 * @returns {'horizontal' | 'vertical'} ARIA orientation value
 */
export function getOrientationFromAxis(
  axis: ResizerAxis
): 'horizontal' | 'vertical' {
  return axis === 'x' ? 'vertical' : 'horizontal';
}
