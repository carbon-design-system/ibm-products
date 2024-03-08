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
[migration guide](https://ibm.biz/BdvkKP).

The Security package forwarded all of Carbon as a convenience. Going forward
these components will only be available by using the Carbon package for those.

v2 will receive weekly releases occurring every Tuesday morning.

## Table of Contents

- [Migrated components](#migrated-components)
- [Deprecated components](#deprecated-components-and-their-replacement-mappings)
- [Carbon components](#carbon-components)

| Component                          | Changes                                                                                                                                                                                                             | Replacement package    |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------- |
| `Accordion`                        | The `size` prop has been updated and no longer includes `xl`                                                                                                                                                        | `@carbon/react`        |
| `AccordionItem`                    | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#accordionitem)                                                                                                                                                  | `@carbon/react`        |
| `AccordionSkeleton`                | The deprecated prop `uid` is no longer needed and has been removed                                                                                                                                                  | `@carbon/react`        |
| `ActionableNotification`           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#notifications)                                                                                                                                                  | `@carbon/react`        |
| `BigNumbers` (ICA)                 | View changes [here](#bignumbers)                                                                                                                                                                                    | `@carbon/ibm-products` |
| `Breadcrumb`                       | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `BreadcrumbItem`                   | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `BreadcrumbSkeleton`               | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `Button`                           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#button)                                                                                                                                                         | `@carbon/react`        |
| `ButtonSkeleton`                   | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#buttonskeleton)                                                                                                                                                 | `@carbon/react`        |
| `Card`                             | **Deprecated** View replacement [here](#card)                                                                                                                                                                       | —                      |
| `CardSkeleton`                     | **Removed**                                                                                                                                                                                                         | —                      |
| `Checkbox`                         | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#checkbox)                                                                                                                                                       | `@carbon/react`        |
| `ClickableTile`                    | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#clickabletile)                                                                                                                                                  | `@carbon/react`        |
| `CodeSnippet`                      | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `Column`                           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#grid)                                                                                                                                                           | `@carbon/react`        |
| `ComboBox`                         | The `className` prop is now applied to the outermost element of `ComboBox`                                                                                                                                          | `@carbon/react`        |
| `ComboButton`                      | Deprecated - Promoted to Carbon v11. View changes [here](#combobutton)                                                                                                                                              | `@carbon/react`        |
| `ComposedModal`                    | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `ContentSwitcher`                  | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `ControlledPasswordInput`          | The `size` prop has been updated to match `PasswordInput`                                                                                                                                                           | `@carbon/react`        |
| `CopyButton`                       | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `DataDecorator`                    | **Deprecated:** View replacement [here](#datadecorator)                                                                                                                                                             | —                      |
| `DataTable`                        | No code changes. Scss changes can be found [here](https://ibm.biz/BdvkKP#scsscomponentsdata-table_data-tablescss)                                                                                                   | `@carbon/react`        |
| `DataTablePagination`              | **Deprecated:** View replacement [here](#datatablepagination)                                                                                                                                                       | —                      |
| `DatePicker`                       | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#datepicker)                                                                                                                                                     | `@carbon/react`        |
| `DatePickerInput`                  | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#datepickerinput)                                                                                                                                                | `@carbon/react`        |
| `Decorator`                        | View changes [here](#decorator)                                                                                                                                                                                     | `@carbon/ibm-products` |
| `DecoratorDualButton` **new**      | View changes [here](#decoratordualbutton)                                                                                                                                                                           | `@carbon/ibm-products` |
| `DecoratorLink` **new**            | View changes [here](#decoratorlink)                                                                                                                                                                                 | `@carbon/ibm-products` |
| `DecoratorSingleButton` **new**    | View changes [here](#decoratorsinglebutton)                                                                                                                                                                         | `@carbon/ibm-products` |
| `DescriptionList` (TypeLayout)     | View changes [here](#descriptionlist)                                                                                                                                                                               | `@carbon/ibm-products` |
| `DelimitedList`                    | View changes [here](#delimitedlist)                                                                                                                                                                                 | `@carbon/ibm-products` |
| `Dropdown`                         | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#dropdown)                                                                                                                                                       | `@carbon/react`        |
| `DropdownSkeleton`                 | The deprecated prop `inline` has been removed                                                                                                                                                                       | `@carbon/react`        |
| `ErrorPage`                        | **Deprecated:** View replacement [here](#errorpage)                                                                                                                                                                 | —                      |
| `ExpandableTile`                   | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#expandabletile)                                                                                                                                                 | `@carbon/react`        |
| `ExternalLink`                     | **Deprecated** View replacement [here](#externallink)                                                                                                                                                               | —                      |
| `FileUploader`                     | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#fileuploader)                                                                                                                                                   | `@carbon/react`        |
| `FileUploaderButton`               | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#fileuploaderbutton)                                                                                                                                             | `@carbon/react`        |
| `FileUploaderItem`                 | The size prop has been updated to: `PropTypes.oneOf(['sm', 'md', 'lg'])`                                                                                                                                            | `@carbon/react`        |
| `FilterPanel`                      | View changes [here](#filterpanel)                                                                                                                                                                                   | `@carbon/ibm-products` |
| `FilterableMultiSelect`            | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#filterablemultiselect)                                                                                                                                          | `@carbon/react`        |
| `FluidForm`                        | Vertical margin for form items and fieldsets is no longer included by default, use `<Stack>` for vertical spacing                                                                                                   | `@carbon/react`        |
| `Form`                             | Vertical margin for form items and fieldsets is no longer included by default, use `<Stack>` for vertical spacing                                                                                                   | `@carbon/react`        |
| `FormGroup`                        | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#formgroup)                                                                                                                                                      | `@carbon/react`        |
| `FormLabel`                        | The FormLabel component no longer applies margin                                                                                                                                                                    | `@carbon/react`        |
| `GettingStartedLayout`             | Layout modules are under review                                                                                                                                                                                     | —                      |
| `Grid`                             | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#grid)                                                                                                                                                           | `@carbon/react`        |
| `Header`                           | **Deprecated:** View replacement [here](#header)                                                                                                                                                                    | `@carbon/ibm-products` |
| `HeaderMenu`                       | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `HeaderNavigation`                 | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `ICA`                              | **Renamed** - See Big Numbers                                                                                                                                                                                       | `@carbon/ibm-products` |
| `Icon`                             | **Removed**                                                                                                                                                                                                         | —                      |
| `IconButton`                       | **Deprecated:** View replacement [here](#iconbutton)                                                                                                                                                                | —                      |
| `IconButtonBar`                    | **Deprecated:** View replacement [here](#iconbuttonbar)                                                                                                                                                             | —                      |
| `InlineLoading`                    | The deprecated success prop has been deprecated. Please use status="finished" instead                                                                                                                               | `@carbon/react`        |
| `InlineNotification`               | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#notifications)                                                                                                                                                  | `@carbon/react`        |
| `InteractiveTag`                   | **Removed**                                                                                                                                                                                                         | —                      |
| `LayoutModules`                    | Layout modules are under review (`ActionBarModule`, `ActionBarModuleItems`, `ButtonClusterModule`, `CardAreaModule`, `DescriptionListModule`, `DescriptionModule`, `ICAModule`, `ListItemModule`, `TitleBarModule`) | —                      |
| `Link`                             | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `Loading`                          | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `Modal`                            | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#modal)                                                                                                                                                          | `@carbon/react`        |
| `ModalFooter`                      | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `ModalHeader`                      | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `ModalWrapper`                     | **Removed**                                                                                                                                                                                                         | —                      |
| `MultiSelect`                      | The `className` prop is now applied to the outermost element of `MultiSelect`                                                                                                                                       | `@carbon/react`        |
| `Nav`                              | View changes [here](#nav)                                                                                                                                                                                           | `@carbon/ibm-products` |
| `NavList`                          | View changes [here](#navlist)                                                                                                                                                                                       | `@carbon/ibm-products` |
| `NavItem`                          | View changes [here](#navitem)                                                                                                                                                                                       | `@carbon/ibm-products` |
| `NonEntitledSection`               | **Deprecated:** View replacement [here](#nonentitledsection)                                                                                                                                                        | —                      |
| `NotificationActionButton`         | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#notifications)                                                                                                                                                  | `@carbon/react`        |
| `NotificationButton`               | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#notifications)                                                                                                                                                  | `@carbon/react`        |
| `NotificationTextDetails`          | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#notifications)                                                                                                                                                  | `@carbon/react`        |
| `NumberInput`                      | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#numberinput)                                                                                                                                                    | `@carbon/react`        |
| `OrderedList`                      | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `OverflowMenu`                     | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#overflowmenu)                                                                                                                                                   | `@carbon/react`        |
| `OverflowMenuItem`                 | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#overflowmenuitem)                                                                                                                                               | `@carbon/react`        |
| `Pagination`                       | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `Panel`                            | **Deprecated:** View replacement [here](#panel)                                                                                                                                                                     | —                      |
| `PanelV2`                          | **Deprecated:** View replacement [here](#panelv2)                                                                                                                                                                   | —                      |
| `PasswordInput`                    | The `size` prop has been updated to: `PropTypes.oneOf(['sm', 'md', 'lg'])`                                                                                                                                          | `@carbon/react`        |
| `Pill`                             | **Deprecated:** View replacement [here](#pill)                                                                                                                                                                      | —                      |
| `Portal`                           | **Removed** use React's Portal                                                                                                                                                                                      | —                      |
| `ProfileImage`                     | **Deprecated:** View replacement [here](#profileimage)                                                                                                                                                              | —                      |
| `ProgressIndicator`                | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `RadioButton`                      | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `RadioButtonGroup`                 | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#radiobuttongroup)                                                                                                                                               | `@carbon/react`        |
| `RadioTile`                        | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#radiotile)                                                                                                                                                      | `@carbon/react`        |
| `Row`                              | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#grid)                                                                                                                                                           | `@carbon/react`        |
| `ScrollGradient`                   | View changes [here](#scrollgradient)                                                                                                                                                                                | `@carbon/ibm-products` |
| `Search`                           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#search)                                                                                                                                                         | `@carbon/react`        |
| `SearchBar`                        | View changes [here](#searchbar)                                                                                                                                                                                     | `@carbon/ibm-products` |
| `SearchFilterButton`               | **Removed**                                                                                                                                                                                                         | —                      |
| `SearchLayoutButton`               | **Removed**                                                                                                                                                                                                         | —                      |
| `Select`                           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#select)                                                                                                                                                         | `@carbon/react`        |
| `SelectableTile`                   | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#selectabletile)                                                                                                                                                 | `@carbon/react`        |
| `Shell`                            | **Deprecated:** View replacement [here](#shell)                                                                                                                                                                     | —                      |
| `SideNavMenu`                      | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `SkeletonIcon`                     | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `SkeletonPlaceholder`              | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `SkeletonText`                     | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `Slider`                           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#slider)                                                                                                                                                         | `@carbon/react`        |
| `StackedNotification`              | **Removed** Proposing as a variant to Carbon notifications                                                                                                                                                          | —                      |
| `StatusIcon`                       | **Deprecated:** View replacement [here](#statusicon)                                                                                                                                                                | —                      |
| `StatusIndicator`                  | View changes [here](#statusindicator)                                                                                                                                                                               | `@carbon/ibm-products` |
| `StatusIndicatorStep` (StatusStep) | View changes [here](#statusindicatorstep)                                                                                                                                                                           | `@carbon/ibm-products` |
| `StatusStep`                       | **Renamed** See StatusIndicatorStep                                                                                                                                                                                 | —                      |
| `StringFormatter`                  | View changes [here](#stringformatter)                                                                                                                                                                               | `@carbon/ibm-products` |
| `StructuredListBody`               | Vertical margin for form items and fieldsets is no longer included by default, use `<Stack>` for vertical spacing                                                                                                   | `@carbon/react`        |
| `StructuredListCell`               | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `StructuredListHead`               | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `StructuredListInput`              | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#structuredlistinput)                                                                                                                                            | `@carbon/react`        |
| `StructuredListRow`                | The `label` prop is no longer needed and has been deprecated                                                                                                                                                        | `@carbon/react`        |
| `StructuredListSkeleton`           | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `StructuredListWrapper`            | The deprecated prop `border` has been removed                                                                                                                                                                       | `@carbon/react`        |
| `SummaryCard`                      | **Deprecated:** View replacement [here](#summarycard)                                                                                                                                                               | —                      |
| `Table`                            | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#table)                                                                                                                                                          | `@carbon/react`        |
| `TableToolbar`                     | The `size` prop has been updated to: `PropTypes.oneOf(['sm', 'lg'])`                                                                                                                                                | `@carbon/react`        |
| `TableToolbarSearch`               | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tabletoolbarsearch)                                                                                                                                             | `@carbon/react`        |
| `Tabs`                             | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tabs)                                                                                                                                                           | `@carbon/react`        |
| `Tab`                              | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tabs)                                                                                                                                                           | `@carbon/react`        |
| `TabContent`                       | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tabs)                                                                                                                                                           | `@carbon/react`        |
| `TabsSkeleton`                     | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tabs)                                                                                                                                                           | `@carbon/react`        |
| `Tag`                              | No changes                                                                                                                                                                                                          | `@carbon/react`        |
| `TagWall`                          | **Deprecated:** View replacement [here](#tagwall)                                                                                                                                                                   | —                      |
| `TagWallFilter`                    | **Under evaluation:** Evaluating wide-spread adoption for deprecation                                                                                                                                               | —                      |
| `Tearsheet`                        | **Deprecated:** View replacement [here](#tearsheet)                                                                                                                                                                 | —                      |
| `TearsheetSmall`                   | **Deprecated:** View replacement [here](#tearsheetsmall)                                                                                                                                                            | —                      |
| `TextArea`                         | The `className` prop is now applied to the outermost element of `TextArea`                                                                                                                                          | `@carbon/react`        |
| `TextInput`                        | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#textinput)                                                                                                                                                      | `@carbon/react`        |
| `Tile`                             | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tile)                                                                                                                                                           | `@carbon/react`        |
| `TileAboveTheFoldContent`          | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `TileBelowTheFoldContent`          | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `TileGroup`                        | Updated from a class to functional component                                                                                                                                                                        | `@carbon/react`        |
| `TimeIndicator`                    | **Removed** Too minimal to maintain                                                                                                                                                                                 | —                      |
| `TimePicker`                       | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#timepicker)                                                                                                                                                     | `@carbon/react`        |
| `TimePickerSelect`                 | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#timepickerselect)                                                                                                                                               | `@carbon/react`        |
| `ToastNotification`                | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#notifications)                                                                                                                                                  | `@carbon/react`        |
| `Toggle`                           | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#toggle)                                                                                                                                                         | `@carbon/react`        |
| `ToggleSkeleton`                   | **Removed**                                                                                                                                                                                                         | —                      |
| `ToggleSmall`                      | This component has been removed. Please use `<Toggle size="sm">` instead                                                                                                                                            | `@carbon/react`        |
| `ToggleSmallSkeleton`              | **Removed**                                                                                                                                                                                                         | —                      |
| `Toolbar`                          | **Deprecated:** View replacement [here](#toolbar)                                                                                                                                                                   | —                      |
| `ToolbarDivider`                   | **Removed**                                                                                                                                                                                                         | —                      |
| `ToolbarItem`                      | **Removed**                                                                                                                                                                                                         | —                      |
| `ToolbarOption`                    | **Removed**                                                                                                                                                                                                         | —                      |
| `ToolbarSearch`                    | **Removed**                                                                                                                                                                                                         | —                      |
| `ToolbarTitle`                     | **Removed**                                                                                                                                                                                                         | —                      |
| `Tooltip`                          | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tooltips)                                                                                                                                                       | `@carbon/react`        |
| `TooltipDefinition`                | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tooltips)                                                                                                                                                       | `@carbon/react`        |
| `TooltipIcon`                      | [Carbon v11 Migration guide](https://ibm.biz/BdvkKP#tooltips)                                                                                                                                                       | `@carbon/react`        |
| `TrendingCard`                     | **Deprecated:** View replacement [here](#trendingcard)                                                                                                                                                              | —                      |
| `TruncatedList`                    | View changes [here](#truncatedlist)                                                                                                                                                                                 | `@carbon/ibm-products` |
| `TypeLayout`                       | **Renamed** See DescriptionList                                                                                                                                                                                     | —                      |
| `UnorderedList`                    | No changes                                                                                                                                                                                                          | `@carbon/ibm-products` |
| `Wizard`                           | **Deprecated:** View replacement [here](#wizard)                                                                                                                                                                    | —                      |

## Migrated components

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

### Decorators

The Decorator has been broken out into 4 distinct "types":

- Decorator - no interactive features.
- DecoratorLink - renders an anchor tag.
- DecoratorSingleButton - renders a single button.
- DecoratorDualButton - the label and value are rendered as independent buttons.

#### All Decorator types

Unchanged props; names and functionality have not changed.

| Unchanged prop  |                                                                                                             |
| :-------------- | ----------------------------------------------------------------------------------------------------------- |
| className       | Optional class to be applied to the containing node.                                                        |
| score           | Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon. |
| scoreThresholds | Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon. |
| value \*        | The value of the data.                                                                                      |

Some props were renamed and/or repurposed to meet Products' `v2` specifications.

| Old prop          | New prop      |                                                                                                                     |
| :---------------- | :------------ | :------------------------------------------------------------------------------------------------------------------ |
| active            | theme         | Renamed, repurposed. Determines the theme of the component.                                                         |
| inline            | small         | Renamed. Styled smaller to better fit inline with text.                                                             |
| midLineTruncation | truncateValue | Renamed, repurposed. In addition to the existing `{ maxLength, front, back }`, added options `"start"` and `"end"`. |
| noIcon            | hideIcon      | Renamed. Do not show the icon, regardless of score.                                                                 |
| scoreDescription  | setLabelTitle | Repurposed. Optional callback function for building a more detailed descriptive text. Returns more information.     |
| title             | valueTitle    | Renamed. Will override the value's default `title` only.                                                            |
| type              | label         | Renamed. The label for the data.                                                                                    |

New props were added for specific functional requirements.

| New prop           |                                                                      |
| :----------------- | :------------------------------------------------------------------- |
| disabled           | Applies only to `DecoratorSingleButton` and `DecoratorDualButton`.   |
| href               | Applies only to `DecoratorLink`.                                     |
| onClick            | Optional callback function, applies only to `DecoratorSingleButton`. |
| onContextMenu      | Optional callback function, applies only to `DecoratorSingleButton`. |
| onClickValue       | Optional callback function, applies only to `DecoratorDualButton`.   |
| onContextMenu      | Optional callback function, applies only to `DecoratorDualButton`.   |
| onContextMenuLabel | Optional callback function, applies only to `DecoratorDualButton`.   |
| onContextMenuValue | Optional callback function, applies only to `DecoratorDualButton`.   |

Deprecated props were not migrated from the old component.

| Deprecated prop |                                                                                                                       |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------- |
| fitValue        | This is now the Decorator's default layout behavior.                                                                  |
| noBorderRadius  | The Carbon 11 design refresh no longer supports square corners.                                                       |
| _noType_        | _(NOTE: This feature was omitted in the original migration's design refresh, but is under review to be re-instated.)_ |

---

### Decorator

The default `Decorator` offers no interactive features.

| Prop            |
| :-------------- |
| className       |
| hideIcon        |
| label           |
| score           |
| scoreThresholds |
| setLabelTitle   |
| small           |
| theme           |
| truncateValue   |
| value \*        |
| valueTitle      |

---

#### DecoratorLink

The `DecoratorLink` renders an anchor tag.

| Prop            |
| :-------------- |
| className       |
| hideIcon        |
| href \*         |
| label           |
| onClick         |
| onContextMenu   |
| score           |
| scoreThresholds |
| setLabelTitle   |
| small           |
| theme           |
| truncateValue   |
| value \*        |
| valueTitle      |

---

#### DecoratorSingleButton

The `DecoratorSingleButton` renders a single button.

| Prop            |
| :-------------- |
| className       |
| disabled        |
| hideIcon        |
| label           |
| onClick         |
| onContextMenu   |
| score           |
| scoreThresholds |
| setLabelTitle   |
| small           |
| theme           |
| truncateValue   |
| value \*        |
| valueTitle      |

---

#### DecoratorDualButton

The `DecoratorDualButton` renders the label and value as independent buttons.

| Prop               |
| :----------------- |
| className          |
| disabled           |
| hideIcon           |
| label              |
| onClickLabel       |
| onClickValue       |
| onContextMenuLabel |
| onContextMenuValue |
| score              |
| scoreThresholds    |
| setLabelTitle      |
| small              |
| theme              |
| truncateValue      |
| value \*           |
| valueTitle         |

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

| Deprecated prop |                                        |
| :-------------- | :------------------------------------- |
| bordered        | **Removed**, use `border` boolean prop |

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

| Deprecated prop |                                                                            |
| :-------------- | :------------------------------------------------------------------------- |
| direction       | **Removed**. Component should manage both horizontal and vertical scrolls. |

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

| Deprecated prop        |             |
| :--------------------- | :---------- |
| currentIndex           | **Removed** |
| retry: {action, label} | **Removed** |

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

| Deprecated prop |             |
| :-------------- | ----------- |
| label           | **Removed** |

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

| Deprecated prop      |             |
| :------------------- | ----------- |
| getExpandButtonLabel | **Removed** |
| truncateThreshold    | **Removed** |
| scrollGradientColor  | **Removed** |

---

## Deprecated components and their replacement mappings

### Card

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### ComboButton

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### CardSkeleton

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

### ExternalLink

Props used in this component are identical to
[Carbon's Link component](https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon).

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

### NonEntitledSection

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

### Pill

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

### StatusIcon

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

### TagWall

[Info here]

| Old prop | New prop | Change |
| :------- | :------- | :----- |
| —        | —        | —      |

---

### TagWallFilter

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

## Carbon components

For any of the Carbon forwarded components from the Security package, your
import should be modified from:

`import { COMPONENT_NAME } from '@carbon/ibm-security';`<br/>to:<br/>`import { COMPONENT_NAME } from '@carbon/react';`
