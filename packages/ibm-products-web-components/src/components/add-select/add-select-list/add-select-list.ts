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
import { prefix } from '../../../globals/settings';
import styles from './add-select-list.scss?lit';

const blockClass = `${prefix}--add-select-list`;

/**
 * Add Select List component - contains the list of selectable items
 * @element c4p-add-select-list
 * @slot default - Contains c4p-add-select-item components
 */
@customElement(`${prefix}-add-select-list`)
class CDSAddSelectList extends LitElement {
  /**
   * Whether this is a multi-select list
   */
  @property({ type: Boolean })
  multi = false;

  render() {
    const { multi } = this;

    const listClasses = classMap({
      [`${blockClass}-wrapper`]: true,
      [`${blockClass}-wrapper-multi`]: multi,
    });

    return html`
      <div class=${listClasses}>
        <div class="${blockClass}">
          <div
            class="${blockClass}-body"
            role="treegrid"
            aria-label="Add select list"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  static styles = styles;
}

export default CDSAddSelectList;
