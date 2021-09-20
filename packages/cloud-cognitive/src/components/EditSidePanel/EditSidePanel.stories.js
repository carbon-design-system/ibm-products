/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { EditSidePanel } from '.';
import mdx from './EditSidePanel.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(EditSidePanel.displayName),
  component: EditSidePanel,
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

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <EditSidePanel
      {...args}
      open={open}
      onRequestClose={() => setOpen(false)}
      disableSubmit={false}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const editSidePanel = prepareStory(Template, {
  args: {
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#EditSidePanel-args
    children: 'hello, world',
  },
});
