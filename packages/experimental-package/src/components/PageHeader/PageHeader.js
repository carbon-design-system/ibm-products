//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// import { settings } from 'carbon-components';
// const { prefix } = settings;

import { expPrefix } from '../../global/js/settings';

import { useWindowResize, useWindowScroll } from '../../global/js/use';

import {
  BreadcrumbItem,
  Grid,
  Column,
  Row,
  Breadcrumb,
} from 'carbon-components-react';

import { ActionBar } from './ActionBar';

const blockClass = `${expPrefix}-page-header`;

export const PageHeader = ({
  actionBarItems,
  availableSpace,
  background,
  breadcrumbItems,
  className,
  navigation,
  pageActions,
  subtitle,
  tags,
  title,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [titleInBreadcrumbs, setTitleInBreadcrumbs] = useState(true);

  // const halfColumns = { sm: 2, md: 4, lg: 8 };

  // const halfOrFull = (test) => (test ? { ...halfColumns } : {});

  useWindowScroll(({ previous, current }) => {
    console.dir(JSON.stringify({ on: 'scroll', previous, current }));
  });

  useWindowResize(({ previous, current }) => {
    console.dir(JSON.stringify({ on: 'resize', previous, current }));
  });

  return (
    <section
      className={cx([
        blockClass,
        className,
        { [`${blockClass}--background`]: background },
      ])}>
      <Grid>
        {!(breadcrumbItems === undefined && actionBarItems === undefined) ? (
          <Row className={`${blockClass}--breadcrumb-row`}>
            <Column className={`${blockClass}--breadcrumb-space`}>
              {/* keeps actionBar right even if empty */}

              {breadcrumbItems !== undefined ? (
                <Breadcrumb
                  className={`${blockClass}--breadcrumb`}
                  noTrailingSlash={titleInBreadcrumbs && !!title}>
                  {breadcrumbItems}
                  {title && titleInBreadcrumbs ? (
                    <BreadcrumbItem href="#" isCurrentPage={true}>
                      {title}
                    </BreadcrumbItem>
                  ) : (
                    ''
                  )}
                </Breadcrumb>
              ) : (
                <div className="just-for-spacing"></div>
              )}
            </Column>

            {actionBarItems !== undefined ? (
              <Column className={`${blockClass}--action-bar`}>
                <ActionBar className={`${blockClass}--action-bar`}>
                  {actionBarItems}
                </ActionBar>
              </Column>
            ) : null}
          </Row>
        ) : null}

        {!(title === undefined && pageActions === undefined) ? (
          <Row className={`${blockClass}--title-row`}>
            <Column className={`${blockClass}--title-space`}>
              {/* keeps page actions right even if empty */}
              {title !== undefined ? (
                <div className={`${blockClass}--title`}>{title}</div>
              ) : null}
            </Column>

            {pageActions !== undefined ? (
              <Column className={`${blockClass}--page-actions`}>
                {pageActions}
              </Column>
            ) : null}
          </Row>
        ) : null}

        {subtitle !== undefined ? (
          <Row className={`${blockClass}--subtitle-row`}>
            <Column className={`${blockClass}--subtitle`}>{subtitle}</Column>
          </Row>
        ) : null}

        {availableSpace !== undefined ? (
          <Row className={`${blockClass}--available-row`}>
            <Column className={`${blockClass}--available-space`}>
              {availableSpace}
            </Column>
          </Row>
        ) : null}

        {!(navigation === undefined && tags === undefined) ? (
          <Row className={`${blockClass}--navigation-row`}>
            {navigation !== undefined ? (
              <Column
                className={`${blockClass}--navigation-tabs`}
                // {...halfOrFull(tags !== undefined)}
              >
                {navigation}
              </Column>
            ) : null}
            {tags !== undefined ? (
              <Column
                className={`${blockClass}--navigation-tags`}
                // {...halfColumns}
              >
                {tags}
              </Column>
            ) : null}
          </Row>
        ) : null}
      </Grid>
    </section>
  );
};

PageHeader.propTypes = {
  /**
   * One or more ActionBarItem components, passed in as React element(s).
   * If provided, these are rendered at the top right of the header as
   * action icons. Optional.
   */
  actionBarItems: PropTypes.element, // expect actionBarItems
  /**
   * A zone for placing high-level, client content above the page tabs.
   * Accepts arbitrary renderable content as a React node. Optional.
   */
  availableSpace: PropTypes.node,
  /**
   * Specifies if the PageHeader should have a background color or not.
   * Optional.
   */
  background: PropTypes.bool,
  /**
   * One or more Carbon BreadcrumbItem components, passed in as React element(s).
   * If provided, these are rendered at the top left of the header as
   * a breadcrumb. Optional.
   */
  breadcrumbItems: PropTypes.element, // expects BreadcrumbItems,
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * Content for the navigation area in the PageHeader. Should
   * be a React element that is normally either a Carbon Tabs component or a
   * Carbon ContentSwitcher. Optional.
   */
  navigation: PropTypes.element, // Supports Tabs or ContentSwitcher
  /**
   * Specifies the primary page actions as a React element. Normally this
   * is one or more Carbon Button components. Optional.
   */
  pageActions: PropTypes.element,
  /**
   * A subtitle or description that provides additional context to
   * identify the current page. Optional.
   */
  subtitle: PropTypes.string,
  /**
   * One or more tags, specified as a Carbon Tags component.
   * Optional.
   */
  tags: PropTypes.element,
  /**
   * The title of the page.
   * Optional.
   */
  title: PropTypes.string,
  /**
   * An icon to be included to the left of the title text.
   * Optional.
   */
  titleIcon: PropTypes.PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

PageHeader.defaultProps = {
  background: false,
  className: '',
};
