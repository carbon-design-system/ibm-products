/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, PropertyValues, html } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './tearsheet.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { MatchMediaController } from '../../globals/js/utils/match-media-controller';
import { breakpoints } from '@carbon/layout';
import { blockClass, updateTearsheetSignals } from './tearsheet-signal';
import { SignalWatcher } from '@lit-labs/signals';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener';
import { ifDefined } from 'lit/directives/if-defined.js';
import { stackManager } from './stack-signal';

/**
 * Tearsheet component - A slide-out panel for displaying detailed content.
 *
 * @element c4p-preview-tearsheet
 * @slot header - The header content of the tearsheet
 * @slot influencer - Optional left sidebar content (wide variant only)
 * @slot body - Main body content
 * @slot footer - Footer content with actions
 * @fires c4p-preview-tearsheet-beingclosed - Fired when the tearsheet is about to close
 * @fires c4p-preview-tearsheet-closed - Fired after the tearsheet has closed
 */
@customElement(`${prefix}-preview-tearsheet`)
class CDSTearsheet extends SignalWatcher(HostListenerMixin(LitElement)) {
  /**
   * Specifies whether the tearsheet is currently open.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  /**
   * User can pass any class names that will be added to the modal container
   */
  @property({ attribute: 'container-class-name' })
  containerClassName: string = '';

  /**
   * Default influencer takes 256px, this allows override eg: 300px, 20rem
   */
  @property({ attribute: 'influencer-width' })
  influencerWidth: string = '';

  /**
   * Default summary content takes 256px, this allows override eg: 300px, 20rem
   */
  @property({ attribute: 'summary-content-width' })
  summaryContentWidth: string = '';

  /**
   * Defines the gap from top of the viewport. Defaulted to 3rem
   */
  @property({ attribute: 'vertical-gap' })
  verticalGap: string = '';

  /**
   * Default to wide variant. Pass in narrow for narrow tearsheet
   */
  @property({ reflect: true })
  variant: 'wide' | 'narrow' = 'wide';

  /**
   * Specify the CSS selectors that match the floating menus (comma-separated)
   */
  @property({ attribute: 'selectors-floating-menus' })
  selectorsFloatingMenus: string = '';

  /**
   * Specify a CSS selector that matches the DOM element that should be focused when the Modal opens
   */
  @property({ attribute: 'selector-primary-focus' })
  selectorPrimaryFocus: string = '';

  /**
   * Prevents the modal from closing when clicking outside
   */
  @property({ type: Boolean, attribute: 'prevent-close-on-click-outside' })
  preventCloseOnClickOutside: boolean = false;

  /**
   * Unique ID for this tearsheet instance
   */
  private uniqueId: string = `tearsheet-${Math.random().toString(36).substr(2, 9)}`;

  /**
   * Internal state for tracking if the tearsheet is in small screen mode
   */
  @state()
  private isSm: boolean = false;

  /**
   * Query the modal body element
   */
  @query('cds-modal-body')
  private modalBodyElement?: HTMLElement;

  private smMediaQuery = `(max-width: ${breakpoints.md.width})`;
  private isSmallDevice = new MatchMediaController(
    this,
    this.smMediaQuery,
    false
  );
  /**
   * Checks if the tearsheet has a decorator (AI label or other)
   */
  private get hasDecorator(): boolean {
    const headerElement = this.querySelector(`${prefix}-tearsheet-header`);
    if (!headerElement) {
      return false;
    }
    const decorator = headerElement.querySelector('[slot="decorator"]');
    return !!decorator;
  }

  /**
   * Checks if the tearsheet has an AI label decorator
   */
  private get hasAILabel(): boolean {
    const headerElement = this.querySelector(`${prefix}-tearsheet-header`);
    if (!headerElement) {
      return false;
    }
    const decorator = headerElement.querySelector('[slot="decorator"]');
    if (!decorator) {
      return false;
    }
    const tagName = decorator.tagName.toLowerCase();
    return tagName === 'cds-ai-label' || tagName === `${prefix}-ai-label`;
  }

  connectedCallback(): void {
    super.connectedCallback();

    // Set visibility class
    if (this.open) {
      this.classList.add('is-visible');
    } else {
      this.classList.remove('is-visible');
    }

    // Listen for close button click from header
    this.addEventListener(
      `${prefix}-tearsheet-header-close-button-clicked`,
      this.handleHeaderCloseButtonClick as EventListener
    );
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.updateCSSCustomProperties();
    this.isSm = this.isSmallDevice?.matches || this.variant === 'narrow';
    // Initialize all signals on first update
    updateTearsheetSignals({
      variant: this.variant,
      isSm: this.isSm,
      open: this.open,
      hasAILabel: this.hasAILabel,
    });
  }

