/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Calculates the auto sized width of a column
 * @param {Array<object>} rows - The datagrid rows
 * @param {string} accessor - The accessor for the column
 * @param {string} headerText - The header text for the column
 */

export const getAutoSizedColumnWidth = (rows, accessor, headerText) => {
  const maxWidth = 400;
  const minWidth = 58;
  const letterSpacing = 10;
  const cellLength = Math.max(
    ...rows.map((row) => (`${row[accessor]}` || '').length),
    headerText.length
  );
  if (cellLength <= 3) {
    return minWidth;
  }
  return Math.min(maxWidth, cellLength * letterSpacing + 16);
};
