/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useStepContext } from '.';
import { pkg } from '../../settings';
import { StepContextType } from '../Tearsheet/TearsheetShell_v2';

const bc = `${pkg.prefix}--step-actions`;

export interface StepActionsProps {
  buttonRenderer: (stepData: StepContextType) => ReactNode;
  className?: string;
}

export const StepActions = ({
  buttonRenderer,
  className,
}: StepActionsProps) => {
  const data = useStepContext();
  return (
    <div className={cx(`${bc}__button-container`, className)}>
      {buttonRenderer(data)}
    </div>
  );
};

StepActions.displayName = 'StepActions';

StepActions.propTypes = {
  buttonRenderer: PropTypes.func,
  className: PropTypes.string,
};
