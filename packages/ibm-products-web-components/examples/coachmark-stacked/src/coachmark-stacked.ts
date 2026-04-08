/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/web-components/es/components/button/button.js';
import { InitCarousel, initCarousel } from '@carbon/utilities';
import '@carbon/web-components/es/components/link/index.js';
import styles from './styles.scss?lit';
import '../../../src/components/coachmark/index.js';
import '../../../src/components/coachmark/coachmark-tagline/index.js';
import Idea20 from '@carbon/icons/es/idea/20.js';
import { iconLoader } from "@carbon/web-components/es/globals/internal/icon-loader.js";

// Parent coachmark items (buttons that trigger child coachmarks)
const parentItems = [
  { id: 1, label: 'Example 1' },
  { id: 2, label: 'Example 2' },
  { id: 3, label: 'Example 3' },
];

// Child coachmark content
const nestedItems = [
  {
    id: 1,
    title: 'Short Coachmark',
    text: 'As small as it gets.',
    type: 'simple',
  },
  {
    id: 2,
    type: 'carousel',
    pages: [
      {
        id: '1',
        title: 'Mid-height Coachmark',
        text: html`This should be about the same height as the base stack item.<br /><br />
          This is known as the enrichment phase. Enrichment supports you by emulating how an analyst 
          would evaluate a finding—for example, by adding context, such as whether a certain piece of 
          data is known to be malicious, or is linked...`,
        button: html`<cds-link href="https://www.ibm.com">Learn more</cds-link>`,
      },
      {
        id: '2',
        title: 'Hello World',
        text: 'Link opens in new tab.',
        button: html`<cds-link href="https://www.ibm.com" target="_blank">Learn more</cds-link>`,
      },
    ],
  },
  {
    id: 3,
    type: 'carousel',
    pages: [
      {
        id: '1',
        title: 'Tall Coachmark',
        text: 'These alerts contain data gathered from your connected security systems.',
      },
      {
        id: '2',
        title: 'Alerts contain evidence, known as artifacts',
        text: 'These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings.',
      },
      {
        id: '3',
        title: 'Findings are enriched with more information and context',
        text: html`This is known as the enrichment phase. Enrichment supports you by emulating how an analyst 
          would evaluate a finding—for example, by adding context, such as whether a certain piece of data 
          is known to be malicious, or is linked to a known threat.<br /><br />
          Lets<br /><br />make<br /><br />this<br /><br />one<br /><br />really<br /><br />tall.`,
      },
      {
        id: '4',
        title: 'Next, the correlation process takes place',
        text: 'Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated.',
      },
      {
        id: '5',
        title: 'Between enrichment and correlation, the severity of a case is determined',
        text: 'And once you know the severity, you can easily choose which case to pick up next.',
      },
    ],
  },
];

@customElement('coachmark-stacked-example')
export class CoachmarkStackedExample extends LitElement {
  static styles = styles;

  @state()
  private _parentOpen: boolean = true;

  @state()
  private _openChildId: number = 0;

  @state()
  private _currentViewIndex: number = 0;

  @state()
  private _lastViewIndex: number = 0;

  @state()
  private _parentHeight: number = 0;

  @query('.parent-coachmark')
  private _parentCoachmark?: HTMLElement;

  private carouselAPIs: Map<number, InitCarousel> = new Map();
  private parentButtonRefs: Map<number, HTMLElement> = new Map();
  private lastOpenChildId: number = 0;

  private get currentNestedItem() {
    return nestedItems.find((item) => item.id === this._openChildId);
  }

  private get showBack() {
    return this._currentViewIndex !== 0;
  }

  private get showNext() {
    const item = this.currentNestedItem;
    if (item?.type === 'carousel') {
      return this._currentViewIndex !== item.pages.length - 1;
    }
    return false;
  }

  private get showDone() {
    const item = this.currentNestedItem;
    if (item?.type === 'simple') return true;
    if (item?.type === 'carousel') {
      return this._currentViewIndex === item.pages.length - 1;
    }
    return false;
  }

  private handleParentClose() {
    this._parentOpen = false;
    // Return focus to tagline
    setTimeout(() => {
      const tagline = this.shadowRoot?.querySelector('c4p-coachmark-tagline') as HTMLElement;
      tagline?.focus();
    }, 100);
  }

  private handleTaglineClick() {
    this._parentOpen = !this._parentOpen;
  }

  private handleChildButtonClick(id: number, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    const button = event.target as HTMLElement;
    this.parentButtonRefs.set(id, button);
    this.lastOpenChildId = id;
    this._openChildId = id;
    this._currentViewIndex = 0;
  }

