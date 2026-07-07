/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';
import { useCardContext } from './CardContext';

const blockClass = `${pkg.prefix}--card-next`;
const componentName = 'CardAction';

export interface CardActionProps {
  /**
   * Provide the contents of the CardAction (typically a Button or IconButton).
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Optional click handler for the action.
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

/**
 * CardAction is a neutral interaction wrapper for buttons in the card.
 * Prevents click propagation when the card is clickable, allowing actions
 * to be triggered independently of the card's click handler.
 */
export const CardAction = ({
  children,
  className,
  onClick,
  ...rest
}: CardActionProps) => {
  const { clickable } = useCardContext();
  const classes = cx(`${blockClass}__action`, className);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    // Prevent card click when action is clicked
    if (clickable) {
      event.stopPropagation();
    }
    onClick?.(event);
  };

  return (
    <div
      {...rest}
      className={classes}
      onClick={handleClick}
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </div>
  );
};

CardAction.propTypes = {
  /**
   * Provide the contents of the CardAction.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Optional click handler for the action.
   */
  onClick: PropTypes.func,
};

CardAction.displayName = componentName;
