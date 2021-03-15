//
// Copyright IBM Corp. 2020, 2021
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
    ActionBarItem: false,
    APIKeyDownlaoder: false,
    APIKeyModal: false,
    BreadcrumbWithOverflow: false,
    Card: false,
    ContextHeader: false,
    EmptyState: false,
    ErrorEmptyState: false,
    NoDataEmptyState: false,
    NoTagsEmptyState: false,
    NotFoundEmptyState: false,
    NotificationsEmptyState: false,
    UnauthorizedEmptyState: false,
    ExampleComponent: false,
    ExportModal: false,
    ImportModal: false,
    ModifiedTabs: false,
    Notifications: false,
    PageActionItem: false,
    PageHeader: false,
    RemoveDeleteModal: false,
    SidePanel: false,
    StatusIcon: false,
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

const component = { ...defaults.component };
const feature = { ...defaults.feature };
const warningMessage = (type, property) =>
  `IBM Cloud Cognitive (WARNING): ${type} "${property}" enabled via feature flags. This component has not yet completed it's review process.`;
const warningMessageAll = (type) =>
  `IBM Cloud Cognitive (WARNING): All canary ${type.toLowerCase()} have been enabled through use of setAll${type}`;

const settings = {
  _allComponents: false,
  _allFeatures: false,
  // flags
  prefix: defaults.prefix,
  component: new Proxy(component, {
    set(target, property, value) {
      console.warn(warningMessage('Component', property, value));
      target[property] = value;
      return true; // value set
    },
    get(target, property) {
      if (settings._allComponents) {
        return true;
      }

      const propValue = target[property];
      if (typeof propValue !== 'undefined') {
        return propValue;
      } else {
        return false; // unknown component
      }
    },
  }),
  feature: new Proxy(feature, {
    set(target, property, value) {
      console.warn(warningMessage('Feature', property, value));
      target[property] = value;
      return true; // value set
    },
    get(target, property) {
      if (settings._allFeatures) {
        return true;
      }

      const propValue = target[property];
      if (typeof propValue !== 'undefined') {
        return propValue;
      } else {
        return false; // unknown feature
      }
    },
  }),
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
    if (enabled) {
      console.warn(warningMessageAll('Components'));
    }
    settings._allComponents = enabled;
  },
  setAllFeatures: (enabled) => {
    if (enabled) {
      console.warn(warningMessageAll('Features'));
    }
    settings._allFeatures = enabled;
  },
};

const settingsProxy = new Proxy(settings, {
  set(target, property, value) {
    switch (property) {
      case '_allComponentsEnabled':
        target.setAllComponents(!!value);
        return true; // value set

      case '_allFeaturesEnabled':
        target.setAllFeatures(!!value);
        return true; // value set

      default:
        // do nothing
        return false; // did not set anything
    }
  },
});

export default settingsProxy;