  private handleChildClose(event?: Event) {
    event?.stopPropagation();
    event?.preventDefault();
    
    const childId = this._openChildId;
    
    // Reset carousel if it exists
    const carousel = this.carouselAPIs.get(childId);
    if (carousel) {
      carousel.reset();
    }

    // Close the child first
    this._openChildId = 0;
    this._currentViewIndex = 0;
    
    // Ensure parent stays open
    setTimeout(() => {
      this._parentOpen = true;
      
      // Return focus to parent button
      const button = this.parentButtonRefs.get(childId);
      button?.focus();
    }, 50);
  }

  private onViewChangeEnd = (childId: number) => ({ currentIndex, lastIndex }: { currentIndex: number; lastIndex: number }) => {
    this._currentViewIndex = currentIndex;
    this._lastViewIndex = lastIndex;
    
    // Update inert attributes
    this.updateAriaHiddenTabIndex(childId, currentIndex);
    
    // Focus appropriate button
    setTimeout(() => {
      const container = this.shadowRoot?.querySelector(`#child-${childId}`);
      if (currentIndex === lastIndex) {
        const doneBtn = container?.querySelector('.done-btn') as HTMLElement;
        doneBtn?.focus();
      } else {
        const nextBtn = container?.querySelector('.next-btn') as HTMLElement;
        nextBtn?.focus();
      }
    }, 50);
  };

  private updateAriaHiddenTabIndex(childId: number, activeIndex: number) {
    const carousel = this.carouselAPIs.get(childId);
    const allViews = carousel?.allViews;

    if (allViews) {
      Object.values(allViews).forEach((item, idx) => {
        const isActive = idx === activeIndex;
        if (item) {
          item.setAttribute('aria-hidden', String(!isActive));
          if (!isActive) {
            item.setAttribute('inert', '');
          } else {
            item.removeAttribute('inert');
          }
          item.removeAttribute('tabindex');
        }
      });
    }
  }

  private handleNext(childId: number, event?: Event) {
    event?.stopPropagation();
    event?.preventDefault();
    const carousel = this.carouselAPIs.get(childId);
    carousel?.next();
  }

  private handlePrev(childId: number, event?: Event) {
    event?.stopPropagation();
    event?.preventDefault();
    const carousel = this.carouselAPIs.get(childId);
    carousel?.prev();
  }

  firstUpdated() {
    // Capture parent height on first render
    setTimeout(() => {
      this.captureParentHeight();
    }, 200);
  }

  private captureParentHeight() {
    const parentCoachmark = this.shadowRoot?.querySelector('.parent-coachmark c4p-coachmark') as any;
    if (parentCoachmark) {
      const popover = parentCoachmark.shadowRoot?.querySelector('cds-popover');
      const popoverContent = popover?.querySelector('cds-popover-content');
      const contentPart = popoverContent?.shadowRoot?.querySelector('[part="content"]');
      if (contentPart) {
        const height = (contentPart as HTMLElement).clientHeight;
        if (height > 0 && this._parentHeight === 0) {
          this._parentHeight = height;
        }
      }
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('_openChildId')) {
      this.handleParentScaling();
      this.initializeChildCarousel();
    }
  }

