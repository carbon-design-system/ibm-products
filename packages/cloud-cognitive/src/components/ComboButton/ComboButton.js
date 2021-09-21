/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ChevronDown16 from '@carbon/icons-react/lib/chevron--down/16';
import ChevronUp16 from '@carbon/icons-react/lib/chevron--up/16';

import { Button, OverflowMenuItem } from 'carbon-components-react';

import { OverflowMenu } from 'carbon-components-react/lib/components/OverflowMenu/OverflowMenu';
import setupGetInstanceId from 'carbon-components-react/lib/tools/setupGetInstanceId';

import classnames from 'classnames';
import { node, shape, string } from 'prop-types';

import React, { Children, createElement, useRef, useState } from 'react';

const getInstanceId = setupGetInstanceId();

const blockClass = 'security--combo-button';

/**
 * The combo button consolidates similar actions, while exposing the most commonly used one.
 */
const ComboButton = ({ children, className, overflowMenu, ...rest }) => {
  const { current: instanceId } = useRef(getInstanceId());
  const [isOpen, setIsOpen] = useState(false);

  const [primaryAction, ...restActions] = Children.toArray(children)
    .filter(Boolean)
    .map(({ props: { children, ...props } }) => ({
      ...props,
      children: (
        <span className={`${blockClass}__action`} title={children}>
          {children}
        </span>
      ),
    }));

  return (
    <div
      {...rest}
      className={classnames(blockClass, className)}
      data-floating-menu-container
    >
      <Button {...primaryAction} />

      {restActions.length > 0 && (
        <OverflowMenu
          {...overflowMenu}
          className={`${blockClass}__overflow-menu`}
          menuOptionsClass={`${blockClass}__overflow-menu__list`}
          onClick={() => !isOpen && setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          renderIcon={() =>
            createElement(isOpen ? ChevronUp16 : ChevronDown16, {
              className: `${blockClass}__overflow-menu__icon`,
            })
          }
          flipped
        >
          {restActions.map(
            ({ children, renderIcon: Icon, ...action }, index) => (
              <OverflowMenuItem
                {...action}
                key={`${blockClass}--${instanceId}__overflow-menu__item__${index}`}
                className={`${blockClass}__overflow-menu__item`}
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
              />
            )
          )}
        </OverflowMenu>
      )}
    </div>
  );
};

ComboButton.propTypes = {
  /** Provide the contents of the `ComboButton` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide the [props of the `OverflowMenu`](https://react.carbondesignsystem.com/?path=/docs/overflowmenu) */
  overflowMenu: shape(OverflowMenu.propTypes),
};

ComboButton.defaultProps = {
  className: null,
  overflowMenu: OverflowMenu.defaultProps,
};

export { ComboButton };
