/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { px } from '@carbon/layout';
import { pkg } from '../../settings';

export const createActiveCellFn = ({
  placementElement,
  coords,
  addToHeader = false,
  contextRef,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  onActiveCellChange,
  activeCellValue,
}) => {
  if (!coords) {
    return;
  }
  // If the active cell is in the column header row (very first), we need to append this element
  // to `.${blockClass}__header--container`, otherwise it should be appended to `.${blockClass}__listContainer` firstElementChild
  const activeElementContainer = addToHeader
    ? contextRef?.current.querySelector(`.${blockClass}__header--container`)
    : contextRef?.current.querySelector(`.${blockClass}__list--container`)
        .firstElementChild;
  const relativePosition = {
    top:
      placementElement.getBoundingClientRect().top -
      activeElementContainer.getBoundingClientRect().top,
    left:
      placementElement.getBoundingClientRect().left -
      activeElementContainer.getBoundingClientRect().left,
  };
  const activeCellButton =
    contextRef?.current.querySelector(
      `.${blockClass}__active-cell--highlight`
    ) || document.createElement('button');
  activeCellButton.classList.add(
    `${blockClass}__active-cell--highlight`,
    `${blockClass}--interactive-cell-element`
  );
  activeCellButton.style.width = px(placementElement?.offsetWidth);
  activeCellButton.style.height = px(placementElement?.offsetHeight);
  activeCellButton.style.left = px(relativePosition.left);
  activeCellButton.style.top = px(relativePosition.top);
  activeCellButton.setAttribute(
    'data-active-row-index',
    typeof coords?.row === 'number' ? coords.row : 'header'
  );
  activeCellButton.setAttribute(
    'data-active-column-index',
    typeof coords?.column === 'number' ? coords.column : 'header'
  );
  activeElementContainer.appendChild(activeCellButton);
  activeCellButton.focus();
  if (typeof coords?.column === 'number' && typeof coords?.row === 'number') {
    onActiveCellChange(activeCellValue);
  }
};
