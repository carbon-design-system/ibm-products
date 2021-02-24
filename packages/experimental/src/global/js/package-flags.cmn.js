//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const defaultFlags = {
  // by default only released components are set to true
  component: {
    AboutModal: false,
    ActionBar: false,
    APIKeyDownlaoder: false,
    APIKeyModal: false,
    BreadcrumbWithOverflow: false,
    Card: false,
    ContextHeader: false,
    EmptyState: false,
    ExampleComponent: false,
    ExportModal: false,
    ImportModal: false,
    ModifiedTabs: false,
    Notifications: false,
    PageHeader: false,
    RemoveDeleteModal: false,
    SidePanel: false,
    TagSet: false,
    TearSheet: false,
  },

  // feature level flags
  feature: {
    'a-new-feature': false,
  },
};

const enableAll = (section) => {
  const result = {};
  for (const key in section) {
    result[key] = true;
  }
  return result;
};

const checkEnabled = (flags, overrides = {}) => {
  const result = {};
  for (const key in flags) {
    if (overrides[key]?.enableAll) {
      // enable all for this section
      delete overrides[key].enableAll;
      result[key] = enableAll(flags[key]);
    } else {
      result[key] = { ...flags[key], ...(overrides[key] || {}) };
    }
  }
  return result;
};

const packageFlags = () => {
  let initialized = false;
  let flags;

  // doNotUse parameter is intended for dev flags
  // doNotUse.initAgain causes flags to be refreshed which is handy in tests
  // an override section containing enableAll=true turns on everything in that section - handy for storybook
  return (overrides, doNotUse) => {
    const defaults = { ...defaultFlags };

    if (!initialized || doNotUse?.initAgain === true) {
      initialized = true;

      flags = checkEnabled(defaults, overrides);
    }

    return flags;
  };
};

const getPackageFlags = packageFlags();

module.exports = getPackageFlags;
