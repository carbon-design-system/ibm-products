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

import {
  DescriptionList,
  DescriptionListBody,
  DescriptionListCell,
  DescriptionListRow,
} from '.';

import { DescriptionListSize } from './utils/enums';

import mdx from './DescriptionList.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(DescriptionList.displayName),
  component: DescriptionList,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    children: {
      control: { type: null },
    },
    size: {
      options: Object.values(DescriptionListSize),
      control: { type: 'radio' },
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <DescriptionList
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
    >
      <DescriptionListBody>
        <DescriptionListRow>
          <DescriptionListCell>Term 1</DescriptionListCell>

          <DescriptionListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DescriptionListCell>
        </DescriptionListRow>

        <DescriptionListRow>
          <DescriptionListCell>Term 2</DescriptionListCell>

          <DescriptionListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
          </DescriptionListCell>
        </DescriptionListRow>

        <DescriptionListRow>
          <DescriptionListCell>Term 3</DescriptionListCell>

          <DescriptionListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </DescriptionListCell>
        </DescriptionListRow>
      </DescriptionListBody>
    </DescriptionList>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const descriptionList = prepareStory(Template, {
  args: {
    border: false,
    size: DescriptionListSize.Medium,
  },
});
