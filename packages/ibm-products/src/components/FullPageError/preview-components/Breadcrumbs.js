/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import { string } from 'prop-types';
import { BreadcrumbWithOverflow } from '../../BreadcrumbWithOverflow';

export const Breadcrumbs = ({ className }) => {
  const breadcrumbs = [
    {
      href: '/#',
      id: 'id-1',
      key: '1',
      label: 'Breadcrumb',
      onClick: () => {},
    },
    {
      href: '/#',
      id: 'id-2',
      key: '2',
      label: 'Breadcrumb',
      onClick: () => {},
    },
    {
      href: '/#',
      id: 'id-3',
      key: '3',
      label: 'Breadcrumb',
      onClick: () => {},
    },
    {
      href: '/#',
      id: 'id-4',
      key: '4',
      label: 'Breadcrumb',
      onClick: () => {},
      title: 'Breadcrumb 4 title',
    },
  ];

  return (
    <BreadcrumbWithOverflow
      className={className}
      breadcrumbs={breadcrumbs}
      overflowAriaLabel="open breadcrumbs"
    />
  );
};
// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Breadcrumbs.propTypes = {
  className: string,
};
