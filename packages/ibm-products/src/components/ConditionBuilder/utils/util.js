export const focusThisField = (evt) => {
  setTimeout(() => {
    evt.target.closest('[role="gridcell"]')?.querySelector('button')?.click();
    evt.target.closest('[role="gridcell"]')?.querySelector('button')?.focus();
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

export const checkForHoldingKey = (evt, key) => {
  // possible key inputs: altKey,ctrlKey,metaKey,shiftKey
  if (key === 'cmd') {
    return evt.metaKey || evt.ctrlKey;
  }
  return evt[key];
};

export const checkDuplicateAction = (
  actionState,
  selectedId,
  currentActionId
) => {
  if (
    selectedId !== currentActionId &&
    actionState.find((eachAction) => eachAction.id === selectedId)
  ) {
    return true;
  }
  return false;
};
