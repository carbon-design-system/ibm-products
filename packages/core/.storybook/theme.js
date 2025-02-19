import { create } from '@storybook/theming/create';
import packageInfo from '../../ibm-products/package.json';

const { description, version } = packageInfo;

console.log(description, version);

export default create({
  brandTitle: `${description} v${version}`,
  fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontCode: "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', Courier, monospace",
});
