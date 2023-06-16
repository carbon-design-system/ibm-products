/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import bg from './welcome-banner-v1.svg';
import PackageInfo from '../../../ibm-products/package.json';
import { Link, Tag } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';

const Welcome = () => {
  return (
    <div
      className="welcome__container"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <hgroup className="welcome__header">
        <h2 className="welcome__heading">
          Carbon for
          <br />
          IBM Products
        </h2>
        <h4 className="welcome__subtitle">{`v${PackageInfo.version}`}</h4>
        <Tag size="md" type="blue" className="welcome__tag--xl">
          Carbon 10 (v1)
        </Tag>
      </hgroup>
      <div className="welcome__links">
        <Link
          href="https://github.com/carbon-design-system/ibm-products/blob/main/docs/guides/v2.md"
          className="welcome__link"
          renderIcon={ArrowRight16}
          size="lg"
        >
          v2 migration guide
        </Link>
        <Link
          href="https://ibm-products.carbondesignsystem.com/"
          className="welcome__link"
          renderIcon={ArrowRight16}
          size="lg"
        >
          Carbon 11 (v2) Storybook
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
