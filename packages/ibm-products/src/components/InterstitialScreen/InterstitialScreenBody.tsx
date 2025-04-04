/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  disableButtonConfigType,
  InterstitialScreenContext,
} from './InterstitialScreen';
import { ModalBody } from '@carbon/react';
import { pkg } from '../../settings';
import cx from 'classnames';

import { Carousel } from '../Carousel';

type contentRendererArgs = {
  handleGotoStep?: (value: number) => void;
  progStep?: number;
  disableActionButton: (value: disableButtonConfigType) => void;
};
export interface InterstitialScreenBodyProps {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * This is a required callback that has to return the content to render in the body section.
   * It can be a single child or an array of children depending on your need
   */
  contentRenderer: (config: contentRendererArgs) => ReactNode;
}

const InterstitialScreenBody = ({
  className,
  contentRenderer,
}: InterstitialScreenBodyProps) => {
  const blockClass = `${pkg.prefix}--interstitial-screen`;
  const bodyBlockClass = `${blockClass}--internal-body`;

  const [isMultiStep, setIsMultiStep] = useState(false);

  const {
    setBodyChildrenData,
    bodyChildrenData,
    isFullScreen,
    setProgStep,
    bodyScrollRef,
    scrollRef,
    handleGotoStep,
    progStep,
    setStepCount,
    disableButtonConfig,
    setDisableButtonConfig,
  } = useContext(InterstitialScreenContext);

  const [scrollPercent, setScrollPercent] = useState(-1);

  useEffect(() => {
    const _bodyContent: ReactNode | ReactElement = contentRenderer({
      handleGotoStep,
      progStep,
      disableActionButton,
    });
    setBodyChildrenData?.(
      isValidElement(_bodyContent)
        ? (_bodyContent.props as { children: ReactNode }).children
        : _bodyContent
    );
    if (
      isValidElement(_bodyContent) &&
      Array.isArray((_bodyContent.props as { children: ReactNode }).children)
    ) {
      setIsMultiStep(
        !!(_bodyContent.props as { children: ReactNode[] }).children?.length
      );
      setStepCount?.(
        (_bodyContent.props as { children: ReactNode[] }).children?.length
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progStep]);

  useEffect(() => {
    if (scrollPercent !== -1) {
      const stepSize =
        bodyChildrenData && (bodyChildrenData as ReactNode[]).length > 1
          ? parseFloat(
              (1 / ((bodyChildrenData as ReactNode[]).length - 1)).toFixed(2)
            )
          : 0;
      const currentStep = scrollPercent / stepSize;

      setProgStep?.(Math.ceil(currentStep));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPercent]);

  const disableActionButton = (config: disableButtonConfigType) => {
    setDisableButtonConfig?.({
      ...disableButtonConfig,
      ...config,
    });
  };

  const onScrollHandler = (scrollPercent) => setScrollPercent(scrollPercent);

  const renderBody = () => (
    <div className={`${blockClass}--body ${className}`} ref={bodyScrollRef}>
      <div className={cx(`${blockClass}--content`)}>
        {isMultiStep ? (
          <div className={`${blockClass}__carousel`}>
            <Carousel
              disableArrowScroll
              ref={scrollRef}
              onScroll={onScrollHandler}
            >
              {bodyChildrenData}
            </Carousel>
          </div>
        ) : (
          <div>{bodyChildrenData}</div>
        )}
      </div>
    </div>
  );

  return isFullScreen ? (
    renderBody()
  ) : (
    <ModalBody className={bodyBlockClass}>{renderBody()}</ModalBody>
  );
};

export default InterstitialScreenBody;

InterstitialScreenBody.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * This is a required callback that has to return the content to render in the body section.
   * It can be a single child or an array of children depending on your need
   */
  contentRenderer: PropTypes.func.isRequired,
};
