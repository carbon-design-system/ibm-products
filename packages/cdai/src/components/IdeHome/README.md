# IDEHome Component

## Purpose

To provide a generic 'Home page' component to any UI. The component exposes a
number of properties/metadata structures to add a number of tasks or activities
to the component, which can be grouped by type (eg Beginner tasks, Advanced
tasks etc). These tasks are then rendered as tiles, which when interacted with,
call a provided callback with the id of the tile interacted with. Use this
function call to then go to that task/trigger an action elsewhere in your UI.

### Feature file

Behaviours for this component are defined in
[src/components/IdeHome/IdeHome.feature](./IdeHome.feature)

### Carbon elements used

- type tokens for fonts
- grid - designed for 16 (default is 12, despite what the documentation says)
  columns. To enable this, add the below to your root scss file:

```
$feature-flags: (
  grid-columns-16: true
);
```

- theme - designed using `carbon--theme--white`. Variables are set up to work
  with any other carbon/custom theme, as long as the carbon color variables are
  used

### Component details

- If required, the `initialSet` property can be used to show any section on
  first render.

- The component provides two methods to render your tasks:

  - Image and heading/subtext. This method requires a heading and subtext, and
    an optional image/icon with styling (also optional).
  - Via callback, which should return JSX (which you can define - a method of
    having product specific content in the tiles).

  In each case, a callback function will then be invoked (which you will need to
  provide) when the user selects it.

### Example usage of the collapsibility ability callback of the header

- This new component implements the original IdeHome component, but also gives
  the consumer a collapsible ability. If this one is used just a boolean flag
  and callback function has to be used to enable this functionality. Please see
  the snippet for example usage:

```
export const withCollapsibleAbilityFunc = () => {
 let props = {
     headerCollapsed: false,
     headerButtonTextExpand: 'Show more',
     headerButtonTextCollapse: 'Show less',
   };

   props.headerHandleCollapseFunc = () => {
     // Set the value inside the localStorage
     window.localStorage.setItem('myUniqueIdForLocalStorage', () => {
       // If localStorage item exists check to see if the value equals 'true' and
       // return the result of that condition.
       !(
         window.localStorage.getItem('myUniqueIdForLocalStorage') &&
         window.localStorage.getItem('myUniqueIdForLocalStorage') === 'true'
       );
     });
     props.headerCollapsed = !props.headerCollapsed;
   };

   return props;
 };
```

### Remaining items to implement/designed

- Small card variation
- Common card content patterns
- Ability to change the default landing page
- Ability to hide the landing page image (reduce top space)
- Expore use of Carbon grid aspect ratios on the cards (rather than using a
  defined height)

## Change history

| Date       | Change                                                    | Contributed by / Product                              |
| ---------- | --------------------------------------------------------- | ----------------------------------------------------- |
| 01/06/2020 | BREAKING CHANGE: Rename iconType prop to secondaryGraphic | Simon Ho (simonho@ca.ibm.com, API Connnect            |
| 29/05/2020 | Add iconType prop                                         | Simon Ho (simonho@ca.ibm.com, API Connnect            |
| 27/09/2019 | Update to align with carbon theme                         | Matthew Chirgwin (chirmatt@uk.ibm.com), Event Streams |
| 03/09/2019 | Updated to use IdePageContent component                   | Matthew Chirgwin (chirmatt@uk.ibm.com), Event Streams |
| 23/07/2019 | First contribution of IdeHome component                   | Matthew Chirgwin (chirmatt@uk.ibm.com), Event Streams |
