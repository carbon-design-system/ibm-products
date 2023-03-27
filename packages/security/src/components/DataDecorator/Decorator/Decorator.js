/**
 * @file Decorator
 * @copyright IBM Security 2019 - 2021
 */

import deprecate from 'carbon-components-react/es/prop-types/deprecate';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { getDecoratorProps, namespace, icons } from './constants';
import Icon from '../../Icon';

const Decorator = ({
  active,
  className,
  href,
  inline,
  midLineTruncation,
  fitValue,
  noBorderRadius,
  noType,
  noIcon,
  onClick,
  onClickValue,
  onContextMenu,
  score,
  scoreDescription,
  scoreThresholds,
  title,
  type,
  value,
}) => {
  const { path, classes } = getDecoratorProps(score, scoreThresholds, active);

  /**
   * Handles when the Decorator has been clicked.
   * @param {SyntheticEvent} event The event fired when the Decorator has been
   *   clicked.
   */
  const handleClick = (event) => {
    onClick(event, type, value);
  };

  const handleContextMenuClick = (event) => {
    onContextMenu(event, type, value);
  };

  const truncationUtil = (inputText, maxLength, front, back) => {
    let truncationValue = inputText;
    if (inputText.length > maxLength) {
      truncationValue = `${inputText.substring(0, front)}…${inputText.substr(
        inputText.length - back
      )}`;
    }
    return truncationValue;
  };

  const renderType = () => {
    if (noType) {
      return null;
    }
    return (
      <>
        {!noIcon && (
          <span className={`${namespace}__icon`}>
            <Icon
              fillRule="evenodd"
              path={path}
              size={inline ? 12 : 16}
              viewBox="0 0 16 16"
              title={scoreDescription(score, scoreThresholds)}
            />
          </span>
        )}
        <span className={`${namespace}__type`}>{type}</span>
      </>
    );
  };

  const renderValue = () => (
    <span
      className={classnames(`${namespace}__value`, {
        [`${namespace}__value--fit-value`]: fitValue,
      })}
      title={title || value}
    >
      {midLineTruncation.enabled
        ? truncationUtil(
            value,
            midLineTruncation.maxLength,
            midLineTruncation.front,
            midLineTruncation.back
          )
        : value}
    </span>
  );

  const decoratorClasses = classnames(namespace, classes, className, {
    [`${namespace}--interactive`]: onClick || href,
    [`${namespace}--active`]: active,
    [`${namespace}--inline`]: inline,
    [`${namespace}--no-border-radius`]: noBorderRadius,
  });

  const interactiveProps = {
    onClick: handleClick,
    onContextMenu: handleContextMenuClick,
    type: 'button',
  };

  // original security decorator prop
  if (href) {
    return (
      <a
        href={href}
        className={`${decoratorClasses} ${namespace}__link`}
        tabIndex={0}
        {...interactiveProps}
      >
        {renderType()}
        {renderValue()}
      </a>
    );
  }

  // Pill
  if (onClick && !onClickValue) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        data-testid={`${namespace}-pill`}
        className={`${decoratorClasses} ${namespace}__pill`}
        {...interactiveProps}
      >
        {renderType()}
        {renderValue()}
      </button>
    );
  }

  // dual decorator: left type button, right value button
  if (onClick && onClickValue) {
    return (
      <div
        className={`${namespace}__dual-container`}
        data-testid={`${namespace}-${type}-${value}`}
      >
        {/* eslint-disable-next-line react/button-has-type */}
        <button
          className={`${decoratorClasses} ${namespace}__dual-type-pill`}
          {...interactiveProps}
        >
          {renderType()}
        </button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button
          className={`${decoratorClasses} ${namespace}__dual-value-pill`}
          {...interactiveProps}
          onClick={onClickValue}
        >
          {renderValue()}
        </button>
      </div>
    );
  }

  // non-interactive pill
  return (
    <span
      data-testid={`${namespace}-pill`}
      className={`${decoratorClasses} ${namespace}__pill`}
      onContextMenu={handleContextMenuClick}
    >
      {renderType()}
      {renderValue()}
    </span>
  );
};

