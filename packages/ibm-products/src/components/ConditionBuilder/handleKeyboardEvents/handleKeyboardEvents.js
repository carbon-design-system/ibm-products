import { pkg } from '../../../settings';

export const handleKeyDown = (e, conditionBuilderRef) => {
  const blockClass = `${pkg.prefix}--condition-builder`;
  const focusThisItem = (currentElement) => {
    setTimeout(() => {
      document.activeElement.setAttribute('tabindex', '-1');
      currentElement.setAttribute('tabindex', '0');
      currentElement?.focus();
    }, 0);
  };
  const traverseClockVise = (eachElem, index, allElements) => {
    if (eachElem == document.activeElement) {
      if (index !== allElements.length - 1) {
        focusThisItem(allElements[index + 1]);
      } else {
        focusThisItem(allElements[0]);
      }
    }
  };
  const traverseReverse = (eachElem, index, allElements) => {
    if (eachElem == document.activeElement) {
      if (index !== 0) {
        focusThisItem(allElements[index - 1]);
      } else {
        focusThisItem(allElements[allElements.length - 1]);
      }
    }
  };
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
        e.target.closest('[role="gridcell"]')?.querySelector('button')?.click();
        e.target.closest('[role="gridcell"]')?.querySelector('button')?.focus();
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
    if (rows[currentRowIndex]?.childElementCount == 1) {
      if (e.key == 'ArrowUp') {
        rows[currentRowIndex - 1]?.focus();
      }
      if (e.key == 'ArrowDown') {
        rows[currentRowIndex + 1]?.focus();
      }

      //focus next row
    } else {
      let nextRowIndex = currentRowIndex;
      if (e.key == 'ArrowUp') {
        nextRowIndex =
          currentRowIndex == 1 ? currentRowIndex : currentRowIndex - 2;
      }
      if (e.key == 'ArrowDown') {
        nextRowIndex =
          currentRowIndex == rows.length - 1
            ? rows.length - 1
            : currentRowIndex + 2;
      }
      let nextRow = rows[nextRowIndex];
      let itemName = e.target.dataset.name;
      nextRow?.querySelector(`[data-name="${itemName}"]`)?.focus();
    }
  };

  function getCells(row) {
    return Array.from(
      row.querySelectorAll(
        '[role="gridcell"] button, [role="gridcell"][tabindex]'
      )
    );
  }
  function enterRow(e) {
    const rowCells = getCells(e.target);

    if (rowCells.length > 1) {
      rowCells[0].setAttribute('tabindex', '0');
      rowCells[0].focus();
    } else if (rowCells.length === 1) {
      const rows = getRows();
      const currentRow = getRowIndex(e.target);
      const nextRow = rows[currentRow + 1];

      if (nextRow) {
        rows[currentRow].setAttribute('tabindex', '-1');
        nextRow.setAttribute('tabindex', '0');
        nextRow.focus();
      }
    }
  }
  const handleKeyPressForMainContent = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        if (e.target.getAttribute('role') == 'row') {
          //when current focus is on a row, then we need to focus the first cell of that row
          enterRow(e);
        } else {
          //traverse though all cells in cyclic manner
          conditionBuilderRef?.current
            .querySelectorAll('[role="gridcell"] button')
            .forEach((eachElem, index, allElements) => {
              traverseClockVise(eachElem, index, allElements);
            });
        }

        break;
      case 'ArrowLeft':
        if (e.target.getAttribute('role') == 'row') {
          //when current focus is on a row, then we need to focus the first cell of that row
          //focus previous row last cell
          const rows = getRows();

          const currentRowIndex = getRowIndex(e.target);
          const prevRowIndex =
            currentRowIndex > 0 ? currentRowIndex - 1 : currentRowIndex;
          const prevCells = rows[prevRowIndex].querySelectorAll(
            '[role="gridcell"] button'
          );
          prevCells[prevCells.length - 1]?.focus();
        } else {
          conditionBuilderRef?.current
            .querySelectorAll('[role="gridcell"] button')
            .forEach((eachElem, index, allElements) => {
              traverseReverse(eachElem, index, allElements);
            });
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
