/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Settings } from '@carbon/react/icons';
import { IconButton, Popover, PopoverContent } from '@carbon/react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const RowSizeDropdown = ({ legendText = 'Row height', ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover
      align="bottom-right"
      caret={false}
      dropShadow={false}
      open={isOpen}
      className={`${blockClass}__row-height-settings-popover`}
    >
      <IconButton
        kind="ghost"
        align="left"
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        label={legendText}
        className={cx(`${blockClass}__row-size-button`, {
          [`${blockClass}__row-size-button--open`]: isOpen,
        })}
      >
        <Settings size={16} />
      </IconButton>
      <PopoverContent>
        <RowSizeRadioGroup
          {...props}
          legendText={legendText}
          hideRadioGroup={() => {
            setIsOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

RowSizeDropdown.propTypes = {
  datagridName: PropTypes.string,
  legendText: PropTypes.string,
  light: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
};

export default RowSizeDropdown;
