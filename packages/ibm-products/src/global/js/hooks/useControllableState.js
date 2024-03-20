/**
 * Copyright IBM Corp. 2016, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import pconsole from '../utils/pconsole';

/**
 * This custom hook simplifies the behavior of a component if it has state that
 * can be both controlled and uncontrolled. It functions identical to a
 * useState() hook and provides [state, setState] for you to use. You can use
 * the `onChange` argument to allow updates to the `state` to be communicated to
 * owners of controlled components.
 *
 * Note: this hook will warn if a component is switching from controlled to
 * uncontrolled, or vice-versa.
 *
 * @param {object} config
 * @param {string} config.name - component name
 * @param {any} config.default - the default value used for the state. This will be the fallback value used if `value` is not defined.
 * @param {Function} config.controlled - the controlled value
 * @param {any} config.state - name of the state variable
 * @returns {[any, Function]}
 */
export function useControllableState({
  controlled,
  default: defaultProp,
  name,
  state = 'value',
}) {
  const { current: isControlled } = useRef(controlled !== undefined);
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  useEffect(() => {
    if (isControlled !== (controlled !== undefined)) {
      pconsole.warn(
        `A component is changing an uncontrolled %s component to be controlled.
        This is likely caused by the value changing to a defined value
        from undefined. Decide between using a controlled or uncontrolled
        value for the lifetime of the component.
        More info: https://reactjs.org/link/controlled-components`
      );
    }
  }, [state, name, controlled, isControlled]);

  const { current: defaultValue } = useRef(defaultProp);

  useEffect(() => {
    if (!isControlled && defaultValue !== defaultProp) {
      pconsole.warn(
        `A component is changing a controlled %s component to be uncontrolled.
        'This is likely caused by the value changing to an undefined value
        'from a defined one. Decide between using a controlled or
        'uncontrolled value for the lifetime of the component.
        'More info: https://reactjs.org/link/controlled-components`
      );
    }
  }, [defaultProp, defaultValue, isControlled]);

  const setUncontrolledValue = useCallback(
    (newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled]
  );

  return [value, setUncontrolledValue];
}
