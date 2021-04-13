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
import { Button, ButtonSet, InlineLoading } from 'carbon-components-react';

const blockClass = `${pkg.prefix}--action-set`;
const componentName = 'ActionSet';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const ActionSetButton = ({ disabled, kind, label, loading, onClick }) => (
  <Button
    disabled={disabled || loading || false}
    onClick={onClick}
    kind={kind}
    className={cx([
      `${blockClass}__action-button`,
      { [`${blockClass}__ghost-button`]: kind === 'ghost' },
    ])}>
    {label}
    {loading && <InlineLoading />}
  </Button>
);

ActionSetButton.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
  label: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

const willStack = (size, numberOfActions) =>
  size === 'xs' || size === 'sm' || (size === 'md' && numberOfActions > 2);

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
    const buttons = (actions && actions.slice?.(0)) || [];

    // We stack the buttons in a xs/sm set, or if there are three or more in a md set.
    const stack = willStack(size, buttons.length);

    // order the actions with ghost buttons first and primary buttons last
    // (and the opposite way if we're stacking)
    buttons.sort((action1, action2) =>
      action1.kind === 'ghost' || action2.kind === 'primary'
        ? stack
          ? 1
          : -1
        : action1.kind === 'primary' || action2.kind === 'ghost'
        ? stack
          ? -1
          : 1
        : 0
    );

    return (
      <ButtonSet
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass,
          className,
          {
            [`${blockClass}--row-single`]: !stack && buttons.length === 1,
            [`${blockClass}--row-double`]: !stack && buttons.length === 2,
            [`${blockClass}--row-triple`]: !stack && buttons.length === 3,
            [`${blockClass}--row-quadruple`]: !stack && buttons.length >= 4,
            [`${blockClass}--stack`]: stack,
          },
          `${blockClass}--${size}`
        )}
        ref={ref}
        role="presentation"
        stacked={stack}>
        {buttons.map((action, index) => (
          <ActionSetButton {...action} key={index} />
        ))}
      </ButtonSet>
    );
  }
);

ActionSet.displayName = componentName;

// We provide a validator function to help validate the actions supplied.
// An optional parameter is a function which will be passed all the props
// and returns the size that the component should be treated as being: if
// not provided, a 'size' prop is used to determine the size of the component.
// When the size is xs or sm, or md with three actions, the buttons will be
// stacked and a maximum of three buttons is applied with no ghosts unless
// the ghost is the only button. Otherwise a maximum of four buttons with a
// maximum of one ghost is applied. In either case, a maximum of one primary
// button is allowed.
ActionSet.validateActions = (sizeFn) => (props, propName, componentName) => {
  const prop = props[propName];
  const badActions = (problem) =>
    new Error(
      `Prop '${propName}' passed to ${componentName} is using an invalid combination of actions.\n\n${problem}`
    );

  if (prop && prop?.length > 0) {
    const size = sizeFn ? sizeFn(props) : props.size;
    const stack = willStack(size, prop.length);

    if (stack && prop.length > 3) {
      throw badActions(
        `You cannot have more than three actions in this size of ${componentName}.`
      );
    }

    if (prop.length > 4) {
      throw badActions(
        `You cannot have more than four actions in a ${componentName}.`
      );
    }

    const primaryActions = prop.filter((a) => a.kind === 'primary').length;

    if (primaryActions > 1) {
      throw badActions(
        `You cannot have more than one 'primary' action in a ${componentName}.`
      );
    }

    const ghostActions = prop.filter((a) => a.kind === 'ghost').length;

    if (ghostActions > 1) {
      throw badActions(
        `You cannot have more than one 'ghost' action in a ${componentName}.`
      );
    }

    if (stack && prop.length > 1 && ghostActions > 0) {
      throw badActions(
        `You cannot have a 'ghost' button in conjunction with other action types in this size of ${componentName}. Try using a 'secondary' button instead.`
      );
    }

    const secondaryActions = prop.filter((a) => a.kind === 'secondary').length;

    if (prop.length > primaryActions + secondaryActions + ghostActions) {
      throw badActions(
        `You can only have 'primary', 'secondary' and 'ghost' buttons in a ${componentName}.`
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
        disabled: PropTypes.bool,
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
        label: PropTypes.string,
        loading: PropTypes.bool,
        onClick: PropTypes.func,
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
