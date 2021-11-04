/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DocsContainer } from '@storybook/addon-docs';
import { paramCase } from 'param-case';

import { Style } from '../../core/.storybook/preview';
import { sectionTitle } from '../config';
import styles from './_docs.scss';

const getCategory = (category, title) => `${sectionTitle}/${category}/${title}`;

const components = (title) => getCategory('Components', title);
const deprecated = (title) => getCategory('Deprecated', title);
const layoutModules = (title) => getCategory('Layout modules', title);
const pageLayouts = (title) => getCategory('Layouts', title);
const patterns = (title) => getCategory('Patterns', title);

function getDocsId(id) {
  return `${paramCase(sectionTitle)}-${id}`;
}

function getDocsParameters() {
  return { viewMode: 'docs' };
}

function disableCentered() {
  return {
    layout: 'fullscreen',
  };
}

const disableCenteredStories = (stories) =>
  stories.addParameters(disableCentered());

const info = () => ({});

const parameters = {
  docs: {
    container: (props) => (
      <Style styles={styles}>
        <DocsContainer {...props} />
      </Style>
    ),
  },
};

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
  parameters,
  patterns,
};
