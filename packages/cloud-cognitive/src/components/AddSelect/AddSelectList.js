//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import {
  Checkbox,
  RadioButton,
  StructuredListRow,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListCell,
} from 'carbon-components-react';
import { ChevronRight16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
const componentName = 'AddSelectList';

export let AddSelectList = ({
  filteredItems,
  multi,
  multiSelection,
  path,
  setMultiSelection,
  setPath,
  setSingleSelection,
  singleSelection,
}) => {
  const blockClass = `${pkg.prefix}--add-select__selections`;

  const handleSingleSelection = (value) => {
    setSingleSelection(value);
  };

  const handleMultiSelection = (value, checked) => {
    if (checked) {
      const newValues = [...multiSelection, value];
      setMultiSelection(newValues);
    } else {
      const newValues = multiSelection.filter((v) => v !== value);
      setMultiSelection(newValues);
    }
  };

  const onNavigateItem = ({ id, title }) => {
    setPath([...path, { id, title }]);
  };

  return (
    <div className={`${blockClass}-wrapper`}>
      <StructuredListWrapper selection className={`${blockClass}`}>
        <StructuredListBody>
          {filteredItems.map((item) => (
            <StructuredListRow key={item.id}>
              <StructuredListCell>
                <div className={`${blockClass}-cell-wrapper`}>
                  {multi ? (
                    <Checkbox
                      className={`${blockClass}-checkbox`}
                      onChange={(value) => handleMultiSelection(item.id, value)}
                      labelText={item.title}
                      id={item.id}
                      checked={multiSelection.includes(item.id)}
                    />
                  ) : (
                    <RadioButton
                      className={`${blockClass}-radio`}
                      name="add-select-selections"
                      id={item.id}
                      value={item.value}
                      labelText={item.title}
                      onChange={handleSingleSelection}
                      selected={item.value === singleSelection}
                    />
                  )}
                  {item.children && (
                    <ChevronRight16 onClick={() => onNavigateItem(item)} />
                  )}
                </div>
              </StructuredListCell>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
};

AddSelectList.propTypes = {
  filteredItems: PropTypes.array,
  multi: PropTypes.bool,
  multiSelection: PropTypes.array,
  path: PropTypes.array,
  setMultiSelection: PropTypes.func,
  setPath: PropTypes.func,
  setSingleSelection: PropTypes.func,
  singleSelection: PropTypes.string,
};

AddSelectList.displayName = componentName;
