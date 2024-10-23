import { create } from '@storybook/theming';
import packageInfo from '../package.json';

const { description, version } = packageInfo;

export default create({
  base: 'light',
  fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontCode: "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', Courier, monospace",
  brandTitle: `${description} v${version}`,
  brandUrl: packageInfo.repository.url,
});
