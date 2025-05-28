/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as FeatureFlags from '@carbon/feature-flags';

FeatureFlags.merge({
  'default-portal-target-body': true,
  'enable-datagrid-useInlineEdit': false,
  'enable-datagrid-useEditableCell': false,
  'enable-datagrid-useCustomizeColumns': false,
  'ExampleComponent.secondaryIcon': false,
  'ExampleComponent.useExample': false,
  'enable-example-flag': false, // used in testing
  'enable-example-flag-1': true, // used in testing
  enableSidepanelResizer: false,
});
