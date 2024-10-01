import { create } from '@storybook/theming';
import packageInfo from '../package.json';

const { description, version } = packageInfo;
 
export default create({
  base: 'light',
  brandTitle: `${description} v${version}`,
});
