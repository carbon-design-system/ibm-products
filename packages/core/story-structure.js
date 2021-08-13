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
// materialized paths.
const s = [
  {
    n: 'Cloud & Cognitive',
    s: [
      {
        n: 'Components',
        s: [
          { n: 'Cards', s: ['c/ExpressiveCard', 'c/ProductiveCard'] },
          { n: 'Progressive loading bar', s: ['c/LoadingBar'] },
          { n: 'Side panel', s: ['c/SidePanel'] },
          { n: 'Tag set', s: ['c/TagSet'] },
          { n: 'Tearsheet', s: ['c/Tearsheet', 'c/TearsheetNarrow'] },
          { n: 'Modified tabs', s: ['c/ModifiedTabs'] },
          { n: 'Page header', s: ['c/PageHeader'] },
        ],
      },
      {
        n: 'Patterns',
        s: [
          { n: 'About modal', s: ['c/AboutModal'] },
          { n: 'Generating an API key', s: ['c/APIKeyModal'] },
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
            n: 'HTTP errors',
            s: ['c/HTTPError403', 'c/HTTPError404', 'c/HTTPErrorOther'],
          },
          { n: 'Import and upload', s: ['c/ImportModal'] },
          { n: 'Notifications', s: ['c/NotificationsPanel'] },
          { n: 'Remove', s: ['c/RemoveModal'] },
          { n: 'Saving', s: ['c/Saving'] },
          { n: 'Status icons', s: ['c/StatusIcon'] },
          { n: 'User profile images', s: ['c/UserProfileImage'] },
          { n: 'Web terminal', s: ['c/WebTerminal'] },
        ],
      },
      {
        n: 'Internal',
        s: [
          'c/ActionBar',
          'c/ActionSet',
          'c/BreadcrumbWithOverflow',
          'c/ButtonMenu',
          'c/ButtonSetWithOverflow',
          'c/ComboButton',
          'c/ExampleComponent',
          'c/TearsheetShell',
        ],
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
        n: 'Components',
        s: [
          's/Card',
          's/Decorator',
          's/DataTablePagination',
          's/DelimitedList',
          's/ExternalLink',
          's/ICA',
          's/Icon',
          's/IconButton',
          's/Nav',
          's/Pill',
          's/ProfileImage',
          's/ScrollGradient',
          's/StackedNotification',
          's/StatusIcon',
          's/StringFormatter',
          's/TruncatedList',
          's/TimeIndicator',
          's/TrendingCard',
          's/TypeLayout',
        ],
      },
      {
        n: 'Patterns',
        s: [
          's/ComboButton',
          's/DataDecorator',
          's/ErrorPage',
          's/FilterPanel',
          's/Header',
          's/IconButtonBar',
          's/NonEntitledSection',
          's/Panel',
          's/PanelV2',
          's/SearchBar',
          's/Shell',
          's/StatusIndicator',
          's/SummaryCard',
          's/TagWall',
          's/TagWallFilter',
          's/Tearsheet',
          's/TearsheetSmall',
          's/Toolbar',
          's/Wizard',
        ],
      },
      {
        n: 'Layouts',
        s: [],
      },
    ],
  },
  {
    n: 'CD&AI legacy',
    s: [
      'a/ContextHeader',
      'a/IdeAPIKeyGeneration',
      'a/IdeButton',
      'a/IdeCard',
      'a/IdeCreate',
      'a/IdeDataTable',
      'a/IdeEmptyState',
      'a/IdeFilter',
      'a/IdeHome',
      'a/IdeHTTPErrors',
      'a/IdeImporting',
      'a/IdeNavigation',
      'a/IdeRemove',
      'a/IdeSaving',
      'a/IdeSideNavMenu',
      'a/IdeSlideOverPanel',
      'a/IdeTableToolbarSearch',
    ],
  },
  {
    n: 'Getting Started',
    s: [],
  },
];

// This function takes an s array and returns an array of the fully
// materialized paths in the storybook structure in order
const getSectionOrder = (sArray) =>
  sArray
    .map((entry) =>
      typeof entry === 'string'
        ? // if the entry is a string, return it (without the prefix)
          entry.match(/.*?\/(.*)/)[1]
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
          next === componentAndPrefix
          ? [componentName]
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
