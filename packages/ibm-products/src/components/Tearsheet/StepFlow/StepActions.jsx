import React from 'react';
import { pkg } from '../../../settings';
import { useStepContext } from './stepContext';

const bc = `${pkg.prefix}--tearsheet`;
export const StepActions = ({ buttonRenderer }) => {
  const data = useStepContext();
  console.log(data);
  return <div className={`${bc}__button-container ${bc}__button-container__v2`}>{buttonRenderer(data)}</div>;
}