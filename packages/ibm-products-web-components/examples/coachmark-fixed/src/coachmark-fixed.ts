/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/web-components/es/components/button/button.js';
import { InitCarousel, initCarousel } from '@carbon/utilities';
import '@carbon/web-components/es/components/link/index.js';
import styles from './styles.scss?lit';

// Import coachmark components
import '@carbon/ibm-products-web-components/es/components/coachmark/index.js';
//import '@carbon/ibm-products-web-components/es/components/coachmark/coachmark-tagline/index.js';

import '../../../src/components/coachmark/coachmark-tagline/index.js';

// Carousel story data
const items = [
  {
    id: 1,
    title: 'Hello World',
    text: 'Link opens in new tab.',
    button: html`<cds-link href="https://www.ibm.com" target="_blank">Learn more</cds-link>`
  },
  {
    id: 2,
    title: 'Hello World',
    text: 'Link opens on this page.',
    button: html`<cds-link href="https://www.ibm.com">Learn more</cds-link>`
  },
];

@customElement('coachmark-fixed-example')
export class CoachmarkFixedExample extends LitElement {
  static styles = styles;

  @state()
  private _open: boolean = true;

  @state()
  private _currentViewIndex: number = 0;

  @state()
  private _lastViewIndex: number = items.length - 1;

  private carouselAPI: InitCarousel | null = null;

  private get showBack() {
    return this._currentViewIndex !== 0;
  }

  private get showNext() {
    return this._currentViewIndex !== this._lastViewIndex;
  }

  private get showDone() {
    return this._currentViewIndex === this._lastViewIndex;
  }

  private onViewChangeEnd = ({ currentIndex, lastIndex }: { currentIndex: number; lastIndex: number }) => {
    this._currentViewIndex = currentIndex;
    this._lastViewIndex = lastIndex;
  };

  private handleNext() {
    console.log("next");
    
    this.carouselAPI?.next();
  }

  private handlePrev() {
    this.carouselAPI?.prev();
  }

  private handleClose() {
    this._open = false;
    this.carouselAPI?.reset();
    this._currentViewIndex = 0;
  }

  private handleBeaconClick() {
    this._open = !this._open;
  }

  firstUpdated() {
    // Initialize carousel after first render
    setTimeout(() => {
      const carouselContainer = this.shadowRoot?.querySelector('.exampleCarouselWrapper') as HTMLElement;

      if (carouselContainer && !this.carouselAPI) {
        this.carouselAPI = initCarousel(carouselContainer, {
          onViewChangeEnd: this.onViewChangeEnd,
          excludeSwipeSupport: true,
        });
      }
    }, 100);
  }

  render() {
    return html`
        <c4p-coachmark
          ?open=${this._open}
          align=${POPOVER_ALIGNMENT.TOP}
          .highContrast=${true}
        >
          <c4p-coachmark-tagline
            title="Why are there two types of severity scores?"
            close-icon-description="close"
            ?open=${this._open}
            @c4p-coachmark-tagline-cta-click=${this.handleBeaconClick}
            slot="trigger"
          >
          </c4p-coachmark-tagline>
          <c4p-coachmark-header
            closeIconDescription="Close"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <div class="exampleCarouselWrapper">
              ${items.map(
                (item) => html`
                  <div>
                    <h2>${item.title}</h2>
                    <p>${item.text}</p>
                    ${item.button}
                  </div>
                `
              )}
            </div>

            <div class="carouselControlWrapper__footer">
              <div class="carouselControlWrapper--controls-progress">
                <span class="carousel-progress">${this._currentViewIndex + 1} / ${items.length}</span>
              </div>
              <div class="carouselControlWrapper--buttons">
                ${this.showBack ? html`
                  <cds-button
                    class="back-btn"
                    size="sm"
                    kind="ghost"
                    @click=${this.handlePrev}
                  >
                    Back
                  </cds-button>
                ` : ''}
                ${this.showNext ? html`
                  <cds-button
                    class="next-btn"
                    size="sm"
                    @click=${this.handleNext}
                  >
                    Next
                  </cds-button>
                ` : ''}
                ${this.showDone ? html`
                  <cds-button
                    class="done-btn"
                    size="sm"
                    @click=${this.handleClose}
                  >
                    Done
                  </cds-button>
                ` : ''}
              </div>
            </div>
          </c4p-coachmark-body>
        </c4p-coachmark>
    `;
  }
}

export default CoachmarkFixedExample;