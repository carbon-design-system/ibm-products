import React from 'react';
import { Button, Dropdown } from 'carbon-components-react';
// import { ToolbarItemColorPicker, ToolbarItemPaste } from './ToolbarItem';
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
import { pkg } from '../../settings';
import { ToolbarItem } from './ToolbarItem';
import { ToolbarItemColorPicker } from './ToolbarItemColorPicker';
import { action } from '@storybook/addon-actions';

const blockClass = `${pkg.prefix}--toolbar-group`;

const componentName = 'ToolbarGroup';

// Options for Font Dropdown
const fontItems = [
  {
    id: 'option-0',
    text: 'Arial',
  },
  {
    id: 'option-1',
    text: 'Bodoni 72',
  },
  {
    id: 'option-2',
    text: 'IBM Plex Sans',
  },
  {
    id: 'option-3',
    text: 'Rockwell',
  },
  {
    id: 'option-4',
    text: 'Verdana',
  },
];

// Options for Font Size Dropdown
const fontSizeItems = [
  {
    id: 'option-0',
    text: '11',
  },
  {
    id: 'option-1',
    text: '12',
  },
  {
    id: 'option-2',
    text: '14',
  },
  {
    id: 'option-3',
    text: '16',
  },
  {
    id: 'option-4',
    text: '18',
  },
];

// Options for Text Alignment Dropdown
const textAlignmentOptions = [
  {
    id: 'option-0',
    text: 'Left Align Text',
    icon: () => <TextAlignLeft16 />,
  },
  {
    id: 'option-1',
    text: 'Center Align Text',
    icon: () => <TextAlignCenter16 />,
  },
  {
    id: 'option-2',
    text: 'Right Align Text',
    icon: () => <TextAlignRight16 />,
  },
];

const toolbarTypes = {
  applicationActions: (
    <div className={`${blockClass} ${blockClass}--actions`}>
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
    </div>
  ),
  canvasNavigationTools: (
    <div className={`${blockClass} ${blockClass}--navigation-tools`}>
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
    </div>
  ),
  typeFormatting: (
    <div className={`${blockClass} ${blockClass}--type-formatting`}>
      <Button
        renderIcon={RulerAlt16}
        size="small"
        kind="ghost"
        iconDescription="Ruler Button"
        hasIconOnly
        onClick={action('RulerButton')}
      />
      <Button
        renderIcon={Pin16}
        size="small"
        kind="ghost"
        iconDescription="Pin Button"
        hasIconOnly
        onClick={action('PinButton')}
      />
      <Button
        renderIcon={CopyFile16}
        size="small"
        kind="ghost"
        iconDescription="Copy Button"
        hasIconOnly
        onClick={action('CopyButton')}
      />
      <Button
        renderIcon={ColorPalette16}
        size="small"
        kind="ghost"
        iconDescription="Color Palette Button"
        hasIconOnly
        onClick={action('ColorPaletteButton')}
      />
      <Button
        renderIcon={TextCreation16}
        size="small"
        kind="ghost"
        iconDescription="Text Creation Button"
        hasIconOnly
        onClick={action('TextCreationButton')}
      />
      <Button
        renderIcon={TrashCan16}
        size="small"
        kind="ghost"
        iconDescription="Trash Button"
        hasIconOnly
        onClick={action('TrashButton')}
      />
    </div>
  ),
  transformationTools: (
    <div className={`${blockClass} ${blockClass}--transformation-tools`}>
      <Button
        renderIcon={Rotate16}
        size="small"
        kind="ghost"
        iconDescription="Rotate Button"
        hasIconOnly
        onClick={action('RotateButton')}
      />
      <Button
        renderIcon={Cut16}
        size="small"
        kind="ghost"
        iconDescription="Cut Button"
        hasIconOnly
        onClick={action('CutButton')}
      />
      <Button
        renderIcon={Move16}
        size="small"
        kind="ghost"
        iconDescription="Move Button"
        hasIconOnly
        onClick={action('MoveButton')}
      />
      <Button
        renderIcon={Scale16}
        size="small"
        kind="ghost"
        iconDescription="Scale Button"
        hasIconOnly
        onClick={action('ScaleButton')}
      />
      <Button
        renderIcon={Crop16}
        size="small"
        kind="ghost"
        iconDescription="Crop Button"
        hasIconOnly
        onClick={action('CropButton')}
      />
    </div>
  ),
  textFormatting: (
    <div className={`${blockClass} ${blockClass}--text-formatting`}>
      <Dropdown
        id="inline"
        type="inline"
        size="sm"
        items={fontItems}
        itemToString={(item) => (item ? item.text : '')}
        initialSelectedItem={fontItems[2]}
        onChange={action('SelectedFont')}
        label="Select an option..."
      />
      <Dropdown
        id="inline"
        type="inline"
        size="sm"
        items={fontSizeItems}
        itemToString={(item) => (item ? item.text : '')}
        initialSelectedItem={fontSizeItems[1]}
        onChange={action('SelectedFontSize')}
        label="Select an option..."
      />
      <ToolbarItemColorPicker />
      <Dropdown
        id="inline"
        type="inline"
        size="sm"
        className="text-alignment-dropdown"
        items={textAlignmentOptions}
        itemToString={(item) => (item ? <>{item.icon()}</> : '')}
        onChange={action('SelectedTextAlignment')}
        label="Select an option..."
        initialSelectedItem={textAlignmentOptions[0]}
      />
    </div>
  ),
  panelsButtons: (
    <div className={`${blockClass} ${blockClass}--panels`}>
      <Button
        renderIcon={Table16}
        size="small"
        kind="ghost"
        iconDescription="Table Button"
        hasIconOnly
        onClick={action('TableButton')}
      />
      <Button
        renderIcon={SettingsAdjust16}
        size="small"
        kind="ghost"
        iconDescription="Settings Adjust Button"
        hasIconOnly
        onClick={action('SettingsAdjustButton')}
      />
    </div>
  ),
};

