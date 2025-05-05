/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/form/form-item.js';
import '@carbon/web-components/es/components/text-input/text-input.js';
import '@carbon/web-components/es/components/notification/toast-notification.js';

@customElement('delete-pattern')
export class DeletePattern extends LitElement {
  static styles = css`
    :host cds-modal-body {
      padding-bottom: 0;
    }

    .capitalize {
      text-transform: capitalize;
    }

    .notification {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  `;

  @property()
  type?: string;

  @property()
  resourceName?: string;
  ß;

  @property()
  severity?: string;

  @property({ reflect: true })
  private isOpen: boolean = false;

  @state()
  private _textInput: string = '';

  @state()
  private _enableDelete: boolean = false;

  @state()
  private _showNotification: boolean = false;

  @state()
  private _label: string = 'delete';

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('severity')) {
      this._enableDelete = this.severity !== 'high';
      if (this.severity === 'low') {
        this.isOpen = false;
        this._showNotification = true;
      }
    }
    if (changedProps.has('type')) {
      this._label = this.type === 'delete' ? 'delete' : 'remove';
    }
  }

  private _close() {
    this.isOpen = false;
    this._textInput = '';
  }

  private _onInputChange(e: Event) {
    this._textInput = (e.target as HTMLInputElement).value;
    this._enableDelete = this.resourceName === this._textInput;
  }

  private _onDelete(e: Event) {
    this._close();
    this._showNotification = true;
  }

  private onNotificationClose() {
    this._showNotification = false;
  }

  render() {
    return html`
      <cds-modal size="sm" ?open="${this.isOpen}" prevent-close >
        <cds-modal-header>
          <cds-modal-close-button  @click="${this._close}" ></cds-modal-close-button>
          <cds-modal-label class="capitalize">${this._label} ${this.resourceName} project</cds-modal-label>
          <cds-modal-heading>Confirm ${this._label}</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description>
          ${this.type === 'delete' ? 'Deleting' : 'Removing'} '${this.resourceName}' project will permanently ${this._label} the project and all related configurations from the system.
          ${this.type === 'delete' ? 'This action cannot be undone.' : null}
          </cds-modal-body-content>
          ${
            this.severity === 'high'
              ? html`<cds-form-item>
                  <cds-text-input
                    placeholder="Name of resource"
                    label="Type ${this.resourceName} to confirm"
                    value="${this._textInput}"
                    @input="${this._onInputChange}"
                    autocomplete="off"
                  >
                  </cds-text-input>
                </cds-form-item>`
              : null
          }
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button ?disabled="${!this._enableDelete}" kind="danger"  @click="${this._onDelete}"><span class="capitalize"> ${this._label}</span></cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>

      ${
        this._showNotification
          ? html`<cds-toast-notification
              class="notification"
              kind="success"
              title="Successfully ${this._label}d project"
              subtitle="${this.resourceName} project has been ${this._label}d"
              caption="10:10:00 AM"
              hide-close-button="true"
              low-contrast="true"
              timeout="3000"
              @cds-notification-closed="${this.onNotificationClose}"
            ></cds-toast-notification>`
          : null
      }
      </cds-toast-notification>
    `;
  }
}
