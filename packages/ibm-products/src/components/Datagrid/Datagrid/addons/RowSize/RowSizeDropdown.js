/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Settings } from '@carbon/react/icons';
import { IconButton, Layer, Popover, PopoverContent } from '@carbon/react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg, carbon } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid__row-size`;

const RowSizeDropdown = ({
  align = 'bottom-right',
  legendText = 'Row settings',
  ...props
}) => {
  const radioGroupRef = useRef();
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

  useEffect(() => {
    if (isOpen) {
      const radioGroupParentElement = radioGroupRef?.current;
      const checkedRadioChild = radioGroupParentElement?.querySelector(
        `.${carbon.prefix}--radio-button:checked`
      );
      checkedRadioChild?.focus();
    }
  }, [isOpen]);

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Popover
      tabIndex={-1}
      isTabTip
      align="bottom-right"
      open={isOpen}
      onRequestClose={onCloseHandler}
      className={`${blockClass}-options-container`}
      onKeyDown={onKeyHandler}
      onBlur={onBlurHandler}
    >
      <IconButton
        align={align}
        kind="ghost"
        onClick={onClickHandler}
        label={legendText}
        className={cx(`${blockClass}-button`, {
          [`${blockClass}__row-settings-trigger--open`]: isOpen,
        })}
      >
        <Settings size={16} />
      </IconButton>
      <PopoverContent>
        <Layer>
          <RowSizeRadioGroup
            ref={radioGroupRef}
            {...props}
            legendText={legendText}
          />
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
