import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StepInstance } from './step-flow-signal';

@customElement('step-group')
export class StepGroup extends LitElement {
  @property({ type: Object })
  stepInstance = {} as StepInstance; // Default value

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'step-group': StepGroup;
  }
}
