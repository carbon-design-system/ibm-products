import featureFlags from '../../generated/feature-flags/feature-flags';
import getPackageFlags from './package-flags';
import { settings } from 'carbon-components';

const pkgPrefix = 'exp';
const carbonPrefix = settings.prefix;

export { pkgPrefix, carbonPrefix, featureFlags, getPackageFlags };
