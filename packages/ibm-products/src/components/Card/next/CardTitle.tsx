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
const componentName = 'CardTitle';

export interface CardTitleProps {
  /**
   * Provide the contents of the CardTitle.
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Enable text truncation with ellipsis.
   * - `true`: Single line truncation
   * - `number`: Multi-line truncation (line clamp)
   * @default false
   */
  truncate?: boolean | number;

  /**
   * Maximum width for the title.
   * @default '640px'
   */
  maxWidth?: string;
}

/**
 * CardTitle displays the main title text in the card header.
 * Typography is controlled via className:
 * - Productive: Use $heading-compact-02 (16px/22px)
 * - Expressive: Use $heading-03 (20px/28px)
 * Color uses $text-primary token.
 */
export const CardTitle = ({
  children,
  className,
  truncate = false,
  maxWidth = '640px',
  ...rest
}: CardTitleProps) => {
  const classes = cx(
    `${blockClass}__title`,
    {
      [`${blockClass}__title--truncate`]: truncate === true,
      [`${blockClass}__title--truncate-multi`]: typeof truncate === 'number',
    },
    className
  );

  const style =
    typeof truncate === 'number'
      ? {
          WebkitLineClamp: truncate,
          maxWidth,
        }
      : { maxWidth };

  return (
    <div
      {...rest}
      className={classes}
      style={style}
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </div>
  );
};

CardTitle.propTypes = {
  /**
   * Provide the contents of the CardTitle.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Maximum width for the title.
   */
  maxWidth: PropTypes.string,

  /**
   * Enable text truncation with ellipsis.
   */
  truncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

CardTitle.displayName = componentName;
