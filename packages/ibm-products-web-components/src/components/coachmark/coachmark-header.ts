/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '@carbon/web-components/es/components/button/index';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './coachmark-header.scss?lit';
import Close from '@carbon/icons/es/close/16';
import Draggable from '@carbon/icons/es/draggable/16';
import { coachmarkDetailsSignal } from './coachmark-context';
import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader';

const blockClass = `${prefix}--coachmark-header`;

/**
 * coachmark-header for content header section
 * @element c4p-coachmark-header
 */
@customElement(`${prefix}-coachmark-header`)
class CDSCoachmarkHeader extends HostListenerMixin(LitElement) {
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription?: string;

  /**
   * Tooltip text and aria label for the Drag button icon.
   */
  @property({ reflect: true })
  dragIconDescription?: string = 'drag icon';

  firstUpdated() {
    this.classList.add(blockClass);
  }

  render() {
    const { floating } = coachmarkDetailsSignal.get();

    return html`
      ${
        floating
          ? html`
              <cds-button
                kind="ghost"
                size="sm"
                class="drag-handle"
                iconDescription="${this.dragIconDescription}"
                hasIconOnly
              >
                ${iconLoader(Draggable, { slot: 'icon', class: 'drag__icon' })}
              </cds-button>
            `
          : nothing
      }
        <slot name="header"></slot>
        <cds-button
          kind="ghost"
          size="sm"
          iconDescription="${this.closeIconDescription}"
          hasIconOnly
        >
           ${iconLoader(Close, { slot: 'icon', class: 'close__icon' })}
           </cds-button
    `;
  }
  static styles = styles;
}

export default CDSCoachmarkHeader;
