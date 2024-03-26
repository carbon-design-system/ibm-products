/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useRef, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { allPropTypes } from '../../global/js/utils/props-helper';

// Carbon and package components we use.
import { Button, ButtonSet, InlineLoading } from '@carbon/react';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';

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
      isExpressive = true,
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
      isExpressive={isExpressive}
      className={cx(className, [
        `${blockClass}__action-button`,
        {
          [`${blockClass}__action-button--ghost`]:
            kind === 'ghost' || kind === 'danger--ghost',
          [`${blockClass}__action-button--expressive`]: isExpressive,
        },
      ])}
      disabled={disabled || loading || false}
      {...{ kind, ref }}
    >
      {label}
      {loading && <InlineLoading />}
    </Button>
  )
);

ActionSetButton.displayName = 'ActionSetButton';

ActionSetButton.propTypes = {
  ...Button.PropTypes,
  kind: PropTypes.oneOf([
    'ghost',
    'danger--ghost',
    'secondary',
    'danger',
    'primary',
  ]),
  label: PropTypes.string,
  loading: PropTypes.bool,
};

const defaultKind = 'primary';

// Order of actions kinds: ghost first, then danger--ghost, then most other types,
// then danger, and finally primary
const actionOrder = (kind) =>
  ({
    ghost: 1,
    'danger--ghost': 2,
    danger: 4,
    primary: 5,
  }[kind] ?? 3);

// prior to changes
// Single full width up to medium 40rem
// Double 50% up to a value larger than Flyout (642px, 40.125rem)
// Triple 25% (max 232px)
// Quad 25% (max 232px)

// Post changes
// $min-action-width: 176px(11rem)
// Double stacked if <= 2 * $min-action-width
// Double 50% > 2 * $min-action-width && < 4 * $min-action-width
// Triple stacked if <= 3 * $min-action-width
// Triple 25% max 14.5rem
// Quad stacked if <= 4 * $min-action-width
// Quad 25% mas 14.5rem

/**
 * An ActionSet presents a set of action buttons, constructed from bundles
 * of prop values and applying some layout rules. Button sizes are managed
 * automatically. If there is a ghost button,
 * it appears at the left side. If there is a primary button it appears at the
 * right.
 */
export const ActionSet = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      actions,
      autoStack = false,
      buttonSize,
      className,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const backupRef = useRef();
    const [stacked, setStacked] = useState(false);
    const [orderedActions, setOrderedActions] = useState();
    const localRef = ref || backupRef;
    const innerRef = useRef();

    useEffect(() => {
      const _actions = (actions && actions.slice?.(0)) || [];
      // order the actions with ghost/ghost-danger buttons first and primary/danger buttons last
      // (or the opposite way if we're stacking)
      _actions.sort(
        (action1, action2) =>
          (actionOrder(action1.kind || defaultKind) -
            actionOrder(action2.kind || defaultKind)) *
          (stacked ? -1 : 1)
      );
      setOrderedActions(_actions);
    }, [actions, stacked]);

    useResizeObserver(
      localRef,
      () => {
        let newStacked = stacked;
        if (innerRef.current && actions?.length) {
          const computedStyle = window.getComputedStyle(innerRef.current);

          const flexDirection =
            computedStyle?.getPropertyValue?.('--flex-direction');

          newStacked = flexDirection === 'column';
        } else {
          newStacked = false;
        }
        if (stacked !== newStacked) {
          setStacked(newStacked);
        }
      },
      [actions, innerRef.current]
    );

    return (
      <ButtonSet
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className, {
          [`${blockClass}--single`]: orderedActions?.length === 1,
          [`${blockClass}--double`]: orderedActions?.length === 2,
          [`${blockClass}--triple`]: orderedActions?.length === 3,
          [`${blockClass}--quadruple`]: orderedActions?.length >= 4,
          [`${blockClass}--auto-stack`]: autoStack,
          [`${blockClass}--stacked`]: stacked,
        })}
        role="presentation"
        ref={localRef}
      >
        <div className={`${blockClass}__inner`} ref={innerRef}>
          {orderedActions?.map((action, index) => (
            <ActionSetButton
              key={orderedActions.key || index}
              {...action}
              size={buttonSize}
            />
          ))}
        </div>
      </ButtonSet>
    );
  }
);

ActionSet.displayName = componentName;

/**
 * A validator function to help validate the actions supplied for a particular
 * size of component. When the size is sm, or md with three actions, the
 * buttons will be stacked and a maximum of three buttons is applied with no
 * ghosts unless the ghost is the only button. Otherwise a maximum of four
 * buttons with a maximum of one ghost is applied. In either case, a maximum
 * of one primary button is allowed.
 * @returns null if the actions meet the requirements, or an Error object with
 * an explanatory message.
 */
ActionSet.validateActions =
  () => (props, propName, componentName, location, propFullName) => {
    const name = propFullName || propName;
    const prop = props[name];
    const actions = prop && prop?.length;
    const problems = [];

    if (actions > 0) {
      const countActions = (kind) =>
        prop.filter((action) => (action.kind || defaultKind) === kind).length;

      const primaryActions = countActions('primary');
      const secondaryActions = countActions('secondary');
      const dangerActions = countActions('danger');
      const ghostActions =
        countActions('ghost') + countActions('danger--ghost');

      actions > 4 &&
        problems.push(
          `you cannot have more than four actions in a ${componentName}`
        );

      primaryActions > 1 &&
        problems.push(
          `you cannot have more than one 'primary' action in a ${componentName}`
        );

      ghostActions > 1 &&
        problems.push(
          `you cannot have more than one 'ghost' action in a ${componentName}`
        );

      actions >
        primaryActions + secondaryActions + dangerActions + ghostActions &&
        problems.push(
          `you can only have 'primary', 'danger', 'secondary', 'ghost' and 'danger--ghost' buttons in a ${componentName}`
        );
    }

    return problems.length > 0
      ? new Error(
          `Invalid ${location} \`${name}\` supplied to \`${componentName}\`: ${problems.join(
            ', and '
          )}.`
        )
      : null;
  };

ActionSet.propTypes = {
  /**
   * The action buttons to show. Each action is specified as an
   * object with optional fields 'label' to supply the button label, 'kind'
   * to select the button kind (must be 'primary', 'secondary' or 'ghost'),
   * 'loading' to display a loading indicator, and 'onClick' to receive
   * notifications when the button is clicked. Additional fields in the object
   * will be passed to the Button component, and these can include 'disabled',
   * 'ref', 'className', and any other Button props. Any other fields in the
   * object will be passed through to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: allPropTypes([
    ActionSet.validateActions(),
    PropTypes.arrayOf(
      PropTypes.shape({
        ...Button.propTypes,
        kind: PropTypes.oneOf([
          'ghost',
          'danger--ghost',
          'secondary',
          'danger',
          'primary',
        ]),
        label: PropTypes.string,
        loading: PropTypes.bool,
        // we duplicate this Button prop to improve the DocGen here
        onClick: Button.propTypes.onClick,
      })
    ),
  ]),

  /**
   * auto stack actions based on container queries
   */
  autoStack: PropTypes.bool,

  /**
   * The size of buttons to use for the actions. The allowed values are
   * those for the size prop of carbon Button. If this prop is specified, all
   * the buttons will be set to this size, overriding any 'size' values (if any)
   * supplied in the actions array (if any).
   */
  buttonSize: Button.propTypes.size,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,
};
