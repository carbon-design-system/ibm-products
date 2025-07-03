/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './page-header.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

/**
 * ----------
 * Utilities
 * ----------
 */

const getHeaderOffset = (el: HTMLElement): number => {
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
const scrollableAncestor = (target: HTMLElement) => {
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

/**
 * Page header.
 * @element c4p-page-header
 */
@customElement(`${prefix}-page-header`)
class CDSPageHeader extends LitElement {
  updated() {
    const contentElement = this.querySelector(`${prefix}-page-header-content`);

    if (contentElement) {
      const resizeObserver = new ResizeObserver((entries) => {
        const contentElEntry = entries[0];
        const contentHeight = contentElEntry.contentRect.height;
        const padding =
          parseFloat(getComputedStyle(contentElement)?.paddingBlockStart) +
          parseFloat(getComputedStyle(contentElement)?.paddingBlockEnd);
        const totalContentHeight = contentHeight + padding;
        const headerOffset = getHeaderOffset(this);

        this.style.setProperty(
          `--${prefix}-page-header-header-top`,
          `${(Math.round(totalContentHeight) - headerOffset) * -1}px`
        );
        this.style.setProperty(
          `--${prefix}-page-header-breadcrumb-top`,
          `${headerOffset}px`
        );
      });

      resizeObserver.observe(contentElement);
    }
  }
  render() {
    return html` <slot></slot>`;
  }

  static styles = styles;
}

export default CDSPageHeader;
