/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// prettier-ignore
'use client'

export { pkg } from './settings';
export { usePrefix } from './global/js/hooks';
export * from './components';

// Re-export primitives utilities for public consumption
export { AddSelectData } from '@carbon/ibm-products-primitives';
export type {
  AddSelectItem,
  //   ItemStatus,
  //   SearchOptions,
} from '@carbon/ibm-products-primitives';
