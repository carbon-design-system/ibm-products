/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import classnames from 'classnames';
import { Column, Grid } from '@carbon/react';
import { blockClass } from '../PageHeaderUtils';
import { pkg } from '../../../settings';

/**
 * ----------------
 * PageHeaderTabBar
 * ----------------
 */
export interface PageHeaderTabBarProps {
  children?: React.ReactNode;
  className?: string;
  tags?: React.ReactNode;
  scroller?: React.ReactNode;
}

export const PageHeaderTabBar = React.forwardRef<
  HTMLDivElement,
  PageHeaderTabBarProps
>(function PageHeaderTabBar(
  { className, children, tags, scroller, ...other }: PageHeaderTabBarProps,
  ref
) {
  const classNames = classnames(
    {
      [`${blockClass}__tab-bar`]: true,
    },
    className
  );

  const renderScroller = () =>
    scroller && (
      <div className={`${pkg.prefix}--page-header--scroller-button-container`}>
        {scroller}
      </div>
    );

  // Early return if no tags are provided
  if (!tags) {
    return (
      <div className={classNames} ref={ref} {...other}>
        <Grid condensed>
          <Column lg={16} md={8} sm={4}>
            {children}
            {renderScroller()}
          </Column>
        </Grid>
      </div>
    );
  }

  return (
    <div className={classNames} ref={ref} {...other}>
      <Grid condensed>
        <Column lg={16} md={8} sm={4}>
          <div
            className={classnames(`${blockClass}__tab-bar--tablist`, {
              [`${pkg.prefix}--page-header__tab-bar--with-scroller`]:
                !!scroller,
            })}
          >
            {children}
            {tags}
            {renderScroller()}
          </div>
        </Column>
      </Grid>
    </div>
  );
});

PageHeaderTabBar.displayName = 'PageHeaderTabBar';
