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
  Tearsheet: `${lib}/$rci/Tearsheets/$comp$canaryTag`,
  TearsheetNarrow: `${lib}/$rci/Tearsheets/$comp`,
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
    $canaryTag: '',
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
