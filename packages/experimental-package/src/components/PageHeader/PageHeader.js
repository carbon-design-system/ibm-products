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
  subTitle,
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
        <Row className={`${blockClass}--breadcrumb-row`}>
          <Column className={`${blockClass}--breadcrumb-space`}>
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

            <ActionBar className={`${blockClass}--action-bar`}>
              {actionBarItems}
            </ActionBar>
          </Column>
        </Row>

        <Row className={`${blockClass}--title-row`}>
          <Column className={`${blockClass}--title-space`}>
            <div className={`${blockClass}--title`}>{title}</div>
            <div className={`${blockClass}--page-actions`}>{pageActions}</div>
          </Column>
        </Row>

        <Row className={`${blockClass}--subtitle-row`}>
          <Column className={`${blockClass}--subtitle-space`}>
            <div className={`${blockClass}--subtitle`}>{subTitle}</div>
          </Column>
        </Row>

        <Row className={`${blockClass}--available-row`}>
          <Column className={`${blockClass}--available-space`}>
            <div>{availableSpace}</div>
          </Column>
        </Row>

        <Row className={`${blockClass}--navigation-row`}>
          <Column
            className={`${blockClass}--navigation-tabs`}
            // {...halfOrFull(tags !== undefined)}
          >
            {navigation}
          </Column>
          {tags !== undefined ? (
            <Column
              className={`${blockClass}--navigation-tags`}
              // {...halfColumns}
            >
              {tags}
            </Column>
          ) : null}
        </Row>
      </Grid>
    </section>
  );
};

PageHeader.propTypes = {
  /**
   * actionBarItems
   */
  actionBarItems: PropTypes.element, // expect actionBarItems
  /**
   * React node specifying content to be placed in availableSpace
   */
  availableSpace: PropTypes.node,
  /**
   * background displayed or not
   */
  background: PropTypes.bool,
  /**
   * Array of BreadcrumbItems
   */
  breadcrumbItems: PropTypes.element, // expects BreadcrumbItems,
  /**
   * className to be applied to wrapping element
   */
  className: PropTypes.string,
  /**
   * navigation consisting of tabs or content switcher
   */
  navigation: PropTypes.element, // Supports Tabs or ContentSwitcher
  /**
   * pageActions - page level actions
   */
  pageActions: PropTypes.element,
  /**
   * Subtitle/description
   */
  subTitle: PropTypes.string,
  /**
   * tags - array of carbon Tags
   */
  tags: PropTypes.element,
  /**
   * Title
   */
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  background: false,
  className: '',
};
