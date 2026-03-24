/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/button/button-set.js';

const blockClass = 'action-set';

export type ButtonKind =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'ghost'
  | 'danger--ghost';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ActionButton {
  key?: string;
  label: string;
  kind?: ButtonKind;
  onClick?: (event: Event) => void;
  disabled?: boolean;
  loading?: boolean;
}

const componentName = 'ActionSet';
const defaultKind: ButtonKind = 'primary';

/**
 * Validates ActionSet props and logs warnings for invalid configurations
 */
function validateActionSetProps(actions: ActionButton[], size: ButtonSize): void {
  if (actions && actions.length) {
    const problems: string[] = [];

    const willStack = (s: ButtonSize, numberOfActions: number): boolean =>
      s === 'sm' || (s === 'md' && numberOfActions > 2);

    const stacking = willStack(size, actions.length);

    const countActions = (kind: ButtonKind) =>
      actions.filter((action) => (action.kind || defaultKind) === kind).length;

    const primaryActions = countActions('primary');
    const secondaryActions = countActions('secondary');
    const dangerActions = countActions('danger');
    const ghostActions = countActions('ghost') + countActions('danger--ghost');

    if (stacking && actions.length > 3) {
      problems.push(
        `you cannot have more than three actions in this size of ${componentName}`
      );
    }

    if (actions.length > 4) {
      problems.push(
        `you cannot have more than four actions in a ${componentName}`
      );
    }

    if (primaryActions > 1) {
      problems.push(
        `you cannot have more than one 'primary' action in a ${componentName}`
      );
    }

    if (ghostActions > 1) {
      problems.push(
        `you cannot have more than one 'ghost' action in a ${componentName}`
      );
    }

    if (stacking && actions.length > 1 && ghostActions > 0) {
      problems.push(
        `you cannot have a 'ghost' button in conjunction with other action types in this size of ${componentName}`
      );
    }

    if (
      actions.length >
      primaryActions + secondaryActions + dangerActions + ghostActions
    ) {
      problems.push(
        `you can only have 'primary', 'danger', 'secondary', 'ghost' and 'danger--ghost' buttons in a ${componentName}`
      );
    }

    if (problems.length > 0) {
      console.warn(
        `Invalid prop \`actions\` supplied to \`${componentName}\`: ${problems.join(
          ', and '
        )}.`
      );
    }
  }
}

/**
 * ActionSet component for web components
 */
@customElement('action-set')
export class ActionSet extends LitElement {
  /**
   * Array of action buttons
   */
  @property({ type: Array })
  actions: ActionButton[] = [];

  /**
   * Button size
   */
  @property({ type: String, attribute: 'button-size' })
  buttonSize: ButtonSize = 'lg';

  /**
   * Size of the action set
   */
  @property({ type: String })
  size: ButtonSize = 'md';

  // Disable shadow DOM to use Carbon styles
  createRenderRoot() {
    return this;
  }

  private willStack(size: ButtonSize, numberOfActions: number): boolean {
    return size === 'sm' || (size === 'md' && numberOfActions > 2);
  }

  private buttonOrder(kind?: ButtonKind): number {
    const order: Record<string, number> = {
      ghost: 1,
      'danger--ghost': 2,
      danger: 4,
      primary: 5,
    };
    return order[kind || 'primary'] ?? 3;
  }

  private getSortedActions(): ActionButton[] {
    const buttons = [...this.actions];
    const stacking = this.willStack(this.size, buttons.length);

    // Sort actions with ghost/ghost-danger buttons first and primary/danger buttons last
    // (or the opposite way if we're stacking)
    buttons.sort(
      (action1, action2) =>
        (this.buttonOrder(action1.kind) - this.buttonOrder(action2.kind)) *
        (stacking ? -1 : 1)
    );

    return buttons;
  }

  private handleButtonClick(action: ActionButton, event: Event) {
    if (action.onClick && !action.disabled && !action.loading) {
      action.onClick(event);
    }
  }

  render() {
    if (!this.actions || this.actions.length === 0) {
      return html``;
    }

    // Validate actions configuration
    validateActionSetProps(this.actions, this.size);

    const stacking = this.willStack(this.size, this.actions.length);
    const sortedActions = this.getSortedActions();

    const classes = {
      [blockClass]: true,
      [`${blockClass}--row-single`]: !stacking && this.actions.length === 1,
      [`${blockClass}--row-double`]: !stacking && this.actions.length === 2,
      [`${blockClass}--row-triple`]: !stacking && this.actions.length === 3,
      [`${blockClass}--row-quadruple`]: !stacking && this.actions.length >= 4,
      [`${blockClass}--stacking`]: stacking,
      [`${blockClass}--${this.size}`]: true,
    };

    return html`
      <div class="${classMap(classes)}" role="presentation">
        <cds-button-set ?stacked="${stacking}">
          ${sortedActions.map(
            (action, index) => html`
              <cds-button
                class="${blockClass}__action-button ${action.kind === 'ghost' ||
                action.kind === 'danger--ghost'
                  ? `${blockClass}__action-button--ghost`
                  : ''}"
                kind="${action.kind || 'primary'}"
                size="${this.buttonSize}"
                ?disabled="${action.disabled || action.loading}"
                @click="${(e: Event) => this.handleButtonClick(action, e)}"
              >
                ${action.label}
                ${action.loading
                  ? html`<cds-inline-loading></cds-inline-loading>`
                  : ''}
              </cds-button>
            `
          )}
        </cds-button-set>
      </div>
    `;
  }
}
