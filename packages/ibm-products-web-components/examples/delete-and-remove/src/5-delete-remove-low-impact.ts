/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@carbon/web-components/es/components/button/button.js';
import '@carbon/web-components/es/components/notification/toast-notification.js';

import { getCurrentTime } from './utils';
import styles from './delete-and-remove.scss?lit';
import TrashCan16 from '@carbon/icons/es/trash-can/16';
import SubtractAlt16 from '@carbon/icons/es/subtract--alt/16';
import { iconLoader } from "@carbon/web-components/es/globals/internal/icon-loader.js";

// example implementation of low impact delete / remove pattern
@customElement('delete-remove-low-impact')
export class DeleteRemoveLowImpact extends LitElement {
  static styles = styles;

  @property()
  action: string;

  @state()
  private _showNotification: boolean = false;

  private _onNotificationClose() {
    this._showNotification = false;
  }

  private _onDeleteButtonClick() {
    // add your logic to delete/remove the resource
    this._showNotification = true;
  }

  render() {
    return html`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action === 'delete' ? 'Delete' : 'Remove'}
        ${this.action === 'delete'
          ? html`${iconLoader(TrashCan16, { slot: 'icon' })}`
          : html`${iconLoader(SubtractAlt16, { slot: 'icon' })}`}
      </cds-button>
      ${this._showNotification
        ? html`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action === 'delete'
              ? 'deleted'
              : 'removed'}."
            caption=${getCurrentTime()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`
        : null}
    `;
  }
}

export default DeleteRemoveLowImpact;
