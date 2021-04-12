/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';

/**
 * Generic component used for reacting to a click event happening outside of a
 * given `children` element. Adapted from carbon-react internal utilities, converted
 * to use React hooks.
 */
export const ClickListener = ({ children, onClickOutside }) => {
  const targetElement = useRef();
  const getEventTarget = (evt) => {
    // support Shadow DOM
    if (evt.composed && typeof evt.composedPath === 'function') {
      return evt.composedPath()[0];
    }
    return evt.target;
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });

  const handleDocumentClick = (evt) => {
    if (targetElement && targetElement.current) {
      if (
        targetElement.current.contains &&
        !targetElement.current.contains(getEventTarget(evt))
      ) {
        onClickOutside(evt);
      }
    }
  };

  const handleRef = (el) => {
    targetElement.current = el;
    /**
     * One important note, `children.ref` corresponds to a `ref` prop passed in
     * directly to the child, not necessarily a `ref` defined in the component.
     * This means that here we target the following `ref` location:
     *
     * <ClickListener onClickOutside={() => {}}>
     *   <Child ref={targetedRefHere} />
     * </ClickListener>
     */
    if (children.ref && typeof children.ref === 'function') {
      children.ref(el);
    }
  };

  return React.cloneElement(children, {
    ref: handleRef,
  });
};

ClickListener.propTypes = {
  children: PropTypes.element.isRequired,
  onClickOutside: PropTypes.func.isRequired,
};
