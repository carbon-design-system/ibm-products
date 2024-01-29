/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { Decorator } from '.';
import mdx from './Decorator.mdx';

import styles from './_storybook-styles.scss';
const storyClass = 'decorator-stories';

export default {
  title: getStoryTitle(Decorator.displayName),
  component: Decorator,
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: { type: 'range', min: 0, max: 10 },
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
  return <Decorator {...args} />;
};

const TemplateTruncation = (args) => {
  return (
    <div className={`${storyClass}__viewport-truncation`}>
      <p>Resize the browser window to see results.</p>
      <p>
        When <strong>truncate</strong> is not defined, the {"Decorator's "}
        layout is equivalent to <em>display:inline-block</em>.
        <br />
        <Decorator {...args} />
      </p>
      <p>
        <strong>{'truncate="end"'}</strong> shrinks to fit its container.
        <br />
        <Decorator {...args} truncateValue="end" />
      </p>
      <p>
        <strong>{'truncate="start"'}</strong> shrinks to fit its container.
        <br />
        <Decorator {...args} truncateValue="start" />
      </p>
      <p>
        <strong>{'truncate={{ maxLength: 20, front: 6, back: 6 }}'}</strong> is
        referred to as the {'"midline"'} truncation, and {"it's"} layout is
        equivalent to <em>display:inline-block</em>. <br />
        <Decorator
          {...args}
          truncateValue={{
            maxLength: 20,
            front: 6,
            back: 6,
          }}
        />
      </p>
    </div>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
// TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Decorator-args
export const decorator = prepareStory(Template, {
  args: {
    // score: 2,
    // onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});
export const asLink = prepareStory(Template, {
  args: {
    // score: 5,
    href: 'http://www.ibm.com',
    // onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

export const asSingleButton = prepareStory(Template, {
  args: {
    // score: 2,
    onClick: (event, values) => action('onClick')(values),
    onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

export const withDualButtons = prepareStory(Template, {
  args: {
    // score: 2,
    onClickType: (event, values) => action('onClickLabel')(values),
    onClickValue: (event, values) => action('onClickValue')(values),
    onContextMenu: (event, values) => action('onContextMenu')(values),
  },
});

export const truncatedValue = prepareStory(TemplateTruncation, {
  args: {
    value: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
  },
});
