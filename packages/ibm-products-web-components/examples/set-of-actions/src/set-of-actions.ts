import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/overflow-menu/index.js';
import { createOverflowHandler } from '@carbon/utilities';
import OverflowMenuVertical16 from '@carbon/web-components/es/icons/overflow-menu--vertical/16.js';
import styles from './set-of-actions.scss?lit';

interface Action {
  text: string;
  icon: () => void;
  size?: string;
  onClick: () => void;
}

@customElement('set-of-actions')
export default class SetOfActions extends LitElement {
  /**
   * Hidden actions that will be rendered in the overflow menu.
   */
  @property({ type: Array })
  hiddenItems: Action[] = [];

  /**
   * The list of actions.
   */
  @property({ type: Array, attribute: 'actions-data', reflect: true })
  actionsData: Action[] = [];

  /**
   * Container holding all action buttons and the overflow menu.
   */
  @query('#actionContainer')
  private container!: HTMLElement;

  private overflowHandler: { disconnect: () => void } | undefined;

  firstUpdated() {
    if (!this.container) return;
    this.updateComplete.then(() => {
      setTimeout(() => {
        this.overflowHandler = createOverflowHandler({
          container: this.container,
          onChange: (visibleItems: HTMLElement[], _) => {
            this.hiddenItems = this.actionsData?.slice(visibleItems.length);
          },
        });
      });
    });
  }
  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('actionsData')) {
      this.overflowHandler?.disconnect();
      this.overflowHandler = createOverflowHandler({
        container: this.container,
        onChange: (visibleItems: HTMLElement[], _) => {
          this.hiddenItems = this.actionsData?.slice(visibleItems.length);
        },
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.overflowHandler) {
      this.overflowHandler.disconnect();
    }
  }

  render() {
    return html`
      <div id="actionContainer" style="display: flex;">
        ${this.actionsData?.map(
          (action, index) => html`
            <span>
              <cds-icon-button
                @click="${action.onClick}"
                size=${action.size}
                kind="ghost"
                align=${index == this.actionsData.length - 1
                  ? 'bottom-right'
                  : 'bottom-left'}
              >
                ${action.icon}
                <span slot="tooltip-content">${action.text}</span>
              </cds-icon-button>
            </span>
          `
        )}
        <div
          data-offset
          data-hidden
          data-floating-menu-container
          style="
      position: relative;
    "
        >
          <cds-overflow-menu
            size=${this.actionsData[0].size}
            close-on-activation
            enter-delay-ms="0"
            leave-delay-ms="0"
          >
            ${OverflowMenuVertical16({
              class: 'action-svg',
              slot: 'icon',
            })}
            <span slot="tooltip-content">Options</span>
            <cds-overflow-menu-body flipped>
              ${this.hiddenItems?.map(
                (item) => html`
                  <cds-overflow-menu-item @click="${item.onClick}">
                    ${item.text}
                  </cds-overflow-menu-item>
                `
              )}
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </div>
      </div>
    `;
  }
  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'set-of-actions': SetOfActions;
  }
}
