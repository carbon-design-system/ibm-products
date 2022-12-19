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
import { Column16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const ButtonWrapper = ({
  onClick,
  setIsTearsheetOpen,
  isTearsheetOpen,
  iconTooltipLabel = 'Customize columns',
  ...rest
}) => {
  return (
    <Button
      {...rest}
      renderIcon={Column16}
      iconDescription={iconTooltipLabel}
      tooltipPosition="left"
      kind="ghost"
      hasIconOnly
      test-id={`${blockClass}__customize-columns-trigger`}
      onClick={() => {
        setIsTearsheetOpen(!isTearsheetOpen);
        if (typeof onClick === 'function') {
          onClick();
        }
      }}
    />
  );
};

ButtonWrapper.propTypes = {
  iconTooltipLabel: PropTypes.string,
  isTearsheetOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  setIsTearsheetOpen: PropTypes.func.isRequired,
};

export default ButtonWrapper;
