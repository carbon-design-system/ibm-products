/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Button, InlineLoading } from 'carbon-components-react';

const blockClass = `${pkg.prefix}--action-set`;
const componentName = 'ActionSet';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * An ActionSet presents a set of action buttons, constructed from bundles
 * of prop values and applying some layout rules.
 */
export const ActionSet = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      actions,
      className,
      size,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    // order the actions with ghost buttons first and primary buttons last
    // (or the opposite way around if reverse is true)
    const direction = size === 'xs' || size === 'sm' || size === 'md' ? -1 : 1;
    const sortedActions = (actions && actions.slice(0)) || [];
    sortedActions.sort((action1, action2) =>
      action1.kind === action2.kind
        ? 0
        : action1.kind === 'ghost' || action2.kind === 'primary'
        ? -direction
        : action1.kind === 'primary' || action2.kind === 'ghost'
        ? direction
        : 0
    );

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass,
          className,
          {
            [`${blockClass}--single`]: sortedActions.length === 1,
            [`${blockClass}--double`]: sortedActions.length === 2,
            [`${blockClass}--triple-plus`]: sortedActions.length >= 3,
          },
          `${blockClass}--${size}`
        )}
        ref={ref}
        role="presentation">
        {sortedActions.map((action, index) => (
          <Button
            key={index}
            disabled={action.disabled || action.loading || false}
            onClick={action.onClick}
            kind={action.kind}
            className={cx([
              `${blockClass}__action-button`,
              { [`${blockClass}__ghost-button`]: action.kind === 'ghost' },
            ])}>
            {action.label}
            {action.loading && <InlineLoading />}
          </Button>
        ))}
      </div>
    );
  }
);

ActionSet.displayName = componentName;

// We provide a validator function to help validate the actions supplied.
// An optional parameter is a function which will be passed all the props
// and returns true if the component is to be treated as 'small', which means
// that a limit of three buttons will be enforced as well as not combining
// ghost buttons with other button types.
ActionSet.validateActions = () => (props, propName, componentName) => {
  const small =
    props.size === 'xs' || props.size === 'sm' || props.size === 'md';
  const prop = props[propName];

  const badActions = (problem) =>
    new Error(
      `Prop '${propName}' passed to ${componentName} is using an invalid combination of actions.\n\n${problem}`
    );

  if (prop && prop?.length > 0) {
    if (small && prop.length > 3) {
      throw badActions(
        `You cannot have more than three actions in this size of ${componentName}.`
      );
    }

    const primaryButtons = prop.filter((button) => button.kind === 'primary');

    if (primaryButtons.length > 1) {
      throw badActions(
        `You cannot have more than one 'primary' action in a ${componentName}.`
      );
    }

    const ghostButtons = prop.filter((button) => button.kind === 'ghost');

    if (ghostButtons.length > 1) {
      throw badActions(
        `You cannot have more than one 'ghost' action in a ${componentName}.`
      );
    }

    if (small && prop.length > 1 && ghostButtons.length > 0) {
      throw badActions(
        `You cannot have a 'ghost' button in conjuntion with other action types in this size of ${componentName}. Try using a 'secondary' button instead.`
      );
    }
  }

  return null;
};

ActionSet.propTypes = {
  /**
   * Specifies the action buttons to show.
   */
  actions: PropTypes.oneOfType([
    ActionSet.validateActions(),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        onClick: PropTypes.func,
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
      })
    ),
  ]),

  /**
   * Sets an optional className to be added to the side panel outermost element.
   */
  className: PropTypes.string,

  /**
   * Sets the size of the action set. Different button arrangements are used
   * in different sizes, to make best use of the available space.
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'max']),
};

ActionSet.defaultProps = {
  size: 'md',
};
