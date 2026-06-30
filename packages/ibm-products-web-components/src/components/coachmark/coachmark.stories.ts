/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import './coachmark-beacon/index.ts';
import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import '@carbon/web-components/es/components/button/index.js';
import styles from './story-styles.scss?lit';
import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader.js';
import Crossroads from '@carbon/icons/es/crossroads/16.js';
import { handleClick } from './coachmark-helpers';

const tooltipAlignments = {
  [`top`]: POPOVER_ALIGNMENT.TOP,
  [`top-end`]: POPOVER_ALIGNMENT.TOP_END,
  [`top-start`]: POPOVER_ALIGNMENT.TOP_START,
  [`bottom`]: POPOVER_ALIGNMENT.BOTTOM,
  [`bottom-end`]: POPOVER_ALIGNMENT.BOTTOM_END,
  [`bottom-start`]: POPOVER_ALIGNMENT.BOTTOM_START,
  [`left`]: POPOVER_ALIGNMENT.LEFT,
  [`left-end`]: POPOVER_ALIGNMENT.LEFT_END,
  [`left-start`]: POPOVER_ALIGNMENT.LEFT_START,
  [`right`]: POPOVER_ALIGNMENT.RIGHT,
  [`right-end`]: POPOVER_ALIGNMENT.RIGHT_END,
  [`right-start`]: POPOVER_ALIGNMENT.RIGHT_START,
};

const args = { align: POPOVER_ALIGNMENT.TOP };

const argTypes = {
  align: {
    control: 'select',
    description: 'Where to render the Coachmark relative to its target',
    options: tooltipAlignments,
  },
  open: {
    control: 'boolean',
    description: 'Specifies whether the component is currently open',
  },
  highContrast: {
    control: 'boolean',
    description:
      'Specify whether the component should be rendered on high-contrast',
  },
  caret: {
    control: 'boolean',
    description:
      'Specify whether a caret should be rendered on the popover. This is intended to use only for coachmark patterns.',
  },
  floating: {
    control: 'boolean',
    description: 'Specifies whether the component is floating or not',
  },
  dropShadow: {
    control: 'boolean',
    description:
      'Specify whether a drop shadow should be rendered on the popover',
  },
  position: {
    control: 'object',
    description:
      'Fine tune the position of the target in pixels. Applies only to Beacons',
  },
  selectorPrimaryFocus: {
    control: 'text',
    description:
      'CSS selector for the element that should receive focus when the coachmark opens',
  },
};

export const Tooltip = {
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom',
  },
  argTypes,

  render: (args: any) => {
    return html`
      <style>
        ${styles}
      </style>
      <div style="padding-top:200px; position: relative; display: flex;">
        <c4p-coachmark
          .open=${args.open}
          align=${args.align}
          .highContrast=${args.highContrast}
          .position=${{ x: 150, y: 100 }}
          .caret=${true}
        >
          <c4p-coachmark-beacon
            label="Show information"
            .expanded=${args.open}
            @c4p-coachmark-beacon-clicked=${handleClick}
            slot="trigger"
          >
          </c4p-coachmark-beacon>
          <c4p-coachmark-header
            closeIconDescription="Close"
            class="coachmark-header"
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

export const Floating = {
  args: {
    ...args,
    open: true,
    highContrast: true,
    align: 'bottom',
  },
  argTypes,
  render: (args: any) => {
    return html`
      <style>
        ${styles}
      </style>
      <div style="padding-top:200px; position: relative;">
        <c4p-coachmark
          .open=${args.open}
          align=${args.align}
          .highContrast=${args.highContrast}
          .floating=${Boolean(true)}
          drag-aria-label="Coachmark is being dragged"
        >
          <cds-button
            kind="tertiary"
            slot="trigger"
            class="trigger-btn"
            @click=${handleClick}
            >Show information ${iconLoader(Crossroads as any, { slot: 'icon' })}
          </cds-button>
          <c4p-coachmark-header
            closeIconDescription="Close"
            dragIconDescription="Drag"
            class="coachmark-header"
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

const meta = { title: 'Components/Onboarding/Coachmark' };

export default meta;
