/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { DelimitedList } from '.';

import styles from './_storybook-styles.scss';
import DocsPage from './DelimitedList';

const storyClass = 'delimited-list-stories';

export default {
  title: getStoryTitle(DelimitedList.displayName),
  component: DelimitedList,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <DelimitedList {...args} />
    </div>
  );
};

export const delimited = prepareStory(Template, {
  args: {
    delimiter: ', ',
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
    ],
    truncate: true,
  },
});

export const notDelimited = prepareStory(Template, {
  args: {
    delimiter: ', ',
    items: ['Item 1', 'Item 2', 'Item 3'],
    truncate: true,
  },
});

export const empty = prepareStory(Template, {
  args: {
    items: [],
  },
});
