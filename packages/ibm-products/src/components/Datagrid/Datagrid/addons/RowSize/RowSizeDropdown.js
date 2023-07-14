/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Settings } from '@carbon/react/icons';
import { IconButton, Layer, Popover, PopoverContent } from '@carbon/react';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const RowSizeDropdown = ({
  align = 'bottom-right',
  legendText = 'Row height',
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover
      isTabTip
      align="bottom-right"
      open={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={`${blockClass}__row-size-options-container`}
    >
      <IconButton
        align={align}
        kind="ghost"
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        label={legendText}
        className={`${blockClass}__row-size-button`}
      >
        <Settings size={16} />
      </IconButton>
      <PopoverContent>
        <Layer>
          <RowSizeRadioGroup {...props} legendText={legendText} />
        </Layer>
      </PopoverContent>
    </Popover>
  );
};

RowSizeDropdown.propTypes = {
  align: IconButton.propTypes.align,
  datagridName: PropTypes.string,
  legendText: PropTypes.string,
  light: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
};

export default RowSizeDropdown;
