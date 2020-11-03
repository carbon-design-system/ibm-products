import React from 'react';
import { settings } from 'carbon-components';
const { prefix } = settings;

export const withChildren = {
  children: (
    <div className={`${prefix}--row`}>
      <div className={`${prefix}--col`}>Column 1</div>
      <div className={`${prefix}--col`}>Column 2</div>
    </div>
  ),
};

export const withBleedClass = {
  bleedClassName: 'storybook--ide-page-component-bleed',
};
