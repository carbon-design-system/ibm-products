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

const applyOverrides = (target, overrides = {}) => {
  for (const key in overrides) {
    if (key !== 'enableAll' && key !== 'disableAll') {
      // enable all is special handled one level up
      if (typeof target[key] === 'object') {
        if (typeof overrides[key] === 'object') {
          const disableAll = (key === 'component' || key === 'feature') && overrides[key].disableAll === true;
          const enableAll = (key === 'component' || key === 'feature') && overrides[key].enableAll === true;

          if (disableAll || enableAll) {
            // special case loop through all component or feature and enable
            for (const childKey in target[key]) {
              target[key][childKey] = enableAll;
            }
          }

          // process everything else working through branch
          applyOverrides(target[key], overrides[key]);
        } else {
          // reject replacing object with primitive
          console.warn(
            `Attempt to replace setting ${key} with primitive type rejected`
          );
        }
      } else {
        // both primitive types replace
        target[key] = overrides[key];
      }
    }
  }
};

const defaultPrefix = 'exp';

const settings = {
  prefix: defaultPrefix,
  flags: {
    component: { ...defaultFlags.component },
    feature: { ...defaultFlags.feature },
  },
  isComponentEnabled: (component, byDefault = false) => {
    const componentName = component?.name || component;
    const flags = byDefault ? defaultFlags : settings.flags;

    return flags.component[componentName];
  },
  isFeatureEnabled: (feature, byDefault = false) => {
    const flags = byDefault ? defaultFlags : settings.flags;
    return flags.feature[feature];
  },
  overrideSettings: (overrides, reset) => {
    if (reset) {
      settings.prefix = defaultPrefix;
      settings.flags = {
        component: { ...defaultFlags.component },
        feature: { ...defaultFlags.feature },
      };
    }
    applyOverrides(settings, overrides);
  },
  replaceWithCare: (replacement) => {
    console.warn(`

Presumably you know what you are doing as ou have replaced package settings:

------
${JSON.stringify(settings)}
------

with:

++++++
${JSON.stringify(replacement)}
++++++

`);

    for (const key in settings) {
      delete settings[key];
    }

    for (const key in replacement) {
      settings[key] = replacement[key];
    }
  },
};

module.exports = settings;
