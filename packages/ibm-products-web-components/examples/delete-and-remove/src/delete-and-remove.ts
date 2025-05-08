// cspell:words Gigstore, Ktps
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
import '@carbon/web-components/es/components/checkbox/checkbox.js';
import '@carbon/web-components/es/components/link/link.js';

const launchIcon = html`
  <svg
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    slot="icon"
  >
    <path
      d="M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"
    ></path>
    <path d="M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"></path>
  </svg>
`;

@customElement('delete-remove')
export class DeleteRemove extends LitElement {
  static styles = css`
    :host cds-modal-body {
      padding-bottom: 0;
    }

    .capitalize {
      text-transform: capitalize;
    }

    .no-bullets {
      list-style-type: none;
      padding-inline-start: 32px;
      margin: 0;
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

  @property()
  severity?: string;

  @property({ reflect: true })
  isOpen: boolean = false;

  @state()
  private _textInput: string = '';

  @state()
  private _enableDelete: boolean = false;

  @state()
  private _showNotification: boolean = false;

  @state()
  private _label: string = 'delete';

  @state()
  private _isCheckboxChecked: boolean = false;

  @state()
  private _connectedItems: Array<number> = [];

  @state()
  private _protectedItems: Array<number> = [];

  @state()
  private _isBatch: boolean = false;

  private _getDescription() {
    let text = '';
    if (this._isBatch) {
      text =
        'Decide if you want to keep these items. Deleting these items is permanent. This action cannot be undone.';
    } else if (!this._isBatch && this._connectedItems.length) {
      text = `When you delete the ${this.resourceName} project, this resource and all connected items are permanently deleted. This action cannot be undone.`;
    } else if (this.type === 'delete') {
      text = `Deleting ${this.resourceName} project will permanently delete the project and all related configurations from the system. This action cannot be undone.`;
    } else {
      text = `Removing ${this.resourceName} project will permanently remove the project and all related configurations from the system.`;
    }
    return text;
  }

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
    if (changedProps.has('resourceName')) {
      // write your logic to find if resource has any connected items
      if (this.resourceName === 'Demo') {
        this._connectedItems = Array.from({ length: 3 });
      } else if (this.resourceName === 'Batch Demo') {
        this._isBatch = true;
        this._connectedItems = Array.from({ length: 3 });
        this._protectedItems = Array.from({ length: 3 });
      } else if (this.resourceName === 'Batch Demo 15') {
        this._isBatch = true;
        this._connectedItems = Array.from({ length: 15 });
        this._protectedItems = Array.from({ length: 3 });
      }
    }
  }

  private _close() {
    this.isOpen = false;
    this._textInput = '';
  }

  private _setDeleteButtonState() {
    const isResourceNameMatching = this.resourceName === this._textInput;
    const isConnected = this._connectedItems.length > 0;

    this._enableDelete =
      (isConnected && this._isCheckboxChecked && isResourceNameMatching) ||
      (!isConnected && isResourceNameMatching) ||
      (this._isBatch && this._isCheckboxChecked);
  }

  private _onInputChange(e: Event) {
    this._textInput = (e.target as HTMLInputElement).value;
    this._setDeleteButtonState();
  }

  private _onDelete(e: Event) {
    this._close();
    this._showNotification = true;
  }

  private onNotificationClose() {
    this._showNotification = false;
  }

  private _onCheckboxChange(e: CustomEvent) {
    this._isCheckboxChecked = e.detail.checked;
    this._setDeleteButtonState();
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
          
          ${this._getDescription()}
          </cds-modal-body-content>
          ${
            this.severity === 'high'
              ? html`${!this._isBatch
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
                  : null}
                ${this._connectedItems.length
                  ? html`
                      <cds-modal-label
                        >${this._connectedItems.length < 10
                          ? html`The following
                            ${!this._isBatch ? 'connected' : null} items will
                            also be deleted. Review each item to confirm that
                            they can be deleted.`
                          : 'Confirm the items to be deleted.'}</cds-modal-label
                      >

                      <cds-checkbox
                        @cds-checkbox-changed="${this._onCheckboxChange}"
                        >${this._connectedItems.length} items:</cds-checkbox
                      >

                      ${this._connectedItems.length < 10
                        ? html`<ul class="no-bullets">
                            <li>
                              <cds-link> Route1_name ${launchIcon} </cds-link>
                            </li>
                            <li>
                              <cds-link> Hpt-392-ser ${launchIcon} </cds-link>
                            </li>
                            <li>
                              <cds-link> MKtps_02_094 ${launchIcon} </cds-link>
                            </li>
                          </ul>`
                        : null}
                      ${this._protectedItems.length
                        ? html`<p>
                            Note - the following selected items cannot be
                            deleted: <cds-link> Gigstore-0034 </cds-link>,
                            <cds-link> Gigstore-0058 </cds-link>
                          </p>`
                        : null}
                    `
                  : null}`
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
