//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  Tag,
  OverflowMenu,
  OverflowMenuItem,
  Checkbox,
} from 'carbon-components-react';
import { Filter32, ArrowsVertical32 } from '@carbon/icons-react';
import { pkg, carbon } from '../../settings';
import { AddSelectList } from './AddSelectList';
import uuidv4 from '../../global/js/utils/uuidv4';
const componentName = 'AddSelect';

export let AddSelectColumn = ({
  columnInputPlaceholder,
  filteredItems,
  header,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const blockClass = `${pkg.prefix}--add-select`;
  const colClass = `${blockClass}__column`;

  const colItems = filteredItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={colClass}>
      <div className={`${colClass}-search-bar`}>
        <TextInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          light
          placeholder={columnInputPlaceholder}
          className={`${colClass}-input`}
          id={uuidv4()}
          labelText={columnInputPlaceholder}
        />
        <div className={`${colClass}-sort-filter`}>
          <OverflowMenu
            renderIcon={ArrowsVertical32}
            className={`${colClass}-overflow`}
          >
            <OverflowMenuItem itemText="Filter A" />
            <OverflowMenuItem itemText="Filter B" />
          </OverflowMenu>
          <OverflowMenu renderIcon={Filter32}>
            <div className={`${carbon.prefix}--overflow-menu-options__option`}>
              <div className={`${carbon.prefix}--overflow-menu-options__btn`}>
                <Checkbox id="opt1" labelText="opt1" />
              </div>
            </div>
            <div className={`${carbon.prefix}--overflow-menu-options__option`}>
              <div className={`${carbon.prefix}--overflow-menu-options__btn`}>
                <Checkbox id="opt2" labelText="opt2" />
              </div>
            </div>
          </OverflowMenu>
        </div>
      </div>
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
