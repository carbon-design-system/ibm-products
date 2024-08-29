/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { pkg } from '../../../settings';

export const blockClass = `${pkg.prefix}--condition-builder`;
export const NON_HIERARCHICAL_VARIANT = 'Non-Hierarchical';
export const HIERARCHICAL_VARIANT = 'Hierarchical';

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

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getValue = {
  text: (value) => value,
  textarea: (value) => value,
  time: (value) => value,
  number: (value) => value,
  option: (value) => {
    if (value && typeof value !== 'string') {
      const selectedValues = Array.isArray(value) ? value : [value];
      return selectedValues.map((option) => option.label).join(', ');
    }

    return value;
  },
  date: (value) => {
    if (Array.isArray(value) && value.length > 1) {
      const start =
        value?.[0] && !isNaN(new Date(value[0]))
          ? formatDate(new Date(value[0]))
          : '';
      const end =
        value?.[1] && !isNaN(new Date(value[1]))
          ? formatDate(new Date(value[1]))
          : '';
      return `${start} To ${end}`;
    } else if (Array.isArray(value) && !isNaN(new Date(value[0]))) {
      return formatDate(new Date(value[0]));
    } else {
      return value;
    }
  },
  custom: (value) => value,
};
