/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../../../examples/create-side-panel/src/index';

export default {
  title: 'Patterns/Create sidepanel',
};

export const Default = {
  render: () => {
    return html`<create-side-panel-default></create-side-panel-default>`;
  },
};

export const Stepped = {
  render: () => {
    return html`<create-side-panel-stepped></create-side-panel-stepped>`;
  },
};
