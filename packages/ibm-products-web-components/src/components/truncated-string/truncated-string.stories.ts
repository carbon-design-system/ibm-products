//cspell: disable
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
import mdx from './truncated-string.mdx';
import CDSTruncatedString from './truncated-string';
import '@carbon/web-components/es/components/layer/layer.js';

const storyPrefix = 'truncated-string-stories__';
const defaultArgs = {
  lines: 2,
  value:
    'Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principal call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular-sized button. This issue is most often found in tables. Small buttons should have three words or fewer.',
  element: 'p',
  expandLabel: '...more',
  collapseLabel: '...less',
};

const argTypes = {
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
      'This is a story-only control to show the truncated string in different HTML elements, which just sets the parent element of the truncated string.',
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
  const { lines, value, with: withMode } = args;
  const expandLabelAttr = args['expand-label'];
  const collapseLabelAttr = args['collapse-label'];
  return html`
    ${args.element === 'p'
      ? html`<p>
          <c4p-truncated-string
            value=${value}
            lines=${lines}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </p>`
      : ''}
    ${args.element === 'layers'
      ? html`
          <p>
            <c4p-truncated-string
              value=${value}
              lines=${lines}
              expand-label=${expandLabelAttr}
              collapse-label=${collapseLabelAttr}
              .with=${withMode}
            ></c4p-truncated-string>
          </p>
          <cds-layer>
            <div
              style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
            >
              <p>
                <c4p-truncated-string
                  value=${value}
                  lines=${lines}
                  expand-label=${expandLabelAttr}
                  collapse-label=${collapseLabelAttr}
                  .with=${withMode}
                ></c4p-truncated-string>
              </p>
            </div>
            <cds-layer>
              <div
                style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
              >
                <p>
                  <c4p-truncated-string
                    value=${value}
                    expand-label=${expandLabelAttr}
                    collapse-label=${collapseLabelAttr}
                    .with=${withMode}
                  ></c4p-truncated-string>
                </p>
              </div>
              <cds-layer>
                <div
                  style="background: var(--cds-layer); color: var(--cds-text-primary, #161616);"
                >
                  <p>
                    <c4p-truncated-string
                      value=${value}
                      lines=${lines}
                      expand-label=${expandLabelAttr}
                      collapse-label=${collapseLabelAttr}
                      .with=${withMode}
                    ></c4p-truncated-string>
                  </p>
                </div>
              </cds-layer>
            </cds-layer>
          </cds-layer>
        `
      : ''}
    ${args.element === 'h1'
      ? html`<h1>
          <c4p-truncated-string
            value=${value}
            lines=${lines}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </h1>`
      : ''}
    ${args.element === 'h2'
      ? html`<h2>
          <c4p-truncated-string
            value=${value}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </h2>`
      : ''}
    ${args.element === 'h3'
      ? html`<h3>
          <c4p-truncated-string
            value=${value}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </h3>`
      : ''}
    ${args.element === 'h4'
      ? html`<h4>
          <c4p-truncated-string
            value=${value}
            lines=${lines}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </h4>`
      : ''}
    ${args.element === 'h5'
      ? html`<h5>
          <c4p-truncated-string
            value=${value}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </h5>`
      : ''}
    ${args.element === 'h6'
      ? html`<h6>
          <c4p-truncated-string
            value=${value}
            expand-label=${expandLabelAttr}
            collapse-label=${collapseLabelAttr}
            .with=${withMode}
          ></c4p-truncated-string>
        </h6>`
      : ''}
  `;
};

export const Default = {
  args: {
    ...defaultArgs,
  },
  argTypes,
  render: renderTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<c4p-truncated-string
  value="${defaultArgs.text}"
  lines="${defaultArgs.lines}"
></c4p-truncated-string>
        `,
      },
    },
  },
};

export const WithTooltip = {
  args: {
    ...defaultArgs,
    with: 'tooltip',
  },
  argTypes,
  render: renderTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<c4p-truncated-string
  value="${defaultArgs.text}"
  lines="${defaultArgs.lines}"
  with="tooltip"
></c4p-truncated-string>
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
<c4p-truncated-string
  value="${defaultArgs.text}"
  lines="${defaultArgs.lines}"
  with="expand"
></c4p-truncated-string>
        `,
      },
    },
  },
};

const meta = {
  title: 'Experimental/TruncatedString',
  component: 'c4p-truncated-string',
};

export default meta;
