/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './user-avatar.scss?lit';
import '@carbon/web-components/es/components/tooltip/index.js';

import { classMap } from 'lit/directives/class-map.js';

const blockClass = `${prefix}--user-avatar`;
/**
 * Useravatar.
 *
 * @element c4p-user-avatar
 * */
@customElement(`${prefix}-user-avatar`)
class CDSUseravatar extends HostListenerMixin(LitElement) {
  /**
   * Specify the text of the tooltip.
   * Can be string
   */
  @property({ reflect: true, attribute: 'tooltip-text' })
  tooltipText;

  /**
   * Specify the alignment of the tooltip.
   */
  @property({ reflect: true, attribute: 'tooltip-alignment' })
  tooltipAlignment = 'bottom';

  /**
   * When passing the name prop, either send the initials to be used or the user's full name. The first two capital letters of the user's name will be used as the name.
   */
  @property({ reflect: true })
  name;

  getItem = () => {
    const parts = this.name?.split(' ') || [];
    const firstChar = parts[0].charAt(0).toUpperCase();
    const secondChar = parts[0].charAt(1).toUpperCase();
    if (parts.length === 1) {
      return firstChar + secondChar;
    }
    const lastChar = parts[parts.length - 1].charAt(0).toUpperCase();
    const initials = [firstChar];
    if (lastChar) {
      initials.push(lastChar);
    }
    console.log(initials);

    return ''.concat(...initials);
  };

  Avatar = () => html`<div>${this.getItem()}</div>`;

  render() {
    const { tooltipText, title, tooltipAlignment } = this;
    if (tooltipText) {
      return html`<cds-tooltip
        align=${tooltipAlignment}
        aria-label=${tooltipText}
        class=${`${prefix}__tooltip ${prefix}--icon-tooltip`}
      >
        ${this.Avatar()}
        <cds-tooltip-content id="content"> ${tooltipText} </cds-tooltip-content>
      </cds-tooltip>`;
    } else {
      return html` <button>${title}</button>`;
    }
  }

  static styles = styles;
}
export default CDSUseravatar;
