/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma, { html } from '@figma/code-connect/html';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/tabs/index.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';

import Bee16 from '@carbon/icons/es/bee/16.js';

const headerProps = {
  hideCloseButton: figma.enum('Style', {
    'Passive - With close icon': false,
    'Transactional - No close icon': true,
  }),
  title: figma.string('Title'),
  description: figma.boolean('Description', {
    true: figma.nestedProps('Description', {
      text: figma.string('Description text'),
    }),
    false: undefined,
  }),
  label: figma.boolean('Label', {
    true: figma.textContent('Label'),
    false: undefined,
  }),
  titleStart: figma.boolean('Title leading slot', {
    true: html`${iconLoader(Bee16, { slot: 'title-start' })}`,
    false: undefined,
  }),
  actions: figma.boolean('Actions', {
    true: html`<div slot="header-actions">
      <cds-button size="sm" kind="tertiary">Action 1</cds-button>
      <cds-button size="sm" kind="tertiary">Action 2</cds-button>
    </div>`,
    false: undefined,
  }),
  tabs: figma.boolean('Tabs', {
    true: html`<c4p-tearsheet-navigation-bar>
      <c4p-tearsheet-scroller
        slot="scroller"
        label="Header collapse/expand"
      ></c4p-tearsheet-scroller>
      <cds-tabs value="tab-1">
        <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">
          Tab label
        </cds-tab>
        <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">
          Tab label
        </cds-tab>
        <cds-tab id="tab-3" target="tab-panel-3" value="tab-3">
          Tab label
        </cds-tab>
      </cds-tabs>
    </c4p-tearsheet-navigation-bar>`,
    false: undefined,
  }),
};

// Wide Tearsheet
figma.connect(
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837%3A338113',
  {
    imports: [
      "import '@carbon/ibm-products-web-components/es/components/tearsheet-preview/index.js'",
    ],
    props: {
      header: figma.nestedProps('_Tearsheet header', {
        ...headerProps,
      }),
      influencer: figma.boolean('Left panel', {
        true: html`<c4p-tearsheet-influencer>
          Rendered on the left, spanning the full height. Can be used to display
          a vertical progress indicator or similar elements.
        </c4p-tearsheet-influencer>`,
        false: undefined,
      }),
      summary: figma.boolean('Right panel', {
        true: html`<c4p-tearsheet-summary-content slot="summary-content">
          Rendered next to the main content area, this section can be used to
          display summary details or related information.
        </c4p-tearsheet-summary-content>`,
        false: undefined,
      }),
      actions: figma.boolean('Buttons', {
        true: figma.nestedProps('R:2 | Tearsheet footer item', {
          value: figma.enum('Buttons', {
            '1': [{ kind: 'primary', label: 'Button' }],
            '2': [
              { kind: 'primary', label: 'Button' },
              { kind: 'secondary', label: 'Button' },
            ],
            '3': [
              { kind: 'primary', label: 'Button' },
              { kind: 'secondary', label: 'Button' },
              { kind: 'ghost', label: 'Button' },
            ],
            '4': [
              { kind: 'primary', label: 'Button' },
              { kind: 'secondary', label: 'Button' },
              { kind: 'tertiary', label: 'Button' },
              { kind: 'ghost', label: 'Button' },
            ],
          }),
        }),
        false: { value: undefined },
      }),
    },
    example: (props) =>
      html`<c4p-preview-tearsheet open>
        <c4p-tearsheet-header
          ?hide-close-button=${props.header.hideCloseButton}
        >
          <c4p-tearsheet-header-content title=${props.header.title}>
            <span slot="label">${props.header.label}</span>
            <span slot="description">${props.header.description?.text}</span>
            ${props.header.titleStart} ${props.header.actions}
          </c4p-tearsheet-header-content>
          ${props.header.tabs}
        </c4p-tearsheet-header>

        ${props.influencer}

        <c4p-tearsheet-body>
          <div slot="main-content">This is the main content area.</div>
          ${props.summary}
        </c4p-tearsheet-body>

        <c4p-tearsheet-footer .actions=${props.actions.value}>
        </c4p-tearsheet-footer>
      </c4p-preview-tearsheet>`,
  }
);

// Narrow Tearsheet
// figma.connect(
//   'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837-338231',
//   {
//     imports: [
//       "import '@carbon/ibm-products-web-components/es/components/tearsheet-preview/index.js'",
//     ],
//     props: {
//       header: figma.nestedProps('_Tearsheet header', { ...headerProps }),
//       actions: figma.boolean('Buttons', {
//         true: figma.nestedProps('R:2 | Tearsheet footer item', {
//           value: figma.enum('Buttons', {
//             '1': [{ kind: 'primary', label: 'Button' }],
//             '2': [
//               { kind: 'primary', label: 'Button' },
//               { kind: 'secondary', label: 'Button' },
//             ],
//             '3': [
//               { kind: 'primary', label: 'Button' },
//               { kind: 'secondary', label: 'Button' },
//               { kind: 'ghost', label: 'Button' },
//             ],
//             '4': [
//               { kind: 'primary', label: 'Button' },
//               { kind: 'secondary', label: 'Button' },
//               { kind: 'tertiary', label: 'Button' },
//               { kind: 'ghost', label: 'Button' },
//             ],
//           }),
//         }),
//         false: { value: undefined },
//       }),
//     },
//     example: (props) =>
//       html`<c4p-preview-tearsheet open variant="narrow">
//         <c4p-tearsheet-header
//           ?hide-close-button=${props.header.hideCloseButton}
//         >
//           <c4p-tearsheet-header-content title=${props.header.title}>
//             <span slot="label">${props.header.label}</span>
//             <span slot="description">${props.header.description?.text}</span>
//             ${props.header.titleStart} ${props.header.actions}
//           </c4p-tearsheet-header-content>
//           ${props.header.tabs}
//         </c4p-tearsheet-header>

//         <c4p-tearsheet-body>
//           <div slot="main-content">This is the main content area.</div>
//         </c4p-tearsheet-body>

//         <c4p-tearsheet-footer .actions=${props.actions.value}>
//         </c4p-tearsheet-footer>
//       </c4p-preview-tearsheet>`,
//   }
// );
