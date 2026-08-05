/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../../../examples/create-side-panel-with-steps/src/index';
import DocsPage from './create-side-panel-with-steps.mdx';
import './story-styles.scss';

export default {
  title: 'Patterns/Create flows/Create side panel with steps',
  parameters: {
    docs: { page: DocsPage },
  },
};

export const Default = {
  render: () => {
    return html`<create-side-panel-with-steps></create-side-panel-with-steps>`;
  },
};
