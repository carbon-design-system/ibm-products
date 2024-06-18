/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
  ForwardedRef,
  MutableRefObject,
  RefObject,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { moderate02 } from '@carbon/motion';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { allPropTypes } from '../../global/js/utils/props-helper';

import { pkg } from '../../settings';
import { SIDE_PANEL_SIZES } from './constants';
import { useFocus, usePreviousValue } from '../../global/js/hooks';

// Carbon and package components we use.
import { Button, IconButton } from '@carbon/react';
import { Close, ArrowLeft } from '@carbon/react/icons';
import { ActionSet } from '../ActionSet';
import {
  overlayVariants,
  panelVariants,
  actionSetVariants,
} from './motion/variants';
import pconsole from '../../global/js/utils/pconsole';
import { ButtonProps } from '@carbon/react';

const blockClass = `${pkg.prefix}--side-panel`;
const componentName = 'SidePanel';

type SidePanelBaseProps = {
  /**
   * Sets the action toolbar buttons
   */
  actionToolbarButtons?: ButtonProps<any>[];

  /**
   * The primary actions to be shown in the side panel. Each action is
   * specified as an object that will render expressive Buttons. Any Button
   * props can be passed in and any other fields in the object will be
   * passed through to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions?: ButtonProps<any>[];

  /**
   * Determines if the title will animate on scroll
   */
  animateTitle?: boolean;

  /**
   * Sets the body content of the side panel
   */
  children: ReactNode;

  /**
   * Sets an optional className to be added to the side panel outermost element
   */
  className?: string;

  /**
   * Sets the close button icon description
   */
  closeIconDescription?: string;

  /**
   * Determines whether the side panel should render the condensed version (affects action buttons primarily)
   */
  condensedActions?: boolean;

  /**
   * Sets the current step of the side panel
   */
  currentStep?: number;

  /**
   * Unique identifier
   */
  id?: string;

  /**
   * Determines whether the side panel should render with an overlay
   */
  includeOverlay?: boolean;

  /**
   * Sets the label text which will display above the title text
   */
  labelText?: string;

  /**
   * Provide a ref to return focus to once the side panel is closed.
   */
  launcherButtonRef?: RefObject<any>;

  /**
   * Sets the icon description for the navigation back icon button
   */
  navigationBackIconDescription?: string;

  /**
   * Changes the current side panel page to the previous page
   */
  onNavigationBack?(): void;

  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onRequestClose?(): void;

  /**
   * Optional function called when the side panel exit animation is complete.
   * This handler can be used for any state cleanup needed before the panel is removed from the DOM.
   */
  onUnmount?(): void;

  /**
   * Determines whether the side panel should render or not
   */
  open: boolean;

  /**
   * Determines if the side panel is on the right or left
   */
  placement?: 'left' | 'right';

  /**
   * Prevent closing on click outside of the panel
   */
  preventCloseOnClickOutside?: boolean;

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent?: string;

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus?: string;

  /**
   * Sets the size of the side panel
   */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Determines if this panel slides in
   */
  slideIn?: boolean;

  /**
   *  **Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component
   */
  slug?: ReactNode;

  /**
   * Sets the subtitle text
   */
  subtitle?: ReactNode;

  /**
   * Sets the title text
   */
  title?: string;
};

type SidePanelSlideInProps =
  | {
      /**
       * Determines if this panel slides in
       */
      slideIn?: false;
      /**
       * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
       * This prop is required when using the `slideIn` variant of the side panel.
       */
      selectorPageContent?: string;
    }
  | {
      /**
       * Determines if this panel slides in
       */
      slideIn: true;
      /**
       * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
       * This prop is required when using the `slideIn` variant of the side panel. Required for slideIn panels.
       */
      selectorPageContent: string;
    };

type SidePanelProps = SidePanelBaseProps & SidePanelSlideInProps;

