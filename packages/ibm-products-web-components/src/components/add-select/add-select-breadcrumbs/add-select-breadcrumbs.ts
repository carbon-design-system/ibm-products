/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/web-components/es/components/breadcrumb/index.js';
import { prefix } from '../../../globals/settings';
import styles from './add-select-breadcrumbs.scss?lit';

const blockClass = `${prefix}--add-select-breadcrumbs`;

/**
 * Add Select Breadcrumbs component - displays navigation path
 * @element c4p-add-select-breadcrumbs
 * @fires c4p-add-select-breadcrumbs-click - Fired when breadcrumb item is clicked
 */
@customElement(`${prefix}-add-select-breadcrumbs`)
class CDSAddSelectBreadcrumbs extends LitElement {
  /**
   * Whether this is a multi-select
   */
  @property({ type: Boolean })
  multi = false;

  /**
   * Navigation path array
   */
  @property({ type: Array })
  path: Array<{ id: string; title: string }> = [];

  /**
   * Handle breadcrumb click
   */
  private _handleClick(event: Event, index: number) {
    event.preventDefault();

    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: { index },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSAddSelectBreadcrumbs).eventClick,
        init
      )
    );
  }

  render() {
    const { multi, path } = this;

    const breadcrumbClasses = classMap({
      [blockClass]: true,
      [`${blockClass}--multi`]: multi,
    });

    return html`
      <cds-breadcrumb no-trailing-slash class=${breadcrumbClasses}>
        ${path.map((entry, idx) => {
          const isCurrentPage = idx === path.length - 1;
          return html`
            <cds-breadcrumb-item
              ?is-current-page=${isCurrentPage}
              @click=${(e: Event) => this._handleClick(e, idx)}
              href="#"
            >
              ${entry.title}
            </cds-breadcrumb-item>
          `;
        })}
      </cds-breadcrumb>
    `;
  }

  /**
   * The name of the custom event fired when breadcrumb is clicked
   */
  static get eventClick() {
    return `${prefix}-add-select-breadcrumbs-click`;
  }

  static styles = styles;
}

export default CDSAddSelectBreadcrumbs;
