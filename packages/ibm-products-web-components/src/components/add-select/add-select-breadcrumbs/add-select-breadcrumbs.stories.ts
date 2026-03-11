/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './add-select-breadcrumbs';
import { prefix } from '../../../globals/settings';

export const Default = {
  args: {
    multi: false,
    path: [
      { id: 'root', title: 'Root' },
      { id: 'category', title: 'Category' },
      { id: 'subcategory', title: 'Subcategory' },
    ],
  },
  argTypes: {
    multi: {
      control: 'boolean',
      description: 'Whether this is a multi-select',
    },
    path: {
      control: 'object',
      description: 'Navigation path array',
    },
  },
  render: (args) => {
    const handleBreadcrumbClick = (event) => {
      console.log('Breadcrumb clicked:', event.detail);
    };

    return html`
      <c4p-add-select-breadcrumbs
        ?multi=${args.multi}
        .path=${args.path}
        @c4p-add-select-breadcrumbs-click=${handleBreadcrumbClick}
      >
      </c4p-add-select-breadcrumbs>
    `;
  },
};

export const SingleLevel = {
  args: {
    multi: false,
    path: [{ id: 'root', title: 'Root' }],
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const MultiLevel = {
  args: {
    multi: false,
    path: [
      { id: 'root', title: 'Root' },
      { id: 'level1', title: 'Level 1' },
      { id: 'level2', title: 'Level 2' },
      { id: 'level3', title: 'Level 3' },
      { id: 'level4', title: 'Level 4' },
    ],
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

export const MultiSelectMode = {
  args: {
    multi: true,
    path: [
      { id: 'root', title: 'Root' },
      { id: 'category', title: 'Category' },
      { id: 'subcategory', title: 'Subcategory' },
    ],
  },
  argTypes: Default.argTypes,
  render: Default.render,
};

const meta = {
  title: 'Components/Add and select/Add select breadcrumbs',
};

export default meta;
