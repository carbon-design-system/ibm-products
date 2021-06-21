import React, { useState } from 'react';
import {
  OverflowMenu,
  OverflowMenuItem,
  Button,
} from 'carbon-components-react';
import { Checkmark16 } from '@carbon/icons-react';
import { pkg } from '../../settings';

const componentName = 'ToolbarItem';

export let ToolbarItem = React.forwardRef(({ ...rest }) => {
  return <Button />;
});
// const ToolbarItemColorPicker = () => {
//   const [selectedColor, setSelectedColor] = useState('black');
//   return (
//     <>
//       <OverflowMenu
//         size="sm"
//         renderIcon={() => (
//           <div
//             style={{
//               borderBottom: `2px solid ${selectedColor}`,
//               lineHeight: '0.9rem',
//               width: '10px',
//             }}>
//             A
//           </div>
//         )}
//         selectorPrimaryFocus={`.color-picker-selection`}>
//         {[
//           '#000000',
//           '#6F6F6F',
//           '#005FFF',
//           '#0072C9',
//           '#00832D',
//           '#007F7A',
//           '#972EFF',
//           '#E40072',
//           '#EE0017',
//         ].map((color) => (
//           <OverflowMenuItem
//             style={{ backgroundColor: `${color}` }}
//             itemText={color === selectedColor ? <Checkmark16 /> : ''}
//             key={color}
//             onClick={() => setSelectedColor(color)}
//           />
//         ))}
//       </OverflowMenu>
//     </>
//   );
// };
// const ToolbarItemPaste = () => {
//   return <h1>Paste</h1>;
// };

ToolbarItem = pkg.checkComponentEnabled(ToolbarItem, componentName);

ToolbarItem.displayName = componentName;
