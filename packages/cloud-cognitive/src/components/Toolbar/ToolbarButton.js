/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import composeRefs from '@seznam/compose-react-refs';
import { Button } from 'carbon-components-react';

import {
  Popover,
  PopoverContent,
} from 'carbon-components-react/es/components/Popover';

import cx from 'classnames';
import { node, shape, string } from 'prop-types';
import React, { forwardRef, useRef, useState } from 'react';

import { useClickOutside } from '../../global/js/hooks';
import { pkg } from '../../settings';

import { blockClass as toolbarClass } from './Toolbar';

const blockClass = `${toolbarClass}__button`;

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
let ToolbarButton = forwardRef(
  ({ caret, children, className, onClick, popover, ...rest }, r) => {
    const ref = useRef();
    const [open, setOpen] = useState(false);

    function toggleOpen() {
      if (caret) {
        setOpen(!open);
      }
    }

    function handleClick(event) {
      toggleOpen();

      onClick?.(event);
    }

    function onClickOutside() {
      if (open) {
        toggleOpen();
      }
    }

    const button = (
      <Button
        {...rest}
        ref={composeRefs(ref, r)}
        className={cx(className, { [`${blockClass}--caret`]: caret })}
        kind="ghost"
        onClick={handleClick}
        size="md"
        hasIconOnly
      >
        <>
          {children}

          {caret && <span className={`${blockClass}__caret`} />}
        </>
      </Button>
    );

    useClickOutside(ref, onClickOutside);

    return caret ? (
      <div className={`${blockClass}__container--caret`}>
        {button}

        <Popover
          className={`${blockClass}__popover`}
          align="bottom-left"
          open={open}
          {...popover}
          caret={false}
        >
          <PopoverContent>{caret}</PopoverContent>
        </Popover>
      </div>
    ) : (
      button
    );
  }
);

const componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;

ToolbarButton.propTypes = {
  /** Provide the content of the caret */
  caret: node,

  /** Provide the content of the `ToolbarButton` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide an optional function to be called when the [`Button` is clicked](https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api) */
  onClick: Button.propTypes.onClick,

  /** Provide the [props of the `Popover`](https://react.carbondesignsystem.com/?path=/docs/experimental-unstable-popover) */
  popover: shape(Popover.propTypes),
};

ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);

export { blockClass, ToolbarButton };
