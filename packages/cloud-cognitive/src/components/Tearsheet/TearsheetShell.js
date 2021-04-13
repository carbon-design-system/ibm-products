/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { ComposedModal } from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--tearsheet`;
const componentName = 'TearsheetShell';

const maxStackingDepth = 3;

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Global data structures to communicate the state of tearsheet stacking
// (i.e. when more than one tearsheet is open). The stack array contains one
// item per OPEN tearsheet, in the order of lowest to highest in the
// visual z-order. Each item in the array is a callback that identifies an instance of
// an open tearsheet. The stackHandlers array contains the full set of
// callbacks to ALL open and closed tearsheets, which are called to
// notify all the tearsheets whenever the stacking of the tearsheets changes.
// This happens when a tearsheet opens or closes (and thus the stack array
// entries change).
let stack = [];
let stackHandlers = [];

// TearSheetShell is used internally by TearSheet and TearSheetNarrow
export const TearsheetShell = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      children,
      className,
      onClose,
      open,
      preventCloseOnClickOutside,
      size,
      verticalPosition,
      ...rest
    },
    ref
  ) => {
    const [stackSize, setStackSize] = useState(0);
    const [stackPosition, setStackPosition] = useState(0);

    // Keep a record of the previous value of stacksize.
    const prevStackSize = useRef();
    useEffect(() => {
      prevStackSize.current = stackSize;
    });

    // Hook called whenever the tearsheet mounts, unmounts, or the open
    // prop changes value.
    useLayoutEffect(() => {
      // Callback that will be called whenever the stacking order changes.
      // (Also used as the identity of the tearsheet in the stack array.)
      // stackPosition is 1-based with 0 indicating closed.
      function handleStackChange(newStackSize, newStackPosition) {
        setStackSize(Math.min(newStackSize, maxStackingDepth));
        setStackPosition(newStackPosition);
      }

      // Register this tearsheet's stack change callback/listener.
      stackHandlers.push(handleStackChange);

      // If the tearsheet is mounting with open=true or open is changing from
      // false to true to open it then append its notification callback to
      // the end of the stack array (as its ID), and call all the callbacks
      // to notify all open tearsheets that the stacking has changed.
      if (open) {
        stack.push(handleStackChange);
        stackHandlers.forEach((handler) =>
          handler(stack.length, stack.indexOf(handler) + 1)
        );
      }

      // Cleanup function called whenever the tearsheet unmounts or the open
      // prop changes value (in which case it is called prior to this hook
      // being called again).
      return function cleanup() {
        // Remove the notification callback from the stack array, and call
        // all the callbacks in the array to notify all open tearsheets
        // if the stacking has changed. This is only necessary if the
        // tearsheet was open and is either closing or unmounting (i.e
        // if it has a callback in the stack array that gets removed).
        const initialStackSize = stack.length;
        stack = stack.filter((handler) => handler !== handleStackChange);
        if (stack.length !== initialStackSize) {
          stackHandlers.forEach((handler) =>
            handler(stack.length, stack.indexOf(handler) + 1)
          );
        }
        stackHandlers = stackHandlers.filter(
          (handler) => handler !== handleStackChange
        );
      };
    }, [open]);

    const classes = cx({
      [`${blockClass}`]: true,
      [`${blockClass}--stacked-${stackPosition}-of-${stackSize}`]:
        open && stackSize > 1,
      [`${blockClass}--stacked-1-of-1`]:
        open && stackSize === 1 && prevStackSize.current === 2, // Don't apply this on the initial open of a single tearsheet.
      [`${blockClass}--stacked-closed`]: !open && stackSize > 0,
      [`${blockClass}--wide`]: size === 'wide',
      [className]: className,
    });
    const containerClasses = cx({
      [`${blockClass}__container`]: true,
      [`${blockClass}__container--lower`]: verticalPosition === 'lower',
    });

    if (stackPosition <= maxStackingDepth) {
      return (
        <ComposedModal
          {
            // Pass through any other property values.
            ...rest
          }
          className={classes}
          containerClassName={containerClasses}
          {...{ onClose, open, preventCloseOnClickOutside, ref }}
          size="sm">
          {children}
        </ComposedModal>
      );
    } else {
      console.warn(
        'Tearsheet not rendered: more than 3 levels of tearsheet stacking.'
      );
      return null;
    }
  }
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
TearsheetShell.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
TearsheetShell.propTypes = {
  /**
   * Specifies the content of the TearsheetShell.
   */
  children: PropTypes.node,

  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,

  /**
   * Specifies an optional handler for closing modal. Returning `false`
   * here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the Tearsheet is currently open or not.
   */
  open: PropTypes.bool,

  /**
   * Prevents the TearsheetShell from closing automatically if the user clicks outside of it.
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * Specifies the width of the Tearsheet. `'narrow' | 'wide'`
   */
  size: PropTypes.oneOf(['narrow', 'wide']).isRequired,

  /**
   * Specifies the position of the top of tearsheet in the viewport. The
   * 'normal' position is a short distance down from the top of the viewport,
   * leaving room at the top for a header bar to show through from below. The
   * 'lower' position provides a little extra room at the top to allow an action
   * bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
TearsheetShell.defaultProps = {
  verticalPosition: 'normal',
};
