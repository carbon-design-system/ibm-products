import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import { checkForHoldingKey } from './checkForHoldingKey';
import {
  focusThisField,
  traverseClockVise,
  traverseReverse,
} from './genericMethods';

export const handleKeyDown = (e, conditionBuilderRef) => {
  const handleKeyPressForPopover = (e, parentContainer) => {
    const key = e.key;
    const isHoldingShiftKey = checkForHoldingKey(e, 'shiftKey');
    let isMultiSelect =
        parentContainer.querySelector('ul')?.dataset.multiSelect,
      allItems = [];
    switch (key) {
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
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
        if (isMultiSelect == 'true') {
          if (document.activeElement.type !== 'button') {
            //for button , enter key is click which already handled by framework, else trigger click
            document.activeElement?.click();
            //for value popover which is single select , after selection , we focus that particular value field
            if (
              e.target.closest('[role="gridcell"]')?.querySelector('button')
                ?.dataset.name == 'valueField' &&
              e.target.closest('ul')?.dataset.multiSelect == 'false'
            ) {
              e.target
                .closest('[role="row"]')
                .querySelector('[data-name="valueField"]')
                ?.focus();
            }
          }
          e.preventDefault();
        }

        break;
      case 'Enter':
        if (isMultiSelect !== 'true') {
          if (document.activeElement.type !== 'button') {
            //for button , enter key is click which already handled by framework, else trigger click
            document.activeElement?.click();
            //for value popover which is single select , after selection , we focus that particular value field
            if (
              e.target.closest('[role="gridcell"]')?.querySelector('button')
                ?.dataset.name == 'valueField' &&
              e.target.closest('ul')?.dataset.multiSelect == 'false'
            ) {
              e.target
                .closest('[role="row"]')
                .querySelector('[data-name="valueField"]')
                ?.focus();
            }
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

    let nextRowIndex = currentRowIndex;

    if (e.target.getAttribute('role') == 'row') {
      if (e.key === 'ArrowDown') {
        nextRowIndex += 1;
      } else if (e.key === 'ArrowUp') {
        nextRowIndex -= 1;
      }

      if (nextRowIndex < 0) {
        nextRowIndex = 0;
      } else if (nextRowIndex >= rows.length) {
        nextRowIndex = rows.length - 1;
      }

      if (nextRowIndex !== currentRowIndex) {
        //rows[currentRowIndex].setAttribute('tabindex', '-1');
        // rows[nextRowIndex].setAttribute('tabindex', '0');
        rows[nextRowIndex].focus();
      }
    } else {
      navigateToNextRowCell(e, currentRowIndex, rows);
    }
  }
  const navigateToNextRowCell = (e, currentRowIndex, rows) => {
    //when the focussed element is a cell of the row which has only 1 cell (connector or statement) , focus the next row

    let nextRowIndex = currentRowIndex;
    if (e.key == 'ArrowUp') {
      nextRowIndex =
        currentRowIndex == 0 ? currentRowIndex : currentRowIndex - 1;
    }
    if (e.key == 'ArrowDown') {
      nextRowIndex =
        currentRowIndex == rows.length - 1
          ? rows.length - 1
          : currentRowIndex + 1;
    }

    let nextRow = rows[nextRowIndex];
    let itemName = e.target.dataset.name;
    nextRow?.querySelector(`[data-name="${itemName}"]`)?.focus();
    // }
  };

  const handleKeyPressForMainContent = (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowLeft':
        conditionBuilderRef.current
          .querySelectorAll(`[role="gridcell"] button`)
          .forEach((eachElem, index, allElements) => {
            if (e.key == 'ArrowRight') {
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
      case 'Enter':
        // document.activeElement?.click();
        break;

      default:
        break;
    }
  };

  let activeElement = document.activeElement;
  if (activeElement.closest(`[role="dialog"]`)) {
    handleKeyPressForPopover(e, activeElement.closest(`[role="dialog"]`));
  } else {
    handleKeyPressForMainContent(e);
  }
};
