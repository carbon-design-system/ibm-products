/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Lottie from "lottie-react";
import bg from './welcome-banner-v2.svg';
import lottie from './welcome-lottie.json';
import PackageInfo from '../../../ibm-products/package.json';
import { Link, Tag } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';


const Welcome = () => {

  const LottieOptions = {
    animationData: lottie,
    loop: true
  };


  const Example = () => {
    return <Lottie className="lottie" animationData={lottie} />;
  };


  return (
    <div class="welcome-container--outer">
      <div
        className="welcome__container--inner "
        // style={{
        //   backgroundImage: `url(${bg})`,
        // }}
      >
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
        <Example />
      </div>
    </div>
  </div>
  );
};

export default Welcome;