Decorator.propTypes = {
  /** @type {boolean} Whether the Decorator is active */
  active: PropTypes.bool,

  /** @type {string} Additional classes to add. */
  className: PropTypes.string,

  /** @type {boolean} Whether the Decorator stretches to fit value */
  fitValue: PropTypes.bool,

  /** @type {string} The href for the Decorator. */
  href: PropTypes.string,

  /** @type {boolean} Whether the Decorator can be interacted with */
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  inert: deprecate(
    PropTypes.bool,
    `\nThe prop \`inert\` for Decorator has been deprecated. The Decorator will now be considered "inert" (non-interactive) by default. You can make a Decorator interactive by adding an \`href\` or \`onClick\` prop.`
  ),

  /** @type {boolean} Whether the Decorator should be treated and styled as an inline element. */
  inline: PropTypes.bool,

  /** @type {object} Mid-line truncation options applied to value of decorator if applicable. */
  midLineTruncation: PropTypes.shape({
    enabled: PropTypes.bool,
    maxLength: PropTypes.number,
    front: PropTypes.number,
    back: PropTypes.number,
  }),

  /** @type {boolean} Whether the Decorator has border radius */
  noBorderRadius: PropTypes.bool,

  /** @type {boolean} Whether the Decorator includes an icon */
  noIcon: PropTypes.bool,

  /** @type {boolean} Whether the Decorator includes the type part (left part) */
  noType: PropTypes.bool,

  /** @type {Function} Click handler of the Decorator. */
  onClick: PropTypes.func,

  /** @type {Function} Click handler of the Decorator value part. */
  onClickValue: PropTypes.func,

  /** @type {Function} Secondary click handler of the Decorator. */
  onContextMenu: PropTypes.func,

  /** @type {number} The score of the data. */
  score: PropTypes.number,

  /** @type {func} Descriptive text for screen readers that details the severity of a score. */
  scoreDescription: PropTypes.func,

  /** @type {Array<number>} An array of four numbers indicating score thresholds for severity. */
  scoreThresholds: (props, propName) => {
    if (
      !Array.isArray(props.scoreThresholds) ||
      props.scoreThresholds.length !== 4 ||
      !props.scoreThresholds.every((number) => typeof number === 'number')
    ) {
      return new Error(
        `${propName} is required to be an array of four numbers.`
      );
    }
    return null;
  },

  /** @type {string} The title of data. */
  title: PropTypes.string,

  /** @type {string} The type of data. */
  type: PropTypes.string.isRequired,

  /** @type {string} The value of the data. */
  value: PropTypes.string.isRequired,
};

Decorator.defaultProps = {
  active: false,
  className: '',
  href: undefined,
  inline: false,
  onClick: undefined,
  onClickValue: undefined,
  onContextMenu: () => {},
  noType: false,
  noBorderRadius: false,
  noIcon: false,
  fitValue: false,
  score: undefined,
  scoreThresholds: [0, 4, 7, 10],
  title: '',
  scoreDescription: (score, scoreThresholds) =>
    score
      ? `Score ${score} out of ${scoreThresholds.slice(-1)[0]}`
      : 'No score',
  midLineTruncation: {
    enabled: false,
    maxLength: 20,
    front: 12,
    back: 4,
  },
};

/**
 * Generate exports for individual severity icon types.
 * @param {Array} iconNames array of icon names
 */
function generateIconExports(...iconNames) {
  const namedExports = {};
  iconNames.forEach((iconName) => {
    const IconComponent = ({ className, description, size, ...other }) => (
      <Icon
        className={classnames(
          `${namespace}__icon--${iconName.toLowerCase()}`,
          className
        )}
        fillRule="evenodd"
        path={icons[iconName]}
        size={size}
        viewBox="0 0 16 16"
        aria-label={description}
        {...other}
      />
    );
    IconComponent.propTypes = {
      /** Optional class name. */
      className: PropTypes.string,

      /** The icon description. */
      description: PropTypes.string.isRequired,

      /** Icon size. */
      size: PropTypes.oneOf([12, 16]),
    };

    IconComponent.defaultProps = {
      className: '',
      size: 16,
    };

    // Capitalize first character of icon name
    // so that the export is `Decorator.Low` etc.
    const formattedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);

    IconComponent.displayName = `Decorator.${formattedName}`;
    namedExports[formattedName] = IconComponent;
  });
  return namedExports;
}

Object.assign(Decorator, generateIconExports(...Object.keys(icons)));

export default Decorator;
