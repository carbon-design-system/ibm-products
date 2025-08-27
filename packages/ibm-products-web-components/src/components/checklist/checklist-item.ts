/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

import { prefix } from '../../globals/settings';
import styles from './checklist.scss?lit';

/**
 * item in c4p-checklist-group
 * @element c4p-checklist-item
 */
@customElement(`${prefix}-checklist-item`)
class CDSChecklistItem extends LitElement {
  /**
   * label of the c4p-checklist-item
   */
  @property()
  label = '';

  render() {
    const { label } = this;

    return html`
      <li class="${prefix}--checklist__list-item">
        <slot>
          <slot name="icon"> </slot>
          <div class="${prefix}--checklist__label" title=${label}>${label}</div>
        </slot>
      </li>
    `;
  }

  static styles = styles;
}

export default CDSChecklistItem;
