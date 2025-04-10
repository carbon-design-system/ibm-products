/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ import {
  ModalHeader,
  ProgressIndicator,
  ProgressStep,
} from '@carbon/react';
import React from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import cx from 'classnames';
import { InterstitialScreenContext } from './InterstitialScreen';
import { useId } from '../../global/js/utils/useId';

export interface InterstitialScreenHeaderProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children?: React.ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * Provide an optional title to be applied to the header >.
   */
  headerTitle?: string;
  /**
   * Provide an optional sub title to be applied to the header >.
   */
  headerSubTitle?: string;
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription?: string;
  /**
   * Optional parameter to hide the progress indicator when multiple steps are used.
   */
  hideProgressIndicator?: boolean;
}

export type EnrichedChildren = {
  children: React.ReactNode;
  stepTitle: string;
  translateWithId?: (id: string) => string;
};

const InterstitialScreenHeader = React.forwardRef<
  HTMLDivElement,
  InterstitialScreenHeaderProps
>((props) => {
  const {
    className = '',
    headerTitle,
    headerSubTitle,
    closeIconDescription,
    hideProgressIndicator,
    children,
  } = props;
  const { bodyChildrenData, isFullScreen, progStep, handleClose } =
    React.useContext(InterstitialScreenContext);

  const blockClass = `${pkg.prefix}--interstitial-screen`;
  const headerBlockClass = `${blockClass}--internal-header`;
  const _useId = useId();

  const headerContent = () => {
    return (
      <>
        <div className={`${blockClass}--titleContainer`}>
          {headerTitle && <h2>{headerTitle}</h2>}
          {headerSubTitle && <h3>{headerSubTitle}</h3>}
        </div>

        {children}
        {!hideProgressIndicator &&
          bodyChildrenData &&
          Array.isArray(bodyChildrenData) && (
            <div className={`${blockClass}--progress`}>
              <ProgressIndicator vertical={false} currentIndex={progStep}>
                {bodyChildrenData?.map((child: React.ReactNode, idx) => {
                  if (React.isValidElement<EnrichedChildren>(child)) {
                    const stepKey = `${_useId}_${child.props?.stepTitle?.replace(/\s+/g, '') || idx}`;

                    return (
                      <ProgressStep
                        key={stepKey}
                        label={child.props.stepTitle || ''}
                        translateWithId={child.props.translateWithId}
                      />
                    );
                  }
                })}
              </ProgressIndicator>
            </div>
          )}
      </>
    );
  };
  return isFullScreen ? (
    <header
      className={cx(headerBlockClass, className, {
        [`${headerBlockClass}--has-title`]:
          headerTitle || headerSubTitle || children,
      })}
    >
      {headerContent()}
    </header>
  ) : (
    <ModalHeader
      className={cx(headerBlockClass, className, {
        [`${headerBlockClass}--has-title`]:
          headerTitle || headerSubTitle || children,
      })}
      closeModal={handleClose}
      iconDescription={closeIconDescription}
    >
      {headerContent()}
    </ModalHeader>
  );
});

export default InterstitialScreenHeader;

InterstitialScreenHeader.propTypes = {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
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
   * Provide an optional sub title to be applied to the header >.
   */
  headerSubTitle: PropTypes.string,
  /**
   * Provide an optional title to be applied to the header >.
   */
  headerTitle: PropTypes.string,
  /**
   * Optional parameter to hide the progress indicator when multiple steps are used.
   */
  hideProgressIndicator: PropTypes.bool,
};
