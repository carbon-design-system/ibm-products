/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import { Layer, Toggle } from '@carbon/react';
import {
  ChevronDown,
  Locked,
  WarningAltFilled,
  WarningFilled,
} from '@carbon/react/icons';
// import * as carbonMotion from '@carbon/motion';

const blockClass = `${pkg.prefix}--options-tile`;
const componentName = 'OptionsTile';

export let OptionsTile = React.forwardRef(
  (
    {
      children,
      className,
      defaultOpen,
      defaultToggled,
      id,
      invalid,
      invalidText,
      locked,
      lockedText,
      onToggle,
      size = 'xl',
      summary,
      title,
      toggle,
      warn,
      warnText,
      ...rest
    },
    ref
  ) => {
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
      if (defaultToggled) {
        setToggled(true);
      }
    }, [defaultToggled]);

    const handleToggle = (toggled) => {
      setToggled(toggled);
      if (onToggle) {
        onToggle(toggled);
      }
    };

    const getIcon = () => {
      if (locked) {
        return Locked;
      }
      if (invalid) {
        return WarningFilled;
      }
      if (warn) {
        return WarningAltFilled;
      }
    };

    const getText = () => {
      if (locked) {
        return lockedText;
      }
      if (invalid) {
        return invalidText;
      }
      if (warn) {
        return warnText;
      }
      return summary;
    };

    const renderTitle = () => {
      const Icon = getIcon();
      const text = getText();

      return (
        <div className={`${blockClass}__heading`}>
          <h6 className={`${blockClass}__title`}>{title}</h6>
          {text && (
            <span
              className={cx(`${blockClass}__summary`, {
                [`${blockClass}__summary--invalid`]: invalid,
                [`${blockClass}__summary--warn`]: warn,
                [`${blockClass}__summary--locked`]: locked,
              })}
            >
              {Icon && <Icon size={16} />}
              <span className={`${blockClass}__summary-text`}>{text}</span>
            </span>
          )}
        </div>
      );
    };

    return (
      <div
        {...rest}
        className={cx(blockClass, className, `${blockClass}--${size}`)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {toggle && (
          <div className={`${blockClass}__toggle-container`}>
            <Toggle
              aria-labelledby={id}
              className={`${blockClass}__toggle`}
              disabled={locked}
              hideLabel
              id={`${id}-toggle`}
              onToggle={handleToggle}
              size="sm"
              toggled={toggled}
            />
          </div>
        )}
        {children ? (
          <details open={defaultOpen}>
            <summary className={`${blockClass}__header`}>
              <ChevronDown size={16} className={`${blockClass}__chevron`} />
              {renderTitle()}
            </summary>
            <div className={`${blockClass}__content`}>
              <Layer>
                {locked && (
                  <p className={`${blockClass}__locked-text`}>
                    <Locked size={16} />
                    {lockedText}
                  </p>
                )}
                {children}
              </Layer>
            </div>
          </details>
        ) : (
          <div className={`${blockClass}__static-content`}>{renderTitle()}</div>
        )}
      </div>
    );
  }
);

OptionsTile = pkg.checkComponentEnabled(OptionsTile, componentName);
OptionsTile.displayName = componentName;
OptionsTile.propTypes = {
  /**
   * Provide content to render as expandable OptionsTile. If no children
   * are present, the OptionsTile will render as its variant.
   */
  children: PropTypes.node,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Designates if the tile is open by default
   */
  defaultOpen: PropTypes.bool,
  /**
   * Designates if the toggle is toggled by default
   */
  defaultToggled: PropTypes.bool,
  /**
   * Optional id
   */
  id: PropTypes.string,
  /**
   * Whether the OptionsTile is in invalid validation state.
   */
  invalid: PropTypes.bool,
  /**
   * Provide a text explaining why the OptionsTile is in invalid state.
   */
  invalidText: PropTypes.string,
  /**
   * Whether the OptionsTile is in locked validation state.
   */
  locked: PropTypes.bool,
  /**
   * Provide a text explaining why the OptionsTile is in locked state.
   */
  lockedText: PropTypes.string,
  /**
   * Callback function for the built Carbon toggle element.
   */
  onToggle: PropTypes.func,
  /**
   * Define the size of the OptionsTile.
   */
  size: PropTypes.oneOf(['lg', 'xl']),
  /**
   * Optionally provide a text summarizing the current state of the content.
   */
  summary: PropTypes.string,
  /**
   * Provide the title for this OptionsTile.
   */
  title: PropTypes.string,
  /**
   * Designates if the toggle is displayed
   */
  toggle: PropTypes.bool,
  /**
   * Whether the OptionsTile is in warning validation state.
   */
  warn: PropTypes.bool,
  /**
   * Provide a text explaining why the OptionsTile is in warning state.
   */
  warnText: PropTypes.string,
};
