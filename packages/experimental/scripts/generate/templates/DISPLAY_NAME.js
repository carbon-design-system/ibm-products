/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React from 'react';

import { prjPrefix } from '../../global/js/settings';

const blockClass = `${prjPrefix}--STYLE_NAME`;

/**
 * TODO: Description.
 */
export const DISPLAY_NAME = ({ children, className, ...rest }) => {
  return (
    <div className={classnames(blockClass, className)} {...rest}>
      {children}
    </div>
  );
};

// TODO: Prop type checking - https://www.npmjs.com/package/prop-types#usage
DISPLAY_NAME.propTypes = {
  /** Provide the contents of the `DISPLAY_NAME` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

DISPLAY_NAME.defaultProps = {
  className: null,
};
