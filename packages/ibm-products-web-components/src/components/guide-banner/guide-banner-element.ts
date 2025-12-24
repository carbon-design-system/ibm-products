/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import { property } from 'lit/decorators.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './guide-banner-element.scss?lit';

export const blockClass = `${prefix}--guidebanner__element`;

@customElement(`${prefix}-guide-banner-element`)
class CDSGuideBannerElement extends HostListenerMixin(LitElement) {
  @property()
  titleText?: string;

  @property()
  descriptionText?: string;

  render() {
    return html`
      <div class="${blockClass}">
        ${this.titleText &&
        html`<h2 class="${blockClass}-title">${this.titleText}</h2>`}
        ${this.descriptionText &&
        html`<p class="${blockClass}-content">${this.descriptionText}</p>`}
        <slot></slot>
      </div>
    `;
  }

  static styles = styles;
}

export default CDSGuideBannerElement;
