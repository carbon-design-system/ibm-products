/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../../../examples/saving/src/saving';
import styles from './story-styles.scss?lit';

const meta = {
  title: 'Patterns/Saving',
};

export default meta;

export const Auto = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="saving-stories__wrapper">
        <auto-saving> </auto-saving>
      </div>
    `;
  },
};
export const Manual = {
  render: () => {
    return html`
      <style>
        ${styles}
      </style>
      <div class="saving-stories__wrapper">
        <manual-saving> </manual-saving>
      </div>
    `;
  },
};
