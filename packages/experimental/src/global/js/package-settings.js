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
    /* new component flags here - comment used by generate CLI */
  },

  // feature level flags
  feature: {
    'a-new-feature': false,
  },
};

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

const component = new Proxy(
  { ...defaults.component },
  {
    set(target, property, value) {
      value && !silent && console.warn(warningMessageComponent(property));
      target[property] = value;
      return true; // value set
    },
    get(target, property) {
      return allComponents || (target[property] ?? false);
    },
  }
);

const feature = new Proxy(
  { ...defaults.feature },
  {
    set(target, property, value) {
      value && !silent && console.warn(warningMessageFeature(property));
      target[property] = value;
      return true; // value set
    },

    get(target, property) {
      return allFeatures || (target[property] ?? false);
    },
  }
);

export default {
  prefix: defaults.prefix,
  component: component,
  feature: feature,

  isComponentEnabled: (componentOrName, byDefault = false) => {
    const componentName =
      componentOrName?.displayName || componentOrName?.name || componentOrName;
    return byDefault
      ? defaults.component[componentName]
      : component[componentName];
  },

  isFeatureEnabled: (featureName, byDefault = false) => {
    return byDefault ? defaults.feature[featureName] : feature[featureName];
  },

  setAllComponents: (enabled) => {
    enabled && !silent && console.warn(warningMessageAllComponents);
    allComponents = enabled;
  },

  setAllFeatures: (enabled) => {
    enabled && !silent && console.warn(warningMessageAllFeatures);
    allFeatures = enabled;
  },

  _silenceWarnings: (value) => {
    // This will suppress console warnings when components or feature flags
    // are enabled, and should only be used when this is not an issue, such
    // as in internal test suites and storybook builds.
    silent = value;
  },
};
