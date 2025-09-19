import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  HeaderContainer,
} from '@carbon/react';
import { Notification, UserAvatar, Switcher, Fade } from '@carbon/react/icons';
import { CarbonRouterLink } from '../../CarbonRouterLink';

// eslint-disable-next-line react/prop-types
export const CommonHeader = ({ className }) => {
  return (
    <HeaderContainer
      render={({
        isSideNavExpanded,
        onClickSideNavExpand
      }) => (
        <Header aria-label="Carbon Tutorial" className={className}>
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        isCollapsible
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
      />

      <HeaderName href="/" prefix="IBM">
        [Product]
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher">
          <Switcher size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>

      
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        onOverlayClick={onClickSideNavExpand}
        onSideNavBlur={onClickSideNavExpand}
        isFixedNav
      >
        <SideNavItems>
          <SideNavLink as={CarbonRouterLink} renderIcon={Fade} to='/'>
            With breadcrumbs
          </SideNavLink>
          <SideNavLink as={CarbonRouterLink} renderIcon={Fade} to='/with-actions'>
            With actions
          </SideNavLink>
          <SideNavLink as={CarbonRouterLink} renderIcon={Fade} to='/with-hero-image'>
            With hero image
          </SideNavLink>
          <SideNavLink as={CarbonRouterLink} renderIcon={Fade} to='/with-tabs-and-tags'>
            With tabs and tags
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </Header>
  )}
    />
  );
};
