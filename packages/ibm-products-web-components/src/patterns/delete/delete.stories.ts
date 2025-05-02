/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../../../examples/delete-pattern/src/index';

export default {
  title: 'Patterns/Delete',
};

export const highImpactDeletion = () => html`
  <delete-pattern resourceName="Sample"
    >Render delete pattern here</delete-pattern
  >
`;
