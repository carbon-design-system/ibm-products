import React from 'react';

import { NumberInput } from '@carbon/react';

import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderItemNumber = ({
  conditionState,
  config,
  onChange,
}) => {
  const onChangeHandler = (e, { value }) => {
    if (checkIfValid(value)) {
      onChange(`${value} ${config.unit ?? ''}`);
    } else {
      onChange('INVALID');
    }
  };
  const checkIfValid = (value) => {
    if (value > config.max || value < config.min) {
      return false;
    }
    return true;
  };
  const getDefaultValue = () => {
    return conditionState.value?.split(' ')?.[0];
  };
  return (
    <div className={`${blockClass}__item-number`}>
      <NumberInput
        label={conditionState.property}
        hideLabel
        defaultValue={getDefaultValue()}
        id={conditionState.property?.replace(/\s/g, '')}
        min={config.min}
        max={config.max}
        step={config.step}
        invalidText={translateWithId('text_invalid_number')}
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
