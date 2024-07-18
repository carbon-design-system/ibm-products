import React, { useState } from 'react';
import cx from 'classnames';
import { AddAlt, TextNewLine } from '@carbon/react/icons';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import PropTypes from 'prop-types';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { useTranslations } from '../utils/useTranslations';

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
  tabIndex,
}) => {
  const [isAddSubgroup, setIsAddSubgroup] = useState(false);
  const [addConditionText, addConditionRowText, addSubgroupText] =
    useTranslations([
      'addConditionText',
      'addConditionRowText',
      'addSubgroupText',
    ]);
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
  const previewHandlersForSubgroup = () => ({
    onMouseEnter: showConditionSubGroupPreviewHandler,
    onMouseLeave: hideConditionSubGroupPreviewHandler,
    onFocus: showConditionSubGroupPreviewHandler,
    onBlur: hideConditionSubGroupPreviewHandler,
  });

  const getAriaLabel = () => {
    return buttonLabel
      ? buttonLabel
      : !enableSubGroup
      ? addConditionRowText
      : undefined;
  };

  const wrapperProps = enableSubGroup
    ? {
        role: 'gridcell',
      }
    : {};
  return (
    <div
      className={`${className} ${blockClass}__add-button-wrapper`}
      role={!enableSubGroup ? 'gridcell' : 'none'}
      aria-label={getAriaLabel()}
      onMouseEnter={showAddSubGroup}
      onMouseLeave={hideAddSubGroup}
      onFocus={showAddSubGroup}
      onBlur={hideAddSubGroup}
    >
      <ConditionBuilderButton
        renderIcon={AddAlt}
        onClick={onClickHandler}
        {...previewHandlers()}
        wrapperProps={wrapperProps}
        className={`${blockClass}__add-button`}
        hideLabel
        data-name="addButton"
        label={buttonLabel ?? addConditionText}
        tabIndex={tabIndex}
      />
      {enableSubGroup && (
        <ConditionBuilderButton
          renderIcon={TextNewLine}
          onClick={addConditionSubGroupHandler}
          className={cx(
            `${blockClass}__add-condition-sub-group ${blockClass}__gap-left`
          )}
          hideLabel
          label={addSubgroupText}
          wrapperProps={wrapperProps}
          wrapperClassName={cx(
            `${blockClass}__add-condition-sub-group-wrapper`,
            {
              [`${blockClass}__add-condition-sub-group-wrapper--show`]:
                isAddSubgroup,
            }
          )}
          {...previewHandlersForSubgroup()}
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
  /**
   * Tab index
   */
  tabIndex: PropTypes.number,
};
