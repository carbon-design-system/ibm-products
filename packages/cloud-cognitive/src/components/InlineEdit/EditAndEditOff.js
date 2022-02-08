/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { pkg } from '../../settings';
// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--edit-and-edit-off`;

// Based on Carbon Icons Edit16 and EditOff16
export const EditAndEditOff = ({ className, ...rest }) => {
  return (
    <svg
      className={cx(blockClass, className)}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 32 32"
      role="img"
      {...rest}
    >
      <g>
        {/* masks */}
        <mask id="pencil-mask">
          {/* <!-- Everything under a white pixel will be visible --> */}
          <rect x="0" y="0" width="32" height="32" className="mask-white" />

          {/* <!-- Everything under a black pixel will be invisible --> */}
          <path
            d="M9.6 24H6 V20.4 L18 8.4 L21.6 12z"
            className="mask-black"
          ></path>
          <path
            d="M23 10.6 L19.4 7 L22.4 4 L26 7.6z"
            className="mask-black"
          ></path>
        </mask>
        <mask id="line-mask">
          <g className="underline">
            <rect
              x="0"
              y="0"
              width="32"
              height="48" // leave enough room for pencil when rotated
              className="mask-white"
            />
            <path d="M2 26 H30 V28 H2z" className="mask-black" />
          </g>
        </mask>
      </g>
      <g fill="currentColor">
        {/* image */}
        <g mask="url(#line-mask)">
          <path
            className="pencil"
            mask="url(#pencil-mask)"
            d="M4 19.6 L4 26 L10.4 26 L27.3 9.1 A2 2 0 0 0 27.3 6.1 L23.7 2.5 A2 2 0 0 0 20.9 2.7 "
          ></path>
        </g>

        <path className="underline" d="M2 28 H30 V30H2z"></path>
      </g>
    </svg>
  );
};

EditAndEditOff.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
