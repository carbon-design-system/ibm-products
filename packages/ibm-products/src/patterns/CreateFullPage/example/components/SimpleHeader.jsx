/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useEffect } from 'react';
import cx from 'classnames';
import { BreadcrumbWithOverflow } from './BreadcrumbWithOverflow';
import { Heading } from '@carbon/react';

const blockClass = 'simple-header';
const componentName = 'SimpleHeader';

const SimpleHeader = ({
  breadcrumbs,
  className,
  title,
  noTrailingSlash = true,
  maxVisible,
  overflowAriaLabel,
  overflowTooltipAlign,
  ...rest
}) => {
  const warnIfNoTitleOrBreadcrumbs = useCallback(() => {
    if (!title && !breadcrumbs?.length) {
      console.log(
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
          overflowTooltipAlign={overflowTooltipAlign}
        />
      )}
      {title && (
        <Heading className={cx(`${blockClass}__title`)}>{title}</Heading>
      )}
    </header>
  );
};

export { SimpleHeader };
