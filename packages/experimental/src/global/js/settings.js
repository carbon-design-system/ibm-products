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
  ...pkgSettings,
};

export default { carbon, pkg };
