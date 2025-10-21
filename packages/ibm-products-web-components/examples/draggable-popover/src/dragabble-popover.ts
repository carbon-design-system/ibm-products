/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/popover/index.js';

import styles from './draggable-popover.scss?lit';
import { makeDraggable } from './makeDraggable';

const blockClass = `c4p--draggable-popover`;



/**
 * DraggablePopover.
 *
 * @element draggable-popover
 *
 * */

@customElement(`draggable-popover`)
class DraggablePopover extends HostListenerMixin(LitElement) {
  @state()
  private _open : Boolean = true;

  private dragCleanup: (() => void) | null = null;
  // private handleClick = () => {
  //   const popover = this.renderRoot.querySelector('#popover-one') as any;
  //   if (popover) {
  //     this.open = !this.open;
  //     popover.open = this.open;
  //   }
  //   console.log('Popover open state:', this.open);
  // };

  // private handleClick = () => {
  //   const popover = this.shadowRoot.querySelector('.my-popover');
  //   const open = popover?.hasAttribute('open');
  //   if (open === true)
  //   {
  //     popover?.removeAttribute('open')
  //     this.open=false;
  //     console.log("true");
      
  //   }
  //   else{
  //     this.open=true;
  //      popover?.setAttribute('open', '');
  //      console.log("false");
  //   }
  // };


  private handleClick = () => {
    this._open = !this._open;
  };

  firstUpdated() {
    this.setupDraggable();
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('_open') && this._open) {
      // re-setup draggable if popover opens
      this.setupDraggable();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.dragCleanup) this.dragCleanup();
  }

  private setupDraggable() {
    const popover = this.shadowRoot.querySelector('.my-popover') as any;
    const popoverContent = popover.querySelector('cds-popover-content')
    // const shadow = popoverContent.shadowRoot; 
    // console.log(shadow);
    // requestAnimationFrame(() => {
    //   const span = shadow.querySelector('span[part="content"]');
    //   console.log(span); 

   
    // const header = this.renderRoot.querySelector('.popover-header') as HTMLElement;
    // const dragHandle = this.renderRoot.querySelector('.drag-icon') as HTMLElement;

    if (popoverContent ) {
      // reset transform
      popoverContent.style.transform = 'none';
      popoverContent.style.left = '0px';
      popoverContent.style.top = '0px';

      const draggable = makeDraggable({
        el: popoverContent,
        // dragHandle: header,
        // focusableDragHandle: dragHandle,
      });

      const onDragStart = () => {
        popoverContent.classList.add('is-dragging');
        popoverContent.setAttribute('aria-label', 'Picked up the draggable popoverContent');
      };
      const onDragEnd = () => {
        popoverContent.classList.remove('is-dragging');
        popoverContent.setAttribute('aria-label', 'Draggable popoverContent was dropped');
      };

      popoverContent.addEventListener('dragstart', onDragStart);
      popoverContent.addEventListener('dragend', onDragEnd);

      // store cleanup
      this.dragCleanup = () => {
        popoverContent.removeEventListener('dragstart', onDragStart);
        popoverContent.removeEventListener('dragend', onDragEnd);
        draggable.cleanup?.();
      };
    }
  // });
  }

  render() {
    
    return html`
      <style>
        ${styles}
      </style>
      
   
        <cds-popover 
class="my-popover"
 ?open=${this._open}
 .caret=${Boolean(false)}
 ?highContrast=${Boolean(true)}
 align="bottom"
 ?dropShadow=${Boolean(true)}>
 <button
   class="playground-trigger"
   aria-label="Checkbox"
   type="button"
   aria-expanded=${this._open}
   @click="${this.handleClick}">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path></svg>

 </button>
 <cds-popover-content>
   <div class="p-3">
     <p class="popover-title">Available storage</p>
     <p class="popover-details">
       This server has 150 GB of block storage remaining.
     </p>
   </div>
 </cds-popover-content>
 </cds-popover>

         
    `;
  }
  static styles = styles;
}
export default DraggablePopover;

// <div class="my-div">
//             <p class="popover-title">Available storage</p>
//             <p class="popover-details">
//               This server has 150 GB of block storage remaining.
//             </p>
//           </div>