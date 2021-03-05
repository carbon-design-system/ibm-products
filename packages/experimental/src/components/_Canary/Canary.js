/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { string } from 'prop-types';
import React from 'react';

import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}-canary`;

import './_canary.scss';

/**
 *  Canary component used when the component requested is not yet production
 */
export const Canary = ({ component, className, ...rest }) => {
  const componentName = component?.name || component;

  const instructions = `
import { pkg } from '@carbon/ibm-cloud-cognitive-experimental';
// NOTE: must happen before component import
pkg.component[${componentName}] = true;
`;
  return (
    <div className={cx(blockClass, className)} {...rest}>
      <h2>
        This component <strong>{componentName}</strong> is not ready yet.
      </h2>
      <p>
        To enable this initialize package flags before any components are
        loaded, passing an override object.
      </p>
      <br />
      <p>e.g. in main.js</p>
      <pre className={`${blockClass}--code`}>{instructions}</pre>
    </div>
  );
};

Canary.propTypes = {
  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Name of the component that is not ready yet */
  component: string.isRequired,
};

Canary.defaultProps = {
  className: null,
};
