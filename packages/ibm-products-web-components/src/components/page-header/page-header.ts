/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { prefix } from '../../globals/settings';
import styles from './page-header.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { pageHeaderContext } from './context';
import { getHeaderOffset } from './utils';

export interface offsetValues {
  breadcrumbOffset?: number;
  headerOffset?: number;
  fullyCollapsed?: boolean;
  titleClipped?: boolean;
  root?: CDSPageHeader | null;
}

/**
 * Page header.
 * @element c4p-page-header
 */
@customElement(`${prefix}-page-header`)
class CDSPageHeader extends LitElement {
  @state()
  @provide({ context: pageHeaderContext })
  context: offsetValues = {};

  private resizeObserver: ResizeObserver | undefined;

  connectedCallback(): void {
    super.connectedCallback();
    const contentElement = this.querySelector(`${prefix}-page-header-content`);

    if (contentElement) {
      const titleWrapper = contentElement?.shadowRoot?.querySelector(
        `.${prefix}--page-header__content__title-container`
      );
      console.log(titleWrapper);
      this.resizeObserver = new ResizeObserver((entries) => {
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
        this.context = {
          ...this.context,
          breadcrumbOffset: headerOffset,
          headerOffset: (Math.round(totalContentHeight) - headerOffset) * -1,
          root: this,
        };
      });
      this.resizeObserver.observe(contentElement);
    }

    const predefinedContentPadding = 24;
    const totalHeaderOffset = getHeaderOffset(this);
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.context = {
              ...this.context,
              fullyCollapsed: true,
            };
          } else {
            this.context = {
              ...this.context,
              fullyCollapsed: false,
            };
          }
        });
      },
      {
        root: null,
        rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
        threshold: 0.1,
      }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.context = {
              ...this.context,
              titleClipped: true,
            };
          } else {
            this.context = {
              ...this.context,
              titleClipped: false,
            };
          }
        });
      },
      {
        root: null,
        rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
        threshold: 0.95,
      }
    );
    if (contentElement) {
      contentObserver.observe(contentElement);
      titleObserver.observe(contentElement);
    }
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect(); // Clean up
    super.disconnectedCallback();
  }

  render() {
    return html` <slot></slot>`;
  }

  static styles = styles;
}

export default CDSPageHeader;
