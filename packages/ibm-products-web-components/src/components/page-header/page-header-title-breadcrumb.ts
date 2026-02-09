/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { consume, ContextConsumer } from '@lit/context';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import CDSBreadcrumbItem from '@carbon/web-components/es/components/breadcrumb/breadcrumb-item';
import { prefix } from '../../globals/settings';
import styles from './page-header.scss?lit';
import { pageHeaderContext } from './context';
import { pageHeaderContextType } from './page-header';

/**
 * Page header Title Breadcrumb
 * @element c4p-page-header-title-breadcrumb
 */
@customElement(`${prefix}-page-header-title-breadcrumb`)
class CDSPageHeaderTitleBreadcrumb extends CDSBreadcrumbItem {
  @consume({ context: pageHeaderContext, subscribe: true })
  context;

  constructor() {
    super();
    new ContextConsumer(this, {
      context: pageHeaderContext,
      subscribe: true,
      callback: (state) => {
        if ((state as pageHeaderContextType).titleClipped) {
          this.classList.add(
            `${prefix}--page-header-title-breadcrumb-show__fallback`
          );
        } else {
          this.classList.remove(
            `${prefix}--page-header-title-breadcrumb-show__fallback`
          );
        }
        if ((state as pageHeaderContextType).withContent) {
          this.classList.add(
            `${prefix}--page-header-title-breadcrumb-show__with-content`
          );
          this.classList.remove(
            `${prefix}--page-header-title-breadcrumb-show__by-default`
          );
        } else {
          this.classList.remove(
            `${prefix}--page-header-title-breadcrumb-show__with-content`
          );
          this.classList.add(
            `${prefix}--page-header-title-breadcrumb-show__by-default`
          );
        }
      },
    });
  }
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
