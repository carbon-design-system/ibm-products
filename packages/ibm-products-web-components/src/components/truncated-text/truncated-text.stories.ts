/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import mdx from './truncated-text.mdx';
import CDSTruncatedText from './truncated-text';
import styles from './story-styles.scss?lit';
import '@carbon/web-components/es/components/layer/layer.js';

const storyPrefix = 'truncated-text-stories__';
const defaultArgs = {
  lines: 2,
  value:
    'Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principal call to action on the page.',
  element: 'p',
  align: 'bottom',
  with: 'tooltip',
  autoalign: false,
};

const argTypes = {
  align: {
    control: {
      type: 'select',
    },
    options: [
      'top',
      'bottom',
      'left',
      'right',
      'left-bottom',
      'left-top',
      'right-bottom',
      'right-top',
    ],
  },
  autoalign: {
    control: {
      type: 'boolean',
    },
  },
  lines: {
    control: {
      type: 'number',
    },
  },
  value: {
    control: {
      type: 'text',
    },
  },
  with: {
    control: { type: 'select' },
    options: ['tooltip', 'expand'],
  },
  expandLabel: {
    table: {
      disable: true,
    },
    control: {
      type: 'text',
    },
  },
  collapseLabel: {
    table: {
      disable: true,
    },
    control: {
      type: 'text',
    },
  },
  element: {
    description:
      'This is a story-only control to show the Truncated Text in different HTML elements, which just sets the parent element of the Truncated Text.',
    control: {
      type: 'select',
      labels: {
        p: 'Paragraph',
        layers: 'With layers',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
        h5: 'Heading 5',
        h6: 'Heading 6',
      },
    },
    options: ['p', 'layers', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
};

const renderTemplate = (args) => {
  const { lines, value, with: withMode, align, autoalign } = args;
  const expandLabelAttr = args['expand-label'];
  const collapseLabelAttr = args['collapse-label'];
  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyPrefix}centered">
      <div class="${storyPrefix}content">
        ${args.element === 'p'
          ? html`<p>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </p>`
          : ''}
        ${args.element === 'layers'
          ? html`
              <p>
                <c4p-truncated-text
                  value=${value}
                  align=${align}
                  ?autoalign=${autoalign}
                  lines=${lines}
                  expand-label=${expandLabelAttr}
                  collapse-label=${collapseLabelAttr}
                  .with=${withMode}
                ></c4p-truncated-text>
              </p>
              <cds-layer>
                <div
                  style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
                >
                  <p>
                    <c4p-truncated-text
                      value=${value}
                      align=${align}
                      ?autoalign=${autoalign}
                      lines=${lines}
                      expand-label=${expandLabelAttr}
                      collapse-label=${collapseLabelAttr}
                      .with=${withMode}
                    ></c4p-truncated-text>
                  </p>
                </div>
                <cds-layer>
                  <div
                    style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
                  >
                    <p>
                      <c4p-truncated-text
                        value=${value}
                        align=${align}
                        ?autoalign=${autoalign}
                        lines=${lines}
                        expand-label=${expandLabelAttr}
                        collapse-label=${collapseLabelAttr}
                        .with=${withMode}
                      ></c4p-truncated-text>
                    </p>
                  </div>
                  <cds-layer>
                    <div
                      style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
                    >
                      <p>
                        <c4p-truncated-text
                          value=${value}
                          align=${align}
                          ?autoalign=${autoalign}
                          lines=${lines}
                          expand-label=${expandLabelAttr}
                          collapse-label=${collapseLabelAttr}
                          .with=${withMode}
                        ></c4p-truncated-text>
                      </p>
                    </div>
                  </cds-layer>
                </cds-layer>
              </cds-layer>
            `
          : ''}
        ${args.element === 'h1'
          ? html`<h1>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </h1>`
          : ''}
        ${args.element === 'h2'
          ? html`<h2>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </h2>`
          : ''}
        ${args.element === 'h3'
          ? html`<h3>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </h3>`
          : ''}
        ${args.element === 'h4'
          ? html`<h4>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </h4>`
          : ''}
        ${args.element === 'h5'
          ? html`<h5>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </h5>`
          : ''}
        ${args.element === 'h6'
          ? html`<h6>
              <c4p-truncated-text
                value=${value}
                align=${align}
                ?autoalign=${autoalign}
                lines=${lines}
                expand-label=${expandLabelAttr}
                collapse-label=${collapseLabelAttr}
                .with=${withMode}
              ></c4p-truncated-text>
            </h6>`
          : ''}
      </div>
    </div>
  `;
};

export const Default = {
  args: {
    ...defaultArgs,
  },
  argTypes,
  name: 'Default with Tooltip',
  render: renderTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<c4p-truncated-text
  value="${defaultArgs.value}"
  lines="${defaultArgs.lines}"
  ?autoalign=${defaultArgs.autoalign}
  align=${defaultArgs.align}
></c4p-truncated-text>
        `,
      },
    },
  },
};

export const WithExpand = {
  args: {
    ...defaultArgs,
    with: 'expand',
  },
  argTypes,
  render: renderTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<c4p-truncated-text
  value="${defaultArgs.value}"
  lines="${defaultArgs.lines}"
  with="expand"
  expand-label="View more"
  collapse-label="View less"
></c4p-truncated-text>
        `,
      },
    },
  },
};

const meta = {
  title: 'Experimental/Utilities/TruncatedText',
  component: 'c4p-truncated-text',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
