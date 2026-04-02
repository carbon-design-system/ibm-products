/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AILabel,
  IconButton,
  IconButtonProps,
  ModalHeader,
  usePrefix,
} from '@carbon/react';
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from 'react';
import cx from 'classnames';
import { blockClass, TearsheetContext } from './context';
import classNames from 'classnames';
import { ChevronUp, Close } from '@carbon/react/icons';

/**
 * ----------------
 * TearsheetHeader
 * ----------------
 */

export interface TearsheetHeaderProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children?: React.ReactNode;

  /**
   * The accessibility title for the close icon (if shown).
   *
   * **Note:** This prop is only required if a close icon is shown, i.e. if
   * there are a no navigation actions and/or hasCloseIcon is true.
   */
  closeIconDescription?: string;
  /**
   * Enable a close icon ('x') in the header area of the tearsheet. By default,
   * (when this prop is omitted, or undefined or null) a tearsheet does not
   * display a close icon if there are navigation actions ("transactional
   * tearsheet") and displays one if there are no navigation actions ("passive
   * tearsheet"), and that behavior can be overridden if required by setting
   * this prop to either true or false.
   */
  hideCloseButton?: boolean;

  className?: string;

  /**
   * Default header collapse/expand while scrolling the main content can be disabled  by setting this
   */
  disableHeaderCollapse?: boolean;
}

const TearsheetHeader = React.forwardRef<HTMLDivElement, TearsheetHeaderProps>(
  (props, ref) => {
    const {
      children,
      closeIconDescription,
      hideCloseButton = false,
      className,
      disableHeaderCollapse,
      ...rest
    } = props;
    const carbonPrefix = usePrefix();
    const {
      setHasCloseIcon,
      fullyCollapsed,
      onClose,
      setDisableHeaderCollapse,
      decorator,
    } = useContext(TearsheetContext);
    const localRef = useRef(undefined);
    const headerRef = (ref || localRef) as RefObject<HTMLDivElement>;

    useEffect(() => {
      setHasCloseIcon?.(!!hideCloseButton);
    }, [hideCloseButton, setHasCloseIcon]);
    useEffect(() => {
      setDisableHeaderCollapse?.(!!disableHeaderCollapse);
    }, [disableHeaderCollapse, setDisableHeaderCollapse]);

    // Normalize decorator (AILabel is always size `sm`)
    const candidateIsAILabel =
      isValidElement(decorator) && decorator.type === AILabel;
    const normalizedDecorator = candidateIsAILabel
      ? cloneElement(decorator as ReactElement<any>, { size: 'sm' })
      : decorator;

    return (
      <ModalHeader
        ref={headerRef}
        className={cx(`${blockClass}__header`, {
          [`${className}`]: true,
          [`${blockClass}__header--with-close-icon`]: !hideCloseButton,
          [`${blockClass}__header-collapsed`]: fullyCollapsed,
        })}
        closeClassName={`${blockClass}__header--no-close-icon`}
        {...rest}
      >
        {!hideCloseButton && (
          <div
            className={`${blockClass}__close-button ${carbonPrefix}--modal-close-button`}
          >
            <IconButton
              className={`${carbonPrefix}--modal-close`}
              label={closeIconDescription || 'Close'}
              onClick={onClose}
              align="left"
            >
              <Close
                size={20}
                aria-hidden="true"
                tabIndex="-1"
                className={`${carbonPrefix}--modal-close__icon`}
              />
            </IconButton>
          </div>
        )}
        {decorator && (
          <div className={`${blockClass}__decorator`}>
            {normalizedDecorator}
          </div>
        )}
        {children}
      </ModalHeader>
    );
  }
);

export default TearsheetHeader;

/**
 * ----------------
 * TearsheetNavigationBar
 * ----------------
 */

export interface TearsheetNavigationBarProps {
  children: ReactNode;
  scroller?: React.ReactNode;
  className?: string;
}
export const TearsheetNavigationBar = React.forwardRef<
  HTMLDivElement,
  TearsheetNavigationBarProps
>((props, ref) => {
  const { children, scroller, className, ...rest } = props;

  return (
    <div className={`${blockClass}__navigation-bar  ${className}`} {...rest}>
      {children}

      {scroller}
    </div>
  );
});

/**
 * ----------------
 * TearsheetScrollButton
 * ----------------
 */

export interface TearsheetScrollButtonProps extends IconButtonProps {
  collapseText?: string;
  expandText?: string;
  className?: string;
}

export const TearsheetScrollButton = React.forwardRef<
  HTMLDivElement,
  TearsheetScrollButtonProps
>(function PageHeaderExpander(
  {
    className,
    children,
    label,
    onClick,
    collapseText = 'Collapse',
    expandText = 'Expand',
    ...other
  }: TearsheetScrollButtonProps,
  ref
) {
  const { fullyCollapsed, setFullyCollapsed } =
    React.useContext(TearsheetContext);

  const handleScroller = (isFullyCollapsed: boolean) => {
    setFullyCollapsed?.(!isFullyCollapsed);
  };

  return (
    <span className={`${blockClass}__scroller-container  ${className}`}>
      <IconButton
        ref={ref}
        label={fullyCollapsed ? expandText : collapseText}
        size="md"
        kind="ghost"
        autoAlign
        {...other}
        onClick={(event) => {
          onClick?.(event);
          handleScroller(!!fullyCollapsed);
        }}
        className={classNames(className, `${blockClass}__scroller-button`)}
      >
        <ChevronUp
          className={classNames(`${blockClass}__scroller-button-icon`, {
            [`${blockClass}__scroller-button-icon-collapsed`]: fullyCollapsed,
          })}
        />
      </IconButton>
    </span>
  );
});
