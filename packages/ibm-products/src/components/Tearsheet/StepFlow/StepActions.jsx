import React from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../../settings';
import { useStepContext } from './stepContext';

const bc = `${pkg.prefix}--tearsheet`;
export const StepActions = ({ buttonRenderer }) => {
  const data = useStepContext();
  return <div className={`${bc}__button-container ${bc}__button-container__v2`}>{buttonRenderer(data)}</div>;
}

StepActions.propTypes = {
  buttonRenderer: PropTypes.func,
}