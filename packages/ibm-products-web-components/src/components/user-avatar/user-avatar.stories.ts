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
import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import Group from '@carbon/icons/es/group/16';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';

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

const argTypes = {
  backgroundColor: {
    control: { type: 'select' },
    options: [
      'order-1-cyan',
      'order-2-gray',
      'order-3-green',
      'order-4-magenta',
      'order-5-purple',
      'order-6-teal',
      'order-7-cyan',
      'order-8-gray',
      'order-9-green',
      'order-10-magenta',
      'order-11-purple',
      'order-12-teal',
    ],
  },
  tooltipAlignment: {
    control: 'select',
    description: 'Specify the alignment of the tooltip.',
    options: tooltipAlignments,
  },
  tooltipText: {
    control: 'text',
    description: 'Specify the text of the tooltip',
  },
  name: { control: 'text', description: 'Specify the name of the user' },
  size: { control: { type: 'radio' }, options: ['xl', 'lg', 'md', 'sm'] },
  image: {
    control: 'textNullable',
    description: 'Specify the full path to the image to be displayed',
  },
  imageDescription: {
    control: 'text',
    description: 'Specify the to description of image for screen reader users',
  },
  theme: { control: { type: 'select' }, options: ['light', 'dark'] },
};

export const Default = {
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    size: 'md',
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
    backgroundColor: 'order-1-cyan',
    theme: 'light',
  },
  argTypes,
  render: (args) => {
    return html`
      <c4p-user-avatar
        tooltip-alignment=${args.tooltipAlignment}
        tooltip-text=${args.tooltipText}
        name=${args.name}
        size=${args.size}
        background-color=${args.backgroundColor}
        theme=${args.theme}
      >
      </c4p-user-avatar>
    `;
  },
};

export const WithIcon = {
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    size: 'md',
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
    backgroundColor: 'order-1-cyan',
    theme: 'light',
  },
  argTypes,
  render: (args) => {
    return html`
      <c4p-user-avatar
        tooltip-alignment=${args.tooltipAlignment}
        tooltip-text=${args.tooltipText}
        name=${args.name}
        size=${args.size}
        background-color=${args.backgroundColor}
        theme=${args.theme}
      >
        ${iconLoader(Group, { slot: 'rendericon' })}
      </c4p-user-avatar>
    `;
  },
};

export const WithImage = {
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    size: 'md',
    image:
      'https://assets.ibm.com/is/image/ibm/christina-frohn?wid=2760&hei=1552&fit=constrain,0&qlt=85,0&fmt=png-alpha',
    tooltipText: 'TW, Thomas J. Watson user profile',
    imageDescription: 'Avatar of Thomas J. Watson',
    theme: 'light',
  },
  argTypes,
  render: (args) => {
    return html`
      <c4p-user-avatar
        tooltip-alignment=${args.tooltipAlignment}
        tooltip-text=${args.tooltipText}
        size=${args.size}
        image=${args.image}
        image-description=${args.imageDescription}
        theme=${args.theme}
      >
      </c4p-user-avatar>
    `;
  },
};

const meta = { title: 'Components/UserAvatar' };

export default meta;
