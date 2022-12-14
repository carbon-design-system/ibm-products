// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
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
<<<<<<< HEAD
=======
  const buttonRef = React.useRef({});

>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
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
<<<<<<< HEAD
        align="left"
        onClick={() => setIsOpen(!isOpen)}
        label={legendText}
=======
        tooltipPosition="bottom"
        renderIcon={Settings16}
        onClick={() => setIsOpen(!isOpen)}
        iconDescription={legendText}
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
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
<<<<<<< HEAD
=======
          buttonRef={buttonRef}
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
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
