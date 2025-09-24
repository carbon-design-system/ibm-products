/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * ----------
 * Utilities
 * ----------
 */

export const getHeaderOffset = (el: HTMLElement): number => {
  const scrollableContainer = scrollableAncestor(el);
  const scrollableContainerTop = scrollableContainer
    ? (scrollableContainer as HTMLElement).getBoundingClientRect().top
    : 0;
  const offsetMeasuringTop = el ? el.getBoundingClientRect().top : 0;
  const totalHeaderOffset =
    offsetMeasuringTop !== 0 ? offsetMeasuringTop - scrollableContainerTop : 0;
  return totalHeaderOffset;
};

const windowExists = typeof window !== `undefined`;

/**
 * Determines if the given target is scrollable
 *
 * @param {HTMLElement} target
 * @returns {boolean}
 */
const scrollable = (target: HTMLElement): boolean => {
  const style = window.getComputedStyle(target);
  return /(auto|scroll|hidden)/.test(style.overflow);
};

/**
 * Recursively looks for the scrollable ancestor
 */
const scrollableAncestorInner = (target: HTMLElement) => {
  if (target.parentNode && target.parentNode !== document) {
    if (scrollable(target.parentNode as HTMLElement)) {
      return target.parentNode;
    } else {
      return scrollableAncestorInner(target.parentNode as HTMLElement);
    }
  } else {
    return document.scrollingElement;
  }
};

/**
 * Walks up the parent nodes to identify the first scrollable ancestor
 *
 * @param {HTMLElement} target
 * @returns {HTMLElement}
 */
export const scrollableAncestor = (target: HTMLElement) => {
  if (!windowExists || !target) {
    return null;
  }

  // based on https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
  const style = window.getComputedStyle(target);

  if (!target || !style || style.position === 'fixed') {
    return document.scrollingElement;
  }
  return scrollableAncestorInner(target);
};
