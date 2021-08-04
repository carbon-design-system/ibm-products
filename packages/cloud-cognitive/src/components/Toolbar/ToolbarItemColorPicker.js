import React, { useState } from 'react';
import {
  OverflowMenu,
  OverflowMenuItem,
  Button,
} from 'carbon-components-react';
import { Checkmark16 } from '@carbon/icons-react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { prepareProps } from '../../global/js/utils/props-helper';

// The block part of our conventional BEM class names (blockClass__E--M).
const componentName = 'ToolbarItemColorPicker';
const blockClass = `${pkg.prefix}--toolbar-item`;

export let ToolbarItemColorPicker = React.forwardRef(
  ({ className, ...rest }, ref) => {
    const [selectedColor, setSelectedColor] = useState('black');
    return (
      <OverflowMenu
        size="sm"
        renderIcon={() => (
          <div
            style={{
              borderBottom: `2px solid ${selectedColor}`,
              lineHeight: '0.9rem',
              width: '10px',
            }}>
            A
          </div>
        )}
        selectorPrimaryFocus={`.color-picker-selection`}>
        {[
          '#000000',
          '#6F6F6F',
          '#005FFF',
          '#0072C9',
          '#00832D',
          '#007F7A',
          '#972EFF',
          '#E40072',
          '#EE0017',
        ].map((color) => (
          <OverflowMenuItem
            style={{ backgroundColor: `${color}` }}
            itemText={color === selectedColor ? <Checkmark16 /> : ''}
            key={color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </OverflowMenu>
    );
  }
);

ToolbarItemColorPicker = pkg.checkComponentEnabled(
  ToolbarItemColorPicker,
  componentName
);

// Props the user cannot change
const reservedProps = [
  'hasIconOnly',
  'kind',
  'size',
  'tooltipPosition',
  'tooltipAlignment',
  'type',
];
// Base props on Carbon Button
const propTypes = prepareProps(Button.propTypes, reservedProps);
const defaultProps = prepareProps(Button.defaultProps, reservedProps);

ToolbarItemColorPicker.displayName = componentName;

ToolbarItemColorPicker.propTypes = {
  /**
   * The ...propTypes are copies of those from Button minus the props reserved for use by this component
   */
  ...propTypes,
  /* ***************************************
  /
  /  The declarations below allow storybook & DocGen to produce documentation.
  /  Some or all of them may be inherited from the underlying Carbon component.
  /
  / ****************************************/
  /**
   * Specify an optional className to be added to your Button
   *
   * (inherited from Carbon Button)
   */
  className: PropTypes.string,
  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   *
   * (inherited from Carbon Button)
   */
  iconDescription: PropTypes.string,
  /**
   * Optional click handler
   *
   * (inherited from Carbon Button)
   */
  onClick: PropTypes.func,
  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   *
   * (inherited from Carbon Button)
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

ToolbarItemColorPicker.defaultProps = { ...defaultProps };
