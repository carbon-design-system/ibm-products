/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Settings } from '@carbon/react/icons';
import {
  IconButton,
  Toggletip,
  ToggletipContent,
  ToggletipButton,
} from '@carbon/react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const RowSizeDropdown = ({
  align = 'bottom',
  legendText = 'Row height',
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {!isOpen && (
        <IconButton
          kind="ghost"
          align={align}
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          label={legendText}
          className={cx(`${blockClass}__row-size-button`)}
        >
          <Settings size={16} />
        </IconButton>
      )}
      {isOpen && (
        <Toggletip
          defaultOpen={true}
          className={`${blockClass}__row-size-toggle-tip`}
        >
          <ToggletipButton
            className={cx(
              `${blockClass}__row-size-toggle-tip-button`,
              `${blockClass}__row-size-button--open`
            )}
            label={legendText}
          >
            <Settings size={16} />
          </ToggletipButton>
          <ToggletipContent
            className={`${blockClass}__row-size-toggle-tip-content`}
          >
            <RowSizeRadioGroup
              {...props}
              legendText={legendText}
              hideRadioGroup={() => {
                setIsOpen(false);
              }}
            />
          </ToggletipContent>
        </Toggletip>
      )}
    </>
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
