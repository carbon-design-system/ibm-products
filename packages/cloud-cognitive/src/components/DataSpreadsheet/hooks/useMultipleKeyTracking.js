/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';
import { usePreviousValue } from '../../../global/js/hooks';

export const useMultipleKeyTracking = ({
  ref,
  containerHasFocus,
  isEditing,
}) => {
  const [activeKeys, setActiveKeys] = useState([]);
  const previousState = usePreviousValue({ isEditing });
  useEffect(() => {
    if (containerHasFocus && !isEditing) {
      ref.current.onkeydown = ref.current.onkeyup = (event) => {
        // If keydown, we will add the new key to the activeKeys array
        if (event.type === 'keydown') {
          // Prevent multiple keys of the same type being added to our activeKeys array
          if (activeKeys.includes(event.code)) {
            return;
          }
          const tempKeys = [...activeKeys];
          tempKeys.push(event.code);
          setActiveKeys([...new Set(tempKeys)]);
        }
        // If keyup, we will remove the key from the activeKeys array
        if (event.type === 'keyup') {
          const tempKeys = [...activeKeys];
          const filteredClone = tempKeys.filter((item) => item !== event.code);
          // Keyup events are lost on all other keys if a Meta key is used
          // so to work around this behavior, we empty out all other keys
          // from the activeKeys array if we detect a Meta keyup event
          if (event.code === 'MetaLeft' || event.code === 'MetaRight') {
            return setActiveKeys([]);
          }
          setActiveKeys([...new Set(filteredClone)]);
        }
      };
    }
    // Remove handlers if the spreadsheet container loses focus
    // or is currently in edit mode
    if (!containerHasFocus || isEditing) {
      ref.current.onkeydown = undefined;
      ref.current.onkeyup = undefined;
      if (!previousState?.isEditing && isEditing) {
        setActiveKeys([]);
      }
    }
  }, [activeKeys, containerHasFocus, ref, isEditing, previousState?.isEditing]);
  return activeKeys;
};
