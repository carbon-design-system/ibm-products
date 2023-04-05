//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useRef, useEffect, useCallback } from 'react';
import { Button, Dropdown } from '@carbon/react';
import { ChevronRight, View } from '@carbon/react/icons';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { AddSelectFormControl } from './AddSelectFormControl';

const blockClass = `${pkg.prefix}--add-select__selections`;
const componentName = 'AddSelectList';

export let AddSelectRow = ({
  appliedModifiers,
  displayMetalPanel,
  index,
  focused,
  item,
  metaIconDescription,
  modifiers,
  multi,
  multiSelection,
  navIconDescription,
  parentId,
  setAppliedModifiers,
  setDisplayMetaPanel,
  setFocus,
  setMultiSelection,
  setParentSelected,
  setSingleSelection,
  singleSelection,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const refCopy = ref;
    if (focused) {
      refCopy.current.focus();
    }
  }, [focused, setFocus]);

  const focusHandler = useCallback(() => {
    setFocus(index);
  }, [index, setFocus]);

  const onSelectKeyDown = ({ key }) => {
    if (key === 'Enter') {
      if (multi) {
        handleMultiSelection();
      } else {
        handleSingleSelection();
      }
    } else if (key === 'ArrowRight' && item.children) {
      onNavigateItem();
      setFocus('');
    }
  };

  const hasModifiers = modifiers?.options?.length > 0;

  const handleSingleSelection = () => {
    focusHandler();
    setSingleSelection(item.id);
  };

  const handleMultiSelection = () => {
    const checked = isSelected();
    if (!checked) {
      const newValues = [...multiSelection, item.id];
      setMultiSelection(newValues);
    } else {
      const newValues = multiSelection.filter((v) => v !== item.id);
      setMultiSelection(newValues);
    }
  };

  const onNavigateItem = () => {
    setParentSelected(item.id, item.title, parentId);
  };

  const isSelected = () => {
    if (multi) {
      return multiSelection.includes(item.id);
    }
    return item.id === singleSelection;
  };

  const modifierHandler = (id, selectedItem) => {
    const modifiersClone = [...appliedModifiers];
    const modifierIdx = modifiersClone.findIndex((item) => item.id === id);
    modifiersClone[modifierIdx] = {
      id,
      [modifiers.id]: selectedItem,
    };
    setAppliedModifiers(modifiersClone);
  };

  const metaPanelHandler = () => {
    if (item.meta) {
      setDisplayMetaPanel(item);
    }
  };

  const isInMetaPanel = (id) => id === displayMetalPanel?.id;

  const selected = isSelected();

  return (
    <div
      className={cx(`${blockClass}-row`, {
        [`${blockClass}-row--selected`]: isSelected(item.id),
        [`${blockClass}-row-meta--selected`]: isInMetaPanel(item.id),
      })}
      onKeyDown={onSelectKeyDown}
      tabIndex={focused ? 0 : -1}
      ref={ref}
      role="row"
    >
      <div className={`${blockClass}-cell`}>
        <div className={`${blockClass}-cell-wrapper`}>
          {multi ? (
            <>
              <AddSelectFormControl
                type="checkbox"
                item={item}
                selected={selected}
                onClick={handleMultiSelection}
              />
              {hasModifiers && (
                <Dropdown
                  id={`add-select-modifier-${item.id}`}
                  type="inline"
                  items={modifiers.options}
                  label={modifiers.label}
                  disabled={!isSelected(item.id)}
                  className={`${blockClass}-dropdown`}
                  initialSelectedItem={item[modifiers.id]}
                  onChange={({ selectedItem }) =>
                    modifierHandler(item.id, selectedItem)
                  }
                />
              )}
            </>
          ) : (
            <AddSelectFormControl
              type="radio"
              item={item}
              selected={selected}
              onClick={handleSingleSelection}
            />
          )}
          {item.children && (
            <Button
              className={`${blockClass}-view-children`}
              renderIcon={(props) => <ChevronRight size={16} {...props} />}
              iconDescription={navIconDescription}
              tooltipPosition="left"
              tooltipAlignment="center"
              hasIconOnly
              onClick={onNavigateItem}
              kind="ghost"
              size="sm"
            />
          )}
          {item.meta && (
            <Button
              className={`${blockClass}-view-meta`}
              renderIcon={(props) => <View size={16} {...props} />}
              iconDescription={metaIconDescription}
              tooltipPosition="left"
              tooltipAlignment="center"
              hasIconOnly
              kind="ghost"
              size="sm"
              onClick={metaPanelHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

AddSelectRow.propTypes = {
  appliedModifiers: PropTypes.array,
  displayMetalPanel: PropTypes.object,
  filteredItems: PropTypes.array,
  focused: PropTypes.bool,
  index: PropTypes.number,
  item: PropTypes.object,
  metaIconDescription: PropTypes.string,
  modifiers: PropTypes.object,
  multi: PropTypes.bool,
  multiSelection: PropTypes.array,
  navIconDescription: PropTypes.string,
  parentId: PropTypes.string,
  setAppliedModifiers: PropTypes.func,
  setDisplayMetaPanel: PropTypes.func,
  setFocus: PropTypes.func,
  setMultiSelection: PropTypes.func,
  setParentSelected: PropTypes.func,
  setSingleSelection: PropTypes.func,
  singleSelection: PropTypes.string,
};

AddSelectRow.displayName = componentName;
