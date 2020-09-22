//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import {
  BreadcrumbItem,
  Tabs,
  ContentSwitcher,
  Tag,
} from 'carbon-components-react';

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
    <div className={['page-header', className].join(' ')}>
      <div>background: {background ? 'true' : 'false'}</div>
      <div>breadcrumbItems: {breadcrumbItems}</div>
      <div>actionBar: {actionBar}</div>
      <div>title: {title}</div>
      <div>pageActions: {pageActions}</div>
      <div>subTitle: {subTitle}</div>
      <div>availableSpace: {availableSpace}</div>
      <div>navigation: {navigation}</div>
      <div>tags: {tags}</div>
    </div>
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
