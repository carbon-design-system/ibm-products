/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';
import { usePreviousValue } from '../../../global/js/hooks';

const hasFocus = () => typeof document !== 'undefined' && document.hasFocus();

export const useMultipleKeyTracking = ({
  ref,
  containerHasFocus,
  isEditing,
}) => {
  const [windowFocused, setWindowFocused] = useState(hasFocus);
  const [keysPressedList, setKeysPressedList] = useState([]);
  const previousState = usePreviousValue({ isEditing, windowFocused });

  // useEffect to check for window focus, if window loses focus
  // we need to clear out the keysPressedList
  useEffect(() => {
    setWindowFocused(hasFocus());
    const onWindowFocus = () => setWindowFocused(true);
    const onWindowBlur = () => setWindowFocused(false);

    window.addEventListener('focus', onWindowFocus);
    window.addEventListener('blur', onWindowBlur);

    return () => {
      window.removeEventListener('focus', onWindowFocus);
      window.removeEventListener('blur', onWindowBlur);
    };
  }, []);

  useEffect(() => {
    if (containerHasFocus && !isEditing) {
      ref.current.onkeydown = ref.current.onkeyup = (event) => {
        // If keydown, we will add the new key to the keysPressedList array
        if (event.type === 'keydown') {
          // Prevent multiple keys of the same type being added to our keysPressedList array
          if (keysPressedList.includes(event.code)) {
            return;
          }
          const tempKeys = [...keysPressedList];
          tempKeys.push(event.code);
          setKeysPressedList([...new Set(tempKeys)]);
        }
        // If keyup, we will remove the key from the keysPressedList array
        if (event.type === 'keyup') {
          const tempKeys = [...keysPressedList];
          const filteredClone = tempKeys.filter((item) => item !== event.code);
          // Keyup events are lost on all other keys if a Meta key is used
          // so to work around this behavior, we empty out all other keys
          // from the keysPressedList array if we detect a Meta keyup event
          if (event.code === 'MetaLeft' || event.code === 'MetaRight') {
            return setKeysPressedList([]);
          }
          setKeysPressedList([...new Set(filteredClone)]);
        }
      };
    }
    if (previousState?.windowFocused && !windowFocused) {
      setKeysPressedList([]);
    }
    // Remove handlers if the spreadsheet container loses focus
    // or is currently in edit mode
    if (!containerHasFocus || isEditing) {
      ref.current.onkeydown = undefined;
      ref.current.onkeyup = undefined;
      if (!previousState?.isEditing && isEditing) {
        setKeysPressedList([]);
      }
    }
  }, [
    keysPressedList,
    containerHasFocus,
    ref,
    isEditing,
    previousState?.isEditing,
    windowFocused,
    previousState?.windowFocused,
  ]);
  return { keysPressedList, windowFocused };
};
