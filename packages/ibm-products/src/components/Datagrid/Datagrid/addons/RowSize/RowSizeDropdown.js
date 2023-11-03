/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Settings16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg, carbon } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid__row-size`;

const RowSizeDropdown = ({ legendText = 'Row settings', ...props }) => {
  const buttonRef = useRef(null);
  const radioGroupRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const radioGroupParentElement = radioGroupRef?.current;
      const checkedRadioChild = radioGroupParentElement?.querySelector(
        `.${carbon.prefix}--radio-button:checked`
      );
      checkedRadioChild?.focus();
    }
  }, [isOpen]);

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const onBlurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onCloseHandler();
    }
  };

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
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
          ref={radioGroupRef}
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
