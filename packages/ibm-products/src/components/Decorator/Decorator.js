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

import { getIcon, truncate } from './constants';
import { DecoratorIcon } from './DecoratorIcon';

// The block part of our conventional BEM class names (blockClass__E--M).
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
      hideIcon,
      href,
      onClick,
      onClickLabel,
      onClickValue,
      onContextMenu,
      score,
      scoreDescription = defaults.scoreDescription,
      scoreThresholds = defaults.scoreThresholds,
      small,
      theme = defaults.theme,
      valueTitle,
      truncateValue,
      label,
      value,
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
      return cx(
        blockClass,
        className,
        `${blockClass}--${theme}`,
        small && `${blockClass}--sm`,
        truncateValue === 'end' && `${blockClass}--truncate-end`,
        truncateValue === 'start' && `${blockClass}--truncate-start`,
        truncateValue?.maxLength && `${blockClass}--truncate-midline`
      );
    }, [className, small, theme, truncateValue]);

    // These properties apply to all <DecoratorIcons>.
    const iconProps = {
      className: `${blockClass}__icon`,
      magnitude: magnitude.toLowerCase(), // e.g. "Medium" -> "medium"
      path: svgPath,
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
          className={cx(classNames, `${blockClass}--buttons`)}
          ref={ref}
        >
          <button
            className={`${blockClass}__label`}
            onClick={handleOnClickLabel}
            onContextMenu={handleOnContextMenu}
            type="button"
          >
            {!hideIcon && <DecoratorIcon {...iconProps} />}
            {!!label && label}
          </button>
          <button
            className={`${blockClass}__value`}
            onClick={handleOnClickValue}
            onContextMenu={handleOnContextMenu}
            title={valueTitle || value}
            type="button"
          >
            {_value}
          </button>
        </span>
      );
    }

    // RETURN SINGLE BUTTON
    if (onClick) {
      return (
        <button
          {...rest}
          {...getDevtoolsProps(componentName)}
          className={cx(classNames, `${blockClass}--button`)}
          onClick={handleOnClick}
          onContextMenu={handleOnContextMenu}
          ref={ref}
          type="button"
        >
          {!hideIcon && <DecoratorIcon {...iconProps} />}
          {!!label && <span className={`${blockClass}__label`}>{label}</span>}
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
          onContextMenu={handleOnContextMenu}
          ref={ref}
        >
          {!hideIcon && <DecoratorIcon {...iconProps} />}
          {!!label && <span className={`${blockClass}__label`}>{label}</span>}
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
        onContextMenu={handleOnContextMenu}
        ref={ref}
      >
        {!hideIcon && <DecoratorIcon {...iconProps} />}
        {!!label && <span className={`${blockClass}__label`}>{label}</span>}
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
   * A number of less than `scoreThresholds[first]` will be treated as `scoreThresholds[first]`.
   *
   * A number of more than `scoreThresholds[last]` will be treated as `scoreThresholds[last]`.
   *
   * `null` or `undefined` will return "Unknown" (icon = "ring").
   *
   * If you don't want to show the icon at all, set `hideIcon={true}`.
   *
   * See also `scoreThresholds`.
   */
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
   * <br/>- 0 or less = "Benign"
   * <br/>- 1-3="Low"
   * <br/>- 4-6="Medium"
   * <br/>- 7-9="High"
   * <br/>- 10 or more = "Critical"
   *
   * See also `score`.
   */
  scoreThresholds: PropTypes.arrayOf(PropTypes.number),
  /**
   * Styled smaller to better fit with surrounding text.
   */
  small: PropTypes.bool,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * If not defined, it will behave as `display:inline-block`.
   *
   * If `end` it will append "..." to the `value` if there is not enough
   * space to display the entire value.
   *
   * If `start` it will prepend "..." to the `value` if there is not
   * enough space to display the entire value.
   *
   * If `{maxLength, front, back}` it will inject "..." in the middle
   * of the `value` regardless of available space.
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
   * Overrides the default title for the Decorator's value.
   */
  valueTitle: PropTypes.string,
};
