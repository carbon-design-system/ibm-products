/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

import { getIcon, truncate } from './constants';
import { DecoratorIcon } from './DecoratorIcon';

const blockClass = `${pkg.prefix}--decorator`;
const componentName = 'Decorator';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  scoreDescription: (score, scoreThresholds, magnitude) => {
    if (typeof score !== 'number') {
      return 'Unknown score';
    }
    return `"${magnitude}" magnitude. Score ${score} out of ${
      scoreThresholds.slice(-1)[0]
    }`;
  },
  scoreThresholds: [0, 4, 7, 10],
  theme: 'light',
};

/**
 * The Decorator groups a key/value pair to look and behave like a single UI element.
 */
export let Decorator = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      disabled,
      hideIcon,
      href,
      label,
      onClick,
      onClickLabel,
      onClickValue,
      onContextMenu,
      score,
      scoreDescription = defaults.scoreDescription,
      scoreThresholds = defaults.scoreThresholds,
      small,
      theme = defaults.theme,
      truncateValue,
      value,
      valueTitle,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const { svgPath, magnitude } = useMemo(() => {
      return getIcon(score, scoreThresholds);
    }, [score, scoreThresholds]);

    const _scoreDescription = useMemo(() => {
      return scoreDescription(score, scoreThresholds, magnitude);
    }, [magnitude, score, scoreDescription, scoreThresholds]);

    // If a "midline" truncation has been defined, then refer that,
    // else refer to the original value.
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

    // These class names apply to all types of Decorator.
    const classNames = useMemo(() => {
      return cx(blockClass, className, `${blockClass}--${theme}`, {
        [`${blockClass}--sm`]: small,
        [`${blockClass}--truncate-end`]: truncateValue === 'end',
        [`${blockClass}--truncate-start`]: truncateValue === 'start',
        [`${blockClass}--truncate-midline`]: truncateValue?.maxLength,
      });
    }, [className, small, theme, truncateValue]);

    // These properties apply to all <DecoratorIcons>.
    const decoratorIconsProps = {
      className: `${blockClass}__icon`,
      magnitude: magnitude.toLowerCase(), // e.g. "Medium" -> "medium"
      path: svgPath,
      small: small,
      title: _scoreDescription,
    };

    const handleOnClick = (event) => {
      onClick(event, { score, label, value, magnitude });
    };

    const handleOnClickLabel = (event) => {
      onClickLabel(event, { score, label, value, magnitude });
    };

    const handleOnClickValue = (event) => {
      onClickValue(event, { score, label, value, magnitude });
    };

    const handleOnContextMenu = (event) => {
      onContextMenu && onContextMenu(event, { score, label, value, magnitude });
    };

    // RETURN DUAL BUTTONS
    if (onClickLabel && onClickValue) {
      return (
        <span
          {...rest}
          {...getDevtoolsProps(componentName)}
          className={cx(classNames, `${blockClass}--buttons`, {
            [`${blockClass}-disabled`]: disabled,
          })}
          ref={ref}
        >
          <button
            className={`${blockClass}__label`}
            disabled={disabled}
            onClick={!disabled && handleOnClickLabel}
            onContextMenu={!disabled && handleOnContextMenu}
            type="button"
          >
            {!hideIcon && <DecoratorIcon {...decoratorIconsProps} />}
            {!!label && label}
          </button>
          <button
            className={`${blockClass}__value`}
            disabled={disabled}
            onClick={!disabled && handleOnClickValue}
            onContextMenu={!disabled && handleOnContextMenu}
            title={valueTitle || value}
            type="button"
          >
            {_value}
          </button>
        </span>
      );
    }

    // RETURN SINGLE BUTTON
    if (onClick && !href) {
      return (
        <button
          {...rest}
          {...getDevtoolsProps(componentName)}
          className={cx(classNames, `${blockClass}--button`, {
            [`${blockClass}-disabled`]: disabled,
          })}
          disabled={disabled}
          onClick={!disabled && handleOnClick}
          onContextMenu={!disabled && handleOnContextMenu}
          ref={ref}
          type="button"
        >
          <span className={`${blockClass}__label`}>
            {!hideIcon && <DecoratorIcon {...decoratorIconsProps} />}
            {!!label && label}
          </span>
          <span className={`${blockClass}__value`} title={valueTitle || value}>
            {_value}
          </span>
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
          className={cx(classNames, `${blockClass}--link`)}
          onClick={handleOnClick}
          onContextMenu={handleOnContextMenu}
          ref={ref}
        >
          <span className={`${blockClass}__label`}>
            {!hideIcon && <DecoratorIcon {...decoratorIconsProps} />}
            {!!label && label}
          </span>
          <span className={`${blockClass}__value`} title={valueTitle || value}>
            {_value}
          </span>
        </a>
      );
    }

    // RETURN DEFAULT (NON-INTERACTIVE)
    return (
      <span
        {...rest}
        {...getDevtoolsProps(componentName)}
        className={cx(classNames, `${blockClass}--default`)}
        ref={ref}
      >
        <span className={`${blockClass}__label`}>
          {!hideIcon && <DecoratorIcon {...decoratorIconsProps} />}
          {!!label && label}
        </span>
        <span className={`${blockClass}__value`} title={valueTitle || value}>
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
   * Optionally set button-types as `disabled`.
   *
   * This does not apply to default or link types.
   */
  disabled: PropTypes.bool,
  /**
   * Do not show the icon, regardless of score.
   */
  hideIcon: PropTypes.bool,
  /**
   * Defining `href` will render the entire component as a link.
   */
  href: PropTypes.string,
  /**
   * The label for the data.
   */
  label: PropTypes.string,
  /**
   * Defining `onClick` will render the entire component as a single button.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onClick: PropTypes.func,
  /**
   * Defining `onClickLabel` and `onClickValue` together
   * will render the `label` and `value` as individual buttons.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onClickLabel: PropTypes.func,
  /**
   * Defining `onClickLabel` and `onClickValue` together
   * will render the `label` and `value` as individual buttons.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onClickValue: PropTypes.func,
  /**
   * Optional callback function for right-click events.
   * This one function can be applied to any component variation.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onContextMenu: PropTypes.func,
  /**
   * Determines the color, shape, and type of magnitude of the icon.
   *
   * See also `scoreThresholds` for details.
   *
   * If you don't want to show the icon at all, set `hideIcon={true}`.
   */
  score: PropTypes.number,
  /**
   * Callback function for building the score's descriptive text for screen readers.
   *
   * The default description is in the form of `"(magnitude)" magnitude: score X out of Y"`.
   * E.g. `"Medium" magnitude: score 5 out of 10`.
   *
   * Where `magnitude` is the label associated with the specific score,
   * X is the `score`, and Y is the last element of the `scoreDescription` array.
   */
  scoreDescription: PropTypes.func,
  /**
   * An array of 4 numbers determines the range of thresholds.
   *
   * E.g. `[0, 4, 7, 10]`
   * <br/>- `<= 0` "Benign"
   * <br/>- `1-3` "Low"
   * <br/>- `4-6` "Medium"
   * <br/>- `7-9` "High"
   * <br/>- `>= 10` "Critical"
   * <br/>- `NaN` "Unknown"
   *
   * See also `score`.
   */
  scoreThresholds: PropTypes.arrayOf(PropTypes.number),
  /**
   * Styled smaller to better fit inline with text.
   */
  small: PropTypes.bool,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * If not defined, it will behave as `display:inline-block`.
   *
   * If `end` it will append "..." to the `value` if there is not enough space.
   *
   * If `start` it will prepend "..." to the `value` if there is not enough space.
   *
   * If `{maxLength, front, back}` it will inject "..." in the middle
   * of the `value` regardless of available space.
   */
  truncateValue: PropTypes.oneOfType([
    PropTypes.oneOf(['end', 'start']),
    PropTypes.shape({
      maxLength: PropTypes.number,
      front: PropTypes.number,
      back: PropTypes.number,
    }),
  ]),
  /**
   * The value of the data.
   */
  value: PropTypes.string.isRequired,
  /**
   * Overrides the default title for the Decorator's value.
   */
  valueTitle: PropTypes.string,
};
