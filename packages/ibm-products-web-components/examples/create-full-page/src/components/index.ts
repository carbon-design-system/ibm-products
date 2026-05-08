/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { CreateFullPage } from './create-full-page';
export { CreateFullPageStep } from './create-full-page-step';
export { CreateInfluencer } from './create-influencer';

// Import all components to register them
// Import page-header components once to avoid duplicate registrations
import '@carbon/ibm-products-web-components/es/components/page-header/index.js';
import './create-full-page';
import './create-full-page-step';
import './create-influencer';

