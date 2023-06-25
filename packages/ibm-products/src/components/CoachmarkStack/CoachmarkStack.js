/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

import { CoachmarkStackHome } from './CoachmarkStackHome';
import { CoachmarkTagline } from '../Coachmark/CoachmarkTagline';
import { CoachmarkContext } from '../Coachmark/utils/context';
import { COACHMARK_OVERLAY_KIND } from '../Coachmark/utils/enums';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark-stack`;
const elementBlockClass = `${pkg.prefix}--coachmark-stack-element`;
const componentName = 'CoachmarkStack';

const defaults = {
  onClose: () => {},
  // Pass through to CoachmarkStackHome
  theme: 'light',
};

// NOTE
// The stack is limited to a depth of two Coachmarks:
// - a single parent CoachmarkStackHome
// - a single child Coachmark when stacked
// The parent will include links to all the children.
// No child Coachmark will include links to any other child Coachmarks.

/**
 * Stacked coachmarks are used to call out specific functionality or concepts
 * within the UI that may not be intuitive but are important for the
 * user to gain understanding of the product's main value and discover new use cases.
 * This variant allows the stacking of multiple coachmark overlays to be displayed by interacting with the tagline.
 */
export let CoachmarkStack = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children,
      className,
      onClose = defaults.onClose,
      // Pass through to CoachmarkStackHome
      description,
      media,
      navLinkLabels,
      portalSelector = defaults.portalSelector,
      closeButtonLabel,
      tagline,
      theme = defaults.theme,
      title,
      ...rest
    },
    ref
  ) => {
    const stackHomeRef = useRef();
    const stackedCoachmarkRefs = useRef([]);
    const [isOpen, setIsOpen] = useState(false);
    // selectedItemNumber -1 = parent close button was clicked, remove entire stack
    // selectedItemNumber 0 = (default) the parent is visible, all children are hidden
    // selectedItemNumber 1+ = a child is visible and stacked atop the parent
    const [selectedItemNumber, setSelectedItemNumber] = useState(0);
    // // The parent height and width values to return to after unstacked
    const [parentHeight, setParentHeight] = useState(null);
    // parent height = child height when stacked behind a child that is shorter
    const childArray = Children.toArray(children);
    // same value as CSS animation speed
    const delayMs = 240;

    // Unmount or unstack a child
    const handleClickNavItem = (itemNumber) => {
      setSelectedItemNumber(itemNumber);
    };

    const handleClose = (isParentCloseButton) => {
      if (isParentCloseButton) {
        // Trigger slide-out animation
        setSelectedItemNumber(-1);

        // Unmount after animation is complete
        const timer = setTimeout(() => {
          setIsOpen(false);
          onClose();
        }, delayMs);
        return () => clearTimeout(timer);
      } else {
        // Unstack child
        setSelectedItemNumber(0);
      }
    };
    const contextValue = {
      buttonProps: {
        'aria-expanded': isOpen,
        onClick: () => {
          setIsOpen(true);
        },
        // Compensate for accidental open/close on double-click.
        // Only open on double-click.
        onDoubleClick: () => {
          setIsOpen(true);
        },
      },
      closebuttonProps: {
        onClick: handleClose,
      },
      isOpen: isOpen,
    };

    useEffect(() => {
      setTimeout(() => {
        if (stackHomeRef.current) {
          setParentHeight(stackHomeRef.current.clientHeight);
        }
      }, 0);
    }, [stackHomeRef]);

    useEffect(() => {
      const targetSelectedItem = selectedItemNumber - 1;

      if (!isOpen || targetSelectedItem < 0 || !stackHomeRef.current) {
        return;
      }
      stackHomeRef.current.style.height = `${parentHeight}px`;
      const targetHomeHeight =
        stackedCoachmarkRefs.current[targetSelectedItem].clientHeight;

      stackHomeRef.current.style.height = `${targetHomeHeight}px`;
    }, [selectedItemNumber, isOpen, parentHeight]);

    const clonedChildren = Children.map(childArray, (child, idx) => {
      // Clone each child Coachmark and override specific props
      return cloneElement(child, {
        className: cx(elementBlockClass, child.props.className),
        onClose: handleClose,
        overlayClassName: cx(
          elementBlockClass,
          idx === selectedItemNumber - 1 && `${elementBlockClass}--is-visible`
        ),
        overlayKind: COACHMARK_OVERLAY_KIND.STACKED,
        overlayRef: (ref) => (stackedCoachmarkRefs.current[idx] = ref),
        portalSelector: portalSelector,
      });
    });

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass,
          `${pkg.prefix}--coachmark-overlay--stack`,
          className
        )}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <CoachmarkContext.Provider value={contextValue}>
          <CoachmarkTagline title={tagline} onClose={onClose} />
        </CoachmarkContext.Provider>

        <CoachmarkStackHome
          ref={stackHomeRef}
          className={cx(
            // TODO: turn these into constants
            // These class names match the default "coachmark" class names
            `${pkg.prefix}--coachmark-overlay`,
            `${pkg.prefix}--coachmark-overlay__${theme}`,
            elementBlockClass,
            selectedItemNumber > 0 && `${elementBlockClass}--is-stacked`,
            selectedItemNumber > 0 &&
              `${elementBlockClass}--is-stacked__${theme}`,
            isOpen && `${elementBlockClass}--is-visible`
          )}
          description={description}
          media={media}
          navLinkLabels={navLinkLabels}
          onClickNavItem={handleClickNavItem}
          onClose={() => {
            handleClose(true);
          }}
          portalSelector={portalSelector}
          closeButtonLabel={closeButtonLabel}
          title={title}
        />

        {clonedChildren}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CoachmarkStack = pkg.checkComponentEnabled(CoachmarkStack, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkStack.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkStack.propTypes = {
  // TODO: UPDATE COMMENT HERE - UPDATE MDX TO HAVE DIRECTION TO USE ONLY OVERLAY ELEMENTS>
  // CoachmarkStack` requires two or more children of type `Coachmark`
  // `CoachmarkStack` only accepts children of type `Coachmark`

  /**
   * The CoachmarkStack should use one or many Coachmark components as children.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The label for the button that will close the Stack
   */
  closeButtonLabel: PropTypes.string,

  // PASS THROUGH TO COACHMARKSTACKHOME
  /**
   * The description of the Coachmark.
   */
  description: PropTypes.node.isRequired,

  /**
   * The object describing an image in one of two shapes.
   *
   * If a single media element is required, use `{render}`.
   *
   * If a stepped animation is required, use `{filePaths}`.
   *
   * @see {@link MEDIA_PROP_TYPE}.
   */
  media: PropTypes.oneOfType([
    PropTypes.shape({
      render: PropTypes.func,
    }),
    PropTypes.shape({
      filePaths: PropTypes.arrayOf(PropTypes.string),
    }),
  ]),

  /**
   * The labels used to link to the stackable Coachmarks.
   */
  navLinkLabels: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * Function to call when the CoachmarkStack closes.
   */
  onClose: PropTypes.func,

  /**
   * Where in the DOM to render the stack.
   * The default is `document.body`.
   */
  portalSelector: PropTypes.string,

  /**
   * The tagline title which will be fixed to the bottom right of the window and will serve as the display trigger.
   */
  tagline: PropTypes.string.isRequired,

  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),

  /**
   * The title of the Coachmark.
   */
  title: PropTypes.string.isRequired,
};
