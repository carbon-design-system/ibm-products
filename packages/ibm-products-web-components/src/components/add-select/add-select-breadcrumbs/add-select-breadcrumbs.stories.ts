/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LitElement } from 'lit';
import './add-select-breadcrumbs';
import '../add-select/add-select';
import styles from '../story-styles.scss?lit';

@customElement('add-select-breadcrumbs-default-example')
class AddSelectBreadcrumbsDefaultExample extends LitElement {
  @state()
  private _path!: Array<{ id: string; title: string }>;

  constructor() {
    super();
    this._path = [
      { id: 'root', title: 'All Items' },
      { id: 'category-1', title: 'Category 1' },
      { id: 'subcategory-1', title: 'Subcategory 1' },
    ];
  }

  private _handleBreadcrumbClick(event: CustomEvent) {
    const { index } = event.detail;
    // Navigate back to the clicked level
    this._path = this._path.slice(0, index + 1);
    console.log('Navigated to:', this._path[index].title);
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <div class="add-select-story-variant-container">
        <h4>Breadcrumb navigation</h4>
        <c4p-add-select>
          <c4p-add-select-breadcrumbs
            .path=${this._path}
            @c4p-add-select-breadcrumbs-click=${this._handleBreadcrumbClick}
          >
          </c4p-add-select-breadcrumbs>
        </c4p-add-select>
      </div>
    `;
  }
}

/**
 * Story 1: Default
 * Shows breadcrumb navigation with clickable path
 */
export const Default = {
  render: () =>
    html`<add-select-breadcrumbs-default-example></add-select-breadcrumbs-default-example>`,
};

const meta = {
  title: 'Preview/Add and select/AddSelectBreadcrumbs',
  tags: ['autodocs'],
  decorators: [
    (story) => html` <div class="add-select-story-container">${story()}</div> `,
  ],
  parameters: {
    styles,
  },
};

export default meta;
