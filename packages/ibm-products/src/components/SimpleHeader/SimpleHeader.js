/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';

import React, { useCallback, useEffect } from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';
import pconsole from '../../global/js/utils/pconsole';
import { BreadcrumbWithOverflow } from '../BreadcrumbWithOverflow';
import { isRequiredIf } from '../../global/js/utils/props-helper';

const blockClass = `${pkg.prefix}--simple-header`;
const componentName = 'SimpleHeader';
/**
 * The SimpleHeader is not public and only used internally by CreateFullPage.
 *
 * Component varieties:
 * - Header with Breadcrumbs
 * - Header with Title
 * - Header with Breadcrumbs and Title
 *
 *
 * The component will throw a warning message if neither a title or breadcrumbs are provided
 * since it requires at least one of them.
 * */
const SimpleHeader = ({
  breadcrumbs,
  className,
  title,
  noTrailingSlash,
  maxVisible,
  overflowAriaLabel,
  ...rest
}) => {
  const warnIfNoTitleOrBreadcrumbs = useCallback(() => {
    if (!title && !breadcrumbs?.length) {
      pconsole.error(
        `Warning: You have tried using a ${componentName} component without specifying a title or breadcrumbs props`
      );
    }
  }, [breadcrumbs, title]);

  useEffect(() => {
    warnIfNoTitleOrBreadcrumbs();
  }, [title, breadcrumbs, warnIfNoTitleOrBreadcrumbs]);

  return (
    <header className={cx(blockClass, className)} {...rest}>
      {breadcrumbs?.length > 0 && (
        <BreadcrumbWithOverflow
          noTrailingSlash={noTrailingSlash}
          className={cx(`${blockClass}__breadcrumbs`)}
          breadcrumbs={breadcrumbs}
          maxVisible={maxVisible}
          overflowAriaLabel={overflowAriaLabel}
        />
      )}
      {title && <h1 className={cx(`${blockClass}__title`)}>{title}</h1>}
    </header>
  );
};

export const overview_arialabel_required_if_breadcrumbs_exist = isRequiredIf(
  PropTypes.string,
  (props) => props.breadcrumbs?.length > 0
);

SimpleHeader.propTypes = {
  /** Header breadcrumbs */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      /** breadcrumb item key */
      key: PropTypes.string.isRequired,
      /** breadcrumb item label */
      label: PropTypes.string.isRequired,
      /** breadcrumb item link */
      href: PropTypes.string,
      /** breadcrumb item title tooltip */
      title: PropTypes.string,
      /** Provide if this breadcrumb item represents the current page */
      isCurrentPage: PropTypes.bool,
    })
  ),

  /** Header classname */
  className: PropTypes.string,

  /**	Maximum visible breadcrumb-items before overflow is used (values less than 1 are treated as 1) */
  maxVisible: PropTypes.number,

  /** A prop to omit the trailing slash for the breadcrumbs */
  noTrailingSlash: PropTypes.bool,

  /** Label for open/close overflow button used for breadcrumb items that do not fit */
  overflowAriaLabel: overview_arialabel_required_if_breadcrumbs_exist,

  /** Header title */
  title: PropTypes.string,
};

SimpleHeader.defaultProps = {
  noTrailingSlash: true,
};

export { SimpleHeader };
