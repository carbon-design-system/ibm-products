import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import {
  checkForHoldingKey,
  focusThisField,
  traverseClockVise,
  traverseReverse,
} from './util';

export const handleKeyDown = (evt, conditionBuilderRef) => {
  const activeElement = document.activeElement;
  if (activeElement.closest(`[role="dialog"]`)) {
    handleKeyPressForPopover(evt, activeElement.closest(`[role="dialog"]`));
  } else {
    handleKeyPressForMainContent(evt, conditionBuilderRef);
  }
};

const handleKeyPressForPopover = (evt, parentContainer) => {
  const key = evt.key;
  const isHoldingShiftKey = checkForHoldingKey(evt, 'shiftKey');
  const isMultiSelect =
    parentContainer.querySelector('ul')?.dataset.multiSelect;
  let allItems = [];
  switch (key) {
    case 'ArrowUp':
      //traverse through the popover options, search box, selectAll button
      parentContainer
        .querySelectorAll(`[role="option"]`)
        .forEach((eachElem, index, allElements) => {
          traverseReverse(eachElem, index, allElements);
        });

      break;
    case 'ArrowDown':
      //traverse through the popover options, search box, selectAll button
      parentContainer
        .querySelectorAll(`[role="option"]`)
        .forEach((eachElem, index, allElements) => {
          traverseClockVise(eachElem, index, allElements);
        });
      break;

    case 'Tab':
      allItems = [
        ...Array.from(
          parentContainer.querySelectorAll(
            `.${blockClass}__selectAll-button,[role="searchbox"]`
          )
        ),
        parentContainer.querySelector(`[role="option"]`),
      ];

      allItems.forEach((eachElem, index, allElements) => {
        if (isHoldingShiftKey) {
          traverseReverse(eachElem, index, allElements, true, true);
        } else {
          traverseClockVise(eachElem, index, allElements, true, true);
        }
      });
      evt.preventDefault();
      break;

    case ' ':
      if (isMultiSelect === 'true') {
        if (document.activeElement.type !== 'button') {
          //for button , enter key is click which already handled by framework, for other elements trigger click
          document.activeElement?.click();
        }
        evt.preventDefault();
      }

      break;
    case 'Enter':
      if (isMultiSelect !== 'true') {
        if (document.activeElement.type !== 'button') {
          //for button , enter key is click which already handled by framework, else trigger click
          document.activeElement?.click();
          focusThisField(evt);
        }
      }

      break;
    case 'Escape':
      //focus the corresponding field in which the popover is triggered
      focusThisField(evt);
      break;
    default:
      break;
  }
};

const getRows = (conditionBuilderRef) => {
  return Array.from(
    conditionBuilderRef.current.querySelectorAll('[role="row"]')
  );
};

const getRowIndex = (element, conditionBuilderRef) => {
  const rows = getRows(conditionBuilderRef);
  return rows.findIndex((row) => row.contains(element));
};
const handleRowNavigation = (evt, conditionBuilderRef) => {
  const rows = getRows(conditionBuilderRef);

  const currentRowIndex = getRowIndex(evt.target, conditionBuilderRef);

  navigateToNextRowCell(evt, currentRowIndex, rows);
};
const navigateToNextRowCell = (evt, currentRowIndex, rows) => {
  //when the focussed element is a cell of the row which has only 1 cell (connector or statement) , focus the next row

  let nextRowIndex = currentRowIndex;
  if (evt.key === 'ArrowUp') {
    nextRowIndex = currentRowIndex == 0 ? currentRowIndex : currentRowIndex - 1;
  }
  if (evt.key === 'ArrowDown') {
    nextRowIndex =
      currentRowIndex === rows.length - 1
        ? rows.length - 1
        : currentRowIndex + 1;
  }

  const nextRow = rows[nextRowIndex];
  const itemName = evt.target.dataset.name;
  nextRow?.querySelector(`[data-name="${itemName}"]`)?.focus();
};

const handleKeyPressForMainContent = (evt, conditionBuilderRef) => {
  switch (evt.key) {
    case 'ArrowRight':
    case 'ArrowLeft':
      conditionBuilderRef.current
        .querySelectorAll(`[role="gridcell"] button`)
        .forEach((eachElem, index, allElements) => {
          if (evt.key === 'ArrowRight') {
            traverseClockVise(eachElem, index, allElements);
          } else {
            traverseReverse(eachElem, index, allElements);
          }
        });

      break;

    case 'ArrowUp':
    case 'ArrowDown':
      handleRowNavigation(evt, conditionBuilderRef);

      break;

    default:
      break;
  }
};
