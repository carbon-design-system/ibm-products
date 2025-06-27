import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@carbon/web-components/es/components/tag/index.js';
import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';
import '@carbon/web-components/es/components/link/index.js';
import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/search/index.js';
import { createOverflowHandler } from '@carbon/utilities';
import styles from './set-of-users.scss?lit';

@customElement('set-of-users')
export default class SetOfUsers extends LitElement {
  @state()
  hiddenUsers: any[] = [];

  @property({ type: Array, attribute: 'users-data', reflect: true })
  usersData: any[] = [];

  @property({ type: String, attribute: 'theme', reflect: true })
  theme: string = 'white';

  @property({ type: Boolean, attribute: 'condensed', reflect: true })
  condensed = false;

  @query('#user-container')
  private container!: HTMLElement;

  @query('[data-offset]')
  private offset!: HTMLElement;

  @state()
  private isPopoverOpen = false;

  @state()
  private modalOpen = false;

  @state()
  private searchString = '';

  private overflowHandler: { disconnect: () => void } | undefined;
  private resizeObserver: ResizeObserver | undefined; // only for observing width changes of offset

  firstUpdated() {
    this.updateComplete.then(() => {
      this.initializeOverflowHandler();

      // Observe size changes in the overflow tag
      this.resizeObserver = new ResizeObserver(() => {
        this.reinitializeOverflowHandler();
      });
      this.resizeObserver.observe(this.offset);

      document.addEventListener('click', this.handleDocumentClick);
    });
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('usersData')) {
      this.updateComplete.then(() => {
        this.hiddenUsers = [];
        this.reinitializeOverflowHandler();
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.overflowHandler) {
      this.overflowHandler.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    document.removeEventListener('click', this.handleDocumentClick);
  }

  private initializeOverflowHandler() {
    if (!this.container) return;
    this.overflowHandler = createOverflowHandler({
      container: this.container,
      onChange: (_, hiddenItems: HTMLElement[]) => {
        const filteredChildren = Array.from(this.container.children).filter(
          (child) =>
            !child.hasAttribute('data-offset') &&
            !child.hasAttribute('data-fixed')
        );

        this.hiddenUsers = hiddenItems.map((hiddenItem) => {
          const index = filteredChildren.indexOf(hiddenItem);
          return this.usersData[index];
        });
      },
    });
  }

  private reinitializeOverflowHandler() {
    if (this.overflowHandler) {
      this.overflowHandler.disconnect();
    }
    this.initializeOverflowHandler();
  }

  private handleTogglePopover(event: Event) {
    if (event instanceof PointerEvent) {
      this.isPopoverOpen = !this.isPopoverOpen;
    }
    if (event instanceof KeyboardEvent) {
      if (event.key === ' ' || event.key === 'Enter') {
        this.isPopoverOpen = !this.isPopoverOpen;
      }
    }
  }

  private handleDocumentClick = (event: Event) => {
    if (event.target !== this) {
      this.isPopoverOpen = false;
    }
  };

  render() {
    return html` <div
        id="user-container"
        style="display: flex; white-space: nowrap;"
      >
        ${this.usersData.map(
          (user) => html`
            <span>
              <c4p-user-avatar
                theme=${this.theme}
                class=${classMap({
                  [`custom-avatar`]: true,
                  [`custom-avatar__${user.size}`]: true,
                  [`condensed`]: this.condensed,
                })}
                name=${user.name}
                background-color=${user.backgroundColor}
                size=${user.size}
                tooltip-text=${user.name}
                tooltip-alignment="top"
              ></c4p-user-avatar>
            </span>
          `
        )}
        <span data-offset ?data-hidden=${this.hiddenUsers.length === 0}>
          <cds-popover
            ?open=${this.isPopoverOpen}
            ?highContrast=${true}
            align=${document.dir === 'rtl' ? 'bottom-left' : 'bottom-right'}
          >
            <div class="playground-trigger">
              <button
                class=${classMap({
                  [`custom-overflow`]: true,
                  [`custom-overflow__${this.usersData[0].size}`]: true,
                })}
                @click=${this.handleTogglePopover}
                @keydown=${this.handleTogglePopover}
              >
                +${this.hiddenUsers.length}
              </button>
            </div>
            <cds-popover-content>
              <div style="padding: 0.9rem;" class="popover-container">
                ${this.hiddenUsers.length > 0
                  ? this.hiddenUsers
                      .slice(0, 10)
                      .map(
                        (user) => html`<p class="popover-user">${user.name}</p>`
                      )
                  : nothing}
                ${this.hiddenUsers.length > 10
                  ? html`
                      <cds-link
                        class="view-all"
                        @click=${() => (this.modalOpen = true)}
                      >
                        View all users
                      </cds-link>
                    `
                  : nothing}
              </div>
            </cds-popover-content>
          </cds-popover>
        </span>
      </div>
      ${this.hiddenUsers.length > 10
        ? html`<cds-modal
            ?open=${this.modalOpen}
            size="sm"
            @cds-modal-closed=${(e: CustomEvent) => (this.modalOpen = false)}
          >
            <cds-modal-header>
              <cds-modal-close-button></cds-modal-close-button>
              <cds-modal-heading>All users</cds-modal-heading>
              <cds-search
                size="lg"
                close-button-label-text="Clear search input"
                class="users-search"
                label-text="Search"
                placeholder="Search all users"
                type="text"
                @cds-search-input=${(e: CustomEvent) =>
                  (this.searchString = e.detail.value)}
              ></cds-search>
            </cds-modal-header>
            <cds-modal-body>
              <div class="modal-users-container gradient-vertical">
                ${this.usersData
                  .filter(
                    (user) =>
                      user.name &&
                      new RegExp(this.searchString, 'i').test(user.name)
                  )
                  .map((user) => html`<cds-tag>${user?.name}</cds-tag>`)}
              </div>
            </cds-modal-body>
          </cds-modal>`
        : nothing}`;
  }

  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'set-of-users': SetOfUsers;
  }
}
