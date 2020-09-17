import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from 'carbon-components-react';

import { Terminal32 } from '@carbon/icons-react';

const Navigation = () => {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Terminal32 />
        </HeaderGlobalAction>
        {/* <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction> */}
      </HeaderGlobalBar>
    </Header>
  );
};

export default Navigation;
