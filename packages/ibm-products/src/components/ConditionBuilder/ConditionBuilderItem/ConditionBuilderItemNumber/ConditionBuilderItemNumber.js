/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
  const [invalidNumberWarnText] = useTranslations(['invalidNumberWarnText']);
  const onChangeHandler = (e, { value }) => {
    if (value !== '' && !isNaN(value) && checkIfValid(value)) {
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
    return conditionState.value?.split(' ')?.[0] ?? '';
  };
  return (
    <div className={`${blockClass}__item-number`}>
      <NumberInput
        label={conditionState.property}
        hideLabel
        id={conditionState.property?.replace(/\s/g, '')}
        invalidText={invalidNumberWarnText}
        allowEmpty
        onChange={onChangeHandler}
        {...config}
        defaultValue={getDefaultValue()}
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
