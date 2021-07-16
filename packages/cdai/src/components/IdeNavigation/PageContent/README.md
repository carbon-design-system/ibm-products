# IDEPageComponent Component

## Purpose

A common rendering component to add the carbon grid to any full width component,
which also includes IDE specific alignment css.

### Carbon elements used

- grid

### Component details

This component exists as a helper component to add the carbon grid to any full
width component (eg, a page) in your UI. It also includes IDE specific alignment
CSS on top of the grid to make it left aligned.

_IMPORTANT_ any child content provided inside this component is expected to be
carbon grid rows and or columns. Also note that if this isn't used, the IDE
specific grid alignment classes will need to be added to your existing
components for them to visualy match IDE. We reccomend use of this component at
the top level wherever possible to avoid any missing styling. Examples of usage
of this component can be found in IdePageHeader and IdeHome.

### Remaining items to implement/designed

- none

## Change history

| Date       | Change                                           | Contributed by / Product         |
| ---------- | ------------------------------------------------ | -------------------------------- |
| 03/09/2019 | First contribution of IDEPageComponent component | Matthew Chirgwin / Event Streams |
