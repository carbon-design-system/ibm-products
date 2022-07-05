/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignHorizontalCenter,
  ColorPalette,
  CopyFile,
  Draggable,
  Move,
  Minimize,
  OpenPanelLeft,
  OpenPanelRight,
  Pin,
  Printer,
  Save,
  Share,
  Undo,
  Upload,
  Redo,
  Rotate,
  RulerAlt,
  SettingsAdjust,
  Table,
  TextAlignCenter,
  TextCreation,
  ZoomIn,
  ZoomOut,
} from '@carbon/icons-react';

import { Dropdown, OverflowMenu, OverflowMenuItem } from '@carbon/react';

import React, { useState } from 'react';

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

function _Toolbar(args) {
  const dropdownItems = ['11', '12', '14', '16', '18'];

  const [selectedDropdownItem, setSelectedDropdownItem] = useState(
    dropdownItems[(dropdownItems.length / 2) | 0]
  );

  return (
    <Toolbar {...args}>
      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Save"
          renderIcon={(props) => <Save size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Share"
          renderIcon={(props) => <Share size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Upload"
          renderIcon={(props) => <Upload size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Print"
          renderIcon={(props) => <Printer size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Undo"
          renderIcon={(props) => <Undo size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Redo"
          renderIcon={(props) => <Redo size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Zoom in"
          renderIcon={(props) => <ZoomIn size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Zoom out"
          renderIcon={(props) => <ZoomOut size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Minimize"
          renderIcon={(props) => <Minimize size={16} {...props} />}
        />

        <ToolbarButton
          iconDescription="Align horizontal center"
          renderIcon={(props) => <AlignHorizontalCenter size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Ruler"
          renderIcon={(props) => <RulerAlt size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Pin"
          renderIcon={(props) => <Pin size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Copy file"
          renderIcon={(props) => <CopyFile size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <Dropdown
          id="dropdown"
          initialSelectedItem={selectedDropdownItem}
          items={dropdownItems}
          label={selectedDropdownItem}
          onChange={({ selectedItem }) => setSelectedDropdownItem(selectedItem)}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Text align center"
          renderIcon={(props) => <TextAlignCenter size={16} {...props} />}
          caret
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <OverflowMenu ariaLabel="List" flipped>
          <OverflowMenuItem itemText="Color palette" />
          <OverflowMenuItem itemText="Text creation" />
          <OverflowMenuItem itemText="Bulleted list" />
          <OverflowMenuItem itemText="Delete" hasDivider isDelete />
        </OverflowMenu>
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Table"
          renderIcon={(props) => <Table size={16} {...props} />}
        />

        <ToolbarButton
          iconDescription="Settings adjust"
          renderIcon={(props) => <SettingsAdjust size={16} {...props} />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
}

_Toolbar.argTypes = {
  vertical: {
    control: false,
  },
};

function vertical(args) {
  return (
    <Toolbar {...args}>
      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Drag"
          renderIcon={(props) => <Draggable size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Ruler"
          renderIcon={(props) => <RulerAlt size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Pin"
          renderIcon={(props) => <Pin size={16} {...props} />}
        />

        <ToolbarButton
          iconDescription="Color palette"
          renderIcon={(props) => <ColorPalette size={16} {...props} />}
        />

        <ToolbarButton
          iconDescription="Text creation"
          renderIcon={(props) => <TextCreation size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Open panel left"
          renderIcon={(props) => <OpenPanelLeft size={16} {...props} />}
        />

        <ToolbarButton
          iconDescription="Open panel right"
          renderIcon={(props) => <OpenPanelRight size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Move"
          renderIcon={(props) => <Move size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Rotate"
          renderIcon={(props) => <Rotate size={16} {...props} />}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Zoom in"
          renderIcon={(props) => <ZoomIn size={16} {...props} />}
        />
        <ToolbarButton
          iconDescription="Zoom out"
          renderIcon={(props) => <ZoomOut size={16} {...props} />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
}

vertical.args = {
  vertical: true,
};

export { _Toolbar, vertical };
