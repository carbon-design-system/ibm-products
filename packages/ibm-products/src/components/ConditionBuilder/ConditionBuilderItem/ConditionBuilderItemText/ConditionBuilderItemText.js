/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { TextArea, TextInput } from '@carbon/react';

import PropTypes from 'prop-types';
import { blockClass } from '../../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderItemText = ({
  conditionState,
  onChange,
  config,
  type,
}) => {
  const inputProps = {
    labelText: conditionState.property,
    hideLabel: true,
    value: conditionState.value ?? '',
    id: conditionState.property?.replace(/\s/g, ''),
    onChange: (evt) => {
      onChange(evt.target.value);
    },
    ...config,
  };
  return (
    <div className={`${blockClass}__item-text`}>
      {type == 'textarea' ? (
        <TextArea {...inputProps} />
      ) : (
        <TextInput {...inputProps} />
      )}
    </div>
  );
};

ConditionBuilderItemText.propTypes = {
  /**
   * current condition object
   */
  conditionState: PropTypes.object,

  /**
   * config of the current property
   */
  config: PropTypes.object,
  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,
  /**
   * current input type
   */
  type: PropTypes.string,
};
