import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { checkForHoldingKey } from './checkForHoldingKey';
import { focusThisField, traverseClockVise, traverseReverse } from './util';

export const handleKeyDown = (e, conditionBuilderRef) => {
  const handleKeyPressForPopover = (e, parentContainer) => {
    const key = e.key;
    const isHoldingShiftKey = checkForHoldingKey(e, 'shiftKey');
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
        e.preventDefault();
        break;

      case ' ':
        if (isMultiSelect === 'true') {
          if (document.activeElement.type !== 'button') {
            //for button , enter key is click which already handled by framework, for other elements trigger click
            document.activeElement?.click();
          }
          e.preventDefault();
        }

        break;
      case 'Enter':
        if (isMultiSelect !== 'true') {
          if (document.activeElement.type !== 'button') {
            //for button , enter key is click which already handled by framework, else trigger click
            document.activeElement?.click();
            focusThisField(e);
          }
        }

        break;
      case 'Escape':
        //focus the corresponding field in which the popover is triggered
        focusThisField(e);
        break;
      default:
        break;
    }
  };

  function getRows() {
    return Array.from(
      conditionBuilderRef.current.querySelectorAll('[role="row"]')
    );
  }

  function getRowIndex(element) {
    const rows = getRows();
    return rows.findIndex((row) => row.contains(element));
  }
  function handleRowNavigation(e) {
    const rows = getRows();

    const currentRowIndex = getRowIndex(e.target);

    navigateToNextRowCell(e, currentRowIndex, rows);
  }
  const navigateToNextRowCell = (e, currentRowIndex, rows) => {
    //when the focussed element is a cell of the row which has only 1 cell (connector or statement) , focus the next row

    let nextRowIndex = currentRowIndex;
    if (e.key === 'ArrowUp') {
      nextRowIndex =
        currentRowIndex == 0 ? currentRowIndex : currentRowIndex - 1;
    }
    if (e.key === 'ArrowDown') {
      nextRowIndex =
        currentRowIndex === rows.length - 1
          ? rows.length - 1
          : currentRowIndex + 1;
    }

    const nextRow = rows[nextRowIndex];
    const itemName = e.target.dataset.name;
    nextRow?.querySelector(`[data-name="${itemName}"]`)?.focus();
  };

  const handleKeyPressForMainContent = (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowLeft':
        conditionBuilderRef.current
          .querySelectorAll(`[role="gridcell"] button`)
          .forEach((eachElem, index, allElements) => {
            if (e.key === 'ArrowRight') {
              traverseClockVise(eachElem, index, allElements);
            } else {
              traverseReverse(eachElem, index, allElements);
            }
          });

        break;

      case 'ArrowUp':
      case 'ArrowDown':
        handleRowNavigation(e);

        break;

      default:
        break;
    }
  };

  const activeElement = document.activeElement;
  if (activeElement.closest(`[role="dialog"]`)) {
    handleKeyPressForPopover(e, activeElement.closest(`[role="dialog"]`));
  } else {
    handleKeyPressForMainContent(e);
  }
};
