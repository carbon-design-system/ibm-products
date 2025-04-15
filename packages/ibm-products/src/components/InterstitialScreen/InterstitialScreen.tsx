/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComposedModal } from '@carbon/react';
// Import portions of React that are needed.
import React, {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
// Other standard imports.
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import InterstitialScreenHeader, {
  InterstitialScreenHeaderProps,
} from './InterstitialScreenHeader';
import InterstitialScreenBody, {
  InterstitialScreenBodyProps,
} from './InterstitialScreenBody';
import InterstitialScreenFooter, {
  InterstitialScreenFooterProps,
} from './InterstitialScreenFooter';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--interstitial-screen`;
const componentName = 'InterstitialScreen';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

export type ActionType = 'close' | 'start' | 'skip' | 'back' | 'next';
export interface InterstitialScreenProps {
  /**
   * Provide the contents of the InterstitialScreen.
   */
  children: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * The aria label applied to the Interstitial Screen component
   */
  interstitialAriaLabel?: string;
  /**
   * Specifies whether the component is shown as a full-screen
   * experience, else it is shown as a modal by default.
   */
  isFullScreen?: boolean;
  /**
   * Specifies whether the component is currently open.
   */
  isOpen?: boolean;

  /**
   * Function to call when the close button is clicked.
   */
  onClose?: (value: ActionType) => void;
}

// Define the type for InterstitialScreen, extending it to include Header
type InterstitialScreenComponent = React.ForwardRefExoticComponent<
  InterstitialScreenProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: React.FC<InterstitialScreenHeaderProps>;
  Body: React.FC<InterstitialScreenBodyProps>;
  Footer: React.FC<InterstitialScreenFooterProps>;
};

export type disableButtonConfigType = {
  skip?: boolean;
  back?: boolean;
  next?: boolean;
  start?: boolean;
};
interface InterstitialScreenContextType {
  bodyChildrenData?: ReactNode;
  setBodyChildrenData?: (value: ReactNode) => void;
  isFullScreen?: boolean;
  handleClose?: (value: ActionType) => void;
  progStep: number;
  setProgStep?: (value: number) => void;
  bodyScrollRef?: RefObject<HTMLDivElement | null>;
  scrollRef?: RefObject<HTMLDivElement>;
  handleGotoStep?: (value: number) => void;
  stepCount: number;
  setStepCount?: (value: number) => void;
  disableButtonConfig?: disableButtonConfigType;
  setDisableButtonConfig?: (value: disableButtonConfigType) => void;
}

export const InterstitialScreenContext =
  createContext<InterstitialScreenContextType>({ progStep: 0, stepCount: 0 });
/**
 * InterstitialScreen can be a full page or an overlay, and are
 * shown on the first time a user accesses a new experience
 * (e.g. upon first login or first time opening a page where a
 * newly purchased capability is presented).
 */
export let InterstitialScreen = React.forwardRef<
  HTMLDivElement,
  InterstitialScreenProps
>((props, ref) => {
  const {
    children,
    className,
    interstitialAriaLabel = 'Interstitial screen',
    isFullScreen = false,
    isOpen = false,
    onClose,
    ...rest
  } = props;
  const backupRef = useRef<HTMLDivElement>(null);
  const _forwardedRef = ref || backupRef;
  const scrollRef = useRef<any>(undefined);
  const startButtonRef = useRef<HTMLElement | undefined>(undefined);
  const nextButtonRef = useRef<HTMLElement | undefined>(undefined);
  const [isVisibleClass, setIsVisibleClass] = useState<string | null>(null);
  const [progStep, setProgStep] = useState<number>(0);
  const bodyScrollRef = useRef<HTMLDivElement>(null);
  const [stepCount, setStepCount] = useState<number>(0);

  const [disableButtonConfig, setDisableButtonConfig] =
    useState<disableButtonConfigType>({
      skip: false,
      back: false,
      next: false,
      start: false,
    });

  const variantClass = isFullScreen
    ? `${blockClass}--full-screen`
    : `${blockClass}--modal`;

  const [bodyChildrenData, setBodyChildrenData] = useState<ReactNode>(null);

  const handleClose = useCallback(
    (actionName) => {
      setProgStep(0);
      onClose?.(actionName ?? 'close');
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) {
      setProgStep(0);
    }
    startButtonRef.current?.focus();
  }, [isOpen, progStep, onClose]);

  useEffect(() => {
    // for modal only, "is-visible" triggers animation
    setIsVisibleClass(!isFullScreen && isOpen ? 'is-visible' : null);
    nextButtonRef?.current?.focus();
  }, [isFullScreen, isOpen]);

  // hitting escape key also closes this component
  useEffect(() => {
    const close = (e) => {
      const { key } = e;
      if (key === 'Escape') {
        handleClose('close');
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [handleClose]);

  if (!isOpen) {
    return null;
  }

  const renderModal = () => {
    return (
      <ComposedModal
        {...rest}
        preventCloseOnClickOutside={true}
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className // Apply any supplied class names to the main HTML element.
        )}
        size="lg"
        onClose={handleClose}
        open={isOpen}
        ref={_forwardedRef}
        aria-label={interstitialAriaLabel}
        {...getDevtoolsProps(componentName)}
      >
        {children}
      </ComposedModal>
    );
  };

  const renderFullScreen = () => {
    return (
      <div
        {...rest}
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          variantClass,
          isVisibleClass
        )}
        role="main"
        aria-label={interstitialAriaLabel}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <div className={`${blockClass}--container`}>{children}</div>
      </div>
    );
  };

  const handleGotoStep = (targetStep) => {
    setProgStep(targetStep as number);
    scrollRef.current.scrollToView(targetStep as number);

    scrollBodyToTop();
  };

  const scrollBodyToTop = () => {
    bodyScrollRef.current?.scroll?.({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <InterstitialScreenContext.Provider
      value={{
        bodyChildrenData,
        setBodyChildrenData,
        isFullScreen,
        handleClose,
        progStep,
        setProgStep,
        bodyScrollRef,
        scrollRef,
        handleGotoStep,
        stepCount,
        setStepCount,
        disableButtonConfig,
        setDisableButtonConfig,
      }}
    >
      {isFullScreen ? renderFullScreen() : renderModal()}
    </InterstitialScreenContext.Provider>
  );
}) as InterstitialScreenComponent;
InterstitialScreen.Header = InterstitialScreenHeader;
InterstitialScreen.Body = InterstitialScreenBody;
InterstitialScreen.Footer = InterstitialScreenFooter;
// Return a placeholder if not released and not enabled by feature flag
InterstitialScreen = pkg.checkComponentEnabled(
  InterstitialScreen,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
InterstitialScreen.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
InterstitialScreen.propTypes = {
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,
  /**
   * The aria label applied to the Interstitial Screen component
   */
  interstitialAriaLabel: PropTypes.string,
  /**
   * Specifies whether the component is shown as a full-screen
   * experience, else it is shown as a modal by default.
   */
  isFullScreen: PropTypes.bool,
  /**
   * Specifies whether the component is currently open.
   */
  isOpen: PropTypes.bool,

  /**
   * Function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
};
