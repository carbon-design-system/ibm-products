import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import {
  checkForHoldingKey,
  focusThisField,
  focusThisItem,
  traverseClockVise,
  traverseReverse,
} from './util';

export const handleKeyDown = (evt, conditionBuilderRef, variant) => {
  const activeElement = document.activeElement;
  if (excludeKeyPress(evt)) {
    return;
  }
  if (activeElement.closest(`[role="dialog"]`)) {
    handleKeyPressForPopover(evt, activeElement.closest(`[role="dialog"]`));
  } else {
    handleKeyPressForMainContent(evt, conditionBuilderRef, variant);
  }
};

const excludeKeyPress = (evt) => {
  return (
    !['Escape'].includes(evt.key) &&
    (evt.target.closest(`.${blockClass}__item-date`)?.length ||
      evt.target.closest(`.${blockClass}__item-time`)?.length)
  );
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
          focusThisField(evt);
          document.activeElement?.click();
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

const handleKeyPressForMainContent = (evt, conditionBuilderRef, variant) => {
  switch (evt.key) {
    case 'ArrowRight':
      if (variant == 'tree') {
        let allItems = Array.from(
          evt.target
            .closest('[role="row"]')
            ?.querySelectorAll('[role="gridcell"] button')
        );
        if (evt.target.getAttribute('role') == 'row') {
          //when current focus is on a row, then we need to enter inside and focus the first cell of that row

          allItems[0]?.focus();
        } else {
          //finding the next cell to be focussed
          //next cell = current cell index + 1

          let currentItemIndex = allItems.indexOf(evt.target);
          if (currentItemIndex < allItems.length - 1) {
            focusThisItem(allItems[currentItemIndex + 1]);
          }
        }
      } else {
        handleCellNavigation(evt, conditionBuilderRef);
      }
      break;
    case 'ArrowLeft':
      if (variant == 'tree') {
        if (evt.target.getAttribute('role') !== 'row') {
          //when ny cell is focussed, arrow left will select the previous cell.
          //if current focussed cell is add button it does not have a parent row

          let allItems = Array.from(
            evt.target
              .closest('[role="row"]')
              ?.querySelectorAll('[role="gridcell"] button')
          );

          let currentItemIndex = allItems.indexOf(evt.target);
          if (currentItemIndex > 0) {
            focusThisItem(allItems[currentItemIndex - 1]);
          } else {
            //focus the row
            let wrapper = evt.target.closest(`[role="row"]`);
            wrapper.focus();
          }
        }
      } else {
        handleCellNavigation(evt, conditionBuilderRef);
      }

      break;

    case 'ArrowUp':
    case 'ArrowDown':
      if (variant == 'tree') {
        handleRowNavigationTree(evt, conditionBuilderRef, variant);
      } else {
        handleRowNavigation(evt, conditionBuilderRef, variant);
      }

      break;

    default:
      break;
  }
};
const getRows = (conditionBuilderRef) => {
  return Array.from(
    conditionBuilderRef.current?.querySelectorAll('[role="row"]')
  );
};

const getRowIndex = (element, conditionBuilderRef) => {
  const rows = getRows(conditionBuilderRef);
  return rows.findIndex((row) => row.contains(element));
};
const handleRowNavigation = (evt, conditionBuilderRef, variant) => {
  const rows = getRows(conditionBuilderRef);

  const currentRowIndex = getRowIndex(evt.target, conditionBuilderRef);

  navigateToNextRowCell(evt, currentRowIndex, rows, variant);
};
function handleRowNavigationTree(evt, conditionBuilderRef, variant) {
  const rows = getRows(conditionBuilderRef);

  const currentRowIndex = getRowIndex(evt.target, conditionBuilderRef);

  let nextRowIndex = currentRowIndex;

  if (evt.target.getAttribute('role') == 'row') {
    if (evt.key === 'ArrowDown') {
      nextRowIndex += 1;
    } else if (evt.key === 'ArrowUp') {
      nextRowIndex -= 1;
    }

    if (nextRowIndex < 0) {
      nextRowIndex = 0;
    } else if (nextRowIndex >= rows.length) {
      nextRowIndex = rows.length - 1;
    }

    if (nextRowIndex !== currentRowIndex) {
      rows[currentRowIndex].setAttribute('tabindex', '-1');
      rows[nextRowIndex].setAttribute('tabindex', '0');
      rows[nextRowIndex].focus();
    }
  } else {
    navigateToNextRowCell(evt, currentRowIndex, rows, variant);
  }
}
const navigateToNextRowCell = (evt, currentRowIndex, rows, variant) => {
  //when the current focussed element is a cell of any row, arrow up/down will focus the next row same cell.

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
  if (nextRow?.querySelector(`[data-name="${itemName}"]`)) {
    nextRow?.querySelector(`[data-name="${itemName}"]`)?.focus();
  } else if (variant === 'tree') {
    //when the next row is a if statement , then that row is focused. From any cell of last row of an group , arrow down select the next row (if)
    nextRow?.focus();
  }
};
const handleCellNavigation = (evt, conditionBuilderRef) => {
  conditionBuilderRef.current
    .querySelectorAll(`[role="gridcell"] button`)
    .forEach((eachElem, index, allElements) => {
      if (evt.key === 'ArrowRight') {
        traverseClockVise(eachElem, index, allElements);
      } else {
        traverseReverse(eachElem, index, allElements);
      }
    });
};