  private handleParentScaling() {
    const parentCoachmark = this.shadowRoot?.querySelector('.parent-coachmark c4p-coachmark') as any;
    if (!parentCoachmark) return;

    const popover = parentCoachmark.shadowRoot?.querySelector('cds-popover');
    const popoverContent = popover?.querySelector('cds-popover-content');
    const parentContentPart = popoverContent?.shadowRoot?.querySelector('[part="content"]');
    
    // Get the wrapper element using parent class - this gets the correct wrapper
    const parentWrapperContainer = this.shadowRoot?.querySelector('.parent-coachmark');
    const parentWrapper = parentWrapperContainer?.querySelector('c4p-coachmark')?.shadowRoot?.querySelector('.c4p--coachmark--wrapper');

    // Capture parent height if not set
    if (this._parentHeight === 0 && parentWrapper) {
      const height = (parentWrapper as HTMLElement).clientHeight;
      if (height > 0) this._parentHeight = height;
    }

    if (!popoverContent || !parentWrapper) return;

    if (this._openChildId > 0) {
      // Child opening - keep parent open
      this._parentOpen = true;
      
      this.updateComplete.then(() => {
        // First, position the child content immediately
        const childCoachmark = this.shadowRoot?.querySelector(`#child-${this._openChildId}`) as any;
        const childContentPart = childCoachmark?.shadowRoot
          ?.querySelector('cds-popover')
          ?.querySelector('cds-popover-content')
          ?.shadowRoot?.querySelector('[part="content"]');
        
        if (childContentPart) {
          // Position child content to align with parent (must be done first)
          (childContentPart as HTMLElement).style.insetInlineStart = '0px';
        }
        
        // Wait for carousel to initialize before measuring height
        setTimeout(() => {
          if (childContentPart && parentWrapper) {
            // Use wrapper height after carousel has initialized with useMaxHeight
            const childWrapper = childCoachmark?.shadowRoot?.querySelector('.c4p--coachmark--wrapper') as HTMLElement;
            const childHeight = childWrapper ? childWrapper.clientHeight : (childContentPart as HTMLElement).clientHeight;
            
            console.log(`[Example ${this._openChildId}] Child height measured:`, childHeight);
            const targetHeight = childHeight + 34;
            console.log(`[Example ${this._openChildId}] Setting parent height to: ${targetHeight}px`);
            
            // Set height on the wrapper element (not content part) with !important
            (parentWrapper as HTMLElement).style.setProperty('height', `${targetHeight}px`, 'important');
            
            // Force parent to stay open
            parentCoachmark.open = true;
            
            // Wait for height to be applied, then apply animations (matching React's setTimeout(0) approach)
            setTimeout(() => {
              const actualParentHeight = (parentWrapper as HTMLElement).clientHeight;
              
              // Apply animations to wrapper element AFTER height is confirmed
              requestAnimationFrame(() => {
                // Apply opacity to shadow DOM elements
                (parentWrapper as HTMLElement).style.setProperty('opacity', '0.8', 'important');
                
                // Apply transform and opacity to popoverContent (not popover, to avoid scaling the trigger/tagline)
                (popoverContent as HTMLElement).style.setProperty('opacity', '0.8', 'important');
                (popoverContent as HTMLElement).style.setProperty('transform', 'scale(0.9)', 'important');
                (popoverContent as HTMLElement).style.setProperty('transform-origin', 'top center', 'important');
                (popoverContent as HTMLElement).style.setProperty('transition', 'transform 240ms cubic-bezier(0.2, 0, 0.38, 0.9), opacity 240ms cubic-bezier(0.2, 0, 0.38, 0.9)', 'important');
                (popoverContent as HTMLElement).style.pointerEvents = 'none';
              });
            }, 0);
          }
        }, 150);
      });
    } else {
      // Child closing - restore parent
      requestAnimationFrame(() => {
        if (parentWrapper) {
          (parentWrapper as HTMLElement).style.height = `${this._parentHeight}px`;
          
          // Restore opacity on shadow DOM elements
          (parentWrapper as HTMLElement).style.setProperty('opacity', '1', 'important');
          
          // Restore transform and opacity on popoverContent only
          (popoverContent as HTMLElement).style.setProperty('opacity', '1', 'important');
          (popoverContent as HTMLElement).style.setProperty('transform', 'scale(1)', 'important');
          (popoverContent as HTMLElement).style.setProperty('transition', 'opacity 240ms cubic-bezier(0, 0, 0.38, 0.9), transform 240ms cubic-bezier(0, 0, 0.38, 0.9)', 'important');
        }
        
        (popoverContent as HTMLElement).style.pointerEvents = 'auto';
      });
    }
  }

  private initializeChildCarousel() {
    if (this._openChildId <= 0) return;

    const nestedItem = nestedItems.find((item) => item.id === this._openChildId);
    if (nestedItem?.type === 'carousel') {
      setTimeout(() => {
        const carouselContainer = this.shadowRoot?.querySelector(`#child-${this._openChildId} .exampleCarouselWrapper`) as HTMLElement;
        if (carouselContainer && !this.carouselAPIs.has(this._openChildId)) {
          const carousel = initCarousel(carouselContainer, {
            onViewChangeEnd: this.onViewChangeEnd(this._openChildId),
            useMaxHeight: true,
          });
          this.carouselAPIs.set(this._openChildId, carousel);
          
          setTimeout(() => {
            this.updateAriaHiddenTabIndex(this._openChildId, 0);
            (this.shadowRoot?.querySelector(`#child-${this._openChildId} .next-btn`) as HTMLElement)?.focus();
          }, 50);
        }
      }, 100);
    } else {
      setTimeout(() => {
        (this.shadowRoot?.querySelector(`#child-${this._openChildId} .done-btn`) as HTMLElement)?.focus();
      }, 100);
    }
  }

