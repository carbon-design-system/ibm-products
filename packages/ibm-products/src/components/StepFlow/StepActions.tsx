import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { useStepContext } from './stepContext';
import cx from 'classnames';
import { StepContextType } from '../Tearsheet/TearsheetShell_v2';

const bc = `${pkg.prefix}--step-actions`;

interface StepActionsProps {
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
