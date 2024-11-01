/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext, createContext } from 'react';
import { StepContextType } from '../Tearsheet/TearsheetShell_v2';

export const StepContext = createContext<StepContextType>(undefined);

export const useStepContext = () => useContext(StepContext);
