/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Traps focus within a set of containers, ensuring it stays within focusable elements.
 * @param {NodeListOf<Element>} containers - The containers to trap focus within.
 * @returns {object} An object with a `cleanup` method to remove event listeners.
 */
export const trapFocus = (containers) => {
  const prefix = 'cds';
  const selectorTabbable = `
    a[href]:not(#start-sentinel, #end-sentinel), area[href],
    input:not([disabled]):not([tabindex='-1']),
    button:not([disabled]):not([tabindex='-1']),
    select:not([disabled]):not([tabindex='-1']),
    textarea:not([disabled]):not([tabindex='-1']),
    iframe, object, embed, *[tabindex]:not([tabindex='-1']),
    *[contenteditable=true],
    ${prefix}-accordion-item,
    ${prefix}-actionable-notification-button,
    ${prefix}-ai-label,
    ${prefix}-button:not([disabled]),
    ${prefix}-breadcrumb-link,
    ${prefix}-checkbox,
    ${prefix}-code-snippet,
    ${prefix}-combo-box,
    ${prefix}-content-switcher-item,
    ${prefix}-copy-button,
    ${prefix}-table-header-row,
    ${prefix}-table-row,
    ${prefix}-table-toolbar-search,
    ${prefix}-date-picker-input,
    ${prefix}-dropdown,
    ${prefix}-icon-button,
    ${prefix}-input,
    ${prefix}-link,
    ${prefix}-number-input,
    ${prefix}-modal,
    ${prefix}-modal-close-button,
    ${prefix}-modal-footer-button,
    ${prefix}-multi-select,
    ${prefix}-inline-notification,
    ${prefix}-toast-notification,
    ${prefix}-overflow-menu,
    ${prefix}-overflow-menu-item,
    ${prefix}-page-sizes-select,
    ${prefix}-pages-select,
    ${prefix}-progress-step,
    ${prefix}-radio-button,
    ${prefix}-search,
    ${prefix}-slider,
    ${prefix}-slider-input,
    ${prefix}-structured-list,
    ${prefix}-tab,
    ${prefix}-filter-tag,
    ${prefix}-selectable-tag,
    ${prefix}-tag,
    ${prefix}-textarea,
    ${prefix}-text-input,
    ${prefix}-clickable-tile,
    ${prefix}-expandable-tile,
    ${prefix}-radio-tile,
    ${prefix}-selectable-tile,
    ${prefix}-toggle,
    ${prefix}-tooltip,
    ${prefix}-tooltip-definition,
    ${prefix}-tooltip-icon,
    ${prefix}-header-menu,
    ${prefix}-header-menu-button,
    ${prefix}-header-menu-item,
    ${prefix}-header-name,
    ${prefix}-header-nav-item,
    ${prefix}-side-nav-link,
    ${prefix}-side-nav-menu,
    ${prefix}-side-nav-menu-item,
    ${prefix}-slug
  `;

  if (!containers.length) {
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

    // If inside shadow DOM
    if (
      activeElement &&
      selectorTabbable.indexOf(activeElement.tagName.toLocaleLowerCase()) ==
        -1 &&
      activeElement?.shadowRoot?.activeElement
    ) {
      activeElement = activeElement.shadowRoot.activeElement;
    }

    // If active element is a slot
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
    const elements = containers
      .flatMap((container) => getFocusableElements(container))
      .filter(Boolean);
    getFocusTarget(elements[0])?.focus({ preventScroll: true });
  });

  function onKeyDown(e) {
    if (e.key !== 'Tab') {
      return;
    }

    // Flatten all focusable elements from all containers
    const elements = containers
      .flatMap((container) => getFocusableElements(container))
      .filter(Boolean);

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
      if (active === last || last.contains(active)) {
        e.preventDefault();
        getFocusTarget(first)?.focus();
      }
    }
  }

  const getFocusableElements = (container) => {
    return [...container.querySelectorAll(selectorTabbable)];
  };

  document.addEventListener('keydown', onKeyDown, true);

  return {
    cleanup: () => {
      document.removeEventListener('keydown', onKeyDown, true);
    },
  };
};
