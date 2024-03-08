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

- [Migrated components](#migrated-components)
- [Deprecated components](#deprecated-components-and-their-replacement-mappings)

## Migrated components

| Component                         | Changes                                     |
| --------------------------------- | ------------------------------------------- |
| BigNumbers (ICA)                  | View changes [here](#bignumbers)            |
| Decorator                         | View changes [here](#decorator)             |
| DecoratorLink - _**new**_         | View changes [here](#decoratorlink)         |
| DecoratorSingleButton - _**new**_ | View changes [here](#decoratorsinglebutton) |
| DecoratorDualButton - _**new**_   | View changes [here](#decoratordualbutton)   |
| DelimitedList                     | View changes [here](#delimitedlist)         |
| DescriptionList (TypeLayout)      | View changes [here](#descriptionlist)       |
| FilterPanel                       | View changes [here](#filterpanel)           |
| IconButtonBar                     | View changes [here](#iconbuttonbar)         |
| Nav                               | View changes [here](#nav)                   |
| NavList                           | View changes [here](#navlist)               |
| NavItem                           | View changes [here](#navitem)               |
| ScrollGradient                    | View changes [here](#scrollgradient)        |
| SearchBar                         | View changes [here](#searchbar)             |
| StatusIndicator                   | View changes [here](#statusindicator)       |
| StatusIndicatorStep (StatusStep)  | View changes [here](#statusindicatorstep)   |
| StringFormatter                   | View changes [here](#stringformatter)       |
| TruncatedList                     | View changes [here](#truncatedlist)         |

### BigNumbers

[Renamed from **ICA**.]

Unchanged props; names and functionality have not changed.

| Unchanged prop     |
| :----------------- |
| className          |
| forceShowTotal     |
| iconButton         |
| label \*           |
| locale             |
| percentage         |
| size               |
| tooltipDescription |
| total              |
| trending           |
| truncate           |
| value              |

New props were added to the component to meet Products' `v2` specifications.

| New prop       | Change                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------- |
| fractionDigits | Optional value to control the max/min fractional digits used when truncating the value and total. |
| loading        | Set to `true` to show the loading skeleton.                                                       |

**ICASkeleton** was deprecated. Use the `loading` prop above, instead.

---

### Decorator

**Decorator has been broken into 4 components:**

- Decorator
- DecoratorLink
- DecoratorSingleButton
- DecoratorDualButton

Unchanged props; names and functionality have not changed.

| Unchanged prop  |
| :-------------- |
| className       |
| score           |
| scoreThresholds |
| value \*        |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop          | New prop      |                                                                                 |
| :---------------- | :------------ | :------------------------------------------------------------------------------ |
| active            | theme         | Renamed.                                                                        |
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

| Deprecated prop  |                                                                                                                       |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------- |
| fitValue         | Is now the default behavior.                                                                                          |
| noBorderRadius   | The Carbon 11 design refresh no longer supports this.                                                                 |
| _noType_         | _(NOTE: This feature was omitted in the original migration's design refresh, but is under review to be re-instated.)_ |
| scoreDescription |                                                                                                                       |

---

### DecoratorLink

Unchanged props; names and functionality have not changed.

| Unchanged prop  |
| :-------------- |
| className       |
| score           |
| scoreThresholds |
| value \*        |

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
| setLabelTitle      | [NEED DESCRIPTION]                                                                                                 |
| onClickLabel       | Available only when `kind="dual-button"`                                                                           |
| onClickValue       | Available only when `kind="dual-button"`                                                                           |
| onContextMenuLabel | Available only when `kind="dual-button"`                                                                           |
| onContextMenuValue | Available only when `kind="dual-button"`                                                                           |

Deprecated props were not migrated from the old component.

| Deprecated prop  |                                                                                                                       |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------- |
| fitValue         | Is now the default behavior.                                                                                          |
| noBorderRadius   | The Carbon 11 design refresh no longer supports this.                                                                 |
| _noType_         | _(NOTE: This feature was omitted in the original migration's design refresh, but is under review to be re-instated.)_ |
| scoreDescription |                                                                                                                       |

---

### DecoratorSingleButton

Unchanged props; names and functionality have not changed.

| Unchanged prop  |
| :-------------- |
| className       |
| score           |
| scoreThresholds |
| value \*        |

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
| setLabelTitle      | [NEED DESCRIPTION]                                                                                                 |
| onContextMenuLabel | Available only when `kind="dual-button"`                                                                           |
| onContextMenuValue | Available only when `kind="dual-button"`                                                                           |

Deprecated props were not migrated from the old component.

| Deprecated prop  |                                                                                                                       |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------- |
| fitValue         | Is now the default behavior.                                                                                          |
| noBorderRadius   | The Carbon 11 design refresh no longer supports this.                                                                 |
| _noType_         | _(NOTE: This feature was omitted in the original migration's design refresh, but is under review to be re-instated.)_ |
| scoreDescription |                                                                                                                       |

---

### DecoratorDualButton

Unchanged props; names and functionality have not changed.

| Unchanged prop  |
| :-------------- |
| className       |
| score           |
| scoreThresholds |
| value \*        |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop          | New prop      |                                                                                 |
| :---------------- | :------------ | :------------------------------------------------------------------------------ |
| active            | theme         | Renamed.                                                                        |
| href              | href          | `kind="link"` now required.                                                     |
| inline            | small         | Renamed.                                                                        |
| onClick           | onClick       | Available only when `kind` is `"link"` or `"single-button"`                     |
| midLineTruncation | truncateValue | Adds options `"start"` and `"end"` to the existing `{ maxLength, front, back }` |
| noIcon            | hideIcon      | Renamed.                                                                        |
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
| setLabelTitle      | [NEED DESCRIPTION]                                                                                                 |

Deprecated props were not migrated from the old component.

| Deprecated prop  |                                                                                                                       |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------- |
| fitValue         | Is now the default behavior.                                                                                          |
| noBorderRadius   | The Carbon 11 design refresh no longer supports this.                                                                 |
| _noType_         | _(NOTE: This feature was omitted in the original migration's design refresh, but is under review to be re-instated.)_ |
| scoreDescription |                                                                                                                       |

---

### DelimitedList

**Note:** Append count functionality was not migrated as its implementation
never worked consistently and didn't match the description. No changes to the
props surface of this component.

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| className      |
| delimiter      |
| items          |
| truncate       |

---

### DescriptionList

[Renamed from **TypeLayout**]

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| border         |
| children       |
| className      |
| size           |

Deprecated props were not migrated from the old component.

| Deprecated prop |                                    |
| :-------------- | :--------------------------------- |
| bordered        | Removed, use `border` boolean prop |

---

### FilterPanel

[**Currently under development**]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### Nav

No changes

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| activeHref     |
| children       |
| className      |
| heading        |
| label\*        |

---

### NavList

No changes

Unchanged props; names and functionality have not changed.

| Unchanged prop       |
| :------------------- |
| activeHref           |
| children             |
| className            |
| icon                 |
| id                   |
| isExpandedOnPageload |
| navigationItemTitle  |
| onItemClick          |
| onListClick          |
| tabIndex             |
| title                |

---

### NavItem

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| activeHref     |
| children       |
| className      |
| current        |
| disabled       |
| element        |
| href           |
| id             |
| label          |
| link           |
| onClick        |
| tabIndex       |

Deprecated props were not migrated from the old component.

| Deprecated prop  |                    |
| :--------------- | :----------------- |
| handleItemSelect | [NEED DESCRIPTION] |

---

### ScrollGradient

Unchanged props; names and functionality have not changed.

| Unchanged prop         |
| :--------------------- |
| children               |
| className              |
| getScrollElementRef    |
| hideStartGradient      |
| onScroll               |
| scrollElementClassName |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop | New prop |                    |
| :------- | :------- | :----------------- |
| color    | color    | No longer required |

Deprecated props were not migrated from the old component.

| Deprecated prop |                                                                        |
| :-------------- | :--------------------------------------------------------------------- |
| direction       | Removed. Component should manage both horizontal and vertical scrolls. |

---

### SearchBar

No changes

Unchanged props; names and functionality have not changed.

| Unchanged prop       |
| :------------------- |
| className            |
| clearButtonLabelText |
| hideScopesLabel      |
| labelText            |
| onChange             |
| onSubmit             |
| placeHolderText      |
| scopeToString        |
| scopes               |
| scopesTypeLabel      |
| selectedScopes       |
| sortItems            |
| submitLabel          |
| titleText            |
| translateWithId      |
| value                |

---

### StatusIndicator

[Info here]

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| className      |
| title          |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop | New prop |                    |
| :------- | :------- | :----------------- |
| children | children | \* Is now required |

New props were added to the component to meet Products' `v2` specifications.

| New prop   |     |
| :--------- | :-- |
| onRetry    | New |
| retryLabel | New |
| showRetry  | New |

Deprecated props were not migrated from the old component.

| Deprecated prop        |         |
| :--------------------- | :------ |
| currentIndex           | Removed |
| retry: {action, label} | Removed |

### StatusIndicatorStep

[Renamed from **StatusStep**]

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| className      |
| description    |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop | New prop     |                                                                                        |
| :------- | :----------- | :------------------------------------------------------------------------------------- |
| status   | status       | \* Is now required.<br/>**New values:**<br />"active", "error", "finished", "inactive" |
| errorMsg | errorMessage | Renamed                                                                                |

Deprecated props were not migrated from the old component.

| Deprecated prop |         |
| :-------------- | ------- |
| label           | Removed |

---

### StringFormatter

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| className      |
| lines          |
| truncate       |
| value\*        |
| width          |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop         | New prop         | Change                                                                                                                                                                                                                        |
| :--------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toolTipDirection | toolTipDirection | Adds to the existing options { "top" and "bottom" }: <br/>"top-left" <br/>"top-right" <br/>"bottom-left" <br/>"bottom-right" <br/>"left" <br/>"left-top" <br/>"left-bottom" <br/>"right" <br/>"right-top" <br/>"right-bottom" |

---

### TruncatedList

Unchanged props; names and functionality have not changed.

| Unchanged prop |
| :------------- |
| as             |
| className      |

Some props were renamed or repurposed to meet Products' `v2` specifications.

| Old prop              | New prop            |                    |
| :-------------------- | :------------------ | :----------------- |
| children              | children            | \* Is now required |
| collapsedItemLimit    | collapsedItemsLimit | Renamed            |
| expandedItemLimit     | expandedItemsLimit  | Renamed            |
| expandButtonClassName | buttonClassName     | Renamed            |

New props were added to the component to meet Products' `v2` specifications.

| New prop      |     |
| :------------ | :-- |
| onClick       | New |
| viewLessLabel | New |
| viewMoreLabel | New |

Deprecated props were not migrated from the old component.

| Deprecated prop      |         |
| :------------------- | ------- |
| getExpandButtonLabel | Removed |
| truncateThreshold    | Removed |
| scrollGradientColor  | Removed |

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
| IconButtonBar       | View replacement [here](#iconbuttonbar)       |
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

### IconButtonBar

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
