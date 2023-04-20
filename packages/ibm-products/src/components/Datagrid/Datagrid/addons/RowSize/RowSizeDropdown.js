/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Settings16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const RowSizeDropdown = ({ legendText = 'Row height', ...props }) => {
  const buttonRef = React.useRef({});

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        hasIconOnly
        ref={buttonRef}
        kind="ghost"
        tooltipPosition="bottom"
        renderIcon={Settings16}
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        iconDescription={legendText}
        className={cx(`${blockClass}__row-size-button`, {
          [`${blockClass}__row-size-button--open`]: isOpen,
        })}
      />
      {isOpen && (
        <RowSizeRadioGroup
          {...props}
          legendText={legendText}
          buttonRef={buttonRef}
          hideRadioGroup={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
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
