//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { sanitize } from '@storybook/csf';
import pkg from '../package-settings';
import { getPathForComponent } from '../../../../../core/story-structure';

/**
 * A helper function to return the structured story title for a component.
 * @param {string} componentName The name of the component.
 * @returns The structured story title.
 */
export const getStoryTitle = (componentName) => {
  const title =
    // if the component isn't in the master structure, put it in a lost+found section
    getPathForComponent('c', componentName) ||
    `Carbon for IBM Products/Lost + found/${componentName}`;

  // add a canary tag if the component is public but not normally enabled
  return !pkg.isComponentEnabled(componentName, true) &&
    pkg.isComponentPublic(componentName, true)
    ? `${title}#canary`
    : title;
};

/**
 * A helper function to return the slug (structured path name reduced to lower
 * case text and hyphens) which identifies individual story instances.
 * @param {string} componentName The name of the component.
 * @param {string} scenario The scenario name, also as a slug.
 * @returns The story id.
 */
export const getStoryId = (componentName, scenario, subdirectory) => {
  if (subdirectory) {
    return `${sanitize(getStoryTitle(componentName))}-${sanitize(
      subdirectory
    )}--${scenario}`;
  }
  return `${sanitize(getStoryTitle(componentName))}--${scenario}`;
};

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

/**
 * A helper component that returns a codesandbox link to an example codesandbox for the component.
 * The link URL is based on the example directory name and the standard codesandbox URL for package examples.
 */
export const CodesandboxLink = ({ exampleDirectory }) => (
  <a
    href={`https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main_v1/examples/carbon-for-ibm-products/${exampleDirectory}`}
  >
    <img
      alt="Edit on CodeSandbox"
      src="https://codesandbox.io/static/img/play-codesandbox.svg"
    />
  </a>
);
CodesandboxLink.propTypes = {
  /**
   * directory withing examples codesandbox will be found
   */
  exampleDirectory: PropTypes.string,
};

/**
 * A helper function that finds the designated theme on the Storybook canvas.
 * @returns "dark" or "light"
 */
export const getSelectedCarbonTheme = () => {
  const themeId = document
    .querySelector('html')
    .getAttribute('storybook-carbon-theme');
  return themeId === 'g90' || themeId === 'g100' ? 'dark' : 'light';
};
