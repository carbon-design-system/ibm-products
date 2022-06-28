//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import {
  Button,
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
  appliedModifiers,
  filteredItems,
  metaIconDescription,
  modifiers,
  multi,
  multiSelection,
  navIconDescription,
  parentId,
  setAppliedModifiers,
  setDisplayMetaPanel,
  setMultiSelection,
  setParentSelected,
  setSingleSelection,
  singleSelection,
}) => {
  const blockClass = `${pkg.prefix}--add-select__selections`;
  const hasModifiers = modifiers?.options?.length > 0;

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

  const onNavigateItem = ({ id, title }) => {
    setParentSelected(id, title, parentId);
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

  const modifierHandler = (id, selectedItem) => {
    const modifiersClone = [...appliedModifiers];
    const modifierIdx = modifiersClone.findIndex((item) => item.id === id);
    modifiersClone[modifierIdx] = {
      id,
      [modifiers.id]: selectedItem,
    };
    setAppliedModifiers(modifiersClone);
  };

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
                      {hasModifiers && (
                        <Dropdown
                          id={`${item.id}-modifier`}
                          type="inline"
                          items={modifiers.options}
                          light
                          label={modifiers.label}
                          disabled={!isSelected(item.id)}
                          className={`${blockClass}-dropdown ${blockClass}-hidden-hover`}
                          initialSelectedItem={item[modifiers.id]}
                          onChange={({ selectedItem }) =>
                            modifierHandler(item.id, selectedItem)
                          }
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
                      onChange={() => handleSingleSelection(item.id)}
                      selected={item.id === singleSelection}
                    />
                  )}
                  {item.children && (
                    <Button
                      renderIcon={ChevronRight16}
                      iconDescription={navIconDescription}
                      tooltipPosition="left"
                      tooltipAlignment="center"
                      hasIconOnly
                      onClick={() => onNavigateItem(item)}
                      kind="ghost"
                      size="sm"
                    />
                  )}
                  {item.meta && (
                    <div className={`${blockClass}-hidden-hover`}>
                      <Button
                        renderIcon={View16}
                        iconDescription={metaIconDescription}
                        tooltipPosition="left"
                        tooltipAlignment="center"
                        hasIconOnly
                        onClick={() => setDisplayMetaPanel(item)}
                        kind="ghost"
                        size="sm"
                      />
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
  appliedModifiers: PropTypes.array,
  filteredItems: PropTypes.array,
  metaIconDescription: PropTypes.string,
  modifiers: PropTypes.object,
  multi: PropTypes.bool,
  multiSelection: PropTypes.array,
  navIconDescription: PropTypes.string,
  parentId: PropTypes.string,
  setAppliedModifiers: PropTypes.func,
  setDisplayMetaPanel: PropTypes.func,
  setMultiSelection: PropTypes.func,
  setParentSelected: PropTypes.func,
  setSingleSelection: PropTypes.func,
  singleSelection: PropTypes.string,
};

AddSelectList.displayName = componentName;
