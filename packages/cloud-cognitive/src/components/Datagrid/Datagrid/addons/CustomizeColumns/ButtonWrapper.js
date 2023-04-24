/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
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
  tooltipPosition = 'bottom',
  ...rest
}) => {
  return (
    <Button
      {...rest}
      renderIcon={Column16}
      iconDescription={iconTooltipLabel}
      tooltipPosition={tooltipPosition}
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
  tooltipPosition: Button.propTypes.tooltipPosition,
};

export default ButtonWrapper;
