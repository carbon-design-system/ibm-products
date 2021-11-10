/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AlignHorizontalCenter16,
  ColorPalette16,
  CopyFile16,
  Draggable16,
  Move16,
  Minimize16,
  OpenPanelLeft16,
  OpenPanelRight16,
  Pin16,
  Printer16,
  Save16,
  Share16,
  Undo16,
  Upload16,
  Redo16,
  Rotate16,
  RulerAlt16,
  SettingsAdjust16,
  Table16,
  TextAlignCenter16,
  TextAlignLeft16,
  TextAlignRight16,
  TextCreation16,
  ZoomIn16,
  ZoomOut16,
} from '@carbon/icons-react';

import {
  Dropdown,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';

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

function middle(array) {
  return array[Math.floor(array.length / 2)];
}

function _Toolbar(args) {
  const buttons = [
    { iconDescription: 'Text align left', renderIcon: TextAlignLeft16 },
    { iconDescription: 'Text align center', renderIcon: TextAlignCenter16 },
    { iconDescription: 'Text align right', renderIcon: TextAlignRight16 },
  ];

  const dropdownItems = ['11', '12', '14', '16', '18'];

  const [selectedButton, setSelectedButton] = useState(middle(buttons));
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(
    middle(dropdownItems)
  );

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
        <ToolbarButton iconDescription="Ruler" renderIcon={RulerAlt16} />
        <ToolbarButton iconDescription="Pin" renderIcon={Pin16} />
        <ToolbarButton iconDescription="Copy file" renderIcon={CopyFile16} />
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
          {...selectedButton}
          renderCaret={() =>
            buttons.map((props, index) => (
              <ToolbarButton
                key={`${ToolbarButton.displayName}--${index}`}
                {...props}
                onClick={() => setSelectedButton(props)}
              />
            ))
          }
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

      <ToolbarGroup>
        <ToolbarButton iconDescription="Table" renderIcon={Table16} />

        <ToolbarButton
          iconDescription="Settings adjust"
          renderIcon={SettingsAdjust16}
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
        <ToolbarButton iconDescription="Drag" renderIcon={Draggable16} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton iconDescription="Ruler" renderIcon={RulerAlt16} />
        <ToolbarButton iconDescription="Pin" renderIcon={Pin16} />

        <ToolbarButton
          iconDescription="Color palette"
          renderIcon={ColorPalette16}
        />

        <ToolbarButton
          iconDescription="Text creation"
          renderIcon={TextCreation16}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton
          iconDescription="Open panel left"
          renderIcon={OpenPanelLeft16}
        />

        <ToolbarButton
          iconDescription="Open panel right"
          renderIcon={OpenPanelRight16}
        />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton iconDescription="Move" renderIcon={Move16} />
        <ToolbarButton iconDescription="Rotate" renderIcon={Rotate16} />
      </ToolbarGroup>

      <ToolbarGroup>
        <ToolbarButton iconDescription="Zoom in" renderIcon={ZoomIn16} />
        <ToolbarButton iconDescription="Zoom out" renderIcon={ZoomOut16} />
      </ToolbarGroup>
    </Toolbar>
  );
}

vertical.args = {
  vertical: true,
};

export { _Toolbar, vertical };
