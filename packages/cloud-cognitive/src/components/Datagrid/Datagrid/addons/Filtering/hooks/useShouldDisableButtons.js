/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable jsdoc/check-param-names */

import { useState, useEffect } from 'react';
import isEqual from 'lodash/isEqual';

/**
 * Keeps track of the button disabled state
 * @param  {string} initialValue - the initial value if the buttons should be enabled or disabled
 * @param  {object} filtersState - the filter state from the filter panel or flyout
 * @param  {object} prevFiltersRef - reference of the prev filterState
 * @returns {Array} returns a tuple of the state and setter function
 */
const useShouldDisableButtons = ({
  initialValue = true, // initially the buttons should be disabled
  filtersState,
  prevFiltersRef,
}) => {
  const [shouldDisableButtons, setShouldDisableButtons] =
    useState(initialValue);

  useEffect(
    function updateDisabledButtonsState() {
      setShouldDisableButtons(
        isEqual(filtersState, JSON.parse(prevFiltersRef.current))
      );
    },
    [filtersState, prevFiltersRef]
  );

  return [shouldDisableButtons, setShouldDisableButtons];
};

export default useShouldDisableButtons;
