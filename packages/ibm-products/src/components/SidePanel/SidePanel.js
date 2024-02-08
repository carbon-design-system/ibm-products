/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';
import { moderate02 } from '@carbon/motion';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { allPropTypes } from '../../global/js/utils/props-helper';

import wrapFocus from '../../global/js/utils/wrapFocus';
import { pkg } from '../../settings';
import { SIDE_PANEL_SIZES } from './constants';
import { usePreviousValue } from '../../global/js/hooks';

// Carbon and package components we use.
import { Button } from '@carbon/react';
import { Close, ArrowLeft } from '@carbon/react/icons';
import { ActionSet } from '../ActionSet';
import { overlayVariants, panelVariants } from './motion/variants';
import pconsole from '../../global/js/utils/pconsole';

const blockClass = `${pkg.prefix}--side-panel`;
const componentName = 'SidePanel';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  animateTitle: true,
  closeIconDescription: 'Close',
  currentStep: 0,
  navigationBackIconDescription: 'Back',
  placement: 'right',
  size: 'md',
};

/**
 * Side panels keep users in-context of a page while performing tasks like navigating, editing, viewing details, or configuring something new.
 */
export let SidePanel = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      actionToolbarButtons,
      actions,
      animateTitle = defaults.animateTitle,
      children,
      className,
      closeIconDescription = defaults.closeIconDescription,
      condensedActions,
      currentStep = defaults.currentStep,
      id = blockClass,
      includeOverlay,
      labelText,
      navigationBackIconDescription = defaults.navigationBackIconDescription,
      onNavigationBack,
      onRequestClose,
      onUnmount,
      open,
      placement = defaults.placement,
      preventCloseOnClickOutside,
      selectorPageContent,
      selectorPrimaryFocus,
      size = defaults.size,
      slideIn,
      slug,
      subtitle,
      title,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const localRef = useRef();
    const sidePanelRef = ref || localRef;
    const overlayRef = useRef();
    const startTrapRef = useRef();
    const endTrapRef = useRef();
    const innerContentRef = useRef();
    const closeRef = useRef();
    const animatedScrollRef = useRef();
    const headerRef = useRef();
    const titleRef = useRef();
    const labelTextRef = useRef();
    const subtitleRef = useRef();
    const previousState = usePreviousValue({ size, open });
    const [scrollAnimationDistance, setScrollAnimationDistance] = useState(-1);
    const [doAnimateTitle, setDoAnimateTitle] = useState(true);

    useEffect(() => {
      setDoAnimateTitle(animateTitle);
    }, [animateTitle]);

    const handleScroll = useCallback(() => {
      const scrollTop = animatedScrollRef.current.scrollTop;

      sidePanelRef.current.style.setProperty(
        `--${blockClass}--scroll-animation-progress`,
        Math.min(scrollTop, scrollAnimationDistance) / scrollAnimationDistance
      );
    }, [scrollAnimationDistance, sidePanelRef]);

    const reducedMotion =
      typeof window !== 'undefined' && window?.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : { matches: true };

    // scroll panel to top going between steps
    useEffect(() => {
      if (sidePanelRef && sidePanelRef.current) {
        const scrollableSection =
          animatedScrollRef.current ?? innerContentRef.current;

        scrollableSection.scrollTop = 0;
        // The size of the panel has changed while it is still opened
        // so we need to scroll it to the top and reset the header
        // height css custom property
        if (previousState?.size !== size) {
          scrollableSection.scrollTop = 0;
        }
      }
    }, [currentStep, sidePanelRef, size, previousState?.size, id]);

    // set initial focus when side panel opens
    useEffect(() => {
      const initialFocus = (focusContainerElement) => {
        const containerElement = focusContainerElement;
        const primaryFocusElement =
          containerElement &&
          containerElement.querySelector(selectorPrimaryFocus);

        if (primaryFocusElement) {
          return primaryFocusElement;
        } else {
          return closeRef && closeRef.current;
        }
      };

      const focusButton = (focusContainerElement) => {
        const target = initialFocus(focusContainerElement);
        target?.focus();
      };
      if (open && animationComplete) {
        focusButton(innerContentRef.current);
      }
    }, [selectorPrimaryFocus, open, animationComplete]);

    // Add console warning if labelText is provided without a title.
    // This combination is not allowed.
    useEffect(() => {
      if (!title && labelText) {
        console.warn(
          `${componentName}: The prop \`labelText\` was provided without a \`title\`. It is required to have a \`title\` when using the \`labelText\` prop.`
        );
      }
    }, [labelText, title]);

    const checkSetDoAnimateTitle = () => {
      let canDoAnimateTitle = false;
      if (
        sidePanelRef?.current &&
        open &&
        animateTitle &&
        animationComplete &&
        titleRef?.current &&
        title &&
        title.length &&
        !reducedMotion.matches
      ) {
        const titleEl = titleRef.current;
        const labelHeight = labelTextRef?.current?.offsetHeight ?? 0;
        const subtitleHeight = subtitleRef?.current?.offsetHeight ?? 0;

        // Adjusts space at bottom of titles by changing where scrolling finishes
        // Styles use border to save use of get computed style
        const titleVerticalBorder = actionToolbarButtons
          ? titleEl.offsetHeight - titleEl.clientHeight
          : 0;

        const scrollAnimationDistance =
          labelHeight + subtitleHeight + titleVerticalBorder;
        setScrollAnimationDistance(scrollAnimationDistance);

        // used to calculate the header moves
        sidePanelRef.current.style.setProperty(
          `--${blockClass}--scroll-animation-distance`,
          scrollAnimationDistance
        );

        let scrollEl = animatedScrollRef.current;

        if (!scrollEl && animateTitle && !doAnimateTitle) {
          // may be switching back based on resize
          scrollEl = innerContentRef.current;
        }

        if (scrollEl) {
          const innerComputed = window?.getComputedStyle(
            innerContentRef.current
          );
          const innerPaddingHeight = innerComputed
            ? parseFloat(innerComputed?.paddingTop) +
              parseFloat(innerComputed?.paddingBottom)
            : 0;

          canDoAnimateTitle =
            (!!labelText || !!actionToolbarButtons || !!subtitle) &&
            scrollEl.scrollHeight - scrollEl.clientHeight >=
              scrollAnimationDistance + innerPaddingHeight;
        }
      }
      if (doAnimateTitle !== canDoAnimateTitle) {
        // will need updating on resize
        setDoAnimateTitle(canDoAnimateTitle);
      }
    };

    useEffect(() => {
      if (doAnimateTitle && animatedScrollRef.current) {
        // only add scroll if the doAnimateTitle is already true
        // should come back through if false and canDoAnimateTitle is true
        animatedScrollRef.current.addEventListener('scroll', handleScroll);
      }

      if (!doAnimateTitle && sidePanelRef.current) {
        sidePanelRef.current.style.setProperty(
          `--${blockClass}--scroll-animation-progress`,
          0
        );
      }
    }, [animatedScrollRef, doAnimateTitle, handleScroll, sidePanelRef]);

    /* istanbul ignore next */
    const handleResize = () => {
      checkSetDoAnimateTitle();
    };

    // Calculate scroll distances
    useEffect(() => {
      if (
        sidePanelRef?.current &&
        open &&
        animateTitle &&
        animationComplete &&
        titleRef?.current &&
        title &&
        title.length &&
        !reducedMotion.matches
      ) {
        checkSetDoAnimateTitle();
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      open,
      doAnimateTitle /* use do instead of animateTitle directly */,
      animationComplete,
      handleScroll,
      title,
      size,
      reducedMotion.matches,
      id,
      animatedScrollRef.current,
    ]);

    // click outside functionality if `includeOverlay` prop is set
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          sidePanelRef.current &&
          overlayRef.current &&
          overlayRef.current.contains(event.target) &&
          onRequestClose
        ) {
          onRequestClose();
        }
      };
      const bodyElement = document.body;
      if (includeOverlay && open) {
        bodyElement.style.overflow = 'hidden';
      } else if (includeOverlay && !open) {
        bodyElement.style.overflow = '';
      }
      if (includeOverlay && !preventCloseOnClickOutside) {
        document.addEventListener('click', handleOutsideClick);
      }
      return () => {
        const bodyElement = document.body;
        bodyElement.style.overflow = '';
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [
      includeOverlay,
      onRequestClose,
      open,
      preventCloseOnClickOutside,
      onUnmount,
      sidePanelRef,
    ]);

    // initializes the side panel to close
    const onAnimationEnd = () => {
      if (!open) {
        onUnmount?.();
      }
      setAnimationComplete(true);
    };

    // Set the internal state `animationComplete` to true if
    // prefers reduced motion is true
    useEffect(() => {
      if (reducedMotion.matches) {
        setAnimationComplete(true);
      }
    }, [reducedMotion.matches]);

    // initializes the side panel to open
    const onAnimationStart = () => {
      setAnimationComplete(false);
    };

    // used to reset margins of the slide in panel when closed/closing
    useEffect(() => {
      if (!open && slideIn) {
        const pageContentElement = document.querySelector(selectorPageContent);
        if (placement && placement === 'right' && pageContentElement) {
          pageContentElement.style.marginInlineEnd = 0;
        } else if (pageContentElement) {
          pageContentElement.style.marginInlineStart = 0;
        }
      }
    }, [open, placement, selectorPageContent, slideIn]);

    useEffect(() => {
      if (!open && previousState?.open && reducedMotion.matches) {
        onUnmount?.();
      }
    }, [open, onUnmount, reducedMotion.matches, previousState?.open]);

    // used to set margins of content for slide in panel version
    useEffect(() => {
      if (open && slideIn) {
        const pageContentElement = document.querySelector(selectorPageContent);
        if (pageContentElement) {
          pageContentElement.style.inlineSize = 'auto';
        } else {
          pconsole.warn(
            'SidePanel prop `selectorPageContent` was not provided a selector that matches any element on your page. If an element is not found, the panel will render as a slide over.'
          );
        }
        if (placement && placement === 'right' && pageContentElement) {
          pageContentElement.style.marginInlineEnd = 0;
          pageContentElement.style.transition = !reducedMotion.matches
            ? `margin-inline-end ${moderate02}`
            : null;
          pageContentElement.style.marginInlineEnd = SIDE_PANEL_SIZES[size];
        } else if (pageContentElement) {
          pageContentElement.style.marginInlineStart = 0;
          pageContentElement.style.transition = !reducedMotion.matches
            ? `margin-inline-start ${moderate02}`
            : null;
          pageContentElement.style.marginInlineStart = SIDE_PANEL_SIZES[size];
        }
      }
    }, [
      slideIn,
      selectorPageContent,
      placement,
      size,
      reducedMotion.matches,
      open,
    ]);

    // adds focus trap functionality
    /* istanbul ignore next */
    const handleBlur = ({
      target: oldActiveNode,
      relatedTarget: currentActiveNode,
    }) => {
      // focus trap should only be set if the side panel is a `slideOver` type
      if (open && innerContentRef && !slideIn) {
        wrapFocus({
          bodyNode: innerContentRef.current,
          startTrapRef,
          endTrapRef,
          currentActiveNode,
          oldActiveNode,
        });
      }
    };

    const primaryActionContainerClassNames = cx([
      `${blockClass}__actions-container`,
      {
        [`${blockClass}__actions-container--condensed`]: condensedActions,
      },
    ]);

    const mainPanelClassNames = cx([
      blockClass,
      className,
      `${blockClass}`,
      `${blockClass}--${size}`,
      {
        [`${blockClass}--right-placement`]: placement === 'right',
        [`${blockClass}--left-placement`]: placement === 'left',
        [`${blockClass}--slide-in`]: slideIn,
        [`${blockClass}--has-slug`]: slug,
        [`${blockClass}--condensed-actions`]: condensedActions,
        [`${blockClass}--animated-title`]: doAnimateTitle,
        [`${blockClass}--has-overlay`]: includeOverlay,
      },
    ]);

    const renderTitle = () => (
      <div
        className={cx(`${blockClass}__title`, {
          [`${blockClass}__title--no-label`]: !labelTextRef.current,
        })}
        ref={titleRef}
      >
        <h2
          className={`${blockClass}__title-text`}
          title={title}
          aria-hidden={false}
        >
          {title}
        </h2>

        {doAnimateTitle && !reducedMotion.matches && (
          <h2
            className={`${blockClass}__collapsed-title-text`}
            title={title}
            aria-hidden={true}
          >
            {title}
          </h2>
        )}
      </div>
    );

    const renderHeader = () => {
      let slugCloseSize =
        actions && actions.length && /l/.test(size) ? 'md' : 'sm';
      let normalizedSlug;
      if (slug && slug?.type?.displayName === 'Slug') {
        normalizedSlug = React.cloneElement(slug, {
          // slug size is sm unless actions and size > md
          size: slugCloseSize,
        });
      }

      return (
        <div
          className={cx(`${blockClass}__header`, {
            [`${blockClass}__header--on-detail-step`]: currentStep > 0,
            [`${blockClass}__header--no-title-animation`]: !doAnimateTitle,
            [`${blockClass}__header--reduced-motion`]: reducedMotion.matches,
            [`${blockClass}__header--has-title`]: title,
          })}
          ref={headerRef}
        >
          {/* back button */}
          {currentStep > 0 && (
            <Button
              aria-label={navigationBackIconDescription}
              kind="ghost"
              size={slugCloseSize}
              disabled={false}
              renderIcon={(props) => <ArrowLeft size={20} {...props} />}
              iconDescription={navigationBackIconDescription}
              className={`${blockClass}__navigation-back-button`}
              onClick={onNavigationBack}
            />
          )}
          {/* label */}
          {title && title.length && labelText && labelText.length && (
            <p className={`${blockClass}__label-text`} ref={labelTextRef}>
              {labelText}
            </p>
          )}
          {/* title */}
          {title && title.length && renderTitle()}
          {/* slug and close */}
          <div className={`${blockClass}__slug-and-close`}>
            {normalizedSlug}
            <Button
              aria-label={closeIconDescription}
              kind="ghost"
              size={slugCloseSize}
              renderIcon={(props) => <Close size={20} {...props} />}
              iconDescription={closeIconDescription}
              className={`${blockClass}__close-button`}
              onClick={onRequestClose}
              ref={closeRef}
            />
          </div>
          {/* subtitle */}
          {subtitle && (
            <p
              className={cx(`${blockClass}__subtitle-text`, {
                [`${blockClass}__subtitle-text-no-animation-no-action-toolbar`]:
                  !doAnimateTitle &&
                  (!actionToolbarButtons || !actionToolbarButtons.length),
              })}
              ref={subtitleRef}
            >
              {subtitle}
            </p>
          )}
          {/* action toolbar */}
          {actionToolbarButtons && actionToolbarButtons.length && (
            <div className={`${blockClass}__action-toolbar`}>
              {actionToolbarButtons.map(
                ({
                  label,
                  kind,
                  icon,
                  tooltipPosition,
                  tooltipAlignment,
                  leading,
                  disabled,
                  className,
                  onClick,
                  ...rest
                }) => (
                  <Button
                    {...rest}
                    key={label}
                    kind={kind || 'ghost'}
                    size="sm"
                    renderIcon={icon}
                    iconDescription={label}
                    tooltipPosition={tooltipPosition || 'bottom'}
                    tooltipAlignment={tooltipAlignment || 'start'}
                    hasIconOnly={!leading}
                    disabled={disabled}
                    className={cx([
                      `${blockClass}__action-toolbar-button`,
                      className,
                      {
                        [`${blockClass}__action-toolbar-leading-button`]:
                          leading,
                      },
                    ])}
                    onClick={onClick}
                  >
                    {leading && label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      );
    };

    const renderMain = () => {
      return (
        <div
          ref={innerContentRef}
          className={cx(`${blockClass}__inner-content`, {
            [`${blockClass}--scrolls`]: !doAnimateTitle,
          })}
        >
          {children}
        </div>
      );
    };

    useResizeObserver(sidePanelRef, handleResize, [open]);

    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              {...getDevtoolsProps(componentName)}
              {...rest}
              id={id}
              className={mainPanelClassNames}
              onBlur={handleBlur}
              ref={sidePanelRef}
              role="complementary"
              aria-label={title}
              onAnimationComplete={onAnimationEnd}
              onAnimationStart={(event) => onAnimationStart(event)}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={placement}
            >
              <span
                ref={startTrapRef}
                tabIndex="0"
                role="link"
                className={`${blockClass}__visually-hidden`}
              >
                Focus sentinel
              </span>

              {doAnimateTitle ? (
                <div
                  ref={animatedScrollRef}
                  className={`${blockClass}__animated-scroll-wrapper ${blockClass}--scrolls`}
                >
                  {/* header */}
                  {renderHeader()}

                  {/* main */}
                  {renderMain()}
                </div>
              ) : (
                <>
                  {/* header */}
                  {renderHeader()}

                  {/* main */}
                  {renderMain()}
                </>
              )}

              {/* footer */}
              <ActionSet
                actions={actions}
                className={primaryActionContainerClassNames}
                size={size === 'xs' ? 'sm' : size}
              />

              <span
                ref={endTrapRef}
                tabIndex="0"
                role="link"
                className={`${blockClass}__visually-hidden`}
              >
                Focus sentinel
              </span>
            </motion.div>
            <AnimatePresence>
              {includeOverlay && (
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  ref={overlayRef}
                  className={`${blockClass}__overlay`}
                />
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
SidePanel = pkg.checkComponentEnabled(SidePanel, componentName);

SidePanel.propTypes = {
  /**
   * Sets the action toolbar buttons
   */
  actionToolbarButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      leading: PropTypes.bool,
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
      onClick: PropTypes.func,
      kind: PropTypes.oneOf(['ghost', 'tertiary', 'secondary', 'primary']),
      tooltipAlignment: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
      tooltipPosition: PropTypes.oneOf(['start', 'center', 'end']),
    })
  ),

  /**
   * The primary actions to be shown in the side panel. Each action is
   * specified as an object with optional fields: 'label' to supply the button
   * label, 'kind' to select the button kind (must be 'primary', 'secondary' or
   * 'ghost'), 'tooltipPosition' to select where the tooltip is placed around
   * the button (must be 'top', 'right', 'bottom', or 'left'), 'tooltipAlignment'
   * to select how the tooltip is aligned with the button (must be 'start',
   * 'center', or 'end', 'loading' to display a loading indicator, and 'onClick' to
   * receive notifications when the button is clicked. Additional fields in the
   * object will be passed to the Button component, and these can include
   * 'disabled', 'ref', 'className', and any other Button props. Any other
   * fields in the object will be passed through to the button element as HTML
   * attributes.
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
        tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        tooltipAlignment: PropTypes.oneOf(['start', 'center', 'end']),
        label: PropTypes.string,
        loading: PropTypes.bool,
        // we duplicate this Button prop to improve the DocGen here
        onClick: Button.propTypes.onClick,
      })
    ),
  ]),

  /**
   * Determines if the title will animate on scroll
   */
  animateTitle: PropTypes.bool,

  /**
   * Sets the body content of the side panel
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /**
   * Sets an optional className to be added to the side panel outermost element
   */
  className: PropTypes.string,

  /**
   * Sets the close button icon description
   */
  closeIconDescription: PropTypes.string,

  /**
   * Determines whether the side panel should render the condensed version (affects action buttons primarily)
   */
  condensedActions: PropTypes.bool,

  /**
   * Sets the current step of the side panel
   */
  currentStep: PropTypes.number,

  /**
   * Unique identifier
   */
  id: PropTypes.string,

  /**
   * Determines whether the side panel should render with an overlay
   */
  includeOverlay: PropTypes.bool,

  /**
   * Sets the label text which will display above the title text
   */
  labelText: PropTypes.string,

  /**
   * Sets the icon description for the navigation back icon button
   */
  navigationBackIconDescription: PropTypes.string,

  /**
   * Changes the current side panel page to the previous page
   */
  onNavigationBack: PropTypes.func,

  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onRequestClose: PropTypes.func,

  /**
   * Optional function called when the side panel exit animation is complete.
   * This handler can be used for any state cleanup needed before the panel is removed from the DOM.
   */
  onUnmount: PropTypes.func,

  /**
   * Determines whether the side panel should render or not
   */
  open: PropTypes.bool.isRequired,

  /**
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),

  /**
   * Prevent closing on click outside of the panel
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: PropTypes.string.isRequired.if(({ slideIn }) => slideIn),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus: PropTypes.string,

  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', '2xl']),

  /**
   * Determines if this panel slides in
   */
  slideIn: PropTypes.bool,

  /**
   *  **Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component
   */
  slug: PropTypes.node,

  /**
   * Sets the subtitle text
   */
  subtitle: PropTypes.node,

  /**
   * Sets the title text
   */
  title: PropTypes.string.isRequired.if(({ labelText }) => labelText),
};

SidePanel.displayName = componentName;
