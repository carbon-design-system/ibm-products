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
  const onCloseHandler = () => {
    setIsOpen(false);
  };
  const onKeyHandler = (e) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  };
  const onBlurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onCloseHandler();
    }
  };
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Popover
      isTabTip
      align="bottom-right"
      open={isOpen}
      onRequestClose={onCloseHandler}
      className={`${blockClass}__row-size-options-container`}
      onKeyDown={onKeyHandler}
      onBlur={onBlurHandler}
    >
      <IconButton
        align={align}
        kind="ghost"
        onClick={onClickHandler}
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
