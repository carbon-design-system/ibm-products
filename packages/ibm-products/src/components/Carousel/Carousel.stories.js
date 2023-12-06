/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { Carousel } from '.';
import styles from './_storybook-styles.scss';
import DocsPage from './Carousel.docs-page';

export default {
  title: getStoryTitle(Carousel.displayName),
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

const Template = (args) => {
  return <Carousel {...args} />;
};

export const carousel = prepareStory(Template, {
  args: {
    children: (
      <>
        Carousel is a <em>Novice to Pro</em> internal component and is not
        intended for general use.
      </>
    ),
  },
});
