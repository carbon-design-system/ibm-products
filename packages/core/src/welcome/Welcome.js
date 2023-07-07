/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import PackageInfo from '../../../ibm-products/package.json';
import { Link, Tag } from '@carbon/react';
import { ArrowRight, Pause, Play } from '@carbon/icons-react';
import Lottie from 'lottie-react';
import WelcomeLottie from './welcome-lottie.json';

const Welcome = () => {
  const lottieRef = useRef();

  let prefersReducedMotion = window.matchMedia(
    `(prefers-reduced-motion: reduce)`
  ).matches;
  let isAnimating = !prefersReducedMotion;

  const toggleAnimation = () => {
    isAnimating = !isAnimating;
    if (isAnimating) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  };

  const WelcomeAnimation = () => {
    return (
      <Lottie
        className="welcome__lottie"
        animationData={WelcomeLottie}
        autoplay={!prefersReducedMotion}
        loop={true}
        lottieRef={lottieRef}
      />
    );
  };

  return (
    <div className="welcome__container--outer">
      <div className="welcome__container--inner">
        <div className="welcome__col--left">
          <hgroup className="welcome__header">
            <h2 className="welcome__heading">
              Carbon for
              <br />
              IBM Products
            </h2>
            <h4 className="welcome__subtitle">{`v${PackageInfo.version}`}</h4>
            <Tag size="md" type="purple" className="welcome__tag--xl">
              Carbon 11 (v2)
            </Tag>
          </hgroup>
          <div className="welcome__links">
            <Link
              href="https://github.com/carbon-design-system/ibm-products/blob/main/docs/guides/v2.md"
              className="welcome__link"
              renderIcon={ArrowRight}
              size="lg"
            >
              Migration guide
            </Link>
            <Link
              href="https://v1-ibm-products.carbondesignsystem.com/"
              className="welcome__link"
              renderIcon={ArrowRight}
              size="lg"
            >
              Carbon 10 (v1) Storybook
            </Link>
          </div>
        </div>
        <div className="welcome__col--right">
          <WelcomeAnimation />
          <button
            type="button"
            className="welcome__pause-button"
            onClick={toggleAnimation}
          >
            {isAnimating ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
