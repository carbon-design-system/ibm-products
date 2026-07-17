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

  /**
   * Optional leading icon or content to display before the title text.
   * Typically used for icons that adapt to title size:
   * - Productive density: 16px icon recommended
   * - Expressive density: 24px icon recommended
   */
  titleStart?: ReactNode;

  /**
   * Optional trailing icon or content to display after the title text.
   * Typically used for icons that adapt to title size:
   * - Productive density: 16px icon recommended
   * - Expressive density: 24px icon recommended
   */
  titleEnd?: ReactNode;
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
  titleStart,
  titleEnd,
  ...rest
}: CardTitleProps) => {
  const classes = cx(
    `${blockClass}__title`,
    {
      [`${blockClass}__title--truncate`]: truncate === true,
      [`${blockClass}__title--truncate-multi`]: typeof truncate === 'number',
      [`${blockClass}__title--with-start-icon`]: titleStart,
      [`${blockClass}__title--with-end-icon`]: titleEnd,
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
      {titleStart && (
        <span className={`${blockClass}__title-start-icon`}>{titleStart}</span>
      )}
      {children}
      {titleEnd && (
        <span className={`${blockClass}__title-end-icon`}>{titleEnd}</span>
      )}
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
   * Optional trailing icon or content to display after the title text.
   */
  titleEnd: PropTypes.node,

  /**
   * Optional leading icon or content to display before the title text.
   */
  titleStart: PropTypes.node,

  /**
   * Enable text truncation with ellipsis.
   */
  truncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

CardTitle.displayName = componentName;
