/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../global/js/settings';
import { Button, InlineLoading } from 'carbon-components-react';
import { SIDE_PANEL_SIZES } from './constants';
import { Close20, ArrowLeft20 } from '@carbon/icons-react';
import wrapFocus from '../../global/js/utils/wrapFocus';

const changeArrayPosition = (arr, originalPosition, newPosition) => {
  let cutOut = arr.splice(originalPosition, 1)[0];
  arr.splice(newPosition, 0, cutOut);
  return arr;
};

export const SidePanel = ({
  open,
  setOpen,
  placement,
  size,
  slideIn,
  pageContentSelector,
  theme,
  includeOverlay,
  titleText,
  labelText,
  subtitleText,
  actionToolbarButtons,
  children,
  condensed,
  primaryActions,
  animateTitle,
  currentStep,
  onNavigationBack,
  selectorPrimaryFocus,
}) => {
  const [shouldRender, setRender] = useState(open);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [primaryPanelActions, setPrimaryPanelActions] = useState([]);
  const sidePanelRef = useRef();
  const sidePanelTitleRef = useRef();
  const sidePanelOverlayRef = useRef();
  const startTrapRef = useRef();
  const endTrapRef = useRef();
  const sidePanelInnerRef = useRef();
  const sidePanelCloseRef = useRef();

  // set initial focus when side panel opens
  useEffect(() => {
    const initialFocus = (focusContainerElement) => {
      const containerElement = focusContainerElement || sidePanelRef.current;
      const primaryFocusElement = containerElement
        ? containerElement.querySelector(selectorPrimaryFocus)
        : null;

      if (primaryFocusElement) {
        return primaryFocusElement;
      }

      return sidePanelCloseRef && sidePanelCloseRef.current;
    };

    const focusButton = (focusContainerElement) => {
      const target = initialFocus(focusContainerElement);
      if (target) {
        target.focus();
      }
    };
    if (open && animationComplete) {
      focusButton(sidePanelInnerRef.current);
    }
  }, [selectorPrimaryFocus, open, animationComplete]);

  // Title animaton
  useEffect(() => {
    if (open && animateTitle && animationComplete) {
      const sidePanelOuter = document.querySelector(
        `#${pkg.prefix}-side-panel-outer`
      );
      sidePanelOuter &&
        sidePanelOuter.addEventListener('scroll', () => {
          const scrollTop = sidePanelRef.current.scrollTop;
          const scrollBottom =
            sidePanelRef.current.scrollHeight -
            document.documentElement.clientHeight;
          let scrollPercent = (scrollTop / scrollBottom) * 100;
          if (scrollPercent >= 25) {
            sidePanelOuter.classList.add(
              `${pkg.prefix}-side-panel-with-condensed-header`
            );
          } else if (scrollPercent < 25) {
            sidePanelOuter.classList.remove(
              `${pkg.prefix}-side-panel-with-condensed-header`
            );
          }
        });
    }
  }, [open, animateTitle, animationComplete]);

  // click outside functionality if `includeOverlay` prop is set
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sidePanelRef.current &&
        sidePanelOverlayRef.current &&
        sidePanelOverlayRef.current.contains(e.target)
      ) {
        setOpen(!open);
      }
    };
    if (includeOverlay) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [includeOverlay, setOpen, open]);

  // initialize the side panel to open
  useEffect(() => {
    if (open) setRender(true);
  }, [open]);

  // used to properly order the primary action buttons according to the designs
  useEffect(() => {
    const primaryActionButtons = primaryActions || [];
    if (primaryActionButtons && primaryActionButtons.length > 1) {
      const primaryIndex = primaryActionButtons.findIndex(
        (item) => item.kind === 'primary'
      );
      const ghostButton = primaryActionButtons.filter(
        (button) => button.kind === 'ghost'
      );
      let newArray = [];
      if (
        size === 'extraSmall' ||
        size === 'small' ||
        (size === 'medium' && primaryActionButtons.length > 2)
      ) {
        newArray = changeArrayPosition(primaryActionButtons, primaryIndex, 0); // put the primary button as the first button in the group
        const ghostButton = primaryActionButtons.filter(
          (button) => button.kind === 'ghost'
        );
        if (ghostButton.length) {
          const ghostIndex = primaryActionButtons.findIndex(
            (item) => item.kind === 'ghost'
          );
          newArray = changeArrayPosition(
            newArray,
            ghostIndex,
            primaryActionButtons.length - 1
          ); // put the ghost button as the last button in the group
        }
      } else {
        newArray = changeArrayPosition(
          primaryActionButtons,
          primaryIndex,
          primaryActionButtons.length - 1
        ); // put the primary button as the last button in the group
        if (ghostButton.length) {
          const ghostIndex = primaryActionButtons.findIndex(
            (item) => item.kind === 'ghost'
          );
          newArray = changeArrayPosition(newArray, ghostIndex, 0); // put the ghost button as the first button in the group
        }
      }
      if (newArray.length) {
        setPrimaryPanelActions([...newArray]);
      } else {
        setPrimaryPanelActions([...primaryActionButtons]);
      }
    } else {
      setPrimaryPanelActions([...primaryActionButtons]);
    }
  }, [primaryActions, size]);

  // initialize the side panel to close
  const onAnimationEnd = () => {
    if (!open) setRender(false);
    if (sidePanelRef && sidePanelRef.current) {
      sidePanelRef.current.style.overflow = 'auto';
    }
    setAnimationComplete(true);
  };

  // prevents the side panel from being scrolled during animation
  const onAnimationStart = () => {
    if (sidePanelRef && sidePanelRef.current) {
      sidePanelRef.current.style.overflow = 'hidden';
    }
    setAnimationComplete(false);
  };

  // used to reset margins of the slide in panel when closed/closing
  useEffect(() => {
    if (!open && slideIn) {
      const pageContentElement = document.querySelector(pageContentSelector);
      if (placement && placement === 'right') {
        pageContentElement.style.marginRight = 0;
      } else {
        pageContentElement.style.marginLeft = 0;
      }
    }
  }, [open, placement, pageContentSelector, slideIn]);

  // used to set margins of content for slide in panel version
  useEffect(() => {
    if (shouldRender && slideIn) {
      const pageContentElement = document.querySelector(pageContentSelector);
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
  }, [slideIn, pageContentSelector, placement, shouldRender, size]);

  const setSizeClassName = (panelSize, actions) => {
    let sizeClassName;
    if (!actions) {
      sizeClassName = `${pkg.prefix}-side-panel-container-`;
    } else {
      sizeClassName = `${pkg.prefix}-side-panel-actions-`;
    }
    switch (panelSize) {
      case 'extraSmall':
        return (sizeClassName = `${sizeClassName}-extra-small`);
      case 'small':
        return (sizeClassName = `${sizeClassName}-small`);
      case 'medium':
        return (sizeClassName = `${sizeClassName}-medium`);
      case 'large':
        return (sizeClassName = `${sizeClassName}-large`);
      case 'max':
        return (sizeClassName = `${sizeClassName}-max`);
      default:
        return (sizeClassName = `${sizeClassName}-medium`);
    }
  };

  const setPrimaryActionsBarClass = (buttonCount) => {
    let buttonCountClassName = `${pkg.prefix}-side-panel-actions-container-`;
    if (buttonCount === 1) {
      buttonCountClassName = `${buttonCountClassName}-single-action`;
    } else if (buttonCount === 2) {
      buttonCountClassName = `${buttonCountClassName}-multi-action`;
    } else if (buttonCount > 2) {
      buttonCountClassName = `${buttonCountClassName}-multi-action-3-buttons-or-more`;
    }
    return buttonCountClassName;
  };

  // adds focus trap functionality
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

  const mainPanelClassNames = cx([
    `${pkg.prefix}-side-panel-container`,
    `${pkg.prefix}-side-panel-container-${theme}`,
    setSizeClassName(size),
    {
      [`${pkg.prefix}-side-panel-container-right-placement`]:
        placement === 'right',
      [`${pkg.prefix}-side-panel-container-left-placement`]:
        placement === 'left',
    },
  ]);

  const primaryActionContainerClassNames = cx([
    `${pkg.prefix}-side-panel-actions-container`,
    setSizeClassName(size, true),
    setPrimaryActionsBarClass(
      primaryPanelActions && primaryPanelActions.length
    ),
    {
      [`${pkg.prefix}-side-panel-actions-container-condensed`]: condensed,
    },
  ]);

  return (
    shouldRender && (
      <>
        <div
          id={`${pkg.prefix}-side-panel-outer`}
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
          ref={sidePanelRef}
          onBlur={handleBlur}>
          <span
            ref={startTrapRef}
            tabIndex="0"
            role="link"
            className={`${pkg.prefix}--visually-hidden`}>
            Focus sentinel
          </span>
          <div ref={sidePanelInnerRef}>
            <div className={`${pkg.prefix}-side-panel-header`}>
              {currentStep > 0 && (
                <Button
                  kind="ghost"
                  size="small"
                  disabled={false}
                  renderIcon={ArrowLeft20}
                  iconDescription="Back"
                  tooltipPosition="right"
                  tooltipAlignment="center"
                  className={`${pkg.prefix}-side-panel-navigation-back-button`}
                  onClick={() => onNavigationBack((prev) => prev - 1)}
                />
              )}
              {labelText && labelText.length && (
                <p className={`${pkgPrefix}-side-panel-label-text`}>
                  {labelText}
                </p>
              )}
              {titleText && titleText.length && (
                <h2
                  className={`${pkg.prefix}-side-panel-title-text`}
                  ref={sidePanelTitleRef}
                  title={titleText}>
                  {titleText}
                </h2>
              )}
              {subtitleText && subtitleText.length && (
                <p className={`${pkg.prefix}-side-panel-subtitle-text`}>
                  {subtitleText}
                </p>
              )}
              {actionToolbarButtons && actionToolbarButtons.length && (
                <div className={`${pkg.prefix}-side-panel-action-toolbar`}>
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
                        `${pkg.prefix}-side-panel-action-toolbar-button`,
                        {
                          [`${pkg.prefix}-side-panel-action-toolbar-icon-only-button`]: action.icon,
                          [`${pkg.prefix}-side-panel-action-toolbar-leading-button`]: !action.icon,
                        },
                      ])}
                      onClick={() => action.onActionToolbarButtonClick()}>
                      {action.leading ? action.label : ''}
                    </Button>
                  ))}
                </div>
              )}
              <Button
                kind="ghost"
                size="small"
                disabled={false}
                renderIcon={Close20}
                iconDescription="Close"
                tooltipPosition="bottom"
                tooltipAlignment="center"
                className={`${pkg.prefix}-side-panel-close-button`}
                onClick={() => setOpen(false)}
                ref={sidePanelCloseRef}
              />
            </div>
            <div className={`${pkg.prefix}-side-panel-body-content`}>
              {children}
            </div>
            {primaryPanelActions && primaryPanelActions.length ? (
              <div className={primaryActionContainerClassNames}>
                {primaryPanelActions.map((action, index) => (
                  <Button
                    key={index}
                    disabled={action.disabled || action.loading || false}
                    onClick={() => action.onPrimaryActionClick()}
                    kind={action.kind || 'primary'}
                    className={cx([
                      `${pkg.prefix}-side-panel-primary-action-button`,
                      {
                        [`${pkg.prefix}-side-panel-ghost-button`]:
                          action.kind === 'ghost',
                        [`${pkg.prefix}-side-panel-primary-action-button-condensed`]: condensed,
                      },
                    ])}>
                    {action.label}
                    {action.loading && <InlineLoading />}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
          <span
            ref={endTrapRef}
            tabIndex="0"
            role="link"
            className={`${pkg.prefix}--visually-hidden`}>
            Focus sentinel
          </span>
        </div>
        {includeOverlay && (
          <div
            ref={sidePanelOverlayRef}
            className={`${pkg.prefix}-side-panel-overlay`}
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
};

const validateActions = () => (props, propName, componentName) => {
  const prop = props[propName];
  if (prop === undefined) return;
  if (prop !== undefined) {
    // let validationMessage = '';
    if (props.primaryActions && props.primaryActions.length) {
      if (
        (props.size === 'small' ||
          props.size === 'extraSmall' ||
          props.size === 'medium') &&
        props.primaryActions.length > 3
      ) {
        throw new Error(
          `Prop '${propName}' passed to ${componentName} is using an invalid combination of buttons.\n\nYou cannot have 4 or more buttons in a '${props.size}' size panel`
        );
      }
      const ghostButton = props.primaryActions.filter(
        (button) => button.kind === 'ghost'
      );
      const primaryActionButton = props.primaryActions.filter(
        (button) => button.kind === 'primary'
      );
      if (ghostButton.length > 1)
        throw new Error(
          `Prop '${propName}' passed to ${componentName} is using an invalid combination of buttons.\n\nYou cannot have more than one 'ghost' button in a side panel`
        );
      if (primaryActionButton.length > 1)
        throw new Error(
          `Prop '${propName}' passed to ${componentName} is using an invalid combination of buttons.\n\nYou cannot have more than one 'primary' action button in a side panel`
        );
      if (
        props.primaryActions.length > 1 &&
        ghostButton.length &&
        (props.size === 'extraSmall' ||
          props.size === 'small' ||
          props.size === 'medium')
      ) {
        throw new Error(
          `Prop '${propName}' passed to ${componentName} is using an invalid combination of buttons.\n\nYou cannot have a 'ghost' button in conjuntion with other action buttons in a ${props.size} size side panel. Try using a 'secondary' button instead.`
        );
      }
    }
    return null;
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
   * Determines whether the side panel should render the condensed version (affects action buttons primarily)
   */
  condensed: PropTypes.bool,
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
   * Changes the current side panel page to the previous page
   */
  onNavigationBack: PropTypes.func,
  /**
   * Determines whether the side panel should render or not
   */
  open: PropTypes.bool.isRequired,
  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in
   */
  pageContentSelector: PropTypes.string,
  /**
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),
  /**
   * Sets the primary action buttons for the side panel
   */
  primaryActions: PropTypes.oneOfType([
    validateActions(),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        onPrimaryActionClick: PropTypes.func,
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
      })
    ),
  ]),
  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus: PropTypes.string,
  /**
   * Sets the side panel open state
   */
  setOpen: PropTypes.func.isRequired,
  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'max']),
  /**
   * Determines if this panel slides in
   */
  slideIn: PropTypes.bool,
  /**
   * Sets the subtitle text
   */
  subtitleText: PropTypes.string,
  /**
   * Sets the theme that the panel will use
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Sets the title text
   */
  titleText: PropTypes.string,
};

SidePanel.defaultProps = {
  animateTitle: true,
  placement: 'right',
  size: 'medium',
  slideIn: false,
  theme: 'light',
  currentStep: 0,
};
