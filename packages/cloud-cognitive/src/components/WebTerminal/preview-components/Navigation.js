import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from '@carbon/react/lib/components/UIShell';
import {
  Terminal,
  Search,
  User,
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
          <Terminal size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User" onClick={() => {}}>
          <User size={20} />
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
