import React, { useState } from "react";
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  // SideNav,
  // SideNavItems,
  // SideNavLink,
  // SideNavMenu,
  // SideNavMenuItem,
  SkipToContent
} from "@carbon/react";
import { Notification, UserAvatar, Switcher } from "@carbon/icons-react";
//import Fade16 from "@carbon/icons-react/lib/fade/16";

const Notification20 = (props) => <Notification size={20} {...props} />;
const UserAvatar20 = (props) => <UserAvatar size={20} {...props} />;
const Switcher20 = (props) => <Switcher size={20} {...props} />;

// eslint-disable-next-line react/prop-types
export const CommonHeader = ({ className }) => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
  };

  return (
    <Header aria-label='Carbon Tutorial' className={className}>
      <SkipToContent />
      <HeaderMenuButton
        aria-label='Open menu'
        isCollapsible
        onClick={handleClickSideNavExpand}
        isActive={isSideNavExpanded}
      />

      <HeaderName href='/' prefix='IBM'>
        Cloud PAK Automation Hub
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label='Notifications'>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label='User Avatar'>
          <UserAvatar20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label='App Switcher'>
          <Switcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>

      {/*
      <SideNav aria-label="Side navigation" isRail expanded={isSideNavExpanded}>
        <SideNavItems>
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
            Link
          </SideNavLink>
          <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
            Link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
      */}
    </Header>
  );
};
