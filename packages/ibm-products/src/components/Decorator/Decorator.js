/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useMemo } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
// import { Link } from '@carbon/react';

import { getIcon, truncate } from './constants';
import { DecoratorIcon } from './DecoratorIcon';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--decorator`;
const componentName = 'Decorator';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  // score: 0,
  scoreDescription: (score, scoreThresholds) =>
    score
      ? `Score ${score} out of ${scoreThresholds.slice(-1)[0]}`
      : 'No score',
  scoreThresholds: [0, 4, 7, 10],
  size: 'md',
  theme: 'light',
  label: 'Xxy',
  value: 'Xxy',
};

/**
 * The Decorator groups a key/value pair to look like a single UI element.
 */
export let Decorator = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      hideIcon,
      hideLabel,
      href = defaults.href,
      onClick,
      onClickType,
      onClickValue,
      onContextMenu,
      score = defaults.score,
      scoreDescription = defaults.scoreDescription,
      scoreThresholds = defaults.scoreThresholds,
      size = defaults.size,
      theme = defaults.theme,
      title,
      truncateValue = defaults.truncateValue,
      label = defaults.label,
      value = defaults.value,
      withSquareCorners,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const { svgPath, magnitudeType } = useMemo(() => {
      return getIcon(score, scoreThresholds);
    }, [score, scoreThresholds]);

    const _scoreDescription = useMemo(() => {
      return scoreDescription(score, scoreThresholds);
    }, [score, scoreDescription, scoreThresholds]);

    const _value = useMemo(() => {
      if (truncateValue?.maxLength) {
        return truncate(
          value,
          truncateValue.maxLength,
          truncateValue.front,
          truncateValue.back
        );
      }

      return value;
    }, [truncateValue, value]);

    const handleOnClick = (event) => {
      onClick(event, { score, label, value, magnitudeType });
    };

    const handleOnClickType = (event) => {
      onClickType(event, { score, label, value, magnitudeType });
    };

    const handleOnClickValue = (event) => {
      onClickValue(event, { score, label, value, magnitudeType });
    };

    const handleOnContextMenu = (event) => {
      onContextMenu &&
        onContextMenu(event, { score, label, value, magnitudeType });
    };

    // RETURN DUAL BUTTONS
    if (onClickType && onClickValue) {
      return (
        <span
          {...rest}
          {...getDevtoolsProps(componentName)}
          className={cx(
            blockClass,
            className,
            `${blockClass}--${theme}`,
            `${blockClass}--buttons`,
            size === 'sm' && `${blockClass}--sm`,
            withSquareCorners && `${blockClass}--square`
          )}
          ref={ref}
        >
          {hideLabel ? (
            <>
              {!hideIcon && (
                <DecoratorIcon
                  className={`${blockClass}__icon`}
                  magnitudeType={magnitudeType}
                  path={svgPath}
                  title={_scoreDescription}
                />
              )}
              <button
                className={`${blockClass}__value`}
                onClick={handleOnClickValue}
                onContextMenu={handleOnContextMenu}
                type="button"
              >
                {value}
              </button>
            </>
          ) : (
            <>
              <button
                className={`${blockClass}__label`}
                onClick={handleOnClickType}
                onContextMenu={handleOnContextMenu}
                type="button"
              >
                {!hideIcon && (
                  <DecoratorIcon
                    className={`${blockClass}__icon`}
                    magnitudeType={magnitudeType}
                    path={svgPath}
                    title={_scoreDescription}
                  />
                )}
                {label}
              </button>
              <button
                className={`${blockClass}__value`}
                onClick={handleOnClickValue}
                onContextMenu={handleOnContextMenu}
                type="button"
              >
                {value}
              </button>
            </>
          )}
        </span>
      );
    }

    // RETURN SINGLE BUTTON
    if (onClick) {
      return (
        <button
          {...rest}
          {...getDevtoolsProps(componentName)}
          className={cx(
            blockClass,
            className,
            `${blockClass}--${theme}`,
            `${blockClass}--button`,
            size === 'sm' && `${blockClass}--sm`,
            withSquareCorners && `${blockClass}--square`
          )}
          onClick={handleOnClick}
          onContextMenu={handleOnContextMenu}
          ref={ref}
          type="button"
        >
          {!hideIcon && (
            <DecoratorIcon
              className={`${blockClass}__icon`}
              magnitudeType={magnitudeType}
              path={svgPath}
              title={_scoreDescription}
            />
          )}
          {!hideLabel && (
            <span className={`${blockClass}__label`}>{label}</span>
          )}
          <span className={`${blockClass}__value`}>{value}</span>
        </button>
      );
    }

    // RETURN LINK
    if (href) {
      return (
        <a
          {...rest}
          {...getDevtoolsProps(componentName)}
          href={href}
          className={cx(
            blockClass,
            className,
            `${blockClass}--${theme}`,
            `${blockClass}--link`,
            size === 'sm' && `${blockClass}--sm`,
            withSquareCorners && `${blockClass}--square`
          )}
          onContextMenu={handleOnContextMenu}
          ref={ref}
        >
          {!hideIcon && (
            <DecoratorIcon
              className={`${blockClass}__icon`}
              magnitudeType={magnitudeType}
              path={svgPath}
              title={_scoreDescription}
            />
          )}
          {!hideLabel && (
            <span className={`${blockClass}__label`}>{label}</span>
          )}
          <span className={`${blockClass}__value`} title={title || value}>
            {value}
          </span>
        </a>
      );
    }

    // RETURN DEFAULT (NON-INTERACTIVE)
    return (
      <span
        {...rest}
        {...getDevtoolsProps(componentName)}
        className={cx(
          blockClass,
          className,
          `${blockClass}--${theme}`,
          `${blockClass}--default`,
          size === 'sm' && `${blockClass}--sm`,
          withSquareCorners && `${blockClass}--square`,
          truncateValue === 'end' && `${blockClass}-truncate-end`,
          truncateValue === 'start' && `${blockClass}-truncate-start`,
          truncateValue?.maxLength && `${blockClass}-truncate-midline`
        )}
        onContextMenu={handleOnContextMenu}
        ref={ref}
      >
        {!hideIcon && (
          <DecoratorIcon
            className={`${blockClass}__icon`}
            magnitudeType={magnitudeType}
            path={svgPath}
            title={_scoreDescription}
          />
        )}
        {!hideLabel && <span className={`${blockClass}__label`}>{label}</span>}
        <span className={`${blockClass}__value`} title={title || value}>
          {_value}
        </span>
      </span>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
Decorator = pkg.checkComponentEnabled(Decorator, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Decorator.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Decorator.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Hide the icon.
   */
  hideIcon: PropTypes.bool,
  /**
   * Hide the label.
   */
  hideLabel: PropTypes.bool,
  /**
   * Optional: defining `href` will render the entire component as a link.
   */
  href: PropTypes.string,
  /**
   * The label for the data.
   */
  label: PropTypes.string,
  /**
   * Optional: defining `onClick` will render the entire component as a button.
   */
  onClick: PropTypes.func,
  /**
   * Optional: defining `onClickType` and `onClickValue` together
   * will render the `label` and `value` as individual buttons.
   */
  onClickType: PropTypes.func,
  /**
   * Optional: defining `onClickType` and `onClickValue` together
   * will render the `label` and `value` as individual buttons.
   */
  onClickValue: PropTypes.func,
  /**
   * Optional callback function for right-click events.
   */
  onContextMenu: PropTypes.func,
  /**
   * Determines the color, shape, and type of magnitude of the icon.
   *
   * If you don't wish to render the icon, use `hideIcon`.
   *
   * See also `scoreThresholds`.
   */
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Callback function for building the score's descriptive text for screen readers.
   *
   * In the form of "Score X out of Y", where X is the `score`
   * and Y is the last element of the `scoreDescription` array.
   */
  scoreDescription: PropTypes.func,
  /**
   * An array of 4 numbers determines the range of thresholds.
   * E.g. [0, 4, 7, 10]. 0 or less = "benign", 1-3="low", 4-6="medium",
   * 7-9="high", 10 or more = "critical".
   *
   * See also `score`.
   */
  scoreThresholds: PropTypes.arrayOf(PropTypes.number),
  /**
   * Styled smaller to better fit with surrounding text.
   */
  size: PropTypes.oneOf(['sm', 'md']),
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * TODO: ??? vs scoreDescription?
   */
  title: PropTypes.string,
  /**
   * TODO:
   * If defined, it will truncate the `value` of the component.
   *
   * If `end` it will append "..." to the `value` if there is not enough
   * space to display the entire value.
   *
   * If `start` it will prepend "..." to the `value` if there is not
   * enough space to display the entire value.
   *
   * If `{maxLength, front, back}` it will inject "..." in the middle
   * of the `value` regardless of available space.
   *
   * If not defined, it will behave as `display:inline-block`.
   */
  truncateValue: PropTypes.oneOf([
    'end',
    'start',
    // Properties for midline truncation.
    PropTypes.shape({
      maxLength: PropTypes.number,
      front: PropTypes.number,
      back: PropTypes.number,
    }),
  ]),
  /**
   * The value of the data.
   */
  value: PropTypes.string,
  /**
   * The default style is rounded corners. Set to `true` to square the corners.
   */
  withSquareCorners: PropTypes.bool,
};
