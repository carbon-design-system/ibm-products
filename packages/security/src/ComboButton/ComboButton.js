/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ChevronDown16 from '@carbon/icons-react/lib/chevron--down/16';
import ChevronUp16 from '@carbon/icons-react/lib/chevron--up/16';

import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import setupGetInstanceId from 'carbon-components-react/es/tools/setupGetInstanceId';

import classnames from 'classnames';
import { node, string } from 'prop-types';

import React, { Children, createElement, useRef, useState } from 'react';

const getInstanceId = setupGetInstanceId();

const namespace = 'security--combo-button';

const getActionProps = ({ props: { disabled, href, ...props } }, rest) => ({
  disabled,
  href,
  ...props,
  ...rest,
});

/**
 * The combo button consolidates similar actions, while exposing the most commonly used one.
 */
const ComboButton = ({ children, className, overflowMenu, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { current: overflowMenuItemKey } = useRef(getInstanceId());

  const [primaryAction, ...restActions] = Children.toArray(children).filter(
    Boolean
  );

  return (
    <div
      {...rest}
      className={classnames(namespace, className)}
      data-floating-menu-container>
      <Button {...getActionProps(primaryAction)} />

      {restActions.length > 0 && (
        <OverflowMenu
          {...overflowMenu}
          className={`${namespace}__overflow-menu`}
          menuOptionsClass={`${namespace}__overflow-menu__list`}
          onClick={() => !isOpen && setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          renderIcon={() =>
            createElement(isOpen ? ChevronUp16 : ChevronDown16, {
              className: `${namespace}__overflow-menu__icon`,
            })
          }
          flipped>
          {restActions.map((action, index) => (
            <OverflowMenuItem
              {...getActionProps(action, { itemText: action.props.children })}
              key={`${namespace}--${overflowMenuItemKey}__overflow-menu__item__${index}`}
              className={`${namespace}__overflow-menu__item`}
            />
          ))}
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
  overflowMenu: OverflowMenu.propTypes,
};

ComboButton.defaultProps = {
  className: null,
  overflowMenu: OverflowMenu.defaultProps,
};

export default ComboButton;
