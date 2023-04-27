/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This is the structure of the storybook navigation. Each entry has a name (n)
// and a structure (s) which is an array of items, each of which can be a
// component name or another entry. Component names include a prefix to enable
// name-spacing: the prefix is used when searching, but not included in
// materialized paths. Component names may also be renamed for display by
// adding the new name after a colon: the new name is used in materialized
// paths but ignored during searching.
const s = [
  {
    n: 'Overview',
    s: [
      {
        n: 'Getting started',
        s: [],
      },
      {
        n: 'Usage examples',
        s: [],
      },
      'o/Examples',
    ],
  },
  {
    n: 'IBM Products',
    s: [
      {
        n: 'Components',
        s: [
          { n: 'Button menu', s: ['c/ButtonMenu'] },
          { n: 'Tag set', s: ['c/TagSet'] },
          { n: 'Cards', s: ['c/ExpressiveCard', 'c/ProductiveCard'] },
          { n: 'Modified tabs', s: ['c/ModifiedTabs'] },
          { n: 'Options tile', s: ['c/OptionsTile'] },
          { n: 'Page header', s: ['c/PageHeader'] },
          { n: 'Side panel', s: ['c/SidePanel'] },
          { n: 'Tearsheet', s: ['c/Tearsheet', 'c/TearsheetNarrow'] },
          { n: 'DataSpreadsheet', s: ['c/DataSpreadsheet'] },
          {
            n: 'Datagrid',
            s: [
              'c/Datagrid',
              'c/Datagrid/Extensions/Header',
              'c/Datagrid/Extensions/RowHeightSettings',
              'c/Datagrid/Extensions/RowActionButtons',
              'c/Datagrid/Extensions/ExpandableRow',
              'c/Datagrid/Extensions/NestedRows',
              'c/Datagrid/Extensions/ColumnAlignment',
              'c/Datagrid/Extensions/ClickableRow',
              'c/Datagrid/Extensions/InlineEdit',
              'c/Datagrid/Extensions/ColumnCustomization',
            ],
          },
        ],
      },
      {
        n: 'Patterns',
        s: [
          { n: 'Add Select', s: ['c/SingleAddSelect', 'c/MultiAddSelect'] },
          { n: 'About modal', s: ['c/AboutModal'] },
          {
            n: 'Create flows',
            s: [
              'c/CreateFullPage',
              'c/CreateModal',
              'c/CreateTearsheet',
              'c/CreateTearsheetNarrow',
              'c/CreateSidePanel',
            ],
          },
          {
            n: 'Edit and update',
            s: [
              'c/EditInPlace',
              {
                n: 'Inline edit',
                s: [
                  {
                    n: 'V1',
                    s: ['c/InlineEditV1'],
                  },
                  {
                    n: 'V2',
                    s: ['c/InlineEditV2'],
                  },
                ],
              },
              'c/EditSidePanel',
              'c/EditTearsheet',
              'c/EditTearsheetNarrow',
              'c/EditFullPage',
              'c/EditUpdateCards',
            ],
          },
          {
            n: 'Empty state',
            s: [
              'c/EmptyState',
              'c/ErrorEmptyState',
              'c/NoDataEmptyState',
              'c/NoTagsEmptyState',
              'c/NotFoundEmptyState',
              'c/NotificationsEmptyState',
              'c/UnauthorizedEmptyState',
            ],
          },
          { n: 'Export', s: ['c/ExportModal'] },
          { n: 'Generating an API key', s: ['c/APIKeyModal'] },
          {
            n: 'HTTP errors',
            s: ['c/HTTPError403', 'c/HTTPError404', 'c/HTTPErrorOther'],
          },
          { n: 'Import and upload', s: ['c/ImportModal'] },
          { n: 'Notifications', s: ['c/NotificationsPanel'] },
          { n: 'Remove', s: ['c/RemoveModal'] },
          { n: 'Saving', s: ['c/Saving'] },
          { n: 'Status icons', s: ['c/StatusIcon'] },
          { n: 'Toolbars', s: ['c/Toolbar'] },
          { n: 'User profile images', s: ['c/UserProfileImage'] },
          { n: 'Web terminal', s: ['c/WebTerminal'] },
          { n: 'Cascade', s: ['c/Cascade'] },
        ],
      },
      {
        n: 'Internal',
        s: [
          'c/ActionBar',
          'c/ActionSet',
          'c/BreadcrumbWithOverflow',
          'c/ButtonSetWithOverflow',
          'c/CancelableTextEdit',
          'c/ComboButton',
          'c/ExampleComponent',
          'c/FilterSummary',
          'c/TearsheetShell',
        ],
      },
      {
        n: 'Novice to pro',
        s: ['c/NonLinearReading'],
      },
    ],
  },
  {
    n: 'Carbon',
    s: [],
  },
  {
    n: 'Security',
    s: [
      {
        n: 'Layout modules',
        s: ['a/Library'],
      },
      { n: 'Layouts', s: [] },
      // cSpell:words Microlayouts
      { n: 'Microlayouts', s: [] },
      {
        n: 'Patterns',
        s: [],
      },
    ],
  },
  {
    n: 'CD&AI legacy',
    s: [
      {
        n: 'Components',
        s: [
          'a/ContextHeader:ContextHeader#legacy',
          'a/IdeAPIKeyGeneration:IdeAPIKeyGeneration#legacy',
          'a/IdeButton:IdeButton#legacy',
          'a/IdeCard:IdeCard#legacy',
          'a/IdeCreate:IdeCreate#legacy',
          'a/IdeDataTable:IdeDataTable#legacy',
          'a/IdeEmptyState:IdeEmptyState#legacy',
          'a/IdeFilter:IdeFilter#legacy',
          'a/IdeHome:IdeHome#legacy',
          'a/IdeHTTPErrors:IdeHTTPErrors#legacy',
          'a/IdeImporting:IdeImporting#legacy',
          'a/IdeNavigation:IdeNavigation#legacy',
          'a/IdeRemove:IdeRemove#legacy',
          'a/IdeSaving:IdeSaving#legacy',
          'a/IdeSideNavMenu:IdeSideNavMenu#legacy',
          'a/IdeSlideOverPanel:IdeSlideOverPanel#legacy',
          'a/IdeTableToolbarSearch:IdeTableToolbarSearch#legacy',
        ],
      },
    ],
  },
];

