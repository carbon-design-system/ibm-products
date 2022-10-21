/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';
import {
  Button,
  OverflowMenuItem,
  OverflowMenu,
} from 'carbon-components-react';

import cx from 'classnames';
import { node, shape, string, oneOf, bool } from 'prop-types';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import React, { Children, createElement, useRef, useState } from 'react';

const blockClass = `${pkg.prefix}--combo-button`;
const componentName = 'ComboButton';

/**
 * The combo button consolidates similar actions, while exposing the most commonly used one.
 */
export let ComboButton = React.forwardRef(
  (
    // The component props, in alphabetical order (for consistency).
    {
      children,
      className,
      disabled,
      overflowMenu,
      size = 'lg',

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const { current: instanceId } = useRef(uuidv4());
    const [isOpen, setIsOpen] = useState(false);
    const [primaryAction, ...restActions] = Children.toArray(children)
      .filter(Boolean)
      .map(({ props: { children, ...props } }) => {
        return {
          ...props,
          children: (
            <span className={`${blockClass}__action`} title={children}>
              {children}
            </span>
          ),
        };
      });

    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        data-floating-menu-container
        ref={ref}
      >
        <Button
          {...primaryAction}
          size={size}
          className={`${blockClass}__btn--${size}`}
          disabled={disabled}
        />

        {restActions.length > 0 && (
          <OverflowMenu
            {...overflowMenu}
            className={cx(
              `${blockClass}__overflow-menu ${blockClass}__overflow-menu--${size}`
            )}
            disabled={disabled}
            menuOptionsClass={`${blockClass}__overflow-menu__list`}
            onClick={() => !isOpen && setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            renderIcon={() =>
              createElement(isOpen ? ChevronUp16 : ChevronDown16, {
                className: cx(`${blockClass}__overflow-menu__icon`),
              })
            }
            size={size}
            flipped
          >
            {restActions.map(
              ({ children, renderIcon: Icon, ...action }, index) => {
                return (
                  <OverflowMenuItem
                    {...action}
                    key={`${blockClass}--${instanceId}__overflow-menu__item__${index}`}
                    className={cx(`${blockClass}__overflow-menu__item`)}
                    itemText={
                      <>
                        {children}

                        {Icon && (
                          <span
                            className={`${blockClass}__overflow-menu__item__icon`}
                          >
                            <Icon />
                          </span>
                        )}
                      </>
                    }
                    size={size}
                  />
                );
              }
            )}
          </OverflowMenu>
        )}
      </div>
    );
  }
);

ComboButton = pkg.checkComponentEnabled(ComboButton, componentName);
ComboButton.displayName = componentName;
ComboButton.propTypes = {
  /** Provide an optional flag to disable entire ComboButton */
  buttonDisabled: bool,

  /** Provide the contents of the `ComboButton` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide an optional flag to disable the ComboButton or a selected ComboButtonItem */
  disabled: bool,

  /** Provide an optional flag to disable a divider between ComboButtonItems */
  hasDivider: bool,

  /** Provide an optional flag to convert a ComboButtonItem to a delete item */
  isDelete: bool,

  /** Provide an optional flag to disable selected ComboButtonItem */
  itemDisabled: bool,

  /** Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu) */
  overflowMenu: shape(OverflowMenu.propTypes),

  /**
   * Set the size of the combo button
   */
  size: oneOf(['sm', 'md', 'lg']),
};
