/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader as CCPageHeader } from '../../../../../cloud-cognitive/src';
import { BreadcrumbItem } from 'carbon-components-react';
import { Lightning16, Bee24 } from '@carbon/icons-react';

const PageHeader = (props) => {
  const content = (
    <div style={{ display: 'flex' }}>
      <p
        style={{
          // stylelint-disable-next-line carbon/layout-token-use
          marginRight: '50px',
          maxWidth: '400px',
        }}
      >
        The component playground allows a developer or designer to see how the
        components function in a &lsquo;real-world&rsquo; setting. Click around
        and see how the animations behave.
      </p>
      <p>
        Property: Value
        <br />
        Property: Value
        <br />
        Property: Value
      </p>
    </div>
  );

  const breadcrumbItems = (
    <>
      <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 4</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
    </>
  );

  const actionBarItems = [1, 2, 3, 4].map((item, index) => ({
    renderIcon: index % 2 ? Lightning16 : Bee24,
    iconDescription: `Action ${item}`,
    onClick: () => {
      console.log(`Action ${index}`);
    },
  }));

  return (
    <CCPageHeader
      actionBarOverflowAriaLabel="label"
      background
      breadcrumbItems={breadcrumbItems}
      actionBarItems={actionBarItems}
      title="Home"
      pageActionsOverflowLabel="label"
      pageActions={[
        {
          key: 'secondary',
          kind: 'secondary',
          label: 'Secondary button',
          onClick: () => {},
        },
        {
          key: 'primary',
          kind: 'primary',
          label: 'Create new card',
          onClick: () => {
            props.setIsOpen(true);
          },
        },
      ]}
      subtitle="What is this?"
      tags={[
        { type: 'blue', label: 'A tag' },
        { type: 'green', label: 'A tag' },
        { type: 'warm-gray', label: 'A tag' },
        { type: 'purple', label: 'A tag' },
      ]}
    >
      {content}
    </CCPageHeader>
  );
};
PageHeader.propTypes = {
  setIsOpen: PropTypes.func,
};

export default PageHeader;
