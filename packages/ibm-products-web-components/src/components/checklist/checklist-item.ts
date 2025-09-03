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
import { Statuses, Kinds } from './checklist.types';
import { classMap } from 'lit/directives/class-map.js';

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

  /**
   * status of the c4p-checklist-item
   */
  @property()
  status = '';

  /** When true, makes the checklist item label clickable */
  @property({ type: Boolean })
  clickable = false;

  private _handleClick(event: Event) {
    const triggeredBy = event.target;
    event.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy,
      },
    };
    this.dispatchEvent(
      new CustomEvent(
        (this.constructor as typeof CDSChecklistItem).checklistItemClicked,
        init
      )
    );
  }

  private _mapStatusToKind(status): Kinds {
    switch (status) {
      case Statuses.NotStarted:
        return Kinds.unchecked;
      case Statuses.InProgress:
        return Kinds.indeterminate;
      case Statuses.Completed:
        return Kinds.checked;
      case Statuses.Error:
        return Kinds.error;
      case Statuses.Disabled:
        return Kinds.disabled;
      default:
        return Kinds.error;
    }
  }

  render() {
    const { clickable, label, status, _handleClick: handleClick } = this;

    const iconKind: string = this._mapStatusToKind(status);

    const classes = classMap({
      [`${prefix}--checklist__label`]: true,
      [`${prefix}--checklist__label--clickable`]: clickable,
    });

    return html`
      <li class="${prefix}--checklist__list-item"> 
          <slot name="icon">
            <c4p-checklist-icon kind="${iconKind}" /> </c4p-checklist-icon
          ></slot>
          <slot name="content" >
          <div class="${classes}" title=${label}  @click=${clickable ? handleClick : undefined} >${label}</div> </slot>
      </li>
    `;
  }

  /**
   * The custom event which is fired when the checklist item is clicked.
   */
  static get checklistItemClicked() {
    return `${prefix}-checklist-item-clicked`;
  }

  static styles = styles;
}

export default CDSChecklistItem;
