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
import PropTypes from 'prop-types';

const Navigation = ({ openTerminal }) => {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Web terminal" onClick={openTerminal}>
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

Navigation.propTypes = {
  /**
   * Opens the terminal
   */
  openTerminal: PropTypes.func.isRequired,
};

export default Navigation;
