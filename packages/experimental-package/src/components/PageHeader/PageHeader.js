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

import {
  BreadcrumbItem,
  Tabs,
  ContentSwitcher,
  Tag,
  Grid,
  Column,
  Row,
  Breadcrumb,
} from 'carbon-components-react';

import { ActionBar } from './ActionBar';
import { ActionBarItem } from './ActionBarItem';

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
          <Column className={`${blockClass}--navigation-space`}>
            <div>{navigation}</div>
            <div>{tags}</div>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

PageHeader.propTypes = {
  /**
   * actionBarItems
   */
  actionBarItems: PropTypes.arrayOf(PropTypes.instanceOf(ActionBarItem)), // PropTypes.instanceOf(IconButtonBar),
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
  breadcrumbItems: PropTypes.arrayOf(PropTypes.instanceOf(BreadcrumbItem)),
  /**
   * className to be applied to wrapping element
   */
  className: PropTypes.string,
  /**
   * navigation consisting of tabs or content switcher
   */
  navigation: PropTypes.oneOfType([
    PropTypes.instanceOf(Tabs),
    PropTypes.instanceOf(ContentSwitcher),
  ]),
  /**
   * pageActions - JSX
   */
  pageActions: PropTypes.node,
  /**
   * Subtitle/description
   */
  subTitle: PropTypes.string,
  /**
   * tags - array of carbon Tags
   */
  tags: PropTypes.arrayOf(PropTypes.instanceOf(Tag)),
  /**
   * Title
   */
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  background: false,
  className: '',
};
