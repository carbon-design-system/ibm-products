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
import './user-avatar';
import { prefix } from '../../globals/settings';

import { POPOVER_ALIGNMENT } from '@carbon/web-components/es/components/popover/defs.js';
import styles from './story-styles.scss?lit';
import Group from '@carbon/web-components/es/icons/group/16';
import User from '@carbon/web-components/es/icons/user/16';
import Add from '@carbon/web-components/es/icons/add/16';
//import Group from '@carbon/icons/lib/group/16';

const storyPrefix = 'user-avatar-stories__';

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

const defaultTemplate = {
  args: {
    tooltipAlignment: POPOVER_ALIGNMENT.RIGHT,
    tooltipText: 'TW, Thomas J. Watson user profile',
    name: 'Thomas J. Watson',
  },
  argTypes: {
    tooltipAlignment: {
      control: 'select',
      description: 'Specify the alignment of the tooltip.',
      options: tooltipAlignments,
    },
    tooltipText: {
      control: 'text',
      description: 'Specify the text of the tooltip',
    },
    name: {
      control: 'text',
      description: 'Specify the name of the user',
    },
    renderIcon: {
      control: 'select',
      description: 'Specify the renderIcon for user',
      options: ['No icon', 'User', 'Group', 'Add'],
      mapping: { 'No icon': '', User: User, Group: Group, Add: Add },
    },
  },
  render: (args) => {
    return html`
      <style>
        ${styles}
      </style>

      <div class="${storyPrefix}story-container">
        <div class="${storyPrefix}story-header"></div>
        <div
          id="page-content-selector"
          class="${storyPrefix}story-content"
        ></div>
      </div>
      <c4p-user-avatar
        tooltip-alignment=${args.tooltipAlignment}
        tooltip-text=${args.tooltipText}
        name=${args.name}
        .renderIcon=${args.renderIcon}
      >
      </c4p-user-avatar>
    `;
  },
};

export const Default = {
  ...defaultTemplate,
  args: {
    ...defaultTemplate.args,
  },
};

const meta = {
  title: 'Experimental/Useravatar',
};

export default meta;
