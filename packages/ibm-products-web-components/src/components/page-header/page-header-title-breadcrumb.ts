/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { CDSBreadcrumbItem } from '@carbon/web-components/es/index';
import { prefix } from '../../globals/settings';
import styles from './page-header.scss?lit';

/**
 * Page header Title Breadcrumb
 * @element c4p-page-header-title-breadcrumb
 */
@customElement(`${prefix}-page-header-title-breadcrumb`)
class CDSPageHeaderTitleBreadcrumb extends CDSBreadcrumbItem {
  render() {
    return html`
      <cds-breadcrumb-item class="${prefix}--page-header-title-breadcrumb">
        <slot></slot>
      </cds-breadcrumb-item>
    `;
  }

  static styles = styles;
}

export default CDSPageHeaderTitleBreadcrumb;
