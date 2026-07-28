/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, nothing } from 'lit';
import { action } from 'storybook/actions';
import '@carbon/web-components/es/components/toggle/index.js';
import './add-select';
import './add-select-body';
import './add-select-column';
import './add-select-row';
import './add-select-selection-summary';
import './add-select-selection-summary-item';
import './add-select-item-panel';
import styles from './story-styles.scss?lit';
import type { AddSelectItem } from '@carbon/ibm-products-utilities';

const storyClass = 'add-select-next-stories';

const sampleItems: AddSelectItem[] = [
  {
    id: '1',
    value: '1',
    title: 'Item 1',
    subtitle: 'Item 1 subtitle',
    itemDetails: [
      { label: 'Description', value: 'First item in the list' },
      { label: 'Category', value: 'Type A' },
      { label: 'Owner', value: 'Team Alpha' },
    ],
  },
  {
    id: '2',
    value: '2',
    title: 'Item 2',
    subtitle: 'Item 2 subtitle',
    itemDetails: [
      { label: 'Description', value: 'Second item in the list' },
      { label: 'Category', value: 'Type B' },
      { label: 'Owner', value: 'Team Beta' },
    ],
  },
  {
    id: '3',
    value: '3',
    title: 'Item 3',
    subtitle: 'Item 3 subtitle',
    itemDetails: [
      { label: 'Description', value: 'Third item in the list' },
      { label: 'Category', value: 'Type A' },
      { label: 'Owner', value: 'Team Alpha' },
    ],
  },
  {
    id: '4',
    value: '4',
    title: 'Item 4',
    subtitle: 'Item 4 subtitle',
    itemDetails: [
      { label: 'Description', value: 'Fourth item in the list' },
      { label: 'Category', value: 'Type C' },
      { label: 'Owner', value: 'Team Gamma' },
    ],
  },
  {
    id: '5',
    value: '5',
    title: 'Item 5',
    subtitle: 'Item 5 subtitle',
    itemDetails: [
      { label: 'Description', value: 'Fifth item in the list' },
      { label: 'Category', value: 'Type B' },
      { label: 'Owner', value: 'Team Beta' },
    ],
  },
];

const summaryItems: AddSelectItem[] = sampleItems.slice(1, 4);

// ─── AddSelectBody ────────────────────────────────────────────────────────────

const AddSelectBodyTemplate = (args) => {
  const {
    itemsLabel,
    globalSearchLabel,
    globalSearchPlaceholder,
    searchResultsTitle,
    itemCount,
    multi,
    hideSearch,
    showActionsSlot,
    showSubHeaderActions,
    showPath,
    path,
  } = args;

  return html`
    <style>
      ${styles}
    </style>
    <c4p-add-select ?multi=${multi}>
      <div class="${storyClass}__placeholder-shell">
        <c4p-add-select-body
          items-label=${itemsLabel}
          global-search-label=${globalSearchLabel}
          global-search-placeholder=${globalSearchPlaceholder}
          search-results-title=${searchResultsTitle}
          .itemCount=${itemCount}
          .path=${showPath ? path : []}
          ?hide-search=${hideSearch}
          @c4p-add-select-body-search=${action('c4p-add-select-body-search')}
          @c4p-add-select-body-breadcrumb-click=${action(
            'c4p-add-select-body-breadcrumb-click'
          )}
        >
          ${showActionsSlot
            ? html`
                <cds-icon-button
                  slot="actions"
                  label="Sort"
                  kind="ghost"
                  size="lg"
                >
                  <svg
                    slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6 6-6-1.4-1.4zM9 4L3 10l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10 9 4z"
                    />
                  </svg>
                </cds-icon-button>
                <cds-icon-button
                  slot="actions"
                  label="Filter"
                  kind="ghost"
                  size="lg"
                >
                  <svg
                    slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M18 28a2 2 0 0 1-1.2-.4l-4-3A2 2 0 0 1 12 23v-7.06l-8.8-10A2 2 0 0 1 4.72 3H27.28A2 2 0 0 1 28 6.94l-8 10V26a2 2 0 0 1-2 2z"
                    />
                  </svg>
                </cds-icon-button>
              `
            : nothing}
          ${showSubHeaderActions
            ? html`
                <cds-toggle
                  slot="sub-header-actions"
                  id="body-subheader-toggle"
                  label-a="Placeholder action"
                  label-b="Placeholder action"
                  size="sm"
                  hide-label
                ></cds-toggle>
              `
            : nothing}
          <div class="${storyClass}__placeholder-rows">
            ${sampleItems.slice(0, 3).map(
              () => html`
                <div class="${storyClass}__placeholder-row">
                  <p>AddSelect.Row</p>
                </div>
              `
            )}
          </div>
        </c4p-add-select-body>
      </div>
    </c4p-add-select>
  `;
};

