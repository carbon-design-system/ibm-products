/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { string } from 'prop-types';
import React from 'react';

import { pkgPrefix } from '../../global/js/settings';

const blockClass = `${pkgPrefix}--canary`;

import './_canary.scss';

/**
 *  Canary component used when the component requested is not yet production
 */
export const Canary = ({ component, className, ...rest }) => {
  const instructions = `import { getPackageFlags } from '../../experimental/src/global/js/settings';
getPackageFlags({component: {ExampleComponent: true}});`;
  return (
    <div className={cx(blockClass, className)} {...rest}>
      <h2>
        This component <strong>{component}</strong> is not ready yet.
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
