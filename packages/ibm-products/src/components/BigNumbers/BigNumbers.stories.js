/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { BigNumbers, BigNumbersSize } from '.'; // BigNumbersSkeleton

import mdx from './BigNumbers.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(BigNumbers.displayName),
  component: BigNumbers,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    size: {
      options: Object.values(BigNumbersSize),
      control: { type: 'radio' },
    },
    percentage: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    forceShowTotal: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    trending: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    truncate: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    information: {
      control: { type: null },
    },
    locale: {
      options: [
        'bg',
        'cs',
        'da-DK',
        'de-CH',
        'de',
        'en-AU',
        'en-GB',
        'en-US',
        'en-ZA',
        'es-ES',
        'es',
        'et',
        'fi',
        'fr-CA',
        'fr-CH',
        'fr',
        'hu',
        'it',
        'ja',
        'lv',
        'nl-BE',
        'nl-NL',
        'no',
        'pl',
        'pt-BR',
        'pt-PT',
        'ru-UA',
        'ru',
        'sk',
        'sl',
        'th',
        'tr',
        'uk-UA',
        'vi',
      ],
      control: { type: 'select' },
    },
    iconButton: {
      control: { type: null },
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  label: 'Label',
  value: 10000,
  total: 100000,
  percentage: false,
  size: BigNumbersSize.Default,
  forceShowTotal: false,
  trending: false,
  truncate: true,
  locale: 'en-US',
  information: false,
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <BigNumbers
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const bigNumbers = prepareStory(Template, {
  args: {
    ...defaultProps,
  },
});