export const AddSelectBody = {
  name: 'add-select-body',
  render: AddSelectBodyTemplate,
  args: {
    itemsLabel: 'All items',
    globalSearchLabel: 'Search items',
    globalSearchPlaceholder: 'Search by name',
    searchResultsTitle: 'Search results',
    itemCount: 3,
    multi: false,
    hideSearch: false,
    showActionsSlot: true,
    showSubHeaderActions: false,
    showPath: false,
    path: [
      { id: 'root', title: 'Category' },
      { id: 'folders', title: 'Folders' },
      { id: 'files', title: 'Files' },
    ],
  },
  argTypes: {
    itemsLabel: {
      control: 'text',
      description: 'Label shown when breadcrumbs are not used',
    },
    globalSearchLabel: {
      control: 'text',
      description: 'Accessible label for the global search input',
    },
    globalSearchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the global search input',
    },
    searchResultsTitle: {
      control: 'text',
      description: 'Title shown when search returns filtered results',
    },
    itemCount: {
      control: { type: 'number', min: 0 },
      description: 'Item count for display in tag badge',
    },
    multi: {
      control: 'boolean',
      description:
        'Switch between multi-select (checkboxes) and single-select (radio buttons)',
    },
    hideSearch: {
      control: 'boolean',
      description: 'Whether to hide the search input',
    },
    showActionsSlot: {
      control: 'boolean',
      description: 'Toggle example content for the actions slot',
      table: { category: 'Story controls' },
    },
    showSubHeaderActions: {
      control: 'boolean',
      description: 'Toggle example content for the sub-header-actions slot',
      table: { category: 'Story controls' },
    },
    showPath: {
      control: 'boolean',
      description: 'Toggle breadcrumb path usage',
      table: { category: 'Story controls' },
    },
    path: {
      control: 'object',
      description:
        'Breadcrumb entries used for hierarchical navigation. Array of objects with id and title properties.',
    },
  },
};

// ─── AddSelectColumn ──────────────────────────────────────────────────────────

const AddSelectColumnTemplate = (args) => {
  const {
    title,
    searchLabel,
    searchPlaceholder,
    showSearch,
    showActionsSlot,
    multi,
    showSelectAll,
    enableNavigation,
  } = args;

  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyClass}-column-container">
      <c4p-add-select ?multi=${multi}>
        <c4p-add-select-body>
          <c4p-add-select-column
            title=${title}
            search-label=${searchLabel}
            search-placeholder=${searchPlaceholder}
            ?hide-search=${!showSearch}
            ?multi=${multi}
            ?show-select-all=${showSelectAll}
            .itemCount=${sampleItems.length}
            @c4p-add-select-column-search=${action(
              'c4p-add-select-column-search'
            )}
            @c4p-add-select-column-select-all=${action(
              'c4p-add-select-column-select-all'
            )}
          >
            ${showActionsSlot
              ? html`
                  <cds-icon-button
                    slot="actions"
                    label="Sort"
                    kind="ghost"
                    size="sm"
                  >
                    <svg
                      slot="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6 6-6-1.4-1.4zM9 4L3 10l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10 9 4z"
                      />
                    </svg>
                  </cds-icon-button>
                  <cds-icon-button
                    slot="actions"
                    label="Filter"
                    kind="ghost"
                    size="sm"
                  >
                    <svg
                      slot="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M18 28a2 2 0 0 1-1.2-.4l-4-3A2 2 0 0 1 12 23v-7.06l-8.8-10A2 2 0 0 1 4.72 3H27.28A2 2 0 0 1 28 6.94l-8 10V26a2 2 0 0 1-2 2z"
                      />
                    </svg>
                  </cds-icon-button>
                `
              : nothing}
            ${sampleItems.map(
              (item) => html`
                <c4p-add-select-row
                  item-id=${item.id}
                  title=${item.title}
                  value=${item.value}
                  ?has-children=${enableNavigation && item.id === '1'}
                  @c4p-add-select-row-select=${action(
                    'c4p-add-select-row-select'
                  )}
                  @c4p-add-select-row-navigate=${action(
                    'c4p-add-select-row-navigate'
                  )}
                ></c4p-add-select-row>
              `
            )}
          </c4p-add-select-column>
        </c4p-add-select-body>
      </c4p-add-select>
    </div>
  `;
};

export const AddSelectColumn = {
  name: 'add-select-column',
  render: AddSelectColumnTemplate,
  args: {
    title: 'Available items',
    searchLabel: 'Search within column',
    searchPlaceholder: 'Search items',
    showSearch: true,
    showActionsSlot: true,
    multi: true,
    showSelectAll: false,
    enableNavigation: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title for the column',
    },
    searchLabel: {
      control: 'text',
      description: 'Accessible label for the column search input',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the column search input',
    },
    showSearch: {
      control: 'boolean',
      description: 'Toggle the hide-search behavior',
      table: { category: 'Story controls' },
    },
    showActionsSlot: {
      control: 'boolean',
      description: 'Toggle example content for the actions slot',
      table: { category: 'Story controls' },
    },
    multi: {
      control: 'boolean',
      description: 'Switch between checkbox and radio row selection',
    },
    showSelectAll: {
      control: 'boolean',
      description: 'Show the Select all checkbox when multi is enabled',
    },
    enableNavigation: {
      control: 'boolean',
      description: 'Show how the column can pass navigation callbacks to rows',
      table: { category: 'Story controls' },
    },
  },
};

// ─── AddSelectRow ─────────────────────────────────────────────────────────────

const AddSelectRowTemplate = (args) => {
  const { multi, selected, showSubtitle, showTag, hasChildren, disabled } =
    args;

  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyClass}-container--single">
      <c4p-add-select ?multi=${multi}>
        <c4p-add-select-body>
          <c4p-add-select-column ?multi=${multi} ?hide-search=${true}>
            <c4p-add-select-row
              item-id="1"
              title="Item title"
              subtitle=${showSubtitle ? 'Item subtitle' : ''}
              value="folder 1"
              ?selected=${selected}
              ?disabled=${disabled}
              ?has-children=${hasChildren}
              @c4p-add-select-row-select=${action('c4p-add-select-row-select')}
              @c4p-add-select-row-navigate=${action(
                'c4p-add-select-row-navigate'
              )}
            >
              ${showTag
                ? html`<cds-tag type="blue" size="sm">Folder</cds-tag>`
                : nothing}
            </c4p-add-select-row>
          </c4p-add-select-column>
        </c4p-add-select-body>
      </c4p-add-select>
    </div>
  `;
};

