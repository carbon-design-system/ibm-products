var E=Object.defineProperty;var s=(n,e)=>E(n,"name",{value:e,configurable:!0});import{u as T,j as t,r as d,R as o,B as N}from"./iframe-ClFYBNZh.js";import{D as R}from"./Dropdown-C-EqgeIH.js";import{T as D}from"./Tag-zJCMRUfq.js";import{T as L}from"./Toggle-nSZhSo09.js";import{A as i}from"./AddSelect-B9TNE6_x.js";import"./preload-helper-Cc2_yIPf.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-CXP9BsL8.js";import"./Text-C6XdxEq2.js";import"./bucket-20-D8sX7iXB.js";import"./index-tgAZXQBu.js";import"./index-Beu57O9h.js";import"./bucket-19-CucHOJ3h.js";import"./downshift.esm-BPMO5akI.js";import"./FormContext-yoh48WO7.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./DefinitionTooltip-CVHk_-iQ.js";import"./useControllableState-D8lkoBJZ.js";import"./BreadcrumbItem-iHv3Ai5s.js";import"./index-NXcoyEmE.js";import"./Link-_aMG5UC7.js";import"./bucket-13-NXJbbJTL.js";import"./Search-DawomRKR.js";import"./bucket-16-BrzprH3l.js";import"./Checkbox-omYaSXWw.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-clTtCXbC.js";import"./bucket-6-D62PGvFd.js";import"./AccordionItem-DbO-toAR.js";import"./bucket-17-DxPJxCfi.js";const O=".add-select-next-stories__viewport{inline-size:50%}.add-select-story-container{display:flex;flex-direction:column;padding:5rem 4rem;gap:2rem;inline-size:600px;max-inline-size:600px}.add-select-story-variant-container{display:flex;flex-direction:column;gap:.5rem}.add-select-story-variant-container h4{font-size:var(--cds-label-02-font-size, .875rem);font-weight:var(--cds-label-02-font-weight, 400);line-height:var(--cds-label-02-line-height, 1.28572);letter-spacing:var(--cds-label-02-letter-spacing, .16px);margin:0;color:var(--cds-text-secondary)}";function P(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...T(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"addselect",children:"AddSelect"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-hierarchy",children:"Component Hierarchy"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#subcomponents--usage",children:"Subcomponents & Usage"})}),`
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
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderTitle"}),` (function, optional) - Custom title renderer (only works with
useAccordion mode)`,`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Signature: ",t.jsx(e.code,{children:"(item: AddSelectItem) => ReactNode"})]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"renderContent"}),` (function, optional) - Custom content renderer (only works
with useAccordion mode)`,`
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
`]})]})}s(P,"_createMdxContent");function F(n={}){const{wrapper:e}={...T(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(P,{...n})}):P(n)}s(F,"MDXContent");const W="add-select-next-stories",k=[{id:"all",text:"All items"},{id:"folder",text:"Folders"},{id:"file",text:"Files"}],x=[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",itemDetails:o.createElement("div",null,o.createElement("p",{style:{fontWeight:600}},"HTML support"),o.createElement("p",null,"Also supports nodes in the itemDetails attribute"))},{id:"2",value:"2",title:"item 2",itemDetails:[{id:"description",title:"Description",value:"Description text for item 2"},{id:"secondary_category",title:"Secondary category",value:"Knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}],v=x.slice(1,4),H=s(({children:n})=>o.createElement("div",{style:{border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},n),"PlaceholderShell"),q=s(()=>o.createElement("div",{style:{display:"grid",gap:"0.25rem"}},x.slice(0,3).map(n=>o.createElement("div",{key:n.id,style:{padding:"0.25rem",background:"var(--cds-layer-accent)"}},o.createElement("p",{style:{margin:0}},"AddSelect.Row")))),"PlaceholderRows"),Ce={title:"Preview/Add and select",component:i,tags:["autodocs"],decorators:[n=>o.createElement("div",{className:`${W}__viewport`},n())],subcomponents:{"AddSelect.Body":i.Body,"AddSelect.Content":i.Content,"AddSelect.Column":i.Column,"AddSelect.Row":i.Row,"AddSelect.SelectionSummary":i.SelectionSummary,"AddSelect.SelectionSummaryItem":i.SelectionSummaryItem,"AddSelect.ItemPanel":i.ItemPanel},parameters:{styles:O,docs:{page:F}}},z=s(n=>{const[e,a]=d.useState(""),[c,h]=d.useState("all"),u=d.useMemo(()=>x.filter(r=>{const A=r.title?.toLowerCase().includes(e.toLowerCase()),C=c==="all"||r.type===c;return A&&C}),[e,c]),p=n.showActionsSlot?o.createElement(R,{id:"add-select-body-filter",titleText:"",label:"Filter items",items:k,itemToString:s(r=>r?r.text:"","itemToString"),onChange:s(({selectedItem:r})=>h(r?.id||"all"),"onChange"),size:"lg"}):void 0,m=n.showSubHeaderActions?o.createElement(L,{id:"body-subheader-toggle",labelA:"Off",labelB:"On",labelText:"Placeholder action",size:"sm"}):void 0;return o.createElement(i,{selectedItems:new Set,onItemSelect:s(()=>{},"onItemSelect")},o.createElement(H,null,o.createElement(i.Body,{itemsLabel:n.itemsLabel,globalSearchLabel:n.globalSearchLabel,globalSearchPlaceholder:n.globalSearchPlaceholder,searchResultsTitle:n.searchResultsTitle,itemCount:u.length,path:n.showPath?n.path:[],onSearch:a,onBreadcrumbClick:s(()=>{},"onBreadcrumbClick"),actionsSlot:p,subHeaderActions:m},o.createElement(q,null))))},"AddSelectBodyStory"),g={name:"AddSelect.Body",render:z,args:{itemsLabel:"All items",globalSearchLabel:"Search items",globalSearchPlaceholder:"Search by name",searchResultsTitle:"Search results",itemCount:3,showActionsSlot:!0,showSubHeaderActions:!1,showPath:!0,path:[{id:"root",title:"Category"},{id:"folders",title:"Folders"},{id:"files",title:"Files"}]},argTypes:{itemsLabel:{control:"text",description:"Label shown when breadcrumbs are not used"},globalSearchLabel:{control:"text",description:"Accessible label for the global search input"},globalSearchPlaceholder:{control:"text",description:"Placeholder text for the global search input"},searchResultsTitle:{control:"text",description:"Title shown when search returns filtered results"},itemCount:{control:"number",description:"Item count for display in tag badge"},showActionsSlot:{control:"boolean",description:"Toggle example content for the actionsSlot prop",table:{category:"Story controls"}},showSubHeaderActions:{control:"boolean",description:"Toggle example content for the subHeaderActions prop",table:{category:"Story controls"}},showPath:{control:"boolean",description:"Toggle breadcrumb path usage",table:{category:"Story controls"}},path:{control:"object",description:"Breadcrumb entries used for hierarchical navigation. Array of objects with id and title properties."},children:{control:!1,description:"Child components (typically AddSelect.Content)",table:{disable:!0}},headerContent:{control:!1,description:"Custom header content (slot) - replaces entire header",table:{disable:!0}},actionsSlot:{control:!1,description:"Actions slot - adds custom actions (filter/sort) next to default search",table:{disable:!0}},subHeaderActions:{control:!1,description:"Sub-header actions - custom content/actions rendered after breadcrumbs and item count",table:{disable:!0}},onSearch:{control:!1,description:"Callback when search term changes. Signature: (searchTerm: string) => void",table:{disable:!0}},onBreadcrumbClick:{control:!1,description:"Callback when breadcrumb is clicked. Signature: (index: number) => void",table:{disable:!0}},searchProps:{control:!1,description:"Additional props to pass to the Search component",table:{disable:!0}},tagProps:{control:!1,description:"Additional props to pass to the Tag component (for item count)",table:{disable:!0}},breadcrumbProps:{control:!1,description:"Additional props to pass to the Breadcrumb component",table:{disable:!0}},breadcrumbItemProps:{control:!1,description:"Additional props to pass to BreadcrumbItem components",table:{disable:!0}},linkProps:{control:!1,description:"Additional props to pass to Link components in breadcrumbs",table:{disable:!0}},className:{control:"text",description:"Optional CSS class name",table:{disable:!0}}}},U=s(n=>{const[e,a]=d.useState(""),[c,h]=d.useState("all"),[u,p]=d.useState(new Set(["1","4"])),m=d.useMemo(()=>x.filter(l=>{const b=l.title?.toLowerCase().includes(e.toLowerCase()),S=c==="all"||l.type===c;return b&&S}),[e,c]),r=s((l,b)=>{const S=n.multi?new Set(u):new Set;b?S.add(l):S.delete(l),p(S)},"handleItemSelect"),A=s(l=>{p(l?new Set(m.map(b=>b.id)):new Set)},"handleSelectAll"),C=m.length>0&&m.every(l=>u.has(l.id)),B=n.showActionsSlot?o.createElement(R,{id:"add-select-column-filter",titleText:"",label:"Filter items",items:k,itemToString:s(l=>l?l.text:"","itemToString"),onChange:s(({selectedItem:l})=>h(l?.id||"all"),"onChange"),size:"md"}):void 0;return o.createElement(i,{selectedItems:u,onItemSelect:r},o.createElement("div",{style:{width:"360px",border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},o.createElement(i.Content,null,o.createElement(i.Column,{title:n.title,searchLabel:n.searchLabel,searchPlaceholder:n.searchPlaceholder,onSearch:a,hideSearch:!n.showSearch,actionsSlot:B,multi:n.multi,showSelectAll:n.showSelectAll,itemCount:m.length,allSelected:C,onSelectAll:A,onNavigate:n.enableNavigation?()=>{}:void 0},m.map(l=>o.createElement(i.Row,{key:l.id,itemId:l.id,title:l.title||"",subtitle:l.subtitle,value:l.value||"",hasChildren:n.enableNavigation&&l.id==="1"}))))))},"AddSelectColumnStory"),j={name:"AddSelect.Column",render:U,args:{title:"Available items",searchLabel:"Search within column",searchPlaceholder:"Search items",showSearch:!0,showActionsSlot:!1,multi:!0,showSelectAll:!0,enableNavigation:!1},argTypes:{title:{control:"text",description:"Header title for the column"},searchLabel:{control:"text",description:"Accessible label for the column search input"},searchPlaceholder:{control:"text",description:"Placeholder text for the column search input"},showSearch:{control:"boolean",description:"Toggle the hideSearch behavior",table:{category:"Story controls"}},showActionsSlot:{control:"boolean",description:"Toggle example content for the actionsSlot prop",table:{category:"Story controls"}},multi:{control:"boolean",description:"Switch between checkbox and radio row selection"},showSelectAll:{control:"boolean",description:"Show the Select all checkbox when multi is enabled"},enableNavigation:{control:"boolean",description:"Show how the column can pass navigation callbacks to rows",table:{category:"Story controls"}},children:{table:{disable:!0}},onSearch:{table:{disable:!0}},actionsSlot:{table:{disable:!0}},hideSearch:{table:{disable:!0}},itemCount:{table:{disable:!0}},allSelected:{table:{disable:!0}},onSelectAll:{table:{disable:!0}},onNavigate:{table:{disable:!0}},className:{table:{disable:!0}},searchProps:{table:{disable:!0}},tagProps:{table:{disable:!0}},selectAllCheckboxProps:{table:{disable:!0}}}},M=s(n=>{const[e,a]=d.useState(n.selected?new Set(["1"]):new Set),[c,h]=d.useState(n.itemPanelOpen),u=s((p,m)=>{const r=n.multi?new Set(e):new Set;m?r.add(p):r.delete(p),a(r)},"handleItemSelect");return o.createElement(i,{selectedItems:e,onItemSelect:u},o.createElement(i.Content,null,o.createElement(i.Row,{itemId:"1",title:"folder 1",subtitle:n.showSubtitle?"3 files":void 0,value:"folder 1",selected:n.selected,disabled:n.disabled,hasChildren:n.hasChildren,hasItemPanel:n.hasItemPanel,onItemPanelClick:s(()=>h(!0),"onItemPanelClick"),itemPanelOpen:n.hasItemPanel&&c},n.showTag?o.createElement(D,{type:"blue",size:"sm"},"Folder"):null)))},"AddSelectRowStory"),f={name:"AddSelect.Row",render:M,args:{multi:!0,selected:!0,showSubtitle:!0,showTag:!0,hasChildren:!1,hasItemPanel:!1,itemPanelOpen:!1,disabled:!1},argTypes:{multi:{control:"boolean",description:"Toggle row rendering between checkbox and radio button mode",table:{category:"Story controls"}},showSubtitle:{control:"boolean",description:"Demonstrate the optional subtitle prop",table:{category:"Story controls"}},showTag:{control:"boolean",description:"Render custom row children content",table:{category:"Story controls"}},hasChildren:{control:"boolean",description:"Show the navigation indicator for hierarchical lists"},hasItemPanel:{control:"boolean",description:"Show the item details icon button"},disabled:{control:"boolean",description:"Disable the example row"},itemId:{control:"text",description:"Unique identifier for the item (required)",table:{disable:!0}},title:{control:"text",description:"Item title (required)",table:{disable:!0}},subtitle:{control:"text",description:"Item subtitle (optional)",table:{disable:!0}},value:{control:"text",description:"Item value (required)",table:{disable:!0}},selected:{control:"boolean",description:"Set the row selection state",table:{category:"Story controls"}},parentId:{control:"text",description:"Parent ID for hierarchical navigation",table:{disable:!0}},icon:{control:!1,description:"Optional icon slot (ReactNode)",table:{disable:!0}},children:{control:!1,description:"Custom content to render after the title/subtitle section (badges, tags, metadata)",table:{disable:!0}},onItemPanelClick:{control:!1,description:"Callback when item panel view icon is clicked. Signature: (itemId: string) => void",table:{disable:!0}},itemPanelIconDescription:{control:"text",description:"Description for the item panel icon button",table:{disable:!0}},itemPanelOpen:{control:"boolean",description:"Whether the item panel is currently open for this item",table:{category:"Story controls"}},className:{table:{disable:!0}},checkboxProps:{table:{disable:!0}},radioButtonProps:{table:{disable:!0}},itemPanelIconButtonProps:{table:{disable:!0}}}},_=s(n=>{const e=v;return o.createElement("div",{style:{width:"256px",border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},o.createElement(i.SelectionSummary,{title:n.title,selectedItems:e,showCount:n.showCount,showEditIcon:n.showEditIcon,onEdit:n.showEditIcon?()=>{}:void 0,emptyState:n.showEmptyState?o.createElement("p",null,"No selected items"):void 0,headerActions:n.showHeaderActions?o.createElement(N,{kind:"ghost",size:"sm"},"Placeholder action"):void 0}))},"AddSelectSelectionSummaryStory"),y={name:"AddSelect.SelectionSummary",render:_,args:{title:"Selected items",showCount:!0,showEditIcon:!0,showHeaderActions:!1,showEmptyState:!1},argTypes:{title:{control:"text",description:"Heading displayed above the selection summary list"},showCount:{control:"boolean",description:"Display a count badge for selected items"},showEditIcon:{control:"boolean",description:"Show the edit icon button when onEdit is provided"},showHeaderActions:{control:"boolean",description:"Toggle example content for the headerActions prop",table:{category:"Story controls"}},showEmptyState:{control:"boolean",description:"Show the emptyState slot usage",table:{category:"Story controls"}},selectedItems:{control:!1,description:"Array of selected items (AddSelectItem[])",table:{disable:!0}},children:{control:!1,description:"Custom content or SelectionSummaryItem components",table:{disable:!0}},emptyState:{control:!1,description:"Custom empty state component",table:{disable:!0}},onEdit:{control:!1,description:"Edit icon click handler. Signature: () => void",table:{disable:!0}},editIconDescription:{control:"text",description:"Edit icon aria-label",table:{disable:!0}},className:{control:"text",description:"Optional CSS class name",table:{disable:!0}},renderItem:{control:!1,description:"Custom item renderer. Signature: (item: AddSelectItem) => ReactNode",table:{disable:!0}},headerContent:{control:!1,description:"Custom header content (slot) - replaces entire header section",table:{disable:!0}},headerActions:{control:!1,description:"Header actions slot - adds custom actions alongside the edit icon",table:{disable:!0}},tagProps:{control:!1,description:"Additional props to pass to the Tag component",table:{disable:!0}},editIconButtonProps:{control:!1,description:"Additional props to pass to the edit IconButton",table:{disable:!0}}}},G=s(n=>{const[e,a]=d.useState(!0),c={...v[0],subtitle:n.showSubtitle?v[0].subtitle:void 0};return o.createElement("div",{style:{width:"256px",display:"grid",gap:"0.75rem",border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},e?o.createElement(i.SelectionSummaryItem,{item:c,useAccordion:n.useAccordion,onRemove:n.showRemoveButton?()=>a(!1):void 0,removeButtonLabel:n.removeButtonLabel,renderTitle:n.useCustomTitle?h=>o.createElement("div",null,o.createElement("p",{style:{margin:0,fontWeight:600}},h.title),o.createElement("p",{style:{margin:"0.25rem 0 0"}},"Custom title renderer")):void 0,renderContent:n.useCustomContent?h=>o.createElement("div",null,o.createElement("p",{style:{margin:0}},"Custom content for ",h.title)):void 0}):o.createElement("p",{style:{margin:0}},"Item removed in story preview."))},"AddSelectSelectionSummaryItemStory"),w={name:"AddSelect.SelectionSummaryItem",render:G,args:{useAccordion:!1,showSubtitle:!0,showRemoveButton:!0,removeButtonLabel:"Remove item",useCustomTitle:!1,useCustomContent:!1},argTypes:{useAccordion:{control:"boolean",description:"Render the item with Carbon Accordion markup"},showSubtitle:{control:"boolean",description:"Toggle the item subtitle content",table:{category:"Story controls"}},showRemoveButton:{control:"boolean",description:"Toggle the remove action button",table:{category:"Story controls"}},removeButtonLabel:{control:"text",description:"Accessible label for the remove icon button"},useCustomTitle:{control:"boolean",description:"Demonstrate renderTitle in accordion mode",table:{category:"Story controls"}},useCustomContent:{control:"boolean",description:"Demonstrate renderContent in accordion mode",table:{category:"Story controls"}},item:{table:{disable:!0}},renderTitle:{table:{disable:!0}},renderContent:{table:{disable:!0}},renderTemplate:{table:{disable:!0}},onRemove:{table:{disable:!0}},className:{table:{disable:!0}},accordionProps:{table:{disable:!0}},accordionItemProps:{table:{disable:!0}},removeIconButtonProps:{table:{disable:!0}}}},K=s(n=>{const e=x[0];return o.createElement("div",{style:{width:"256px",border:"1px dashed var(--cds-border-subtle)",padding:"1rem",background:"var(--cds-layer)"}},o.createElement(i.ItemPanel,{title:n.title,item:n.useArrayData?[{id:"title",title:"Title",value:e.title||""},{id:"subtitle",title:"Subtitle",value:e.subtitle||""},{id:"region",title:"Region",value:e.region||""}]:e,onClose:n.showCloseButton?()=>{}:void 0,closeIconDescription:n.closeIconDescription,renderContent:n.useCustomRender?a=>o.createElement("div",null,o.createElement("p",{style:{margin:0,fontWeight:600}},a.title),o.createElement("p",{style:{margin:"0.25rem 0 0"}},"Custom rendered details for ",a.value)):void 0}))},"AddSelectItemPanelStory"),I={name:"AddSelect.ItemPanel",render:K,args:{title:"Item details",showCloseButton:!0,closeIconDescription:"Close item details",useArrayData:!1,useCustomRender:!1},argTypes:{title:{control:"text",description:"Panel title"},item:{control:!1,description:"Item data, array of entries, or custom content (AddSelectItem | ItemDetailEntry[] | ReactNode)",table:{disable:!0}},onClose:{control:!1,description:"Close button handler. Signature: () => void",table:{disable:!0}},closeIconDescription:{control:"text",description:"Close button aria-label"},children:{control:!1,description:"Custom content (alternative to item prop)",table:{disable:!0}},renderContent:{control:!1,description:"Custom content renderer. Signature: (item: AddSelectItem) => ReactNode",table:{disable:!0}},showCloseButton:{control:"boolean",description:"Toggle the close button by passing onClose",table:{category:"Story controls"}},useArrayData:{control:"boolean",description:"Use ItemDetailEntry[] as the item prop",table:{category:"Story controls"}},useCustomRender:{control:"boolean",description:"Demonstrate custom content rendering for AddSelectItem data",table:{category:"Story controls"}},className:{control:"text",description:"Optional CSS class name",table:{disable:!0}},closeIconButtonProps:{control:!1,description:"Additional props to pass to the close IconButton",table:{disable:!0}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.Body',
  render: AddSelectBodyStory,
  args: {
    itemsLabel: 'All items',
    globalSearchLabel: 'Search items',
    globalSearchPlaceholder: 'Search by name',
    searchResultsTitle: 'Search results',
    itemCount: 3,
    showActionsSlot: true,
    showSubHeaderActions: false,
    showPath: true,
    path: [{
      id: 'root',
      title: 'Category'
    }, {
      id: 'folders',
      title: 'Folders'
    }, {
      id: 'files',
      title: 'Files'
    }]
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
      control: 'number',
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
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.Row',
  render: AddSelectRowStory,
  args: {
    multi: true,
    selected: true,
    showSubtitle: true,
    showTag: true,
    hasChildren: false,
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
    parentId: {
      control: 'text',
      description: 'Parent ID for hierarchical navigation',
      table: {
        disable: true
      }
    },
    icon: {
      control: false,
      description: 'Optional icon slot (ReactNode)',
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
      table: {
        disable: true
      }
    },
    checkboxProps: {
      table: {
        disable: true
      }
    },
    radioButtonProps: {
      table: {
        disable: true
      }
    },
    itemPanelIconButtonProps: {
      table: {
        disable: true
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.SelectionSummary',
  render: AddSelectSelectionSummaryStory,
  args: {
    title: 'Selected items',
    showCount: true,
    showEditIcon: true,
    showHeaderActions: false,
    showEmptyState: false
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
      description: 'Array of selected items (AddSelectItem[])',
      table: {
        disable: true
      }
    },
    children: {
      control: false,
      description: 'Custom content or SelectionSummaryItem components',
      table: {
        disable: true
      }
    },
    emptyState: {
      control: false,
      description: 'Custom empty state component',
      table: {
        disable: true
      }
    },
    onEdit: {
      control: false,
      description: 'Edit icon click handler. Signature: () => void',
      table: {
        disable: true
      }
    },
    editIconDescription: {
      control: 'text',
      description: 'Edit icon aria-label',
      table: {
        disable: true
      }
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: {
        disable: true
      }
    },
    renderItem: {
      control: false,
      description: 'Custom item renderer. Signature: (item: AddSelectItem) => ReactNode',
      table: {
        disable: true
      }
    },
    headerContent: {
      control: false,
      description: 'Custom header content (slot) - replaces entire header section',
      table: {
        disable: true
      }
    },
    headerActions: {
      control: false,
      description: 'Header actions slot - adds custom actions alongside the edit icon',
      table: {
        disable: true
      }
    },
    tagProps: {
      control: false,
      description: 'Additional props to pass to the Tag component',
      table: {
        disable: true
      }
    },
    editIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the edit IconButton',
      table: {
        disable: true
      }
    }
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.SelectionSummaryItem',
  render: AddSelectSelectionSummaryItemStory,
  args: {
    useAccordion: false,
    showSubtitle: true,
    showRemoveButton: true,
    removeButtonLabel: 'Remove item',
    useCustomTitle: false,
    useCustomContent: false
  },
  argTypes: {
    useAccordion: {
      control: 'boolean',
      description: 'Render the item with Carbon Accordion markup'
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Toggle the item subtitle content',
      table: {
        category: 'Story controls'
      }
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
      description: 'Demonstrate renderTitle in accordion mode',
      table: {
        category: 'Story controls'
      }
    },
    useCustomContent: {
      control: 'boolean',
      description: 'Demonstrate renderContent in accordion mode',
      table: {
        category: 'Story controls'
      }
    },
    item: {
      table: {
        disable: true
      }
    },
    renderTitle: {
      table: {
        disable: true
      }
    },
    renderContent: {
      table: {
        disable: true
      }
    },
    renderTemplate: {
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
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'AddSelect.ItemPanel',
  render: AddSelectItemPanelStory,
  args: {
    title: 'Item details',
    showCloseButton: true,
    closeIconDescription: 'Close item details',
    useArrayData: false,
    useCustomRender: false
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title'
    },
    item: {
      control: false,
      description: 'Item data, array of entries, or custom content (AddSelectItem | ItemDetailEntry[] | ReactNode)',
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
    children: {
      control: false,
      description: 'Custom content (alternative to item prop)',
      table: {
        disable: true
      }
    },
    renderContent: {
      control: false,
      description: 'Custom content renderer. Signature: (item: AddSelectItem) => ReactNode',
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
    useArrayData: {
      control: 'boolean',
      description: 'Use ItemDetailEntry[] as the item prop',
      table: {
        category: 'Story controls'
      }
    },
    useCustomRender: {
      control: 'boolean',
      description: 'Demonstrate custom content rendering for AddSelectItem data',
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
    closeIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the close IconButton',
      table: {
        disable: true
      }
    }
  }
}`,...I.parameters?.docs?.source}}};const ve=["AddSelectBody","AddSelectColumn","AddSelectRow","AddSelectSelectionSummary","AddSelectSelectionSummaryItem","AddSelectItemPanel"];export{g as AddSelectBody,j as AddSelectColumn,I as AddSelectItemPanel,f as AddSelectRow,y as AddSelectSelectionSummary,w as AddSelectSelectionSummaryItem,ve as __namedExportsOrder,Ce as default};
//# sourceMappingURL=AddSelect.stories-D-dU0FEF.js.map
