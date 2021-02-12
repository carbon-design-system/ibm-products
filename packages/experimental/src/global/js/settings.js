import featureFlags from '../../generated/feature-flags/feature-flags';
import { settings } from 'carbon-components';

const pkgPrefix = 'exp';
const carbonPrefix = settings.prefix;
const storybookPrefixCanary = 'Cloud & Cognitive/Canary';
const storybookPrefixReleased = 'Cloud & Cognitive/Released';

export {
  pkgPrefix,
  carbonPrefix,
  featureFlags,
  storybookPrefixCanary,
  storybookPrefixReleased,
};
