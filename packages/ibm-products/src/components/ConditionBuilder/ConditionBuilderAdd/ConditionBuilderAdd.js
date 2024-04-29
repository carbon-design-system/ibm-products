import React from 'react';
import { AddAlt } from '@carbon/react/icons';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';

const ConditionBuilderAdd = ({ className, onClick }) => {
  return (
    <div
      className={`${className} ${blockClass}__add-button-wrapper`}
      role="row"
      aria-label={translateWithId('add_condition_row')}
    >
      <ConditionBuilderButton
        renderIcon={AddAlt}
        onClick={onClick}
        className={`${blockClass}__add-button`}
        hideLabel
        data-name="addButton"
        label={translateWithId('add-condition')}
        wrapperProps={{
          role: 'gridcell',
          'aria-label': translateWithId('add-condition'),
        }}
      />
    </div>
  );
};

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
