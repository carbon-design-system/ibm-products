var F=Object.defineProperty;var l=(n,e)=>F(n,"name",{value:e,configurable:!0});import{u as E,j as t,r as p,R as o,h as P,B as W}from"./iframe-D_TgCArL.js";import{D as B}from"./Dropdown-CiTxYOtd.js";import{T as k}from"./Tag-DwG5QxKI.js";import{T as z}from"./Toggle-Cac046iG.js";import{A as s}from"./AddSelect-Bt8B29QG.js";import{b as T}from"./bucket-14-QfpeKxgD.js";import{e as H}from"./bucket-6-CXN0yrIs.js";import{F as M}from"./bucket-7-Cu83Tgtz.js";import{N as q}from"./NoDataEmptyState-DPGMZpNn.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-CsURg4Bb.js";import"./Text-dRt3vkhG.js";import"./bucket-20-I6CTYn6M.js";import"./index-rkIh3fWn.js";import"./index-ByjH8V_s.js";import"./bucket-19-DTdadaEd.js";import"./downshift.esm-CORxR4IN.js";import"./FormContext-BSRgfZem.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./DefinitionTooltip-CCUESeVH.js";import"./useControllableState-BjOxIYPS.js";import"./BreadcrumbItem-luJUEVBX.js";import"./index-BndSx2mu.js";import"./Link-DfZ7aJKy.js";import"./bucket-13-B66NcEIi.js";import"./Search-CFE_Nkyq.js";import"./bucket-16-BxRNo6ep.js";import"./Checkbox-BhroKPX1.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BQ30rKMg.js";import"./AccordionItem-LnLX38WL.js";import"./bucket-17-DbzW9rmA.js";import"./devtools-BGZqfd5Y.js";import"./EmptyState-9MXZSilL.js";import"./EmptyStateV2.deprecated-fMBzFI3J.js";import"./index-DSCJKvlP.js";import"./NoDataIllustration-6Xe6-gle.js";import"./useId-CGfxEokt.js";import"./uuidv4-Fbcg8Vng.js";const U=".add-select-next-stories__viewport{inline-size:50%}.add-select-next-stories-container{display:flex;flex-direction:column;padding:5rem 4rem;gap:2rem;inline-size:600px;max-inline-size:600px}.add-select-next-stories-container--single{inline-size:26rem}.add-select-next-stories-column-container{padding:1rem;border:1px dashed var(--cds-border-subtle);background:var(--cds-layer);inline-size:360px}.add-select-next-stories-summary-container{overflow:auto;padding:0 1rem;border:1px dashed var(--cds-border-subtle);background:var(--cds-layer);block-size:500px;inline-size:16rem}.add-select-next-stories-variant-container{display:flex;flex-direction:column;gap:.5rem}.add-select-next-stories-variant-container h4{font-size:var(--cds-label-02-font-size, .875rem);font-weight:var(--cds-label-02-font-weight, 400);line-height:var(--cds-label-02-line-height, 1.28572);letter-spacing:var(--cds-label-02-letter-spacing, .16px);margin:0;color:var(--cds-text-secondary)}";function R(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...E(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"addselect",children:"AddSelect"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-hierarchy",children:"Component Hierarchy"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#subcomponents--usage",children:"Subcomponents & Usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#data-utilities",children:"Data Utilities"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#usage-patterns",children:"Usage Patterns"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:`AddSelect is a composable component system for building flexible add/select
interfaces. It provides a component-based approach where you compose the UI
using smaller, focused components instead of a monolithic component. This design
enables maximum flexibility while maintaining consistency and accessibility.`}),`
`,t.jsxs(e.p,{children:[`The implementation uses the compound component pattern in React, with distinct
and well-defined sections. You need to import the main
`,t.jsx(e.a,{href:"./AddSelect.tsx",children:t.jsx(e.code,{children:"AddSelect"})}),` component, and all other subcomponents are
available as static properties.`]}),`
`,t.jsx(e.h3,{id:"key-features",children:"Key Features"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Composable Architecture"}),`: Build complex selection interfaces by combining
simple, focused components`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Multi-select & Single-select"}),`: Support for both checkbox-based
multi-selection and radio button-based single selection`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Hierarchical Navigation"}),`: Built-in support for navigating through nested
item structures`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Search & Filter"}),": Global and column-level search with custom filter actions"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Selection Summary"}),`: Display and manage selected items with optional
accordion view`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Item Details Panel"}),": Show detailed information about individual items"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Keyboard Navigation"}),": Full keyboard support for accessibility"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Flexible Layouts"}),": Vertical and horizontal layouts for different use cases"]}),`
`]}),`
`,t.jsx(e.h2,{id:"component-hierarchy",children:"Component Hierarchy"}),`
`,t.jsx(e.p,{children:"The AddSelect component system follows a clear hierarchical structure:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{children:`AddSelect (Root Container)
├── AddSelect.Body (Main Content Area)
│   ├── Header Section (Search, Breadcrumbs, Item Count)
│   └── AddSelect.Content (Items Container)
│       ├── AddSelect.Column (Optional Column Wrapper)
│       │   ├── Column Header (Search, Title, Select All)
│       │   └── AddSelect.Row (Individual Items)
│       └── AddSelect.Row (Direct Items, no column)
│
├── AddSelect.SelectionSummary (Selected Items Panel)
│   └── AddSelect.SelectionSummaryItem (Individual Selected Item)
│
└── AddSelect.ItemPanel (Item Details Panel)
`})}),`
`,t.jsx(e.h2,{id:"subcomponents--usage",children:"Subcomponents & Usage"}),`
`,t.jsx(e.h3,{id:"1-addselect-root",children:"1. AddSelect (Root)"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: The main container component that provides context for selection
state and callbacks. All child components access selection state through this
context.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),`: Always required as the root wrapper for any AddSelect
interface.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Root container that manages selection state"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"2-addselectbody",children:"2. AddSelect.Body"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Contains the header section (search, breadcrumbs, item count) and
the main content area. Handles global search and navigation.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),": Required for displaying the main item selection interface."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Contains search, filters, and item list"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"3-addselectcontent",children:"3. AddSelect.Content"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Container for items with built-in keyboard navigation support.
Manages focus and provides grid-based navigation.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),`: Required as a wrapper for AddSelect.Row or AddSelect.Column
components.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Handles keyboard navigation and layout"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"4-addselectcolumn-optional",children:"4. AddSelect.Column (Optional)"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Optional column wrapper that provides column-specific features like
column title, column-level search, and "Select All" functionality.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),":"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"When organizing items into distinct columns"}),`
`,t.jsx(e.li,{children:'When you need column-level search or "Select All"'}),`
`,t.jsx(e.li,{children:"For hierarchical navigation with multiple levels"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Groups items with column-specific features"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"5-addselectrow",children:"5. AddSelect.Row"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Individual selectable item with support for checkboxes
(multi-select) or radio buttons (single-select).`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),": For every selectable item in your interface."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Individual selectable items"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"6-addselectselectionsummary-optional",children:"6. AddSelect.SelectionSummary (Optional)"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Displays a list of selected items with optional count badge and
edit functionality.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),":"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"When you need to show selected items separately"}),`
`,t.jsx(e.li,{children:"For review/confirmation workflows"}),`
`,t.jsx(e.li,{children:"When building multi-step selection processes"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Shows selected items"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"7-addselectselectionsummaryitem-optional",children:"7. AddSelect.SelectionSummaryItem (Optional)"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Individual item display within the selection summary, with optional
accordion view and remove functionality.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),":"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"For custom rendering of selected items"}),`
`,t.jsx(e.li,{children:"When you need accordion-style item details"}),`
`,t.jsx(e.li,{children:"When items need individual remove buttons"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Individual selected item display"]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"8-addselectitempanel-optional",children:"8. AddSelect.ItemPanel (Optional)"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Purpose"}),`: Side panel that displays detailed information about a specific
item.`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"When to use"}),":"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"When items have additional details to display"}),`
`,t.jsx(e.li,{children:"For preview/inspection workflows"}),`
`,t.jsx(e.li,{children:"When users need more context before selecting"}),`
`]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Component flow position"}),": Detailed item information"]}),`
`,t.jsx(e.h2,{id:"data-utilities",children:"Data Utilities"}),`
`,t.jsxs(e.p,{children:["The AddSelect component system includes the ",t.jsx(e.strong,{children:t.jsx(e.code,{children:"AddSelectData"})}),` utility class
for managing hierarchical selection data. This framework-agnostic utility
encapsulates data logic separate from UI components, enabling efficient data
operations and state management.`]}),`
`,t.jsx(e.h3,{id:"addselectdata-class",children:"AddSelectData Class"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"AddSelectData"}),` class is a lightweight utility for managing hierarchical
data structures with built-in support for:`]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Selection Management"}),": Track selected items with O(1) lookup performance"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Hierarchical Navigation"}),": Traverse parent-child relationships efficiently"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Search & Filter"}),": Built-in search with customizable options"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Sorting"}),": Sort items at any level with optional recursion"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Status Tracking"}),": Manage checked/unchecked/indeterminate states"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Performance Optimized"}),": Uses Maps and Sets for efficient operations"]}),`
`]}),`
`,t.jsx(e.h3,{id:"import",children:"Import"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { AddSelectData, AddSelectItem } from '@carbon/ibm-products';
`})}),`
`,t.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { AddSelectData } from '@carbon/ibm-products';

