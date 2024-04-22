import { blockClass } from '../ConditionBuilderContext/DataConfigs';
import {
  focusThisField,
  focusThisItem,
  traverseClockVise,
  traverseReverse,
} from './genericMethods';

export const handleKeyDown = (e, conditionBuilderRef) => {
  const handleKeyPressForPopover = (e, parentContainer) => {
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
      case 'ArrowUp':
        //traverse through the popover options, search box, selectAll button
        parentContainer
          .querySelectorAll(
            `.${blockClass}__selectAll-button,[role="option"],[role="searchbox"]`
          )
          .forEach((eachElem, index, allElements) => {
            traverseReverse(eachElem, index, allElements);
          });

        break;
      case 'ArrowDown':
        //traverse through the popover options, search box, selectAll button
        parentContainer
          .querySelectorAll(
            `.${blockClass}__selectAll-button,[role="option"],[role="searchbox"]`
          )
          .forEach((eachElem, index, allElements) => {
            traverseClockVise(eachElem, index, allElements);
          });
        break;

      case 'Enter':
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
        rows[currentRowIndex].setAttribute('tabindex', '-1');
        rows[nextRowIndex].setAttribute('tabindex', '0');
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
        if (e.target.getAttribute('role') == 'row') {
          //when current focus is on a row, then we need to focus the first cell of that row
          let allItems = Array.from(
            e.target
              .closest('[role="row"]')
              ?.querySelectorAll('[role="gridcell"] button')
          );
          allItems[0]?.focus();
        } else {
          let wrapper = e.target.closest(
            `[role="row"],.${blockClass}__add-button-wrapper`
          );
          if (wrapper.role == 'row') {
            //when the current focussed cell is inside a row (not add condition button)
            //finding the next cell to be focussed
            //next cell = current cell index + 1

            let allItems = Array.from(
              e.target
                .closest('[role="row"]')
                ?.querySelectorAll('[role="gridcell"] button')
            );
            let currentItemIndex = allItems.indexOf(e.target);
            if (currentItemIndex < allItems.length - 1) {
              focusThisItem(allItems[currentItemIndex + 1]);
            } else if (
              //if currently last cell of that row is focussed, now find and focus the next row
              e.target.closest('[role="row"]') &&
              e.target.closest('[role="row"]').nextSibling
            ) {
              if (e.target.closest('[role="row"]').nextSibling.role == 'row') {
                e.target.closest('[role="row"]').nextSibling.focus();
              } else {
                //when the next sibling is not row( for add condition button)
                e.target
                  .closest('[role="row"]')
                  .nextSibling.querySelector('[role="gridcell"] button')
                  ?.focus();
              }
            }
          }
        }

        break;
      case 'ArrowLeft':
        if (e.target.getAttribute('role') == 'row') {
          //when a row is currently focussed and press on arrow left, this will focus the last cell in that row
          let allItems = Array.from(
            e.target
              .closest('[role="row"]')
              .querySelectorAll('[role="gridcell"] button')
          );
          allItems[allItems.length - 1].focus();
        } else {
          //when ny cell is focussed, arrow left will select the previous cell.
          //if current focussed cell is add button it does not have a parent row
          //if add button or first cell of any row is focussed, arrow left will focus the previous row.
          let wrapper = e.target.closest(
            `[role="row"],.${blockClass}__add-button-wrapper`
          );
          if (wrapper.role == 'row') {
            let allItems = Array.from(
              e.target
                .closest('[role="row"]')
                ?.querySelectorAll('[role="gridcell"] button')
            );
            let currentItemIndex = allItems.indexOf(e.target);
            if (currentItemIndex > 0) {
              focusThisItem(allItems[currentItemIndex - 1]);
            } else {
              //focus prev row
              wrapper.previousSibling?.focus();
            }
          } else {
            wrapper.previousSibling?.focus();
          }
        }

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
