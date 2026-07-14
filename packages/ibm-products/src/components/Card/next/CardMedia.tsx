/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AspectRatio, AspectRatioProps } from '@carbon/react';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--card-next`;
const componentName = 'CardMedia';

export interface CardMediaProps extends Omit<AspectRatioProps, 'className'> {
  /**
   * Provide the contents of the CardMedia.
   */
  children?: React.ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
}

/**
 * CardMedia is a media slot component that maintains aspect ratio using Carbon's AspectRatio.
 * Used for images, profiles, tags, large pictograms, and other substantial content in the card.
 * Supports all Carbon AspectRatio props including ratio: '1x1', '2x1', '2x3', '3x2', '4x3', '9x16', '16x9'
 */
export const CardMedia = ({ children, className, ...rest }: CardMediaProps) => {
  const classes = cx(`${blockClass}__media`, className);

  return (
    <AspectRatio
      {...rest}
      className={classes}
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </AspectRatio>
  );
};

CardMedia.propTypes = {
  /**
   * Provide the contents of the CardMedia.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};

CardMedia.displayName = componentName;
