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

export default {
  title: 'Patterns/Saving',
};

export const AutoSaving = {
  render: () => {
    return html` <auto-saving> </auto-saving> `;
  },
};
export const ManualSaving = {
  render: () => {
    return html` <manual-saving> </manual-saving> `;
  },
};
