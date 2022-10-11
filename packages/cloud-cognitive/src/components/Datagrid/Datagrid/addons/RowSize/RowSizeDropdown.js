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
        tooltipPosition="left"
        renderIcon={Settings16}
        onClick={() => setIsOpen(!isOpen)}
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
