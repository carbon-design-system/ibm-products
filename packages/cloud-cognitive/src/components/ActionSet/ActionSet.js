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

const ActionSetButton = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      disabled,
      kind,
      label,
      loading,
      onClick,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => (
    <Button
      {
        // Pass through any other property values as HTML attributes.
        ...rest
      }
      className={cx(className, [
        `${blockClass}__action-button`,
        { [`${blockClass}__action-button--ghost`]: kind === 'ghost' },
      ])}
      disabled={disabled || loading || false}
      {...{ kind, onClick, ref }}>
      {label}
      {loading && <InlineLoading />}
    </Button>
  )
);

ActionSetButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
  label: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultKind = Button.defaultProps.kind;

const willStack = (size, numberOfActions) =>
  size === 'xs' || size === 'sm' || (size === 'md' && numberOfActions > 2);

/**
 * An ActionSet presents a set of action buttons, constructed from bundles
 * of prop values and applying some layout rules. When the size is 'xs' or 'sm'
 * the buttons are stacked, and should only include primary and secondary
 * kinds. When the size is 'md' the buttons are stacked if there are three or
 * more. When the size is 'md' or 'lg', two buttons share the horizontal space.
 * When the size is 'lg', three or more buttons use a quarter of the available
 * horizontal space, and if the size is 'xlg' or 'max' the buttons always use
 * a quarter of the available horizontal space. If there is a ghost button,
 * it appears at the left side. If there is a primary button it appears at the
 * right.
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
    buttons.sort((action1, action2) => {
      const kind1 = action1.kind || defaultKind;
      const kind2 = action2.kind || defaultKind;

      return kind1 === 'ghost' || kind2 === 'primary'
        ? stack
          ? 1
          : -1
        : kind1 === 'primary' || kind2 === 'ghost'
        ? stack
          ? -1
          : 1
        : 0;
    });

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
  const actions = prop && prop?.length;

  if (actions > 0) {
    const size = sizeFn ? sizeFn(props) : props.size;
    const stack = willStack(size, prop.length);

    const countActions = (kind) =>
      prop.filter((action) => (action.kind || defaultKind) === kind).length;

    const check = (iftrue, problem) => {
      if (iftrue)
        throw new Error(`Property '${propName}' is invalid: ${problem}`);
    };

    check(
      stack && actions > 3,
      `you cannot have more than three actions in this size of ${componentName}.`
    );

    check(
      actions > 4,
      `you cannot have more than four actions in a ${componentName}.`
    );

    const primaryActions = countActions('primary');
    check(
      primaryActions > 1,
      `you cannot have more than one 'primary' action in a ${componentName}.`
    );

    const ghostActions = countActions('ghost');
    check(
      ghostActions > 1,
      `you cannot have more than one 'ghost' action in a ${componentName}.`
    );

    check(
      stack && actions > 1 && ghostActions > 0,
      `you cannot have a 'ghost' button in conjunction with other action types in this size of ${componentName}. Try using a 'secondary' button instead.`
    );

    const secondaryActions = countActions('secondary');
    check(
      prop.length > primaryActions + secondaryActions + ghostActions,
      `you can only have 'primary', 'secondary' and 'ghost' buttons in a ${componentName}.`
    );
  }

  return null;
};

ActionSet.propTypes = {
  /**
   * Specifies the action buttons to show. Each action is specified as an
   * object with optional fields 'label' to supply the button label, 'kind'
   * to select the button kind (must be 'primary', 'secondary' or 'ghost'),
   * 'loading' to display a loading indicator, and 'onClick' to receive
   * notifications when the button is clicked. Additional fields in the object
   * will be passed to the Button component, and these can include 'disabled',
   * 'ref', 'className', and any other Button props. Any other fields in the
   * object will be passed through to the button element as HTML attributes.
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
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xlg', 'max']),
};

ActionSet.defaultProps = {
  size: 'md',
};