export const AddSelectRow = {
  name: 'add-select-row',
  render: AddSelectRowTemplate,
  args: {
    multi: false,
    selected: false,
    showSubtitle: true,
    showTag: false,
    hasChildren: true,
    disabled: false,
  },
  argTypes: {
    multi: {
      control: 'boolean',
      description:
        'Toggle row rendering between checkbox and radio button mode',
      table: { category: 'Story controls' },
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Demonstrate the optional subtitle attribute',
      table: { category: 'Story controls' },
    },
    showTag: {
      control: 'boolean',
      description: 'Render custom row children content (default slot)',
      table: { category: 'Story controls' },
    },
    hasChildren: {
      control: 'boolean',
      description: 'Show the navigation indicator for hierarchical lists',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the example row',
    },
    selected: {
      control: 'boolean',
      description: 'Set the row selection state',
      table: { category: 'Story controls' },
    },
  },
};

// ─── AddSelectSelectionSummary ────────────────────────────────────────────────

const AddSelectSelectionSummaryTemplate = (args) => {
  const {
    title,
    showEditIcon,
    showHeaderActions,
    showEmptyState,
    editIconDescription,
    useCustomHeader,
    useCustomChildren,
  } = args;

  const selectedItemsArray = showEmptyState ? [] : summaryItems;

  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyClass}-summary-container">
      <c4p-add-select-selection-summary
        title=${title}
        .selectedItemCount=${selectedItemsArray.length}
        ?show-edit-icon=${showEditIcon}
        edit-icon-description=${editIconDescription}
        @c4p-add-select-selection-summary-edit=${action(
          'c4p-add-select-selection-summary-edit'
        )}
      >
        ${useCustomHeader
          ? html`
              <div slot="header" class="${storyClass}__summary-header-content">
                <h3>Custom Header</h3>
                <cds-icon-button label="Popup" kind="ghost" size="sm">
                  <svg
                    slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9v2H6v20h20v-9h2v9a2 2 0 0 1-2 2z"
                    />
                    <path
                      d="M21 2v2h5.59L18 12.59 19.41 14 28 5.41V11h2V2h-9z"
                    />
                  </svg>
                </cds-icon-button>
              </div>
            `
          : nothing}
        ${showHeaderActions
          ? html`
              <cds-icon-button
                slot="header-actions"
                label="Filter"
                kind="ghost"
                size="sm"
              >
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="16"
                  height="16"
                >
                  <path
                    d="M18 28a2 2 0 0 1-1.2-.4l-4-3A2 2 0 0 1 12 23v-7.06l-8.8-10A2 2 0 0 1 4.72 3H27.28A2 2 0 0 1 28 6.94l-8 10V26a2 2 0 0 1-2 2z"
                  />
                </svg>
              </cds-icon-button>
              <cds-icon-button
                slot="header-actions"
                label="Popup"
                kind="ghost"
                size="sm"
              >
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="16"
                  height="16"
                >
                  <path
                    d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9v2H6v20h20v-9h2v9a2 2 0 0 1-2 2z"
                  />
                  <path d="M21 2v2h5.59L18 12.59 19.41 14 28 5.41V11h2V2h-9z" />
                </svg>
              </cds-icon-button>
            `
          : nothing}
        ${showEmptyState
          ? html`
              <div slot="empty-state" class="${storyClass}__empty-state">
                <p>No selected items. Select items to see them here.</p>
              </div>
            `
          : nothing}
        ${selectedItemsArray.slice(0, 3).map((item) =>
          useCustomChildren
            ? html`
                <div
                  class="${storyClass}__summary-item-row"
                  style="border-block-end: 1px solid var(--cds-border-subtle-01)"
                >
                  <div class="${storyClass}__summary-item-row-text">
                    <p class="${storyClass}__summary-item-row-text__title">
                      ${item.title}
                    </p>
                    ${item.subtitle
                      ? html`<p
                          class="${storyClass}__summary-item-row-text__subtitle"
                        >
                          ${item.subtitle}
                        </p>`
                      : nothing}
                  </div>
                  <span class="${storyClass}__summary-item-row-modifier"
                    >Modifier</span
                  >
                </div>
              `
            : html`
                <c4p-add-select-selection-summary-item
                  .item=${item}
                  use-accordion
                  remove-button-label="Remove item"
                  @c4p-add-select-selection-summary-item-remove=${action(
                    'c4p-add-select-selection-summary-item-remove'
                  )}
                ></c4p-add-select-selection-summary-item>
              `
        )}
      </c4p-add-select-selection-summary>
    </div>
  `;
};

export const AddSelectSelectionSummary = {
  name: 'add-select-selection-summary',
  render: AddSelectSelectionSummaryTemplate,
  args: {
    title: 'Selected items',
    showEditIcon: true,
    showHeaderActions: false,
    showEmptyState: false,
    editIconDescription: 'Edit selections',
    useCustomHeader: false,
    useCustomChildren: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Heading displayed above the selection summary list',
    },
    showEditIcon: {
      control: 'boolean',
      description: 'Show the edit icon button',
    },
    editIconDescription: {
      control: 'text',
      description: 'Edit icon aria-label',
    },
    useCustomChildren: {
      control: 'boolean',
      description:
        'Toggle example custom children instead of SelectionSummaryItem components',
      table: { category: 'Story controls' },
    },
    useCustomHeader: {
      control: 'boolean',
      description: 'Toggle example custom header content (header slot)',
      table: { category: 'Story controls' },
    },
    showHeaderActions: {
      control: 'boolean',
      description: 'Toggle example content for the header-actions slot',
      table: { category: 'Story controls' },
    },
    showEmptyState: {
      control: 'boolean',
      description: 'Show the empty-state slot usage',
      table: { category: 'Story controls' },
    },
  },
};

// ─── AddSelectSelectionSummaryItem ────────────────────────────────────────────

const AddSelectSelectionSummaryItemTemplate = (args) => {
  const {
    useAccordion,
    removeButtonLabel,
    useCustomTitle,
    useCustomContent,
    useChildren,
  } = args;

  const item = summaryItems[0];

  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyClass}__summary-item-wrapper">
      <c4p-add-select-selection-summary-item
        .item=${item}
        ?use-accordion=${useAccordion}
        remove-button-label=${removeButtonLabel}
        @c4p-add-select-selection-summary-item-remove=${action(
          'c4p-add-select-selection-summary-item-remove'
        )}
      >
        ${useChildren
          ? html`
              <div class="${storyClass}__summary-item-row">
                <div class="${storyClass}__summary-item-row-text">
                  <p class="${storyClass}__summary-item-row-text__title">
                    ${item.title}
                  </p>
                  ${item.subtitle
                    ? html`<p
                        class="${storyClass}__summary-item-row-text__subtitle"
                      >
                        ${item.subtitle}
                      </p>`
                    : nothing}
                </div>
                <span class="${storyClass}__summary-item-row-modifier"
                  >Modifier</span
                >
              </div>
            `
          : nothing}
        ${useCustomTitle && !useChildren
          ? html`
              <div
                slot="accordion-title"
                class="${storyClass}__accordion-title"
              >
                <div class="${storyClass}__accordion-title-text">
                  <p class="${storyClass}__accordion-title-text__title">
                    ${item.title}
                  </p>
                  ${item.subtitle
                    ? html`<p
                        class="${storyClass}__accordion-title-text__subtitle"
                      >
                        ${item.subtitle}
                      </p>`
                    : nothing}
                </div>
              </div>
            `
          : nothing}
        ${useCustomContent && !useChildren
          ? html`
              <div slot="accordion-body" class="${storyClass}__accordion-body">
                <cds-tag type="blue" size="sm">${item.title}</cds-tag>
                <cds-tag type="cyan" size="sm">Category A</cds-tag>
                <cds-tag type="teal" size="sm">Active</cds-tag>
                <cds-tag type="purple" size="sm">Priority</cds-tag>
              </div>
            `
          : nothing}
      </c4p-add-select-selection-summary-item>
    </div>
  `;
};

