/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { bool, node, string } from 'prop-types';

import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { getFocusableElements as _getFocusableElements } from '../../global/js/utils/getFocusableElements';
import { pkg } from '../../settings';

const { checkComponentEnabled, prefix } = pkg;
const blockClass = `${prefix}--toolbar`;

const ToolbarContext = createContext();

/** Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands. */
let Toolbar = forwardRef(({ children, className, vertical, ...rest }, r) => {
  const _ref = useRef();
  const ref = r || _ref;

  const focusableElements = useRef();

  const getFocusableElements = useCallback(
    () => focusableElements.current,
    [focusableElements]
  );

  const [focus, setFocus] = useState();

  const [arrowPrevious, arrowNext] = !vertical
    ? ['ArrowLeft', 'ArrowRight']
    : ['ArrowUp', 'ArrowDown'];

  function onArrowDown(increment) {
    const nextFocus = focus + increment;

    getFocusableElements()[nextFocus] && setFocus(nextFocus);
  }

  function onFocus({ target }) {
    const elements = getFocusableElements();

    elements.includes(target) && setFocus(elements.indexOf(target));
  }

  function onKeyDown({ key, target }) {
    if (getFocusableElements().includes(target)) {
      switch (key) {
        case arrowNext:
          onArrowDown(1);
          break;

        case arrowPrevious:
          onArrowDown(-1);
          break;
      }
    }
  }

  useEffect(() => {
    focusableElements.current = _getFocusableElements(ref.current);

    typeof focus !== 'undefined' &&
      getFocusableElements().forEach((element, index) => {
        element[index !== focus ? 'setAttribute' : 'removeAttribute'](
          'tabindex',
          -1
        );
      });
  });

  useEffect(() => {
    typeof focus !== 'undefined' && getFocusableElements()[focus].focus();
  }, [focus, getFocusableElements]);

  return (
    <div
      {...rest}
      ref={ref}
      className={cx(blockClass, className, {
        [`${blockClass}--vertical`]: vertical,
      })}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      {...(vertical && { 'aria-orientation': 'vertical' })}
      role="toolbar"
    >
      <ToolbarContext.Provider value={{ vertical }}>
        {children}
      </ToolbarContext.Provider>
    </div>
  );
});

const componentName = 'Toolbar';
Toolbar.displayName = componentName;

Toolbar.propTypes = {
  /** Provide the content of the `Toolbar` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Determines whether the `Toolbar` is rendered vertically */
  vertical: bool,
};

Toolbar = checkComponentEnabled(Toolbar, componentName);

export { blockClass, componentName, Toolbar, ToolbarContext };
