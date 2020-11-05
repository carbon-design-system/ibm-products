# IdePageHeader Component

## Purpose

A common rendering component for rendering a page header within IDE.

### Feature file

Behaviours for this component are defined in
[src/components/IdeNavigation/PageHeader/IdePageHeader.feature](./IdePageHeader.feature)

### Carbon elements used

- type tokens for fonts
- grid
- theme - designed using `carbon--theme--white`. Variables are set up to work
  with any other carbon/custom theme, as long as the carbon color variables are
  used

### Component details

This component exists to provide a common rendering of a page header. It can
also be provided with Carbon Breadcrumb and/or Carbon Tab entries to represent
items like the current navigation state of your UI, or just show a heading. As
built/provided, all handing of what happens when a user click/selects a
Breadcrumb entry or tab however is for the user of the component to provide. In
the case of Event Streams, we intend to provide React Router
[Link](https://reacttraining.com/react-router/web/api/Link) components inside
the BreadcrumbItems and Tabs, so on interaction, routing logic will then drive
the change of page, and subsequently, the next render of this component with
updated Breadcrumb and Tab state. It is expected that this would be the first
item to appear under the Carbon `Header` component vertically.

_Important!_ When used with the Carbon `Header` component, there may be some
overlap of it and this component. To avoid this, you will either need to add
some padding to push it below the `Header`. Alternativley, the
`IdeFirstLevelNavigation` component's `children` property will account for this
by adding the required spacing when rendering the passed page content.

### Remaining items to implement/designed

- none

## Change history

| Date       | Change                                        | Contributed by / Product                              |
| ---------- | --------------------------------------------- | ----------------------------------------------------- |
| 27/09/2019 | Update to align with carbon theme             | Matthew Chirgwin (chirmatt@uk.ibm.com), Event Streams |
| 23/08/2019 | First contribution of IdePageHeader component | Matthew Chirgwin (chirmatt@uk.ibm.com), Event Streams |
