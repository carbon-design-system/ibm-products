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
  root?: CDSPageHeader | null;
  withContent?: boolean;
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
    if (contentElement) {
      contentObserver.observe(contentElement);
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
