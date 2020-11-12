# IDENavigation, IDESideNavLink and IDESideNavMenu Components

## Purpose

To provide common components for CP4I products for top level navigation. The IDE
pattern for navigation calls for a number of variations from core carbon
navigation components. These IDE components implement and abstract all of these.

### Carbon elements used

- Carbon SideNav, SideNavLink, SideNavMenu and SideNavFooter
- theme - designed using `carbon--theme--white`. Variables are set up to work
  with any other carbon/custom theme, as long as the carbon color variables are
  used

_NOTE_ - None of the items in the storybook have the `isActive` prop present.
This (or an anchor with the `active` attribute) are required for a blue bar to
appear to the left of the navigation items. Setting this value is required by
the user of the component.

### Component details

The components provided are visual - they do not provide any form of Navigation
management or model logic. They have however been written with no assumption or
assertion of a particular navigation technology or approach. It is completley up
to you on which child components you provide, and how they then interact and
update navigation state.

### Remaining items to implement/designed

- IdeSideNavMenu alt hover behaviour
- Responsive (horizontal) version which triggers at a given breakpoint

## Change history

| Date       | Change                                           | Contributed by / Product         |
| ---------- | ------------------------------------------------ | -------------------------------- |
| 15/10/2019 | Update implementation following Carbon update    | Matthew Chirgwin / Event Streams |
| 27/09/2019 | Update to align with carbon theme                | Matthew Chirgwin / Event Streams |
| 16/09/2019 | First contribution of IDEPageComponent component | Matthew Chirgwin / Event Streams |
