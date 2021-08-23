/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { paramCase } from 'param-case';

import { sectionTitle } from '../config';

const getCategory = (title) => `${sectionTitle}/${title}`;

const components = (title) => getCategory(`Components/${title}`);
const deprecated = (title) => getCategory(`Deprecated/${title}`);
const layoutModules = (title) => getCategory(`Layout modules/${title}`);
const pageLayouts = (title) => getCategory(`Page layouts (canary)/${title}`);
const patterns = (title) => getCategory(`Patterns/${title}`);

function getDocsId(id) {
  return `${paramCase(sectionTitle)}-${id}`;
}

let getDocsParameters, info;
getDocsParameters = info = () => ({});

const disableCentered = () => ({
  layout: 'fullscreen',
});

const disableCenteredStories = (stories) =>
  stories.addParameters(disableCentered());

export {
  components,
  deprecated,
  disableCentered,
  disableCenteredStories,
  getDocsId,
  getDocsParameters,
  info,
  layoutModules,
  pageLayouts,
  patterns,
};
