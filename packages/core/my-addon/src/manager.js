// /my-addon/src/manager.js

import { addons, types } from '@storybook/manager-api';

import { Panel } from './Panel';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: Panel,
  });
});
