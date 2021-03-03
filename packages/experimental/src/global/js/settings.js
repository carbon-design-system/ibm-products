import featureFlags from '../../generated/feature-flags/feature-flags';
import pkgSettings from './package-settings';
import { settings as carbonSettings } from 'carbon-components';

export const carbon = {
  get prefix() {
    return carbonSettings.prefix;
  },
  set prefix(val) {
    carbonSettings.prefix = val;
  },
  get flags() {
    return featureFlags;
  },
};

export const pkg = {
  get prefix() {
    return pkgSettings.prefix;
  },
  set prefix(val) {
    pkgSettings.prefix = val;
  },
  get flags() {
    return pkgSettings.flags;
  },
  isComponentEnabled: pkgSettings.isComponentEnabled,
  isFeatureEnabled: pkgSettings.isFeatureEnabled,
  overrideSettings: pkgSettings.overrideSettings,
  replaceWithCare: pkgSettings.replaceWithCare,
};

export default { carbon, pkg };
