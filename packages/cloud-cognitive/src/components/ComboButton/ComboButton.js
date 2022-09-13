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

import classnames from 'classnames';
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
      size,

      // Collect any other property values passed in.
      ...rest
    }, ref
  ) => {
    const { current: instanceId } = useRef(uuidv4());
    const [isOpen, setIsOpen] = useState(false);
    const [primaryAction, ...restActions] = Children.toArray(children)
      .filter(Boolean)
      .map(({ props: { children, ...props }, type }, index) => {        
        return({
        ...props,
        children: (
          <span key={index} className={classnames({
              [`${blockClass}__action`]: type.displayName === "ComboButtonItem",
              [`${blockClass}__divider`]: type.displayName === "ComboButtonItemDivider"
            })}
            title={children}>
              {children}
          </span>
        ),
      })});
    return (
      <div
        {...rest}
        className={classnames(blockClass, className)}
        data-floating-menu-container
        ref={ref}
      >
        <Button {...primaryAction} size={size} className={`${blockClass}__btn--${size}`} disabled={disabled} />

        {restActions.length > 0 && (
          <OverflowMenu
            {...overflowMenu}
            className={classnames({
              [`${blockClass}__overflow-menu ${blockClass}__overflow-menu--${size} ${blockClass}__overflow-menu--disabled`]: disabled,
              [`${blockClass}__overflow-menu ${blockClass}__overflow-menu--${size}`]: !disabled
            })}
            
            disabled={disabled}
            menuOptionsClass={`${blockClass}__overflow-menu__list`}
            onClick={() => !isOpen && setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            renderIcon={() =>
              createElement(isOpen ? ChevronUp16 : ChevronDown16, {
                className: classnames({
                  [`${blockClass}__overflow-menu__icon--disabled`]: disabled,
                  [`${blockClass}__overflow-menu__icon`]: !disabled
                })
              })
            }
            size={size}
            flipped
          >
            {restActions.map(
              ({ children, danger, renderIcon: Icon, ...action }, index) => {
                if (children.props.type?.displayName === "ComboButtonItem") {
                  return (<OverflowMenuItem
                    {...action}
                    key={`${blockClass}--${instanceId}__overflow-menu__item__${index}`}
                    className={classnames({
                      [`${blockClass}__overflow-menu__item ${blockClass}__overflow-menu__item--danger`]: danger,
                      [`${blockClass}__overflow-menu__item`]: !danger
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
                  />)
                } else {
                  return (children)
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
  danger: bool,

  /** Provide an optional flag to disable the ComboButton */
  disabled: bool,

  /** Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu) */
  overflowMenu: shape(OverflowMenu.propTypes),

  /**
   * Set the size of the combo button
   */
  size: oneOf(['sm', 'md', 'default']),
};

//export { ComboButton };
