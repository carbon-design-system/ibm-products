/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../../../examples/create-tearsheet/src/index';

export default {
  title: 'Patterns/Create flows/CreateTearsheet',
  parameters: {
    docs: {
      description: {
        component: `The CreateTearsheet pattern provides a multi-step workflow interface for creating resources or completing complex tasks. It demonstrates how to compose the Tearsheet component with step management for guided user experiences.`,
      },
    },
  },
};

export const MultiStep = {
  render: () => {
    return html`<create-tearsheet-multi-step></create-tearsheet-multi-step>`;
  },
};

export const MultiStepWithIntro = {
  render: () => {
    return html`<create-tearsheet-with-intro></create-tearsheet-with-intro>`;
  },
};

export const MultiStepWithStepInErrorState = {
  render: () => {
    return html`<create-tearsheet-step-in-error-state></create-tearsheet-step-in-error-state>`;
  },
};
