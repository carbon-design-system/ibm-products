import React from 'react';

import { NumberInput } from '@carbon/react';

import { pkg } from '../../../../settings';
import PropTypes from 'prop-types';

const blockClass = `${pkg.prefix}--condition-builder`;

export const ConditionBuilderItemNumber = ({
  conditionState,
  config,
  onChange,
}) => {
  const onChangeHandler = (e, { value }) => {
    onChange(value + '');
  };
  return (
    <div className={`${blockClass}__item-number`}>
      <NumberInput
        label={conditionState.property}
        hideLabel
        id={conditionState.property?.replace(/\s/g, '')}
        value={
          conditionState.value
            ? conditionState.value.split(' ')[0]
            : conditionState.value
        }
        min={config.min}
        max={config.max}
        step={config.step}
        allowEmpty
        onChange={onChangeHandler}
      />
    </div>
  );
};

ConditionBuilderItemNumber.propTypes = {
  /**
   * current condition object
   */
  conditionState: PropTypes.object,

  /**
   * current config object that this property is part of
   */
  config: PropTypes.object,

  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,
};
