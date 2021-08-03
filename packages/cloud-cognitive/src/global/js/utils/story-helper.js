//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { sanitize } from '@storybook/csf';
import pkg from '../package-settings';

// A set of title values, one for each component, that can be converted into
// a structure story title or into an individual story id in slug form.
const lib = 'Cloud & Cognitive';
const storybookStructure = {
  AboutModal: `${lib}/$rci/$comp`,
  ActionBar: `${lib}/$rci/$comp`,
  ActionSet: `${lib}/$rci/$comp`,
  APIKeyModal: `${lib}/$rci/$comp`,
  BreadcrumbWithOverflow: `${lib}/$rci/$comp`,
  ButtonMenu: `${lib}/$rci/$comp`,
  ButtonSetWithOverflow: `${lib}/$rci/$comp`,

  // cards
  ExpressiveCard: `${lib}/$rci/Cards/$comp`,
  ProductiveCard: `${lib}/$rci/Cards/$comp`,

  ComboButton: `${lib}/$rci/$comp`,
  CreateFullPage: `${lib}/$rci/$comp`,
  CreateModal: `${lib}/$rci/$comp`,
  CreateSidePanel: `${lib}/$rci/$comp`,
  CreateTearsheet: `${lib}/$rci/$comp`,
  CreateTearsheetNarrow: `${lib}/$rci/$comp`,

  // empty states
  EmptyState: `${lib}/$rci/EmptyStates/$comp`,
  ErrorEmptyState: `${lib}/$rci/EmptyStates/$comp`,
  NoDataEmptyState: `${lib}/$rci/EmptyStates/$comp`,
  NoTagsEmptyState: `${lib}/$rci/EmptyStates/$comp`,
  NotFoundEmptyState: `${lib}/$rci/EmptyStates/$comp`,
  NotificationsEmptyState: `${lib}/$rci/EmptyStates/$comp`,
  UnauthorizedEmptyState: `${lib}/$rci/EmptyStates/$comp`,

  ExampleComponent: `${lib}/$rci/$comp`,
  ExportModal: `${lib}/$rci/$comp`,

  // HTTP errors
  HTTPError403: `${lib}/$rci/HTTPErrors/$comp`,
  HTTPError404: `${lib}/$rci/HTTPErrors/$comp`,
  HTTPErrorOther: `${lib}/$rci/HTTPErrors/$comp`,

  ImportModal: `${lib}/$rci/$comp`,
  LoadingBar: `${lib}/$rci/$comp`,
  ModifiedTabs: `${lib}/$rci/$comp`,
  NotificationsPanel: `${lib}/$rci/$comp`,
  PageHeader: `${lib}/$rci/$comp`,
  RemoveModal: `${lib}/$rci/$comp`,
  Saving: `${lib}/$rci/$comp`,
  SidePanel: `${lib}/$rci/$comp`,
  StatusIcon: `${lib}/$rci/$comp`,
  TagSet: `${lib}/$rci/$comp`,
  Toolbar: `${lib}/$rci/Toolbar`,
  UserProfileImage: `${lib}/$rci/$comp`,
  WebTerminal: `${lib}/$rci/$comp`,

  // tearsheets
  Tearsheet: `${lib}/$rci/Tearsheets/$comp`,
  TearsheetNarrow: `${lib}/$rci/Tearsheets/$comp`,
  TearsheetShell: `${lib}/$rci/$comp`,
};

/**
 * A helper function to return the structured story title for a component.
 * @param {string} componentName The name of the component.
 * @returns The structured story title.
 */
export const getStoryTitle = (componentName) => {
  const replacements = {
    $rci: pkg.isComponentEnabled(componentName, true)
      ? 'Released'
      : pkg.isComponentPublic(componentName, true)
      ? 'Canary'
      : 'Internal',
    $comp: componentName,
  };

  return Object.keys(replacements).reduce(
    (result, token) => result.replaceAll(token, replacements[token]),
    storybookStructure[componentName] || `${lib}/Lost + Found/$comp`
  );
};

/**
 * A helper function to return the slug (structured path name reduced to lower
 * case text and hyphens) which identifies individual story instances.
 * @param {string} componentName The name of the component.
 * @param {string} scenario The scenario name, also as a slug.
 * @returns The story id.
 */
export const getStoryId = (componentName, scenario) =>
  `${sanitize(getStoryTitle(componentName))}--${scenario}`;

/**
 * A helper function to prepare storybook stories for export. This function
 * binds the template, adds the supplied fields, and also inserts a sequence
 * number so that stories can then be sorted into declared order reliably.
 * @param template the story template render function
 * @param options an object containing fields to be added to the bound
 * template, such as `args`, `storyName`, etc.
 * @returns A bound template with the option fields applied.
 */
let sequence = 0;
const bindTarget = {};
export const prepareStory = (template, options) => {
  const result = Object.assign(template.bind(bindTarget), options);
  result.parameters ??= {};
  result.parameters.ccsSettings ??= {};
  result.parameters.ccsSettings.sequence = sequence++;
  return result;
};
