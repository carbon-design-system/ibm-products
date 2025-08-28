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
import '@carbon/web-components/es/components/icon-button/index.js';

// import Edit16 from '@carbon/icons/lib/edit/16.js';
import ChevronIcon16 from '@carbon/web-components/es/icons/chevron--up/16.js';

import { prefix } from '../../globals/settings';
import styles from './checklist.scss?lit';
import { classMap } from 'lit/directives/class-map.js';
import './checklist-chart';

const blockClass = `${prefix}--checklist`;

/**
 * @element c4p-checklist
 * @fires c4p-checklist-view-all - The custom event which is fired when a user clicks on View All button in checklist footer.
 * @fires c4p-checklist-toggle - The custom event which is fired when user clicks on toggle button in checklist header.
 */
@customElement(`${prefix}-checklist`)
class CDSChecklist extends LitElement {
  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  title;

  @property({ type: String })
  chartLabel;

  @property({ type: Number })
  chartValue;

  @property({ type: Boolean })
  disableToggle = false;

  @property({ type: String })
  toggleLabel;

  @property({ type: String })
  toggleLabelAlign;

  @property({ type: String })
  toggleAriaLabel;

  @property({ type: String })
  viewAllLabel;

  private _viewAll(event: Event) {
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
        (this.constructor as typeof CDSChecklist).checklistViewAll,
        init
      )
    );
  }

  private _onToggle(event: Event) {
    this.open = !this.open;
    // Fire custom event
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
        (this.constructor as typeof CDSChecklist).checklistToggle,
        init
      )
    );
  }

  render() {
    const {
      open,
      chartLabel,
      chartValue,
      title,
      disableToggle,
      toggleLabel,
      toggleLabelAlign,
      toggleAriaLabel,
      viewAllLabel,
      _viewAll: viewAll,
      _onToggle: onToggle,
    } = this;

    const classes = classMap({
      [`${blockClass}`]: true,
      [`${blockClass}__closed`]: !open,
    });

    return html`
      <aside class=${classes}>
        <!-- Header -->
        <header class="${blockClass}__header">
          <slot name="checklist-header">
            ${html`<c4p-checklist-chart
              value=${chartValue}
            ></c4p-checklist-chart>`}
            ${(title || chartLabel) &&
            html`<div class="${blockClass}__titles">
              <!-- checklist title -->
              ${title && html` <h3 class="${blockClass}__title">${title}</h3> `}
              <!-- chart label -->
              ${chartLabel &&
              html`
                <p id="{chartLabelId}" class="${blockClass}__chart-label">
                  ${chartLabel}
                </p>
              `}
            </div>`}
          </slot>
          <!-- Checklist toggle button -->
          ${!disableToggle &&
          html`<cds-icon-button
            kind="ghost"
            size="sm"
            align=${toggleLabelAlign}
            aria-label=${toggleAriaLabel}
            class="${blockClass}__toggle"
            @click=${onToggle}
          >
            ${ChevronIcon16({ slot: 'icon', class: `${blockClass}__chevron` })}
            <span slot="tooltip-content">${toggleLabel}</span>
          </cds-icon-button>`}
        </header>
        <div class="${blockClass}__content-outer">
          <div class="${blockClass}__content-inner">
            <!-- Checklist body -->
            <!-- This is where you add c4p-checklist-group elements-->
            <slot></slot>
            <!-- Checklist footer -->

            <div class="${blockClass}__footer">
              <slot name="checklist-footer">
                ${viewAllLabel &&
                html`<cds-link @click=${viewAll}> ${viewAllLabel} </cds-link>`}
              </slot>
            </div>
          </div>
        </div>
      </aside>
    `;
  }

  /**
   * The custom event which is fired when the  view all button in checklist footer is clicked or when the Enter key is pressed on it.
   */
  static get checklistViewAll() {
    return `${prefix}-checklist-view-all`;
  }

  /**
   * The custom event which is fired when the checklist toggle button is clicked or when the Enter key is pressed on it.
   */
  static get checklistToggle() {
    return `${prefix}-checklist-toggle`;
  }

  static styles = styles;
}

export default CDSChecklist;