// `any` is a work around until ActionSet is migrated to TS
const MotionActionSet = motion(ActionSet);

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
      placement = defaults.placement as SidePanelProps['placement'],
      preventCloseOnClickOutside,
      selectorPageContent,
      selectorPrimaryFocus,
      size = defaults.size as SidePanelProps['size'],
      slideIn,
      slug,
      subtitle,
      title,
      launcherButtonRef,

      // Collect any other property values passed in.
      ...rest
    }: SidePanelProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const localRef = useRef<HTMLDivElement>(null);
    const sidePanelRef = ref || localRef;
    const overlayRef = useRef<HTMLDivElement>(null);
    const innerContentRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const animatedScrollRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const labelTextRef = useRef<HTMLParagraphElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const previousState = usePreviousValue({ size, open, currentStep });
    const [scrollAnimationDistance, setScrollAnimationDistance] = useState(-1);
    const [doAnimateTitle, setDoAnimateTitle] = useState(true);
    const { firstElement, keyDownListener } = useFocus(sidePanelRef);
    const panelRefValue = (sidePanelRef as MutableRefObject<HTMLDivElement>)
      .current;
    const previousOpen = usePreviousValue(open);

    const shouldReduceMotion = useReducedMotion();

    // Title animation on scroll related state
    const [labelTextHeight, setLabelTextHeight] = useState<any>(0);

    useEffect(() => {
      if (open && !titleRef?.current) {
        setDoAnimateTitle(false);
      } else {
        setDoAnimateTitle(animateTitle);
      }
    }, [animateTitle, open]);

    const titleItemsStyles = useCallback(
      (progress) => {
        if (subtitleRef?.current) {
          const subtitleEl = subtitleRef?.current;
          const height = subtitleEl?.clientHeight;
          const calculatedMargin = height * progress;

          subtitleEl?.style?.setProperty(
            'margin-top',
            `${-calculatedMargin}px`
          );
        }

        if (labelTextRef?.current) {
          const calculatedMargin = labelTextHeight * progress;

          labelTextRef?.current?.style?.setProperty(
            'margin-top',
            `${-calculatedMargin}px`
          );
        }
      },
      [labelTextHeight]
    );

    useEffect(() => {
      if (open && animateTitle && labelTextRef?.current) {
        setLabelTextHeight(Number(labelTextRef?.current?.clientHeight || null));
      }
    }, [animateTitle, labelTextRef, open]);

    const handleScroll = useCallback(() => {
      if (doAnimateTitle && innerContentRef?.current) {
        const scrollTop = innerContentRef?.current?.scrollTop;

        const animationProgress =
          Math.min(Number(scrollTop), scrollAnimationDistance) /
          scrollAnimationDistance;

        panelRefValue?.style.setProperty(
          `--${blockClass}--scroll-animation-progress`,
          animationProgress.toString()
        );

        titleItemsStyles(animationProgress);
      }
    }, [
      doAnimateTitle,
      panelRefValue?.style,
      scrollAnimationDistance,
      titleItemsStyles,
    ]);

    const reducedMotion =
      typeof document !== 'undefined' && window?.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : { matches: true };

    // scroll panel to top going between steps
    useEffect(() => {
      if (sidePanelRef && panelRefValue) {
        const scrollableSection =
          animatedScrollRef.current ?? innerContentRef.current;

        if (
          previousState &&
          previousState['currentStep'] !== currentStep &&
          scrollableSection
        ) {
          scrollableSection.scrollTop = 0;
        }

        // The size of the panel has changed while it is still opened
        // so we need to scroll it to the top and reset the header
        // height css custom property
        if (
          previousState &&
          previousState['size'] !== size &&
          scrollableSection
        ) {
          scrollableSection.scrollTop = 0;
        }
      }
    }, [currentStep, sidePanelRef, size, previousState, id, panelRefValue]);

    // Add console warning if labelText is provided without a title.
    // This combination is not allowed.
    useEffect(() => {
      if (!title && labelText) {
        console.warn(
          `${componentName}: The prop \`labelText\` was provided without a \`title\`. It is required to have a \`title\` when using the \`labelText\` prop.`
        );
      }
    }, [labelText, title]);

    useEffect(() => {
      if (previousOpen && !open && launcherButtonRef) {
        setTimeout(() => {
          launcherButtonRef?.current?.focus();
        }, 0);
      }
    }, [launcherButtonRef, open, previousOpen]);

    const checkSetDoAnimateTitle = () => {
      let canDoAnimateTitle = false;
      if (
        panelRefValue &&
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
        panelRefValue?.style.setProperty(
          `--${blockClass}--scroll-animation-distance`,
          scrollAnimationDistance.toString()
        );

        const scrollEl = innerContentRef.current;

        if (scrollEl) {
          const innerComputed = window?.getComputedStyle(
            innerContentRef.current as HTMLDivElement
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
      if (
        !doAnimateTitle &&
        (sidePanelRef as MutableRefObject<HTMLDivElement>).current
      ) {
        panelRefValue?.style.setProperty(
          `--${blockClass}--scroll-animation-progress`,
          '0'
        );
      }
    }, [
      doAnimateTitle,
      handleScroll,
      sidePanelRef,
      innerContentRef,
      open,
      panelRefValue?.style,
    ]);

    // Calculate scroll distances
    useEffect(() => {
      if (
        panelRefValue &&
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
    ]);

    // click outside functionality if `includeOverlay` prop is set
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          panelRefValue &&
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
      panelRefValue,
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
        const pageContentElement = selectorPageContent
          ? (document.querySelector(selectorPageContent) as HTMLElement)
          : null;
        if (placement && placement === 'right' && pageContentElement) {
          pageContentElement.style.marginInlineEnd = '0';
        } else if (pageContentElement) {
          pageContentElement.style.marginInlineStart = '0';
        }
      }
    }, [open, placement, selectorPageContent, slideIn]);

    useEffect(() => {
      if (
        !open &&
        previousState &&
        previousState['open'] &&
        reducedMotion.matches
      ) {
        onUnmount?.();
      }
    }, [open, onUnmount, reducedMotion.matches, previousState]);

    // used to set margins of content for slide in panel version
    useEffect(() => {
      if (open && slideIn) {
        const pageContentElement = selectorPageContent
          ? (document.querySelector(selectorPageContent) as HTMLElement)
          : null;
        if (pageContentElement) {
          pageContentElement.style.inlineSize = 'auto';
        } else {
          pconsole.warn(
            'SidePanel prop `selectorPageContent` was not provided a selector that matches any element on your page. If an element is not found, the panel will render as a slide over.'
          );
        }
        if (placement && placement === 'right' && pageContentElement) {
          pageContentElement.style.marginInlineEnd = '0';
          pageContentElement.style.transition = !reducedMotion.matches
            ? `margin-inline-end ${moderate02}`
            : '';
          pageContentElement.style.marginInlineEnd = SIDE_PANEL_SIZES[size];
        } else if (pageContentElement) {
          pageContentElement.style.marginInlineStart = '0';
          pageContentElement.style.transition = !reducedMotion.matches
            ? `margin-inline-start ${moderate02}`
            : '';
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

    useEffect(() => {
      if (open) {
        setTimeout(() => {
          if (selectorPrimaryFocus) {
            const primeFocusEl = document?.querySelector(selectorPrimaryFocus);
            if (primeFocusEl) {
              (primeFocusEl as HTMLElement)?.focus();
            }
          } else if (!slideIn) {
            firstElement?.focus();
          }
        }, 0);
      }
    }, [animationComplete, firstElement, open, selectorPrimaryFocus, slideIn]);

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
      const slugCloseSize =
        actions && actions.length && /l/.test(size) ? 'md' : 'sm';
      let normalizedSlug;
      if (slug && slug['type']?.displayName === 'Slug') {
        normalizedSlug = React.cloneElement(slug as React.ReactElement<any>, {
          // slug size is sm unless actions and size > md
          size: slugCloseSize,
        });
      }

      return (
        <div
          className={cx(`${blockClass}__header`, {
            [`${blockClass}__header--on-detail-step`]: currentStep > 0,
            [`${blockClass}__header--no-title-animation`]: !animateTitle,
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
            <IconButton
              className={`${blockClass}__close-button`}
              label={closeIconDescription}
              onClick={onRequestClose}
              title={closeIconDescription}
              aria-label={closeIconDescription}
              ref={closeRef}
              align="left"
            >
              <Close
                size={20}
                aria-hidden="true"
                tabIndex="-1"
                className={`${blockClass}--btn__icon`}
              />
            </IconButton>
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
                  hasIconOnly = false,
                  icon,
                  renderIcon,
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
                    renderIcon={renderIcon || icon}
                    iconDescription={label}
                    {...(hasIconOnly && {
                      tooltipPosition: tooltipPosition || 'bottom',
                      tooltipAlignment: tooltipAlignment || 'start',
                    })}
                    hasIconOnly={hasIconOnly}
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
          onScroll={handleScroll}
          className={cx(
            `${blockClass}__inner-content`,
            `${blockClass}--scrolls`,
            `${
              !doAnimateTitle
                ? `${blockClass}__inner-content--no-animated-title`
                : ''
            }`
          )}
        >
          {children}
        </div>
      );
    };

    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              {...getDevtoolsProps(componentName)}
              {...rest}
              id={id}
              className={mainPanelClassNames}
              ref={sidePanelRef}
              role="complementary"
              aria-label={title}
              onAnimationComplete={onAnimationEnd}
              onAnimationStart={onAnimationStart}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={{ placement, shouldReduceMotion }}
              onKeyDown={slideIn ? undefined : keyDownListener}
            >
              <>
                {/* header */}
                {renderHeader()}

                {/* main */}
                {renderMain()}
              </>

              {/* footer */}
              <MotionActionSet
                actions={actions ?? []}
                className={primaryActionContainerClassNames}
                size={size === 'xs' ? 'sm' : size}
                custom={shouldReduceMotion}
                variants={actionSetVariants}
              />
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
  /**@ts-ignore */
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
    /**@ts-ignore*/
    ActionSet.validateActions(),
    PropTypes.arrayOf(
      PropTypes.shape({
        /**@ts-ignore */
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
        /**@ts-ignore */
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
   * Provide a ref to return focus to once the modal is closed.
   */
  /**@ts-ignore */
  launcherButtonRef: PropTypes.any,

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
  /**@ts-ignore*/
  selectorPageContent: PropTypes.string.isRequired.if(({ slideIn }) => slideIn),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  /**@ts-ignore*/
  selectorPrimaryFocus: PropTypes.string,

  /**
   * Sets the size of the side panel
   */
  /**@ts-ignore*/
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),

  /**
   * Determines if this panel slides in
   */
  /**@ts-ignore*/
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
  /**@ts-ignore*/
  title: PropTypes.string.isRequired.if(({ labelText }) => labelText),
};

SidePanel.displayName = componentName;
