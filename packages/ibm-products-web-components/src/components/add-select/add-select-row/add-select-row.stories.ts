/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select-row';
import { prefix } from '../../../globals/settings';

export const Default = {
  args: {
    itemId: '1',
    title: 'Row title',
    subtitle: 'Row subtitle description',
    value: 'row-1',
    multi: false,
    selected: false,
    disabled: false,
    hasChildren: false,
    tabIndex: 0,
  },
  argTypes: {
    itemId: {
      control: 'text',
      description: 'Unique identifier for the row',
    },
    title: {
      control: 'text',
      description: 'Row title',
    },
    subtitle: {
      control: 'text',
      description: 'Row subtitle',
    },
    value: {
      control: 'text',
      description: 'Row value',
    },
    multi: {
      control: 'boolean',
      description: 'Whether this is part of a multi-select list',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the row is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the row is disabled',
    },
    hasChildren: {
      control: 'boolean',
      description: 'Whether the row has children (for navigation)',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
    },
  },
  render: (args) => {
    const handleSelect = (event) => {
      console.log('Row selected:', event.detail);
    };

    const handleNavigate = (event) => {
      console.log('Navigate to children:', event.detail);
    };

    return html`
      <c4p-add-select-row
        item-id=${args.itemId}
        title=${args.title}
        subtitle=${args.subtitle}
        value=${args.value}
        ?multi=${args.multi}
        ?selected=${args.selected}
        ?disabled=${args.disabled}
        ?has-children=${args.hasChildren}
        tab-index=${args.tabIndex}
        @c4p-add-select-row-select=${handleSelect}
        @c4p-add-select-row-navigate=${handleNavigate}
      >
      </c4p-add-select-row>
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
  title: 'Components/Add and select/Add select row',
};

export default meta;
