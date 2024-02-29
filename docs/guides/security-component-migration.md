# Carbon for IBM Products: v2 migration guide for Security components

This document will review in detail the changes in @carbon/ibm-security to
Carbon for IBM Products v2. Because Carbon for IBM Products v2 uses Carbon v11,
which utilizes Sass modules, there is a requirement for teams to use the
[Dart Sass package](https://sass-lang.com/dart-sass) (`sass`), as opposed to
`node-sass`. This introduces some new sass concepts such as
[`@use`](https://sass-lang.com/documentation/at-rules/use) vs
[`@import`](https://sass-lang.com/documentation/at-rules/import) and
[namespaces](https://sass-lang.com/documentation/at-rules/use#choosing-a-namespace).
For Carbon v11 migration guidance, see their
[migration guide](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md).

v2 will receive weekly releases occurring every Tuesday morning.

## Table of Contents

- [Migrated components](#migrated-component-changes)
- [Deprecated components](#deprecated-components-and-their-replacement-mappings)

## Migrated component changes

| Component                    | Changes                               |
| ---------------------------- | ------------------------------------- |
| BigNumbers (ICA)             | View changes [here](#bignumbers)      |
| Decorator                    | View changes [here](#decorator)       |
| DelimitedList                | View changes [here](#delimitedlist)   |
| DescriptionList (TypeLayout) | View changes [here](#descriptionlist) |
| FilterPanel                  | View changes [here](#filterpanel)     |
| IconButtonBar                | View changes [here](#iconbuttonbar)   |
| Nav                          | View changes [here](#nav)             |
| ScrollGradient               | View changes [here](#scrollgradient)  |
| SearchBar                    | View changes [here](#searchbar)       |
| StatusIndicator              | View changes [here](#statusindicator) |
| StringFormatter              | View changes [here](#stringformatter) |
| TruncatedList                | View changes [here](#truncatedlist)   |

### BigNumbers

_Renamed from ICA. Note: ICASkeleton was not migrated - removed in favor of the
BigNumbers loading prop_

| Old prop | New prop       | Change                                                                                            |
| -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| —        | fractionDigits | Optional value to control the max/min fractional digits used when truncating the value and total. |
| —        | loading        | Specify if the BigNumbers is in a loading state - shows component in a skeleton fashion.          |

---

### Decorator

_Info here_

| Old prop          | New prop      | Change                             |
| ----------------- | ------------- | ---------------------------------- |
| active            | theme         | —                                  |
| —                 | disabled      | —                                  |
| —                 | kind          | —                                  |
| inline            | small         | —                                  |
| midLineTruncation | truncateValue | —                                  |
| noIcon            | hideIcon      | —                                  |
| —                 | onClickLabel  | —                                  |
| title             | valueTitle    | —                                  |
| type              | label         | Renamed and is no longer required. |
| fitValue          | —             | Deprecated                         |
| noBorderRadius    | —             | Deprecated                         |
| noType            | —             | Deprecated                         |

---

### DelimitedList

_Note: Append count functionality was not migrated as its implementation is
inconsistent with the description._

| Old prop | New prop | Change    |
| -------- | -------- | --------- |
| —        | —        | No change |

---

### DescriptionList

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### FilterPanel

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### IconButtonBar

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Nav

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### ScrollGradient

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### SearchBar

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### StatusIndicator

_Info here_

| Old prop               | New prop   | Change          |
| ---------------------- | ---------- | --------------- |
| children               | children   | Is now required |
| —                      | onRetry    | New             |
| —                      | retryLabel | New             |
| —                      | showRetry  | New             |
| currentIndex           | —          | Deprecated      |
| retry: {action, label} | —          | Deprecated      |

### StatusIndicatorStep

_Renamed from 'StatusStep'_

| Old prop | New prop     | Change                                                  |
| -------- | ------------ | ------------------------------------------------------- |
| status   | status       | Is now required. <br/>Acceptable values are (LIST HERE) |
|          |              | hello                                                   |
| errorMsg | errorMessage | Renamed                                                 |
| label    | —            | Deprecated                                              |

---

### StringFormatter

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### TruncatedList

_Info here_

| Old prop              | New prop            | Change          |
| --------------------- | ------------------- | --------------- |
| children              | children            | Is now required |
| collapsedItemLimit    | collapsedItemsLimit | Renamed         |
| expandedItemLimit     | expandedItemsLimit  | Renamed         |
| expandButtonClassName | buttonClassName     | Renamed         |
| —                     | onClick             | New             |
| —                     | viewLessLabel       | New             |
| —                     | viewMoreLabel       | New             |
| getExpandButtonLabel  | —                   | Deprecated      |
| truncateThreshold     | —                   | Deprecated      |
| scrollGradientColor   | —                   | Deprecated      |

---

## Deprecated components and their replacement mappings

| Component           | Replacement                                   |
| ------------------- | --------------------------------------------- |
| Card                | View replacement [here](#card)                |
| DataDecorator       | View replacement [here](#xxx)                 |
| DataTablePagination | View replacement [here](#datatablepagination) |
| ErrorPage           | View replacement [here](#xxx)                 |
| Header              | View replacement [here](#xxx)                 |
| Icon                | View replacement [here](#icon)                |
| IconButton          | View replacement [here](#iconbutton)          |
| Panel               | View replacement [here](#panel)               |
| PanelV2             | View replacement [here](#panelv2)             |
| ProfileImage        | View replacement [here](#profileimage)        |
| Shell               | View replacement [here](#shell)               |
| SummaryCard         | View replacement [here](#summarycard)         |
| Tearsheet           | View replacement [here](#tearsheet)           |
| TearsheetSmall      | View replacement [here](#tearsheetsmall)      |
| Toolbar             | View replacement [here](#toolbar)             |
| TrendingCard        | View replacement [here](#trendingcard)        |
| Wizard              | View replacement [here](#wizard)              |

### Card

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### DataDecorator

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### DataTablePagination

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### ErrorPage

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Header

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Icon

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### IconButton

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Panel

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### PanelV2

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### ProfileImage

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Shell

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### SummaryCard

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Tearsheet

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### TearsheetSmall

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Toolbar

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### TrendingCard

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---

### Wizard

_Info here_

| Old prop | New prop | Change |
| -------- | -------- | ------ |
| —        | —        | —      |

---
