import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
import { Tooltip } from '@carbon/react';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { WarningAltFilled } from '@carbon/react/icons';

export const ConditionBuilderButton = ({
  className,
  label,
  hideLabel,
  tooltipAlign,
  renderIcon: Icon,
  onClick,
  showToolTip,
  wrapperProps,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  isInvalid,
  wrapperClassName,
}) => {
  const Button = () => {
    return (
      <button
        // role={'gridcell'}
        tabIndex={-1}
        className={cx([
          className,
          `${blockClass}__button`,
          {
            [`${blockClass}__text-ellipsis`]:
              showToolTip && !hideLabel && !isInvalid,
          },
          { [`${blockClass}__invalid-input`]: isInvalid },
        ])}
        type="button"
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {Icon && <Icon />}
        {!hideLabel && <span>{label}</span>}
        {isInvalid && <WarningAltFilled />}
      </button>
    );
  };

  return hideLabel || showToolTip ? (
    <Tooltip
      label={label}
      align={tooltipAlign}
      className={`${wrapperClassName}`}
      {...wrapperProps}
    >
      {Button()}
    </Tooltip>
  ) : (
    <>{Button()}</>
  );
};

ConditionBuilderButton.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * decides if label and tooltip to be hidden
   */
  hideLabel: PropTypes.bool,
  /**
   * boolean to know the updated value in not valid
   */
  isInvalid: PropTypes.bool,
  /**
   * label of the button
   */
  label: PropTypes.string,
  /**
   * mouse events callbacks
   */
  onBlur: PropTypes.func,
  /**
   * callback triggered on click of add button
   */
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,

  onMouseLeave: PropTypes.func,
  /**
   * Optional prop to allow overriding the icon rendering.
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   */
  /**
   *decides if  tooltip to be shown
   */
  showToolTip: PropTypes.bool,
  /**
   * tooltip position
   */
  tooltipAlign: PropTypes.string,

  /**
   * classname applies to the wrapper of popover
   */
  wrapperClassName: PropTypes.string,
  /**
   * optional props for tree grid to add role and aria-label to wrapper span
   */
  wrapperProps: PropTypes.object,
};
