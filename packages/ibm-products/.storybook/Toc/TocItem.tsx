/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useToc } from './Toc';
import { usePrefix } from '@carbon-labs/utilities/usePrefix';
import cx from 'classnames';
import React, { HTMLProps, useEffect, useRef } from 'react';
import { useTocListContext } from './TocList';

interface TocItemProps extends HTMLProps<HTMLLIElement> {
  children: React.ReactNode;
  /**
   * Internally used and passed in programmatically. Any value provided will be overwritten.
   * */
  isActive?: boolean;
  /**
   * Internally used and passed in programmatically. Any value provided will be overwritten.
   * */
  index?: number;
}

const TocItem = ({
  children,
  isActive,
  className,
  index = Infinity,
  ...rest
}: TocItemProps) => {
  const labsPrefix = usePrefix();
  const prefix = `${labsPrefix}--whats-new`;

  const { scrollToSection } = useToc();
  const { registerRef, handleKeyDown } = useTocListContext();
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    registerRef(index, ref);
  }, [index, registerRef]);

  if (!isFinite(index)) {
    return null;
  }

  return (
    <li
      {...rest}
      className={cx(
        {
          [`${prefix}__toc-item`]: true,
          [`${prefix}__toc-item-active`]: isActive,
        },
        className
      )}
      data-index={index}
    >
      <a
        role="button"
        onKeyDown={handleKeyDown}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(index);
        }}
      >
        {children}
      </a>
    </li>
  );
};

TocItem.displayName = 'TocItem';

export { TocItem };
export type { TocItemProps };