  protected updated(_changedProperties: PropertyValues): void {
    this.updateIsSmState(_changedProperties);
    this.handleOpenPropertyChange(_changedProperties);
    this.updateCSSPropertiesIfNeeded(_changedProperties);

    if (_changedProperties.has('variant')) {
      updateTearsheetSignals({ variant: this.variant });
    }

    if (_changedProperties.has('isSm')) {
      this.updateInfluencerVisibility();
    }

    this.updateStackPropertiesIfNeeded();
  }

  private updateIsSmState(_changedProperties: PropertyValues): void {
    const previousIsSm = this.isSm;
    this.isSm = this.isSmallDevice?.matches || this.variant === 'narrow';

    if (this.isSm !== previousIsSm) {
      updateTearsheetSignals({ isSm: this.isSm });
    }
  }

  private handleOpenPropertyChange(_changedProperties: PropertyValues): void {
    if (!_changedProperties.has('open')) {
      return;
    }

    updateTearsheetSignals({ open: this.open });

    if (this.modalBodyElement) {
      stackManager.notifyStack(this.uniqueId, this.open, this.modalBodyElement);
    }

    this.classList.toggle('is-visible', this.open);
    this.updateStackProperties();
  }

  private updateCSSPropertiesIfNeeded(
    _changedProperties: PropertyValues
  ): void {
    const hasRelevantChanges =
      _changedProperties.has('influencerWidth') ||
      _changedProperties.has('summaryContentWidth') ||
      _changedProperties.has('verticalGap');

    if (hasRelevantChanges) {
      this.updateCSSCustomProperties();
    }
  }

  private updateStackPropertiesIfNeeded(): void {
    const stackState = stackManager.state;
    if (stackState.stack.length > 0) {
      this.updateStackProperties();
    }
  }

