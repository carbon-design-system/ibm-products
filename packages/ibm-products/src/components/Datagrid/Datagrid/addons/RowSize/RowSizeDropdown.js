/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Settings16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid__row-size`;

const RowSizeDropdown = ({ legendText = 'Row height', ...props }) => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const onBlurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onCloseHandler();
    }
  };

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const onKeyHandler = (e) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  };

  return (
    <div
      tabIndex={-1}
      className={blockClass}
      role="presentation"
      onBlur={onBlurHandler}
      onKeyDown={onKeyHandler}
    >
      <Button
        tabIndex={0}
        hasIconOnly
        ref={buttonRef}
        kind="ghost"
        tooltipPosition="bottom"
        renderIcon={Settings16}
        iconDescription={legendText}
        className={cx(`${blockClass}-button`, {
          [`${blockClass}-button--open`]: isOpen,
        })}
        onClick={onClickHandler}
      />
      {isOpen && (
        <RowSizeRadioGroup
          {...props}
          legendText={legendText}
          buttonRef={buttonRef}
        />
      )}
    </div>
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
