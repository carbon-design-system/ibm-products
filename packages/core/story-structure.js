/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This is the structure of the storybook navigation
const structure = [
  {
    name: 'Cloud & Cognitive',
    structure: [
      {
        name: 'Components',
        structure: [
          { name: 'Cards', structure: ['ExpressiveCard', 'ProductiveCard'] },
          { name: 'Progressive loading bar', structure: ['LoadingBar'] },
          { name: 'Side panel', structure: ['SidePanel'] },
          { name: 'Tag set', structure: ['TagSet'] },
          { name: 'Tearsheet', structure: ['Tearsheet', 'TearsheetNarrow'] },
          { name: 'Modified tabs', structure: ['ModifiedTabs'] },
          { name: 'Page header', structure: ['PageHeader'] },
        ],
      },
      {
        name: 'Patterns',
        structure: [
          { name: 'About modal', structure: ['AboutModal'] },
          { name: 'Generating an API key', structure: ['APIKeyModal'] },
          {
            name: 'Empty state',
            structure: [
              'EmptyState',
              'ErrorEmptyState',
              'NoDataEmptyState',
              'NoTagsEmptyState',
              'NotFoundEmptyState',
              'NotificationsEmptyState',
              'UnauthorizedEmptyState',
            ],
          },
          { name: 'Export', structure: ['ExportModal'] },
          {
            name: 'Create flows',
            structure: [
              'CreateModal',
              'CreateTearsheet',
              'CreateTearsheetNarrow',
              'CreateSidePanel',
              'CreateFullPage',
            ],
          },
          {
            name: 'HTTP errors',
            structure: ['HTTPError403', 'HTTPError404', 'HTTPErrorOther'],
          },
          { name: 'Import and upload', structure: ['ImportModal'] },
          { name: 'Notifications', structure: ['NotificationsPanel'] },
          { name: 'Remove', structure: ['RemoveModal'] },
          { name: 'Saving', structure: ['Saving'] },
          { name: 'Status icons', structure: ['StatusIcon'] },
          { name: 'User profile images', structure: ['UserProfileImage'] },
          { name: 'Web terminal', structure: ['WebTerminal'] },
        ],
      },
      {
        name: 'Internal',
        structure: [
          'ActionBar',
          'ActionSet',
          'BreadcrumbWithOverflow',
          'ButtonMenu',
          'ButtonSetWithOverflow',
          'ComboButton',
          'ExampleComponent',
          'TearsheetShell',
        ],
      },
    ],
  },
  {
    name: 'Carbon',
    structure: [
      {
        name: 'Components',
        structure: [{ name: 'Cards', structure: [] }],
      },
    ],
  },
  {
    name: 'Security',
    structure: [
      {
        name: 'Components',
        structure: [
          { name: 'Card', structure: [] },
          { name: 'Decorator', structure: [] },
        ],
      },
      {
        name: 'Patterns',
        structure: [],
      },
    ],
  },
  {
    name: 'CD&AI legacy',
    structure: [],
  },
];

// This function takes a structure array and returns an array of the fully
// materialized paths in the structure in order
const getStructureSectionOrder = (structure) =>
  structure
    .map((entry) =>
      typeof entry === 'string'
        ? // if the entry is a string, return it
          entry
        : // if the entry is another structure, return its name, but first get
          // the fully materialized paths it contains and add the entry name
          // to the front of each
          [
            getStructureSectionOrder(entry.structure).map(
              (section) => `${entry.name}/${section}`
            ),
            entry.name,
          ]
    )
    .flat(Infinity);

// An array of the names of storybook sections in the desired order.
const sectionOrder = getStructureSectionOrder(structure).concat(['']);

/**
 * Return the sequence number of a story kind in the storybook master structure.
 * This can be used to sort stories into the required hierarchy.
 * @param {string} kind a story kind
 * @returns the sequence number for the story kind in the master structure.
 */
export const getSectionSequence = (kind) =>
  sectionOrder.findIndex((item) => kind.startsWith(item));

const prepend = (elt, arr) => arr && [elt].concat(arr);

// This function takes a structure array and component name and returns the
// materialized path of the component name in the structure as an array of
// the nested section names, or null if the component name is not found
const getPath = (structure, componentName) =>
  structure.reduce(
    (found, next) =>
      // if a previous element has already matched, pass it forward
      found ||
      (typeof next === 'string'
        ? // if this element is a string, and it matches the component name
          // we're looking for, return it as an array, else return null
          next === componentName
          ? [componentName]
          : null
        : // if this element is another structure, find the materialized path
          // into it and prepend its name if found and null otherwise
          prepend(next.name, getPath(next.structure, componentName))),
    null
  );

/**
 * Return the storybook path for a component.
 * @param {string} componentName The name of the component.
 * @returns The path for the component storybook entry, or null if the
 * component is not listed in the master storybook structure.
 */
export const getPathForComponentName = (componentName) =>
  getPath(structure, componentName)?.join('/');
