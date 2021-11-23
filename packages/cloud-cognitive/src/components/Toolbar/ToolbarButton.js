/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  unstable_Popover as Popover,
  unstable_PopoverContent as PopoverContent,
} from 'carbon-components-react';

import cx from 'classnames';
import { bool, func, node, shape, string } from 'prop-types';
import React, { forwardRef, useContext, useRef, useState } from 'react';

import { useClickOutside } from '../../global/js/hooks';
import { pkg } from '../../settings';

import { blockClass as toolbarClass, ToolbarContext } from './Toolbar';

const blockClass = `${toolbarClass}__button`;

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
let ToolbarButton = forwardRef(
  (
    {
      children,
      className,
      onClick,
      onClose,
      onOpen,
      popover,
      renderCaret: Caret,
      ...rest
    },
    r
  ) => {
    const _ref = useRef();
    const ref = r || _ref;

    const [open, setOpen] = useState(popover?.open);

    function toggleOpen() {
      if (Caret) {
        const onToggle = open ? onClose : onOpen;

        onToggle?.();

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
        tooltipPosition={useContext(ToolbarContext)?.vertical && 'right'}
        {...rest}
        ref={ref}
        className={cx(className, { [`${blockClass}--caret`]: Caret })}
        {...(Caret && {
          'aria-expanded': open,
          'aria-haspopup': typeof Caret !== 'undefined',
        })}
        kind="ghost"
        onClick={handleClick}
        size="md"
        hasIconOnly
      >
        <>
          {children}

          {Caret && <span className={`${blockClass}__caret`} />}
        </>
      </Button>
    );

    useClickOutside(ref, onClickOutside);

    return Caret ? (
      <div className={`${blockClass}__container--caret`}>
        {button}

        {open && (
          <Popover align="bottom-left" open={open} {...popover} caret={false}>
            <PopoverContent>
              <Caret />
            </PopoverContent>
          </Popover>
        )}
      </div>
    ) : (
      button
    );
  }
);

const componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;

ToolbarButton.propTypes = {
  /** Provide the content of the `ToolbarButton` */
  children: node,

  /** Provide a class to be applied to the containing node */
  className: string,

  /** Provide a function to be called when the [`Button` is clicked](https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api) */
  onClick: Button.propTypes.onClick,

  /** Provide a function to be called when the caret is closed */
  onClose: func,

  /** Provide a function to be called when the caret is opened */
  onOpen: func,

  /** Provide the [props of the `Popover`](https://carbon-react-next.netlify.app/?path=/docs/experimental-unstable-popover--playground#component-api) */
  popover: shape({ ...Popover.propTypes, open: bool }),

  /** Provide the rendering content of the caret */
  renderCaret: func,
};

ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);

export { blockClass, ToolbarButton };
