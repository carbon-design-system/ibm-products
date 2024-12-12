/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext, useContext } from 'react';

export const CoachmarkContext = createContext(undefined);

export const useCoachmark = () => {
  return useContext(CoachmarkContext);
};
