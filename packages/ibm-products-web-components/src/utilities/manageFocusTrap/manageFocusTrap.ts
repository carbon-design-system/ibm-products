/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  selectorTabbable as selectorTabbableCarbon,
  prefix as carbonPrefix,
} from '@carbon/web-components/es/globals/settings';
/**
 * Traps focus within a set of containers, ensuring it stays within focusable elements.
 * @param {NodeListOf<Element>} containers - The containers to trap focus within.
 * @returns {object} An object with a `cleanup` method to remove event listeners.
 */
let _containers: HTMLElement[] = [];

export const registerFocusableContainers = (container) => {
  if (container) {
    _containers.push(container);
  }
};
export const clearFocusableContainers = () => {
  _containers.length = 0;
};
export const trapFocus = (containers?: HTMLElement[]) => {
  const selectorTabbable = selectorTabbableCarbon.replace(
    `${carbonPrefix}-button`,
    `${carbonPrefix}-button:not([disabled]), ${carbonPrefix}-selectable-tag`
  );

  if (containers && containers.length > 0) {
    _containers = containers;
  }
  if (!_containers.length) {
    return { cleanup: () => {} };
  }

  /**
   * Given a container element, return the best candidate to focus.
   * - If element itself is tabbable, return it.
   * - Otherwise, find the first tabbable descendant.
   */
  const getFocusTarget = (el) => {
    if (!el) {
      return null;
    }
    if (el.tagName === 'BUTTON' || el.tabIndex >= 0) {
      return el;
    }
    const inner = el.querySelector('button, [tabindex]:not([tabindex="-1"])');
    return inner || el;
  };

  /**

 * Returns the "real" active element in the document, resolving through
 * Shadow DOM and slot boundaries when necessary.
 *
 * In some cases `document.activeElement` may not reflect the actual
 * tabbable node that has focus:
 *   - If focus is inside a shadow root, `document.activeElement` is the host,
 *     not the element inside. This utility dives into the shadowRoot to find
 *     the inner active element.
 *   - If focus is on a `<slot>` element, this function resolves to the first
 *     tabbable assigned element within the slot.
   */
  const getRealActiveElement = () => {
    let activeElement = document.activeElement;

    // Traverse through nested shadow DOMs, but stop at tabbable elements
    // This ensures we stop at cds-button level, not go deeper into its shadow root
    while (
      activeElement &&
      activeElement.shadowRoot &&
      activeElement.shadowRoot.activeElement
    ) {
      const nextElement = activeElement.shadowRoot.activeElement;

      // Check if current element is a tabbable element (like cds-button)
      // If so, stop here instead of going deeper
      const tagName = activeElement.tagName.toLowerCase();
      if (
        selectorTabbable.indexOf(tagName) !== -1 ||
        tagName.includes('-button') ||
        activeElement.hasAttribute('tabindex')
      ) {
        break;
      }

      activeElement = nextElement;
    }

    // If active element is a slot, resolve to the assigned element
    if (activeElement?.tagName === 'SLOT') {
      let assigned: Element[] | undefined;

      if (activeElement instanceof HTMLSlotElement) {
        assigned = activeElement.assignedElements({ flatten: true });
      }
      const candidate = assigned?.find((node) =>
        node.matches('button, [tabindex]:not([tabindex="-1"])')
      );
      if (candidate) {
        activeElement = candidate;
      }
    }

    return activeElement;
  };

  //Optionally focus first element immediately
  requestAnimationFrame(() => {
    const elements = getAllFocusableElements(_containers);
    getFocusTarget(elements[0])?.focus({ preventScroll: true });
  });

  function onKeyDown(e) {
    if (e.key !== 'Tab') {
      return;
    }

    // Flatten all focusable elements from all containers
    const elements = getAllFocusableElements(_containers);
    console.log('elements', elements);

    const first = elements[0];
    const last = elements[elements.length - 1];
    const active = getRealActiveElement();

    if (e.shiftKey) {
      // Shift+Tab wrap
      if (active === first || first.contains(active)) {
        e.preventDefault();
        getFocusTarget(last)?.focus();
      }
    } else {
      // Tab wrap
      console.log(active, last);

      if (active === last || last.contains(active)) {
        e.preventDefault();
        getFocusTarget(first)?.focus();
      }
    }
  }

  /**
   * Retrieves all focusable elements within the provided containers.
   **/
  const getAllFocusableElements = (containers) =>
    containers
      .flatMap((container) => [...container.querySelectorAll(selectorTabbable)])
      .filter(Boolean);

  document.addEventListener('keydown', onKeyDown, true);

  return {
    cleanup: () => {
      document.removeEventListener('keydown', onKeyDown, true);
      _containers.length = 0;
    },
  };
};
