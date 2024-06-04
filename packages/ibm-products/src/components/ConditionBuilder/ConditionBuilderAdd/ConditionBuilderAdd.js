import React, { useState } from 'react';
import { AddAlt, TextNewLine } from '@carbon/react/icons';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import PropTypes from 'prop-types';
import {
  blockClass,
  translateWithId,
} from '../ConditionBuilderContext/DataConfigs';

const ConditionBuilderAdd = ({
  className,
  onClick,
  addConditionSubGroupHandler,
  showConditionSubGroupPreviewHandler,
  hideConditionSubGroupPreviewHandler,
  showConditionPreviewHandler,
  hideConditionPreviewHandler,
  enableSubGroup,
  buttonLabel,
}) => {
  const [isAddSubgroup, setIsAddSubgroup] = useState(false);
  const showAddSubGroup = () => {
    setIsAddSubgroup(true);
  };
  const hideAddSubGroup = () => {
    setIsAddSubgroup(false);
  };
  const onClickHandler = () => {
    hideConditionPreviewHandler?.();
    onClick();
  };
  const previewHandlers = () => {
    return enableSubGroup
      ? {
          onMouseEnter: showConditionPreviewHandler,
          onMouseLeave: hideConditionPreviewHandler,
          onFocus: showConditionPreviewHandler,
          onBlur: hideConditionPreviewHandler,
        }
      : {};
  };
  return (
    <div
      className={`${className} ${blockClass}__add-button-wrapper`}
      role={!enableSubGroup ? 'gridcell' : 'none'}
      aria-label={
        !enableSubGroup ? translateWithId('add_condition_row') : undefined
      }
      onMouseEnter={showAddSubGroup}
      onMouseLeave={hideAddSubGroup}
      onFocus={showAddSubGroup}
      onBlur={hideAddSubGroup}
    >
      <ConditionBuilderButton
        renderIcon={AddAlt}
        onClick={onClickHandler}
        {...previewHandlers()}
        className={`${blockClass}__add-button`}
        hideLabel
        data-name="addButton"
        label={buttonLabel ?? translateWithId('add-condition')}
        wrapperProps={
          enableSubGroup
            ? {
                role: 'gridcell',
                'aria-label': translateWithId('add-condition'),
              }
            : {}
        }
      />
      {isAddSubgroup && enableSubGroup && (
        <ConditionBuilderButton
          renderIcon={TextNewLine}
          onClick={addConditionSubGroupHandler}
          className={`${blockClass}__add-condition-group ${blockClass}__gap-left`}
          hideLabel
          label={translateWithId('add-condition')}
          wrapperProps={
            enableSubGroup
              ? {
                  role: 'gridcell',
                  'aria-label': translateWithId('add-condition'),
                }
              : {}
          }
          onMouseEnter={showConditionSubGroupPreviewHandler}
          onMouseLeave={hideConditionSubGroupPreviewHandler}
          onFocus={showConditionSubGroupPreviewHandler}
          onBlur={hideConditionSubGroupPreviewHandler}
        />
      )}
    </div>
  );
};

export default ConditionBuilderAdd;

ConditionBuilderAdd.propTypes = {
  /**
   * handler for hiding sub group preview
   */
  addConditionSubGroupHandler: PropTypes.func,
  /**
   * handler for hiding sub group preview
   */ /**
   * tooltip label for plus button
   */
  buttonLabel: PropTypes.string,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * boolean to enable sub groups for the tree variant
   */
  enableSubGroup: PropTypes.bool,
  /**
   * handler for hiding sub group preview
   */
  hideConditionPreviewHandler: PropTypes.func,
  hideConditionSubGroupPreviewHandler: PropTypes.func,
  /**
   * handler for hiding sub group preview
   */ /**
   * callback triggered on click of add button
   */
  onClick: PropTypes.func,
  showConditionPreviewHandler: PropTypes.func,
  showConditionSubGroupPreviewHandler: PropTypes.func,
  /**
   * handler for hiding sub group preview
   */
};
