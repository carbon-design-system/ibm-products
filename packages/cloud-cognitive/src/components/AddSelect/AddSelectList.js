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
  inColumn,
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

  const handleMultiSelection = (id, checked) => {
    if (checked) {
      const newValues = [...multiSelection, id];
      setMultiSelection(newValues);
    } else {
      const newValues = multiSelection.filter((v) => v !== id);
      setMultiSelection(newValues);
    }
  };

  const onNavigateItem = ({ id, title, parent }) => {
    // if multi select
    if (multi) {
      // if top level reset the path
      if (!parent) {
        setPath([{ id, title }]);
      } else {
        const pathIds = path.map((p) => p.id);
        // if item is already selected somewhere go back to that item
        if (pathIds.includes(id)) {
          const pathIdx = pathIds.findIndex((pathId) => pathId === id);
          const newPath = [...path].splice(0, pathIdx + 1);
          setPath([...newPath]);
        } else {
          // if the item is on the same level as another selected item start from the parent level
          if (path.find((p) => p.parent === parent)) {
            const parentIdx = path.findIndex((p) => p.id === parent);
            const newPath = [...path].splice(0, parentIdx + 1);
            setPath([...newPath, { id, title, parent }]);
          } else {
            setPath([...path, { id, title, parent }]);
          }
        }
      }
    } else {
      setPath([...path, { id, title }]);
    }
  };

  return (
    <div className={`${blockClass}-wrapper`}>
      <StructuredListWrapper selection className={`${blockClass}`}>
        <StructuredListBody>
          {filteredItems.map((item) => (
            <StructuredListRow key={item.id} className={`${blockClass}-row`}>
              <StructuredListCell className={`${blockClass}-cell`}>
                <div className={`${blockClass}-cell-wrapper`}>
                  {multi ? (
                    <Checkbox
                      className={`${blockClass}-checkbox`}
                      onChange={(checked) =>
                        handleMultiSelection(item.id, checked)
                      }
                      labelText={
                        !inColumn ? (
                          <>
                            <span className={`${blockClass}-cell-title`}>
                              {item.title}
                            </span>
                            <span className={`${blockClass}-cell-subtitle`}>
                              {item.subtitle}
                            </span>
                          </>
                        ) : (
                          item.title
                        )
                      }
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
  inColumn: PropTypes.bool,
  multi: PropTypes.bool,
  multiSelection: PropTypes.array,
  path: PropTypes.array,
  setMultiSelection: PropTypes.func,
  setPath: PropTypes.func,
  setSingleSelection: PropTypes.func,
  singleSelection: PropTypes.string,
};

AddSelectList.displayName = componentName;
