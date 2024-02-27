/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
//import { gray } from '@carbon/colors';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ScrollGradient } from '.';
import mdx from './ScrollGradient.mdx';

import styles from './_storybook-styles.scss';

const storyCopy =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet rerum aliquid perferendis, nulla nam ad excepturi, iure earum dolorum ipsa quae cum voluptatibus nemo quis debitis, aperiam repudiandae dolore deleniti.';

const storyChildren = (
  <div style={{ padding: 16 }}>
    <p>{storyCopy}</p>
    <p>{storyCopy}</p>
    <p>{storyCopy}</p>
    <p>{storyCopy}</p>
    <p>{storyCopy}</p>
    <p>{storyCopy}</p>
  </div>
);

export default {
  title: getStoryTitle(ScrollGradient.displayName),
  component: ScrollGradient,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
const style = {
  width: '100%',
  height: '100%',
};
/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const templateStyle = {
  width: 300,
  height: 400,
  resize: 'both',
  overflow: 'auto',
  outline: 'thin solid black',
};

const Template = (args) => {
  return (
    <div style={templateStyle}>
      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />
    </div>
  );
};

const TemplateBothAxis = (args) => {
  return (
    <div style={{ ...templateStyle, height: 250 }}>
      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />
    </div>
  );
};

export const scrollGradientVertical = prepareStory(Template, {
  args: {
    children: storyChildren,
  },
});

export const scrollGradientXAndYAxis = prepareStory(TemplateBothAxis, {
  args: {
    children: <div style={{ width: '1500px' }}>{storyChildren}</div>,
  },
});
