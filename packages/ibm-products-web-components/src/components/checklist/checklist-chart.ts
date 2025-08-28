/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { purple50 } from '@carbon/colors';

import { prefix, carbonPrefix } from '../../globals/settings';
import styles from './checklist.scss?lit';

const blockClass = `${prefix}--checklist__chart`;

/**
 * Clamps a value between a minimum and maximum.
 * If the value, min, or max is NaN, the function returns void.
 *
 */
const clamp = (value: number, min: number, max: number): number | void => {
  if (isNaN(value) || isNaN(min) || isNaN(max)) {
    return;
  }
  if (max !== undefined) {
    value = value <= max ? value : max;
  }
  if (min !== undefined) {
    value = value >= min ? value : min;
  }
  return value;
};

/**
 * @element c4p-checklist-chart
 */
@customElement(`${prefix}-checklist-chart`)
class CDSChecklistChart extends LitElement {
  @property({ type: Number })
  value = 0;

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(`${blockClass}`);
    this._updateChart();
  }

  private _updateChart() {
    const progressColor = purple50;
    const numDegrees = clamp(this.value * 360, 0, 360);

    this.style?.setProperty(
      `background-image`,
      `conic-gradient(${progressColor} ${numDegrees}deg, var(--${carbonPrefix}-tag-background-gray) ${numDegrees}deg 360deg)`
    );
    this.style.setProperty('border-radius', '50%');
  }

  render() {
    return nothing;
  }

  static styles = styles;
}

export default CDSChecklistChart;
