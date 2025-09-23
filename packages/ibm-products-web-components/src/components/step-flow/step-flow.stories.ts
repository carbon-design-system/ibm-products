/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { fn } from 'storybook/test';
import './index';
// import '@carbon/web-components/es/components/toggle/index.js';
// import '@carbon/web-components/es/components/dropdown/index.js';
import styles from './story-styles.scss?lit';
import './_story-assets/step-tearsheet';

const argTypes = {};

const blockClass = 'step-flow-example';

const renderTemplate = (args) => {
  // const {} = args;
  return html`
    <style>
      ${styles}
    </style>
    <step-tearsheet></step-tearsheet>
  `;
};

export const Tearsheet = {
  args: {},
  argTypes,
  render: renderTemplate,
  storyName: 'Tearsheet',
};

export default {
  title: 'Patterns/Step flows',
};
