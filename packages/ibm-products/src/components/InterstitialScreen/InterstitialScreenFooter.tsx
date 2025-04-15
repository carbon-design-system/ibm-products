/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useContext, useRef } from 'react';

import { pkg } from '../../settings';
import PropTypes from 'prop-types';

import {
  disableButtonConfigType,
  InterstitialScreenContext,
} from './InterstitialScreen';
import { Button, ModalFooter } from '@carbon/react';
import { clamp } from '../../global/js/utils/clamp';
import { ArrowRight } from '@carbon/react/icons';

type actionButtonRendererArgs = {
  handleGotoStep?: (value: number) => void;
  progStep?: number;
  stepCount?: number;
  disableButtonConfig?: disableButtonConfigType;
};

export interface InterstitialScreenFooterProps {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * The label for the Previous button.
   */
  previousButtonLabel?: string;

  /**
   * The label for the skip button.
   */
  skipButtonLabel?: string;
  /**
   * The label for the start button.
   */
  startButtonLabel?: string;
  /**
   * The label for the Next button.
   */
  nextButtonLabel?: string;
  /**
   * This is an optional callback prop that allows to render your custom footer action buttons.
   */
  actionButtonRenderer?: (config: actionButtonRendererArgs) => React.ReactNode;
}
const InterstitialScreenFooter = React.forwardRef<
  HTMLDivElement,
  InterstitialScreenFooterProps
>((props) => {
  const {
    className = '',
    skipButtonLabel = 'Skip',
    previousButtonLabel = 'Back',
    nextButtonLabel = 'Next',
    startButtonLabel = 'Get Started',
    actionButtonRenderer,
  } = props;
  const blockClass = `${pkg.prefix}--interstitial-screen`;
  const {
    handleClose,
    progStep,
    handleGotoStep,
    stepCount,
    disableButtonConfig,
    isFullScreen,
  } = useContext(InterstitialScreenContext);
  const startButtonRef = useRef<HTMLElement | undefined>(undefined);
  const nextButtonRef = useRef<HTMLElement | undefined>(undefined);

  const isMultiStep = !!stepCount;
  const progStepFloor = 0;
  const progStepCeil = stepCount - 1;

  const handleClickPrev = () => {
    const targetStep = clamp(progStep - 1, progStepFloor, progStepCeil);
    handleGotoStep?.(targetStep as number);
  };

  const handleClickNext = () => {
    const targetStep = clamp(progStep + 1, progStepFloor, progStepCeil);
    handleGotoStep?.(targetStep as number);
  };

  const getRenderIcon = () => {
    if (isMultiStep && progStep === progStepCeil) {
      return { renderIcon: ArrowRight };
    }
    return {};
  };

  const handleSkip = () => {
    handleClose?.('skip');
  };
  const handleStart = () => {
    handleClose?.('start');
  };

  const getFooterContent = () => (
    <div className={`${blockClass}--footer ${className}`}>
      {isMultiStep && skipButtonLabel !== '' && (
        <Button
          className={`${blockClass}--skip-btn`}
          kind="ghost"
          size="lg"
          title={skipButtonLabel}
          onClick={handleSkip}
          disabled={disableButtonConfig?.skip}
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
            disabled={disableButtonConfig?.back}
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
            disabled={disableButtonConfig?.next}
            onClick={handleClickNext}
          >
            {nextButtonLabel}
          </Button>
        )}
        {((isMultiStep && progStep === progStepCeil) || !isMultiStep) && (
          <Button
            className={`${blockClass}--start-btn`}
            ref={startButtonRef}
            size="lg"
            title={startButtonLabel}
            disabled={disableButtonConfig?.start}
            onClick={handleStart}
            {...getRenderIcon()}
          >
            {startButtonLabel}
          </Button>
        )}
      </div>
    </div>
  );
  if (actionButtonRenderer) {
    return (
      <div className={`${blockClass}--footer`}>
        {actionButtonRenderer({
          handleGotoStep,
          progStep,
          stepCount,
          disableButtonConfig,
        })}
      </div>
    );
  }

  return isFullScreen ? (
    getFooterContent()
  ) : (
    <ModalFooter>{getFooterContent()}</ModalFooter>
  );
});

export default InterstitialScreenFooter;

InterstitialScreenFooter.propTypes = {
  /**
   * This is an optional callback prop that allows to render your custom footer action buttons.
   */
  actionButtonRenderer: PropTypes.func,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The label for the Next button.
   */
  nextButtonLabel: PropTypes.string,
  /**
   * The label for the Previous button.
   */
  previousButtonLabel: PropTypes.string,
  /**
   * The label for the skip button.
   */
  skipButtonLabel: PropTypes.string,
  /**
   * The label for the start button.
   */
  startButtonLabel: PropTypes.string,
};