export const AddSelectSelectionSummaryItem = {
  name: 'add-select-selection-summary-item',
  render: AddSelectSelectionSummaryItemTemplate,
  args: {
    useAccordion: true,
    removeButtonLabel: 'Remove item',
    useCustomTitle: false,
    useCustomContent: false,
    useChildren: false,
  },
  argTypes: {
    useAccordion: {
      control: 'boolean',
      description: 'Render the item with Carbon Accordion markup',
    },
    removeButtonLabel: {
      control: 'text',
      description: 'Accessible label for the remove icon button',
    },
    useCustomTitle: {
      control: 'boolean',
      description: 'Demonstrate accordion-title slot in accordion mode',
      table: { category: 'Story controls' },
    },
    useCustomContent: {
      control: 'boolean',
      description: 'Demonstrate accordion-body slot in accordion mode',
      table: { category: 'Story controls' },
    },
    useChildren: {
      control: 'boolean',
      description:
        'Demonstrate custom children content (default slot — takes highest priority)',
      table: { category: 'Story controls' },
    },
  },
};

// ─── AddSelectItemPanel ───────────────────────────────────────────────────────

const AddSelectItemPanelTemplate = (args) => {
  const { title, open, closeIconDescription, useChildren, useRenderItem } =
    args;

  const panelItem = sampleItems[0];

  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyClass}-summary-container">
      <c4p-add-select-item-panel
        title=${title}
        .item=${panelItem}
        ?open=${open}
        close-icon-description=${closeIconDescription}
        @c4p-add-select-item-panel-close=${action(
          'c4p-add-select-item-panel-close'
        )}
      >
        ${useChildren
          ? html`
              <div class="${storyClass}__item-panel-content">
                <p class="${storyClass}__item-panel-content__title">
                  Custom children content
                </p>
                <p class="${storyClass}__item-panel-content__body">
                  This content is passed as children and takes highest priority
                </p>
              </div>
            `
          : nothing}
        ${useRenderItem && !useChildren
          ? html`
              <div slot="render-item" class="${storyClass}__item-panel-content">
                <p class="${storyClass}__item-panel-content__title">
                  ${panelItem.title}
                </p>
                <p class="${storyClass}__item-panel-content__body">
                  Custom rendered details for ${panelItem.value}
                </p>
              </div>
            `
          : nothing}
      </c4p-add-select-item-panel>
    </div>
  `;
};

export const AddSelectItemPanel = {
  name: 'add-select-item-panel',
  render: AddSelectItemPanelTemplate,
  args: {
    title: 'Item details',
    open: true,
    closeIconDescription: 'Close item details',
    useChildren: false,
    useRenderItem: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title',
    },
    open: {
      control: 'boolean',
      description:
        'Toggles the `--open` CSS modifier class. Use for CSS-driven slide-in/out transitions instead of conditional rendering.',
    },
    closeIconDescription: {
      control: 'text',
      description: 'Close button aria-label',
    },
    useChildren: {
      control: 'boolean',
      description: 'Demonstrate custom children content (highest priority)',
      table: { category: 'Story controls' },
    },
    useRenderItem: {
      control: 'boolean',
      description: 'Demonstrate custom render-item slot for AddSelectItem data',
      table: { category: 'Story controls' },
    },
  },
};

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Preview/Add and select',
  tags: ['autodocs'],
  decorators: [
    (story) => html`<div class="${storyClass}__viewport">${story()}</div>`,
  ],
  parameters: {
    styles,
  },
};

export default meta;
