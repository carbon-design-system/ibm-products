/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './options-tile';
import figma, { html } from '@figma/code-connect/html';

figma.connect(
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=36228%3A14503',
  {
    props: {
      body: figma.instance('Body slot'),
      defaultOpen: figma.boolean('Expanded'),
      size: figma.enum('Size', {
        Large: 'lg',
        'Extra large': 'xl',
      }),
      summary: figma.instance('Summary slot'),
      titleText: figma.string('Title text'),
      toggle: figma.instance('Toggle slot'),
    },
    example: ({ body, defaultOpen, size, summary, titleText, toggle }) => html`
      <c4p-options-tile
        ?defaultOpen="${defaultOpen}"
        size="${size}"
        titleText="${titleText}"
      >
        <div slot="summary">${summary}</div>
        <div slot="toggle">${toggle}</div>
        <div slot="body">${body}</div>
      </c4p-options-tile>
    `,
    imports: [
      "import '@carbon/ibm-products-web-components/es/components/options-tile/index';",
    ],
  }
);
