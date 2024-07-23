import { blockClass } from '../ConditionBuilderContext/DataConfigs';

export const focusThisField = (evt, conditionBuilderRef) => {
  if (evt) {
    setTimeout(() => {
      manageTabIndexAndFocus(
        evt.target.closest('[role="gridcell"]')?.querySelector('button'),
        conditionBuilderRef
      );
      evt.target.closest('[role="gridcell"]')?.querySelector('button')?.click();
      evt.target.closest('[role="gridcell"]')?.querySelector('button')?.focus();
    }, 0);
  }
};
export const focusThisItem = (currentElement, conditionBuilderRef) => {
  setTimeout(() => {
    //document.activeElement.setAttribute('tabindex', '-1');
    // currentElement.setAttribute('tabindex', '0');
    manageTabIndexAndFocus(currentElement, conditionBuilderRef);
  }, 0);
};
export const traverseClockVise = (
  eachElem,
  index,
  allElements,
  rotate,
  trapFocus,
  conditionBuilderRef
) => {
  if (eachElem == document.activeElement) {
    if (index !== allElements.length - 1) {
      focusThisItem(allElements[index + 1], conditionBuilderRef);
    } else {
      focusThisItem(
        allElements[rotate ? 0 : allElements.length - 1],
        conditionBuilderRef
      );
    }
  } else if (
    Array.from(allElements).indexOf(document.activeElement) == -1 &&
    trapFocus
  ) {
    focusThisItem(allElements[0], conditionBuilderRef);
  }
};
export const traverseReverse = (
  eachElem,
  index,
  allElements,
  rotate,
  trapFocus,
  conditionBuilderRef
) => {
  if (eachElem == document.activeElement) {
    if (index !== 0) {
      focusThisItem(allElements[index - 1], conditionBuilderRef);
    } else {
      focusThisItem(
        allElements[rotate ? allElements.length - 1 : 0],
        conditionBuilderRef
      );
    }
  } else if (
    Array.from(allElements).indexOf(document.activeElement) == -1 &&
    trapFocus
  ) {
    focusThisItem(allElements[allElements.length - 1], conditionBuilderRef);
  }
};

export const checkForHoldingKey = (evt, key) => {
  // possible key inputs: altKey,ctrlKey,metaKey,shiftKey
  if (key === 'cmd') {
    return evt.metaKey || evt.ctrlKey;
  }
  return evt[key];
};

export const checkIsValid = (item) => {
  return item && item !== 'INVALID';
};

export const manageTabIndexAndFocus = (currentElement, conditionBuilderRef) => {
  const contentContainer =
    currentElement?.closest(`.${blockClass}__content-container`) ??
    currentElement?.closest(`.${blockClass}__actions-container`);
  contentContainer &&
    Array.from(contentContainer.querySelectorAll('[tabindex="0"]')).map(
      (element) => element?.setAttribute('tabindex', '-1')
    );

  currentElement?.setAttribute('tabindex', '0');
  conditionBuilderRef.current
    ?.querySelector(`.${blockClass}__statement-button`)
    ?.setAttribute('tabindex', '1');
  currentElement?.focus();
};
