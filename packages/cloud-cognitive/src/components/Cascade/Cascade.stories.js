//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { Cascade } from '.';
import mdx from './Cascade.mdx';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { Column } from '@carbon/react';

export default {
  title: getStoryTitle(Cascade.displayName),
  component: Cascade,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const DefaultTemplate = (args) => {
  return (
    <Cascade {...args}>
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
    </Cascade>
  );
};

const GridTemplate = (args) => {
  const getBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(
        <Column lg={4}>
          <div className="grid-box" />
        </Column>
      );
    }
    return boxes;
  };

  return (
    <Cascade {...args}>
      {getBoxes()}
      {getBoxes()}
    </Cascade>
  );
};

export const WithoutGrid = prepareStory(DefaultTemplate, {
  args: {},
});

export const WithGrid = prepareStory(GridTemplate, {
  args: {
    grid: true,
  },
});
