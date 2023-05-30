import React from 'react';
import { useGlobals } from '@storybook/manager-api';

import { AddonPanel } from '@storybook/components';
import { PARAM_KEY } from './constants';
import { PanelContent } from './components/PanelContent';

// const MyPanel = () => {
//   const value = useParameter(PARAM_KEY, null);
//   const item = value ? value.data : 'No story parameter defined';
//   return <div>{item}</div>;
// };

export const Panel = (props) => {
  const [globals, updateGlobals] = useGlobals();
  const globalCarbonTheme = globals[PARAM_KEY];

  return (
    <AddonPanel {...props}>
      <PanelContent
        theme={globalCarbonTheme}
        onChange={(value) => {
          updateGlobals({ [PARAM_KEY]: value });
        }}
      />
    </AddonPanel>
  );
};
