/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ReactNode } from 'react';
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
  titleTruncate?: boolean | number;

  /**
   * Maximum width for the title.
   * @default '100%'
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

  /**
   * Optional label rendered above the title text.
   * Uses $label-01 typography and $text-secondary color.
   */
  label?: ReactNode;

  /**
   * Enable truncation on the label text.
   * - `true`: Single line truncation
   * - `number`: Multi-line truncation (line clamp)
   * @default false
   */
  labelTruncate?: boolean | number;

  /**
   * Optional description rendered below the title text.
   * Uses $label-01 typography and $text-secondary color.
   */
  description?: ReactNode;

  /**
   * Enable truncation on the description text.
   * - `true`: Single line truncation
   * - `number`: Multi-line truncation (line clamp)
   * @default false
   */
  descriptionTruncate?: boolean | number;
}

/**
 * CardTitle displays the main title text in the card header.
 * Typography is controlled via className:
 * - Productive: Use $heading-compact-02 (16px/22px)
 * - Expressive: Use $heading-03 (20px/28px)
 * Color uses $text-primary token.
 */
export let CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  (
    {
      children,
      className,
      titleTruncate = false,
      maxWidth = '100%',
      titleStart,
      titleEnd,
      label,
      labelTruncate = false,
      description,
      descriptionTruncate = false,
      ...rest
    },
    ref
  ) => {
    const isTitleMulti = typeof titleTruncate === 'number';
    const isLabelMulti = typeof labelTruncate === 'number';
    const isDescMulti = typeof descriptionTruncate === 'number';

    const containerClasses = cx(`${blockClass}__title`, className);

    // Truncation and icon-row classes live on the inner text-row span so they
    // never override the outer container's display:flex flex-direction:column,
    // which is required to keep label / title-row / description stacked.
    const textRowClasses = cx(`${blockClass}__title-text-row`, {
      [`${blockClass}__title-text-row--truncate`]: titleTruncate === true,
      [`${blockClass}__title-text-row--truncate-multi`]: isTitleMulti,
      [`${blockClass}__title-text-row--with-start-icon`]: titleStart,
      [`${blockClass}__title-text-row--with-end-icon`]: titleEnd,
    });

    // Dynamic values (line-clamp count, max-width) are passed as CSS custom
    // properties so the SCSS rules can read them via var(). This avoids inline
    // style values entirely — presentation stays in CSS where it belongs.
    const titleVars =
      titleTruncate !== false
        ? {
            [`--${blockClass}--title-max-width`]: maxWidth,
            ...(isTitleMulti && {
              [`--${blockClass}--title-line-clamp`]: titleTruncate,
            }),
          }
        : undefined;

    const labelVars = isLabelMulti
      ? { [`--${blockClass}--label-line-clamp`]: labelTruncate }
      : undefined;

    const descVars = isDescMulti
      ? { [`--${blockClass}--description-line-clamp`]: descriptionTruncate }
      : undefined;

    return (
      <div
        {...rest}
        ref={ref}
        className={containerClasses}
        {...getDevtoolsProps(componentName)}
      >
        {label && (
          <div
            className={cx(`${blockClass}__label`, {
              [`${blockClass}__label--truncate`]: labelTruncate === true,
              [`${blockClass}__label--truncate-multi`]: isLabelMulti,
            })}
            style={labelVars as React.CSSProperties}
          >
            {label}
          </div>
        )}
        {/* Title text row: icon + text + end-icon in one flex row.
            Truncation is applied here so description remains visible below. */}
        <span
          className={textRowClasses}
          style={titleVars as React.CSSProperties}
        >
          {titleStart && (
            <span className={`${blockClass}__title-start-icon`}>
              {titleStart}
            </span>
          )}
          {children}
          {titleEnd && (
            <span className={`${blockClass}__title-end-icon`}>{titleEnd}</span>
          )}
        </span>
        {description && (
          <div
            className={cx(`${blockClass}__description`, {
              [`${blockClass}__description--truncate`]:
                descriptionTruncate === true,
              [`${blockClass}__description--truncate-multi`]: isDescMulti,
            })}
            style={descVars as React.CSSProperties}
          >
            {description}
          </div>
        )}
      </div>
    );
  }
);

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
   * Optional description rendered below the title text.
   */
  description: PropTypes.node,

  /**
   * Enable truncation on the description text.
   * - `true`: Single line truncation
   * - `number`: Multi-line truncation (line clamp)
   */
  descriptionTruncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /**
   * Optional label rendered above the title text.
   */
  label: PropTypes.node,

  /**
   * Enable truncation on the label text.
   * - `true`: Single line truncation
   * - `number`: Multi-line truncation (line clamp)
   */
  labelTruncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /**
   * Maximum width for the title when truncation is active.
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
   * - `true`: Single line truncation
   * - `number`: Multi-line truncation (line clamp)
   */
  titleTruncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

CardTitle = pkg.checkComponentEnabled(CardTitle, componentName);
CardTitle.displayName = componentName;
