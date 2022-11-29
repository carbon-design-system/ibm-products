//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import {
  Button,
  Checkbox,
  Dropdown,
  RadioButton,
  StructuredListRow,
  StructuredListWrapper,
  StructuredListBody,
} from '@carbon/react';
import { ChevronRight, View } from '@carbon/react/icons';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { UserProfileImage } from '../UserProfileImage';

const blockClass = `${pkg.prefix}--add-select__selections`;
const componentName = 'AddSelectList';

export let AddSelectList = ({
  appliedModifiers,
  displayMetalPanel,
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
  const hasModifiers = modifiers?.options?.length > 0;

  const handleSingleSelection = (value) => {
    setSingleSelection(value);
  };

  const handleMultiSelection = (event, { checked, id }) => {
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

  const isSelected = (id) => {
    if (multi) {
      return multiSelection.includes(id);
    }
    return id === singleSelection;
  };

  const getAvatarProps = ({ src, alt, icon, backgroundColor, theme }) => ({
    className: `${blockClass}-cell-avatar`,
    size: 'lg',
    theme,
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

  const metaPanelHandler = (item) => {
    if (item.meta) {
      setDisplayMetaPanel(item);
    }
  };

  const isInMetaPanel = (id) => id === displayMetalPanel?.id;

  return (
    <div
      className={cx(`${blockClass}-wrapper`, {
        [`${blockClass}-wrapper-multi`]: multi,
      })}
    >
      <StructuredListWrapper selection className={`${blockClass}`}>
        <StructuredListBody>
          {filteredItems.map((item) => (
            <StructuredListRow
              key={item.id}
              className={cx(`${blockClass}-row`, {
                [`${blockClass}-row--selected`]: isSelected(item.id),
                [`${blockClass}-row-meta--selected`]: isInMetaPanel(item.id),
              })}
              onClick={(evt) => metaPanelHandler(item, evt)}
            >
              <div
                className={`${blockClass}-cell`}
                onClick={() => {
                  metaPanelHandler(item);
                }}
                onKeyDown={() => {
                  metaPanelHandler(item);
                }}
                role="button"
                tabIndex="0"
              >
                <div className={`${blockClass}-cell-wrapper`}>
                  {multi ? (
                    <>
                      <div className={`${blockClass}-checkbox`}>
                        {
                          // hacky way to prevent checkbox from triggering the meta onclick handler
                          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                          <div onClick={(event) => event.stopPropagation()}>
                            <Checkbox
                              onChange={handleMultiSelection}
                              labelText={item.title}
                              id={item.id}
                              checked={isSelected(item.id)}
                              className={`${blockClass}-checkbox-wrapper`}
                            />
                          </div>
                        }
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
                          id={`add-select-modifier-${item.id}`}
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
                      checked={isSelected(item.id)}
                    />
                  )}
                  {item.children && (
                    <Button
                      className={`${blockClass}-view-children`}
                      renderIcon={(props) => (
                        <ChevronRight size={16} {...props} />
                      )}
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
                        className={`${blockClass}-view-meta`}
                        renderIcon={(props) => <View size={16} {...props} />}
                        iconDescription={metaIconDescription}
                        tooltipPosition="left"
                        tooltipAlignment="center"
                        hasIconOnly
                        kind="ghost"
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              </div>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
};

AddSelectList.propTypes = {
  appliedModifiers: PropTypes.array,
  displayMetalPanel: PropTypes.object,
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