  /**
   * Update CSS custom properties for stacking
   */
  private updateStackProperties(): void {
    const stackState = stackManager.state;
    const depth = stackManager.getDepth(this.uniqueId);
    const scaleFactor = stackManager.getScaleFactor(this.uniqueId);
    const blockSizeChange = stackManager.getBlockSizeChange(this.uniqueId);

    // Manage --stack-activated class on host element
    if (stackState.stack.length > 1) {
      this.classList.add(`${blockClass}--stack-activated`);
    } else {
      this.classList.remove(`${blockClass}--stack-activated`);
    }

    if (depth !== -1) {
      this.style.setProperty('--stack-depth', depth.toString());
      this.style.setProperty('--scale-factor', scaleFactor.toString());
      this.style.setProperty('--block-size-change', blockSizeChange);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Remove event listener
    this.removeEventListener(
      `${prefix}-tearsheet-header-close-button-clicked`,
      this.handleHeaderCloseButtonClick as EventListener
    );

    // Notify stack manager that this tearsheet is closing
    stackManager.notifyStack(this.uniqueId, false, null);

    // Clean up CSS custom properties
    if (this.influencerWidth) {
      document.documentElement.style.removeProperty(
        '--tearsheet-influencer-width'
      );
    }
    if (this.summaryContentWidth) {
      document.documentElement.style.removeProperty(
        '--tearsheet-summary-content-width'
      );
    }
    if (this.verticalGap) {
      document.documentElement.style.removeProperty('--tearsheet-vertical-gap');
    }
  }

  /**
   * Update CSS custom properties for dynamic styling
   */
  private updateCSSCustomProperties(): void {
    if (this.influencerWidth) {
      document.documentElement.style.setProperty(
        '--tearsheet-influencer-width',
        this.influencerWidth
      );
    }
    if (this.summaryContentWidth) {
      document.documentElement.style.setProperty(
        '--tearsheet-summary-content-width',
        this.summaryContentWidth
      );
    }
    if (this.verticalGap) {
      document.documentElement.style.setProperty(
        '--tearsheet-vertical-gap',
        this.verticalGap
      );
    }
  }

  /**
   * Update influencer visibility based on slot content and screen size
   * Handles both slot changes and screen size changes
   */
  private updateInfluencerVisibility(slot?: HTMLSlotElement): void {
    const influencerSlot =
      slot ||
      (this.shadowRoot?.querySelector(
        'slot[name="influencer"]'
      ) as HTMLSlotElement);

    if (!influencerSlot) {
      return;
    }

    const hasContent =
      influencerSlot.assignedNodes({ flatten: true }).length > 0;
    const shouldShow = hasContent && !this.isSm;

    // Update CSS class on modal body
    if (this.modalBodyElement) {
      if (shouldShow) {
        this.modalBodyElement.classList.add(
          `${blockClass}__body-layout--has-influencer`
        );
      } else {
        this.modalBodyElement.classList.remove(
          `${blockClass}__body-layout--has-influencer`
        );
      }
    }
  }

  /**
   * Handle influencer slot change
   */
  private handleInfluencerSlotChange = (e: Event) => {
    const slot = e.target as HTMLSlotElement;
    this.updateInfluencerVisibility(slot);
  };

  /**
   * Common method to handle tearsheet close with proper event dispatching
   * @param originalEvent - The original event that triggered the close (optional)
   * @param useAsync - Whether to dispatch closed event asynchronously
   */
  private closeTearsheet(originalEvent?: Event, useAsync: boolean = false) {
    // Dispatch the beingclosed event (cancelable)
    const beforeCloseEvent = new CustomEvent(
      `${prefix}-preview-tearsheet-beingclosed`,
      {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {},
      }
    );

    if (!this.dispatchEvent(beforeCloseEvent)) {
      // If event was cancelled, prevent closing
      if (originalEvent) {
        originalEvent.preventDefault();
      }
      return;
    }

    // Close the tearsheet
    this.open = false;

    // Dispatch closed event
    const dispatchClosedEvent = () => {
      this.dispatchEvent(
        new CustomEvent(`${prefix}-preview-tearsheet-closed`, {
          bubbles: true,
          composed: true,
          detail: {},
        })
      );
    };

    if (useAsync) {
      // Use microtask for async scenarios (e.g., click outside)
      Promise.resolve().then(dispatchClosedEvent);
    } else {
      dispatchClosedEvent();
    }
  }

  /**
   * Handle close button click from the header
   * This is an internal event that triggers the tearsheet to close
   */
  private handleHeaderCloseButtonClick = (event: Event) => {
    // Stop the internal event from propagating
    event.stopPropagation();
    this.closeTearsheet();
  };

  /**
   * Handle close event from the modal (ESC key, click outside, etc.)
   */
  private handleClose = (event: Event) => {
    this.closeTearsheet(event, true);
  };

  /**
   * Parse floating menu selectors from comma-separated string
   */
  private getFloatingMenuSelectors(): string {
    const defaultSelectors = [
      `.${prefix}--overflow-menu-options`,
      `.${prefix}--tooltip`,
      '.flatpickr-calendar',
      `.${blockClass}__container`,
      `.${prefix}--menu`,
    ];

    const customSelectors = this.selectorsFloatingMenus
      ? this.selectorsFloatingMenus.split(',').map((s) => s.trim())
      : [];

    return [...defaultSelectors, ...customSelectors].join(',');
  }

  render() {
    const classes = classMap({
      [blockClass]: true,
      [`${blockClass}--wide`]: this.variant === 'wide',
      [`${blockClass}--narrow`]: this.variant === 'narrow',
      [`${blockClass}--has-ai-label`]: this.hasAILabel,
      [`${blockClass}--has-decorator`]: this.hasDecorator && !this.hasAILabel,
    });

    const containerClasses = `${blockClass}__container ${this.containerClassName}`;

    return html`<cds-modal
      class=${classes}
      size=${this.variant === 'narrow' ? 'sm' : 'lg'}
      ?open="${this.open}"
      container-class="${containerClasses}"
      ?prevent-close-on-click-outside="${this.preventCloseOnClickOutside}"
      aria-label="${ifDefined(this.ariaLabel || undefined)}"
      selector-primary-focus="${ifDefined(
        this.selectorPrimaryFocus || undefined
      )}"
      selectors-floating-menus="${this.getFloatingMenuSelectors()}"
      @cds-modal-beingclosed="${this.handleClose}"
      @cds-modal-closed="${this.handleClose}"
      ?full-width="${true}"
      ai-label="${ifDefined(this.hasAILabel || undefined)}"
    >
      <slot name="decorator"></slot>
      <slot name="header"></slot>
      <cds-modal-body class="${blockClass}__body-layout">
        <slot
          name="influencer"
          @slotchange=${this.handleInfluencerSlotChange}
        ></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </cds-modal-body>
    </cds-modal>`;
  }

  static styles = styles;
}

export default CDSTearsheet;
