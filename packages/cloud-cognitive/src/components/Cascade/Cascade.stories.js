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
// import mdx from './Cascade.mdx';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: getStoryTitle(Cascade.displayName),
  component: Cascade,
  parameters: {
    styles,
    // docs: {
    //   page: mdx,
    // },
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

export const Default = prepareStory(DefaultTemplate, {
  args: {},
});
