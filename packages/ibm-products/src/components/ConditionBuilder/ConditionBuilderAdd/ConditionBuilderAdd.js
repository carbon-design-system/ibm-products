import React from 'react';
import { AddAlt } from '@carbon/react/icons';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';

function ConditionBuilderAdd({ className, onClick }) {
  return (
    <div className={className} role="gridcell">
      <ConditionBuilderButton
        renderIcon={AddAlt}
        onClick={onClick}
        className={`${blockClass}__add-button`}
        hideLabel
        label={translateWithId('add-condition')}
        role="gridcell"
      />
    </div>
  );
}

export default ConditionBuilderAdd;

ConditionBuilderAdd.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * callback triggered on click of add button
   */
  onClick: PropTypes.func,
};
