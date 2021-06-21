/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import toBeAccessible from 'jest-config-ibm-cloud-cognitive/setup/matchers/toBeAccessible';

expect.extend({ toHaveNoDAPViolations: toBeAccessible });

// https://stackoverflow.com/questions/58070996/how-to-fix-the-warning-uselayouteffect-does-nothing-on-the-server
const { mock, requireActual } = jest;

const React = requireActual('react');

mock('react', () => ({
  ...React,
  useLayoutEffect: React.useEffect,
}));
