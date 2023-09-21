/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import PropTypes from 'prop-types';

import React, { useCallback, useEffect } from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';
import pconsole from '../../global/js/utils/pconsole';

const blockClass = `${pkg.prefix}--basic-header`;
const componentName = 'BasicHeader';
/**
 * The BasicHeader is not not public and only used internally by CreateFullPage.
 *
 * Component varieties:
 * - Header with Breadcrumbs
 * - Header with Title
 * - Header with Breadcrumbs and Title
 *
 *
 * The component will throw a warning message if neither a title nor breadcrumbs are provided
 * since it requires at least one of them.
 * */
const BasicHeader = ({
  breadcrumbs,
  className,
  title,
  noTrailingSlash,
  ...rest
}) => {
  const warnIfNoTitleOrBreadcrumbs = useCallback(() => {
    if (!title && !breadcrumbs?.length) {
      pconsole.error(
        `Warning: You have tried using a ${componentName} component without specifying a title nor breadcrumbs props`
      );
    }
  }, [breadcrumbs?.length, title]);

  useEffect(() => {
    warnIfNoTitleOrBreadcrumbs();
  }, [title, breadcrumbs, warnIfNoTitleOrBreadcrumbs]);

  return (
    <header className={cx(blockClass, className)} {...rest}>
      {breadcrumbs?.length > 0 && (
        <Breadcrumb
          noTrailingSlash={noTrailingSlash}
          className={cx(`${blockClass}__breadcrumbs`)}
        >
          {breadcrumbs.map(({ key, label, href }) => (
            <BreadcrumbItem key={key} href={href}>
              {label}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      {title && <h1 className={cx(`${blockClass}__title`)}>{title}</h1>}
    </header>
  );
};

BasicHeader.propTypes = {
  /** Header breadcrumbs */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      /** breadcrumb item key */
      key: PropTypes.string.isRequired,
      /** breadcrumb item label */
      label: PropTypes.string.isRequired,
      /** breadcrumb item link */
      link: PropTypes.string,
    })
  ),

  /** Header classname */
  className: PropTypes.string,

  /** A prop to omit the trailing slash for the breadcrumbs */
  noTrailingSlash: PropTypes.bool,

  /** Header title */
  title: PropTypes.string,
};

BasicHeader.defaultProps = {
  noTrailingSlash: false,
};

export { BasicHeader };
