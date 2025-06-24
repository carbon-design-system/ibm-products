import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '@carbon/web-components/es/components/tag/index.js';
import '@carbon/web-components/es/components/link/index.js';
import '@carbon/web-components/es/components/modal/index.js';
import '@carbon/web-components/es/components/search/index.js';
import { createOverflowHandler } from '@carbon/utilities';
import { TagData } from './example-data';
import styles from './set-of-tags.scss?lit';

@customElement('set-of-tags')
export default class SetOfTags extends LitElement {
  @state()
  hiddenTags: TagData[] = [];

  @property({ type: Array, attribute: 'tags-data', reflect: true })
  tagsData: TagData[] = [];

  @query('#tag-container')
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
    if (changedProperties.has('tagsData')) {
      const previousIsPopoverOpen = this.isPopoverOpen;
      this.updateComplete.then(() => {
        this.hiddenTags = [];
        this.isPopoverOpen = previousIsPopoverOpen;
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

        this.hiddenTags = hiddenItems.map((hiddenItem) => {
          const index = filteredChildren.indexOf(hiddenItem);
          return this.tagsData[index];
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
      const popoverElement = (event.target as HTMLElement)?.parentElement
        ?.parentElement;
      popoverElement?.toggleAttribute('open');
    }
    if (event instanceof KeyboardEvent) {
      if (event.key === ' ' || event.key === 'Enter') {
        const popoverElement = (event.target as HTMLElement)?.parentElement
          ?.parentElement;
        popoverElement?.toggleAttribute('open');
      }
    }
  }

  private handleDocumentClick = (event: Event) => {
    if (!this.offset.contains(event.target as Node)) {
      this.isPopoverOpen = false;
    }
  };

  render() {
    return html` <div
        id="tag-container"
        style="display: flex; white-space: nowrap;"
      >
        ${this.tagsData.map(
          (tag) => html`
            <span>
              ${tag.onClose
                ? html`<cds-dismissible-tag
                    @cds-dismissible-tag-beingclosed=${(e: CustomEvent) => {
                      e.preventDefault();
                      this.tagsData = this.tagsData.filter(
                        (t) => t.text !== tag.text
                      );
                    }}
                    text=${tag?.text}
                    tag-title="Provide a custom title to the tag"
                    type=${tag.type}
                    size=${tag.size}
                  ></cds-dismissible-tag>`
                : html`<cds-tag type=${tag.type} size=${tag.size}
                    >${tag?.text}</cds-tag
                  >`}
            </span>
          `
        )}
        <span data-offset ?data-hidden=${this.hiddenTags.length === 0}>
          <cds-popover
            ?open=${this.isPopoverOpen}
            ?highContrast=${true}
            align=${document.dir === 'rtl' ? 'bottom-left' : 'bottom-right'}
          >
            <div class="playground-trigger">
              <cds-operational-tag
                size=${this.tagsData[0]?.size}
                title="+${this.hiddenTags.length}"
                text="+${this.hiddenTags.length}"
                @click=${this.handleTogglePopover}
                @keydown=${this.handleTogglePopover}
              ></cds-operational-tag>
            </div>
            <cds-popover-content>
              <div style="padding: 0.9rem;" class="popover-container">
                ${this.hiddenTags.length > 0
                  ? this.hiddenTags.slice(0, 10).map((tag) =>
                      tag.onClose
                        ? html`
                            <div class="dismissible-tag-container">
                              <cds-dismissible-tag
                                @cds-dismissible-tag-beingclosed=${(
                                  e: CustomEvent
                                ) => {
                                  e.preventDefault();
                                  this.tagsData = this.tagsData.filter(
                                    (t) => t.text !== tag.text
                                  );
                                }}
                                text=${tag?.text}
                                tag-title="Provide a custom title to the tag"
                                type=${tag.type}
                                size=${tag.size}
                              ></cds-dismissible-tag>
                            </div>
                          `
                        : html`<p class="popover-tag">${tag?.text}</p>`
                    )
                  : nothing}
                ${this.hiddenTags.length > 10
                  ? html`
                      <cds-link
                        class="view-all"
                        @click=${() => (this.modalOpen = true)}
                      >
                        View all tags
                      </cds-link>
                    `
                  : nothing}
              </div>
            </cds-popover-content>
          </cds-popover>
        </span>
      </div>
      ${this.hiddenTags.length > 10
        ? html`<cds-modal
            ?open=${this.modalOpen}
            size="sm"
            @cds-modal-closed=${(e: CustomEvent) => (this.modalOpen = false)}
          >
            <cds-modal-header>
              <cds-modal-close-button></cds-modal-close-button>
              <cds-modal-heading>All tags</cds-modal-heading>
              <cds-search
                size="lg"
                close-button-label-text="Clear search input"
                class="tags-search"
                label-text="Search"
                placeholder="Search all tags"
                type="text"
                @cds-search-input=${(e: CustomEvent) =>
                  (this.searchString = e.detail.value)}
              ></cds-search>
            </cds-modal-header>
            <cds-modal-body>
              <div class="modal-tags-container gradient-vertical">
                ${this.tagsData
                  .filter(
                    (tag) =>
                      tag.text &&
                      new RegExp(this.searchString, 'i').test(tag.text)
                  )
                  .map((tag) =>
                    tag.onClose
                      ? html`<cds-dismissible-tag
                          text=${tag?.text}
                          tag-title="Provide a custom title to the tag"
                          type=${tag.type}
                          size=${tag.size}
                        ></cds-dismissible-tag>`
                      : html`<cds-tag type=${tag.type} size=${tag.size}
                          >${tag?.text}</cds-tag
                        >`
                  )}
              </div>
            </cds-modal-body>
          </cds-modal>`
        : nothing}`;
  }

  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'set-of-tags': SetOfTags;
  }
}
