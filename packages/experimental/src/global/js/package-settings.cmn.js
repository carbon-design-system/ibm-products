//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const defaults = {
  prefix: 'exp',
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
    PageActionItem: false,
    PageHeader: false,
    RemoveDeleteModal: false,
    SidePanel: false,
    TagSet: false,
    Tearsheet: false,
    TearsheetNarrow: false,
    TearsheetShell: false,
    WebTerminal: false,
  },

  // feature level flags
  feature: {
    'a-new-feature': false,
  },
};

const setAllOn = (flags, enabled) => {
  for (const key in flags) {
    flags[key] = enabled;
  }
};

const settings = {
  // flags
  prefix: defaults.prefix,
  component: { ...defaults.component },
  feature: { ...defaults.feature },
  // methods
  isComponentEnabled: (component, byDefault = false) => {
    const componentName = component?.name || component;
    const flags = byDefault ? defaults : settings;

    return flags.component[componentName];
  },
  isFeatureEnabled: (feature, byDefault = false) => {
    const flags = byDefault ? defaults : settings;
    return flags.feature[feature];
  },
  setAllComponents: (enabled) => {
    setAll(settings.component, enabled);
  },
  setAllFeatures: (enabled) => {
    setAll(settings.feature, enabled);
  },
};

module.exports = settings;
