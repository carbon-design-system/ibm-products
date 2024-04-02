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

The Security package forwarded all of Carbon as a convenience. Going forward
these components will only be available by using the Carbon package for those.

v2 will receive weekly releases occurring every Tuesday morning.

## Table of Contents

- [Migrated components](#migrated-components)
- [Carbon components](#carbon-components)

| Component                          | Changes                                                                                                           | Replacement package    | LOE    |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :--------------------- | ------ |
| `Accordion`                        | The `size` prop has been updated and no longer includes `xl`                                                      | `@carbon/react`        | Low    |
| `AccordionItem`                    | [Carbon v11 Migration guide][100]                                                                                 | `@carbon/react`        | Low    |
| `AccordionSkeleton`                | The deprecated prop `uid` is no longer needed and has been removed                                                | `@carbon/react`        | Low    |
| `ActionableNotification`           | [Carbon v11 Migration guide][101]                                                                                 | `@carbon/react`        | Low    |
| `BigNumbers` (ICA)                 | View changes [here](#bignumbers)                                                                                  | `@carbon/ibm-products` | Low    |
| `Breadcrumb`                       | No changes                                                                                                        | `@carbon/react`        | Low    |
| `BreadcrumbItem`                   | No changes                                                                                                        | `@carbon/react`        | Low    |
| `BreadcrumbSkeleton`               | No changes                                                                                                        | `@carbon/react`        | Low    |
| `Button`                           | [Carbon v11 Migration guide][102]                                                                                 | `@carbon/react`        | Low    |
| `ButtonSkeleton`                   | [Carbon v11 Migration guide][103]                                                                                 | `@carbon/react`        | Low    |
| `Card`                             | **Deprecated** [View replacement][1]                                                                              | `@carbon/ibm-products` | Medium |
| `CardSkeleton`                     | **Removed**                                                                                                       | —                      | High   |
| `Checkbox`                         | [Carbon v11 Migration guide][104]                                                                                 | `@carbon/react`        | Medium |
| `ClickableTile`                    | [Carbon v11 Migration guide][105]                                                                                 | `@carbon/react`        | Low    |
| `CodeSnippet`                      | No changes                                                                                                        | `@carbon/react`        | Low    |
| `Column`                           | [Carbon v11 Migration guide][106]                                                                                 | `@carbon/react`        | Medium |
| `ComboBox`                         | The `className` prop is now applied to the outermost element of `ComboBox`                                        | `@carbon/react`        | Low    |
| `ComboButton`                      | Deprecated - Promoted to Carbon v11. [View component][107]                                                        | `@carbon/react`        | High   |
| `ComposedModal`                    | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `ContentSwitcher`                  | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `ControlledPasswordInput`          | The `size` prop has been updated to match `PasswordInput`                                                         | `@carbon/react`        | Low    |
| `CopyButton`                       | No changes                                                                                                        | `@carbon/react`        | Low    |
| `DataDecorator`                    | **Deprecated:** [View replacement][2]                                                                             | `@carbon/ibm-products` | Medium |
| `DataTable`                        | No code changes. Scss changes can be found [here][108]                                                            | `@carbon/react`        | Low    |
| `DataTablePagination`              | **Deprecated:** [View replacement][3]                                                                             | `@carbon/react`        | High   |
| `DatePicker`                       | [Carbon v11 Migration guide][109]                                                                                 | `@carbon/react`        | Low    |
| `DatePickerInput`                  | [Carbon v11 Migration guide][110]                                                                                 | `@carbon/react`        | Low    |
| `Decorator`                        | View changes [here](#decorator)                                                                                   | `@carbon/ibm-products` | Medium |
| `DecoratorDualButton` **new**      | View changes [here](#decoratordualbutton)                                                                         | `@carbon/ibm-products` | Medium |
| `DecoratorLink` **new**            | View changes [here](#decoratorlink)                                                                               | `@carbon/ibm-products` | Medium |
| `DecoratorSingleButton` **new**    | View changes [here](#decoratorsinglebutton)                                                                       | `@carbon/ibm-products` | Medium |
| `DescriptionList` (TypeLayout)     | View changes [here](#descriptionlist)                                                                             | `@carbon/ibm-products` | Medium |
| `DelimitedList`                    | View changes [here](#delimitedlist)                                                                               | `@carbon/ibm-products` | Low    |
| `Dropdown`                         | [Carbon v11 Migration guide][111]                                                                                 | `@carbon/react`        | Low    |
| `DropdownSkeleton`                 | The deprecated prop `inline` has been removed                                                                     | `@carbon/react`        | Low    |
| `ErrorPage`                        | **Deprecated:** [View replacement][4]                                                                             | `@carbon/ibm-products` | High   |
| `ExpandableTile`                   | [Carbon v11 Migration guide][112]                                                                                 | `@carbon/react`        | Low    |
| `ExternalLink`                     | **Deprecated** [View replacement][5]                                                                              | `@carbon/react`        | Medium |
| `FileUploader`                     | [Carbon v11 Migration guide][113]                                                                                 | `@carbon/react`        | Low    |
| `FileUploaderButton`               | [Carbon v11 Migration guide][114]                                                                                 | `@carbon/react`        | Low    |
| `FileUploaderItem`                 | The size prop has been updated to: `PropTypes.oneOf(['sm', 'md', 'lg'])`                                          | `@carbon/react`        | Low    |
| `FilterPanel`                      | View changes [here](#filterpanel)                                                                                 | `@carbon/ibm-products` | Low    |
| `FilterPanelAccordion`             | View changes [here](#filterpanelaccordion)                                                                        | `@carbon/ibm-products` | Low    |
| `FilterPanelAccordionItem`         | View changes [here](#filterpanelaccordionitem)                                                                    | `@carbon/ibm-products` | Low    |
| `FilterPanelCheckbox`              | View changes [here](#filterpanelcheckbox)                                                                         | `@carbon/ibm-products` | Low    |
| `FilterPanelCheckboxWithOverflow`  | View changes [here](#filterpanelcheckboxwithoverflow)                                                             | `@carbon/ibm-products` | Low    |
| `FilterPanelGroup`                 | View changes [here](#filterpanelgroup)                                                                            | `@carbon/ibm-products` | Low    |
| `FilterPanelLabel`                 | View changes [here](#filterpanellabel)                                                                            | `@carbon/ibm-products` | Low    |
| `FilterPanelSearch`                | View changes [here](#filterpanelsearch)                                                                           | `@carbon/ibm-products` | Low    |
| `FilterableMultiSelect`            | [Carbon v11 Migration guide][115]                                                                                 | `@carbon/react`        | Low    |
| `FluidForm`                        | Vertical margin for form items and fieldsets is no longer included by default, use `<Stack>` for vertical spacing | `@carbon/react`        | Low    |
| `Form`                             | Vertical margin for form items and fieldsets is no longer included by default, use `<Stack>` for vertical spacing | `@carbon/react`        | Low    |
| `FormGroup`                        | [Carbon v11 Migration guide][116]                                                                                 | `@carbon/react`        | Low    |
| `FormLabel`                        | The FormLabel component no longer applies margin                                                                  | `@carbon/react`        | Low    |
| `GettingStartedLayout`             | Layout modules are under review                                                                                   | —                      | Low    |
| `Grid`                             | [Carbon v11 Migration guide][106]                                                                                 | `@carbon/react`        | Medium |
| `Header`                           | **Deprecated:** [View replacement][6]                                                                             | `@carbon/ibm-products` | Medium |
| `HeaderMenu`                       | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `HeaderNavigation`                 | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `ICA`                              | **Renamed** - See [Big Numbers](#bignumbers)                                                                      | `@carbon/ibm-products` | Low    |
| `Icon`                             | **Removed** [View replacement][16]                                                                                | `@carbon/react`        | Medium |
| `IconButton`                       | **Deprecated:** [View replacement][7]                                                                             | `@carbon/react`        | High   |
| `IconButtonBar`                    | **Deprecated:** [View replacement][8]                                                                             | `@carbon/ibm-products` | High   |
| `InlineLoading`                    | The deprecated success prop has been deprecated. Please use status="finished" instead                             | `@carbon/react`        | Low    |
| `InlineNotification`               | [Carbon v11 Migration guide][117]                                                                                 | `@carbon/react`        | Medium |
| `InteractiveTag`                   | **Removed**                                                                                                       | —                      | High   |
| `LayoutModules`                    | Layout modules are under review:                                                                                  | —                      | High   |
|                                    | `ActionBarModule`, `ActionBarModuleItems`, `ButtonClusterModule`, `CardAreaModule`,                               | —                      | High   |
|                                    | `DescriptionListModule`, `DescriptionModule`, `ICAModule`, `ListItemModule`, `TitleBarModule`                     | —                      | High   |
| `Link`                             | No changes                                                                                                        | `@carbon/react`        | Low    |
| `Loading`                          | No changes                                                                                                        | `@carbon/react`        | Low    |
| `Modal`                            | [Carbon v11 Migration guide][118]                                                                                 | `@carbon/react`        | Low    |
| `ModalFooter`                      | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `ModalHeader`                      | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `ModalWrapper`                     | **Removed**                                                                                                       | —                      | High   |
| `MultiSelect`                      | The `className` prop is now applied to the outermost element of `MultiSelect`                                     | `@carbon/react`        | Low    |
| `Nav`                              | View changes [here](#nav)                                                                                         | `@carbon/ibm-products` | Low    |
| `NavList`                          | View changes [here](#navlist)                                                                                     | `@carbon/ibm-products` | Low    |
| `NavItem`                          | View changes [here](#navitem)                                                                                     | `@carbon/ibm-products` | Low    |
| `NonEntitledSection`               | **Deprecated:** [View replacement][9]                                                                             | `@carbon/ibm-products` | High   |
| `NotificationActionButton`         | [Carbon v11 Migration guide][117]                                                                                 | `@carbon/react`        | Medium |
| `NotificationButton`               | [Carbon v11 Migration guide][117]                                                                                 | `@carbon/react`        | Medium |
| `NotificationTextDetails`          | [Carbon v11 Migration guide][117]                                                                                 | `@carbon/react`        | Medium |
| `NumberInput`                      | [Carbon v11 Migration guide][119]                                                                                 | `@carbon/react`        | Medium |
| `OrderedList`                      | No changes                                                                                                        | `@carbon/react`        | Low    |
| `OverflowMenu`                     | [Carbon v11 Migration guide][120]                                                                                 | `@carbon/react`        | Low    |
| `OverflowMenuItem`                 | [Carbon v11 Migration guide][121]                                                                                 | `@carbon/react`        | Low    |
| `Pagination`                       | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `Panel`                            | **Deprecated:** [View replacement][10]                                                                            | `@carbon/ibm-products` | Medium |
| `PanelV2`                          | **Deprecated:** [View replacement][10]                                                                            | `@carbon/ibm-products` | Medium |
| `PasswordInput`                    | The `size` prop has been updated to: `PropTypes.oneOf(['sm', 'md', 'lg'])`                                        | `@carbon/react`        | Low    |
| `Pill`                             | **Deprecated:** [View replacement][2]                                                                             | `@carbon/ibm-products` | Medium |
| `Portal`                           | **Removed** use React's Portal                                                                                    | —                      | High   |
| `ProfileImage`                     | **Deprecated:** [View replacement][11]                                                                            | `@carbon/ibm-products` | Medium |
| `ProgressIndicator`                | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `RadioButton`                      | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `RadioButtonGroup`                 | [Carbon v11 Migration guide][122]                                                                                 | `@carbon/react`        | Low    |
| `RadioTile`                        | [Carbon v11 Migration guide][123]                                                                                 | `@carbon/react`        | Low    |
| `Row`                              | [Carbon v11 Migration guide][106]                                                                                 | `@carbon/react`        | Medium |
| `ScrollGradient`                   | View changes [here](#scrollgradient)                                                                              | `@carbon/ibm-products` | Low    |
| `Search`                           | [Carbon v11 Migration guide][124]                                                                                 | `@carbon/react`        | Low    |
| `SearchBar`                        | View changes [here](#searchbar)                                                                                   | `@carbon/ibm-products` | Medium |
| `SearchFilterButton`               | **Removed**                                                                                                       | —                      | High   |
| `SearchLayoutButton`               | **Removed**                                                                                                       | —                      | High   |
| `Select`                           | [Carbon v11 Migration guide][125]                                                                                 | `@carbon/react`        | Low    |
| `SelectableTile`                   | [Carbon v11 Migration guide][126]                                                                                 | `@carbon/react`        | Low    |
| `Shell`                            | **Deprecated:** [View replacement][6]                                                                             | `@carbon/react`        | Medium |
| `SideNavMenu`                      | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `SkeletonIcon`                     | No changes                                                                                                        | `@carbon/react`        | Low    |
| `SkeletonPlaceholder`              | No changes                                                                                                        | `@carbon/react`        | Low    |
| `SkeletonText`                     | No changes                                                                                                        | `@carbon/react`        | Low    |
| `Slider`                           | [Carbon v11 Migration guide][127]                                                                                 | `@carbon/react`        | Low    |
| `StackedNotification`              | **Removed** Proposing as a variant to Carbon notifications                                                        | —                      | High   |
| `StatusIcon`                       | **Deprecated:** [View replacement][12]                                                                            | `@carbon/ibm-products` | Medium |
| `StatusIndicator`                  | View changes [here](#statusindicator)                                                                             | `@carbon/ibm-products` | Medium |
| `StatusIndicatorStep` (StatusStep) | View changes [here](#statusindicatorstep)                                                                         | `@carbon/ibm-products` | Low    |
| `StatusStep`                       | **Renamed** See [StatusIndicatorStep](#statusindicatorstep)                                                       | —                      | —      |
| `StringFormatter`                  | View changes [here](#stringformatter)                                                                             | `@carbon/ibm-products` | Medium |
| `StructuredListBody`               | Vertical margin for form items and fieldsets is no longer included by default, use `<Stack>` for vertical spacing | `@carbon/react`        | Low    |
| `StructuredListCell`               | No changes                                                                                                        | `@carbon/react`        | Low    |
| `StructuredListHead`               | No changes                                                                                                        | `@carbon/react`        | Low    |
| `StructuredListInput`              | [Carbon v11 Migration guide][128]                                                                                 | `@carbon/react`        | Medium |
| `StructuredListRow`                | The `label` prop is no longer needed and has been deprecated                                                      | `@carbon/react`        | Low    |
| `StructuredListSkeleton`           | No changes                                                                                                        | `@carbon/react`        | Low    |
| `StructuredListWrapper`            | The deprecated prop `border` has been removed                                                                     | `@carbon/react`        | Low    |
| `SummaryCard`                      | **Deprecated:** [View replacement][1]                                                                             | `@carbon/ibm-products` | Medium |
| `Table`                            | [Carbon v11 Migration guide][129]                                                                                 | `@carbon/react`        | Medium |
| `TableToolbar`                     | The `size` prop has been updated to: `PropTypes.oneOf(['sm', 'lg'])`                                              | `@carbon/react`        | Low    |
| `TableToolbarSearch`               | [Carbon v11 Migration guide][130]                                                                                 | `@carbon/react`        | Low    |
| `Tabs`                             | [Carbon v11 Migration guide][131]                                                                                 | `@carbon/react`        | Medium |
| `Tab`                              | [Carbon v11 Migration guide][131]                                                                                 | `@carbon/react`        | Medium |
| `TabContent`                       | [Carbon v11 Migration guide][131]                                                                                 | `@carbon/react`        | Medium |
| `TabsSkeleton`                     | [Carbon v11 Migration guide][131]                                                                                 | `@carbon/react`        | Medium |
| `Tag`                              | No changes                                                                                                        | `@carbon/react`        | Low    |
| `TagWall`                          | **Deprecated:** [View replacement][13]                                                                            | `@carbon/ibm-products` | Medium |
| `TagWallFilter`                    | **Under evaluation:** Evaluating wide-spread adoption for deprecation                                             | —                      | —      |
| `Tearsheet`                        | **Deprecated:** [View replacement][14]                                                                            | `@carbon/ibm-products` | High   |
| `TearsheetSmall`                   | **Deprecated:** [View replacement][15]                                                                            | `@carbon/ibm-products` | High   |
| `TextArea`                         | The `className` prop is now applied to the outermost element of `TextArea`                                        | `@carbon/react`        | Low    |
| `TextInput`                        | [Carbon v11 Migration guide][132]                                                                                 | `@carbon/react`        | Low    |
| `Tile`                             | [Carbon v11 Migration guide][133]                                                                                 | `@carbon/react`        | Low    |
| `TileAboveTheFoldContent`          | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `TileBelowTheFoldContent`          | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `TileGroup`                        | Updated from a class to functional component                                                                      | `@carbon/react`        | Low    |
| `TimeIndicator`                    | **Removed** Too minimal to maintain                                                                               | —                      | Medium |
| `TimePicker`                       | [Carbon v11 Migration guide][134]                                                                                 | `@carbon/react`        | Low    |
| `TimePickerSelect`                 | [Carbon v11 Migration guide][135]                                                                                 | `@carbon/react`        | Low    |
| `ToastNotification`                | [Carbon v11 Migration guide][117]                                                                                 | `@carbon/react`        | Medium |
| `Toggle`                           | [Carbon v11 Migration guide][136]                                                                                 | `@carbon/react`        | Low    |
| `ToggleSkeleton`                   | **Removed**                                                                                                       | —                      | —      |
| `ToggleSmall`                      | **Removed** Please use `<Toggle size="sm">` instead. [Carbon v11 Migration guide][136]                            | `@carbon/react`        | Low    |
| `ToggleSmallSkeleton`              | **Removed**                                                                                                       | —                      | Medium |
| `Toolbar`                          | **Deprecated:** [View replacement][6]                                                                             | `@carbon/react`        | Medium |
| `ToolbarDivider`                   | **Removed**                                                                                                       | —                      | High   |
| `ToolbarItem`                      | **Removed**                                                                                                       | —                      | High   |
| `ToolbarOption`                    | **Removed**                                                                                                       | —                      | High   |
| `ToolbarSearch`                    | **Removed**                                                                                                       | —                      | High   |
| `ToolbarTitle`                     | **Removed**                                                                                                       | —                      | High   |
| `Tooltip`                          | [Carbon v11 Migration guide][137]                                                                                 | `@carbon/react`        | Medium |
| `TooltipDefinition`                | [Carbon v11 Migration guide][137]                                                                                 | `@carbon/react`        | Medium |
| `TooltipIcon`                      | [Carbon v11 Migration guide][137]                                                                                 | `@carbon/react`        | Medium |
| `TrendingCard`                     | **Deprecated:** [View replacement][1]                                                                             | `@carbon/ibm-products` | Medium |
| `TruncatedList`                    | View changes [here](#truncatedlist)                                                                               | `@carbon/ibm-products` | Medium |
| `TypeLayout`                       | **Renamed** See [DescriptionList](#descriptionlist)                                                               | —                      | —      |
| `UnorderedList`                    | No changes                                                                                                        | `@carbon/ibm-products` | Low    |
| `Wizard`                           | **Deprecated:** [View replacement][14]                                                                            | `@carbon/ibm-products` | Medium |

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

| Old prop   | New prop  | Change               |
| :--------- | :-------- | :------------------- |
| children   | children  | No change            |
| className  | className | No change            |
| title      | title     | No change            |
| filterData | —         | Deprecated in **v1** |

### FilterPanelAccordion

| Old prop  | New prop       | Change                                                       |
| :-------- | :------------- | :----------------------------------------------------------- |
| —         | accordionProps | New object {} specific to Carbon's Accordion component props |
| children  | children       | No change                                                    |
| className | className      | No change                                                    |
| count     | count          | No change                                                    |
| heading   | labelText      | Renamed                                                      |
| title     | title          | No change                                                    |

### FilterPanelAccordionItem

| Old prop            | New prop           | Change                                                           |
| :------------------ | :----------------- | :--------------------------------------------------------------- |
| —                   | accordionItemProps | New object {} specific to Carbon's AccordionItem component props |
| children            | children           | No change                                                        |
| className           | className          | No change                                                        |
| count               | count              | No change                                                        |
| heading             | labelText          | Renamed                                                          |
| title               | title              | No change                                                        |
| —                   | truncatedListProps | New object {} specific to TruncatedList component props          |
| collapseLabel       | —                  | Removed. Use truncatedListProps{collapsedItemsLimit} instead     |
| expandLabel         | —                  | Removed. Use truncatedListProps{expandedItemsLimit} instead      |
| scrollGradientColor | —                  | Scroll gradients are deprecated in Carbon 11.                    |

### FilterPanelCheckbox

| Old prop   | New prop  | Change                           |
| :--------- | :-------- | :------------------------------- |
| className  | className | No change                        |
| count      | count     | No change                        |
| —          | id        | New, required by Carbon Checkbox |
| —          | labelText | New, required by Carbon Checkbox |
| title      | title     | No change                        |
| countLabel | —         | Removed. Replaced by labelText   |

### FilterPanelCheckboxWithOverflow

| Old prop              | New prop          | Change                                                       |
| :-------------------- | :---------------- | :----------------------------------------------------------- |
| children              | children          | No change                                                    |
| className             | className         | No change                                                    |
| (count)               | count             | Made explicit\*                                              |
| (id)                  | id                | Made explicit\*                                              |
| (labelText)           | labelText         | Made explicit\*                                              |
| (onChange)            | onChange          | Made explicit\*                                              |
| —                     | overflowMenuProps | New object {} specific to OverflowMenu's component props\*\* |
| (title)               | title             | Made explicit\*                                              |
| open                  | —                 | Removed. Use overflowMenuProps{open} instead                 |
| overflowMenuAriaLabel | —                 | Removed. Use overflowMenuProps{['aria-label']} instead       |
| selectorPrimaryFocus  | —                 | Removed. Use overflowMenuProps{selectorPrimaryFocus} instead |

\* These props were "assumed" in the v1 component and have been explicitly
declared in v2.

\*\* The same props in the default FilterPanelCheckbox are duplicated in
FilterPanelCheckboxWithOverflow. To avoid duplicate prop names between two or
more internal components, only key/value pairs defined in overflowMenuProps will
be assigned specifically to the internal OverflowMenu component.

### FilterPanelGroup

| Old prop       | New prop  | Change    |
| :------------- | :-------- | :-------- |
| children       | children  | No change |
| className      | className | No change |
| count          | count     | No change |
| heading        | labelText | Renamed   |
| title          | title     | No change |
| countLabel     | —         | Removed   |
| titleClassName | —         | Removed   |

### FilterPanelLabel

| Old prop       | New prop  | Change                                                                                             |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------- |
| className      | className | No change                                                                                          |
| count          | count     | No change                                                                                          |
| —              | labelText | New                                                                                                |
| title          | title     | No change                                                                                          |
| children       | —         | Replaced by labelText                                                                              |
| countClassName | —         | Removed. Developer can use top-level className and inheritance to target specific elements via CSS |
| countLabel     | —         | Removed. Replaced by labelText                                                                     |

### FilterPanelSearch

| Old prop  | New prop    | Change                                                    |
| :-------- | :---------- | :-------------------------------------------------------- |
| children  | children    | No change                                                 |
| className | className   | No change                                                 |
| —         | searchProps | New object {} specific to Carbon's Search component props |
| labelText | —           | Removed. Use searchProps{labelText} instead               |

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

| Deprecated prop  |     |
| :--------------- | :-- |
| handleItemSelect | —   |

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

## Carbon components

For any of the Carbon forwarded components from the Security package, your
import should be modified from:

`import { COMPONENT_NAME } from '@carbon/ibm-security';`<br/>to:<br/>`import { COMPONENT_NAME } from '@carbon/react';`

<!-- URL Reference links -->

<!-- DEPRECATED LINKS (1-99) -->

[1]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-cards-productivecard--docs
  'Productive Card (@carbon/ibm-products)'
[2]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-decorators-decorator--docs
  'Decorator (@carbon/ibm-products)'
[3]:
  https://react.carbondesignsystem.com/?path=/story/components-pagination--multiple-pagination-components
  'Pagination (@carbon/react)'
[4]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-patterns-http-errors-httperror403--docs
  'HTTP Errors (@carbon/ibm-products)'
[5]:
  https://react.carbondesignsystem.com/?path=/docs/components-link--overview
  'Link (@carbon/react)'
[6]:
  https://react.carbondesignsystem.com/?path=/docs/components-ui-shell-header--overview
  'UI Shell - Header (@carbon/react)'
[7]:
  https://react.carbondesignsystem.com/?path=/story/components-button--icon-button
  'Button - Icon Button (@carbon/react)'
[8]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-actionbar--docs
  'ActionBar (@carbon/ibm-products)'
[9]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-patterns-full-page-error-fullpageerror--docs
  'FullPageError (@carbon/ibm-products)'
[10]:
  https://carbon-for-ibm-products.netlify.app/?path=/story/ibm-products-components-side-panel-sidepanel--slide-over
  'SidePanel - Slide over (@carbon/ibm-products)'
[11]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-user-avatar-useravatar--docs
  'User avatar (@carbon/ibm-products)'
[12]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-patterns-status-icons-statusicon--docs
  'StatusIcon (@carbon/ibm-products)'
[13]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-tag-set-tagset--docs
  'TagSet (@carbon/ibm-products)'
[14]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-tearsheet--docs
  'Tearsheet (@carbon/ibm-products)'
[15]:
  https://carbon-for-ibm-products.netlify.app/?path=/docs/ibm-products-components-tearsheet-tearsheetnarrow--docs
  'Tearsheet narrow (@carbon/ibm-products)'
[16]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#changes-to-size
  'Icon usage (@carbon/react)'

<!-- CARBON 10 -> CARBON 11 MIGRATION GUIDE LINKS (100-199) -->

[100]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#accordionitem
  'AccordionItem'
[101]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#notifications
  'ActionableNotification'
[102]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#button
  'Button'
[103]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#buttonskeleton
  'ButtonSkeleton'
[104]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#checkbox
  'Checkbox'
[105]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#clickabletile
  'ClickableTile'
[106]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#grid
  'Grid'
[107]:
  https://react.carbondesignsystem.com/?path=/docs/components-combobutton--overview
  'ComboButton'
[108]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#scsscomponentsdata-table_data-tablescss
  'SCSS changes'
[109]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#datepicker
  'DatePicker'
[110]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#datepickerinput
  'DatePickerInput'
[111]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#dropdown
  'Dropdown'
[112]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#expandabletile
  'ExpandableTile'
[113]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#fileuploader
  'FileUploader'
[114]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#fileuploaderbutton
  'FileUploaderButton'
[115]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#filterablemultiselect
  'FilterableMultiSelect'
[116]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#formgroup
  'FormGroup'
[117]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#notifications
  'Notifications'
[118]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#modal
  'Modal'
[119]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#numberinput
  'NumberInput'
[120]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#overflowmenu
  'OverflowMenu'
[121]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#overflowmenuitem
  'OverflowMenuItem'
[122]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#radiobuttongroup
  'RadioButtonGroup'
[123]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#radiotile
  'RadioTile'
[124]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#search
  'Search'
[125]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#select
  'Select'
[126]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#selectabletile
  'SelectableTile'
[127]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#slider
  'Slider'
[128]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#structuredlistinput
  'StructuredListInput'
[129]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#table
  'Table'
[130]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#tabletoolbarsearch
  'TableToolbarSearch'
[131]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#tabs
  'Tabs'
[132]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#textinput
  'TextInput'
[133]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#tile
  'Tile'
[134]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#timepicker
  'TimePicker'
[135]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#timepickerselect
  'TimePickerSelect'
[136]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#toggle
  'Toggle'
[137]:
  https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md#tooltips
  'Tooltips'

<!-- /URL Reference links -->
