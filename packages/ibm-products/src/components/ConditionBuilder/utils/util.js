export const focusThisField = (e) => {
  setTimeout(() => {
    e.target.closest('[role="gridcell"]')?.querySelector('button')?.click();
    e.target.closest('[role="gridcell"]')?.querySelector('button')?.focus();
  }, 0);
};
export const focusThisItem = (currentElement) => {
  setTimeout(() => {
    //document.activeElement.setAttribute('tabindex', '-1');
    // currentElement.setAttribute('tabindex', '0');
    currentElement?.focus();
  }, 0);
};
export const traverseClockVise = (
  eachElem,
  index,
  allElements,
  rotate,
  trapFocus
) => {
  if (eachElem == document.activeElement) {
    if (index !== allElements.length - 1) {
      focusThisItem(allElements[index + 1]);
    } else {
      focusThisItem(allElements[rotate ? 0 : allElements.length - 1]);
    }
  } else if (
    Array.from(allElements).indexOf(document.activeElement) == -1 &&
    trapFocus
  ) {
    focusThisItem(allElements[0]);
  }
};
export const traverseReverse = (
  eachElem,
  index,
  allElements,
  rotate,
  trapFocus
) => {
  if (eachElem == document.activeElement) {
    if (index !== 0) {
      focusThisItem(allElements[index - 1]);
    } else {
      focusThisItem(allElements[rotate ? allElements.length - 1 : 0]);
    }
  } else if (
    Array.from(allElements).indexOf(document.activeElement) == -1 &&
    trapFocus
  ) {
    focusThisItem(allElements[allElements.length - 1]);
  }
};