// Initialize with hierarchical data
const dataManager = new AddSelectData();
dataManager.setItems(hierarchicalItems);

// Select items
dataManager.setSelectedItems(['item-1', 'item-2']);

// Get selected items
const selected = dataManager.getSelectedItems();

// Search items
const results = dataManager.search('query', {
  caseSensitive: false,
  searchFields: ['title', 'value'],
});

// Navigate hierarchy
const children = dataManager.getItemChildren('parent-id');
const parent = dataManager.getItemParent('child-id');
const ancestors = dataManager.getItemParents('child-id');

// Check selection status
if (dataManager.isSelected('item-1')) {
  console.log('Item is selected');
}

// Sort items
dataManager.sort((a, b) => a.title.localeCompare(b.title), true);
`})}),`
`,t.jsx(e.h3,{id:"key-features-1",children:"Key Features"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Framework Agnostic"}),`: Works with React, Web Components, or vanilla
JavaScript`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Type Safe"}),": Full TypeScript support with comprehensive type definitions"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Efficient"}),`: Optimized with caching, memoization, and efficient data
structures (Maps, Sets)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Flexible"}),`: Supports custom search fields, sorting, filtering, and
extensible data structures`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"Comprehensive"}),`: Covers all common hierarchical data operations (selection,
navigation, search, sort)`]}),`
`]}),`
`,t.jsx(e.h3,{id:"complete-api-reference",children:"Complete API Reference"}),`
`,t.jsx(e.p,{children:`For complete API documentation, detailed usage examples, and advanced patterns,
see:`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:t.jsx(e.a,{href:"https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-utilities/src/utils/add-select/add-select-data.md",rel:"nofollow",children:"AddSelectData API Documentation"})})}),`
`,t.jsx(e.p,{children:`The utility is designed to work seamlessly with AddSelect components but can
also be used independently for any hierarchical data management needs.`}),`
`,t.jsx(e.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,t.jsxs(e.p,{children:[`For complete, production-ready implementations of common selection workflows,
see the `,t.jsx(e.strong,{children:"Add and select patterns"}),":"]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.a,{href:"/docs/patterns-add-and-select-singleaddselect--overview",children:"SingleAddSelect Pattern"})}),` -
Complete single-selection workflow with hierarchical navigation, breadcrumbs,
and success notifications`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.a,{href:"/docs/patterns-add-and-select-multiaddselect--overview",children:"MultiAddSelect Pattern"})}),` -
Complete multi-selection workflow with Tearsheet, selection summary, and
success notifications`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:t.jsx(e.a,{href:"/docs/patterns-add-and-select-overview--overview",children:"Pattern Overview"})}),` -
Learn more about when to use each pattern`]}),`
`]}),`
`,t.jsx(e.p,{children:`The examples below demonstrate how to compose AddSelect components for custom
implementations:`}),`
`,t.jsx(e.h3,{id:"pattern-1-basic-single-select",children:"Pattern 1: Basic Single Select"}),`
`,t.jsx(e.p,{children:"Simple list with radio buttons for single selection."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set();
  if (selected) {
    newSelected.add(itemId);
  }
  setSelectedItems(newSelected);
};

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body itemsLabel="Items" itemCount={items.length}>
    <AddSelect.Content>
      {items.map((item) => (
        <AddSelect.Row
          key={item.id}
          itemId={item.id}
          title={item.title}
          subtitle={item.subtitle}
          value={item.value}
        />
      ))}
    </AddSelect.Content>
  </AddSelect.Body>
</AddSelect>;
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"pattern-2-basic-multi-select-list",children:"Pattern 2: Basic Multi-Select List"}),`
`,t.jsxs(e.p,{children:["Simple list with checkboxes for multiple selection. Use the ",t.jsx(e.code,{children:"multi"}),` prop on
AddSelect.Column to control selection mode.`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set(selectedItems);
  if (selected) {
    newSelected.add(itemId);
  } else {
    newSelected.delete(itemId);
  }
  setSelectedItems(newSelected);
};

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body itemsLabel="Items" itemCount={items.length}>
    <AddSelect.Content>
      <AddSelect.Column multi={true}>
        {items.map((item) => (
          <AddSelect.Row
            key={item.id}
            itemId={item.id}
            title={item.title}
            subtitle={item.subtitle}
            value={item.value}
          />
        ))}
      </AddSelect.Column>
    </AddSelect.Content>
  </AddSelect.Body>
</AddSelect>;
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"pattern-3-with-search-and-filters",children:"Pattern 3: With Search and Filters"}),`
`,t.jsx(e.p,{children:"Add global search and custom filter actions."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());
const [searchTerm, setSearchTerm] = useState('');
const [filterType, setFilterType] = useState('all');

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set(selectedItems);
  if (selected) {
    newSelected.add(itemId);
  } else {
    newSelected.delete(itemId);
  }
  setSelectedItems(newSelected);
};

const filteredItems = items.filter((item) => {
  const matchesSearch = item.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  const matchesFilter = filterType === 'all' || item.type === filterType;
  return matchesSearch && matchesFilter;
});

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body
    itemsLabel="Items"
    globalSearchLabel="Search"
    globalSearchPlaceholder="Search items"
    itemCount={filteredItems.length}
    onSearch={setSearchTerm}
    actionsSlot={
      <Dropdown
        id="filter"
        label="Filter"
        items={filterOptions}
        onChange={({ selectedItem }) =>
          setFilterType(selectedItem?.id || 'all')
        }
      />
    }
  >
    <AddSelect.Content>
      {filteredItems.map((item) => (
        <AddSelect.Row
          key={item.id}
          itemId={item.id}
          title={item.title}
          subtitle={item.subtitle}
          value={item.value}
        />
      ))}
    </AddSelect.Content>
  </AddSelect.Body>
</AddSelect>;
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"pattern-4-with-columns-and-select-all",children:"Pattern 4: With Columns and Select All"}),`
`,t.jsx(e.p,{children:'Organize items into columns with "Select All" functionality.'}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set(selectedItems);
  if (selected) {
    newSelected.add(itemId);
  } else {
    newSelected.delete(itemId);
  }
  setSelectedItems(newSelected);
};

const handleSelectAll = (checked) => {
  if (checked) {
    setSelectedItems(new Set(items.map((item) => item.id)));
  } else {
    setSelectedItems(new Set());
  }
};

const allSelected =
  items.length > 0 && items.every((item) => selectedItems.has(item.id));

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body itemsLabel="Items" itemCount={items.length}>
    <AddSelect.Content layout="horizontal">
      <AddSelect.Column
        title="Available items"
        showSelectAll
        multi
        itemCount={items.length}
        allSelected={allSelected}
        onSelectAll={handleSelectAll}
      >
        {items.map((item) => (
          <AddSelect.Row
            key={item.id}
            itemId={item.id}
            title={item.title}
            subtitle={item.subtitle}
            value={item.value}
          />
        ))}
      </AddSelect.Column>
    </AddSelect.Content>
  </AddSelect.Body>
</AddSelect>;
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"pattern-5-with-selection-summary",children:"Pattern 5: With Selection Summary"}),`
`,t.jsx(e.p,{children:"Display selected items in a separate panel."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set(selectedItems);
  if (selected) {
    newSelected.add(itemId);
  } else {
    newSelected.delete(itemId);
  }
  setSelectedItems(newSelected);
};

const handleRemove = (itemId) => {
  const newSelected = new Set(selectedItems);
  newSelected.delete(itemId);
  setSelectedItems(newSelected);
};

const selectedItemsArray = Array.from(selectedItems)
  .map((id) => items.find((item) => item.id === id))
  .filter((item) => item !== undefined);

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body itemsLabel="Items" itemCount={items.length}>
    <AddSelect.Content>
      {items.map((item) => (
        <AddSelect.Row
          key={item.id}
          itemId={item.id}
          title={item.title}
          subtitle={item.subtitle}
          value={item.value}
        />
      ))}
    </AddSelect.Content>
  </AddSelect.Body>

  <AddSelect.SelectionSummary
    title="Selected items"
    selectedItems={selectedItemsArray}
    showCount
    showEditIcon
    onEdit={() => console.log('Edit clicked')}
  >
    {selectedItemsArray.map((item) => (
      <AddSelect.SelectionSummaryItem
        key={item.id}
        item={item}
        useAccordion
        onRemove={handleRemove}
      />
    ))}
  </AddSelect.SelectionSummary>
</AddSelect>;
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"pattern-6-with-item-details-panel",children:"Pattern 6: With Item Details Panel"}),`
`,t.jsx(e.p,{children:"Show detailed information about items."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());
const [itemPanelOpen, setItemPanelOpen] = useState(false);
const [selectedItemForPanel, setSelectedItemForPanel] = useState(null);

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set(selectedItems);
  if (selected) {
    newSelected.add(itemId);
  } else {
    newSelected.delete(itemId);
  }
  setSelectedItems(newSelected);
};

const handleItemPanelClick = (itemId) => {
  const item = items.find((i) => i.id === itemId);
  setSelectedItemForPanel(item);
  setItemPanelOpen(true);
};

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body itemsLabel="Items" itemCount={items.length}>
    <AddSelect.Content>
      {items.map((item) => (
        <AddSelect.Row
          key={item.id}
          itemId={item.id}
          title={item.title}
          subtitle={item.subtitle}
          value={item.value}
          hasItemPanel
          onItemPanelClick={handleItemPanelClick}
          itemPanelOpen={itemPanelOpen && selectedItemForPanel?.id === item.id}
        />
      ))}
    </AddSelect.Content>
  </AddSelect.Body>

  {itemPanelOpen && selectedItemForPanel && (
    <AddSelect.ItemPanel
      title="Item details"
      item={selectedItemForPanel}
      onClose={() => {
        setItemPanelOpen(false);
        setSelectedItemForPanel(null);
      }}
    />
  )}
</AddSelect>;
`})}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"pattern-7-single-select-with-hierarchical-navigation",children:"Pattern 7: Single Select With Hierarchical Navigation"}),`
`,t.jsx(e.p,{children:"Navigate through nested item structures."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const [selectedItems, setSelectedItems] = useState(new Set());
const [currentLevel, setCurrentLevel] = useState({
  title: 'Root',
  items: rootItems,
});

const handleItemSelect = (itemId, selected) => {
  const newSelected = new Set(selectedItems);
  if (selected) {
    newSelected.add(itemId);
  } else {
    newSelected.delete(itemId);
  }
  setSelectedItems(newSelected);
};

const handleNavigate = (itemId, title, parentId) => {
  const item = currentLevel.items.find((i) => i.id === itemId);
  if (item && item.children) {
    setCurrentLevel({
      title: item.title,
      items: item.children,
      parentId: itemId,
    });
  }
};

<AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
  <AddSelect.Body itemsLabel="Items" itemCount={currentLevel.items.length}>
    <AddSelect.Content layout="horizontal">
      <AddSelect.Column title={currentLevel.title} onNavigate={handleNavigate}>
        {currentLevel.items.map((item) => (
          <AddSelect.Row
            key={item.id}
            itemId={item.id}
            title={item.title}
            subtitle={item.subtitle}
            value={item.value}
            hasChildren={item.children && item.children.length > 0}
          />
        ))}
      </AddSelect.Column>
    </AddSelect.Content>
  </AddSelect.Body>
</AddSelect>;
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(e.p,{children:`The AddSelect component system provides a comprehensive API across all
subcomponents. The Controls panel below shows props for all components in the
system. Use the component selector tabs to view props for specific
subcomponents.`}),`
`,t.jsx(e.h3,{id:"addselect-root-component",children:"AddSelect (Root Component)"}),`
`,t.jsxs(e.p,{children:["The root ",t.jsx(e.code,{children:"AddSelect"}),` component manages selection state and provides context to
all child components.`]}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"})," (ReactNode) - Child components"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onItemSelect"}),` (function, optional) - Callback when an item is
selected/deselected`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(itemId: string, selected: boolean, value: string) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"selectedItems"})," (Set of strings, optional) - Set of selected item IDs"]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectbody",children:"AddSelect.Body"}),`
`,t.jsx(e.p,{children:`Contains the header section (search, breadcrumbs, item count) and the main
content area.`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"}),` (ReactNode, optional) - Child components (typically
AddSelect.Content)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemsLabel"}),` (string, optional) - Label for items section (shown when
breadcrumbs are not used)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"globalSearchLabel"}),` (string, optional, default: "Search") - Global search
label for accessibility`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"globalSearchPlaceholder"}),` (string, optional, default: "Search") - Global
search placeholder text`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"searchResultsTitle"}),` (string, optional, default: "Search results") - Title
shown when search returns filtered results`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemCount"}),` (number, optional, default: 0) - Item count for display in tag
badge`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"path"}),` (Array of objects with id and title properties, optional, default:
[]) - Navigation path for breadcrumbs`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onSearch"})," (function, optional) - Callback when search term changes",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(searchTerm: string) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onBreadcrumbClick"}),` (function, optional) - Callback when breadcrumb is
clicked`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(index: number) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"headerContent"}),` (ReactNode, optional) - Custom header content (slot) -
replaces entire header`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"actionsSlot"}),` (ReactNode, optional) - Actions slot - adds custom actions
(filter/sort) next to default search`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"subHeaderActions"}),` (ReactNode, optional) - Sub-header actions - custom
content/actions rendered after breadcrumbs and item count`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"searchProps"}),` (object, optional) - Additional props to pass to the Search
component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"tagProps"}),` (object, optional) - Additional props to pass to the Tag
component (for item count)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"breadcrumbProps"}),` (object, optional) - Additional props to pass to the
Breadcrumb component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"breadcrumbItemProps"}),` (object, optional) - Additional props to pass to
BreadcrumbItem components`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"linkProps"}),` (object, optional) - Additional props to pass to Link components
in breadcrumbs`]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectcontent",children:"AddSelect.Content"}),`
`,t.jsx(e.p,{children:`Container for items with built-in keyboard navigation support. Manages focus and
provides grid-based navigation.`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"}),` (ReactNode, optional) - Child components (AddSelect.Row or
AddSelect.Column)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"layout"}),` ('vertical' | 'horizontal', optional, default: 'vertical') - Layout
direction for columns`]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectcolumn",children:"AddSelect.Column"}),`
`,t.jsx(e.p,{children:`Optional column wrapper that provides column-specific features like column
title, column-level search, and "Select All" functionality.`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"})," (ReactNode, optional) - AddSelectRow children"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"})," (string, optional) - Column title displayed in the header"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"searchLabel"}),` (string, optional, default: "Search") - Label text for the
search input (accessibility)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"searchPlaceholder"}),` (string, optional, default: "Search") - Placeholder text
for the search input`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onSearch"})," (function, optional) - Callback when search value changes",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(value: string) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"actionsSlot"}),` (ReactNode, optional) - Actions slot - adds custom actions
(filter/sort) next to search`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"hideSearch"}),` (boolean, optional, default: false) - Whether to hide the
search input`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"multi"}),` (boolean, optional, default: false) - Whether to enable
multi-selection (checkboxes) or single selection (radio buttons)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"showSelectAll"}),` (boolean, optional, default: false) - Whether to show the
"Select All" checkbox (only applicable when multi is true)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemCount"}),` (number, optional, default: 0) - Total number of items in the
column (for display in tag)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"allSelected"}),` (boolean, optional, default: false) - Whether all items are
currently selected`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onSelectAll"}),' (function, optional) - Callback when "Select All" is toggled',`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(checked: boolean) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onNavigate"})," (function, optional) - Callback when navigating to children",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(itemId: string, title: string, parentId: string) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"searchProps"}),` (object, optional) - Additional props to pass to the Search
component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"tagProps"}),` (object, optional) - Additional props to pass to the Tag
component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"selectAllCheckboxProps"}),` (object, optional) - Additional props to pass to
the Checkbox component (Select All)`]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectrow",children:"AddSelect.Row"}),`
`,t.jsx(e.p,{children:`Individual selectable item with support for checkboxes (multi-select) or radio
buttons (single-select).`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemId"})," (string, required) - Unique identifier for the item"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"})," (string, required) - Item title"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"value"})," (string, required) - Item value"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"subtitle"})," (string, optional) - Item subtitle"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"selected"}),` (boolean, optional, default: false) - Whether the item is
selected`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"disabled"}),` (boolean, optional, default: false) - Whether the item is
disabled`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"hasChildren"}),` (boolean, optional, default: false) - Whether the item has
children (for navigation)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"parentId"})," (string, optional) - Parent ID for hierarchical navigation"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"icon"})," (ReactNode, optional) - Optional icon slot"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"}),` (ReactNode, optional) - Custom content to render after the
title/subtitle section (badges, tags, metadata)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"hasItemPanel"}),` (boolean, optional, default: false) - Whether to show the
item panel view icon for this item`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onItemPanelClick"}),` (function, optional) - Callback when item panel view icon
is clicked`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(itemId: string) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemPanelIconDescription"}),` (string, optional, default: "View details") -
Description for the item panel icon button`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemPanelOpen"}),` (boolean, optional, default: false) - Whether the item panel
is currently open for this item`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"checkboxProps"}),` (object, optional) - Additional props to pass to the
Checkbox component (when multi=true)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"radioButtonProps"}),` (object, optional) - Additional props to pass to the
RadioButton component (when multi=false)`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"itemPanelIconButtonProps"}),` (object, optional) - Additional props to pass to
the IconButton component (info panel)`]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectselectionsummary",children:"AddSelect.SelectionSummary"}),`
`,t.jsx(e.p,{children:`Displays a list of selected items with optional count badge and edit
functionality.`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"}),' (string, optional, default: "Selected items") - Panel title']}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"selectedItems"}),` (AddSelectItem[], optional, default: []) - Array of selected
items`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"}),` (ReactNode, optional) - Custom content or SelectionSummaryItem
components`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"emptyState"})," (ReactNode, optional) - Custom empty state component"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"showCount"})," (boolean, optional, default: true) - Show count badge"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"showEditIcon"}),` (boolean, optional, default: false) - Show edit icon next to
count`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onEdit"})," (function, optional) - Edit icon click handler",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"() => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"editIconDescription"}),` (string, optional, default: "Edit selections") - Edit
icon aria-label`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderItem"})," (function, optional) - Custom item renderer",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(item: AddSelectItem) => ReactNode"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"headerContent"}),` (ReactNode, optional) - Custom header content (slot) -
replaces entire header section`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"headerActions"}),` (ReactNode, optional) - Header actions slot - adds custom
actions alongside the edit icon`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"tagProps"}),` (object, optional) - Additional props to pass to the Tag
component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"editIconButtonProps"}),` (object, optional) - Additional props to pass to the
edit IconButton`]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectselectionsummaryitem",children:"AddSelect.SelectionSummaryItem"}),`
`,t.jsx(e.p,{children:`Individual item display within the selection summary, with optional accordion
view and remove functionality.`}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"item"})," (AddSelectItem, required) - Item data"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderAccordionTitle"}),` (function, optional) - Custom title renderer (only
works with useAccordion mode)`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(item: AddSelectItem) => ReactNode"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderAccordionBody"}),` (function, optional) - Custom content renderer (only
works with useAccordion mode)`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(item: AddSelectItem) => ReactNode"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderTemplate"}),` (function, optional) - Custom template for rendering the
entire item content (takes precedence over all other rendering props)`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[`Signature:
`,t.jsx(e.code,{children:"(item: AddSelectItem, onRemove?: (id: string) => void) => ReactNode"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onRemove"})," (function, optional) - Remove button handler",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(itemId: string) => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"removeButtonLabel"}),` (string, optional, default: "Remove item") - Remove
button aria-label`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"useAccordion"})," (boolean, optional, default: false) - Use accordion pattern"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"accordionProps"}),` (object, optional) - Additional props to pass to the
Accordion component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"accordionItemProps"}),` (object, optional) - Additional props to pass to the
AccordionItem component`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"removeIconButtonProps"}),` (object, optional) - Additional props to pass to the
remove IconButton`]}),`
`]}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(e.h3,{id:"addselectitempanel",children:"AddSelect.ItemPanel"}),`
`,t.jsx(e.p,{children:"Side panel that displays detailed information about a specific item."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Props:"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"title"}),' (string, optional, default: "Item details") - Panel title']}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"item"}),` (AddSelectItem | ItemDetailEntry[] | ReactNode, optional) - Item
data, array of entries, or custom content`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"onClose"})," (function, optional) - Close button handler",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"() => void"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"closeIconDescription"}),` (string, optional, default: "Close") - Close button
aria-label`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"children"})," (ReactNode, optional) - Custom content (alternative to item prop)"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderContent"})," (function, optional) - Custom content renderer",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(item: AddSelectItem) => ReactNode"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"className"})," (string, optional) - Optional CSS class name"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"closeIconButtonProps"}),` (object, optional) - Additional props to pass to the
close IconButton`]}),`
`]})]})}l(R,"_createMdxContent");function _(n={}){const{wrapper:e}={...E(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(R,{...n})}):R(n)}l(_,"MDXContent");const x="add-select-next-stories",N=[{id:"all",text:"All items"},{id:"folder",text:"Folders"},{id:"file",text:"Files"}],g=[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",itemDetails:{id:"description",title:"Description",value:"Description text for item 1"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",itemDetails:{id:"description",title:"Description",value:"Description text for item 2"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"},{id:"4",value:"4",title:"item 4",subtitle:"item 4 subtitle"},{id:"5",value:"5",title:"item 5",subtitle:"item 5 subtitle"}],D=g.slice(1,4),G=l(({children:n})=>o.createElement("div",{style:{border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},n),"PlaceholderShell"),$=l(()=>o.createElement("div",{style:{display:"grid",gap:"0.25rem"}},g.slice(0,3).map(n=>o.createElement("div",{key:n.id,style:{padding:"0.25rem",background:"var(--cds-layer-accent)"}},o.createElement("p",{style:{margin:0}},"AddSelect.Row")))),"PlaceholderRows"),Me={title:"Preview/Add and select",component:s,tags:["autodocs"],decorators:[n=>o.createElement("div",{className:`${x}__viewport`},n())],subcomponents:{"AddSelect.Body":s.Body,"AddSelect.Content":s.Content,"AddSelect.Column":s.Column,"AddSelect.Row":s.Row,"AddSelect.SelectionSummary":s.SelectionSummary,"AddSelect.SelectionSummaryItem":s.SelectionSummaryItem,"AddSelect.ItemPanel":s.ItemPanel},parameters:{styles:U,docs:{page:_}}},K=l(n=>{const[e,r]=p.useState(""),[d,c]=p.useState("all"),m=p.useMemo(()=>g.filter(a=>{const v=a.title?.toLowerCase().includes(e.toLowerCase()),j=d==="all"||a.type===d;return v&&j}),[e,d]),u=n.showActionsSlot?o.createElement(B,{id:"add-select-body-filter",titleText:"",label:"Filter items",items:N,itemToString:l(a=>a?a.text:"","itemToString"),onChange:l(({selectedItem:a})=>c(a?.id||"all"),"onChange"),size:"lg"}):void 0,h=n.showSubHeaderActions?o.createElement(z,{id:"body-subheader-toggle",labelA:"Off",labelB:"On",labelText:"Placeholder action",size:"sm",hideLabel:!0}):void 0;return o.createElement(s,{selectedItems:new Set,onItemSelect:l(()=>{},"onItemSelect")},o.createElement(G,null,o.createElement(s.Body,{itemsLabel:n.itemsLabel,globalSearchLabel:n.globalSearchLabel,globalSearchPlaceholder:n.globalSearchPlaceholder,searchResultsTitle:n.searchResultsTitle,itemCount:n.itemCount??m.length,path:n.showPath?n.path:[],onSearch:r,onBreadcrumbClick:l(()=>{},"onBreadcrumbClick"),actionsSlot:u,subHeaderActions:h,hideSearch:n.hideSearch},o.createElement($,null))))},"AddSelectBodyStory"),f={name:"AddSelect.Body",render:K,args:{itemsLabel:"All items",globalSearchLabel:"Search items",globalSearchPlaceholder:"Search by name",searchResultsTitle:"Search results",itemCount:3,showActionsSlot:!1,showSubHeaderActions:!1,showPath:!1,path:[{id:"root",title:"Category"},{id:"folders",title:"Folders"},{id:"files",title:"Files"}],hideSearch:!1},argTypes:{itemsLabel:{control:"text",description:"Label shown when breadcrumbs are not used"},globalSearchLabel:{control:"text",description:"Accessible label for the global search input"},globalSearchPlaceholder:{control:"text",description:"Placeholder text for the global search input"},searchResultsTitle:{control:"text",description:"Title shown when search returns filtered results"},itemCount:{control:{type:"number",min:0},description:"Item count for display in tag badge"},showActionsSlot:{control:"boolean",description:"Toggle example content for the actionsSlot prop",table:{category:"Story controls"}},showSubHeaderActions:{control:"boolean",description:"Toggle example content for the subHeaderActions prop",table:{category:"Story controls"}},showPath:{control:"boolean",description:"Toggle breadcrumb path usage",table:{category:"Story controls"}},path:{control:"object",description:"Breadcrumb entries used for hierarchical navigation. Array of objects with id and title properties."},children:{control:!1,description:"Child components (typically AddSelect.Content)",table:{disable:!0}},headerContent:{control:!1,description:"Custom header content (slot) - replaces entire header",table:{disable:!0}},actionsSlot:{control:!1,description:"Actions slot - adds custom actions (filter/sort) next to default search",table:{disable:!0}},subHeaderActions:{control:!1,description:"Sub-header actions - custom content/actions rendered after breadcrumbs and item count",table:{disable:!0}},onSearch:{control:!1,description:"Callback when search term changes. Signature: (searchTerm: string) => void",table:{disable:!0}},onBreadcrumbClick:{control:!1,description:"Callback when breadcrumb is clicked. Signature: (index: number) => void",table:{disable:!0}},searchProps:{control:!1,description:"Additional props to pass to the Search component",table:{disable:!0}},tagProps:{control:!1,description:"Additional props to pass to the Tag component (for item count)",table:{disable:!0}},breadcrumbProps:{control:!1,description:"Additional props to pass to the Breadcrumb component",table:{disable:!0}},breadcrumbItemProps:{control:!1,description:"Additional props to pass to BreadcrumbItem components",table:{disable:!0}},linkProps:{control:!1,description:"Additional props to pass to Link components in breadcrumbs",table:{disable:!0}},hideSearch:{control:"boolean",description:"Whether to hide the search input"},className:{control:"text",description:"Optional CSS class name",table:{disable:!0}}}},V=l(n=>{const[e,r]=p.useState(""),[d,c]=p.useState("all"),[m,u]=p.useState(new Set(["1","4"])),h=p.useMemo(()=>g.filter(i=>{const b=i.title?.toLowerCase().includes(e.toLowerCase()),S=d==="all"||i.type===d;return b&&S}),[e,d]),a=l((i,b)=>{const S=n.multi?new Set(m):new Set;b?S.add(i):S.delete(i),u(S)},"handleItemSelect"),v=l(i=>{u(i?new Set(h.map(b=>b.id)):new Set)},"handleSelectAll"),j=h.length>0&&h.every(i=>m.has(i.id)),L=m.size>0&&m.size<h.length&&!j,O=n.showActionsSlot?o.createElement(B,{id:"add-select-column-filter",titleText:"",label:"Filter items",items:N,itemToString:l(i=>i?i.text:"","itemToString"),onChange:l(({selectedItem:i})=>c(i?.id||"all"),"onChange"),size:"md"}):void 0;return o.createElement("div",{className:`${x}-column-container`},o.createElement(s,{selectedItems:m,onItemSelect:a},o.createElement(s.Content,null,o.createElement(s.Column,{title:n.title,searchLabel:n.searchLabel,searchPlaceholder:n.searchPlaceholder,onSearch:r,hideSearch:!n.showSearch,actionsSlot:O,multi:n.multi,showSelectAll:n.showSelectAll,itemCount:h.length,allSelected:j,allIndeterminate:L,onSelectAll:v,onNavigate:n.enableNavigation?()=>{}:void 0,className:"custom-column-class",searchProps:{closeButtonLabelText:"Clear search"},tagProps:{className:"custom-tag-class"},selectAllCheckboxProps:{hideLabel:!1}},h.map(i=>o.createElement(s.Row,{key:i.id,itemId:i.id,title:i.title||"",subtitle:i.subtitle,value:i.value||"",hasChildren:n.enableNavigation&&i.id==="1"}))))))},"AddSelectColumnStory"),y={name:"AddSelect.Column",render:V,args:{title:"Available items",searchLabel:"Search within column",searchPlaceholder:"Search items",showSearch:!0,showActionsSlot:!1,multi:!0,showSelectAll:!0,enableNavigation:!1},argTypes:{title:{control:"text",description:"Header title for the column"},searchLabel:{control:"text",description:"Accessible label for the column search input"},searchPlaceholder:{control:"text",description:"Placeholder text for the column search input"},showSearch:{control:"boolean",description:"Toggle the hideSearch behavior",table:{category:"Story controls"}},showActionsSlot:{control:"boolean",description:"Toggle example content for the actionsSlot prop",table:{category:"Story controls"}},multi:{control:"boolean",description:"Switch between checkbox and radio row selection"},showSelectAll:{control:"boolean",description:"Show the Select all checkbox when multi is enabled"},enableNavigation:{control:"boolean",description:"Show how the column can pass navigation callbacks to rows",table:{category:"Story controls"}},children:{table:{disable:!0}},onSearch:{table:{disable:!0}},actionsSlot:{table:{disable:!0}},hideSearch:{table:{disable:!0}},itemCount:{table:{disable:!0}},allSelected:{table:{disable:!0}},allIndeterminate:{table:{disable:!0}},onSelectAll:{table:{disable:!0}},onNavigate:{table:{disable:!0}},className:{table:{disable:!0}},searchProps:{table:{disable:!0}},tagProps:{table:{disable:!0}},selectAllCheckboxProps:{table:{disable:!0}}}},X=l(n=>{const[e,r]=p.useState(n.selected?new Set(["1"]):new Set),[d,c]=p.useState(n.itemPanelOpen);o.useEffect(()=>{r(n.selected?new Set(["1"]):new Set)},[n.selected]),o.useEffect(()=>{c(n.itemPanelOpen)},[n.itemPanelOpen]);const m=l((u,h)=>{const a=n.multi?new Set(e):new Set;h?a.add(u):a.delete(u),r(a)},"handleItemSelect");return o.createElement("div",{className:`${x}-container--single`},o.createElement(s,{selectedItems:e,onItemSelect:m},o.createElement(s.Content,null,o.createElement(s.Column,{multi:n.multi,hideSearch:!0},o.createElement(s.Row,{itemId:"1",title:"folder 1",subtitle:n.showSubtitle?"3 files":void 0,value:"folder 1",selected:n.selected,indeterminate:n.indeterminate,disabled:n.disabled,hasChildren:n.hasChildren,hasItemPanel:n.hasItemPanel,onItemPanelClick:l(()=>c(!0),"onItemPanelClick"),itemPanelOpen:n.hasItemPanel&&d,icon:n.showIcon?o.createElement(H,{size:24}):void 0,rowContent:n.useRowContent?o.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},o.createElement("strong",null,"Custom row content"),o.createElement(k,{type:"purple",size:"sm"},"Custom")):void 0},n.showTag?o.createElement(k,{type:"blue",size:"sm"},"Folder"):null)))))},"AddSelectRowStory"),w={name:"AddSelect.Row",render:X,args:{multi:!1,selected:!1,indeterminate:!1,showSubtitle:!0,showTag:!1,showIcon:!1,useRowContent:!1,hasChildren:!0,hasItemPanel:!1,itemPanelOpen:!1,disabled:!1},argTypes:{multi:{control:"boolean",description:"Toggle row rendering between checkbox and radio button mode",table:{category:"Story controls"}},showSubtitle:{control:"boolean",description:"Demonstrate the optional subtitle prop",table:{category:"Story controls"}},showTag:{control:"boolean",description:"Render custom row children content",table:{category:"Story controls"}},showIcon:{control:"boolean",description:"Demonstrate the optional icon prop",table:{category:"Story controls"}},useRowContent:{control:"boolean",description:"Demonstrate custom rowContent slot (replaces title/subtitle/children)",table:{category:"Story controls"}},hasChildren:{control:"boolean",description:"Show the navigation indicator for hierarchical lists"},hasItemPanel:{control:"boolean",description:"Show the item details icon button"},disabled:{control:"boolean",description:"Disable the example row"},itemId:{control:"text",description:"Unique identifier for the item (required)",table:{disable:!0}},title:{control:"text",description:"Item title (required)",table:{disable:!0}},subtitle:{control:"text",description:"Item subtitle (optional)",table:{disable:!0}},value:{control:"text",description:"Item value (required)",table:{disable:!0}},selected:{control:"boolean",description:"Set the row selection state",table:{category:"Story controls"}},indeterminate:{control:"boolean",description:"Whether the item is in an indeterminate state (for multi hierarchical selections)"},parentId:{control:"text",description:"Parent ID for hierarchical navigation",table:{disable:!0}},icon:{control:!1,description:"Optional icon slot (ReactNode). Toggle with showIcon control.",table:{disable:!0}},children:{control:!1,description:"Custom content to render after the title/subtitle section (badges, tags, metadata)",table:{disable:!0}},rowContent:{control:!1,description:"Custom row content (slot) - replaces the entire row content section (title, subtitle, and children). When provided, only the selection control and navigation indicators remain. Toggle with useRowContent control.",table:{disable:!0}},onItemPanelClick:{control:!1,description:"Callback when item panel view icon is clicked. Signature: (itemId: string) => void",table:{disable:!0}},itemPanelIconDescription:{control:"text",description:"Description for the item panel icon button",table:{disable:!0}},itemPanelOpen:{control:"boolean",description:"Whether the item panel is currently open for this item",table:{category:"Story controls"}},className:{control:"text",description:"Optional CSS class name",table:{disable:!0}},checkboxProps:{control:!1,description:"Additional props to pass to the Checkbox component (when multi=true)",table:{disable:!0}},radioButtonProps:{control:!1,description:"Additional props to pass to the RadioButton component (when multi=false)",table:{disable:!0}},itemPanelIconButtonProps:{control:!1,description:"Additional props to pass to the IconButton component (info panel)",table:{disable:!0}}}},J=l(n=>{const e=n.showEmptyState?[]:D;return o.createElement("div",{className:`${x}-summary-container`},o.createElement(s.SelectionSummary,{title:n.title,selectedItems:e,showCount:n.showCount,showEditIcon:n.showEditIcon,onEdit:n.showEditIcon?()=>{}:void 0,editIconDescription:n.editIconDescription,emptyState:n.showEmptyState?o.createElement("div",{style:{padding:"1rem 0.5rem"}},o.createElement(q,{subtitle:o.createElement(o.Fragment,null,"No selected items.",o.createElement("br",null),"Select items to see them here.")})):void 0,className:n.className,renderItem:n.useCustomRenderer?r=>o.createElement("div",{style:{padding:"0.5rem",borderBottom:"1px solid var(--cds-border-subtle)"}},o.createElement("strong",null,r.title),r.subtitle&&o.createElement("div",{style:{fontSize:"0.875rem",color:"var(--cds-text-secondary)"}},r.subtitle)):void 0,headerContent:n.useCustomHeader?o.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}},o.createElement("h3",{style:{margin:0,fontSize:"1rem"}},"Custom Header"),o.createElement(P,{label:"popup",kind:"ghost",size:"sm"},o.createElement(T,null))):void 0,headerActions:n.showHeaderActions?o.createElement(o.Fragment,null,o.createElement(P,{label:"Filter",kind:"ghost",size:"sm"},o.createElement(M,null)),o.createElement(P,{label:"popup",kind:"ghost",size:"sm"},o.createElement(T,null))):void 0},n.useCustomChildren&&e.slice(0,3).map(r=>o.createElement(s.SelectionSummaryItem,{key:r.id,item:r,onRemove:l(()=>{},"onRemove"),useAccordion:!0}))))},"AddSelectSelectionSummaryStory"),I={name:"AddSelect.SelectionSummary",render:J,args:{title:"Selected items",showCount:!0,showEditIcon:!0,showHeaderActions:!1,showEmptyState:!1,editIconDescription:"Edit selections",className:"",useCustomRenderer:!1,useCustomHeader:!1,useCustomChildren:!1},argTypes:{title:{control:"text",description:"Heading displayed above the selection summary list"},showCount:{control:"boolean",description:"Display a count badge for selected items"},showEditIcon:{control:"boolean",description:"Show the edit icon button when onEdit is provided"},editIconDescription:{control:"text",description:"Edit icon aria-label"},className:{control:"text",description:"Optional CSS class name"},useCustomChildren:{control:"boolean",description:"Toggle example custom children (SelectionSummaryItem components)",table:{category:"Story controls"}},useCustomRenderer:{control:"boolean",description:"Toggle example custom item renderer (renderItem prop)",table:{category:"Story controls"}},useCustomHeader:{control:"boolean",description:"Toggle example custom header content (headerContent prop)",table:{category:"Story controls"}},showHeaderActions:{control:"boolean",description:"Toggle example content for the headerActions prop",table:{category:"Story controls"}},showEmptyState:{control:"boolean",description:"Show the emptyState slot usage",table:{category:"Story controls"}},selectedItems:{control:!1,description:"Array of selected items (AddSelectItem[])"},children:{control:!1,description:"Custom content or SelectionSummaryItem components"},emptyState:{control:!1,description:"Custom empty state component"},onEdit:{control:!1,description:"Edit icon click handler. Signature: () => void"},renderItem:{control:!1,description:"Custom item renderer. Signature: (item: AddSelectItem) => ReactNode"},headerContent:{control:!1,description:"Custom header content (slot) - replaces entire header section"},headerActions:{control:!1,description:"Header actions slot - adds custom actions alongside the edit icon"},tagProps:{control:!1,description:"Additional props to pass to the Tag component"},editIconButtonProps:{control:!1,description:"Additional props to pass to the edit IconButton"}}},Y=l(n=>{const[e,r]=p.useState(!0),d=D[0];return o.createElement("div",{style:{width:"256px",display:"grid",gap:"0.75rem",border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},e?o.createElement(s.SelectionSummaryItem,{item:d,useAccordion:n.useAccordion,onRemove:n.showRemoveButton?()=>r(!1):void 0,removeButtonLabel:n.removeButtonLabel,renderAccordionTitle:n.useCustomTitle?c=>o.createElement("div",null,o.createElement("p",{style:{margin:0,fontWeight:600}},c.title),o.createElement("p",{style:{margin:"0.25rem 0 0"}},"Custom title renderer")):void 0,renderAccordionBody:n.useCustomContent?c=>o.createElement("div",null,o.createElement("p",{style:{margin:0}},"Custom content for ",c.title)):void 0,renderItem:n.useCustomRenderer?(c,m)=>o.createElement("div",{style:{padding:"1rem",border:"2px solid var(--cds-border-interactive)",borderRadius:"4px",background:"var(--cds-layer-01)"}},o.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o.createElement("div",null,o.createElement("p",{style:{margin:0,fontWeight:700,color:"var(--cds-text-primary)"}},c.title),c.subtitle&&o.createElement("p",{style:{margin:"0.25rem 0 0",fontSize:"0.875rem",color:"var(--cds-text-secondary)"}},c.subtitle)),m&&o.createElement(W,{kind:"danger--ghost",size:"sm",onClick:l(()=>m(c.id),"onClick")},"Remove")),o.createElement("p",{style:{margin:"0.5rem 0 0",fontSize:"0.75rem",fontStyle:"italic"}},"Custom item rendering")):void 0},n.useChildren?o.createElement("div",{style:{padding:"1rem",border:"2px solid var(--cds-support-success)",borderRadius:"4px",background:"var(--cds-layer-01)"}},o.createElement("p",{style:{margin:0,fontWeight:700}},d.title),o.createElement("p",{style:{margin:"0.25rem 0 0",fontSize:"0.875rem"}},"Custom children content")):void 0):o.createElement("p",{style:{margin:0}},"Item removed in story preview."))},"AddSelectSelectionSummaryItemStory"),A={name:"AddSelect.SelectionSummaryItem",render:Y,args:{useAccordion:!1,showRemoveButton:!0,removeButtonLabel:"Remove item",useCustomTitle:!1,useCustomContent:!1,useCustomRenderer:!1,useChildren:!1},argTypes:{useAccordion:{control:"boolean",description:"Render the item with Carbon Accordion markup"},showRemoveButton:{control:"boolean",description:"Toggle the remove action button",table:{category:"Story controls"}},removeButtonLabel:{control:"text",description:"Accessible label for the remove icon button"},useCustomTitle:{control:"boolean",description:"Demonstrate renderAccordionTitle in accordion mode",table:{category:"Story controls"}},useCustomContent:{control:"boolean",description:"Demonstrate renderAccordionBody in accordion mode",table:{category:"Story controls"}},useCustomRenderer:{control:"boolean",description:"Demonstrate renderItem prop with custom rendering (takes precedence over default rendering)",table:{category:"Story controls"}},useChildren:{control:"boolean",description:"Demonstrate custom children content (takes highest priority)",table:{category:"Story controls"}},item:{table:{disable:!0}},renderAccordionTitle:{table:{disable:!0}},renderAccordionBody:{table:{disable:!0}},renderItem:{table:{disable:!0}},children:{table:{disable:!0}},onRemove:{table:{disable:!0}},className:{table:{disable:!0}},accordionProps:{table:{disable:!0}},accordionItemProps:{table:{disable:!0}},removeIconButtonProps:{table:{disable:!0}}}},Q=l(n=>{const e=g[0];return o.createElement("div",{className:`${x}-summary-container`},o.createElement(s.ItemPanel,{title:n.title,item:e,onClose:n.showCloseButton?()=>{}:void 0,closeIconDescription:n.closeIconDescription,className:n.className,renderItem:n.useRenderItem?r=>o.createElement("div",null,o.createElement("p",{style:{margin:0,fontWeight:600}},r.title),o.createElement("p",{style:{margin:"0.25rem 0 0"}},"Custom rendered details for ",r.value)):void 0},n.useChildren?o.createElement("div",null,o.createElement("p",{style:{margin:0,fontWeight:600}},"Custom children content"),o.createElement("p",{style:{margin:"0.25rem 0 0"}},"This content is passed as children and takes highest priority")):void 0))},"AddSelectItemPanelStory"),C={name:"AddSelect.ItemPanel",render:Q,args:{title:"Item details",showCloseButton:!0,closeIconDescription:"Close item details",className:"",useChildren:!1,useRenderItem:!1},argTypes:{title:{control:"text",description:"Panel title"},item:{control:!1,description:"Item data (AddSelectItem)",table:{disable:!0}},onClose:{control:!1,description:"Close button handler. Signature: () => void",table:{disable:!0}},closeIconDescription:{control:"text",description:"Close button aria-label"},className:{control:"text",description:"Optional CSS class name"},children:{control:!1,description:"Custom content - takes highest priority (ReactNode)",table:{disable:!0}},renderItem:{control:!1,description:"Custom template for rendering the entire panel body content. Signature: (item: AddSelectItem) => ReactNode",table:{disable:!0}},closeIconButtonProps:{control:!1,description:"Additional props to pass to the close IconButton",table:{disable:!0}},showCloseButton:{control:"boolean",description:"Toggle the close button by passing onClose",table:{category:"Story controls"}},useChildren:{control:"boolean",description:"Demonstrate custom children content (highest priority)",table:{category:"Story controls"}},useRenderItem:{control:"boolean",description:"Demonstrate custom renderItem for AddSelectItem data",table:{category:"Story controls"}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.Body',
  render: AddSelectBodyStory,
  args: {
    itemsLabel: 'All items',
    globalSearchLabel: 'Search items',
    globalSearchPlaceholder: 'Search by name',
    searchResultsTitle: 'Search results',
    itemCount: 3,
    showActionsSlot: false,
    showSubHeaderActions: false,
    showPath: false,
    path: [{
      id: 'root',
      title: 'Category'
    }, {
      id: 'folders',
      title: 'Folders'
    }, {
      id: 'files',
      title: 'Files'
    }],
    hideSearch: false
  },
  argTypes: {
    itemsLabel: {
      control: 'text',
      description: 'Label shown when breadcrumbs are not used'
    },
    globalSearchLabel: {
      control: 'text',
      description: 'Accessible label for the global search input'
    },
    globalSearchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the global search input'
    },
    searchResultsTitle: {
      control: 'text',
      description: 'Title shown when search returns filtered results'
    },
    itemCount: {
      control: {
        type: 'number',
        min: 0
      },
      description: 'Item count for display in tag badge'
    },
    showActionsSlot: {
      control: 'boolean',
      description: 'Toggle example content for the actionsSlot prop',
      table: {
        category: 'Story controls'
      }
    },
    showSubHeaderActions: {
      control: 'boolean',
      description: 'Toggle example content for the subHeaderActions prop',
      table: {
        category: 'Story controls'
      }
    },
    showPath: {
      control: 'boolean',
      description: 'Toggle breadcrumb path usage',
      table: {
        category: 'Story controls'
      }
    },
    path: {
      control: 'object',
      description: 'Breadcrumb entries used for hierarchical navigation. Array of objects with id and title properties.'
    },
    children: {
      control: false,
      description: 'Child components (typically AddSelect.Content)',
      table: {
        disable: true
      }
    },
    headerContent: {
      control: false,
      description: 'Custom header content (slot) - replaces entire header',
      table: {
        disable: true
      }
    },
    actionsSlot: {
      control: false,
      description: 'Actions slot - adds custom actions (filter/sort) next to default search',
      table: {
        disable: true
      }
    },
    subHeaderActions: {
      control: false,
      description: 'Sub-header actions - custom content/actions rendered after breadcrumbs and item count',
      table: {
        disable: true
      }
    },
    onSearch: {
      control: false,
      description: 'Callback when search term changes. Signature: (searchTerm: string) => void',
      table: {
        disable: true
      }
    },
    onBreadcrumbClick: {
      control: false,
      description: 'Callback when breadcrumb is clicked. Signature: (index: number) => void',
      table: {
        disable: true
      }
    },
    searchProps: {
      control: false,
      description: 'Additional props to pass to the Search component',
      table: {
        disable: true
      }
    },
    tagProps: {
      control: false,
      description: 'Additional props to pass to the Tag component (for item count)',
      table: {
        disable: true
      }
    },
    breadcrumbProps: {
      control: false,
      description: 'Additional props to pass to the Breadcrumb component',
      table: {
        disable: true
      }
    },
    breadcrumbItemProps: {
      control: false,
      description: 'Additional props to pass to BreadcrumbItem components',
      table: {
        disable: true
      }
    },
    linkProps: {
      control: false,
      description: 'Additional props to pass to Link components in breadcrumbs',
      table: {
        disable: true
      }
    },
    hideSearch: {
      control: 'boolean',
      description: 'Whether to hide the search input'
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: {
        disable: true
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.Column',
  render: AddSelectColumnStory,
  args: {
    title: 'Available items',
    searchLabel: 'Search within column',
    searchPlaceholder: 'Search items',
    showSearch: true,
    showActionsSlot: false,
    multi: true,
    showSelectAll: true,
    enableNavigation: false
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title for the column'
    },
    searchLabel: {
      control: 'text',
      description: 'Accessible label for the column search input'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the column search input'
    },
    showSearch: {
      control: 'boolean',
      description: 'Toggle the hideSearch behavior',
      table: {
        category: 'Story controls'
      }
    },
    showActionsSlot: {
      control: 'boolean',
      description: 'Toggle example content for the actionsSlot prop',
      table: {
        category: 'Story controls'
      }
    },
    multi: {
      control: 'boolean',
      description: 'Switch between checkbox and radio row selection'
    },
    showSelectAll: {
      control: 'boolean',
      description: 'Show the Select all checkbox when multi is enabled'
    },
    enableNavigation: {
      control: 'boolean',
      description: 'Show how the column can pass navigation callbacks to rows',
      table: {
        category: 'Story controls'
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    onSearch: {
      table: {
        disable: true
      }
    },
    actionsSlot: {
      table: {
        disable: true
      }
    },
    hideSearch: {
      table: {
        disable: true
      }
    },
    itemCount: {
      table: {
        disable: true
      }
    },
    allSelected: {
      table: {
        disable: true
      }
    },
    allIndeterminate: {
      table: {
        disable: true
      }
    },
    onSelectAll: {
      table: {
        disable: true
      }
    },
    onNavigate: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    searchProps: {
      table: {
        disable: true
      }
    },
    tagProps: {
      table: {
        disable: true
      }
    },
    selectAllCheckboxProps: {
      table: {
        disable: true
      }
    }
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.Row',
  render: AddSelectRowStory,
  args: {
    multi: false,
    selected: false,
    indeterminate: false,
    showSubtitle: true,
    showTag: false,
    showIcon: false,
    useRowContent: false,
    hasChildren: true,
    hasItemPanel: false,
    itemPanelOpen: false,
    disabled: false
  },
  argTypes: {
    multi: {
      control: 'boolean',
      description: 'Toggle row rendering between checkbox and radio button mode',
      table: {
        category: 'Story controls'
      }
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Demonstrate the optional subtitle prop',
      table: {
        category: 'Story controls'
      }
    },
    showTag: {
      control: 'boolean',
      description: 'Render custom row children content',
      table: {
        category: 'Story controls'
      }
    },
    showIcon: {
      control: 'boolean',
      description: 'Demonstrate the optional icon prop',
      table: {
        category: 'Story controls'
      }
    },
    useRowContent: {
      control: 'boolean',
      description: 'Demonstrate custom rowContent slot (replaces title/subtitle/children)',
      table: {
        category: 'Story controls'
      }
    },
    hasChildren: {
      control: 'boolean',
      description: 'Show the navigation indicator for hierarchical lists'
    },
    hasItemPanel: {
      control: 'boolean',
      description: 'Show the item details icon button'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the example row'
    },
    itemId: {
      control: 'text',
      description: 'Unique identifier for the item (required)',
      table: {
        disable: true
      }
    },
    title: {
      control: 'text',
      description: 'Item title (required)',
      table: {
        disable: true
      }
    },
    subtitle: {
      control: 'text',
      description: 'Item subtitle (optional)',
      table: {
        disable: true
      }
    },
    value: {
      control: 'text',
      description: 'Item value (required)',
      table: {
        disable: true
      }
    },
    selected: {
      control: 'boolean',
      description: 'Set the row selection state',
      table: {
        category: 'Story controls'
      }
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the item is in an indeterminate state (for multi hierarchical selections)'
    },
    parentId: {
      control: 'text',
      description: 'Parent ID for hierarchical navigation',
      table: {
        disable: true
      }
    },
    icon: {
      control: false,
      description: 'Optional icon slot (ReactNode). Toggle with showIcon control.',
      table: {
        disable: true
      }
    },
    children: {
      control: false,
      description: 'Custom content to render after the title/subtitle section (badges, tags, metadata)',
      table: {
        disable: true
      }
    },
    rowContent: {
      control: false,
      description: 'Custom row content (slot) - replaces the entire row content section (title, subtitle, and children). When provided, only the selection control and navigation indicators remain. Toggle with useRowContent control.',
      table: {
        disable: true
      }
    },
    onItemPanelClick: {
      control: false,
      description: 'Callback when item panel view icon is clicked. Signature: (itemId: string) => void',
      table: {
        disable: true
      }
    },
    itemPanelIconDescription: {
      control: 'text',
      description: 'Description for the item panel icon button',
      table: {
        disable: true
      }
    },
    itemPanelOpen: {
      control: 'boolean',
      description: 'Whether the item panel is currently open for this item',
      table: {
        category: 'Story controls'
      }
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: {
        disable: true
      }
    },
    checkboxProps: {
      control: false,
      description: 'Additional props to pass to the Checkbox component (when multi=true)',
      table: {
        disable: true
      }
    },
    radioButtonProps: {
      control: false,
      description: 'Additional props to pass to the RadioButton component (when multi=false)',
      table: {
        disable: true
      }
    },
    itemPanelIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the IconButton component (info panel)',
      table: {
        disable: true
      }
    }
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.SelectionSummary',
  render: AddSelectSelectionSummaryStory,
  args: {
    title: 'Selected items',
    showCount: true,
    showEditIcon: true,
    showHeaderActions: false,
    showEmptyState: false,
    editIconDescription: 'Edit selections',
    className: '',
    useCustomRenderer: false,
    useCustomHeader: false,
    useCustomChildren: false
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Heading displayed above the selection summary list'
    },
    showCount: {
      control: 'boolean',
      description: 'Display a count badge for selected items'
    },
    showEditIcon: {
      control: 'boolean',
      description: 'Show the edit icon button when onEdit is provided'
    },
    editIconDescription: {
      control: 'text',
      description: 'Edit icon aria-label'
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name'
    },
    useCustomChildren: {
      control: 'boolean',
      description: 'Toggle example custom children (SelectionSummaryItem components)',
      table: {
        category: 'Story controls'
      }
    },
    useCustomRenderer: {
      control: 'boolean',
      description: 'Toggle example custom item renderer (renderItem prop)',
      table: {
        category: 'Story controls'
      }
    },
    useCustomHeader: {
      control: 'boolean',
      description: 'Toggle example custom header content (headerContent prop)',
      table: {
        category: 'Story controls'
      }
    },
    showHeaderActions: {
      control: 'boolean',
      description: 'Toggle example content for the headerActions prop',
      table: {
        category: 'Story controls'
      }
    },
    showEmptyState: {
      control: 'boolean',
      description: 'Show the emptyState slot usage',
      table: {
        category: 'Story controls'
      }
    },
    selectedItems: {
      control: false,
      description: 'Array of selected items (AddSelectItem[])'
    },
    children: {
      control: false,
      description: 'Custom content or SelectionSummaryItem components'
    },
    emptyState: {
      control: false,
      description: 'Custom empty state component'
    },
    onEdit: {
      control: false,
      description: 'Edit icon click handler. Signature: () => void'
    },
    renderItem: {
      control: false,
      description: 'Custom item renderer. Signature: (item: AddSelectItem) => ReactNode'
    },
    headerContent: {
      control: false,
      description: 'Custom header content (slot) - replaces entire header section'
    },
    headerActions: {
      control: false,
      description: 'Header actions slot - adds custom actions alongside the edit icon'
    },
    tagProps: {
      control: false,
      description: 'Additional props to pass to the Tag component'
    },
    editIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the edit IconButton'
    }
  }
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.SelectionSummaryItem',
  render: AddSelectSelectionSummaryItemStory,
  args: {
    useAccordion: false,
    showRemoveButton: true,
    removeButtonLabel: 'Remove item',
    useCustomTitle: false,
    useCustomContent: false,
    useCustomRenderer: false,
    useChildren: false
  },
  argTypes: {
    useAccordion: {
      control: 'boolean',
      description: 'Render the item with Carbon Accordion markup'
    },
    showRemoveButton: {
      control: 'boolean',
      description: 'Toggle the remove action button',
      table: {
        category: 'Story controls'
      }
    },
    removeButtonLabel: {
      control: 'text',
      description: 'Accessible label for the remove icon button'
    },
    useCustomTitle: {
      control: 'boolean',
      description: 'Demonstrate renderAccordionTitle in accordion mode',
      table: {
        category: 'Story controls'
      }
    },
    useCustomContent: {
      control: 'boolean',
      description: 'Demonstrate renderAccordionBody in accordion mode',
      table: {
        category: 'Story controls'
      }
    },
    useCustomRenderer: {
      control: 'boolean',
      description: 'Demonstrate renderItem prop with custom rendering (takes precedence over default rendering)',
      table: {
        category: 'Story controls'
      }
    },
    useChildren: {
      control: 'boolean',
      description: 'Demonstrate custom children content (takes highest priority)',
      table: {
        category: 'Story controls'
      }
    },
    item: {
      table: {
        disable: true
      }
    },
    renderAccordionTitle: {
      table: {
        disable: true
      }
    },
    renderAccordionBody: {
      table: {
        disable: true
      }
    },
    renderItem: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    onRemove: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    accordionProps: {
      table: {
        disable: true
      }
    },
    accordionItemProps: {
      table: {
        disable: true
      }
    },
    removeIconButtonProps: {
      table: {
        disable: true
      }
    }
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.ItemPanel',
  render: AddSelectItemPanelStory,
  args: {
    title: 'Item details',
    showCloseButton: true,
    closeIconDescription: 'Close item details',
    className: '',
    useChildren: false,
    useRenderItem: false
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title'
    },
    item: {
      control: false,
      description: 'Item data (AddSelectItem)',
      table: {
        disable: true
      }
    },
    onClose: {
      control: false,
      description: 'Close button handler. Signature: () => void',
      table: {
        disable: true
      }
    },
    closeIconDescription: {
      control: 'text',
      description: 'Close button aria-label'
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name'
    },
    children: {
      control: false,
      description: 'Custom content - takes highest priority (ReactNode)',
      table: {
        disable: true
      }
    },
    renderItem: {
      control: false,
      description: 'Custom template for rendering the entire panel body content. Signature: (item: AddSelectItem) => ReactNode',
      table: {
        disable: true
      }
    },
    closeIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the close IconButton',
      table: {
        disable: true
      }
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Toggle the close button by passing onClose',
      table: {
        category: 'Story controls'
      }
    },
    useChildren: {
      control: 'boolean',
      description: 'Demonstrate custom children content (highest priority)',
      table: {
        category: 'Story controls'
      }
    },
    useRenderItem: {
      control: 'boolean',
      description: 'Demonstrate custom renderItem for AddSelectItem data',
      table: {
        category: 'Story controls'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const qe=["AddSelectBody","AddSelectColumn","AddSelectRow","AddSelectSelectionSummary","AddSelectSelectionSummaryItem","AddSelectItemPanel"];export{f as AddSelectBody,y as AddSelectColumn,C as AddSelectItemPanel,w as AddSelectRow,I as AddSelectSelectionSummary,A as AddSelectSelectionSummaryItem,qe as __namedExportsOrder,Me as default};
//# sourceMappingURL=AddSelect.stories-BhX6ugQC.js.map
