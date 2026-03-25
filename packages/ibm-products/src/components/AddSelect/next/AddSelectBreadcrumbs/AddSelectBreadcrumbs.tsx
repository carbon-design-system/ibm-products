/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ForwardedRef, useContext, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import { blockClass, AddSelectContext } from '../context';

/**
 * ----------------
 * AddSelectBreadcrumbs
 * ----------------
 */

export interface AddSelectBreadcrumbsProps {
  /**
   * Navigation path array
   */
  path?: Array<{ id: string; title: string }>;
  /**
   * Callback when breadcrumb is clicked
   */
  onBreadcrumbClick?: (index: number) => void;
  /**
   * Optional class name
   */
  className?: string;
}

const AddSelectBreadcrumbs = forwardRef<HTMLElement, AddSelectBreadcrumbsProps>(
  (
    { path = [], onBreadcrumbClick, className, ...rest },
    ref: ForwardedRef<HTMLElement>
  ) => {
    const { multi } = useContext(AddSelectContext);

    const handleClick = (
      event: MouseEvent<HTMLAnchorElement>,
      index: number
    ) => {
      event.preventDefault();
      onBreadcrumbClick?.(index);
    };

    const breadcrumbClasses = cx(`${blockClass}__breadcrumbs`, className, {
      [`${blockClass}__breadcrumbs--multi`]: multi,
    });

    return (
      <Breadcrumb
        noTrailingSlash
        className={breadcrumbClasses}
        ref={ref}
        {...rest}
      >
        {path.map((entry, idx) => {
          const isCurrentPage = idx === path.length - 1;
          return (
            <BreadcrumbItem key={entry.id} isCurrentPage={isCurrentPage}>
              {isCurrentPage ? (
                entry.title
              ) : (
                <Link
                  href="#"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                    handleClick(e, idx)
                  }
                >
                  {entry.title}
                </Link>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    );
  }
);

AddSelectBreadcrumbs.propTypes = {
  className: PropTypes.string,
  /**@ts-ignore */
  onBreadcrumbClick: PropTypes.func,
  /**@ts-ignore */
  path: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

AddSelectBreadcrumbs.displayName = 'AddSelectBreadcrumbs';

export default AddSelectBreadcrumbs;