const getEntryDisplayName = (name) => {
  const match = name.match(/.*?\/(?:(.*):(.*)|(.*))/);
  return match[2] ?? match[3];
};

// This function takes an s array and returns an array of the fully
// materialized paths in the storybook structure in order
const getSectionOrder = (sArray) =>
  sArray
    .map((entry) =>
      typeof entry === 'string'
        ? // if the entry is a string, return it (without the prefix)
          getEntryDisplayName(entry)
        : // if the entry is another structure, return its name, but first get
          // the fully materialized paths it contains and add the entry name
          // to the front of each
          [
            getSectionOrder(entry.s).map((path) => `${entry.n}/${path}`),
            entry.n,
          ]
    )
    .flat(Infinity);

// An array of the names of storybook sections in the desired order.
const sectionOrder = getSectionOrder(s).concat(['']);

/**
 * Return the sequence number of a story kind in the storybook structure.
 * This can be used to sort stories into the required hierarchy.
 * @param {string} kind a story kind
 * @returns the sequence number for the story kind in the storybook structure.
 */
export const getSectionSequence = (kind) =>
  sectionOrder.findIndex((item) => kind.startsWith(item));

const prepend = (elt, arr) => arr && [elt].concat(arr);

const getEntryPrefixAndComponentName = (name) => {
  const match = name.match(/(?:(.*):(.*)|(.*?\/.*))/);
  return match[1] ?? match[3];
};

// This function takes an s array and component name and returns the
// materialized path of the component name as an array of the nested section
// names, or null if the component name is not found
const getPath = (s, componentAndPrefix, componentName) =>
  s.reduce(
    (found, next) =>
      // if a previous entry has already matched, pass it forward
      found ||
      (typeof next === 'string'
        ? // if this entry is a string, and it matches the component name
          // we're looking for, return it as an array, else return null
          getEntryPrefixAndComponentName(next) === componentAndPrefix
          ? [getEntryDisplayName(next)]
          : null
        : // if this entry is another structure, find the materialized path
          // into it and prepend its name if found and return null otherwise
          prepend(next.n, getPath(next.s, componentAndPrefix, componentName))),
    null
  );

/**
 * Return the storybook path for a component, given the prefix and name of the
 * component. The prefix enables different components with the same name to be
 * included in the storybook structure.
 * @param {string} prefix The prefix for the component.
 * @param {string} componentName The name of the component.
 * @returns The path for the component storybook entry, or null if the
 * component is not listed in the storybook structure.
 */
export const getPathForComponent = (prefix, componentName) =>
  getPath(s, `${prefix}/${componentName}`, componentName)?.join('/');
