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

  private dragCleanup: (() => void) | null = null;

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.dragCleanup) {
      this.dragCleanup();
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
        '.drag-handle'
      ) as HTMLElement;

      const draggable = makeDraggable({
        el: popoverContent,
        dragHandle: header,
        focusableDragHandle: dragHandle,
      });

      const onDragStart = () => {
        popoverContent.classList.add('is-dragging');
        popoverContent.setAttribute(
          'aria-label',
          'Picked up the draggable popoverContent'
        );
      };
      const onDragEnd = () => {
        popoverContent.classList.remove('is-dragging');
        popoverContent.setAttribute(
          'aria-label',
          'Draggable popoverContent was dropped'
        );
      };

      popoverContent.addEventListener('dragstart', onDragStart);
      popoverContent.addEventListener('dragend', onDragEnd);

      // store cleanup
      this.dragCleanup = () => {
        popoverContent.removeEventListener('dragstart', onDragStart);
        popoverContent.removeEventListener('dragend', onDragEnd);
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
  }

  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('position')) {
      const { x = 0, y = 0 } = this.position ?? {};
      if (x !== 0 || y !== 0) {
        this.style.transform = `translate(${x}px, ${y}px)`;
      }
    }
  }

  render() {
    return html`
      <cds-popover
        class="${blockClass}--popover"
        ?open=${this.open}
        .caret=${this.floating === true ? false : true}
        ?highContrast=${this.highContrast}
        align=${this.align}
        ?dropShadow=${this.dropShadow}
      >
        <slot name="trigger"></slot>
        <cds-popover-content>
          <div class="${blockClass}--wrapper">
            <slot></slot>
          </div>
        </cds-popover-content>
      </cds-popover>
    `;
  }

  static styles = styles;
}

export default CDSCoachmark;
