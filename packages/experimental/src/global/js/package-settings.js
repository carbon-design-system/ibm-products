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
    HTTPErrors: false,
    HTTPError403: false,
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
    UserProfileImage: false,
  },

  // feature level flags
  feature: {
    'a-new-feature': false,
  },
};

const component = { ...defaults.component };
const feature = { ...defaults.feature };
const warningMessageComponent = (property) =>
  `IBM Cloud Cognitive (WARNING): Component "${property}" enabled via feature flags. This component has not yet completed its review process.`;
const warningMessageFeature = (property) =>
  `IBM Cloud Cognitive (WARNING): Feature "${property}" enabled via feature flags.`;
const warningMessageAllComponents =
  'IBM Cloud Cognitive (WARNING): All components enabled through use of setAllComponents. This includes components that have not yet completed their review process.';
const warningMessageAllFeatures =
  'IBM Cloud Cognitive (WARNING): All features enabled through use of setAllFeatures';

const settings = {
  _allComponents: false,
  _allFeatures: false,
  // flags
  prefix: defaults.prefix,
  component: new Proxy(component, {
    set(target, property, value) {
      if (value) {
        console.warn(warningMessageComponent(property));
      }
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
      if (value) {
        console.warn(warningMessageFeature(property));
      }
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
      console.warn(warningMessageAllComponents);
    }
    settings._allComponents = enabled;
  },
  setAllFeatures: (enabled) => {
    if (enabled) {
      console.warn(warningMessageAllFeatures);
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
