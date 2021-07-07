/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useEffect, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { pkg } from '../../settings';
import { allPropTypes } from '../../global/js/utils/props-helper';
import { SIDE_PANEL_SIZES } from './constants';
import { deprecateProp } from '../../global/js/utils/props-helper';

// Carbon and package components we use.
import { Button } from 'carbon-components-react';
import { Close20, ArrowLeft20 } from '@carbon/icons-react';
import { ActionSet } from '../ActionSet';

const blockClass = `${pkg.prefix}--side-panel`;
const componentName = 'SidePanel';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * Side panels keep users in-context of a page while performing tasks like navigating, editing, viewing details, or configuring something new.
 */
export let SidePanel = React.forwardRef(
  (
    {
      actionToolbarButtons,
      actions,
      animateTitle,
      children,
      className,
      closeIconDescription,
      condensedActions,
      currentStep,
      includeOverlay,
      labelText,
      navigationBackIconDescription,
      onNavigationBack,
      onRequestClose,
      onUnmount,
      open,
      pageContentSelector,
      placement,
      selectorPageContent,
      selectorPrimaryFocus,
      size,
      slideIn,
      subtitle,
      title,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [shouldRender, setRender] = useState(open);
    const [animationComplete, setAnimationComplete] = useState(false);
    const sidePanelRef = useRef();
    const sidePanelOverlayRef = useRef();
    const startTrapRef = useRef();
    const endTrapRef = useRef();
    const sidePanelInnerRef = useRef();
    const sidePanelCloseRef = useRef();

    // scroll panel to top going between steps
    useEffect(() => {
      const panelRef = ref || sidePanelRef;
      if (panelRef && panelRef.current) {
        panelRef.current.scrollTop = 0;
      }
    }, [currentStep, ref]);

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
          return sidePanelCloseRef && sidePanelCloseRef.current;
        }
      };

      const focusButton = (focusContainerElement) => {
        const target = initialFocus(focusContainerElement);
        target?.focus();
      };
      if (open && animationComplete) {
        focusButton(sidePanelInnerRef.current);
      }
    }, [selectorPrimaryFocus, open, animationComplete]);

    useEffect(() => {
      if (open && actions && actions.length && animationComplete) {
        const sidePanelOuter = document.querySelector(`#${blockClass}-outer`);
        const actionsContainer = getActionsContainerElement();
        let actionsHeight = actionsContainer?.offsetHeight + 16; // add additional 1rem spacing to bottom padding
        actionsHeight = `${Math.round(actionsHeight / 16)}rem`;
        sidePanelOuter?.style.setProperty(
          `--${blockClass}--content-bottom-padding`,
          actionsHeight
        );
      }
    }, [actions, condensedActions, open, animationComplete]);

    /* istanbul ignore next */
    const handleResize = () => {
      const sidePanelOuter = document.querySelector(`#${blockClass}-outer`);
      const actionsContainer = getActionsContainerElement();
      let actionsHeight = actionsContainer.offsetHeight + 16; // add additional 1rem spacing to bottom padding
      actionsHeight = `${Math.round(actionsHeight / 16)}rem`;
      sidePanelOuter.style.setProperty(
        `--${blockClass}--content-bottom-padding`,
        actionsHeight
      );
    };

    const getActionsContainerElement = () => {
      const sidePanelOuter = document.querySelector(`#${blockClass}-outer`);
      return (
        sidePanelOuter &&
        sidePanelOuter.querySelector(`.${blockClass}__actions-container`)
      );
    };

    // Title and subtitle scroll animaton
    useEffect(() => {
      if (open && animateTitle && animationComplete) {
        const sidePanelOuter = document.querySelector(`#${blockClass}-outer`);
        const sidePanelTitleElement = document.querySelector(
          `.${blockClass}__title-text`
        );
        const sidePanelCollapsedTitleElement = document.querySelector(
          `.${blockClass}__collapsed-title-text`
        );
        const sidePanelSubtitleElement = document.querySelector(
          `.${`${blockClass}__subtitle-text`}`
        );
        let sidePanelSubtitleElementHeight =
          sidePanelSubtitleElement?.offsetHeight || 0; // set default subtitle height if a subtitle is not provided to enable scrolling animation

        const panelOuterHeight = sidePanelOuter?.offsetHeight;
        const scrollSectionHeight = document.querySelector(
          `.${blockClass}__body-content`
        )?.offsetHeight;
        const titleHeight = document.querySelector(
          `.${blockClass}__title-container`
        )?.offsetHeight;
        const totalScrollingContentHeight =
          titleHeight + sidePanelSubtitleElementHeight + scrollSectionHeight;
        // if the difference between the total scrolling height and the panel height is less than
        // the subtitleElement height OR if the subtitle element height is 0, use that difference
        // as the length of the scroll animation (otherwise the animation will not be able to complete
        // because there is not enough scrolling distance to complete it).
        sidePanelSubtitleElementHeight =
          totalScrollingContentHeight - panelOuterHeight <
            sidePanelSubtitleElementHeight ||
          sidePanelSubtitleElementHeight === 0
            ? totalScrollingContentHeight - panelOuterHeight
            : sidePanelSubtitleElementHeight;
        /* istanbul ignore next */
        sidePanelOuter &&
          sidePanelOuter.addEventListener('scroll', () => {
            const scrollTop = sidePanelRef.current.scrollTop;
            // if scrolling has occured
            if (scrollTop > 0) {
              sidePanelOuter.classList.add(
                `${blockClass}__with-condensed-header`
              );
              // Set subtitle opacity calculation here
              // as scroll progresses
              let titleOpacity = Math.min(
                1,
                (sidePanelSubtitleElementHeight - scrollTop) /
                  sidePanelSubtitleElementHeight
              );
              titleOpacity = titleOpacity < 0 ? 0 : titleOpacity;
              sidePanelOuter.style.setProperty(
                `--${blockClass}--subtitle-opacity`,
                titleOpacity
              );

              // Calculate divider opacity to avoid border
              // abruptly appearing when scrolling starts.
              // This approach uses a pseudo element and sets
              // the opacity as scroll progresses.
              let dividerOpacity = Math.min(
                scrollTop / sidePanelSubtitleElementHeight,
                1
              );
              sidePanelOuter.style.setProperty(
                `--${blockClass}--divider-opacity`,
                `${Math.min(1, dividerOpacity)}`
              );

              // We need to know the height of the title element
              // so that we know how far to place the action toolbar
              // from the top since it is sticky
              const titleHeight = Math.max(sidePanelTitleElement.offsetHeight);
              sidePanelOuter.style.setProperty(
                `--${blockClass}--title-height`,
                `${titleHeight + 16}px`
              );

              // Set title y positioning
              const titleYPosition = Math.min(
                scrollTop / sidePanelSubtitleElementHeight,
                1
              );
              sidePanelOuter.style.setProperty(
                `--${blockClass}--title-y-position`,
                `${-Math.abs(titleYPosition)}rem`
              );

              // mark title with aria-hidden={true} if opacity reaches 0
              if (titleOpacity === 0) {
                sidePanelTitleElement.setAttribute('aria-hidden', 'true');
                sidePanelCollapsedTitleElement.setAttribute(
                  'aria-hidden',
                  'false'
                );
              }

              // Set collapsed title y positioning
              let collapsedTitleYPosition = Math.min(
                1,
                (sidePanelSubtitleElementHeight - scrollTop) /
                  sidePanelSubtitleElementHeight
              );
              collapsedTitleYPosition =
                collapsedTitleYPosition < 0 ? 0 : collapsedTitleYPosition;
              sidePanelOuter.style.setProperty(
                `--${blockClass}--collapsed-title-y-position`,
                `${collapsedTitleYPosition}rem`
              );
            } else {
              sidePanelTitleElement.setAttribute('aria-hidden', 'false');
              sidePanelCollapsedTitleElement.setAttribute(
                'aria-hidden',
                'true'
              );
              sidePanelOuter.classList.remove(
                `${blockClass}__with-condensed-header`
              );
              sidePanelOuter.style.setProperty(
                `--${blockClass}--subtitle-opacity`,
                1
              );
              sidePanelOuter.style.setProperty(
                `--${blockClass}--title-y-position`,
                0
              );
              sidePanelOuter.style.setProperty(
                `--${blockClass}--divider-opacity`,
                0
              );
              sidePanelOuter.style.setProperty(
                `--${blockClass}--collapsed-title-y-position`,
                `1rem`
              );
            }
          });
      }
      if (open && shouldRender && !animateTitle) {
        const sidePanelOuter = document.querySelector(`#${blockClass}-outer`);
        const sidePanelTitleElement = document.querySelector(
          `.${blockClass}__title-container > .${blockClass}__title-text`
        );
        const sidePanelSubtitleElement = document.querySelector(
          `.${blockClass}__subtitle-text`
        );
        const sidePanelSubtitleElementHeight =
          sidePanelSubtitleElement?.offsetHeight || 0;
        const titleHeight = sidePanelTitleElement?.offsetHeight + 24;
        sidePanelOuter?.style.setProperty(
          `--${blockClass}--title-container-height`,
          `${titleHeight}px`
        );
        sidePanelOuter?.style.setProperty(
          `--${blockClass}--subtitle-container-height`,
          `${sidePanelSubtitleElementHeight}px`
        );
      }
    }, [open, animateTitle, animationComplete, shouldRender]);

    // click outside functionality if `includeOverlay` prop is set
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (
          sidePanelRef.current &&
          sidePanelOverlayRef.current &&
          sidePanelOverlayRef.current.contains(e.target) &&
          onRequestClose
        ) {
          onRequestClose();
        }
      };
      if (includeOverlay) {
        document.addEventListener('click', handleOutsideClick);
      }
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [includeOverlay, onRequestClose, open]);

    // initialize the side panel to open
    useEffect(() => {
      if (open) {
        setRender(true);
      }
    }, [open]);

    // initialize the side panel to close
    const onAnimationEnd = () => {
      if (!open) {
        onUnmount && onUnmount();
        setRender(false);
      }
      sidePanelRef.current.style.overflow = 'auto';
      sidePanelRef.current.style.overflowX = 'hidden';
      setAnimationComplete(true);
    };

    // initializes the side panel to open and prevents the side panel from being scrolled during animation
    const onAnimationStart = () => {
      sidePanelRef.current.style.overflow = 'hidden';
      setAnimationComplete(false);
    };

    // used to reset margins of the slide in panel when closed/closing
    useEffect(() => {
      if (!open && slideIn) {
        const pageContentElement = document.querySelector(
          selectorPageContent || pageContentSelector
        );
        if (placement && placement === 'right') {
          pageContentElement.style.marginRight = 0;
        } else {
          pageContentElement.style.marginLeft = 0;
        }
      }
    }, [open, placement, selectorPageContent, pageContentSelector, slideIn]);

    // used to set margins of content for slide in panel version
    useEffect(() => {
      if (shouldRender && slideIn) {
        const pageContentElement = document.querySelector(
          selectorPageContent || pageContentSelector
        );
        if (placement && placement === 'right') {
          pageContentElement.style.marginRight = 0;
          pageContentElement.style.transition = 'margin-right 250ms';
          pageContentElement.style.marginRight = SIDE_PANEL_SIZES[size];
        } else {
          pageContentElement.style.marginLeft = 0;
          pageContentElement.style.transition = 'margin-left 250ms';
          pageContentElement.style.marginLeft = SIDE_PANEL_SIZES[size];
        }
      }
    }, [
      slideIn,
      selectorPageContent,
      pageContentSelector,
      placement,
      shouldRender,
      size,
    ]);

    const setSizeClassName = (panelSize) => {
      let sizeClassName = `${blockClass}__container`;
      switch (panelSize) {
        case 'xs':
          return (sizeClassName = `${sizeClassName}--extra-small`);
        case 'sm':
          return (sizeClassName = `${sizeClassName}--small`);
        case 'lg':
          return (sizeClassName = `${sizeClassName}--large`);
        case 'max':
          return (sizeClassName = `${sizeClassName}--max`);
        default:
          return (sizeClassName = `${sizeClassName}--medium`);
      }
    };

    // adds focus trap functionality
    /* istanbul ignore next */
    const handleBlur = ({
      target: oldActiveNode,
      relatedTarget: currentActiveNode,
    }) => {
      // focus trap should only be set if the side panel is a `slideOver` type
      if (open && sidePanelInnerRef && !slideIn) {
        wrapFocus({
          bodyNode: sidePanelInnerRef.current,
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
        [`${blockClass}__actions-container-condensed`]: condensedActions,
      },
    ]);

    const mainPanelClassNames = cx([
      blockClass,
      className,
      `${blockClass}__container`,
      setSizeClassName(size),
      {
        [`${blockClass}__container-right-placement`]: placement === 'right',
        [`${blockClass}__container-left-placement`]: placement === 'left',
        [`${blockClass}__container-with-action-toolbar`]:
          actionToolbarButtons && actionToolbarButtons.length,
        [`${blockClass}__container-without-overlay`]:
          !includeOverlay && !slideIn,
      },
    ]);

    return (
      shouldRender && (
        <>
          <ReactResizeDetector onResize={handleResize}>
            <div
              {
                // Pass through any other property values as HTML attributes.
                ...rest
              }
              id={`${blockClass}-outer`}
              className={mainPanelClassNames}
              style={{
                animation: `${
                  open
                    ? placement === 'right'
                      ? 'sidePanelEntranceRight 250ms'
                      : 'sidePanelEntranceLeft 250ms'
                    : placement === 'right'
                    ? 'sidePanelExitRight 250ms'
                    : 'sidePanelExitLeft 250ms'
                }`,
              }}
              onAnimationEnd={onAnimationEnd}
              onAnimationStart={onAnimationStart}
              onBlur={handleBlur}
              ref={ref || sidePanelRef}
              role="complementary"
              aria-label={title}>
              <span
                ref={startTrapRef}
                tabIndex="0"
                role="link"
                className={`${blockClass}__visually-hidden`}>
                Focus sentinel
              </span>
              <div
                ref={sidePanelInnerRef}
                className={`${blockClass}__inner-content`}>
                <div
                  className={cx(`${blockClass}__title-container`, {
                    [`${blockClass}__on-detail-step`]: currentStep > 0,
                    [`${blockClass}__title-container--no-animation`]:
                      !animateTitle,
                    [`${blockClass}__title-container-is-animating`]:
                      !animationComplete,
                  })}>
                  {currentStep > 0 && (
                    <Button
                      aria-label={navigationBackIconDescription}
                      kind="ghost"
                      size="small"
                      disabled={false}
                      renderIcon={ArrowLeft20}
                      iconDescription={navigationBackIconDescription}
                      className={`${blockClass}__navigation-back-button`}
                      onClick={onNavigationBack}
                    />
                  )}
                  {labelText && labelText.length && (
                    <p className={`${blockClass}__label-text`}>{labelText}</p>
                  )}
                  {title && title.length && (
                    <h2
                      className={`${blockClass}__title-text`}
                      title={title}
                      aria-hidden={false}>
                      {title}
                    </h2>
                  )}
                  {title && title.length && (
                    <h2
                      className={`${blockClass}__collapsed-title-text`}
                      title={title}
                      aria-hidden={true}>
                      {title}
                    </h2>
                  )}
                  <Button
                    aria-label={closeIconDescription}
                    kind="ghost"
                    size="small"
                    renderIcon={Close20}
                    iconDescription={closeIconDescription}
                    className={`${blockClass}__close-button`}
                    onClick={onRequestClose}
                    ref={sidePanelCloseRef}
                  />
                </div>
                {subtitle && subtitle.length && (
                  <p
                    className={cx(`${blockClass}__subtitle-text`, {
                      [`${blockClass}__subtitle-text-no-animation`]:
                        !animateTitle,
                      [`${blockClass}__subtitle-text-no-animation-no-action-toolbar`]:
                        !animateTitle &&
                        (!actionToolbarButtons || !actionToolbarButtons.length),
                      [`${blockClass}__subtitle-text-is-animating`]:
                        !animationComplete,
                    })}>
                    {subtitle}
                  </p>
                )}
                {actionToolbarButtons && actionToolbarButtons.length && (
                  <div
                    className={cx(`${blockClass}__action-toolbar`, {
                      [`${blockClass}__action-toolbar-no-animation`]:
                        !animateTitle,
                    })}>
                    {actionToolbarButtons.map((action) => (
                      <Button
                        key={action.label}
                        kind={action.leading ? action.kind : 'ghost'}
                        size="small"
                        disabled={false}
                        renderIcon={action.icon}
                        iconDescription={action.label}
                        tooltipPosition="bottom"
                        tooltipAlignment="center"
                        className={cx([
                          `${blockClass}__action-toolbar-button`,
                          {
                            [`${blockClass}__action-toolbar-icon-only-button`]:
                              action.icon,
                            [`${blockClass}__action-toolbar-leading-button`]:
                              !action.icon,
                          },
                        ])}
                        onClick={() => action.onActionToolbarButtonClick()}>
                        {action.leading && action.label}
                      </Button>
                    ))}
                  </div>
                )}
                <div className={`${blockClass}__body-content`}>{children}</div>
                <ActionSet
                  actions={actions}
                  className={primaryActionContainerClassNames}
                  size={size}
                />
              </div>
              <span
                ref={endTrapRef}
                tabIndex="0"
                role="link"
                className={`${blockClass}__visually-hidden`}>
                Focus sentinel
              </span>
            </div>
          </ReactResizeDetector>
          {includeOverlay && (
            <div
              ref={sidePanelOverlayRef}
              className={`${blockClass}__overlay`}
              style={{
                animation: `${
                  open
                    ? 'sidePanelOverlayEntrance 250ms'
                    : 'sidePanelOverlayExit 250ms'
                }`,
              }}
            />
          )}
        </>
      )
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
SidePanel = pkg.checkComponentEnabled(SidePanel, componentName);

SidePanel.validatePageContentSelector =
  () =>
  ({ slideIn, selectorPageContent }) => {
    if (slideIn && !selectorPageContent) {
      throw new Error(
        `${componentName}: selectorPageContent prop missing, this is required when using a slideIn panel.`
      );
    }
  };

SidePanel.propTypes = {
  /**
   * Sets the action toolbar buttons
   */
  actionToolbarButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      leading: PropTypes.bool,
      icon: PropTypes.object,
      onActionToolbarButtonClick: PropTypes.func,
      kind: PropTypes.oneOf(['ghost', 'tertiary', 'secondary', 'primary']),
    })
  ),

  /**
   * The primary actions to be shown in the side panel. Each action is
   * specified as an object with optional fields: 'label' to supply the button
   * label, 'kind' to select the button kind (must be 'primary', 'secondary' or
   * 'ghost'), 'loading' to display a loading indicator, and 'onClick' to
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
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
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
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  pageContentSelector: deprecateProp(
    allPropTypes([SidePanel.validatePageContentSelector(), PropTypes.string]),
    'This prop has been renamed to `selectorPageContent`.'
  ),

  /**
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  selectorPageContent: PropTypes.string,

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus: PropTypes.string,

  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'max']),

  /**
   * Determines if this panel slides in
   */
  slideIn: PropTypes.bool,

  /**
   * Sets the subtitle text
   */
  subtitle: PropTypes.string,

  /**
   * Sets the title text
   */
  title: PropTypes.string.isRequired,
};

SidePanel.defaultProps = {
  animateTitle: true,
  placement: 'right',
  size: 'md',
  slideIn: false,
  currentStep: 0,
  navigationBackIconDescription: 'Back',
  closeIconDescription: 'Close',
};

SidePanel.displayName = componentName;
