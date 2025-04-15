/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  Column,
  ComposedModal,
  FlexGrid,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ProgressIndicator,
  ProgressStep,
  Row,
} from '@carbon/react';
// Import portions of React that are needed.
import React, {
  Children,
  PropsWithChildren,
  ReactNode,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ArrowRight } from '@carbon/react/icons';
import { Carousel } from '../Carousel';
// Other standard imports.
import PropTypes from 'prop-types';
// Other standard imports.
import cx from 'classnames';
import { clamp } from '../../global/js/utils/clamp';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--interstitial-screen`;
const headerBlockClass = `${blockClass}--internal-header`;
const bodyBlockClass = `${blockClass}--internal-body`;
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

// Default values for props
const defaults = {
  closeIconDescription: 'Close',
  domainName: '',
  hideProgressIndicator: false,
  interstitialAriaLabel: 'Interstitial screen',
  isFullScreen: false,
  isOpen: false,
  nextButtonLabel: 'Next',
  onClose: () => {},
  previousButtonLabel: 'Back',
  productName: '',
  skipButtonLabel: '',
  startButtonLabel: 'Get started',
};

type BreakpointsWithMedia = {
  xlg?: number;
  lg?: number;
};
export interface InterstitialScreenProps extends PropsWithChildren {
  /**
   * Provide the contents of the InterstitialScreen.
   */
  children: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription?: string;
  /**
   * The domain this app belongs to, e.g. "IBM Cloud Pak".
   */
  domainName?: string;
  /**
   * Provide an optional class to be applied to the <header> element >.
   */
  headerClassName?: string;
  /**
   * Provide an optional class to be applied to the <header> element >.
   */
  headerTitle?: string;
  /**
   * Optional parameter to hide the progress indicator when multiple steps are used.
   */
  hideProgressIndicator?: boolean;

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
   * Optional prop to render any media like images or any animated media.
   */
  renderMedia?: (params) => ReactNode;

  /**
   * optional prop to specify breakpoints when media is rendered through renderMedia
   * Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size.
   * Medium and small breakpoints will be set to 0 internally to focus on the main content area.
   */
  breakpointsWithMedia?: BreakpointsWithMedia;
  /**
   * The label for the Next button.
   */
  nextButtonLabel?: string;
  /**
   * Function to call when the close button is clicked.
   */
  onClose?: () => void;
  /**
   * The label for the Previous button.
   */
  previousButtonLabel?: string;
  /**
   * The name of this app, e.g. "QRadar".
   */
  productName?: string;

  /**
   * The label for the skip button.
   */
  skipButtonLabel?: string;
  /**
   * The label for the start button.
   */
  startButtonLabel?: string;
}

type EnrichedChildren = {
  children?: ReactNode;
  stepTitle?: string;
  translateWithId?: (id: string) => string;
};
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
    closeIconDescription = defaults.closeIconDescription,
    domainName = defaults.domainName,
    hideProgressIndicator = defaults.hideProgressIndicator,
    interstitialAriaLabel = defaults.interstitialAriaLabel,
    isFullScreen = defaults.isFullScreen,
    isOpen = defaults.isOpen,
    renderMedia,
    breakpointsWithMedia,
    nextButtonLabel = defaults.nextButtonLabel,
    onClose = defaults.onClose,
    previousButtonLabel = defaults.previousButtonLabel,
    productName = defaults.productName,
    headerClassName,
    headerTitle,
    startButtonLabel = defaults.startButtonLabel,
    skipButtonLabel = defaults.skipButtonLabel,
    ...rest
  } = props;
  const backupRef = useRef<HTMLDivElement>(null);
  const _forwardedRef = ref || backupRef;
  const scrollRef = useRef<any>(undefined);
  const startButtonRef = useRef<HTMLElement | undefined>(undefined);
  const nextButtonRef = useRef<HTMLElement | undefined>(undefined);
  const [isVisibleClass, setIsVisibleClass] = useState<string | null>(null);
  const [progStep, setProgStep] = useState(0);
  const childArray = Children.toArray(children);
  const isMultiStep = childArray.length > 1;
  const bodyScrollRef = useRef<HTMLDivElement>(null);
  const mediaBreakpoints = {
    xlg: breakpointsWithMedia?.xlg || 0,
    lg: breakpointsWithMedia?.lg || 0,
    md: 0,
    sm: 0,
  };
  const contentBreakpoints = {
    xlg: 16 - mediaBreakpoints.xlg,
    lg: 16 - mediaBreakpoints.lg,
    md: 8,
    sm: 4,
  };

  const variantClass = isFullScreen
    ? `${blockClass}--full-screen`
    : `${blockClass}--modal`;

  const progStepFloor = 0;
  const progStepCeil = childArray.length - 1;

  const handleClose = useCallback(() => {
    setProgStep(0);
    onClose();
  }, [onClose]);

  const scrollBodyToTop = () => {
    bodyScrollRef.current?.scroll?.({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClickPrev = () => {
    const targetStep = clamp(progStep - 1, progStepFloor, progStepCeil);
    scrollRef.current.scrollPrev();
    scrollBodyToTop();
    setProgStep(targetStep as number);
  };

  const handleClickNext = () => {
    const targetStep = clamp(progStep + 1, progStepFloor, progStepCeil);
    scrollRef.current.scrollNext();
    scrollBodyToTop();
    setProgStep(targetStep as number);
  };

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
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [handleClose]);

  const stepSize = useMemo(
    () =>
      children && Children.count(children) > 1
        ? parseFloat((1 / (Children.count(children) - 1)).toFixed(2))
        : 0,
    [children]
  );

  if (!isOpen) {
    return null;
  }
  const domainProductDelimiter =
    domainName !== '' && productName !== '' ? ' | ' : '';

  const renderModal = (childElements) => {
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
        <ModalHeader
          className={cx(
            headerBlockClass,
            headerTitle && `${headerBlockClass}--has-title`,
            headerClassName
          )}
          iconDescription={closeIconDescription}
        >
          {headerTitle && <h2>{headerTitle}</h2>}
          {!hideProgressIndicator && (
            <div className={`${blockClass}--progress`}>
              <ProgressIndicator vertical={false} currentIndex={progStep}>
                {childArray.map((child: ReactNode, idx) => {
                  if (isValidElement<EnrichedChildren>(child)) {
                    return (
                      <ProgressStep
                        key={idx}
                        label={child.props.stepTitle || ''}
                        translateWithId={child.props.translateWithId}
                      />
                    );
                  }
                })}
              </ProgressIndicator>
            </div>
          )}
        </ModalHeader>
        <ModalBody className={bodyBlockClass}>{childElements}</ModalBody>
        <ModalFooter>{renderFooter()}</ModalFooter>
      </ComposedModal>
    );
  };

  const renderFullScreen = (childElements) => {
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
        <div className={cx([{ [`${blockClass}--container`]: isFullScreen }])}>
          <div className={`${blockClass}--header`}>
            {domainName}
            {domainProductDelimiter}
            <strong>{productName}</strong>
          </div>

          <header
            className={cx(
              headerBlockClass,
              headerTitle && `${headerBlockClass}--has-title`,
              headerClassName
            )}
          >
            {headerTitle && <h2>{headerTitle}</h2>}
            {!hideProgressIndicator && (
              <div className={`${blockClass}--progress`}>
                <ProgressIndicator vertical={false} currentIndex={progStep}>
                  {childArray.map((child: ReactNode, idx) => {
                    if (isValidElement<EnrichedChildren>(child)) {
                      return (
                        <ProgressStep
                          key={idx}
                          label={child.props.stepTitle || ''}
                          translateWithId={child.props.translateWithId}
                        />
                      );
                    }
                  })}
                </ProgressIndicator>
              </div>
            )}
          </header>

          {childElements}
          {renderFooter()}
        </div>
      </div>
    );
  };

  const scrollToCurrentStep = (scrollPercent) => {
    const currentStep = scrollPercent / stepSize;
    setProgStep(Math.ceil(currentStep));
  };

  const renderBody = () => {
    {
      /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    }
    return (
      <div
        className={cx(`${blockClass}--body`)}
        ref={bodyScrollRef}
        tabIndex={0}
      >
        {renderMedia ? (
          <FlexGrid fullWidth className={cx(`${blockClass}--body-grid`)}>
            <Row className={cx(`${blockClass}--body-row`)}>
              <Column
                xlg={contentBreakpoints.xlg}
                lg={contentBreakpoints.lg}
                md={contentBreakpoints.md}
                sm={contentBreakpoints.sm}
              >
                <div className={cx(`${blockClass}--content`)}>
                  {isMultiStep ? (
                    <div className={`${blockClass}__carousel`}>
                      <Carousel
                        disableArrowScroll
                        ref={scrollRef}
                        onScroll={scrollToCurrentStep}
                      >
                        {children}
                      </Carousel>
                    </div>
                  ) : (
                    childArray[0]
                  )}
                </div>
              </Column>
              {renderMedia && (
                <Column
                  xlg={mediaBreakpoints.xlg}
                  lg={mediaBreakpoints.lg}
                  md={mediaBreakpoints.md}
                  sm={mediaBreakpoints.sm}
                  className={cx(`${blockClass}--media-container`)}
                >
                  <div className={`${blockClass}--media`}>
                    {renderMedia && (
                      <div className={`${blockClass}--stepped-animated-media`}>
                        {renderMedia({ playStep: progStep })}
                      </div>
                    )}
                  </div>
                </Column>
              )}
            </Row>
          </FlexGrid>
        ) : (
          <div className={cx(`${blockClass}--content`)}>
            {isMultiStep ? (
              <div className={`${blockClass}__carousel`}>
                <Carousel
                  disableArrowScroll
                  ref={scrollRef}
                  onScroll={scrollToCurrentStep}
                >
                  {children}
                </Carousel>
              </div>
            ) : (
              <div>{childArray[0]}</div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className={`${blockClass}--footer`}>
        {isMultiStep && skipButtonLabel !== '' && (
          <Button
            className={`${blockClass}--skip-btn`}
            kind="ghost"
            size="lg"
            title={skipButtonLabel}
            onClick={handleClose}
          >
            {skipButtonLabel}
          </Button>
        )}
        <div className={`${blockClass}--footer-controls`}>
          {isMultiStep && progStep > 0 && (
            <Button
              className={`${blockClass}--prev-btn`}
              kind="secondary"
              size="lg"
              title={previousButtonLabel}
              onClick={handleClickPrev}
            >
              {previousButtonLabel}
            </Button>
          )}

          {isMultiStep && progStep < progStepCeil && (
            <Button
              className={`${blockClass}--next-btn`}
              renderIcon={ArrowRight}
              ref={nextButtonRef}
              size="lg"
              title={nextButtonLabel}
              onClick={handleClickNext}
            >
              {nextButtonLabel}
            </Button>
          )}
          {isMultiStep && progStep === progStepCeil && (
            <Button
              className={`${blockClass}--start-btn`}
              ref={startButtonRef}
              renderIcon={ArrowRight}
              size="lg"
              title={startButtonLabel}
              onClick={handleClose}
            >
              {startButtonLabel}
            </Button>
          )}
          {!isMultiStep && (
            <Button
              className={`${blockClass}--start-btn`}
              ref={startButtonRef}
              size="lg"
              title={startButtonLabel}
              onClick={handleClose}
            >
              {startButtonLabel}
            </Button>
          )}
        </div>
      </div>
    );
  };

  return isFullScreen
    ? renderFullScreen(renderBody())
    : renderModal(renderBody());
});

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
  /**
   * Breakpoints are used to set the media content column size as well as the remainder for the main content areas column size. Medium and small breakpoints will be set to 0 internally to focus on the main content area.
   */
  breakpointsWithMedia: PropTypes.object,

  /**
   * Provide the contents of the InterstitialScreen.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,
  /**
   * The domain this app belongs to, e.g. "IBM Cloud Pak".
   */
  domainName: PropTypes.string,
  /**
   * Provide an optional class to be applied to the <header> element >.
   */
  headerClassName: PropTypes.string,
  /**
   * Provide an optional class to be applied to the <header> element >.
   */
  headerTitle: PropTypes.string,

  /**
   * Optional parameter to hide the progress indicator when multiple steps are used.
   */
  hideProgressIndicator: PropTypes.bool,
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
   * The label for the Next button.
   */
  nextButtonLabel: PropTypes.string,
  /**
   * Function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * The label for the Previous button.
   */
  previousButtonLabel: PropTypes.string,

  /**
   * The name of this app, e.g. "QRadar".
   */
  productName: PropTypes.string,
  /**
   * Optional prop to render any media like images or animated media.
   */
  renderMedia: PropTypes.func,
  /**
   * The label for the skip button.
   */
  skipButtonLabel: PropTypes.string,
  /**
   * The label for the start button.
   */
  startButtonLabel: PropTypes.string,
};
