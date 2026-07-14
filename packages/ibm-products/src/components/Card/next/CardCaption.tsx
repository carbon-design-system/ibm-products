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
const componentName = 'CardCaption';

export interface CardCaptionProps {
  /**
   * Provide the contents of the CardCaption.
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Enable text truncation with ellipsis.
   * @default false
   */
  truncate?: boolean;
}

/**
 * CardCaption displays secondary text below the title in the card header.
 * Uses $label-01 typography token and $text-secondary color.
 */
export const CardCaption = ({
  children,
  className,
  truncate = false,
  ...rest
}: CardCaptionProps) => {
  const classes = cx(
    `${blockClass}__caption`,
    {
      [`${blockClass}__caption--truncate`]: truncate,
    },
    className
  );

  return (
    <div {...rest} className={classes} {...getDevtoolsProps(componentName)}>
      {children}
    </div>
  );
};

CardCaption.propTypes = {
  /**
   * Provide the contents of the CardCaption.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Enable text truncation with ellipsis.
   */
  truncate: PropTypes.bool,
};

CardCaption.displayName = componentName;
