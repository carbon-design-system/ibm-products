//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import PropTypes from 'prop-types';
const componentName = 'AddSelectBreadcrumbs';

export let AddSelectBreadcrumbs = ({ itemsLabel, path, setPath }) => {
  const clickHandler = (id) => {
    const pathIdx = path.findIndex((entry) => entry.id === id);
    const finalPath = [...path].splice(0, pathIdx + 1);
    setPath(finalPath);
  };

  const resetPath = () => {
    setPath([]);
  };

  return (
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem onClick={resetPath}>{itemsLabel}</BreadcrumbItem>
      {path.map((entry, idx, arr) => {
        const isCurrentPage = idx === arr.length - 1;
        const crumbHandler = () => {
          if (!isCurrentPage) {
            clickHandler(entry.id);
          }
        };
        return (
          <BreadcrumbItem
            key={entry.id}
            isCurrentPage={isCurrentPage}
            onClick={crumbHandler}
          >
            {entry.title}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

AddSelectBreadcrumbs.propTypes = {
  itemsLabel: PropTypes.string,
  path: PropTypes.array,
  setPath: PropTypes.func,
};

AddSelectBreadcrumbs.displayName = componentName;
