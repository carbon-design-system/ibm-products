# Add Select Web Components

This directory contains web component equivalents for the React AddSelect
pattern.

## Components

### c4p-add-select

The main wrapper component that manages the overall add select functionality.

**Properties:**

- `open` (Boolean) - Whether the add select is open
- `title` (String) - The title of the add select
- `description` (String) - The description text
- `multi` (Boolean) - Whether this is a multi-select
- `items-label` (String) - Label for items section
- `global-search-label` (String) - Global search label
- `close-button-text` (String) - Close button text (default: "Cancel")
- `submit-button-text` (String) - Submit button text (default: "Add")
- `no-results-title` (String) - No results title
- `no-results-description` (String) - No results description

**Events:**

- `c4p-add-select-close` - Fired when the add select is closed
- `c4p-add-select-submit` - Fired when the add select is submitted with
  selection

**Slots:**

- `default` - The main content area containing c4p-add-select-body

---

### c4p-add-select-body

The container/body component that contains the main content area including
search, list, and actions.

**Properties:**

- `title` (String) - The title of the add select
- `description` (String) - The description text
- `multi` (Boolean) - Whether this is a multi-select
- `items-label` (String) - Label for items section
- `global-search-label` (String) - Global search label
- `global-search-placeholder` (String) - Global search placeholder (default:
  "Search")
- `close-button-text` (String) - Close button text (default: "Cancel")
- `submit-button-text` (String) - Submit button text (default: "Add")
- `no-results-title` (String) - No results title
- `no-results-description` (String) - No results description
- `search-results-title` (String) - Search results title
- `item-count` (Number) - Item count for display

**Events:**

- `c4p-add-select-body-close` - Fired when close is requested
- `c4p-add-select-body-submit` - Fired when submit is requested
- `c4p-add-select-body-search` - Fired when search term changes

**Slots:**

- `default` - The main content area containing c4p-add-select-list
- `header` - Custom header content
- `footer` - Custom footer content

---

### c4p-add-select-list

The list component that contains selectable items.

**Properties:**

- `multi` (Boolean) - Whether this is a multi-select list

**Events:**

- `c4p-add-select-list-change` - Fired when selection changes

**Slots:**

- `default` - Contains c4p-add-select-item components

---

### c4p-add-select-item

A single selectable item component.

**Properties:**

- `item-id` (String) - Unique identifier for the item
- `title` (String) - Item title
- `subtitle` (String) - Item subtitle
- `value` (String) - Item value
- `multi` (Boolean) - Whether this is part of a multi-select list
- `selected` (Boolean) - Whether the item is selected
- `disabled` (Boolean) - Whether the item is disabled
- `tab-index` (Number) - Tab index for keyboard navigation (default: -1)
- `has-children` (Boolean) - Whether the item has children (for navigation)

**Events:**

- `c4p-add-select-item-select` - Fired when item is selected/deselected

**Slots:**

- `default` - The main content of the item (title, subtitle, etc.)
- `icon` - Optional icon slot
- `meta` - Optional metadata slot
- `nav-icon` - Navigation icon for items with children

---

## Usage Example

```html
<c4p-add-select
  open
  title="Add items"
  description="Select items to add"
  multi
  items-label="Available items"
  global-search-label="Search items"
>
  <c4p-add-select-body>
    <c4p-add-select-list multi>
      <c4p-add-select-item
        item-id="item-1"
        title="Item 1"
        subtitle="Description for item 1"
        value="item-1"
      ></c4p-add-select-item>
      <c4p-add-select-item
        item-id="item-2"
        title="Item 2"
        subtitle="Description for item 2"
        value="item-2"
      ></c4p-add-select-item>
    </c4p-add-select-list>
  </c4p-add-select-body>
</c4p-add-select>
```

## Architecture

These components are designed to work together in a hierarchical structure:

```
c4p-add-select (wrapper)
  └── c4p-add-select-body (container)
      └── c4p-add-select-list (list container)
          └── c4p-add-select-item (individual items)
```

Each component handles its own state and communicates with parent components
through custom events, following the web components best practices.

## Notes

- All components use LitElement as the base class
- Styling follows Carbon Design System patterns
- Components support both single and multi-select modes
- Keyboard navigation is supported for accessibility
- Events bubble up through the component hierarchy
