/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignHorizontalCenter16,
  Minimize16,
  Printer16,
  Redo16,
  Save16,
  Share16,
  Undo16,
  Upload16,
  ZoomIn16,
  ZoomOut16,
} from '@carbon/icons-react';

import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import React from 'react';

import { getStoryTitle } from '../../global/js/utils/story-helper';

import { Toolbar, ToolbarButton, ToolbarGroup } from '../..';
import mdx from './Toolbar.mdx';

export default {
  title: getStoryTitle(Toolbar.displayName),
  component: Toolbar,
  subcomponents: { ToolbarGroup, ToolbarButton },

  parameters: {
    docs: {
      page: mdx,
    },
  },
};

function Template(args) {
  return (
    <Toolbar {...args}>
      <ToolbarGroup>
        <ToolbarButton iconDescription="Save" renderIcon={Save16} />
        <ToolbarButton iconDescription="Share" renderIcon={Share16} />
        <ToolbarButton iconDescription="Upload" renderIcon={Upload16} />
        <ToolbarButton iconDescription="Print" renderIcon={Printer16} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton iconDescription="Undo" renderIcon={Undo16} />
        <ToolbarButton iconDescription="Redo" renderIcon={Redo16} />
        <ToolbarButton iconDescription="Zoom in" renderIcon={ZoomIn16} />
        <ToolbarButton iconDescription="Zoom out" renderIcon={ZoomOut16} />
        <ToolbarButton iconDescription="Minimize" renderIcon={Minimize16} />

        <ToolbarButton
          iconDescription="Align horizontal center"
          renderIcon={AlignHorizontalCenter16}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <OverflowMenu flipped>
          <OverflowMenuItem itemText="Color palette" />
          <OverflowMenuItem itemText="Text creation" />
          <OverflowMenuItem itemText="Bulleted list" />
          <OverflowMenuItem itemText="Delete" hasDivider isDelete />
        </OverflowMenu>
      </ToolbarGroup>
    </Toolbar>
  );
}

export const _Toolbar = Template.bind({});
