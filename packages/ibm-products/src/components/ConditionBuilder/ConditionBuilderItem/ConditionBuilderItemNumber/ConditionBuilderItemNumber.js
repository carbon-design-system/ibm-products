import React from 'react';

import { NumberInput } from '@carbon/react';

import PropTypes from 'prop-types';
import { blockClass } from '../../ConditionBuilderContext/DataConfigs';
import { useTranslations } from '../../utils/useTranslations';

export const ConditionBuilderItemNumber = ({
  conditionState,
  config,
  onChange,
}) => {
  const [invalidNumberWarnText] = useTranslations([
    'invalid_number_warn__text',
  ]);
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
        invalidText={invalidNumberWarnText}
        allowEmpty
        onChange={onChangeHandler}
        {...config}
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
