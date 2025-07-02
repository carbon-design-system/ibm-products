import { html, LitElement } from 'lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import '@carbon/web-components/es/components/button/index.js';
import { pageHeaderContext } from './context';
import { consume } from '@lit/context';

/**
 * Page header Scroller button
 * @element c4p-page-header-scroller
 */
@customElement('c4p-page-header-scroller')
export class PageHeaderScroller extends LitElement {
  @consume({ context: pageHeaderContext, subscribe: true })
  offsets;

  constructor() {
    super();
    // console.log(this.offsets);
  }

  render() {
    console.log(this, this.offsets);
    // const { offsets } = this;
    // const { breadcrumbOffset, headerOffset } = offsets;
    // console.log({breadcrumbOffset, headerOffset});
    return html`<cds-button>
      <slot></slot>
    </cds-button>`;
  }
}
