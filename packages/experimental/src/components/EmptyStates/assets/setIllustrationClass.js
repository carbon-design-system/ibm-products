import cx from 'classnames';
import { pkgPrefix } from '../../../global/js/settings';

const setIllustrationClass = (size) =>
  cx([
    `${pkgPrefix}-empty-state-illustration`,
    `${pkgPrefix}-empty-state-illustration--${size}`,
  ]);

export default setIllustrationClass;
