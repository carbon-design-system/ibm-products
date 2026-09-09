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
import CDSPageHeaderContent from './page-header-content';

export interface pageHeaderContextType {
  breadcrumbOffset?: number;
  headerOffset?: number;
  fullyCollapsed?: boolean;
  titleClipped?: boolean;
  contentActionsClipped?: boolean;
  root?: CDSPageHeader | null;
  withContent?: boolean;
  disableStickyTabBar?: boolean;
}

/**
 * Page header.
 * @element c4p-page-header
 */
@customElement(`${prefix}-page-header`)
class CDSPageHeader extends LitElement {
  @state()
  @provide({ context: pageHeaderContext })
  context: pageHeaderContextType = {};

  private resizeObserver: ResizeObserver | undefined;
  private contentObserver: IntersectionObserver | undefined;
  private titleObserver: IntersectionObserver | undefined;
  private actionsObserver: IntersectionObserver | undefined;

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    if (changedProperties.has('context')) {
      // Update host class based on disableStickyTabBar
      if (this.context.disableStickyTabBar) {
        this.classList.add(`${prefix}--page-header--disable-sticky-tab-bar`);
      } else {
        this.classList.remove(`${prefix}--page-header--disable-sticky-tab-bar`);
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    const contentElement = this.querySelector(`${prefix}-page-header-content`);

    this.resizeObserver = new ResizeObserver((entries) => {
      const pageHeaderElement = entries[0];
      const contentEl = pageHeaderElement.target.querySelector(
        `${prefix}-page-header-content`
      );
      const contentHeight =
        contentEl instanceof CDSPageHeaderContent ? contentEl.scrollHeight : 0;
      const padding =
        contentEl instanceof CDSPageHeaderContent
          ? parseFloat(getComputedStyle(contentEl)?.paddingBlockStart) +
            parseFloat(getComputedStyle(contentEl)?.paddingBlockEnd)
          : 0;
      const totalContentHeight = contentHeight + padding;
      const headerOffset = getHeaderOffset(this);
      const contentPadding = contentEl instanceof CDSPageHeaderContent ? 48 : 0;

      this.style.setProperty(
        `--${prefix}-page-header-header-top`,
        `${(Math.round(totalContentHeight - contentPadding) - headerOffset) * -1}px`
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
        withContent: !!contentEl,
      };
    });
    this.resizeObserver.observe(this);

    const predefinedContentPadding = 24;
    const totalHeaderOffset = getHeaderOffset(this);
    this.contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const fullyCollapsed = !entry.isIntersecting;
          if (this.context.fullyCollapsed !== fullyCollapsed) {
            this.context = { ...this.context, fullyCollapsed };
            this.dispatchEvent(
              new CustomEvent(`${prefix}-page-header-fully-collapsed`, {
                bubbles: true,
                composed: true,
                detail: { fullyCollapsed },
              })
            );
          }
        });
      },
      {
        root: null,
        rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
        threshold: 0.1,
      }
    );

    this.titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const titleClipped = !entry.isIntersecting;
          if (this.context.titleClipped !== titleClipped) {
            this.context = { ...this.context, titleClipped };
            this.dispatchEvent(
              new CustomEvent(`${prefix}-page-header-title-clipped`, {
                bubbles: true,
                composed: true,
                detail: { titleClipped },
              })
            );
          }
        });
      },
      {
        root: null,
        rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
        threshold: 0.95,
      }
    );

    this.actionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const contentActionsClipped = !entry.isIntersecting;
          if (this.context.contentActionsClipped !== contentActionsClipped) {
            this.context = { ...this.context, contentActionsClipped };
            this.dispatchEvent(
              new CustomEvent(`${prefix}-page-header-content-actions-clipped`, {
                bubbles: true,
                composed: true,
                detail: { contentActionsClipped },
              })
            );
          }
        });
      },
      {
        root: null,
        // 48 -> breadcrumb bar
        // 18 -> content padding
        rootMargin: `${(totalHeaderOffset + 48 + 18) * -1}px 0px 0px 0px`,
        threshold: 0.95,
      }
    );
    if (contentElement) {
      this.contentObserver.observe(contentElement);
      this.titleObserver.observe(contentElement);
      this.actionsObserver.observe(contentElement);
    }
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect();
    this.contentObserver?.disconnect();
    this.titleObserver?.disconnect();
    this.actionsObserver?.disconnect();
    super.disconnectedCallback();
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = styles;
}

export default CDSPageHeader;
