import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
import { Tooltip } from '@carbon/react';
import { blockClass } from '../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderButton = ({
  className,
  label,
  hideLabel,
  tooltipAlign,
  renderIcon: Icon,
  onClick,
  showToolTip,
  role,
  ...rest
}) => {
  const Button = () => {
    return (
      <button
        {...rest}
        role={!hideLabel ? role : undefined}
        // role={'gridcell'}
        tabIndex={-1}
        className={cx([
          className,
          `${blockClass}__condition-builder-button`,
          { [`${blockClass}__text-ellipsis`]: showToolTip && !hideLabel },
        ])}
        type="button"
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
        }}
      >
        {Icon && <Icon />}
        {/* here goes the logic to show multiSelected items as first,second, +n */}
        {!hideLabel && label}
      </button>
    );
  };

  return hideLabel || showToolTip ? (
    <Tooltip
      label={label}
      align={tooltipAlign}
      className={`${blockClass}__con-tooltip`}
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
   * label of the button
   */
  label: PropTypes.string,
  /**
   * callback triggered on click of add button
   */
  onClick: PropTypes.func,
  /**
   * Optional prop to allow overriding the icon rendering.
   */
  renderIcon: PropTypes.func,
  /**
   *optional string defines the role of the button
   */
  role: PropTypes.string,
  /**
   *decides if  tooltip to be shown
   */
  showToolTip: PropTypes.bool,
  /**
   * tooltip position
   */
  tooltipAlign: PropTypes.string,
};
