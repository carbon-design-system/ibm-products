/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass } from './context';

export interface ContentBodyProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
}

export type EnrichedChildren = {
  children: ReactNode;
};

export const ContentBody = forwardRef<HTMLDivElement, ContentBodyProps>(
  (props, ref) => {
    const { className = '', children, ...rest } = props;
    const ContentBodyBlockClass = `${blockClass}--content-body`;
    return (
      <div ref={ref} className={cx(ContentBodyBlockClass, className)}>
        {children}
      </div>
    );
  }
);

export default ContentBody;

ContentBody.propTypes = {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
