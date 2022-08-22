//
// Copyright IBM Corp. 2020, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from 'carbon-components-react';
import {
  Terminal20 as Terminal,
  Search20 as Search,
  User20 as User,
} from '@carbon/icons-react';
import { useWebTerminal } from '../hooks';

const Navigation = () => {
  const { openWebTerminal } = useWebTerminal();

  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Web terminal" onClick={openWebTerminal}>
          <Terminal />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User" onClick={() => {}}>
          <User />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default Navigation;
