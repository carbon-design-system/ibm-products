/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { CreateFullPage } from './create-full-page';
export { CreateFullPageStep } from './create-full-page-step';
export { CreateInfluencer } from './create-influencer';

const globalScope = globalThis as typeof globalThis & {
  __c4pPageHeaderLoaded?: boolean;
};

if (!globalScope.__c4pPageHeaderLoaded) {
  globalScope.__c4pPageHeaderLoaded = true;

  await import(
    '@carbon/ibm-products-web-components/es/components/page-header/index.js'
  );
}
// Import all components to register them
import './create-full-page';
import './create-full-page-step';
import './create-influencer';

