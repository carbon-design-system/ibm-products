/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, PropertyValues, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './coachmark-beacon.scss?lit';
import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/icon-button/index.js';
import { BEACON_KIND } from './defs';

const blockClass = `${prefix}--coachmark-beacon`;

type ButtonProps = Record<string, any>;

/**
 * CoachmarkBeacon.
 *
 * @element c4p-coachmark-beacon
 * */
@customElement(`${prefix}-coachmark-beacon`)
class CDSCoachmarkBeacon extends HostListenerMixin(LitElement) {
  /**
   * What style of beacon.
   * BEACON_KIND is an enum from the Coachmark and can be used for this value.
   * @see {@link BEACON_KIND}
   */
  @property({ reflect: true })
  kind?: BEACON_KIND = BEACON_KIND.DEFAULT;

  /**
   * The aria label.
   */
  @property({ type: String, reflect: true })
  label = '';
  /**
   * button props
   */
  @property({ type: Object })
  buttonProps: ButtonProps = {};

  private applyButtonProps(buttonProps?: ButtonProps) {
    const button = this.shadowRoot?.querySelector('cds-button');
    if (!button || !buttonProps) {return;}

    Object.entries(buttonProps).forEach(([key, value]) => {
      if (value === false || value == null) {
        button.removeAttribute(key);
      } else {
        button.setAttribute(key, value === true ? '' : value);
      }
    });
  }

  updated(_changedProperties: PropertyValues) {
    if (_changedProperties.has('buttonProps')) {
      this.applyButtonProps(this.buttonProps);
    }
  }

  render() {
    const classes = classMap({
      [`${blockClass}`]: true,
      [`${blockClass}-${this.kind}`]: true,
    });

    return html`
      <div class=${classes}>
        <cds-button
          class="${blockClass}__target"
          type="button"
          @click=${this.buttonProps?.onClick}
        >
            <svg
              class="${blockClass}__center"
              aria-label=${this.label}
              width="76"
              height="76"
              viewBox="0 0 76 76"
              slot: 'icon',
            >
              <title>${this.label}</title>
              <circle r="1" cx="38" cy="38"></circle>
            </svg>
 
        </cds-button>
      </div>
    `;
  }
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };
  static styles = styles;
}
export default CDSCoachmarkBeacon;
