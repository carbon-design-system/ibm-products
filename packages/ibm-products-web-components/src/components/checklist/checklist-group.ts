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
 * Sections in c4p-checklist
 * @element c4p-checklist-group
 */
@customElement(`${prefix}-checklist-group`)
class CDSChecklistGroup extends LitElement {
  /**
   * Title text of the c4p-checklist-group
   */
  @property()
  title = '';

  render() {
    const { title } = this;

    return html`
      <section class="${prefix}--checklist__list-group">
        ${title &&
        html`<h3 title=${title} class="${prefix}--checklist__list-title">
          ${title}
        </h3>`}
        <ol class="${prefix}--checklist__list">
          <slot></slot>
        </ol>
      </section>
    `;
  }

  static styles = styles;
}

export default CDSChecklistGroup;
