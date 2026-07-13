/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--card-next`;
const componentName = 'CardHeaderMedia';

export interface CardHeaderMediaProps {
  /**
   * Provide the contents of the CardHeaderMedia.
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
}

export const CardHeaderMedia = ({
  children,
  className,
  ...rest
}: CardHeaderMediaProps) => {
  const classes = cx(`${blockClass}__header-media`, className);

  return (
    <div {...rest} className={classes} {...getDevtoolsProps(componentName)}>
      {children}
    </div>
  );
};

CardHeaderMedia.propTypes = {
  /**
   * Provide the contents of the CardHeaderMedia.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};

CardHeaderMedia.displayName = componentName;
