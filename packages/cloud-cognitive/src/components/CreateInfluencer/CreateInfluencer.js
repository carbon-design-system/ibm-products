/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--create-influencer`;
const componentName = 'CreateInfluencer';

export let CreateInfluencer = ({ className }) => {
  return <div className={cx(blockClass, className)}></div>;
};

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateInfluencer.displayName = componentName;

CreateInfluencer.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
