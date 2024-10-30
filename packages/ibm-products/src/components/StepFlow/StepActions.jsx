import React from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { useStepContext } from './stepContext';
import cx from 'classnames';

const bc = `${pkg.prefix}--tearsheet`;
export const StepActions = ({ buttonRenderer, className }) => {
  const data = useStepContext();
  return (
    <div
      className={cx(
        `${bc}__button-container`,
        `${bc}__button-container__v2`,
        className
      )}
    >
      {buttonRenderer(data)}
    </div>
  );
};

StepActions.propTypes = {
  buttonRenderer: PropTypes.func,
  className: PropTypes.string,
};
