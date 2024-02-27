/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

import { getMagnitude, truncate } from './utils';
import { DecoratorIcon } from './DecoratorIcon';

const blockClass = `${pkg.prefix}--decorator`;
const componentName = 'Decorator';

const defaults = {
  kind: 'default',
  onClick: () => {},
  onClickLabel: () => {},
  onClickValue: () => {},
  onContextMenu: () => {},
  onContextMenuLabel: () => {},
  onContextMenuValue: () => {},
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
      kind = defaults.kind,
      label,
      setLabelTitle,
      onClick = defaults.onClick,
      onClickLabel = defaults.onClickLabel,
      onClickValue = defaults.onClickValue,
      onContextMenu = defaults.onContextMenu,
      onContextMenuLabel = defaults.onContextMenuLabel,
      onContextMenuValue = defaults.onContextMenuValue,
      score,
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
    const magnitude = getMagnitude(score, scoreThresholds);
    const _labelTitle =
      setLabelTitle && setLabelTitle(score, scoreThresholds, magnitude);
    const _value = truncate(value, truncateValue);

    // These class names apply to all types of Decorator.
    const classNames = cx(blockClass, className, `${blockClass}--${theme}`, {
      [`${blockClass}--sm`]: small,
      [`${blockClass}--truncate-end`]: truncateValue === 'end',
      [`${blockClass}--truncate-start`]: truncateValue === 'start',
      [`${blockClass}--truncate-midline`]: truncateValue?.maxLength,
    });

    // These properties apply to all <DecoratorIcons>.
    const decoratorIconsProps = {
      className: `${blockClass}__icon`,
      magnitude: magnitude.toLowerCase(), // e.g. "Medium" -> "medium"
      small: small,
    };

    // Optional callback functions if `kind` is "link" or "single-button".
    const handleOnClick = (event) => {
      onClick(event, { score, label, value, magnitude });
    };
    const handleOnContextMenu = (event) => {
      onContextMenu(event, { score, label, value, magnitude });
    };

    // RETURN DUAL BUTTONS
    if (kind === 'dual-button') {
      // Optional callback functions if `kind` is "dual-button" only.
      const handleOnClickLabel = (event) => {
        onClickLabel(event, { score, label, value, magnitude });
      };
      const handleOnClickValue = (event) => {
        onClickValue(event, { score, label, value, magnitude });
      };
      const handleOnContextMenuLabel = (event) => {
        onContextMenuLabel(event, { score, label, value, magnitude });
      };
      const handleOnContextMenuValue = (event) => {
        onContextMenuValue(event, { score, label, value, magnitude });
      };

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
            onContextMenu={!disabled && handleOnContextMenuLabel}
            title={_labelTitle || label}
            type="button"
          >
            {!hideIcon && <DecoratorIcon {...decoratorIconsProps} />}
            {!!label && label}
          </button>
          <button
            className={`${blockClass}__value`}
            disabled={disabled}
            onClick={!disabled && handleOnClickValue}
            onContextMenu={!disabled && handleOnContextMenuValue}
            title={valueTitle || value}
            type="button"
          >
            {_value}
          </button>
        </span>
      );
    }

    // RETURN SINGLE BUTTON
    if (kind === 'single-button') {
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
          <span className={`${blockClass}__label`} title={_labelTitle || label}>
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
    if (kind === 'link') {
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
          <span className={`${blockClass}__label`} title={_labelTitle || label}>
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
    if (kind === 'default') {
      return (
        <span
          {...rest}
          {...getDevtoolsProps(componentName)}
          className={cx(classNames, `${blockClass}--default`)}
          ref={ref}
        >
          <span className={`${blockClass}__label`} title={_labelTitle || label}>
            {!hideIcon && <DecoratorIcon {...decoratorIconsProps} />}
            {!!label && label}
          </span>
          <span className={`${blockClass}__value`} title={valueTitle || value}>
            {_value}
          </span>
        </span>
      );
    }
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
   * `disabled` only applies if `kind` is "single-button" or "dual-button".
   */
  disabled: PropTypes.bool,
  /**
   * Do not show the icon, regardless of score.
   */
  hideIcon: PropTypes.bool,
  /**
   * `href` is req'd if `kind` is "link".
   *
   * These two properties together will render the `label` and `value` as a single anchor tag.
   */
  href: PropTypes.string,
  /**
   * If `kind` is "dual-button" then refer to the `onClickLabel`, `onClickValue`, `onContextMenuLabel`, and `onContextMenuValue` callback functions.
   *
   * If `kind` is "single-button" then refer to the `onClick` and `onContextMenu` callback functions.
   *
   * If `kind` is "link" then also populate `href`.
   *
   * `kind's` default value is "default" and has no other requirements.
   */
  kind: PropTypes.oneOf(['default', 'link', 'single-button', 'dual-button']),
  /**
   * The label for the data.
   */
  label: PropTypes.string,
  /**
   * Optional callback function if `kind` is "link" or "single-button".
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onClick: PropTypes.func,
  /**
   * Optional callback functions if `kind` is "dual-button" only.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onClickLabel: PropTypes.func,
  /**
   * Optional callback functions if `kind` is "dual-button" only.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onClickValue: PropTypes.func,
  /**
   * Optional callback function if `kind` is "link" or "single-button".
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onContextMenu: PropTypes.func,
  /**
   * Optional callback functions if `kind` is "dual-button" only.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onContextMenuLabel: PropTypes.func,
  /**
   * Optional callback functions if `kind` is "dual-button" only.
   *
   * Returns two objects: `event` and `{ score, label, value, magnitude }`
   */
  onContextMenuValue: PropTypes.func,
  /**
   * Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.
   *
   * If you don't want to show the icon at all, set `hideIcon={true}`.
   */
  score: PropTypes.number,
  /**
   * Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.
   *
   * An array of 4 numbers determines the range of thresholds.
   *
   * Example using `[0, 4, 7, 10]`:
   * <br/>- `<= 0` "Benign"
   * <br/>- `1-3` "Low"
   * <br/>- `4-6` "Medium"
   * <br/>- `7-9` "High"
   * <br/>- `>= 10` "Critical"
   * <br/>- `NaN` "Unknown"
   */
  scoreThresholds: PropTypes.arrayOf(PropTypes.number),
  /**
   * Callback function for building the label's descriptive text for screen readers.
   *
   * The default description is in the form of `"(magnitude)" magnitude: score X out of Y"`.
   * E.g. `"Medium" magnitude: score 5 out of 10`.
   *
   * Where `magnitude` is the label associated with the specific score,
   * X is the `score`, and Y is the last element of the `setLabelTitle` array.
   *
   * If not defined, the title will default to the `label` prop.
   */
  setLabelTitle: PropTypes.func,
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
