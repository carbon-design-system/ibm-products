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
import { ComposedModal, ModalHeader, ModalBody } from 'carbon-components-react';
import { ActionSet } from '../ActionSet';

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

// these props are only applicable when size='wide'
export const tearsheetShellWideProps = [
  'influencer',
  'influencerPosition',
  'influencerWidth',
  'navigation',
];

// TearSheetShell is used internally by TearSheet and TearSheetNarrow
export const TearsheetShell = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      actions,
      children,
      className,
      closeIconDescription,
      description,
      hasCloseIcon,
      influencer,
      influencerPosition,
      influencerWidth,
      label,
      navigation,
      onClose,
      open,
      preventCloseOnClickOutside,
      size,
      title,
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
          {(label || title || description || navigation || hasCloseIcon) && (
            <ModalHeader
              className={`${blockClass}__header`}
              closeClassName={cx({
                [`${blockClass}__header--no-close-icon`]: !hasCloseIcon,
              })}
              iconDescription={closeIconDescription}
              label={label}
              title={title}>
              {description && (
                <div className={`${blockClass}__header-description`}>
                  {description}
                </div>
              )}
              {navigation && (
                <div className={`${blockClass}__header-navigation`}>
                  {navigation}
                </div>
              )}
            </ModalHeader>
          )}
          <ModalBody className={`${blockClass}__body`}>
            {influencer && (
              <div
                className={cx({
                  [`${blockClass}__influencer`]: true,
                  [`${blockClass}__influencer--right`]:
                    influencerPosition === 'right',
                  [`${blockClass}__influencer--wide`]:
                    influencerWidth === 'wide',
                })}>
                {influencer}
              </div>
            )}
            <div className={`${blockClass}__right`}>
              {children && (
                <div className={`${blockClass}__main`}>{children}</div>
              )}
              {actions && actions.length > 0 && (
                <ActionSet
                  actions={actions}
                  size={size === 'wide' ? 'max' : 'lg'}
                  buttonSize={size === 'wide' ? 'xl' : null}
                  className={`${blockClass}__buttons`}
                />
              )}
            </div>
          </ModalBody>
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

// Note that the descriptions here should be kept in sync with those for the
// corresponding props for Tearsheet and TearsheetNarrow components.
TearsheetShell.propTypes = {
  /**
   * The actions to be shown as buttons in the action area at the bottom of the
   * tearsheet. Each action is specified as an object with optional fields
   * 'label' to supply the button label, 'kind' to select the button kind (must
   * be 'primary', 'secondary' or 'ghost'), 'loading' to display a loading
   * indicator, and 'onClick' to receive notifications when the button is
   * clicked. Additional fields in the object will be passed to the Button
   * component, and these can include 'disabled', 'ref', 'className', and any
   * other Button props. Any other fields in the object will be passed through
   * to the button element as HTML attributes.
   */
  actions: PropTypes.arrayOf(
    // NB we don't include the validator here, as the component wrapping this
    // one should ensure appropriate validation is done.
    PropTypes.shape({
      label: PropTypes.string,
      onPrimaryActionClick: PropTypes.func,
      kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
      disabled: PropTypes.bool,
      loading: PropTypes.bool,
    })
  ),

  /**
   * The main content of the tearsheet.
   */
  children: PropTypes.node,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon (if shown).
   */
  closeIconDescription: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * Enable a close icon ('x') in the header area of the tearsheet. By default,
   * a tearsheet does not display a close icon, but one should be enabled if
   * the tearsheet is read-only or has no navigation actions (sometimes called
   * a "passive tearsheet").
   */
  hasCloseIcon: PropTypes.bool,

  /**
   * The content for the influencer section of the tearsheet, displayed
   * alongside the main content. This is typically a menu, or filter, or
   * progress indicator, or similar. NB the influencer is only applicable for
   * wide tearsheets.
   */
  influencer: PropTypes.element,

  /**
   * The position of the influencer section, 'left' or 'right'.
   */
  influencerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * The width of the influencer: 'narrow' (the default) is 256px, and 'wide'
   * is 320px.
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * Navigation content, such as a set of tabs, to be displayed at the bottom
   * of the header area of the tearsheet. NB the navigation is only applicable
   * for wide tearsheets.
   */
  navigation: PropTypes.element,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * Prevent the tearsheet from automatically closing (triggering onClose, if
   * provided, which can be cancelled by returning 'false') if the user clicks
   * outside it.
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * Specifies the width of the tearsheet, 'narrow' or 'wide'.
   */
  size: PropTypes.oneOf(['narrow', 'wide']).isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),
};
