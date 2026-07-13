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
const componentName = 'CardLabel';

export interface CardLabelProps {
  /**
   * Provide the contents of the CardLabel.
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
 * CardLabel displays secondary text above the title in the card header.
 * Uses $label-01 typography token and $text-secondary color.
 */
export const CardLabel = ({
  children,
  className,
  truncate = false,
  ...rest
}: CardLabelProps) => {
  const classes = cx(
    `${blockClass}__label`,
    {
      [`${blockClass}__label--truncate`]: truncate,
    },
    className
  );

  return (
    <div {...rest} className={classes} {...getDevtoolsProps(componentName)}>
      {children}
    </div>
  );
};

CardLabel.propTypes = {
  /**
   * Provide the contents of the CardLabel.
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

CardLabel.displayName = componentName;
