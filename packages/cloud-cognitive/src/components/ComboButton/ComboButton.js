/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ChevronDown, ChevronUp } from '@carbon/react/icons';

import { Button, OverflowMenuItem, OverflowMenu } from '@carbon/react';

import cx from 'classnames';
import { node, shape, string } from 'prop-types';
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
      .map(({ props: { children, ...props }, type }, index) => {
        const updatedProps = {
          ...(type.displayName !== 'ComboButtonItemDivider' && { ...props }),
          divider:
            type.displayName === 'ComboButtonItemDivider' ? true : undefined,
        };
        return {
          ...updatedProps,
          children: (
            <span
              key={`${index}_${type?.displayName}`}
              className={cx(`${blockClass}__action`, {
                [`${blockClass}__divider`]:
                  type.displayName === 'ComboButtonItemDivider',
              })}
              title={children}
            >
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
            className={cx({
              [`${blockClass}__overflow-menu ${blockClass}__overflow-menu--${size} ${blockClass}__overflow-menu--disabled`]:
                disabled,
              [`${blockClass}__overflow-menu ${blockClass}__overflow-menu--${size}`]:
                !disabled,
            })}
            disabled={disabled}
            menuOptionsClass={`${blockClass}__overflow-menu__list`}
            onClick={() => !isOpen && setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            renderIcon={() =>
              createElement(isOpen ? ChevronUp : ChevronDown, {
                className: cx({
                  [`${blockClass}__overflow-menu__icon--disabled`]: disabled,
                  [`${blockClass}__overflow-menu__icon`]: !disabled,
                }),
              })
            }
            size={size}
            flipped
          >
            {restActions.map(
              ({ children, danger, renderIcon: Icon, ...action }, index) => {
                if (!action.divider) {
                  return (
                    <OverflowMenuItem
                      {...action}
                      key={`${blockClass}--${instanceId}__overflow-menu__item__${index}`}
                      className={cx(`${blockClass}__overflow-menu__item`, {
                        [`${blockClass}__overflow-menu__item--danger`]: danger,
                      })}
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
                } else {
                  return children;
                }
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
  /** Provide the contents of the `ComboButton` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide an optional flag to disable the ComboButton */
  disabled: bool,

  /** Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu) */
  overflowMenu: shape(OverflowMenu.propTypes),

  /**
   * Set the size of the combo button
   */
  size: oneOf(['sm', 'md', 'lg']),
};
