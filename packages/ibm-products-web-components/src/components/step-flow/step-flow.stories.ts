/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import styles from './story-styles.scss?lit';
import './_story-assets/step-tearsheet';

const renderTemplate = () => {
  return html`
    <style>
      ${styles}
    </style>
    <step-tearsheet></step-tearsheet>
  `;
};

export const Tearsheet = {
  args: {},
  render: renderTemplate,
  name: 'Tearsheet',
};

export default {
  title: 'Patterns/Step flows',
};
