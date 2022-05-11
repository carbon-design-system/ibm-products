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
  Dropdown,
} from 'carbon-components-react';
import { ChevronRight16, View16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UserProfileImage } from '../UserProfileImage';
import { pkg } from '../../settings';
const componentName = 'AddSelectList';

export let AddSelectList = ({
  filteredItems,
  modifiers,
  multi,
  multiSelection,
  path,
  setDisplayMetaPanel,
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

  const isSelected = (id) => multiSelection.includes(id);

  const getAvatarProps = ({ src, alt, icon, backgroundColor }) => ({
    className: `${blockClass}-cell-avatar`,
    size: 'lg',
    theme: 'light',
    image: src,
    imageDescription: alt,
    icon,
    backgroundColor,
  });

  const getItemIcon = ({ icon: Icon }) => <Icon />;

  return (
    <div className={`${blockClass}-wrapper`}>
      <StructuredListWrapper selection className={`${blockClass}`}>
        <StructuredListBody>
          {filteredItems.map((item) => (
            <StructuredListRow
              key={item.id}
              className={cx(`${blockClass}-row`, {
                [`${blockClass}-row-selected`]: isSelected(item.id),
              })}
            >
              <StructuredListCell className={`${blockClass}-cell`}>
                <div className={`${blockClass}-cell-wrapper`}>
                  {multi ? (
                    <>
                      <div className={`${blockClass}-checkbox`}>
                        <Checkbox
                          onChange={(checked) =>
                            handleMultiSelection(item.id, checked)
                          }
                          labelText={item.title}
                          id={item.id}
                          checked={isSelected(item.id)}
                          className={`${blockClass}-checkbox-wrapper`}
                        />
                        <div className={`${blockClass}-checkbox-label-wrapper`}>
                          {item.avatar && (
                            <UserProfileImage
                              {...getAvatarProps(item.avatar)}
                            />
                          )}
                          {item.icon && (
                            <div className={`${blockClass}-cell-icon`}>
                              {getItemIcon(item)}
                            </div>
                          )}
                          <div className={`${blockClass}-checkbox-label-text`}>
                            <span className={`${blockClass}-cell-title`}>
                              {item.title}
                            </span>
                            {item.subtitle && (
                              <span className={`${blockClass}-cell-subtitle`}>
                                {item.subtitle}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {modifiers?.options?.length && (
                        <Dropdown
                          id={`${item.id}-modifier`}
                          type="inline"
                          items={modifiers?.options}
                          light
                          label={modifiers?.label}
                          disabled={!isSelected(item.id)}
                          className={`${blockClass}-dropdown ${blockClass}-hidden-hover`}
                        />
                      )}
                    </>
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
                  {item.meta && (
                    <div className={`${blockClass}-hidden-hover`}>
                      <View16 onClick={() => setDisplayMetaPanel(item)} />
                    </div>
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
  modifiers: PropTypes.object,
  multi: PropTypes.bool,
  multiSelection: PropTypes.array,
  path: PropTypes.array,
  setDisplayMetaPanel: PropTypes.func,
  setMultiSelection: PropTypes.func,
  setPath: PropTypes.func,
  setSingleSelection: PropTypes.func,
  singleSelection: PropTypes.string,
};

AddSelectList.displayName = componentName;
