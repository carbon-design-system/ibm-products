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
    HTTPError404: false,
    HTTPErrorOther: false,
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

let allComponents = false;
let allFeatures = false;
let silent = false;

const settings = {
  // flags
  prefix: defaults.prefix,
  component: new Proxy(component, {
    set(target, property, value) {
      if (value && !silent) {
        console.warn(warningMessageComponent(property));
      }
      target[property] = value;
      return true; // value set
    },
    get(target, property) {
      if (allComponents) {
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
      if (value && !silent) {
        console.warn(warningMessageFeature(property));
      }
      target[property] = value;
      return true; // value set
    },
    get(target, property) {
      if (allFeatures) {
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
    if (enabled && !silent) {
      console.warn(warningMessageAllComponents);
    }
    allComponents = enabled;
  },
  setAllFeatures: (enabled) => {
    if (enabled && !silent) {
      console.warn(warningMessageAllFeatures);
    }
    allFeatures = enabled;
  },
};

const settingsProxy = new Proxy(settings, {
  set(target, property, value) {
    switch (property) {
      case '_silenceWarnings':
        // change secret field
        silent = value;
        return true; // value set

      default:
        target[property] = value;
        return true; // value set
    }
  },
});

export default settingsProxy;
