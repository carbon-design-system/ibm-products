/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';

import { Toolbar, ToolbarItem, ToolbarGroup } from '.';
import mdx from './Toolbar.mdx';

// Importing Necessary Button Icons
import {
  Save16,
  Share16,
  Upload16,
  Printer16,
  Undo16,
  Redo16,
  ZoomIn16,
  ZoomOut16,
  Minimize16,
  AlignHorizontalCenter16,
  RulerAlt16,
  Pin16,
  CopyFile16,
  ColorPalette16,
  TextCreation16,
  TrashCan16,
  Rotate16,
  Cut16,
  Move16,
  Scale16,
  Crop16,
  TextAlignLeft16,
  TextAlignCenter16,
  TextAlignRight16,
  Table16,
  SettingsAdjust16,
} from '@carbon/icons-react';

import styles from './_storybook-styles.scss';

const storyClass = 'toolbar-stories';

const storybookPrefix = getStorybookPrefix(pkg, Toolbar.displayName);

export default {
  title: `${storybookPrefix}/${Toolbar.displayName}`,
  component: Toolbar,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
};

const applicationActionsGroupItems = (
  <>
    <ToolbarItem
      renderIcon={Save16}
      iconDescription="Save"
      onClick={action('Save')}
    />
    <ToolbarItem
      renderIcon={Share16}
      iconDescription="Share"
      onClick={action('Share')}
    />
    <ToolbarItem
      renderIcon={Upload16}
      iconDescription="Upload"
      onClick={action('Upload')}
    />
    <ToolbarItem
      renderIcon={Printer16}
      iconDescription="Print"
      onClick={action('Print')}
    />
  </>
);

const canvasNavigationToolsGroupItems = (
  <>
    <ToolbarItem
      renderIcon={Undo16}
      iconDescription="Undo"
      onClick={action('Undo')}
    />
    <ToolbarItem
      renderIcon={Redo16}
      iconDescription="Redo"
      onClick={action('Redo')}
    />
    <ToolbarItem
      renderIcon={ZoomIn16}
      iconDescription="Zoom In"
      onClick={action('ZoomIn')}
    />
    <ToolbarItem
      renderIcon={ZoomOut16}
      iconDescription="Zoom Out"
      onClick={action('ZoomOut')}
    />
    <ToolbarItem
      renderIcon={Minimize16}
      iconDescription="Minimize"
      onClick={action('Minimize')}
    />
    <ToolbarItem
      renderIcon={AlignHorizontalCenter16}
      iconDescription="Align Horizontal Center"
      onClick={action('AlignHorizontalCenter')}
    />
  </>
);

const objectTypeFormattingGroupItems = (
  <>
    <ToolbarItem
      renderIcon={RulerAlt16}
      iconDescription="Ruler"
      onClick={action('Ruler')}
    />
    <ToolbarItem
      renderIcon={Pin16}
      iconDescription="Pin"
      onClick={action('Pin')}
    />
    <ToolbarItem
      renderIcon={CopyFile16}
      iconDescription="Copy File"
      onClick={action('CopyFile')}
    />
    <ToolbarItem
      renderIcon={ColorPalette16}
      iconDescription="Color Palette"
      onClick={action('ColorPalette')}
    />
    <ToolbarItem
      renderIcon={TextCreation16}
      iconDescription="Text Creation"
      onClick={action('TextCreation')}
    />
    <ToolbarItem
      renderIcon={TrashCan16}
      iconDescription="Trash"
      onClick={action('Trash')}
    />
  </>
);

const transformationToolsGroupItems = (
  <>
    <ToolbarItem
      renderIcon={Rotate16}
      iconDescription="Rotate"
      onClick={action('Rotate')}
    />
    <ToolbarItem
      renderIcon={Cut16}
      iconDescription="Cut"
      onClick={action('Cut')}
    />
    <ToolbarItem
      renderIcon={Move16}
      iconDescription="Move"
      onClick={action('Move')}
    />
    <ToolbarItem
      renderIcon={Scale16}
      iconDescription="Scale"
      onClick={action('Scale')}
    />
    <ToolbarItem
      renderIcon={Crop16}
      iconDescription="Crop"
      onClick={action('Crop')}
    />
  </>
);

const textFormattingGroupItems = (
  <>
    {/* Font Dropdown Goes Here. */}

    {/* Font Size Dropdown Goes Here. */}

    {/* Font Color Menu Goes Here. */}

    {/* Text Alignment Menu Goes Here. */}
  </>
);

const panelsGroupItems = (
  <>
    <ToolbarItem
      renderIcon={Table16}
      iconDescription="Table"
      onClick={action('Table')}
    />
    <ToolbarItem
      renderIcon={SettingsAdjust16}
      iconDescription="Settings Adjust"
      onClick={action('SettingsAdjust')}
    />
  </>
);

const Template = (args) => {
  return (
    <Toolbar>
      <ToolbarGroup kind="application-actions" />
    </Toolbar>
  );
};

export const toolbarComponent = Template.bind({});
toolbarComponent.args = {};

export const boxedSet = Template.bind({});
boxedSet.args = {
  ...toolbarComponent.args,
  borderColor: '#141414',
  boxedBorder: true,
};
