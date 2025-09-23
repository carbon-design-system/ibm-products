import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('step-group')
export class StepGroup extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'step-group': StepGroup;
  }
}
