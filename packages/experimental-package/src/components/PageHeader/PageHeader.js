//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
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
} from 'carbon-components-react';

const blockClass = `${expPrefix}-page-header`;

export const PageHeader = ({
  actionBar,
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
  return (
    <section
      className={cx([
        blockClass,
        className,
        { [`${blockClass}--background`]: background },
      ])}>
      <Grid>
        <Row>
          <Column className={`${blockClass}--breadcrumb-space`}>
            <div>breadcrumbItems: {breadcrumbItems}</div>
            {/* conditionally render primary actions if we have actionBar and scrolled */}
            <div>actionBar: {actionBar}</div>
          </Column>
        </Row>

        <Row>
          <Column className={`${blockClass}--title-space`}>
            <div>title: {title}</div>
            <div>pageActions: {pageActions}</div>
          </Column>
        </Row>

        <Row>
          <Column className={`${blockClass}--subtitle-space`}>
            <div>subTitle: {subTitle}</div>
          </Column>
        </Row>
        <Row>
          <Column className={`${blockClass}--available-space`}>
            <div>availableSpace: {availableSpace}</div>
          </Column>
        </Row>
        <Row>
          <Column className={`${blockClass}--navigation-space`}>
            <div>navigation: {navigation}</div>
            <div>tags: {tags}</div>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

PageHeader.propTypes = {
  /**
   * actionBar
   */
  actionBar: PropTypes.node, // PropTypes.instanceOf(IconButtonBar),
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
