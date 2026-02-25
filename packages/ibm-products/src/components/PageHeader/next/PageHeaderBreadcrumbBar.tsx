/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { type ComponentType, type FunctionComponent } from 'react';
import classnames from 'classnames';
import { Column, Grid } from '@carbon/react';
import { blockClass } from '../PageHeaderUtils';
import { PageHeaderContext, usePageHeader } from './context';

/**
 * -----------------------
 * PageHeaderBreadcrumbBar
 * -----------------------
 */
export interface PageHeaderBreadcrumbBarProps {
  /**
   * `true` by default to render BreadcrumbBar bottom border.
   */
  border?: boolean;
  children?: React.ReactNode;
  className?: string;
  /**
   * Provide an optional icon to render in front of the PageHeaderContent's title.
   */
  renderIcon?: ComponentType | FunctionComponent;
  /**
   * The PageHeaderBreadcrumbBar's content actions
   */
  contentActions?: React.ReactNode;
  /**
   * `true` to set content actions flush against page actions
   */
  contentActionsFlush?: boolean;
  /**
   * The PageHeaderContent's page actions
   */
  pageActions?: React.ReactNode;
  /**
   * `true` to set page actions flush with page
   */
  pageActionsFlush?: boolean;
}

export const PageHeaderBreadcrumbBar = React.forwardRef<
  HTMLDivElement,
  PageHeaderBreadcrumbBarProps
>(function PageHeaderBreadcrumbBar(
  {
    border = true,
    className,
    children,
    renderIcon: IconElement,
    contentActions,
    contentActionsFlush,
    pageActions,
    pageActionsFlush,
    ...other
  }: PageHeaderBreadcrumbBarProps,
  ref
) {
  const context = usePageHeader();
  const { pageActionsInstance: globalActions, contentActionsClipped } = context;
  const classNames = classnames(
    {
      [`${blockClass}__breadcrumb-bar`]: true,
      [`${blockClass}__breadcrumb-bar-border`]: border,
      [`${blockClass}__breadcrumb__actions-flush`]: pageActionsFlush,
    },
    className
  );

  const contentActionsClasses = classnames({
    [`${blockClass}__breadcrumb__content-actions`]: !contentActionsFlush,
    [`${blockClass}__breadcrumb__content-actions-with-global-actions`]:
      !!globalActions,
    [`${blockClass}__breadcrumb__content-actions-with-global-actions--show`]:
      contentActionsClipped,
  });

  return (
    <PageHeaderContext.Provider
      value={{
        ...context,
        isContentActionsInBreadcrumbBar: true,
      }}
    >
      <div className={classNames} ref={ref} {...other}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <div className={`${blockClass}__breadcrumb-container`}>
              <div className={`${blockClass}__breadcrumb-wrapper`}>
                {IconElement && (
                  <div className={`${blockClass}__breadcrumb__icon`}>
                    <IconElement />
                  </div>
                )}
                {children}
              </div>
              <div className={`${blockClass}__breadcrumb__actions`}>
                <div className={contentActionsClasses}>{contentActions}</div>
                {pageActions}
              </div>
            </div>
          </Column>
        </Grid>
      </div>
    </PageHeaderContext.Provider>
  );
});

PageHeaderBreadcrumbBar.displayName = 'PageHeaderBreadcrumbBar';
