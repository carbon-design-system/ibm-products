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
const componentName = 'CardActions';

export interface CardActionsProps {
  /**
   * Provide the contents of the CardActions (typically CardAction components).
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
}

/**
 * CardActions is a container for action buttons in the card header.
 * Positioned in the top-right corner with 8px gap between actions.
 */
export const CardActions = ({
  children,
  className,
  ...rest
}: CardActionsProps) => {
  const classes = cx(`${blockClass}__actions`, className);

  return (
    <div {...rest} className={classes} {...getDevtoolsProps(componentName)}>
      {children}
    </div>
  );
};

CardActions.propTypes = {
  /**
   * Provide the contents of the CardActions.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};

CardActions.displayName = componentName;
