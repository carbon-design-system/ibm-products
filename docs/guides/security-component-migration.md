<!-- markdownlint-disable MD033 -->

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

Renamed from **ICA**.

| Old prop | New prop       | Change                                                                                            |
| -------- | -------------- | ------------------------------------------------------------------------------------------------- |
| —        | fractionDigits | Optional value to control the max/min fractional digits used when truncating the value and total. |
| —        | loading        | Set to `true` to show the loading skeleton.                                                       |

**ICASkeleton** was deprecated. Use the `loading` prop above, instead.

---

### Decorator

[Info here]

Unchanged props; names and functionality have not changed.

| Unchanged prop   |
| :--------------- |
| children         |
| className        |
| score            |
| scoreDescription |
| scoreThresholds  |
| value \*         |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop          | New prop      |                                                                                 |
| :---------------- | :------------ | :------------------------------------------------------------------------------ |
| active            | theme         | Renamed.                                                                        |
| href              | href          | `kind="link"` now required.                                                     |
| inline            | small         | Renamed.                                                                        |
| midLineTruncation | truncateValue | Adds options `"start"` and `"end"` to the existing `{ maxLength, front, back }` |
| noIcon            | hideIcon      | Renamed.                                                                        |
| onClick           | onClick       | Available only when `kind` is `"link"` or `"single-button"`                     |
| onContextMenu     | onContextMenu | Available only when `kind` is `"link"` or `"single-button"`                     |
| title             | valueTitle    | Will override the value's default `title` only.                                 |
| type              | label \*      | Renamed.                                                                        |

New props were added to the component to meet Products' `v2` specifications.

| New prop           |                                                                                                                    |
| :----------------- | :----------------------------------------------------------------------------------------------------------------- |
| disabled           | Applies only if `kind="single-button\|dual-button"`                                                                |
| kind               | Defines type of Decorator to display: `"default"` (default value), `"link"`, `"single-button"`, or `"dual-button"` |
| onClickLabel       | Available only when `kind="dual-button"`                                                                           |
| onClickValue       | Available only when `kind="dual-button"`                                                                           |
| onContextMenuLabel | Available only when `kind="dual-button"`                                                                           |
| onContextMenuValue | Available only when `kind="dual-button"`                                                                           |

Deprecated props were not migrated from the old component.

| Deprecated&nbsp;prop |                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| fitValue             | Is now the default behavior.                                                                                          |
| noBorderRadius       | The Carbon 11 design refresh no longer supports this.                                                                 |
| _noType_             | _(NOTE: This feature was omitted in the original migration's design refresh, but is under review to be re-instated.)_ |

| Old prop          | New prop      |                                    |
| :---------------- | :------------ | :--------------------------------- |
| active            | theme         |                                    |
| —                 | disabled      |                                    |
| —                 | kind          |                                    |
| inline            | small         |                                    |
| midLineTruncation | truncateValue |                                    |
| noIcon            | hideIcon      |                                    |
| —                 | onClickLabel  |                                    |
| title             | valueTitle    |                                    |
| type              | label         | Renamed and is no longer required. |
|                   |               |                                    |
| fitValue          | —             | Deprecated                         |
| noBorderRadius    | —             | Deprecated                         |
| noType            | —             | Deprecated                         |

---

### DelimitedList

Note: Append count functionality was not migrated as its implementation never
worked consistently and didn't match the description.

| Old prop | New prop | Change    |
| :------- | :------- | :-------- |
| —        | —        | No change |

---

### DescriptionList

[Info here]

| Old prop | New prop | Change                                             |
| :------- | :------- | :------------------------------------------------- |
| bordered | —        | Deprecated prop removed, use `border` boolean prop |

---

### FilterPanel

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### IconButtonBar

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Nav

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### ScrollGradient

[Info here]

| Old prop  | New prop | Change                                                                 |
| :-------- | :------- | :--------------------------------------------------------------------- |
| direction | —        | Removed. Component should manage both horizontal and vertical scrolls. |
| color     | color    | No longer required                                                     |

---

### SearchBar

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### StatusIndicator

[Info here]

| Old prop               | New prop   | Change             |
| :--------------------- | :--------- | :----------------- |
| children               | children   | \* Is now required |
| —                      | onRetry    | New                |
| —                      | retryLabel | New                |
| —                      | showRetry  | New                |
| currentIndex           | —          | Deprecated         |
| retry: {action, label} | —          | Deprecated         |

### StatusIndicatorStep

[Renamed from 'StatusStep']

| Old prop | New prop     | Change                                                                                 |
| :------- | :----------- | :------------------------------------------------------------------------------------- |
| status   | status       | \* Is now required.<br/>**New values:**<br />"active", "error", "finished", "inactive" |
| errorMsg | errorMessage | Renamed                                                                                |
| label    | —            | Deprecated                                                                             |

---

### StringFormatter

[Info here]

| Old prop         | New prop         | Change                                                                                                                                                           |
| :--------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toolTipDirection | toolTipDirection | **New values:** "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom" |

---

### TruncatedList

[Info here]

| Old prop              | New prop            | Change             |
| :-------------------- | :------------------ | :----------------- |
| children              | children            | \* Is now required |
| collapsedItemLimit    | collapsedItemsLimit | Renamed            |
| expandedItemLimit     | expandedItemsLimit  | Renamed            |
| expandButtonClassName | buttonClassName     | Renamed            |
| —                     | onClick             | New                |
| —                     | viewLessLabel       | New                |
| —                     | viewMoreLabel       | New                |
| getExpandButtonLabel  | —                   | Deprecated         |
| truncateThreshold     | —                   | Deprecated         |
| scrollGradientColor   | —                   | Deprecated         |

---

## Deprecated components and their replacement mappings

| Component           | Replacement                                   |
| :------------------ | :-------------------------------------------- |
| Card                | View replacement [here](#card)                |
| DataDecorator       | View replacement [here](#datadecorator)       |
| DataTablePagination | View replacement [here](#datatablepagination) |
| ErrorPage           | View replacement [here](#errorpage)           |
| Header              | View replacement [here](#header)              |
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

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### DataDecorator

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### DataTablePagination

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### ErrorPage

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Header

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Icon

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### IconButton

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Panel

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### PanelV2

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### ProfileImage

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Shell

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### SummaryCard

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Tearsheet

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### TearsheetSmall

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Toolbar

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### TrendingCard

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Wizard

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---
