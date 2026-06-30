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
import { prefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './coachmark.scss?lit';
import { SignalWatcher } from '@lit-labs/signals';
import '@carbon/web-components/es/components/popover/index.js';
import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import { makeDraggable } from '../../utilities/makeDraggable/makeDraggable';
import {
  resetCoachmarkDetailsSignal,
  updateCoachmarkDetailsSignal,
} from './coachmark-context';

export const blockClass = `${prefix}--coachmark`;

/**
 * coachmark main component
 * @element c4p-coachmark
 * @fires c4p-coachmark-opened
 *   The custom event fired when the coachmark is opened.
 *   This event can be used to perform actions such as focusing elements when the coachmark becomes visible.
 * @fires c4p-coachmark-closed
 *   The custom event fired when the coachmark is closed.
 *   This event can be used to perform actions such as restoring focus when the coachmark is dismissed.
 */
@customElement(`${prefix}-coachmark`)
class CDSCoachmark extends SignalWatcher(HostListenerMixin(LitElement)) {
  /**
   * Specifies whether the component is currently open.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;
  /**
   * Where to render the Coachmark relative to its target.
   */
  @property({ reflect: true, type: String })
  align?: string = POPOVER_ALIGNMENT.TOP;
  /**
   * Fine tune the position of the target in pixels.
   */
  @property({ type: Object })
  position?: { x: number; y: number };
  /**
   * Specifies whether the component is floating or not.
   */
  @property({ type: Boolean, reflect: true })
  floating?: boolean = false;
  /**
   * Specify whether the component should be rendered on high-contrast.
   */
  @property({ reflect: true })
  highContrast?: boolean = false;
  /**
   * Specify whether a drop shadow should be rendered on the popover.
   */
  @property({ reflect: true })
  dropShadow?: boolean = false;
  /**
   * Specify whether a caret should be rendered on the popover. This is intended to use only for coachmark patterns.
   */
  @property({ reflect: true })
  caret?: boolean = false;
  /**
   * CSS selector for the element that should receive focus when the coachmark opens.
   * If not provided, no automatic focus management will occur.
   */
  @property({ attribute: 'selector-primary-focus', reflect: true })
  selectorPrimaryFocus?: string;
  /**
   * Aria label for when the floating coachmark is picked up for dragging.
   */
  @property({ attribute: 'drag-aria-label', reflect: true })
  dragAriaLabel?: string = 'Picked up the draggable coachmark';

  private dragCleanup: (() => void) | null = null;
  private keydownHandler: ((event: KeyboardEvent) => void) | null = null;
  private moveCounter: number = 0;
  private isDragging: boolean | null = null;
  private moveAnnouncement: string = '';

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.dragCleanup) {
      this.dragCleanup();
    }
    if (this.keydownHandler) {
      document.removeEventListener('keydown', this.keydownHandler);
    }
    resetCoachmarkDetailsSignal();
  }

  private setupDraggable() {
    const popover = this.shadowRoot?.querySelector(
      `.${blockClass}--popover`
    ) as HTMLElement;
    const popoverContent = popover.querySelector(
      'cds-popover-content'
    ) as HTMLElement;
    const wrapper = popoverContent.querySelector(
      `.${blockClass}--wrapper`
    ) as HTMLElement;
    const slot = wrapper.querySelector('slot');
    const assignedElements = slot?.assignedElements({ flatten: true });
    const header = assignedElements?.find(
      (el) => el.tagName.toLowerCase() === `${prefix}-coachmark-header`
    ) as HTMLElement;
    requestAnimationFrame(() => {
      const dragHandle = header.shadowRoot?.querySelector(
        `.${prefix}--coachmark-header-drag-handle`
      ) as HTMLElement;

      const draggable = makeDraggable({
        el: popoverContent,
        dragHandle: header,
        focusableDragHandle: dragHandle,
      });

      const onDragStart = () => {
        this.isDragging = true;
        this.moveCounter = 0;
        this.moveAnnouncement = '';
        popoverContent.classList.add(`${blockClass}--is-dragging`);
        if (this.dragAriaLabel) {
          popoverContent.setAttribute('aria-label', this.dragAriaLabel);
        }
        this.requestUpdate();
      };

      const onDragEnd = () => {
        this.isDragging = false;
        this.moveCounter = 0;
        this.moveAnnouncement = '';
        popoverContent.classList.remove(`${blockClass}--is-dragging`);
        popoverContent.removeAttribute('aria-label');
        this.requestUpdate();
      };

      const onDragMove = (event: Event) => {
        const customEvent = event as CustomEvent<{
          direction: string;
          distance: number;
        }>;
        const { direction, distance } = customEvent.detail;
        // Increment counter to make each announcement unique
        this.moveCounter += 1;
        // Add zero-width space multiplied by counter to make string unique without being announced
        const uniqueMarker = '\u200B'.repeat(this.moveCounter);
        this.moveAnnouncement = `Moved ${direction} ${distance} pixels${uniqueMarker}`;
        this.requestUpdate();
      };

      popoverContent.addEventListener('dragstart', onDragStart);
      popoverContent.addEventListener('dragend', onDragEnd);
      popoverContent.addEventListener('dragmove', onDragMove as EventListener);

      // store cleanup
      this.dragCleanup = () => {
        popoverContent.removeEventListener('dragstart', onDragStart);
        popoverContent.removeEventListener('dragend', onDragEnd);
        popoverContent.removeEventListener(
          'dragmove',
          onDragMove as EventListener
        );
        draggable.cleanup?.();
      };
    });
  }

  firstUpdated() {
    if (this.floating) {
      this.classList.add(`${blockClass}--floating`);
      this.setupDraggable();
      updateCoachmarkDetailsSignal({
        name: 'floating',
        detail: this.floating,
      });
    }

    // Setup Escape key handler
    this.keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && this.open) {
        this.open = false;
      }
    };
    document.addEventListener('keydown', this.keydownHandler);
  }

  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('position')) {
      const { x = 0, y = 0 } = this.position ?? {};
      if (x !== 0 || y !== 0) {
        this.style.transform = `translate(${x}px, ${y}px)`;
      }
    }

    // Dispatch custom events when coachmark opens or closes
    if (changedProps.has('open')) {
      const init = {
        bubbles: true,
        composed: true,
        detail: { open: this.open },
      };

      if (this.open) {
        this.dispatchEvent(
          new CustomEvent(
            (this.constructor as typeof CDSCoachmark).eventOpen,
            init
          )
        );

        // Handle focus management when coachmark opens
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          let elementToFocus: HTMLElement | null = null;
          // If selectorPrimaryFocus is provided, use it
          if (this.selectorPrimaryFocus) {
            elementToFocus = document.querySelector<HTMLElement>(
              this.selectorPrimaryFocus
            );
          }

          // If no selectorPrimaryFocus or element not found, default to drag button (floating) or close button
          if (!elementToFocus) {
            const wrapper = this.shadowRoot?.querySelector(
              `.${blockClass}--popover cds-popover-content .${blockClass}--wrapper`
            ) as HTMLElement;
            const header = wrapper
              ?.querySelector('slot')
              ?.assignedElements({ flatten: true })
              ?.find(
                (el) =>
                  el.tagName.toLowerCase() === `${prefix}-coachmark-header`
              ) as HTMLElement;

            if (header?.shadowRoot) {
              // Try drag button for floating coachmarks, fallback to close button
              const dragButton = this.floating
                ? header.shadowRoot.querySelector<HTMLElement>(
                    `.${prefix}--coachmark-header-drag-handle`
                  )
                : null;
              const closeButton = header.shadowRoot.querySelector<HTMLElement>(
                `.${prefix}--coachmark-header-close-button`
              );
              elementToFocus = dragButton || closeButton;
            }
          }
          if (elementToFocus) {
            elementToFocus.focus();
          }
        });
      } else {
        this.dispatchEvent(
          new CustomEvent(
            (this.constructor as typeof CDSCoachmark).eventClose,
            init
          )
        );

        // Return focus to trigger element when coachmark closes
        requestAnimationFrame(() => {
          const triggerSlot = this.shadowRoot?.querySelector(
            'slot[name="trigger"]'
          ) as HTMLSlotElement;
          const triggerElement = triggerSlot?.assignedElements({
            flatten: true,
          })[0] as HTMLElement;
          triggerElement?.focus();
        });
      }
    }
  }

  private handlePopoverClosed = () => {
    // Sync coachmark's open state when popover closes
    // This ensures the states stay in sync for outside clicks
    if (this.open) {
      this.open = false;
    }
  };

  render() {
    // Use explicit caret value if provided, otherwise derive from floating state
    const caretValue =
      this.caret !== undefined
        ? this.caret
        : this.floating === true
          ? false
          : true;

    return html`
      <cds-popover
        part="popover"
        exportparts="popover-container"
        class="${blockClass}--popover"
        ?open=${this.open}
        .caret=${caretValue}
        ?highContrast=${this.highContrast}
        align=${this.align}
        ?dropShadow=${this.dropShadow}
        @cds-popover-closed=${this.handlePopoverClosed}
      >
        <slot name="trigger"></slot>
        <cds-popover-content part="popover-content" exportparts="content">
          ${this.floating
            ? html`
                <span class="${prefix}--visually-hidden">
                  ${this.isDragging
                    ? 'Use arrow keys to move the coachmark. Press Enter or Space to exit drag mode.'
                    : 'Press Enter or Space to activate drag mode.'}
                </span>
                <div
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  class="${prefix}--visually-hidden"
                >
                  ${this.isDragging === true
                    ? 'Drag mode active.'
                    : this.isDragging === false
                      ? 'Drag mode ended.'
                      : ''}
                </div>
                <div
                  role="status"
                  aria-live="assertive"
                  aria-atomic="true"
                  class="${prefix}--visually-hidden"
                >
                  ${this.moveAnnouncement}
                </div>
              `
            : ''}
          <div class="${blockClass}--wrapper">
            <slot></slot>
          </div>
        </cds-popover-content>
      </cds-popover>
    `;
  }

  /**
   * The name of the custom event fired when this coachmark is opened.
   */
  static get eventOpen() {
    return `${prefix}-coachmark-opened`;
  }

  /**
   * The name of the custom event fired when this coachmark is closed.
   */
  static get eventClose() {
    return `${prefix}-coachmark-closed`;
  }

  static styles = styles;
}

export default CDSCoachmark;
