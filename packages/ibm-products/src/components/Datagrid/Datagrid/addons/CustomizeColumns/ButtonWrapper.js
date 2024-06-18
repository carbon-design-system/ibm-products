/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Column } from '@carbon/react/icons';
import { Button } from '@carbon/react';
import { pkg } from '../../../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const ButtonWrapper = ({
  onClick = () => {},
  setIsTearsheetOpen,
  isTearsheetOpen,
  iconTooltipLabel = 'Customize columns',
  ...rest
}) => {
  return (
    <Button
      {...rest}
      renderIcon={(props) => <Column size={16} {...props} />}
      iconDescription={iconTooltipLabel}
      tooltipPosition="bottom"
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