  render() {
    return html`
      <!-- Parent Coachmark -->
      <div class="parent-coachmark">
        <c4p-coachmark
          ?open=${this._parentOpen}
          align=${POPOVER_ALIGNMENT.TOP}
          .highContrast=${true}
          .caret=${false}
        >
          <c4p-coachmark-tagline
            id="CoachmarkTagline"
            title="Why are there two types of severity scores?"
            close-icon-description="close"
            ?open=${this._parentOpen}
            @c4p-coachmark-tagline-cta-click=${this.handleTaglineClick}
            slot="trigger"
          >
          </c4p-coachmark-tagline>
          <c4p-coachmark-header closeIconDescription="Close"></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-stacked-home__body">
            <div class="coachmark-stacked-home-element">
              ${iconLoader(Idea20, { class: 'coachmark-stacked-home__icon-idea' })}
            </div>
            <div class="coachmark-stacked-home__content">
              <h2 class="coachmark-stacked-home__title">Example title</h2>
              <p class="coachmark-stacked-home__body">This is an example of a description</p>
            </div>
            <ul class="coachmark-stacked-home__nav-links">
              ${parentItems.map((item) => html`
                <li key=${item.id}>
                  <cds-button
                    id="parent-button-${item.id}"
                    kind="ghost"
                    size="sm"
                    class="nav-button"
                    @click=${(e: Event) => this.handleChildButtonClick(item.id, e)}
                  >
                    ${item.label}
                  </cds-button>
                </li>
              `)}
            </ul>
            <cds-button
              size="sm"
              @click=${this.handleParentClose}
              class="coachmark-stacked-home__footer"
            >
              Close
            </cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>

      <!-- Child Coachmarks with their trigger buttons -->
      ${parentItems.map((item) => {
        const isOpen = this._openChildId === item.id;
        const nestedItem = nestedItems.find((nested) => nested.id === item.id);
        
        if (!nestedItem) return '';

        return html`
          <c4p-coachmark
            id="child-${item.id}"
            class="stacked_element_content"
            ?open=${isOpen}
            align=${POPOVER_ALIGNMENT.TOP}
            .highContrast=${true}
            .caret=${false}
          >
            <!-- Use the button as the trigger -->
            <cds-button
              slot="trigger"
              id="coachmark-trigger-${item.id}"
              kind="ghost"
              size="sm"
              class="coachmark-stacked-home__nav-link"
              @click=${(e: Event) => this.handleChildButtonClick(item.id, e)}
            >
            </cds-button>
            <c4p-coachmark-header closeIconDescription="Close"></c4p-coachmark-header>
            <c4p-coachmark-body>
              ${nestedItem.type === 'simple' ? html`
                <div class="stacked-coachmark__content">
                  <h2 class="stacked-coachmark__title">${nestedItem.title}</h2>
                  <p class="stacked-coachmark__body">${nestedItem.text}</p>
                  <div class="stacked-coachmark__button">
                    <cds-button
                      class="done-btn"
                      size="sm"
                      @click=${this.handleChildClose}
                    >
                      Done
                    </cds-button>
                  </div>
                </div>
              ` : ''}
              
              ${nestedItem.type === 'carousel' ? html`
                <div class="exampleCarouselWrapper">
                  ${nestedItem.pages.map((page) => html`
                    <div>
                      <h2>${page.title}</h2>
                      <p>${page.text}</p>
                      ${page.button ? html`<p>${page.button}</p>` : ''}
                    </div>
                  `)}
                </div>

                <div class="carouselControlWrapper__footer">
                  <div class="carouselControlWrapper--controls-progress">
                    <span>${this._currentViewIndex + 1} / ${nestedItem.pages.length}</span>
                  </div>
                  <div class="carouselControlWrapper--buttons">
                    ${this.showBack ? html`
                      <cds-button
                        class="back-btn"
                        size="sm"
                        kind="ghost"
                        @click=${(e: Event) => this.handlePrev(item.id, e)}
                      >
                        Back
                      </cds-button>
                    ` : ''}
                    ${this.showNext ? html`
                      <cds-button
                        class="next-btn"
                        size="sm"
                        @click=${(e: Event) => this.handleNext(item.id, e)}
                      >
                        Next
                      </cds-button>
                    ` : ''}
                    ${this.showDone ? html`
                      <cds-button
                        class="done-btn"
                        size="sm"
                        @click=${(e: Event) => this.handleChildClose(e)}
                      >
                        Done
                      </cds-button>
                    ` : ''}
                  </div>
                </div>
              ` : ''}
            </c4p-coachmark-body>
          </c4p-coachmark>
        `;
      })}
    `;
  }
}

export default CoachmarkStackedExample;


