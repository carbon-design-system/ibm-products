/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select-item';
import { prefix } from '../../../globals/settings';

export const Default = {
  args: {
    itemId: '1',
    title: 'Item title',
    subtitle: 'Item subtitle description',
    value: 'item-1',
    multi: false,
    selected: false,
    disabled: false,
    hasChildren: false,
    tabIndex: 0,
  },
  argTypes: {
    itemId: {
      control: 'text',
      description: 'Unique identifier for the item',
    },
    title: {
      control: 'text',
      description: 'Item title',
    },
    subtitle: {
      control: 'text',
      description: 'Item subtitle',
    },
    value: {
      control: 'text',
      description: 'Item value',
    },
    multi: {
      control: 'boolean',
      description: 'Whether this is part of a multi-select list',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the item is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the item is disabled',
    },
    hasChildren: {
      control: 'boolean',
      description: 'Whether the item has children (for navigation)',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
    },
  },
  render: (args) => {
    const handleSelect = (event) => {
      console.log('Item selected:', event.detail);
    };

    const handleNavigate = (event) => {
      console.log('Navigate to children:', event.detail);
    };

    return html`
      <c4p-add-select-item
        item-id=${args.itemId}
        title=${args.title}
        subtitle=${args.subtitle}
        value=${args.value}
        ?multi=${args.multi}
        ?selected=${args.selected}
        ?disabled=${args.disabled}
        ?has-children=${args.hasChildren}
        tab-index=${args.tabIndex}
        @c4p-add-select-item-select=${handleSelect}
        @c4p-add-select-item-navigate=${handleNavigate}
      >
      </c4p-add-select-item>
    `;
  },
};

export const SingleSelect = {
  args: {
    ...Default.args,
    multi: false,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const MultiSelect = {
  args: {
    ...Default.args,
    multi: true,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const Selected = {
  args: {
    ...Default.args,
    selected: true,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const WithChildren = {
  args: {
    ...Default.args,
    hasChildren: true,
    title: 'Parent item',
    subtitle: 'This item has children',
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const WithoutSubtitle = {
  args: {
    ...Default.args,
    subtitle: '',
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

const meta = {
  title: 'Components/Add and select/Add select item',
};

export default meta;