export let ToolbarGroup = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      borderColor,
      boxedBorder,
      className,
      children,
      onPrimaryClick,
      onSecondaryClick,
      primaryButtonLabel,
      primaryKind,
      secondaryButtonLabel,
      secondaryKind,
      size,
      style,
      kind,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      toolbarTypes.applicationActions && (
        <div className={blockClass}>
          {toolbarTypes.applicationActions}
          {toolbarTypes.canvasNavigationTools}
          {toolbarTypes.typeFormatting}
          {toolbarTypes.transformationTools}
          {toolbarTypes.textFormatting}
          {toolbarTypes.panelsButtons}
        </div>
      )
    );
  }
);

// const ToolbarGroup = () => {
//   return (
//     <>
//       <div className="toolbar-group toolbar-group--actions">
//         <Button
//           renderIcon={Save16}
//           size="small"
//           kind="ghost"
//           iconDescription="Save Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Share16}
//           size="small"
//           kind="ghost"
//           iconDescription="Share Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Upload16}
//           size="small"
//           kind="ghost"
//           iconDescription="Upload Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Printer16}
//           size="small"
//           kind="ghost"
//           iconDescription="Printer Button"
//           hasIconOnly
//           onClick={null}
//         />
//       </div>
//       <div className="toolbar-group toolbar-group--navigation-tools">
//         <Button
//           renderIcon={Undo16}
//           size="small"
//           kind="ghost"
//           iconDescription="Undo Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Redo16}
//           size="small"
//           kind="ghost"
//           iconDescription="Redo Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={ZoomIn16}
//           size="small"
//           kind="ghost"
//           iconDescription="Zoom In Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={ZoomOut16}
//           size="small"
//           kind="ghost"
//           iconDescription="Zoom Out Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Minimize16}
//           size="small"
//           kind="ghost"
//           iconDescription="Minimize Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={AlignHorizontalCenter16}
//           size="small"
//           kind="ghost"
//           iconDescription="Align Horizontal Center Button"
//           hasIconOnly
//           onClick={null}
//         />
//       </div>
//       <div className="toolbar-group toolbar-group--type-formatting">
//         <Button
//           renderIcon={RulerAlt16}
//           size="small"
//           kind="ghost"
//           iconDescription="Ruler Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Pin16}
//           size="small"
//           kind="ghost"
//           iconDescription="Pin Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={CopyFile16}
//           size="small"
//           kind="ghost"
//           iconDescription="Copy Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={ColorPalette16}
//           size="small"
//           kind="ghost"
//           iconDescription="Color Palette Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={TextCreation16}
//           size="small"
//           kind="ghost"
//           iconDescription="Text Creation Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={TrashCan16}
//           size="small"
//           kind="ghost"
//           iconDescription="Trash Button"
//           hasIconOnly
//           onClick={null}
//         />
//       </div>
//       <div className="toolbar-group toolbar-group--transformation-tools">
//         <Button
//           renderIcon={Rotate16}
//           size="small"
//           kind="ghost"
//           iconDescription="Rotate Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Cut16}
//           size="small"
//           kind="ghost"
//           iconDescription="Cut Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Move16}
//           size="small"
//           kind="ghost"
//           iconDescription="Move Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Scale16}
//           size="small"
//           kind="ghost"
//           iconDescription="Scale Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={Crop16}
//           size="small"
//           kind="ghost"
//           iconDescription="Crop Button"
//           hasIconOnly
//           onClick={null}
//         />
//       </div>
//       <div className="toolbar-group toolbar-group--text-formatting">
//         <Dropdown
//           id="inline"
//           type="inline"
//           size="sm"
//           items={fontItems}
//           itemToString={(item) => (item ? item.text : '')}
//           initialSelectedItem={fontItems[2]}
//           onChange={null}
//           label="Select an option..."
//         />
//         <Dropdown
//           id="inline"
//           type="inline"
//           size="sm"
//           items={fontSizeItems}
//           itemToString={(item) => (item ? item.text : '')}
//           initialSelectedItem={fontSizeItems[1]}
//           onChange={null}
//           label="Select an option..."
//         />
//         <ToolbarItemColorPicker />
//         <Dropdown
//           id="inline"
//           type="inline"
//           size="sm"
//           className="text-alignment-dropdown"
//           items={textAlignmentOptions}
//           itemToString={(item) => (item ? <>{item.icon()}</> : '')}
//           label="Select an option..."
//           initialSelectedItem={textAlignmentOptions[0]}
//         />
//       </div>
//       <div className="toolbar-group toolbar-group--panels">
//         <Button
//           renderIcon={Table16}
//           size="small"
//           kind="ghost"
//           iconDescription="Table Button"
//           hasIconOnly
//           onClick={null}
//         />
//         <Button
//           renderIcon={SettingsAdjust16}
//           size="small"
//           kind="ghost"
//           iconDescription="Settings Adjust Button"
//           hasIconOnly
//           onClick={null}
//         />
//       </div>
//     </>
//   );
// };

// export default ToolbarGroup;

// Return a placeholder if not released and not enabled by feature flag.
ToolbarGroup = pkg.checkComponentEnabled(ToolbarGroup, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
ToolbarGroup.displayName = componentName;
