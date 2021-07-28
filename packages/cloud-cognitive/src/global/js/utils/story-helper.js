//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

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
