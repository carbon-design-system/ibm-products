/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix, carbonPrefix } from '../../globals/settings';
import styles from './page-header.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

/**
 * Page header Tabs Bar.
 * @element c4p-page-header-tabs
 */
@customElement(`${prefix}-page-header-tabs`)
class CDSPageHeaderTabs extends LitElement {
  render() {
    return html` <div class="${carbonPrefix}--css-grid" condensed="">
      <div
        class="${carbonPrefix}--sm:col-span-4 ${carbonPrefix}--md:col-span-8 ${carbonPrefix}--lg:col-span-16 ${carbonPrefix}--css-grid-column"
      >
        <div class="${prefix}--page-header__tab-bar--tablist">
          <slot></slot>
          <slot name="tags"></slot>
        </div>
      </div>
      <slot name="scroller"></slot>
    </div>`;
  }

  static styles = styles;
}

export default CDSPageHeaderTabs;
