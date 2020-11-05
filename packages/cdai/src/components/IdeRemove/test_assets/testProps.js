//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { MEDIUM_IMPACT, HIGH_IMPACT } from '../IdeRemove.js';

export const testResourceName = '[resource name]';

export const coreConfig = (itemName = testResourceName) => {
  return {
    open: true,
    closeIconDescription: 'Close modal',

    deleteContent: {
      label: `Remove ${itemName}`,
      heading: 'Confirm remove',
      body: `Clicking delete will remove ${itemName}. This action cannot be undone.`,
    },

    cancelText: 'Cancel',
    deleteText: 'Delete',
  };
};

export const configWithPostDeleteContent = (
  config = coreConfig(),
  itemName = testResourceName
) => {
  return {
    ...config,
    postDeleteContent: {
      label: `[Optional] Confirmed`,
      heading: `[Optional]  ${itemName} removed`,
      body: `[Optional]  ${itemName} has been removed. Close the modal to continue.`,
    },
  };
};

export const withMediumImpact = {
  ...coreConfig(),
  removeType: MEDIUM_IMPACT,
};

export const withHighImpact = {
  ...coreConfig(),
  removeType: HIGH_IMPACT,
  highImpactItemName: testResourceName,
  highImpactTextFieldLabel: 'Confirmation text field label',
};
