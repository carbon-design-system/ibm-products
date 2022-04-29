/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { px } from '@carbon/layout';
import { pkg } from '../../../settings';

export const useSpreadsheetMouseMove = ({
  ref,
  blockClass = `${pkg.prefix}--data-spreadsheet`,
  headerCellHoldActive,
}) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const clonedSelectionElement = ref.current.querySelector(
        `.${blockClass}__selection-area--element-cloned`
      );
      if (clonedSelectionElement) {
        ref.current.addEventListener('mousemove', handleMouseMove);
      }
      const spreadsheetWrapperElement = ref.current;
      const spreadsheetCoords =
        spreadsheetWrapperElement.getBoundingClientRect();
      const xPositionRelativeToSpreadsheet =
        event.clientX - spreadsheetCoords.left;
      const offsetXValue = clonedSelectionElement?.getAttribute(
        'data-clone-offset-x'
      );
      // Moves the position of the cloned selection area to follow mouse
      clonedSelectionElement.style.left = px(
        xPositionRelativeToSpreadsheet - offsetXValue
      );
    };
    if (headerCellHoldActive) {
      ref.current.addEventListener('mousemove', handleMouseMove);
    }

    const spreadsheetRef = ref.current;
    if (!headerCellHoldActive) {
      spreadsheetRef?.removeEventListener('mousemove', handleMouseMove);
    }
    return () => {
      spreadsheetRef?.removeEventListener('mousemove', handleMouseMove);
    };
  });
};
