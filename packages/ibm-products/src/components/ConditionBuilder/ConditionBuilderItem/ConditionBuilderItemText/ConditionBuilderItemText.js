import React from 'react';

import { TextInput } from '@carbon/react';

import PropTypes from 'prop-types';
import { blockClass } from '../../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderItemText = ({ conditionState, onChange }) => {
  return (
    <div className={`${blockClass}__condition-builder-item-text`}>
      <TextInput
        labelText={conditionState.property?.label}
        hideLabel
        value={conditionState.value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

ConditionBuilderItemText.propTypes = {
  /**
   * current condition object
   */
  conditionState: PropTypes.object,

  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,
};
