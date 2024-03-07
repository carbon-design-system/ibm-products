/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useLayoutEffect } from 'react';

// Originally from `@carbon/react`, https://github.com/carbon-design-system/carbon/blob/main/packages/react/src/internal/useIsomorphicEffect.js
// useLayoutEffect on the client, useEffect on the server
export const useIsomorphicEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
