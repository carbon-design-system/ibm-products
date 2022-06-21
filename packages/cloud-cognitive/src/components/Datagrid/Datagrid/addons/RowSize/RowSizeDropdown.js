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
import { Settings } from '@carbon/icons-react';
import { IconButton } from '@carbon/react';
import cx from 'classnames';
import RowSizeRadioGroup from './RowSizeRadioGroup';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const RowSizeDropdown = ({ buttonLabel = 'Row height', ...props }) => {
  const buttonRef = React.useRef({});

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <IconButton
        ref={buttonRef}
        kind="ghost"
        align="left"
        onClick={() => setIsOpen(!isOpen)}
        label={buttonLabel}
        className={cx(`${blockClass}__row-size-button`, {
          [`${blockClass}__row-size-button--open`]: isOpen,
        })}
      >
        <Settings size={16} />
      </IconButton>
      {isOpen && (
        <RowSizeRadioGroup
          {...props}
          ref={buttonRef}
          hideRadioGroup={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

RowSizeDropdown.propTypes = {
  buttonLabel: PropTypes.string,
  datagridName: PropTypes.string,
  light: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
};

export default RowSizeDropdown;
