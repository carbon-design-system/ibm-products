//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Tag } from 'carbon-components-react';
import { pkg } from '../../settings';
import { AddSelectList } from './AddSelectList';
const componentName = 'AddSelect';

export let AddSelectColumn = ({
  columnInputPlaceholder,
  filteredItems,
  header,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const blockClass = `${pkg.prefix}--add-select`;

  const colItems = filteredItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div className={`${blockClass}__column`}>
      <TextInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        light
        placeholder={columnInputPlaceholder}
      />
      <div className={`${blockClass}__tag-container`}>
        <p className={`${blockClass}__tag-container-label`}>{header}</p>
        <Tag type="gray" size="sm">
          {colItems.length}
        </Tag>
      </div>
      <AddSelectList {...props} inColumn filteredItems={colItems} />
    </div>
  );
};

AddSelectColumn.propTypes = {
  columnInputPlaceholder: PropTypes.string,
  filteredItems: PropTypes.array,
  header: PropTypes.string,
};

AddSelectColumn.displayName = componentName;
