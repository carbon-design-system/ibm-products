import cx from 'classnames';
import { pkg } from '../../../settings';

const setIllustrationClass = (size) =>
  cx([
    `${pkg.prefix}-empty-state-illustration`,
    `${pkg.prefix}-empty-state-illustration--${size}`,
  ]);

export default setIllustrationClass;
