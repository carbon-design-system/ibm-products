/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import styles from './tearsheet.scss?lit';

const blockClass = `${prefix}--tearsheet__next`;

/**
 * Tearsheet Footer component - Contains action buttons at the bottom of the tearsheet.
 *
 * @element c4p-tearsheet-footer
 * @slot actions - Action buttons (typically Cancel, Submit, etc.)
 */
@customElement(`${prefix}-tearsheet-footer`)
class CDSTearsheetFooter extends HostListenerMixin(LitElement) {
  @property({ reflect: true })
  slot = 'footer';

  render() {
    const classes = classMap({
      [`${blockClass}__footer`]: true,
    });
    return html`<footer class="${classes}" ref="{ref}">
      <slot></slot>
    </footer>`;
  }

  static styles = styles;
}
export default CDSTearsheetFooter;
