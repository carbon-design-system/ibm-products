/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Button } from '@carbon/react';
import { Edit } from '@carbon/react/icons';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { BigNumbers } from '.';
import { BigNumbersSize } from './constants';

import mdx from './BigNumbers.mdx';

import styles from './_storybook-styles.scss';

const numericOptions = {
  '-123': -123,
  '0 ': 0,
  '12 ': 12,
  '345 ': 345,
  '6789 ': 6789,
  '12345.678 ': 12345.678,
  '678901.2456 ': 678901.2456,
  '2345678 ': 2345678,
  '90123456 ': 90123456,
  '789012345 ': 789012345,
  '6789012345 ': 6789012345,
  'null ': null,
  'undefined ': undefined,
};

export default {
  title: getStoryTitle(BigNumbers.displayName),
  component: BigNumbers,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    loading: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'select', labels: Object.keys(numericOptions) },
      options: Object.values(numericOptions).map((_k, i) => i),
      mapping: Object.values(numericOptions),
    },
    total: {
      control: { type: 'select', labels: Object.keys(numericOptions) },
      options: Object.values(numericOptions).map((_k, i) => i),
      mapping: Object.values(numericOptions),
    },
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
  value: 12345.678,
  total: 678901.2456,
  percentage: false,
  size: BigNumbersSize.Default,
  forceShowTotal: false,
  trending: false,
  truncate: true,
  locale: 'en-US',
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

export const withEditButton = prepareStory(Template, {
  args: {
    ...defaultProps,
    tooltipDescription: 'Tooltip description',
    iconButton: (
      <Button
        renderIcon={Edit}
        iconDescription="Icon Description"
        kind="ghost"
        size={'sm'}
        hasIconOnly
        onClick={() => console.log('clicked icon')}
        tooltipPosition="bottom"
      />
    ),
  },
});
