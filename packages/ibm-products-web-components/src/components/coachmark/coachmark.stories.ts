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
import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/web-components/es/components/button/index.js';
import styles from './story-styles.scss?lit';
const storyPrefix = 'coachmark-stories__';

const tooltipAlignments = {
  [`top`]: POPOVER_ALIGNMENT.TOP,
  [`top-left`]: POPOVER_ALIGNMENT.TOP_LEFT,
  [`top-right`]: POPOVER_ALIGNMENT.TOP_RIGHT,
  [`bottom`]: POPOVER_ALIGNMENT.BOTTOM,
  [`bottom-left`]: POPOVER_ALIGNMENT.BOTTOM_LEFT,
  [`bottom-right`]: POPOVER_ALIGNMENT.BOTTOM_RIGHT,
  [`left`]: POPOVER_ALIGNMENT.LEFT,
  [`right`]: POPOVER_ALIGNMENT.RIGHT,
};

const args = { align: POPOVER_ALIGNMENT.TOP };

const argTypes = {
  align: {
    control: 'select',
    description:
      'Specify the alignment of the Coachmark relative to its target',
    options: tooltipAlignments,
  },
};

export const Default = {
  args: {
    ...args,
    open: true,
    floating: false,
    highContrast: true,
    align: 'top',
  },
  argTypes,
  render: (args) => {
    return html`
      <style>
        ${styles}
      </style>
      <div
        style="padding-top:200px; position: relative; display: flex; align-items: center; justify-content: center;"
      >
        <c4p-coachmark
          .open=${args.open}
          align=${args.align}
          .highContrast=${args.highContrast}
          .floating=${args.floating}
        >
          <c4p-coachmark-beacon
            label="Show information"
            @c4p-coachmark-beacon-clicked=${(e: CustomEvent) => {
              console.log('Beacon clicked!', e.detail.expanded);
            }}
            slot="trigger"
          >
          </c4p-coachmark-beacon>
          <c4p-coachmark-header
            class="coachmark-header"
            closeIconDescription="close icon"
          ></c4p-coachmark-header>
          <c4p-coachmark-body class="coachmark-body">
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <cds-button size="sm">Done</cds-button>
          </c4p-coachmark-body>
        </c4p-coachmark>
      </div>
    `;
  },
};

const meta = { title: 'Components/Coachmark' };

export default meta;
